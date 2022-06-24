"use strict";
(self.webpackChunkeoghan = self.webpackChunkeoghan || []).push([
  [179],
  {
    337: function (e, n, t) {
      var r = t(784),
        a = t(316),
        i = t(1),
        l = t(617),
        c = t(790),
        o = t(866),
        s = t(779),
        d = t.n(s),
        m =
          ((0, o.iv)({
            position: "fixed",
            zIndex: 9999,
            top: 0,
            left: 0,
            width: "100%",
            height: " 100%",
            background: "rgba(0, 0, 0, 0.22)",
          }),
          t(896)),
        u = t(740),
        p = t(980),
        f = t.n(p),
        h = [
          "children",
          "className",
          "role",
          "type",
          "tabIndex",
          "disabled",
          "onClick",
          "variant",
          "shape",
          "size",
        ],
        g = function (e) {
          var n = e.children,
            t = e.className,
            a = e.role,
            i = void 0 === a ? "button" : a,
            l = e.type,
            c = void 0 === l ? "button" : l,
            o = e.tabIndex,
            s = void 0 === o ? "0" : o,
            p = e.disabled,
            f = void 0 !== p && p,
            g = e.onClick,
            v =
              void 0 === g
                ? function () {
                    return null;
                  }
                : g,
            y = e.variant,
            b = void 0 === y ? "primary" : y,
            E = e.shape,
            k = void 0 === E ? "circle" : E,
            z = e.size,
            w = void 0 === z ? "lg" : z,
            _ = (0, u.Z)(e, h);
          return r.createElement(
            "button",
            (0, m.Z)(
              {
                className: d()(
                  "ui-button",
                  t,
                  x({ shape: k, size: w, variant: b }).toString()
                ),
                role: i,
                type: c,
                tabIndex: s,
                disabled: f,
                onClick: v,
              },
              _
            ),
            n
          );
        },
        v = g;
      g.propTypes = {
        size: f().oneOf(["sm", "md", "lg"]),
        shape: f().oneOf(["square", "rounded", "circle", "capsule"]),
      };
      var x = (0, o.iv)({
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
          variants: {
            variant: { primary: { backgroundColor: "#0000ff" } },
            shape: {
              rounded: { borderRadius: "4px" },
              circle: { borderRadius: "100%" },
            },
            size: { lg: { minWidth: "48px", minHeight: "48px" } },
          },
        }),
        y = t(581),
        b = t(212),
        E = function (e) {
          var n = e.children,
            t = e.close;
          return r.createElement(
            "div",
            {
              className: d()("ui-dialog-background", z().toString()),
              onClick: t,
            },
            n
          );
        },
        k = E;
      E.propTypes = { close: f().func.isRequired };
      var z = (0, o.iv)({
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
        w = ["children", "className", "size", "close"],
        _ = function (e) {
          var n = e.children,
            t = e.className,
            a = e.size,
            i = void 0 === a ? "md" : a,
            l = e.close,
            c = (0, u.Z)(e, w),
            o = (0, b.q_)({
              from: { opacity: 0, transform: "translateY(+70px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: b.vc.stiff,
            });
          return r.createElement(
            y.ZP,
            { returnFocus: !0 },
            r.createElement(
              k,
              { close: l },
              r.createElement(
                b.q.div,
                (0, m.Z)(
                  {
                    tabIndex: "-1",
                    style: o,
                    className: d()("ui-dialog", t, N({ size: i }).toString()),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    onKeyDown: function (e) {
                      "Escape" === e.key && (e.preventDefault(), l());
                    },
                  },
                  c
                ),
                n
              )
            )
          );
        },
        C = _;
      _.propTypes = { close: f().func.isRequired };
      var N = (0, o.iv)({
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
      });
      t(249), t(371), t(753), t(754), t(657), t(58), t(666);
      r.Component;
      (0, o.iv)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }),
        (0, o.iv)({
          display: "block",
          variants: {
            size: {
              sm: {
                width: "4px",
                height: "4px",
                minWidth: "4px",
                minHeight: "4px",
              },
              md: {
                width: "8px",
                height: "8px",
                minWidth: "8px",
                minHeight: "8px",
              },
            },
          },
        });
      f().oneOf(["xs", "sm", "md", "lg", "xl"]),
        f().oneOf(["vertical", "horizontal"]);
      var q = function (e, n) {
          return [e - window.innerWidth / 2, n - window.innerHeight / 2];
        },
        I = function (e, n) {
          return "translate3d(".concat(e / 10, "px,").concat(n / 10, "px,0)");
        },
        Z = function (e, n) {
          return "translate3d(".concat(e / 3.5, "px,").concat(n / 3.5, "px,0)");
        },
        W = function () {
          var e = (0, b.q_)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            n = (0, c.Z)(e, 2),
            t = n[0],
            a = n[1];
          return r.createElement(
            "div",
            {
              id: "bio",
              onMouseMove: function (e) {
                var n = e.clientX,
                  t = e.clientY;
                return a({ xy: q(n, t) });
              },
            },
            r.createElement(
              "div",
              { className: "bio__header" },
              r.createElement(
                b.q.h1,
                { style: { transform: t.xy.interpolate(I) } },
                " ",
                r.createElement("mark", null, "front-end developer"),
                " & graphic designer"
              )
            ),
            r.createElement(
              "div",
              { className: "bio__main" },
              r.createElement(
                v,
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
                b.q.ul,
                { id: "skills", style: { transform: t.xy.interpolate(Z) } },
                O.map(function (e, n) {
                  return r.createElement("li", { key: n }, e.name || "");
                })
              )
            ),
            r.createElement(
              "div",
              { className: "bio__footer" },
              r.createElement(v, {
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
        O = [
          { name: "javascript", category: "frontend" },
          { name: "react", category: "frontend" },
          { name: "react-native", category: "frontend" },
          { name: "ux", category: "frontend" },
          { name: "design systems", category: "frontend" },
          { name: "css", category: "frontend" },
        ],
        S = t(112),
        D = function () {
          var e = (0, S.T2)(),
            n = (0, c.Z)(e, 2),
            t = n[0],
            a = n[1],
            i = a.delta,
            l = a.down,
            o = (0, b.q_)({
              x: l ? i[0] : 0,
              y: l ? i[1] : 0,
              fill: l ? "#0000ff" : "#0000b3",
              size: l ? 1.12 : 1,
              immediate: function (e) {
                return l && ("x" === e || "y" === e);
              },
            }),
            s = o.x,
            d = o.y,
            u = o.fill,
            p = o.size;
          return r.createElement(
            b.q.svg,
            (0, m.Z)({}, t(), {
              style: {
                transform: (0, b.sX)([s, d, p], function (e, n, t) {
                  return "translate3d("
                    .concat(e, "px,")
                    .concat(n, "px,0) scale(")
                    .concat(t, ")");
                }),
              },
              viewBox: "0 0 300 285",
            }),
            r.createElement(b.q.path, {
              d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
              fill: u,
            })
          );
        },
        H = function () {
          var e = (0, r.useState)(!1),
            n = (0, c.Z)(e, 2),
            t = n[0],
            a = n[1],
            i = function () {
              return a(!1);
            };
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              C,
              { id: "bio-dialog", isVisible: t, closeDialog: i, onClick: i },
              r.createElement(W, null)
            ),
            r.createElement(
              "main",
              { className: "me__page page__index" },
              r.createElement(D, null),
              r.createElement(
                v,
                {
                  size: "xl",
                  shape: "circle",
                  className: "toggle-bio",
                  onClick: function () {
                    return a(function (e) {
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
        R = function () {
          return r.createElement(
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
                  return r.createElement(H, null);
                },
              }),
              r.createElement(i.AW, {
                render: function () {
                  return r.createElement(H, null);
                },
              })
            ),
            r.createElement("footer", { className: "me__footer" })
          );
        },
        j = (0, l.Z)(),
        P = document.getElementById("root");
      (0, a.render)(
        r.createElement(i.F0, { history: j }, r.createElement(R, null)),
        P
      );
    },
  },
  function (e) {
    e.O(0, [216], function () {
      return 337, e((e.s = 337));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.08e3c21fe90e6f88ad8c.bundle.js.map
