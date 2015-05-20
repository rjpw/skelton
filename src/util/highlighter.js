(function() {

  function componentFromStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ? Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
  }

  var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/,
    hexRegex = /^#?([a-f\d]{6})$/,
    shortHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/;

  function Colour(r, g, b) {
    // Make a new Colour object even when Colour is not called with the new operator
    if (!(this instanceof Colour)) {
      return new Colour(r, g, b);
    }

    if (typeof g == "undefined") {
      // Parse the colour string
      var colStr = r.toLowerCase(), result;

      // Check for hex value first, the short hex value, then rgb value
      if ( (result = hexRegex.exec(colStr)) ) {
        var hexNum = parseInt(result[1], 16);
        r = hexNum >> 16;
        g = (hexNum & 0xff00) >> 8;
        b = hexNum & 0xff;
      } else if ( (result = shortHexRegex.exec(colStr)) ) {
        r = parseInt(result[1] + result[1], 16);
        g = parseInt(result[2] + result[2], 16);
        b = parseInt(result[3] + result[3], 16);
      } else if ( (result = rgbRegex.exec(colStr)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);
      } else {
        throw new Error("Colour: Unable to parse colour string '" + colStr + "'");
      }
    }

    this.r = r;
    this.g = g;
    this.b = b;
  }

  Colour.prototype = {
    equals: function(colour) {
      return this.r == colour.r && this.g == colour.g && this.b == colour.b;
    }
  };

  function makeEditableAndHighlight(colour) {
    var range, sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
      range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
      sel.removeAllRanges();
      sel.addRange(range);
    }
    // Use HiliteColor since some browsers apply BackColor to the whole block
    if (!document.execCommand("HiliteColor", false, colour)) {
      document.execCommand("BackColor", false, colour);
    }
    document.designMode = "off";
  }

  function highlight(colour) {
    var range, sel;
    if (window.getSelection) {
      // IE9 and non-IE
      try {
        if (!document.execCommand("BackColor", false, colour)) {
          makeEditableAndHighlight(colour);
        }
      } catch (ex) {
        makeEditableAndHighlight(colour)
      }
    } else if (document.selection && document.selection.createRange) {
      // IE <= 8 case
      range = document.selection.createRange();
      range.execCommand("BackColor", false, colour);
    }
  }

  var getComputedStyleProperty;

  if (typeof window.getComputedStyle != "undefined") {
    getComputedStyleProperty = function(el, propName) {
      return window.getComputedStyle(el, null)[propName];
    };
  } else if (typeof document.documentElement.currentStyle != "undefined") {
    getComputedStyleProperty = function(el, propName) {
      return el.currentStyle[propName];
    };
  }

  function unhighlight(node, colour) {
    if (!(colour instanceof Colour)) {
      colour = new Colour(colour);
    }

    if (node.nodeType == 1) {
      var bg = node.style.backgroundColor;
      if (bg && colour.equals(new Colour(bg))) {
        node.style.backgroundColor = "";
      }
    }
    var child = node.firstChild;
    while (child) {
      unhighlight(child, colour);
      child = child.nextSibling;
    }
  }

}());

