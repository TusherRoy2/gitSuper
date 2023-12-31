(()=>{
    function r(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        t = e;
        if (void 0 !== t)
            return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, function(e) {
                e = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 === n)
                        return ("string" === t ? String : Number)(e);
                    n = n.call(e, t || "default");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }(e, "string");
                return "symbol" == typeof e ? e : String(e)
            }(o.key), o)
        }
    }
    function a(e, t, n) {
        t && o(e.prototype, t),
        n && o(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        })
    }
    function e(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]"))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e))
                    return n.get(e);
                n.set(e, t)
            }
            function t() {
                return i(e, arguments, u(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            l(t, e)
        }(e)
    }
    function i(e, t, n) {
        return (i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return;
            if (Reflect.construct.sham)
                return;
            if ("function" == typeof Proxy)
                return 1;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                1
            } catch (e) {}
        }() ? Reflect.construct.bind() : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            t = new (Function.bind.apply(e, o));
            return n && l(t, n.prototype),
            t
        }
        ).apply(null, arguments)
    }
    function l(e, t) {
        return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    var t = function(e) {
        var t = n;
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        function n() {
            if (!(this instanceof n))
                throw new TypeError("Cannot call a class as a function");
            var o = r(this, u(n).call(this))
              , e = document.querySelector("#transover-tat-popup-template").content.cloneNode(!0);
            o.attachShadow({
                mode: "open"
            }).appendChild(e);
            const t = ()=>{
                var e = o.q("#tat_input").value;
                window.postMessage({
                    type: "transoverTrackEvent",
                    event: {
                        ec: "translate",
                        ea: "popup",
                        el: "characters",
                        ev: e.length
                    }
                }, "*"),
                window.postMessage({
                    type: "transoverTranslate",
                    text: e,
                    tl: o.q("#tat_to_lang").value,
                    sl: o.q("#tat_from_lang").value
                }, "*")
            }
            ;
            return o.q("#swap_languages").onclick = ()=>{
                var e, t, n;
                o.q("#swap_languages").classList.contains("disabled") || (e = o.q("#tat_to_lang"),
                t = o.q("#tat_from_lang"),
                n = e.value,
                e.value = t.value,
                t.value = n)
            }
            ,
            o.q("#tat_from_lang").onchange = ()=>{
                "auto" == o.q("#tat_from_lang").value ? o.q("#swap_languages").classList.add("disabled") : o.q("#swap_languages").classList.remove("disabled")
            }
            ,
            o.q("main").onkeydown = e=>{
                13 == e.keyCode && t(),
                27 != e.keyCode && e.stopPropagation()
            }
            ,
            o.q("#disable_on_this_page").onchange = e=>{
                window.postMessage({
                    type: "toggle_disable_on_this_page",
                    disable_on_this_page: e.target.checked
                }, "*")
            }
            ,
            o.q("#tat_close").onclick = e=>{
                window.postMessage({
                    type: "tat_close"
                }),
                e.preventDefault()
            }
            ,
            o.q("#tat_submit").onclick = t,
            o
        }
        return t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && l(t, e),
        a(n, null, [{
            key: "observedAttributes",
            get: function() {
                return ["data-languages", "data-disable_on_this_page"]
            }
        }]),
        a(n, [{
            key: "connectedCallback",
            value: function() {
                this.q("#tat_input").focus()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(e, t, n) {
                if ("data-languages" == e) {
                    var o = this.q("#tat_from_lang")
                      , r = this.q("#tat_to_lang")
                      , a = JSON.parse(n);
                    let e = !0;
                    for (const s in a) {
                        var i = new Option(a[s].label,s)
                          , l = new Option(a[s].label,s);
                        a[s].selected_sl && (e = !1,
                        i.setAttribute("selected", !0)),
                        a[s].selected_tl && l.setAttribute("selected", !0),
                        o.appendChild(i),
                        r.appendChild(l)
                    }
                    var u = document.createElement("optgroup")
                      , u = (u.label = "----------",
                    o.insertBefore(u, o.firstChild),
                    new Option("Autodetect","auto"));
                    o.insertBefore(u, o.firstChild),
                    e && (u.setAttribute("selected", !0),
                    this.q("#swap_languages").classList.add("disabled"))
                } else
                    "data-disable_on_this_page" === e && (this.q("#disable_on_this_page").checked = JSON.parse(n))
            }
        }, {
            key: "q",
            value: function(e) {
                return this.shadowRoot.querySelector(e)
            }
        }]),
        n
    }(e(HTMLElement));
    window.customElements.define("transover-type-and-translate-popup", t)
}
)();
