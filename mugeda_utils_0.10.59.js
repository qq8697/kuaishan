MugedaHelper = {};

function G(a) { return document.getElementById(a) }

function E(a, d, c) { d || (d = "load");
    c || (c = window);
    c.attachEvent ? c.attachEvent("on" + d, a) : c.addEventListener(d, a, false) }

function json(a) { try { return eval("(" + a + ")") } catch (d) { return null } }

function _B7(a) { if (!a || typeof a == "string") return a; var d = "",
        c; for (c in a) d += "&" + c + "=" + encodeURIComponent(a[c]);
    d && (d = d.substr(1)); return d }

function ajax(a) {
    var d = /POST/i.test(a.type),
        c = a.data || "",
        e = a.dataType,
        f = a.url || location.href,
        b = /\?/.test(f) ? "&" : "?",
        g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
    g.onreadystatechange = function(b) { if (g.readyState == 4) g.status == 200 ? (b = g.responseText, e == "json" && (b = json(b)), (d = a.success) && d(b)) : a.error && a.error(g.status, g) };
    if (typeof c == "object") { var k = [],
            i; for (i in c) k.push(encodeURIComponent(i) + "=" + encodeURIComponent(c[i]));
        c = k.join("&") } g.open(d ?
        "POST" : "GET", f + (d ? "" : (c ? b : "") + c + (a.cache ? "" : (!c && b == "?" ? "?" : "&") + (a.cache_ok ? "" : "_=" + (new Date).getTime()))), a.async === false ? false : true);
    d && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    g.send(c);
    return g
}
var ajaxHelper = function(a) {
    a = a || {};
    a.method = a.method || "GET";
    a.type = (a.type || "text").toLowerCase();
    a.jsonp_callback = a.jsonp_callback || "callback";
    a.success = a.success || function() {};
    a.error = a.error || function() {};
    a.cache_ok = a.cache_ok || false;
    a.url = a.url || (a.error({ status: -5, desc: "Empty url" }), "");
    var d = (new Date).getTime();
    window.hashOptions = window.hashOptions || {};
    window.hashOptions[d] = a;
    window.hashOptions[""] = a;
    a.cache_ok || (a.url += a.url.indexOf("?") > -1 ? "&" : "?", a.url += "_mats=" + d, a.url += "&callback=" + a.jsonp_callback);
    if (a.type == "jsonp") { window[a.jsonp_callback] = function(a) { window.hashOptions[a._mats || ""].success(a) }; var c = document.getElementsByTagName("head")[0],
            e = document.createElement("script");
        e.type = "text/javascript";
        e.src = a.url;
        e._mats = d;
        e.onload = function() {};
        e.onerror = function() { window.hashOptions[this._mats || ""].error({ status: -2, desc: "Failed to load the url: " + a.url }) };
        c.appendChild(e) } else {
        var f;
        window.XMLHttpRequest ? f = new XMLHttpRequest : a.error({ status: -3, desc: "Platform not supported" });
        f.onreadystatechange =
            function() { if (f.readyState == 4)
                    if (f.status == 200) { var b = "ok"; if (a.type == "json") try { a.success(JSON.parse(f.responseText)) } catch (c) { b = c.toString(), a.error({ status: -6, desc: "Error in parsing JSON (" + b + ")" }) } else a.type == "data" ? a.success(f.response) : a.type == "text" && a.success(f.responseText) } else a.error({ status: f.status, desc: "Error in fetching data (code " + f.status + ")" }) };
        if (a.type == "data") f.responseType = "blob";
        f.open(a.method, a.url, true);
        f.send()
    }
};

function isMobile() { return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? true : false }

function fo(a) { var d = 0,
        c = 0;
    do d += a.offsetLeft || 0, c += a.offsetTop || 0; while (a = a.offsetParent); return { x: d, y: c } }

function fe(a) { a = a || event; return { x: a.pageX || a.x, y: a.pageY || a.y } }

function fc(a) { a && a.stopPropagation ? a.stopPropagation() : event.cancelBubble = true }

function getClass(a, d) { for (var c = RegExp("(^|\\s*)" + a + "(\\s*|$)"), e = d ? document.getElementsByTagName(d) : document.getElementsByTagName("*") || document.all, f = [], b = 0, g = e.length; b < g; b++) c.test(e[b].className) && f.push(e[b]); return f } JSON.clone = function(a) { return JSON.parse(JSON.stringify(a)) };

