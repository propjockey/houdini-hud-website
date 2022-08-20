const noteWarn = "<br>Note: currently does not support calc()s containing percentages but will soon (<a href='https://twitter.com/Jane0ri'>Follow me on twitter for updates!</a>)"
const descriptionTemplates = {
  equipAug: "Equip an aug to the @region-name (@region) region's @first-second position (@position). For example, `--hud-@position: scoop;` will create a scooped shape cut-out in the position at the corresponding @--hud-@position-size.",
  augSize: "Set the width and height of the aug equipped to the @region-name (@region) region's @first-second position (@position). @--hud-@position-width and @--hud-@position-height override this value if they are supplied." + noteWarn,
  augWidth: "Set the width of the aug equipped to the @region-name (@region) region's @first-second position (@position). If this value is not supplied, the width will be rendered to the value provided in @--hud-@position-size." + noteWarn,
  augHeight: "Set the height of the aug equipped to the @region-name (@region) region's @first-second position (@position). If this value is not supplied, the height will be rendered to the value provided in @--hud-@position-size." + noteWarn,
  edgeCenter: "Set the center of the @region-name (@region) region along the @edge-wh of the element. For example, `--hud-@region-center: 50%;` places the center of the entier @region-name region's @edge-wh at 50% of the element's @edge-wh without accounting for adjacent corner region sizes. If you want to shift the region relative to its current center point, use @--hud-@position-offset." + noteWarn,
  edgeOffsetTB: "Shift the entier @region-name (@region) region towards the left/right, away from its center point as determined by @--hud-@position-center. Negative values shift left, positive values shift right." + noteWarn,
  edgeOffsetRL: "Shift the entier @region-name (@region) region towards the bottom/top, away from its center point as determined by @--hud-@position-center. Negative values shift up, positive values shift down." + noteWarn
}

const syntaxLinks = {
  "bg": "https://developer.mozilla.org/en-US/docs/Web/CSS/background",
  "opacity": "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity#Values",
  "lp": "https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage"
}

