"use strict";
(self.webpackChunkeoghanmccarthy_com =
  self.webpackChunkeoghanmccarthy_com || []).push([
  [609],
  {
    6609: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var r = t(2784),
        c = t(377),
        o = t(2673),
        u = t(2867),
        a = t(7896),
        i = t(2212),
        s = t(3564),
        l = function (e, n) {
          return [
            -(n - window.innerHeight / 2) / 20,
            (e - window.innerWidth / 2) / 20,
            1.1,
          ];
        },
        f = function (e, n, t) {
          return "perspective(600px) rotateX("
            .concat(e, "deg) rotateY(")
            .concat(n, "deg) scale(")
            .concat(t, ")");
        },
        m = function (e) {
          var n = (0, a.Z)({}, e),
            t = (0, i.q_)(function () {
              return {
                xys: [0, 0, 1],
                config: { mass: 5, tension: 350, friction: 40 },
              };
            }),
            c = (0, u.Z)(t, 2),
            o = c[0],
            m = c[1];
          return r.createElement(
            s.Z,
            (0, a.Z)(
              {
                onMouseMove: function (e) {
                  var n = e.clientX,
                    t = e.clientY;
                  return m({ xys: l(n, t) });
                },
                onMouseLeave: function () {
                  return m({ xys: [0, 0, 1] });
                },
                style: { transform: o.xys.interpolate(f) },
              },
              n
            )
          );
        },
        h = t(8700),
        d = function () {
          var e = (0, c.k6)();
          return r.createElement(
            "div",
            { className: "me index" },
            r.createElement(
              o.or,
              null,
              r.createElement(m, {
                onClick: function () {
                  return e.push("/");
                },
              }),
              r.createElement(h.Z, null)
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=609.js.map