function getElementOffset(a) { for (var d = 0, c = 0; a && a.tagName != "BODY";) d += a.offsetTop, c += a.offsetLeft, a = a.offsetParent; return { top: d, left: c } } Mugeda = window.Mugeda || {};
var MugedaTools = window.MugedaTools = window.MugedaTools || {};
MugedaTools.message = function() {
    var a, d = [],
        c = {},
        e = function() { var a = window.getComputedStyle(document.documentElement, ""),
                a = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || ["", ""])[1]; return { dom: "WebKit|Moz|MS".match(RegExp("(" + a + ")", "i"))[1], lowercase: a, css: "-" + a + "-", js: a[0].toUpperCase() + a.substr(1) } }();
    return {
        show: function(f, b) {
            b = b || {};
            if (!a) {
                var g = document.createElement("div");
                g.className = "mugeda_mask";
                var k = b.parent || document.body,
                    i = b.hideShade,
                    h = b.center,
                    r = b.clickable,
                    t = g.appendChild(document.createElement("div")),
                    j = t.appendChild(document.createElement("div")),
                    m = t.appendChild(document.createElement("div"));
                g.style.cssText = r ? "text-align: center; display: block; position: absolute;left: 50%; top: 50%; transform: translate(-50%, -50%);" : "position:fixed;left:0;right:0;top:0;bottom:0;text-align:center;line-height:" + (b.parent ? k.offsetHeight : document.body.clientHeight || document.documentElement.clientHeight) + "px";
                t.style.cssText = "padding-top:10px; line-height:30px;display:inline-block;padding:8px; background-color:rgba(0,0,0," +
                    (i ? 0 : 0.6) + ");border-radius:4px;" + (h ? "position:relative;top:32px;" : "");
                t.align = "center";
                j.style.cssText = "width: 24px; height: 24px; display: block; border-radius: 50%; border-left: 2px solid #F36523; border-top: 2px solid #F36523; border-right: 2px solid white; border-bottom: 2px solid white; margin: 16px;";
                m.style.cssText = 'text-align:center;color:#fff;font:normal 12px "microsoft yahei";';
                m.innerHTML = f || "";
                a = k.appendChild(g);
                i = "from {" + e.css + "transform:rotate( 0deg ) }to {" + e.css + "transform:rotate( 360deg ) }";
                g = document.createElement("style");
                document.head.appendChild(g);
                g = g.sheet;
                k = "spin_" + (new Date).getTime();
                i = "@" + e.css + "keyframes " + k + "{ " + i + "}";
                if (d.length) h = d.pop().name, r = c[h], delete c[h], g.deleteRule(r), g.insertRule(i, r), c[k] = r;
                else { h = g.cssRules.length; try { g.insertRule(i, h) } catch (p) {} c[k] = h } j.style.cssText += e.css + "animation:" + k + " 1200ms linear infinite;"
            }
        },
        close: function() { a && (a.parentNode.removeChild(a), a = null) }
    }
}();
MugedaTools.iterate = function(a, d, c) { for (var e in a) a.hasOwnProperty(e) && (typeof a[e] == "object" ? iterate(a[e], d + "." + e, c) : c && c(a, e)) };
MugedaTools.detectSecurityRisk = function(a) {
    a = (a || "").toLowerCase();
    return a.match(/\b(fscommand|onabort|onactivate|onafterprint|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onblur|onbounce|oncellchange|onchange|onclick|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcomplete|ondblclick|ondeactivate|ondrag|ondragend|ondragleave|ondragenter|ondragover|ondragdrop|ondragstart|ondrop|onend|onerror|onerrorupdate|onfilterchange|onfinish|onfocus|onfocusin|onfocusout|onhashchange|onhelp|oninput|onkeydown|onkeypress|onkeyup|onlayoutcomplete|onload|onlosecapture|onmediacomplete|onmediaerror|onmessage|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onmove|onmoveend|onmovestart|onoffline|ononline|onoutofsync|onpaste|onpause|onpopstate|onprogress|onpropertychange|onreadystatechange|onredo|onrepeat|onreset|onresize|onresizeend|onresizestart|onresume|onreverse|onrowsenter|onrowexit|onrowdelete|onrowinserted|onscroll|onseek|onselect|onselectionchange|onselectstart|onstart|onstop|onstorage|onsyncrestored|onsubmit|ontimeerror|ontrackchange|onundo|onunload|onurlflip|seeksegmenttime|javascript|eval|fromcharcode|window(\.|\['|\[")|document(\.|\['|\["))\b/g) || a.match(/\b(background\-image\s*\:|background\s*\:|href\s*\=|src\s*\=|style\s*\=)/g) ||
        a.match(/\<(script|link|img|input|style|meta|iframe|frame|table|td|tr|div|base|object|embed|xml)/g)
};
MugedaMraid = {
    mraidReadyStatus: 0,
    mraidState: void 0,
    getStage: function() { var a = null; for (window.event && (a = window.event.target || window.event.srcElement); a;) { if ((a.id || "").indexOf("_stage") > 0 || a.getAttribute && a.getAttribute("data-mid") == 0) break;
            a = a.parentNode } return a ? a : document.getElementsByClassName("MugedaStage")[0] },
    setMraidState: function(a) {
        _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp;
        var d = _mrmcp.display_mode,
            c = mraid.getPlacementType();
        this.mraidState = a.toLowerCase();
        var e = document.getElementById("mugeda_close_button");
        switch (this.mraidState) {
            case "default":
                if (d != "expand" && c != "interstitial" && e) e.style.display = "none";
                typeof Mugeda != "undefined" && Mugeda.gotoAndPlay && Mugeda.gotoAndPlay(1); break;
            case "expanded":
                (d == "auto" || d == "expand" || d == "interstitial") && setTimeout(function() { e.style.display = "block" }, 50); break;
            case "resized":
                setTimeout(function() { e.style.display = "block" }, 50) }
    },
    openLink: function(a, d) {
        _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp;
        _mrmcp.destination_url && _mrmcp.destination_url.indexOf("%DESTURL%") < 0 && (a =
            _mrmcp.destination_url);
        if (a) {
            var c = "ts=" + (new Date).getTime();
            c += "&_moid=" + (_mrmcp.owner_id || "");
            c += "&_mcid=" + (_mrmcp.creative_id || "");
            c += "&_mw=" + (_mrmcp.width || "");
            c += "&_mh=" + (_mrmcp.height || "");
            c += "&_mtp=" + (_mrmcp.type || "");
            c += "&_mtt=" + encodeURIComponent(_mrmcp.title || "");
            var e = _mrmcp.custom_params;
            e && e.indexOf("%CUSTOMPARAM%") < 0 && (c += "&" + e);
            if ((e = _mrmcp.redirect_url) && e.indexOf("%LINK%") < 0) var f = a.indexOf("?"),
                b = f < 0 ? "?" : "&",
                a = e + (e.lastIndexOf("=") == e.length - 1 ? encodeURIComponent(a + b + c) : "");
            b = a.split("#");
            e = "";
            b.length > 1 && (e = b[1], a = b[0]);
            var f = a.indexOf("?"),
                b = f < 0 ? "?" : "&",
                f = f == a.length - 1,
                g = window.location.search;
            if (g) { for (var g = g.split("?")[1], k = g.split("&"), i = k.length, h = 0; h < i; h++) { var r = k[h].split("="); if (r.length == 2) { var t = r[1];
                        r[0].toLowerCase() == "mugeda_click_link" && (a = unescape(t), f = a.indexOf("?"), b = a < 0 ? "?" : "&", f = f == a.length - 1) } } a += (f ? "" : b) + g;
                f = false;
                g.length && (b = "&") } a += (f ? "" : b) + c + (e ? "#" + e : "");
            this.mraidReadyStatus == 1 ? d == "internal" ? mraid.open(a) : d == "expand" ? this.expand(a, 0) : window.open(a) : d ==
                "internal" ? window.location = a : d == "expand" ? this.expand(a) : window.open(a);
            MugedaTracker.fireEvent({ category: "link", action: d, label: a, value: 0 })
        }
    },
    expand: function(a, d, c) {
        _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp;
        if (this.mraidReadyStatus != 1) {
            if (a && a.length) {
                var e = document.URL.match(/client.*preview.*id/),
                    f = c = null;
                try { c = (e ? window : window.parent).document, f = c.getElementById("mugeda_expanded") || c.createElement("div") } catch (b) { window.open(a); return } a.match(/^(\/|http:|https:)/i) || (a = (_mrmcp.creative_path ||
                    "") + a);
                f.id = "mugeda_expanded";
                f.style.display = "block";
                f.style.position = "fixed";
                f.style.width = (c.defaultView.innerWidth || c.documentElement.clientWidth) + "px";
                f.style.height = (c.defaultView.innerHeight || c.defaultView.innerHeight) + "px";
                f.style.left = "0px";
                f.style.margin = "0";
                f.style.padding = "0";
                f.style.border = "none";
                f.style.top = "0px";
                f.style.background = "#000";
                f.innerHTML = "<iframe id='mugeda_expand_iframe' src='" + a + "' style='border:none;width:100%;height:100%;margin:0px;padding:0px;'></iframe>";
                c.body.appendChild(f);
                MugedaBehavior.processCloseButton("expand", c)
            }
        } else {
            var c = c || {},
                f = mraid.getMaxSize(),
                e = parseInt(c.width) || f.width,
                f = parseInt(c.height) || f.height,
                a = a || c.url,
                g = !a || a.length == 0;
            d == 1 ? (a = parseInt(c.left) || 0, c = parseInt(c.top) || 0, MugedaBehavior.processCloseButton("resize"), mraid.setResizeProperties({ width: e, height: f, offsetX: a, offsetY: c, allowOffscreen: false }), mraid.resize()) : (mraid.setExpandProperties({ width: e, height: f, isModal: true, useCustomClose: _mrmcp.display_mode ? true : false }), g ? (mraid.expand(), MugedaBehavior.processCloseButton()) :
                mraid.expand(a))
        }
    },
    sendEmail: function(a) { window.open("mailto:" + a.email_addr + "?subject=" + a.email_title + "&body=" + a.email_body, "_self") },
    savePicture: function(a) { this.mraidReadyStatus == 1 && mraid.supports("storePicture") && mraid.storePicture(a.url) },
    addCalendarEvent: function(a) { this.mraidReadyStatus == 1 && mraid.supports("calendar") && mraid.createCalendarEvent({ summary: a.calendar_summary, description: a.calendar_desc, location: a.calendar_location, start: a.calendar_start_time, end: a.calendar_end_time }) },
    createHTML5VideoTag: function(a,
        d) {
        if (a) {
            var c = "_" + +new Date,
                e = 0,
                f = 0;
            a.data && (c = "_" + a.data.guid, a.data.param && (e = a.data.param.continueAudio || 0, f = a.data.param.clickStatus || 0));
            var b = G("mugeda_video" + c);
            if (b) return b.parentNode;
            div = document.createElement("div");
            div.className = "mugedaVideoHolder";
            div.style.margin = 0;
            div.style.padding = 0;
            div.style.backgroundColor = "rgba(0,0,0,0)";
            div.style.position = "absolute";
            div.style.top = 0;
            div.style.left = 0;
            div.style.width = 0;
            div.style.height = 0;
            div.style.zIndex = 1;
            div.style.display = "none";
            _mrmcp = typeof _mrmcp ==
                "undefined" ? {} : _mrmcp;
            var g = (_mrmcp.creative_path || "") + "close_button.png",
                k = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i);
            div.innerHTML = '<video id="mugeda_video' + c + '" ' + (d.video_embed ? 'x5-video-player-type="h5" x5-video-player-fullscreen="true"' : "") + ' controls playsinline x-webkit-airplay webkit-playsinline x5-playsinline preload="auto" video-id="' + d.id + '"  video-mode="' + d.mode + '" video-name="' + d.name + '"  style="width:100%;height:100%;position:absolute;z-index:2;}"></video>' +
                ('<div id="mugeda_video_close' + c + '" align="middle" style="position: absolute;color:white;width:36px;height:36px;right:0px;top: ' + (k ? 0 : 0) + "px;cursor:pointer;background-image:url(" + g + ');z-index:3;"></div>');
            a.appendChild ? a.appendChild(div) : a.dom && a.dom.appendChild(div);
            b = G("mugeda_video" + c);
            c = G("mugeda_video_close" + c);
            c.style.display = d.close_button ? "block" : "none";
            d.close_button && (g = isMobile() ? "touchend" : "click", c.addEventListener(g, function(a) {
                a.stopPropagation();
                b.src = "";
                b.rawSrc = "";
                b.load();
                div.style.display =
                    "none"
            }, false));
            d.video_controls ? b.setAttribute("controls", "controls") : b.removeAttribute("controls");
            b.rawPlay = b.play;
            b.rawPause = b.pause;
            b.play = function() { if (b.paused) { if ((b.src == "" || b.src == window.location.href) && b.backSrc) b.src = b.backSrc; if (b.rawSrc == "" && b.backRawSrc) b.rawSrc = b.backRawSrc;
                    b.onplayed();
                    b.rawPlay(); for (var a = b.parentElement; a;)
                        if (a.className == "mugedaVideoHolder") { a.style.display = "block"; break } else a = a.parentElement } };
            b.pause = function() { b.onpaused();
                b.rawPause() };
            b.onplayed = function() {
                if (e ==
                    0 && window.backgroundMusic) backgroundMusic.prevPlayStatus = backgroundMusic.playStatus, backgroundMusic.pause(), backgroundMusic.playStatus = 0
            };
            b.onpaused = function() { if (e == 0 && window.backgroundMusic && backgroundMusic.prevPlayStatus == 1) backgroundMusic.play(), backgroundMusic.playStatus = 1, delete backgroundMusic.prevPlayStatus };
            b.onclick = function(a) { a.preventDefault();
                a.stopPropagation();
                f === 0 ? this.paused ? this.play() : this.pause() : this.paused && this.play() };
            return div
        }
    },
    loadUrl: function(a) {
        var d = a.id || (new Date).getTime(),
            c = a.url || "",
            e = a.left || 0,
            f = a.top || 0,
            b = isNaN(a.width) ? window.aniData ? window.aniData.width : 320 : Math.max(0, a.width),
            g = isNaN(a.height) ? window.aniData ? window.aniData.height : 240 : Math.max(0, a.height),
            k = a.before || null,
            i = a.style,
            h = a.scroll,
            r = a.parent,
            t = a.onload,
            j = a.onclose,
            m = a.position,
            p = a.close_position;
        if (!k && !r) { var q = typeof Mugeda != "undefined" && Mugeda.getCanvas ? Mugeda.getCanvas() : this.getStage();
            typeof Mugeda != "undefined" && q && (q = getElementOffset(q), e += q.left, f += q.top) }
        var l = G(d);
        l || (l = document.createElement("div"),
            r ? r.appendChild(l) : k ? k.parentNode.insertBefore(l, k) : document.body.appendChild(l));
        l.id = d;
        l.style.margin = 0;
        l.style.padding = 0;
        l.style.backgroundColor = "transparent";
        l.style.position = m ? m : "fixed";
        l.style.top = 0;
        l.style.left = 0;
        l.style.width = 0;
        l.style.height = 0;
        switch (p) {
            case "leftTop":
                p = "left:4px;top:4px;"; break;
            case "leftbottom":
                p = "left:4px;bottom:4px;"; break;
            case "rightbottom":
                p = "right:4px;bottom:4px;"; break;
            default:
                p = "right: 4px;top: 4px;" } l.innerHTML = "<iframe " + (h ? "" : "scrolling=no ") + 'id="' + d + '_iframe" style="border:none; width:100%;height:100%; ' +
            (h ? "" : "overflow:hidden;") + ' " ></iframe>' + ('<div id="' + d + '_iframe_close" align="middle" style="position: absolute;color:white;width: 24px;height: 24px; ' + p + 'cursor:pointer;background: rgba(0,0,0,0.5);border: 3px solid white;border-radius: 15px;font-family:arial;font-size: 16px;line-height:24px;">&#10006;</div>');
        l.style.display = "none";
        l.style.top = f + "px";
        l.style.left = e + "px";
        l.style.width = b + "px";
        l.style.height = g + "px";
        l.style.display = "block";
        l.style.cssText += i;
        G(d + "_iframe_close").style.display = a.close_button ?
            "block" : "none";
        setTimeout(function() { if (a.close_button) G(d + "_iframe_close").onclick = function() { l.style.display = "none";
                G(d + "_iframe").src = "about:blank";
                j && j(l) } }, 100);
        setTimeout(function() { var a = G(d + "_iframe");
            a.src = c; if (t) try { a.onload = function() { t(a);
                    a.onload = null } } catch (b) {} }, 100);
        return l
    },
    playAudio: function(a, d) {
        var c = false;
        if (!a || !a.audio_url || !a.audio_url.length) return false;
        var e = typeof Mugeda != "undefined" && Mugeda.getAudioCache ? Mugeda.getAudioCache(a.audio_url, a.audioId) : MugedaBehavior.localCache[a.audio_url];
        if (e) { if (e.loop = parseInt(a.audio_loop) == 1 ? true : false, e.play)
                if (e.webAudio) c = e.play(a.event == "click" || d ? true : false);
                else if (a.event == "click") { try { e.pause(), e.currentTime = 0 } catch (f) {} setTimeout(function() { e.play() }, 5) } else(e.playStatus != 1 || d) && setTimeout(function() { e.play();
                e.playStatus = 1;
                c = true }, 10) } else {
            var e = new Audio,
                b = document.createElement("source"),
                g = a.audio_url.lastIndexOf("."),
                g = a.audio_url.substring(g + 1),
                k = true;
            switch (g) {
                case "ogg":
                    b.type = "audio/ogg";
                    break;
                case "mp3":
                    b.type = "audio/mpeg";
                    break;
                default:
                    k = false, console.log("Audio extension (" + g + ") not supported.")
            }
            if (k) {
                b.src = a.audio_url;
                e.appendChild(b);
                e.autoplay = false;
                e.preload = "auto";
                e.load();
                var i = document.getElementById("mugeda_resource_loading");
                if (!i) i = document.createElement("img"), i.id = "mugeda_resource_loading", i.style.position = "fixed", i.style.right = "2px", i.style.top = "2px", i.style.display = "block", i.src = (_mrmcp.creative_path || "") + "loading.gif", document.body.appendChild(i);
                i.style.display = "block";
                c = true;
                e.addEventListener("canplay",
                    function() { i.style.display = "none";
                        e.play() }, false);
                MugedaBehavior.localCache[a.audio_url] = e
            }
        }
        return c
    },
    playHTML5Video: function(a) {
        var d = a.left || 0,
            c = a.top || 0,
            e = isNaN(a.width) ? "100%" : Math.max(0, a.width) + "px",
            f = isNaN(a.height) ? "100%" : Math.max(0, a.height) + "px",
            b = window.Mugeda && Mugeda.getCanvas ? Mugeda.getCanvas() : this.getStage();
        typeof Mugeda != "undefined" && b && !a.video_holder && !isNaN(a.left) && (b = getElementOffset(b), d += b.left, c += b.top);
        var g = document.body;
        if (a.video_holder)
            if ((b = Mugeda.getMugedaObject ? Mugeda.getMugedaObject() :
                    null) && b.scene) { var g = a.video_holder,
                    g = g.split("/"),
                    k = a.video_object === 1; if (g.length === 2) b = b.scene.getObjectByName(k ? g[1] : g[0]), k ? (g = b ? b.scene.objectHash[g[0]] : null, a.url = g ? g.data.param.videoUrl : a.url) : g = b ? b.scene.getObjectByName(g[1]) : null;
                else if (k) { if ((g = b.scene.objectHash[a.video_holder]) || (g = b.scene.dom.querySelector('*[data-guid="' + a.video_holder + '"]')), g && g.data) a.url = g.data.param.videoUrl } else g = b.scene.getObjectByName(a.video_holder) } else {
                if (window.mugedaCss && mugedaCss.magic && (b = document.getElementById(mugedaCss.magic +
                        "stage"))) g = a.video_holder, g = g.split("/").map(function(a) { return "." + a }), (g = b.querySelectorAll(g.join(" "))) && g.length && (g = g[0])
            }
        else g = document.body;
        var i = this.createHTML5VideoTag(g, a);
        i.style.top = c + "px";
        i.style.left = d + "px";
        i.style.width = e;
        i.style.height = f;
        i.style.display = "block";
        var h = i.querySelector("video");
        h.src = a.url;
        h.rawSrc = a.url;
        h.load();
        setTimeout(function() {
            if (a.showLoading) MugedaTools.message.show(null, { hideShade: true, parent: i, center: true }), h.loadingShown = true, h.ontimeupdate = function() {
                if (h.loadingShown) MugedaTools.message.close(),
                    h.loadingShown = false
            };
            a.event == "appear" && (window.WeixinJSBridge ? WeixinJSBridge.invoke("getNetworkType", {}, function() { h.play();
                h.playing = true }, false) : document.addEventListener("WeixinJSBridgeReady", function() { WeixinJSBridge.invoke("getNetworkType", {}, function() { h.play();
                    h.playing = true }) }, false));
            h.play();
            h.playing = true
        }, 10)
    },
    playVideo: function(a) {
        a = a || {};
        if (!a.video_url) return false;
        if (this.mraidReadyStatus != 1) {
            var d = a.dom || document.querySelector('video[video-id="' + a.video_id + '"]');
            a.video_mode == "object" &&
                a.video_id && d && d.rawSrc == a.video_url || this.playHTML5Video({
                    url: a.video_url,
                    id: a.video_id || "",
                    name: a.video_name || "",
                    mode: a.video_mode || "",
                    video_object: parseInt(a.video_object, 10),
                    video_holder: a.video_holder,
                    left: parseInt(a.video_left, 10),
                    top: parseInt(a.video_top, 10),
                    width: parseInt(a.video_width, 10),
                    height: parseInt(a.video_height, 10),
                    close_button: parseInt(a.video_close, 10) == 1,
                    video_controls: parseInt(a.video_controls, 10) == 1,
                    video_embed: parseInt(a.video_embed, 10) == 1,
                    auto: parseInt(a.video_autoplay, 10) ==
                        1,
                    event: a.event
                })
        } else mraid.playVideo(a.video_url)
    },
    stopVideo: function() { for (var a = document.querySelectorAll("div.mugedaVideoHolder"), d = 0, c = a.length; d < c; d++) { var e = a[d].querySelector("video"); if (e) e.backSrc = e.src, e.backRawSrc = e.rawSrc, e.src = "", e.rawSrc = "", e.load();
            a[d] && (a[d].style.display = "none") } },
    controlVideo: function(a, d) {
        var c = document.querySelector("#mugeda_video_" + a);
        if (c)
            if (d == "play") c.play();
            else if (d == "pause") c.pause();
        else { if (d == "stop") c.pause(), c.currentTime = 0 } else if ((c = Mugeda.getMugedaObject ?
                Mugeda.getMugedaObject() : null) && c.scene)
            if (c = c.scene.objectHash[a]) { var e = c.data.param;
                d === "play" && MugedaMraid.playVideo({ auto: e.videoAutoPlay, clickStatus: e.clickStatus, event_name: "", hidePlayIcon: e.hidePlayIcon, video_close: 0, video_continue_audio: e.continueAudio, video_controls: e.hidePlayControls == 1 ? 0 : 1, video_holder: c.data.guid, video_left: 0, video_mode: "object", video_name: e.name, video_embed: e.embedVideo, video_object: 1, video_top: 0, video_url: e.videoUrl }) }
    },
    sendShortMessage: function(a) {
        var d = "sms:" + a.phone_number;
        if (a.sms_body) { var c = navigator.userAgent.toLowerCase().indexOf("android") > -1;
            d += (c ? "?" : "&") + "body=" + a.sms_body } window.open(d, "_self")
    },
    makePhoneCall: function(a) { window.open("tel:" + a.phone_number, "_self") }
};
Mugeda.getContentId = function() { var a = "",
        d = 0; if (window._mrmcp && window._mrmcp.creative_id) a = window._mrmcp.creative_id, window._mrmcp.previewMode && (d = 3);
    else if (Mugeda && Mugeda.data && Mugeda.data.crid) a = Mugeda.data.crid, d = 3; if (a == "" && /\/edit\/(\w+)\&?/.test(top.location.href)) a = RegExp.$1, d = a.length < 16 ? 1 : 2;
    else if (a == "" && /id=(\w+)\&?/.test(window.location.search)) d = 3, a = RegExp.$1; return { crid: a, mode: d } };
MugedaBehavior = {
    localCache: {},
    shakeHash: {},
    pause: function() { typeof Mugeda != "undefined" && Mugeda.pause && Mugeda.pause() },
    resume: function(a) { typeof Mugeda != "undefined" && Mugeda.resume && Mugeda.resume(a) },
    nextPage: function() { typeof Mugeda != "undefined" && Mugeda.nextPage && Mugeda.nextPage() },
    prevPage: function() { typeof Mugeda != "undefined" && Mugeda.prevPage && Mugeda.prevPage() },
    gotoPage: function(a) { typeof Mugeda != "undefined" && Mugeda.gotoPage && Mugeda.gotoPage(a) },
    disablePage: function() {
        typeof Mugeda != "undefined" &&
            Mugeda.disablePage && Mugeda.disablePage()
    },
    enablePage: function() { typeof Mugeda != "undefined" && Mugeda.enablePage && Mugeda.enablePage() },
    next: function() { typeof Mugeda != "undefined" && Mugeda.next && Mugeda.next() },
    previous: function() { typeof Mugeda != "undefined" && Mugeda.previous && Mugeda.previous() },
    gotoAndPlay: function(a) { typeof Mugeda != "undefined" && Mugeda.gotoAndPlay && Mugeda.gotoAndPlay(a) },
    gotoAndStop: function(a) { gotoAndPause(a) },
    gotoAndPause: function(a) { typeof Mugeda != "undefined" && Mugeda.gotoAndPause && Mugeda.gotoAndPause(a) },
    callback: function(a, d) { var c = Mugeda.getMugedaObject ? Mugeda.getMugedaObject() : null,
            e = null;
        c && (e = c.getCallback(d.name));!e && window && d.name && d.name.length && window[d.name] && (e = window[d.name]);
        e && e(a, d.key, d.value) },
    map: function(a) {
        var d = a.map_key.replace(/(\n|\r)/g, "+"),
            c = a.map_address.replace(/(\n|\r)/g, "+"),
            e = navigator.userAgent.toLowerCase().indexOf("android") > -1,
            f = parseInt(a.map_type, 10),
            b = function() {
                for (var a = document.querySelectorAll("div.mugedaVideoHolder"), b = 0, c = a.length; b < c; b++) a[b] && (a[b].style.display =
                    "none");
                (a = G("mugedaMap-mask")) ? g(1): (a = document.createElement("div"), b = window._mrmcp && _mrmcp.creative_path ? _mrmcp.creative_path + "loading.gif" : "/images/loading.gif", a.id = "mugedaMap-mask", a.className = "mugedaMapControl", a.innerHTML = '<p id="mugedaMap-title"><a id="mugedaMap-back">\u8fd4\u56de</a>\u4f4d\u7f6e\u4fe1\u606f</p><div id="mugedaMap-con"></div><div id="mugedaMap-loading"><div class="spinner"></div><style>.mugedaMapControl {position:absolute;left:0;top:0;height:100%;width:100%;z-index:999999;}.mugedaMapMaskVisible {-webkit-transition:transform 1s;transform:translate3d(-100%, 0, 0);-webkit-transform:translate3d(-100%, 0, 0);}.mugedaMapControl #mugedaMap-title {position:fixed;height:44px;line-height:44px;width:100%;text-align:center;z-index:1;background:rgba(255,255,255,.8);margin:0;}.mugedaMapControl #mugedaMap-con {height:100%;width:100%;}.mugedaMapControl #mugedaMap-back {position:absolute;left:5px;display:inline-block;height:100%;width:40px;cursor:pointer;}.mugedaMapControl #mugedaMap-loading {position:absolute;width:100%;height:100%;line-height:100%;left:0;top:44px;display:none;background:#fff;z-index:2;}.mugedaMapControl .spinner {position:absolute;width:20px;height:30px;left:50%;top:50%;margin:-50px 0 0 -10px;background-image:url(' +
                    b + ');background-repeat:no-repeat;background-size:contain;}.mugedaMapControl .spinner:after {content: "\u52a0\u8f7d\u4e2d ...";position:absolute;width:80px;left:-25px;top:120%;}</style>', document.body.appendChild(a), (a = G("mugedaMap-back")) && a.addEventListener("click", function(a) { a.stopPropagation();
                        g(0) }, false))
            },
            g = function(a) { var b = G("mugedaMap-mask");
                b && b.classList.toggle("mugedaMapMaskVisible", !a) },
            k = function(a) { var b = G("mugedaMap-loading"); if (b) b.style.display = a ? "block" : "none" },
            i, h, r = function(a,
                b, c, d) { i || (i = new BMap.Map("mugedaMap-con"));
                i.centerAndZoom(c || "\u5317\u4eac", 11);
                i.addControl(new BMap.ZoomControl);
                h || (h = new BMap.LocalSearch(i, { renderOptions: { map: i, autoViewport: true }, onSearchComplete: function(a) { typeof d === "function" && d.call(i, a) } }));
                b && a ? h.searchNearby(b, a) : h.search(b) },
            t = function(a, c, d) {
                if (f === 0) {
                    var e = ["http://api.map.baidu.com/getscript?type=quick&file=api&ak=FOm6cLbES9zjrtvcDYndkwSR&v=1.0", "http://api.map.baidu.com/getscript?type=quick&file=feature&ak=FOm6cLbES9zjrtvcDYndkwSR&v=1.0"],
                        c = decodeURIComponent(c),
                        a = decodeURIComponent(a);
                    b();
                    k(1);
                    for (var g = 0, d = 0, i = e.length; d < i; d++) { var h = document.createElement("script");
                        h.src = e[d];
                        h.onload = function() {++g === i && r(a, c, "", function(a) { a.getNumPois() === 0 && Mugeda.messageBox("\u62b1\u6b49\uff0c\u6ca1\u6709\u641c\u7d22\u5230\u76f8\u5173\u4fe1\u606f", "alert");
                                k(0) }) };
                        document.head.appendChild(h) }
                } else if (e = "https://maps.google.com/maps?q=" + (a + "" + (c.length ? "+near+" + c : "")) + "&z=12", h = parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || false, d == 1) { if (d = document.getElementById("aMugedaGeoLocation")) d.href = e, e = document.createEvent("HTMLEvents"), e.initEvent("click", true, true), d.dispatchEvent(e) } else h && h < 6 ? window.location.href = e : window.open(e, "_blank")
            };
        if (!e && c.length == 0 && navigator.geolocation) {
            a = document.getElementById("aMugedaGeoLocation");
            if (!a) a = document.createElement("a"), a.id = "aMugedaGeoLocation", a.style.display = "none", a.href = "", a.target = "_blank", document.body.appendChild(a);
            navigator.geolocation.getCurrentPosition(function(a) { c = a.coords.latitude + "," + a.coords.longitude;
                t(d, c, 1) })
        } else t(d, c)
    },
    popupForm: function(a, d) {
        function c(a, b) { if (a && b) return a.querySelector("#" + b) }

        function e(a) {
            if (window.localStorage && window.localStorage.getItem) return unescape(localStorage.getItem(a) || "");
            var b, c, d, e = document.cookie.split(";");
            for (b = 0; b < e.length; b++)
                if (c = e[b].substr(0, e[b].indexOf("=")), d = e[b].substr(e[b].indexOf("=") + 1), c = c.replace(/^\s+|\s+$/g, ""), c == a.toLowerCase()) return unescape(d);
            return ""
        }

        function f(a, b) { if (window.localStorage && window.localStorage.getItem) try { localStorage.setItem(a, escape(b)) } catch (c) { console.info("Oops, localStorage full"), localStorage.clear(), localStorage.setItem(a, escape(b)) } else { var d = new Date;
                d.setDate(d.getDate() + 3);
                d = escape(b) + "; expires=" + d.toUTCString();
                document.cookie = a.toLowerCase() + "=" + d } }

        function b(a) { var b = document.querySelector(".MugedaStage") ? null : G("viewbox") || G("frame"); if (b) b.style.display = a ? "" : "none"; return b ? true : false }

        function g(a) {
            if (d) {
                var c =
                    function(a, b) { Array.prototype.forEach.call(a, function(a, c) { b(a, c) }) };
                c(a.querySelectorAll(".popupFormInputBox input,.popupFormInputBox textarea"), function(a) { a.value = "" });
                c(a.querySelectorAll(".popupFormRadioList input,.popupFormCheckbox input"), function(a) { a.checked = false });
                c(a.querySelectorAll(".popupFormSelectList select"), function(a) { a.value = a.querySelector("option").getAttribute("value") })
            } else if (c = a.querySelector("form"), c.style.bottom = -c.offsetHeight + "px", a.style.background = "rgba(0,0,0,0)",
                setTimeout(function() { a.parentNode && a.parentNode.removeChild(a) }, 500), b(1) && (document.body.style.overflowY = "hidden", isMobile())) document.body.style.height = "100%"
        }
        var k = a.openTarget == "default" || a.openTarget == "frame" || a.openTarget == "page";
        if (a && !(a.openTarget == "callback" && !a.callback || a.openTarget != "callback" && a.openTarget != "customizable" && !k && !a.url)) {
            var k = document.documentElement.clientWidth,
                i = document.documentElement.clientHeight,
                h = [],
                r = function(b, c) {
                    var c = c || {},
                        d = c.detail,
                        e = c.form || (d ? d.form : null),
                        d = { item: d, form: e, title: a.title, hideItem: function(a) { e && e.elements[a] && (e.elements[a].parentNode.style.display = "none") }, showItem: function(a) { e && e.elements[a] && (e.elements[a].parentNode.style.display = "block") } },
                        c = document.createEvent("Events");
                    c.initEvent(b, true, true);
                    c.detail = d;
                    window.dispatchEvent(c)
                };
            window.addEventListener("_mugedaFormChanged", function(a) { r("mugedaFormChanged", a) });
            var t = a.items || [];
            window.popupFormFields = t;
            if (!a.html) {
                var j = "";
                d ? (j += '<div class="popupFormContent">', a.title && (j +=
                    '<div align="center" class="popupFormTitle"><h2>' + a.title + "</h2></div>")) : (j += '<div align="center" class="popupFormTitle">', j += '<div class="title-col-2" align="center"><input type="button" value="' + a.cancelName + '" class="popupFormCancel" id="popupFormCancel"></div>', j += '<div class="title-col-6" align="center"><h2>' + (a.title || "&nbsp;") + "</h2></div>", j += '<div class="title-col-2" align="center"><input id="actionButton" type="button" value="' + a.submitName + '" class="popupFormSubmit"></div>', j += "</div>",
                    j += '<div class="popupFormContent">');
                var m = navigator.userAgent.toLowerCase(),
                    p = m.indexOf("android") > -1,
                    q = parseFloat(m.slice(m.indexOf("android") + 8)),
                    l = "",
                    z = 0,
                    y = { phone: "tel", input: "text" };
                p && q < 3 && (l = "-webkit-transform: scale(2,2);-webkit-transform-origin:center center;");
                for (var B = d ? "" : ":", m = 0; m < t.length; m++) {
                    var n = t[m],
                        x = (n.value || "").trim();
                    if (x) {
                        for (var x = x.split("\n"), u = [], v = 0; v < x.length; v++) {
                            var I = x[v].split("("),
                                A = I[0],
                                I = (I[1] || "").replace(/\)$/, "") || A,
                                F = ["FORMID", I, m, v].join("_");
                            u[v] = {
                                id: F,
                                text: A,
                                value: I
                            }
                        }
                        x = u
                    }
                    F = 'id="popupFormField_' + m + '"';
                    switch (n.type) {
                        case "radio":
                            j += "<div " + F + ' class="popupFormRadioList">';
                            n.description && (j += '<label class="inputlabel">' + n.description + (n.required ? "*" : "") + B + "</label>");
                            j += '<div class="mformradio">';
                            for (v = 0; v < x.length; v++) u = x[v], A = e(u.id), j += '<label><input onchange="var event = document.createEvent(\'Events\');event.initEvent(\'_mugedaFormChanged\', true, true);event.detail = this;window.dispatchEvent(event);" type="radio" name="' + n.id + '" value="' +
                                u.value + '" id="' + u.id + '" ' + (A == "true" ? "checked=checked" : "") + " ><span " + (v == x.length - 1 ? "" : " style='border-right:1px solid " + a.background + "'") + ">" + u.text + "</span></label>", h[u.id] = u.id;
                            j += "</div></div>";
                            break;
                        case "checkbox":
                            j += "<div " + F + ' class="popupFormCheckbox">';
                            n.description && (j += '<label class="inputlabel">' + n.description + (n.required ? "*" : "") + B + "</label>");
                            j += '<div class="mformcheck">';
                            j += n.rangeType === "vertical" ? "<table>" : "";
                            for (v = 0; v < x.length; v++) u = x[v], A = e(u.id), j += n.rangeType === "vertical" ?
                                '<tr><td><input type="checkbox" value="' + u.value + '" id="' + u.id + '" ' + (A == "true" ? "checked=true" : "") + ' ></td><td><label for="' + u.id + '" >' + u.text + "</label></td></tr>" : '<input onchange="var event = document.createEvent(\'Events\');event.initEvent(\'_mugedaFormChanged\', true, true);event.detail = this;window.dispatchEvent(event);" type="checkbox" name="' + n.id + '" value="' + u.value + '" id="' + u.id + '" ' + (A == "true" ? "checked=true" : "") + ' ><label for="' + u.id + '" >' + u.text + "</label>", h[u.id] = u.id;
                            p && q < 3 && n.rangeType !=
                                "vertical" && (z = 6);
                            j += n.rangeType === "vertical" ? "</table>" : "";
                            j += "</div></div>";
                            break;
                        case "select":
                            j += "<div " + F + ' class="popupFormSelectList">';
                            n.description && (j += '<label class="inputlabel text">' + n.description + (n.required ? "*" : "") + B + "</label>");
                            j += '<select class="text" onchange="var event = document.createEvent(\'Events\');event.initEvent(\'_mugedaFormChanged\', true, true);event.detail = this;window.dispatchEvent(event);" name="' + n.id + '" id="' + ("_map_" + n.description) + '">';
                            j += '<option value="">' + n.description +
                                "</option>";
                            A = e(n.description);
                            for (v = 0; v < x.length; v++) u = x[v], j += '<option value="' + u.value + '" ' + (A == u.value ? "selected=selected" : "") + ">" + u.text + "</option>";
                            j += "</select>";
                            j += "</div>";
                            h[n.description] = "_map_" + n.description;
                            break;
                        case "textarea":
                            j += "<div " + F + ' class="popupFormInputBox">';
                            j += '<label class="inputlabel inputlabel_area">' + n.description + (n.required ? "*" : "") + B + '</label><textarea name="' + n.id + '" id="_mcp_' + escape(n.description) + '" rows="4" onchange="var event = document.createEvent(\'Events\');event.initEvent(\'_mugedaFormChanged\', true, true);event.detail = this;window.dispatchEvent(event);" style="resize:none; height:48px;">' +
                                (n.value.length ? n.value : e(n.description)) + "</textarea>";
                            j += "</div>";
                            h[n.description] = "_mcp_" + escape(n.description);
                            break;
                        default:
                            j += "<div " + F + ' class="popupFormInputBox">', j += '<label class="inputlabel text">' + n.description + (n.required ? "*" : "") + B + '</label><input class="text" name="' + n.id + '" id="_mcp_' + escape(n.description) + '" type="' + (y[n.type] || n.type) + "\" onchange=\"var event = document.createEvent('Events');event.initEvent('_mugedaFormChanged', true, true);event.detail = this;window.dispatchEvent(event);\" value=\"" +
                                (e(n.description) || n.value) + '" ' + (d ? 'placeholder="' + n.description + '"' : "") + ">", j += "</div>", h[n.description] = "_mcp_" + escape(n.description)
                    }
                }
                d && (j += '<div class="popupFormBtn"><input type="button" value="' + a.cancelName + '" class="popupFormCancel" id="popupFormCancel">', j += '<input id="actionButton" type="button" value="' + a.submitName + '" class="popupFormSubmit"></div>');
                j += "</div>";
                a.html = j
            }
            delete this.popupFormDiv;
            var o = this.popupFormDiv;
            if (!o) {
                m = function(b) {
                    var b = b || ".popupForm",
                        c = 1;
                    if (/^rgba\(\d+,\s\d+,\s\d+,\s([0-9.]+)\)$/.exec(a.background)) c =
                        RegExp.$1;
                    c = "<style>" + b + " {width:100%;font-size:" + a.fontSize + 'px;font-family:Tahoma,"\u5fae\u8f6f\u96c5\u9ed1",Arial, SimHei;}' + b + ' * {font-family:Tahoma,"\u5fae\u8f6f\u96c5\u9ed1",Arial, SimHei;}' + b + " form{position:absolute;width:100%;background-color:" + a.background + ";}" + b + " *{margin:0;box-sizing:border-box;-webkit-appearance: none; -moz-appearance: none; appearance: value;}" + b + " .inputlabel{width:33%;height:28px;font-size:" + a.fontSize + "px;line-height:28px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:top;color:#000;}" +
                        b + " span{color:#333;}" + b + " label{color:#000;}" + b + " #popupFormField_0{padding-top:16px;}" + b + " .popupFormMask {position:absolute;left:0;top:0;width:100%;height:100%;background-color: " + a.background + "}" + b + " .popupFormContent {padding-bottom:16px; background-color:#fff;opacity:" + c + ";}" + b + " .popupFormTitle {width:100%;padding:20px 0;overflow:hidden;background-color: " + a.background + "}" + b + " h2 {font-weight:normal;font-size:" + (2 + parseInt(a.fontSize)) + "px;color:" + a.color + ";}" + b + " h3{text-align:left;font-size:" +
                        a.fontSize + "px; font-weight: normal;color:" + a.color + ";}" + b + " .popupFormInputBox{padding:8px 16px;text-align:left;}" + b + " .popupFormInputBox input, .popupFormInputBox textarea, .popupFormSelectList select{width:67%;height:28px;border:1px solid " + a.background + ";font-size:" + a.fontSize + "px;padding:0;padding-left:8px;vertical-align:top;border-radius:2px;}" + b + " .popupFormSelectList{padding:8px 16px 0;}" + b + " .popupFormRadioList{padding:8px 16px 0;}" + b + " .popupFormCheckbox{padding:8px 16px 0;}" + b + " .popupFormTitle input{border-width:0;cursor:pointer;font-size:" +
                        a.fontSize + "px;color:" + a.color + "}" + b + " .popupFormSubmit{border:none;background:none}" + b + " .popupFormCancel{background:none;border:none;}" + b + " .popupFormRadioList input{margin:0 5px 0 8px;}" + b + " .popupFormRadioList label{vertical-align:top;}" + b + " .mformradio {background-color:#EFEFEF;border:1px solid " + a.background + ";overflow:hidden;display:inline-block;}" + b + " .mformradio label{float:left; min-width:48px;position:relative;}" + b + " .mformradio label span{text-align:center;padding:6px 8px;display:block;}" +
                        b + " .mformradio label input{position:absolute;width:100%;height:100%;margin:0;border:0;opacity:0;}" + b + " .mformradio input:checked + span{background-color:" + a.background + ";color:#F7F7F7;}" + b + " .mformcheck{margin:0 0 8px;display:inline-block;}" + b + " .mformcheck input{" + l + "width:24px;height:24px;background-color:#EFEFEF;border:1px solid " + a.background + ";vertical-align:middle;margin:3px 2px;}" + b + " .mformcheck input:checked{background-color:" + a.background + ";}" + b + " .popupFormTitle .title-col-2 {float:left;width:20%;padding:0 ;text-align:center;}" +
                        b + " .popupFormTitle .title-col-6 {float:left;width:60%;padding:0 ;}" + b + " .popupFormTitle .title-col-2 input {font-size:" + (2 + parseInt(a.fontSize)) + "px;}" + b + " .mformcheck label{vertical-align:" + z + "px;font-size:" + a.fontSize + "px;padding-top:0;padding-left:4px;padding-right:8px;}";
                    d && (c += b + " .popupFormBtn {width:100%;padding:20px 0 0 0;text-align:center;}", c += b + " .popupFormSubmit {width:90px;height:30px;color:" + a.color + ";background-color:" + a.background + "}", c += b + " .popupFormCancel {width:90px;height:30px;margin-right:15px;color:" +
                        a.color + ";display:none;background-color:" + a.background + "}");
                    c += "</style>";
                    return c
                };
                if (!o) {
                    var J = a.openTarget == "backend" ? "popupFormIframe" : "_" + a.openTarget,
                        o = document.createElement("div");
                    o.style.display = "none";
                    o.className = d ? "popupForm2" : "popupForm";
                    var C = "";
                    if (d) var D = function(b) {
                            for (var c = { l: 48, r: 200 }, d = 0, e = 0, g = b.length; e < g; e++) { for (var f = b[e], i = f.description.length, h = 0, j = 0; j < i; j++) h += f.description[j].match(/[\u3400-\u9FBF]/) ? 2 : 1;
                                d = Math.max(d, h) } d = d > 8 ? 8 : d;
                            b = a.fontSize * (d - 4);
                            d > 4 && d <= 8 && (c.l += b, c.r -=
                                b);
                            return c
                        }(t),
                        C = m(".popupForm2");
                    else C = m();
                    o.innerHTML = '<form method="' + a.method + '" target="' + J + '" autocomplete="on"></form><iframe name="popupFormIframe" id="popupFormIframe" style="display:none"></iframe>' + C;
                    !d && !a.isCss ? document.body.appendChild(o) : (a.hwObj = D, a.iframeDiv = o, a.parentDom && a.parentDom.appendChild(a.iframeDiv));
                    this.popupFormDiv = o;
                    o.form = o.childNodes[0];
                    o.form.onclick = function() {};
                    self = this;
                    d || o.addEventListener(isMobile() ? "touchend" : "mouseup", function(a) {
                        if (!window.cardFrame) {
                            if (a.target ==
                                o) g(o), self.popupFormDiv = null, a.stopPropagation();
                            var b = a.target.nodeName.toLowerCase(),
                                c = (a.target.type || "").toLowerCase();
                            ["input", "textarea", "select"].indexOf(b) >= 0 && c != "checkbox" && c != "submit" && (a.target.focus(), p && setTimeout(function() { a.target.scrollIntoView();
                                a.target.scrollIntoViewIfNeeded && a.target.scrollIntoViewIfNeeded() }, 500), a.stopPropagation());
                            c == "button" && a.stopPropagation()
                        }
                    });
                    C = function() {
                        function b() {
                            var e = [],
                                f = t;
                            if (!d) f = window.popupFormFields;
                            for (var i = 0; i < f.length; i++) {
                                var h = f[i],
                                    j = c(o, "popupFormField_" + i),
                                    k = "",
                                    l = j.querySelectorAll("select");
                                l.length == 0 && (l = j.querySelectorAll("textarea"), l.length == 0 && (l = j.querySelectorAll("input")));
                                if (l.length == 1) k = l[0].value || "";
                                else if (l.length > 1) { for (var k = [], m = 0; m < l.length; m++)
                                        if (j = l[m], j.checked && (k.push(j.value), j.type == "radio")) break;
                                    k = k.join(",") }
                                if (h.required && !k) { Mugeda.messageBox((h.description || "item") + " required");
                                    l[0].focus(); return }
                                if (k) switch (h.type) {
                                    case "phone":
                                        if (!/^\d+$/.test(k)) {
                                            Mugeda.messageBox((h.description || "Phone number") +
                                                " required");
                                            l[0].focus();
                                            return
                                        }
                                        break;
                                    case "email":
                                        if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(k)) { Mugeda.messageBox((h.description || "Email") + " required");
                                            l[0].focus(); return }
                                }
                                a.openTarget === "default" ? e.push(encodeURIComponent(h.description + "(" + h.id + ")") + "=" + encodeURIComponent(k || "")) : e.push(encodeURIComponent(h.id) + "=" + encodeURIComponent(k || ""))
                            }
                            if ("popupFormIframe" == J) G("actionButton").value = a.pendingName;
                            e = e.join("&");
                            f = a.url + "?" + e;
                            a.loadFinished = function() {
                                g(o);
                                self.popupFormDiv =
                                    null
                            };
                            if (a.openTarget == "customizable") f = { callback: function(b) { a.msg ? Mugeda.messageBox(a.msg, "alert", function() { window.open(b, "_self") }) : window.open(b, "_self") }, cancel: false }, window.MugedaCard && MugedaCard.finalizeCustomParameters && MugedaCard.finalizeCustomParameters(e, f), a.loadFinished();
                            else if (a.openTarget == "default" || a.openTarget == "page" || a.openTarget == "frame" || a.openTarget == "callback") {
                                i = "";
                                f = 0;
                                if (window._mrmcp) i = window._mrmcp.creative_id || "", window._mrmcp.previewMode && (f = 3);
                                else if (Mugeda && Mugeda.data &&
                                    Mugeda.data.crid) i = Mugeda.data.crid;
                                if (i == "" && /\/edit\/(\w+)\&?/.test(top.location.href)) i = RegExp.$1, f = i.length < 16 ? 1 : 2;
                                else if (i == "" && /id=(\w+)\&?/.test(window.location.search)) f = 3, i = RegExp.$1;
                                h = function(a, b, c) {
                                    var c = c || "post",
                                        d = document.createElement("form"),
                                        e = document.createElement("iframe");
                                    d.setAttribute("method", c);
                                    d.setAttribute("action", a);
                                    a = "__iframe" + Math.random() * 1E4;
                                    e.setAttribute("id", a);
                                    e.setAttribute("name", a);
                                    d.setAttribute("target", a);
                                    e.style.width = 0;
                                    e.style.height = 0;
                                    e.style.display =
                                        "none";
                                    e.addEventListener("load", function() {});
                                    a = 0;
                                    for (c = b.length; a < c; a++) { var f = b[a].split("="),
                                            i = f[0],
                                            f = f[1],
                                            g = document.createElement("input");
                                        g.setAttribute("type", "hidden");
                                        g.setAttribute("name", i);
                                        g.setAttribute("value", f);
                                        d.appendChild(g) } document.body.appendChild(d);
                                    document.body.appendChild(e);
                                    d.submit()
                                };
                                if (i && /^[a-zA-Z0-9\-\_\.]+\.(mugeda|mgd5|h5mc|h5mgd|imugeda|mgdh5)\.com$/.test(window.location.hostname)) window._mrmcp = window._mrmcp || {}, h(_mrmcp.saveFormUrl || "http://weika.mugeda.com/server/cards.php/saveform",
                                    (e + "&crid=" + i + "&mode=" + f).split("&")), a.msg && Mugeda.messageBox(a.msg);
                                a.openTarget == "callback" ? a.callback && window[a.callback] ? (f = { callback: function() { a.msg && Mugeda.messageBox(a.msg) }, cancel: false }, window[a.callback](e, f), MugedaTracker.fireEvent({ category: "interaction", action: "form", label: "", value: a.id ? parseInt(a.id, 36) : 0 }), f.cancel !== true && f.callback()) : console.log("No callback function found. Skipping...") : a.openTarget == "frame" ? a.callback && a.callback() : a.openTarget == "page" && a.callback && a.callback();
                                a.loadFinished()
                            } else try { window.open(f, J), G("popupFormIframe").onload = function() { a.loadFinished();
                                    MugedaTracker.fireEvent({ category: "interaction", action: "form", label: "", value: a.id ? parseInt(a.id, 36) : 0 });
                                    a.msg && Mugeda.messageBox(a.msg) } } catch (p) { a.loadFinished(), Mugeda.messageBox("Form submission failed. Please try again. ") }
                        }
                        o.querySelector("#popupFormIframe").onload = null;
                        for (n in h) { var e = document.getElementById(h[n]);
                            e && (e.type == "checkbox" || e.type == "radio" ? f(n, e.checked) : f(n, e.value)) } q < 3 ? b() : setTimeout(b,
                            200);
                        return false
                    }
                }
                o.style.display = "";
                o.form.innerHTML = a.html;
                if (a.id) o.form.id = a.id;
                var K = isMobile() ? "touchstart" : "click";
                o.form.querySelector("input[id=actionButton]").addEventListener(K, C, false);
                o.style.display = "";
                o.style.visibility = "hidden";
                setTimeout(function() { r("mugedaFormInitialized", { form: o.form });
                    o.style.visibility = "visible" }, 200);
                setTimeout(function() { c(o, "popupFormCancel").addEventListener(K, function() { g(o);
                        self.popupFormDiv = null }, false) }, 500);
                D = o.querySelectorAll(".popupFormInput");
                for (m =
                    0; m < D.length; m++) C = D[m], C.onfocus = onInputFocus, C.onblur = onInputBlur;
                var w;
                a.target ? w = a.target.getBoundingClientRect() : (D = Mugeda.getMugedaObject ? Mugeda.getMugedaObject() : null) && a.isCss ? (k = D.adaption, w = { left: Math.max(0, (window.Mugine ? 1 : -1) * k.marginLeft), top: window.Mugine ? 0 : Math.max(0, (window.Mugine ? 1 : -1) * k.marginTop), width: Math.min(k.width, D.width), height: Math.min(k.height, D.height) }) : w = { left: 0, top: 0, width: k, height: i };
                document.body.style.overflowY = "auto";
                if (b()) {
                    if (o.style.marginLeft = Math.max(2, w.left +
                            document.documentElement.scrollLeft + (w.width - o.offsetWidth) / 2) + "px", o.style.marginTop = Math.max(2, w.top + document.documentElement.scrollTop + (w.height - o.offsetHeight) / 2) + "px", o.style.marginBottom = "32px", o.offsetHeight + 32 > document.documentElement.scrollHeight && (o.style.marginTop = parseInt(window.getComputedStyle ? getComputedStyle(o).marginTop : o.currentStyle.marginTop) + 32 + "px", isMobile())) document.body.style.height = o.offsetHeight + 64 + "px"
                } else if (o.style.position = "relative", o.style.left = w.left + "px", o.style.top =
                    w.top + "px", Math.max(2, w.top + (w.height - o.offsetHeight) / 2), Math.max(2, w.left + (w.width - o.offsetWidth) / 2), !d) {
                    var H = o.querySelector("form");
                    H.style.bottom = "-9999px";
                    o.style.overflow = "hidden";
                    setTimeout(function() {
                        o.style.background = "rgba(0,0,0,0)";
                        o.style.width = w.width + "px";
                        o.style.height = "100%";
                        H.style.webkitTransition = "none";
                        H.style.bottom = -H.offsetHeight + "px";
                        setTimeout(function() { H.style.webkitTransition = "all 500ms";
                                H.style.bottom = "0px";
                                H.style.overflowY = "auto";!d && (o.style.background = "rgba(0,0,0,0.3)") },
                            1)
                    }, 1)
                }
            }
        }
    },
    getPopupFormHeight: function(a) { for (var d = a.items, c = 0, e = 0, f = d.length; e < f; e++) { var b = d[e]; switch (b.type) {
                case "input":
                case "phone":
                case "email":
                    c += 44; break;
                case "textarea":
                    c += 64; break;
                case "radio":
                    c += 48; break;
                case "checkbox":
                    b = b.value.split("\n").length;
                    c += 32 * b + 8; break;
                case "select":
                    c += 36; break;
                default:
                    c += 44 } } a.title && (c += 60);
        c += 8;
        c += 50;
        c += 16; return c },
    processAction: function(a, d, c, e) {
        var f = true;
        if (a.type == "pause") this.pause(a.param);
        else if (a.type == "play") this.resume(1);
        else if (a.type == "next") this.next();
        else if (a.type == "previous") this.previous();
        else if (a.type == "nextPage") this.nextPage();
        else if (a.type == "prevPage") this.prevPage();
        else if (a.type == "disablePage") this.disablePage();
        else if (a.type == "enablePage") this.enablePage();
        else if (a.type == "gotoPage") { var b = a.param && a.param.page_number ? a.param.page_number : a.param,
                g = typeof b == "string" ? b.split(";") : [];
            g.length > 1 && (b = g[Math.floor(Math.random() * g.length)]);
            b = parseInt(b);
            this.gotoPage(b) } else if (a.type == "callback") this.callback(a.object, a.param);
        else if (a.type ==
            "map") this.map(a.param);
        else if (a.type == "gotoAndPlay") b = a.param && a.param.frame_number ? a.param.frame_number : a.param, g = typeof b == "string" ? b.split(";") : [], g.length > 1 && (b = g[Math.floor(Math.random() * g.length)]), b = parseInt(b), isNaN(b) && (b = a.param && a.param.frame_name ? a.param.frame_name : "", b = Mugeda.mapFrameNameId[b], b = parseInt(b) + 1), this.gotoAndPlay(b);
        else if (a.type == "gotoAndPause" || a.type == "gotoAndStop") b = a.param && a.param.frame_number ? a.param.frame_number : a.param, g = typeof b == "string" ? b.split(";") : [], g.length >
            1 && (b = g[Math.floor(Math.random() * g.length)]), b = parseInt(b), isNaN(b) && (b = a.param && a.param.frame_name ? a.param.frame_name : "", b = Mugeda.mapFrameNameId[b], b = parseInt(b) + 1), this.gotoAndPause(b);
        else if (a.type == "call") MugedaMraid.makePhoneCall(a.param);
        else if (a.type == "sms") MugedaMraid.sendShortMessage(a.param);
        else if (a.type == "email") MugedaMraid.sendEmail(a.param);
        else if (a.type == "video") a.param.event = d, MugedaMraid.playVideo(a.param);
        else if (a.type == "stopVideo") MugedaMraid.stopVideo(a.param);
        else if (a.type ==
            "audio") a.param.event = d, f = a.restart, window.Mugeda && Mugeda.getMugedaObject && (d = Mugeda.getMugedaObject(), b = Math.floor(d.scene.currentId), a.unit && a.unit.frameStart == b && (f = true)), f = MugedaMraid.playAudio(a.param, f);
        else if (a.type == "picture") MugedaMraid.savePicture(a.param);
        else if (a.type == "calendar") MugedaMraid.addCalendarEvent(a.param);
        else if (a.type == "expand") MugedaMraid.expand(a.param.url, 0, a.param);
        else if (a.type == "resize") MugedaMraid.expand("", 1, a.param);
        else if (a.type == "stopAudio") Mugeda.stopAudio &&
            Mugeda.stopAudio(a.param);
        else if (a.type == "stopAllAudio") Mugeda.stopAudioAll && Mugeda.stopAudioAll();
        else if (a.type == "submitForm") {
            var k = a.param,
                d = a.mugeda,
                g = k.submit_object,
                i = k.submit_target || 0;
            window._mrmcp = window._mrmcp || {};
            var k = i == 0 ? _mrmcp.saveFormUrl || "http://weika.mugeda.com/server/cards.php/saveform" : k.submit_url,
                h = "",
                i = 0;
            if (window._mrmcp && window._mrmcp.creative_id) h = window._mrmcp.creative_id, window._mrmcp.previewMode && (i = 3);
            else if (Mugeda && Mugeda.data && Mugeda.data.crid) h = Mugeda.data.crid,
                i = 3;
            if (h == "" && /\/edit\/(\w+)\&?/.test(top.location.href)) h = RegExp.$1, i = h.length < 16 ? 1 : 2;
            else if (h == "" && /id=(\w+)\&?/.test(window.location.search)) i = 3, h = RegExp.$1;
            if (h && g) {
                for (var g = g.split(","), h = "crid=" + h + "&mode=" + i, i = {}, r = 0, t = 0; t < g.length; t++) {
                    var j = g[t] || "",
                        m = j.split("_"),
                        p;
                    if (m && m.length > 1) { var q = d.scene.getObjectByName(m[0]);
                        q && (p = q.scene.getObjectByName(m[1])) } else p = d.scene.getObjectByName(j);
                    if (p)
                        if (p.data.type === 2041) {
                            if (b = p.data.param.name)
                                if (m = p.data.param.required, j = p.dom.querySelector("input:checked"),
                                    m === 1 && !j) { Mugeda.messageBox("\u8bf7\u9009\u62e9\u3010" + b + "\u3011\uff0c\u8be5\u9879\u4e0d\u80fd\u4e3a\u7a7a\u3002"); return } else i[b] = j ? j.value : "", r++
                        } else if (p.data.type === 2038) {
                        if (b = p.data.param.name)
                            if (m = p.data.param.required, j = document.querySelectorAll("input[name=" + b + "]:checked"), m === 1 && !j.length) { Mugeda.messageBox("\u8bf7\u9009\u62e9\u3010" + b + "\u3011\uff0c\u8be5\u9879\u4e0d\u80fd\u4e3a\u7a7a\u3002"); return } else {
                                for (var m = [], q = 0, l = j.length; q < l; q++) m.push(j[q].value);
                                i[b] = m.length ? m.join(",") :
                                    "";
                                r++
                            }
                    } else if (p.data.type === 2039)
                        if (m = p.data.param.required, q = unescape(p.data.param.textContent), l = p.dom.querySelector("option:checked"), m === 1 && l && l.innerText === q) { Mugeda.messageBox("\u8bf7\u9009\u62e9\u3010" + q + "\u3011\uff0c\u8be5\u9879\u4e0d\u80fd\u4e3a\u7a7a\u3002"); return } else h += l ? "&" + j + "=" + (l.value !== q ? l.value : "") : "&" + j + "=", r++;
                    else {
                        q = p ? p.text || "" : "";
                        q.indexOf("#") && (q = q.replace(/\#/g, ""));
                        var l = p.data.param.inputType,
                            z = {
                                tel: "^\\d+$",
                                email: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                                date: "",
                                time: "",
                                number: "^\\d+$"
                            },
                            m = p.data.param.required;
                        if (m === 1 && !q.length) { Mugeda.messageBox("\u8bf7\u9009\u62e9\u3010" + p.data.param.name + "\u3011\uff0c\u8be5\u9879\u4e0d\u80fd\u4e3a\u7a7a\u3002"); return } else if (q.length && (m = z[l]) && !RegExp(m).test(q)) { Mugeda.messageBox("\u3010" + p.data.param.name + "\u3011\u7684\u5185\u5bb9\uff08" + q + "\uff09\u7684\u683c\u5f0f\u4e0d\u6b63\u786e\u3002\u8bf7\u68c0\u67e5\u540e\u91cd\u8bd5\u3002"); return } j && (j = j.replace(/#/g, "_"), h += "&" + j + "=" + q, r++)
                    }
                }
                if (r == 0) return;
                k += "?" +
                    h;
                if (Object.keys(i).length > 0)
                    for (b in i) b.indexOf("#") ? (d = i[b], b = b.replace(/#/g, "_"), k += "&" + b + "=" + d) : k += "&" + b + "=" + i[b];
                if (a.extraData)
                    for (var y in a.extraData) k += "&" + y + "=" + a.extraData[y];
                MugedaTools.message.show("\u6b63\u5728\u63d0\u4ea4");
                ajaxHelper({ url: k, type: "jsonp", jsonp_callback: "form_callback", success: function(a) { MugedaTools.message.close();
                        e && e(a) }, error: function(a) { MugedaTools.message.close();
                        e && e({ status: a.status }) } })
            }
        }
        b = "actoin_type=" + a.type + "&refid=" + (new Date).getTime();
        for (item in a.param) b +=
            "&" + item + "=" + a.param[item];
        f && c && a.param.event_name && MugedaTracker.fireEvent({ category: "interaction", action: a.param.event_name, label: b, value: 0 })
    },
    processCloseButton: function(a, d) {
        _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp;
        var c = d,
            e = null;
        if (!c) try { window != window.parent ? (c = window.parent.document, e = window.frameElement) : c = document } catch (f) { c = document }
        if (c) {
            var b = null;
            try { b = window.parent.document, b.getElementById("mugeda_expanded") || b.createElement("div") } catch (g) { return }
            var k = a || _mrmcp.display_mode,
                i = MugedaMraid.mraidReadyStatus == 1 ? mraid.getPlacementType() : "default",
                h = c.getElementById("mugeda_close_button");
            if (!h) h = c.createElement("img"), h.id = "mugeda_close_button", h.style.cursor = "pointer", h.style.zIndex = 99999, h.style.display = "block", h.style.position = "fixed", h.style.right = "0", h.style.top = "0", h.addEventListener("click", function() { if (MugedaMraid.mraidReadyStatus != 1) { c.body.removeChild(h);
                        k == "interstitial" && e && e.parentNode.removeChild(e); var a = c.getElementById("mugeda_expanded");
                        a && c.body.removeChild(a) } }),
                c.body.appendChild(h);
            if (i == "interstitial" || k == "auto" || k == "resize" || k == "expand" || k == "interstitial") h.src = (_mrmcp.creative_path || "") + "close_button.png", h.onerror = function() { h.style.display = "none" }, h.onload = function() { h.style.display = i == "interstitial" || k != "auto" ? "block" : "none" }
        }
    },
    setupMobileActionCallback: function(a) { MugedaBehavior.actionCallback = a },
    setupMobileActions: function(a, d, c) {
        function e(a) {
            var b = navigator.userAgent.toLowerCase().indexOf("android") > -1,
                c = b ? 15 : 20,
                e = b ? 5 : 10,
                r = function(a, g, j, m) {
                    if (Math.sqrt(a *
                            a + g * g + j * j) >= (m ? c : e)) {
                        a = (new Date).getTime();
                        g = a - (MugedaBehavior.lastHitTime || 0);
                        if (!MugedaBehavior.lastHitTime || g > 200) MugedaBehavior.shakeNum++, MugedaBehavior.lastHitTime = a;
                        else if (g > 1E3) MugedaBehavior.shakeNum = 0;
                        if (MugedaBehavior.shakeNum >= (b ? 1 : 2)) {
                            for (var r in MugedaBehavior.shakeHash) {
                                a = MugedaBehavior.shakeHash[r];
                                for (g = 0; g < a.length; g++) info = a[g], j = info.object, j = j.displayObject ? j.displayObject.realVisible : true, info.callback && j && (MugedaBehavior.processAction(info.behavior, info.behavior.event, true),
                                    info.callback())
                            }
                            MugedaBehavior.actionCallback && MugedaBehavior.actionCallback(f, d.event);
                            MugedaBehavior.shakeNum = 0
                        }
                    }
                },
                t = 0,
                j = 0,
                m = 0;
            if (a.acceleration === null || a.acceleration.x === void 0 || a.acceleration.y === void 0 || a.acceleration.z === void 0 || a.acceleration.x === null || a.acceleration.y === null || a.acceleration.z === null) { if (a.accelerationIncludingGravity) t = a.accelerationIncludingGravity.x, j = a.accelerationIncludingGravity.y, m = a.accelerationIncludingGravity.z, r(t, j, m, 1) } else t = a.acceleration.x, j = a.acceleration.y,
                m = a.acceleration.z, r(t, j, m, 0)
        }
        var f = a.dataRef || a.aniData;
        isMobile();
        isMobile();
        isMobile();
        if (d.event == "shake" && window.DeviceMotionEvent) { if (!window.mugedaShakeHooked) MugedaBehavior.shakeNum = 0, window.addEventListener("devicemotion", e, false), window.mugedaShakeHooked = true; var b = a.aniData ? a.aniData.guid : null;
            b && (MugedaBehavior.shakeHash[b] || (MugedaBehavior.shakeHash[b] = []), MugedaBehavior.shakeHash[b].push({ object: a, callback: c, behavior: d })) }
    }
};
MugedaTracker = {
    fireEvent: function(a) {
        if (!window.location || !window.location.host) { var a = (_mrmcp.track_bot || "http://cdn.mugeda.com/media/pages/track/track_20131030.html") + "?" + (_mrmma_var1 || "var1=none") + "&" + (_mrmma_var2 || "var2=none") + "&category=" + a.category + "&action=" + a.action + "&label=" + encodeURIComponent(a.label) + "&value=" + a.value + "&noninteraction=" + a.noninteraction,
                d = document.createElement("iframe");
            d.id = _mrmcp.creative_id;
            d.src = a;
            d.style.display = "none";
            d.style.width = "1px";
            d.style.height = "1px";
            document.body.appendChild(d) } else if (this.fireGAEvent(a.category,
                a.action, a.label, a.value, a.noninteraction), this.fireMUEvent(a.category, a.action, a.label, a.value), window.mugedaGetCustomTracker && (d = window.mugedaGetCustomTracker())) { _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp; var c = _mrmcp.custom_params,
                e = _mrmma_tags;
            c && c.indexOf("%CUSTOMPARAM%") < 0 && (e += "&" + c);
            d(e, a.category, a.action, a.label, a.value) }
    },
    fireGAEvent: function(a, d, c, e, f) {
        typeof _gaq != "undefined" && (_gaq.push(["_trackEvent", a, d, c, e, f]), typeof _ga_mugeda_use_custom != "undefined" && _gaq.push(["custom._trackEvent",
            a, d, c, e, f
        ]))
    },
    fireMUEvent: function(a, d, c, e) { typeof _mugeda_tracker != "undefined" && _mugeda_tracker.trackEvent({ action: d, category: a, label: c, value: e }) }
};

function mraidReady() { parseFloat(mraid.getVersion()) - 0.999 > 0 ? (MugedaMraid.mraidReadyStatus = 1, _mrmcp = typeof _mrmcp == "undefined" ? {} : _mrmcp, _mrmcp.display_mode && (mraid.useCustomClose(true), MugedaBehavior.processCloseButton()), mraid.addEventListener("error", function() {}), mraid.addEventListener("stateChange", function() { var a = mraid.getState();
        MugedaMraid.setMraidState(a) }), mraid.addEventListener("sizeChange", function() {})) : console.log("mraidReady is called, but with no correct version (>= 1.0) supported.") }
var mraidReadyTimeout, mraidTimeOut = 100,
    mraidCounter = 0;

function readyListener() { typeof mraid === "undefined" ? (mraidCounter++, mraidCounter < mraidTimeOut && (mraidReadyTimeout = setTimeout(readyListener, 100))) : mraid.getState() === "loading" ? mraid.addEventListener("ready", mraidReady) : mraidReady() } readyListener();
try { var htmlDoc = document.getElementsByTagName("head").item(0),
        js = document.createElement("script"),
        s = "mraid.js";
    js.setAttribute("type", "text/javascript");
    js.setAttribute("src", s);
    htmlDoc.appendChild(js);
    js.onload = function() {};
    js.onerror = function() {} } catch (e$$25) { alert(e$$25.toString()) }

function genSessionId(a) { for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), c = Number(+new Date).toString(36), e = 0, f = "", b = d.length; e < a; e++) f += d[Math.floor(Math.random() * b)]; return c + f.toLowerCase() }
Mugeda.playEmbeddedVideo = function(a) {
    a = a.target.parentElement;
    a.style.display = "none";
    for (var d = 0; d < a.parentElement.children.length; d++) a.parentElement.children[d].setAttribute("contenteditable", "false");
    var c = a.previousSibling;
    c.play();
    c.onclick = function() { c.controls = c.paused ? false : true;
        c.paused ? c.play() : c.pause() };
    if (navigator.userAgent.match(/mqqbrowser.*tbs/i)) {
        for (var e = null;;)
            if (a = a.parentElement, a.className.indexOf("mugeda_richText_content") >= 0) { e = a.parentElement; break } else if (a == document.body) break;
        var a = e.scrollTop,
            f = document.createElement("div");
        f.className = "qbrowser_workaround";
        f.style.position = "absolute";
        f.style.width = "1px";
        f.style.height = "1px";
        f.style.left = 0;
        f.style.top = a + "px";
        e.appendChild(f);
        if (e) e.onscroll = function() { f.style.top = e.scrollTop + "px" }
    }
};
Mugeda.Analytics = function(a, d) {
    var c = [],
        e = 0;
    window._mrmcp = window._mrmcp || {};
    var f = _mrmcp.impression_pixel ? _mrmcp.impression_pixel.indexOf("%TRACKURL%") >= 0 ? "" : _mrmcp.impression_pixel : "",
        a = a || f || "http://cn-stat.mugeda.com/stats/c.gif",
        d = d || _mrmcp.eventUrl || a;
    this.setAccount = function() {};
    this.setCustomVar = function(a, b, d) { a = a || 0;
        c[a] && delete c[a];
        c[a] = {};
        c[a][b] = d || "" };
    var b = function(a) {
            if (document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), c_start != -1)) {
                c_start = c_start + a.length + 1;
                c_end =
                    document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end))
            }
            return ""
        },
        g = function() { b("clientId"); for (var a = [], d = 0; d < c.length; d++)
                for (var e in c[d]) a[d] = e + "=" + encodeURIComponent(c[d][e]); return a.join("&") },
        k = function() { var a = location.pathname,
                b = /(?:\/animation\/edit)|(?:\/page\/edit)|(?:\/default\/preview\.html)|(?:\/client\/preview(?:_css3)?\.html)/; return !location.host || b.test(a) ? false : true };
    this.trackPageview = function(c) {
        if (k()) {
            this.startTime =
                (new Date).getTime();
            var d = a,
                f = new Image,
                t = d.indexOf("?") != -1 ? "&" : "?",
                j = _mrmcp.title || window._mrmma_title,
                m = +new Date,
                p = window.location.host,
                q = (_mrmcp.width || window._mrmma_width) + "x" + (_mrmcp.height || window._mrmma_height),
                l = window.location.href.slice(window.location.href.indexOf("/", 8)),
                z = screen.width + "x" + screen.height,
                c = c || {};
            c.msv = "0.1.0";
            c.msa = "MU-A001";
            c.msh = p;
            c.mscs = q;
            c.msp = l;
            c.mssr = z;
            c.mssi = genSessionId(16);
            c.mscn = j;
            c.msct = m;
            c.crid = _mrmcp.creative_id || "";
            for (var y in c) c.hasOwnProperty(y) && (this.setCustomVar(e,
                y, c[y]), e++);
            c = b("msuid");
            if (!c) j = c = genSessionId(32), m = new Date, p = window.location.host.split("."), q = p.length, l = "", l = q >= 2 ? "." + p[q - 2] + "." + p[q - 1] : ".mugeda.com", m.setDate(m.getDate() + 3650), document.cookie = "msuid=" + escape(j) + (3650 == null ? "" : ";expires=" + m.toGMTString()) + "; domain=" + l + "; path=/";
            this.setCustomVar(e++, "msuid", c);
            c = g();
            f.src = d + t + ("mst=1&" + c)
        }
    };
    this.trackEvent = function(a) {
        if (k()) {
            var b = new Image,
                c = d,
                e = c.indexOf("?") != -1 ? "&" : "?",
                f = g(),
                a = a || {},
                m = (new Date).getTime(),
                p = m - this.startTime,
                q = encodeURIComponent(a.action ||
                    "submit"),
                l = encodeURIComponent(a.categroy || "weika"),
                z = encodeURIComponent(a.label || ""),
                a = parseInt(a.value) || 0;
            b.src = c + e + f + "&mst=2&msts=" + m + "&msetd=" + p + "&msen=" + q + "&msev=" + a + "&msec=" + l + "&msel=" + z
        }
    }
};
try { window._mugeda_tracker = new Mugeda.Analytics, _mugeda_tracker.trackPageview() } catch (e$$26) {}

function createFontFaceStyle(a, d, c, e, f, b, g) {
    if (!d) return f && f(a, null), a;
    var g = g || {},
        k = "cloudfont-" + d;
    c && (k += "-" + c);
    var i = document.getElementById(k),
        b = Object.prototype.toString.call(e) === "[object Array]" && typeof f === "function",
        h = function(a) { return (a = RegExp("[?&]" + a + "=([^&#]*)").exec(window.location.href)) ? a[1] : 0 };
    a.toLowerCase() == "simhei" ? a = '"Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimHei, sans-serif' : c && (a += "-" + c);
    if (i)
        if (b && g.useBlob && i.data) return f(a, i.data), a;
        else if (!g.useBlob) return b &&
        (d = i.textContent.match(/src:url\((.*?)\)/), f(a, d ? d[1] : null)), a;
    for (var g = (g = h("fontApiType")) ? g : 3, i = e || ["eot", "eot", "woff", "ttf", "svg"], r = d.indexOf("?") > -1 ? "&" : "?", h = window.bd_version || h("v") || 0, t = [], j = e && e.length, m = e = 0, p = function(a, b) {
                var d = document.querySelector(".cloudfont_" + c);
                d && document.head.removeChild(d);
                var e = document.createElement("style"),
                    f, g = function(a) { e.id = k;
                        e.className = "cloudfont_" + c;
                        a = document.createTextNode(a);
                        e.type = "text/css";
                        e.data = b;
                        e.appendChild(a);
                        document.head.appendChild(e) };
                if (b && b.type != "text/html") { var h, i = new window.FileReader;
                    i.readAsDataURL(b);
                    i.onloadend = function() { h = i.result;
                        f = "@font-face {font-family:'" + a + "';\nsrc:url(" + h + ");}";
                        g(f) } } else a.indexOf("cloud-") != 0 && (f = "@font-face {font-family:'" + a + "';}", g(f))
            }, q = function(b) { ajaxHelper({ url: b, cache_ok: true, type: "data", success: function(b) {++m === j && typeof f === "function" && (p(a, b), f(a, b)) }, error: function(a) { a.status == 414 && Mugeda.messageBox(Lang.M_TextTooLong); if (--j === 0) throw f(false), "request font failed"; } }) }, l = 0,
            z = i.length; l < z; l++) { var y = d + r + "format=" + i[l] + "&api_type=" + g + "&v=" + h,
            B = "url(" + y + ")"; if (l > 0) { var n = i[l];
            i[l] === "eot" ? n = "embedded-opentype" : i[l] === "ttf" && (n = "truetype");
            B += " format('" + n + "')" } t.push(B);
        b && (e++, q(y)) }
    if (b && e === 0) throw "request type invalid";
    return b ? null : a
}
Mugeda.messageBox = function(a, d, c, e) {
    var e = e || {},
        f = document.createElement("div");
    f.id = "message_holder_" + (new Date).getTime();
    f.style.display = "block";
    f.style.position = "absolute";
    f.style.left = 0;
    f.style.top = 0;
    f.style.width = "100%";
    f.style.height = "100%";
    f.style.zIndex = 2E5;
    var b = document.createElement("div");
    b.className = "messageMask";
    b.style.display = "block";
    b.style.position = "absolute";
    b.style.left = 0;
    b.style.top = 0;
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.backgroundColor = "rgba(0,0,0,0.5)";
    f.appendChild(b);
    var d = d || "alert",
        g = document.createElement("div");
    g.className = "messageInfo";
    g.style.display = "block";
    g.style.position = "absolute";
    g.innerHTML = '<div class="messageBody">' + a + '</div><div align="center" class="messageConfirm ' + d + '" onclick="onConfirmMessage();">' + (e.okText || "\u786e\u8ba4") + '</div><div align="center" class="messageCancel ' + d + '" onclick="onCancelMessage();">' + (e.cancelText || "\u53d6\u6d88") + "</div>";
    f.appendChild(g);
    document.body.appendChild(f);
    f.querySelector(".messageConfirm").onclick = function() {
        document.body.removeChild(f);
        c && c(true)
    };
    f.querySelector(".messageCancel").onclick = function() { document.body.removeChild(f);
        c && c(false) };
    f.querySelector(".messageMask").onclick = function() { g.className = "messageInfo blinking";
        setTimeout(function() { g.className = "messageInfo" }, 800) };
    a = document.getElementById("mugeda_message_styles");
    if (!a) a = document.createElement("style"), a.type = "text/css", a.id = "mugeda_message_styles", a.innerHTML = ".messageBody { padding:32px; background-color: #fff; border-top-left-radius: 4px; border-top-right-radius: 4px; }.messageInfo { max-width: 512px; min-width: 256px; margin-left:50%; transform: translate(-50%, -50%); margin-top: 256px; font-size:14px; border: 4px solid rgba(0,0,0,0); border-radius:8px; line-height: 20px; }.messageConfirm, .messageCancel { width: 50%; display: inline-block; height: 48px; line-height: 48px; color: #fff; cursor: pointer; }.messageConfirm.alert { width: 100%; }.messageCancel.alert { display: none;}.messageCancel:active, .messageConfirm:active {-webkit-filter: brightness(115%);}.messageConfirm { background-color: #F36523; border-bottom-left-radius: 4px;}.messageInfo.blinking{ -webkit-animation: blinking 200ms infinite step-end; animation: blinking 200ms infinite step-end; }@-webkit-keyframes blinking {0% {border-color: rgba(255,0,0,0);} 50% {border-color: rgba(255,0,0,0.6);}}@keyframes blinking {0% { border-color: rgba(255,0,0,0);} 50% { border-color: rgba(255,0,0,0.6);}}.messageCancel { background-color: #999; border-bottom-right-radius: 4px;}",
        document.body.appendChild(a)
};
Mugeda.InstantMessage = function() {
    var a;
    return {
        show: function(d) {
            var c = document.createElement("div"),
                e = c.appendChild(document.createElement("div")),
                f = e.appendChild(document.createElement("div")),
                b = e.appendChild(document.createElement("div"));
            c.style.cssText = "position:fixed;left:0;right:0;top:0;bottom:0;text-align:center;line-height:" + (document.body.clientHeight || document.documentElement.clientHeight) + "px";
            e.style.cssText = 'padding-top:10px; line-height:30px;display:inline-block;padding:8px; min-width: 80px; background-color:rgba(0,0,0,0.6);border-radius:4px;"';
            e.align =
                "center";
            f.style.cssText = "width: 24px; height: 24px; display: block; border-radius: 50%; border-left: 2px solid #F36523; border-top: 2px solid #F36523; border-right: 2px solid white; border-bottom: 2px solid white; margin: 16px;";
            b.style.cssText = 'text-align:center;color:#fff;font:normal 12px "microsoft yahei";';
            b.innerHTML = d;
            a = document.body.appendChild(c);
            d = StyleSheetManager.insertKeyframes("from {" + Browser.prefix.css + "transform:rotate( 0deg ) }to {" + Browser.prefix.css + "transform:rotate( 360deg ) }");
            f.style.cssText += Browser.prefix.css + "animation:" + d + " 1200ms linear infinite;"
        },
        close: function() { a && (a.parentNode.removeChild(a), a = null) }
    }
}();