"use strict";
(self.webpackChunkeoghan = self.webpackChunkeoghan || []).push([
  [179],
  {
    798: function (e, t, n) {
      var r = n(784),
        o = n(316),
        i = n(1),
        c = n(617),
        a = n(866),
        l = n(212),
        s = n(779),
        u = n.n(s),
        p = function () {
          var e = (0, l.q_)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 100 },
          });
          return r.createElement(l.q.div, {
            style: e,
            className: u()("ui-blanket", d().toString()),
          });
        },
        d = (0, a.iv)({
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100%",
          height: " 100%",
          background: "rgba(0, 0, 0, 0.22)",
        }),
        f = n(896),
        m = n(666),
        h = n(740),
        v = n(980),
        y = n.n(v),
        g = [
          "children",
          "className",
          "as",
          "role",
          "type",
          "tabIndex",
          "disabled",
          "onClick",
          "href",
          "target",
          "variant",
          "theme",
          "shape",
          "size",
        ];
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var x = function (e) {
          var t = e.children,
            n = e.className,
            o = e.as,
            i = void 0 === o ? "button" : o,
            c = e.role,
            a = void 0 === c ? "button" : c,
            l = e.type,
            s = void 0 === l ? "button" : l,
            p = e.tabIndex,
            d = void 0 === p ? "0" : p,
            v = e.disabled,
            y = void 0 !== v && v,
            x = e.onClick,
            E =
              void 0 === x
                ? function () {
                    return null;
                  }
                : x,
            w = e.href,
            j = void 0 === w ? "" : w,
            k = e.target,
            z = void 0 === k ? "_blank" : k,
            P = e.variant,
            Z = void 0 === P ? "contained" : P,
            C = e.theme,
            _ = void 0 === C ? "primary" : C,
            D = e.shape,
            N = void 0 === D ? "circle" : D,
            S = e.size,
            q = void 0 === S ? 48 : S,
            W = (0, h.Z)(e, g),
            H = i,
            I = { role: a, type: s, disabled: y, onClick: E },
            R = { href: j, target: z };
          return r.createElement(
            H,
            (0, f.Z)(
              {
                className: u()(
                  "ui-button",
                  n,
                  O({ shape: N, size: q, variant: Z, theme: _ }).toString()
                ),
                tabIndex: d,
              },
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? b(Object(n), !0).forEach(function (t) {
                        (0, m.Z)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : b(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({}, "button" === i ? I : R),
              W
            ),
            t
          );
        },
        E = x;
      x.propTypes = {
        as: y().oneOf(["button", "a"]),
        size: y().oneOf([32, 48, 60]),
        shape: y().oneOf(["square", "rounded", "circle", "capsule"]),
      };
      var O = (0, a.iv)({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          borderWidth: 0,
          borderStyle: "solid",
          outline: "none",
          overflow: "hidden",
          transition: "all 0.25s ease 0s",
          userSelect: "none",
          cursor: "pointer",
          padding: 0,
          borderRadius: 0,
          "&:focus": { boxShadow: "0 0 0 3px white" },
          variants: {
            theme: {
              primary: { backgroundColor: "#0000ff" },
              transparent: { backgroundColor: "transparent" },
              yellow: { backgroundColor: "#ff0" },
            },
            shape: {
              rounded: { padding: "0 1em", borderRadius: "3px" },
              circle: { borderRadius: "100%" },
            },
            size: {
              32: { minHeight: "32px" },
              48: { minHeight: "48px" },
              60: { minHeight: "60px" },
            },
          },
          compoundVariants: [
            { shape: "circle", size: 32, css: { minWidth: "32px" } },
            { shape: "circle", size: 48, css: { minWidth: "48px" } },
            { shape: "circle", size: 60, css: { minWidth: "60px" } },
          ],
        }),
        w = n(581),
        j = function (e) {
          var t = e.children,
            n = e.close;
          return r.createElement(
            "div",
            {
              className: u()("ui-dialog-background", z().toString()),
              onClick: n,
            },
            t
          );
        },
        k = j;
      j.propTypes = { close: y().func.isRequired };
      var z = (0, a.iv)({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          zIndex: 1e4,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: " 100%",
        }),
        P = ["children", "className", "style", "size", "close"];
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                (0, m.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Z(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var _ = function (e) {
          var t = e.children,
            n = e.className,
            o = e.style,
            i = void 0 === o ? {} : o,
            c = e.size,
            a = void 0 === c ? "md" : c,
            s = e.close,
            p = (0, h.Z)(e, P),
            d = (0, l.q_)({
              from: { opacity: 0, transform: "translateY(+70px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: l.vc.stiff,
            });
          return r.createElement(
            w.ZP,
            { returnFocus: !0 },
            r.createElement(
              k,
              { close: s },
              r.createElement(
                l.q.div,
                (0, f.Z)(
                  {
                    tabIndex: "-1",
                    style: C(C({}, i), d),
                    className: u()("ui-dialog", n, N({ size: a }).toString()),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    onKeyDown: function (e) {
                      "Escape" === e.key && (e.preventDefault(), s());
                    },
                  },
                  p
                ),
                t
              )
            )
          );
        },
        D = _;
      _.propTypes = { close: y().func };
      var N = (0, a.iv)({
          position: "relative",
          width: "100%",
          maxWidth: " 720px",
          maxHeight: "calc(100vh - 140px)",
          padding: "0 30px",
          background: "transparent",
          overflowY: "auto",
          overflowX: "hidden",
          "&:focus": { outline: "none" },
          "&::-webkit-scrollbar": {
            display: "none",
            width: 0,
            background: "transparent",
          },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          variants: { size: { lg: { maxWidth: "1040px" } } },
        }),
        S = n(522),
        q = n(790),
        W = function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 12,
              t = "",
              n = "abcdefghijklmnopqrstuvwxyz0123456789",
              r = 0;
            r < e;
            r++
          )
            t += n.charAt(Math.floor(Math.random() * n.length));
          return t;
        };
      function H(e) {
        var t = (function (e, t) {
          if ("object" !== (0, S.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== (0, S.Z)(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" === (0, S.Z)(t) ? t : String(t);
      }
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                (0, m.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var M = (0, r.createContext)(),
        T = {},
        B = function (e, t) {
          switch (t.type) {
            case "open":
              return R(
                R({}, e),
                {},
                (0, m.Z)({}, t.payload.id, R({}, t.payload.props))
              );
            case "close":
              var n = R({}, e),
                r = t.payload.id;
              return n[r], R({}, (0, h.Z)(n, [r].map(H)));
            case "clear":
              return T;
            default:
              return e;
          }
        },
        A = function (e) {
          var t = e.children,
            n = (0, r.useReducer)(B, T),
            o = (0, q.Z)(n, 2),
            i = o[0],
            c = o[1],
            a = (0, r.useMemo)(
              function () {
                if (Object.keys(i).length > 0)
                  return Object.entries(i).map(function (e) {
                    var t = (0, q.Z)(e, 2),
                      n = t[0],
                      o = t[1],
                      i = (void 0 === o ? {} : o).Component;
                    if (!(0, r.isValidElement)(i)) return null;
                    var a = {
                      key: n,
                      close: function () {
                        return c({ type: "close", payload: { id: n } });
                      },
                    };
                    return r.cloneElement(i, R({}, a));
                  });
              },
              [i]
            );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              M.Provider,
              {
                value: {
                  state: i,
                  open: function (e) {
                    var t,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = n.id;
                    return (
                      (r = null !== (t = r) && void 0 !== t ? t : W()),
                      c({
                        type: "open",
                        payload: { id: r, props: { Component: e } },
                      }),
                      {
                        id: r,
                        close: function () {
                          return c({ type: "close", payload: { id: r } });
                        },
                      }
                    );
                  },
                  close: function (e) {
                    return c({ type: "close", payload: { id: e } });
                  },
                  clear: function () {
                    return c({ type: "clear" });
                  },
                },
              },
              t
            ),
            a || null,
            Boolean(a) ? r.createElement(p, null) : null
          );
        },
        F = function (e) {
          var t = (0, r.useContext)(M);
          if (!t)
            throw new Error(
              "Must be rendered within the DialogProvider component. Error occurred in the ".concat(
                e,
                " component."
              )
            );
          return t;
        },
        Y = n(249),
        X = n(371),
        V = n(753),
        K = n(754),
        G = n(987),
        J = n(58);
      var L = (function (e) {
          (0, K.Z)(i, e);
          var t,
            n,
            o =
              ((t = i),
              (n = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  r = (0, J.Z)(t);
                if (n) {
                  var o = (0, J.Z)(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return (0, G.Z)(this, e);
              });
          function i() {
            var e;
            (0, Y.Z)(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              (e = o.call.apply(o, [this].concat(n))),
              (0, m.Z)((0, V.Z)(e), "state", { hasError: !1 }),
              e
            );
          }
          return (
            (0, X.Z)(
              i,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.log(e, t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.state.hasError,
                      t = this.props.children;
                    return e
                      ? r.createElement(
                          "section",
                          { className: Q() },
                          r.createElement("span", null, "something wrong.")
                        )
                      : t;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function () {
                    return { hasError: !0 };
                  },
                },
              ]
            ),
            i
          );
        })(r.Component),
        Q = (0, a.iv)({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }),
        U = (0, a.iv)({
          display: "block",
          variants: {
            size: {
              4: {
                width: "4px",
                height: "4px",
                minWidth: "4px",
                minHeight: "4px",
              },
              8: {
                width: "8px",
                height: "8px",
                minWidth: "8px",
                minHeight: "8px",
              },
              16: {
                width: "16px",
                height: "16px",
                minWidth: "16px",
                minHeight: "16px",
              },
              32: {
                width: "32px",
                height: "32px",
                minWidth: "32px",
                minHeight: "32px",
              },
            },
          },
        }),
        $ = function (e) {
          var t = e.size,
            n = void 0 === t ? 8 : t;
          return r.createElement("span", {
            className: u()("ui-spacer", U({ size: n }).toString()),
          });
        },
        ee = $;
      $.propTypes = {
        size: y().oneOf([4, 8, 16, 32]),
        axis: y().oneOf(["vertical", "horizontal"]),
      };
      var te = function (e, t) {
          return [e - window.innerWidth / 2, t - window.innerHeight / 2];
        },
        ne = function (e, t) {
          return "translate3d(".concat(e / 10, "px,").concat(t / 10, "px,0)");
        },
        re = function (e, t) {
          return "translate3d(".concat(e / 3.5, "px,").concat(t / 3.5, "px,0)");
        },
        oe = function () {
          var e = (0, l.q_)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            t = (0, q.Z)(e, 2),
            n = t[0],
            o = t[1];
          return r.createElement(
            "div",
            {
              id: "bio",
              onMouseMove: function (e) {
                var t = e.clientX,
                  n = e.clientY;
                return o({ xy: te(t, n) });
              },
            },
            r.createElement(
              "div",
              { className: "bio__header" },
              r.createElement(
                l.q.h1,
                { style: { transform: n.xy.interpolate(ne) } },
                " ",
                r.createElement("mark", null, "front-end developer"),
                " & graphic designer"
              )
            ),
            r.createElement(
              "div",
              { className: "bio__main" },
              r.createElement(
                E,
                {
                  as: "a",
                  size: 32,
                  shape: "rounded",
                  theme: "yellow",
                  href: "mailto:me@eoghan.io",
                },
                "me@eoghan.io"
              ),
              r.createElement(ee, { size: 32 }),
              r.createElement(
                l.q.ul,
                { id: "skills", style: { transform: n.xy.interpolate(re) } },
                ie.map(function (e, t) {
                  return r.createElement("li", { key: t }, e.name || "");
                })
              )
            ),
            r.createElement(
              "div",
              { className: "bio__footer" },
              r.createElement(E, {
                as: "a",
                size: 60,
                theme: "transparent",
                href: "https://github.com/eoghanmccarthy",
                target: "_blank",
              })
            )
          );
        },
        ie = [
          { name: "javascript", category: "frontend" },
          { name: "react", category: "frontend" },
          { name: "ux", category: "frontend" },
          { name: "design systems", category: "frontend" },
          { name: "css", category: "frontend" },
        ],
        ce = n(112),
        ae = function () {
          var e = (0, ce.T2)(),
            t = (0, q.Z)(e, 2),
            n = t[0],
            o = t[1],
            i = o.delta,
            c = o.down,
            a = (0, l.q_)({
              x: c ? i[0] : 0,
              y: c ? i[1] : 0,
              fill: c ? "#0000ff" : "#0000b3",
              size: c ? 1.12 : 1,
              immediate: function (e) {
                return c && ("x" === e || "y" === e);
              },
            }),
            s = a.x,
            u = a.y,
            p = a.fill,
            d = a.size;
          return r.createElement(
            l.q.svg,
            (0, f.Z)({}, n(), {
              style: {
                transform: (0, l.sX)([s, u, d], function (e, t, n) {
                  return "translate3d("
                    .concat(e, "px,")
                    .concat(t, "px,0) scale(")
                    .concat(n, ")");
                }),
              },
              viewBox: "0 0 300 285",
            }),
            r.createElement(l.q.path, {
              d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
              fill: p,
            })
          );
        },
        le = function () {
          var e = F();
          return r.createElement(
            "main",
            { className: "me__page page__index" },
            r.createElement(ae, null),
            r.createElement(
              E,
              {
                size: 60,
                shape: "circle",
                className: "toggle-bio",
                onClick: function () {
                  return e.open(
                    r.createElement(
                      D,
                      { id: "bio-dialog" },
                      r.createElement(oe, null)
                    )
                  );
                },
              },
              r.createElement("span", null),
              r.createElement("span", null)
            )
          );
        },
        se = function () {
          var e = F(),
            t = (0, i.TH)();
          return (
            (0, r.useEffect)(
              function () {
                t && e.clear();
              },
              [t]
            ),
            r.createElement(
              "div",
              { className: "me" },
              r.createElement("header", { className: "me__header" }),
              r.createElement(
                i.rs,
                null,
                r.createElement(i.AW, {
                  exact: !0,
                  path: "/",
                  render: function () {
                    return r.createElement(le, null);
                  },
                }),
                r.createElement(i.AW, {
                  render: function () {
                    return r.createElement(le, null);
                  },
                })
              ),
              r.createElement("footer", { className: "me__footer" })
            )
          );
        },
        ue = (0, c.Z)(),
        pe = document.getElementById("root");
      (0, o.render)(
        r.createElement(
          i.F0,
          { history: ue },
          r.createElement(
            L,
            null,
            r.createElement(A, null, r.createElement(se, null))
          )
        ),
        pe
      );
    },
  },
  function (e) {
    e.O(0, [216], function () {
      return 798, e((e.s = 798));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.ee08818d41350cd5190b.bundle.js.map
