"use strict";
(self.webpackChunkeoghanmccarthy = self.webpackChunkeoghanmccarthy || []).push([
  [605],
  {
    7605: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return p;
          },
        });
      var r = t(2784),
        c = t(2577),
        o = t(8319),
        a = t(2867),
        u = t(7896),
        i = t(2212),
        l = t(4620),
        s = function (e, n) {
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
          var n = (0, u.Z)({}, e),
            t = (0, i.q_)(function () {
              return {
                xys: [0, 0, 1],
                config: { mass: 5, tension: 350, friction: 40 },
              };
            }),
            c = (0, a.Z)(t, 2),
            o = c[0],
            m = c[1];
          return r.createElement(
            l.Z,
            (0, u.Z)(
              {
                onMouseMove: function (e) {
                  var n = e.clientX,
                    t = e.clientY;
                  return m({ xys: s(n, t) });
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
        d = t(9501),
        h = t(7600),
        p = function () {
          var e = (0, c._7)();
          return r.createElement(
            "div",
            { className: "me index" },
            r.createElement(
              o.or,
              null,
              r.createElement(m, null),
              r.createElement(c.LZ, null),
              r.createElement(d.UY, {
                onClick: function () {
                  return e.open(r.createElement(h.Z, null));
                },
              })
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=605.512578ae98815e45bcf1.bundle.js.map
