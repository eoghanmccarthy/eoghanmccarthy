"use strict";
(self.webpackChunkeoghanmccarthy = self.webpackChunkeoghanmccarthy || []).push([
  [179],
  {
    7033: function (e, t, n) {
      n.d(t, {
        N: function () {
          return j;
        },
        Z: function () {
          return E;
        },
      });
      var r = n(7896),
        a = n(2867),
        o = n(2784),
        i = n(377),
        l = n(6522),
        c = n(9740),
        s = n(6666);
      function u(e) {
        var t = (function (e, t) {
          if ("object" !== (0, l.Z)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" !== (0, l.Z)(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" === (0, l.Z)(t) ? t : String(t);
      }
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var d = {},
        m = function (e, t) {
          switch (t.type) {
            case "open":
              return f(
                f({}, e),
                {},
                (0, s.Z)({}, t.payload.name, f({}, t.payload.props))
              );
            case "close":
              var n = f({}, e),
                r = t.payload.name;
              return n[r], f({}, (0, c.Z)(n, [r].map(u)));
            case "clear":
              return d;
            default:
              return e;
          }
        },
        g = n(3213),
        b = n(2363),
        y = n(9501),
        v = [{ route: "/posts", label: "posts" }],
        h = {
          navigation: {
            Component: function (e) {
              var t = e.close;
              return o.createElement(
                g.Vq,
                { id: "global-navigation-modal", close: t },
                o.createElement(
                  "nav",
                  null,
                  v.map(function (e) {
                    var t = e.label,
                      n = e.route;
                    return o.createElement(
                      b.OL,
                      { key: n, tabIndex: "0", to: n },
                      t
                    );
                  })
                ),
                o.createElement(y.x8, { onClick: t })
              );
            },
          },
        },
        j = (0, o.createContext)(),
        E = function (e) {
          var t = e.children,
            n = (0, i.TH)(),
            l = (0, o.useReducer)(m, d),
            c = (0, a.Z)(l, 2),
            s = c[0],
            u = c[1],
            p = (0, o.useMemo)(
              function () {
                if (Object.keys(s).length > 0) {
                  var e = [];
                  return (
                    Object.entries(s).forEach(function (t, n) {
                      var i = (0, a.Z)(t, 2),
                        l = i[0],
                        c = i[1],
                        s = void 0 === c ? {} : c;
                      if ("string" != typeof l) {
                        var p =
                          'Provided dialog "name" must be a string. Received: '.concat(
                            JSON.stringify(l)
                          );
                        console.error(p);
                      }
                      var f = h[l],
                        d = {
                          key: l,
                          close: function () {
                            return u({ type: "close", payload: { name: l } });
                          },
                          dialogProps: {
                            id: "dialog-".concat(l),
                            testId: "dialog-".concat(l),
                            disableBackdropClick: !0,
                            size: "medium",
                          },
                        },
                        m = f.Component,
                        g = f.args,
                        b = void 0 === g ? {} : g;
                      e.push(o.createElement(m, (0, r.Z)({}, b, d, s)));
                    }),
                    e
                  );
                }
              },
              [s]
            );
          return (
            (0, o.useEffect)(
              function () {
                n && u({ type: "clear" });
              },
              [n]
            ),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                j.Provider,
                {
                  value: {
                    state: s,
                    open: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return u({
                        type: "open",
                        payload: { name: e, props: t },
                      });
                    },
                    close: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return u({
                        type: "close",
                        payload: { name: e, props: t },
                      });
                    },
                    clear: function () {
                      return u({ type: "clear" });
                    },
                  },
                },
                t
              ),
              p || null,
              Boolean(p) ? o.createElement(g.Sm, null) : null
            )
          );
        };
    },
    2198: function (e, t, n) {
      n.d(t, {
        _: function () {
          return o;
        },
      });
      var r = n(2784),
        a = n(7033),
        o = function (e) {
          var t = (0, r.useContext)(a.N);
          if (!t)
            throw new Error(
              "Must be rendered within the DialogsProvider component. Error occurred in the ".concat(
                e,
                " component."
              )
            );
          return t;
        };
    },
    9501: function (e, t, n) {
      n.d(t, {
        UY: function () {
          return d;
        },
        x8: function () {
          return m;
        },
        Xs: function () {
          return g;
        },
      });
      var r = n(7896),
        a = n(9740),
        o = n(2784),
        i = n(2779),
        l = n.n(i),
        c = n(3866),
        s = n(3213),
        u = ["children", "className", "onClick"],
        p = (0, c.iv)({
          "& span": {
            display: "block",
            width: "25px",
            height: "2px",
            backgroundColor: "white",
            "&:last-child": { marginTop: "4px" },
          },
        }),
        f = function (e) {
          var t = e.children,
            n = e.className,
            i = e.onClick,
            c = (0, a.Z)(e, u);
          return o.createElement(
            s.zx,
            (0, r.Z)({ className: l()(n, p.toString()), onClick: i }, c),
            t
          );
        },
        d = function (e) {
          var t = e.onClick;
          return o.createElement(
            f,
            { className: "open", onClick: t },
            o.createElement("span", null),
            o.createElement("span", null)
          );
        },
        m = function (e) {
          var t = e.onClick;
          return o.createElement(
            f,
            { className: "close", onClick: t },
            o.createElement("span", null),
            o.createElement("span", null)
          );
        },
        g = function (e) {
          var t = e.onClick;
          return o.createElement(
            f,
            { className: "scroll", onClick: t },
            o.createElement("span", null),
            o.createElement("span", null)
          );
        };
    },
    8319: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return p;
        },
        h4: function () {
          return g;
        },
        or: function () {
          return b;
        },
        YE: function () {
          return h;
        },
      });
      var r = n(6666),
        a = n(2784),
        o = n(2212),
        i = n(423),
        l = n(3213),
        c = n(9501);
      function s(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var p = function () {
          var e = (0, o.q_)({
            config: u({}, o.vc.gentle),
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: 250,
          });
          return (
            (0, a.useEffect)(function () {
              return (
                i.zW.scrollEvent.register("begin", null),
                i.zW.scrollEvent.register("end", null),
                i.c5.update(),
                function () {
                  i.zW.scrollEvent.remove("begin"),
                    i.zW.scrollEvent.remove("end");
                }
              );
            }),
            a.createElement(
              o.q.footer,
              { style: e, className: "me__footer" },
              a.createElement(c.Xs, {
                onClick: function () {
                  return i.NY.scrollToTop();
                },
              }),
              a.createElement(l.LZ, { size: "md" }),
              a.createElement(
                "a",
                { href: "http://eoghan.io", target: "_blank" },
                "eoghan.io"
              )
            )
          );
        },
        f = n(377),
        d = n(2198),
        m = n(4620),
        g = function () {
          var e = (0, f.k6)(),
            t = (0, d._)();
          return a.createElement(
            "header",
            { className: "me__header" },
            a.createElement(m.Z, {
              onClick: function () {
                return e.push("/");
              },
            }),
            a.createElement(l.LZ, { size: "md" }),
            a.createElement(c.UY, {
              onClick: function () {
                return t.open("navigation");
              },
            })
          );
        },
        b = function (e) {
          var t = e.children;
          return a.createElement("main", { className: "me__main" }, t);
        },
        y = n(3980),
        v = n.n(y),
        h = function (e) {
          var t = e.children,
            n = e.style,
            r = void 0 === n ? {} : n;
          return a.createElement(
            "aside",
            { style: r, className: "me__sidebar" },
            t
          );
        };
      h.propTypes = { style: v().object };
    },
    4620: function (e, t, n) {
      var r = n(7896),
        a = n(2784),
        o = n(2212);
      t.Z = function (e) {
        var t = (0, r.Z)({}, e);
        return a.createElement(
          o.q.svg,
          (0, r.Z)({ className: "logo", viewBox: "0 0 300 285" }, t),
          a.createElement("path", {
            fill: "var(--color-primary)",
            d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
          })
        );
      };
    },
    9247: function (e, t, n) {
      var r = n(2784),
        a = n(8316),
        o = n(2363),
        i = n(2066),
        l = n(3213),
        c = n(377),
        s = n(8319),
        u = n(6666),
        p = n(2212),
        f = n(4795),
        d = n(8777),
        m = n(7162),
        g = n.n(m),
        b =
          (n(9644),
          [
            {
              id: "6n1EOTol",
              title: "japan with canon kiss x3",
              text: "some shots in japan taken with a canon kiss x3.",
              media: [
                { type: "image", src: n(8853), label: "abashiri, japan" },
                { type: "image", src: n(3603), label: "sapporo, japan" },
                { type: "image", src: n(8640), label: "abashiri, japan" },
                { type: "image", src: n(535), label: "abashiri, japan" },
                { type: "image", src: n(9825), label: "shizuoka, japan" },
                { type: "image", src: n(1733), label: "shizuoka, japan" },
                { type: "image", src: n(5207), label: "tokyo, japan" },
                { type: "image", src: n(874), label: "izu, japan" },
              ],
            },
            {
              id: "4gyX7aqL",
              title: "tokyo, japan",
              text: "a few shots from the first trips to tokyo.",
              media: [
                { type: "image", src: n(4640), label: "tokyo, japan" },
                { type: "image", src: n(6865), label: "tokyo, japan" },
                { type: "image", src: n(4225), label: "tokyo, japan" },
                { type: "image", src: n(5844), label: "tokyo, japan" },
                { type: "image", src: n(2979), label: "tokyo, japan" },
              ],
            },
            {
              id: "2ovZOQmQ",
              title: "baseball game in tokyo, japan",
              text: "a baseball game in tokyo, japan.",
              media: [{ type: "image", src: n(2979), label: "tokyo, japan" }],
            },
            {
              id: "FeEr0YMe",
              title: "year of the",
              text: function () {
                var e = [
                    "rat",
                    "ox",
                    "tiger",
                    "rabbit",
                    "dragon",
                    "snake",
                    "horse",
                    "goat",
                    "monkey",
                    "rooster",
                    "dog",
                    "pig",
                  ],
                  t = e[(new Date().getFullYear() - 1948) % e.length];
                return r.createElement("span", { className: "text-large" }, t);
              },
            },
            {
              id: "OdOcgBi7",
              title: "ai weiwei in london",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "ai weiwei exhibition in piccadilly circus, ",
                  r.createElement("mark", null, "london, uk, 2020"),
                  "."
                );
              },
              media: [
                { type: "image", src: n(5249), label: "london, uk" },
                { type: "image", src: n(7100), label: "london, uk" },
                { type: "image", src: n(101), label: "london, uk" },
                { type: "image", src: n(1892), label: "london, uk" },
              ],
            },
            {
              id: "UOcuwt3P",
              title: "cherry blossoms along meguro river",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "a row of cherry blossoms along the meguro river,",
                  " ",
                  r.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "image", src: n(4402), label: "tokyo, japan" }],
            },
            {
              id: "YaMAaXIz",
              title: "yamanote line video",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "video taken from the yamanote subway line,",
                  " ",
                  r.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "video", src: n(2207), label: "tokyo, japan" }],
            },
            {
              id: "KS0IgMLJ",
              title: "shibuya crossing yamanote line video",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "video of shibuya crossing taken from the yamanote subway line,",
                  " ",
                  r.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "video", src: n(7558), label: "tokyo, japan" }],
            },
            {
              id: "MKC7CpU0",
              status: "draft",
              title: "los angeles itinerary",
              text: "los angeles itinerary, 2003.",
              media: [
                { type: "image", src: n(5589), label: "los angeles, usa" },
              ],
            },
            {
              id: "DgBgHDXP",
              title: "narita airport quarantine hotel view",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "view from narita airport quarantine hotel,",
                  " ",
                  r.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "image", src: n(9934), label: "tokyo, japan" }],
            },
            {
              id: "IpX1UuJA",
              status: "draft",
              title: "to-do list item count",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  r.createElement(
                    "mark",
                    { className: "dark text-large" },
                    "34 items on this year's to-do list"
                  ),
                  "."
                );
              },
            },
            {
              id: "c7SzsMX4",
              title: "theseboys logo",
              text: "theseboys logo.",
              media: [{ type: "image", src: n(5097), label: "theseboys logo" }],
            },
            {
              id: "WfO7R3Kk",
              title: "japan japan",
              text: "japan japan photo collage.",
              media: [{ type: "image", src: n(8242), label: "japan" }],
            },
            {
              id: "TW92JnS4",
              title: "wedding in nagano",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "a wedding in ",
                  r.createElement("mark", null, "nagano, japan, 2004"),
                  "."
                );
              },
              media: [
                { type: "image", src: n(5475), label: "nagano, japan" },
                { type: "image", src: n(8933), label: "nagano, japan" },
                { type: "image", src: n(2057), label: "nagano, japan" },
                { type: "image", src: n(120), label: "nagano, japan" },
              ],
            },
            {
              id: "EwqvVAsK",
              status: "draft",
              title: "snow hokkaido",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "video of snow, ",
                  r.createElement("mark", null, "hokkaido, japan"),
                  "."
                );
              },
              media: [
                { type: "video", src: n(3134), label: "hokkaido, japan" },
              ],
            },
            {
              id: "n5VaX4Sg",
              title: "breakfast on elbrus",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "breakfast on mount elbrus, ",
                  r.createElement("mark", null, "russia, 2006"),
                  "."
                );
              },
              media: [
                { type: "image", src: n(6021), label: "mount elbrus, russia" },
              ],
            },
            {
              id: "5AWKtaN7",
              title: "flower shop in tokyo",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "a flower shop in ",
                  r.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "image", src: n(2539), label: "tokyo, japan" }],
            },
            {
              id: "jj0diCuc",
              title: "detail 9/9a aungier street",
              text: "detail from inside dublin's oldest domestic building at 9/9a aungier street.",
              media: [
                { type: "image", src: n(6592), label: "dublin, ireland" },
                { type: "image", src: n(5500), label: "dublin, ireland" },
              ],
            },
            {
              id: "e1Y1MUy4",
              title: "bamboo",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "a bamboo forest in ",
                  r.createElement("mark", null, "shizuoka, japan"),
                  "."
                );
              },
              media: [
                { type: "image", src: n(8749), label: "shizuoka, japan" },
                { type: "image", src: n(8749), label: "shizuoka, japan" },
                { type: "image", src: n(8749), label: "shizuoka, japan" },
              ],
            },
            {
              id: "hrT6sHP9",
              status: "draft",
              title: "lockdown piccadilly circus",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "piccadilly circus during lockdown, ",
                  r.createElement("mark", null, "london, 2020"),
                  "."
                );
              },
              media: [{ type: "image", src: n(4033), label: "london, uk" }],
            },
            {
              id: "LwEmhBVL",
              status: "draft",
              title: "merry-go-round",
              text: "a merry-go-round.",
              media: [{ type: "image", src: n(5296), label: "tokyo, japan" }],
            },
            {
              id: "6lqwgtPJ",
              title: "swiss alps",
              text: function () {
                return r.createElement(
                  "span",
                  null,
                  "the alps, ",
                  r.createElement("mark", null, "switzerland, 2019"),
                  "."
                );
              },
              media: [
                { type: "image", src: n(1382), label: "switzerland" },
                { type: "image", src: n(985), label: "switzerland" },
                { type: "image", src: n(8789), label: "switzerland" },
              ],
            },
            {
              id: "hwzAk8Wx",
              title: "list of coordinates",
              text: function () {
                return r.createElement(
                  "div",
                  { style: { display: "flex", flexDirection: "column" } },
                  ["24.3465531,123.7309762,12z"].map(function (e, t) {
                    var n = "https://www.google.com/maps/@".concat(e);
                    return r.createElement(
                      "a",
                      {
                        style: { wordBreak: "break-all" },
                        key: t,
                        href: n,
                        target: "_blank",
                      },
                      e
                    );
                  })
                );
              },
            },
            {
              id: "umIfb1wj",
              title: "flashing gif",
              text: "flashing gif.",
              media: [{ type: "image", src: n(75), label: "flashing gif" }],
            },
          ]);
      function y(e, t) {
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
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      console.log(
        "number of live posts",
        b.filter(function (e) {
          return "draft" !== e.status;
        }).length
      );
      var h = {
        all: ["posts"],
        lists: function () {
          return [].concat((0, d.Z)(h.all), ["list"]);
        },
        list: function (e) {
          return [].concat((0, d.Z)(h.lists()), [{ filters: e }]);
        },
        details: function () {
          return [].concat((0, d.Z)(h.all), ["detail"]);
        },
        detail: function (e) {
          return [].concat((0, d.Z)(h.details()), [e]);
        },
      };
      function j(e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = (0, f.Z)(
          g().mark(function e(t) {
            return g().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        setTimeout(function () {
                          var n = b.find(function (e) {
                            return e.id === t;
                          });
                          e(n);
                        }, 100);
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var x = n(2867),
        k = n(9740),
        O = ["y"];
      function w(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var z = function (e) {
          var t = e.list,
            n = e.onClick,
            a = (0, p.NI)(t.length, {
              config: P({}, p.vc.gentle),
              from: { opacity: 0, y: 100 },
              to: { opacity: 1, y: 0 },
              delay: 250,
            });
          return r.createElement(
            "div",
            { className: "gallery" },
            a.map(function (e, a) {
              var o = e.y,
                i = (0, k.Z)(e, O),
                l = t[a],
                c = l.type,
                s = l.src,
                u = l.label;
              return r.createElement(
                p.q.figure,
                {
                  key: a,
                  style: P(
                    P({}, i),
                    {},
                    {
                      transform: o.interpolate(function (e) {
                        return "translateY(".concat(e, "%)");
                      }),
                    }
                  ),
                  onClick: function () {
                    return n(a);
                  },
                },
                "image" === c
                  ? r.createElement("img", {
                      width: "780",
                      loading: "lazy",
                      src: s,
                      title: u,
                    })
                  : "video" === c
                  ? r.createElement("video", {
                      width: "780",
                      src: s,
                      controls: !0,
                      autoPlay: !0,
                    })
                  : null
              );
            })
          );
        },
        Z =
          (n(9501),
          function (e) {
            var t = e.post,
              n = (0, r.useState)(!1),
              a = (0, x.Z)(n, 2),
              o = (a[0], a[1], (0, r.useState)(0)),
              i = (0, x.Z)(o, 2),
              l =
                (i[0],
                i[1],
                r.useMemo(
                  function () {
                    if (Array.isArray(t.media))
                      return t.media.filter(function (e) {
                        return "image" === e.type || "video" === e.type;
                      });
                  },
                  [t]
                ));
            return Array.isArray(l) && l.length
              ? r.createElement(
                  "div",
                  { className: "media" },
                  r.createElement(z, { list: l })
                )
              : null;
          });
      function C(e, t) {
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
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var S = function () {
          var e = (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.postId;
              return (0, i.useQuery)(
                h.detail(n),
                (0, f.Z)(
                  g().mark(function e() {
                    return g().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), j(n);
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                v({ cacheTime: 0 }, t)
              );
            })({ postId: (0, c.UO)().postId }),
            t = e.data;
          return (
            (0, p.q_)({
              config: N({}, p.vc.gentle),
              to: { opacity: 1 },
              from: { opacity: 0 },
              delay: 250,
              reset: !0,
            }),
            t
              ? r.createElement(
                  "article",
                  { "data-post-id": t.id, className: "me__post" },
                  r.createElement(Z, { post: t }),
                  r.createElement(
                    p.q.span,
                    { className: "description" },
                    "function" == typeof (null == t ? void 0 : t.text)
                      ? r.createElement(t.text, null)
                      : "string" == typeof (null == t ? void 0 : t.text)
                      ? t.text
                      : null
                  )
                )
              : null
          );
        },
        D = function (e) {
          var t = e.children,
            n = (0, c.TH)();
          return (
            (0, r.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [n]
            ),
            r.createElement(r.Fragment, null, t)
          );
        },
        I = function () {
          return r.createElement(
            "div",
            { className: "me content" },
            r.createElement(s.h4, null),
            r.createElement(
              s.YE,
              null,
              r.createElement(
                "nav",
                { className: "side-nav" },
                b.map(function (e) {
                  var t = e.id,
                    n = e.status,
                    a = e.title;
                  return "draft" !== n
                    ? r.createElement(
                        o.OL,
                        { key: t, to: "/posts/".concat(t) },
                        a
                      )
                    : null;
                })
              )
            ),
            r.createElement(
              s.or,
              null,
              r.createElement(
                D,
                null,
                r.createElement(
                  c.rs,
                  null,
                  r.createElement(c.AW, {
                    exact: !0,
                    path: "/posts",
                    render: function () {
                      return null;
                    },
                  }),
                  r.createElement(c.AW, {
                    exact: !0,
                    path: "/posts/:postId",
                    render: function () {
                      return r.createElement(S, null);
                    },
                  })
                )
              )
            ),
            r.createElement(s.$_, null)
          );
        },
        q = (0, r.lazy)(function () {
          return n.e(605).then(n.bind(n, 7605));
        }),
        _ = function () {
          return r.createElement(
            c.rs,
            null,
            r.createElement(
              r.Suspense,
              { fallback: null },
              r.createElement(c.AW, {
                exact: !0,
                path: "/",
                render: function () {
                  return r.createElement(q, null);
                },
              }),
              r.createElement(c.AW, {
                path: "/posts",
                render: function () {
                  return r.createElement(I, null);
                },
              }),
              r.createElement(c.AW, {
                render: function () {
                  return null;
                },
              })
            )
          );
        },
        W = n(7033),
        T = document.getElementById("root"),
        A = new i.QueryClient();
      (0, a.render)(
        r.createElement(
          i.QueryClientProvider,
          { client: A },
          r.createElement(
            o.VK,
            null,
            r.createElement(
              l.SV,
              null,
              r.createElement(W.Z, null, r.createElement(_, null))
            )
          )
        ),
        T
      );
    },
    3213: function (e, t, n) {
      n.d(t, {
        Sm: function () {
          return c;
        },
        zx: function () {
          return b;
        },
        Vq: function () {
          return O;
        },
        SV: function () {
          return I;
        },
        LZ: function () {
          return T;
        },
      });
      var r = n(2784),
        a = n(3866),
        o = n(2212),
        i = n(2779),
        l = n.n(i),
        c = function () {
          var e = (0, o.q_)({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 100 },
          });
          return r.createElement(o.q.div, {
            style: e,
            className: l()("ui-blanket", s().toString()),
          });
        },
        s = (0, a.iv)({
          position: "fixed",
          zIndex: 9999,
          top: 0,
          left: 0,
          width: "100%",
          height: " 100%",
          background: "rgba(0, 0, 0, 0.22)",
        }),
        u = n(7896),
        p = n(9740),
        f = n(3980),
        d = n.n(f),
        m = [
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
          var t = e.children,
            n = e.className,
            a = e.role,
            o = void 0 === a ? "button" : a,
            i = e.type,
            c = void 0 === i ? "button" : i,
            s = e.tabIndex,
            f = void 0 === s ? "0" : s,
            d = e.disabled,
            g = void 0 !== d && d,
            b = e.onClick,
            v =
              void 0 === b
                ? function () {
                    return null;
                  }
                : b,
            h = e.variant,
            j = void 0 === h ? "primary" : h,
            E = e.shape,
            x = void 0 === E ? "circle" : E,
            k = e.size,
            O = void 0 === k ? "lg" : k,
            w = (0, p.Z)(e, m);
          return r.createElement(
            "button",
            (0, u.Z)(
              {
                className: l()(
                  "ui-button",
                  n,
                  y({ shape: x, size: O, variant: j }).toString()
                ),
                role: o,
                type: c,
                tabIndex: f,
                disabled: g,
                onClick: v,
              },
              w
            ),
            t
          );
        },
        b = g;
      g.propTypes = {
        size: d().oneOf(["sm", "md", "lg"]),
        shape: d().oneOf(["square", "rounded", "circle", "capsule"]),
      };
      var y = (0, a.iv)({
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
        v = n(6581),
        h = function (e) {
          var t = e.children,
            n = e.close;
          return r.createElement(
            "div",
            {
              className: l()("ui-dialog-background", E().toString()),
              onClick: n,
            },
            t
          );
        },
        j = h;
      h.propTypes = { close: d().func.isRequired };
      var E = (0, a.iv)({
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
        x = ["children", "className", "size", "close"],
        k = function (e) {
          var t = e.children,
            n = e.className,
            a = e.size,
            i = void 0 === a ? "md" : a,
            c = e.close,
            s = (0, p.Z)(e, x),
            f = (0, o.q_)({
              from: { opacity: 0, transform: "translateY(+70px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: o.vc.stiff,
            });
          return r.createElement(
            v.ZP,
            { returnFocus: !0 },
            r.createElement(
              j,
              { close: c },
              r.createElement(
                o.q.div,
                (0, u.Z)(
                  {
                    tabIndex: "-1",
                    style: f,
                    className: l()("ui-dialog", n, w({ size: i }).toString()),
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                    onKeyDown: function (e) {
                      "Escape" === e.key && (e.preventDefault(), c());
                    },
                  },
                  s
                ),
                t
              )
            )
          );
        },
        O = k;
      k.propTypes = { close: d().func.isRequired };
      var w = (0, a.iv)({
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
        P = n(9249),
        z = n(7371),
        Z = n(753),
        C = n(5754),
        N = n(1987),
        S = n(5058),
        D = n(6666);
      var I = (function (e) {
          (0, C.Z)(o, e);
          var t,
            n,
            a =
              ((t = o),
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
                  r = (0, S.Z)(t);
                if (n) {
                  var a = (0, S.Z)(this).constructor;
                  e = Reflect.construct(r, arguments, a);
                } else e = r.apply(this, arguments);
                return (0, N.Z)(this, e);
              });
          function o() {
            var e;
            (0, P.Z)(this, o);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              (e = a.call.apply(a, [this].concat(n))),
              (0, D.Z)((0, Z.Z)(e), "state", { hasError: !1 }),
              e
            );
          }
          return (
            (0, z.Z)(
              o,
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
                          { className: q() },
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
            o
          );
        })(r.Component),
        q = (0, a.iv)({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }),
        _ = (0, a.iv)({
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
        }),
        W = function (e) {
          var t = e.size,
            n = void 0 === t ? "sm" : t;
          return r.createElement("span", {
            className: l()("ui-spacer", _({ size: n }).toString()),
          });
        },
        T = W;
      W.propTypes = {
        size: d().oneOf(["xs", "sm", "md", "lg", "xl"]),
        axis: d().oneOf(["vertical", "horizontal"]),
      };
    },
    8933: function (e, t, n) {
      e.exports = n.p + "assets/fc896409825350342983.jpg";
    },
    2057: function (e, t, n) {
      e.exports = n.p + "assets/d73e6e7fb53c6ae83187.jpg";
    },
    5475: function (e, t, n) {
      e.exports = n.p + "assets/10ea7e62f5b030190c96.jpg";
    },
    120: function (e, t, n) {
      e.exports = n.p + "assets/0928450831060ec16d9b.jpg";
    },
    5500: function (e, t, n) {
      e.exports = n.p + "assets/0d5b0a6eb476288ae641.jpg";
    },
    6592: function (e, t, n) {
      e.exports = n.p + "assets/0ead761cc78b84a48f6d.jpg";
    },
    6021: function (e, t, n) {
      e.exports = n.p + "assets/ca6df3176effdc589b4d.jpg";
    },
    5296: function (e, t, n) {
      e.exports = n.p + "assets/4ebae29ed87a28861eb4.jpg";
    },
    4033: function (e, t, n) {
      e.exports = n.p + "assets/60f4a3957b347242bd6d.jpg";
    },
    7100: function (e, t, n) {
      e.exports = n.p + "assets/8ec43495232e091d091f.jpg";
    },
    1892: function (e, t, n) {
      e.exports = n.p + "assets/6cbfb5faea7240ffaea2.jpg";
    },
    5249: function (e, t, n) {
      e.exports = n.p + "assets/59fbe6b26e34d2e12e1d.jpg";
    },
    101: function (e, t, n) {
      e.exports = n.p + "assets/fa3d0050571d9075c678.jpg";
    },
    4640: function (e, t, n) {
      e.exports = n.p + "assets/a3079a9ad7fbe7eb7014.jpg";
    },
    6865: function (e, t, n) {
      e.exports = n.p + "assets/8d86e2465edab3b6f02d.jpg";
    },
    4225: function (e, t, n) {
      e.exports = n.p + "assets/428498f27942c714a1bf.jpg";
    },
    8749: function (e, t, n) {
      e.exports = n.p + "assets/a468db9c6d26d24c3c17.jpg";
    },
    5844: function (e, t, n) {
      e.exports = n.p + "assets/15604dd781b31e9b2cd6.jpg";
    },
    2979: function (e, t, n) {
      e.exports = n.p + "assets/6333fc28c20c05759888.jpg";
    },
    9934: function (e, t, n) {
      e.exports = n.p + "assets/8eabd29e7a3fb6852266.jpg";
    },
    4402: function (e, t, n) {
      e.exports = n.p + "assets/9a6550a7e586c823195a.jpg";
    },
    2539: function (e, t, n) {
      e.exports = n.p + "assets/a8f20f95b65a878b47c1.jpg";
    },
    1382: function (e, t, n) {
      e.exports = n.p + "assets/766b8d0f5be14108b25a.jpg";
    },
    8789: function (e, t, n) {
      e.exports = n.p + "assets/f5053a80c0c34e0caf6a.jpg";
    },
    985: function (e, t, n) {
      e.exports = n.p + "assets/006beb9df653f457c7be.jpg";
    },
    5589: function (e, t, n) {
      e.exports = n.p + "assets/90fdb8bca712a270f9db.jpg";
    },
    75: function (e, t, n) {
      e.exports = n.p + "assets/916f2fb6aba87150f095.gif";
    },
    8640: function (e, t, n) {
      e.exports = n.p + "assets/6e40dee7571927afdff2.jpg";
    },
    3603: function (e, t, n) {
      e.exports = n.p + "assets/ed707dbed0240ead60bd.jpg";
    },
    8853: function (e, t, n) {
      e.exports = n.p + "assets/27614c868c30279454a1.jpg";
    },
    535: function (e, t, n) {
      e.exports = n.p + "assets/400f6f7ff5c170c72209.jpg";
    },
    874: function (e, t, n) {
      e.exports = n.p + "assets/0df6567e2567d10f44ed.jpg";
    },
    5207: function (e, t, n) {
      e.exports = n.p + "assets/17345db03bf4575f0fc5.jpg";
    },
    9825: function (e, t, n) {
      e.exports = n.p + "assets/0c2b763ccc3b4d98ba2a.jpg";
    },
    1733: function (e, t, n) {
      e.exports = n.p + "assets/f4459070201360bdc55b.jpg";
    },
    8242: function (e, t, n) {
      e.exports = n.p + "assets/17d997e515df3bd33495.jpg";
    },
    5097: function (e, t, n) {
      e.exports = n.p + "assets/b1d287f86ded2a7a37e8.png";
    },
    7558: function (e, t, n) {
      e.exports = n.p + "assets/e2f154ca8ee865481e7d.mov";
    },
    2207: function (e, t, n) {
      e.exports = n.p + "assets/ac50a85f10a19ea4ff55.mov";
    },
    3134: function (e, t, n) {
      e.exports = n.p + "assets/456eeda33c5975bfae03.mp4";
    },
  },
  function (e) {
    e.O(0, [216], function () {
      return 9247, e((e.s = 9247));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.5fb2b9e90ce643b872be.bundle.js.map
