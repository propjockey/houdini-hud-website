import sheet, { mount } from "./node_modules/corset/lib/main.js"
import properties from "./properties.js"

mount(document.documentElement, class {
  properties = properties

  regionNames = {
    tl: "Top-Left",
    t: "Top",
    tr: "Top-Right",
    r: "Right",
    br: "Bottom-Right",
    b: "Bottom",
    bl: "Bottom-Left",
    l: "Left"
  }

  selectedProperty = window.location.hash.replace("#", "") || "--hud-tl1"

  constructor () {
    setTimeout(() => {
      const el = document.getElementById(this.selectedProperty)
      el && el.scrollIntoView()
    })
  }

  bind () {
    const { properties, regionNames, selectedProperty } = this

    return sheet`
      body {
        --eq: ${(a, b) => a === b};
        --concat: ${(...args) => args.join('')};
        --prop-description: ${(template, propName, syntax, initialValue, syntaxLink) => {
          let output = template + ""
          propName.replace(/.*?-(tl|tr|br|bl|t|r|b|l)([1,2]?)[-$]?.*/, (_, region, position) => {
            output = output
              .replace(/@region-name/g, regionNames[region])
              .replace(/@region/g, region)
              .replace(/@position/g, region + position)
              .replace(/@edge-wh/g, {t: "width", b: "width", r: "height", l: "width"}[region])
              .replace(/@first-second/g, (position - 1) ? "second" : "first")
              .replace(/@(--[a-z0-9-_]+)/gi, "<a href='#$1'>$1</a>")
              .replace(/`(.*?)`/g, "<code>$1</code>")
          })
          
          const escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#039;"
          }

          let syntaxStr = syntax.replace(/([&<>"'])/g, (_, char) => escapeMap[char])
          if (syntaxLink) {
            syntaxStr = `<a href="${syntaxLink}">${syntaxStr}</a>`
          }

          return `
            <b>Syntax:</b> ${syntaxStr}<br>
            <b>Default:</b> ${initialValue}<br>
            <span class="details">${output}</span>
          `
        }};
        --set-selected: ${({ target }) => {
          this.selectedProperty = (target.value || target.id)
          target.value && (window.location.hash = "#" + target.value)
        }};
      }
      .properties-dropdown {
        each-items: ${properties};
        each-template: select(#properties-groups);
        each-key: group;
        event-listener: change var(--set-selected);
        event-passive: change true;
      }
      .properties-dropdown optgroup {
        --group: item();
        --title: get(var(--group), group);
        --properties: get(var(--group), properties);
        attr: label var(--title);
        each-items: var(--properties);
        each-template: select(#properties-item);
        each-key: name;
      }
      .properties-dropdown optgroup option {
        --prop: item();
        --name: get(var(--prop), name);
        attr: value var(--name);
        attr-toggle: selected --eq(var(--name), ${selectedProperty});
        text: var(--name);
      }

      .all-properties .articles {
        each-items: ${properties};
        each-template: select(#group-section);
        each-key: group;
      }
      .all-properties .group-item {
        --group: item();
        --title: get(var(--group), group);
        --description: get(var(--group), description);
        --properties: get(var(--group), properties);
      }
      .all-properties .articles header h2 {
        text: var(--title);
      }
      .all-properties .articles header p {
        text: var(--description);
      }
      .all-properties .group-item > ul {
        each-items: var(--properties);
        each-template: select(#property-li-article);
        each-key: name;
      }
      .all-properties li {
        --prop: item();
        --description: get(var(--prop), description);
        --name: get(var(--prop), name);
        class-toggle: selected --eq(var(--name), ${selectedProperty});
      }
      .all-properties li article h3 {
        text: var(--name);
      }
      .all-properties li article p {
        --syntax: get(var(--prop), syntax);
        --syntax-link: get(var(--prop), syntaxLink);
        --initial-value: get(var(--prop), initialValue);
        prop: innerHTML --prop-description(var(--description), var(--name), var(--syntax), var(--initial-value), var(--syntax-link));
      }
      .all-properties li > .article-anchor {
        attr: aria-label --concat("View demo for the ", var(--name), " property.");
        attr: id var(--name);
        attr: href --concat("#", var(--name));
        event-listener: click var(--set-selected);
        event-passive: click true;
        text: "View Demo >>>";
      }
    `
  }
})
