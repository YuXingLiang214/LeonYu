import {
  aB as ke,
  b2 as Ke,
  y as p,
  a3 as Fe,
  bw as je,
  a as N,
  ay as Z,
  w as G,
  V as Ue,
  az as We,
  q as we,
  m as Ye,
  bi as Xe,
  t as ae,
  s as Se,
  af as Ze,
  G as oe,
  v as Pe,
  bX as Ge,
  L as qe,
  x as Ce,
  ai as Je,
  Z as P,
  P as Qe,
  U as et,
  ab as tt,
  ac as at,
  o as v,
  z as S,
  a2 as m,
  a5 as ne,
  F as h,
  f as t,
  D as W,
  h as V,
  c as I,
  d as M,
  B as Y,
  C as L,
  J as se,
  e as ot,
  aF as nt,
  a4 as st,
  bx as lt,
  ak as X,
  A as rt,
  _ as it,
  ah as Ie,
  aE as ut,
  bY as ct,
  bZ as dt,
  I as pt
} from './index-fa93e99f.js'
import {
  c as ft,
  f as vt,
  a as mt,
  e as yt,
  d as Ee,
  i as ht
} from './_plugin-vue_export-helper-3666fca8.js'
const bt = () => ke && /firefox/i.test(window.navigator.userAgent)
function Ht() {
  if (!arguments.length) return []
  var o = arguments[0]
  return Ke(o) ? o : [o]
}
const le = 'update:modelValue',
  Ot = 'change',
  gt = (o) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),
  xt = ['class', 'style'],
  wt = /^on[A-Z]/,
  St = (o = {}) => {
    const { excludeListeners: f = !1, excludeKeys: u } = o,
      a = p(() => ((u == null ? void 0 : u.value) || []).concat(xt)),
      r = Fe()
    return r
      ? p(() => {
          var i
          return je(
            Object.entries((i = r.proxy) == null ? void 0 : i.$attrs).filter(
              ([c]) => !a.value.includes(c) && !(f && wt.test(c))
            )
          )
        })
      : p(() => ({}))
  }