export default [
  {
    "group": "Equipping Augs (Shape Cut-Outs)",
    "description": "Each of the 16 positions have 5 different augs to choose from.",
    "properties": [
      {
        "name": "--hud-tl1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-tl2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-t1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-t2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-tr1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-tr2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-r1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-r2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-br1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-br2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-b1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-b2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-bl1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-bl2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-l1",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      },
      {
        "name": "--hud-l2",
        "syntax": "clip|scoop|round|rect|step|none",
        "initialValue": "none",
        "description": descriptionTemplates.equipAug
      }
    ]
  },
  {
    "group": "Resizing Equipped Augs",
    "description": "Each of the 16 positions have a corresponding size property that sets the width and height of the rendered aug.",
    "properties": [
      {
        "name": "--hud-tl1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-tl2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-t1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-t2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-tr1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-tr2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-r1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-r2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-br1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-br2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-b1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-b2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-bl1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-bl2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-l1-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      },
      {
        "name": "--hud-l2-size",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.augSize
      }
    ]
  },
  {
    "group": "Equipped Aug Width",
    "description": "Each of the 16 positions have a corresponding width property that sets the width of the rendered aug. When not specified, it falls back to the position's size property.",
    "properties": [
      {
        "name": "--hud-tl1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-tl2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-t1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-t2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-tr1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-tr2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-r1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-r2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-br1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-br2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-b1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-b2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-bl1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-bl2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-l1-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      },
      {
        "name": "--hud-l2-width",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augWidth
      }
    ]
  },
  {
    "group": "Equipped Aug Height",
    "description": "Each of the 16 positions have a corresponding height property that sets the height of the rendered aug. When not specified, it falls back to the position's size property.",
    "properties": [
      {
        "name": "--hud-tl1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-tl2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-t1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-t2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-tr1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-tr2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-r1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-r2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-br1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-br2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-b1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-b2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-bl1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-bl2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-l1-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      },
      {
        "name": "--hud-l2-height",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.augHeight
      }
    ]
  },
  {
    "group": "Edge Region Positioning",
    "description": "The entire edge region can be shifted or placed anywhere along its axis. By default, the center point of an edge region is 50% between the end of the previous corner region and the beginning of the next corner region.",
    "properties": [
      {
        "name": "--hud-t-center",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.edgeCenter
      },
      {
        "name": "--hud-t-offset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.edgeOffsetTB
      },
      {
        "name": "--hud-r-center",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.edgeCenter
      },
      {
        "name": "--hud-r-offset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.edgeOffsetRL
      },
      {
        "name": "--hud-b-center",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.edgeCenter
      },
      {
        "name": "--hud-b-offset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.edgeOffsetTB
      },
      {
        "name": "--hud-l-center",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": descriptionTemplates.edgeCenter
      },
      {
        "name": "--hud-l-offset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": descriptionTemplates.edgeOffsetRL
      }
    ]
  },
  {
    "group": "Corner Region Inset Distances",
    "description": "The entire corner region can be inset a distance from its default position on the x and y axis. The edge regions along the inset axis will compensate for the difference between corners to enable super asymmetric possibilities.",
    "properties": [
      {
        "name": "--hud-tl-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": "Sets both @--hud-@region-inset-x and @--hud-@region-inset-y if they are not set themselves."
      },
      {
        "name": "--hud-tl-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entire Top-Left region, and the top exit point of the Left region, to the right. When this value is greater than @--hud-bl-inset-x, @--hud-l1-inset-x may appear to increase to compensate for the asymmetry so the right-most edge of the left region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-tl-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Top-Left region, and the left exit point of the Top region, towards the bottom. When this value is greater than @--hud-tr-inset-y, @--hud-t2-inset-y may appear to increase to compensate for the asymmetry so the bottom-most edge of the top region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-tr-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": "Sets both @--hud-@region-inset-x and @--hud-@region-inset-y if they are not set themselves."
      },
      {
        "name": "--hud-tr-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Top-Right region, and the top entrance point of the Right region, to the left. When this value is greater than @--hud-br-inset-x, @--hud-r2-inset-x may appear to increase to compensate for the asymmetry so the left-most edge of the right region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-tr-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Top-Right region, and the right exit point of the Top region, towards the bottom. When this value is greater than @--hud-tl-inset-y, @--hud-t1-inset-y may appear to increase to compensate for the asymmetry so the bottom-most edge of the top region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-br-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": "Sets both @--hud-@region-inset-x and @--hud-@region-inset-y if they are not set themselves."
      },
      {
        "name": "--hud-br-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Bottom-Right region, and the bottom exit point of the Right region, to the left. When this value is greater than @--hud-tr-inset-x, @--hud-r1-inset-x may appear to increase to compensate for the asymmetry so the left-most edge of the right region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-br-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Bottom-Right region, and the right entry point of the Bottom region, towards the top. When this value is greater than @--hud-bl-inset-y, @--hud-b2-inset-y may appear to increase to compensate for the asymetry so the bottom-most edge of the top region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-bl-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": "Sets both @--hud-@region-inset-x and @--hud-@region-inset-y if they are not set themselves."
      },
      {
        "name": "--hud-bl-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Bottom-Left region, and the bottom entry point of the Left region, to the right. When this value is greater than @--hud-tl-inset-x, @--hud-l2-inset-x may appear to increase to compensate for the asymmetry so the right-most edge of the left region stays aligned. ...this is easier to understand through an example than it is to describe."
      },
      {
        "name": "--hud-bl-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": "Pushes the entier Bottom-Left region, and the left exit point of the Bottom region, towards the top. When this value is greater than @--hud-br-inset-y, @--hud-b2-inset-y may appear to increase to compensate for the asymetry so the top-most edge of the bottom region stays aligned. ...this is easier to understand through an example than it is to describe."
      }
    ]
  },
  {
    "group": "Position Inset Distances",
    "description": "Each of the 16 positions can have an inset too. This specifies a distance for an additional line segment from the start and/or end of each position (before and after each aug itself).",
    "properties": [
      {
        "name": "--hud-tl1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-tl1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tl1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tl2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-tl2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tl2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tr1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-tr1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tr1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tr2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-tr2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-tr2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-br1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-br1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-br1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-br2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-br2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-br2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-bl1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-bl1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-bl1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-bl2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-bl2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-bl2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-t1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-t1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-t1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-t2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-t2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-t2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-r1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-r1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-r1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-r2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-r2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-r2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-b1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-b1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-b1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-b2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-b2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-b2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-l1-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-l1-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-l1-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-l2-inset",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-l2-inset-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-l2-inset-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      }
    ]
  },
  {
    "group": "Border Properties",
    "description": "Customize the appearance of the augmented border.",
    "properties": [
      {
        "name": "--hud-border-bg",
        "syntaxLink": syntaxLinks.bg,
        "syntax": "<background>",
        "initialValue": "currentColor",
        "description": true
      },
      {
        "name": "--hud-border-opacity",
        "syntaxLink": syntaxLinks.opacity,
        "syntax": "<alpha-value>",
        "initialValue": 1,
        "description": true
      },
      {
        "name": "--hud-border-all",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-border-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-border-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-border-top",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-border-right",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-border-bottom",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-border-left",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      }
    ]
  },
  {
    "group": "Inlay Properties",
    "description": "Customize the appearance of the augmented inlay. The inlay is a background for the augmented element whose shape is determined by the distance its inset from the border.",
    "properties": [
      {
        "name": "--hud-inlay-bg",
        "syntaxLink": syntaxLinks.bg,
        "syntax": "<background>",
        "initialValue": "rgb(128 128 128 / 0.5)",
        "description": true
      },
      {
        "name": "--hud-inlay-opacity",
        "syntaxLink": syntaxLinks.opacity,
        "syntax": "<alpha-value>",
        "initialValue": 1,
        "description": true
      },
      {
        "name": "--hud-inlay-all",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "0px",
        "description": true
      },
      {
        "name": "--hud-inlay-x",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-inlay-y",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-inlay-top",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-inlay-right",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-inlay-bottom",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      },
      {
        "name": "--hud-inlay-left",
        "syntaxLink": syntaxLinks.lp,
        "syntax": "<length-percentage>",
        "initialValue": "-90000px",
        "description": true
      }
    ]
  }
]
