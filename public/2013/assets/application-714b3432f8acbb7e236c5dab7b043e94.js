!(function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = e.length,
      n = it.type(e);
    return 'function' === n || it.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
        ? !0
        : 'array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e);
  }
  function r(e, t, n) {
    if (it.isFunction(t))
      return it.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return it.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ('string' == typeof t) {
      if (ft.test(t)) return it.filter(t, e, n);
      t = it.filter(t, e);
    }
    return it.grep(e, function (e) {
      return it.inArray(e, t) >= 0 !== n;
    });
  }
  function i(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = (xt[e] = {});
    return (
      it.each(e.match(bt) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function a() {
    pt.addEventListener
      ? (pt.removeEventListener('DOMContentLoaded', s, !1), e.removeEventListener('load', s, !1))
      : (pt.detachEvent('onreadystatechange', s), e.detachEvent('onload', s));
  }
  function s() {
    (pt.addEventListener || 'load' === event.type || 'complete' === pt.readyState) &&
      (a(), it.ready());
  }
  function u(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = 'data-' + t.replace(_t, '-$1').toLowerCase();
      if (((n = e.getAttribute(r)), 'string' == typeof n)) {
        try {
          n =
            'true' === n
              ? !0
              : 'false' === n
                ? !1
                : 'null' === n
                  ? null
                  : +n + '' === n
                    ? +n
                    : Ct.test(n)
                      ? it.parseJSON(n)
                      : n;
        } catch (i) {}
        it.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function l(e) {
    var t;
    for (t in e) if (('data' !== t || !it.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
    return !0;
  }
  function c(e, t, n, r) {
    if (it.acceptData(e)) {
      var i,
        o,
        a = it.expando,
        s = e.nodeType,
        u = s ? it.cache : e,
        l = s ? e[a] : e[a] && a;
      if ((l && u[l] && (r || u[l].data)) || void 0 !== n || 'string' != typeof t)
        return (
          l || (l = s ? (e[a] = V.pop() || it.guid++) : a),
          u[l] || (u[l] = s ? {} : { toJSON: it.noop }),
          ('object' == typeof t || 'function' == typeof t) &&
            (r ? (u[l] = it.extend(u[l], t)) : (u[l].data = it.extend(u[l].data, t))),
          (o = u[l]),
          r || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== n && (o[it.camelCase(t)] = n),
          'string' == typeof t ? ((i = o[t]), null == i && (i = o[it.camelCase(t)])) : (i = o),
          i
        );
    }
  }
  function d(e, t, n) {
    if (it.acceptData(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? it.cache : e,
        s = o ? e[it.expando] : it.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          it.isArray(t)
            ? (t = t.concat(it.map(t, it.camelCase)))
            : t in r
              ? (t = [t])
              : ((t = it.camelCase(t)), (t = t in r ? [t] : t.split(' '))),
            (i = t.length);
          for (; i--; ) delete r[t[i]];
          if (n ? !l(r) : !it.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, l(a[s]))) &&
          (o
            ? it.cleanData([e], !0)
            : nt.deleteExpando || a != a.window
              ? delete a[s]
              : (a[s] = null));
      }
    }
  }
  function f() {
    return !0;
  }
  function h() {
    return !1;
  }
  function p() {
    try {
      return pt.activeElement;
    } catch (e) {}
  }
  function m(e) {
    var t = Ot.split('|'),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function g(e, t) {
    var n,
      r,
      i = 0,
      o =
        typeof e.getElementsByTagName !== kt
          ? e.getElementsByTagName(t || '*')
          : typeof e.querySelectorAll !== kt
            ? e.querySelectorAll(t || '*')
            : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
    return void 0 === t || (t && it.nodeName(e, t)) ? it.merge([e], o) : o;
  }
  function y(e) {
    Mt.test(e.type) && (e.defaultChecked = e.checked);
  }
  function v(e, t) {
    return it.nodeName(e, 'table') && it.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
      : e;
  }
  function b(e) {
    return (e.type = (null !== it.find.attr(e, 'type')) + '/' + e.type), e;
  }
  function x(e) {
    var t = Ut.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }
  function w(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      it._data(n, 'globalEval', !t || it._data(t[r], 'globalEval'));
  }
  function T(e, t) {
    if (1 === t.nodeType && it.hasData(e)) {
      var n,
        r,
        i,
        o = it._data(e),
        a = it._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, (a.events = {});
        for (n in s) for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = it.extend({}, a.data));
    }
  }
  function k(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !nt.noCloneEvent && t[it.expando])) {
        i = it._data(t);
        for (r in i.events) it.removeEvent(t, r, i.handle);
        t.removeAttribute(it.expando);
      }
      'script' === n && t.text !== e.text
        ? ((b(t).text = e.text), x(t))
        : 'object' === n
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))
          : 'input' === n && Mt.test(e.type)
            ? ((t.defaultChecked = t.checked = e.checked),
              t.value !== e.value && (t.value = e.value))
            : 'option' === n
              ? (t.defaultSelected = t.selected = e.defaultSelected)
              : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue);
    }
  }
  function C(t, n) {
    var r,
      i = it(n.createElement(t)).appendTo(n.body),
      o =
        e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0]))
          ? r.display
          : it.css(i[0], 'display');
    return i.detach(), o;
  }
  function _(e) {
    var t = pt,
      n = Kt[e];
    return (
      n ||
        ((n = C(e, t)),
        ('none' !== n && n) ||
          ((Qt = (Qt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(
            t.documentElement
          )),
          (t = (Qt[0].contentWindow || Qt[0].contentDocument).document),
          t.write(),
          t.close(),
          (n = C(e, t)),
          Qt.detach()),
        (Kt[e] = n)),
      n
    );
  }
  function S(e, t) {
    return {
      get: function () {
        var n = e();
        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }
  function D(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = hn.length; i--; )
      if (((t = hn[i] + n), t in e)) return t;
    return r;
  }
  function E(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
      (r = e[a]),
        r.style &&
          ((o[a] = it._data(r, 'olddisplay')),
          (n = r.style.display),
          t
            ? (o[a] || 'none' !== n || (r.style.display = ''),
              '' === r.style.display && Et(r) && (o[a] = it._data(r, 'olddisplay', _(r.nodeName))))
            : ((i = Et(r)),
              ((n && 'none' !== n) || !i) &&
                it._data(r, 'olddisplay', i ? n : it.css(r, 'display'))));
    for (a = 0; s > a; a++)
      (r = e[a]),
        r.style &&
          ((t && 'none' !== r.style.display && '' !== r.style.display) ||
            (r.style.display = t ? o[a] || '' : 'none'));
    return e;
  }
  function N(e, t, n) {
    var r = ln.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px') : t;
  }
  function M(e, t, n, r, i) {
    for (var o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, a = 0; 4 > o; o += 2)
      'margin' === n && (a += it.css(e, n + Dt[o], !0, i)),
        r
          ? ('content' === n && (a -= it.css(e, 'padding' + Dt[o], !0, i)),
            'margin' !== n && (a -= it.css(e, 'border' + Dt[o] + 'Width', !0, i)))
          : ((a += it.css(e, 'padding' + Dt[o], !0, i)),
            'padding' !== n && (a += it.css(e, 'border' + Dt[o] + 'Width', !0, i)));
    return a;
  }
  function j(e, t, n) {
    var r = !0,
      i = 'width' === t ? e.offsetWidth : e.offsetHeight,
      o = en(e),
      a = nt.boxSizing && 'border-box' === it.css(e, 'boxSizing', !1, o);
    if (0 >= i || null == i) {
      if (((i = tn(e, t, o)), (0 > i || null == i) && (i = e.style[t]), rn.test(i))) return i;
      (r = a && (nt.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
    }
    return i + M(e, t, n || (a ? 'border' : 'content'), r, o) + 'px';
  }
  function A(e, t, n, r, i) {
    return new A.prototype.init(e, t, n, r, i);
  }
  function L() {
    return (
      setTimeout(function () {
        pn = void 0;
      }),
      (pn = it.now())
    );
  }
  function F(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) (n = Dt[i]), (r['margin' + n] = r['padding' + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function H(e, t, n) {
    for (var r, i = (xn[t] || []).concat(xn['*']), o = 0, a = i.length; a > o; o++)
      if ((r = i[o].call(n, t, e))) return r;
  }
  function O(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      d = this,
      f = {},
      h = e.style,
      p = e.nodeType && Et(e),
      m = it._data(e, 'fxshow');
    n.queue ||
      ((s = it._queueHooks(e, 'fx')),
      null == s.unqueued &&
        ((s.unqueued = 0),
        (u = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || u();
        })),
      s.unqueued++,
      d.always(function () {
        d.always(function () {
          s.unqueued--, it.queue(e, 'fx').length || s.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ('height' in t || 'width' in t) &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (l = it.css(e, 'display')),
        (c = 'none' === l ? it._data(e, 'olddisplay') || _(e.nodeName) : l),
        'inline' === c &&
          'none' === it.css(e, 'float') &&
          (nt.inlineBlockNeedsLayout && 'inline' !== _(e.nodeName)
            ? (h.zoom = 1)
            : (h.display = 'inline-block'))),
      n.overflow &&
        ((h.overflow = 'hidden'),
        nt.shrinkWrapBlocks() ||
          d.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((i = t[r]), gn.exec(i))) {
        if ((delete t[r], (o = o || 'toggle' === i), i === (p ? 'hide' : 'show'))) {
          if ('show' !== i || !m || void 0 === m[r]) continue;
          p = !0;
        }
        f[r] = (m && m[r]) || it.style(e, r);
      } else l = void 0;
    if (it.isEmptyObject(f)) 'inline' === ('none' === l ? _(e.nodeName) : l) && (h.display = l);
    else {
      m ? 'hidden' in m && (p = m.hidden) : (m = it._data(e, 'fxshow', {})),
        o && (m.hidden = !p),
        p
          ? it(e).show()
          : d.done(function () {
              it(e).hide();
            }),
        d.done(function () {
          var t;
          it._removeData(e, 'fxshow');
          for (t in f) it.style(e, t, f[t]);
        });
      for (r in f)
        (a = H(p ? m[r] : 0, r, d)),
          r in m ||
            ((m[r] = a.start),
            p && ((a.end = a.start), (a.start = 'width' === r || 'height' === r ? 1 : 0)));
    }
  }
  function q(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = it.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        it.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = it.cssHooks[r]),
        a && 'expand' in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function Y(e, t, n) {
    var r,
      i,
      o = 0,
      a = bn.length,
      s = it.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = pn || L(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
          u > a;
          a++
        )
          l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
      },
      l = s.promise({
        elem: e,
        props: it.extend({}, t),
        opts: it.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: pn || L(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = it.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
        }
      }),
      c = l.props;
    for (q(c, l.opts.specialEasing); a > o; o++) if ((r = bn[o].call(l, e, c, l.opts))) return r;
    return (
      it.map(c, H, l),
      it.isFunction(l.opts.start) && l.opts.start.call(e, l),
      it.fx.timer(it.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function P(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var r,
        i = 0,
        o = t.toLowerCase().match(bt) || [];
      if (it.isFunction(n))
        for (; (r = o[i++]); )
          '+' === r.charAt(0)
            ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function W(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        it.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return 'string' != typeof l || a || o[l]
            ? a
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === $n;
    return i(t.dataTypes[0]) || (!o['*'] && i('*'));
  }
  function R(e, t) {
    var n,
      r,
      i = it.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && it.extend(!0, e, n), e;
  }
  function z(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0]; )
      u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)
      for (a in s)
        if (s[a] && s[a].test(i)) {
          u.unshift(a);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (a in n) {
        if (!u[0] || e.converters[a + ' ' + u[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
  }
  function B(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ('*' === o) o = u;
        else if ('*' !== u && u !== o) {
          if (((a = l[u + ' ' + o] || l['* ' + o]), !a))
            for (i in l)
              if (((s = i.split(' ')), s[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]]))) {
                a === !0 ? (a = l[i]) : l[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (a !== !0)
            if (a && e['throws']) t = a(t);
            else
              try {
                t = a(t);
              } catch (d) {
                return {
                  state: 'parsererror',
                  error: a ? d : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return { state: 'success', data: t };
  }
  function $(e, t, n, r) {
    var i;
    if (it.isArray(t))
      it.each(t, function (t, i) {
        n || Vn.test(e) ? r(e, i) : $(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== it.type(t)) r(e, t);
    else for (i in t) $(e + '[' + i + ']', t[i], n, r);
  }
  function I() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function X() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }
  function U(e) {
    return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }
  var V = [],
    J = V.slice,
    Z = V.concat,
    G = V.push,
    Q = V.indexOf,
    K = {},
    et = K.toString,
    tt = K.hasOwnProperty,
    nt = {},
    rt = '1.11.1',
    it = function (e, t) {
      return new it.fn.init(e, t);
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    st = /-([\da-z])/gi,
    ut = function (e, t) {
      return t.toUpperCase();
    };
  (it.fn = it.prototype =
    {
      jquery: rt,
      constructor: it,
      selector: '',
      length: 0,
      toArray: function () {
        return J.call(this);
      },
      get: function (e) {
        return null != e ? (0 > e ? this[e + this.length] : this[e]) : J.call(this);
      },
      pushStack: function (e) {
        var t = it.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return it.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          it.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(J.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: G,
      sort: V.sort,
      splice: V.splice
    }),
    (it.extend = it.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || it.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          u > s;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                (n = i[r]),
                a !== n &&
                  (l && n && (it.isPlainObject(n) || (t = it.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && it.isArray(e) ? e : []))
                        : (o = e && it.isPlainObject(e) ? e : {}),
                      (a[r] = it.extend(l, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    it.extend({
      expando: 'jQuery' + (rt + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === it.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return 'array' === it.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !it.isArray(e) && e - parseFloat(e) >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || 'object' !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
        try {
          if (
            e.constructor &&
            !tt.call(e, 'constructor') &&
            !tt.call(e.constructor.prototype, 'isPrototypeOf')
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (nt.ownLast) for (t in e) return tt.call(e, t);
        for (t in e);
        return void 0 === t || tt.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
            ? K[et.call(e)] || 'object'
            : typeof e;
      },
      globalEval: function (t) {
        t &&
          it.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(at, 'ms-').replace(st, ut);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i,
          o = 0,
          a = e.length,
          s = n(e);
        if (r) {
          if (s) for (; a > o && ((i = t.apply(e[o], r)), i !== !1); o++);
          else for (o in e) if (((i = t.apply(e[o], r)), i === !1)) break;
        } else if (s) for (; a > o && ((i = t.call(e[o], o, e[o])), i !== !1); o++);
        else for (o in e) if (((i = t.call(e[o], o, e[o])), i === !1)) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(ot, '');
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e && (n(Object(e)) ? it.merge(r, 'string' == typeof e ? [e] : e) : G.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (Q) return Q.call(t, e, n);
          for (r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0; r > n; n++)
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
        if (n !== n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
          (r = !t(e[o], o)), r !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          o = 0,
          a = e.length,
          s = n(e),
          u = [];
        if (s) for (; a > o; o++) (i = t(e[o], o, r)), null != i && u.push(i);
        else for (o in e) (i = t(e[o], o, r)), null != i && u.push(i);
        return Z.apply([], u);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          'string' == typeof t && ((i = e[t]), (t = e), (e = i)),
          it.isFunction(e)
            ? ((n = J.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, n.concat(J.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || it.guid++),
              r)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: nt
    }),
    it.each(
      'Boolean Number String Function Array Date RegExp Object Error'.split(' '),
      function (e, t) {
        K['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var lt = (function (e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, l, d, h, p, m;
      if (
        ((t ? t.ownerDocument || t : W) !== A && j(t),
        (t = t || A),
        (n = n || []),
        !e || 'string' != typeof e)
      )
        return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (F && !r) {
        if ((i = vt.exec(e)))
          if ((a = i[1])) {
            if (9 === s) {
              if (((o = t.getElementById(a)), !o || !o.parentNode)) return n;
              if (o.id === a) return n.push(o), n;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(a)) &&
              Y(t, o) &&
              o.id === a
            )
              return n.push(o), n;
          } else {
            if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName)
              return K.apply(n, t.getElementsByClassName(a)), n;
          }
        if (w.qsa && (!H || !H.test(e))) {
          if (
            ((h = d = P),
            (p = t),
            (m = 9 === s && e),
            1 === s && 'object' !== t.nodeName.toLowerCase())
          ) {
            for (
              l = _(e),
                (d = t.getAttribute('id')) ? (h = d.replace(xt, '\\$&')) : t.setAttribute('id', h),
                h = "[id='" + h + "'] ",
                u = l.length;
              u--;

            )
              l[u] = h + f(l[u]);
            (p = (bt.test(e) && c(t.parentNode)) || t), (m = l.join(','));
          }
          if (m)
            try {
              return K.apply(n, p.querySelectorAll(m)), n;
            } catch (g) {
            } finally {
              d || t.removeAttribute('id');
            }
        }
      }
      return D(e.replace(ut, '$1'), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > T.cacheLength && delete e[t.shift()], (e[n + ' '] = r);
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[P] = !0), e;
    }
    function i(e) {
      var t = A.createElement('div');
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = e.length; r--; ) T.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function l(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && typeof e.getElementsByTagName !== U && e;
    }
    function d() {}
    function f(e) {
      for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
      return r;
    }
    function h(e, t, n) {
      var r = t.dir,
        i = n && 'parentNode' === r,
        o = z++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              u,
              l = [R, o];
            if (a) {
              for (; (t = t[r]); ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (((u = t[P] || (t[P] = {})), (s = u[r]) && s[0] === R && s[1] === o))
                    return (l[2] = s[2]);
                  if (((u[r] = l), (l[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function p(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function m(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r;
    }
    function g(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a;
    }
    function y(e, t, n, i, o, a) {
      return (
        i && !i[P] && (i = y(i)),
        o && !o[P] && (o = y(o, a)),
        r(function (r, a, s, u) {
          var l,
            c,
            d,
            f = [],
            h = [],
            p = a.length,
            y = r || m(t || '*', s.nodeType ? [s] : s, []),
            v = !e || (!r && t) ? y : g(y, f, e, s, u),
            b = n ? (o || (r ? e : p || i) ? [] : a) : v;
          if ((n && n(v, b, s, u), i))
            for (l = g(b, h), i(l, [], s, u), c = l.length; c--; )
              (d = l[c]) && (b[h[c]] = !(v[h[c]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = b.length; c--; ) (d = b[c]) && l.push((v[c] = d));
                o(null, (b = []), l, u);
              }
              for (c = b.length; c--; )
                (d = b[c]) && (l = o ? tt.call(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d));
            }
          } else (b = g(b === a ? b.splice(p, b.length) : b)), o ? o(null, a, b, u) : K.apply(a, b);
        })
      );
    }
    function v(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = T.relative[e[0].type],
          a = o || T.relative[' '],
          s = o ? 1 : 0,
          u = h(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          l = h(
            function (e) {
              return tt.call(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, r) {
              return (!o && (r || n !== E)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
            }
          ];
        i > s;
        s++
      )
        if ((n = T.relative[e[s].type])) c = [h(p(c), n)];
        else {
          if (((n = T.filter[e[s].type].apply(null, e[s].matches)), n[P])) {
            for (r = ++s; i > r && !T.relative[e[r].type]; r++);
            return y(
              s > 1 && p(c),
              s > 1 &&
                f(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace(
                  ut,
                  '$1'
                ),
              n,
              r > s && v(e.slice(s, r)),
              i > r && v((e = e.slice(r))),
              i > r && f(e)
            );
          }
          c.push(n);
        }
      return p(c);
    }
    function b(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (r, a, s, u, l) {
          var c,
            d,
            f,
            h = 0,
            p = '0',
            m = r && [],
            y = [],
            v = E,
            b = r || (o && T.find.TAG('*', l)),
            x = (R += null == v ? 1 : Math.random() || 0.1),
            w = b.length;
          for (l && (E = a !== A && a); p !== w && null != (c = b[p]); p++) {
            if (o && c) {
              for (d = 0; (f = e[d++]); )
                if (f(c, a, s)) {
                  u.push(c);
                  break;
                }
              l && (R = x);
            }
            i && ((c = !f && c) && h--, r && m.push(c));
          }
          if (((h += p), i && p !== h)) {
            for (d = 0; (f = n[d++]); ) f(m, y, a, s);
            if (r) {
              if (h > 0) for (; p--; ) m[p] || y[p] || (y[p] = G.call(u));
              y = g(y);
            }
            K.apply(u, y), l && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(u);
          }
          return l && ((R = x), (E = v)), m;
        };
      return i ? r(a) : a;
    }
    var x,
      w,
      T,
      k,
      C,
      _,
      S,
      D,
      E,
      N,
      M,
      j,
      A,
      L,
      F,
      H,
      O,
      q,
      Y,
      P = 'sizzle' + -new Date(),
      W = e.document,
      R = 0,
      z = 0,
      B = n(),
      $ = n(),
      I = n(),
      X = function (e, t) {
        return e === t && (M = !0), 0;
      },
      U = 'undefined',
      V = 1 << 31,
      J = {}.hasOwnProperty,
      Z = [],
      G = Z.pop,
      Q = Z.push,
      K = Z.push,
      et = Z.slice,
      tt =
        Z.indexOf ||
        function (e) {
          for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
          return -1;
        },
      nt =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      rt = '[\\x20\\t\\r\\n\\f]',
      it = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      ot = it.replace('w', 'w#'),
      at =
        '\\[' +
        rt +
        '*(' +
        it +
        ')(?:' +
        rt +
        '*([*^$|!~]?=)' +
        rt +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        ot +
        '))|)' +
        rt +
        '*\\]',
      st =
        ':(' +
        it +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        at +
        ')*)|.*)\\)|)',
      ut = new RegExp('^' + rt + '+|((?:^|[^\\\\])(?:\\\\.)*)' + rt + '+$', 'g'),
      lt = new RegExp('^' + rt + '*,' + rt + '*'),
      ct = new RegExp('^' + rt + '*([>+~]|' + rt + ')' + rt + '*'),
      dt = new RegExp('=' + rt + '*([^\\]\'"]*?)' + rt + '*\\]', 'g'),
      ft = new RegExp(st),
      ht = new RegExp('^' + ot + '$'),
      pt = {
        ID: new RegExp('^#(' + it + ')'),
        CLASS: new RegExp('^\\.(' + it + ')'),
        TAG: new RegExp('^(' + it.replace('w', 'w*') + ')'),
        ATTR: new RegExp('^' + at),
        PSEUDO: new RegExp('^' + st),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            rt +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            rt +
            '*(?:([+-]|)' +
            rt +
            '*(\\d+)|))' +
            rt +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + nt + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            rt +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            rt +
            '*((?:-\\d)?\\d*)' +
            rt +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      mt = /^(?:input|select|textarea|button)$/i,
      gt = /^h\d$/i,
      yt = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      bt = /[+~]/,
      xt = /'|\\/g,
      wt = new RegExp('\\\\([\\da-f]{1,6}' + rt + '?|(' + rt + ')|.)', 'ig'),
      Tt = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n
          ? t
          : 0 > r
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
    try {
      K.apply((Z = et.call(W.childNodes)), W.childNodes), Z[W.childNodes.length].nodeType;
    } catch (kt) {
      K = {
        apply: Z.length
          ? function (e, t) {
              Q.apply(e, et.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    (w = t.support = {}),
      (C = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? 'HTML' !== t.nodeName : !1;
        }),
      (j = t.setDocument =
        function (e) {
          var t,
            n = e ? e.ownerDocument || e : W,
            r = n.defaultView;
          return n !== A && 9 === n.nodeType && n.documentElement
            ? ((A = n),
              (L = n.documentElement),
              (F = !C(n)),
              r &&
                r !== r.top &&
                (r.addEventListener
                  ? r.addEventListener(
                      'unload',
                      function () {
                        j();
                      },
                      !1
                    )
                  : r.attachEvent &&
                    r.attachEvent('onunload', function () {
                      j();
                    })),
              (w.attributes = i(function (e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (w.getElementsByTagName = i(function (e) {
                return e.appendChild(n.createComment('')), !e.getElementsByTagName('*').length;
              })),
              (w.getElementsByClassName =
                yt.test(n.getElementsByClassName) &&
                i(function (e) {
                  return (
                    (e.innerHTML = "<div class='a'></div><div class='a i'></div>"),
                    (e.firstChild.className = 'i'),
                    2 === e.getElementsByClassName('i').length
                  );
                })),
              (w.getById = i(function (e) {
                return (
                  (L.appendChild(e).id = P), !n.getElementsByName || !n.getElementsByName(P).length
                );
              })),
              w.getById
                ? ((T.find.ID = function (e, t) {
                    if (typeof t.getElementById !== U && F) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (T.filter.ID = function (e) {
                    var t = e.replace(wt, Tt);
                    return function (e) {
                      return e.getAttribute('id') === t;
                    };
                  }))
                : (delete T.find.ID,
                  (T.filter.ID = function (e) {
                    var t = e.replace(wt, Tt);
                    return function (e) {
                      var n = typeof e.getAttributeNode !== U && e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  })),
              (T.find.TAG = w.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (T.find.CLASS =
                w.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== U && F
                    ? t.getElementsByClassName(e)
                    : void 0;
                }),
              (O = []),
              (H = []),
              (w.qsa = yt.test(n.querySelectorAll)) &&
                (i(function (e) {
                  (e.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowclip^='']").length &&
                      H.push('[*^$]=' + rt + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length ||
                      H.push('\\[' + rt + '*(?:value|' + nt + ')'),
                    e.querySelectorAll(':checked').length || H.push(':checked');
                }),
                i(function (e) {
                  var t = n.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length && H.push('name' + rt + '*[*^$|!~]?='),
                    e.querySelectorAll(':enabled').length || H.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    H.push(',.*:');
                })),
              (w.matchesSelector = yt.test(
                (q =
                  L.matches ||
                  L.webkitMatchesSelector ||
                  L.mozMatchesSelector ||
                  L.oMatchesSelector ||
                  L.msMatchesSelector)
              )) &&
                i(function (e) {
                  (w.disconnectedMatch = q.call(e, 'div')),
                    q.call(e, "[s!='']:x"),
                    O.push('!=', st);
                }),
              (H = H.length && new RegExp(H.join('|'))),
              (O = O.length && new RegExp(O.join('|'))),
              (t = yt.test(L.compareDocumentPosition)),
              (Y =
                t || yt.test(L.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (X = t
                ? function (e, t) {
                    if (e === t) return (M = !0), 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r
                      ? r
                      : ((r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & r || (!w.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === n || (e.ownerDocument === W && Y(W, e))
                            ? -1
                            : t === n || (t.ownerDocument === W && Y(W, t))
                              ? 1
                              : N
                                ? tt.call(N, e) - tt.call(N, t)
                                : 0
                          : 4 & r
                            ? -1
                            : 1);
                  }
                : function (e, t) {
                    if (e === t) return (M = !0), 0;
                    var r,
                      i = 0,
                      o = e.parentNode,
                      s = t.parentNode,
                      u = [e],
                      l = [t];
                    if (!o || !s)
                      return e === n
                        ? -1
                        : t === n
                          ? 1
                          : o
                            ? -1
                            : s
                              ? 1
                              : N
                                ? tt.call(N, e) - tt.call(N, t)
                                : 0;
                    if (o === s) return a(e, t);
                    for (r = e; (r = r.parentNode); ) u.unshift(r);
                    for (r = t; (r = r.parentNode); ) l.unshift(r);
                    for (; u[i] === l[i]; ) i++;
                    return i ? a(u[i], l[i]) : u[i] === W ? -1 : l[i] === W ? 1 : 0;
                  }),
              n)
            : A;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== A && j(e),
          (n = n.replace(dt, "='$1']")),
          !(!w.matchesSelector || !F || (O && O.test(n)) || (H && H.test(n))))
        )
          try {
            var r = q.call(e, n);
            if (r || w.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
          } catch (i) {}
        return t(n, A, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== A && j(e), Y(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== A && j(e);
        var n = T.attrHandle[t.toLowerCase()],
          r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
        return void 0 !== r
          ? r
          : w.attributes || !F
            ? e.getAttribute(t)
            : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
      }),
      (t.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (((M = !w.detectDuplicates), (N = !w.sortStable && e.slice(0)), e.sort(X), M)) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (N = null), e;
      }),
      (k = t.getText =
        function (e) {
          var t,
            n = '',
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += k(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += k(t);
          return n;
        }),
      (T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: pt,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(wt, Tt)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(wt, Tt)),
                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                'nth' === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                    (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return pt.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      ft.test(n) &&
                      (t = _(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(wt, Tt).toLowerCase();
              return '*' === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = B[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + rt + ')' + e + '(' + rt + '|$)')) &&
                  B(e, function (e) {
                    return t.test(
                      ('string' == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== U && e.getAttribute('class')) ||
                        ''
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? '!=' === n
                  : n
                    ? ((o += ''),
                      '=' === n
                        ? o === r
                        : '!=' === n
                          ? o !== r
                          : '^=' === n
                            ? r && 0 === o.indexOf(r)
                            : '*=' === n
                              ? r && o.indexOf(r) > -1
                              : '$=' === n
                                ? r && o.slice(-r.length) === r
                                : '~=' === n
                                  ? (' ' + o + ' ').indexOf(r) > -1
                                  : '|=' === n
                                    ? o === r || o.slice(0, r.length + 1) === r + '-'
                                    : !1)
                    : !0;
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = 'nth' !== e.slice(0, 3),
                a = 'last' !== e.slice(-4),
                s = 'of-type' === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      d,
                      f,
                      h,
                      p,
                      m = o !== a ? 'nextSibling' : 'previousSibling',
                      g = t.parentNode,
                      y = s && t.nodeName.toLowerCase(),
                      v = !u && !s;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (d = t; (d = d[m]); )
                            if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                          p = m = 'only' === e && !p && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((p = [a ? g.firstChild : g.lastChild]), a && v)) {
                        for (
                          c = g[P] || (g[P] = {}),
                            l = c[e] || [],
                            h = l[0] === R && l[1],
                            f = l[0] === R && l[2],
                            d = h && g.childNodes[h];
                          (d = (++h && d && d[m]) || (f = h = 0) || p.pop());

                        )
                          if (1 === d.nodeType && ++f && d === t) {
                            c[e] = [R, h, f];
                            break;
                          }
                      } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === R) f = l[1];
                      else
                        for (
                          ;
                          (d = (++h && d && d[m]) || (f = h = 0) || p.pop()) &&
                          ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) ||
                            !++f ||
                            (v && ((d[P] || (d[P] = {}))[e] = [R, f]), d !== t));

                        );
                      return (f -= i), f === r || (f % r === 0 && f / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  T.pseudos[e] ||
                  T.setFilters[e.toLowerCase()] ||
                  t.error('unsupported pseudo: ' + e);
              return o[P]
                ? o(n)
                : o.length > 1
                  ? ((i = [e, e, '', n]),
                    T.setFilters.hasOwnProperty(e.toLowerCase())
                      ? r(function (e, t) {
                          for (var r, i = o(e, n), a = i.length; a--; )
                            (r = tt.call(e, i[a])), (e[r] = !(t[r] = i[a]));
                        })
                      : function (e) {
                          return o(e, 0, i);
                        })
                  : o;
            }
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = S(e.replace(ut, '$1'));
              return i[P]
                ? r(function (e, t, n, r) {
                    for (var o, a = i(e, null, r, []), s = e.length; s--; )
                      (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, r, o) {
                    return (t[0] = e), i(t, null, o, n), !n.pop();
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1;
              };
            }),
            lang: r(function (e) {
              return (
                ht.test(e || '') || t.error('unsupported lang: ' + e),
                (e = e.replace(wt, Tt).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if ((n = F ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                      return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + '-');
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === L;
            },
            focus: function (e) {
              return (
                e === A.activeElement &&
                (!A.hasFocus || A.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
            },
            selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return gt.test(e.nodeName);
            },
            input: function (e) {
              return mt.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function (e) {
              var t;
              return (
                'input' === e.nodeName.toLowerCase() &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            })
          }
        }),
      (T.pseudos.nth = T.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = s(x);
    for (x in { submit: !0, reset: !0 }) T.pseudos[x] = u(x);
    return (
      (d.prototype = T.filters = T.pseudos),
      (T.setFilters = new d()),
      (_ = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = $[e + ' '];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, u = [], l = T.preFilter; s; ) {
            (!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = ct.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(ut, ' ') }),
                (s = s.slice(r.length)));
            for (a in T.filter)
              !(i = pt[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: a, matches: i }),
                (s = s.slice(r.length)));
            if (!r) break;
          }
          return n ? s.length : s ? t.error(e) : $(e, u).slice(0);
        }),
      (S = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = I[e + ' '];
          if (!o) {
            for (t || (t = _(e)), n = t.length; n--; ) (o = v(t[n])), o[P] ? r.push(o) : i.push(o);
            (o = I(e, b(i, r))), (o.selector = e);
          }
          return o;
        }),
      (D = t.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            d = !r && _((e = l.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              ((o = d[0] = d[0].slice(0)),
              o.length > 2 &&
                'ID' === (a = o[0]).type &&
                w.getById &&
                9 === t.nodeType &&
                F &&
                T.relative[o[1].type])
            ) {
              if (((t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0]), !t)) return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = pt.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !T.relative[(s = a.type)]);

            )
              if (
                (u = T.find[s]) &&
                (r = u(a.matches[0].replace(wt, Tt), (bt.test(o[0].type) && c(t.parentNode)) || t))
              ) {
                if ((o.splice(i, 1), (e = r.length && f(o)), !e)) return K.apply(n, r), n;
                break;
              }
          }
          return (l || S(e, d))(r, t, !F, n, (bt.test(e) && c(t.parentNode)) || t), n;
        }),
      (w.sortStable = P.split('').sort(X).join('') === P),
      (w.detectDuplicates = !!M),
      j(),
      (w.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(A.createElement('div'));
      })),
      i(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        o('type|href|height|width', function (e, t, n) {
          return n ? void 0 : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        o('value', function (e, t, n) {
          return n || 'input' !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        o(nt, function (e, t, n) {
          var r;
          return n
            ? void 0
            : e[t] === !0
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
      t
    );
  })(e);
  (it.find = lt),
    (it.expr = lt.selectors),
    (it.expr[':'] = it.expr.pseudos),
    (it.unique = lt.uniqueSort),
    (it.text = lt.getText),
    (it.isXMLDoc = lt.isXML),
    (it.contains = lt.contains);
  var ct = it.expr.match.needsContext,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ft = /^.[^:#\[\.,]*$/;
  (it.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? it.find.matchesSelector(r, e)
          ? [r]
          : []
        : it.find.matches(
            e,
            it.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    it.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ('string' != typeof e)
          return this.pushStack(
            it(e).filter(function () {
              for (t = 0; i > t; t++) if (it.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; i > t; t++) it.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? it.unique(n) : n)),
          (n.selector = this.selector ? this.selector + ' ' + e : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(this, 'string' == typeof e && ct.test(e) ? it(e) : e || [], !1).length;
      }
    });
  var ht,
    pt = e.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = (it.fn.init = function (e, t) {
      var n, r;
      if (!e) return this;
      if ('string' == typeof e) {
        if (
          ((n =
            '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3
              ? [null, e, null]
              : mt.exec(e)),
          !n || (!n[1] && t))
        )
          return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof it ? t[0] : t),
            it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)),
            dt.test(n[1]) && it.isPlainObject(t))
          )
            for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        if (((r = pt.getElementById(n[2])), r && r.parentNode)) {
          if (r.id !== n[2]) return ht.find(e);
          (this.length = 1), (this[0] = r);
        }
        return (this.context = pt), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : it.isFunction(e)
          ? 'undefined' != typeof ht.ready
            ? ht.ready(e)
            : e(it)
          : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)),
            it.makeArray(e, this));
    });
  (gt.prototype = it.fn), (ht = it(pt));
  var yt = /^(?:parents|prev(?:Until|All))/,
    vt = { children: !0, contents: !0, next: !0, prev: !0 };
  it.extend({
    dir: function (e, t, n) {
      for (
        var r = [], i = e[t];
        i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));

      )
        1 === i.nodeType && r.push(i), (i = i[t]);
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  }),
    it.fn.extend({
      has: function (e) {
        var t,
          n = it(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; r > t; t++) if (it.contains(this, n[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = ct.test(e) || 'string' != typeof e ? it(e, t || this.context) : 0;
          i > r;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(o.length > 1 ? it.unique(o) : o);
      },
      index: function (e) {
        return e
          ? 'string' == typeof e
            ? it.inArray(this[0], it(e))
            : it.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (e, t) {
        return this.pushStack(it.unique(it.merge(this.get(), it(e, t))));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }),
    it.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return it.dir(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return it.dir(e, 'parentNode', n);
        },
        next: function (e) {
          return i(e, 'nextSibling');
        },
        prev: function (e) {
          return i(e, 'previousSibling');
        },
        nextAll: function (e) {
          return it.dir(e, 'nextSibling');
        },
        prevAll: function (e) {
          return it.dir(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return it.dir(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return it.dir(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return it.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return it.sibling(e.firstChild);
        },
        contents: function (e) {
          return it.nodeName(e, 'iframe')
            ? e.contentDocument || e.contentWindow.document
            : it.merge([], e.childNodes);
        }
      },
      function (e, t) {
        it.fn[e] = function (n, r) {
          var i = it.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (r = n),
            r && 'string' == typeof r && (i = it.filter(r, i)),
            this.length > 1 && (vt[e] || (i = it.unique(i)), yt.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var bt = /\S+/g,
    xt = {};
  (it.Callbacks = function (e) {
    e = 'string' == typeof e ? xt[e] || o(e) : it.extend({}, e);
    var t,
      n,
      r,
      i,
      a,
      s,
      u = [],
      l = !e.once && [],
      c = function (o) {
        for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
          if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break;
          }
        (t = !1), u && (l ? l.length && c(l.shift()) : n ? (u = []) : d.disable());
      },
      d = {
        add: function () {
          if (u) {
            var r = u.length;
            !(function o(t) {
              it.each(t, function (t, n) {
                var r = it.type(n);
                'function' === r
                  ? (e.unique && d.has(n)) || u.push(n)
                  : n && n.length && 'string' !== r && o(n);
              });
            })(arguments),
              t ? (i = u.length) : n && ((s = r), c(n));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              it.each(arguments, function (e, n) {
                for (var r; (r = it.inArray(n, u, r)) > -1; )
                  u.splice(r, 1), t && (i >= r && i--, a >= r && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? it.inArray(e, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (i = 0), this;
        },
        disable: function () {
          return (u = l = n = void 0), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (l = void 0), n || d.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, n) {
          return (
            !u ||
              (r && !l) ||
              ((n = n || []), (n = [e, n.slice ? n.slice() : n]), t ? l.push(n) : c(n)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      };
    return d;
  }),
    it.extend({
      Deferred: function (e) {
        var t = [
            ['resolve', 'done', it.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', it.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', it.Callbacks('memory')]
          ],
          n = 'pending',
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return it
                .Deferred(function (n) {
                  it.each(t, function (t, o) {
                    var a = it.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && it.isFunction(e.promise)
                        ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                        : n[o[0] + 'With'](this === r ? n.promise() : this, a ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? it.extend(e, r) : r;
            }
          },
          i = {};
        return (
          (r.pipe = r.then),
          it.each(t, function (e, o) {
            var a = o[2],
              s = o[3];
            (r[o[1]] = a.add),
              s &&
                a.add(
                  function () {
                    n = s;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + 'With'](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + 'With'] = a.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = J.call(arguments),
          a = o.length,
          s = 1 !== a || (e && it.isFunction(e.promise)) ? a : 0,
          u = 1 === s ? e : it.Deferred(),
          l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? J.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
            };
          };
        if (a > 1)
          for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
            o[i] && it.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .done(l(i, r, o))
                  .fail(u.reject)
                  .progress(l(i, n, t))
              : --s;
        return s || u.resolveWith(r, o), u.promise();
      }
    });
  var wt;
  (it.fn.ready = function (e) {
    return it.ready.promise().done(e), this;
  }),
    it.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? it.readyWait++ : it.ready(!0);
      },
      ready: function (e) {
        if (e === !0 ? !--it.readyWait : !it.isReady) {
          if (!pt.body) return setTimeout(it.ready);
          (it.isReady = !0),
            (e !== !0 && --it.readyWait > 0) ||
              (wt.resolveWith(pt, [it]),
              it.fn.triggerHandler && (it(pt).triggerHandler('ready'), it(pt).off('ready')));
        }
      }
    }),
    (it.ready.promise = function (t) {
      if (!wt)
        if (((wt = it.Deferred()), 'complete' === pt.readyState)) setTimeout(it.ready);
        else if (pt.addEventListener)
          pt.addEventListener('DOMContentLoaded', s, !1), e.addEventListener('load', s, !1);
        else {
          pt.attachEvent('onreadystatechange', s), e.attachEvent('onload', s);
          var n = !1;
          try {
            n = null == e.frameElement && pt.documentElement;
          } catch (r) {}
          n &&
            n.doScroll &&
            !(function i() {
              if (!it.isReady) {
                try {
                  n.doScroll('left');
                } catch (e) {
                  return setTimeout(i, 50);
                }
                a(), it.ready();
              }
            })();
        }
      return wt.promise(t);
    });
  var Tt,
    kt = 'undefined';
  for (Tt in it(nt)) break;
  (nt.ownLast = '0' !== Tt),
    (nt.inlineBlockNeedsLayout = !1),
    it(function () {
      var e, t, n, r;
      (n = pt.getElementsByTagName('body')[0]),
        n &&
          n.style &&
          ((t = pt.createElement('div')),
          (r = pt.createElement('div')),
          (r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
          n.appendChild(r).appendChild(t),
          typeof t.style.zoom !== kt &&
            ((t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
            (nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
            e && (n.style.zoom = 1)),
          n.removeChild(r));
    }),
    (function () {
      var e = pt.createElement('div');
      if (null == nt.deleteExpando) {
        nt.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          nt.deleteExpando = !1;
        }
      }
      e = null;
    })(),
    (it.acceptData = function (e) {
      var t = it.noData[(e.nodeName + ' ').toLowerCase()],
        n = +e.nodeType || 1;
      return 1 !== n && 9 !== n ? !1 : !t || (t !== !0 && e.getAttribute('classid') === t);
    });
  var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    _t = /([A-Z])/g;
  it.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (e) {
      return (e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando]), !!e && !l(e);
    },
    data: function (e, t, n) {
      return c(e, t, n);
    },
    removeData: function (e, t) {
      return d(e, t);
    },
    _data: function (e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return d(e, t, !0);
    }
  }),
    it.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((i = it.data(o)), 1 === o.nodeType && !it._data(o, 'parsedAttrs'))) {
            for (n = a.length; n--; )
              a[n] &&
                ((r = a[n].name),
                0 === r.indexOf('data-') && ((r = it.camelCase(r.slice(5))), u(o, r, i[r])));
            it._data(o, 'parsedAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof e
          ? this.each(function () {
              it.data(this, e);
            })
          : arguments.length > 1
            ? this.each(function () {
                it.data(this, e, t);
              })
            : o
              ? u(o, e, it.data(o, e))
              : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          it.removeData(this, e);
        });
      }
    }),
    it.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || 'fx') + 'queue'),
            (r = it._data(e, t)),
            n && (!r || it.isArray(n) ? (r = it._data(e, t, it.makeArray(n))) : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = it.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = it._queueHooks(e, t),
          a = function () {
            it.dequeue(e, t);
          };
        'inprogress' === i && ((i = n.shift()), r--),
          i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          it._data(e, n) ||
          it._data(e, n, {
            empty: it.Callbacks('once memory').add(function () {
              it._removeData(e, t + 'queue'), it._removeData(e, n);
            })
          })
        );
      }
    }),
    it.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? it.queue(this[0], e)
            : void 0 === t
              ? this
              : this.each(function () {
                  var n = it.queue(this, e, t);
                  it._queueHooks(this, e),
                    'fx' === e && 'inprogress' !== n[0] && it.dequeue(this, e);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          it.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = it.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; a--; )
          (n = it._data(o[a], e + 'queueHooks')), n && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      }
    });
  var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Dt = ['Top', 'Right', 'Bottom', 'Left'],
    Et = function (e, t) {
      return (e = t || e), 'none' === it.css(e, 'display') || !it.contains(e.ownerDocument, e);
    },
    Nt = (it.access = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === it.type(n)) {
        i = !0;
        for (s in n) it.access(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        it.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(it(e), n);
              }))),
        t)
      )
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }),
    Mt = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = pt.createElement('input'),
      t = pt.createElement('div'),
      n = pt.createDocumentFragment();
    if (
      ((t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (nt.leadingWhitespace = 3 === t.firstChild.nodeType),
      (nt.tbody = !t.getElementsByTagName('tbody').length),
      (nt.htmlSerialize = !!t.getElementsByTagName('link').length),
      (nt.html5Clone = '<:nav></:nav>' !== pt.createElement('nav').cloneNode(!0).outerHTML),
      (e.type = 'checkbox'),
      (e.checked = !0),
      n.appendChild(e),
      (nt.appendChecked = e.checked),
      (t.innerHTML = '<textarea>x</textarea>'),
      (nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      n.appendChild(t),
      (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (nt.noCloneEvent = !0),
      t.attachEvent &&
        (t.attachEvent('onclick', function () {
          nt.noCloneEvent = !1;
        }),
        t.cloneNode(!0).click()),
      null == nt.deleteExpando)
    ) {
      nt.deleteExpando = !0;
      try {
        delete t.test;
      } catch (r) {
        nt.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var t,
        n,
        r = pt.createElement('div');
      for (t in { submit: !0, change: !0, focusin: !0 })
        (n = 'on' + t),
          (nt[t + 'Bubbles'] = n in e) ||
            (r.setAttribute(n, 't'), (nt[t + 'Bubbles'] = r.attributes[n].expando === !1));
      r = null;
    })();
  var jt = /^(?:input|select|textarea)$/i,
    At = /^key/,
    Lt = /^(?:mouse|pointer|contextmenu)|click/,
    Ft = /^(?:focusinfocus|focusoutblur)$/,
    Ht = /^([^.]*)(?:\.(.+)|)$/;
  (it.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        h,
        p,
        m,
        g = it._data(e);
      if (g) {
        for (
          n.handler && ((u = n), (n = u.handler), (i = u.selector)),
            n.guid || (n.guid = it.guid++),
            (a = g.events) || (a = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle =
                function (e) {
                  return typeof it === kt || (e && it.event.triggered === e.type)
                    ? void 0
                    : it.event.dispatch.apply(c.elem, arguments);
                }),
              (c.elem = e)),
            t = (t || '').match(bt) || [''],
            s = t.length;
          s--;

        )
          (o = Ht.exec(t[s]) || []),
            (h = m = o[1]),
            (p = (o[2] || '').split('.').sort()),
            h &&
              ((l = it.event.special[h] || {}),
              (h = (i ? l.delegateType : l.bindType) || h),
              (l = it.event.special[h] || {}),
              (d = it.extend(
                {
                  type: h,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && it.expr.match.needsContext.test(i),
                  namespace: p.join('.')
                },
                u
              )),
              (f = a[h]) ||
                ((f = a[h] = []),
                (f.delegateCount = 0),
                (l.setup && l.setup.call(e, r, p, c) !== !1) ||
                  (e.addEventListener
                    ? e.addEventListener(h, c, !1)
                    : e.attachEvent && e.attachEvent('on' + h, c))),
              l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (it.event.global[h] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        h,
        p,
        m,
        g = it.hasData(e) && it._data(e);
      if (g && (c = g.events)) {
        for (t = (t || '').match(bt) || [''], l = t.length; l--; )
          if (
            ((s = Ht.exec(t[l]) || []), (h = m = s[1]), (p = (s[2] || '').split('.').sort()), h)
          ) {
            for (
              d = it.event.special[h] || {},
                h = (r ? d.delegateType : d.bindType) || h,
                f = c[h] || [],
                s = s[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                u = o = f.length;
              o--;

            )
              (a = f[o]),
                (!i && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ('**' !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, a));
            u &&
              !f.length &&
              ((d.teardown && d.teardown.call(e, p, g.handle) !== !1) ||
                it.removeEvent(e, h, g.handle),
              delete c[h]);
          } else for (h in c) it.event.remove(e, h + t[l], n, r, !0);
        it.isEmptyObject(c) && (delete g.handle, it._removeData(e, 'events'));
      }
    },
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        f = [r || pt],
        h = tt.call(t, 'type') ? t.type : t,
        p = tt.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = c = r = r || pt),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ft.test(h + it.event.triggered) &&
          (h.indexOf('.') >= 0 && ((p = h.split('.')), (h = p.shift()), p.sort()),
          (a = h.indexOf(':') < 0 && 'on' + h),
          (t = t[it.expando] ? t : new it.Event(h, 'object' == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = p.join('.')),
          (t.namespace_re = t.namespace
            ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : it.makeArray(n, [t])),
          (l = it.event.special[h] || {}),
          i || !l.trigger || l.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !l.noBubble && !it.isWindow(r)) {
          for (u = l.delegateType || h, Ft.test(u + h) || (s = s.parentNode); s; s = s.parentNode)
            f.push(s), (c = s);
          c === (r.ownerDocument || pt) && f.push(c.defaultView || c.parentWindow || e);
        }
        for (d = 0; (s = f[d++]) && !t.isPropagationStopped(); )
          (t.type = d > 1 ? u : l.bindType || h),
            (o = (it._data(s, 'events') || {})[t.type] && it._data(s, 'handle')),
            o && o.apply(s, n),
            (o = a && s[a]),
            o &&
              o.apply &&
              it.acceptData(s) &&
              ((t.result = o.apply(s, n)), t.result === !1 && t.preventDefault());
        if (
          ((t.type = h),
          !i &&
            !t.isDefaultPrevented() &&
            (!l._default || l._default.apply(f.pop(), n) === !1) &&
            it.acceptData(r) &&
            a &&
            r[h] &&
            !it.isWindow(r))
        ) {
          (c = r[a]), c && (r[a] = null), (it.event.triggered = h);
          try {
            r[h]();
          } catch (m) {}
          (it.event.triggered = void 0), c && (r[a] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = it.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        a = [],
        s = J.call(arguments),
        u = (it._data(this, 'events') || {})[e.type] || [],
        l = it.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, e) !== !1)
      ) {
        for (
          a = it.event.handlers.call(this, e, u), t = 0;
          (i = a[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, o = 0;
            (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
              ((e.handleObj = r),
              (e.data = r.data),
              (n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)),
              void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && (!e.button || 'click' !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || 'click' !== e.type)) {
            for (i = [], o = 0; s > o; o++)
              (r = t[o]),
                (n = r.selector + ' '),
                void 0 === i[n] &&
                  (i[n] = r.needsContext
                    ? it(n, this).index(u) >= 0
                    : it.find(n, this, null, [u]).length),
                i[n] && i.push(r);
            i.length && a.push({ elem: u, handlers: i });
          }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[it.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        a = this.fixHooks[i];
      for (
        a ||
          (this.fixHooks[i] = a = Lt.test(i) ? this.mouseHooks : At.test(i) ? this.keyHooks : {}),
          r = a.props ? this.props.concat(a.props) : this.props,
          e = new it.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = o.srcElement || pt),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        a.filter ? a.filter(e, o) : e
      );
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' '
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button,
          a = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = e.target.ownerDocument || pt),
            (i = r.documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a),
          e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      }
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== p() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === p() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return it.nodeName(this, 'input') && 'checkbox' === this.type && this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return it.nodeName(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = it.extend(new it.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    }
  }),
    (it.removeEvent = pt.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var r = 'on' + t;
          e.detachEvent && (typeof e[r] === kt && (e[r] = null), e.detachEvent(r, n));
        }),
    (it.Event = function (e, t) {
      return this instanceof it.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? f
                  : h))
            : (this.type = e),
          t && it.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || it.now()),
          void (this[it.expando] = !0))
        : new it.Event(e, t);
    }),
    (it.Event.prototype = {
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = f),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = f),
          e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = f),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    it.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function (e, t) {
        it.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (!i || (i !== r && !it.contains(r, i))) &&
                ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          }
        };
      }
    ),
    nt.submitBubbles ||
      (it.event.special.submit = {
        setup: function () {
          return it.nodeName(this, 'form')
            ? !1
            : void it.event.add(this, 'click._submit keypress._submit', function (e) {
                var t = e.target,
                  n = it.nodeName(t, 'input') || it.nodeName(t, 'button') ? t.form : void 0;
                n &&
                  !it._data(n, 'submitBubbles') &&
                  (it.event.add(n, 'submit._submit', function (e) {
                    e._submit_bubble = !0;
                  }),
                  it._data(n, 'submitBubbles', !0));
              });
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && it.event.simulate('submit', this.parentNode, e, !0));
        },
        teardown: function () {
          return it.nodeName(this, 'form') ? !1 : void it.event.remove(this, '._submit');
        }
      }),
    nt.changeBubbles ||
      (it.event.special.change = {
        setup: function () {
          return jt.test(this.nodeName)
            ? (('checkbox' === this.type || 'radio' === this.type) &&
                (it.event.add(this, 'propertychange._change', function (e) {
                  'checked' === e.originalEvent.propertyName && (this._just_changed = !0);
                }),
                it.event.add(this, 'click._change', function (e) {
                  this._just_changed && !e.isTrigger && (this._just_changed = !1),
                    it.event.simulate('change', this, e, !0);
                })),
              !1)
            : void it.event.add(this, 'beforeactivate._change', function (e) {
                var t = e.target;
                jt.test(t.nodeName) &&
                  !it._data(t, 'changeBubbles') &&
                  (it.event.add(t, 'change._change', function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      it.event.simulate('change', this.parentNode, e, !0);
                  }),
                  it._data(t, 'changeBubbles', !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ('radio' !== t.type && 'checkbox' !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return it.event.remove(this, '._change'), !jt.test(this.nodeName);
        }
      }),
    nt.focusinBubbles ||
      it.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          it.event.simulate(t, e.target, it.event.fix(e), !0);
        };
        it.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = it._data(r, t);
            i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = it._data(r, t) - 1;
            i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t));
          }
        };
      }),
    it.fn.extend({
      on: function (e, t, n, r, i) {
        var o, a;
        if ('object' == typeof e) {
          'string' != typeof t && ((n = n || t), (t = void 0));
          for (o in e) this.on(o, t, n, e[o], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ('string' == typeof t ? ((r = n), (n = void 0)) : ((r = n), (n = t), (t = void 0))),
          r === !1)
        )
          r = h;
        else if (!r) return this;
        return (
          1 === i &&
            ((a = r),
            (r = function (e) {
              return it().off(e), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = it.guid++))),
          this.each(function () {
            it.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            it(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t === !1 || 'function' == typeof t) && ((n = t), (t = void 0)),
          n === !1 && (n = h),
          this.each(function () {
            it.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          it.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? it.event.trigger(e, t, n, !0) : void 0;
      }
    });
  var Ot =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    qt = / jQuery\d+="(?:null|\d+)"/g,
    Yt = new RegExp('<(?:' + Ot + ')[\\s/>]', 'i'),
    Pt = /^\s+/,
    Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Rt = /<([\w:]+)/,
    zt = /<tbody/i,
    Bt = /<|&#?\w+;/,
    $t = /<(?:script|style|link)/i,
    It = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xt = /^$|\/(?:java|ecma)script/i,
    Ut = /^true\/(.*)/,
    Vt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Jt = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      area: [1, '<map>', '</map>'],
      param: [1, '<object>', '</object>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: nt.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>']
    },
    Zt = m(pt),
    Gt = Zt.appendChild(pt.createElement('div'));
  (Jt.optgroup = Jt.option),
    (Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead),
    (Jt.th = Jt.td),
    it.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u = it.contains(e.ownerDocument, e);
        if (
          (nt.html5Clone || it.isXMLDoc(e) || !Yt.test('<' + e.nodeName + '>')
            ? (o = e.cloneNode(!0))
            : ((Gt.innerHTML = e.outerHTML), Gt.removeChild((o = Gt.firstChild))),
          !(
            (nt.noCloneEvent && nt.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            it.isXMLDoc(e)
          ))
        )
          for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
        if (t)
          if (n) for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
          else T(e, o);
        return (
          (r = g(o, 'script')), r.length > 0 && w(r, !u && g(e, 'script')), (r = s = i = null), o
        );
      },
      buildFragment: function (e, t, n, r) {
        for (var i, o, a, s, u, l, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
          if (((o = e[p]), o || 0 === o))
            if ('object' === it.type(o)) it.merge(h, o.nodeType ? [o] : o);
            else if (Bt.test(o)) {
              for (
                s = s || f.appendChild(t.createElement('div')),
                  u = (Rt.exec(o) || ['', ''])[1].toLowerCase(),
                  c = Jt[u] || Jt._default,
                  s.innerHTML = c[1] + o.replace(Wt, '<$1></$2>') + c[2],
                  i = c[0];
                i--;

              )
                s = s.lastChild;
              if (
                (!nt.leadingWhitespace && Pt.test(o) && h.push(t.createTextNode(Pt.exec(o)[0])),
                !nt.tbody)
              )
                for (
                  o =
                    'table' !== u || zt.test(o)
                      ? '<table>' !== c[1] || zt.test(o)
                        ? 0
                        : s
                      : s.firstChild,
                    i = o && o.childNodes.length;
                  i--;

                )
                  it.nodeName((l = o.childNodes[i]), 'tbody') &&
                    !l.childNodes.length &&
                    o.removeChild(l);
              for (it.merge(h, s.childNodes), s.textContent = ''; s.firstChild; )
                s.removeChild(s.firstChild);
              s = f.lastChild;
            } else h.push(t.createTextNode(o));
        for (
          s && f.removeChild(s), nt.appendChecked || it.grep(g(h, 'input'), y), p = 0;
          (o = h[p++]);

        )
          if (
            (!r || -1 === it.inArray(o, r)) &&
            ((a = it.contains(o.ownerDocument, o)),
            (s = g(f.appendChild(o), 'script')),
            a && w(s),
            n)
          )
            for (i = 0; (o = s[i++]); ) Xt.test(o.type || '') && n.push(o);
        return (s = null), f;
      },
      cleanData: function (e, t) {
        for (
          var n,
            r,
            i,
            o,
            a = 0,
            s = it.expando,
            u = it.cache,
            l = nt.deleteExpando,
            c = it.event.special;
          null != (n = e[a]);
          a++
        )
          if ((t || it.acceptData(n)) && ((i = n[s]), (o = i && u[i]))) {
            if (o.events)
              for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
            u[i] &&
              (delete u[i],
              l
                ? delete n[s]
                : typeof n.removeAttribute !== kt
                  ? n.removeAttribute(s)
                  : (n[s] = null),
              V.push(i));
          }
      }
    }),
    it.fn.extend({
      text: function (e) {
        return Nt(
          this,
          function (e) {
            return void 0 === e
              ? it.text(this)
              : this.empty().append(((this[0] && this[0].ownerDocument) || pt).createTextNode(e));
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = v(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = v(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
          t || 1 !== n.nodeType || it.cleanData(g(n)),
            n.parentNode &&
              (t && it.contains(n.ownerDocument, n) && w(g(n, 'script')),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && it.nodeName(e, 'select') && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function () {
            return it.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Nt(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qt, '') : void 0;
            if (
              !(
                'string' != typeof e ||
                $t.test(e) ||
                (!nt.htmlSerialize && Yt.test(e)) ||
                (!nt.leadingWhitespace && Pt.test(e)) ||
                Jt[(Rt.exec(e) || ['', ''])[1].toLowerCase()]
              )
            ) {
              e = e.replace(Wt, '<$1></$2>');
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType && (it.cleanData(g(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode), it.cleanData(g(this)), e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = Z.apply([], e);
        var n,
          r,
          i,
          o,
          a,
          s,
          u = 0,
          l = this.length,
          c = this,
          d = l - 1,
          f = e[0],
          h = it.isFunction(f);
        if (h || (l > 1 && 'string' == typeof f && !nt.checkClone && It.test(f)))
          return this.each(function (n) {
            var r = c.eq(n);
            h && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
          });
        if (
          l &&
          ((s = it.buildFragment(e, this[0].ownerDocument, !1, this)),
          (n = s.firstChild),
          1 === s.childNodes.length && (s = n),
          n)
        ) {
          for (o = it.map(g(s, 'script'), b), i = o.length; l > u; u++)
            (r = s),
              u !== d && ((r = it.clone(r, !0, !0)), i && it.merge(o, g(r, 'script'))),
              t.call(this[u], r, u);
          if (i)
            for (a = o[o.length - 1].ownerDocument, it.map(o, x), u = 0; i > u; u++)
              (r = o[u]),
                Xt.test(r.type || '') &&
                  !it._data(r, 'globalEval') &&
                  it.contains(a, r) &&
                  (r.src
                    ? it._evalUrl && it._evalUrl(r.src)
                    : it.globalEval(
                        (r.text || r.textContent || r.innerHTML || '').replace(Vt, '')
                      ));
          s = n = null;
        }
        return this;
      }
    }),
    it.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (e, t) {
        it.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++)
            (n = r === a ? this : this.clone(!0)), it(o[r])[t](n), G.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var Qt,
    Kt = {};
  !(function () {
    var e;
    nt.shrinkWrapBlocks = function () {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return (
        (n = pt.getElementsByTagName('body')[0]),
        n && n.style
          ? ((t = pt.createElement('div')),
            (r = pt.createElement('div')),
            (r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
            n.appendChild(r).appendChild(t),
            typeof t.style.zoom !== kt &&
              ((t.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
              (t.appendChild(pt.createElement('div')).style.width = '5px'),
              (e = 3 !== t.offsetWidth)),
            n.removeChild(r),
            e)
          : void 0
      );
    };
  })();
  var en,
    tn,
    nn = /^margin/,
    rn = new RegExp('^(' + St + ')(?!px)[a-z%]+$', 'i'),
    on = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((en = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      }),
      (tn = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || en(e)),
          (a = n ? n.getPropertyValue(t) || n[t] : void 0),
          n &&
            ('' !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)),
            rn.test(a) &&
              nn.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 === a ? a : a + ''
        );
      }))
    : pt.documentElement.currentStyle &&
      ((en = function (e) {
        return e.currentStyle;
      }),
      (tn = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || en(e)),
          (a = n ? n[t] : void 0),
          null == a && s && s[t] && (a = s[t]),
          rn.test(a) &&
            !on.test(t) &&
            ((r = s.left),
            (i = e.runtimeStyle),
            (o = i && i.left),
            o && (i.left = e.currentStyle.left),
            (s.left = 'fontSize' === t ? '1em' : a),
            (a = s.pixelLeft + 'px'),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + '' || 'auto'
        );
      })),
    (function () {
      function t() {
        var t, n, r, i;
        (n = pt.getElementsByTagName('body')[0]),
          n &&
            n.style &&
            ((t = pt.createElement('div')),
            (r = pt.createElement('div')),
            (r.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
            n.appendChild(r).appendChild(t),
            (t.style.cssText =
              '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute'),
            (o = a = !1),
            (u = !0),
            e.getComputedStyle &&
              ((o = '1%' !== (e.getComputedStyle(t, null) || {}).top),
              (a = '4px' === (e.getComputedStyle(t, null) || { width: '4px' }).width),
              (i = t.appendChild(pt.createElement('div'))),
              (i.style.cssText = t.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (i.style.marginRight = i.style.width = '0'),
              (t.style.width = '1px'),
              (u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight))),
            (t.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
            (i = t.getElementsByTagName('td')),
            (i[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
            (s = 0 === i[0].offsetHeight),
            s &&
              ((i[0].style.display = ''),
              (i[1].style.display = 'none'),
              (s = 0 === i[0].offsetHeight)),
            n.removeChild(r));
      }
      var n, r, i, o, a, s, u;
      (n = pt.createElement('div')),
        (n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (i = n.getElementsByTagName('a')[0]),
        (r = i && i.style),
        r &&
          ((r.cssText = 'float:left;opacity:.5'),
          (nt.opacity = '0.5' === r.opacity),
          (nt.cssFloat = !!r.cssFloat),
          (n.style.backgroundClip = 'content-box'),
          (n.cloneNode(!0).style.backgroundClip = ''),
          (nt.clearCloneStyle = 'content-box' === n.style.backgroundClip),
          (nt.boxSizing = '' === r.boxSizing || '' === r.MozBoxSizing || '' === r.WebkitBoxSizing),
          it.extend(nt, {
            reliableHiddenOffsets: function () {
              return null == s && t(), s;
            },
            boxSizingReliable: function () {
              return null == a && t(), a;
            },
            pixelPosition: function () {
              return null == o && t(), o;
            },
            reliableMarginRight: function () {
              return null == u && t(), u;
            }
          }));
    })(),
    (it.swap = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    });
  var an = /alpha\([^)]*\)/i,
    sn = /opacity\s*=\s*([^)]*)/,
    un = /^(none|table(?!-c[ea]).+)/,
    ln = new RegExp('^(' + St + ')(.*)$', 'i'),
    cn = new RegExp('^([+-])=(' + St + ')', 'i'),
    dn = { position: 'absolute', visibility: 'hidden', display: 'block' },
    fn = { letterSpacing: '0', fontWeight: '400' },
    hn = ['Webkit', 'O', 'Moz', 'ms'];
  it.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = tn(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: nt.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = it.camelCase(t),
          u = e.style;
        if (
          ((t = it.cssProps[s] || (it.cssProps[s] = D(u, s))),
          (a = it.cssHooks[t] || it.cssHooks[s]),
          void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (
          ((o = typeof n),
          'string' === o &&
            (i = cn.exec(n)) &&
            ((n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t))), (o = 'number')),
          null != n &&
            n === n &&
            ('number' !== o || it.cssNumber[s] || (n += 'px'),
            nt.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'),
            !(a && 'set' in a && void 0 === (n = a.set(e, n, r)))))
        )
          try {
            u[t] = n;
          } catch (l) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = it.camelCase(t);
      return (
        (t = it.cssProps[s] || (it.cssProps[s] = D(e.style, s))),
        (a = it.cssHooks[t] || it.cssHooks[s]),
        a && 'get' in a && (o = a.get(e, !0, n)),
        void 0 === o && (o = tn(e, t, r)),
        'normal' === o && t in fn && (o = fn[t]),
        '' === n || n ? ((i = parseFloat(o)), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
      );
    }
  }),
    it.each(['height', 'width'], function (e, t) {
      it.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? un.test(it.css(e, 'display')) && 0 === e.offsetWidth
              ? it.swap(e, dn, function () {
                  return j(e, t, r);
                })
              : j(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i = r && en(e);
          return N(
            e,
            n,
            r ? M(e, t, r, nt.boxSizing && 'border-box' === it.css(e, 'boxSizing', !1, i), i) : 0
          );
        }
      };
    }),
    nt.opacity ||
      (it.cssHooks.opacity = {
        get: function (e, t) {
          return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '')
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : t
              ? '1'
              : '';
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = it.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
            o = (r && r.filter) || n.filter || '';
          (n.zoom = 1),
            ((t >= 1 || '' === t) &&
              '' === it.trim(o.replace(an, '')) &&
              n.removeAttribute &&
              (n.removeAttribute('filter'), '' === t || (r && !r.filter))) ||
              (n.filter = an.test(o) ? o.replace(an, i) : o + ' ' + i);
        }
      }),
    (it.cssHooks.marginRight = S(nt.reliableMarginRight, function (e, t) {
      return t ? it.swap(e, { display: 'inline-block' }, tn, [e, 'marginRight']) : void 0;
    })),
    it.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (it.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; 4 > r; r++)
            i[e + Dt[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        }
      }),
        nn.test(e) || (it.cssHooks[e + t].set = N);
    }),
    it.fn.extend({
      css: function (e, t) {
        return Nt(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (it.isArray(t)) {
              for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? it.style(e, t, n) : it.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return E(this, !0);
      },
      hide: function () {
        return E(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Et(this) ? it(this).show() : it(this).hide();
            });
      }
    }),
    (it.Tween = A),
    (A.prototype = {
      constructor: A,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || 'swing'),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (it.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = A.propHooks[this.prop];
        return e && e.get ? e.get(this) : A.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = A.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : A.propHooks._default.set(this),
          this
        );
      }
    }),
    (A.prototype.init.prototype = A.prototype),
    (A.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] || (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = it.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          it.fx.step[e.prop]
            ? it.fx.step[e.prop](e)
            : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop])
              ? it.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
        }
      }
    }),
    (A.propHooks.scrollTop = A.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }),
    (it.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      }
    }),
    (it.fx = A.prototype.init),
    (it.fx.step = {});
  var pn,
    mn,
    gn = /^(?:toggle|show|hide)$/,
    yn = new RegExp('^(?:([+-])=|)(' + St + ')([a-z%]*)$', 'i'),
    vn = /queueHooks$/,
    bn = [O],
    xn = {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = yn.exec(t),
            o = (i && i[3]) || (it.cssNumber[e] ? '' : 'px'),
            a = (it.cssNumber[e] || ('px' !== o && +r)) && yn.exec(it.css(n.elem, e)),
            s = 1,
            u = 20;
          if (a && a[3] !== o) {
            (o = o || a[3]), (i = i || []), (a = +r || 1);
            do (s = s || '.5'), (a /= s), it.style(n.elem, e, a + o);
            while (s !== (s = n.cur() / r) && 1 !== s && --u);
          }
          return (
            i &&
              ((a = n.start = +a || +r || 0),
              (n.unit = o),
              (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        }
      ]
    };
  (it.Animation = it.extend(Y, {
    tweener: function (e, t) {
      it.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.split(' '));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (xn[n] = xn[n] || []), xn[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? bn.unshift(e) : bn.push(e);
    }
  })),
    (it.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? it.extend({}, e)
          : {
              complete: n || (!n && t) || (it.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !it.isFunction(t) && t)
            };
      return (
        (r.duration = it.fx.off
          ? 0
          : 'number' == typeof r.duration
            ? r.duration
            : r.duration in it.fx.speeds
              ? it.fx.speeds[r.duration]
              : it.fx.speeds._default),
        (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue);
        }),
        r
      );
    }),
    it.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Et).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = it.isEmptyObject(e),
          o = it.speed(t, n, r),
          a = function () {
            var t = Y(this, it.extend({}, e), o);
            (i || it._data(this, 'finish')) && t.stop(!0);
          };
        return (a.finish = a), i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              i = null != e && e + 'queueHooks',
              o = it.timers,
              a = it._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && vn.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (t || !n) && it.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = it._data(this),
              r = n[e + 'queue'],
              i = n[e + 'queueHooks'],
              o = it.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                it.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    it.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = it.fn[t];
      it.fn[t] = function (e, r, i) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(F(t, !0), e, r, i);
      };
    }),
    it.each(
      {
        slideDown: F('show'),
        slideUp: F('hide'),
        slideToggle: F('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (e, t) {
        it.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (it.timers = []),
    (it.fx.tick = function () {
      var e,
        t = it.timers,
        n = 0;
      for (pn = it.now(); n < t.length; n++) (e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
      t.length || it.fx.stop(), (pn = void 0);
    }),
    (it.fx.timer = function (e) {
      it.timers.push(e), e() ? it.fx.start() : it.timers.pop();
    }),
    (it.fx.interval = 13),
    (it.fx.start = function () {
      mn || (mn = setInterval(it.fx.tick, it.fx.interval));
    }),
    (it.fx.stop = function () {
      clearInterval(mn), (mn = null);
    }),
    (it.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (it.fn.delay = function (e, t) {
      return (
        (e = it.fx ? it.fx.speeds[e] || e : e),
        (t = t || 'fx'),
        this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e, t, n, r, i;
      (t = pt.createElement('div')),
        t.setAttribute('className', 't'),
        (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (r = t.getElementsByTagName('a')[0]),
        (n = pt.createElement('select')),
        (i = n.appendChild(pt.createElement('option'))),
        (e = t.getElementsByTagName('input')[0]),
        (r.style.cssText = 'top:1px'),
        (nt.getSetAttribute = 't' !== t.className),
        (nt.style = /top/.test(r.getAttribute('style'))),
        (nt.hrefNormalized = '/a' === r.getAttribute('href')),
        (nt.checkOn = !!e.value),
        (nt.optSelected = i.selected),
        (nt.enctype = !!pt.createElement('form').enctype),
        (n.disabled = !0),
        (nt.optDisabled = !i.disabled),
        (e = pt.createElement('input')),
        e.setAttribute('value', ''),
        (nt.input = '' === e.getAttribute('value')),
        (e.value = 't'),
        e.setAttribute('type', 'radio'),
        (nt.radioValue = 't' === e.value);
    })();
  var wn = /\r/g;
  it.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = it.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, it(this).val()) : e),
                null == i
                  ? (i = '')
                  : 'number' == typeof i
                    ? (i += '')
                    : it.isArray(i) &&
                      (i = it.map(i, function (e) {
                        return null == e ? '' : e + '';
                      })),
                (t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()]),
                (t && 'set' in t && void 0 !== t.set(this, i, 'value')) || (this.value = i));
            })
          );
        if (i)
          return (
            (t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()]),
            t && 'get' in t && void 0 !== (n = t.get(i, 'value'))
              ? n
              : ((n = i.value), 'string' == typeof n ? n.replace(wn, '') : null == n ? '' : n)
          );
      }
    }
  }),
    it.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = it.find.attr(e, 'value');
            return null != t ? t : it.trim(it.text(e));
          }
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = 'select-one' === e.type || 0 > i,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = 0 > i ? s : o ? i : 0;
              s > u;
              u++
            )
              if (
                ((n = r[u]),
                !(
                  (!n.selected && u !== i) ||
                  (nt.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) ||
                  (n.parentNode.disabled && it.nodeName(n.parentNode, 'optgroup'))
                ))
              ) {
                if (((t = it(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--; )
              if (((r = i[a]), it.inArray(it.valHooks.option.get(r), o) >= 0))
                try {
                  r.selected = n = !0;
                } catch (s) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          }
        }
      }
    }),
    it.each(['radio', 'checkbox'], function () {
      (it.valHooks[this] = {
        set: function (e, t) {
          return it.isArray(t) ? (e.checked = it.inArray(it(e).val(), t) >= 0) : void 0;
        }
      }),
        nt.checkOn ||
          (it.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var Tn,
    kn,
    Cn = it.expr.attrHandle,
    _n = /^(?:checked|selected)$/i,
    Sn = nt.getSetAttribute,
    Dn = nt.input;
  it.fn.extend({
    attr: function (e, t) {
      return Nt(this, it.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        it.removeAttr(this, e);
      });
    }
  }),
    it.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute === kt
            ? it.prop(e, t, n)
            : ((1 === o && it.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? kn : Tn))),
              void 0 === n
                ? r && 'get' in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = it.find.attr(e, t)), null == i ? void 0 : i)
                : null !== n
                  ? r && 'set' in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ''), n)
                  : void it.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(bt);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = it.propFix[n] || n),
              it.expr.match.bool.test(n)
                ? (Dn && Sn) || !_n.test(n)
                  ? (e[r] = !1)
                  : (e[it.camelCase('default-' + n)] = e[r] = !1)
                : it.attr(e, n, ''),
              e.removeAttribute(Sn ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!nt.radioValue && 'radio' === t && it.nodeName(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      }
    }),
    (kn = {
      set: function (e, t, n) {
        return (
          t === !1
            ? it.removeAttr(e, n)
            : (Dn && Sn) || !_n.test(n)
              ? e.setAttribute((!Sn && it.propFix[n]) || n, n)
              : (e[it.camelCase('default-' + n)] = e[n] = !0),
          n
        );
      }
    }),
    it.each(it.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Cn[t] || it.find.attr;
      Cn[t] =
        (Dn && Sn) || !_n.test(t)
          ? function (e, t, r) {
              var i, o;
              return (
                r ||
                  ((o = Cn[t]),
                  (Cn[t] = i),
                  (i = null != n(e, t, r) ? t.toLowerCase() : null),
                  (Cn[t] = o)),
                i
              );
            }
          : function (e, t, n) {
              return n ? void 0 : e[it.camelCase('default-' + t)] ? t.toLowerCase() : null;
            };
    }),
    (Dn && Sn) ||
      (it.attrHooks.value = {
        set: function (e, t, n) {
          return it.nodeName(e, 'input') ? void (e.defaultValue = t) : Tn && Tn.set(e, t, n);
        }
      }),
    Sn ||
      ((Tn = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          return (
            r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ''),
            'value' === n || t === e.getAttribute(n) ? t : void 0
          );
        }
      }),
      (Cn.id =
        Cn.name =
        Cn.coords =
          function (e, t, n) {
            var r;
            return n ? void 0 : (r = e.getAttributeNode(t)) && '' !== r.value ? r.value : null;
          }),
      (it.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : void 0;
        },
        set: Tn.set
      }),
      (it.attrHooks.contenteditable = {
        set: function (e, t, n) {
          Tn.set(e, '' === t ? !1 : t, n);
        }
      }),
      it.each(['width', 'height'], function (e, t) {
        it.attrHooks[t] = {
          set: function (e, n) {
            return '' === n ? (e.setAttribute(t, 'auto'), n) : void 0;
          }
        };
      })),
    nt.style ||
      (it.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + '');
        }
      });
  var En = /^(?:input|select|textarea|button|object)$/i,
    Nn = /^(?:a|area)$/i;
  it.fn.extend({
    prop: function (e, t) {
      return Nt(this, it.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = it.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    }
  }),
    it.extend({
      propFix: { for: 'htmlFor', class: 'className' },
      prop: function (e, t, n) {
        var r,
          i,
          o,
          a = e.nodeType;
        if (e && 3 !== a && 8 !== a && 2 !== a)
          return (
            (o = 1 !== a || !it.isXMLDoc(e)),
            o && ((t = it.propFix[t] || t), (i = it.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = it.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : En.test(e.nodeName) || (Nn.test(e.nodeName) && e.href)
                ? 0
                : -1;
          }
        }
      }
    }),
    nt.hrefNormalized ||
      it.each(['href', 'src'], function (e, t) {
        it.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          }
        };
      }),
    nt.optSelected ||
      (it.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
      }),
    it.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        it.propFix[this.toLowerCase()] = this;
      }
    ),
    nt.enctype || (it.propFix.enctype = 'encoding');
  var Mn = /[\t\r\n\f]/g;
  it.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = 0,
        u = this.length,
        l = 'string' == typeof e && e;
      if (it.isFunction(e))
        return this.each(function (t) {
          it(this).addClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || '').match(bt) || []; u > s; s++)
          if (
            ((n = this[s]),
            (r =
              1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(Mn, ' ') : ' ')))
          ) {
            for (o = 0; (i = t[o++]); ) r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
            (a = it.trim(r)), n.className !== a && (n.className = a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = 0,
        u = this.length,
        l = 0 === arguments.length || ('string' == typeof e && e);
      if (it.isFunction(e))
        return this.each(function (t) {
          it(this).removeClass(e.call(this, t, this.className));
        });
      if (l)
        for (t = (e || '').match(bt) || []; u > s; s++)
          if (
            ((n = this[s]),
            (r =
              1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(Mn, ' ') : '')))
          ) {
            for (o = 0; (i = t[o++]); )
              for (; r.indexOf(' ' + i + ' ') >= 0; ) r = r.replace(' ' + i + ' ', ' ');
            (a = e ? it.trim(r) : ''), n.className !== a && (n.className = a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            it.isFunction(e)
              ? function (n) {
                  it(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ('string' === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; (t = o[r++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (n === kt || 'boolean' === n) &&
                      (this.className && it._data(this, '__className__', this.className),
                      (this.className =
                        this.className || e === !1 ? '' : it._data(this, '__className__') || ''));
                }
          );
    },
    hasClass: function (e) {
      for (var t = ' ' + e + ' ', n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (' ' + this[n].className + ' ').replace(Mn, ' ').indexOf(t) >= 0
        )
          return !0;
      return !1;
    }
  }),
    it.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, t) {
        it.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    it.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      }
    });
  var jn = it.now(),
    An = /\?/,
    Ln =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (it.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + '');
    var n,
      r = null,
      i = it.trim(t + '');
    return i &&
      !it.trim(
        i.replace(Ln, function (e, t, i, o) {
          return n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), '');
        })
      )
      ? Function('return ' + i)()
      : it.error('Invalid JSON: ' + t);
  }),
    (it.parseXML = function (t) {
      var n, r;
      if (!t || 'string' != typeof t) return null;
      try {
        e.DOMParser
          ? ((r = new DOMParser()), (n = r.parseFromString(t, 'text/xml')))
          : ((n = new ActiveXObject('Microsoft.XMLDOM')), (n.async = 'false'), n.loadXML(t));
      } catch (i) {
        n = void 0;
      }
      return (
        (n && n.documentElement && !n.getElementsByTagName('parsererror').length) ||
          it.error('Invalid XML: ' + t),
        n
      );
    });
  var Fn,
    Hn,
    On = /#.*$/,
    qn = /([?&])_=[^&]*/,
    Yn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Pn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Wn = /^(?:GET|HEAD)$/,
    Rn = /^\/\//,
    zn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Bn = {},
    $n = {},
    In = '*/'.concat('*');
  try {
    Hn = location.href;
  } catch (Xn) {
    (Hn = pt.createElement('a')), (Hn.href = ''), (Hn = Hn.href);
  }
  (Fn = zn.exec(Hn.toLowerCase()) || []),
    it.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Hn,
        type: 'GET',
        isLocal: Pn.test(Fn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': In,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript'
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON'
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': it.parseJSON,
          'text xml': it.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? R(R(e, it.ajaxSettings), t) : R(it.ajaxSettings, e);
      },
      ajaxPrefilter: P(Bn),
      ajaxTransport: P($n),
      ajax: function (e, t) {
        function n(e, t, n, r) {
          var i,
            c,
            y,
            v,
            x,
            T = t;
          2 !== b &&
            ((b = 2),
            s && clearTimeout(s),
            (l = void 0),
            (a = r || ''),
            (w.readyState = e > 0 ? 4 : 0),
            (i = (e >= 200 && 300 > e) || 304 === e),
            n && (v = z(d, w, n)),
            (v = B(d, v, w, i)),
            i
              ? (d.ifModified &&
                  ((x = w.getResponseHeader('Last-Modified')),
                  x && (it.lastModified[o] = x),
                  (x = w.getResponseHeader('etag')),
                  x && (it.etag[o] = x)),
                204 === e || 'HEAD' === d.type
                  ? (T = 'nocontent')
                  : 304 === e
                    ? (T = 'notmodified')
                    : ((T = v.state), (c = v.data), (y = v.error), (i = !y)))
              : ((y = T), (e || !T) && ((T = 'error'), 0 > e && (e = 0))),
            (w.status = e),
            (w.statusText = (t || T) + ''),
            i ? p.resolveWith(f, [c, T, w]) : p.rejectWith(f, [w, T, y]),
            w.statusCode(g),
            (g = void 0),
            u && h.trigger(i ? 'ajaxSuccess' : 'ajaxError', [w, d, i ? c : y]),
            m.fireWith(f, [w, T]),
            u && (h.trigger('ajaxComplete', [w, d]), --it.active || it.event.trigger('ajaxStop')));
        }
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          d = it.ajaxSetup({}, t),
          f = d.context || d,
          h = d.context && (f.nodeType || f.jquery) ? it(f) : it.event,
          p = it.Deferred(),
          m = it.Callbacks('once memory'),
          g = d.statusCode || {},
          y = {},
          v = {},
          b = 0,
          x = 'canceled',
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === b) {
                if (!c) for (c = {}; (t = Yn.exec(a)); ) c[t[1].toLowerCase()] = t[2];
                t = c[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? a : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return b || ((e = v[n] = v[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return b || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || x;
              return l && l.abort(t), n(0, t), this;
            }
          };
        if (
          ((p.promise(w).complete = m.add),
          (w.success = w.done),
          (w.error = w.fail),
          (d.url = ((e || d.url || Hn) + '').replace(On, '').replace(Rn, Fn[1] + '//')),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = it
            .trim(d.dataType || '*')
            .toLowerCase()
            .match(bt) || ['']),
          null == d.crossDomain &&
            ((r = zn.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] === Fn[1] &&
                r[2] === Fn[2] &&
                (r[3] || ('http:' === r[1] ? '80' : '443')) ===
                  (Fn[3] || ('http:' === Fn[1] ? '80' : '443')))
            ))),
          d.data &&
            d.processData &&
            'string' != typeof d.data &&
            (d.data = it.param(d.data, d.traditional)),
          W(Bn, d, t, w),
          2 === b)
        )
          return w;
        (u = d.global),
          u && 0 === it.active++ && it.event.trigger('ajaxStart'),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !Wn.test(d.type)),
          (o = d.url),
          d.hasContent ||
            (d.data && ((o = d.url += (An.test(o) ? '&' : '?') + d.data), delete d.data),
            d.cache === !1 &&
              (d.url = qn.test(o)
                ? o.replace(qn, '$1_=' + jn++)
                : o + (An.test(o) ? '&' : '?') + '_=' + jn++)),
          d.ifModified &&
            (it.lastModified[o] && w.setRequestHeader('If-Modified-Since', it.lastModified[o]),
            it.etag[o] && w.setRequestHeader('If-None-Match', it.etag[o])),
          ((d.data && d.hasContent && d.contentType !== !1) || t.contentType) &&
            w.setRequestHeader('Content-Type', d.contentType),
          w.setRequestHeader(
            'Accept',
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + In + '; q=0.01' : '')
              : d.accepts['*']
          );
        for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
        if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
        x = 'abort';
        for (i in { success: 1, error: 1, complete: 1 }) w[i](d[i]);
        if ((l = W($n, d, t, w))) {
          (w.readyState = 1),
            u && h.trigger('ajaxSend', [w, d]),
            d.async &&
              d.timeout > 0 &&
              (s = setTimeout(function () {
                w.abort('timeout');
              }, d.timeout));
          try {
            (b = 1), l.send(y, n);
          } catch (T) {
            if (!(2 > b)) throw T;
            n(-1, T);
          }
        } else n(-1, 'No Transport');
        return w;
      },
      getJSON: function (e, t, n) {
        return it.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return it.get(e, void 0, t, 'script');
      }
    }),
    it.each(['get', 'post'], function (e, t) {
      it[t] = function (e, n, r, i) {
        return (
          it.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          it.ajax({ url: e, type: t, dataType: i, data: n, success: r })
        );
      };
    }),
    it.each(
      ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
      function (e, t) {
        it.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (it._evalUrl = function (e) {
      return it.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    it.fn.extend({
      wrapAll: function (e) {
        if (it.isFunction(e))
          return this.each(function (t) {
            it(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return this.each(
          it.isFunction(e)
            ? function (t) {
                it(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = it(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = it.isFunction(e);
        return this.each(function (n) {
          it(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            it.nodeName(this, 'body') || it(this).replaceWith(this.childNodes);
          })
          .end();
      }
    }),
    (it.expr.filters.hidden = function (e) {
      return (
        (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
        (!nt.reliableHiddenOffsets() &&
          'none' === ((e.style && e.style.display) || it.css(e, 'display')))
      );
    }),
    (it.expr.filters.visible = function (e) {
      return !it.expr.filters.hidden(e);
    });
  var Un = /%20/g,
    Vn = /\[\]$/,
    Jn = /\r?\n/g,
    Zn = /^(?:submit|button|image|reset|file)$/i,
    Gn = /^(?:input|select|textarea|keygen)/i;
  (it.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = it.isFunction(t) ? t() : null == t ? '' : t),
          (r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional),
      it.isArray(e) || (e.jquery && !it.isPlainObject(e)))
    )
      it.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) $(n, e[n], t, i);
    return r.join('&').replace(Un, '+');
  }),
    it.fn.extend({
      serialize: function () {
        return it.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = it.prop(this, 'elements');
          return e ? it.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !it(this).is(':disabled') &&
              Gn.test(this.nodeName) &&
              !Zn.test(e) &&
              (this.checked || !Mt.test(e))
            );
          })
          .map(function (e, t) {
            var n = it(this).val();
            return null == n
              ? null
              : it.isArray(n)
                ? it.map(n, function (e) {
                    return { name: t.name, value: e.replace(Jn, '\r\n') };
                  })
                : { name: t.name, value: n.replace(Jn, '\r\n') };
          })
          .get();
      }
    }),
    (it.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return (
              (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && I()) ||
              X()
            );
          }
        : I);
  var Qn = 0,
    Kn = {},
    er = it.ajaxSettings.xhr();
  e.ActiveXObject &&
    it(e).on('unload', function () {
      for (var e in Kn) Kn[e](void 0, !0);
    }),
    (nt.cors = !!er && 'withCredentials' in er),
    (er = nt.ajax = !!er),
    er &&
      it.ajaxTransport(function (e) {
        if (!e.crossDomain || nt.cors) {
          var t;
          return {
            send: function (n, r) {
              var i,
                o = e.xhr(),
                a = ++Qn;
              if ((o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                for (i in e.xhrFields) o[i] = e.xhrFields[i];
              e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n['X-Requested-With'] ||
                  (n['X-Requested-With'] = 'XMLHttpRequest');
              for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + '');
              o.send((e.hasContent && e.data) || null),
                (t = function (n, i) {
                  var s, u, l;
                  if (t && (i || 4 === o.readyState))
                    if ((delete Kn[a], (t = void 0), (o.onreadystatechange = it.noop), i))
                      4 !== o.readyState && o.abort();
                    else {
                      (l = {}),
                        (s = o.status),
                        'string' == typeof o.responseText && (l.text = o.responseText);
                      try {
                        u = o.statusText;
                      } catch (c) {
                        u = '';
                      }
                      s || !e.isLocal || e.crossDomain
                        ? 1223 === s && (s = 204)
                        : (s = l.text ? 200 : 404);
                    }
                  l && r(s, u, l, o.getAllResponseHeaders());
                }),
                e.async
                  ? 4 === o.readyState
                    ? setTimeout(t)
                    : (o.onreadystatechange = Kn[a] = t)
                  : t();
            },
            abort: function () {
              t && t(void 0, !0);
            }
          };
        }
      }),
    it.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        'text script': function (e) {
          return it.globalEval(e), e;
        }
      }
    }),
    it.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = 'GET'), (e.global = !1));
    }),
    it.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var t,
          n = pt.head || it('head')[0] || pt.documentElement;
        return {
          send: function (r, i) {
            (t = pt.createElement('script')),
              (t.async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n || !t.readyState || /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || i(200, 'success'));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          }
        };
      }
    });
  var tr = [],
    nr = /(=)\?(?=&|$)|\?\?/;
  it.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = tr.pop() || it.expando + '_' + jn++;
      return (this[e] = !0), e;
    }
  }),
    it.ajaxPrefilter('json jsonp', function (t, n, r) {
      var i,
        o,
        a,
        s =
          t.jsonp !== !1 &&
          (nr.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              !(t.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              nr.test(t.data) &&
              'data');
      return s || 'jsonp' === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(nr, '$1' + i))
            : t.jsonp !== !1 && (t.url += (An.test(t.url) ? '&' : '?') + t.jsonp + '=' + i),
          (t.converters['script json'] = function () {
            return a || it.error(i + ' was not called'), a[0];
          }),
          (t.dataTypes[0] = 'json'),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), tr.push(i)),
              a && it.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          'script')
        : void 0;
    }),
    (it.parseHTML = function (e, t, n) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof t && ((n = t), (t = !1)), (t = t || pt);
      var r = dt.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = it.buildFragment([e], t, i)),
          i && i.length && it(i).remove(),
          it.merge([], r.childNodes));
    });
  var rr = it.fn.load;
  (it.fn.load = function (e, t, n) {
    if ('string' != typeof e && rr) return rr.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(' ');
    return (
      s >= 0 && ((r = it.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      it.isFunction(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (o = 'POST'),
      a.length > 0 &&
        it
          .ajax({ url: e, type: o, dataType: 'html', data: t })
          .done(function (e) {
            (i = arguments), a.html(r ? it('<div>').append(it.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                a.each(n, i || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    (it.expr.filters.animated = function (e) {
      return it.grep(it.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var ir = e.document.documentElement;
  (it.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = it.css(e, 'position'),
        d = it(e),
        f = {};
      'static' === c && (e.style.position = 'relative'),
        (s = d.offset()),
        (o = it.css(e, 'top')),
        (u = it.css(e, 'left')),
        (l = ('absolute' === c || 'fixed' === c) && it.inArray('auto', [o, u]) > -1),
        l
          ? ((r = d.position()), (a = r.top), (i = r.left))
          : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
        it.isFunction(t) && (t = t.call(e, n, s)),
        null != t.top && (f.top = t.top - s.top + a),
        null != t.left && (f.left = t.left - s.left + i),
        'using' in t ? t.using.call(e, f) : d.css(f);
    }
  }),
    it.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                it.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          o = i && i.ownerDocument;
        if (o)
          return (
            (t = o.documentElement),
            it.contains(t, i)
              ? (typeof i.getBoundingClientRect !== kt && (r = i.getBoundingClientRect()),
                (n = U(o)),
                {
                  top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                })
              : r
          );
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            'fixed' === it.css(r, 'position')
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                it.nodeName(e[0], 'html') || (n = e.offset()),
                (n.top += it.css(e[0], 'borderTopWidth', !0)),
                (n.left += it.css(e[0], 'borderLeftWidth', !0))),
            {
              top: t.top - n.top - it.css(r, 'marginTop', !0),
              left: t.left - n.left - it.css(r, 'marginLeft', !0)
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || ir;
            e && !it.nodeName(e, 'html') && 'static' === it.css(e, 'position');

          )
            e = e.offsetParent;
          return e || ir;
        });
      }
    }),
    it.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
      var n = /Y/.test(t);
      it.fn[e] = function (r) {
        return Nt(
          this,
          function (e, r, i) {
            var o = U(e);
            return void 0 === i
              ? o
                ? t in o
                  ? o[t]
                  : o.document.documentElement[r]
                : e[r]
              : void (o
                  ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop())
                  : (e[r] = i));
          },
          e,
          r,
          arguments.length,
          null
        );
      };
    }),
    it.each(['top', 'left'], function (e, t) {
      it.cssHooks[t] = S(nt.pixelPosition, function (e, n) {
        return n ? ((n = tn(e, t)), rn.test(n) ? it(e).position()[t] + 'px' : n) : void 0;
      });
    }),
    it.each({ Height: 'height', Width: 'width' }, function (e, t) {
      it.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, r) {
        it.fn[r] = function (r, i) {
          var o = arguments.length && (n || 'boolean' != typeof r),
            a = n || (r === !0 || i === !0 ? 'margin' : 'border');
          return Nt(
            this,
            function (t, n, r) {
              var i;
              return it.isWindow(t)
                ? t.document.documentElement['client' + e]
                : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      i['scroll' + e],
                      t.body['offset' + e],
                      i['offset' + e],
                      i['client' + e]
                    ))
                  : void 0 === r
                    ? it.css(t, n, a)
                    : it.style(t, n, r, a);
            },
            t,
            o ? r : void 0,
            o,
            null
          );
        };
      });
    }),
    (it.fn.size = function () {
      return this.length;
    }),
    (it.fn.andSelf = it.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return it;
      });
  var or = e.jQuery,
    ar = e.$;
  return (
    (it.noConflict = function (t) {
      return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it;
    }),
    typeof t === kt && (e.jQuery = e.$ = it),
    it
  );
}),
  (function (e, t) {
    e.rails !== t && e.error('jquery-ujs has already been loaded!');
    var n,
      r = e(document);
    (e.rails = n =
      {
        linkClickSelector:
          'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',
        buttonClickSelector:
          'button[data-remote]:not(form button), button[data-confirm]:not(form button)',
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector:
          'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        disableSelector:
          'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        enableSelector:
          'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        requiredInputSelector:
          'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',
        fileInputSelector: 'input[type=file]',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector:
          'button[data-remote][data-disable-with], button[data-remote][data-disable]',
        CSRFProtection: function (t) {
          var n = e('meta[name="csrf-token"]').attr('content');
          n && t.setRequestHeader('X-CSRF-Token', n);
        },
        refreshCSRFTokens: function () {
          var t = e('meta[name=csrf-token]').attr('content'),
            n = e('meta[name=csrf-param]').attr('content');
          e('form input[name="' + n + '"]').val(t);
        },
        fire: function (t, n, r) {
          var i = e.Event(n);
          return t.trigger(i, r), i.result !== !1;
        },
        confirm: function (e) {
          return confirm(e);
        },
        ajax: function (t) {
          return e.ajax(t);
        },
        href: function (e) {
          return e.attr('href');
        },
        handleRemote: function (r) {
          var i, o, a, s, u, l, c, d;
          if (n.fire(r, 'ajax:before')) {
            if (
              ((s = r.data('cross-domain')),
              (u = s === t ? null : s),
              (l = r.data('with-credentials') || null),
              (c = r.data('type') || (e.ajaxSettings && e.ajaxSettings.dataType)),
              r.is('form'))
            ) {
              (i = r.attr('method')), (o = r.attr('action')), (a = r.serializeArray());
              var f = r.data('ujs:submit-button');
              f && (a.push(f), r.data('ujs:submit-button', null));
            } else
              r.is(n.inputChangeSelector)
                ? ((i = r.data('method')),
                  (o = r.data('url')),
                  (a = r.serialize()),
                  r.data('params') && (a = a + '&' + r.data('params')))
                : r.is(n.buttonClickSelector)
                  ? ((i = r.data('method') || 'get'),
                    (o = r.data('url')),
                    (a = r.serialize()),
                    r.data('params') && (a = a + '&' + r.data('params')))
                  : ((i = r.data('method')), (o = n.href(r)), (a = r.data('params') || null));
            return (
              (d = {
                type: i || 'GET',
                data: a,
                dataType: c,
                beforeSend: function (e, i) {
                  return (
                    i.dataType === t &&
                      e.setRequestHeader('accept', '*/*;q=0.5, ' + i.accepts.script),
                    n.fire(r, 'ajax:beforeSend', [e, i]) ? void r.trigger('ajax:send', e) : !1
                  );
                },
                success: function (e, t, n) {
                  r.trigger('ajax:success', [e, t, n]);
                },
                complete: function (e, t) {
                  r.trigger('ajax:complete', [e, t]);
                },
                error: function (e, t, n) {
                  r.trigger('ajax:error', [e, t, n]);
                },
                crossDomain: u
              }),
              l && (d.xhrFields = { withCredentials: l }),
              o && (d.url = o),
              n.ajax(d)
            );
          }
          return !1;
        },
        handleMethod: function (r) {
          var i = n.href(r),
            o = r.data('method'),
            a = r.attr('target'),
            s = e('meta[name=csrf-token]').attr('content'),
            u = e('meta[name=csrf-param]').attr('content'),
            l = e('<form method="post" action="' + i + '"></form>'),
            c = '<input name="_method" value="' + o + '" type="hidden" />';
          u !== t && s !== t && (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'),
            a && l.attr('target', a),
            l.hide().append(c).appendTo('body'),
            l.submit();
        },
        formElements: function (t, n) {
          return t.is('form') ? e(t[0].elements).filter(n) : t.find(n);
        },
        disableFormElements: function (t) {
          n.formElements(t, n.disableSelector).each(function () {
            n.disableFormElement(e(this));
          });
        },
        disableFormElement: function (e) {
          var n, r;
          (n = e.is('button') ? 'html' : 'val'),
            (r = e.data('disable-with')),
            e.data('ujs:enable-with', e[n]()),
            r !== t && e[n](r),
            e.prop('disabled', !0);
        },
        enableFormElements: function (t) {
          n.formElements(t, n.enableSelector).each(function () {
            n.enableFormElement(e(this));
          });
        },
        enableFormElement: function (e) {
          var t = e.is('button') ? 'html' : 'val';
          e.data('ujs:enable-with') && e[t](e.data('ujs:enable-with')), e.prop('disabled', !1);
        },
        allowAction: function (e) {
          var t,
            r = e.data('confirm'),
            i = !1;
          return r
            ? (n.fire(e, 'confirm') &&
                ((i = n.confirm(r)), (t = n.fire(e, 'confirm:complete', [i]))),
              i && t)
            : !0;
        },
        blankInputs: function (t, n, r) {
          var i,
            o,
            a = e(),
            s = n || 'input,textarea',
            u = t.find(s);
          return (
            u.each(function () {
              if (
                ((i = e(this)),
                (o = i.is('input[type=checkbox],input[type=radio]') ? i.is(':checked') : i.val()),
                !o == !r)
              ) {
                if (
                  i.is('input[type=radio]') &&
                  u.filter('input[type=radio]:checked[name="' + i.attr('name') + '"]').length
                )
                  return !0;
                a = a.add(i);
              }
            }),
            a.length ? a : !1
          );
        },
        nonBlankInputs: function (e, t) {
          return n.blankInputs(e, t, !0);
        },
        stopEverything: function (t) {
          return e(t.target).trigger('ujs:everythingStopped'), t.stopImmediatePropagation(), !1;
        },
        disableElement: function (e) {
          var r = e.data('disable-with');
          e.data('ujs:enable-with', e.html()),
            r !== t && e.html(r),
            e.bind('click.railsDisable', function (e) {
              return n.stopEverything(e);
            });
        },
        enableElement: function (e) {
          e.data('ujs:enable-with') !== t &&
            (e.html(e.data('ujs:enable-with')), e.removeData('ujs:enable-with')),
            e.unbind('click.railsDisable');
        }
      }),
      n.fire(r, 'rails:attachBindings') &&
        (e.ajaxPrefilter(function (e, t, r) {
          e.crossDomain || n.CSRFProtection(r);
        }),
        r.delegate(n.linkDisableSelector, 'ajax:complete', function () {
          n.enableElement(e(this));
        }),
        r.delegate(n.buttonDisableSelector, 'ajax:complete', function () {
          n.enableFormElement(e(this));
        }),
        r.delegate(n.linkClickSelector, 'click.rails', function (r) {
          var i = e(this),
            o = i.data('method'),
            a = i.data('params'),
            s = r.metaKey || r.ctrlKey;
          if (!n.allowAction(i)) return n.stopEverything(r);
          if ((!s && i.is(n.linkDisableSelector) && n.disableElement(i), i.data('remote') !== t)) {
            if (s && (!o || 'GET' === o) && !a) return !0;
            var u = n.handleRemote(i);
            return (
              u === !1
                ? n.enableElement(i)
                : u.error(function () {
                    n.enableElement(i);
                  }),
              !1
            );
          }
          return i.data('method') ? (n.handleMethod(i), !1) : void 0;
        }),
        r.delegate(n.buttonClickSelector, 'click.rails', function (t) {
          var r = e(this);
          if (!n.allowAction(r)) return n.stopEverything(t);
          r.is(n.buttonDisableSelector) && n.disableFormElement(r);
          var i = n.handleRemote(r);
          return (
            i === !1
              ? n.enableFormElement(r)
              : i.error(function () {
                  n.enableFormElement(r);
                }),
            !1
          );
        }),
        r.delegate(n.inputChangeSelector, 'change.rails', function (t) {
          var r = e(this);
          return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t);
        }),
        r.delegate(n.formSubmitSelector, 'submit.rails', function (r) {
          var i,
            o,
            a = e(this),
            s = a.data('remote') !== t;
          if (!n.allowAction(a)) return n.stopEverything(r);
          if (
            a.attr('novalidate') == t &&
            ((i = n.blankInputs(a, n.requiredInputSelector)),
            i && n.fire(a, 'ajax:aborted:required', [i]))
          )
            return n.stopEverything(r);
          if (s) {
            if ((o = n.nonBlankInputs(a, n.fileInputSelector))) {
              setTimeout(function () {
                n.disableFormElements(a);
              }, 13);
              var u = n.fire(a, 'ajax:aborted:file', [o]);
              return (
                u ||
                  setTimeout(function () {
                    n.enableFormElements(a);
                  }, 13),
                u
              );
            }
            return n.handleRemote(a), !1;
          }
          setTimeout(function () {
            n.disableFormElements(a);
          }, 13);
        }),
        r.delegate(n.formInputClickSelector, 'click.rails', function (t) {
          var r = e(this);
          if (!n.allowAction(r)) return n.stopEverything(t);
          var i = r.attr('name'),
            o = i ? { name: i, value: r.val() } : null;
          r.closest('form').data('ujs:submit-button', o);
        }),
        r.delegate(n.formSubmitSelector, 'ajax:send.rails', function (t) {
          this == t.target && n.disableFormElements(e(this));
        }),
        r.delegate(n.formSubmitSelector, 'ajax:complete.rails', function (t) {
          this == t.target && n.enableFormElements(e(this));
        }),
        e(function () {
          n.refreshCSRFTokens();
        }));
  })(jQuery),
  (function (e, t, n, r) {
    var i = t.createElement('canvas').getContext,
      o = (e.fn.peity = function (t, n) {
        return (
          i &&
            this.each(function () {
              var r = e(this),
                i = r.data('peity');
              if (i) t && (i.type = t), e.extend(i.opts, n), i.draw();
              else {
                var s = o.defaults[t],
                  u = {};
                e.each(r.data(), function (e, t) {
                  e in s && (u[e] = t);
                });
                var l = e.extend({}, s, u, n),
                  i = new a(r, t, l);
                i.draw(),
                  r
                    .change(function () {
                      i.draw();
                    })
                    .data('peity', i);
              }
            }),
          this
        );
      }),
      a = function (e, t, n) {
        (this.$el = e), (this.type = t), (this.opts = n);
      },
      s = a.prototype;
    (s.colours = function () {
      var t = this.opts.colours,
        n = t;
      return (
        e.isFunction(n) ||
          (n = function (e, n) {
            return t[n % t.length];
          }),
        n
      );
    }),
      (s.draw = function () {
        o.graphers[this.type].call(this, this.opts);
      }),
      (s.prepareCanvas = function (t, n) {
        var i,
          o = this.canvas;
        return (
          o
            ? (this.context.clearRect(0, 0, o.width, o.height), (i = e(o)))
            : ((i = e('<canvas>')
                .css({ height: n, width: t })
                .addClass('peity')
                .data('peity', this)),
              (this.canvas = o = i[0]),
              (this.context = o.getContext('2d')),
              this.$el.hide().after(o)),
          (o.height = i.height() * r),
          (o.width = i.width() * r),
          o
        );
      }),
      (s.values = function () {
        return e.map(this.$el.text().split(this.opts.delimiter), function (e) {
          return parseFloat(e);
        });
      }),
      (o.defaults = {}),
      (o.graphers = {}),
      (o.register = function (e, t, n) {
        (this.defaults[e] = t), (this.graphers[e] = n);
      }),
      o.register(
        'pie',
        {
          colours: ['#ff9900', '#fff4dd', '#ffc66e'],
          delimiter: null,
          diameter: 16
        },
        function (e) {
          if (!e.delimiter) {
            var t = this.$el.text().match(/[^0-9\.]/);
            e.delimiter = t ? t[0] : ',';
          }
          var r = this.values();
          if ('/' == e.delimiter) {
            var i = r[0],
              o = r[1];
            r = [i, o - i];
          }
          for (var a = 0, s = r.length, u = 0; s > a; a++) u += r[a];
          var l = this.prepareCanvas(e.width || e.diameter, e.height || e.diameter),
            c = this.context,
            d = l.width,
            f = l.height,
            h = n.min(d, f) / 2,
            p = n.PI,
            m = this.colours();
          for (c.save(), c.translate(d / 2, f / 2), c.rotate(-p / 2), a = 0; s > a; a++) {
            var g = r[a],
              y = (g / u) * p * 2;
            c.beginPath(),
              c.moveTo(0, 0),
              c.arc(0, 0, h, 0, y, !1),
              (c.fillStyle = m.call(this, g, a, r)),
              c.fill(),
              c.rotate(y);
          }
          c.restore();
        }
      ),
      o.register(
        'line',
        {
          colour: '#c6d9fd',
          strokeColour: '#4d89f9',
          strokeWidth: 1,
          delimiter: ',',
          height: 16,
          max: null,
          min: 0,
          width: 32
        },
        function (e) {
          var t = this.values();
          1 == t.length && t.push(t[0]);
          var i,
            o = n.max.apply(n, t.concat([e.max])),
            a = n.min.apply(n, t.concat([e.min])),
            s = this.prepareCanvas(e.width, e.height),
            u = this.context,
            l = s.width,
            c = s.height,
            d = l / (t.length - 1),
            f = c / (o - a),
            h = [];
          for (u.beginPath(), u.moveTo(0, c + a * f), i = 0; i < t.length; i++) {
            var p = i * d,
              m = c - f * (t[i] - a);
            h.push({ x: p, y: m }), u.lineTo(p, m);
          }
          if ((u.lineTo(l, c + a * f), (u.fillStyle = e.colour), u.fill(), e.strokeWidth)) {
            for (u.beginPath(), u.moveTo(0, h[0].y), i = 0; i < h.length; i++)
              u.lineTo(h[i].x, h[i].y);
            (u.lineWidth = e.strokeWidth * r), (u.strokeStyle = e.strokeColour), u.stroke();
          }
        }
      ),
      o.register(
        'bar',
        {
          colours: ['#4D89F9'],
          delimiter: ',',
          height: 16,
          max: null,
          min: 0,
          spacing: r,
          width: 32
        },
        function (e) {
          for (
            var t = this.values(),
              r = n.max.apply(n, t.concat([e.max])),
              i = n.min.apply(n, t.concat([e.min])),
              o = this.prepareCanvas(e.width, e.height),
              a = this.context,
              s = o.width,
              u = o.height,
              l = u / (r - i),
              c = e.spacing,
              d = (s + c) / t.length,
              f = this.colours(),
              h = 0;
            h < t.length;
            h++
          ) {
            var p,
              m = t[h],
              g = u - l * (m - i);
            0 == m ? ((i >= 0 || r > 0) && (g -= 1), (p = 1)) : (p = l * t[h]),
              (a.fillStyle = f.call(this, m, h, t)),
              a.fillRect(h * d, g, d - c, p);
          }
        }
      );
  })(jQuery, document, Math, window.devicePixelRatio || 1),
  (function (e, t) {
    function n(e) {
      return e && e.toLowerCase ? e.toLowerCase() : e;
    }
    function r(e, t) {
      for (var n = 0, r = e.length; r > n; n++) if (e[n] == t) return !i;
      return i;
    }
    var i = !1,
      o = null,
      a = parseFloat,
      s = Math.min,
      u = /(-?\d+\.?\d*)$/g,
      l = /(\d+\.?\d*)$/g,
      c = [],
      d = [],
      f = function (e) {
        return 'string' == typeof e;
      },
      h =
        Array.prototype.indexOf ||
        function (e) {
          var t = this.length,
            n = Number(arguments[1]) || 0;
          for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t); t > n; n++)
            if (n in this && this[n] === e) return n;
          return -1;
        };
    (e.tinysort = {
      id: 'TinySort',
      version: '1.5.2',
      copyright: 'Copyright (c) 2008-2013 Ron Valstar',
      uri: 'http://tinysort.sjeiti.com/',
      licensed: {
        MIT: 'http://www.opensource.org/licenses/mit-license.php',
        GPL: 'http://www.gnu.org/licenses/gpl.html'
      },
      plugin: (function () {
        var e = function (e, t) {
          c.push(e), d.push(t);
        };
        return (e.indexOf = h), e;
      })(),
      defaults: {
        order: 'asc',
        attr: o,
        data: o,
        useVal: i,
        place: 'start',
        returns: i,
        cases: i,
        forceStrings: i,
        ignoreDashes: i,
        sortFunction: o
      }
    }),
      e.fn.extend({
        tinysort: function () {
          var p,
            m,
            g,
            y = this,
            v = [],
            b = [],
            x = [],
            w = [],
            T = 0,
            k = [],
            C = [],
            _ = function (t) {
              e.each(c, function (e, n) {
                n.call(n, t);
              });
            },
            S = function (t, r) {
              var o = 0;
              for (0 !== T && (T = 0); 0 === o && g > T; ) {
                var s = w[T],
                  c = s.oSettings,
                  h = c.ignoreDashes ? l : u;
                if ((_(c), c.sortFunction)) o = c.sortFunction(t, r);
                else if ('rand' == c.order) o = Math.random() < 0.5 ? 1 : -1;
                else {
                  var p = i,
                    m = c.cases ? t.s[T] : n(t.s[T]),
                    y = c.cases ? r.s[T] : n(r.s[T]);
                  if (
                    ((m = m.replace(/^\s*/i, '').replace(/\s*$/i, '')),
                    (y = y.replace(/^\s*/i, '').replace(/\s*$/i, '')),
                    !N.forceStrings)
                  ) {
                    var v = f(m) ? m && m.match(h) : i,
                      b = f(y) ? y && y.match(h) : i;
                    if (v && b) {
                      var x = m.substr(0, m.length - v[0].length),
                        k = y.substr(0, y.length - b[0].length);
                      x == k && ((p = !i), (m = a(v[0])), (y = a(b[0])));
                    }
                  }
                  o = s.iAsc * (y > m ? -1 : m > y ? 1 : 0);
                }
                e.each(d, function (e, t) {
                  o = t.call(t, p, m, y, o);
                }),
                  0 === o && T++;
              }
              return o;
            };
          for (p = 0, m = arguments.length; m > p; p++) {
            var D = arguments[p];
            f(D)
              ? k.push(D) - 1 > C.length && (C.length = k.length - 1)
              : C.push(D) > k.length && (k.length = C.length);
          }
          for (
            k.length > C.length && (C.length = k.length),
              g = k.length,
              0 === g && ((g = k.length = 1), C.push({})),
              p = 0,
              m = g;
            m > p;
            p++
          ) {
            var E = k[p],
              N = e.extend({}, e.tinysort.defaults, C[p]),
              M = !(!E || '' == E),
              A = M && ':' == E[0];
            w.push({
              sFind: E,
              oSettings: N,
              bFind: M,
              bAttr: !(N.attr === o || '' == N.attr),
              bData: N.data !== o,
              bFilter: A,
              $Filter: A ? y.filter(E) : y,
              fnSort: N.sortFunction,
              iAsc: 'asc' == N.order ? 1 : -1
            });
          }
          return (
            y.each(function (n, r) {
              var i,
                o = e(r),
                a = o.parent().get(0),
                s = [];
              for (j = 0; g > j; j++) {
                var u = w[j],
                  l = u.bFind ? (u.bFilter ? u.$Filter.filter(r) : o.find(u.sFind)) : o;
                s.push(
                  u.bData
                    ? l.data(u.oSettings.data)
                    : u.bAttr
                      ? l.attr(u.oSettings.attr)
                      : u.oSettings.useVal
                        ? l.val()
                        : l.text()
                ),
                  i === t && (i = l);
              }
              var c = h.call(x, a);
              0 > c && ((c = x.push(a) - 1), (b[c] = { s: [], n: [] })),
                i.length > 0 ? b[c].s.push({ s: s, e: o, n: n }) : b[c].n.push({ e: o, n: n });
            }),
            e.each(b, function (e, t) {
              t.s.sort(S);
            }),
            e.each(b, function (t, n) {
              var o = n.s.length,
                a = [],
                u = o,
                l = [0, 0];
              switch (N.place) {
                case 'first':
                  e.each(n.s, function (e, t) {
                    u = s(u, t.n);
                  });
                  break;
                case 'org':
                  e.each(n.s, function (e, t) {
                    a.push(t.n);
                  });
                  break;
                case 'end':
                  u = n.n.length;
                  break;
                default:
                  u = 0;
              }
              for (p = 0; o > p; p++) {
                var c = r(a, p) ? !i : p >= u && p < u + n.s.length,
                  d = (c ? n.s : n.n)[l[c ? 0 : 1]].e;
                d.parent().append(d), (c || !N.returns) && v.push(d.get(0)), l[c ? 0 : 1]++;
              }
            }),
            (y.length = 0),
            Array.prototype.push.apply(y, v),
            y
          );
        }
      }),
      (e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort);
  })(jQuery),
  function (e) {
    function t(e, t) {
      return function (n) {
        return u(e.call(this, n), t);
      };
    }
    function n(e) {
      return function (t) {
        return this.lang().ordinal(e.call(this, t));
      };
    }
    function r() {}
    function i(e) {
      a(this, e);
    }
    function o(e) {
      var t = (this._data = {}),
        n = e.years || e.year || e.y || 0,
        r = e.months || e.month || e.M || 0,
        i = e.weeks || e.week || e.w || 0,
        o = e.days || e.day || e.d || 0,
        a = e.hours || e.hour || e.h || 0,
        u = e.minutes || e.minute || e.m || 0,
        l = e.seconds || e.second || e.s || 0,
        c = e.milliseconds || e.millisecond || e.ms || 0;
      (this._milliseconds = c + 1e3 * l + 6e4 * u + 36e5 * a),
        (this._days = o + 7 * i),
        (this._months = r + 12 * n),
        (t.milliseconds = c % 1e3),
        (l += s(c / 1e3)),
        (t.seconds = l % 60),
        (u += s(l / 60)),
        (t.minutes = u % 60),
        (a += s(u / 60)),
        (t.hours = a % 24),
        (o += s(a / 24)),
        (o += 7 * i),
        (t.days = o % 30),
        (r += s(o / 30)),
        (t.months = r % 12),
        (n += s(r / 12)),
        (t.years = n);
    }
    function a(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e;
    }
    function s(e) {
      return 0 > e ? Math.ceil(e) : Math.floor(e);
    }
    function u(e, t) {
      for (var n = e + ''; n.length < t; ) n = '0' + n;
      return n;
    }
    function l(e, t, n) {
      var r,
        i = t._milliseconds,
        o = t._days,
        a = t._months;
      i && e._d.setTime(+e + i * n),
        o && e.date(e.date() + o * n),
        a &&
          ((r = e.date()),
          e
            .date(1)
            .month(e.month() + a * n)
            .date(Math.min(r, e.daysInMonth())));
    }
    function c(e) {
      return '[object Array]' === Object.prototype.toString.call(e);
    }
    function d(e, t) {
      var n,
        r = Math.min(e.length, t.length),
        i = Math.abs(e.length - t.length),
        o = 0;
      for (n = 0; r > n; n++) ~~e[n] !== ~~t[n] && o++;
      return o + i;
    }
    function f(e, t) {
      return (t.abbr = e), H[e] || (H[e] = new r()), H[e].set(t), H[e];
    }
    function h(e) {
      return e ? (!H[e] && O && require('./lang/' + e), H[e]) : j.fn._lang;
    }
    function p(e) {
      return e.match(/\[.*\]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '');
    }
    function m(e) {
      var t,
        n,
        r = e.match(Y);
      for (t = 0, n = r.length; n > t; t++) r[t] = it[r[t]] ? it[r[t]] : p(r[t]);
      return function (i) {
        var o = '';
        for (t = 0; n > t; t++) o += 'function' == typeof r[t].call ? r[t].call(i, e) : r[t];
        return o;
      };
    }
    function g(e, t) {
      function n(t) {
        return e.lang().longDateFormat(t) || t;
      }
      for (var r = 5; r-- && P.test(t); ) t = t.replace(P, n);
      return tt[t] || (tt[t] = m(t)), tt[t](e);
    }
    function y(e) {
      switch (e) {
        case 'DDDD':
          return z;
        case 'YYYY':
          return B;
        case 'YYYYY':
          return $;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
          return R;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'a':
        case 'A':
          return I;
        case 'X':
          return V;
        case 'Z':
        case 'ZZ':
          return X;
        case 'T':
          return U;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
          return W;
        default:
          return new RegExp(e.replace('\\', ''));
      }
    }
    function v(e, t, n) {
      var r,
        i = n._a;
      switch (e) {
        case 'M':
        case 'MM':
          i[1] = null == t ? 0 : ~~t - 1;
          break;
        case 'MMM':
        case 'MMMM':
          (r = h(n._l).monthsParse(t)), null != r ? (i[1] = r) : (n._isValid = !1);
          break;
        case 'D':
        case 'DD':
        case 'DDD':
        case 'DDDD':
          null != t && (i[2] = ~~t);
          break;
        case 'YY':
          i[0] = ~~t + (~~t > 68 ? 1900 : 2e3);
          break;
        case 'YYYY':
        case 'YYYYY':
          i[0] = ~~t;
          break;
        case 'a':
        case 'A':
          n._isPm = 'pm' === (t + '').toLowerCase();
          break;
        case 'H':
        case 'HH':
        case 'h':
        case 'hh':
          i[3] = ~~t;
          break;
        case 'm':
        case 'mm':
          i[4] = ~~t;
          break;
        case 's':
        case 'ss':
          i[5] = ~~t;
          break;
        case 'S':
        case 'SS':
        case 'SSS':
          i[6] = ~~(1e3 * ('0.' + t));
          break;
        case 'X':
          n._d = new Date(1e3 * parseFloat(t));
          break;
        case 'Z':
        case 'ZZ':
          (n._useUTC = !0),
            (r = (t + '').match(Q)),
            r && r[1] && (n._tzh = ~~r[1]),
            r && r[2] && (n._tzm = ~~r[2]),
            r && '+' === r[0] && ((n._tzh = -n._tzh), (n._tzm = -n._tzm));
      }
      null == t && (n._isValid = !1);
    }
    function b(e) {
      var t,
        n,
        r = [];
      if (!e._d) {
        for (t = 0; 7 > t; t++) e._a[t] = r[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
        (r[3] += e._tzh || 0),
          (r[4] += e._tzm || 0),
          (n = new Date(0)),
          e._useUTC
            ? (n.setUTCFullYear(r[0], r[1], r[2]), n.setUTCHours(r[3], r[4], r[5], r[6]))
            : (n.setFullYear(r[0], r[1], r[2]), n.setHours(r[3], r[4], r[5], r[6])),
          (e._d = n);
      }
    }
    function x(e) {
      var t,
        n,
        r = e._f.match(Y),
        i = e._i;
      for (e._a = [], t = 0; t < r.length; t++)
        (n = (y(r[t]).exec(i) || [])[0]),
          n && (i = i.slice(i.indexOf(n) + n.length)),
          it[r[t]] && v(r[t], n, e);
      e._isPm && e._a[3] < 12 && (e._a[3] += 12),
        e._isPm === !1 && 12 === e._a[3] && (e._a[3] = 0),
        b(e);
    }
    function w(e) {
      for (var t, n, r, o, s = 99; e._f.length; ) {
        if (((t = a({}, e)), (t._f = e._f.pop()), x(t), (n = new i(t)), n.isValid())) {
          r = n;
          break;
        }
        (o = d(t._a, n.toArray())), s > o && ((s = o), (r = n));
      }
      a(e, r);
    }
    function T(e) {
      var t,
        n = e._i;
      if (J.exec(n)) {
        for (e._f = 'YYYY-MM-DDT', t = 0; 4 > t; t++)
          if (G[t][1].exec(n)) {
            e._f += G[t][0];
            break;
          }
        X.exec(n) && (e._f += ' Z'), x(e);
      } else e._d = new Date(n);
    }
    function k(t) {
      var n = t._i,
        r = q.exec(n);
      n === e
        ? (t._d = new Date())
        : r
          ? (t._d = new Date(+r[1]))
          : 'string' == typeof n
            ? T(t)
            : c(n)
              ? ((t._a = n.slice(0)), b(t))
              : (t._d = new Date(n instanceof Date ? +n : n));
    }
    function C(e, t, n, r, i) {
      return i.relativeTime(t || 1, !!n, e, r);
    }
    function _(e, t, n) {
      var r = F(Math.abs(e) / 1e3),
        i = F(r / 60),
        o = F(i / 60),
        a = F(o / 24),
        s = F(a / 365),
        u = (45 > r && ['s', r]) ||
          (1 === i && ['m']) ||
          (45 > i && ['mm', i]) ||
          (1 === o && ['h']) ||
          (22 > o && ['hh', o]) ||
          (1 === a && ['d']) ||
          (25 >= a && ['dd', a]) ||
          (45 >= a && ['M']) ||
          (345 > a && ['MM', F(a / 30)]) ||
          (1 === s && ['y']) || ['yy', s];
      return (u[2] = t), (u[3] = e > 0), (u[4] = n), C.apply({}, u);
    }
    function S(e, t, n) {
      var r = n - t,
        i = n - e.day();
      return i > r && (i -= 7), r - 7 > i && (i += 7), Math.ceil(j(e).add('d', i).dayOfYear() / 7);
    }
    function D(e) {
      var t = e._i,
        n = e._f;
      return null === t || '' === t
        ? null
        : ('string' == typeof t && (e._i = t = h().preparse(t)),
          j.isMoment(t)
            ? ((e = a({}, t)), (e._d = new Date(+t._d)))
            : n
              ? c(n)
                ? w(e)
                : x(e)
              : k(e),
          new i(e));
    }
    function E(e, t) {
      j.fn[e] = j.fn[e + 's'] = function (e) {
        var n = this._isUTC ? 'UTC' : '';
        return null != e ? (this._d['set' + n + t](e), this) : this._d['get' + n + t]();
      };
    }
    function N(e) {
      j.duration.fn[e] = function () {
        return this._data[e];
      };
    }
    function M(e, t) {
      j.duration.fn['as' + e] = function () {
        return +this / t;
      };
    }
    for (
      var j,
        A,
        L = '2.0.0',
        F = Math.round,
        H = {},
        O = 'undefined' != typeof module && module.exports,
        q = /^\/?Date\((\-?\d+)/i,
        Y =
          /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        P = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        W = /\d\d?/,
        R = /\d{1,3}/,
        z = /\d{3}/,
        B = /\d{1,4}/,
        $ = /[+\-]?\d{1,6}/,
        I =
          /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,
        X = /Z|[\+\-]\d\d:?\d\d/i,
        U = /T/i,
        V = /[\+\-]?\d+(\.\d{1,3})?/,
        J = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        Z = 'YYYY-MM-DDTHH:mm:ssZ',
        G = [
          ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
          ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
          ['HH:mm', /(T| )\d\d:\d\d/],
          ['HH', /(T| )\d\d/]
        ],
        Q = /([\+\-]|\d\d)/gi,
        K = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        et = {
          Milliseconds: 1,
          Seconds: 1e3,
          Minutes: 6e4,
          Hours: 36e5,
          Days: 864e5,
          Months: 2592e6,
          Years: 31536e6
        },
        tt = {},
        nt = 'DDD w W M D d'.split(' '),
        rt = 'M D H h m s w W'.split(' '),
        it = {
          M: function () {
            return this.month() + 1;
          },
          MMM: function (e) {
            return this.lang().monthsShort(this, e);
          },
          MMMM: function (e) {
            return this.lang().months(this, e);
          },
          D: function () {
            return this.date();
          },
          DDD: function () {
            return this.dayOfYear();
          },
          d: function () {
            return this.day();
          },
          dd: function (e) {
            return this.lang().weekdaysMin(this, e);
          },
          ddd: function (e) {
            return this.lang().weekdaysShort(this, e);
          },
          dddd: function (e) {
            return this.lang().weekdays(this, e);
          },
          w: function () {
            return this.week();
          },
          W: function () {
            return this.isoWeek();
          },
          YY: function () {
            return u(this.year() % 100, 2);
          },
          YYYY: function () {
            return u(this.year(), 4);
          },
          YYYYY: function () {
            return u(this.year(), 5);
          },
          a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0);
          },
          A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1);
          },
          H: function () {
            return this.hours();
          },
          h: function () {
            return this.hours() % 12 || 12;
          },
          m: function () {
            return this.minutes();
          },
          s: function () {
            return this.seconds();
          },
          S: function () {
            return ~~(this.milliseconds() / 100);
          },
          SS: function () {
            return u(~~(this.milliseconds() / 10), 2);
          },
          SSS: function () {
            return u(this.milliseconds(), 3);
          },
          Z: function () {
            var e = -this.zone(),
              t = '+';
            return 0 > e && ((e = -e), (t = '-')), t + u(~~(e / 60), 2) + ':' + u(~~e % 60, 2);
          },
          ZZ: function () {
            var e = -this.zone(),
              t = '+';
            return 0 > e && ((e = -e), (t = '-')), t + u(~~((10 * e) / 6), 4);
          },
          X: function () {
            return this.unix();
          }
        };
      nt.length;

    )
      (A = nt.pop()), (it[A + 'o'] = n(it[A]));
    for (; rt.length; ) (A = rt.pop()), (it[A + A] = t(it[A], 2));
    for (
      it.DDDD = t(it.DDD, 3),
        r.prototype = {
          set: function (e) {
            var t, n;
            for (n in e) (t = e[n]), 'function' == typeof t ? (this[n] = t) : (this['_' + n] = t);
          },
          _months:
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
              '_'
            ),
          months: function (e) {
            return this._months[e.month()];
          },
          _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          monthsShort: function (e) {
            return this._monthsShort[e.month()];
          },
          monthsParse: function (e) {
            var t, n, r;
            for (this._monthsParse || (this._monthsParse = []), t = 0; 12 > t; t++)
              if (
                (this._monthsParse[t] ||
                  ((n = j([2e3, t])),
                  (r = '^' + this.months(n, '') + '|^' + this.monthsShort(n, '')),
                  (this._monthsParse[t] = new RegExp(r.replace('.', ''), 'i'))),
                this._monthsParse[t].test(e))
              )
                return t;
          },
          _weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdays: function (e) {
            return this._weekdays[e.day()];
          },
          _weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysShort: function (e) {
            return this._weekdaysShort[e.day()];
          },
          _weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          weekdaysMin: function (e) {
            return this._weekdaysMin[e.day()];
          },
          _longDateFormat: {
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D YYYY',
            LLL: 'MMMM D YYYY LT',
            LLLL: 'dddd, MMMM D YYYY LT'
          },
          longDateFormat: function (e) {
            var t = this._longDateFormat[e];
            return (
              !t &&
                this._longDateFormat[e.toUpperCase()] &&
                ((t = this._longDateFormat[e.toUpperCase()].replace(
                  /MMMM|MM|DD|dddd/g,
                  function (e) {
                    return e.slice(1);
                  }
                )),
                (this._longDateFormat[e] = t)),
              t
            );
          },
          meridiem: function (e, t, n) {
            return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
          },
          _calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[last] dddd [at] LT',
            sameElse: 'L'
          },
          calendar: function (e, t) {
            var n = this._calendar[e];
            return 'function' == typeof n ? n.apply(t) : n;
          },
          _relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          relativeTime: function (e, t, n, r) {
            var i = this._relativeTime[n];
            return 'function' == typeof i ? i(e, t, n, r) : i.replace(/%d/i, e);
          },
          pastFuture: function (e, t) {
            var n = this._relativeTime[e > 0 ? 'future' : 'past'];
            return 'function' == typeof n ? n(t) : n.replace(/%s/i, t);
          },
          ordinal: function (e) {
            return this._ordinal.replace('%d', e);
          },
          _ordinal: '%d',
          preparse: function (e) {
            return e;
          },
          postformat: function (e) {
            return e;
          },
          week: function (e) {
            return S(e, this._week.dow, this._week.doy);
          },
          _week: { dow: 0, doy: 6 }
        },
        j = function (e, t, n) {
          return D({ _i: e, _f: t, _l: n, _isUTC: !1 });
        },
        j.utc = function (e, t, n) {
          return D({ _useUTC: !0, _isUTC: !0, _l: n, _i: e, _f: t });
        },
        j.unix = function (e) {
          return j(1e3 * e);
        },
        j.duration = function (e, t) {
          var n,
            r = j.isDuration(e),
            i = 'number' == typeof e,
            a = r ? e._data : i ? {} : e;
          return (
            i && (t ? (a[t] = e) : (a.milliseconds = e)),
            (n = new o(a)),
            r && e.hasOwnProperty('_lang') && (n._lang = e._lang),
            n
          );
        },
        j.version = L,
        j.defaultFormat = Z,
        j.lang = function (e, t) {
          return e
            ? (t ? f(e, t) : H[e] || h(e), void (j.duration.fn._lang = j.fn._lang = h(e)))
            : j.fn._lang._abbr;
        },
        j.langData = function (e) {
          return e && e._lang && e._lang._abbr && (e = e._lang._abbr), h(e);
        },
        j.isMoment = function (e) {
          return e instanceof i;
        },
        j.isDuration = function (e) {
          return e instanceof o;
        },
        j.fn = i.prototype =
          {
            clone: function () {
              return j(this);
            },
            valueOf: function () {
              return +this._d;
            },
            unix: function () {
              return Math.floor(+this._d / 1e3);
            },
            toString: function () {
              return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            },
            toDate: function () {
              return this._d;
            },
            toJSON: function () {
              return j.utc(this).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            },
            toArray: function () {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hours(),
                e.minutes(),
                e.seconds(),
                e.milliseconds()
              ];
            },
            isValid: function () {
              return (
                null == this._isValid &&
                  (this._isValid = this._a
                    ? !d(this._a, (this._isUTC ? j.utc(this._a) : j(this._a)).toArray())
                    : !isNaN(this._d.getTime())),
                !!this._isValid
              );
            },
            utc: function () {
              return (this._isUTC = !0), this;
            },
            local: function () {
              return (this._isUTC = !1), this;
            },
            format: function (e) {
              var t = g(this, e || j.defaultFormat);
              return this.lang().postformat(t);
            },
            add: function (e, t) {
              var n;
              return (
                (n = 'string' == typeof e ? j.duration(+t, e) : j.duration(e, t)),
                l(this, n, 1),
                this
              );
            },
            subtract: function (e, t) {
              var n;
              return (
                (n = 'string' == typeof e ? j.duration(+t, e) : j.duration(e, t)),
                l(this, n, -1),
                this
              );
            },
            diff: function (e, t, n) {
              var r,
                i,
                o = this._isUTC ? j(e).utc() : j(e).local(),
                a = 6e4 * (this.zone() - o.zone());
              return (
                t && (t = t.replace(/s$/, '')),
                'year' === t || 'month' === t
                  ? ((r = 432e5 * (this.daysInMonth() + o.daysInMonth())),
                    (i = 12 * (this.year() - o.year()) + (this.month() - o.month())),
                    (i += (this - j(this).startOf('month') - (o - j(o).startOf('month'))) / r),
                    'year' === t && (i /= 12))
                  : ((r = this - o - a),
                    (i =
                      'second' === t
                        ? r / 1e3
                        : 'minute' === t
                          ? r / 6e4
                          : 'hour' === t
                            ? r / 36e5
                            : 'day' === t
                              ? r / 864e5
                              : 'week' === t
                                ? r / 6048e5
                                : r)),
                n ? i : s(i)
              );
            },
            from: function (e, t) {
              return j.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!t);
            },
            fromNow: function (e) {
              return this.from(j(), e);
            },
            calendar: function () {
              var e = this.diff(j().startOf('day'), 'days', !0),
                t =
                  -6 > e
                    ? 'sameElse'
                    : -1 > e
                      ? 'lastWeek'
                      : 0 > e
                        ? 'lastDay'
                        : 1 > e
                          ? 'sameDay'
                          : 2 > e
                            ? 'nextDay'
                            : 7 > e
                              ? 'nextWeek'
                              : 'sameElse';
              return this.format(this.lang().calendar(t, this));
            },
            isLeapYear: function () {
              var e = this.year();
              return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
            },
            isDST: function () {
              return (
                this.zone() < j([this.year()]).zone() || this.zone() < j([this.year(), 5]).zone()
              );
            },
            day: function (e) {
              var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null == e ? t : this.add({ d: e - t });
            },
            startOf: function (e) {
              switch ((e = e.replace(/s$/, ''))) {
                case 'year':
                  this.month(0);
                case 'month':
                  this.date(1);
                case 'week':
                case 'day':
                  this.hours(0);
                case 'hour':
                  this.minutes(0);
                case 'minute':
                  this.seconds(0);
                case 'second':
                  this.milliseconds(0);
              }
              return 'week' === e && this.day(0), this;
            },
            endOf: function (e) {
              return this.startOf(e).add(e.replace(/s?$/, 's'), 1).subtract('ms', 1);
            },
            isAfter: function (e, t) {
              return (
                (t = 'undefined' != typeof t ? t : 'millisecond'),
                +this.clone().startOf(t) > +j(e).startOf(t)
              );
            },
            isBefore: function (e, t) {
              return (
                (t = 'undefined' != typeof t ? t : 'millisecond'),
                +this.clone().startOf(t) < +j(e).startOf(t)
              );
            },
            isSame: function (e, t) {
              return (
                (t = 'undefined' != typeof t ? t : 'millisecond'),
                +this.clone().startOf(t) === +j(e).startOf(t)
              );
            },
            zone: function () {
              return this._isUTC ? 0 : this._d.getTimezoneOffset();
            },
            daysInMonth: function () {
              return j.utc([this.year(), this.month() + 1, 0]).date();
            },
            dayOfYear: function (e) {
              var t = F((j(this).startOf('day') - j(this).startOf('year')) / 864e5) + 1;
              return null == e ? t : this.add('d', e - t);
            },
            isoWeek: function (e) {
              var t = S(this, 1, 4);
              return null == e ? t : this.add('d', 7 * (e - t));
            },
            week: function (e) {
              var t = this.lang().week(this);
              return null == e ? t : this.add('d', 7 * (e - t));
            },
            lang: function (t) {
              return t === e ? this._lang : ((this._lang = h(t)), this);
            }
          },
        A = 0;
      A < K.length;
      A++
    )
      E(K[A].toLowerCase().replace(/s$/, ''), K[A]);
    E('year', 'FullYear'),
      (j.fn.days = j.fn.day),
      (j.fn.weeks = j.fn.week),
      (j.fn.isoWeeks = j.fn.isoWeek),
      (j.duration.fn = o.prototype =
        {
          weeks: function () {
            return s(this.days() / 7);
          },
          valueOf: function () {
            return this._milliseconds + 864e5 * this._days + 2592e6 * this._months;
          },
          humanize: function (e) {
            var t = +this,
              n = _(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n);
          },
          lang: j.fn.lang
        });
    for (A in et) et.hasOwnProperty(A) && (M(A, et[A]), N(A.toLowerCase()));
    M('Weeks', 6048e5),
      j.lang('en', {
        ordinal: function (e) {
          var t = e % 10,
            n =
              1 === ~~((e % 100) / 10)
                ? 'th'
                : 1 === t
                  ? 'st'
                  : 2 === t
                    ? 'nd'
                    : 3 === t
                      ? 'rd'
                      : 'th';
          return e + n;
        }
      }),
      O && (module.exports = j),
      'undefined' == typeof ender && (this.moment = j),
      'function' == typeof define &&
        define.amd &&
        define('moment', [], function () {
          return j;
        });
  }.call(this),
  (function (e) {
    var t,
      n = e(document),
      r = [];
    if (
      ((e.bootstrapSortable = function (n) {
        e('table.sortable').each(function () {
          var i = e(this);
          (n = n === !0),
            i.find('span.arrow').remove(),
            i.find('thead th').each(function (t) {
              e(this).attr('data-sortkey', t);
            }),
            i.find('td').each(function () {
              var t = e(this);
              void 0 != t.attr('data-dateformat')
                ? t.attr(
                    'data-value',
                    moment(t.text(), t.attr('data-dateformat')).format('YYYY/MM/DD/HH/mm/ss')
                  )
                : void 0 === t.attr('data-value') && t.attr('data-value', t.text());
            }),
            i.find('thead th').each(function (i) {
              var o = e(this);
              'disabled' != o.attr('data-defaultsort') &&
                ((t = n ? t : -1),
                (r[i] = n ? r[i] : o.attr('data-defaultsort')),
                null != r[i] &&
                  n == (i == t) &&
                  ((r[i] = 'asc' == r[i] ? 'desc' : 'asc'), o.click()));
            });
        });
      }),
      n.on('click', 'table.sortable thead th', function () {
        var n = e(this),
          i = n.parents('table.sortable');
        if ('disabled' != n.attr('data-defaultsort')) {
          if (e.browser.mozilla) {
            var o = i.find('div.mozilla');
            null != o && o.parent().html(o.text()),
              n.wrapInner('<div class="mozilla"></div>'),
              n.children().eq(0).append('<span class="arrow"></span>');
          } else i.find('span.arrow').remove(), n.append('<span class="arrow"></span>');
          var a = n.attr('data-sortkey');
          (t = a),
            (r[a] = 'asc' == r[a] ? 'desc' : 'asc'),
            'desc' == r[a] && n.find('span.arrow').addClass('up');
          var s = i.find('tbody tr');
          s.tsort('td:eq(' + a + ')', { order: r[a], attr: 'data-value' });
        }
      }),
      !e.browser)
    ) {
      e.browser = { chrome: !1, mozilla: !1, opera: !1, msie: !1, safari: !1 };
      var i = navigator.userAgent;
      e.each(e.browser, function (t) {
        (e.browser[t] = new RegExp(t, 'i').test(i) ? !0 : !1),
          e.browser.mozilla &&
            'mozilla' == t &&
            (e.browser.mozilla = new RegExp('firefox', 'i').test(i) ? !0 : !1),
          e.browser.chrome && 'safari' == t && (e.browser.safari = !1);
      });
    }
    e(e.bootstrapSortable);
  })(jQuery),
  $(document).ready(function () {
    $('.sparkline').peity('line', {
      colour: '#b7cfcf',
      strokeColour: '#738282',
      width: 150,
      height: 40
    }),
      $('.sparkpie').peity('pie', {
        diameter: 25,
        colours: ['#79952e', '#ececec']
      });
  });
