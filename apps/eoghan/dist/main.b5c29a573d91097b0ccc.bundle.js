"use strict";
(self.webpackChunkeoghan = self.webpackChunkeoghan || []).push([
  [179],
  {
    798: function (e, t, n) {
      var r = n(784),
        o = n(316),
        i = n(217),
        a = n(866),
        c = n(212),
        l = n(779),
        s = n.n(l),
        u = function () {
          var e = (0, c.q_)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 100 },
          });
          return r.createElement(c.q.div, {
            style: e,
            className: s()("ui-blanket", p().toString()),
          });
        },
        p = (0, a.iv)({
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100%",
          height: " 100%",
          background: "rgba(0, 0, 0, 0.22)",
        }),
        d = n(896),
        f = n(666),
        m = n(740),
        h = n(980),
        v = n.n(h),
        y = [
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
      function g(e, t) {
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
      var b = function (e) {
          var t = e.children,
            n = e.className,
            o = e.as,
            i = void 0 === o ? "button" : o,
            a = e.role,
            c = void 0 === a ? "button" : a,
            l = e.type,
            u = void 0 === l ? "button" : l,
            p = e.tabIndex,
            h = void 0 === p ? "0" : p,
            v = e.disabled,
            b = void 0 !== v && v,
            x = e.onClick,
            O =
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
            W = (0, m.Z)(e, y),
            H = i,
            I = { role: c, type: u, disabled: b, onClick: O },
            R = { href: j, target: z };
          return r.createElement(
            H,
            (0, d.Z)(
              {
                className: s()(
                  "ui-button",
                  n,
                  E({ shape: N, size: q, variant: Z, theme: _ }).toString()
                ),
                tabIndex: h,
              },
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? g(Object(n), !0).forEach(function (t) {
                        (0, f.Z)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : g(Object(n)).forEach(function (t) {
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
        x = b;
      b.propTypes = {
        as: v().oneOf(["button", "a"]),
        size: v().oneOf([32, 48, 60]),
        shape: v().oneOf(["square", "rounded", "circle", "capsule"]),
      };
      var E = (0, a.iv)({
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
        O = n(295),
        w = function (e) {
          var t = e.children,
            n = e.close;
          return r.createElement(
            "div",
            {
              className: s()("ui-dialog-background", k().toString()),
              onClick: n,
            },
            t
          );
        },
        j = w;
      w.propTypes = { close: v().func.isRequired };
      var k = (0, a.iv)({
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
        z = ["children", "className", "style", "size", "close"];
      function P(e, t) {
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
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                (0, f.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = function (e) {
          var t = e.children,
            n = e.className,
            o = e.style,
            i = void 0 === o ? {} : o,
            a = e.size,
            l = void 0 === a ? "md" : a,
            u = e.close,
            p = (0, m.Z)(e, z),
            f = (0, c.q_)({
              from: { opacity: 0, transform: "translateY(+70px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: c.vc.stiff,
            });
          return r.createElement(
            O.ZP,
            { returnFocus: !0 },
            r.createElement(
              j,
              { close: u },
              r.createElement(
                c.q.div,
                (0, d.Z)(
                  {
                    tabIndex: "-1",
                    style: Z(Z({}, i), f),
                    className: s()("ui-dialog", n, D({ size: l }).toString()),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    onKeyDown: function (e) {
                      "Escape" === e.key && (e.preventDefault(), u());
                    },
                  },
                  p
                ),
                t
              )
            )
          );
        },
        _ = C;
      C.propTypes = { close: v().func };
      var D = (0, a.iv)({
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
        N = n(522),
        S = n(790),
        q = function () {
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
      function W(e) {
        var t = (function (e, t) {
          if ("object" !== (0, N.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== (0, N.Z)(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" === (0, N.Z)(t) ? t : String(t);
      }
      function H(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                (0, f.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var R = (0, r.createContext)(),
        M = {},
        T = function (e, t) {
          switch (t.type) {
            case "open":
              return I(
                I({}, e),
                {},
                (0, f.Z)({}, t.payload.id, I({}, t.payload.props))
              );
            case "close":
              var n = I({}, e),
                r = t.payload.id;
              return n[r], I({}, (0, m.Z)(n, [r].map(W)));
            case "clear":
              return M;
            default:
              return e;
          }
        },
        B = function (e) {
          var t = e.children,
            n = (0, r.useReducer)(T, M),
            o = (0, S.Z)(n, 2),
            i = o[0],
            a = o[1],
            c = (0, r.useMemo)(
              function () {
                if (Object.keys(i).length > 0)
                  return Object.entries(i).map(function (e) {
                    var t = (0, S.Z)(e, 2),
                      n = t[0],
                      o = t[1],
                      i = (void 0 === o ? {} : o).Component;
                    if (!(0, r.isValidElement)(i)) return null;
                    var c = {
                      key: n,
                      close: function () {
                        return a({ type: "close", payload: { id: n } });
                      },
                    };
                    return r.cloneElement(i, I({}, c));
                  });
              },
              [i]
            );
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              R.Provider,
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
                      (r = null !== (t = r) && void 0 !== t ? t : q()),
                      a({
                        type: "open",
                        payload: { id: r, props: { Component: e } },
                      }),
                      {
                        id: r,
                        close: function () {
                          return a({ type: "close", payload: { id: r } });
                        },
                      }
                    );
                  },
                  close: function (e) {
                    return a({ type: "close", payload: { id: e } });
                  },
                  clear: function () {
                    return a({ type: "clear" });
                  },
                },
              },
              t
            ),
            c || null,
            Boolean(c) ? r.createElement(u, null) : null
          );
        },
        A = function (e) {
          var t = (0, r.useContext)(R);
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
        F = n(371),
        V = n(753),
        X = n(754),
        K = n(987),
        G = n(58);
      var J = (function (e) {
          (0, X.Z)(i, e);
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
                  r = (0, G.Z)(t);
                if (n) {
                  var o = (0, G.Z)(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return (0, K.Z)(this, e);
              });
          function i() {
            var e;
            (0, Y.Z)(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              (e = o.call.apply(o, [this].concat(n))),
              (0, f.Z)((0, V.Z)(e), "state", { hasError: !1 }),
              e
            );
          }
          return (
            (0, F.Z)(
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
                          { className: L() },
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
        L = (0, a.iv)({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }),
        Q = (0, a.iv)({
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
        U = function (e) {
          var t = e.size,
            n = void 0 === t ? 8 : t;
          return r.createElement("span", {
            className: s()("ui-spacer", Q({ size: n }).toString()),
          });
        },
        $ = U;
      U.propTypes = {
        size: v().oneOf([4, 8, 16, 32]),
        axis: v().oneOf(["vertical", "horizontal"]),
      };
      var ee = n(782),
        te = function (e, t) {
          return [e - window.innerWidth / 2, t - window.innerHeight / 2];
        },
        ne = function (e, t) {
          return "translate3d(".concat(e / 10, "px,").concat(t / 10, "px,0)");
        },
        re = function (e, t) {
          return "translate3d(".concat(e / 3.5, "px,").concat(t / 3.5, "px,0)");
        },
        oe = function () {
          var e = (0, c.q_)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            t = (0, S.Z)(e, 2),
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
                c.q.h1,
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
                x,
                {
                  as: "a",
                  size: 32,
                  shape: "rounded",
                  theme: "yellow",
                  href: "mailto:me@eoghan.io",
                },
                "me@eoghan.io"
              ),
              r.createElement($, { size: 32 }),
              r.createElement(
                c.q.ul,
                { id: "skills", style: { transform: n.xy.interpolate(re) } },
                ie.map(function (e, t) {
                  return r.createElement("li", { key: t }, e.name || "");
                })
              )
            ),
            r.createElement(
              "div",
              { className: "bio__footer" },
              r.createElement(x, {
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
        ae = n(112),
        ce = function () {
          var e = (0, ae.T2)(),
            t = (0, S.Z)(e, 2),
            n = t[0],
            o = t[1],
            i = o.delta,
            a = o.down,
            l = (0, c.q_)({
              x: a ? i[0] : 0,
              y: a ? i[1] : 0,
              fill: a ? "#0000ff" : "#0000b3",
              size: a ? 1.12 : 1,
              immediate: function (e) {
                return a && ("x" === e || "y" === e);
              },
            }),
            s = l.x,
            u = l.y,
            p = l.fill,
            f = l.size;
          return r.createElement(
            c.q.svg,
            (0, d.Z)({}, n(), {
              style: {
                transform: (0, c.sX)([s, u, f], function (e, t, n) {
                  return "translate3d("
                    .concat(e, "px,")
                    .concat(t, "px,0) scale(")
                    .concat(n, ")");
                }),
              },
              viewBox: "0 0 300 285",
            }),
            r.createElement(c.q.path, {
              d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
              fill: p,
            })
          );
        },
        le = function () {
          var e = A();
          return r.createElement(
            "main",
            { className: "me__page page__index" },
            r.createElement(ce, null),
            r.createElement(
              x,
              {
                size: 60,
                shape: "circle",
                className: "toggle-bio",
                onClick: function () {
                  return e.open(
                    r.createElement(
                      _,
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
          var e = A(),
            t = (0, ee.TH)();
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
                ee.Z5,
                null,
                r.createElement(ee.AW, {
                  exact: !0,
                  path: "/",
                  element: r.createElement(le, null),
                }),
                r.createElement(ee.AW, { element: r.createElement(le, null) })
              ),
              r.createElement("footer", { className: "me__footer" })
            )
          );
        },
        ue = document.getElementById("root");
      (0, o.render)(
        r.createElement(
          i.VK,
          null,
          r.createElement(
            J,
            null,
            r.createElement(B, null, r.createElement(se, null))
          )
        ),
        ue
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
//# sourceMappingURL=main.b5c29a573d91097b0ccc.bundle.js.map
