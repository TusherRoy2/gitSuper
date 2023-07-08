function promoSlide(n) {
    var t = document.getElementById("jackpotPromo");
    t && (n == "up" ? t.classList.add("popped") : (t.classList.remove("popped"),
    t.classList.add("hidden")))
}
function promoFade(n) {
    var t = document.getElementById("jackpotPromo");
    t && (n == "in" ? t.classList.add("popped") : (t.classList.remove("popped"),
    t.classList.add("hidden"),
    setTimeout(function() {
        t.style.display = "none"
    }, 1e3)))
}
function getCookie(n) {
    for (var r, u, i = document.cookie.split(";"), t = 0; t < i.length; t++)
        if (r = i[t].substr(0, i[t].indexOf("=")),
        u = i[t].substr(i[t].indexOf("=") + 1),
        r = r.replace(/^\s+|\s+$/g, ""),
        r == n)
            return unescape(u)
}
function setCookie(n, t, i) {
    t || (t = n);
    i || (i = 1);
    var r = new Date;
    r.setDate(r.getDate() + i);
    document.cookie = n + "=" + t + "; expires=" + r.toUTCString() + "; path=/"
}
function getURL(n) {
    var t = n.getElementsByTagName("a");
    for (let n = 0; n < t.length; n++) {
        t[0].getAttribute("href") !== "" && (window.location = t[0].getAttribute("href"));
        break
    }
}
function wrapTables() {
    var t = document.querySelectorAll("table"), i = [], r = document.querySelector("#content"), u, n;
    if (r) {
        u = r.clientWidth;
        for (let r = 0; r < t.length; r++)
            t[r].scrollWidth > u && t[r].parentNode.tagName.toLowerCase() != "td" && t[r].parentNode.className.indexOf("mobTableContainer") == -1 && t[r].id !== "chart-table" && (n = t[r],
            i[r] = document.createElement("div"),
            n.parentNode.insertBefore(i[r], n),
            n.parentNode.removeChild(n),
            i[r].className = "mobTableContainer",
            i[r].appendChild(n),
            i[r].onscroll = function() {
                this.className = this.className.indexOf("topper") != -1 ? "mobTableContainer trans topper" : "mobTableContainer trans"
            }
            ,
            n.clientHeight < 1060 && (i[r].className += " topper"))
    }
}
function searchField(n, t) {
    var u = n.value, r, i, f, e;
    for (u = u.toLowerCase(),
    r = document.querySelectorAll(".js-searched tr"),
    i = 0; i < r.length; i++)
        f = r[i].querySelectorAll("td")[t],
        e = f.innerHTML.toLowerCase(),
        r[i].style.display = e.match(u) ? "table-row" : "none"
}
function searchNumber(n) {
    var u = n.value, i, t, r;
    for (u = u.toLowerCase(),
    i = document.querySelectorAll(".smorfia-box"),
    t = 0; t < i.length; t++)
        r = i[t].dataset.word,
        r = r.toLowerCase(),
        i[t].style.display = r.match(u) ? "block" : "none"
}
function checkedBtn(n) {
    var t = n.parentNode.querySelector(".btn-filter");
    n.checked ? (t.classList.remove("is-active"),
    sortBy(n, "num")) : (t.classList.add("is-active"),
    sortBy(n, "word"))
}
function sortBy(n, t) {
    for (var e, u = n.parentNode.parentNode.parentNode.querySelector(".smorfia-wrap"), f = u.querySelectorAll(".smorfia-box"), i = [], r = 0; r < f.length; r++)
        i.push(f[r]);
    i.sort(function(n, i) {
        return t != "num" ? n.dataset[t].localeCompare(i.dataset[t]) : n.dataset[t] - i.dataset[t]
    });
    e = i.map(function(n) {
        return n.outerHTML
    }).join("");
    u.innerHTML = e
}
function calculateTax(n, t) {
    var i = n.value, r;
    i = strToNum(i);
    r = comma(i);
    n.value = r;
    var u = deduction(i, t).toFixed(2)
      , f = comma(u)
      , e = comma((i - u).toFixed(2));
    document.querySelector("#tax-deducted").innerHTML = f;
    document.querySelector("#post-tax").innerHTML = e
}
function strToNum(n) {
    return (n = parseInt(n.replace(/,/g, "")),
    isNaN(n)) ? 0 : n
}
function deduction(n, t) {
    return n > t ? (n - t) / 5 : 0
}
function comma(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
addLoadEvent(function() {
    var n = document.querySelector(".sidebar-wrap"), i, r, f, t, e, o, s, u, h, c, l, a, v;
    n && window.addEventListener("scroll", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            var u = this.pageYOffset
              , t = document.querySelector("body").scrollHeight
              , i = document.querySelector(".main")
              , f = document.querySelector("footer")
              , r = u + n.offsetHeight + f.offsetHeight + 10;
            n.offsetHeight < i.offsetHeight ? this.pageYOffset >= i.offsetTop && r <= t ? (n.style.position = "fixed",
            n.style.top = "0px",
            n.style.bottom = "auto") : r >= t ? (n.style.position = "absolute",
            n.style.top = "auto",
            n.style.bottom = "10px") : n.style.position = "relative" : n.style.position = "relative"
        } else
            document.querySelector(".sidebar-wrap").style.position = "relative"
    });
    document.querySelector(".navOpen").addEventListener("click", function() {
        if (window.innerWidth <= 1199) {
            var n = document.querySelector("body");
            n.classList.toggle("open");
            n.classList.toggle("noScroll");
            this.classList.toggle("active")
        }
    });
    i = document.querySelectorAll(".sub");
    r = document.querySelectorAll(".subMenu");
    for (let n = 0; n < i.length; n++)
        i[n].addEventListener("click", function(n) {
            if (window.innerWidth <= 1199 && !this.clicked) {
                this.clicked = !0;
                for (let n = 0; n < r.length; n++)
                    r[n].classList.remove("open");
                this.querySelector(".subMenu").classList.add("open");
                n.preventDefault();
                n.stopPropagation()
            }
        });
    f = document.querySelector(".m-languages");
    t = document.querySelector(".subLanguages");
    f && t && f.addEventListener("click", function(n) {
        t.classList.toggle("is-open");
        n.preventDefault();
        n.stopPropagation()
    });
    e = document.querySelector("#m-search");
    e && e.addEventListener("click", function() {
        document.querySelector(".search-main form").classList.toggle("is-open");
        this.classList.toggle("is-active")
    });
    o = document.querySelectorAll("select,input,textarea");
    for (let n = 0; n < o.length; n++)
        o[n].addEventListener("click", function(n) {
            n.stopPropagation()
        });
    s = document.querySelectorAll(".container,.container-fluid");
    for (let n = 0; n < s.length; n++)
        s[n].addEventListener("click", function() {
            document.activeElement.blur();
            i.forEach(function(n) {
                n.clicked = !1
            });
            r.forEach(function(n) {
                n.classList.remove("open")
            });
            var n = document.querySelector(".languages");
            t && t.classList.remove("is-open")
        });
    u = document.getElementById("jackpotHome");
    u && window.innerWidth > 768 && (u.style.marginTop = u.offsetTop * -1 + 10 + "px");
    h = document.querySelectorAll(".btn-nav");
    for (let n = 0; n < h.length; n++)
        h[n].addEventListener("click", function() {
            var n = this.dataset.nav
              , t = document.querySelectorAll(".game.is-left")
              , i = document.querySelectorAll(".game.is-active")
              , r = document.querySelectorAll(".game.is-right");
            for (let t = 0; t < i.length; t++)
                i[t].classList.remove("is-active"),
                i[t].classList.add(n == "next" ? "is-left" : "is-right");
            for (let i = 0; i < t.length; i++)
                t[i].classList.remove("is-left"),
                t[i].classList.add(n == "next" ? "is-right" : "is-active");
            for (let t = 0; t < r.length; t++)
                r[t].classList.remove("is-right"),
                r[t].classList.add(n == "next" ? "is-active" : "is-left")
        });
    if (c = document.getElementById("casinos"),
    c) {
        let n = c.querySelectorAll(".casino");
        n[0].classList.add("is-active");
        setInterval(function() {
            for (let t = 0; t < n.length; t++)
                if (n[t].classList.contains("is-active")) {
                    n[t].classList.remove("is-active");
                    t == n.length - 1 ? n[0].classList.add("is-active") : n[t + 1].classList.add("is-active");
                    break
                }
        }, 3e3)
    }
    l = document.querySelectorAll(".tab");
    for (let n = 0; n < l.length; n++)
        l[n].addEventListener("click", function() {
            this.parentElement.querySelector(".expandable").classList.toggle("is-active");
            this.classList.toggle("is-active")
        });
    a = document.getElementById("chart-table");
    a && a.addEventListener("click", function() {
        document.getElementById("cTable").classList.toggle("is-active");
        document.querySelector(".btn-switch").classList.toggle("is-active")
    });
    v = document.getElementById("showMatching");
    v && v.addEventListener("click", function() {
        document.querySelector(".btn-switch").classList.toggle("is-active");
        let n = document.querySelectorAll("tbody tr:not(.won)");
        for (let t = 0; t < n.length; t++)
            n[t].classList.toggle("hidden")
    });
    setTimeout(function() {
        wrapTables()
    }, 100)
})
