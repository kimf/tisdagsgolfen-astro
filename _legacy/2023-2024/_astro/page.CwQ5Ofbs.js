const d = new Set(),
  s = new WeakSet();
let f = !0,
  p = 'load',
  l = !1;
function m(e) {
  l || ((l = !0), (f ??= !1), (p ??= 'hover'), g(), v(), y(), S());
}
function g() {
  for (const e of ['touchstart', 'mousedown'])
    document.body.addEventListener(
      e,
      (e) => {
        i(e.target, 'tap') && c(e.target.href, { ignoreSlowConnection: !0 });
      },
      { passive: !0 }
    );
}
function v() {
  let e;
  function t(t) {
    const n = t.target.href;
    e && clearTimeout(e),
      (e = setTimeout(() => {
        c(n);
      }, 80));
  }
  function n() {
    e && (clearTimeout(e), (e = 0));
  }
  document.body.addEventListener(
    'focusin',
    (e) => {
      i(e.target, 'hover') && t(e);
    },
    { passive: !0 }
  ),
    document.body.addEventListener('focusout', n, { passive: !0 }),
    u(() => {
      for (const e of document.getElementsByTagName('a'))
        s.has(e) ||
          (i(e, 'hover') &&
            (s.add(e),
            e.addEventListener('mouseenter', t, { passive: !0 }),
            e.addEventListener('mouseleave', n, { passive: !0 })));
    });
}
function y() {
  let e;
  u(() => {
    for (const t of document.getElementsByTagName('a'))
      s.has(t) || (i(t, 'viewport') && (s.add(t), (e ??= w()), e.observe(t)));
  });
}
function w() {
  const e = new WeakMap();
  return new IntersectionObserver((t, n) => {
    for (const o of t) {
      const t = o.target,
        r = e.get(t);
      o.isIntersecting
        ? (r && clearTimeout(r),
          e.set(
            t,
            setTimeout(() => {
              n.unobserve(t), e.delete(t), c(t.href);
            }, 300)
          ))
        : r && (clearTimeout(r), e.delete(t));
    }
  });
}
function S() {
  u(() => {
    for (const e of document.getElementsByTagName('a')) i(e, 'load') && c(e.href);
  });
}
function c(e, t) {
  if (E((e = e.replace(/#.*/, '')), t?.ignoreSlowConnection ?? !1))
    if ((d.add(e), HTMLScriptElement.supports?.('speculationrules'))) L(e);
    else if (
      document.createElement('link').relList?.supports?.('prefetch') &&
      'fetch' !== t?.with
    ) {
      const t = document.createElement('link');
      (t.rel = 'prefetch'), t.setAttribute('href', e), document.head.append(t);
    } else fetch(e, { priority: 'low' });
}
function E(e, t) {
  if (!navigator.onLine || (!t && h())) return !1;
  try {
    const t = new URL(e, location.href);
    return (
      location.origin === t.origin &&
      (location.pathname !== t.pathname || location.search !== t.search) &&
      !d.has(e)
    );
  } catch {}
  return !1;
}
function i(e, t) {
  if ('A' !== e?.tagName) return !1;
  const n = e.dataset.astroPrefetch;
  return (
    'false' !== n &&
    (!('tap' !== t || (null == n && !f) || !h()) ||
      ((null == n && f) || '' === n ? t === p : n === t))
  );
}
function h() {
  if ('connection' in navigator) {
    const e = navigator.connection;
    return e.saveData || /2g/.test(e.effectiveType);
  }
  return !1;
}
function u(e) {
  e();
  let t = !1;
  document.addEventListener('astro:page-load', () => {
    t ? e() : (t = !0);
  });
}
function L(e) {
  const t = document.createElement('script');
  (t.type = 'speculationrules'),
    (t.textContent = JSON.stringify({
      prerender: [{ source: 'list', urls: [e] }],
      prefetch: [{ source: 'list', urls: [e] }]
    })),
    document.head.append(t);
}
m();
