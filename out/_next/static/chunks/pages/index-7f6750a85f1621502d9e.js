(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5955: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i,
        s = t(2209),
        a = t(9163),
        r = (t(7294), t(5675)),
        o = t(5288),
        c = t(7194),
        d = t(5893),
        l = a.ZP.div(i || (i = (0, s.Z)([""])));
      function m() {
        return (0, d.jsx)(l, {
          children: (0, d.jsxs)("div", {
            className:
              "d-flex justify-content-center justify-content-md-start align-items-center store-buttons",
            "data-aos": "fade-right",
            "data-aos-duration": "1000",
            children: [
              (0, d.jsx)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://play.google.com/store/apps/details?id=com.falcon.luca",
                className: "mr-3",
                children: (0, d.jsx)(r.default, {
                  src: o.Z,
                  alt: "",
                  className: "img-fluid",
                }),
              }),
              (0, d.jsx)("a", {
                target: "_blank",
                rel: "noreferrer",
                href: "https://apps.apple.com/ng/app/luca-easy-bookkeeping-app/id1607814067",
                children: (0, d.jsx)(r.default, {
                  src: c.Z,
                  alt: "",
                  className: "img-fluid",
                }),
              }),
            ],
          }),
        });
      }
    },
    5447: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(6988);
      function s(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var i,
                s,
                a = [],
                r = !0,
                o = !1;
              try {
                for (
                  t = t.call(e);
                  !(r = (i = t.next()).done) &&
                  (a.push(i.value), !n || a.length !== n);
                  r = !0
                );
              } catch (c) {
                (o = !0), (s = c);
              } finally {
                try {
                  r || null == t.return || t.return();
                } finally {
                  if (o) throw s;
                }
              }
              return a;
            }
          })(e, n) ||
          (0, i.Z)(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var a,
        r = t(2209),
        o = t(9163),
        c = t(7294),
        d = t(1664),
        l = t(8556),
        m = t(5658),
        u = t(9583),
        x = t(5893),
        p = o.ZP.div(
          a ||
            (a = (0, r.Z)([
              "\n  .main-box {\n    background: #f1f1f3;\n    border-radius: 30px;\n  }\n  .title-image {\n    display: flex;\n    justify-content: space-between;\n  }\n  .faq-points {\n    padding: 3rem;\n  }\n  @media (max-width: 768px) {\n    .faq-points {\n      padding: 0.25rem;\n    }\n  }\n",
            ]))
        );
      function h(e) {
        return (
          (function (e) {
            if (null == e) throw new TypeError("Cannot destructure undefined");
          })(e),
          (0, x.jsx)(p, {
            children: (0, x.jsx)("section", {
              id: "faqs",
              className: "main-box container relative",
              "data-aos": "fade-up",
              children: (0, x.jsxs)("div", {
                className: "row faq-points",
                children: [
                  (0, x.jsx)("div", {
                    className: "flex text-center justify-center",
                    children: (0, x.jsx)(l.Z, {
                      isFullWidth: !0,
                      title: "Frequently Asked Questions",
                      description:
                        "Need help using Luca? Find answers to frequently asked questions here",
                    }),
                  }),
                  (0, x.jsx)(f, {}),
                  (0, x.jsx)(d.default, {
                    href: "/faqs",
                    children: (0, x.jsx)("h6", {
                      style: { marginTop: 40 },
                      className: "text-center  cursor-pointer",
                      children: "See all FAQs",
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      var f = function () {
          var e = s(c.useState(null), 2),
            n = e[0],
            t = e[1];
          return (0, x.jsx)("div", {
            className: "w-full",
            children: m.J7.map(function (e, i) {
              return (0, x.jsx)(
                g,
                {
                  title: e.title,
                  description: e.description,
                  isOpen: n === i,
                  duration: i,
                  onClick: function () {
                    return t(i === n ? null : i);
                  },
                },
                i
              );
            }),
          });
        },
        g = function (e) {
          var n = e.title,
            t = e.description,
            i = e.onClick,
            s = e.isOpen;
          e.duration;
          return (0, x.jsxs)("button", {
            onClick: i,
            "data-aos": "fade-up",
            className:
              "bg-[#f8f8f9] border w-full border-white mt-2 rounded-md relative",
            children: [
              (0, x.jsxs)("div", {
                className: "flex justify-between w-full  p-3 items-center",
                children: [
                  (0, x.jsx)("h6", {
                    className: "text-secondaryColor",
                    children: n,
                  }),
                  (0, x.jsx)(u.Dli, {
                    className: "text-secondaryColor transition-all ".concat(
                      s ? "rotate-90" : ""
                    ),
                  }),
                ],
              }),
              (0, x.jsx)("div", {
                className: "overflow-hidden transition-all border-t  ".concat(
                  s
                    ? "border-gray-200 translate-y-0"
                    : "translate-y-[100px] h-0 border-transparent"
                ),
                children: (0, x.jsx)("div", { className: "p-4", children: t }),
              }),
            ],
          });
        };
    },
    6845: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      t(7294);
      var i = t(9008),
        s = t(5893);
      function a(e) {
        var n = e.title;
        return (0, s.jsx)("div", {
          children: (0, s.jsx)(i.default, {
            children: (0, s.jsxs)("title", { children: [n, " "] }),
          }),
        });
      }
    },
    4686: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return p;
        },
      });
      var i,
        s = t(2809),
        a = t(2209),
        r = (t(7294), t(5675)),
        o = (t(338), t(6066)),
        c = t(9163),
        d = t(8556),
        l = (t(3043), t(6326), t(5893));
      function m(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, i);
        }
        return t;
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? m(Object(t), !0).forEach(function (n) {
                (0, s.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var x = c.ZP.div(
        i ||
          (i = (0, a.Z)([
            "\n  .slick-slide + div {\n    margin: 0 1rem;\n    /* height: 100%; */\n  }\n  .slick-track {\n    display: flex !important;\n    align-items: baseline;\n  }\n\n  .slick-slide {\n    height: auto;\n    display: flex;\n  }\n  //\n  h2 {\n    color: #01b5ec !important;\n  }\n  .card {\n    border-radius: 25px;\n    border: none;\n    padding: 5px;\n    /*\n border: none;\n    box-shadow: 0 0 25px rgb(0 0 0 / 6%); */\n  }\n  .card-body {\n    padding: 0;\n  }\n  .testi {\n    letter-spacing: 2px;\n    font-size: 14px;\n  }\n  .border {\n    border: none !important;\n  }\n  .list p {\n    font-size: 14px !important;\n    line-height: 1.5;\n    color: var(--secondary-color);\n    text-align: left;\n  }\n  .imageWrapper {\n    width: 60px;\n    height: 60px;\n    flex: 1;\n  }\n  .review {\n    flex: 4;\n  }\n  .imageWrapper img {\n    width: 100%;\n  }\n  .name {\n    margin-top: 12px;\n    color: #000000;\n    text-transform: capitalize !important;\n\n    mix-blend-mode: normal;\n    opacity: 0.5;\n  }\n",
          ]))
      );
      function p(e) {
        var n,
          t = e.data,
          i =
            ((n = {
              dots: !1,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
              className: "center",
              infinite: !0,
              centerPadding: "60px",
              adaptiveHeight: !0,
              cssEase: "linear",
              autoplay: !0,
            }),
            (0, s.Z)(n, "speed", 2e3),
            (0, s.Z)(n, "autoplaySpeed", 4e3),
            (0, s.Z)(n, "responsive", [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: !0,
                  dots: !0,
                },
              },
              {
                breakpoint: 980,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 580,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ]),
            n);
        return (0, l.jsx)(x, {
          children: (0, l.jsx)("section", {
            className: "Testimonials",
            children: (0, l.jsx)("div", {
              className: "container-fluid",
              children: (0, l.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, l.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, l.jsx)(d.Z, { title: "What users say" }),
                  }),
                  (0, l.jsx)("div", {
                    className: "list",
                    children: (0, l.jsx)("div", {
                      className: "row justify-content-center h-100",
                      children: (0, l.jsx)(
                        o.Z,
                        u(
                          u({}, i),
                          {},
                          {
                            children: t.map(function (e, n) {
                              return (0,
                              l.jsx)("div", { className: "card d-flex h-100 mx-0", children: (0, l.jsx)("div", { className: "card-body d-flex align-items-center", children: (0, l.jsx)("div", { children: (0, l.jsxs)("div", { className: "border d-flex ", children: [(0, l.jsx)("div", { className: "imageWrapper mr-2 pt-2", children: (0, l.jsx)(r.default, { src: e.picture, alt: "" }) }), (0, l.jsxs)("div", { className: "review", children: [(0, l.jsx)("p", { className: "m-0 ", children: e.review }), (0, l.jsx)("p", { className: "mb-0 capitalize name", children: e.name })] })] }) }) }) }, n);
                            }),
                          }
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    8556: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i,
        s = t(2209),
        a = (t(7294), t(9163)),
        r = t(5893),
        o = a.ZP.div(i || (i = (0, s.Z)([""])));
      function c(e) {
        var n = e.title,
          t = e.description,
          i = e.isWhiteTheme,
          s = e.isFullWidth;
        return (0, r.jsx)(o, {
          children: (0, r.jsxs)("div", {
            className: "sm:text-center",
            children: [
              (0, r.jsx)("h3", {
                className: "mb-3 "
                  .concat(1 == i ? "text-white" : "!text-secondaryColor", " ")
                  .concat(!0 === s ? "w-full" : "max-w-[380px]"),
                children: n,
              }),
              (0, r.jsx)("p", {
                className: "".concat(
                  1 == i ? "text-white" : "text-secondaryColor",
                  " max-w-[380px]"
                ),
                children: t,
              }),
            ],
          }),
        });
      }
    },
    2335: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return q;
          },
        });
      var i,
        s,
        a = t(7294),
        r = t(5658),
        o = t(2270),
        c = t(695),
        d = t(2209),
        l = t(9163),
        m = t(5675),
        u = t(2362),
        x = {
          src: "/_next/static/image/src/Assets/Images/get-ready-img.79e57bba2cede10c22a73e87dc60be0c.svg",
          height: 951,
          width: 519,
        },
        p = t(9886),
        h = t(8556),
        f = t(5893),
        g = l.ZP.div(
          i ||
            (i = (0, d.Z)([
              "\n  .main-box {\n    background: var(--primary-color);\n    box-shadow: 0px -9px 250px 4px rgba(1, 196, 253, 0.41);\n    border-radius: 30px;\n    max-height: 800px;\n  }\n  .title-section {\n    max-width: 300px;\n  }\n  .mirror {\n    position: absolute;\n    left: -15px;\n    bottom: -56px;\n    z-index: 0;\n  }\n\n  .features {\n    color: #01b5ec;\n    font-size: 15px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 10px;\n  }\n  .title-image {\n    display: flex;\n    justify-content: space-between;\n  }\n  .main-container {\n    padding: 3rem;\n  }\n  @media (max-width: 868px) {\n    h1 {\n      text-align: left;\n    }\n    .title-image {\n      flex-direction: column;\n    }\n    .main-container {\n      padding: 0;\n    }\n  }\n  @media (max-width: 568px) {\n    h1 {\n      text-align: left;\n    }\n    .main-box {\n      max-height: inherit;\n    }\n    .features {\n      grid-template-columns: 1fr;\n    }\n    .title-image {\n      flex-direction: column;\n    }\n    .main-container {\n      padding: 0;\n    }\n  }\n",
            ]))
        );
      function b() {
        return (0, f.jsx)(g, {
          children: (0, f.jsx)("section", {
            id: "features",
            className: "main-box container",
            "data-aos": "fade-up",
            children: (0, f.jsxs)("div", {
              className: "row main-container mx-auto",
              children: [
                (0, f.jsx)("div", {
                  className: "mirror sm:hidden",
                  children: (0, f.jsx)(m.default, {
                    src: u.Z,
                    alt: "",
                    objectFit: "contain",
                  }),
                }),
                (0, f.jsx)("div", {
                  className:
                    "absolute sm:relative top-0 z-0 w-[400px]  h-[100px] sm:hidden",
                  children: (0, f.jsx)(m.default, {
                    src: p.Z,
                    alt: "",
                    objectFit: "contain",
                  }),
                }),
                (0, f.jsxs)("div", {
                  className: "row z-10",
                  children: [
                    (0, f.jsxs)("div", {
                      className: "title-image",
                      children: [
                        (0, f.jsx)(h.Z, {
                          isWhiteTheme: !0,
                          title: "Get ready to grow your business",
                          description:
                            "No more credit sales records in a notebook. All this so that\r you can make better business decisions.",
                        }),
                        (0, f.jsx)("div", {
                          className: "w-[400px] sm:w-auto",
                          "data-aos": "fade-left",
                          "data-aos-duration": "1000",
                          children: (0, f.jsx)(m.default, {
                            src: x,
                            alt: "",
                            objectFit: "contain",
                          }),
                        }),
                      ],
                    }),
                    (0, f.jsxs)("div", {
                      className: "features !-mt-[400px] relative",
                      "data-aos": "fade-up",
                      "data-aos-duration": "1000",
                      children: [
                        (0, f.jsx)(y, {
                          title: "Something",
                          description:
                            "No more credit sales records in a notebook. All this so that you can make better business decisions",
                        }),
                        (0, f.jsx)(y, {
                          title: "Something else",
                          description:
                            "No more credit sales records in a notebook. All this so that you can make better business decisions",
                        }),
                        (0, f.jsx)(y, {
                          title: "The third else",
                          description:
                            "No more credit sales records in a notebook. All this so that you can make better business decisions",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var j,
        v = l.ZP.div(
          s ||
            (s = (0, d.Z)([
              "\n  border-radius: 20px;\n  height: 260px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(248, 248, 249, 0.8);\n  backdrop-filter: blur(2px);\n  display: grid;\n  place-content: flex-end;\n",
            ]))
        ),
        y = function (e) {
          var n = e.title,
            t = e.description;
          return (0, f.jsx)("div", {
            children: (0, f.jsx)(v, {
              children: (0, f.jsxs)("div", {
                className: "text-white p-4",
                children: [
                  (0, f.jsx)("h6", {
                    className: "me-3 mb-2 text-white",
                    children: n,
                  }),
                  t,
                ],
              }),
            }),
          });
        },
        w = t(5955),
        N = l.ZP.div(j || (j = (0, d.Z)([""])));
      function k(e) {
        var n = e.title,
          t = e.description,
          i = e.image,
          s = e.showAppStoreButtons,
          a = e.className,
          r = e.id;
        return (0, f.jsx)(N, {
          children: (0, f.jsx)("section", {
            className: "pt-[150px] sm:pt-10 ".concat(a),
            "data-aos": "fade-up",
            id: r,
            children: (0, f.jsx)("div", {
              className: "container",
              children: (0, f.jsxs)("div", {
                className: "flex md:flex-col justify-between",
                children: [
                  (0, f.jsxs)("div", {
                    className: "sm:mb-10 sm:mx-auto",
                    children: [
                      (0, f.jsx)(h.Z, { title: n, description: t }),
                      !0 === s &&
                        (0, f.jsx)("div", {
                          className: "mt-10",
                          children: (0, f.jsx)(w.Z, {}),
                        }),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    className: "max-w-[600px]",
                    "data-aos": "fade-left",
                    "data-aos-duration": "1000",
                    children: (0, f.jsx)(m.default, { src: i, alt: "" }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var A,
        Z = t(4686),
        S = {
          src: "/_next/static/image/src/Assets/Images/cookies.4e0cb0d3fe5db4f0381075b76396f940.svg",
          height: 93,
          width: 92,
        },
        _ = t(1664),
        T = l.ZP.div(
          A ||
            (A = (0, d.Z)([
              "\n  .cookies {\n    /* width: 80%; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid; */\n    position: fixed;\n    bottom: 25px;\n    z-index: 30000;\n    /* background: #fff; */\n  }\n  .cookies p {\n    font-size: 13px;\n  }\n  .cookies .modal_icon {\n    flex: 3;\n  }\n  .cookies .modal_body {\n    flex: 50;\n  }\n\n  .cookies button {\n    font-size: 13px;\n    border-radius: 20px;\n    outline: none;\n    box-shadow: none;\n    border: none;\n  }\n  .cookies .iconWrapper {\n    position: absolute;\n    left: -40px;\n    top: 10%;\n  }\n  .cookies a,\n  .cookies span {\n    color: #01b5ec;\n  }\n  .cookies a {\n    font-size: 15px;\n    text-decoration: underline !important;\n  }\n  .modal_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 100px;\n    border: none;\n    background: #fff;\n    box-shadow: 5.66245px 6.60619px 22.6498px rgba(0, 0, 0, 0.07);\n    border-radius: 11.3249px;\n  }\n  @media only screen and (max-width: 768px) {\n    .modal_container {\n      margin: 0 50px;\n    }\n  }\n  @media only screen and (max-width: 360px) {\n    .modal_container {\n      margin: 0 5px;\n    }\n    .cookies button {\n      font-size: 12px;\n      border-radius: 20px;\n    }\n  }\n",
            ]))
        );
      function C(e) {
        var n = e.handleCookies,
          t = e.cookies;
        return (0, f.jsx)(T, {
          children: (0, f.jsx)("div", {
            className: "cookies ",
            children: (0, f.jsxs)("div", {
              className: "modal_container ",
              children: [
                (0, f.jsxs)("div", {
                  className:
                    "modal_main d-flex flex-column flex-md-row align-items-center py-4 px-3 position-relative",
                  children: [
                    (0, f.jsx)("div", {
                      className: "modal_icon mr-3",
                      children: (0, f.jsx)("div", {
                        className: "iconWrapper d-none d-md-block",
                        children: (0, f.jsx)(m.default, {
                          src: S,
                          alt: "",
                          width: "70px",
                        }),
                      }),
                    }),
                    (0, f.jsxs)("div", {
                      className: "modal_body",
                      children: [
                        (0, f.jsx)("div", { className: "modal_title" }),
                        (0, f.jsxs)("p", {
                          className: "modal_description",
                          children: [
                            "We use cookies for security, navigation analysis, better experience and personalization of content in accordance with our cookies Policy and your preferences indicated in the 'Cookie Settings'",
                            (0, f.jsx)(_.default, {
                              href: "/cookies",
                              children: (0, f.jsxs)("a", {
                                className: "text-center  mx-2 mx-md-0",
                                children: [
                                  " ",
                                  (0, f.jsx)("span", {
                                    children: "Cookies Policy",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, f.jsx)("div", {
                      className: "ml-3",
                      children: (0, f.jsxs)("div", {
                        className:
                          "d-flex flex-row flex-md-column align-items-center text-center",
                        children: [
                          (0, f.jsx)("button", {
                            className: "btn-primary mx-2  p-2 mb-1",
                            onClick: function () {
                              return n(!t);
                            },
                            children: "Accept All Cookies",
                          }),
                          (0, f.jsx)(_.default, {
                            href: "/",
                            children: (0, f.jsx)("a", {
                              className: "text-center  mx-2 mx-md-0",
                              children: "cookies settings",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, f.jsx)("div", { className: "modal_footer" }),
              ],
            }),
          }),
        });
      }
      var O = t(6845),
        P = t(5447),
        z = t(4334),
        E = {
          src: "/_next/static/image/src/Assets/Images/keep-track-img.ed7952d26acfda739e711786412b75ef.svg",
          height: 534,
          width: 817,
        },
        I = {
          src: "/_next/static/image/src/Assets/Images/manage-debt.ca2d224914b41257fcebdf1ed8d5d482.svg",
          height: 528,
          width: 694,
        },
        W = {
          src: "/_next/static/image/src/Assets/Images/download-app.428491e8d6331b8d24948409feeddbaa.svg",
          height: 600,
          width: 771,
        },
        L = {
          src: "/_next/static/image/src/Assets/Images/inventory-management.9c5f773622f4c73cee5961c658431ce0.svg",
          height: 546,
          width: 728,
        };
      function q() {
        var e = (0, a.useState)(!0),
          n = e[0],
          t = e[1];
        return (0, f.jsxs)("div", {
          className: "",
          children: [
            (0, f.jsx)(O.Z, {
              title: "The most trusted book-keeping app in Nigeria \u2013 Luca",
            }),
            (0, f.jsx)(o.Z, {}),
            (0, f.jsx)(c.Z, {
              h1Text:
                "The Simplest Finance and Bookkeeping Tool for Your Business",
              buttomBorder: !0,
            }),
            (0, f.jsx)(b, {}),
            (0, f.jsx)(k, {
              title: "Keep track of your business finances",
              description:
                "Track every single Naira that your business makes and spends. Track every single Naira that your business makes and spends.",
              image: E,
            }),
            (0, f.jsx)(k, {
              title: "Manage debts from your customers",
              description:
                "Know who owes you more, and send prompt reminders to your debtors with the Luca debt tracker.",
              image: I,
            }),
            (0, f.jsx)(k, {
              title: "Inventory Management like the pros do",
              description:
                "Log your current inventory into the Luca App to manage your stock easily. Just add stock, we'll do the rest.",
              image: L,
            }),
            (0, f.jsx)(P.Z, {}),
            (0, f.jsx)(Z.Z, { data: r.jn }),
            n && (0, f.jsx)(C, { handleCookies: t, cookies: n }),
            (0, f.jsx)(k, {
              title: "Do more with your Business. Get Luca today",
              showAppStoreButtons: !0,
              className: "pb-0",
              id: "get-luca",
              description:
                "Download the Luca app today and begin your business growth journey like a champ!",
              image: W,
            }),
            (0, f.jsx)(z.Z, {}),
          ],
        });
      }
    },
    695: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var i,
        s = t(2209),
        a = (t(7294), t(5955)),
        r = t(9163),
        o = t(5893),
        c = r.ZP.div(
          i ||
            (i = (0, s.Z)([
              "\n  .bold {\n    font-weight: bold;\n  }\n  padding-top: 5rem;\n  .header .lucas-image-home {\n    width: 90%;\n  }\n  .store-buttons {\n    margin: 0 auto;\n    text-align: center;\n    justify-content: center !important;\n  }\n  h1 {\n    font-size: 49px;\n    font-weight: 900;\n  }\n  .header {\n    text-align: center;\n    margin: 0 auto;\n    max-width: 870px;\n  }\n  p {\n    color: #959595;\n    font-weight: 500;\n  }\n\n  .header button {\n    border: none;\n    background-color: transparent !important;\n  }\n  .header .headerImage img {\n    width: 70%;\n  }\n  .header .info {\n    background: #edfbff;\n  }\n  .features {\n    color: #01b5ec;\n    font-size: 15px;\n  }\n  .happy {\n    width: 70%;\n  }\n  .row {\n    z-index: 1000;\n  }\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  ul li a {\n    color: #01b5ec !important;\n    font-weight: bold;\n    /* letter-spacing: 1px; */\n  }\n  .info {\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n  }\n  .info h4 {\n    font-weight: 900 !important;\n    color: #01b5ec;\n  }\n  .info button {\n    padding: 7px 19px;\n    color: #ffff;\n    background: #01b5ec !important;\n    border: 1px solid #01b5ec;\n    border-radius: 9px;\n    font-size: 15px;\n  }\n\n  @media (max-width: 768px) {\n    p {\n      text-align: center;\n    }\n    ul {\n      text-align: center;\n    }\n  }\n",
            ]))
        );
      function d(e) {
        var n = e.h1Text,
          t = e.buttonToogle;
        return (0, o.jsx)(c, {
          children: (0, o.jsx)("section", {
            className: "header",
            children: (0, o.jsx)("div", {
              className: "container",
              children: (0, o.jsx)("div", {
                className:
                  "row justify-content-center align-items-center min-h-[300px]",
                children: (0, o.jsxs)("div", {
                  "data-aos": "fade-down",
                  children: [
                    (0, o.jsx)("h1", {
                      className: "mb-3 mb-md-4 !text-secondaryColor",
                      children: n,
                    }),
                    (0, o.jsx)("div", { className: "pe-md-4" }),
                    t
                      ? (0, o.jsx)("div", {
                          children: (0, o.jsxs)("ul", {
                            children: [
                              (0, o.jsx)("li", {
                                className: "mb-2",
                                children: (0, o.jsx)("a", {
                                  href: "#contact",
                                  children: "Phone: 070 00 880 880",
                                }),
                              }),
                              (0, o.jsx)("li", {
                                children: (0, o.jsx)("a", {
                                  href: "#contact",
                                  children: "Email: hello@luca.africa",
                                }),
                              }),
                            ],
                          }),
                        })
                      : (0, o.jsx)(a.Z, {}),
                  ],
                }),
              }),
            }),
          }),
        });
      }
    },
    8581: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(2335);
        },
      ]);
    },
    9886: function (e, n) {
      "use strict";
      n.Z = {
        src: "/_next/static/image/src/Assets/Images/get-ready-style.7c3eaa0ce16ac8dca8263aed9200e573.svg",
        height: 678,
        width: 792,
      };
    },
    2362: function (e, n) {
      "use strict";
      n.Z = {
        src: "/_next/static/image/src/Assets/Images/side.ed0a034159866e5e1af8c023a8327d10.png",
        height: 191,
        width: 260,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAcUlEQVR42jWMMQqAMBAEE2sbP+Ar9BUWIvhQC/Mce+GusBXUc3LRwLAhO9kQVqmhhxkGaEI+SSvPmGSLSW/SCrqHJJN3Lq1qHzdcLBi/jex8AZtCHh4f0uCMRVi851IWEBzkTzigzQt/CYKgCHnVpfEFjTZm/LG2Q2UAAAAASUVORK5CYII=",
      };
    },
    6586: function (e, n, t) {
      "use strict";
      function i(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, i = new Array(n); t < n; t++) i[t] = e[t];
        return i;
      }
      t.d(n, {
        Z: function () {
          return i;
        },
      });
    },
    6988: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var i = t(6586);
      function s(e, n) {
        if (e) {
          if ("string" === typeof e) return (0, i.Z)(e, n);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? (0, i.Z)(e, n)
              : void 0
          );
        }
      }
    },
  },
  function (e) {
    e.O(0, [774, 445, 617, 937, 211, 31, 765, 474, 888, 179], function () {
      return (n = 8581), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
