function submitForm(e) {
    var t = ""
      , n = !0
      , r = !0
      , a = !1;
    e.action;
    for (x = 1; x < document.getElementsByClassName("widget-line").length + 1; x++) {
        var u = !0;
        for (y = 1; y < m + b + 1; y++) {
            var o = document.getElementById("jn_" + x + "_" + y).value;
            "" != o && isNumeric(o, y) || (u = !1),
            isNumeric(o, y) || (r = !1),
            duplicates(x) && (a = !0),
            "" != o && (n = !1)
        }
        u && (t = x)
    }
    if ("" != t && r && !a) {
        var l = {};
        for (l.LotteryID = e.BrandID.value,
        l.Type = 1,
        l.Lines = [],
        i = 1; i <= t; i++) {
            var c = {
                MainNumbers: [],
                BonusNumbers: []
            };
            for (j = 1; j <= m; j++)
                c.MainNumbers.push(document.getElementById("jn_" + i.toString() + "_" + j.toString()).value);
            for (j = m + 1; j <= m + b; j++)
                c.BonusNumbers.push(document.getElementById("jn_" + i.toString() + "_" + j.toString()).value);
            l.Lines.push(c)
        }
        var d = JSON.stringify(l)
          , s = new XMLHttpRequest;
        return s.open("POST", "https://api.jackpot.com/api/ext/play-combinations", !1),
        s.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                var t = "";
                try {
                    var n = JSON.parse(this.responseText);
                    t = n.Token
                } catch (e) {
                    t = ""
                }
                e.ticket.value = t
            }
        }
        ,
        s.send(d),
        !0
    }
    return !!n || (a ? (alert("You have duplicate numbers! Please review your selections."),
    !1) : (alert("Please complete your line with valid numbers."),
    !1))
}
function isNumeric(e, t) {
    var n = "" == e || !isNaN(parseFloat(e)) && isFinite(e)
      , i = !0;
    return "" != e && (t <= m && n ? i = e >= 1 && e <= mp : t > m && t <= m + b && n && (i = e >= 1 && e <= bp)),
    n && i
}
function quickPick(e) {
    for (i = 1; i < m + 1; i++)
        document.getElementById("jn_" + e + "_" + i).SpinTimer || (document.getElementById("jn_" + e + "_" + i).SpinTimer = setInterval("document.getElementById('jn_" + e + "_" + i + "').value = Math.floor((Math.random()*" + mp + ")+1)", 40));
    if (b > 0)
        for (i = m + 1; i < m + b + 1; i++)
            document.getElementById("jn_" + e + "_" + i).SpinTimer || (document.getElementById("jn_" + e + "_" + i).SpinTimer = setInterval("document.getElementById('jn_" + e + "_" + i + "').value = Math.floor((Math.random()*" + bp + ")+1)", 40));
    setTimeout(function() {
        for (i = 1; i < m + b + 1; i++) {
            clearInterval(document.getElementById("jn_" + e + "_" + i).SpinTimer),
            document.getElementById("jn_" + e + "_" + i).SpinTimer = !1;
            for (var t = checkDuplicates(i, e); t; )
                t = checkDuplicates(i, e)
        }
    }, 300)
}
function checkDuplicates(e, t) {
    if (e <= m)
        for (var n = 1; n < m + 1; n++) {
            var i = document.getElementById("jn_" + t + "_" + e)
              , r = document.getElementById("jn_" + t + "_" + n);
            if (n != e && i.value == r.value)
                return i.value = Math.floor(Math.random() * mp + 1),
                !0
        }
    if (b > 0 && e > m)
        for (n = m + 1; n < m + b + 1; n++) {
            i = document.getElementById("jn_" + t + "_" + e),
            r = document.getElementById("jn_" + t + "_" + n);
            if (n != e && i.value == r.value)
                return i.value = Math.floor(Math.random() * bp + 1),
                !0
        }
    return !1
}
function duplicates(e) {
    for (var t = 1; t < m + 1; t++)
        for (var n = document.getElementById("jn_" + e + "_" + t), i = t + 1; i < m + 1; i++) {
            var r = document.getElementById("jn_" + e + "_" + i);
            if (t != i && n.value == r.value && "" != n.value)
                return !0
        }
    if (b > 0)
        for (t = m + 1; t < m + b + 1; t++)
            for (n = document.getElementById("jn_" + e + "_" + t),
            i = t + 1; i < m + b + 1; i++) {
                r = document.getElementById("jn_" + e + "_" + i);
                if (t != i && n.value == r.value && "" != n.value)
                    return !0
            }
    return !1
}
function clearLine(e) {
    for (i = 1; i < m + b + 1; i++)
        document.getElementById("jn_" + e + "_" + i).value = ""
}
