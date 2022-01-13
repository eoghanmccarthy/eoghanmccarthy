"use strict";
(self.webpackChunkeoghan = self.webpackChunkeoghan || []).push([
  [179],
  {
    388: function (e, n, t) {
      var c = t(784),
        r = t(316),
        a = t(171),
        l = t(617),
        o = t(790),
        i = t(130),
        m = t(212),
        s = function (e, n) {
          return [e - window.innerWidth / 2, n - window.innerHeight / 2];
        },
        u = function (e, n) {
          return "translate3d(".concat(e / 10, "px,").concat(n / 10, "px,0)");
        },
        f = function (e, n) {
          return "translate3d(".concat(e / 3.5, "px,").concat(n / 3.5, "px,0)");
        },
        d = function () {
          var e = (0, m.q_)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            n = (0, o.Z)(e, 2),
            t = n[0],
            r = n[1];
          return c.createElement(
            "div",
            {
              id: "bio",
              onMouseMove: function (e) {
                var n = e.clientX,
                  t = e.clientY;
                return r({ xy: s(n, t) });
              },
            },
            c.createElement(
              "div",
              { className: "bio__header" },
              c.createElement(
                m.q.h1,
                { style: { transform: t.xy.interpolate(u) } },
                " ",
                c.createElement("mark", null, "front-end developer"),
                " & graphic designer"
              )
            ),
            c.createElement(
              "div",
              { className: "bio__main" },
              c.createElement(
                i.Button,
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
              c.createElement(
                m.q.ul,
                { id: "skills", style: { transform: t.xy.interpolate(f) } },
                h.map(function (e, n) {
                  return c.createElement("li", { key: n }, e.name || "");
                })
              )
            ),
            c.createElement(
              "div",
              { className: "bio__footer" },
              c.createElement(i.Button, {
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
        h = [
          { name: "javascript", category: "frontend" },
          { name: "typescript", category: "frontend" },
          { name: "react", category: "frontend" },
          { name: "react-native", category: "frontend" },
          { name: "rx-js", category: "frontend" },
          { name: "ux", category: "frontend" },
          { name: "design systems", category: "frontend" },
          { name: "css", category: "frontend" },
        ],
        g = t(896),
        E = t(112),
        p = function () {
          var e = (0, E.T2)(),
            n = (0, o.Z)(e, 2),
            t = n[0],
            r = n[1],
            a = r.delta,
            l = r.down,
            i = (0, m.q_)({
              x: l ? a[0] : 0,
              y: l ? a[1] : 0,
              fill: l ? "#0000ff" : "#0000b3",
              size: l ? 1.12 : 1,
              immediate: function (e) {
                return l && ("x" === e || "y" === e);
              },
            }),
            s = i.x,
            u = i.y,
            f = i.fill,
            d = i.size;
          return c.createElement(
            m.q.svg,
            (0, g.Z)({}, t(), {
              style: {
                transform: (0, m.sX)([s, u, d], function (e, n, t) {
                  return "translate3d("
                    .concat(e, "px,")
                    .concat(n, "px,0) scale(")
                    .concat(t, ")");
                }),
              },
              viewBox: "0 0 300 285",
            }),
            c.createElement(m.q.path, {
              d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
              fill: f,
            })
          );
        },
        y = function () {
          var e = (0, c.useState)(!1),
            n = (0, o.Z)(e, 2),
            t = n[0],
            r = n[1],
            a = function () {
              return r(!1);
            };
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              i.Dialog,
              { id: "bio-dialog", isVisible: t, closeDialog: a, onClick: a },
              c.createElement(d, null)
            ),
            c.createElement(
              "main",
              { className: "me__page page__index" },
              c.createElement(p, null),
              c.createElement(
                i.Button,
                {
                  size: "xl",
                  shape: "circle",
                  className: "toggle-bio",
                  onClick: function () {
                    return r(function (e) {
                      return !e;
                    });
                  },
                },
                c.createElement("span", null),
                c.createElement("span", null)
              )
            )
          );
        },
        v = function () {
          return c.createElement(
            "div",
            { className: "me" },
            c.createElement("header", { className: "me__header" }),
            c.createElement(
              a.rs,
              null,
              c.createElement(a.AW, {
                exact: !0,
                path: "/",
                render: function () {
                  return c.createElement(y, null);
                },
              }),
              c.createElement(a.AW, {
                render: function () {
                  return c.createElement(y, null);
                },
              })
            ),
            c.createElement("footer", { className: "me__footer" })
          );
        },
        x = (0, l.Z)(),
        _ = document.getElementById("root");
      (0, r.render)(
        c.createElement(a.F0, { history: x }, c.createElement(v, null)),
        _
      );
    },
  },
  function (e) {
    e.O(0, [216], function () {
      return 388, e((e.s = 388));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.9639db3b42b7126c1f18.bundle.js.map
