window._mrmcp = window._mrmcp || {};
var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) { for (var d = "", c, b, e, g, h, f, i = 0, a = Base64._utf8_encode(a); i < a.length;) c = a.charCodeAt(i++), b = a.charCodeAt(i++), e = a.charCodeAt(i++), g = c >> 2, c = (c & 3) << 4 | b >> 4, h = (b & 15) << 2 | e >> 6, f = e & 63, isNaN(b) ? h = f = 64 : isNaN(e) && (f = 64), d = d + this._keyStr.charAt(g) + this._keyStr.charAt(c) + this._keyStr.charAt(h) + this._keyStr.charAt(f); return d },
        decode: function(a) {
            for (var d = "", c, b, e, g, h, f = 0, a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); f <
                a.length;) c = this._keyStr.indexOf(a.charAt(f++)), b = this._keyStr.indexOf(a.charAt(f++)), g = this._keyStr.indexOf(a.charAt(f++)), h = this._keyStr.indexOf(a.charAt(f++)), c = c << 2 | b >> 4, b = (b & 15) << 4 | g >> 2, e = (g & 3) << 6 | h, d += String.fromCharCode(c), g != 64 && (d += String.fromCharCode(b)), h != 64 && (d += String.fromCharCode(e));
            return d = Base64._utf8_decode(d)
        },
        _utf8_encode: function(a) {
            for (var a = a.replace(/\r\n/g, "\n"), d = "", c = 0; c < a.length; c++) {
                var b = a.charCodeAt(c);
                b < 128 ? d += String.fromCharCode(b) : (b > 127 && b < 2048 ? d += String.fromCharCode(b >>
                    6 | 192) : (d += String.fromCharCode(b >> 12 | 224), d += String.fromCharCode(b >> 6 & 63 | 128)), d += String.fromCharCode(b & 63 | 128))
            }
            return d
        },
        _utf8_decode: function(a) { for (var d = "", c = 0, b = c1 = c2 = 0; c < a.length;) b = a.charCodeAt(c), b < 128 ? (d += String.fromCharCode(b), c++) : b > 191 && b < 224 ? (c2 = a.charCodeAt(c + 1), d += String.fromCharCode((b & 31) << 6 | c2 & 63), c += 2) : (c2 = a.charCodeAt(c + 1), c3 = a.charCodeAt(c + 2), d += String.fromCharCode((b & 15) << 12 | (c2 & 63) << 6 | c3 & 63), c += 3); return d }
    },
    AniObj = window.AniObj || function(a) { a && a.fatherDom && this.bindEvent(a.fatherDom) };
AniObj.prototype.createProperty = function(a, d, c, b) { var e = this,
        g = c,
        h = d || function() {};
    Object.defineProperty(e, a, { set: function(a) { if (g != a || b) g = a, h.call(e, a) }, get: function() { return g } }) };
AniObj.prototype.bindEvent = function(a) {
    for (var d = document.querySelectorAll(a + " [on-click]"), c = this, b = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i), e = 0, a = d.length; e < a; e++)(function() {
        var a = function(a) { a.preventDefault();
                with(c) eval(h) },
            h = d[e].getAttribute("on-click");
        b ? d[e].addEventListener("touchend",
            a) : d[e].addEventListener("mouseup", a)
    })()
};
window.AniObj = AniObj;
AniObj.getMyGaTrackId = function() { var a = 0;
    window._gaq && window._gaq.push && _gaq.push(function() { var d = _gat._getTrackers();
        d && (d = d[0]) && (a = d._visitCode()) }); return a };