function Ct(o) {
  const f = N()
  function u() {
    if (o.value == null) return
    const { selectionStart: r, selectionEnd: i, value: c } = o.value
    if (r == null || i == null) return
    const b = c.slice(0, Math.max(0, r)),
      d = c.slice(Math.max(0, i))
    f.value = {
      selectionStart: r,
      selectionEnd: i,
      value: c,
      beforeTxt: b,
      afterTxt: d
    }
  }
  function a() {
    if (o.value == null || f.value == null) return
    const { value: r } = o.value,
      { beforeTxt: i, afterTxt: c, selectionStart: b } = f.value
    if (i == null || c == null || b == null) return
    let d = r.length
    if (r.endsWith(c)) d = r.length - c.length
    else if (r.startsWith(i)) d = i.length
    else {
      const g = i[b - 1],
        w = r.indexOf(g, b - 1)
      w !== -1 && (d = w + 1)
    }
    o.value.setSelectionRange(d, d)
  }
  return [u, a]
}
function It(o, { afterFocus: f, beforeBlur: u, afterBlur: a } = {}) {
  const r = Fe(),
    { emit: i } = r,
    c = Z(),
    b = N(!1),
    d = (s) => {
      b.value || ((b.value = !0), i('focus', s), f == null || f())
    },
    g = (s) => {
      var T
      ;(We(u) && u(s)) ||
        (s.relatedTarget &&
          (T = c.value) != null &&
          T.contains(s.relatedTarget)) ||
        ((b.value = !1), i('blur', s), a == null || a())
    },
    w = () => {
      var s
      ;(s = o.value) == null || s.focus()
    }
  return (
    G(c, (s) => {
      s && s.setAttribute('tabindex', '-1')
    }),
    Ue(c, 'click', w),
    { wrapperRef: c, isFocused: b, handleFocus: d, handleBlur: g }
  )
}
let x
const Et = `
  height:0 !important;
  visibility:hidden !important;
  ${bt() ? '' : 'overflow:hidden !important;'}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,
  zt = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
  ]
function kt(o) {
  const f = window.getComputedStyle(o),
    u = f.getPropertyValue('box-sizing'),
    a =
      Number.parseFloat(f.getPropertyValue('padding-bottom')) +
      Number.parseFloat(f.getPropertyValue('padding-top')),
    r =
      Number.parseFloat(f.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(f.getPropertyValue('border-top-width'))
  return {
    contextStyle: zt.map((c) => `${c}:${f.getPropertyValue(c)}`).join(';'),
    paddingSize: a,
    borderSize: r,
    boxSizing: u
  }
}
function ze(o, f = 1, u) {
  var a
  x || ((x = document.createElement('textarea')), document.body.appendChild(x))
  const { paddingSize: r, borderSize: i, boxSizing: c, contextStyle: b } = kt(o)
  x.setAttribute('style', `${b};${Et}`),
    (x.value = o.value || o.placeholder || '')
  let d = x.scrollHeight
  const g = {}
  c === 'border-box' ? (d = d + i) : c === 'content-box' && (d = d - r),
    (x.value = '')
  const w = x.scrollHeight - r
  if (we(f)) {
    let s = w * f
    c === 'border-box' && (s = s + r + i),
      (d = Math.max(s, d)),
      (g.minHeight = `${s}px`)
  }
  if (we(u)) {
    let s = w * u
    c === 'border-box' && (s = s + r + i), (d = Math.min(s, d))
  }
  return (
    (g.height = `${d}px`),
    (a = x.parentNode) == null || a.removeChild(x),
    (x = void 0),
    g
  )
}
const Ft = Ye({
    id: { type: String, default: void 0 },
    size: Xe,
    disabled: Boolean,
    modelValue: { type: ae([String, Number, Object]), default: '' },
    type: { type: String, default: 'text' },
    resize: {
      type: String,
      values: ['none', 'both', 'horizontal', 'vertical']
    },
    autosize: { type: ae([Boolean, Object]), default: !1 },
    autocomplete: { type: String, default: 'off' },
    formatter: { type: Function },
    parser: { type: Function },
    placeholder: { type: String },
    form: { type: String },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    suffixIcon: { type: Se },
    prefixIcon: { type: Se },
    containerRole: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    tabindex: { type: [String, Number], default: 0 },
    validateEvent: { type: Boolean, default: !0 },
    inputStyle: { type: ae([Object, Array, String]), default: () => Ze({}) },
    autofocus: { type: Boolean, default: !1 }
  }),
  Pt = {
    [le]: (o) => oe(o),
    input: (o) => oe(o),
    change: (o) => oe(o),
    focus: (o) => o instanceof FocusEvent,
    blur: (o) => o instanceof FocusEvent,
    clear: () => !0,
    mouseleave: (o) => o instanceof MouseEvent,
    mouseenter: (o) => o instanceof MouseEvent,
    keydown: (o) => o instanceof Event,
    compositionstart: (o) => o instanceof CompositionEvent,
    compositionupdate: (o) => o instanceof CompositionEvent,
    compositionend: (o) => o instanceof CompositionEvent
  },
  Vt = ['role'],
  Nt = [
    'id',
    'type',
    'disabled',
    'formatter',
    'parser',
    'readonly',
    'autocomplete',
    'tabindex',
    'aria-label',
    'placeholder',
    'form',
    'autofocus'
  ],
  Tt = [
    'id',
    'tabindex',
    'disabled',
    'readonly',
    'autocomplete',
    'aria-label',
    'placeholder',
    'form',
    'autofocus'
  ],
  Bt = Pe({ name: 'ElInput', inheritAttrs: !1 }),
  At = Pe({
    ...Bt,
    props: Ft,
    emits: Pt,
    setup(o, { expose: f, emit: u }) {
      const a = o,
        r = Ge(),
        i = qe(),
        c = p(() => {
          const e = {}
          return (
            a.containerRole === 'combobox' &&
              ((e['aria-haspopup'] = r['aria-haspopup']),
              (e['aria-owns'] = r['aria-owns']),
              (e['aria-expanded'] = r['aria-expanded'])),
            e
          )
        }),
        b = p(() => [
          a.type === 'textarea' ? ie.b() : l.b(),
          l.m(re.value),
          l.is('disabled', z.value),
          l.is('exceed', Be.value),
          {
            [l.b('group')]: i.prepend || i.append,
            [l.bm('group', 'append')]: i.append,
            [l.bm('group', 'prepend')]: i.prepend,
            [l.m('prefix')]: i.prefix || a.prefixIcon,
            [l.m('suffix')]:
              i.suffix || a.suffixIcon || a.clearable || a.showPassword,
            [l.bm('suffix', 'password-clear')]: j.value && Q.value
          },
          r.class
        ]),
        d = p(() => [l.e('wrapper'), l.is('focus', J.value)]),
        g = St({ excludeKeys: p(() => Object.keys(c.value)) }),
        { form: w, formItem: s } = ft(),
        { inputId: T } = vt(a, { formItemContext: s }),
        re = mt(),
        z = yt(),
        l = Ce('input'),
        ie = Ce('textarea'),
        H = Z(),
        C = Z(),
        q = N(!1),
        B = N(!1),
        O = N(!1),
        ue = N(),
        _ = Z(a.inputStyle),
        k = p(() => H.value || C.value),
        {
          wrapperRef: Ve,
          isFocused: J,
          handleFocus: D,
          handleBlur: K
        } = It(k, {
          afterBlur() {
            var e
            a.validateEvent &&
              ((e = s == null ? void 0 : s.validate) == null ||
                e.call(s, 'blur').catch((n) => Ee()))
          }
        }),
        ce = p(() => {
          var e
          return (e = w == null ? void 0 : w.statusIcon) != null ? e : !1
        }),
        A = p(() => (s == null ? void 0 : s.validateState) || ''),
        de = p(() => A.value && ut[A.value]),
        Ne = p(() => (O.value ? ct : dt)),
        Te = p(() => [r.style, a.inputStyle]),
        pe = p(() => [a.inputStyle, _.value, { resize: a.resize }]),
        E = p(() => (ht(a.modelValue) ? '' : String(a.modelValue))),
        j = p(
          () =>
            a.clearable &&
            !z.value &&
            !a.readonly &&
            !!E.value &&
            (J.value || q.value)
        ),
        Q = p(
          () =>
            a.showPassword &&
            !z.value &&
            !a.readonly &&
            !!E.value &&
            (!!E.value || J.value)
        ),
        F = p(
          () =>
            a.showWordLimit &&
            !!g.value.maxlength &&
            (a.type === 'text' || a.type === 'textarea') &&
            !z.value &&
            !a.readonly &&
            !a.showPassword
        ),
        ee = p(() => E.value.length),
        Be = p(() => !!F.value && ee.value > Number(g.value.maxlength)),
        Ae = p(
          () =>
            !!i.suffix ||
            !!a.suffixIcon ||
            j.value ||
            a.showPassword ||
            F.value ||
            (!!A.value && ce.value)
        ),
        [Re, $e] = Ct(H)
      Je(C, (e) => {
        if ((Me(), !F.value || a.resize !== 'both')) return
        const n = e[0],
          { width: y } = n.contentRect
        ue.value = { right: `calc(100% - ${y + 15 + 6}px)` }
      })
      const R = () => {
          const { type: e, autosize: n } = a
          if (!(!ke || e !== 'textarea' || !C.value))
            if (n) {
              const y = Ie(n) ? n.minRows : void 0,
                U = Ie(n) ? n.maxRows : void 0,
                xe = ze(C.value, y, U)
              ;(_.value = { overflowY: 'hidden', ...xe }),
                P(() => {
                  C.value.offsetHeight, (_.value = xe)
                })
            } else _.value = { minHeight: ze(C.value).minHeight }
        },
        Me = ((e) => {
          let n = !1
          return () => {
            var y
            if (n || !a.autosize) return
            ;((y = C.value) == null ? void 0 : y.offsetParent) === null ||
              (e(), (n = !0))
          }
        })(R),
        $ = () => {
          const e = k.value,
            n = a.formatter ? a.formatter(E.value) : E.value
          !e || e.value === n || (e.value = n)
        },
        te = async (e) => {
          Re()
          let { value: n } = e.target
          if ((a.formatter && (n = a.parser ? a.parser(n) : n), !B.value)) {
            if (n === E.value) {
              $()
              return
            }
            u(le, n), u('input', n), await P(), $(), $e()
          }
        },
        fe = (e) => {
          u('change', e.target.value)
        },
        ve = (e) => {
          u('compositionstart', e), (B.value = !0)
        },
        me = (e) => {
          var n
          u('compositionupdate', e)
          const y = (n = e.target) == null ? void 0 : n.value,
            U = y[y.length - 1] || ''
          B.value = !gt(U)
        },
        ye = (e) => {
          u('compositionend', e), B.value && ((B.value = !1), te(e))
        },
        Le = () => {
          ;(O.value = !O.value), he()
        },
        he = async () => {
          var e
          await P(), (e = k.value) == null || e.focus()
        },
        He = () => {
          var e
          return (e = k.value) == null ? void 0 : e.blur()
        },
        Oe = (e) => {
          ;(q.value = !1), u('mouseleave', e)
        },
        _e = (e) => {
          ;(q.value = !0), u('mouseenter', e)
        },
        be = (e) => {
          u('keydown', e)
        },
        De = () => {
          var e
          ;(e = k.value) == null || e.select()
        },
        ge = () => {
          u(le, ''), u('change', ''), u('clear'), u('input', '')
        }
      return (
        G(
          () => a.modelValue,
          () => {
            var e
            P(() => R()),
              a.validateEvent &&
                ((e = s == null ? void 0 : s.validate) == null ||
                  e.call(s, 'change').catch((n) => Ee()))
          }
        ),
        G(E, () => $()),
        G(
          () => a.type,
          async () => {
            await P(), $(), R()
          }
        ),
        Qe(() => {
          !a.formatter && a.parser, $(), P(R)
        }),
        f({
          input: H,
          textarea: C,
          ref: k,
          textareaStyle: pe,
          autosize: et(a, 'autosize'),
          focus: he,
          blur: He,
          select: De,
          clear: ge,
          resizeTextarea: R
        }),
        (e, n) =>
          tt(
            (v(),
            S(
              'div',
              se(t(c), {
                class: t(b),
                style: t(Te),
                role: e.containerRole,
                onMouseenter: _e,
                onMouseleave: Oe
              }),
              [
                m(' input '),
                e.type !== 'textarea'
                  ? (v(),
                    S(
                      ne,
                      { key: 0 },
                      [
                        m(' prepend slot '),
                        e.$slots.prepend
                          ? (v(),
                            S(
                              'div',
                              { key: 0, class: h(t(l).be('group', 'prepend')) },
                              [W(e.$slots, 'prepend')],
                              2
                            ))
                          : m('v-if', !0),
                        V(
                          'div',
                          { ref_key: 'wrapperRef', ref: Ve, class: h(t(d)) },
                          [
                            m(' prefix slot '),
                            e.$slots.prefix || e.prefixIcon
                              ? (v(),
                                S(
                                  'span',
                                  { key: 0, class: h(t(l).e('prefix')) },
                                  [
                                    V(
                                      'span',
                                      { class: h(t(l).e('prefix-inner')) },
                                      [
                                        W(e.$slots, 'prefix'),
                                        e.prefixIcon
                                          ? (v(),
                                            I(
                                              t(L),
                                              {
                                                key: 0,
                                                class: h(t(l).e('icon'))
                                              },
                                              {
                                                default: M(() => [
                                                  (v(), I(Y(e.prefixIcon)))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : m('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : m('v-if', !0),
                            V(
                              'input',
                              se(
                                {
                                  id: t(T),
                                  ref_key: 'input',
                                  ref: H,
                                  class: t(l).e('inner')
                                },
                                t(g),
                                {
                                  type: e.showPassword
                                    ? O.value
                                      ? 'text'
                                      : 'password'
                                    : e.type,
                                  disabled: t(z),
                                  formatter: e.formatter,
                                  parser: e.parser,
                                  readonly: e.readonly,
                                  autocomplete: e.autocomplete,
                                  tabindex: e.tabindex,
                                  'aria-label': e.label,
                                  placeholder: e.placeholder,
                                  style: e.inputStyle,
                                  form: a.form,
                                  autofocus: a.autofocus,
                                  onCompositionstart: ve,
                                  onCompositionupdate: me,
                                  onCompositionend: ye,
                                  onInput: te,
                                  onFocus:
                                    n[0] ||
                                    (n[0] = (...y) => t(D) && t(D)(...y)),
                                  onBlur:
                                    n[1] ||
                                    (n[1] = (...y) => t(K) && t(K)(...y)),
                                  onChange: fe,
                                  onKeydown: be
                                }
                              ),
                              null,
                              16,
                              Nt
                            ),
                            m(' suffix slot '),
                            t(Ae)
                              ? (v(),
                                S(
                                  'span',
                                  { key: 1, class: h(t(l).e('suffix')) },
                                  [
                                    V(
                                      'span',
                                      { class: h(t(l).e('suffix-inner')) },
                                      [
                                        !t(j) || !t(Q) || !t(F)
                                          ? (v(),
                                            S(
                                              ne,
                                              { key: 0 },
                                              [
                                                W(e.$slots, 'suffix'),
                                                e.suffixIcon
                                                  ? (v(),
                                                    I(
                                                      t(L),
                                                      {
                                                        key: 0,
                                                        class: h(t(l).e('icon'))
                                                      },
                                                      {
                                                        default: M(() => [
                                                          (v(),
                                                          I(Y(e.suffixIcon)))
                                                        ]),
                                                        _: 1
                                                      },
                                                      8,
                                                      ['class']
                                                    ))
                                                  : m('v-if', !0)
                                              ],
                                              64
                                            ))
                                          : m('v-if', !0),
                                        t(j)
                                          ? (v(),
                                            I(
                                              t(L),
                                              {
                                                key: 1,
                                                class: h([
                                                  t(l).e('icon'),
                                                  t(l).e('clear')
                                                ]),
                                                onMousedown: st(t(lt), [
                                                  'prevent'
                                                ]),
                                                onClick: ge
                                              },
                                              {
                                                default: M(() => [ot(t(nt))]),
                                                _: 1
                                              },
                                              8,
                                              ['class', 'onMousedown']
                                            ))
                                          : m('v-if', !0),
                                        t(Q)
                                          ? (v(),
                                            I(
                                              t(L),
                                              {
                                                key: 2,
                                                class: h([
                                                  t(l).e('icon'),
                                                  t(l).e('password')
                                                ]),
                                                onClick: Le
                                              },
                                              {
                                                default: M(() => [
                                                  (v(), I(Y(t(Ne))))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : m('v-if', !0),
                                        t(F)
                                          ? (v(),
                                            S(
                                              'span',
                                              {
                                                key: 3,
                                                class: h(t(l).e('count'))
                                              },
                                              [
                                                V(
                                                  'span',
                                                  {
                                                    class: h(
                                                      t(l).e('count-inner')
                                                    )
                                                  },
                                                  X(t(ee)) +
                                                    ' / ' +
                                                    X(t(g).maxlength),
                                                  3
                                                )
                                              ],
                                              2
                                            ))
                                          : m('v-if', !0),
                                        t(A) && t(de) && t(ce)
                                          ? (v(),
                                            I(
                                              t(L),
                                              {
                                                key: 4,
                                                class: h([
                                                  t(l).e('icon'),
                                                  t(l).e('validateIcon'),
                                                  t(l).is(
                                                    'loading',
                                                    t(A) === 'validating'
                                                  )
                                                ])
                                              },
                                              {
                                                default: M(() => [
                                                  (v(), I(Y(t(de))))
                                                ]),
                                                _: 1
                                              },
                                              8,
                                              ['class']
                                            ))
                                          : m('v-if', !0)
                                      ],
                                      2
                                    )
                                  ],
                                  2
                                ))
                              : m('v-if', !0)
                          ],
                          2
                        ),
                        m(' append slot '),
                        e.$slots.append
                          ? (v(),
                            S(
                              'div',
                              { key: 1, class: h(t(l).be('group', 'append')) },
                              [W(e.$slots, 'append')],
                              2
                            ))
                          : m('v-if', !0)
                      ],
                      64
                    ))
                  : (v(),
                    S(
                      ne,
                      { key: 1 },
                      [
                        m(' textarea '),
                        V(
                          'textarea',
                          se(
                            {
                              id: t(T),
                              ref_key: 'textarea',
                              ref: C,
                              class: t(ie).e('inner')
                            },
                            t(g),
                            {
                              tabindex: e.tabindex,
                              disabled: t(z),
                              readonly: e.readonly,
                              autocomplete: e.autocomplete,
                              style: t(pe),
                              'aria-label': e.label,
                              placeholder: e.placeholder,
                              form: a.form,
                              autofocus: a.autofocus,
                              onCompositionstart: ve,
                              onCompositionupdate: me,
                              onCompositionend: ye,
                              onInput: te,
                              onFocus:
                                n[2] || (n[2] = (...y) => t(D) && t(D)(...y)),
                              onBlur:
                                n[3] || (n[3] = (...y) => t(K) && t(K)(...y)),
                              onChange: fe,
                              onKeydown: be
                            }
                          ),
                          null,
                          16,
                          Tt
                        ),
                        t(F)
                          ? (v(),
                            S(
                              'span',
                              {
                                key: 0,
                                style: rt(ue.value),
                                class: h(t(l).e('count'))
                              },
                              X(t(ee)) + ' / ' + X(t(g).maxlength),
                              7
                            ))
                          : m('v-if', !0)
                      ],
                      64
                    ))
              ],
              16,
              Vt
            )),
            [[at, e.type !== 'hidden']]
          )
      )
    }
  })
var Rt = it(At, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue'
  ]
])
const _t = pt(Rt)
export { Ot as C, _t as E, le as U, Ht as c, gt as i }