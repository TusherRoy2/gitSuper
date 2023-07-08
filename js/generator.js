function Generate(n) {
    if (!Spinning) {
        let i = new XMLHttpRequest
          , r = document.getElementById("chooseNumbers");
        var t;
        Spinning = !0;
        r && r.classList.remove("is-active");
        for (let n = 0; n < MainNumbers + BonusNumbers; n++) {
            let t = document.getElementById("GR" + n);
            t.parentNode.parentNode.classList.remove("ballSpin");
            t.SpinTimer = setInterval(function() {
                t.innerHTML = Math.floor(Math.random() * (n < MainNumbers ? TopMain : TopBonus) + 1)
            }, 60)
        }
        // !Link changed from "/includes/ajax-generator?LotteryID="
        i.open("GET", "https://www.randomnumberapi.com/api/v1.0/randomredditnumber?min=10&max=99&count=7", !0);
        i.send(null);
        i.onreadystatechange = function() {
            if (i.readyState == 4 && i.responseText != "Error!") {
                t = i.responseText.split(",");
                for (let n = 0; n < MainNumbers + BonusNumbers; n++) {
                    let i = document.getElementById("GR" + n);
                    setTimeout(function() {
                        clearInterval(i.SpinTimer);
                        i.innerHTML = t[n];
                        i.parentNode.parentNode.classList.add("ballSpin")
                    }, n * 200 + 1e3)
                }
                setTimeout(function() {
                    Spinning = !1;
                    r && r.classList.add("is-active")
                }, (MainNumbers + BonusNumbers) * 350)
            } else if (i.readyState == 4 && i.responseText == "Error!")
                return alert("An error has occurred. The numbers could not be generated"),
                !1
        }
    }
}
function selectNum(n, t) {
    var r = n.dataset.num, u = 756, o, s;
    t.includes(r) ? (t.splice(t.indexOf(r), 1),
    n.classList.remove("Selected")) : n.classList.contains("Disabled") || (t.push(r),
    n.classList.add("Selected"));
    var h = sysBonus.length >= MainNumbers ? 314 : 378
      , f = ncr(sysMain.length, MainNumbers)
      , e = ncr(sysBonus.length, BonusNumbers)
      , i = 0;
    f >= 1 && sysBonus.length >= 1 ? (i = f * e,
    o = ncr(TopMain, MainNumbers) / f,
    s = ncr(TopBonus, BonusNumbers) / e,
    document.getElementById("odds").innerHTML = parseInt(o * s).toLocaleString("en")) : document.getElementById("odds").innerHTML = "0";
    document.getElementById("chosen-main").innerHTML = sysMain.length;
    document.getElementById("chosen-bonus").innerHTML = sysBonus.length;
    document.getElementById("combinations").innerHTML = i;
    sysMain.length >= 12 || i > h ? disableMain() : i < u && enableMain();
    sysBonus.length >= 8 || i >= u ? disableBonus() : i < u && enableBonus();
    ["9-7", "10-3", "11-2", "12-1"].includes(sysMain.length + "-" + sysBonus.length) && disableAll();
    viewBtn.className = sysMain.length >= MainNumbers && sysBonus.length >= BonusNumbers ? "btn -green" : "btn -green is-disabled"
}
function showCombos() {
    var n;
    if (viewBtn.classList.contains("is-disabled"))
        return !1;
    n = [getCombinations(sysMain, MainNumbers).map(n=>n.map(n=>"<li>" + n + "<\/li>")), getCombinations(sysBonus, BonusNumbers).map(n=>n.map(n=>"<li class='superstar'>" + n + "<\/li>"))];
    sysMain.sort();
    sysBonus.sort();
    document.getElementById("combs_data").innerHTML = n.reduce((n,t)=>n.flatMap(n=>t.map(t=>n + t))).map(n=>"<ul class='balls'>" + n + "<\/ul>").toString().replace(/,/g, "");
    var t = ncr(sysMain.length, MainNumbers)
      , i = ncr(sysBonus.length, BonusNumbers)
      , r = t * i
      , u = ncr(TopMain, MainNumbers) / t
      , f = ncr(TopBonus, BonusNumbers) / i;
    document.getElementById("o_combs").innerHTML = r;
    document.getElementById("o_odds").innerHTML = parseInt(u * f).toLocaleString("en");
    overlay.style.display = "block"
}
function getCombinations(n, t, i=[]) {
    return t == 0 ? [i] : n.flatMap((r,u)=>getCombinations(n.slice(u + 1), t - 1, [...i, r]))
}
function disableMain() {
    var n = document.querySelectorAll(".checker-numbers a:not(.Selected)");
    for (let t = 0; t < n.length; t++)
        n[t].classList.add("Disabled")
}
function disableBonus() {
    var n = document.querySelectorAll(".checker-stars a:not(.Selected)");
    for (let t = 0; t < n.length; t++)
        n[t].classList.add("Disabled")
}
function disableAll() {
    disableMain();
    disableBonus()
}
function enableMain() {
    var n = document.querySelectorAll(".checker-numbers a:not(.Selected)");
    for (let t = 0; t < n.length; t++)
        n[t].classList.remove("Disabled")
}
function enableBonus() {
    var n = document.querySelectorAll(".checker-stars a:not(.Selected)");
    for (let t = 0; t < n.length; t++)
        n[t].classList.remove("Disabled")
}
function factorial(n) {
    var t = 1;
    if (n > 1)
        for (let i = n; i > 0; i--)
            t *= i;
    return t
}
function ncr(n, t) {
    return factorial(n) / (factorial(t) * factorial(n - t))
}
var Spinning = !1
  , sysMain = []
  , sysBonus = []
  , viewBtn = document.getElementById("view-combinations")
  , overlay = document.getElementById("combs")
  , closeOverlay = document.getElementById("closeOverlay")
  , MainNumbers = 6
  , BonusNumbers = 1
  , TopMain = 90
  , TopBonus = 90;
addLoadEvent(function() {
    var n = document.querySelectorAll(".checker-numbers a")
      , t = document.querySelectorAll(".checker-stars a");
    for (let t = 0; t < n.length; t++)
        n[t].addEventListener("click", function() {
            selectNum(this, sysMain)
        });
    for (let n = 0; n < t.length; n++)
        t[n].addEventListener("click", function() {
            selectNum(this, sysBonus)
        });
    viewBtn && viewBtn.addEventListener("click", function() {
        showCombos()
    });
    closeOverlay && closeOverlay.addEventListener("click", function() {
        overlay.style.display = "none"
    })
})