var customImage = function(a, d, c) {
        if (window.mucard == null) return c(a);
        var b = [],
            e = 0;
        for (id in MugedaCard.data)
            for (var g = MugedaCard.data[id].obj, h = 0; h < g.length; h++) { var f = g[h];
                (f.cardRefParam === "image" || f.cardRefParam === "signature" || f.cardRefParam === "masked") && function() { e++; var a = new Image;
                    a.src = f.oriSrc || f.dom.src; var d = { id: id, name: f.name, defaultUrl: f.oriSrc || f.src, url: null };
                    a.onload = function() { e--;
                        d.width = a.width;
                        d.height = a.height;
                        b.push(d);
                        e == 0 && i() } }() } e == 0 ? c(a) : d.cancel = true;
        var i = function() {
            if (b.length >
                0)
                if (MugedaCard.picSelectForm) MugedaCard.picSelectForm.visible = true;
                else {
                    var f = document.createElement("div");
                    f.id = "mpopupForm";
                    f.innerHTML = '    <style>        body a{ -webkit-tap-highlight-color: transparent;}        #mpopupForm { font-family: Tahoma,"\u5fae\u8f6f\u96c5\u9ed1",Arial, SimHei; }        #mpopupForm input{ font-family: Tahoma,"\u5fae\u8f6f\u96c5\u9ed1",Arial, SimHei; }        #mpopupForm .highlight {color: #d60;}        #mpopupFormFrame { position: absolute; border-radius: 4px; background-color: rgba(255,255,255, 1); width: 300px; height: 360px; margin: auto; top: 50%; margin-top: -180px; left: 50%; margin-left: -150px; }        #mpopupFormFrame div.title { text-align: center; border-bottom: 1px solid; padding: 5px 0; }        #mpopupFormFrame div.mcontent { height: 283px; text-align: center; }        #mpopupFormFrame div.image-frame { height: 218px; position: absolute; left: 0; right: 0}        #mpopupFormFrame #img_t {border: 0; position: absolute; top: 100px; left: 140px; display: none;}        #mpopupFormFrame div.image-name {text-align:left; height: 48px; vertical-align: middle;font-size:12px;padding: 5px 5px; display: inline-block; width: 212px}        #mpopupFormFrame span.image-btn{ display: inline-block; height: 48px;vertical-align: middle;}        #mpopupFormFrame div.mcontent #img_n { border: solid 1px black; position: absolute; }        #mpopupFormFrame .mask { background:black; opacity: 0.75; position: absolute; }        #mpopupFormFrame .changeBottom {bottom: 50px; position: absolute; width: 100%; }        #mpopupFormFrame .maskTop { left:0; right:0; top: 0; }        #mpopupFormFrame .maskLeft { left:0; }        #mpopupFormFrame .maskRight { right:0; }        #mpopupFormFrame .maskBottom { left:0; right:0; bottom: 0; }        #mpopupFormFrame .maskMid { position: absolute; border:1px white solid;}        #mpopupFormFrame .maskMid .corner { position: absolute; width: 30px; height: 30px;}        #mpopupFormFrame .maskMid .corner .cornerinner{ position: absolute; width: 30px; height: 30px; left: -15px; top: -15px; background: rgba(255, 255, 255, 0.5); border:1px solid white; -webkit-border-top-left-radius:15px; -webkit-border-top-right-radius:15px; -webkit-border-bottom-right-radius:15px; -webkit-border-bottom-left-radius:15px; background-repeat: no-repeat; background-position: center; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDY5RTQ2OUJBMzcwMTFFM0IwNUM5MTQxNzg4ODg1QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDY5RTQ2OUNBMzcwMTFFM0IwNUM5MTQxNzg4ODg1QzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjlFNDY5OUEzNzAxMUUzQjA1QzkxNDE3ODg4ODVDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjlFNDY5QUEzNzAxMUUzQjA1QzkxNDE3ODg4ODVDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PukyTYAAAAF+SURBVHjaYrSxsfnAz8/PyIAF8PLy/nvx4gXb58+fVYHcZ9jUnDlzBkyz/Pr1i3vLli0s2BR1dnb+3LVr1x1chiADJlwSIEN279596uPHj4YMRAAmfIZ8+PDBGcj9TbZBIPD//38hICXIQCRgQXcJiC4vL2d3d3fXLi4u3gf0mhNQ6BXRLjp06BADyDsgDGIbGBgw9Pb2agNjdB9QWoygQVxcXL8uXLjA0NjYeBUYJiEgDGKDxNAMY8Vr0Ldv39gKCwufIHnhFYgN9BbcMDc3NxWgYefxGcZobGzMCaS/Y5ETAybIs3PnzpVRUlKCpylocoDFpBgnJ+ctUFpkwmEICLwCpmjj5OTkJ/fu3QNHAJrLwBYtXLiQH2/04zNMQEBgLyjc+vv7ZaSlpTGjn4BhZ0EaQYYBxcyAyYMdFH4/f/4k2iC4YaB0BXIR1DDiUjapgFgXiYHCBJSmQN4h2yBQ7AANkcFlCCwdETJHCmjQbW5u7j+4FHz9+vUTQIABAKL6w4LVWfrWAAAAAElFTkSuQmCC"); }        #mpopupFormFrame div.btn-line { border-top: 1px solid; height: 44px; text-align: center; line-height: 40px; }        #mpopupFormFrame .btn { margin: 0 17px; min-width: 60px; height: 28px; line-height: 28px; border-radius: 4px; border-width: 1px; font-size: 12px; background-color: #EEEEEE; border-color: #DDDDDD; display: inline-block; text-align: center; text-decoration: none; color: black; }        #mpopupFormFrame .btn.pre { min-width: 32px; margin: 0 8px 0 0}        #mpopupFormFrame .btn.next{ min-width: 32px; margin: 0 0 0 8px}        #mpopupFormFrame .btn.ok{ background-color: #989898; color: #ffffff }        #mpopupFormFrame .btn img { vertical-align: middle; margin-top: -2px;}        #mpopupFormFrame .btn:hover { -webkit-box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); -moz-box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); box-shadow: 0 0 8px rgba(82, 168, 236, 0.6); }    </style>        <div id="mpopupFormFrame">            <div class="title">\u5b9a\u5236\u5fae\u5361\u56fe\u7247</div>            <div class="mcontent">                <div class="image-frame">                    <img class="image" id="img_n" src="i/5306dc958a840f6029000209.png" />                    <img class="image" id="img_t" src="i/loading.gif" />                    <div class="mask maskTop"></div>                    <div class="mask maskLeft"></div>                    <div class="mask maskRight"></div>                    <div class="mask maskBottom"></div>                    <div class="maskMid">                        <\!--<div class="corner cornertop"><div class="cornerinner"></div></div>--\>                        <div class="corner cornerbottom" style="bottom: 0; right: 0; -webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -ms-transform: rotate(180deg);"><div class="cornerinner"></div></div>                    </div>                </div>                <div class="changeBottom">                    <div class="image-name">fsadsafd</div>                    <span class="image-btn" href="#" on-click="changePic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAA3NCSVQICAjb4U/gAAAAh1BMVEX///+1tbWtra2lpaWZmZmtra2lpaWZmZmUlJSlpaWZmZmUlJSMjIylpaWZmZmUlJSlpaWZmZmUlJSMjIylpaWZmZmUlJSlpaWZmZmUlJSlpaWUlJSZmZmUlJSZmZmUlJSMjIyZmZmUlJSMjIyZmZmUlJSMjIyZmZmMjIyUlJSMjIyUlJSMjIz80hmnAAAALXRSTlMAERERESIiIiIzMzMzREREVVVVVWZmZnd3d4iImZmqqqq7u7vMzMzd3e7u///F7f0SAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzAzLzE0I/anSwAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAHjSURBVEiJlVZrY4IgFCUtrbYs23KVY5Q2RsT//30D4+XFV+eTxTncB4erCAVY7K53IXH/2S3CVYikIIwLDc7IIRmkZ9iSrQhnvfQ1huwn8LqbXwS7G7Cigz7r2V4HCYuth/hC1HGbH/0O86UiauVTjfGFIL5gMP+OOg5T+ELkhr9g0wRs8UpCCqU+YPsH/z6ejgNyvgIBmHLaaixE6hzBlWmyAQFL/RZxWqnf64pWEHbP3MuIbbo9qbAxCnkWEW23oDHKvrxc8N6zj9mVxk58squZNgp1V6d0fToLGCFzVzSHAvGFblCQKD4nhJm2tQRX9IACtUbSKFpi4QxnBX9IAMFc7lw9vU9kiBQI7oHgTT7qK7yVj1kggCm9y8etNpms5iNICRatrLjXEbjVWsFP0NZY1YBMDQLW8IlWvC1oDhVL20ZNu8KDi6E1Gvcygpv/4TnUc2cTe9K5bZywE88IsLfuzJfpoMw6wwpy5C6Q59Y4J3VNitCtbO6paYp6kVJ/U9MnVvZCzyGegCaPwWQ9eZDZol4dlRNnn9fGp21G0Br3E14QZNbudDQSg0QIYrCOMqCrXvV21zNVC0n3CfKy//NhXQYvd1b2fAdoLA+YuslHcb4cpDeIN+ebnCWP23kTh6v/wm3rjE22m34AAAAASUVORK5CYII="></span>                </div>            </div>            <div class="btn-line">                <span class="btn pre" href="#" on-click="prePic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAMAAAAo0TYrAAAAA3NCSVQICAjb4U/gAAAAOVBMVEX///9aWlpSUlJSUlJSUlJKSkpSUlJSUlJSUlJKSkpSUlJKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqFAFptAAAAE3RSTlMAEREiMzNEVWZ3iIiZqrvM3e7/drsrQAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8wMy8xNCP2p0sAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAaUlEQVQYlW3PRxKAIAxA0VBEVGruf1ghUgya3fvMBACYcwIbh44T0atBX4jZNEli2joDUf9TxcrYd6lElI2aGETjTvTjXhPZ8WdbD2mG5XoA8bzWLCHPQL9l4aoBLQ9+7gQ40Al4jy28AVjhB8s5wRi2AAAAAElFTkSuQmCC"></span>                <span class="btn ok" href="#" on-click="submit()">\u5b8c\u6210</span>                <span class="btn cancel" href="#" on-click="cancel()">\u53d6\u6d88</span>                <span class="btn next" href="#" on-click="nextPic()"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAMAAAAo0TYrAAAAA3NCSVQICAjb4U/gAAAAPFBMVEX///9ZWVlSUlJZWVlSUlJSUlJKSkpSUlJSUlJSUlJKSkpSUlJKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqcLCF9AAAAFHRSTlMAEREiIjMzRFVmd4iImaq7zN3u//3tMD0AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDMvMDMvMTQj9qdLAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAGtJREFUGJV9j0kSgCAMBAOCiMqa//9VCMUSDubWXalMBgDgATYO3UKHR1yFyYXRT3EmEnIITSL8CBWriGoISSJNIQIJPWM8iYsvRMMv9gjVEvu97QGTWIWtUcPR2FbCd5bxDMsnLt+wjrALfLwCCEsyPE8bAAAAAElFTkSuQmCC"></span>            </div>        </div>';
                    document.body.appendChild(f);
                    (function() {
                        var f = MugedaCard.picSelectForm = new AniObj({ fatherDom: "#mpopupForm" }),
                            j = document.querySelectorAll("#mpopupFormFrame .image-frame")[0].offsetWidth,
                            e = document.querySelectorAll("#mpopupFormFrame .image-frame")[0].offsetHeight,
                            h = document.querySelectorAll("#mpopupFormFrame .maskLeft")[0],
                            g = document.querySelectorAll("#mpopupFormFrame .maskRight")[0],
                            i = document.querySelectorAll("#mpopupFormFrame .maskTop")[0],
                            y = document.querySelectorAll("#mpopupFormFrame .maskBottom")[0],
                            v = document.querySelectorAll("#mpopupFormFrame .maskMid")[0];
                        document.querySelectorAll("#mpopupFormFrame div.mcontent .image");
                        var s = document.querySelector("#mpopupFormFrame div.mcontent #img_t"),
                            w = function(a, b, f, d) {
                                a = Math.round(a);
                                b = Math.round(b);
                                f = Math.round(f);
                                d = Math.round(d);
                                i.style.bottom = e - a + "px";
                                y.style.top = f + "px";
                                h.style.right = j - d + "px";
                                h.style.top = a + "px";
                                h.style.bottom = e - f + "px";
                                g.style.left = b + "px";
                                g.style.top = a + "px";
                                g.style.bottom = e - f + "px";
                                v.style.top = a + "px";
                                v.style.left = d + "px";
                                v.style.right =
                                    j - b + "px";
                                v.style.bottom = e - f + "px"
                            };
                        w(0, j, e, 0);
                        var t = 0,
                            p = 0,
                            q = j,
                            o = e,
                            k = 1,
                            n, u, A, B, C, E = function(a, d, c, j, e, h, g, i, m, l) { g == null && (g = c * e, i = j * e, h > i / g ? (m = i / h, g = i) : (m = g, g *= h), g = [m, g], m = g[0], l = g[1], g = a + c * e / 2 - m / 2, i = d + j * e / 2 - l / 2, k = h, n = a, u = d, A = e, B = c * e, C = j * e);
                                t = g;
                                p = i;
                                q = m;
                                o = l;
                                b[f.currentId].clipLeft = Math.round((g - n) / A);
                                b[f.currentId].clipTop = Math.round((i - u) / A);
                                b[f.currentId].clipWidth = Math.round(m / A);
                                b[f.currentId].clipHeight = Math.round(l / A);
                                w(i, g + m, i + l, g) },
                            D = function(a, b, f) {
                                var d;
                                f > b / a ? (d = a, a *= f) : (d = b / f, a = b);
                                return [d,
                                    a
                                ]
                            };
                        (function() {
                            var a = false,
                                b = function(a) { return a.touches && a.touches.length ? [a.touches[0].clientX, a.touches[0].clientY] : [a.clientX, a.clientY] },
                                f = null,
                                d = false;
                            startX = 0;
                            startY = 0;
                            startMask = null;
                            var c = function(c) { c.target.className != "cornerinner" && c.target.className != "maskMid" || (c.preventDefault(), a || (a = true, f = c.target.parentElement.className.indexOf("top") > -1, d = c.target.className.indexOf("maskMid") > -1, c = b(c), startX = c[0], startY = c[1], startMask = { l: t, t: p, w: q, h: o })) },
                                j = function(c) {
                                    if (a) {
                                        c.preventDefault();
                                        var j = b(c),
                                            c = j[0] - startX,
                                            j = j[1] - startY;
                                        if (d) c = startMask.l + c, j = startMask.t + j, g = startMask.w, e = startMask.h, c < n && (c = n), j < u && (j = u), c + g > n + B && (c = n + B - g), j + e > u + C && (j = u + C - e);
                                        else if (f) { var c = startMask.w - c,
                                                j = startMask.h - j,
                                                e = D(c, j, k),
                                                c = startMask.l + startMask.w - e[0],
                                                j = startMask.t + startMask.h - e[1],
                                                g = e[0],
                                                e = e[1]; if (c < n) { var h = n - c;
                                                g -= h;
                                                c = n;
                                                j += h * k;
                                                e -= h * k } j < u && (h = u - j, e -= h, j = u, c += h / k, g -= h / k);
                                            g < 30 && (c -= 30 - g, g = 30);
                                            e < 30 && (j -= 30 - e, e = 30) } else c = startMask.w + c, j = startMask.h + j, e = D(c, j, k), c = startMask.l, j = startMask.t, g = e[0], e =
                                            e[1], c + g > n + B && (h = c + g - (n + B), g -= h, e -= h * k), j + e > u + C && (h = j + e - (u + C), e -= h, g -= h / k), g < 30 && (g = 30), e < 30 && (e = 30);
                                        E(null, null, null, null, null, null, c, j, g, e)
                                    }
                                },
                                e = function(b) { a && (b.preventDefault(), a = false) };
                            navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? (document.addEventListener("touchstart",
                                c), document.addEventListener("touchmove", j), document.addEventListener("touchend", e), document.addEventListener("touchcacel", function() { a = false })) : (document.addEventListener("mousedown", c), document.addEventListener("mousemove", j), document.addEventListener("mouseup", e))
                        })();
                        f.createProperty("visible", function(a) { document.querySelector("#mpopupForm").style.display = a ? "block" : "none" }, true);
                        f.createProperty("imageUrl", function(a) {
                            var c = document.querySelector("#mpopupForm .image"),
                                d = c.src;
                            c.style.display =
                                "none";
                            s.style.display = "block";
                            var g = new Image;
                            g.src = a;
                            g.onerror = function() { f.imageUrl = d;
                                typeof mucard != "undefined" && mucard.reportStatus && mucard.reportStatus({ status: 1, desc: "Failed to load the specified URL", value: a });
                                s.style.display = "none" };
                            g.onload = function() {
                                s.style.display = "none";
                                c.src = a;
                                c.onload = function() { c.style.display = "block" };
                                c.style.border = "1px solid #000";
                                var d = 1,
                                    h = b[f.currentId].height / b[f.currentId].width,
                                    i = g.width,
                                    m = g.height;
                                D(i, m, h);
                                d = g.height / g.width;
                                d < 212 / 292 ? (i = 292, m = i * d, d = i / g.width) :
                                    (m = 212, i = m / d, d = m / g.height);
                                D(i, m, h);
                                var h = (j - i) / 2,
                                    x = (e - m) / 2;
                                c.style.left = h - 1 + "px";
                                c.style.top = x - 1 + "px";
                                c.style.height = m + "px";
                                c.style.width = i + "px";
                                E(h, x, g.width, g.height, d, b[f.currentId].height / b[f.currentId].width, null, null, null, null)
                            }
                        }, null, true);
                        f.createProperty("imageName", function() { document.querySelector("#mpopupForm .image-name").innerHTML = '\u70b9\u51fb\u53f3\u4fa7<span class="highlight">\u76f8\u673a\u56fe\u6807</span>\u53ef\u4ee5\u66f4\u6362\u56fe\u7247\uff1b\u70b9\u51fb<span class="highlight">\u5b8c\u6210</span>\u786e\u8ba4\u6216\u8005\u8df3\u8fc7\u56fe\u50cf\u5b9a\u5236\uff0c\u5e76\u9884\u89c8\u5b9a\u5236\u540e\u7684\u5fae\u5361\uff1b\u70b9\u51fb<span class="highlight">\u53d6\u6d88</span>\u56de\u5230\u5fae\u5361\u3002' },
                            null);
                        f.createProperty("currentId", function(a) { f.imageUrl = b[a].url || b[a].defaultUrl;
                            f.imageName = b[a].name; var c = document.querySelector("#mpopupForm .btn-line .pre");
                            c.disabled = a > 0 ? false : true;
                            c.style.opacity = c.disabled ? 0.3 : 1;
                            c.style.visibility = c.disabled ? "hidden" : "visible";
                            c = document.querySelector("#mpopupForm .btn-line .next");
                            c.disabled = a < b.length - 1 ? false : true;
                            c.style.opacity = c.disabled ? 0.3 : 1;
                            c.style.visibility = c.disabled ? "hidden" : "visible" }, null);
                        f.checkCompelete = function() {
                            for (var a = true, a = 0, c =
                                    b.length; a < c; a++)
                                if (!b[a].url) break;
                            a = true;
                            document.querySelector("#mpopupForm .btn-line .ok").style.display = a ? "inline-block" : "none"
                        };
                        f.prePic = function() { document.querySelector("#mpopupForm .btn-line .pre").disabled || f.currentId-- };
                        f.nextPic = function() { document.querySelector("#mpopupForm .btn-line .next").disabled || f.currentId++ };
                        f.changePic = function() {
                            var a = null;
                            if (typeof mucard != "undefined" && mucard.useCustomImage) setTimeout(function() {
                                mucard.useCustomImage(function(c) {
                                    if (c.status == 0) {
                                        if (a = c.url) f.imageUrl =
                                            a, b[f.currentId].url = a, f.checkCompelete()
                                    } else alert("\u5728\u83b7\u53d6\u56fe\u7247\u6570\u636e\u65f6\u51fa\u9519\uff01\u9519\u8bef\u4fe1\u606f\uff1a" + c.desc)
                                }, {})
                            }, 500);
                            else if (confirm("\u7531\u4e8e\u6d4f\u89c8\u5668\u7684\u9650\u5236\uff0c\u60a8\u9700\u8981\u4e0b\u8f7d\u5b89\u88c5\u6728\u7599\u7629\u5fae\u5361\u5e94\u7528\u624d\u80fd\u8fdb\u884c\u56fe\u7247\u5b9a\u5236\u3002\u60a8\u7684\u670b\u53cb\u6536\u5230\u5fae\u5361\u540e\u4e0d\u9700\u8981\u5b89\u88c5\u4efb\u4f55\u5e94\u7528\u5c31\u53ef\u4ee5\u89c2\u770b\u5fae\u5361\u3002\u60a8\u9700\u8981\u73b0\u5728\u5b89\u88c5\u5fae\u5361\u5e94\u7528\u5417\uff1f")) {
                                var c =
                                    navigator.userAgent.toLowerCase(),
                                    d = c.indexOf("android") > -1,
                                    c = parseFloat(c.slice(c.indexOf("android") + 8));
                                d && c < 3 ? location.href = "install.html" : window.open("install.html")
                            }
                            if (a) f.imageUrl = a, b[f.currentId].url = a, f.checkCompelete()
                        };
                        f.submit = function() { f.visible = false; for (var j = a.split("&"), e = 0; e < b.length; e++) b[e].url && j.push(b[e].id + "=" + JSON.stringify({ u: b[e].url, l: b[e].clipLeft, t: b[e].clipTop, w: b[e].clipWidth, h: b[e].clipHeight }));
                            a = j.join("&");
                            c(a);
                            d.callback() };
                        f.cancel = function() { f.visible = false };
                        f.currentId = 0;
                        f.checkCompelete()
                    })()
                }
            else c(a)
        }
    },
    customWechatAuth = typeof _mrmcp == "undefined" ? null : _mrmcp.wechatAuth,
    customWechatShare = typeof _mrmcp == "undefined" ? null : _mrmcp.wechatShare,
    finalizeCustomParameters = function(a, d) {
        customImage(a, d, function(a, b) {
            var b = b || {},
                e = encodeURIComponent(Base64.encode(decodeURIComponent(a))),
                g = generateUrl(),
                h = g.indexOf("#") == -1 ? g.length : g.indexOf("#"),
                f = g.indexOf("?") == -1 ? h : g.indexOf("?"),
                i = g.substr(0, f),
                f = g.substr(f, h - f);
            g.substr(h, g.length - h);
            g = i + f;
            f && (f = f.substr(1));
            i = f.split("&");
            h = "";
            for (f = i.length - 1; f >= 0; f--) i[f].toLowerCase().indexOf("custom=") === 0 ? i.splice(f, 1) : b.receiptCard && i[f].toLowerCase().indexOf("hash=") == 0 ? i.splice(f, 1) : h += (h.length > 0 ? "&" : "") + i[f];
            i = "";
            h && (i = "&");
            e = g.split("?")[0] + "?" + h + i + "custom=" + e + location.hash;
            b.receiptCard ? (e = encodeURIComponent(e), MugedaCard.makeRequest(_mrmcp.receiptUrl || "http://weika.mugeda.com/server/invite_card.php/custom", "GET", { redirect: e, "public": b["public"] ? 0 : 1, crid: gup("crid") }, true)) : d.cancel !== true && d.callback(e)
        })
    },
    data = {},
    customMugedaParameters = {},
    addCustomMugedaParameters = function(a, d) { a = (a || "").replace(/\#/g, "%23");
        customMugedaParameters[a] = d },
    _getQueryArgs = function() { for (var a = {}, d = window.location.search.substring(1).split("&"), c = 0; c < d.length; c++) { var b = d[c].split("="); if (typeof a[b[0]] === "undefined") a[b[0]] = decodeURIComponent(b[1]);
            else if (typeof a[b[0]] === "string") { var e = [a[b[0]], decodeURIComponent(b[1])];
                a[b[0]] = e } else a[b[0]].push(decodeURIComponent(b[1])) } return a },
    MugedaTools = window.MugedaTools = window.MugedaTools || {};
MugedaTools.addCustomMugedaParameters = addCustomMugedaParameters;
MugedaTools.getCustomMugedaParameters = _getQueryArgs;
var defineCustomParameters = function(a, d) {
        MugedaCard.data = data = MugedaCard.data || {};
        for (var c = 0; c < d.length; c++)
            for (var b = d[c], e = b.formName || (new Date).getTime() + "" + MugedaCard.sum++, g = b.mugedaObj, b = data[e] = { des: b.formDescription, userUndefined: b.userUndefined, obj: (data[e] ? data[e].obj : []) || [] }, e = 0; e < g.length; e++) {
                var h = g[e].name,
                    f = g[e].attribute;
                if (f == "receipt") b.type = f;
                else if (f != "data") {
                    for (var h = h.split("/"), i = { scene: a }, j = 0; j < h.length; j++)
                        if (i.scene) i = i.scene.getObjectByName(h[j]);
                        else throw "getObjectByName error!";
                    if (i) i.cardRefParam = f, b.obj.push(i)
                }
            }
        if (Mugeda.getMugedaObject().evt) Mugeda.getMugedaObject().evt.stopLoad = true;
        activateCustomParameters()
    },
    activateCustomParameters = function() {
        var a = window.location.href.split("?"),
            d = function() { for (var a in MugedaCard.data) { var c = MugedaCard.data[a];!c.handled && c.userUndefined && c.userUndefined() } };
        location.search.indexOf("&custom=") == -1 && window.mucard == null && d();
        if (a.length > 1 && a[1]) {
            for (var a = a[1], a = a.substr(0, a.length - location.hash.length), a = a.split("&"), c = 0, b = 0; b <
                a.length; b++) {
                var e = a[b].split("=");
                if (e.length > 1 && e[0].toLowerCase() == "custom") {
                    if (!e[1]) { d(); break }
                    for (var a = Base64.decode(decodeURIComponent(e[1])).split("&"), g = {}, b = 0; b < a.length; b++) e = a[b].split("="), e.length == 2 && (g[e[0]] = e[1]);
                    for (name in g)
                        if (name[0] !== "_" && (a = MugedaCard.data[name], a == null && typeof name == "string" && name.length >= 5 && name.indexOf("form") == 0 && (a = name.replace("form", ""), a = a.substr(0, 1).toLowerCase() + a.substr(1), a = MugedaCard.data[a]), a && (a.handled = true, a))) {
                            a.value = g[name];
                            for (b = 0; b <
                                a.obj.length; b++) {
                                var h = a.obj[b];
                                h.cardRefParam == "image" || h.cardRefParam == "signature" || h.cardRefParam === "masked" ? (c++, function() {
                                    var a = new Image,
                                        b = h,
                                        d;
                                    try { d = JSON.parse(g[name]) } catch (f) { setTimeout(function() { throw "error when parse card custom param: " + encodeURIComponent(location.href); }); return } a.src = d.u;
                                    a.onload = function() {
                                        var f = new Image;
                                        f.src = b.src;
                                        f.onload = function() {
                                            var f = b.dom,
                                                e = d.w,
                                                g = d.h,
                                                i = b.width / e,
                                                x = b.height / g,
                                                z = a.width * i,
                                                t = a.height * x,
                                                p = d.l * i,
                                                q = d.t * x,
                                                o = document.createElement("div");
                                            b.dom.parentElement.replaceChild(o,
                                                b.dom);
                                            b.oriSrc = b.src;
                                            o.className = f.className;
                                            o.style.cssText = f.style.cssText;
                                            h.cardRefParam == "image" || h.cardRefParam == "masked" ? (o.appendChild(f), f.setAttribute("style", null), f.className = "", f.style.width = z + "px", f.style.height = t + "px", f.style.clip = "rect(" + q + "px " + (p + e * i) + "px " + (q + g * x) + "px " + p + "px)", f.style.position = "absolute", f.style.marginLeft = -p + "px", f.style.marginTop = -q + "px", b.src = a.src) : h.cardRefParam == "signature" && (o.style.cssText += "background-image: url(" + a.src + ");background-size:" + z + "px " + t +
                                                "px;background-position: " + -p + "px " + -q + "px;");
                                            b.dom = o;
                                            --c == 0 && Mugeda.getMugedaObject().evt && Mugeda.getMugedaObject().evt.goOnLoad()
                                        }
                                    };
                                    a.onerror = function() {--c == 0 && Mugeda.getMugedaObject().evt.goOnLoad() }
                                }()) : h[h.cardRefParam] = g[name]
                            }
                        }
                    d();
                    break
                }
            }
            Mugeda.getMugedaObject().evt && c == 0 && Mugeda.getMugedaObject().evt.goOnLoad()
        } else Mugeda.getMugedaObject().evt && Mugeda.getMugedaObject().evt.goOnLoad();
        var f = gup("t"),
            f = gup("t") || 0,
            i = function() {
                if (!window.MugedaTracker) return setTimeout(i, 1E3);
                MugedaTracker.fireEvent({
                    category: "\u5fae\u5361",
                    action: "\u6253\u5f00",
                    label: "f=" + f + "&i=" + AniObj.getMyGaTrackId() + "&in=" + AniObj.envir.getEnvirName() + "&t=" + (new Date).getTime(),
                    value: 0
                })
            };
        i()
    };
AniObj.envir = function() { var a = {},
        d = navigator.userAgent.toLowerCase();
    a.isWeixin = function() { return d.match(/MicroMessenger/i) == "micromessenger" };
    a.isApp1 = function() { return window.mucard != null };
    a.isApp = a.isApp1;
    a.isApp2 = function() { return d.indexOf("mugedacardandroidwebview_v1.5") > -1 };
    a.getEnvirName = function() { return a.isWeixin() ? "weixin" : a.isApp1() ? "app1" : a.isApp2() ? "app2" : "other" }; return a }();
var prevFormHolder = null,
    updateForm = function() { var a = document.querySelectorAll(".popupForm"); if (a && a[0] && prevFormHolder != a[0] && (prevFormHolder = a[0], a[0].style.position = "absolute", document.querySelectorAll("form")))
            for (name in data) { var d = data[name],
                    a = d.value,
                    d = "_mcp_" + escape(d.des || ""); if ((d = document.getElementById(d)) && a != void 0) d.value = a } setTimeout(updateForm, 1E3) };
updateForm();

function audioPack(a) { this.url = a;
    this.audioObj = void 0; var d = this;
    Object.defineProperty(this, "loop", { set: function(a) { d.audioLoop = a;
            d.audioObj && (d.audioObj.loop = a) }, get: function() { return 1 == d.audioLoop } }) } audioPack.prototype.play = function() { this.createAudioObject(); if (2 == this.loadStatus) this.audioObj.play();
    else { var a = this,
            d = function() { a.audioObj.play();
                a.audioObj.removeEventListener("canplay", d) };
        this.loadStatus == 0 && (this.audioObj.load(), this.audioObj.addEventListener("canplay", function() { d() })) } };
audioPack.prototype.pause = function() { this.audioObj.pause() };
audioPack.prototype.createAudioObject = function() { if (!this.audioObj) this.audioObj = new Audio, this.audioObj.preload = "none", this.audioObj.loop = 1 == this.audioLoop; var a = this;
    this.audioObj.addEventListener("canplay", function() { a.loadStatus = 2;
        a.cb && a.cb() }); if (-1 == this.audioObj.src.indexOf(this.url)) this.audioObj.src = this.url, this.loadStatus = 0 };
audioPack.prototype.cacheAudio = function(a) { this.createAudioObject();
    this.cb = a;
    this.loadStatus == 0 ? (this.audioObj.load(), this.loadStatus = 1) : this.loadStatus == 2 && this.cb && this.cb() };
var loadAudio = function(a, d) { d = d || {};
        d.cache = false;
        d.callback = d.callback || function() {}; var c = new audioPack(a);
        d.callback(c); return c },
    weiParam = {};
window._mrmcp && (weiParam = { img_url: _mrmcp.thumb, title: _mrmcp.title, desc: _mrmcp.description });
defineWechatParameters = function(a) { for (item in a) weiParam[item] = a[item];
    weiParam.success_share_callback_report = function(a) { window.rpWX && window.rpWX("share", a);
        (weiParam.success_share_callback || function() {})(a) };
    weiParam.defined = true; try { bindWeiEvent(weiParam) } catch (d) {} typeof mucard != "undefined" && mucard.share && mucard.share(weiParam.title || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u6807\u9898", weiParam.desc || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u63cf\u8ff0", weiParam.img_url || "http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg") };

function gup(a) { a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href); return a == null ? "" : a[1] }
var bindWeiEvent = function() { weiParam.defined && bindWei(weiParam) },
    bindWeiEvent_old = function() {
        function a() {
            return location.href.indexOf("preview_css3.html") > -1 ? location.href.substr(0, location.href.length - location.search.length - location.hash.length) + "?custom=" + gup("custom") + "&id=" + gup("id") + "&audio=" + gup("audio") : location.href.substr(0, location.href.length - location.search.length - location.hash.length) + "?t=" + AniObj.getMyGaTrackId() + "&custom=" + gup("custom") + "&crid=" + gup("crid") + (gup("audio") ? "&audio=" +
                gup("audio") : "") + (gup("hash") ? "&hash=" + gup("hash") : "") + (gup("s") ? "&s=" + (parseInt(gup("s")) + 1) : "&s=1")
        }
        if (typeof WeixinJSBridge == "undefined") throw "I cannot find WeixinJSBridge";
        WeixinJSBridge.on("menu:share:appmessage", function() {
            WeixinJSBridge.invoke("sendAppMessage", {
                appid: "",
                img_url: weiParam.img_url || "http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg",
                img_width: weiParam.img_width || 128,
                img_height: weiParam.img_height || 128,
                link: typeof weiParam.url_callback == "function" ? weiParam.url_callback : a(),
                desc: weiParam.fdesc || weiParam.desc || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u63cf\u8ff0",
                title: weiParam.ftitle || weiParam.title || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u6807\u9898"
            }, function(a) { if (a.err_msg == "send_app_msg:confirm" || a.err_msg == "send_app_msg:ok")(weiParam.success_share_callback_report || function() {})("send"), MugedaTracker.fireEvent({ category: "\u5fae\u5361", action: "\u8f6c\u53d1", label: "i=" + AniObj.getMyGaTrackId() + "&t=" + (new Date).getTime(), value: 0 }) })
        });
        WeixinJSBridge.on("menu:share:timeline", function() {
            WeixinJSBridge.invoke("shareTimeline", { appid: "", img_url: weiParam.img_url || "http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg", img_width: weiParam.img_width || 128, img_height: weiParam.img_height || 128, link: typeof weiParam.url_callback == "function" ? weiParam.url_callback : a(), desc: weiParam.fsdesc || weiParam.desc || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u63cf\u8ff0", title: weiParam.fstitle || weiParam.title || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u6807\u9898" }, function(a) {
                if (a.err_msg == "share_timeline:confirm" || a.err_msg == "share_timeline:ok")(weiParam.success_share_callback_report ||
                    function() {})("share"), MugedaTracker.fireEvent({ category: "\u5fae\u5361", action: "\u5206\u4eab", label: "i=" + AniObj.getMyGaTrackId() + "&t=" + (new Date).getTime(), value: 0 })
            })
        });
        if (!weiParam.binded) weiParam.binded = true
    };

