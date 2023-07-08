(()=>{
    function r(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        e = t;
        if (void 0 !== e)
            return e;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, function(t) {
                t = function(t, e) {
                    if ("object" != typeof t || null === t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 === n)
                        return ("string" === e ? String : Number)(t);
                    n = n.call(t, e || "default");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }(t, "string");
                return "symbol" == typeof t ? t : String(t)
            }(r.key), r)
        }
    }
    function i(t, e, n) {
        e && o(t.prototype, e),
        n && o(t, n),
        Object.defineProperty(t, "prototype", {
            writable: !1
        })
    }
    function t(t) {
        var n = "function" == typeof Map ? new Map : void 0;
        return function(t) {
            if (null === t || -1 === Function.toString.call(t).indexOf("[native code]"))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t))
                    return n.get(t);
                n.set(t, e)
            }
            function e() {
                return u(t, arguments, f(this).constructor)
            }
            return e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            c(e, t)
        }(t)
    }
    function u(t, e, n) {
        return (u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return;
            if (Reflect.construct.sham)
                return;
            if ("function" == typeof Proxy)
                return 1;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                1
            } catch (t) {}
        }() ? Reflect.construct.bind() : function(t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            e = new (Function.bind.apply(t, r));
            return n && c(e, n.prototype),
            e
        }
        ).apply(null, arguments)
    }
    function c(t, e) {
        return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var e = function(t) {
        var e = n;
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        function n() {
            var t, e;
            if (this instanceof n)
                return t = r(this, f(n).call(this)),
                e = document.querySelector("#transover-popup-template").content.cloneNode(!0),
                t.attachShadow({
                    mode: "open"
                }).appendChild(e),
                t;
            throw new TypeError("Cannot call a class as a function")
        }
        return e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && c(e, t),
        i(n, null, [{
            key: "observedAttributes",
            get: function() {
                return ["content", "top", "left", "width", "height", "options"]
            }
        }]),
        i(n, [{
            key: "attributeChangedCallback",
            value: function(t, e, n) {
                var r, o = this.shadowRoot.querySelector("main");
                "content" == t ? (o.innerHTML = n,
                setTimeout(function() {
                    var t = this.shadowRoot.querySelector("main")
                      , e = window.getComputedStyle(t)
                      , e = (this.setAttribute("content-width", parseFloat(e.width)),
                    this.setAttribute("content-height", parseFloat(e.height)),
                    this.setAttribute("outer-width", t.offsetWidth),
                    this.setAttribute("outer-height", t.offsetHeight),
                    new CustomEvent("transover-popup_content_updated"));
                    this.dispatchEvent(e)
                }
                .bind(this), 0)) : "options" == t ? (r = JSON.parse(n)["fontSize"],
                o.style["font-size"] = r + "px") : "top" == t ? o.style.top = n + "px" : "left" == t ? o.style.left = n + "px" : "width" == t ? o.style.width = n + "px" : "height" == t && (o.style.height = n + "px")
            }
        }]),
        n
    }(t(HTMLElement));
    window.customElements.define("transover-popup", e)
}
)();
