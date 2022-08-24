import sheet, { mount } from "./modules/corset/lib/main.js"
import properties from "./properties.js"

mount(document.documentElement, class {
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

  properties = properties.map(g => {
    const group = Object.assign({}, g)
    group.properties = g.properties.map(p => {
      const propWithMeta = Object.assign({}, p)
      p.name.replace(/.*?-(tl|tr|br|bl|t|r|b|l)([1,2]?)[-$]?.*/, (_, region, position) => {
        Object.assign(propWithMeta, {
          region,
          regionName: this.regionNames[region],
          edge: region.length == 1,
          corner: region.length == 2,
          position: region + position,
          pnum: parseInt(position) || 0
        })
      })
      return propWithMeta
    })
    return group
  })

  selectedProperty = window.location.hash.replace("#", "") || "--hud-tl1"

  get selectedGroup () {
    const pname = this.selectedProperty
    const groups = this.properties
    let g, p
    for (g = 0; g < groups.length; g++) {
      const group = groups[g]
      const props = group.properties
      for (p = 0; p < props.length; p++) {
        if (pname === props[p].name) {
          return group
        }
      }
    }
    return groups[0]
  }

  get selectedPropertyObj () {
    const pname = this.selectedProperty
    const group = this.selectedGroup
    const props = group.properties
    for (let p = 0; p < props.length; p++) {
      if (pname === props[p].name) {
        return props[p]
      }
    }
    return props[0]
  }

  selectedAug = "scoop"

  get augStyle () {
    const { name, pnum, edge } = this.selectedPropertyObj
    let style = name + ": " + this.selectedAug
    if (pnum === 1) {
      style = `${style}; ${name.replace("1", "2")}: ${edge ? "clip" : "none"};`
    }
    return style
  }

  consultingPopoverVisible = false

  constructor (props, { rebind }) {
    this.rebind = rebind
    const scrollToHash = () => {
      const el = document.getElementById(this.selectedProperty)
      el && el.scrollIntoView()
    }
    window.addEventListener("hashchange", () => {
      const newHash = window.location.hash.replace("#", "") || "--hud-tl1"
      if (this.selectedProperty !== newHash) {
        this.selectedProperty = newHash
      }
      rebind()
      setTimeout(scrollToHash)
    })
    setTimeout(scrollToHash)
  }

  bind () {
    const { properties, regionNames, selectedProperty, selectedPropertyObj } = this

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
          if (syntaxStr) {
            syntaxStr = `<b>Syntax:</b> ${syntaxStr}<br>`
          }
          if (initialValue) {
            initialValue = `<b>Default:</b> ${initialValue}<br>`
          }

          return `
            ${syntaxStr}
            ${initialValue}
            <span class="details">${output}</span>
          `
        }};
        --set-selected: ${({ target }) => {
          this.selectedProperty = (target.value || target.id)
          target.value && (window.location.hash = "#" + target.value) // dropdown used
          if (this.selectedPropertyObj.syntax === "clip|scoop|round|rect|step|none") {
            this.selectedAug = "scoop"
            if (!this.value) { // link click
              setTimeout(() => document.querySelector("select.aug-demo").focus())
            }
          }
        }};
        --set-aug: ${({ target }) => {
          const aug = target.value || "scoop"
          this.selectedAug = aug
        }};
        --toggle-consulting-popover: ${() => {
          this.consultingPopoverVisible = !this.consultingPopoverVisible
        }};
        --hide-consulting-popover: ${() => {
          this.consultingPopoverVisible = false
        }};
        --dismiss-consulting-if-tabbing-away: ${ev => {
          if ((ev.keyCode === 9 || ev.key === 'Tab') && !ev.shiftKey) {
            this.consultingPopoverVisible = false
          }
        }};
      }

      #consulting-popover {
        attr: aria-expanded ${this.consultingPopoverVisible};
        event-listener: click var(--toggle-consulting-popover);
      }
      .dismiss-consulting-popover {
        event-listener: pointerenter var(--hide-consulting-popover);
      }
      .consulting .card a {
        event-listener: keydown var(--dismiss-consulting-if-tabbing-away);
        event-passive: keydown true;
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
        class-toggle: selected --eq(var(--group), ${this.selectedGroup});
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
      .all-properties .articles li {
        --prop: item();
        --description: get(var(--prop), description);
        --name: get(var(--prop), name);
        class-toggle: selected --eq(var(--name), ${selectedProperty});
      }
      .all-properties .articles li article h3 {
        text: var(--name);
      }
      .all-properties .articles li article p {
        --syntax: get(var(--prop), syntax);
        --syntax-link: get(var(--prop), syntaxLink);
        --initial-value: get(var(--prop), initialValue);
        prop: innerHTML --prop-description(var(--description), var(--name), var(--syntax), var(--initial-value), var(--syntax-link));
      }
      .all-properties .articles li > .article-anchor {
        attr: aria-label --concat("View demo for the ", var(--name), " property.");
        attr: id var(--name);
        attr: href --concat("#", var(--name));
        event-listener: click var(--set-selected);
        event-passive: click true;
        text: "View Demo >>>";
      }

      .demo-area {
        class-toggle: aug-demo ${selectedPropertyObj.syntax === "clip|scoop|round|rect|step|none"};
        class-toggle: ${"region-" + selectedPropertyObj.region} true;
        class-toggle: ${"pnum-" + selectedPropertyObj.pnum} true;
        class-toggle: corner-region ${selectedPropertyObj.corner};
        class-toggle: edge-region ${selectedPropertyObj.edge};
      }
      select.aug-demo {
        event-listener: change var(--set-aug);
        prop: selectedIndex ${["clip", "scoop", "round", "rect", "step", "none"].indexOf(this.selectedAug)};
      }
      .demo .aug-demo {
        attr: style ${this.augStyle};
      }
      .corset-pos1as2 {
        text: ${selectedProperty.replace("1", "2")};
      }
      .corset-pos2as1 {
        text: ${selectedProperty.replace("2", "1")};
      }
    `
  }
})
