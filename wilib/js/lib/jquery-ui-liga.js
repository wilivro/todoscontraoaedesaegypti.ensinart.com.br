/* jshint ignore:start */
var preset = {
  a: 0,
  b: 70
};
//var preset = {
//    a: 160,
//    b: 0
//};

// Modificações realizada ma linha 528
(function(e, t) {
  function n(t, n) {
    var i = t.nodeName.toLowerCase();
    if ("area" === i) {
      var s = t.parentNode,
        o = s.name,
        u;
      return !t.href || !o || s.nodeName.toLowerCase() !== "map" ? !1 : (u = e("img[usemap=#" + o + "]")[0], !!u && r(u))
    }
    return (/input|select|textarea|button|object/.test(i) ? !t.disabled : "a" == i ? t.href || n : n) && r(t)
  }

  function r(t) {
    return !e(t).parents().andSelf().filter(function() {
      return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
    }).length
  }

  e.ui = e.ui || {};
  if (e.ui.version) return;
  e.extend(e.ui, {
    version: "1.8.22",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91
    }
  }), e.fn.extend({
    propAttr: e.fn.prop || e.fn.attr,
    _focus: e.fn.focus,
    focus: function(t, n) {
      return typeof t == "number" ? this.each(function() {
        var r = this;
        setTimeout(function() {
          e(r).focus(), n && n.call(r)
        }, t)
      }) : this._focus.apply(this, arguments)
    },
    scrollParent: function() {
      var t;
      return e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
      }).eq(0) : t = this.parents().filter(function() {
        return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    },
    zIndex: function(n) {
      if (n !== t) return this.css("zIndex", n);
      if (this.length) {
        var r = e(this[0]),
          i, s;
        while (r.length && r[0] !== document) {
          i = r.css("position");
          if (i === "absolute" || i === "relative" || i === "fixed") {
            s = parseInt(r.css("zIndex"), 10);
            if (!isNaN(s) && s !== 0) return s
          }
          r = r.parent()
        }
      }
      return 0
    },
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault()
      })
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
    function i(t, n, r, i) {
      return e.each(s, function() {
        n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), i && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
      }), n
    }

    var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
      o = r.toLowerCase(),
      u = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + r] = function(n) {
      return n === t ? u["inner" + r].call(this) : this.each(function() {
        e(this).css(o, i(this, n) + "px")
      })
    }, e.fn["outer" + r] = function(t, n) {
      return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
        e(this).css(o, i(this, t, !0, n) + "px")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(n) {
        return !!e.data(n, t)
      }
    }) : function(t, n, r) {
      return !!e.data(t, r[3])
    },
    focusable: function(t) {
      return n(t, !isNaN(e.attr(t, "tabindex")))
    },
    tabbable: function(t) {
      var r = e.attr(t, "tabindex"),
        i = isNaN(r);
      return (i || r >= 0) && n(t, !i)
    }
  }), e(function() {
    var t = document.body,
      n = t.appendChild(n = document.createElement("div"));
    n.offsetHeight, e.extend(n.style, {
      minHeight: "100px",
      height: "auto",
      padding: 0,
      borderWidth: 0
    }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
  }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
    plugin: {
      add: function(t, n, r) {
        var i = e.ui[t].prototype;
        for (var s in r) i.plugins[s] = i.plugins[s] || [], i.plugins[s].push([n, r[s]])
      },
      call: function(e, t, n) {
        var r = e.plugins[t];
        if (!r || !e.element[0].parentNode) return;
        for (var i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
      }
    },
    contains: function(e, t) {
      return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
    },
    hasScroll: function(t, n) {
      if (e(t).css("overflow") === "hidden") return !1;
      var r = n && n === "left" ? "scrollLeft" : "scrollTop",
        i = !1;
      return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
    },
    isOverAxis: function(e, t, n) {
      return e > t && e < t + n
    },
    isOver: function(t, n, r, i, s, o) {
      return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
    }
  })
})(jQuery);
(function(e, t) {
  if (e.cleanData) {
    var n = e.cleanData;
    e.cleanData = function(t) {
      for (var r = 0, i;
        (i = t[r]) != null; r++) try {
        e(i).triggerHandler("remove")
      } catch (s) {}
      n(t)
    }
  } else {
    var r = e.fn.remove;
    e.fn.remove = function(t, n) {
      return this.each(function() {
        return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function() {
          try {
            e(this).triggerHandler("remove")
          } catch (t) {}
        }), r.call(e(this), t, n)
      })
    }
  }
  e.widget = function(t, n, r) {
    var i = t.split(".")[0],
      s;
    t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function(n) {
      return !!e.data(n, t)
    }, e[i] = e[i] || {}, e[i][t] = function(e, t) {
      arguments.length && this._createWidget(e, t)
    };
    var o = new n;
    o.options = e.extend(!0, {}, o.options), e[i][t].prototype = e.extend(!0, o, {
      namespace: i,
      widgetName: t,
      widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
      widgetBaseClass: s
    }, r), e.widget.bridge(t, e[i][t])
  }, e.widget.bridge = function(n, r) {
    e.fn[n] = function(i) {
      var s = typeof i == "string",
        o = Array.prototype.slice.call(arguments, 1),
        u = this;
      return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function() {
        var r = e.data(this, n),
          s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
        if (s !== r && s !== t) return u = s, !1
      }) : this.each(function() {
        var t = e.data(this, n);
        t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
      }), u)
    }
  }, e.Widget = function(e, t) {
    arguments.length && this._createWidget(e, t)
  }, e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: {
      disabled: !1
    },
    _createWidget: function(t, n) {
      e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
      var r = this;
      this.element.bind("remove." + this.widgetName, function() {
        r.destroy()
      }), this._create(), this._trigger("create"), this._init()
    },
    _getCreateOptions: function() {
      return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    },
    _create: function() {},
    _init: function() {},
    destroy: function() {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
    },
    widget: function() {
      return this.element
    },
    option: function(n, r) {
      var i = n;
      if (arguments.length === 0) return e.extend({}, this.options);
      if (typeof n == "string") {
        if (r === t) return this.options[n];
        i = {}, i[n] = r
      }
      return this._setOptions(i), this
    },
    _setOptions: function(t) {
      var n = this;
      return e.each(t, function(e, t) {
        n._setOption(e, t)
      }), this
    },
    _setOption: function(e, t) {
      return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
    },
    enable: function() {
      return this._setOption("disabled", !1)
    },
    disable: function() {
      return this._setOption("disabled", !0)
    },
    _trigger: function(t, n, r) {
      var i, s, o = this.options[t];
      r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
      if (s)
        for (i in s) i in n || (n[i] = s[i]);
      return this.element.trigger(n, r), !(e.isFunction(o) && o.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
    }
  }
})(jQuery);
(function(e, t) {
  var n = !1;
  e(document).mouseup(function(e) {
    n = !1
  }), e.widget("ui.mouse", {
    options: {
      cancel: ":input,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function(n) {
        if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(t) {
      if (n) return;
      this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
      var r = this,
        i = t.which == 1,
        s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
      if (!i || s || !this._mouseCapture(t)) return !0;
      this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
        r.mouseDelayMet = !0
      }, this.options.delay));
      if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
        this._mouseStarted = this._mouseStart(t) !== !1;
        if (!this._mouseStarted) return t.preventDefault(), !0
      }
      return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
        return r._mouseMove(e)
      }, this._mouseUpDelegate = function(e) {
        return r._mouseUp(e)
      }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
    },
    _mouseMove: function(t) {
      return !e.browser.msie || document.documentMode >= 9 || !!t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
    },
    _mouseUp: function(t) {
      return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function(e) {
      return this.mouseDelayMet
    },
    _mouseStart: function(e) {},
    _mouseDrag: function(e) {},
    _mouseStop: function(e) {},
    _mouseCapture: function(e) {
      return !0
    }
  })
})(jQuery);
(function(e, t) {
  e.ui = e.ui || {};
  var n = /left|center|right/,
    r = /top|center|bottom/,
    i = "center",
    s = {},
    o = e.fn.position,
    u = e.fn.offset;
  e.fn.position = function(t) {
      if (!t || !t.of) return o.apply(this, arguments);
      t = e.extend({}, t);
      var u = e(t.of),
        l = u[0],
        h = (t.collision || "flip").split(" "),
        p = t.offset ? t.offset.split(" ") : [0, 0],
        v, m, y;
      return l.nodeType === 9 ? (v = u.width(), m = u.height(), y = {
        top: 0,
        left: 0
      }) : l.setTimeout ? (v = u.width(), m = u.height(), y = {
        top: u.scrollTop(),
        left: u.scrollLeft()
      }) : l.preventDefault ? (t.at = "left top", v = m = 0, y = {
        top: t.of.pageY,
        left: t.of.pageX
      }) : (v = u.outerWidth(), m = u.outerHeight(), y = u.offset()), e.each(["my", "at"], function() {
        var e = (t[this] || "").split(" ");
        e.length === 1 && (e = n.test(e[0]) ? e.concat([i]) : r.test(e[0]) ? [i].concat(e) : [i, i]), e[0] = n.test(e[0]) ? e[0] : i, e[1] = r.test(e[1]) ? e[1] : i, t[this] = e
      }), h.length === 1 && (h[1] = h[0]), p[0] = parseInt(p[0], 10) || 0, p.length === 1 && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, t.at[0] === "right" ? y.left += v : t.at[0] === i && (y.left += v / 2), t.at[1] === "bottom" ? y.top += m : t.at[1] === i && (y.top += m / 2), y.left += p[0], y.top += p[1], this.each(function() {
        var n = e(this),
          r = n.outerWidth(),
          o = n.outerHeight(),
          u = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
          l = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
          c = r + u + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
          d = o + l + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
          g = e.extend({}, y),
          w;
        t.my[0] === "right" ? g.left -= r : t.my[0] === i && (g.left -= r / 2), t.my[1] === "bottom" ? g.top -= o : t.my[1] === i && (g.top -= o / 2), s.fractions || (g.left = Math.round(g.left), g.top = Math.round(g.top)), w = {
          left: g.left - u,
          top: g.top - l
        }, e.each(["left", "top"], function(n, i) {
          e.ui.position[h[n]] && e.ui.position[h[n]][i](g, {
            targetWidth: v,
            targetHeight: m,
            elemWidth: r,
            elemHeight: o,
            collisionPosition: w,
            collisionWidth: c,
            collisionHeight: d,
            offset: p,
            my: t.my,
            at: t.at
          })
        }), e.fn.bgiframe && n.bgiframe(), n.offset(e.extend(g, {
          using: t.using
        }))
      })
    }, e.ui.position = {
      fit: {
        left: function(t, n) {
          var r = e(window),
            i = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
          t.left = i > 0 ? t.left - i : Math.max(t.left - n.collisionPosition.left, t.left)
        },
        top: function(t, n) {
          var r = e(window),
            i = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
          t.top = i > 0 ? t.top - i : Math.max(t.top - n.collisionPosition.top, t.top)
        }
      },
      flip: {
        left: function(t, n) {
          if (n.at[0] === i) return;
          var r = e(window),
            s = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(),
            o = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
            u = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
            f = -2 * n.offset[0];
          t.left += n.collisionPosition.left < 0 ? o + u + f : s > 0 ? o + u + f : 0
        },
        top: function(t, n) {
          if (n.at[1] === i) return;
          var r = e(window),
            s = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(),
            o = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
            u = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
            f = -2 * n.offset[1];
          t.top += n.collisionPosition.top < 0 ? o + u + f : s > 0 ? o + u + f : 0
        }
      }
    }, e.offset.setOffset || (e.offset.setOffset = function(t, n) {
      /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
      var r = e(t),
        i = r.offset(),
        s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
        o = parseInt(e.curCSS(t, "left", !0), 10) || 0,
        u = {
          top: n.top - i.top + s,
          left: n.left - i.left + o
        };
      "using" in n ? n.using.call(t, u) : r.css(u)
    }, e.fn.offset = function(t) {
      var n = this[0];
      return !n || !n.ownerDocument ? null : t ? e.isFunction(t) ? this.each(function(n) {
        e(this).offset(t.call(this, n, e(this).offset()))
      }) : this.each(function() {
        e.offset.setOffset(this, t)
      }) : u.call(this)
    }),
    function() {
      var t = document.getElementsByTagName("body")[0],
        n = document.createElement("div"),
        r, i, o, u, l;
      r = document.createElement(t ? "div" : "body"), o = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none"
      }, t && e.extend(o, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px"
      });
      for (var c in o) r.style[c] = o[c];
      r.appendChild(n), i = t || document.documentElement, i.insertBefore(r, i.firstChild), n.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", u = e(n).offset(function(e, t) {
        return t
      }).offset(), r.innerHTML = "", i.removeChild(r), l = u.top + u.left + (t ? 2e3 : 0), s.fractions = l > 21 && l < 22
    }()
})(jQuery);
(function(e, t) {
  e.widget("ui.draggable", e.ui.mouse, {
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1
    },
    _create: function() {
      this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    },
    destroy: function() {
      if (!this.element.data("draggable")) return;
      return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
    },
    _mouseCapture: function(t) {
      var n = this.options;
      return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (n.iframeFix && e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
        e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1e3
        }).css(e(this).offset()).appendTo("body")
      }), !0) : !1)
    },
    _mouseStart: function(t) {
      //modificado para posicionar no data-x e data-y ao voltar recebendo {left: this.element[0].dataset.x, top: this.element[0].dataset.y}
      var n = this.options;

      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = {
        left: this.element[0].dataset.x,
        top: this.element[0].dataset.y
      }, this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
    },
    _mouseDrag: function(t, n) {
      var _descontoLeft = $('.liga-box').position().left;

      if (ENUNCIADO_LIGA == 'vertical') {
        preset.a = 150;
        preset.b = 0;

        _descontoLeft = 20;
      } else if (ENUNCIADO_LIGA == false) {
        preset.b = 3
      }

      //            console.log(HEIGTH_DEFAULT*(WINDOW_WIDTH/WIDTH_DEFAULT));
      this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
      if (!n) {
        var r = this._uiHash();
        if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
        //                console.log($(this)[0].element[0].offsetParent.offsetTop) //foi isso que resolveu

        //                var desconto = $(this)[0].element[0].parentElement.clientHeight;
        var descontoTop = $(this)[0].element[0].parentElement.clientHeight - $(this)[0].element[0].parentElement.offsetParent.offsetTop;
        var descontoLeft = $(this)[0].element[0].parentElement.clientWidth - $(this)[0].element[0].parentElement.offsetParent.offsetLeft;
        //var descontoLeft = $('#principal').offset().left / 2 + _descontoLeft;

        this.position = {
            //left: (t.pageX  - ($(this.element[0]).width() / 2) - (preset.a) - descontoLeft) / (SCALE),
            left: (t.pageX - $('#principal').offset().left) / (SCALE) - ($(this.element[0]).outerWidth() / 2) - ($(this)[0].offsetParent[0].offsetWidth - (($(this)[0].element[0].offsetParent.offsetLeft - descontoLeft + preset.a) * -1)),
            top: (t.pageY - $('#principal').offset().top) / (SCALE) - ($(this.element[0]).outerHeight() / 2) - ($(this)[0].offsetParent[0].offsetHeight - (($(this)[0].element[0].offsetParent.offsetTop - descontoTop + preset.b) * -1))
              //                    top: (t.pageY-$('#principal').offset().top)/(WINDOW_WIDTH/WIDTH_DEFAULT)-($(this.element[0]).outerHeight()/2) - ($(this)[0].offsetParent[0].offsetHeight * $(this)[0].element[0].attributes[2].value) - 20
          }
          //                console.log('top: '+(t.pageY-$('#principal').offset().top))
          //                console.log('left: '+t.pageX-$('#principal').offset().left))
      }
      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
      console.log((($('#principal').offset().left / 2) * SCALE));
      return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1

    },
    _mouseStop: function(t) {
      var n = !1;
      e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
      var r = this.element[0],
        i = !1;
      while (r && (r = r.parentNode)) r == document && (i = !0);
      if (!i && this.options.helper === "original") return !1;
      if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
        var s = this;
        e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
          s._trigger("stop", t) !== !1 && s._clear()
        })
      } else this._trigger("stop", t) !== !1 && this._clear();
      return !1
    },
    _mouseUp: function(t) {
      return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this)
      }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function(t) {
      var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
      return e(this.options.handle, this.element).find("*").andSelf().each(function() {
        this == t.target && (n = !0)
      }), n
    },
    _createHelper: function(t) {
      var n = this.options,
        r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
      return r.parents("body").length || r.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), r[0] != this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
    },
    _adjustOffsetFromHelper: function(t) {
      typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
        top: 0,
        left: 0
      };
      return {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if (this.cssPosition == "relative") {
        var e = this.element.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t = this.options;
      t.containment == "parent" && (t.containment = this.helper[0].parentNode);
      if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
        var n = e(t.containment),
          r = n[0];
        if (!r) return;
        var i = n.offset(),
          s = e(r).css("overflow") != "hidden";
        this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (s ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
      } else t.containment.constructor == Array && (this.containment = t.containment)
    },
    _convertPositionTo: function(t, n) {
      n || (n = this.position);
      var r = t == "absolute" ? 1 : -1,
        i = this.options,
        s = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !e.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        o = /(html|body)/i.test(s[0].tagName);
      return {
        top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r),
        left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r)
      }
    },
    _generatePosition: function(t) {
      //console.log(t.pageX/(WINDOW_WIDTH/WIDTH_DEFAULT));
      var n = this.options,
        r = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !e.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        i = /(html|body)/i.test(r[0].tagName),
        s = t.pageX,
        o = t.pageY;
      if (this.originalPosition) {
        var u;
        if (this.containment) {
          if (this.relative_container) {
            var f = this.relative_container.offset();
            u = [this.containment[0] + f.left, this.containment[1] + f.top, this.containment[2] + f.left, this.containment[3] + f.top]
          } else u = this.containment;
          t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)
        }
        if (n.grid) {
          var l = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
          o = u ? l - this.offset.click.top < u[1] || l - this.offset.click.top > u[3] ? l - this.offset.click.top < u[1] ? l + n.grid[1] : l - n.grid[1] : l : l;
          var c = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
          s = u ? c - this.offset.click.left < u[0] || c - this.offset.click.left > u[2] ? c - this.offset.click.left < u[0] ? c + n.grid[0] : c - n.grid[0] : c : c
        }
      }
      return {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
        left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
      }
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    },
    _trigger: function(t, n, r) {
      return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
    },
    plugins: {},
    _uiHash: function(e) {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), e.extend(e.ui.draggable, {
    version: "1.8.22"
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, n) {
      var r = e(this).data("draggable"),
        i = r.options,
        s = e.extend({}, n, {
          item: r.element
        });
      r.sortables = [], e(i.connectToSortable).each(function() {
        var n = e.data(this, "sortable");
        n && !n.options.disabled && (r.sortables.push({
          instance: n,
          shouldRevert: n.options.revert
        }), n.refreshPositions(), n._trigger("activate", t, s))
      })
    },
    stop: function(t, n) {
      var r = e(this).data("draggable"),
        i = e.extend({}, n, {
          item: r.element
        });
      e.each(r.sortables, function() {
        this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
          top: "auto",
          left: "auto"
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
      })
    },
    drag: function(t, n) {
      var r = e(this).data("draggable"),
        i = this,
        s = function(t) {
          var n = this.offset.click.top,
            r = this.offset.click.left,
            i = this.positionAbs.top,
            s = this.positionAbs.left,
            o = t.height,
            u = t.width,
            f = t.top,
            l = t.left;
          return e.ui.isOver(i + n, s + r, f, l, o, u)
        };
      e.each(r.sortables, function(s) {
        this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
          return n.helper[0]
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
      })
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function(t, n) {
      var r = e("body"),
        i = e(this).data("draggable").options;
      r.css("cursor") && (i._cursor = r.css("cursor")), r.css("cursor", i.cursor)
    },
    stop: function(t, n) {
      try {
        var r = e(this).data("draggable").options;
        r._cursor && e("body").css("cursor", r._cursor)
      } catch (e) {}
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function(t, n) {
      var r = e(n.helper),
        i = e(this).data("draggable").options;
      r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
    },
    stop: function(t, n) {
      var r = e(this).data("draggable").options;
      r._opacity && e(n.helper).css("opacity", r._opacity)
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function(t, n) {
      var r = e(this).data("draggable");
      r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML" && (r.overflowOffset = r.scrollParent.offset())
    },
    drag: function(t, n) {
      var r = e(this).data("draggable"),
        i = r.options,
        s = !1;
      if (r.scrollParent[0] != document && r.scrollParent[0].tagName != "HTML") {
        if (!i.axis || i.axis != "x") r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = s = r.scrollParent[0].scrollTop - i.scrollSpeed);
        if (!i.axis || i.axis != "y") r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = s = r.scrollParent[0].scrollLeft - i.scrollSpeed)
      } else {
        if (!i.axis || i.axis != "x") t.pageY - e(document).scrollTop() < i.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed));
        if (!i.axis || i.axis != "y") t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))
      }
      s !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(r, t)
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function(t, n) {
      var r = e(this).data("draggable"),
        i = r.options;
      r.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
        var t = e(this),
          n = t.offset();
        this != r.element[0] && r.snapElements.push({
          item: this,
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: n.top,
          left: n.left
        })
      })
    },
    drag: function(t, n) {
      var r = e(this).data("draggable"),
        i = r.options,
        s = i.snapTolerance,
        o = n.offset.left,
        u = o + r.helperProportions.width,
        f = n.offset.top,
        l = f + r.helperProportions.height;
      for (var c = r.snapElements.length - 1; c >= 0; c--) {
        var h = r.snapElements[c].left,
          p = h + r.snapElements[c].width,
          d = r.snapElements[c].top,
          v = d + r.snapElements[c].height;
        if (!(h - s < o && o < p + s && d - s < f && f < v + s || h - s < o && o < p + s && d - s < l && l < v + s || h - s < u && u < p + s && d - s < f && f < v + s || h - s < u && u < p + s && d - s < l && l < v + s)) {
          r.snapElements[c].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
            snapItem: r.snapElements[c].item
          })), r.snapElements[c].snapping = !1;
          continue
        }
        if (i.snapMode != "inner") {
          var m = Math.abs(d - l) <= s,
            g = Math.abs(v - f) <= s,
            y = Math.abs(h - u) <= s,
            b = Math.abs(p - o) <= s;
          m && (n.position.top = r._convertPositionTo("relative", {
            top: d - r.helperProportions.height,
            left: 0
          }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
            top: v,
            left: 0
          }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
            top: 0,
            left: h - r.helperProportions.width
          }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
            top: 0,
            left: p
          }).left - r.margins.left)
        }
        var w = m || g || y || b;
        if (i.snapMode != "outer") {
          var m = Math.abs(d - f) <= s,
            g = Math.abs(v - l) <= s,
            y = Math.abs(h - o) <= s,
            b = Math.abs(p - u) <= s;
          m && (n.position.top = r._convertPositionTo("relative", {
            top: d,
            left: 0
          }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
            top: v - r.helperProportions.height,
            left: 0
          }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
            top: 0,
            left: h
          }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
            top: 0,
            left: p - r.helperProportions.width
          }).left - r.margins.left)
        }!r.snapElements[c].snapping && (m || g || y || b || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
          snapItem: r.snapElements[c].item
        })), r.snapElements[c].snapping = m || g || y || b || w
      }
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function(t, n) {
      var r = e(this).data("draggable").options,
        i = e.makeArray(e(r.stack)).sort(function(t, n) {
          return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
        });
      if (!i.length) return;
      var s = parseInt(i[0].style.zIndex) || 0;
      e(i).each(function(e) {
        this.style.zIndex = s + e
      }), this[0].style.zIndex = s + i.length
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function(t, n) {
      var r = e(n.helper),
        i = e(this).data("draggable").options;
      r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
    },
    stop: function(t, n) {
      var r = e(this).data("draggable").options;
      r._zIndex && e(n.helper).css("zIndex", r._zIndex)
    }
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.droppable", {
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect"
    },
    _create: function() {
      var t = this.options,
        n = t.accept;
      this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) {
        return e.is(n)
      }, this.proportions = {
        width: this.element[0].offsetWidth,
        height: this.element[0].offsetHeight
      }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
    },
    destroy: function() {
      var t = e.ui.ddmanager.droppables[this.options.scope];
      for (var n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
      return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
    },
    _setOption: function(t, n) {
      t == "accept" && (this.accept = e.isFunction(n) ? n : function(e) {
        return e.is(n)
      }), e.Widget.prototype._setOption.apply(this, arguments)
    },
    _activate: function(t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
    },
    _deactivate: function(t) {
      var n = e.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
    },
    _over: function(t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
    },
    _out: function(t) {
      var n = e.ui.ddmanager.current;
      if (!n || (n.currentItem || n.element)[0] == this.element[0]) return;
      this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
    },
    _drop: function(t, n) {
      var r = n || e.ui.ddmanager.current;
      if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
      var i = !1;
      return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
        var t = e.data(this, "droppable");
        if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
            offset: t.element.offset()
          }), t.options.tolerance)) return i = !0, !1
      }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
    },
    ui: function(e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs
      }
    }
  }), e.extend(e.ui.droppable, {
    version: "1.8.22"
  }), e.ui.intersect = function(t, n, r) {
    if (!n.offset) return !1;
    var i = (t.positionAbs || t.position.absolute).left,
      s = i + t.helperProportions.width,
      o = (t.positionAbs || t.position.absolute).top,
      u = o + t.helperProportions.height,
      f = n.offset.left,
      l = f + n.proportions.width,
      c = n.offset.top,
      h = c + n.proportions.height;
    switch (r) {
      case "fit":
        return f <= i && s <= l && c <= o && u <= h;
      case "intersect":
        return f < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < l && c < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < h;
      case "pointer":
        var p = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
          d = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
          v = e.ui.isOver(d, p, c, f, n.proportions.height, n.proportions.width);
        return v;
      case "touch":
        return (o >= c && o <= h || u >= c && u <= h || o < c && u > h) && (i >= f && i <= l || s >= f && s <= l || i < f && s > l);
      default:
        return !1
    }
  }, e.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function(t, n) {
      var r = e.ui.ddmanager.droppables[t.options.scope] || [],
        i = n ? n.type : null,
        s = (t.currentItem || t.element).find(":data(droppable)").andSelf();
      e: for (var o = 0; o < r.length; o++) {
        if (r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element)) continue;
        for (var u = 0; u < s.length; u++)
          if (s[u] == r[o].element[0]) {
            r[o].proportions.height = 0;
            continue e
          }
        r[o].visible = r[o].element.css("display") != "none";
        if (!r[o].visible) continue;
        i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
          width: r[o].element[0].offsetWidth,
          height: r[o].element[0].offsetHeight
        }
      }
    },
    drop: function(t, n) {
      var r = !1;
      return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
        if (!this.options) return;
        !this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = this._drop.call(this, n) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))
      }), r
    },
    dragStart: function(t, n) {
      t.element.parents(":not(body,html)").bind("scroll.droppable", function() {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
      })
    },
    drag: function(t, n) {
      t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
        if (this.options.disabled || this.greedyChild || !this.visible) return;
        var r = e.ui.intersect(t, this, this.options.tolerance),
          i = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null;
        if (!i) return;
        var s;
        if (this.options.greedy) {
          var o = this.element.parents(":data(droppable):eq(0)");
          o.length && (s = e.data(o[0], "droppable"), s.greedyChild = i == "isover" ? 1 : 0)
        }
        s && i == "isover" && (s.isover = 0, s.isout = 1, s._out.call(s, n)), this[i] = 1, this[i == "isout" ? "isover" : "isout"] = 0, this[i == "isover" ? "_over" : "_out"].call(this, n), s && i == "isout" && (s.isout = 0, s.isover = 1, s._over.call(s, n))
      })
    },
    dragStop: function(t, n) {
      t.element.parents(":not(body,html)").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
    }
  }
})(jQuery);
(function(e, t) {
  e.widget("ui.resizable", e.ui.mouse, {
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 1e3
    },
    _create: function() {
      var t = this,
        n = this.options;
      this.element.addClass("ui-resizable"), e.extend(this, {
        _aspectRatio: !!n.aspectRatio,
        aspectRatio: n.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css("marginLeft"),
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom")
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css({
        margin: this.originalElement.css("margin")
      }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se");
      if (this.handles.constructor == String) {
        this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
        var r = this.handles.split(",");
        this.handles = {};
        for (var i = 0; i < r.length; i++) {
          var s = e.trim(r[i]),
            o = "ui-resizable-" + s,
            u = e('<div class="ui-resizable-handle ' + o + '"></div>');
          u.css({
            zIndex: n.zIndex
          }), "se" == s && u.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(u)
        }
      }
      this._renderAxis = function(t) {
        t = t || this.element;
        for (var n in this.handles) {
          this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
          if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
            var r = e(this.handles[n], this.element),
              i = 0;
            i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth();
            var s = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
            t.css(s, i), this._proportionallyResize()
          }
          if (!e(this.handles[n]).length) continue
        }
      }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
        if (!t.resizing) {
          if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
          t.axis = e && e[1] ? e[1] : "se"
        }
      }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function() {
        if (n.disabled) return;
        e(this).removeClass("ui-resizable-autohide"), t._handles.show()
      }, function() {
        if (n.disabled) return;
        t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
      })), this._mouseInit()
    },
    destroy: function() {
      this._mouseDestroy();
      var t = function(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      if (this.elementIsWrapper) {
        t(this.element);
        var n = this.element;
        n.after(this.originalElement.css({
          position: n.css("position"),
          width: n.outerWidth(),
          height: n.outerHeight(),
          top: n.css("top"),
          left: n.css("left")
        })).remove()
      }
      return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
    },
    _mouseCapture: function(t) {
      var n = !1;
      for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
      return !this.options.disabled && n
    },
    _mouseStart: function(t) {
      var r = this.options,
        i = this.element.position(),
        s = this.element;
      this.resizing = !0, this.documentScroll = {
        top: e(document).scrollTop(),
        left: e(document).scrollLeft()
      }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
        position: "absolute",
        top: i.top,
        left: i.left
      }), this._renderProxy();
      var o = n(this.helper.css("left")),
        u = n(this.helper.css("top"));
      r.containment && (o += e(r.containment).scrollLeft() || 0, u += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: o,
        top: u
      }, this.size = this._helper ? {
        width: s.outerWidth(),
        height: s.outerHeight()
      } : {
        width: s.width(),
        height: s.height()
      }, this.originalSize = this._helper ? {
        width: s.outerWidth(),
        height: s.outerHeight()
      } : {
        width: s.width(),
        height: s.height()
      }, this.originalPosition = {
        left: o,
        top: u
      }, this.sizeDiff = {
        width: s.outerWidth() - s.width(),
        height: s.outerHeight() - s.height()
      }, this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
      var f = e(".ui-resizable-" + this.axis).css("cursor");
      return e("body").css("cursor", f == "auto" ? this.axis + "-resize" : f), s.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
    },
    _mouseDrag: function(t) {
      var n = this.helper,
        r = this.options,
        i = {},
        s = this,
        o = this.originalMousePosition,
        u = this.axis,
        f = t.pageX - o.left || 0,
        l = t.pageY - o.top || 0,
        c = this._change[u];
      if (!c) return !1;
      var h = c.apply(this, [t, f, l]),
        p = e.browser.msie && e.browser.version < 7,
        d = this.sizeDiff;
      this._updateVirtualBoundaries(t.shiftKey);
      if (this._aspectRatio || t.shiftKey) h = this._updateRatio(h, t);
      return h = this._respectSize(h, t), this._propagate("resize", t), n.css({
        top: this.position.top + "px",
        left: this.position.left + "px",
        width: this.size.width + "px",
        height: this.size.height + "px"
      }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(h), this._trigger("resize", t, this.ui()), !1
    },
    _mouseStop: function(t) {
      this.resizing = !1;
      var n = this.options,
        r = this;
      if (this._helper) {
        var i = this._proportionallyResizeElements,
          s = i.length && /textarea/i.test(i[0].nodeName),
          o = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height,
          u = s ? 0 : r.sizeDiff.width,
          f = {
            width: r.helper.width() - u,
            height: r.helper.height() - o
          },
          l = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
          c = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
        n.animate || this.element.css(e.extend(f, {
          top: c,
          left: l
        })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
      }
      return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
    },
    _updateVirtualBoundaries: function(e) {
      var t = this.options,
        n, i, s, o, u;
      u = {
        minWidth: r(t.minWidth) ? t.minWidth : 0,
        maxWidth: r(t.maxWidth) ? t.maxWidth : Infinity,
        minHeight: r(t.minHeight) ? t.minHeight : 0,
        maxHeight: r(t.maxHeight) ? t.maxHeight : Infinity
      };
      if (this._aspectRatio || e) n = u.minHeight * this.aspectRatio, s = u.minWidth / this.aspectRatio, i = u.maxHeight * this.aspectRatio, o = u.maxWidth / this.aspectRatio, n > u.minWidth && (u.minWidth = n), s > u.minHeight && (u.minHeight = s), i < u.maxWidth && (u.maxWidth = i), o < u.maxHeight && (u.maxHeight = o);
      this._vBoundaries = u
    },
    _updateCache: function(e) {
      var t = this.options;
      this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
    },
    _updateRatio: function(e, t) {
      var n = this.options,
        i = this.position,
        s = this.size,
        o = this.axis;
      return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), o == "sw" && (e.left = i.left + (s.width - e.width), e.top = null), o == "nw" && (e.top = i.top + (s.height - e.height), e.left = i.left + (s.width - e.width)), e
    },
    _respectSize: function(e, t) {
      var n = this.helper,
        i = this._vBoundaries,
        s = this._aspectRatio || t.shiftKey,
        o = this.axis,
        u = r(e.width) && i.maxWidth && i.maxWidth < e.width,
        a = r(e.height) && i.maxHeight && i.maxHeight < e.height,
        f = r(e.width) && i.minWidth && i.minWidth > e.width,
        l = r(e.height) && i.minHeight && i.minHeight > e.height;
      f && (e.width = i.minWidth), l && (e.height = i.minHeight), u && (e.width = i.maxWidth), a && (e.height = i.maxHeight);
      var c = this.originalPosition.left + this.originalSize.width,
        h = this.position.top + this.size.height,
        p = /sw|nw|w/.test(o),
        v = /nw|ne|n/.test(o);
      f && p && (e.left = c - i.minWidth), u && p && (e.left = c - i.maxWidth), l && v && (e.top = h - i.minHeight), a && v && (e.top = h - i.maxHeight);
      var m = !e.width && !e.height;
      return m && !e.left && e.top ? e.top = null : m && !e.top && e.left && (e.left = null), e
    },
    _proportionallyResize: function() {
      var t = this.options;
      if (!this._proportionallyResizeElements.length) return;
      var n = this.helper || this.element;
      for (var r = 0; r < this._proportionallyResizeElements.length; r++) {
        var i = this._proportionallyResizeElements[r];
        if (!this.borderDif) {
          var s = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
            o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
          this.borderDif = e.map(s, function(e, t) {
            var n = parseInt(e, 10) || 0,
              r = parseInt(o[t], 10) || 0;
            return n + r
          })
        }
        if (!e.browser.msie || !e(n).is(":hidden") && !e(n).parents(":hidden").length) i.css({
          height: n.height() - this.borderDif[0] - this.borderDif[2] || 0,
          width: n.width() - this.borderDif[1] - this.borderDif[3] || 0
        });
        else continue
      }
    },
    _renderProxy: function() {
      var t = this.element,
        n = this.options;
      this.elementOffset = t.offset();
      if (this._helper) {
        this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
        var r = e.browser.msie && e.browser.version < 7,
          i = r ? 1 : 0,
          s = r ? 2 : -1;
        this.helper.addClass(this._helper).css({
          width: this.element.outerWidth() + s,
          height: this.element.outerHeight() + s,
          position: "absolute",
          left: this.elementOffset.left - i + "px",
          top: this.elementOffset.top - i + "px",
          zIndex: ++n.zIndex
        }), this.helper.appendTo("body").disableSelection()
      } else this.helper = this.element
    },
    _change: {
      e: function(e, t, n) {
        return {
          width: this.originalSize.width + t
        }
      },
      w: function(e, t, n) {
        var r = this.options,
          i = this.originalSize,
          s = this.originalPosition;
        return {
          left: s.left + t,
          width: i.width - t
        }
      },
      n: function(e, t, n) {
        var r = this.options,
          i = this.originalSize,
          s = this.originalPosition;
        return {
          top: s.top + n,
          height: i.height - n
        }
      },
      s: function(e, t, n) {
        return {
          height: this.originalSize.height + n
        }
      },
      se: function(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
      },
      sw: function(t, n, r) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
      },
      ne: function(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
      },
      nw: function(t, n, r) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
      }
    },
    _propagate: function(t, n) {
      e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), e.extend(e.ui.resizable, {
    version: "1.8.22"
  }), e.ui.plugin.add("resizable", "alsoResize", {
    start: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = function(t) {
          e(t).each(function() {
            var t = e(this);
            t.data("resizable-alsoresize", {
              width: parseInt(t.width(), 10),
              height: parseInt(t.height(), 10),
              left: parseInt(t.css("left"), 10),
              top: parseInt(t.css("top"), 10)
            })
          })
        };
      typeof i.alsoResize == "object" && !i.alsoResize.parentNode ? i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
        s(e)
      }) : s(i.alsoResize)
    },
    resize: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r.originalSize,
        o = r.originalPosition,
        u = {
          height: r.size.height - s.height || 0,
          width: r.size.width - s.width || 0,
          top: r.position.top - o.top || 0,
          left: r.position.left - o.left || 0
        },
        f = function(t, r) {
          e(t).each(function() {
            var t = e(this),
              i = e(this).data("resizable-alsoresize"),
              s = {},
              o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
            e.each(o, function(e, t) {
              var n = (i[t] || 0) + (u[t] || 0);
              n && n >= 0 && (s[t] = n || null)
            }), t.css(s)
          })
        };
      typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
        f(e, t)
      }) : f(i.alsoResize)
    },
    stop: function(t, n) {
      e(this).removeData("resizable-alsoresize")
    }
  }), e.ui.plugin.add("resizable", "animate", {
    stop: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r._proportionallyResizeElements,
        o = s.length && /textarea/i.test(s[0].nodeName),
        u = o && e.ui.hasScroll(s[0], "left") ? 0 : r.sizeDiff.height,
        f = o ? 0 : r.sizeDiff.width,
        l = {
          width: r.size.width - f,
          height: r.size.height - u
        },
        c = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null,
        h = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
      r.element.animate(e.extend(l, h && c ? {
        top: h,
        left: c
      } : {}), {
        duration: i.animateDuration,
        easing: i.animateEasing,
        step: function() {
          var n = {
            width: parseInt(r.element.css("width"), 10),
            height: parseInt(r.element.css("height"), 10),
            top: parseInt(r.element.css("top"), 10),
            left: parseInt(r.element.css("left"), 10)
          };
          s && s.length && e(s[0]).css({
            width: n.width,
            height: n.height
          }), r._updateCache(n), r._propagate("resize", t)
        }
      })
    }
  }), e.ui.plugin.add("resizable", "containment", {
    start: function(t, r) {
      var i = e(this).data("resizable"),
        s = i.options,
        o = i.element,
        u = s.containment,
        f = u instanceof e ? u.get(0) : /parent/.test(u) ? o.parent().get(0) : u;
      if (!f) return;
      i.containerElement = e(f);
      if (/document/.test(u) || u == document) i.containerOffset = {
        left: 0,
        top: 0
      }, i.containerPosition = {
        left: 0,
        top: 0
      }, i.parentData = {
        element: e(document),
        left: 0,
        top: 0,
        width: e(document).width(),
        height: e(document).height() || document.body.parentNode.scrollHeight
      };
      else {
        var l = e(f),
          h = [];
        e(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
          h[e] = n(l.css("padding" + t))
        }), i.containerOffset = l.offset(), i.containerPosition = l.position(), i.containerSize = {
          height: l.innerHeight() - h[3],
          width: l.innerWidth() - h[1]
        };
        var p = i.containerOffset,
          d = i.containerSize.height,
          v = i.containerSize.width,
          m = e.ui.hasScroll(f, "left") ? f.scrollWidth : v,
          g = e.ui.hasScroll(f) ? f.scrollHeight : d;
        i.parentData = {
          element: f,
          left: p.left,
          top: p.top,
          width: m,
          height: g
        }
      }
    },
    resize: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r.containerSize,
        o = r.containerOffset,
        u = r.size,
        f = r.position,
        l = r._aspectRatio || t.shiftKey,
        c = {
          top: 0,
          left: 0
        },
        h = r.containerElement;
      h[0] != document && /static/.test(h.css("position")) && (c = o), f.left < (r._helper ? o.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - o.left : r.position.left - c.left), l && (r.size.height = r.size.width / r.aspectRatio), r.position.left = i.helper ? o.left : 0), f.top < (r._helper ? o.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - o.top : r.position.top), l && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? o.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top;
      var p = Math.abs((r._helper ? r.offset.left - c.left : r.offset.left - c.left) + r.sizeDiff.width),
        d = Math.abs((r._helper ? r.offset.top - c.top : r.offset.top - o.top) + r.sizeDiff.height),
        v = r.containerElement.get(0) == r.element.parent().get(0),
        m = /relative|absolute/.test(r.containerElement.css("position"));
      v && m && (p -= r.parentData.left), p + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - p, l && (r.size.height = r.size.width / r.aspectRatio)), d + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - d, l && (r.size.width = r.size.height * r.aspectRatio))
    },
    stop: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r.position,
        o = r.containerOffset,
        u = r.containerPosition,
        f = r.containerElement,
        l = e(r.helper),
        c = l.offset(),
        h = l.outerWidth() - r.sizeDiff.width,
        p = l.outerHeight() - r.sizeDiff.height;
      r._helper && !i.animate && /relative/.test(f.css("position")) && e(this).css({
        left: c.left - u.left - o.left,
        width: h,
        height: p
      }), r._helper && !i.animate && /static/.test(f.css("position")) && e(this).css({
        left: c.left - u.left - o.left,
        width: h,
        height: p
      })
    }
  }), e.ui.plugin.add("resizable", "ghost", {
    start: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r.size;
      r.ghost = r.originalElement.clone(), r.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : ""), r.ghost.appendTo(r.helper)
    },
    resize: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options;
      r.ghost && r.ghost.css({
        position: "relative",
        height: r.size.height,
        width: r.size.width
      })
    },
    stop: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options;
      r.ghost && r.helper && r.helper.get(0).removeChild(r.ghost.get(0))
    }
  }), e.ui.plugin.add("resizable", "grid", {
    resize: function(t, n) {
      var r = e(this).data("resizable"),
        i = r.options,
        s = r.size,
        o = r.originalSize,
        u = r.originalPosition,
        f = r.axis,
        l = i._aspectRatio || t.shiftKey;
      i.grid = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid;
      var c = Math.round((s.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
        h = Math.round((s.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
      /^(se|s|e)$/.test(f) ? (r.size.width = o.width + c, r.size.height = o.height + h) : /^(ne)$/.test(f) ? (r.size.width = o.width + c, r.size.height = o.height + h, r.position.top = u.top - h) : /^(sw)$/.test(f) ? (r.size.width = o.width + c, r.size.height = o.height + h, r.position.left = u.left - c) : (r.size.width = o.width + c, r.size.height = o.height + h, r.position.top = u.top - h, r.position.left = u.left - c)
    }
  });
  var n = function(e) {
      return parseInt(e, 10) || 0
    },
    r = function(e) {
      return !isNaN(parseInt(e, 10))
    }
})(jQuery);
(function(e, t) {
  e.widget("ui.selectable", e.ui.mouse, {
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch"
    },
    _create: function() {
      var t = this;
      this.element.addClass("ui-selectable"), this.dragged = !1;
      var n;
      this.refresh = function() {
        n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function() {
          var t = e(this),
            n = t.offset();
          e.data(this, "selectable-item", {
            element: this,
            $element: t,
            left: n.left,
            top: n.top,
            right: n.left + t.outerWidth(),
            bottom: n.top + t.outerHeight(),
            startselected: !1,
            selected: t.hasClass("ui-selected"),
            selecting: t.hasClass("ui-selecting"),
            unselecting: t.hasClass("ui-unselecting")
          })
        })
      }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
    },
    destroy: function() {
      return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
    },
    _mouseStart: function(t) {
      var n = this;
      this.opos = [t.pageX, t.pageY];
      if (this.options.disabled) return;
      var r = this.options;
      this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
        left: t.clientX,
        top: t.clientY,
        width: 0,
        height: 0
      }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
        var r = e.data(this, "selectable-item");
        r.startselected = !0, !t.metaKey && !t.ctrlKey && (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
          unselecting: r.element
        }))
      }), e(t.target).parents().andSelf().each(function() {
        var r = e.data(this, "selectable-item");
        if (r) {
          var i = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected");
          return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", t, {
            selecting: r.element
          }) : n._trigger("unselecting", t, {
            unselecting: r.element
          }), !1
        }
      })
    },
    _mouseDrag: function(t) {
      var n = this;
      this.dragged = !0;
      if (this.options.disabled) return;
      var r = this.options,
        i = this.opos[0],
        s = this.opos[1],
        o = t.pageX,
        u = t.pageY;
      if (i > o) {
        var f = o;
        o = i, i = f
      }
      if (s > u) {
        var f = u;
        u = s, s = f
      }
      return this.helper.css({
        left: i,
        top: s,
        width: o - i,
        height: u - s
      }), this.selectees.each(function() {
        var f = e.data(this, "selectable-item");
        if (!f || f.element == n.element[0]) return;
        var l = !1;
        r.tolerance == "touch" ? l = !(f.left > o || f.right < i || f.top > u || f.bottom < s) : r.tolerance == "fit" && (l = f.left > i && f.right < o && f.top > s && f.bottom < u), l ? (f.selected && (f.$element.removeClass("ui-selected"), f.selected = !1), f.unselecting && (f.$element.removeClass("ui-unselecting"), f.unselecting = !1), f.selecting || (f.$element.addClass("ui-selecting"), f.selecting = !0, n._trigger("selecting", t, {
          selecting: f.element
        }))) : (f.selecting && ((t.metaKey || t.ctrlKey) && f.startselected ? (f.$element.removeClass("ui-selecting"), f.selecting = !1, f.$element.addClass("ui-selected"), f.selected = !0) : (f.$element.removeClass("ui-selecting"), f.selecting = !1, f.startselected && (f.$element.addClass("ui-unselecting"), f.unselecting = !0), n._trigger("unselecting", t, {
          unselecting: f.element
        }))), f.selected && !t.metaKey && !t.ctrlKey && !f.startselected && (f.$element.removeClass("ui-selected"), f.selected = !1, f.$element.addClass("ui-unselecting"), f.unselecting = !0, n._trigger("unselecting", t, {
          unselecting: f.element
        })))
      }), !1
    },
    _mouseStop: function(t) {
      var n = this;
      this.dragged = !1;
      var r = this.options;
      return e(".ui-unselecting", this.element[0]).each(function() {
        var r = e.data(this, "selectable-item");
        r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
          unselected: r.element
        })
      }), e(".ui-selecting", this.element[0]).each(function() {
        var r = e.data(this, "selectable-item");
        r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
          selected: r.element
        })
      }), this._trigger("stop", t), this.helper.remove(), !1
    }
  }), e.extend(e.ui.selectable, {
    version: "1.8.22"
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.sortable", e.ui.mouse, {
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3
    },
    _create: function() {
      var e = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
    },
    destroy: function() {
      e.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
      return this
    },
    _setOption: function(t, n) {
      t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
    },
    _mouseCapture: function(t, n) {
      var r = this;
      if (this.reverting) return !1;
      if (this.options.disabled || this.options.type == "static") return !1;
      this._refreshItems(t);
      var i = null,
        s = this,
        o = e(t.target).parents().each(function() {
          if (e.data(this, r.widgetName + "-item") == s) return i = e(this), !1
        });
      e.data(t.target, r.widgetName + "-item") == s && (i = e(t.target));
      if (!i) return !1;
      if (this.options.handle && !n) {
        var u = !1;
        e(this.options.handle, i).find("*").andSelf().each(function() {
          this == t.target && (u = !0)
        });
        if (!u) return !1
      }
      return this.currentItem = i, this._removeCurrentsFromItems(), !0
    },
    _mouseStart: function(t, n, r) {
      var i = this.options,
        s = this;
      this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), i.containment && this._setContainment(), i.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", i.cursor)), i.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", i.opacity)), i.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", i.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
      if (!r)
        for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, s._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
    },
    _mouseDrag: function(t) {
      this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
      if (this.options.scroll) {
        var n = this.options,
          r = !1;
        this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
      }
      this.positionAbs = this._convertPositionTo("absolute");
      if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
      for (var i = this.items.length - 1; i >= 0; i--) {
        var s = this.items[i],
          o = s.item[0],
          u = this._intersectsWithPointer(s);
        if (!u) continue;
        if (o != this.currentItem[0] && this.placeholder[u == 1 ? "next" : "prev"]()[0] != o && !e.ui.contains(this.placeholder[0], o) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], o) : !0)) {
          this.direction = u == 1 ? "down" : "up";
          if (this.options.tolerance == "pointer" || this._intersectsWithSides(s)) this._rearrange(t, s);
          else break;
          this._trigger("change", t, this._uiHash());
          break
        }
      }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function(t, n) {
      if (!t) return;
      e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
      if (this.options.revert) {
        var r = this,
          i = r.placeholder.offset();
        r.reverting = !0, e(this.helper).animate({
          left: i.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
          top: i.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
        }, parseInt(this.options.revert, 10) || 500, function() {
          r._clear(t)
        })
      } else this._clear(t, n);
      return !1
    },
    cancel: function() {
      var t = this;
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
        for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return t = t || {}, e(n).each(function() {
        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
        n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
      }), !r.length && t.key && r.push(t.key + "="), r.join("&")
    },
    toArray: function(t) {
      var n = this._getItemsAsjQuery(t && t.connected),
        r = [];
      return t = t || {}, n.each(function() {
        r.push(e(t.item || this).attr(t.attribute || "id") || "")
      }), r
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left,
        n = t + this.helperProportions.width,
        r = this.positionAbs.top,
        i = r + this.helperProportions.height,
        s = e.left,
        o = s + e.width,
        u = e.top,
        a = u + e.height,
        f = this.offset.click.top,
        l = this.offset.click.left,
        c = r + f > u && r + f < a && t + l > s && t + l < o;
      return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? c : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
    },
    _intersectsWithPointer: function(t) {
      var n = this.options.axis === "x" || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
        r = this.options.axis === "y" || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
        i = n && r,
        s = this._getDragVerticalDirection(),
        o = this._getDragHorizontalDirection();
      return i ? this.floating ? o && o == "right" || s == "down" ? 2 : 1 : s && (s == "down" ? 2 : 1) : !1
    },
    _intersectsWithSides: function(t) {
      var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
        r = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
        i = this._getDragVerticalDirection(),
        s = this._getDragHorizontalDirection();
      return this.floating && s ? s == "right" && r || s == "left" && !r : i && (i == "down" && n || i == "up" && !n)
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return e != 0 && (e > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return e != 0 && (e > 0 ? "right" : "left")
    },
    refresh: function(e) {
      return this._refreshItems(e), this.refreshPositions(), this
    },
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
    },
    _getItemsAsjQuery: function(t) {
      var n = this,
        r = [],
        i = [],
        s = this._connectWith();
      if (s && t)
        for (var o = s.length - 1; o >= 0; o--) {
          var u = e(s[o]);
          for (var f = u.length - 1; f >= 0; f--) {
            var l = e.data(u[f], this.widgetName);
            l && l != this && !l.options.disabled && i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
          }
        }
      i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
      for (var o = i.length - 1; o >= 0; o--) i[o][0].each(function() {
        r.push(this)
      });
      return e(r)
    },
    _removeCurrentsFromItems: function() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      for (var t = 0; t < this.items.length; t++)
        for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
    },
    _refreshItems: function(t) {
      this.items = [], this.containers = [this];
      var n = this.items,
        r = this,
        i = [
          [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
            item: this.currentItem
          }) : e(this.options.items, this.element), this]
        ],
        s = this._connectWith();
      if (s && this.ready)
        for (var o = s.length - 1; o >= 0; o--) {
          var u = e(s[o]);
          for (var f = u.length - 1; f >= 0; f--) {
            var l = e.data(u[f], this.widgetName);
            l && l != this && !l.options.disabled && (i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
              item: this.currentItem
            }) : e(l.options.items, l.element), l]), this.containers.push(l))
          }
        }
      for (var o = i.length - 1; o >= 0; o--) {
        var c = i[o][1],
          h = i[o][0];
        for (var f = 0, p = h.length; f < p; f++) {
          var d = e(h[f]);
          d.data(this.widgetName + "-item", c), n.push({
            item: d,
            instance: c,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          })
        }
      }
    },
    refreshPositions: function(t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      for (var n = this.items.length - 1; n >= 0; n--) {
        var r = this.items[n];
        if (r.instance != this.currentContainer && this.currentContainer && r.item[0] != this.currentItem[0]) continue;
        var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
        t || (r.width = i.outerWidth(), r.height = i.outerHeight());
        var s = i.offset();
        r.left = s.left, r.top = s.top
      }
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (var n = this.containers.length - 1; n >= 0; n--) {
          var s = this.containers[n].element.offset();
          this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
        }
      return this
    },
    _createPlaceholder: function(t) {
      var n = t || this,
        r = n.options;
      if (!r.placeholder || r.placeholder.constructor == String) {
        var i = r.placeholder;
        r.placeholder = {
          element: function() {
            var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
            return i || (t.style.visibility = "hidden"), t
          },
          update: function(e, t) {
            if (i && !r.forcePlaceholderSize) return;
            t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
          }
        }
      }
      n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
    },
    _contactContainers: function(t) {
      var n = null,
        r = null;
      for (var i = this.containers.length - 1; i >= 0; i--) {
        if (e.ui.contains(this.currentItem[0], this.containers[i].element[0])) continue;
        if (this._intersectsWith(this.containers[i].containerCache)) {
          if (n && e.ui.contains(this.containers[i].element[0], n.element[0])) continue;
          n = this.containers[i], r = i
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0)
      }
      if (!n) return;
      if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
      else if (this.currentContainer != this.containers[r]) {
        var s = 1e4,
          o = null,
          u = this.positionAbs[this.containers[r].floating ? "left" : "top"];
        for (var f = this.items.length - 1; f >= 0; f--) {
          if (!e.ui.contains(this.containers[r].element[0], this.items[f].item[0])) continue;
          var l = this.containers[r].floating ? this.items[f].item.offset().left : this.items[f].item.offset().top;
          Math.abs(l - u) < s && (s = Math.abs(l - u), o = this.items[f], this.direction = l - u > 0 ? "down" : "up")
        }
        if (!o && !this.options.dropOnEmpty) return;
        this.currentContainer = this.containers[r], o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
      }
    },
    _createHelper: function(t) {
      var n = this.options,
        r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem;
      return r.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(r[0]), r[0] == this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (r[0].style.width == "" || n.forceHelperSize) && r.width(this.currentItem.width()), (r[0].style.height == "" || n.forceHelperSize) && r.height(this.currentItem.height()), r
    },
    _adjustOffsetFromHelper: function(t) {
      typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
      if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
        top: 0,
        left: 0
      };
      return {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if (this.cssPosition == "relative") {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var t = this.options;
      t.containment == "parent" && (t.containment = this.helper[0].parentNode);
      if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
      if (!/^(document|window|parent)$/.test(t.containment)) {
        var n = e(t.containment)[0],
          r = e(t.containment).offset(),
          i = e(n).css("overflow") != "hidden";
        this.containment = [r.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (i ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (i ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
      }
    },
    _convertPositionTo: function(t, n) {
      n || (n = this.position);
      var r = t == "absolute" ? 1 : -1,
        i = this.options,
        s = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !e.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        o = /(html|body)/i.test(s[0].tagName);
      return {
        top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * r),
        left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * r)
      }
    },
    _generatePosition: function(t) {
      var n = this.options,
        r = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !e.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
        i = /(html|body)/i.test(r[0].tagName);
      this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
      var s = t.pageX,
        o = t.pageY;
      if (this.originalPosition) {
        this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top));
        if (n.grid) {
          var u = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1];
          o = this.containment ? u - this.offset.click.top < this.containment[1] || u - this.offset.click.top > this.containment[3] ? u - this.offset.click.top < this.containment[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
          var f = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0];
          s = this.containment ? f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2] ? f - this.offset.click.left < this.containment[0] ? f + n.grid[0] : f - n.grid[0] : f : f
        }
      }
      return {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
        left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
      }
    },
    _rearrange: function(e, t, n, r) {
      n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var i = this,
        s = this.counter;
      window.setTimeout(function() {
        s == i.counter && i.refreshPositions(!r)
      }, 0)
    },
    _clear: function(t, n) {
      this.reverting = !1;
      var r = [],
        i = this;
      !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
      if (this.helper[0] == this.currentItem[0]) {
        for (var s in this._storedCSS)
          if (this._storedCSS[s] == "auto" || this._storedCSS[s] == "static") this._storedCSS[s] = "";
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
      } else this.currentItem.show();
      this.fromOutside && !n && r.push(function(e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside))
      }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function(e) {
        this._trigger("update", e, this._uiHash())
      });
      if (!e.ui.contains(this.element[0], this.currentItem[0])) {
        n || r.push(function(e) {
          this._trigger("remove", e, this._uiHash())
        });
        for (var s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !n && (r.push(function(e) {
          return function(t) {
            e._trigger("receive", t, this._uiHash(this))
          }
        }.call(this, this.containers[s])), r.push(function(e) {
          return function(t) {
            e._trigger("update", t, this._uiHash(this))
          }
        }.call(this, this.containers[s])))
      }
      for (var s = this.containers.length - 1; s >= 0; s--) n || r.push(function(e) {
        return function(t) {
          e._trigger("deactivate", t, this._uiHash(this))
        }
      }.call(this, this.containers[s])), this.containers[s].containerCache.over && (r.push(function(e) {
        return function(t) {
          e._trigger("out", t, this._uiHash(this))
        }
      }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
      this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
      if (this.cancelHelperRemoval) {
        if (!n) {
          this._trigger("beforeStop", t, this._uiHash());
          for (var s = 0; s < r.length; s++) r[s].call(this, t);
          this._trigger("stop", t, this._uiHash())
        }
        return this.fromOutside = !1, !1
      }
      n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
      if (!n) {
        for (var s = 0; s < r.length; s++) r[s].call(this, t);
        this._trigger("stop", t, this._uiHash())
      }
      return this.fromOutside = !1, !0
    },
    _trigger: function() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function(t) {
      var n = t || this;
      return {
        helper: n.helper,
        placeholder: n.placeholder || e([]),
        position: n.position,
        originalPosition: n.originalPosition,
        offset: n.positionAbs,
        item: n.currentItem,
        sender: t ? t.element : null
      }
    }
  }), e.extend(e.ui.sortable, {
    version: "1.8.22"
  })
})(jQuery);
(function(e, t) {
  e.widget("ui.accordion", {
    options: {
      active: 0,
      animated: "slide",
      autoHeight: !0,
      clearStyle: !1,
      collapsible: !1,
      event: "click",
      fillSpace: !1,
      header: "> li > :first-child,> :not(li):even",
      icons: {
        header: "ui-icon-triangle-1-e",
        headerSelected: "ui-icon-triangle-1-s"
      },
      navigation: !1,
      navigationFilter: function() {
        return this.href.toLowerCase() === location.href.toLowerCase()
      }
    },
    _create: function() {
      var t = this,
        n = t.options;
      t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
        if (n.disabled) return;
        e(this).addClass("ui-state-hover")
      }).bind("mouseleave.accordion", function() {
        if (n.disabled) return;
        e(this).removeClass("ui-state-hover")
      }).bind("focus.accordion", function() {
        if (n.disabled) return;
        e(this).addClass("ui-state-focus")
      }).bind("blur.accordion", function() {
        if (n.disabled) return;
        e(this).removeClass("ui-state-focus")
      }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
      if (n.navigation) {
        var r = t.element.find("a").filter(n.navigationFilter).eq(0);
        if (r.length) {
          var i = r.closest(".ui-accordion-header");
          i.length ? t.active = i : t.active = r.closest(".ui-accordion-content").prev()
        }
      }
      t.active = t._findActive(t.active || n.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function(e) {
        return t._keydown(e)
      }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
        "aria-expanded": "false",
        "aria-selected": "false",
        tabIndex: -1
      }).next().hide(), t.active.length ? t.active.attr({
        "aria-expanded": "true",
        "aria-selected": "true",
        tabIndex: 0
      }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), n.event && t.headers.bind(n.event.split(" ").join(".accordion ") + ".accordion", function(e) {
        t._clickHandler.call(t, e, this), e.preventDefault()
      })
    },
    _createIcons: function() {
      var t = this.options;
      t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
    },
    _destroyIcons: function() {
      this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
    },
    destroy: function() {
      var t = this.options;
      this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
      var n = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
      return (t.autoHeight || t.fillHeight) && n.css("height", ""), e.Widget.prototype.destroy.call(this)
    },
    _setOption: function(t, n) {
      e.Widget.prototype._setOption.apply(this, arguments), t == "active" && this.activate(n), t == "icons" && (this._destroyIcons(), n && this._createIcons()), t == "disabled" && this.headers.add(this.headers.next())[n ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
    },
    _keydown: function(t) {
      if (this.options.disabled || t.altKey || t.ctrlKey) return;
      var n = e.ui.keyCode,
        r = this.headers.length,
        i = this.headers.index(t.target),
        s = !1;
      switch (t.keyCode) {
        case n.RIGHT:
        case n.DOWN:
          s = this.headers[(i + 1) % r];
          break;
        case n.LEFT:
        case n.UP:
          s = this.headers[(i - 1 + r) % r];
          break;
        case n.SPACE:
        case n.ENTER:
          this._clickHandler({
            target: t.target
          }, t.target), t.preventDefault()
      }
      return s ? (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), !1) : !0
    },
    resize: function() {
      var t = this.options,
        n;
      if (t.fillSpace) {
        if (e.browser.msie) {
          var r = this.element.parent().css("overflow");
          this.element.parent().css("overflow", "hidden")
        }
        n = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function() {
          n -= e(this).outerHeight(!0)
        }), this.headers.next().each(function() {
          e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
        }).css("overflow", "auto")
      } else t.autoHeight && (n = 0, this.headers.next().each(function() {
        n = Math.max(n, e(this).height("").height())
      }).height(n));
      return this
    },
    activate: function(e) {
      this.options.active = e;
      var t = this._findActive(e)[0];
      return this._clickHandler({
        target: t
      }, t), this
    },
    _findActive: function(t) {
      return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
    },
    _clickHandler: function(t, n) {
      var r = this.options;
      if (r.disabled) return;
      if (!t.target) {
        if (!r.collapsible) return;
        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), this.active.next().addClass("ui-accordion-content-active");
        var i = this.active.next(),
          s = {
            options: r,
            newHeader: e([]),
            oldHeader: r.active,
            newContent: e([]),
            oldContent: i
          },
          o = this.active = e([]);
        this._toggle(o, i, s);
        return
      }
      var u = e(t.currentTarget || n),
        f = u[0] === this.active[0];
      r.active = r.collapsible && f ? !1 : this.headers.index(u);
      if (this.running || !r.collapsible && f) return;
      var l = this.active,
        o = u.next(),
        i = this.active.next(),
        s = {
          options: r,
          newHeader: f && r.collapsible ? e([]) : u,
          oldHeader: this.active,
          newContent: f && r.collapsible ? e([]) : o,
          oldContent: i
        },
        c = this.headers.index(this.active[0]) > this.headers.index(u[0]);
      this.active = f ? e([]) : u, this._toggle(o, i, s, f, c), l.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), f || (u.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), u.next().addClass("ui-accordion-content-active"));
      return
    },
    _toggle: function(t, n, r, i, s) {
      var o = this,
        u = o.options;
      o.toShow = t, o.toHide = n, o.data = r;
      var f = function() {
        if (!o) return;
        return o._completed.apply(o, arguments)
      };
      o._trigger("changestart", null, o.data), o.running = n.size() === 0 ? t.size() : n.size();
      if (u.animated) {
        var l = {};
        u.collapsible && i ? l = {
          toShow: e([]),
          toHide: n,
          complete: f,
          down: s,
          autoHeight: u.autoHeight || u.fillSpace
        } : l = {
          toShow: t,
          toHide: n,
          complete: f,
          down: s,
          autoHeight: u.autoHeight || u.fillSpace
        }, u.proxied || (u.proxied = u.animated), u.proxiedDuration || (u.proxiedDuration = u.duration), u.animated = e.isFunction(u.proxied) ? u.proxied(l) : u.proxied, u.duration = e.isFunction(u.proxiedDuration) ? u.proxiedDuration(l) : u.proxiedDuration;
        var c = e.ui.accordion.animations,
          h = u.duration,
          p = u.animated;
        p && !c[p] && !e.easing[p] && (p = "slide"), c[p] || (c[p] = function(e) {
          this.slide(e, {
            easing: p,
            duration: h || 700
          })
        }), c[p](l)
      } else u.collapsible && i ? t.toggle() : (n.hide(), t.show()), f(!0);
      n.prev().attr({
        "aria-expanded": "false",
        "aria-selected": "false",
        tabIndex: -1
      }).blur(), t.prev().attr({
        "aria-expanded": "true",
        "aria-selected": "true",
        tabIndex: 0
      }).focus()
    },
    _completed: function(e) {
      this.running = e ? 0 : --this.running;
      if (this.running) return;
      this.options.clearStyle && this.toShow.add(this.toHide).css({
        height: "",
        overflow: ""
      }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data)
    }
  }), e.extend(e.ui.accordion, {
    version: "1.8.22",
    animations: {
      slide: function(t, n) {
        t = e.extend({
          easing: "swing",
          duration: 300
        }, t, n);
        if (!t.toHide.size()) {
          t.toShow.animate({
            height: "show",
            paddingTop: "show",
            paddingBottom: "show"
          }, t);
          return
        }
        if (!t.toShow.size()) {
          t.toHide.animate({
            height: "hide",
            paddingTop: "hide",
            paddingBottom: "hide"
          }, t);
          return
        }
        var r = t.toShow.css("overflow"),
          i = 0,
          s = {},
          o = {},
          u = ["height", "paddingTop", "paddingBottom"],
          f, l = t.toShow;
        f = l[0].style.width, l.width(l.parent().width() - parseFloat(l.css("paddingLeft")) - parseFloat(l.css("paddingRight")) - (parseFloat(l.css("borderLeftWidth")) || 0) - (parseFloat(l.css("borderRightWidth")) || 0)), e.each(u, function(n, r) {
          o[r] = "hide";
          var i = ("" + e.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/);
          s[r] = {
            value: i[1],
            unit: i[2] || "px"
          }
        }), t.toShow.css({
          height: 0,
          overflow: "hidden"
        }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(o, {
          step: function(e, n) {
            n.prop == "height" && (i = n.end - n.start === 0 ? 0 : (n.now - n.start) / (n.end - n.start)), t.toShow[0].style[n.prop] = i * s[n.prop].value + s[n.prop].unit
          },
          duration: t.duration,
          easing: t.easing,
          complete: function() {
            t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
              width: f,
              overflow: r
            }), t.complete()
          }
        })
      },
      bounceslide: function(e) {
        this.slide(e, {
          easing: e.down ? "easeOutBounce" : "swing",
          duration: e.down ? 1e3 : 200
        })
      }
    }
  })
})(jQuery);
(function(e, t) {
  var n = 0;
  e.widget("ui.autocomplete", {
    options: {
      appendTo: "body",
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null
    },
    pending: 0,
    _create: function() {
      var t = this,
        n = this.element[0].ownerDocument,
        r;
      this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true"
      }).bind("keydown.autocomplete", function(n) {
        if (t.options.disabled || t.element.propAttr("readOnly")) return;
        r = !1;
        var i = e.ui.keyCode;
        switch (n.keyCode) {
          case i.PAGE_UP:
            t._move("previousPage", n);
            break;
          case i.PAGE_DOWN:
            t._move("nextPage", n);
            break;
          case i.UP:
            t._keyEvent("previous", n);
            break;
          case i.DOWN:
            t._keyEvent("next", n);
            break;
          case i.ENTER:
          case i.NUMPAD_ENTER:
            t.menu.active && (r = !0, n.preventDefault());
          case i.TAB:
            if (!t.menu.active) return;
            t.menu.select(n);
            break;
          case i.ESCAPE:
            t.element.val(t.term), t.close(n);
            break;
          default:
            clearTimeout(t.searching), t.searching = setTimeout(function() {
              t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
            }, t.options.delay)
        }
      }).bind("keypress.autocomplete", function(e) {
        r && (r = !1, e.preventDefault())
      }).bind("focus.autocomplete", function() {
        if (t.options.disabled) return;
        t.selectedItem = null, t.previous = t.element.val()
      }).bind("blur.autocomplete", function(e) {
        if (t.options.disabled) return;
        clearTimeout(t.searching), t.closing = setTimeout(function() {
          t.close(e), t._change(e)
        }, 150)
      }), this._initSource(), this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function(n) {
        var r = t.menu.element[0];
        e(n.target).closest(".ui-menu-item").length || setTimeout(function() {
          e(document).one("mousedown", function(n) {
            n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
          })
        }, 1), setTimeout(function() {
          clearTimeout(t.closing)
        }, 13)
      }).menu({
        focus: function(e, n) {
          var r = n.item.data("item.autocomplete");
          !1 !== t._trigger("focus", e, {
            item: r
          }) && /^key/.test(e.originalEvent.type) && t.element.val(r.value)
        },
        selected: function(e, r) {
          var i = r.item.data("item.autocomplete"),
            s = t.previous;
          t.element[0] !== n.activeElement && (t.element.focus(), t.previous = s, setTimeout(function() {
            t.previous = s, t.selectedItem = i
          }, 1)), !1 !== t._trigger("select", e, {
            item: i
          }) && t.element.val(i.value), t.term = t.element.val(), t.close(e), t.selectedItem = i
        },
        blur: function(e, n) {
          t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
        }
      }).zIndex(this.element.zIndex() + 1).css({
        top: 0,
        left: 0
      }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe(), t.beforeunloadHandler = function() {
        t.element.removeAttr("autocomplete")
      }, e(window).bind("beforeunload", t.beforeunloadHandler)
    },
    destroy: function() {
      this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e(window).unbind("beforeunload", this.beforeunloadHandler), e.Widget.prototype.destroy.call(this)
    },
    _setOption: function(t, n) {
      e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), t === "disabled" && n && this.xhr && this.xhr.abort()
    },
    _initSource: function() {
      var t = this,
        n, r;
      e.isArray(this.options.source) ? (n = this.options.source, this.source = function(t, r) {
        r(e.ui.autocomplete.filter(n, t.term))
      }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(n, i) {
        t.xhr && t.xhr.abort(), t.xhr = e.ajax({
          url: r,
          data: n,
          dataType: "json",
          success: function(e, t) {
            i(e)
          },
          error: function() {
            i([])
          }
        })
      }) : this.source = this.options.source
    },
    search: function(e, t) {
      e = e != null ? e : this.element.val(), this.term = this.element.val();
      if (e.length < this.options.minLength) return this.close(t);
      clearTimeout(this.closing);
      if (this._trigger("search", t) === !1) return;
      return this._search(e)
    },
    _search: function(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
        term: e
      }, this._response())
    },
    _response: function() {
      var e = this,
        t = ++n;
      return function(r) {
        t === n && e.__response(r), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
      }
    },
    __response: function(e) {
      !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close()
    },
    close: function(e) {
      clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
    },
    _change: function(e) {
      this.previous !== this.element.val() && this._trigger("change", e, {
        item: this.selectedItem
      })
    },
    _normalize: function(t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
        return typeof t == "string" ? {
          label: t,
          value: t
        } : e.extend({
          label: t.label || t.value,
          value: t.value || t.label
        }, t)
      })
    },
    _suggest: function(t) {
      var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
      this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
    },
    _resizeMenu: function() {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(t, n) {
      var r = this;
      e.each(n, function(e, n) {
        r._renderItem(t, n)
      })
    },
    _renderItem: function(t, n) {
      return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
    },
    _move: function(e, t) {
      if (!this.menu.element.is(":visible")) {
        this.search(null, t);
        return
      }
      if (this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e)) {
        this.element.val(this.term), this.menu.deactivate();
        return
      }
      this.menu[e](t)
    },
    widget: function() {
      return this.menu.element
    },
    _keyEvent: function(e, t) {
      if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function(e) {
      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    },
    filter: function(t, n) {
      var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
      return e.grep(t, function(e) {
        return r.test(e.label || e.value || e)
      })
    }
  })
})(jQuery),
function(e) {
  e.widget("ui.menu", {
    _create: function() {
      var t = this;
      this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
        role: "listbox",
        "aria-activedescendant": "ui-active-menuitem"
      }).click(function(n) {
        if (!e(n.target).closest(".ui-menu-item a").length) return;
        n.preventDefault(), t.select(n)
      }), this.refresh()
    },
    refresh: function() {
      var t = this,
        n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
      n.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(n) {
        t.activate(n, e(this).parent())
      }).mouseleave(function() {
        t.deactivate()
      })
    },
    activate: function(e, t) {
      this.deactivate();
      if (this.hasScroll()) {
        var n = t.offset().top - this.element.offset().top,
          r = this.element.scrollTop(),
          i = this.element.height();
        n < 0 ? this.element.scrollTop(r + n) : n >= i && this.element.scrollTop(r + n - i + t.height())
      }
      this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
        item: t
      })
    },
    deactivate: function() {
      if (!this.active) return;
      this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null
    },
    next: function(e) {
      this.move("next", ".ui-menu-item:first", e)
    },
    previous: function(e) {
      this.move("prev", ".ui-menu-item:last", e)
    },
    first: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    last: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    move: function(e, t, n) {
      if (!this.active) {
        this.activate(n, this.element.children(t));
        return
      }
      var r = this.active[e + "All"](".ui-menu-item").eq(0);
      r.length ? this.activate(n, r) : this.activate(n, this.element.children(t))
    },
    nextPage: function(t) {
      if (this.hasScroll()) {
        if (!this.active || this.last()) {
          this.activate(t, this.element.children(".ui-menu-item:first"));
          return
        }
        var n = this.active.offset().top,
          r = this.element.height(),
          i = this.element.children(".ui-menu-item").filter(function() {
            var t = e(this).offset().top - n - r + e(this).height();
            return t < 10 && t > -10
          });
        i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
      } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
    },
    previousPage: function(t) {
      if (this.hasScroll()) {
        if (!this.active || this.first()) {
          this.activate(t, this.element.children(".ui-menu-item:last"));
          return
        }
        var n = this.active.offset().top,
          r = this.element.height(),
          i = this.element.children(".ui-menu-item").filter(function() {
            var t = e(this).offset().top - n + r - e(this).height();
            return t < 10 && t > -10
          });
        i.length || (i = this.element.children(".ui-menu-item:first")), this.activate(t, i)
      } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
    },
    hasScroll: function() {
      return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
    },
    select: function(e) {
      this._trigger("selected", e, {
        item: this.active
      })
    }
  })
}(jQuery);
(function(e, t) {
  var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
    u = "ui-state-hover ui-state-active ",
    a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
    f = function() {
      var t = e(this).find(":ui-button");
      setTimeout(function() {
        t.button("refresh")
      }, 1)
    },
    l = function(t) {
      var n = t.name,
        r = t.form,
        i = e([]);
      return n && (r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
        return !this.form
      })), i
    };
  e.widget("ui.button", {
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function() {
      this.element.closest("form").unbind("reset.button").bind("reset.button", f), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
      var t = this,
        u = this.options,
        a = this.type === "checkbox" || this.type === "radio",
        h = "ui-state-hover" + (a ? "" : " ui-state-active"),
        p = "ui-state-focus";
      u.label === null && (u.label = this.buttonElement.html()), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter.button", function() {
        if (u.disabled) return;
        e(this).addClass("ui-state-hover"), this === n && e(this).addClass("ui-state-active")
      }).bind("mouseleave.button", function() {
        if (u.disabled) return;
        e(this).removeClass(h)
      }).bind("click.button", function(e) {
        u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
      }), this.element.bind("focus.button", function() {
        t.buttonElement.addClass(p)
      }).bind("blur.button", function() {
        t.buttonElement.removeClass(p)
      }), a && (this.element.bind("change.button", function() {
        if (s) return;
        t.refresh()
      }), this.buttonElement.bind("mousedown.button", function(e) {
        if (u.disabled) return;
        s = !1, r = e.pageX, i = e.pageY
      }).bind("mouseup.button", function(e) {
        if (u.disabled) return;
        if (r !== e.pageX || i !== e.pageY) s = !0
      })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function() {
        if (u.disabled || s) return !1;
        e(this).toggleClass("ui-state-active"), t.buttonElement.attr("aria-pressed", t.element[0].checked)
      }) : this.type === "radio" ? this.buttonElement.bind("click.button", function() {
        if (u.disabled || s) return !1;
        e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
        var n = t.element[0];
        l(n).not(n).map(function() {
          return e(this).button("widget")[0]
        }).removeClass("ui-state-active").attr("aria-pressed", "false")
      }) : (this.buttonElement.bind("mousedown.button", function() {
        if (u.disabled) return !1;
        e(this).addClass("ui-state-active"), n = this, e(document).one("mouseup", function() {
          n = null
        })
      }).bind("mouseup.button", function() {
        if (u.disabled) return !1;
        e(this).removeClass("ui-state-active")
      }).bind("keydown.button", function(t) {
        if (u.disabled) return !1;
        (t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
      }).bind("keyup.button", function() {
        e(this).removeClass("ui-state-active")
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click()
      })), this._setOption("disabled", u.disabled), this._resetButton()
    },
    _determineButtonType: function() {
      this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
      if (this.type === "checkbox" || this.type === "radio") {
        var e = this.element.parents().filter(":last"),
          t = "label[for='" + this.element.attr("id") + "']";
        this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible");
        var n = this.element.is(":checked");
        n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", n)
      } else this.buttonElement = this.element
    },
    widget: function() {
      return this.buttonElement
    },
    destroy: function() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
    },
    _setOption: function(t, n) {
      e.Widget.prototype._setOption.apply(this, arguments);
      if (t === "disabled") {
        n ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
        return
      }
      this._resetButton()
    },
    refresh: function() {
      var t = this.element.is(":disabled");
      t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function() {
        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
      }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
    },
    _resetButton: function() {
      if (this.type === "input") {
        this.options.label && this.element.val(this.options.label);
        return
      }
      var t = this.buttonElement.removeClass(a),
        n = e("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
        r = this.options.icons,
        i = r.primary && r.secondary,
        s = [];
      r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", n))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
    }
  }), e.widget("ui.buttonset", {
    options: {
      items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
    },
    _create: function() {
      this.element.addClass("ui-buttonset")
    },
    _init: function() {
      this.refresh()
    },
    _setOption: function(t, n) {
      t === "disabled" && this.buttons.button("option", t, n), e.Widget.prototype._setOption.apply(this, arguments)
    },
    refresh: function() {
      var t = this.element.css("direction") === "rtl";
      this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
        return e(this).button("widget")[0]
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
    },
    destroy: function() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
        return e(this).button("widget")[0]
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
    }
  })
})(jQuery);
(function(e, t) {
  var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
    r = {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    i = {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    s = e.attrFn || {
      val: !0,
      css: !0,
      html: !0,
      text: !0,
      data: !0,
      width: !0,
      height: !0,
      offset: !0,
      click: !0
    };
  e.widget("ui.dialog", {
    options: {
      autoOpen: !0,
      buttons: {},
      closeOnEscape: !0,
      closeText: "close",
      dialogClass: "",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: !1,
      maxWidth: !1,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        collision: "fit",
        using: function(t) {
          var n = e(this).css(t).offset().top;
          n < 0 && e(this).css("top", t.top - n)
        }
      },
      resizable: !0,
      show: null,
      stack: !0,
      title: "",
      width: 300,
      zIndex: 1e3
    },
    _create: function() {
      this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
      var t = this,
        r = t.options,
        i = r.title || "&#160;",
        s = e.ui.dialog.getTitleId(t.element),
        o = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass(n + r.dialogClass).css({
          zIndex: r.zIndex
        }).attr("tabIndex", -1).css("outline", 0).keydown(function(n) {
          r.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
        }).attr({
          role: "dialog",
          "aria-labelledby": s
        }).mousedown(function(e) {
          t.moveToTop(!1, e)
        }),
        u = t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(o),
        f = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(o),
        l = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
          l.addClass("ui-state-hover")
        }, function() {
          l.removeClass("ui-state-hover")
        }).focus(function() {
          l.addClass("ui-state-focus")
        }).blur(function() {
          l.removeClass("ui-state-focus")
        }).click(function(e) {
          return t.close(e), !1
        }).appendTo(f),
        h = (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(l),
        p = e("<span></span>").addClass("ui-dialog-title").attr("id", s).html(i).prependTo(f);
      e.isFunction(r.beforeclose) && !e.isFunction(r.beforeClose) && (r.beforeClose = r.beforeclose), f.find("*").add(f).disableSelection(), r.draggable && e.fn.draggable && t._makeDraggable(), r.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(r.buttons), t._isOpen = !1, e.fn.bgiframe && o.bgiframe()
    },
    _init: function() {
      this.options.autoOpen && this.open()
    },
    destroy: function() {
      var e = this;
      return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
    },
    widget: function() {
      return this.uiDialog
    },
    close: function(t) {
      var n = this,
        r, i;
      if (!1 === n._trigger("beforeClose", t)) return;
      return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function() {
        n._trigger("close", t)
      }) : (n.uiDialog.hide(), n._trigger("close", t)), e.ui.dialog.overlay.resize(), n.options.modal && (r = 0, e(".ui-dialog").each(function() {
        this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
      }), e.ui.dialog.maxZ = r), n
    },
    isOpen: function() {
      return this._isOpen
    },
    moveToTop: function(t, n) {
      var r = this,
        i = r.options,
        s;
      return i.modal && !t || !i.stack && !i.modal ? r._trigger("focus", n) : (i.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = i.zIndex), r.overlay && (e.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), s = {
        scrollTop: r.element.scrollTop(),
        scrollLeft: r.element.scrollLeft()
      }, e.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", e.ui.dialog.maxZ), r.element.attr(s), r._trigger("focus", n), r)
    },
    open: function() {
      if (this._isOpen) return;
      var t = this,
        n = t.options,
        r = t.uiDialog;
      return t.overlay = n.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(n.position), r.show(n.show), t.moveToTop(!0), n.modal && r.bind("keydown.ui-dialog", function(t) {
        if (t.keyCode !== e.ui.keyCode.TAB) return;
        var n = e(":tabbable", this),
          r = n.filter(":first"),
          i = n.filter(":last");
        if (t.target === i[0] && !t.shiftKey) return r.focus(1), !1;
        if (t.target === r[0] && t.shiftKey) return i.focus(1), !1
      }), e(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
    },
    _createButtons: function(t) {
      var n = this,
        r = !1,
        i = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
        o = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(i);
      n.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof t == "object" && t !== null && e.each(t, function() {
        return !(r = !0)
      }), r && (e.each(t, function(t, r) {
        r = e.isFunction(r) ? {
          click: r,
          text: t
        } : r;
        var i = e('<button type="button"></button>').click(function() {
          r.click.apply(n.element[0], arguments)
        }).appendTo(o);
        e.each(r, function(e, t) {
          if (e === "click") return;
          e in s ? i[e](t) : i.attr(e, t)
        }), e.fn.button && i.button()
      }), i.appendTo(n.uiDialog))
    },
    _makeDraggable: function() {
      function t(e) {
        return {
          position: e.position,
          offset: e.offset
        }
      }

      var n = this,
        r = n.options,
        i = e(document),
        s;
      n.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function(i, o) {
          s = r.height === "auto" ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", i, t(o))
        },
        drag: function(e, r) {
          n._trigger("drag", e, t(r))
        },
        stop: function(o, u) {
          r.position = [u.position.left - i.scrollLeft(), u.position.top - i.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(s), n._trigger("dragStop", o, t(u)), e.ui.dialog.overlay.resize()
        }
      })
    },
    _makeResizable: function(n) {
      function r(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size
        }
      }

      n = n === t ? this.options.resizable : n;
      var i = this,
        s = i.options,
        o = i.uiDialog.css("position"),
        u = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw";
      i.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: i.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: i._minHeight(),
        handles: u,
        start: function(t, n) {
          e(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", t, r(n))
        },
        resize: function(e, t) {
          i._trigger("resize", e, r(t))
        },
        stop: function(t, n) {
          e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), i._trigger("resizeStop", t, r(n)), e.ui.dialog.overlay.resize()
        }
      }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    },
    _minHeight: function() {
      var e = this.options;
      return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
    },
    _position: function(t) {
      var n = [],
        r = [0, 0],
        i;
      if (t) {
        if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function(e, t) {
          +n[e] === n[e] && (r[e] = n[e], n[e] = t)
        }), t = {
          my: n.join(" "),
          at: n.join(" "),
          offset: r.join(" ")
        };
        t = e.extend({}, e.ui.dialog.prototype.options.position, t)
      } else t = e.ui.dialog.prototype.options.position;
      i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.css({
        top: 0,
        left: 0
      }).position(e.extend({
        of: window
      }, t)), i || this.uiDialog.hide()
    },
    _setOptions: function(t) {
      var n = this,
        s = {},
        o = !1;
      e.each(t, function(e, t) {
        n._setOption(e, t), e in r && (o = !0), e in i && (s[e] = t)
      }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
    },
    _setOption: function(t, r) {
      var i = this,
        s = i.uiDialog;
      switch (t) {
        case "beforeclose":
          t = "beforeClose";
          break;
        case "buttons":
          i._createButtons(r);
          break;
        case "closeText":
          i.uiDialogTitlebarCloseText.text("" + r);
          break;
        case "dialogClass":
          s.removeClass(i.options.dialogClass).addClass(n + r);
          break;
        case "disabled":
          r ? s.addClass("ui-dialog-disabled") : s.removeClass("ui-dialog-disabled");
          break;
        case "draggable":
          var o = s.is(":data(draggable)");
          o && !r && s.draggable("destroy"), !o && r && i._makeDraggable();
          break;
        case "position":
          i._position(r);
          break;
        case "resizable":
          var u = s.is(":data(resizable)");
          u && !r && s.resizable("destroy"), u && typeof r == "string" && s.resizable("option", "handles", r), !u && r !== !1 && i._makeResizable(r);
          break;
        case "title":
          e(".ui-dialog-title", i.uiDialogTitlebar).html("" + (r || "&#160;"))
      }
      e.Widget.prototype._setOption.apply(i, arguments)
    },
    _size: function() {
      var t = this.options,
        n, r, i = this.uiDialog.is(":visible");
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        height: 0
      }), t.minWidth > t.width && (t.width = t.minWidth), n = this.uiDialog.css({
        height: "auto",
        width: t.width
      }).height(), r = Math.max(0, t.minHeight - n);
      if (t.height === "auto")
        if (e.support.minHeight) this.element.css({
          minHeight: r,
          height: "auto"
        });
        else {
          this.uiDialog.show();
          var s = this.element.css("height", "auto").height();
          i || this.uiDialog.hide(), this.element.height(Math.max(s, r))
        } else this.element.height(Math.max(t.height - n, 0));
      this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    }
  }), e.extend(e.ui.dialog, {
    version: "1.8.22",
    uuid: 0,
    maxZ: 0,
    getTitleId: function(e) {
      var t = e.attr("id");
      return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
    },
    overlay: function(t) {
      this.$el = e.ui.dialog.overlay.create(t)
    }
  }), e.extend(e.ui.dialog.overlay, {
    instances: [],
    oldInstances: [],
    maxZ: 0,
    events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) {
      return e + ".dialog-overlay"
    }).join(" "),
    create: function(t) {
      this.instances.length === 0 && (setTimeout(function() {
        e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) {
          if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
        })
      }, 1), e(document).bind("keydown.dialog-overlay", function(n) {
        t.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
      }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
      var n = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
        width: this.width(),
        height: this.height()
      });
      return e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
    },
    destroy: function(t) {
      var n = e.inArray(t, this.instances);
      n != -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.remove();
      var r = 0;
      e.each(this.instances, function() {
        r = Math.max(r, this.css("z-index"))
      }), this.maxZ = r
    },
    height: function() {
      var t, n;
      return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
    },
    width: function() {
      var t, n;
      return e.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
    },
    resize: function() {
      var t = e([]);
      e.each(e.ui.dialog.overlay.instances, function() {
        t = t.add(this)
      }), t.css({
        width: 0,
        height: 0
      }).css({
        width: e.ui.dialog.overlay.width(),
        height: e.ui.dialog.overlay.height()
      })
    }
  }), e.extend(e.ui.dialog.overlay.prototype, {
    destroy: function() {
      e.ui.dialog.overlay.destroy(this.$el)
    }
  })
})(jQuery);
(function(e, t) {
  var n = 5;
  e.widget("ui.slider", e.ui.mouse, {
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null
    },
    _create: function() {
      var t = this,
        r = this.options,
        i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
        s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = r.values && r.values.length || 1,
        u = [];
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]), r.values.length && r.values.length !== 2 && (r.values = [r.values[0], r.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (r.range === "min" || r.range === "max" ? " ui-slider-range-" + r.range : "")));
      for (var f = i.length; f < o; f += 1) u.push(s);
      this.handles = i.add(e(u.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
        e.preventDefault()
      }).hover(function() {
        r.disabled || e(this).addClass("ui-state-hover")
      }, function() {
        e(this).removeClass("ui-state-hover")
      }).focus(function() {
        r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
      }).blur(function() {
        e(this).removeClass("ui-state-focus")
      }), this.handles.each(function(t) {
        e(this).data("index.ui-slider-handle", t)
      }), this.handles.keydown(function(r) {
        var i = e(this).data("index.ui-slider-handle"),
          s, o, u, f;
        if (t.options.disabled) return;
        switch (r.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            r.preventDefault();
            if (!t._keySliding) {
              t._keySliding = !0, e(this).addClass("ui-state-active"), s = t._start(r, i);
              if (s === !1) return
            }
        }
        f = t.options.step, t.options.values && t.options.values.length ? o = u = t.values(i) : o = u = t.value();
        switch (r.keyCode) {
          case e.ui.keyCode.HOME:
            u = t._valueMin();
            break;
          case e.ui.keyCode.END:
            u = t._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            u = t._trimAlignValue(o + (t._valueMax() - t._valueMin()) / n);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            u = t._trimAlignValue(o - (t._valueMax() - t._valueMin()) / n);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (o === t._valueMax()) return;
            u = t._trimAlignValue(o + f);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (o === t._valueMin()) return;
            u = t._trimAlignValue(o - f)
        }
        t._slide(r, i, u)
      }).keyup(function(n) {
        var r = e(this).data("index.ui-slider-handle");
        t._keySliding && (t._keySliding = !1, t._stop(n, r), t._change(n, r), e(this).removeClass("ui-state-active"))
      }), this._refreshValue(), this._animateOff = !1
    },
    destroy: function() {
      return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
    },
    _mouseCapture: function(t) {
      var n = this.options,
        r, i, s, o, u, f, l, c, h;
      return n.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), r = {
        x: t.pageX,
        y: t.pageY
      }, i = this._normValueFromMouse(r), s = this._valueMax() - this._valueMin() + 1, u = this, this.handles.each(function(t) {
        var n = Math.abs(i - u.values(t));
        s > n && (s = n, o = e(this), f = t)
      }), n.range === !0 && this.values(1) === n.min && (f += 1, o = e(this.handles[f])), l = this._start(t, f), l === !1 ? !1 : (this._mouseSliding = !0, u._handleIndex = f, o.addClass("ui-state-active").focus(), c = o.offset(), h = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = h ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - c.left - o.width() / 2,
        top: t.pageY - c.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, f, i), this._animateOff = !0, !0))
    },
    _mouseStart: function(e) {
      return !0
    },
    _mouseDrag: function(e) {
      var t = {
          x: e.pageX,
          y: e.pageY
        },
        n = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, n), !1
    },
    _mouseStop: function(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(e) {
      var t, n, r, i, s;
      return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
    },
    _start: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
    },
    _slide: function(e, t, n) {
      var r, i, s;
      this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
        handle: this.handles[t],
        value: n,
        values: i
      }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
        handle: this.handles[t],
        value: n
      }), s !== !1 && this.value(n))
    },
    _stop: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
    },
    _change: function(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
      }
    },
    value: function(e) {
      if (arguments.length) {
        this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
        return
      }
      return this._value()
    },
    values: function(t, n) {
      var r, i, s;
      if (arguments.length > 1) {
        this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
        return
      }
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
      r = this.options.values, i = arguments[0];
      for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
      this._refreshValue()
    },
    _setOption: function(t, n) {
      var r, i = 0;
      e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
      switch (t) {
        case "disabled":
          n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
          break;
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          this._animateOff = !0, this._refreshValue();
          for (r = 0; r < i; r += 1) this._change(null, r);
          this._animateOff = !1
      }
    },
    _value: function() {
      var e = this.options.value;
      return e = this._trimAlignValue(e), e
    },
    _values: function(e) {
      var t, n, r;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
      n = this.options.values.slice();
      for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
      return n
    },
    _trimAlignValue: function(e) {
      if (e <= this._valueMin()) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        n = (e - this._valueMin()) % t,
        r = e - n;
      return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.options.max
    },
    _refreshValue: function() {
      var t = this.options.range,
        n = this.options,
        r = this,
        i = this._animateOff ? !1 : n.animate,
        s, o = {},
        u, f, l, c;
      this.options.values && this.options.values.length ? this.handles.each(function(t, f) {
        s = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", e(this).stop(1, 1)[i ? "animate" : "css"](o, n.animate), r.options.range === !0 && (r.orientation === "horizontal" ? (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
          left: s + "%"
        }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
          width: s - u + "%"
        }, {
          queue: !1,
          duration: n.animate
        })) : (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
          bottom: s + "%"
        }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
          height: s - u + "%"
        }, {
          queue: !1,
          duration: n.animate
        }))), u = s
      }) : (f = this.value(), l = this._valueMin(), c = this._valueMax(), s = c !== l ? (f - l) / (c - l) * 100 : 0, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, n.animate), t === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[i ? "animate" : "css"]({
        width: s + "%"
      }, n.animate), t === "max" && this.orientation === "horizontal" && this.range[i ? "animate" : "css"]({
        width: 100 - s + "%"
      }, {
        queue: !1,
        duration: n.animate
      }), t === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[i ? "animate" : "css"]({
        height: s + "%"
      }, n.animate), t === "max" && this.orientation === "vertical" && this.range[i ? "animate" : "css"]({
        height: 100 - s + "%"
      }, {
        queue: !1,
        duration: n.animate
      }))
    }
  }), e.extend(e.ui.slider, {
    version: "1.8.22"
  })
})(jQuery);
(function(e, t) {
  function n() {
    return ++i
  }

  function r() {
    return ++s
  }

  var i = 0,
    s = 0;
  e.widget("ui.tabs", {
    options: {
      add: null,
      ajaxOptions: null,
      cache: !1,
      cookie: null,
      collapsible: !1,
      disable: null,
      disabled: [],
      enable: null,
      event: "click",
      fx: null,
      idPrefix: "ui-tabs-",
      load: null,
      panelTemplate: "<div></div>",
      remove: null,
      select: null,
      show: null,
      spinner: "<em>Loading&#8230;</em>",
      tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
    },
    _create: function() {
      this._tabify(!0)
    },
    _setOption: function(e, t) {
      if (e == "selected") {
        if (this.options.collapsible && t == this.options.selected) return;
        this.select(t)
      } else this.options[e] = t, this._tabify()
    },
    _tabId: function(e) {
      return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + n()
    },
    _sanitizeSelector: function(e) {
      return e.replace(/:/g, "\\:")
    },
    _cookie: function() {
      var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + r());
      return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
    },
    _ui: function(e, t) {
      return {
        tab: e,
        panel: t,
        index: this.anchors.index(e)
      }
    },
    _cleanup: function() {
      this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
        var t = e(this);
        t.html(t.data("label.tabs")).removeData("label.tabs")
      })
    },
    _tabify: function(n) {
      function r(t, n) {
        t.css("display", ""), !e.support.opacity && n.opacity && t[0].style.removeAttribute("filter")
      }

      var i = this,
        s = this.options,
        o = /^#.+/;
      this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
        return e("a", this)[0]
      }), this.panels = e([]), this.anchors.each(function(t, n) {
        var r = e(n).attr("href"),
          u = r.split("#")[0],
          f;
        u && (u === location.toString().split("#")[0] || (f = e("base")[0]) && u === f.href) && (r = n.hash, n.href = r);
        if (o.test(r)) i.panels = i.panels.add(i.element.find(i._sanitizeSelector(r)));
        else if (r && r !== "#") {
          e.data(n, "href.tabs", r), e.data(n, "load.tabs", r.replace(/#.*$/, ""));
          var l = i._tabId(n);
          n.href = "#" + l;
          var c = i.element.find("#" + l);
          c.length || (c = e(s.panelTemplate).attr("id", l).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[t - 1] || i.list), c.data("destroy.tabs", !0)), i.panels = i.panels.add(c)
        } else s.disabled.push(t)
      }), n ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), s.selected === t ? (location.hash && this.anchors.each(function(e, t) {
        if (t.hash == location.hash) return s.selected = e, !1
      }), typeof s.selected != "number" && s.cookie && (s.selected = parseInt(i._cookie(), 10)), typeof s.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), s.selected = s.selected || (this.lis.length ? 0 : -1)) : s.selected === null && (s.selected = -1), s.selected = s.selected >= 0 && this.anchors[s.selected] || s.selected < 0 ? s.selected : 0, s.disabled = e.unique(s.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function(e, t) {
        return i.lis.index(e)
      }))).sort(), e.inArray(s.selected, s.disabled) != -1 && s.disabled.splice(e.inArray(s.selected, s.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), s.selected >= 0 && this.anchors.length && (i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(s.selected).addClass("ui-tabs-selected ui-state-active"), i.element.queue("tabs", function() {
        i._trigger("show", null, i._ui(i.anchors[s.selected], i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash))[0]))
      }), this.load(s.selected)), e(window).bind("unload", function() {
        i.lis.add(i.anchors).unbind(".tabs"), i.lis = i.anchors = i.panels = null
      })) : s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[s.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), s.cookie && this._cookie(s.selected, s.cookie);
      for (var u = 0, f; f = this.lis[u]; u++) e(f)[e.inArray(u, s.disabled) != -1 && !e(f).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
      s.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
      if (s.event !== "mouseover") {
        var l = function(e, t) {
            t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
          },
          c = function(e, t) {
            t.removeClass("ui-state-" + e)
          };
        this.lis.bind("mouseover.tabs", function() {
          l("hover", e(this))
        }), this.lis.bind("mouseout.tabs", function() {
          c("hover", e(this))
        }), this.anchors.bind("focus.tabs", function() {
          l("focus", e(this).closest("li"))
        }), this.anchors.bind("blur.tabs", function() {
          c("focus", e(this).closest("li"))
        })
      }
      var h, p;
      s.fx && (e.isArray(s.fx) ? (h = s.fx[0], p = s.fx[1]) : h = p = s.fx);
      var d = p ? function(t, n) {
          e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.hide().removeClass("ui-tabs-hide").animate(p, p.duration || "normal", function() {
            r(n, p), i._trigger("show", null, i._ui(t, n[0]))
          })
        } : function(t, n) {
          e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.removeClass("ui-tabs-hide"), i._trigger("show", null, i._ui(t, n[0]))
        },
        v = h ? function(e, t) {
          t.animate(h, h.duration || "normal", function() {
            i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r(t, h), i.element.dequeue("tabs")
          })
        } : function(e, t, n) {
          i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), i.element.dequeue("tabs")
        };
      this.anchors.bind(s.event + ".tabs", function() {
        var t = this,
          n = e(t).closest("li"),
          r = i.panels.filter(":not(.ui-tabs-hide)"),
          o = i.element.find(i._sanitizeSelector(t.hash));
        if (n.hasClass("ui-tabs-selected") && !s.collapsible || n.hasClass("ui-state-disabled") || n.hasClass("ui-state-processing") || i.panels.filter(":animated").length || i._trigger("select", null, i._ui(this, o[0])) === !1) return this.blur(), !1;
        s.selected = i.anchors.index(this), i.abort();
        if (s.collapsible) {
          if (n.hasClass("ui-tabs-selected")) return s.selected = -1, s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function() {
            v(t, r)
          }).dequeue("tabs"), this.blur(), !1;
          if (!r.length) return s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function() {
            d(t, o)
          }), i.load(i.anchors.index(this)), this.blur(), !1
        }
        s.cookie && i._cookie(s.selected, s.cookie);
        if (o.length) r.length && i.element.queue("tabs", function() {
          v(t, r)
        }), i.element.queue("tabs", function() {
          d(t, o)
        }), i.load(i.anchors.index(this));
        else throw "jQuery UI Tabs: Mismatching fragment identifier.";
        e.browser.msie && this.blur()
      }), this.anchors.bind("click.tabs", function() {
        return !1
      })
    },
    _getIndex: function(e) {
      return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
    },
    destroy: function() {
      var t = this.options;
      return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
        var t = e.data(this, "href.tabs");
        t && (this.href = t);
        var n = e(this).unbind(".tabs");
        e.each(["href", "load", "cache"], function(e, t) {
          n.removeData(t + ".tabs")
        })
      }), this.lis.unbind(".tabs").add(this.panels).each(function() {
        e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
      }), t.cookie && this._cookie(null, t.cookie), this
    },
    add: function(n, r, i) {
      i === t && (i = this.anchors.length);
      var s = this,
        o = this.options,
        u = e(o.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, r)),
        f = n.indexOf("#") ? this._tabId(e("a", u)[0]) : n.replace("#", "");
      u.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
      var l = s.element.find("#" + f);
      return l.length || (l = e(o.panelTemplate).attr("id", f).data("destroy.tabs", !0)), l.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (u.appendTo(this.list), l.appendTo(this.list[0].parentNode)) : (u.insertBefore(this.lis[i]), l.insertBefore(this.panels[i])), o.disabled = e.map(o.disabled, function(e, t) {
        return e >= i ? ++e : e
      }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, u.addClass("ui-tabs-selected ui-state-active"), l.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
        s._trigger("show", null, s._ui(s.anchors[0], s.panels[0]))
      }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
    },
    remove: function(t) {
      t = this._getIndex(t);
      var n = this.options,
        r = this.lis.eq(t).remove(),
        i = this.panels.eq(t).remove();
      return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function(e, n) {
        return e != t
      }), function(e, n) {
        return e >= t ? --e : e
      }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
    },
    enable: function(t) {
      t = this._getIndex(t);
      var n = this.options;
      if (e.inArray(t, n.disabled) == -1) return;
      return this.lis.eq(t).removeClass("ui-state-disabled"), n.disabled = e.grep(n.disabled, function(e, n) {
        return e != t
      }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
    },
    disable: function(e) {
      e = this._getIndex(e);
      var t = this,
        n = this.options;
      return e != n.selected && (this.lis.eq(e).addClass("ui-state-disabled"), n.disabled.push(e), n.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
    },
    select: function(e) {
      e = this._getIndex(e);
      if (e == -1)
        if (this.options.collapsible && this.options.selected != -1) e = this.options.selected;
        else return this;
      return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
    },
    load: function(t) {
      t = this._getIndex(t);
      var n = this,
        r = this.options,
        i = this.anchors.eq(t)[0],
        s = e.data(i, "load.tabs");
      this.abort();
      if (!s || this.element.queue("tabs").length !== 0 && e.data(i, "cache.tabs")) {
        this.element.dequeue("tabs");
        return
      }
      this.lis.eq(t).addClass("ui-state-processing");
      if (r.spinner) {
        var o = e("span", i);
        o.data("label.tabs", o.html()).html(r.spinner)
      }
      return this.xhr = e.ajax(e.extend({}, r.ajaxOptions, {
        url: s,
        success: function(s, o) {
          n.element.find(n._sanitizeSelector(i.hash)).html(s), n._cleanup(), r.cache && e.data(i, "cache.tabs", !0), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
          try {
            r.ajaxOptions.success(s, o)
          } catch (u) {}
        },
        error: function(e, s, o) {
          n._cleanup(), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
          try {
            r.ajaxOptions.error(e, s, t, i)
          } catch (o) {}
        }
      })), n.element.dequeue("tabs"), this
    },
    abort: function() {
      return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
    },
    url: function(e, t) {
      return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
    },
    length: function() {
      return this.anchors.length
    }
  }), e.extend(e.ui.tabs, {
    version: "1.8.22"
  }), e.extend(e.ui.tabs.prototype, {
    rotation: null,
    rotate: function(e, t) {
      var n = this,
        r = this.options,
        i = n._rotate || (n._rotate = function(t) {
          clearTimeout(n.rotation), n.rotation = setTimeout(function() {
            var e = r.selected;
            n.select(++e < n.anchors.length ? e : 0)
          }, e), t && t.stopPropagation()
        }),
        s = n._unrotate || (n._unrotate = t ? function(e) {
          i()
        } : function(e) {
          e.clientX && n.rotate(null)
        });
      return e ? (this.element.bind("tabsshow", i), this.anchors.bind(r.event + ".tabs", s), i()) : (clearTimeout(n.rotation), this.element.unbind("tabsshow", i), this.anchors.unbind(r.event + ".tabs", s), delete this._rotate, delete this._unrotate), this
    }
  })
})(jQuery);
(function($, undefined) {
  function Datepicker() {
    this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
  }

  function bindHover(e) {
    var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.bind("mouseout", function(e) {
      var n = $(e.target).closest(t);
      if (!n.length) return;
      n.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
    }).bind("mouseover", function(n) {
      var r = $(n.target).closest(t);
      if ($.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || !r.length) return;
      r.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), r.addClass("ui-state-hover"), r.hasClass("ui-datepicker-prev") && r.addClass("ui-datepicker-prev-hover"), r.hasClass("ui-datepicker-next") && r.addClass("ui-datepicker-next-hover")
    })
  }

  function extendRemove(e, t) {
    $.extend(e, t);
    for (var n in t)
      if (t[n] == null || t[n] == undefined) e[n] = t[n];
    return e
  }

  function isArray(e) {
    return e && ($.browser.safari && typeof e == "object" && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/))
  }

  $.extend($.ui, {
    datepicker: {
      version: "1.8.22"
    }
  });
  var PROP_NAME = "datepicker",
    dpuuid = (new Date).getTime(),
    instActive;
  $.extend(Datepicker.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    log: function() {
      this.debug && console.log.apply("", arguments)
    },
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(e) {
      return extendRemove(this._defaults, e || {}), this
    },
    _attachDatepicker: function(target, settings) {
      var inlineSettings = null;
      for (var attrName in this._defaults) {
        var attrValue = target.getAttribute("date:" + attrName);
        if (attrValue) {
          inlineSettings = inlineSettings || {};
          try {
            inlineSettings[attrName] = eval(attrValue)
          } catch (err) {
            inlineSettings[attrName] = attrValue
          }
        }
      }
      var nodeName = target.nodeName.toLowerCase(),
        inline = nodeName == "div" || nodeName == "span";
      target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
      var inst = this._newInst($(target), inline);
      inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
    },
    _newInst: function(e, t) {
      var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: t,
        dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
      }
    },
    _connectDatepicker: function(e, t) {
      var n = $(e);
      t.append = $([]), t.trigger = $([]);
      if (n.hasClass(this.markerClassName)) return;
      this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, r) {
        t.settings[n] = r
      }).bind("getData.datepicker", function(e, n) {
        return this._get(t, n)
      }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e)
    },
    _attachments: function(e, t) {
      var n = this._get(t, "appendText"),
        r = this._get(t, "isRTL");
      t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
      var i = this._get(t, "showOn");
      (i == "focus" || i == "both") && e.focus(this._showDatepicker);
      if (i == "button" || i == "both") {
        var s = this._get(t, "buttonText"),
          o = this._get(t, "buttonImage");
        t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
          src: o,
          alt: s,
          title: s
        }) : $('<button type="button"></button>').addClass(this._triggerClass).html(o == "" ? s : $("<img/>").attr({
          src: o,
          alt: s,
          title: s
        }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function() {
          return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
        })
      }
    },
    _autoSize: function(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t = new Date(2009, 11, 20),
          n = this._get(e, "dateFormat");
        if (n.match(/[DM]/)) {
          var r = function(e) {
            var t = 0,
              n = 0;
            for (var r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
            return n
          };
          t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
        }
        e.input.attr("size", this._formatDate(e, t).length)
      }
    },
    _inlineDatepicker: function(e, t) {
      var n = $(e);
      if (n.hasClass(this.markerClassName)) return;
      n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, r) {
        t.settings[n] = r
      }).bind("getData.datepicker", function(e, n) {
        return this._get(t, n)
      }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block")
    },
    _dialogDatepicker: function(e, t, n, r, i) {
      var s = this._dialogInst;
      if (!s) {
        this.uuid += 1;
        var o = "dp" + this.uuid;
        this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, $.data(this._dialogInput[0], PROP_NAME, s)
      }
      extendRemove(s.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(s, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null;
      if (!this._pos) {
        var u = document.documentElement.clientWidth,
          a = document.documentElement.clientHeight,
          f = document.documentElement.scrollLeft || document.body.scrollLeft,
          l = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = [u / 2 - 100 + f, a / 2 - 150 + l]
      }
      return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, s), this
    },
    _destroyDatepicker: function(e) {
      var t = $(e),
        n = $.data(e, PROP_NAME);
      if (!t.hasClass(this.markerClassName)) return;
      var r = e.nodeName.toLowerCase();
      $.removeData(e, PROP_NAME), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
    },
    _enableDatepicker: function(e) {
      var t = $(e),
        n = $.data(e, PROP_NAME);
      if (!t.hasClass(this.markerClassName)) return;
      var r = e.nodeName.toLowerCase();
      if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      });
      else if (r == "div" || r == "span") {
        var i = t.children("." + this._inlineClass);
        i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
      }
      this._disabledInputs = $.map(this._disabledInputs, function(t) {
        return t == e ? null : t
      })
    },
    _disableDatepicker: function(e) {
      var t = $(e),
        n = $.data(e, PROP_NAME);
      if (!t.hasClass(this.markerClassName)) return;
      var r = e.nodeName.toLowerCase();
      if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      });
      else if (r == "div" || r == "span") {
        var i = t.children("." + this._inlineClass);
        i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
      }
      this._disabledInputs = $.map(this._disabledInputs, function(t) {
        return t == e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e
    },
    _isDisabledDatepicker: function(e) {
      if (!e) return !1;
      for (var t = 0; t < this._disabledInputs.length; t++)
        if (this._disabledInputs[t] == e) return !0;
      return !1
    },
    _getInst: function(e) {
      try {
        return $.data(e, PROP_NAME)
      } catch (t) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(e, t, n) {
      var r = this._getInst(e);
      if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.datepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
      var i = t || {};
      typeof t == "string" && (i = {}, i[t] = n);
      if (r) {
        this._curInst == r && this._hideDatepicker();
        var s = this._getDateDatepicker(e, !0),
          o = this._getMinMaxDate(r, "min"),
          u = this._getMinMaxDate(r, "max");
        extendRemove(r.settings, i), o !== null && i.dateFormat !== undefined && i.minDate === undefined && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== undefined && i.maxDate === undefined && (r.settings.maxDate = this._formatDate(r, u)), this._attachments($(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
      }
    },
    _changeDatepicker: function(e, t, n) {
      this._optionDatepicker(e, t, n)
    },
    _refreshDatepicker: function(e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t)
    },
    _setDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
    },
    _getDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
    },
    _doKeyDown: function(e) {
      var t = $.datepicker._getInst(e.target),
        n = !0,
        r = t.dpDiv.is(".ui-datepicker-rtl");
      t._keyEvent = !0;
      if ($.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          $.datepicker._hideDatepicker(), n = !1;
          break;
        case 13:
          var i = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
          i[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, i[0]);
          var s = $.datepicker._get(t, "onSelect");
          if (s) {
            var o = $.datepicker._formatDate(t);
            s.apply(t.input ? t.input[0] : null, [o, t])
          } else $.datepicker._hideDatepicker();
          return !1;
        case 27:
          $.datepicker._hideDatepicker();
          break;
        case 33:
          $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
          break;
        case 34:
          $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
          break;
        default:
          n = !1
      } else e.keyCode == 36 && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
      n && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(e) {
      var t = $.datepicker._getInst(e.target);
      if ($.datepicker._get(t, "constrainInput")) {
        var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
          r = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
        return e.ctrlKey || e.metaKey || r < " " || !n || n.indexOf(r) > -1
      }
    },
    _doKeyUp: function(e) {
      var t = $.datepicker._getInst(e.target);
      if (t.input.val() != t.lastVal) try {
        var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
        n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
      } catch (r) {
        $.datepicker.log(r)
      }
      return !0
    },
    _showDatepicker: function(e) {
      e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
      if ($.datepicker._isDisabledDatepicker(e) || $.datepicker._lastInput == e) return;
      var t = $.datepicker._getInst(e);
      $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
      var n = $.datepicker._get(t, "beforeShow"),
        r = n ? n.apply(e, [e, t]) : {};
      if (r === !1) return;
      extendRemove(t.settings, r), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
      var i = !1;
      $(e).parents().each(function() {
        return i |= $(this).css("position") == "fixed", !i
      }), i && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
      var s = {
        left: $.datepicker._pos[0],
        top: $.datepicker._pos[1]
      };
      $.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      }), $.datepicker._updateDatepicker(t), s = $.datepicker._checkOffset(t, s, i), t.dpDiv.css({
        position: $.datepicker._inDialog && $.blockUI ? "static" : i ? "fixed" : "absolute",
        display: "none",
        left: s.left + "px",
        top: s.top + "px"
      });
      if (!t.inline) {
        var o = $.datepicker._get(t, "showAnim"),
          u = $.datepicker._get(t, "duration"),
          a = function() {
            var e = t.dpDiv.find("iframe.ui-datepicker-cover");
            if (!!e.length) {
              var n = $.datepicker._getBorders(t.dpDiv);
              e.css({
                left: -n[0],
                top: -n[1],
                width: t.dpDiv.outerWidth(),
                height: t.dpDiv.outerHeight()
              })
            }
          };
        t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[o] ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), u, a) : t.dpDiv[o || "show"](o ? u : null, a), (!o || !u) && a(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
      }
    },
    _updateDatepicker: function(e) {
      var t = this;
      t.maxRows = 4;
      var n = $.datepicker._getBorders(e.dpDiv);
      instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var r = e.dpDiv.find("iframe.ui-datepicker-cover");
      !r.length || r.css({
        left: -n[0],
        top: -n[1],
        width: e.dpDiv.outerWidth(),
        height: e.dpDiv.outerHeight()
      }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var i = this._getNumberOfMonths(e),
        s = i[1],
        o = 17;
      e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), e.dpDiv[(i[0] != 1 || i[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
      if (e.yearshtml) {
        var u = e.yearshtml;
        setTimeout(function() {
          u === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), u = e.yearshtml = null
        }, 0)
      }
    },
    _getBorders: function(e) {
      var t = function(e) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        }[e] || e
      };
      return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
    },
    _checkOffset: function(e, t, n) {
      var r = e.dpDiv.outerWidth(),
        i = e.dpDiv.outerHeight(),
        s = e.input ? e.input.outerWidth() : 0,
        o = e.input ? e.input.outerHeight() : 0,
        u = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
        a = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
      return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
    },
    _findPos: function(e) {
      var t = this._getInst(e),
        n = this._get(t, "isRTL");
      while (e && (e.type == "hidden" || e.nodeType != 1 || $.expr.filters.hidden(e))) e = e[n ? "previousSibling" : "nextSibling"];
      var r = $(e).offset();
      return [r.left, r.top]
    },
    _hideDatepicker: function(e) {
      var t = this._curInst;
      if (!t || e && t != $.data(e, PROP_NAME)) return;
      if (this._datepickerShowing) {
        var n = this._get(t, "showAnim"),
          r = this._get(t, "duration"),
          i = function() {
            $.datepicker._tidyDialog(t)
          };
        $.effects && $.effects[n] ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), r, i) : t.dpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1;
        var s = this._get(t, "onClose");
        s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
      }
    },
    _tidyDialog: function(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(e) {
      if (!$.datepicker._curInst) return;
      var t = $(e.target),
        n = $.datepicker._getInst(t[0]);
      (t[0].id != $.datepicker._mainDivId && t.parents("#" + $.datepicker._mainDivId).length == 0 && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
    },
    _adjustDate: function(e, t, n) {
      var r = $(e),
        i = this._getInst(r[0]);
      if (this._isDisabledDatepicker(r[0])) return;
      this._adjustInstDate(i, t + (n == "M" ? this._get(i, "showCurrentAtPos") : 0), n), this._updateDatepicker(i)
    },
    _gotoToday: function(e) {
      var t = $(e),
        n = this._getInst(t[0]);
      if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
      else {
        var r = new Date;
        n.selectedDay = r.getDate(), n.drawMonth = n.selectedMonth = r.getMonth(), n.drawYear = n.selectedYear = r.getFullYear()
      }
      this._notifyChange(n), this._adjustDate(t)
    },
    _selectMonthYear: function(e, t, n) {
      var r = $(e),
        i = this._getInst(r[0]);
      i["selected" + (n == "M" ? "Month" : "Year")] = i["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(i), this._adjustDate(r)
    },
    _selectDay: function(e, t, n, r) {
      var i = $(e);
      if ($(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(i[0])) return;
      var s = this._getInst(i[0]);
      s.selectedDay = s.currentDay = $("a", r).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = n, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
    },
    _clearDate: function(e) {
      var t = $(e),
        n = this._getInst(t[0]);
      this._selectDate(t, "")
    },
    _selectDate: function(e, t) {
      var n = $(e),
        r = this._getInst(n[0]);
      t = t != null ? t : this._formatDate(r), r.input && r.input.val(t), this._updateAlternate(r);
      var i = this._get(r, "onSelect");
      i ? i.apply(r.input ? r.input[0] : null, [t, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function(e) {
      var t = this._get(e, "altField");
      if (t) {
        var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
          r = this._getDate(e),
          i = this.formatDate(n, r, this._getFormatConfig(e));
        $(t).each(function() {
          $(this).val(i)
        })
      }
    },
    noWeekends: function(e) {
      var t = e.getDay();
      return [t > 0 && t < 6, ""]
    },
    iso8601Week: function(e) {
      var t = new Date(e.getTime());
      t.setDate(t.getDate() + 4 - (t.getDay() || 7));
      var n = t.getTime();
      return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
    },
    parseDate: function(e, t, n) {
      if (e == null || t == null) throw "Invalid arguments";
      t = typeof t == "object" ? t.toString() : t + "";
      if (t == "") return null;
      var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
      r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
      var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        s = (n ? n.dayNames : null) || this._defaults.dayNames,
        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        u = (n ? n.monthNames : null) || this._defaults.monthNames,
        a = -1,
        f = -1,
        l = -1,
        c = -1,
        h = !1,
        p = function(t) {
          var n = y + 1 < e.length && e.charAt(y + 1) == t;
          return n && y++, n
        },
        d = function(e) {
          var n = p(e),
            r = e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = t.substring(g).match(i);
          if (!s) throw "Missing number at position " + g;
          return g += s[0].length, parseInt(s[0], 10)
        },
        v = function(e, n, r) {
          var i = $.map(p(e) ? r : n, function(e, t) {
              return [
                [t, e]
              ]
            }).sort(function(e, t) {
              return -(e[1].length - t[1].length)
            }),
            s = -1;
          $.each(i, function(e, n) {
            var r = n[1];
            if (t.substr(g, r.length).toLowerCase() == r.toLowerCase()) return s = n[0], g += r.length, !1
          });
          if (s != -1) return s + 1;
          throw "Unknown name at position " + g
        },
        m = function() {
          if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
          g++
        },
        g = 0;
      for (var y = 0; y < e.length; y++)
        if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
        else switch (e.charAt(y)) {
          case "d":
            l = d("d");
            break;
          case "D":
            v("D", i, s);
            break;
          case "o":
            c = d("o");
            break;
          case "m":
            f = d("m");
            break;
          case "M":
            f = v("M", o, u);
            break;
          case "y":
            a = d("y");
            break;
          case "@":
            var b = new Date(d("@"));
            a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
            break;
          case "!":
            var b = new Date((d("!") - this._ticksTo1970) / 1e4);
            a = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
            break;
          case "'":
            p("'") ? m() : h = !0;
            break;
          default:
            m()
        }
      if (g < t.length) throw "Extra/unparsed characters found in date: " + t.substring(g);
      a == -1 ? a = (new Date).getFullYear() : a < 100 && (a += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (a <= r ? 0 : -100));
      if (c > -1) {
        f = 1, l = c;
        do {
          var w = this._getDaysInMonth(a, f - 1);
          if (l <= w) break;
          f++, l -= w
        } while (!0)
      }
      var b = this._daylightSavingAdjust(new Date(a, f - 1, l));
      if (b.getFullYear() != a || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
      return b
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
    formatDate: function(e, t, n) {
      if (!t) return "";
      var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        i = (n ? n.dayNames : null) || this._defaults.dayNames,
        s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        o = (n ? n.monthNames : null) || this._defaults.monthNames,
        u = function(t) {
          var n = h + 1 < e.length && e.charAt(h + 1) == t;
          return n && h++, n
        },
        a = function(e, t, n) {
          var r = "" + t;
          if (u(e))
            while (r.length < n) r = "0" + r;
          return r
        },
        f = function(e, t, n, r) {
          return u(e) ? r[t] : n[t]
        },
        l = "",
        c = !1;
      if (t)
        for (var h = 0; h < e.length; h++)
          if (c) e.charAt(h) == "'" && !u("'") ? c = !1 : l += e.charAt(h);
          else switch (e.charAt(h)) {
            case "d":
              l += a("d", t.getDate(), 2);
              break;
            case "D":
              l += f("D", t.getDay(), r, i);
              break;
            case "o":
              l += a("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
              break;
            case "m":
              l += a("m", t.getMonth() + 1, 2);
              break;
            case "M":
              l += f("M", t.getMonth(), s, o);
              break;
            case "y":
              l += u("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
              break;
            case "@":
              l += t.getTime();
              break;
            case "!":
              l += t.getTime() * 1e4 + this._ticksTo1970;
              break;
            case "'":
              u("'") ? l += "'" : c = !0;
              break;
            default:
              l += e.charAt(h)
          }
      return l
    },
    _possibleChars: function(e) {
      var t = "",
        n = !1,
        r = function(t) {
          var n = i + 1 < e.length && e.charAt(i + 1) == t;
          return n && i++, n
        };
      for (var i = 0; i < e.length; i++)
        if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
        else switch (e.charAt(i)) {
          case "d":
          case "m":
          case "y":
          case "@":
            t += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            r("'") ? t += "'" : n = !0;
            break;
          default:
            t += e.charAt(i)
        }
      return t
    },
    _get: function(e, t) {
      return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
    },
    _setDateFromField: function(e, t) {
      if (e.input.val() == e.lastVal) return;
      var n = this._get(e, "dateFormat"),
        r = e.lastVal = e.input ? e.input.val() : null,
        i, s;
      i = s = this._getDefaultDate(e);
      var o = this._getFormatConfig(e);
      try {
        i = this.parseDate(n, r, o) || s
      } catch (u) {
        this.log(u), r = t ? "" : r
      }
      e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
    },
    _getDefaultDate: function(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    },
    _determineDate: function(e, t, n) {
      var r = function(e) {
          var t = new Date;
          return t.setDate(t.getDate() + e), t
        },
        i = function(t) {
          try {
            return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
          } catch (n) {}
          var r = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date,
            i = r.getFullYear(),
            s = r.getMonth(),
            o = r.getDate(),
            u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            f = u.exec(t);
          while (f) {
            switch (f[2] || "d") {
              case "d":
              case "D":
                o += parseInt(f[1], 10);
                break;
              case "w":
              case "W":
                o += parseInt(f[1], 10) * 7;
                break;
              case "m":
              case "M":
                s += parseInt(f[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s));
                break;
              case "y":
              case "Y":
                i += parseInt(f[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(i, s))
            }
            f = u.exec(t)
          }
          return new Date(i, s, o)
        },
        s = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime());
      return s = s && s.toString() == "Invalid Date" ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
    },
    _daylightSavingAdjust: function(e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    },
    _setDate: function(e, t, n) {
      var r = !t,
        i = e.selectedMonth,
        s = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
      e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
    },
    _getDate: function(e) {
      var t = !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t
    },
    _attachHandlers: function(e) {
      var t = this._get(e, "stepMonths"),
        n = "#" + e.id;
      e.dpDiv.find("[data-handler]").map(function() {
        var e = {
          prev: function() {
            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M")
          },
          next: function() {
            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M")
          },
          hide: function() {
            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
          },
          today: function() {
            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n)
          },
          selectDay: function() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1
          },
          selectYear: function() {
            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1
          }
        };
        $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(e) {
      var t = new Date;
      t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
      var n = this._get(e, "isRTL"),
        r = this._get(e, "showButtonPanel"),
        i = this._get(e, "hideIfNoPrevNext"),
        s = this._get(e, "navigationAsDateFormat"),
        o = this._getNumberOfMonths(e),
        u = this._get(e, "showCurrentAtPos"),
        a = this._get(e, "stepMonths"),
        f = o[0] != 1 || o[1] != 1,
        l = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
        c = this._getMinMaxDate(e, "min"),
        h = this._getMinMaxDate(e, "max"),
        p = e.drawMonth - u,
        d = e.drawYear;
      p < 0 && (p += 12, d--);
      if (h) {
        var v = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
        v = c && v < c ? c : v;
        while (this._daylightSavingAdjust(new Date(d, p, 1)) > v) p--, p < 0 && (p = 11, d--)
      }
      e.drawMonth = p, e.drawYear = d;
      var m = this._get(e, "prevText");
      m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, p - a, 1)), this._getFormatConfig(e)) : m;
      var g = this._canAdjustMonth(e, -1, d, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
        y = this._get(e, "nextText");
      y = s ? this.formatDate(y, this._daylightSavingAdjust(new Date(d, p + a, 1)), this._getFormatConfig(e)) : y;
      var b = this._canAdjustMonth(e, 1, d, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + y + "</span></a>",
        w = this._get(e, "currentText"),
        E = this._get(e, "gotoCurrent") && e.currentDay ? l : t;
      w = s ? this.formatDate(w, E, this._getFormatConfig(e)) : w;
      var S = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
        x = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? S : "") + (this._isInRange(e, E) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (n ? "" : S) + "</div>" : "",
        T = parseInt(this._get(e, "firstDay"), 10);
      T = isNaN(T) ? 0 : T;
      var N = this._get(e, "showWeek"),
        C = this._get(e, "dayNames"),
        k = this._get(e, "dayNamesShort"),
        L = this._get(e, "dayNamesMin"),
        A = this._get(e, "monthNames"),
        O = this._get(e, "monthNamesShort"),
        M = this._get(e, "beforeShowDay"),
        _ = this._get(e, "showOtherMonths"),
        D = this._get(e, "selectOtherMonths"),
        P = this._get(e, "calculateWeek") || this.iso8601Week,
        H = this._getDefaultDate(e),
        B = "";
      for (var j = 0; j < o[0]; j++) {
        var F = "";
        this.maxRows = 4;
        for (var I = 0; I < o[1]; I++) {
          var q = this._daylightSavingAdjust(new Date(d, p, e.selectedDay)),
            R = " ui-corner-all",
            U = "";
          if (f) {
            U += '<div class="ui-datepicker-group';
            if (o[1] > 1) switch (I) {
              case 0:
                U += " ui-datepicker-group-first", R = " ui-corner-" + (n ? "right" : "left");
                break;
              case o[1] - 1:
                U += " ui-datepicker-group-last", R = " ui-corner-" + (n ? "left" : "right");
                break;
              default:
                U += " ui-datepicker-group-middle", R = ""
            }
            U += '">'
          }
          U += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + R + '">' + (/all|left/.test(R) && j == 0 ? n ? b : g : "") + (/all|right/.test(R) && j == 0 ? n ? g : b : "") + this._generateMonthYearHeader(e, p, d, c, h, j > 0 || I > 0, A, O) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
          var z = N ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
          for (var W = 0; W < 7; W++) {
            var X = (W + T) % 7;
            z += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + C[X] + '">' + L[X] + "</span></th>"
          }
          U += z + "</tr></thead><tbody>";
          var V = this._getDaysInMonth(d, p);
          d == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, V));
          var J = (this._getFirstDayOfMonth(d, p) - T + 7) % 7,
            K = Math.ceil((J + V) / 7),
            Q = f ? this.maxRows > K ? this.maxRows : K : K;
          this.maxRows = Q;
          var G = this._daylightSavingAdjust(new Date(d, p, 1 - J));
          for (var Y = 0; Y < Q; Y++) {
            U += "<tr>";
            var Z = N ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(G) + "</td>" : "";
            for (var W = 0; W < 7; W++) {
              var et = M ? M.apply(e.input ? e.input[0] : null, [G]) : [!0, ""],
                tt = G.getMonth() != p,
                nt = tt && !D || !et[0] || c && G < c || h && G > h;
              Z += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (tt ? " ui-datepicker-other-month" : "") + (G.getTime() == q.getTime() && p == e.selectedMonth && e._keyEvent || H.getTime() == G.getTime() && H.getTime() == q.getTime() ? " " + this._dayOverClass : "") + (nt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (tt && !_ ? "" : " " + et[1] + (G.getTime() == l.getTime() ? " " + this._currentClass : "") + (G.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!tt || _) && et[2] ? ' title="' + et[2] + '"' : "") + (nt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + G.getMonth() + '" data-year="' + G.getFullYear() + '"') + ">" + (tt && !_ ? "&#xa0;" : nt ? '<span class="ui-state-default">' + G.getDate() + "</span>" : '<a class="ui-state-default' + (G.getTime() == t.getTime() ? " ui-state-highlight" : "") + (G.getTime() == l.getTime() ? " ui-state-active" : "") + (tt ? " ui-priority-secondary" : "") + '" href="#">' + G.getDate() + "</a>") + "</td>", G.setDate(G.getDate() + 1), G = this._daylightSavingAdjust(G)
            }
            U += Z + "</tr>"
          }
          p++, p > 11 && (p = 0, d++), U += "</tbody></table>" + (f ? "</div>" + (o[0] > 0 && I == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), F += U
        }
        B += F
      }
      return B += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, B
    },
    _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
      var a = this._get(e, "changeMonth"),
        f = this._get(e, "changeYear"),
        l = this._get(e, "showMonthAfterYear"),
        c = '<div class="ui-datepicker-title">',
        h = "";
      if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
      else {
        var p = r && r.getFullYear() == n,
          d = i && i.getFullYear() == n;
        h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
        for (var v = 0; v < 12; v++)(!p || v >= r.getMonth()) && (!d || v <= i.getMonth()) && (h += '<option value="' + v + '"' + (v == t ? ' selected="selected"' : "") + ">" + u[v] + "</option>");
        h += "</select>"
      }
      l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
      if (!e.yearshtml) {
        e.yearshtml = "";
        if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
        else {
          var m = this._get(e, "yearRange").split(":"),
            g = (new Date).getFullYear(),
            y = function(e) {
              var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? g + parseInt(e, 10) : parseInt(e, 10);
              return isNaN(t) ? g : t
            },
            b = y(m[0]),
            w = Math.max(b, y(m[1] || ""));
          b = r ? Math.max(b, r.getFullYear()) : b, w = i ? Math.min(w, i.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
          for (; b <= w; b++) e.yearshtml += '<option value="' + b + '"' + (b == n ? ' selected="selected"' : "") + ">" + b + "</option>";
          e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
        }
      }
      return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
    },
    _adjustInstDate: function(e, t, n) {
      var r = e.drawYear + (n == "Y" ? t : 0),
        i = e.drawMonth + (n == "M" ? t : 0),
        s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0),
        o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
      e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
    },
    _restrictMinMax: function(e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max"),
        i = n && t < n ? n : t;
      return i = r && i > r ? r : i, i
    },
    _notifyChange: function(e) {
      var t = this._get(e, "onChangeMonthYear");
      t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    },
    _getNumberOfMonths: function(e) {
      var t = this._get(e, "numberOfMonths");
      return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
    },
    _getMinMaxDate: function(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null)
    },
    _getDaysInMonth: function(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    },
    _getFirstDayOfMonth: function(e, t) {
      return (new Date(e, t, 1)).getDay()
    },
    _canAdjustMonth: function(e, t, n, r) {
      var i = this._getNumberOfMonths(e),
        s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
      return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
    },
    _isInRange: function(e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max");
      return (!n || t.getTime() >= n.getTime()) && (!r || t.getTime() <= r.getTime())
    },
    _getFormatConfig: function(e) {
      var t = this._get(e, "shortYearCutoff");
      return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      }
    },
    _formatDate: function(e, t, n, r) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
    }
  }), $.fn.datepicker = function(e) {
    if (!this.length) return this;
    $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
    var t = Array.prototype.slice.call(arguments, 1);
    return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
      typeof e == "string" ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
    }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
  }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.22", window["DP_jQuery_" + dpuuid] = $
})(jQuery);
(function(e, t) {
  e.widget("ui.progressbar", {
    options: {
      value: 0,
      max: 100
    },
    min: 0,
    _create: function() {
      this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
        role: "progressbar",
        "aria-valuemin": this.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._value()
      }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
    },
    destroy: function() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
    },
    value: function(e) {
      return e === t ? this._value() : (this._setOption("value", e), this)
    },
    _setOption: function(t, n) {
      t === "value" && (this.options.value = n, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
    },
    _value: function() {
      var e = this.options.value;
      return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
    },
    _percentage: function() {
      return 100 * this._value() / this.options.max
    },
    _refreshValue: function() {
      var e = this.value(),
        t = this._percentage();
      this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
    }
  }), e.extend(e.ui.progressbar, {
    version: "1.8.22"
  })
})(jQuery);
jQuery.effects || function(e, t) {
  function n(t) {
    var n;
    return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : (n = /rgba\(0, 0, 0, 0\)/.exec(t)) ? f.transparent : f[e.trim(t).toLowerCase()]
  }

  function r(t, r) {
    var i;
    do {
      i = (e.curCSS || e.css)(t, r);
      if (i != "" && i != "transparent" || e.nodeName(t, "body")) break;
      r = "backgroundColor"
    } while (t = t.parentNode);
    return n(i)
  }

  function i() {
    var e = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
      t = {},
      n, r;
    if (e && e.length && e[0] && e[e[0]]) {
      var i = e.length;
      while (i--) n = e[i], typeof e[n] == "string" && (r = n.replace(/\-(\w)/g, function(e, t) {
        return t.toUpperCase()
      }), t[r] = e[n])
    } else
      for (n in e) typeof e[n] == "string" && (t[n] = e[n]);
    return t
  }

  function s(t) {
    var n, r;
    for (n in t) r = t[n], (r == null || e.isFunction(r) || n in c || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(r))) && delete t[n];
    return t
  }

  function o(e, t) {
    var n = {
        _: 0
      },
      r;
    for (r in t) e[r] != t[r] && (n[r] = t[r]);
    return n
  }

  function u(t, n, r, i) {
    typeof t == "object" && (i = n, r = null, n = t, t = n.effect), e.isFunction(n) && (i = n, r = null, n = {});
    if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
    return e.isFunction(r) && (i = r, r = null), n = n || {}, r = r || n.duration, r = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, i = i || n.complete, [t, n, r, i]
  }

  function a(t) {
    return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects[t] ? !0 : !1
  }

  e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, i) {
    e.fx.step[i] = function(e) {
      e.colorInit || (e.start = r(e.elem, i), e.end = n(e.end), e.colorInit = !0), e.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
    }
  });
  var f = {
      aqua: [0, 255, 255],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      black: [0, 0, 0],
      blue: [0, 0, 255],
      brown: [165, 42, 42],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgrey: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkviolet: [148, 0, 211],
      fuchsia: [255, 0, 255],
      gold: [255, 215, 0],
      green: [0, 128, 0],
      indigo: [75, 0, 130],
      khaki: [240, 230, 140],
      lightblue: [173, 216, 230],
      lightcyan: [224, 255, 255],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      navy: [0, 0, 128],
      olive: [128, 128, 0],
      orange: [255, 165, 0],
      pink: [255, 192, 203],
      purple: [128, 0, 128],
      violet: [128, 0, 128],
      red: [255, 0, 0],
      silver: [192, 192, 192],
      white: [255, 255, 255],
      yellow: [255, 255, 0],
      transparent: [255, 255, 255]
    },
    l = ["add", "remove", "toggle"],
    c = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
  e.effects.animateClass = function(t, n, r, u) {
    return e.isFunction(r) && (u = r, r = null), this.queue(function() {
      var a = e(this),
        f = a.attr("style") || " ",
        c = s(i.call(this)),
        p, v = a.attr("class") || "";
      e.each(l, function(e, n) {
        t[n] && a[n + "Class"](t[n])
      }), p = s(i.call(this)), a.attr("class", v), a.animate(o(c, p), {
        queue: !1,
        duration: n,
        easing: r,
        complete: function() {
          e.each(l, function(e, n) {
            t[n] && a[n + "Class"](t[n])
          }), typeof a.attr("style") == "object" ? (a.attr("style").cssText = "", a.attr("style").cssText = f) : a.attr("style", f), u && u.apply(this, arguments), e.dequeue(this)
        }
      })
    })
  }, e.fn.extend({
    _addClass: e.fn.addClass,
    addClass: function(t, n, r, i) {
      return n ? e.effects.animateClass.apply(this, [{
          add: t
        },
        n, r, i
      ]) : this._addClass(t)
    },
    _removeClass: e.fn.removeClass,
    removeClass: function(t, n, r, i) {
      return n ? e.effects.animateClass.apply(this, [{
          remove: t
        },
        n, r, i
      ]) : this._removeClass(t)
    },
    _toggleClass: e.fn.toggleClass,
    toggleClass: function(n, r, i, s, o) {
      return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.apply(this, [r ? {
          add: n
        } : {
          remove: n
        },
        i, s, o
      ]) : this._toggleClass(n, r) : e.effects.animateClass.apply(this, [{
          toggle: n
        },
        r, i, s
      ])
    },
    switchClass: function(t, n, r, i, s) {
      return e.effects.animateClass.apply(this, [{
          add: n,
          remove: t
        },
        r, i, s
      ])
    }
  }), e.extend(e.effects, {
    version: "1.8.22",
    save: function(e, t) {
      for (var n = 0; n < t.length; n++) t[n] !== null && e.data("ec.storage." + t[n], e[0].style[t[n]])
    },
    restore: function(e, t) {
      for (var n = 0; n < t.length; n++) t[n] !== null && e.css(t[n], e.data("ec.storage." + t[n]))
    },
    setMode: function(e, t) {
      return t == "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
    },
    getBaseline: function(e, t) {
      var n, r;
      switch (e[0]) {
        case "top":
          n = 0;
          break;
        case "middle":
          n = .5;
          break;
        case "bottom":
          n = 1;
          break;
        default:
          n = e[0] / t.height
      }
      switch (e[1]) {
        case "left":
          r = 0;
          break;
        case "center":
          r = .5;
          break;
        case "right":
          r = 1;
          break;
        default:
          r = e[1] / t.width
      }
      return {
        x: r,
        y: n
      }
    },
    createWrapper: function(t) {
      if (t.parent().is(".ui-effects-wrapper")) return t.parent();
      var n = {
          width: t.outerWidth(!0),
          height: t.outerHeight(!0),
          "float": t.css("float")
        },
        r = e("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
        i = document.activeElement;
      try {
        i.id
      } catch (s) {
        i = document.body
      }
      return t.wrap(r), (t[0] === i || e.contains(t[0], i)) && e(i).focus(), r = t.parent(), t.css("position") == "static" ? (r.css({
        position: "relative"
      }), t.css({
        position: "relative"
      })) : (e.extend(n, {
        position: t.css("position"),
        zIndex: t.css("z-index")
      }), e.each(["top", "left", "bottom", "right"], function(e, r) {
        n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
      }), t.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      })), r.css(n).show()
    },
    removeWrapper: function(t) {
      var n, r = document.activeElement;
      return t.parent().is(".ui-effects-wrapper") ? (n = t.parent().replaceWith(t), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), n) : t
    },
    setTransition: function(t, n, r, i) {
      return i = i || {}, e.each(n, function(e, n) {
        var s = t.cssUnit(n);
        s[0] > 0 && (i[n] = s[0] * r + s[1])
      }), i
    }
  }), e.fn.extend({
    effect: function(t, n, r, i) {
      var s = u.apply(this, arguments),
        o = {
          options: s[1],
          duration: s[2],
          callback: s[3]
        },
        a = o.options.mode,
        f = e.effects[t];
      return e.fx.off || !f ? a ? this[a](o.duration, o.callback) : this.each(function() {
        o.callback && o.callback.call(this)
      }) : f.call(this, o)
    },
    _show: e.fn.show,
    show: function(e) {
      if (a(e)) return this._show.apply(this, arguments);
      var t = u.apply(this, arguments);
      return t[1].mode = "show", this.effect.apply(this, t)
    },
    _hide: e.fn.hide,
    hide: function(e) {
      if (a(e)) return this._hide.apply(this, arguments);
      var t = u.apply(this, arguments);
      return t[1].mode = "hide", this.effect.apply(this, t)
    },
    __toggle: e.fn.toggle,
    toggle: function(t) {
      if (a(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
      var n = u.apply(this, arguments);
      return n[1].mode = "toggle", this.effect.apply(this, n)
    },
    cssUnit: function(t) {
      var n = this.css(t),
        r = [];
      return e.each(["em", "px", "%", "pt"], function(e, t) {
        n.indexOf(t) > 0 && (r = [parseFloat(n), t])
      }), r
    }
  }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
    def: "easeOutQuad",
    swing: function(t, n, r, i, s) {
      return e.easing[e.easing.def](t, n, r, i, s)
    },
    easeInQuad: function(e, t, n, r, i) {
      return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
      return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
      return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
      return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
      return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
      return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
      return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
      return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
      return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
      return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
      return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
      return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
      return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
      return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
      return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
      return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
      return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
      return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
      return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
      return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
      return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
      var s = 1.70158,
        o = 0,
        u = r;
      if (t == 0) return n;
      if ((t /= i) == 1) return n + r;
      o || (o = i * .3);
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
      var s = 1.70158,
        o = 0,
        u = r;
      if (t == 0) return n;
      if ((t /= i) == 1) return n + r;
      o || (o = i * .3);
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
      var s = 1.70158,
        o = 0,
        u = r;
      if (t == 0) return n;
      if ((t /= i / 2) == 2) return n + r;
      o || (o = i * .3 * 1.5);
      if (u < Math.abs(r)) {
        u = r;
        var s = o / 4
      } else var s = o / (2 * Math.PI) * Math.asin(r / u);
      return t < 1 ? -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, n, r, i, s, o) {
      return o == t && (o = 1.70158), i * (n /= s) * n * ((o + 1) * n - o) + r
    },
    easeOutBack: function(e, n, r, i, s, o) {
      return o == t && (o = 1.70158), i * ((n = n / s - 1) * n * ((o + 1) * n + o) + 1) + r
    },
    easeInOutBack: function(e, n, r, i, s, o) {
      return o == t && (o = 1.70158), (n /= s / 2) < 1 ? i / 2 * n * n * (((o *= 1.525) + 1) * n - o) + r : i / 2 * ((n -= 2) * n * (((o *= 1.525) + 1) * n + o) + 2) + r
    },
    easeInBounce: function(t, n, r, i, s) {
      return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
    },
    easeOutBounce: function(e, t, n, r, i) {
      return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(t, n, r, i, s) {
      return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
    }
  })
}(jQuery);
(function(e, t) {
  e.effects.blind = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right"],
        i = e.effects.setMode(n, t.options.mode || "hide"),
        s = t.options.direction || "vertical";
      e.effects.save(n, r), n.show();
      var o = e.effects.createWrapper(n).css({
          overflow: "hidden"
        }),
        u = s == "vertical" ? "height" : "width",
        f = s == "vertical" ? o.height() : o.width();
      i == "show" && o.css(u, 0);
      var l = {};
      l[u] = i == "show" ? f : 0, o.animate(l, t.duration, t.options.easing, function() {
        i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.bounce = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right"],
        i = e.effects.setMode(n, t.options.mode || "effect"),
        s = t.options.direction || "up",
        o = t.options.distance || 20,
        u = t.options.times || 5,
        f = t.duration || 250;
      /show|hide/.test(i) && r.push("opacity"), e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
      var l = s == "up" || s == "down" ? "top" : "left",
        c = s == "up" || s == "left" ? "pos" : "neg",
        o = t.options.distance || (l == "top" ? n.outerHeight(!0) / 3 : n.outerWidth(!0) / 3);
      i == "show" && n.css("opacity", 0).css(l, c == "pos" ? -o : o), i == "hide" && (o = o / (u * 2)), i != "hide" && u--;
      if (i == "show") {
        var h = {
          opacity: 1
        };
        h[l] = (c == "pos" ? "+=" : "-=") + o, n.animate(h, f / 2, t.options.easing), o = o / 2, u--
      }
      for (var p = 0; p < u; p++) {
        var d = {},
          v = {};
        d[l] = (c == "pos" ? "-=" : "+=") + o, v[l] = (c == "pos" ? "+=" : "-=") + o, n.animate(d, f / 2, t.options.easing).animate(v, f / 2, t.options.easing), o = i == "hide" ? o * 2 : o / 2
      }
      if (i == "hide") {
        var h = {
          opacity: 0
        };
        h[l] = (c == "pos" ? "-=" : "+=") + o, n.animate(h, f / 2, t.options.easing, function() {
          n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
        })
      } else {
        var d = {},
          v = {};
        d[l] = (c == "pos" ? "-=" : "+=") + o, v[l] = (c == "pos" ? "+=" : "-=") + o, n.animate(d, f / 2, t.options.easing).animate(v, f / 2, t.options.easing, function() {
          e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
        })
      }
      n.queue("fx", function() {
        n.dequeue()
      }), n.dequeue()
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.clip = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        i = e.effects.setMode(n, t.options.mode || "hide"),
        s = t.options.direction || "vertical";
      e.effects.save(n, r), n.show();
      var o = e.effects.createWrapper(n).css({
          overflow: "hidden"
        }),
        u = n[0].tagName == "IMG" ? o : n,
        f = {
          size: s == "vertical" ? "height" : "width",
          position: s == "vertical" ? "top" : "left"
        },
        l = s == "vertical" ? u.height() : u.width();
      i == "show" && (u.css(f.size, 0), u.css(f.position, l / 2));
      var c = {};
      c[f.size] = i == "show" ? l : 0, c[f.position] = i == "show" ? 0 : l / 2, u.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.drop = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right", "opacity"],
        i = e.effects.setMode(n, t.options.mode || "hide"),
        s = t.options.direction || "left";
      e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
      var o = s == "up" || s == "down" ? "top" : "left",
        u = s == "up" || s == "left" ? "pos" : "neg",
        f = t.options.distance || (o == "top" ? n.outerHeight(!0) / 2 : n.outerWidth(!0) / 2);
      i == "show" && n.css("opacity", 0).css(o, u == "pos" ? -f : f);
      var l = {
        opacity: i == "show" ? 1 : 0
      };
      l[o] = (i == "show" ? u == "pos" ? "+=" : "-=" : u == "pos" ? "-=" : "+=") + f, n.animate(l, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.explode = function(t) {
    return this.queue(function() {
      var n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
        r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
      t.options.mode = t.options.mode == "toggle" ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
      var i = e(this).show().css("visibility", "hidden"),
        s = i.offset();
      s.top -= parseInt(i.css("marginTop"), 10) || 0, s.left -= parseInt(i.css("marginLeft"), 10) || 0;
      var o = i.outerWidth(!0),
        u = i.outerHeight(!0);
      for (var f = 0; f < n; f++)
        for (var l = 0; l < r; l++) i.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -l * (o / r),
          top: -f * (u / n)
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: o / r,
          height: u / n,
          left: s.left + l * (o / r) + (t.options.mode == "show" ? (l - Math.floor(r / 2)) * (o / r) : 0),
          top: s.top + f * (u / n) + (t.options.mode == "show" ? (f - Math.floor(n / 2)) * (u / n) : 0),
          opacity: t.options.mode == "show" ? 0 : 1
        }).animate({
          left: s.left + l * (o / r) + (t.options.mode == "show" ? 0 : (l - Math.floor(r / 2)) * (o / r)),
          top: s.top + f * (u / n) + (t.options.mode == "show" ? 0 : (f - Math.floor(n / 2)) * (u / n)),
          opacity: t.options.mode == "show" ? 1 : 0
        }, t.duration || 500);
      setTimeout(function() {
        t.options.mode == "show" ? i.css({
          visibility: "visible"
        }) : i.css({
          visibility: "visible"
        }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), e("div.ui-effects-explode").remove()
      }, t.duration || 500)
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.fade = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = e.effects.setMode(n, t.options.mode || "hide");
      n.animate({
        opacity: r
      }, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          t.callback && t.callback.apply(this, arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.fold = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right"],
        i = e.effects.setMode(n, t.options.mode || "hide"),
        s = t.options.size || 15,
        o = !!t.options.horizFirst,
        u = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
      e.effects.save(n, r), n.show();
      var f = e.effects.createWrapper(n).css({
          overflow: "hidden"
        }),
        l = i == "show" != o,
        c = l ? ["width", "height"] : ["height", "width"],
        h = l ? [f.width(), f.height()] : [f.height(), f.width()],
        p = /([0-9]+)%/.exec(s);
      p && (s = parseInt(p[1], 10) / 100 * h[i == "hide" ? 0 : 1]), i == "show" && f.css(o ? {
        height: 0,
        width: s
      } : {
        height: s,
        width: 0
      });
      var d = {},
        v = {};
      d[c[0]] = i == "show" ? h[0] : s, v[c[1]] = i == "show" ? h[1] : 0, f.animate(d, u, t.options.easing).animate(v, u, t.options.easing, function() {
        i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.highlight = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["backgroundImage", "backgroundColor", "opacity"],
        i = e.effects.setMode(n, t.options.mode || "show"),
        s = {
          backgroundColor: n.css("backgroundColor")
        };
      i == "hide" && (s.opacity = 0), e.effects.save(n, r), n.show().css({
        backgroundImage: "none",
        backgroundColor: t.options.color || "#ffff99"
      }).animate(s, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          i == "hide" && n.hide(), e.effects.restore(n, r), i == "show" && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.pulsate = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = e.effects.setMode(n, t.options.mode || "show"),
        i = (t.options.times || 5) * 2 - 1,
        s = t.duration ? t.duration / 2 : e.fx.speeds._default / 2,
        o = n.is(":visible"),
        u = 0;
      o || (n.css("opacity", 0).show(), u = 1), (r == "hide" && o || r == "show" && !o) && i--;
      for (var f = 0; f < i; f++) n.animate({
        opacity: u
      }, s, t.options.easing), u = (u + 1) % 2;
      n.animate({
        opacity: u
      }, s, t.options.easing, function() {
        u == 0 && n.hide(), t.callback && t.callback.apply(this, arguments)
      }), n.queue("fx", function() {
        n.dequeue()
      }).dequeue()
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.puff = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = e.effects.setMode(n, t.options.mode || "hide"),
        i = parseInt(t.options.percent, 10) || 150,
        s = i / 100,
        o = {
          height: n.height(),
          width: n.width()
        };
      e.extend(t.options, {
        fade: !0,
        mode: r,
        percent: r == "hide" ? i : 100,
        from: r == "hide" ? o : {
          height: o.height * s,
          width: o.width * s
        }
      }), n.effect("scale", t.options, t.duration, t.callback), n.dequeue()
    })
  }, e.effects.scale = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = e.extend(!0, {}, t.options),
        i = e.effects.setMode(n, t.options.mode || "effect"),
        s = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : i == "hide" ? 0 : 100),
        o = t.options.direction || "both",
        u = t.options.origin;
      i != "effect" && (r.origin = u || ["middle", "center"], r.restore = !0);
      var f = {
        height: n.height(),
        width: n.width()
      };
      n.from = t.options.from || (i == "show" ? {
        height: 0,
        width: 0
      } : f);
      var l = {
        y: o != "horizontal" ? s / 100 : 1,
        x: o != "vertical" ? s / 100 : 1
      };
      n.to = {
        height: f.height * l.y,
        width: f.width * l.x
      }, t.options.fade && (i == "show" && (n.from.opacity = 0, n.to.opacity = 1), i == "hide" && (n.from.opacity = 1, n.to.opacity = 0)), r.from = n.from, r.to = n.to, r.mode = i, n.effect("size", r, t.duration, t.callback), n.dequeue()
    })
  }, e.effects.size = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        s = ["width", "height", "overflow"],
        o = ["fontSize"],
        u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        f = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        l = e.effects.setMode(n, t.options.mode || "effect"),
        c = t.options.restore || !1,
        h = t.options.scale || "both",
        p = t.options.origin,
        d = {
          height: n.height(),
          width: n.width()
        };
      n.from = t.options.from || d, n.to = t.options.to || d;
      if (p) {
        var v = e.effects.getBaseline(p, d);
        n.from.top = (d.height - n.from.height) * v.y, n.from.left = (d.width - n.from.width) * v.x, n.to.top = (d.height - n.to.height) * v.y, n.to.left = (d.width - n.to.width) * v.x
      }
      var m = {
        from: {
          y: n.from.height / d.height,
          x: n.from.width / d.width
        },
        to: {
          y: n.to.height / d.height,
          x: n.to.width / d.width
        }
      };
      if (h == "box" || h == "both") m.from.y != m.to.y && (r = r.concat(u), n.from = e.effects.setTransition(n, u, m.from.y, n.from), n.to = e.effects.setTransition(n, u, m.to.y, n.to)), m.from.x != m.to.x && (r = r.concat(f), n.from = e.effects.setTransition(n, f, m.from.x, n.from), n.to = e.effects.setTransition(n, f, m.to.x, n.to));
      (h == "content" || h == "both") && m.from.y != m.to.y && (r = r.concat(o), n.from = e.effects.setTransition(n, o, m.from.y, n.from), n.to = e.effects.setTransition(n, o, m.to.y, n.to)), e.effects.save(n, c ? r : i), n.show(), e.effects.createWrapper(n), n.css("overflow", "hidden").css(n.from);
      if (h == "content" || h == "both") u = u.concat(["marginTop", "marginBottom"]).concat(o), f = f.concat(["marginLeft", "marginRight"]), s = r.concat(u).concat(f), n.find("*[width]").each(function() {
        var n = e(this);
        c && e.effects.save(n, s);
        var r = {
          height: n.height(),
          width: n.width()
        };
        n.from = {
          height: r.height * m.from.y,
          width: r.width * m.from.x
        }, n.to = {
          height: r.height * m.to.y,
          width: r.width * m.to.x
        }, m.from.y != m.to.y && (n.from = e.effects.setTransition(n, u, m.from.y, n.from), n.to = e.effects.setTransition(n, u, m.to.y, n.to)), m.from.x != m.to.x && (n.from = e.effects.setTransition(n, f, m.from.x, n.from), n.to = e.effects.setTransition(n, f, m.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.options.easing, function() {
          c && e.effects.restore(n, s)
        })
      });
      n.animate(n.to, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          n.to.opacity === 0 && n.css("opacity", n.from.opacity), l == "hide" && n.hide(), e.effects.restore(n, c ? r : i), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.shake = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right"],
        i = e.effects.setMode(n, t.options.mode || "effect"),
        s = t.options.direction || "left",
        o = t.options.distance || 20,
        u = t.options.times || 3,
        f = t.duration || t.options.duration || 140;
      e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
      var l = s == "up" || s == "down" ? "top" : "left",
        c = s == "up" || s == "left" ? "pos" : "neg",
        h = {},
        p = {},
        d = {};
      h[l] = (c == "pos" ? "-=" : "+=") + o, p[l] = (c == "pos" ? "+=" : "-=") + o * 2, d[l] = (c == "pos" ? "-=" : "+=") + o * 2, n.animate(h, f, t.options.easing);
      for (var v = 1; v < u; v++) n.animate(p, f, t.options.easing).animate(d, f, t.options.easing);
      n.animate(p, f, t.options.easing).animate(h, f / 2, t.options.easing, function() {
        e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
      }), n.queue("fx", function() {
        n.dequeue()
      }), n.dequeue()
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.slide = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = ["position", "top", "bottom", "left", "right"],
        i = e.effects.setMode(n, t.options.mode || "show"),
        s = t.options.direction || "left";
      e.effects.save(n, r), n.show(), e.effects.createWrapper(n).css({
        overflow: "hidden"
      });
      var o = s == "up" || s == "down" ? "top" : "left",
        u = s == "up" || s == "left" ? "pos" : "neg",
        f = t.options.distance || (o == "top" ? n.outerHeight(!0) : n.outerWidth(!0));
      i == "show" && n.css(o, u == "pos" ? isNaN(f) ? "-" + f : -f : f);
      var l = {};
      l[o] = (i == "show" ? u == "pos" ? "+=" : "-=" : u == "pos" ? "-=" : "+=") + f, n.animate(l, {
        queue: !1,
        duration: t.duration,
        easing: t.options.easing,
        complete: function() {
          i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
        }
      })
    })
  }
})(jQuery);
(function(e, t) {
  e.effects.transfer = function(t) {
    return this.queue(function() {
      var n = e(this),
        r = e(t.options.to),
        i = r.offset(),
        s = {
          top: i.top,
          left: i.left,
          height: r.innerHeight(),
          width: r.innerWidth()
        },
        o = n.offset(),
        u = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
          top: o.top,
          left: o.left,
          height: n.innerHeight(),
          width: n.innerWidth(),
          position: "absolute"
        }).animate(s, t.duration, t.options.easing, function() {
          u.remove(), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
        })
    })
  }
})(jQuery);
/* jshint ignore:end */
