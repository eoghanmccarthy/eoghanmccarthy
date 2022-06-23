"use strict";
(self.webpackChunkeoghan = self.webpackChunkeoghan || []).push([
  [179],
  {
    407: function (e, n, t) {
      var c = {};
      t.r(c),
        t.d(c, {
          z: function () {
            return E;
          },
        });
      var r = t(784),
        l = t(316),
        a = t(171),
        o = t(617),
        i = t(790),
        s = t(896),
        m = t(740),
        u = t(459),
        d = t(779),
        f = t.n(d),
        h = [
          "children",
          "className",
          "role",
          "type",
          "tabIndex",
          "isDisabled",
          "onClick",
        ],
        E = forwardRef(function (e, n) {
          var t = e.children,
            c = e.className,
            r = e.role,
            l = void 0 === r ? "button" : r,
            a = e.type,
            o = void 0 === a ? "button" : a,
            i = e.tabIndex,
            d = void 0 === i ? "0" : i,
            E = e.isDisabled,
            p = void 0 !== E && E,
            g = e.onClick,
            v =
              void 0 === g
                ? function () {
                    return null;
                  }
                : g,
            y = (0, m.Z)(e, h);
          return u.createElement(
            "button",
            (0, s.Z)(
              {
                ref: n,
                className: f()("ui-button", { disabled: p }, c),
                role: l,
                type: o,
                tabIndex: d,
                disabled: p,
                onClick: v,
              },
              y
            ),
            t
          );
        }),
        p = t(212),
        g = function (e, n) {
          return [e - window.innerWidth / 2, n - window.innerHeight / 2];
        },
        v = function (e, n) {
          return "translate3d(".concat(e / 10, "px,").concat(n / 10, "px,0)");
        },
        y = function (e, n) {
          return "translate3d(".concat(e / 3.5, "px,").concat(n / 3.5, "px,0)");
        },
        b = function () {
          var e = (0, p.q_)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            n = (0, i.Z)(e, 2),
            t = n[0],
            c = n[1];
          return r.createElement(
            "div",
            {
              id: "bio",
              onMouseMove: function (e) {
                var n = e.clientX,
                  t = e.clientY;
                return c({ xy: g(n, t) });
              },
            },
            r.createElement(
              "div",
              { className: "bio__header" },
              r.createElement(
                p.q.h1,
                { style: { transform: t.xy.interpolate(v) } },
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
                  size: "xs",
                  shape: "rounded",
                  href: "mailto:me@eoghan.io",
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                },
                "me@eoghan.io"
              ),
              r.createElement(
                p.q.ul,
                { id: "skills", style: { transform: t.xy.interpolate(y) } },
                x.map(function (e, n) {
                  return r.createElement("li", { key: n }, e.name || "");
                })
              )
            ),
            r.createElement(
              "div",
              { className: "bio__footer" },
              r.createElement(E, {
                size: "xl",
                href: "https://github.com/eoghanmccarthy",
                target: "_blank",
                onClick: function (e) {
                  return e.stopPropagation();
                },
              })
            )
          );
        },
        x = [
          { name: "javascript", category: "frontend" },
          { name: "react", category: "frontend" },
          { name: "react-native", category: "frontend" },
          { name: "ux", category: "frontend" },
          { name: "design systems", category: "frontend" },
          { name: "css", category: "frontend" },
        ],
        _ = t(112),
        k = function () {
          var e = (0, _.T2)(),
            n = (0, i.Z)(e, 2),
            t = n[0],
            c = n[1],
            l = c.delta,
            a = c.down,
            o = (0, p.q_)({
              x: a ? l[0] : 0,
              y: a ? l[1] : 0,
              fill: a ? "#0000ff" : "#0000b3",
              size: a ? 1.12 : 1,
              immediate: function (e) {
                return a && ("x" === e || "y" === e);
              },
            }),
            m = o.x,
            u = o.y,
            d = o.fill,
            f = o.size;
          return r.createElement(
            p.q.svg,
            (0, s.Z)({}, t(), {
              style: {
                transform: (0, p.sX)([m, u, f], function (e, n, t) {
                  return "translate3d("
                    .concat(e, "px,")
                    .concat(n, "px,0) scale(")
                    .concat(t, ")");
                }),
              },
              viewBox: "0 0 300 285",
            }),
            r.createElement(p.q.path, {
              d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
              fill: d,
            })
          );
        },
        z = function () {
          var e = (0, r.useState)(!1),
            n = (0, i.Z)(e, 2),
            t = n[0],
            l = n[1],
            a = function () {
              return l(!1);
            };
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              c.Dialog,
              { id: "bio-dialog", isVisible: t, closeDialog: a, onClick: a },
              r.createElement(b, null)
            ),
            r.createElement(
              "main",
              { className: "me__page page__index" },
              r.createElement(k, null),
              r.createElement(
                E,
                {
                  size: "xl",
                  shape: "circle",
                  className: "toggle-bio",
                  onClick: function () {
                    return l(function (e) {
                      return !e;
                    });
                  },
                },
                r.createElement("span", null),
                r.createElement("span", null)
              )
            )
          );
        },
        N = function () {
          return r.createElement(
            "div",
            { className: "me" },
            r.createElement("header", { className: "me__header" }),
            r.createElement(
              a.rs,
              null,
              r.createElement(a.AW, {
                exact: !0,
                path: "/",
                render: function () {
                  return r.createElement(z, null);
                },
              }),
              r.createElement(a.AW, {
                render: function () {
                  return r.createElement(z, null);
                },
              })
            ),
            r.createElement("footer", { className: "me__footer" })
          );
        },
        w = (0, o.Z)(),
        C = document.getElementById("root");
      (0, l.render)(
        r.createElement(a.F0, { history: w }, r.createElement(N, null)),
        C
      );
    },
  },
  function (e) {
    e.O(0, [216], function () {
      return 407, e((e.s = 407));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.4b347f5ee11e32ac3b12.bundle.js.map
