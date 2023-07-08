"use strict";
function _classCallCheck(n, t) {
    if (!(n instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
var _createClass = function() {
    function n(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    return function(t, i, r) {
        return i && n(t.prototype, i),
        r && n(t, r),
        t
    }
}()
  , languages = {
    en: {
        days: "Days",
        hours: "Hours",
        mins: "Mins",
        secs: "Secs",
        day: "Day",
        hour: "Hour",
        min: "Min",
        sec: "Sec"
    },
    it: {
        days: "Gio.",
        hours: "Ore",
        mins: "Min.",
        secs: "Sec."
    },
    de: {
        days: "Tage",
        hours: "Stund.",
        mins: "Min",
        secs: "Sek"
    },
    es: {
        days: "Días",
        hours: "Horas",
        mins: "Min",
        secs: "Seg"
    },
    fr: {
        days: "Jours",
        hours: "Heures",
        mins: "Mins",
        secs: "Secs"
    },
    ru: {
        days: "Дни",
        hours: "Час.",
        mins: "Мин.",
        secs: "Сек."
    },
    zh: {
        days: "天",
        hours: "时",
        mins: "分",
        secs: "秒"
    }
}
  , defaultOpts = {
    time: {
        days: {
            text: "days",
            point: 360 / 7,
            angle: 270
        },
        hours: {
            text: "hours",
            inc: 6,
            angle: 270
        },
        mins: {
            text: "mins",
            inc: 6,
            angle: 270
        },
        secs: {
            text: "secs",
            inc: 6,
            angle: 270
        }
    },
    display: ["days", "hours", "mins", "secs"],
    font: "arial, helvetica, sans-serif",
    circleBg: "rgba(150,0,0,0.1)",
    circleBgDynamic: "#F00",
    color: "#FFF",
    language: "en"
}
  , Timer = function() {
    function n() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, n);
        this.selector = document.querySelector(t.selector || defaultOpts.selector);
        this.countTo = this.selector.dataset.timer;
        this.time = t.time || defaultOpts.time;
        this.display = t.display || defaultOpts.display;
        this.font = t.font || defaultOpts.font;
        this.circleBg = t.circleBg || defaultOpts.circleBg;
        this.circleBgDynamic = t.circleBgDynamic || defaultOpts.circleBgDynamic;
        this.color = t.color || defaultOpts.color;
        this.language = t.language || document.querySelector("html").getAttribute("lang") || defaultOpts.language;
        this.canvas = this.create();
        this.ctx = this.canvas.getContext("2d");
        this.init()
    }
    return _createClass(n, [{
        key: "create",
        value: function() {
            var n = document.createElement("canvas");
            return n.width = this.width = this.selector.offsetWidth * 2,
            n.height = this.height = this.selector.offsetWidth / this.display.length * 3,
            this.selector.appendChild(n),
            this.selector.querySelector("canvas")
        }
    }, {
        key: "init",
        value: function() {
            var v = this, n = this.ctx, s = this.display.length, y = this.canvas.parentNode.classList.contains("whiteTimer") ? "#FFF" : this.color, f, l;
            for (n.clearRect(0, 0, this.canvas.width, this.canvas.height),
            f = 0; f < s; f++) {
                var i = void 0
                  , e = void 0
                  , h = void 0
                  , r = void 0
                  , u = void 0
                  , a = void 0
                  , c = this.countTo
                  , o = this.display[f]
                  , t = this.time[o];
                switch (o) {
                case "days":
                    t.value = Math.floor(c / 86400);
                    t.inc = 120;
                    break;
                case "hours":
                    t.value = Math.floor(c % 86400 / 3600);
                    break;
                case "mins":
                    t.value = Math.floor(c % 86400 % 3600 / 60);
                    break;
                case "secs":
                    t.value = c % 86400 % 3600 % 60
                }
                n.lineWidth = this.width / 50;
                i = this.width / s / 2 + this.width / s * f;
                e = this.height / 2;
                h = this.width / s / 2 - n.lineWidth;
                a = !0;
                n.beginPath();
                n.fillStyle = "#FFF";
                r = 0;
                u = Math.PI * 2;
                n.arc(i, e, h - n.lineWidth / 2, r, u, !0);
                n.fill();
                n.closePath();
                n.beginPath();
                n.strokeStyle = this.circleBg;
                r = Math.PI * 0;
                u = Math.PI * 2;
                n.arc(i, e, h, r, u, !0);
                n.stroke();
                n.closePath();
                n.beginPath();
                n.strokeStyle = this.circleBgDynamic;
                r = Math.PI / 180 * (t.angle + t.value * t.inc);
                u = Math.PI / 180 * t.angle;
                n.arc(i, e, h, r, u, a);
                n.stroke();
                n.closePath();
                n.font = this.width / 12 + "px " + this.font;
                n.fillStyle = "#333";
                n.textAlign = "center";
                n.textBaseline = "middle";
                n.fillText(t.value, i, e);
                n.font = this.width / 20 + "px " + this.font;
                n.textBaseline = "bottom";
                n.fillStyle = y;
                t.value === 1 && (l = o.slice(0, -1),
                languages[this.language][l] !== undefined && (o = l));
                n.fillText(languages[this.language][o], i, this.height)
            }
            this.countTo--;
            this.countTo >= 0 && setTimeout(function() {
                window.requestAnimationFrame(function() {
                    v.init()
                })
            }, 1e3)
        }
    }]),
    n
}()