function generateUrl() {
    var a = "",
        d = "",
        c;
    for (c in customMugedaParameters) "t,custom,crid,audio,hash,s,nickname,avatar,token,openid".split(",").indexOf(c) > -1 || (a += d + c + "=" + customMugedaParameters[c], d = "&");
    return location.href.indexOf("preview_css3.html") > -1 ? location.href.substr(0, location.href.length - location.search.length - location.hash.length) + "?custom=" + gup("custom") + "&id=" + gup("id") + "&audio=" + gup("audio") + (a ? "&" + a : "") : location.href.substr(0, location.href.length - location.search.length - location.hash.length) +
        "?t=" + AniObj.getMyGaTrackId() + "&custom=" + gup("custom") + "&crid=" + gup("crid") + (gup("audio") ? "&audio=" + gup("audio") : "") + (gup("hash") ? "&hash=" + gup("hash") : "") + (gup("s") ? "&s=" + (parseInt(gup("s")) + 1) : "&s=1") + (a ? "&" + a : "")
}
var isBindWeiEvent = false,
    newWeixinCustomSave = {},
    newWeixinCustomObj = {};
Object.defineProperty(newWeixinCustomObj, "imgUrl", { get: function() { return newWeixinCustomSave.imgUrl || "http://cdn-cn.mugeda.com/weixin/card/i/card_logo_default.jpg" }, set: function(a) { if (a) newWeixinCustomSave.imgUrl = a } });
Object.defineProperty(newWeixinCustomObj, "desc", { get: function() { return newWeixinCustomSave.desc || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u63cf\u8ff0" }, set: function(a) { if (a) newWeixinCustomSave.desc = a } });
Object.defineProperty(newWeixinCustomObj, "title", { get: function() { return newWeixinCustomSave.title || "\u8bf7\u5b9a\u4e49\u5206\u4eab\u6807\u9898" }, set: function(a) { if (a) newWeixinCustomSave.title = a } });
Object.defineProperty(newWeixinCustomObj, "url_callback", { get: function() { return newWeixinCustomSave.url_callback ? newWeixinCustomSave.url_callback() : generateUrl() }, set: function(a) { if (a) newWeixinCustomSave.url_callback = a } });
Object.defineProperty(newWeixinCustomObj, "link", { get: function() { return newWeixinCustomSave.url_callback ? newWeixinCustomSave.url_callback() : generateUrl() } });
var bindWei = function(a) {
    var d = "",
        c = "",
        b;
    for (b in customMugedaParameters) d += c + b + "=" + customMugedaParameters[b], c = "&";
    var e = customWechatShare || {};
    if (e.link) e.url_callback = function() { c = e.link.indexOf("?") >= 0 ? "&" : "?"; return e.link + (d ? c + d : "") };
    if (a.link) a.url_callback = function() { c = a.link.indexOf("?") >= 0 ? "&" : "?"; return a.link };
    newWeixinCustomObj.imgUrl = e.imageUrl || a.img_url || a.thumb;
    newWeixinCustomObj.desc = e.desc || a.fdesc || a.desc || a.mdesc;
    newWeixinCustomObj.title = e.title || a.ftitle || a.title || a.mtitle;
    newWeixinCustomObj.timelineTitle =
        e.timelineTitle || a.timelineTitle || newWeixinCustomObj.title || a.ftitle || a.title || a.mtitle;
    newWeixinCustomObj.url_callback = e.url_callback || a.url_callback;
    AniObj.envir.isApp() && window.mucard && mucard.share && mucard.share(newWeixinCustomObj.title, newWeixinCustomObj.desc, newWeixinCustomObj.imgUrl);
    if (!window.WeixinJSBridge || WeixinJSBridge._hasInit === false) document.addEventListener("WeixinJSBridgeReady", function() { bindWei(a) });
    else {
        var g = function(a) {
            return a.replace(RegExp("\\{\\{(.*?)\\}\\}", "g"), function(a,
                c) { var b = c.split("."),
                    f = c,
                    d = "";
                b && b.length == 2 && (f = b[0], d = b[1]);
                b = ""; var e = f,
                    g = Mugeda.getMugedaObject(); if (typeof g == "undefined") f = null;
                else { var e = e || "",
                        h = e.split("/"),
                        f = null;
                    h && h.length > 1 ? (e = h[1], (g = g.scene.getObjectByName(h[0])) && g.scene && (f = g.scene.getObjectByName(e))) : f = g.scene.getObjectByName(e) } f && (b = d ? f[d] : f.text || ""); return b }).toString()
        };
        isBindWeiEvent = true;
        var h = wxHelper.wxjs_status;
        h.newapi ? h.config_ok && [{ status: "friend_share_ok", event: "onMenuShareAppMessage", cb: "send", ac: "\u8f6c\u53d1" },
            { status: "timeline_share_ok", event: "onMenuShareTimeline", cb: "share", ac: "\u5206\u4eab" }, { status: "qq_share_ok", event: "onMenuShareQQ", cb: "QQ", ac: "qq" }, { status: "weibo_share_ok", event: "onMenuShareWeibo", cb: "weibo", ac: "\u5fae\u535a" }
        ].forEach(function(b) {
            var c = b.event == "onMenuShareTimeline",
                d = {
                    success: function() {
                        (a.success_share_callback_report || function() {})(b.cb);
                        MugedaTracker && MugedaTracker.fireEvent({ category: "\u5fae\u5361", action: b.ac, label: "i=" + AniObj.getMyGaTrackId() + "&t=" + (new Date).getTime(), value: 0 }) },
                    cancel: function() {}
                };
            Object.defineProperty(d, "imgUrl", { get: function() { return newWeixinCustomObj.imgUrl } });
            Object.defineProperty(d, "desc", { get: function() { return g(newWeixinCustomObj.desc) } });
            Object.defineProperty(d, "title", { get: function() { return g(c ? newWeixinCustomObj.timelineTitle : newWeixinCustomObj.title) } });
            Object.defineProperty(d, "link", { get: function() { return newWeixinCustomObj.url_callback } });
            h[b.status] && wx[b.event](d)
        }) : [{
            event: "menu:share:appmessage",
            action: "sendAppMessage",
            mes1: "send_app_msg:confirm",
            mes2: "send_app_msg:ok",
            cb: "send",
            ac: "\u8f6c\u53d1"
        }, { event: "menu:share:timeline", action: "shareTimeline", mes1: "share_timeline:confirm", mes2: "share_timeline:ok", cb: "share", ac: "\u5206\u4eab" }].forEach(function(b) {
            window.WeixinJSBridge.on(b.event, function() {
                window.WeixinJSBridge.invoke(b.action, { appid: "wx75babd529e23776c", img_url: newWeixinCustomObj.imgUrl, img_width: 128, img_height: 128, link: newWeixinCustomObj.link, desc: newWeixinCustomObj.desc, title: newWeixinCustomObj.title }, function(c) {
                    if (c.err_msg == b.mes1 ||
                        c.err_msg == b.mes2)(a.success_share_callback_report || function() {})(b.cb), MugedaTracker && MugedaTracker.fireEvent({ category: "\u5fae\u5361", action: b.ac, label: "i=" + AniObj.getMyGaTrackId() + "&t=" + (new Date).getTime(), value: 0 })
                })
            })
        })
    }
};
window.MugedaCard = {};
MugedaCard.finalizeCustomParameters = finalizeCustomParameters;
MugedaCard.defineCustomParameters = defineCustomParameters;
MugedaCard.defineWechatParameters = defineWechatParameters;
MugedaCard.data = data;
MugedaCard.sum = 0;
MugedaCard.MugedaUrl = function(a) {
    var d = { Username: 4, Password: 5, Port: 7, Protocol: 2, Host: 6, Pathname: 8, URL: 0, Querystring: 9, Fragment: 10 },
        c = {},
        b = {},
        e = function(a) { return function() { return b[a] } },
        g;
    for (g in d) b[g] = "", c["get" + g] = e(g);
    if (a = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/.exec(a))
        for (g in d) typeof a[d[g]] != "undefined" && (b[g] = a[d[g]]);
    var d = b.Querystring.split("&"),
        h = {};
    for (g = 0; g < d.length; g++) a = d[g].split("="), a.length == 2 && (h[a[0]] = a[1]);
    c.getQueryObj = function() { return h };
    c.getQuerystring = function() { var a = [],
            b; for (b in h) a.push(b + "=" + h[b]); return a.join("&") };
    c.setFragment = function(a) { b.Fragment = a };
    c.getURL = function() { var a = "";
        b.Protocol && (a += b.Protocol + "://"); if (b.Username || b.Username) a += b.Username + ":" + b.Password + "@";
        b.Host && (a += b.Host);
        b.Port && (a += ":" + b.Port);
        b.Pathname && (a += b.Pathname);
        c.getQuerystring() && (a += "?" + c.getQuerystring());
        b.Fragment && (a += "#" + b.Fragment); return a };
    return c
};
MugedaCard.MugedaUrl.current = new MugedaCard.MugedaUrl(location.href);
MugedaCard.makeRequest = function(a, d, c, b, e) {
    if (b) { b = document.createElement("form");
        b.action = a;
        b.method = d; for (var g in c || {}) a = document.createElement("input"), a.type = "hidden", a.name = g, a.value = c[g], b.appendChild(a);
        b.submit() } else {
        g = [];
        for (item in c) g.push(item + "=" + c[item]);
        g = g.join("&");
        var h = new window.XMLHttpRequest;
        h.onreadystatechange = function() {
            if (h.readyState == 4)
                if (h.onreadystatechange = null, clearTimeout(f), h.status >= 200 && h.status < 300 || h.status == 304) {
                    var a = h.responseText;
                    try { e(null, JSON.parse(a)) } catch (b) {
                        e(b,
                            null)
                    }
                } else e("err", null)
        };
        h.open(d, a + (d.toLowerCase() == "get" ? "?" + g : ""), true);
        h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var f = setTimeout(function() { h.onreadystatechange = null;
            h.abort() }, 1E4);
        h.send(d.toLowerCase() == "post" ? g : null)
    }
};
MugedaCard.showAudioControl = function(a, d, c) {
    var b = d || {};
    typeof d == "string" && (b = a.getObjectByName(d));
    if (a.pages.length > 1 && !window.Mugine) window.bindPageSlideAudio ? window.bindPageSlideAudio(b) : window.bindPageSlideAudio = b;
    else if (b && b.src) {
        var e = b.play;
        b.play = function() {
            if (b.cachedSrc) b.src = b.cachedSrc, b.currentTime = b.pausedPosition, delete b.cachedSrc, delete b.pausedPosition;
            if (window.Mugine && window.Mugine.Utils.Browser.isWeChat()) {
                if (b._playWaiting) return;
                b._playWaiting = true;
                window.Mugine.Utils.Browser.getWechatJSBridge(function(a) {
                    a.invoke("getNetworkType", {}, function() { if (b._playWaiting) e.call(b), b._playWaiting = false })
                })
            } else e.call(b);
            b.paused ? (l("load"), setTimeout(function() { r == "load" && l("stop") }, 3E3)) : (l("play"), b.playStatus = 1)
        };
        var g = b.pause;
        b.pause = function() { b.playStatus = 0;
            b.pausedPosition = b.currentTime; if (window.Mugine && window.Mugine.Utils.Browser.isWeChat()) b._playWaiting = false;
            g.call(b);
            setTimeout(function() { if (b.currentTime - b.pausedPosition > 0.05) b.cachedSrc = b.src, b.src = "", b == backgroundMusic && l("stop") }, 100) };
        d = function(b, c, d) {
            d = new MugedaCss3.aObject({
                guid: Mugeda.guidGen(),
                type: 2005,
                param: { imageSrc: d || "", rawWidth: b || 32, rawHeight: c || 25, left: 0, right: b, top: 0, bottom: c, scaleX: 1, scaleY: 1, rotate: 0, lineWidth: 1, alpha: 1, width: b, height: c }
            });
            a.appendChild(d, null, -1);
            d.width = b;
            d.height = c;
            d.top = -80;
            d.left = 280;
            d.dom.style.zIndex = 2;
            return d
        };
        if (window.Mugine) { var h = a.thisAni.renderManager.audioIndicator;
            h.audio = b } else {
            var f = d(36, 22, "close_button.png");
            f.dom.addEventListener("load", function() {
                f.setSrc ? (f.top = 8, f.dom.style.cssText += "position: absolute; left:0; top: 0", f.dom.setAttribute("data-audio-icon",
                    1), r && l(r)) : (f.setSrc = true, f.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQxQjlEMkZBMzc0MTFFM0E3NEI4OTcyREFGRTI1QUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQxQjlEMzBBMzc0MTFFM0E3NEI4OTcyREFGRTI1QUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDFCOUQyREEzNzQxMUUzQTc0Qjg5NzJEQUZFMjVBRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDFCOUQyRUEzNzQxMUUzQTc0Qjg5NzJEQUZFMjVBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvx6Om4AAASDSURBVHjazFZ/SFtXFD4v5uWHUZfGH5k2plZni40JiXMJOusPlK5GXXXTLXSiTnG1rBQZKEREKCrYIUr1j41SWlhXHK6bMhGF0daxdVhZlQ1di1rXGLRuJDqfiTE2yd151konCnuVlh348l7evffxve+c+91DEULg/xS86Oho2I76+vqtCRaLBXJzc6G2tvYtp9N5DR+9/9JZlpeXA6vc7OwsKBQKnsFgOMMwjIs8CQYRxo6/CPB2IiSVSmFxcRFSU1NBLpdXDQwMtAYGBoo2h2lEwEtVKD8/HzQaDWi12kqbzbZK/h1ORJRUKISKTSXVWi1ERESkoIpjPkL6KsrKJMdTUiAnPX0De1aot7cX3G53yeDgYFtwcLB4+/ja2trGlXpaiCIRzM/P5w7dvavFZ7lFpaVNS04nsLNcHg8nMfhbN3w+YFrEPp/PDws7v6+vrwPTtWNqlpaWKPwcnoOQIvz7SbVafXN8ePh176lTYDeZ4JjJVBWand3nunXrphiV4hzh4eHRIyMjPZieBwsLC384HA432T2cdrs9CpfFHcvM7Geqq4lVJCL3KYoZBli+A+C5r1CQeb1+6E+jUcQ0NnJKGRsH8vLyviT/PZ7U0L59kY1C4Z05iiKOwkLy+/nz/WqpNOMowHc/A5BfEVM6XYetvZ3HtYZewzQd5qrq12Vlke+53fE/SSRuy7lz67G1tfFhev1DlG5ZTlHAw6JfGRv7kC+XGzgZI8LveXZiltdrwnIVtjgc339z794sFqPyUkDA1RaAYk9Ojie8vR18aA9r09NHuRIim+AU9pmZGBfAX+MAP1htthXS1QWBAwNv9gJMf67X/xZcXLzxpR67XcaV0POFTDYjxN8MPv+wrLOTdpw8CdMuV38DwNkZn4+B0VF4zLpoWJiNMyHc8hRXPiKNpltM06Te4yk+MTFxiGRnLw8pFGftfn6Tb/D5+1cuXGB9yiGMibnNmdDk5OQaHpycCD3w+X78JTT0Uhhye1UiEbh1uql1gUD8ttdbknTx4sFHPT0QpFJdWR0ZGebyXlaZWMRHOp1Oq1ar/T0ej1ClUoXW1dUpd1mzilAJaNqSkZT08fXExE4vOjszNweO9XUGC1kiVCr9BLGxo+iymeKoqL8DL18GripFIrQIDeIE4guz2fxwNx9CA2WNUVNgMt1eYBjftzU1VxspqqYjIGB4wWwmzPg4udbc/MEguvSN0lLOxrg92M1hRHQ1NDRYdiKE59ZBmqY1/iJRS0ll5ZlDBgNbiPRn3d2D7ISJqakbxwsK+O+ePg3vVFTsmdDTFiMP8VVTU5N1G6FVPFyjsEVhlRVIZTLYr1TSISEhnewgkp1NTk6OiTtyBOLV6g3smVBRURFkZWUJ8LaANeW2tra5Zwg9RhwICgp6dskriOb09PQrRqNRu/19eyaE7Sq4XC6Ii4tjm7JCxPXW1tZH2JIQq9XagwsF/v7+IJFIICEhAXAz8BDBrIOgUiDEYwNTuoU9E2JfmpaWxravG5bD9myIT7EtqUJlJImJifCiWth/BBgAGnzh/Lti8S4AAAAASUVORK5CYII=")
            });
            var i = d(36, 22, "close_button.png");
            i.dom.addEventListener("load", function() { i.setSrc ? (i.top = 8, i.dom.style.cssText += "position: absolute; left:0; top: 0", i.dom.setAttribute("data-audio-icon", 1), r && l(r)) : (i.setSrc = true, i.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCNkFBMzBBMzc0MTFFMzk4NzRENEEwRUIxQjUzN0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCNkFBMzFBMzc0MTFFMzk4NzRENEEwRUIxQjUzN0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREI2QUEyRUEzNzQxMUUzOTg3NEQ0QTBFQjFCNTM3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREI2QUEyRkEzNzQxMUUzOTg3NEQ0QTBFQjFCNTM3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3X9zcAAAP1SURBVHjazFZZSFtZGD5JTDSLa7TimLaOZdwNURRH3FuhjAs6qDMg0YIiVGgt+CAIKiIKZer41AffiqHFSgsVClUQX4TU0bFYHAaKQce4JOLGRE1icLn9/lstrVTaXKL0h+/ee8659/Dd7/ybiOM49j2ZODIykp1GS0vLxxfMZjMrKipiTU1NN+12+xNM/X7hLGtqahgpt7i4yDQajTgtLe3O9va2k/tg28AlWj8PiL9EKCAggG1tbbHs7GwWGhp6e2hoqNvX19fneFkKqC5UodLSUqbVaplOp6vb2NhwcJ+bHYgICgpitbW1/F8lJCSw8PDwDKg4jfHL6upqZWJiIktOTvaMQoODg8zlclUPDw/3qNVq+en1vb09/i4Sifi7l5eXbGVlRT81NaXDsKisrKxzZ2fn47ogw6YsMDBQ7u/vr0pKStIvLy//z33Z7BaL5UcoJNbr9ZUY/9vR0XGLiMTExLwGMXrH1djYeD06OtpthXgLCwuLnJycfIHjmVtdXf1vd3fXxZ1t9s3NzQj8fWJeXt4IlOQODw+tOOafsVVtfX29mV4aGxt7FhcXJ4jQ1eLi4sfctxvvQ/juCvBna2urhSaNRuNDkIxSqVQD+ClufX3dYjAYooUQulFYWPi3u4RCQkKYQqFIxv2VyWSi+Y309PR47Hevt7d3F6pxs7OzvwlxaokQn6OUEBUV9RZKGEdHRx2YUldVVZFyMxMTExaxWMxAVuO2LwPcMdyy6elp5nA4jvD4zmq1EiFFVlZWEIJjwWaz7RznswAhhATZ/Pz8yeM+IpOPbz8/P5tMJjuUSqX8+OjoyElKuVXLjkPe7YQBf6HoZCDwQ2pqKilxMDMzYwIJZXx8fDB8iLK91e3iShc43x4Kp1sf+vj4sIODAwUiND8zM5P8cKS9vd2EpBlTUlKiwXHaxsfH/xGi/k/AAyTDEaR8Y2Vl5VRXV5f5a1GGo5CkpKTUQQV+cmBg4BfaLCcnx0BjZO2xjIwMkZCwJ5UuA5T2tUAJYGhubl44ixASKEWTtry8/K+1tTWur6/vAfyGyeXy6yDCM2xoaKiizQVl6lNG8hcA/W1tbeazSgcIaEHgPlS9i5LBJBJJeH9//xt6YW5ubhTFVeIpQictRjHwtLOzc+kUIQf8JAIRTcrKKLJR6aXIOQ9pEWQXkaOuoY8ikp4hVFFRwfLz82V4/BV41tPTs/IJoX3gKkL800/8ga7c3NxHBQUFupNJRKBnCKFdZU6nk8XGxlJTVg487+7utlIhXVpaeoEPZSgbTKlU8j0PjkcMqCmDBAcHM29vb0Y+RfAIIdoU0ULtKx/h1LMBf6Dfvg1llIgudl4t7HsBBgCzULCMcQhmvwAAAABJRU5ErkJggg==") });
            var j = d(20, 20, "close_button.png");
            j.dom.addEventListener("load", function() { j.setSrc ? (j.top = 8, j.dom.style.cssText += "position: absolute; left:0; top: 0", j.dom.setAttribute("data-audio-icon", 1), r && l(r)) : (j.setSrc = true, j.src = "data:image/gif;base64,R0lGODlhFAAUALMIAPh2AP+TMsZiALlcAKNOAOp4ANVqAP+PFv///wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAIACwAAAAAFAAUAAAEUxDJSau9iBDMtebTMEjehgTBJYqkiaLWOlZvGs8WDO6UIPCHw8TnAwWDEuKPcxQml0Ynj2cwYACAS7VqwWItWyuiUJB4s2AxmWxGg9bl6YQtl0cAACH5BAUKAAgALAEAAQASABIAAAROEMkpx6A4W5upENUmEQT2feFIltMJYivbvhnZ3Z1h4FMQIDodz+cL7nDEn5CH8DGZhcLtcMBEoxkqlXKVIgAAibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkphaA4W5upMdUmDQP2feFIltMJYivbvhnZ3V1R4BNBIDodz+cL7nDEn5CH8DGZAMAtEMBEoxkqlXKVIg4HibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpjaE4W5tpKdUmCQL2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8ONQMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpS6E4W5spANUmGQb2feFIltMJYivbvhnZ3d1x4JMgIDodz+cL7nDEn5CH8DGZgcBtMMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmFQX2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZBMJNIMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUKAAgALAEAAQASABIAAAROEMkpz6E4W5tpCNUmAQD2feFIltMJYivbvhnZ3R1B4FNRIDodz+cL7nDEn5CH8DGZg8HNYMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAkKAAgALAEAAQASABIAAAROEMkpQ6A4W5spIdUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZAsGtUMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IADs=") })
        }
        var r =
            null,
            l = function(a) {
                switch (a) {
                    case "stop":
                        c ? window.Mugine ? h.setState("none") : (i.visible = false, f.visible = false, j.visible = false) : window.Mugine ? h.setState("off") : (i.visible = false, f.visible = true, j.visible = false); break;
                    case "play":
                        window.Mugine ? h.setState("on") : (i.visible = true, f.visible = false, j.visible = false); if (r != a) b.playTimeout && clearTimeout(b.playTimeout), b.playTimeout = setTimeout(function() {}, 9E4); break;
                    case "load":
                        window.Mugine ? h.setState("load") : (i.visible = false, f.visible = false, j.visible = true) } r =
                    a
            },
            d = function() { if (window.Mugine) { var a = h.getState();
                    a != "load" && (a == "off" ? b.play() : b.pause()) } else j.visible || (f.visible ? b.play() : b.pause()) };
        window.Mugine ? h.dom.addEventListener("click", d) : (f.addEventListener("inputend", d), i.addEventListener("inputend", d));
        l("stop");
        var z = function() { var a = b.currentTime,
                c = function() { b.currentTime != a ? (l("play"), b.playStatus = 1) : setTimeout(c, 100) };
            setTimeout(c, 10) };
        b.addEventListener("playing", function() { z() });
        (b.autoplay || !b.paused) && z();
        b.addEventListener("pause",
            function() { l("stop") })
    }
};

function preDefineCustomParameters() {
    if (Mugeda && Mugeda.getMugedaObject()) {
        var a = Mugeda.getMugedaObject();
        if (a) {
            var d = a.aniData;
            a.addEventListener("renderReady", function() {
                var c = getFormObj(d, a),
                    b = [];
                if (c)
                    for (var e = c.items, c = 0, g = e.length; c < g; c++) { var h = e[c],
                            f = {};
                        f.formName = h.id;
                        f.formDescription = h.description; var i = {};
                        i.name = h.id; var j = ""; switch (h.type) { default: j = "text" } i.attribute = j;
                        f.mugedaObj = [i];
                        b.push(f) } d.customInfo = d.customInfo || {};
                c = d.customInfo || {};
                g = c.audio;
                e = c.images;
                window.cardFrame && window.cardFrame.setOfficialCustom(!!c.isOfficialCustom);
                backgroundMusic === void 0 && autoPlayMusic();
                if ((c = backgroundMusic || a.scene.getObjectByName(g)) && c.play) MugedaCard.showAudioControl(a.scene, c, false), backgroundMusic = backgroundMusic || c;
                h = function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++) {
                        var f = a[c];
                        if (f.name && f.type === "signature" && (f = b.getObjectByName(f.name).dom)) {
                            var e = parseInt(getComputedStyle(f).width) / 2 + "px",
                                g = parseInt(getComputedStyle(f).height) / 2 + "px",
                                e = [e, g].join(" ");
                            f.style.borderTopLeftRadius = e;
                            f.style.borderTopRightRadius = e;
                            f.style.borderBottomLeftRadius =
                                e;
                            f.style.borderBottomRightRadius = e;
                            f.style.overflow = "hidden"
                        }
                    }
                };
                if (e && e.length) { c = 0; for (g = e.length; c < g; c++) { var i = e[c],
                            f = i.name,
                            j = i.type,
                            r = i.group,
                            l = i.sym_name;
                        f && j && (i = [{ name: f, attribute: j }], function(c, d, f, e) { b.push({ formName: c, formDescription: "", userUndefined: function() { if (d) { var b = a.scene,
                                            c = b.getObjectByName(f); if (f && c && c.scene) b = c.scene; if (b = b.getObjectByName(d)) b.visible = false } }, mugedaObj: e }) }(f, r, l, i)) } }
                if (e) {
                    g = [];
                    c = 0;
                    for (j = e.length; c < j; c++) i = e[c], (f = i.name) && a.scene.getObjectByName(f) && g.push(i);
                    h(g, a.scene)
                }
                defineCustomParameters(a.scene, b)
            })
        }
    }
}
preDefineCustomParameters();

function preMucardAutomation() {
    if (Mugeda && Mugeda.getMugedaObject()) {
        var a = Mugeda.getMugedaObject();
        a && a.addEventListener("renderReady", function() {
            var d = a.aniData.metadata;
            if (d) {
                var c = d.weixinTitle || "",
                    b = d.timelineTitle || c,
                    e = d.weixinDesc || "",
                    g;
                for (g in window.data) { for (var h = g.split("/"), f = null, i = 0; i < h.length; i++) f = (f || a).scene.getObjectByName(h[i]);
                    h = f ? f.text : ""; if (h = window.data[g].value || h) f = RegExp("\\{\\{" + g + "\\}\\}", "g"), c = c.replace(f, h), b = b.replace(f, h), e = e.replace(f, h) } g = function(a) {
                    for (var b =
                            0, c = a.length; b < c; b++)
                        if (" \u3000\uff0c\u3002\uff0f\uff1b\u2018\u300d\u3001\uff40,.;[]`".indexOf(a[b]) === -1) break;
                    return a.substr(b)
                };
                window.cardFrame && (c = c.replace(/\{\{[[a-zA-Z0-9\/\.]+\}\}/g, ""), b = b.replace(/\{\{[a-zA-Z0-9\/\.]+\}\}/g, ""), e = e.replace(/\{\{[[a-zA-Z0-9\/\.]+\}\}/g, ""));
                c = g(c);
                b = g(b);
                e = g(e);
                g = location.origin;
                defineWechatParameters({ img_url: Mugeda.previewMode ? g + (d.thumb || "") : (a.resDir || _mrmcp.creative_path || "") + d.thumb, img_width: 128, img_height: 128, desc: e, title: c, timelineTitle: b })
            }
        })
    }
}
preMucardAutomation();

function getFormObj(a, d) { if (a && a.customInfo) { var c = a.customInfo; if (c.flag && c.object_id && (c = c.object_id, d && d.scene && c && (c = d.scene.objectHash[c])))
            if ((c = c.data) && c.param && c.param.form) return JSON.parse(c.param.form) } }
var backgroundMusic = void 0,
    autoPlayMusic = function(a) {
        if (backgroundMusic && a && !backgroundMusic.playStatus) !backgroundMusic.forcePaused && backgroundMusic.play();
        else if (Mugeda && Mugeda.data && backgroundMusic === void 0)
            for (item in backgroundMusic = null, Mugeda.data) {
                if (Mugeda.data.hasOwnProperty(item)) {
                    var d = Mugeda.data[item],
                        a = d.music,
                        c;
                    if (a) {
                        symbols = d.symbols || d.sm || [];
                        for (d = 0; d < symbols.length; d++)
                            if (symbols[d].id == a) { c = symbols[d].url; break }
                        if (c) c.indexOf("/") < 0 && typeof _mrmcp != "undefined" && _mrmcp.creative_path &&
                            (c = _mrmcp.creative_path + c), backgroundMusic = new Audio(c), backgroundMusic.loop = true, !backgroundMusic.forcePaused && backgroundMusic.play();
                        break
                    }
                }
            } else backgroundMusic = null
    },
    WeixinHelper = function() {
        var a = Math.floor(Math.random() * 1E10).toString(26),
            d = navigator.userAgent.toLowerCase().match(/micromessenger\/(\d+).(\d+).?(\d?)\s?/),
            c = 0,
            b = !!(d && d.length > 0);
        d && d.length > 3 && (c = d[1] + "." + d[2] + "" + d[3]);
        var e = {
            newapi: c > 6.015,
            config_ok: void 0,
            friend_share_ok: false,
            timeline_share_ok: false,
            qq_share_ok: false,
            weibo_share_ok: false,
            custom_info: null,
            last_error: null
        };
        this.wxjs_status = e;
        this.init = function() {
            var b = function(a, b) {
                    if (customWechatAuth) var d = customWechatAuth.timestamp,
                        b = customWechatAuth.noncestr || customWechatAuth.nonceStr,
                        g = customWechatAuth.appId,
                        h = customWechatAuth.signature;
                    else d = (new Date).getTime(), h = c.hash("jsapi_ticket=" + a + "&noncestr=" + b + "&timestamp=" + d + "&url=" + window.location.href), g = _mrmcp.weixinAppId || "wx75babd529e23776c";
                    customWechatAuth && customWechatAuth.custom ? (e.config_ok = e.newapi && e.config_ok === void 0 ?
                        true : false, autoPlayMusic(true)) : (wx.ready(function() {
                        e.config_ok = e.newapi && e.config_ok === void 0 ? true : false;
                        autoPlayMusic(true);
                        wx.checkJsApi({
                            jsApiList: "chooseImage,onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ,onMenuShareWeibo,previewImage,uploadImage,downloadImage,startRecord,stopRecord,onVoiceRecordEnd,playVoice,pauseVoice,stopVoice,translateVoice,onVoicePlayEnd,uploadVoice,downloadVoice,hideOptionMenu,showOptionMenu,closeWindow,hideMenuItems,showMenuItems,scanQRCode,chooseWXPay".split(","),
                            success: function(a) { if (a.errMsg == "checkJsApi:ok") e.friend_share_ok = a.checkResult.onMenuShareAppMessage, e.timeline_share_ok = a.checkResult.onMenuShareTimeline, e.qq_share_ok = a.checkResult.onMenuShareQQ, e.weibo_share_ok = a.checkResult.onMenuShareWeibo, setTimeout(function() { e.config_ok && bindWeiEvent() }) },
                            fail: function() {}
                        })
                    }), wx.error(function(a) { if (e.newapi) { if (a.errMsg.indexOf("config:") == 0) e.config_ok = false;
                            a = a || {};
                            e.last_error = JSON.stringify(a) } }), wx.config({
                        debug: window.location.href.indexOf("m_dbg=1") >
                            0 ? true : false,
                        appId: g,
                        timestamp: d,
                        nonceStr: b,
                        signature: h,
                        jsApiList: "chooseImage,onMenuShareTimeline,onMenuShareAppMessage,onMenuShareQQ,onMenuShareWeibo,previewImage,uploadImage,downloadImage,startRecord,stopRecord,onVoiceRecordEnd,playVoice,pauseVoice,stopVoice,translateVoice,onVoicePlayEnd,uploadVoice,downloadVoice,hideOptionMenu,showOptionMenu,closeWindow,hideMenuItems,showMenuItems,scanQRCode,chooseWXPay".split(",")
                    }))
                },
                c = {};
            c.hash = function(a) {
                var a = a.utf8Encode(),
                    b = [1518500249, 1859775393, 2400959708,
                        3395469782
                    ];
                a += String.fromCharCode(128);
                for (var d = Math.ceil((a.length / 4 + 2) / 16), e = Array(d), g = 0; g < d; g++) { e[g] = Array(16); for (var h = 0; h < 16; h++) e[g][h] = a.charCodeAt(g * 64 + h * 4) << 24 | a.charCodeAt(g * 64 + h * 4 + 1) << 16 | a.charCodeAt(g * 64 + h * 4 + 2) << 8 | a.charCodeAt(g * 64 + h * 4 + 3) } e[d - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32);
                e[d - 1][14] = Math.floor(e[d - 1][14]);
                e[d - 1][15] = (a.length - 1) * 8 & 4294967295;
                for (var a = 1732584193, h = 4023233417, i = 2562383102, y = 271733878, v = 3285377520, s = Array(80), w, t, p, q, o, g = 0; g < d; g++) {
                    for (var k = 0; k < 16; k++) s[k] =
                        e[g][k];
                    for (k = 16; k < 80; k++) s[k] = c.ROTL(s[k - 3] ^ s[k - 8] ^ s[k - 14] ^ s[k - 16], 1);
                    w = a;
                    t = h;
                    p = i;
                    q = y;
                    o = v;
                    for (k = 0; k < 80; k++) { var n = Math.floor(k / 20),
                            n = c.ROTL(w, 5) + c.f(n, t, p, q) + o + b[n] + s[k] & 4294967295;
                        o = q;
                        q = p;
                        p = c.ROTL(t, 30);
                        t = w;
                        w = n } a = a + w & 4294967295;
                    h = h + t & 4294967295;
                    i = i + p & 4294967295;
                    y = y + q & 4294967295;
                    v = v + o & 4294967295
                }
                return c.toHexStr(a) + c.toHexStr(h) + c.toHexStr(i) + c.toHexStr(y) + c.toHexStr(v)
            };
            c.f = function(a, b, c, d) { switch (a) {
                    case 0:
                        return b & c ^ ~b & d;
                    case 1:
                        return b ^ c ^ d;
                    case 2:
                        return b & c ^ b & d ^ c & d;
                    case 3:
                        return b ^ c ^ d } };
            c.ROTL =
                function(a, b) { return a << b | a >>> 32 - b };
            c.toHexStr = function(a) { for (var b = "", c, d = 7; d >= 0; d--) c = a >>> d * 4 & 15, b += c.toString(16); return b };
            if (typeof String.prototype.utf8Encode == "undefined") String.prototype.utf8Encode = function() { return unescape(encodeURIComponent(this)) };
            if (typeof String.prototype.utf8Decode == "undefined") String.prototype.utf8Decode = function() { try { return decodeURIComponent(escape(this)) } catch (a) { return this } };
            if (typeof module != "undefined" && module.exports) module.exports = c;
            typeof define == "function" &&
                define.amd && define([], function() { return c });
            var d = function(a) {
                a = a || {};
                a.method = a.method || "GET";
                a.type = (a.type || "text").toLowerCase();
                a.jsonp_callback = a.jsonp_callback || "callback";
                a.success = a.success || function() {};
                a.error = a.error || function() {};
                a.cache_ok = a.cache_ok || false;
                a.url = a.url || (a.error({ status: -5, desc: "Empty url" }), "");
                a.cache_ok || (a.url += a.url.indexOf("?") > -1 ? "&" : "?", a.url += "_mats=" + (new Date).getTime());
                if (a.type == "jsonp") {
                    window[a.jsonp_callback] = function(b) { a.success(b) };
                    var b = document.getElementsByTagName("head")[0],
                        c = document.createElement("script");
                    c.type = "text/javascript";
                    c.src = a.url;
                    c.onload = function() {};
                    c.onerror = function() { a.error({ status: -2, desc: "Failed to load the url: " + a.url }) };
                    b.appendChild(c)
                } else {
                    var d;
                    window.XMLHttpRequest ? d = new XMLHttpRequest : a.error({ status: -3, desc: "Platform not supported" });
                    d.onreadystatechange = function() {
                        if (d.readyState == 4)
                            if (d.status == 200) {
                                var b = "ok",
                                    b = d.responseText;
                                if (a.type == "json") try { b = JSON.parse(b), a.success(b) } catch (c) {
                                    b = c.toString(), a.error({
                                        status: -6,
                                        desc: "Error in parsing JSON (" +
                                            b + ")"
                                    })
                                } else a.type == "text" && a.success(b)
                            } else a.error({ status: -4, desc: "Error in fetching data (code " + d.status + ")" })
                    };
                    d.open(a.method, a.url, true);
                    d.send()
                }
            };
            customWechatAuth ? b() : d({ url: _mrmcp.ticketUrl || "http://mucard.mugeda.com/weixin/card/wx_js_ticket.json", type: "jsonp", jsonp_callback: "wx_ticket_callback", success: function(c) { var d = parseInt(c.creation_time);
                    Math.floor(0.001 * (new Date).getTime()) - d > 7100 || b(c.ticket, a) }, error: function() {} })
        };
        var g = this;
        if (b) d = document.getElementsByTagName("head")[0],
            c = document.createElement("script"), c.type = "text/javascript", c.src = window.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.2.0.js", c.onload = function() { g.init() }, c.onerror = function(a) { alert("\u52a0\u8f7d\u5fae\u4fe1JS SDK\u5931\u8d25\uff01\u5fae\u4fe1\u76f8\u5173\u529f\u80fd\u53ef\u80fd\u4f1a\u5de5\u4f5c\u4e0d\u6b63\u5e38\uff01\n\n" + a.toString()) }, d.appendChild(c)
    },
    wxHelper = window.cardFrame ? null : new WeixinHelper,
    event = document.createEvent("Event");
event.initEvent("cardCommonReady", false, true);
document.dispatchEvent(event);