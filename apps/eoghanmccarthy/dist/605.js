"use strict";
(self.webpackChunkeoghanmccarthy = self.webpackChunkeoghanmccarthy || []).push([
  [605],
  {
    7605: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return v;
          },
        });
      var r = t(2784),
        c = t(377),
        o = t(3213),
        i = t(2198),
        a = t(8319),
        u = t(2867),
        s = t(7896),
        l = t(2212),
        f = t(4620),
        m = function (e, n) {
          return [
            -(n - window.innerHeight / 2) / 20,
            (e - window.innerWidth / 2) / 20,
            1.1,
          ];
        },
        d = function (e, n, t) {
          return "perspective(600px) rotateX("
            .concat(e, "deg) rotateY(")
            .concat(n, "deg) scale(")
            .concat(t, ")");
        },
        h = function (e) {
          var n = (0, s.Z)({}, e),
            t = (0, l.q_)(function () {
              return {
                xys: [0, 0, 1],
                config: { mass: 5, tension: 350, friction: 40 },
              };
            }),
            c = (0, u.Z)(t, 2),
            o = c[0],
            i = c[1];
          return r.createElement(
            f.Z,
            (0, s.Z)(
              {
                onMouseMove: function (e) {
                  var n = e.clientX,
                    t = e.clientY;
                  return i({ xys: m(n, t) });
                },
                onMouseLeave: function () {
                  return i({ xys: [0, 0, 1] });
                },
                style: { transform: o.xys.interpolate(d) },
              },
              n
            )
          );
        },
        p = t(9501),
        v = function () {
          var e = (0, c.k6)(),
            n = (0, i._)();
          return r.createElement(
            "div",
            { className: "me index" },
            r.createElement(
              a.or,
              null,
              r.createElement(h, {
                onClick: function () {
                  return e.push("/");
                },
              }),
              r.createElement(o.LZ, { size: "md" }),
              r.createElement(p.UY, {
                onClick: function () {
                  return n.open("navigation");
                },
              })
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=605.js.map
