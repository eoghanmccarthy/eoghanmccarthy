"use strict";
(self.webpackChunkeoghanmccarthy = self.webpackChunkeoghanmccarthy || []).push([
  [179],
  {
    9501: function (e, t, n) {
      n.d(t, {
        x: function () {
          return c;
        },
      });
      var a = n(2784),
        r = n(2779),
        l = n.n(r),
        o = n(9571),
        c = function (e) {
          var t = e.className,
            n = e.size,
            r = void 0 === n ? "lg" : n,
            c = e.onClick;
          return a.createElement(
            o.z,
            {
              size: r,
              shape: "circle",
              className: l()("close", t),
              onClick: c,
            },
            a.createElement("span", null),
            a.createElement("span", null)
          );
        };
    },
    8319: function (e, t, n) {
      n.d(t, {
        $_: function () {
          return u;
        },
        h4: function () {
          return d;
        },
        or: function () {
          return b;
        },
        YE: function () {
          return j;
        },
      });
      var a = n(6666),
        r = n(2784),
        l = n(2212),
        o = n(423),
        c = n(9571);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
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
      var u = function () {
          var e = (0, l.q_)({
            config: i({}, l.vc.gentle),
            to: { opacity: 1 },
            from: { opacity: 0 },
            delay: 250,
          });
          return (
            (0, r.useEffect)(function () {
              return (
                o.zW.scrollEvent.register("begin", null),
                o.zW.scrollEvent.register("end", null),
                o.c5.update(),
                function () {
                  o.zW.scrollEvent.remove("begin"),
                    o.zW.scrollEvent.remove("end");
                }
              );
            }),
            r.createElement(
              l.q.footer,
              { style: e, className: "me__footer" },
              r.createElement(
                c.z,
                {
                  size: "lg",
                  shape: "circle",
                  className: "btn-scroll",
                  onClick: function () {
                    return o.NY.scrollToTop();
                  },
                },
                r.createElement("span", null),
                r.createElement("span", null)
              ),
              r.createElement(
                "a",
                { href: "http://eoghan.io", target: "_blank" },
                "eoghan.io"
              )
            )
          );
        },
        p = n(377),
        f = n(4620),
        m = n(6545),
        d = function () {
          var e = (0, p.k6)();
          return r.createElement(
            "header",
            { className: "me__header" },
            r.createElement(f.Z, {
              onClick: function () {
                return e.push("/");
              },
            }),
            r.createElement(m.Z, null)
          );
        },
        b = function (e) {
          var t = e.children;
          return r.createElement("main", { className: "me__main" }, t);
        },
        g = n(3980),
        y = n.n(g),
        j = function (e) {
          var t = e.children,
            n = e.style,
            a = void 0 === n ? {} : n;
          return r.createElement(
            "aside",
            { style: a, className: "me__sidebar" },
            t
          );
        };
      j.propTypes = { style: y().object };
    },
    4620: function (e, t, n) {
      var a = n(7896),
        r = n(2784),
        l = n(2212);
      t.Z = function (e) {
        var t = (0, a.Z)({}, e);
        return r.createElement(
          l.q.svg,
          (0, a.Z)({ className: "logo", viewBox: "0 0 300 285" }, t),
          r.createElement("path", {
            fill: "var(--color-primary)",
            d: "M300 92c.1-2.5-.1-4.8-.8-6.9-.6-2-1.6-3.7-2.9-5-.6-.6-1.3-1.1-2.1-1.5l.4.2c-22.6-12.8-45.2-25.6-67.9-38.4l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.2-.1-.4-.1h-.1c-.2-.1-.3-.1-.5-.1h-.5l-.5-.1-35.4 25.2-1.8-28.9h-.1l-52.2-34h-.4l-.3-.2-.3-.2c-.1-.1-.2-.1-.4-.2-.1-.1-.2-.1-.4-.2-.1-.1-.3-.1-.5-.2l-.2-.1c-.1 0-.2 0-.4-.1s-.5-.2-.7-.2c-.5-.1-1-.2-1.6-.3h-.4c-.7-.1-1.3-.2-2-.2h-3.5999999999999996c-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4 0-.5.1-.2 0-.4.1-.5.1-.2 0-.4.1-.5.1l-.7.1-.5.1h-.2l-.7.2-.7.2-.5.2-.5.2-.5.2c-.1 0-.1 0-.2.1l-.3.1-.4.2-.4.2-.4.2-.4.2-.3.2-.3.2-.3.2-.2.1s-.1 0-.1.1l-.3.2-.3.2c-.1.1-.2.1-.2.2l-.3.2c.1-.5 0-.4-.1-.4l-.2.2-.2.2-.2.2-.2.1c-.1 0-.1.1-.1.1l-.1.1-.1.1-1.9 96.5-101.1-28.9-.2.2-.2.2c-.3.1-.4.2-.4.2l-.2.2c-.1.1-.2.1-.2.2l-.2.2-.2.2c-.2 0-.3.1-.3.1l-.1.1-.1.1-.2.2-.2.2c-.2.2-.2.3-.3.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3s0 .1-.1.1l-.2.2c-.1.1-.2.2-.2.3-.1.1-.2.2-.2.3l-.2.3-.3.4c-.1.1-.2.3-.2.4l-.1.1c0 .1-.1.2-.1.2-.1.1-.2.3-.2.4l-.3.6-.3.6c-.1.2-.2.4-.2.5-.1.2-.2.4-.2.6l-.3 1-.3 1c0 .1-.1.2-.1.2l-.2 1.2c0 .3-.1.5-.2.8v.4c-.3.7-.3 1.2-.3 1.6v.9c0 .8.1 1.6.2 2.3l10.4 62.2v-.2c.4 2.4 1.2 4.6 2.5 6.6l38.1 11.9-25.6 22.8c0 .2-.1.4-.1.7v1.4c0 .2.1.4.1.7l14.8 77-.1-.6c.1.8.3 1.5.6 2.3.3.8.7 1.5 1.2 2.2.5.7 1.1 1.3 1.8 2 .7.6 1.5 1.2 2.4 1.6.9.5 1.8.8 2.7 1.1 1 .3 2 .5 3 .6 1 .1 2.1.2 3.2.1l77.1-52.9 26.9 54.9c.6.1 1.3.1 2 .1.8 0 1.6-.1 2.5-.3.9-.1 1.9-.4 2.8-.6 1-.2 2-.5 3-.9 1-.3 2-.7 2.9-1.1 1-.4 1.9-.8 2.7-1.2.9-.4 1.7-.9 2.4-1.4.7-.5 1.3-1 1.9-1.5l11.2-70.9 75.7 11.9c1.7-1.1 3.3-2.5 4.7-4.1 1.4-1.5 2.7-3.2 3.7-5 1-1.7 1.9-3.5 2.4-5.2.5-1.7.8-3.4.6-4.9l-45-44.4 65.5-55.6c1.2-2.8 1.7-5.4 1.8-7.9zm-289.5 55v-.30000000000000004.3zm282.6-68.8l.8.3s.1 0 .1.1c-.4-.2-.7-.3-1.1-.4h.2zm-.9-.2h.2l.3.1c-.4-.1-.8-.2-1.3-.2.3 0 .5 0 .8.1zm-281.8 72v-.1.1zm30 123v-1.5l.1-.7c-.1.6-.2 1.4-.1 2.2z",
          })
        );
      };
    },
    6545: function (e, t, n) {
      var a = n(4795),
        r = n(2867),
        l = n(7162),
        o = n.n(l),
        c = n(2784),
        s = n(2363),
        i = n(377),
        u = n(9571),
        p = n(9501),
        f = [{ route: "/posts", label: "posts" }];
      t.Z = (0, i.EN)(function (e) {
        var t = e.history,
          n = (0, c.useState)(!1),
          l = (0, r.Z)(n, 2),
          i = l[0],
          m = l[1],
          d = function () {
            return m(!1);
          },
          b = (0, c.useState)([]),
          g = (0, r.Z)(b, 2),
          y = g[0],
          j = g[1],
          h = (function () {
            var e = (0, a.Z)(
              o().mark(function e(t) {
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((e.t0 = !y.length), !e.t0)) {
                          e.next = 4;
                          break;
                        }
                        return (e.next = 4), j([t]);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            u.z,
            {
              size: "lg",
              shape: "circle",
              className: "global-nav open",
              onClick: function () {
                return m(!0);
              },
            },
            c.createElement("span", null),
            c.createElement("span", null)
          ),
          c.createElement(
            u.Dialog,
            {
              id: "global-nav",
              isVisible: i,
              closeDialog: d,
              onDestroy: function () {
                if (y.length) {
                  var e = y.shift();
                  t.push(e);
                }
              },
            },
            c.createElement(
              "nav",
              null,
              f.map(function (e) {
                var t = e.label,
                  n = e.route;
                return c.createElement(
                  s.rU,
                  {
                    key: n,
                    tabIndex: "0",
                    to: n,
                    onClick: function (e) {
                      return h(e).then(function () {
                        return d();
                      });
                    },
                  },
                  t
                );
              })
            ),
            c.createElement(p.x, { className: "global-nav", onClick: d })
          )
        );
      });
    },
    7376: function (e, t, n) {
      var a = n(2784),
        r = n(8316),
        l = n(2363),
        o = n(2066),
        c = n(9571),
        s = n(377),
        i = n(8319),
        u = n(6666),
        p = n(2212),
        f = n(4795),
        m = n(8777),
        d = n(7162),
        b = n.n(d),
        g =
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
                return a.createElement("span", { className: "text-large" }, t);
              },
            },
            {
              id: "OdOcgBi7",
              title: "ai weiwei in london",
              text: function () {
                return a.createElement(
                  "span",
                  null,
                  "ai weiwei exhibition in piccadilly circus, ",
                  a.createElement("mark", null, "london, uk, 2020"),
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
                return a.createElement(
                  "span",
                  null,
                  "a row of cherry blossoms along the meguro river, ",
                  a.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "image", src: n(4402), label: "tokyo, japan" }],
            },
            {
              id: "YaMAaXIz",
              title: "yamanote line video",
              text: function () {
                return a.createElement(
                  "span",
                  null,
                  "video taken from the yamanote subway line, ",
                  a.createElement("mark", null, "tokyo, japan, 2021"),
                  "."
                );
              },
              media: [{ type: "video", src: n(2207), label: "tokyo, japan" }],
            },
            {
              id: "KS0IgMLJ",
              title: "shibuya crossing yamanote line video",
              text: function () {
                return a.createElement(
                  "span",
                  null,
                  "video of shibuya crossing taken from the yamanote subway line, ",
                  a.createElement("mark", null, "tokyo, japan, 2021"),
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
                return a.createElement(
                  "span",
                  null,
                  "view from narita airport quarantine hotel, ",
                  a.createElement("mark", null, "tokyo, japan, 2021"),
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
                return a.createElement(
                  "span",
                  null,
                  a.createElement(
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
                return a.createElement(
                  "span",
                  null,
                  "a wedding in ",
                  a.createElement("mark", null, "nagano, japan, 2004"),
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
                return a.createElement(
                  "span",
                  null,
                  "video of snow, ",
                  a.createElement("mark", null, "hokkaido, japan"),
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
                return a.createElement(
                  "span",
                  null,
                  "breakfast on mount elbrus, ",
                  a.createElement("mark", null, "russia, 2006"),
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
                return a.createElement(
                  "span",
                  null,
                  "a flower shop in ",
                  a.createElement("mark", null, "tokyo, japan, 2021"),
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
                return a.createElement(
                  "span",
                  null,
                  "a bamboo forest in ",
                  a.createElement("mark", null, "shizuoka, japan"),
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
                return a.createElement(
                  "span",
                  null,
                  "piccadilly circus during lockdown, ",
                  a.createElement("mark", null, "london, 2020"),
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
                return a.createElement(
                  "span",
                  null,
                  "the alps, ",
                  a.createElement("mark", null, "switzerland, 2019"),
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
                return a.createElement(
                  "div",
                  { style: { display: "flex", flexDirection: "column" } },
                  ["24.3465531,123.7309762,12z"].map(function (e, t) {
                    var n = "https://www.google.com/maps/@".concat(e);
                    return a.createElement(
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
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function j(e) {
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
        g.filter(function (e) {
          return "draft" !== e.status;
        }).length
      );
      var h = {
        all: ["posts"],
        lists: function () {
          return [].concat((0, m.Z)(h.all), ["list"]);
        },
        list: function (e) {
          return [].concat((0, m.Z)(h.lists()), [{ filters: e }]);
        },
        details: function () {
          return [].concat((0, m.Z)(h.all), ["detail"]);
        },
        detail: function (e) {
          return [].concat((0, m.Z)(h.details()), [e]);
        },
      };
      function v(e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = (0, f.Z)(
          b().mark(function e(t) {
            return b().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        setTimeout(function () {
                          var n = g.find(function (e) {
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
      var k = n(2867),
        x = n(9740),
        O = ["y"];
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
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
            r = (0, p.NI)(t.length, {
              config: P({}, p.vc.gentle),
              from: { opacity: 0, y: 100 },
              to: { opacity: 1, y: 0 },
              delay: 250,
            });
          return a.createElement(
            "div",
            { className: "gallery" },
            r.map(function (e, r) {
              var l = e.y,
                o = (0, x.Z)(e, O),
                c = t[r],
                s = c.type,
                i = c.src,
                u = c.label;
              return a.createElement(
                p.q.figure,
                {
                  key: r,
                  style: P(
                    P({}, o),
                    {},
                    {
                      transform: l.interpolate(function (e) {
                        return "translateY(".concat(e, "%)");
                      }),
                    }
                  ),
                  onClick: function () {
                    return n(r);
                  },
                },
                "image" === s
                  ? a.createElement("img", {
                      width: "780",
                      loading: "lazy",
                      src: i,
                      title: u,
                    })
                  : "video" === s
                  ? a.createElement("video", {
                      width: "780",
                      src: i,
                      controls: !0,
                      autoPlay: !0,
                    })
                  : null
              );
            })
          );
        },
        D =
          (n(9501),
          function (e) {
            var t = e.post,
              n = (0, a.useState)(!1),
              r = (0, k.Z)(n, 2),
              l = (r[0], r[1], (0, a.useState)(0)),
              o = (0, k.Z)(l, 2),
              c =
                (o[0],
                o[1],
                a.useMemo(
                  function () {
                    if (Array.isArray(t.media))
                      return t.media.filter(function (e) {
                        return "image" === e.type || "video" === e.type;
                      });
                  },
                  [t]
                ));
            return Array.isArray(c) && c.length
              ? a.createElement(
                  "div",
                  { className: "media" },
                  a.createElement(z, { list: c })
                )
              : null;
          });
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, u.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var C = function () {
          var e = (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.postId;
              return (0, o.useQuery)(
                h.detail(n),
                (0, f.Z)(
                  b().mark(function e() {
                    return b().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), v(n);
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                ),
                j({ cacheTime: 0 }, t)
              );
            })({ postId: (0, s.UO)().postId }),
            t = e.data;
          return (
            (0, p.q_)({
              config: Z({}, p.vc.gentle),
              to: { opacity: 1 },
              from: { opacity: 0 },
              delay: 250,
              reset: !0,
            }),
            t
              ? a.createElement(
                  "article",
                  { "data-post-id": t.id, className: "me__post" },
                  a.createElement(D, { post: t }),
                  a.createElement(
                    p.q.span,
                    { className: "description" },
                    "function" == typeof (null == t ? void 0 : t.text)
                      ? a.createElement(t.text, null)
                      : "string" == typeof (null == t ? void 0 : t.text)
                      ? t.text
                      : null
                  )
                )
              : null
          );
        },
        S = function (e) {
          var t = e.children,
            n = (0, s.TH)();
          return (
            (0, a.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [n]
            ),
            a.createElement(a.Fragment, null, t)
          );
        },
        _ = function () {
          return a.createElement(
            "div",
            { className: "me content" },
            a.createElement(i.h4, null),
            a.createElement(
              i.YE,
              null,
              a.createElement(
                "nav",
                { className: "side-nav" },
                g.map(function (e) {
                  var t = e.id,
                    n = e.status,
                    r = e.title;
                  return "draft" !== n
                    ? a.createElement(
                        l.OL,
                        { key: t, to: "/posts/".concat(t) },
                        r
                      )
                    : null;
                })
              )
            ),
            a.createElement(
              i.or,
              null,
              a.createElement(
                S,
                null,
                a.createElement(
                  s.rs,
                  null,
                  a.createElement(s.AW, {
                    exact: !0,
                    path: "/posts",
                    render: function () {
                      return null;
                    },
                  }),
                  a.createElement(s.AW, {
                    exact: !0,
                    path: "/posts/:postId",
                    render: function () {
                      return a.createElement(C, null);
                    },
                  })
                )
              )
            ),
            a.createElement(i.$_, null)
          );
        },
        A = (0, a.lazy)(function () {
          return n.e(473).then(n.bind(n, 8473));
        }),
        I = function () {
          return a.createElement(
            s.rs,
            null,
            a.createElement(
              a.Suspense,
              { fallback: null },
              a.createElement(s.AW, {
                exact: !0,
                path: "/",
                render: function () {
                  return a.createElement(A, null);
                },
              }),
              a.createElement(s.AW, {
                path: "/posts",
                render: function () {
                  return a.createElement(_, null);
                },
              }),
              a.createElement(s.AW, {
                render: function () {
                  return null;
                },
              })
            )
          );
        },
        W = document.getElementById("root"),
        q = new o.QueryClient();
      (0, r.render)(
        a.createElement(
          o.QueryClientProvider,
          { client: q },
          a.createElement(
            l.VK,
            null,
            a.createElement(c.ErrorBoundary, null, a.createElement(I, null))
          )
        ),
        W
      );
    },
    9571: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var a = n(7896),
        r = n(9740),
        l = n(5459),
        o = n(2779),
        c = n.n(o),
        s = [
          "children",
          "className",
          "role",
          "type",
          "tabIndex",
          "isDisabled",
          "onClick",
        ],
        i = forwardRef(function (e, t) {
          var n = e.children,
            o = e.className,
            i = e.role,
            u = void 0 === i ? "button" : i,
            p = e.type,
            f = void 0 === p ? "button" : p,
            m = e.tabIndex,
            d = void 0 === m ? "0" : m,
            b = e.isDisabled,
            g = void 0 !== b && b,
            y = e.onClick,
            j =
              void 0 === y
                ? function () {
                    return null;
                  }
                : y,
            h = (0, r.Z)(e, s);
          return l.createElement(
            "button",
            (0, a.Z)(
              {
                ref: t,
                className: c()("ui-button", { disabled: g }, o),
                role: u,
                type: f,
                tabIndex: d,
                disabled: g,
                onClick: j,
              },
              h
            ),
            n
          );
        });
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
      return 7376, e((e.s = 7376));
    }),
      e.O();
  },
]);
//# sourceMappingURL=main.7959dac4885ea687a63b.bundle.js.map
