;
(function() {
    'use strict';
    var aa = window.Mugine = window.Mugine || {},
        t = {},
        ca = t.H = function(a, b) { null == b && (b = {});
            a = a.split("."); var c = aa,
                d = a.length;
            a.forEach(function(a, f) { null == c[a] && (c[a] = d - 1 === f ? b : {});
                c = c[a] }); return b },
        ea = t.ra = function(a, b) { var c = b.length,
                d, e, f; for (f = 0; f < c; f += 2) d = b[f], e = b[f + 1], a[d] = e },
        fa = {}.hasOwnProperty;
    t.extend = function(a, b) {
        function c() { this.constructor = a } for (var d in b) fa.call(b, d) && (a[d] = b[d]);
        c.prototype = b.prototype;
        a.prototype = new c;
        a.__super__ = a.f = b.prototype; return a };

    function ga() { throw new ReferenceError; } t.ob = function(a, b) { var c = b.length,
            d = {},
            e, f, g; for (g = 0; g < c; g += 2) e = b[g], f = b[g + 1], d[e] = { get: f, set: ga, configurable: !0 };
        Object.defineProperties(a, d) };
    t.oc = function(a, b) { var c = b.length,
            d = {},
            e, f, g, h; for (h = 0; h < c; h += 3) e = b[h], f = b[h + 1], g = b[h + 2], d[e] = { get: f, set: g, configurable: !0 };
        Object.defineProperties(a, d) };
    t.Pz = function(a) { var b; return function() { var c = this,
                d = arguments;
            clearTimeout(b);
            b = setTimeout(function() { b = null;
                a.apply(c, d) }, 50) } };
    t.mj = function() { var a = document.documentElement,
            b = a && 0 === a.clientHeight; if ("number" == typeof document.clientWidth) return { width: document.clientWidth, height: document.clientHeight }; var c; if (c = window.top === window) { if (!b) { b = document;
                c = b.createElement("div");
                c.style.height = "2500px";
                b.body.insertBefore(c, b.body.firstChild); var d = 2400 < b.documentElement.clientHeight;
                b.body.removeChild(c);
                b = d } c = b } c && (a = document.body); return { width: a.clientWidth, height: a.clientHeight } };
    var ha = {};
    t.br = function(a, b, c) { if (ha[a]) ha[a].push(c);
        else { ha[a] = [c]; var d = function(b, c) { ha[a].forEach(function(a) { a(b, c) }) },
                e = document.createElement("script");
            e.src = a;
            window[b] = function(a) { d(null, a);
                f() };
            e.onload = function() { e.parentNode && (d(!0), f()) };
            e.onerror = function() { d(!0);
                f() }; var f = function() { e.parentNode.removeChild(e);
                delete ha[a] };
            document.body.appendChild(e) } };
    window.MugineRequire = t.$A = function(a) { var b = aa;
        a.split("/").forEach(function(c) { b = b[c]; if (!b) return console.error("module not found: " + a) }); return b };
    ca("Utils.Module", t);
    ea(t, ["require", t.$A, "namespace", t.H, "extend", t.extend, "definePropertyReadOnly", t.ob, "definePropertyGetSet", t.oc]);

    function u() {} u.Yd = "appear";
    u.Xa = "click";
    u.Et = "mouseover";
    u.Dt = "mouseout";
    u.lt = "change";
    u.du = "other";
    u.wt = "drag";
    u.ye = "dragend";
    u.za = "drop";
    u.ze = "dragout";
    u.ru = "preset_end";
    u.yt = "liked";
    u.gp = "unliked";
    u.ip = "video_start";
    u.hp = "video_end";
    u.jp = "wiper_finish";
    u.et = "canvas_save_finish";
    u.xl = "connector_connected";
    u.pt = "connector_disconnected";
    u.Zo = "touch_start";
    u.Xo = "touch_end";
    u.Iu = "slide_right";
    u.No = "slide_right_up";
    u.Ro = "slide_up";
    u.Gu = "slide_left_up";
    u.Bu = "slide_left";
    u.Du = "slide_left_down";
    u.xu = "slide_down";
    u.Ju = "slide_right_down";
    u.at = "audio_start";
    u.Xs = "audio_pause";
    u.ul = "audio_stop";

    function ia(a) { this.ed = a;
        this.Ke = this.Xg = this.jr = this.da = this.c = this.W = null;
        this.$ = {} }
    var ja = ia.prototype;
    ja.Ia = function() {
        function a(a) { var c = b.da;
            c && (a = c.c.V.uk(a)); return a }
        var b = this,
            c = b.W.logic || {},
            d = !1;
        if (1 == c.check) { var e = c.property,
                f = c.condition,
                c = c.reference,
                c = a(c),
                g = b.jr;
            g && (d = g[e], "rotate" == e ? d = 180 * d / Math.PI : "alpha" == e && (d = 100 * d), d = "gt" == f && parseFloat(d) > parseFloat(c) || "ge" == f && parseFloat(d) >= parseFloat(c) || "lt" == f && parseFloat(d) < parseFloat(c) || "le" == f && parseFloat(d) < parseFloat(c) || "eq" == f && d == c || "ne" == f && d != c) } else if (2 == c.check) { e = c.expression; try { e = a(e), d = !!(new Function("return " + e + ";"))() } catch (h) {} } else d = !0;
        return d
    };
    ja.Uy = function(a) { a = a || {}; for (var b in a) this.$[b] = a[b] };
    ja.D = function() { if (this.Ia()) { var a = window.MugedaBehavior; if (this.ed === u.Xa) var b = "click";
            else this.ed === u.Yd && (b = "appear"); if (a) { if (!this.W.object) { var c = this.c;
                    this.W.object = c.La().V.ia.Eb[c.l] } a.processAction(this.W, b, !0, this.Xg) } } };
    t.H("Action.Action", ia);

    function la(a, b) { la.f.constructor.apply(this, arguments);
        this.J = b } t.extend(la, ia);
    la.prototype.D = function() { if (this.Ia()) { var a = this.J,
                b = this.c;
            a.Mc[b.l] && (this.W.restart = a.Mc[b.l].Kc == a.Ea);
            la.f.D.apply(this, arguments) } };
    var ma = la;

    function pa(a, b) { pa.f.constructor.apply(this, arguments);
        this.J = b;
        this.nq = null } t.extend(pa, ia);
    pa.prototype.D = function() { if (this.Ia()) { var a = this.nq; if (a && a.Tc && a.Tc.pa) { var a = a.Tc.pa,
                    b = this.W.param; "play" == b.control_mode ? a.play() : "pause" == b.control_mode ? 0 < a.readyState && a.pause() : "stop" == b.control_mode && 0 < a.readyState && (a.pause(), a.currentTime = 0); var c = parseFloat(b.control_volume);
                isNaN(c) || (a.volume = .01 * c);
                b = parseFloat(b.control_position);
                isNaN(b) || (a.currentTime = b) } pa.f.D.apply(this, arguments) } };
    var qa = pa;

    function ra(a, b) { ra.f.constructor.apply(this, arguments);
        this.J = b } t.extend(ra, ia);
    ra.prototype.D = function() { if (this.Ia()) { var a = this.J,
                b = this.c;
            a.Mc[b.l] && (this.W.unit = { frameStart: a.Mc[b.l].Kc });
            ra.f.D.apply(this, arguments) } };

    function sa(a, b) { sa.f.constructor.apply(this, arguments);
        this.Pk = a;
        this.ug = b } t.extend(sa, ia);
    sa.prototype.D = function() { var a = this.ug.phone_number,
            b = this.da.c.V; if (a) { var c;
            null != (c = /\{\{(.*)\}\}/.exec(a)) ? (a = b.sa(c[1], !0)) && (a = a.xb()) && window.open("tel:" + a, "_self") : window.open("tel:" + a, "_self") } };
    var ta = sa;

    function ua(a, b) { ua.f.constructor.apply(this, arguments);
        this.J = b;
        this.Dj = {} } t.extend(ua, ia);
    ua.prototype.D = function() { if (this.Ia()) { var a = (this.W.param || {}).canvas_control,
                b = this.Dj.hf;
            b && ("clear" == a ? b.clear() : "save" == a && b.save());
            ua.f.D.apply(this, arguments) } };
    var va = ua;

    function xa(a, b) { xa.f.constructor.apply(this, arguments);
        this.Pk = a;
        this.ug = b } t.extend(xa, ia);
    xa.prototype.D = function() { var a = this.ug,
            b = a.pen_color,
            c = a.pen_width;
        this.da.c.V.sa(a.canvas_name, !0);
        a = this.Dj;
        console.log(b);
        b && -1 == b.indexOf(" 0)") && a.hf.iu(b);
        c && a.hf.ku(c) };
    var ya = xa;

    function Da(a, b) { Da.f.constructor.apply(this, arguments);
        this.J = b;
        this.$r = this.me = null } t.extend(Da, ia);
    Da.prototype.D = function() {
        var a = this;
        if (a.Ia()) {
            var b = a.me,
                c = a.$r;
            if (b && c) {
                var d = c.c,
                    e = c.src;
                e || 2034 != d.A.type || ((d = c.dom.querySelector("canvas")) ? e = d.toDataURL("image/png") : c.addEventListener("rendered", function() { a.D() }));
                e && (b._defaultSrc || b.src ? !b._defaultSrc && b.src && (b._defaultSrc = b.src) : b._defaultSrc = "no", void 0 === b._defaultSrc && e == b.src && (b.src = e + "?random=" + Math.random()), b.src = e, parseInt(((a.W || {}).param || {}).keep_value || 0) && MugedaTools.addCustomMugedaParameters(encodeURIComponent("m_" + b.data.guid),
                    encodeURIComponent(e)))
            }
            Da.f.D.apply(a, arguments)
        }
    };
    var Ea = Da;

    function Fa(a, b, c) { Fa.f.constructor.apply(this, arguments);
        c = c || {};
        this.J = b;
        this.me = null;
        this.I = c.I || Fa.j.Image;
        this.Wi = c.Wi || Fa.B.Vo;
        this.oh = void 0 === c.oh ? 1 : parseInt(c.oh) } t.extend(Fa, ia);
    Fa.j = { Image: "image", Text: "text" };
    Fa.B = { Vo: "choose", iC: "value" };
    Fa.prototype.D = function() {
        var a = this;
        if (a.Ia()) {
            var b = (a.W.param || {}).target_name,
                b = b && "undefined" != b ? b : null,
                c = a.me;
            c instanceof Array || (c = [c]);
            var d = 1 < c.length,
                e = c[0].width,
                f = c[0].height,
                g = c[0].c.R,
                h = a.Wi == Fa.B.Vo && e && f ? function(a) { Ga(a, { width: e, height: f, Wt: g, mB: g }) } : a.Wi;
            h && h(function(e) {
                if (null != e)
                    for (var f in c) {
                        var g = c[f],
                            h = g.c;
                        if (a.I == Fa.j.Image) {
                            g.src = e;
                            if (g.src) g.src = e;
                            else {
                                var p = h.A.param;
                                ((h.A.curve || {}).points || []).length && ((p.fillInfo || {}).fillImage = e, p = new Image, p.src = e, p.Rb = h, p.onload =
                                    function() { this.Rb.sC = this;
                                        this.Rb.F(this.Rb.ea) })
                            }(p = a.$.yg) && p.D.apply(p)
                        } else a.I == Fa.j.Text && (g.text = e);
                        if (d) var q = h.R;
                        else b ? q = b : "_main" == g.$a.l ? q = h.R : q = g.$a.l + "_" + h.R;
                        a.oh && MugedaTools.addCustomMugedaParameters(encodeURIComponent("m_" + q), encodeURIComponent(e))
                    }
            });
            Fa.f.D.apply(a, arguments)
        }
    };

    function Ga(a, b) {
        MugedaTools.chooseImage({
            wx: window.wx,
            destWidth: b.width,
            refId: b.Wt,
            destHeight: b.height,
            success: function(c) { c = c.url;
                a(c); var d = Mugeda.getContentId();
                c = "http://weika.mugeda.com/server/cards.php/userdata" + ("?_tp=image&_id=" + b.mB + "&_ts=" + (new Date).getTime() + "&crid=" + d.crid + "&mode=" + d.mode + "&refid=" + b.Wt + "&response_type=jsonp&_url=" + encodeURIComponent(c));
                ajaxHelper({ url: c, type: "jsonp", wA: "form_callback", Wd: function() {}, error: function() {} }) },
            error: function(a) {
                alert("\u5728\u83b7\u53d6\u56fe\u7247\u65f6\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002\n\n\u9519\u8bef\u4fe1\u606f\uff1a" +
                    a.desc)
            }
        })
    }
    var Ha = Fa;

    function Ia(a, b) { Ia.f.constructor.apply(this, arguments);
        this.Pk = a;
        this.ug = b } t.extend(Ia, ia);
    Ia.prototype.D = function() {
        var a = this,
            b = a.ug,
            c = b.counter_target,
            d = a.da.c.V.sa(b.counter_display, !0);
        "getCounter" == a.Pk ? (b = "http://weika.mugeda.com/server/huodong.php/dataservice/counter/get", a.Ia() && ajaxHelper({ url: b + "?response_type=jsonp&serviceId=" + c, type: "jsonp", success: function(a) { 0 === a.status ? d && d.wa(a.total) : Mugeda.messageBox("\u670d\u52a1\u5668\u9519\u8bef,\u9519\u8bef\u7801:" + a.status) } })) : "setCounter" == a.Pk && (b = "http://weika.mugeda.com/server/huodong.php/dataservice/counter/get", this.Ia() &&
            ajaxHelper({ url: "http://weika.mugeda.com/server/huodong.php/dataservice/counter/update?response_type=jsonp&serviceId=" + c, type: "jsonp", success: function(a) { 0 === a.status ? d && d.wa(a.total) : Mugeda.messageBox("\u670d\u52a1\u5668\u9519\u8bef,\u9519\u8bef\u7801:" + a.status) } }))
    };
    var Ja = Ia;
    var La = [];

    function z(a, b, c) { var d = this;
        La.length || (d.Gs = !1, d.zf = 0, d.I = a, d.xv = !0 === b, d.zv = !0 === c, d.Kv = null, d.Rf = null, d.mg = null, t.ob(d, ["type", function() { return d.I }, "bubbles", function() { return d.xv }, "cancelable", function() { return d.zv }, "currentTarget", function() { return d.Kv }, "eventPhase", function() { return d.Rf }, "target", function() { return d.mg }])) }
    var Ma = z.prototype;
    Ma.clone = function() {};
    Ma.j = function() {};
    Ma.B = function() { return this.Gs };
    Ma.wh = function() { this.cancelable && (this.Gs = !0) };
    Ma.stopImmediatePropagation = function() { this.zf = 2 };
    Ma.stopPropagation = function() { 0 === this.zf && (this.zf = 1) };
    Ma.toString = function() {};
    t.H("Events.Event", z);
    t.ra(Ma, ["clone", Ma.clone, "formatToString", Ma.j, "isDefaultPrevented", Ma.B, "preventDefault", Ma.wh, "stopImmediatePropagation", Ma.stopImmediatePropagation, "stopPropagation", Ma.stopPropagation, "toString", Ma.toString]);

    function A(a, b) { this.o = a || 0;
        this.i = b || 0;
        t.oc(this, ["x", this.wd, this.ig, "y", this.xd, this.jg]);
        t.ob(this, ["length", this.zm]) }
    var Oa = A.prototype;
    Oa.wd = function() { return this.o };
    Oa.ig = function(a) { this.o = a };
    Oa.xd = function() { return this.i };
    Oa.jg = function(a) { this.i = a };
    Oa.zm = function() { return Math.sqrt(this.o * this.o + this.i * this.i) };
    Oa.add = function(a) { return new A(this.o + a.o, this.i + a.i) };
    Oa.clone = function() { return new A(this.o, this.i) };
    Oa.j = function(a) { this.o = a.o;
        this.i = a.i };
    A.cd = function(a, b) { return Math.sqrt((a.o - b.o) * (a.o - b.o) + (a.i - b.i) * (a.i - b.i)) };
    Oa.B = function(a) { return this.o === a.o && this.i === a.i };
    A.Ng = function(a, b, c) { return new A(c * (a.o - b.o) + b.o, c * (a.i - b.i) + b.i) };
    Oa.ga = function(a) { a = null == a ? 1 : a;
        this.o = this.o / this.length * a;
        this.i = this.i / this.length * a };
    Oa.offset = function(a, b) { this.o += a;
        this.i += b };
    A.Pg = function(a, b) { return new A(Math.cos(b) * a, Math.sin(b) * a) };
    Oa.il = function(a, b) { this.o = a;
        this.i = b };
    Oa.za = function(a) { return new A(this.o - a.o, this.i - a.i) };
    Oa.toString = function() { return "(x=" + this.o + ", y=" + this.i + ")" };
    t.ra(Oa, ["add", Oa.add, "clone", Oa.clone, "copyFrom", Oa.j, "contains", Oa.contains, "distance", Oa.cd, "equals", Oa.B, "normalize", Oa.ga, "offset", Oa.offset, "setTo", Oa.il, "subtract", Oa.za]);
    t.ra(A, ["distance", A.cd, "interpolate", A.Ng, "polar", A.Pg]);
    t.H("Geom.Point", A);

    function B(a, b, c, d, e, f, g) { this.Z = null == a ? 1 : a;
        this.ba = b || 0;
        this.qa = c || 0;
        this.fa = null == d ? 1 : d;
        this.ja = e || 0;
        this.ma = f || 0;
        g && (this.Kb = g.mD || 0, this.$b = g.Ag || 0, this.ac = g.Bg || 0, this.kc = g.left || 0, this.mc = g.top || 0, this.jd = g.aD || 1, this.kd = g.bD || 1);
        this.Cc = this.lc = this.Yc = null }
    var C = B.prototype;
    C.wc = function() { if (null != this.jd) return this.jd; var a = this.Z,
            b = this.ba; return Math.sqrt(a * a + b * b) };
    C.xc = function() { if (null != this.kd) return this.kd; var a = this.qa,
            b = this.fa; return Math.sqrt(a * a + b * b) };
    C.Eh = function(a) { null != this.jd && (this.jd = a);
        this.Lb(1 / this.wc() * a, 1) };
    C.Fh = function(a) { null != this.kd && (this.kd = a);
        this.Lb(1, 1 / this.xc() * a) };
    C.zi = function() { return Math.atan2(this.ba, this.Z) };
    C.Bn = function(a) { this.nc(-this.zi() + a) };
    C.Za = function() { this.yc = !0;
        null == this.jb && (this.jb = 0);
        null == this.kb && (this.kb = 0);
        null == this.Ra && (this.Ra = 0);
        null == this.tb && (this.tb = 0);
        null == this.ub && (this.ub = 1);
        null == this.eb && (this.eb = 0);
        null == this.Mb && (this.Mb = 0);
        null == this.Nb && (this.Nb = 0);
        null == this.Zb && (this.Zb = 0);
        null == this.Jb && (this.Jb = 1) };
    C.L = C.nb = function(a, b, c) { this.yc ? (c = c || 0, this.ja += a * this.Jb, this.ma += b * this.Jb, this.eb += c * this.Jb, this.Z += a * this.Mb, this.qa += a * this.Nb, this.jb += a * this.Zb, this.ba += b * this.Mb, this.fa += b * this.Nb, this.kb += b * this.Zb, this.Ra += c * this.Mb, this.tb += c * this.Nb, this.ub += c * this.Zb) : (this.ja += a, this.ma += b) };
    C.Lb = function(a, b) { this.Z *= a;
        this.ba *= b;
        this.qa *= a;
        this.fa *= b;
        this.ja *= a;
        this.ma *= b };
    C.ec = function(a, b, c) { this.Z *= a;
        this.ba *= b;
        this.Ra *= c;
        this.qa *= a;
        this.fa *= b;
        this.tb *= c;
        this.jb *= a;
        this.kb *= b;
        this.ub *= c;
        this.ja *= a;
        this.ma *= b;
        this.eb *= c };
    C.nc = C.Sd = function(a) { if (0 == a) a = 0, b = 1;
        else { var b = Math.cos(a);
            a = Math.sin(a) } var c = this.Z,
            d = this.ba,
            e = this.qa,
            f = this.fa,
            g = this.ja,
            h = this.ma;
        this.Z = c * b - d * a;
        this.ba = c * a + d * b;
        this.qa = e * b - f * a;
        this.fa = e * a + f * b;
        this.ja = g * b - h * a;
        this.ma = g * a + h * b;
        this.yc && (c = this.jb, d = this.kb, this.jb = c * b - d * a, this.kb = c * a + d * b) };

    function Pa(a, b, c, d, e, f, g, h, k) { return a * e * k + d * h * c + g * b * f - g * e * c - a * h * f - d * b * k }
    C.He = function() {
        var a = this.Z,
            b = this.ba,
            c = this.qa,
            d = this.fa,
            e = this.ja,
            f = this.ma;
        if (this.yc) {
            var g = this.jb,
                h = this.kb,
                k = this.Ra,
                l = this.tb,
                m = this.ub,
                n = this.Mb,
                p = this.Nb,
                q = this.Zb,
                r = this.Jb,
                v = this.eb,
                x = Pa(d, l, p, h, m, q, f, v, r),
                w = -Pa(c, l, p, g, m, q, e, v, r),
                y = Pa(c, d, p, g, h, q, e, f, r),
                D = -Pa(b, k, n, h, m, q, f, v, r),
                H = Pa(a, k, n, g, m, q, e, v, r),
                E = -Pa(a, b, n, g, h, q, e, f, r),
                J = Pa(b, k, n, d, l, p, f, v, r),
                I = -Pa(a, k, n, c, l, p, e, v, r),
                r = Pa(a, b, n, c, d, p, e, f, r),
                S = -Pa(a, b, k, c, d, l, e, f, v),
                wa = -Pa(b, k, n, d, l, p, h, m, q),
                T = Pa(a, k, n, c, l, p, g, m, q),
                n = -Pa(a, b, n,
                    c, d, p, g, h, q),
                p = Pa(a, b, k, c, d, l, g, h, m),
                q = a * x + c * D + g * J + e * wa,
                a = new B(x / q, D / q, w / q, H / q, -Pa(c, d, l, g, h, m, e, f, v) / q, Pa(a, b, k, g, h, m, e, f, v) / q);
            a.jb = y / q;
            a.kb = E / q;
            a.Ra = J / q;
            a.tb = I / q;
            a.ub = r / q;
            a.Mb = wa / q;
            a.Nb = T / q;
            a.Zb = n / q;
            a.eb = S / q;
            a.Jb = p / q;
            return a
        }
        q = a * d - c * b;
        return new B(d / q, -b / q, -c / q, a / q, (c * f - d * e) / q, (-a * f + b * e) / q)
    };
    B.jc = function(a, b) {
        if (a.yc || b.yc) {
            a.yc || a.Za();
            b.yc || b.Za();
            var c = new B(a.Z * b.Z + a.qa * b.ba + a.jb * b.Ra + a.ja * b.Mb, a.ba * b.Z + a.fa * b.ba + a.kb * b.Ra + a.ma * b.Mb, a.Z * b.qa + a.qa * b.fa + a.jb * b.tb + a.ja * b.Nb, a.ba * b.qa + a.fa * b.fa + a.kb * b.tb + a.ma * b.Nb, a.Z * b.ja + a.qa * b.ma + a.jb * b.eb + a.ja * b.Jb, a.ba * b.ja + a.fa * b.ma + a.kb * b.eb + a.ma * b.Jb);
            c.e = a.Z * b.jb + a.qa * b.kb + a.jb * b.ub + a.ja * b.Zb;
            c.DC = a.ba * b.jb + a.fa * b.kb + a.kb * b.ub + a.ma * b.Zb;
            c.EC = a.Ra * b.Z + a.tb * b.ba + a.ub * b.Ra + a.eb * b.Mb;
            c.GC = a.Ra * b.qa + a.tb * b.fa + a.ub * b.tb + a.eb * b.Nb;
            c.yf = a.Ra * b.jb + a.tb *
                b.kb + a.ub * b.ub + a.eb * b.Zb;
            c.tz = a.Ra * b.ja + a.tb * b.ma + a.ub * b.eb + a.eb * b.Jb;
            c.$k = a.Mb * b.Z + a.Nb * b.ba + a.Zb * b.Ra + a.Jb * b.Mb;
            c.n = a.Mb * b.qa + a.Nb * b.fa + a.Zb * b.tb + a.Jb * b.Nb;
            c.VC = a.Mb * b.jb + a.Nb * b.kb + a.Zb * b.ub + a.Jb * b.Zb;
            c.p = a.Mb * b.ja + a.Nb * b.ma + a.Zb * b.eb + a.Jb * b.Jb;
            return c
        }
        return new B(a.Z * b.Z + a.qa * b.ba, a.ba * b.Z + a.fa * b.ba, a.Z * b.qa + a.qa * b.fa, a.ba * b.qa + a.fa * b.fa, a.Z * b.ja + a.qa * b.ma + a.ja, a.ba * b.ja + a.fa * b.ma + a.ma)
    };
    C.Cn = function(a, b) { var c = this.Z,
            d = this.ba,
            e = this.qa,
            f = this.fa,
            g = this.ja,
            h = this.ma,
            k = Math.tan(a),
            l = Math.tan(b);
        this.Z = c + d * k;
        this.ba = c * l + d;
        this.qa = e + f * k;
        this.fa = e * l + f;
        this.ja = g + h * k;
        this.ma = g * l + h;
        this.yc && (c = this.jb, d = this.kb, this.jb = c + d * k, this.kb = c * l + d) };
    C.C = function(a, b) { if (a instanceof A) var c = a.o,
            d = a.i;
        else c = a, d = b; var e = this.Z * c + this.qa * d + this.ja,
            f = this.ba * c + this.fa * d + this.ma,
            c = this.yc ? this.Mb * c + this.Nb * d + this.Jb : 1; return b && a instanceof A ? (a.o = e / c, a.i = f / c, a) : new A(e / c, f / c) };
    C.rf = function(a) { var b = this.Z,
            c = this.Ra,
            d = this.qa,
            e = this.tb,
            f = this.jb,
            g = this.ub,
            h = this.ja,
            k = this.eb,
            l = Math.cos(a);
        a = Math.sin(a);
        this.Z = b * l - c * a;
        this.Ra = -b * a + c * l;
        this.qa = d * l + e * a;
        this.tb = -d * a + e * l;
        this.jb = f * l - g * a;
        this.ub = -f * a + g * l;
        this.ja = h * l + k * a;
        this.eb = -h * a + k * l };
    C.zh = function(a) { var b = this.ba,
            c = this.Ra,
            d = this.fa,
            e = this.tb,
            f = this.kb,
            g = this.ub,
            h = this.ma,
            k = this.eb,
            l = Math.cos(-a);
        a = Math.sin(-a);
        this.ba = b * l - c * a;
        this.Ra = b * a + c * l;
        this.fa = d * l - e * a;
        this.tb = d * a + e * l;
        this.kb = f * l - g * a;
        this.ub = f * a + g * l;
        this.ma = h * l - k * a;
        this.eb = h * a + k * l };
    C.Me = function(a, b, c) { c || (b = (3 + .72 * (b || 25)) * Math.PI / 180);
        a = a / 2 / Math.tan(b / 2);
        this.Mb = -this.Ra / a;
        this.Nb = -this.tb / a;
        this.Zb = -this.ub / a;
        this.Jb = -this.eb / a + this.Jb };
    C.Se = function(a, b) {
        if (!a) return !this.yc || 0 == this.jb && 0 == this.kb && 0 == this.Ra && 0 == this.tb && 0 == this.eb && 0 == this.Mb && 0 == this.Nb && 0 == this.Zb && 1 == this.ub && 1 == this.Jb ? "matrix(" + this.Z.toFixed(6) + "," + this.ba.toFixed(6) + "," + this.qa.toFixed(6) + "," + this.fa.toFixed(6) + "," + (b ? Math.round(this.ja) : this.ja).toFixed(6) + "," + (b ? Math.round(this.ma) : this.ma).toFixed(6) + ")" : "matrix3d(" + this.Z.toFixed(6) + "," + this.ba.toFixed(6) + "," + this.Ra.toFixed(6) + "," + this.Mb.toFixed(6) + "," + this.qa.toFixed(6) + "," + this.fa.toFixed(6) + "," +
            this.tb.toFixed(6) + "," + this.Nb.toFixed(6) + "," + this.jb.toFixed(6) + "," + this.kb.toFixed(6) + "," + this.ub.toFixed(6) + "," + this.Zb.toFixed(6) + "," + this.ja.toFixed(6) + "," + this.ma.toFixed(6) + "," + this.eb.toFixed(6) + "," + this.Jb.toFixed(6) + ")"
    };
    C.vc = function() { var a = this,
            b = new B(a.Z, a.ba, a.qa, a.fa, a.ja, a.ma);
        Object.keys(a).forEach(function(c) { b[c] = a[c] }); return b };
    C.td = function(a) { var b = this; return !a instanceof B ? !1 : b.yc || a.yc ? (b.yc || (b = b.vc(), b.Za()), a.yc || (a = a.vc(), a.Za()), b.Z === a.Z && b.ba === a.ba && b.qa === a.qa && b.fa === a.fa && b.jb === a.jb && b.kb === a.kb && b.Ra === a.Ra && b.tb === a.tb && b.ub === a.ub && b.ja === a.ja && b.ma === a.ma && b.eb === a.eb && b.Mb === a.Mb && b.Nb === a.Nb && b.Zb === a.Zb && b.Jb === a.Jb) : b.Z === a.Z && b.ba === a.ba && b.qa === a.qa && b.fa === a.fa && b.ja === a.ja && b.ma === a.ma && b.eb === a.eb };
    C.ga = function(a) { this.Yc = a };
    C.za = function(a) { this.lc = a };
    C.B = function(a) { this.Cc = a };
    C.Bb = function(a) { this.Kb = a };
    C.Xa = function(a) { this.$b = a };
    C.pb = function(a) { this.ac = a };
    C.j = function(a) { this.kc = a };
    C.Tb = function(a) { this.mc = a };
    B.B = function(a, b, c) { var d = new A(a, 0),
            e = new A(0, b);
        a = new A(a, b);
        b = new A(0, 0); var f = new B;
        f.nc(c);
        d = f.C(d, !0);
        e = f.C(e, !0);
        a = f.C(a, !0);
        c = Math.min(d.o, e.o, a.o, b.o); var f = Math.max(d.o, e.o, a.o, b.o),
            g = Math.min(d.i, e.i, a.i, b.i),
            d = Math.max(d.i, e.i, a.i, b.i); return [f - c, d - g] };
    t.H("Geom.Matrix", B);
    t.ra(C, ["scale", C.Lb, "translate", C.L, "rotate", C.nc, "create3DMatrix", C.Za, "translate3D", C.nb, "rotateZ3D", C.Sd, "rotateY3D", C.rf, "rotateX3D", C.zh, "perspective", C.Me, "setRawRotate3dX", C.ga, "setRawRotate3dY", C.za, "setRawPers", C.B, "setRawSite", C.Bb, "setRawRotateCenterX", C.Xa, "setRawRotateCenterY", C.pb, "setRawLeft", C.j, "setRawTop", C.Tb, "transform", C.C, "toCssText", C.Se]);
    t.H("Geom.Matrix", B);

    function Qa(a, b) { Qa.f.constructor.apply(this, arguments);
        this.Bc = b;
        this.by = b.preventDefault;
        this.cy = b.stopImmediatePropagation;
        this.dy = b.stopPropagation;
        this.da = null;
        t.ob(this, ["inputX", Ra.Fb, "inputY", Ra.Gb, "systemEvent", Ra.ux]) } t.extend(Qa, z);
    var Ra = Qa.prototype;
    Qa.za = null;
    Ra.Fb = function() { return Sa.bind(this)().o };
    Ra.Gb = function() { return Sa.bind(this)().i };
    Ra.j = function(a) { Qa.za = a };
    Ra.mn = function() { Qa.za = null };
    Ra.wh = function() { Qa.f.wh.apply(this, arguments);
        this.by.call(this.Bc) };
    Ra.stopImmediatePropagation = function() { Qa.f.stopImmediatePropagation.apply(this, arguments);
        this.cy.call(this.Bc) };
    Ra.stopPropagation = function() { Qa.f.stopPropagation.apply(this, arguments);
        this.dy.call(this.Bc) };
    var Sa = Ra.xi = function() { return Qa.xi(this.da, this.Bc) };
    Qa.xi = function(a, b) { if (b.changedTouches) var c = b.changedTouches[0],
            d = c.clientX,
            c = c.clientY;
        else d = b.clientX, c = b.clientY; return Qa.ze(a, d, c) };
    Qa.ze = function(a, b, c) { var d = new B(null, null, null, null, -a.U.Ba, -a.U.Ca),
            d = B.jc(a.C.T, d); return d.He().C(new A(b, c)) };
    Ra.ux = function() { return this.Bc };
    t.H("Events.InputEvent", Qa);
    var Va = Qa;

    function F() {}
    var Wa = document.createElement("style");
    document.head.appendChild(Wa);
    var Xa = Wa.sheet,
        Ya = 0,
        Za = {},
        $a = [],
        bb = [],
        cb = {};
    F.Op = function(a, b, c) { c = c || a + "{ " + b + "}"; if ($a.length) { var d = $a.pop();
            b = d.selectorText;
            null == b && 0 == d.cssText.indexOf("@font-face") && (d = d.cssText.match(/font-family:\s*(.+?);/)) && (b = d[1]);
            d = Za[b];
            delete Za[b];
            Xa.deleteRule(d); try { Xa.insertRule(c, d) } catch (e) { console.error("inval style: " + c) } Za[a] = d } else { b = (Xa.cssRules || Xa.rules).length; try { Xa.insertRule(c, b) } catch (f) { console.error("inval style: " + c) } Za[a] = b } };
    F.Pp = function(a) { a = Za[a];
        null != a && $a.push((Xa.cssRules || Xa.rules)[a]) };
    F.Sp = function(a, b) { F.Op(a, null, "@font-face{font-family:'" + a + "';src:" + b + ";}") };
    F.UB = function(a) { F.Pp(a) };
    F.K = function(a, b) { 1 == arguments.length && (b = a, a = "mugine_class_" + Ya++);
        F.Op("." + a, b); return a };
    F.Kp = null;
    F.ue = function(a) { var b = "mugine_class_" + Ya++;
        a = "@" + F.Kp + "keyframes " + b + "{ " + a + "}"; if (bb.length) { var c = bb.pop().name,
                d = cb[c];
            delete cb[c];
            Xa.deleteRule(d);
            Xa.insertRule(a, d);
            cb[b] = d } else c = Xa.cssRules.length, Xa.insertRule(a, c), cb[b] = c; return b };
    F.ec = function(a) { F.Pp("." + a) };
    F.Mp = function(a) { a = cb[a];
        null != a && bb.push((Xa.cssRules || Xa.rules)[a]) };
    F.$d = function(a, b) { F.Mp(a);
        F.K(a, b) };
    t.H("Render.StyleSheet", F);
    var K = {},
        db = navigator.userAgent,
        eb = K.Sa = {},
        gb = K.vg = {},
        hb = db.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        ib = db.match(/(Android);?[\s\/]+([\d.]+)?/),
        mb = !!db.match(/\(Macintosh\; Intel /),
        nb = db.match(/(iPad).*OS\s([\d_]+)/),
        ob = db.match(/(iPod)(.*OS\s([\d_]+))?/),
        sb = !nb && db.match(/(iPhone\sOS)\s([\d_]+)/),
        ub = db.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        vb = db.match(/Windows Phone ([\d.]+)/),
        wb = ub && db.match(/TouchPad/),
        xb = db.match(/Kindle\/([\d.]+)/),
        Bb = db.match(/Silk\/([\d._]+)/),
        Cb = db.match(/(BlackBerry).*Version\/([\d.]+)/),
        Db = db.match(/(BB10).*Version\/([\d.]+)/),
        Eb = db.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        Fb = db.match(/PlayBook/),
        Gb = db.match(/Chrome\/([\d.]+)/) || db.match(/CriOS\/([\d.]+)/),
        Hb = db.match(/Firefox\/([\d.]+)/),
        Ib = db.match(/MSIE\s([\d.]+)/) || db.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        Jb = !Gb && db.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        Kb = Jb || db.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    if (gb.BB = !!hb) gb.version = hb[1];
    ib && (eb.Mk = !0, eb.version = ib[2]);
    sb && !ob && (eb.pd = eb.LC = !0, eb.version = sb[2].replace(/_/g, "."));
    nb && (eb.pd = eb.KC = !0, eb.version = nb[2].replace(/_/g, "."));
    ob && (eb.pd = eb.MC = !0, eb.version = ob[3] ? ob[3].replace(/_/g, ".") : null);
    vb && (eb.vD = !0, eb.version = vb[1]);
    ub && (eb.tD = !0, eb.version = ub[2]);
    wb && (eb.qD = !0);
    Cb && (eb.zC = !0, eb.version = Cb[2]);
    Db && (eb.wC = !0, eb.version = Db[2]);
    Eb && (eb.hD = !0, eb.version = Eb[2]);
    Fb && (gb.ZC = !0);
    xb && (eb.OC = !0, eb.version = xb[1]);
    Bb && (gb.fB = !0, gb.version = Bb[1]);
    !Bb && eb.Mk && db.match(/Kindle Fire/) && (gb.fB = !0);
    Gb && (gb.chrome = !0, gb.version = Gb[1]);
    Hb && (gb.dA = !0, gb.version = Hb[1]);
    Ib && (gb.qt = !0, gb.version = Ib[1]);
    Kb && (mb || eb.pd) && (gb.eu = !0, mb && (gb.version = Kb[1]));
    Jb && (gb.uD = !0);
    eb.Af = !!(nb || Fb || ib && !db.match(/Mobile/) || Hb && db.match(/Tablet/) || Ib && !db.match(/Phone/) && db.match(/Touch/));
    eb.Xe = !(eb.Af || !(ib || sb || ub || Cb || Db || Gb && db.match(/Android/) || Gb && db.match(/CriOS\/([\d.]+)/) || ob || Hb && db.match(/Mobile/) || Ib && db.match(/Touch/)));
    K.Db = K.Sa.Xe || K.Sa.Af ? "touchstart" : "mousedown";
    K.Hc = K.Sa.Xe || K.Sa.Af ? "touchmove" : "mousemove";
    K.qb = K.Sa.Xe || K.Sa.Af ? "touchend" : "mouseup";
    K.Zd = "click";
    K.ho = void 0;
    var Lb = window.getComputedStyle(document.documentElement, ""),
        Mb = (Array.prototype.slice.call(Lb).join("").match(/-(moz|webkit|ms)-/) || ["", ""])[1],
        Nb = { BC: "WebKit|Moz|MS".match(new RegExp("(" + Mb + ")", "i"))[1], Zk: Mb, s: "-" + Mb + "-", Yk: Mb[0].toUpperCase() + Mb.substr(1) };
    t.ra(Nb, ["css", Nb.s]);
    K.prefix = Nb;
    K.El = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", MsTransition: "MSTransitionEnd", transition: "transitionend" }[K.prefix.Yk + "Transition"];

    function Ob(a) { var b = document.createElement("div");
        document.body.appendChild(b);
        b.style.cssText += "position:absolute; left:0px; top: -100px;" + K.prefix.s + "transition:left 20ms;";
        setTimeout(function() { b.addEventListener(K.El, function() { a(!0);
                b.parentNode.removeChild(b) });
            setTimeout(function() { b.style.left = "10px" }) }) } K.nC = function() { return null };
    K.MA = function() { Ob(function(a) { K.mt = a }) };
    K.devicePixelRatio = Math.min(2, window.devicePixelRatio || 1);
    K.ek = function() { return -1 < navigator.userAgent.toLowerCase().indexOf("micromessenger") };
    K.Gm = function(a) { window.WeixinJSBridge && !1 !== window.WeixinJSBridge._hasInit ? a(window.WeixinJSBridge) : document.addEventListener("WeixinJSBridgeReady", function() { a(window.WeixinJSBridge) }, !1) };
    K.Xq = function() { return "/client/preview_css3.html" == location.pathname && /mugeda.com$/.test(location.host) };
    K.Nq = function(a) { return "http://weika.mugeda.com/server/redirect.php?url=" + encodeURIComponent(a) };
    t.ra(K, ["prefix", K.prefix, "getWechatJSBridge", K.Gm, "isWeChat", K.ek]);
    t.H("Utils.Browser", K);

    function Pb(a, b) { this.qg = [];
        this.hd = [];
        this.Lj = void 0 !== a ? a : .001;
        b && (this.Lj *= b);
        this.In = this.Bd = null }
    var Qb = Pb.prototype;
    Qb.start = function(a) { this.add(a) };
    Qb.Dv = function() { null != this.Bd ? (this.Bd.o = 0, this.Bd.i = 0) : (this.qg = [], this.hd = []) };
    Qb.add = function(a, b) { b = b || 1 * new Date;
        10 <= this.qg.length && (this.qg.shift(), this.hd.shift());
        this.qg.push(b);
        this.hd.push(a) };
    Qb.bs = function() { for (var a = 1 * new Date, b = [], c = [], d = 0; d < this.qg.length; d++) { var e = this.qg[d];
            e > a - 200 && (b.push(e), c.push(this.hd[d])) } 2 > b.length ? this.Bd = new A(0, 0) : (a = new A(0, 0), b = b[b.length - 1] - b[0], a.o = (c[c.length - 1].o - c[0].o) / b, a.i = (c[c.length - 1].i - c[0].i) / b, this.Bd = a);
        this.In = 1 * new Date;
        this.qg = this.hd = null };
    Qb.$q = function() { var a = 1 * new Date,
            b = a - this.In,
            c = this.Bd,
            d = Math.sqrt(c.o * c.o + c.i * c.i),
            e = this.Lj / d * c.o,
            f = this.Lj / d * c.i,
            d = 0 !== c.o ? c.o - .5 * e * b : 0,
            g = 0 !== c.i ? c.i - .5 * f * b : 0; if (0 < c.o && 0 > d || 0 > c.o && 0 < d || 0 === c.o) var h = c.o / e,
            d = 0;
        else h = b; if (0 < c.i && 0 > g || 0 > c.i && 0 < g || 0 === c.i) b = c.i / f, g = 0;
        c = new A(c.o * h - .5 * e * h * h, c.i * b - .5 * f * b * b);
        this.In = a;
        this.Bd.o = d;
        this.Bd.i = g; return c };
    Qb.Rw = function() { return new A(this.hd[this.hd.length - 1].o - this.hd[this.hd.length - 2].o, this.hd[this.hd.length - 1].i - this.hd[this.hd.length - 2].i) };

    function Rb(a, b, c, d) { Rb.f.constructor.apply(this, arguments);
        this.c = a;
        this.Qv = b;
        this.Pv = c;
        this.fh = void 0;
        this.kh = 1 * d } t.extend(Rb, ia);
    var Sb = Rb.prototype;
    Sb.D = function() { this.Ia() };
    Sb.sv = function() {
        function a(a) { 0 != a.button && b(a) }

        function b(e) {
            if ("mouseup" != e.type || 0 == e.button) {
                if (2 === m.xg) {
                    var l = function(a, b, c) { b = (a.left + a.right) / 2 - b;
                            c = (a.top + a.bottom) / 2 - c; var d = Math.max(32, (a.right - a.left) / 2);
                            a = Math.max(32, (a.bottom - a.top) / 2); return Math.abs(b) < d && Math.abs(c) < a },
                        q = function() {
                            g.Yx();
                            f.fh = void 0;
                            var a = g.La().V,
                                b = {},
                                c = {},
                                d = null,
                                q = [],
                                D;
                            for (D in a.Qf) {
                                var H = a.Qf[D],
                                    E = H.action || null,
                                    J = H.Ih;
                                if (J.ab()) {
                                    var I = H.target;
                                    if (J) {
                                        var S = g.yi(),
                                            wa = J.yi(),
                                            T = m.st || {};
                                        if (!I || I != g) {
                                            var O = S.left +
                                                g.Ma() / 2,
                                                S = S.top + g.Aa() / 2,
                                                R = J.ge ? J.ge(g, O, S) : {},
                                                M = b[J.l];
                                            M || (b[J.l] = R);
                                            (M = void 0 === R.nd ? l(wa, O, S) : R.nd) && (d = J);
                                            var O = T.left + g.Ma() / 2,
                                                S = T.top + g.Aa() / 2,
                                                tb = J.ge ? J.ge(g, O, S) : {};
                                            c[J.l] || (c[J.l] = tb);
                                            J.Vg = !1;
                                            R = H.Uk;
                                            O = void 0 === tb.nd ? !l(wa, O, S) : !tb.nd;
                                            O = R && M && O || !R && !M && !O;
                                            E && O && !I && (E.Ke = g, q.push(E))
                                        }
                                        I == g && (S = g.yi(), O = S.left + I.Ma() / 2, S = S.top + I.Aa() / 2, R = J.ge ? J.ge(I, O, S) : {}, (M = b[J.l]) || (b[J.l] = R), M = void 0 === R.nd ? l(wa, O, S) : R.nd, O = T.left + I.Ma() / 2, S = T.top + I.Aa() / 2, R = J.ge ? J.ge(I, O, S) : {}, O = void 0 === R.nd ? !l(wa, O,
                                            S) : !R.nd, R = H.Uk, O = void 0 !== R && (R && M && O || !R && !M && !O)) && (E && q.push(E), d = J)
                                    }
                                }
                            }
                            q.sort(function(a, b) { var c = { dragout: 0, drop: 1 }; return c[a.ed] - c[b.ed] });
                            q.map(function(a) { a.D() });
                            for (var Ka in b) M = b[Ka], (J = M.Ih) && J.mk && !M.nd && J.mk(g, M.nd, d);
                            d && d.mk && d.mk(g, d);
                            k && (4 == h ? a.ia.Eb[g.l].An(m.Nh) : (1 != h && 3 != h || g.ig(m.Xk.left), 2 != h && 3 != h || g.jg(m.Xk.top), e.stopImmediatePropagation()))
                        };
                    f.kh ? (g.of = function() {
                        var a = m.wg,
                            b = a.$q();
                        4 == h ? c(null, null, null, b.o) : (m.ro += b.o, m.so += b.i, c(m.ro - m.start.x, m.so - m.start.y));
                        0 === a.Bd.o &&
                            0 === a.Bd.i && (g.of = null, m.wg = void 0, q())
                    }, m.wg.bs(), m.ro = m.end.x, m.so = m.end.y) : q();
                    e.stopImmediatePropagation()
                }
                m.xg && (m.xg = !1, g.mi = !1, document.removeEventListener(K.Hc, d, !0), document.removeEventListener(K.qb, b, !0), "mouseup" == e.type && document.removeEventListener("mousedown", a, !0))
            }
        }

        function c(a, b, c, d) {
            a = m.tt + a;
            b = m.ut + b;
            var e = g.La().Ha,
                k = g.La().Ga,
                l = g.Ma(),
                y = g.Aa();
            0 > a && a + l < e ? a = Math.min(0, e - l) : 0 < a && a + l > e && (a = Math.max(0, e - l));
            0 > b && b + y < k ? b = Math.min(0, k - y) : 0 < b && b + y > k && (b = Math.max(0, k - y));
            if (4 > h && 0 < h) {
                c &&
                    f.kh && m.wg.add(c.xi());
                if (3 == h) { var e = g.La().V,
                        D; for (D in e.Qf) c = e.Qf[D].Ih, c.ab() && (d = a + g.Ma() / 2, k = b + g.Aa() / 2, c = c && c.ge ? c.ge(g, d, k) : {}, c.nd && (!f.kh || void 0 === c.x && void 0 === c.y || m.wg.Dv(), a = void 0 !== c.x ? c.x - g.Ma() / 2 : a, b = void 0 !== c.y ? c.y - g.Aa() / 2 : b)) } 1 != h && 3 != h || g.ig(a);
                2 != h && 3 != h || g.jg(b)
            } else if (4 == h) {
                e = g.La().V;
                D = e.ia.Eb[g.l];
                b = D.c.C.T.Kb;
                a = d ? b + d - m.Nh : Math.atan2(m.end.y - m.Bg, m.end.x - m.Ag) - Math.atan2(m.start.y - m.Bg, m.start.x - m.Ag);
                for (d = Math.PI; a - m.gj > d;) a -= 2 * Math.PI;
                for (; a - m.gj < -d;) a += 2 * Math.PI;
                m.gj = a;
                a = m.Nh + m.gj;
                d = Math.floor(b / 2 / Math.PI);
                b = b - 2 * d * Math.PI;
                e = a - 2 * Math.floor(a / 2 / Math.PI) * Math.PI;
                b > Math.PI ? a = Math.abs(e - b) > Math.abs(e + 2 * Math.PI - b) ? 2 * (d + 1) * Math.PI + e : 2 * d * Math.PI + e : b > Math.PI && (a = Math.abs(e - b) > Math.abs(e - 2 * Math.PI - b) ? 2 * (d - 1) * Math.PI + e : 2 * d * Math.PI + e);
                D.An(a);
                c && f.kh && m.wg.add(new A(a - m.Nh, 0))
            }
        }

        function d(a) {
            if (m.xg) {
                a = new Va(a.type, a);
                a.da = g.La();
                a.wh();
                m.end.x = a.Fb();
                m.end.y = a.Gb();
                var b = m.end.x - m.start.x,
                    d = m.end.y - m.start.y;
                if ((1 == h || 3 == h || 4 == h) && 4 < Math.abs(b) || (2 == h || 3 == h || 4 == h) &&
                    4 < Math.abs(d)) m.xg = 2;
                2 === m.xg && (c(b, d, a), a.stopImmediatePropagation())
            }
        }

        function e(c) {
            if ("mousedown" != c.type || 0 == c.Bc.button) {
                m.xg = !0;
                g.mi = !0;
                m.tt = g.wd();
                m.ut = g.xd();
                m.st = g.yi();
                var e = g.Dm();
                m.Nh = f.fh ? f.fh.Nh : g.C.T.Kb;
                m.Xk = f.fh ? f.fh.Xk : e;
                m.Ag = g.C.T.$b + g.C.T.kc;
                m.Bg = g.C.T.ac + g.C.T.mc;
                m.start.x = c.Fb();
                m.start.y = c.Gb();
                m.gj = 0;
                document.addEventListener(K.Hc, d, !0);
                document.addEventListener(K.qb, b, !0);
                l && (document.addEventListener("touchmove", d, !0), document.addEventListener("touchend", b, !0));
                "mousedown" ==
                c.type && document.addEventListener("mousedown", a, !0);
                f.kh && (e = new Pb(void 0, 3 * (4 == h ? .01 : 1) / (f.kh / 100)), g.of = null, m.wg = e, 4 == h ? e.start(new A(0, 0)) : e.start(c.xi()));
                f.fh = m
            }
        }
        var f = this,
            g = f.c,
            h = f.Qv,
            k = f.Pv,
            l = "mousedown" == K.Db && ("ontouchstart" in document.documentElement || "ontouchstart" in window),
            m = { start: { x: void 0, y: void 0 }, end: { x: void 0, y: void 0 }, xg: void 0, tt: void 0, ut: void 0, st: void 0, Nh: void 0, Xk: void 0, Ag: void 0, Bg: void 0, gj: void 0, wg: void 0 };
        g.M(K.Db, e, !1, 100);
        l && g.M("touchstart", e, !1, 100)
    };
    var Tb = Rb;

    function Ub(a, b) { Ub.f.constructor.apply(this, arguments);
        this.ed = a;
        this.me = this.W = null;
        this.Rd = b } t.extend(Ub, ia);
    Ub.prototype.D = function() {
        if (this.Ia()) {
            Ub.f.D.apply(this, arguments);
            var a = this.da,
                b = function(b) { a && (b = a.c.V.uk(b)); return b.toString() },
                c = this.W.param;
            if (this.Rd) {
                if (c) {
                    var d = this.da.c.V.ia,
                        e = function(a, b) { var c = { Qh: !1 };
                            b(a, c); if (!c.Qh)
                                for (var c = a.sb, d = c.length, f = 0; f < d; f++) e(c[f], b) },
                        f = c.element_property;
                    (function(b) {
                        var c = [];
                        if (0 <= ["{{all}}", "{{alldragged}}", "{{visible}}", "{{dragged}}"].indexOf(b)) e(a, function(a) {
                            var e = a.c.A || {},
                                f = e.param || {};
                            ("{{dragged}}" != b && "{{alldragged}}" != b || 0 < f.drag) && ("{{all}}" ==
                                b || "{{alldragged}}" == b || a.c.ab()) && (e.type || "").toString().match(/\d+/) && c.push(d.Eb[a.c.l])
                        });
                        else { var f = d.ua.xf(b);
                            f && c.push(f) }
                        return c
                    })(c.element_name).map(function(a) { a.c.Rd(f) })
                }
            } else {
                var g = this.me;
                !g && this.Ke && (d = this.da.c.V.ia, g = d.Eb[this.Ke.l], this.Ke = null);
                if (g && c) {
                    var f = c.element_property,
                        h = c.element_type,
                        k = c.element_value,
                        l = k.split(";");
                    1 < l.length && ("" == l[l.length - 1] && l.pop(), k = l[Math.floor(Math.random() * l.length)]);
                    try {
                        k = b(k);
                        if ("" === k || k.match(/^[A-Za-z0-9]+$/)) k = "'" + k + "'";
                        k = (new Function("return " +
                            k + ";"))()
                    } catch (m) {}
                    "background" == f ? k && (b = k.replace(/rgba|\(|\)/g, ""), b = b.split(","), 0 < b.length && g.setFillColor(b[0], b[1], b[2], b[3])) : "border" == f && k && (b = k.replace(/rgba|\(|\)/g, ""), b = b.split(","), 0 < b.length && g.Ny(b[0], b[1], b[2], b[3]));
                    if ("animation" != f && (g.Ej = g.Ej || {}, !g.Ej[f])) {
                        g.Ej[f] = 1;
                        if ("overwrite" == h) { var n = "text" == f ? k : parseFloat(k),
                                k = g[f]; "rotate" == f ? n = n * Math.PI / 180 : "alpha" == f && (n = .01 * n); if ("text" == f || 1E-5 < Math.abs(k - n)) g[f] = n } else "delta" == h && 1E-5 < Math.abs(k) && (n = parseFloat(g[f]), isNaN(n) &&
                            (n = 0), n = "text" == f ? k : parseFloat(k), "rotate" == f ? n = n * Math.PI / 180 : "alpha" == f && (n = .01 * n), g[f] = parseFloat(g[f]) + parseFloat(n));
                        "text" == f && parseInt(c.keep_value || 0) && MugedaTools.addCustomMugedaParameters(encodeURIComponent("m_" + g.data.guid), encodeURIComponent(n));
                        delete g.Ej[f]
                    }
                }
            }
        }
    };
    t.H("Action.ActionElement", Ub);
    var Vb = Ub;

    function Wb(a, b, c) { Wb.f.constructor.apply(this, arguments);
        this.Rm = c;
        this.Re = b } t.extend(Wb, ia);
    Wb.prototype.D = function() { if (this.Ia()) { this.Rm && (this.W.param.callback = this.Rm.D.bind(this.Rm)); var a = window.MugedaBehavior;
            a && (this.W.param.isCss = !0, a.popupForm(this.W.param), (a = this.W.param.iframeDiv) && this.Re && (a.style.padding = 0, this.Re.appendChild(a))) } };
    var Xb = Wb;
    var $b = {},
        ac = [];
    $b.Tp = function(a) { return ac[a] };
    $b.hv = function(a) { ac.push(a); return ac.length - 1 };
    t.H("Utils.Common", $b);

    function bc() {}
    var cc = -1,
        dc = null;

    function ec() { try { sessionStorage.MUGEDASTATE = JSON.stringify(dc) } catch (a) { console.log("sessionStorage:" + a.toString()) } }

    function fc() { try { sessionStorage.MUGEDASTATE || (sessionStorage.MUGEDASTATE = JSON.stringify([])), dc = JSON.parse(sessionStorage.MUGEDASTATE) } catch (a) { console.log("sessionStorage:" + a.toString()), dc = [], ec() } }
    bc.sp = function(a) { fc();
        cc < dc.length - 1 && dc.splice(cc + 1, dc.length - 1 - cc);
        dc.push({ Xn: a });
        ec();
        a = ++cc; var b = { u: void 0 };
        b.MUGEDASTATE = a;
        window.history.pushState(b, document.title) };

    function gc(a, b) { var c = a.u.concat([b]),
            d = window.Mugine;
        a.al.split(".").forEach(function(a) { d = d[a] }); return d[a.bd].apply(window, c) }
    window.addEventListener("popstate", function() { var a = window.history.state,
            a = null == a ? -1 : a.MUGEDASTATE; if (1 * a == a)
            if (a < cc) { fc(); var b = dc[a + 1];
                hc(function(a) { return function(b) { a.forward = gc(a.Xn, b);
                        ec() } }(b));
                cc = a } else a > cc && (fc(), b = dc[a]) && (hc(function(a) { return function(b) { gc(a.forward, b) } }(b)), cc = a) });
    var ic = [];

    function hc(a) { ic.push(a);
        jc() }

    function jc() {
        function a(a) { a && ic.splice(0, 1);
            jc() } if (ic.length)(0, ic[0])(a) } t.H("Utils.History", bc);

    function kc(a, b, c, d, e, f, g) { kc.f.constructor.apply(this, arguments);
        this.J = d;
        this.Xi = e;
        this.ed = a;
        this.ua = c;
        this.sk = b;
        this.Om = g } t.extend(kc, ia);
    kc.prototype.D = function() {
        var a = this.J || (this.Ke && "MovieClip" == this.Ke.I ? this.Ke : null);
        this.Ke = null;
        if (this.Ia() && a) {
            kc.f.D.apply(this, arguments);
            var b = this.sk,
                c, d = this.W.param;
            c = this.W.type;
            if ("next" == c) c = 1;
            else if ("previous" == c) c = -1;
            else { c = d.frame_name; var e = d.frame_number || "",
                    f = a.$a || a.ca[0] || {},
                    d = f.mb,
                    f = f.Ac + d; if (e && 0 < e.length) { for (var e = e.split(";"), g = [], h = 0; h < e.length; h++) { var k = e[h],
                            k = parseInt(k) - 1 + d;
                        k >= d && k < f && g.push(k) } e = g.join(";") } c = e.length ? e : c } b && (c += a.Ea);
            0 > c || c >= a.Te || (this.ua || (b =
                this.da.c.V.ia, this.ua = (b.Eb[a.l] || b).ua), this.ua.Qb = null, this.Xi ? a.Vd(c, null) : a.rc(c, null), this.Om && bc.sp({ al: "Action.ActionGoTo", bd: "doHistory", u: [a.cc().tn, a.l, c, this.J.Ea, this.J.Wm, this.Xi] }), 0 <= [u.Xa, u.ye, u.ze, u.za, u.xl].indexOf(this.ed) && !a.Mm && a.ns(!0))
        }
    };
    kc.j = function(a, b, c, d, e, f, g) { var h = $b.Tp(a).Sj(b);
        h.rq(g, function() { e ? h.Vd(d, null) : h.rc(d, null) }); return { al: "Action.ActionGoTo", bd: "doHistory", u: [a, b, null, c, f, null] } };
    t.ra(kc, ["doHistory", kc.j]);
    t.H("Action.ActionGoTo", kc);
    var lc = kc;

    function mc(a, b) { mc.f.constructor.apply(this, arguments);
        this.mg = b;
        this.gk = a } t.extend(mc, ia);
    mc.prototype.D = function() { if (this.Ia()) { var a = window.MugedaMraid; if (a) { var b = this.gk;
                K.Xq() && "about:blank" != b && (b = K.Nq(b));
                a.openLink(b, this.mg) } } };
    var nc = mc;

    function oc(a) { oc.f.constructor.apply(this, arguments) } t.extend(oc, ia);
    oc.prototype.D = function() { if (this.Ia()) { var a = this.W.param,
                b = a.audioicon_status,
                c = this.da.c.V.ei;
            c.yn(a.audioicon_mode);
            c.Ti(b);
            oc.f.D.apply(this, arguments) } };
    var pc = oc;

    function qc(a, b, c, d, e, f, g) { qc.f.constructor.apply(this, arguments);
        this.hq = c;
        this.J = e;
        this.ua = d;
        this.sk = b;
        this.iz = f;
        this.Om = g } t.extend(qc, ia);
    qc.prototype.D = function() {
        if (this.Ia()) {
            qc.f.D.apply(this, arguments);
            var a;
            if (this.hq && this.sk) a = this.hq;
            else { var b = this.W.param;
                a = b.page_guid || ""; var b = b.page_number || "",
                    c = this.J.ca; if (a)
                    for (var d = 0; d < c.length; d++)
                        if (c[d].R == a) { b = d + 1; break }
                a = b } this.sk ? a += this.J.Wj(this.J.Ea) : ("string" == typeof a && (b = a.split(";"), 1 < b.length && (a = b[Math.floor(Math.random() * b.length)]), a = parseInt(a)), a = a - 1);
            this.iz.Fi() || isNaN(a) || (b = { transition: this.W.param.page_transition, exit: this.W.param.page_exit }, this.J.Mh(a, b),
                this.Om && (c = this.J, bc.sp({ al: "Action.ActionPage", bd: "doHistory", u: [c.cc().tn, c.l, a, b, c.Ea, this.J.Wm, 0] })))
        }
    };
    qc.j = function(a, b, c, d, e, f, g, h) { var k = $b.Tp(a).Sj(b);
        k.rq(h, function() { 0 == g ? (k.Mh(c, d), f ? k.Vd(e, null) : k.rc(e, null)) : k.Mh(c, d) }); return { al: "Action.ActionPage", bd: "doHistory", u: [a, b, c, d, e, f, 1] } };
    t.ra(qc, ["doHistory", qc.j]);
    t.H("Action.ActionPage", qc);
    var rc = qc;

    function sc(a, b, c) { sc.f.constructor.apply(this, arguments);
        this.ed = a;
        this.Nv = b;
        this.Zc = c } t.extend(sc, ia);
    sc.prototype.D = function() { this.Ia() && (sc.f.D.apply(this, arguments), this.Zc && this.Zc.$ && (this.Zc.$.Lr = this.Nv, this.Zc.Kn())) };
    var tc = sc;

    function uc(a, b, c, d) { uc.f.constructor.apply(this, arguments);
        this.ua = b;
        this.J = c } t.extend(uc, ia);
    uc.prototype.D = function() { if (this.Ia()) { var a = this.J; if (!this.ua) { var b = this.da.c.V.ia;
                this.ua = (b.Eb[a.l] || b).ua } this.ua ? (this.ua.Qb = null, uc.f.D.apply(this, arguments), a = this.J, a.stop(20)) : this.J.ke && this.J.ke.Ti("pause") } };
    var vc = uc;

    function wc(a, b, c) { wc.f.constructor.apply(this, arguments);
        this.ed = b;
        this.jv = c } t.extend(wc, z);
    var xc = wc;

    function yc() {} yc.Gl = 2;
    yc.Hl = 3;
    yc.ml = 1;
    t.ra(yc, ["AT_TARGET", yc.Gl, "BUBBLING_PHASE", yc.Hl, "CAPTURING_PHASE", yc.ml]);
    t.H("Events.EventPhase", yc);

    function Cc(a, b) { Cc.f.constructor.apply(this, arguments);
        this.c = b } t.extend(Cc, z);
    Cc.za = null;
    var Dc = Cc;

    function Ec(a, b) { if (null == a || !(a instanceof b)) throw new TypeError; } Ec.$d = function(a) { if (1 * a !== a) throw new TypeError; };
    Ec.pb = function(a) { if (Math.floor(a) !== a) throw new TypeError; };
    Ec.ye = function(a) { if (null == a || a.constructor !== String) throw new TypeError; };
    t.ra(Ec, ["Num", Ec.$d]);
    t.ra(Ec, ["Str", Ec.ye]);
    t.H("Utils.Assert", Ec);

    function Fc(a, b) { Fc.f.constructor.apply(this, arguments);
        this.c = b } t.extend(Fc, z);
    Fc.za = null;
    var Gc = Fc;

    function Hc(a, b, c, d) { this.Y = d || 0;
        this.Ba = a || 0;
        this.Ca = b || 0;
        this.X = c || 0;
        t.oc(this, ["bottom", this.kf, this.xn, "bottomRight", this.dw, this.vy, "height", this.Aa, this.sf, "left", this.vd, this.Dh, "right", this.lf, this.zn, "size", this.nx, this.bz, "top", this.Vc, this.hg, "topLeft", this.zx, this.ez, "width", this.Ma, this.Gh, "x", this.vd, this.Dh, "y", this.Vc, this.hg]) }
    var L = Hc.prototype;
    L.kf = function() { return this.Ca + this.Y };
    L.xn = function(a) { this.Y = a - this.Ca };
    L.dw = function() { return new A(this.Ba + this.X, this.Ca + this.Y) };
    L.vy = function(a) { this.Y = a.i - this.Ca;
        this.X = a.o - this.Ba };
    L.Aa = function() { return this.Y };
    L.sf = function(a) { this.Y = a };
    L.vd = function() { return this.Ba };
    L.Dh = function(a) { this.Ba = a };
    L.lf = function() { return this.Ba + this.X };
    L.zn = function(a) { this.X = a - this.Ba };
    L.nx = function() { return new A(this.X, this.Y) };
    L.bz = function(a) { this.X = a.o;
        this.Y = a.i };
    L.Vc = function() { return this.Ca };
    L.hg = function(a) { this.Ca = a };
    L.zx = function() { return new A(this.Ba, this.Ca) };
    L.ez = function(a) { this.Ba = a.o;
        this.Ca = a.i };
    L.Ma = function() { return this.X };
    L.Gh = function(a) { this.X = a };
    L.clone = function() { return new Hc(this.Ba, this.Ca, this.X, this.Y) };
    L.contains = function(a, b) { return a >= this.Ba && a <= this.Ba + this.X && b >= this.Ca && b <= this.Ca + this.X };
    L.za = function(a) { return this.contains(a.o, a.i) };
    L.ga = function(a) { return this.contains(a.Ba, a.Ca) && this.contains(a.left, a.kf()) && this.contains(a.lf(), a.top) && this.contains(a.lf(), a.kf()) };
    L.j = function(a) { this.Ba = a.Ba;
        this.Ca = a.Ca;
        this.X = a.X;
        this.Y = a.Y };
    L.B = function(a) { return this.Ba === a.Ba && this.Ca === a.Ca && this.X === a.X && this.Y === a.Y };
    L.rt = function(a, b) { this.Ba -= a;
        this.X += 2 * a;
        this.Ca -= b;
        this.Y += 2 * b };
    L.Xa = function(a) { return L.rt(a.o, a.i) };
    L.pb = function(a) { var b = this.Ba + this.X,
            c = a.Ba + a.X,
            d = this.Ca + this.Y,
            e = a.Ca + a.Y; if (b < a.Ba || c < this.Ba || d < a.Ca || e < this.Ca) return new Hc; var f = Math.max(this.Ba, a.Ba);
        a = Math.max(this.Ca, a.Ca); return new Hc(f, a, Math.min(b, c) - f, Math.min(d, e) - a) };
    L.Bb = function(a) { var b = a.Ba + a.X,
            c = this.Ca + this.Y,
            d = a.Ca + a.Y; return !(this.Ba + this.X < a.Ba || b < this.Ba || c < a.Ca || d < this.Ca) };
    L.Tb = function() { return 0 >= this.X || 0 >= this.Y };
    L.offset = function(a, b) { this.Ba += a;
        this.Ca += b };
    L.ec = function(a) { this.offset(a.o, a.i) };
    L.cd = function() { this.il(0, 0, 0, 0) };
    L.il = function(a, b, c, d) { this.Ba = a;
        this.X = c;
        this.Ca = b;
        this.Y = d };
    L.toString = function() { return "(x=" + this.Ba + ", y=" + this.Ca + ", width=" + this.X + ", height=" + this.Y + ")" };
    t.ra(L, ["clone", L.clone, "contains", L.contains, "containsPoint", L.za, "containRect", L.ga, "copyFrom", L.j, "equals", L.B, "inflate", L.rt, "inflatePoint", L.Xa, "intersection", L.pb, "intersects", L.Bb, "isEmpty", L.Tb, "offset", L.offset, "offsetPoint", L.ec, "setEmpty", L.cd, "setTo", L.il, "toString", L.toString]);
    t.H("Geom.Rectangle", Hc);

    function Ic() { this.oa = 1;
        this.he = {};
        this.Pb = "";
        this.Ie = 1;
        t.oc(this, ["alphaMultiplier", this.Zv, this.ty, "fillInfo", this.uw, this.Fy, "strokeColor", this.tx, this.cz, "lineWidth", this.Jw, this.Py]) }
    var Jc = Ic.prototype;
    Jc.Zv = function() { return this.oa };
    Jc.ty = function(a) { this.oa = a };
    Jc.uw = function() { return this.he };
    Jc.Fy = function(a) { this.he = a };
    Jc.tx = function() { return this.Pb };
    Jc.cz = function(a) { this.Pb = a };
    Jc.Jw = function() { return this.Ie };
    Jc.Py = function(a) { this.Ie = a };
    Jc.td = function(a) { a = a || {}; var b = JSON.stringify(this.he),
            c = JSON.stringify(a.he); return this.oa === a.oa && b === c && this.Pb === a.Pb && this.Ie == a.Ie };
    Jc.vc = function() { var a = new Ic;
        a.oa = this.oa;
        a.he = JSON.parse(JSON.stringify(this.he));
        a.Pb = this.Pb;
        a.Ie = this.Ie; return a };
    Jc.ie = function() { var a = this.oa; return .001 > a ? 0 : a };
    t.H("Geom.ColorTransform", Ic);

    function Kc() { this.yd = 0;
        this.ud = 32;
        this.zd = 100;
        t.oc(this, ["letterSpace", this.Hw, this.My, "fontSize", this.vw, this.Gy, "lineHeight", this.Iw, this.Oy]) }
    var Lc = Kc.prototype;
    Lc.Hw = function() { return this.yd };
    Lc.My = function(a) { this.yd = a };
    Lc.vw = function() { return this.ud };
    Lc.Gy = function(a) { this.ud = a };
    Lc.Iw = function() { return this.zd };
    Lc.Oy = function(a) { this.zd = a };
    Lc.td = function(a) { a = a || {}; return this.yd === a.yd && this.ud === a.ud && this.zd === a.zd };
    Lc.vc = function() { var a = new Kc;
        a.yd = this.yd;
        a.ud = this.ud;
        a.zd = this.zd; return a };
    t.H("Geom.TextTransform", Kc);

    function Mc() { this.T = new B;
        this.ka = new Ic;
        this.Nc = new Kc;
        this.filters = [];
        this.be = this.zj = this.Ya = null;
        t.oc(this, ["matrix", this.Ow, this.Ry, "colorTransform", this.fw, this.yy, "textTransform", this.vx, this.dz, "additionCss", this.Xv, this.bc]) }
    var Nc = document.createElement("div"),
        Oc = Mc.prototype;
    Oc.Xv = function() { return this.be };
    Oc.bc = function(a) { a && (Nc.style.cssText = a, a = Nc.style.cssText);
        this.be = a };
    Oc.Ow = function() { return this.T };
    Oc.Ry = function(a) { this.T = a };
    Oc.fw = function() { return this.ka };
    Oc.yy = function(a) { this.ka = a };
    Oc.vx = function() { return this.Nc };
    Oc.dz = function(a) { this.Nc = a };
    Oc.td = function(a) { return a instanceof Mc ? a === this ? !0 : this.T.td(a.T) && this.ka.td(a.ka) && this.Nc.td(a.Nc) && JSON.stringify(this.filters) == JSON.stringify(a.filters) && this.Ya == a.Ya && this.zj == a.zj && this.be == a.be : !1 };
    Oc.vc = function() { var a = new Mc;
        a.T = this.T.vc();
        a.ka = this.ka.vc();
        a.Nc = this.Nc.vc();
        a.Ya = this.Ya;
        a.zj = this.zj;
        a.be = this.be; return a };
    t.H("Geom.Transform", Mc);

    function Pc() { this.Lc = [];
        t.ob(this, ["nodes", this.Tw]) }
    var Qc = Pc.prototype;
    Qc.Tw = function() { return this.Lc };
    Qc.Oq = function() { var a = Infinity,
            b = -Infinity,
            c = Infinity,
            d = -Infinity;
        this.Lc.forEach(function(e) { a > e.o && (a = e.o);
            b < e.o && (b = e.o);
            c > e.i && (c = e.i);
            d < e.i && (d = e.i) }); return new Hc(a, c, b - a, d - c) };
    Qc.uc = function(a) { this.Lc.push(a) };
    Qc.Ev = function() { for (var a = this.Lc, b = a.length, c = 0, d = 0, e = 0; e < b; e++) c += a[e].o, d += a[e].i;
        c = new A(c / b, d / b); for (e = 0; e < b - 1; e++)
            for (j = 0; j < b - e - 1; j++) Pc.aB(a[j], a[j + 1], c) && (d = a[j], a[j] = a[j + 1], a[j + 1] = d) };
    Pc.aB = function(a, b, c) { if (0 <= a.o && 0 > b.o) return !0; if (0 == a.o && 0 == b.o) return a.i > b.i; var d = (a.o - c.o) * (b.i - c.i) - (b.o - c.o) * (a.i - c.i); return 0 > d ? !0 : 0 < d ? !1 : (a.o - c.o) * (a.o - c.o) + (a.i - c.i) * (a.i - c.i) > (b.o - c.o) * (b.o - c.i) + (b.i - c.i) * (b.i - c.i) };
    Pc.NB = function(a, b) { var c = a.Lc,
            d = b.Lc,
            e = c.length,
            f = d.length; if (3 > e || 3 > f) return !1; for (var g = new Pc, h = 0; h < e; h++)
            for (var k = (h + 1) % e, l = 0; l < f; l++) { var m = Pc.OA(c[h], c[k], d[l], d[(l + 1) % f]);
                m && g.uc(m) }
        for (h = 0; h < e; h++) Pc.Bl(b, c[h]) && g.uc(c[h]); for (h = 0; h < f; h++) Pc.Bl(a, d[h]) && g.uc(d[h]); if (!(0 >= g.Lc.length)) return g.Ev(), g };
    Pc.OA = function(a, b, c, d) { if (Pc.WA(a, b, c, d) && Pc.VA(a, b, c, d)) { var e = (d.o - c.o) * (a.i - b.i) - (b.o - a.o) * (c.i - d.i),
                f = (a.i - c.i) * (b.o - a.o) * (d.o - c.o) + c.o * (d.i - c.i) * (b.o - a.o) - a.o * (b.i - a.i) * (d.o - c.o),
                g = f / e,
                e = (a.o - b.o) * (d.i - c.i) - (b.i - a.i) * (c.o - d.o),
                f = b.i * (a.o - b.o) * (d.i - c.i) + (d.o - b.o) * (d.i - c.i) * (a.i - b.i) - d.i * (c.o - d.o) * (b.i - a.i); return new A(g, f / e) } };
    Pc.WA = function(a, b, c, d) { return Math.min(a.o, b.o) <= Math.max(c.o, d.o) && Math.min(c.o, d.o) <= Math.max(a.o, b.o) && Math.min(a.i, b.i) <= Math.max(c.i, d.i) && Math.min(c.i, d.i) <= Math.max(a.i, b.i) };
    Pc.VA = function(a, b, c, d) { var e = a.o * (c.i - b.i) + b.o * (a.i - c.i) + c.o * (b.i - a.i),
            f = a.o * (d.i - b.i) + b.o * (a.i - d.i) + d.o * (b.i - a.i); if (0 <= (e ^ f) && (0 != e || 0 != f)) return !1;
        e = c.o * (a.i - d.i) + d.o * (c.i - a.i) + a.o * (d.i - c.i);
        f = c.o * (b.i - d.i) + d.o * (c.i - b.i) + b.o * (d.i - c.i); return 0 <= (e ^ f) && (0 != e || 0 != f) ? !1 : !0 };
    Pc.Bl = function(a, b) { var c, d, e = !1,
            f = a.Lc,
            g = f.length;
        c = 0; for (d = g - 1; c < g; d = c++)(f[c].i <= b.i && b.i < f[d].i || f[d].i <= b.i && b.i < f[c].i) && b.o < (f[d].o - f[c].o) * (b.i - f[c].i) / (f[d].i - f[c].i) + f[c].o && (e = !e); return e };
    t.H("Geom.Boundary", Pc);
    t.ra(Qc, ["addPoint", Qc.uc, "getRoundRect", Qc.Oq]);

    function Rc() { this.Pc = {};
        this.Oc = {} }
    var Sc = 0,
        Tc = Rc.prototype,
        Uc = { touchstart: !0, touchmove: !0, touchend: !0, mousedown: !0, mousemove: !0, mouseup: !0, click: !0, dblclick: !0, mouseover: !0, mouseout: !0, blur: !0, focus: !0 },
        Vc = { visibilityChanged: !0, rendered: !0 };
    Tc.tc = function(a, b) { var c = this;
        c.M(a, function() { b.apply(this, arguments);
            c.Fa(a, b, void 0) }, void 0, void 0) };
    Tc.M = function(a, b, c, d, e) { c = !0 === c;
        d = d || 0; var f = { Fd: d, listener: b, mu: Sc++, Vs: !1, CC: !1, type: a, Lo: c, Uh: e },
            g = c ? this.Pc : this.Oc,
            h = g[a];
        null == h && (h = g[a] = [], h.Go = !0);
        h.Mo = h.Mo || 0 !== d;
        h.push(f);
        h.Mo && (h.Go = !1);
        Uc[a] && (f.Vs = !0, g = new xc("domeventchanged", f, !0), this.F(g));
        Vc[a] && (e || (f.Uh = this), this.G && this.G.M(a, b, c, d, f.Uh)) };
    Tc.jy = function() { var a = this;
        [a.Pc, a.Oc].forEach(function(b) { Object.keys(b).forEach(function(c) { Vc[c] && b[c].forEach(function(b) { a.G && a.G.Fa(b.type, b.listener, b.Lo, b.Uh) }) }) }) };
    Tc.fq = function() { var a = this;
        [a.Pc, a.Oc].forEach(function(b) { Object.keys(b).forEach(function(c) { Vc[c] && b[c].forEach(function(b) { a.G && a.G.M(b.type, b.listener, b.Lo, b.Fd, b.Uh) }) }) }) };

    function Wc(a, b) { var c = a[b.I],
            d = this;
        c && (c.Mo && !c.Go && (c.sort(function(a, b) { return b.Fd === a.Fd ? b.mu - a.mu : b.Fd - a.Fd }), c.Go = !0), c.slice(0).forEach(function(a) { 2 !== b.zf && !1 === a.listener.call(d, b) && (b.stopPropagation(), b.preventDefault()) })) }
    Tc.F = function(a) { a.mg === this && (a.Rf = yc.Gl); switch (a.eventPhase) {
            case yc.ml:
                Wc.bind(this)(this.Pc, a); break;
            case yc.Hl:
                Wc.bind(this)(this.Oc, a);
                this.G && 0 === a.zf && (Uc[a.I] ? this.G.Zj || this.G.F(a) : this.G.F(a)); break;
            case yc.Gl:
                Wc.bind(this)(this.Pc, a);
                2 !== a.zf && Wc.bind(this)(this.Oc, a);
                a.Rf = yc.Hl;
                this.G && 0 === a.zf && (Uc[a.I] ? this.G.Zj || this.G.F(a) : this.G.F(a)); break;
            default:
                Wc.bind(this)(this.Pc, a), 2 !== a.zf && Wc.bind(this)(this.Oc, a) } };
    Tc.te = function(a, b) { return null == b ? null != this.Pc[a] && this.Pc[a].length || null != this.Oc[a] && this.Oc[a].length : null != this.Pc[a] && this.Pc[a].length && this.Pc[a].some(function(a) { return a.listener == b }) || null != this.Oc[a] && this.Oc[a].length && this.Oc[a].some(function(a) { return a.listener == b }) };
    Tc.B = function(a) { return null != this.Oc[a] && this.Oc[a].length };
    Tc.ga = function(a) { return null != this.Pc[a] && this.Pc[a].length };
    Tc.Fa = function(a, b, c, d) { c = !0 === c; var e = Vc[a],
            f = (c ? this.Pc : this.Oc)[a]; if (f) { for (var g = f.length, h = !1; g;) { var k = f[--g]; if (k.listener === b && (!e || k.Uh == (d || this))) { h = !0; break } } h && (d = f.splice(g, 1)[0], Uc[a] && (d = new xc("domeventchanged", d, !1), this.F(d)), e && this.G && this.G.Fa(a, b, c, k.Uh)) } };
    Tc.j = function(a) { return this.te(a) };
    t.H("Events.IEventDispatcher", Rc);
    t.ra(Tc, ["addEventListener", Tc.M, "dispatchEvent", Tc.F, "hasEventListener", Tc.te, "removeEventListener", Tc.Fa, "willTrigger", Tc.j]);

    function Xc(a) {
        Xc.f.constructor.apply(this, arguments);
        this.l = Xc.ef++;
        this.Wx = this.Vx = 0;
        this.Ka = !0;
        this.cb = null;
        this.G = a || null;
        this.C = new Mc;
        this.la = this.na = 0;
        this.Uc = this.Pa = this.sh = this.th = null;
        this.nr = !0;
        this.Ue = [];
        this.oi = [];
        this.Bq = "";
        this.mm = [];
        this.Wp = [];
        this.Zp = [];
        this.bq = [];
        this.Vp = [];
        this.aq = [];
        this.$p = [];
        this.xj = {};
        this.Yp = [];
        this.Yj = {};
        this.Kd = null;
        this.mi = this.Wc = !1;
        this.R = null;
        this.pm = !1;
        this.gk = this.A = null;
        this.ea = new z("changed");
        this.vz = new Gc("visibilityChanged", this);
        this.Gr = new Gc("rendered",
            this);
        this.Zj = !0;
        this.ss = this.qh = this.rh = this.De = null;
        this.Ug = 0;
        t.oc(this, ["x", this.wd, this.ig, "y", this.xd, this.jg, "width", this.Ma, this.Gh, "height", this.Aa, this.sf, "scaleX", this.wc, this.Eh, "scaleY", this.xc, this.Fh, "rotation", this.zi, this.Bn, "alpha", this.ie, this.xk, "visible", this.Vf, this.Dc, "name", this.vi, this.Sy, "transform", this.Dx, this.le]);
        t.ob(this, ["mouseX", this.Pw, "mouseY", this.Qw, "parent", this.Bm, "root", this.cc, "realVisible", this.ab, "stage", this.La])
    }
    t.extend(Xc, Rc);
    Xc.ef = 0;
    var N = Xc.prototype;
    N.qm = function(a) {
        a = a || this.oi || [];
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a[c],
                e = d.config || {},
                f = function(a, b) { return void 0 == a ? b : a },
                d = d.name;
            0 <= "grayscale brightness contrast saturate sepia invert".split(" ").indexOf(d) ? b += d + "(" + f(e.itensity, 0 <= ["grayscale", "sepia", "invert"].indexOf(d) ? 100 : 50) + "%) " : 0 <= ["blur"].indexOf(d) ? b += d + "(" + f(e.itensity, 4) + "px) " : 0 <= ["hue-rotate"].indexOf(d) ? b += d + "(" + f(e.rotation, 180) + "deg) " : 0 <= ["drop-shadow"].indexOf(d) && (b += d + "(" + f(e.h, 4) + "px " + f(e.v, 4) + "px " + f(e.itensity,
                4) + "px " + f(e.color, "rgba(0,0,0,1)") + ") ")
        }
        this.Bq = b
    };
    N.or = function() {};
    N.Rd = function(a) {
        var b = this.A.param,
            c = this.La().V.ia.Eb[this.l];
        a && "all" == a ? "left top width height alpha rotate text image".split(" ").map(function(a) { var d = b["text" == a ? "textContent" : a]; "text" == a && (d = unescape(d)); var e = c[a];
            void 0 !== d && e != d && (c[a] = d); "image" == a && c._defaultSrc && (c.src = "no" === c._defaultSrc ? void 0 : c._defaultSrc) }) : a && "all" != a ? "left top width height alpha rotate text".split(" ").map(function(d) {
            var e = b["text" == d ? "textContent" : d];
            if (d == a) {
                "text" == d && (e = unescape(e));
                var h = c[d];
                void 0 !==
                    e && h != e && (c[d] = e)
            }
        }) : "left top width height alpha rotate text".split(" ").map(function(a) { var d = b["text" == a ? "textContent" : a]; "text" == a && (d = unescape(d)); var e = c[a];
            void 0 !== d && e != d && (c[a] = d) });
        if (2021 == this.A.type && this.Mm) { var d = this.cs;
            d.paused ? this.Vd(d.frame) : this.rc(d.frame);
            this.ns(!1) }
        if ("text" == a)
            if (2038 == this.A.type || 2041 == this.A.type) { for (var d = c.dom.querySelectorAll("input"), e = 0; e < d.length; e++) d[e].checked = !1;
                c.checked = !1 } else 2039 == this.A.type && (c.text = null);
        else "image" == a && c._defaultSrc &&
            (c.src = "no" === c._defaultSrc ? void 0 : c._defaultSrc);
        this.F(this.ea)
    };
    N.Xx = function() { this.Vp.forEach(function(a) { a.D() }) };
    N.Yx = function() { this.Yp.forEach(function(a) { a.D() }) };
    N.ab = function() { return !1 === this.Ka ? !1 : this.G ? this.G.ab() : !0 };
    N.wd = function() { return this.C.T.ja };
    N.ig = function(a) { this.C.T.kc += a - this.C.T.ja;
        this.C.T.ja = a;
        this.F(this.ea) };
    N.xd = function() { return this.C.T.ma };
    N.jg = function(a) { this.C.T.mc += a - this.C.T.ma;
        this.C.T.ma = a;
        this.F(this.ea) };
    N.Ma = function() { return this.na * this.wc() };
    N.Gh = function(a) { this.Eh(a / this.na);
        this.F(this.ea) };
    N.Aa = function() { return this.la * this.xc() };
    N.sf = function(a) { this.Fh(a / this.la);
        this.F(this.ea) };
    N.wc = function() { return this.C.T.wc() };
    N.Eh = function(a) { this.C.T.Eh(a);
        this.F(this.ea) };
    N.xc = function() { return this.C.T.xc() };
    N.Fh = function(a) { this.C.T.Fh(a);
        this.F(this.ea) };
    N.Pw = function() { return this.Vx };
    N.Qw = function() { return this.Wx };
    N.zi = function() { return this.C.T.zi() };
    N.Bn = function(a) { var b = this.C.T;
        b.Bn(a);
        b.Kb = a;
        this.F(this.ea) };
    N.ie = function() { return this.C.ka.oa };
    N.xk = function(a) { if (this.C.ka.oa != a) var b = !0;
        this.C.ka.oa = a;
        b && this.F(this.ea) };
    N.Vf = function() { return this.Ka };
    N.Dc = function(a, b) { 1 === b && (0 == a ? this.pm = !0 : this.pm = null); if (this.Ka != a) var c = !0; var d = this.Ka;
        this.Ka = a;
        c && (this.F(this.ea), this.F(this.vz)); return d };
    N.vi = function() { return this.cb };
    N.Sy = function(a) { this.cb = a };
    N.Qi = function() {};
    N.ti = function() {};
    N.jh = function() {};
    N.Bm = function() { return this.G };
    N.cc = function() { return null == this.G ? null : this.G.cc() };
    N.La = function() { return null == this.G ? null : this.G.La() };
    N.Dx = function() { return this.C };
    N.le = function(a) { var b = !0;
        this.C == a || this.C.td(a) ? b = !1 : this.C = a;
        b && this.F(this.ea) };
    N.update = function() {};
    N.Nd = function() { var a = this.C.T;
        this.G && this.G.Pa && (a = B.jc(this.G.Pa, a)); return this.G && 0 != this.G.l ? B.jc(this.G.Nd(), a) : a };
    N.ui = function(a, b) { var c = new Pc;
        b = b || 0; if (null == a) return c.uc(new A(0 - b, 0 - b)), c.uc(new A(this.na + b, 0 - b)), c.uc(new A(this.na + b, this.la + b)), c.uc(new A(0 - b, this.la + b)), c;
        c.uc(a.C(new A(0 - b, 0 - b), !0));
        c.uc(a.C(new A(this.na + b, 0 - b), !0));
        c.uc(a.C(new A(this.na + b, this.la + b), !0));
        c.uc(a.C(new A(0 - b, this.la + b), !0)); return c };
    N.mv = function(a) { null == this.lb ? this.lb = [a] : this.lb.push(a) };
    N.yi = function() { var a = this.Nd(),
            b = a.C(new A(0, 0)),
            a = a.C(new A(this.width, this.height)); return { left: b.x, top: b.y, right: a.x, bottom: a.y } };
    N.Dm = function() { var a = this.Nd(),
            b = new A(0, 0);
        a.C(b, !0); return { left: b.o, top: b.i } };
    t.H("Display.DisplayObject", Xc);
    var Yc = Xc;

    function Zc() { Zc.f.constructor.apply(this, arguments) } t.extend(Zc, Yc);
    t.H("Display.InteractiveObject", Zc);
    var $c = Zc;

    function ad() { ad.f.constructor.apply(this, arguments); var a = this;
        a.RC = !0;
        a.UC = 0;
        a.children = [];
        a.Ok = !0;
        a.eo = [];
        t.ob(a, ["numChildren", function() { return a.children.length }]) } t.extend(ad, $c);
    var bd = ad.prototype;
    bd.ju = function(a) { a instanceof ad && (this.Ok = !1) };
    bd.vb = function(a) { if (a === this) throw new TypeError;
        this.Xt(a);
        a instanceof ad && (this.Ok = !1);
        this.children.push(a); return a };
    bd.Sn = function(a, b) { Ec.pb(b);
        Ec(a, Yc); var c = this.children;
        Ec(a, Yc);
        this.Xt(a); if (b > c.length) throw new RangeError;
        c.splice(b, 0, a); return a };
    bd.Xt = function(a) { var b = a.G;
        null != b && b instanceof ad && b.removeChild(a);
        this.ju(a);
        a.G = this;
        a.fq && a.fq();
        a = new Dc("addchild", a);
        this.F(a) };
    bd.contains = function(a) { Ec(a, Yc); if (-1 !== this.children.indexOf(a)) return !0; var b = this.it(),
            c = b.length,
            d; for (d = 0; d < c; d++)
            if (b[d].contains(a)) return !0; return !1 };
    bd.it = function() { if (this.Ok) return this.eo;
        this.eo = this.children.filter(function(a) { return a instanceof ad });
        this.Ok = !0; return this.eo };
    bd.jt = function(a, b) { this.children.filter(function(b) { return b instanceof a });
        this.it().forEach(function(c) { c instanceof b || c.jt(a, b) }) };
    bd.j = function(a) { Ec.pb(a); var b = this.children; if (a > b.length - 1) throw new RangeError; return b[a] };
    bd.ht = function(a) { var b = this.children,
            c; for (c = b.length - 1; - 1 < c; c--)
            if (b[c].cb === a) return b[c]; return null };
    bd.ko = function(a) { Ec(a, Yc);
        a = this.children.indexOf(a); if (-1 == a) throw new TypeError; return a };
    bd.B = function() {};
    bd.removeChild = function(a) { Ec(a, Yc); var b = this.children.indexOf(a); if (-1 === b) { if (this !== a.G) throw new RangeError; } else return this.Yt(b) };
    bd.Yt = function(a) { Ec.pb(a); var b = this.children; if (a > b.length - 1) throw new RangeError; var c = b[a];
        c.jy();
        c.G = null;
        b.splice(a, 1);
        this.ju(c);
        a = new Dc("remove", c);
        this.F(a); return c };
    bd.ga = function(a, b) { Ec(a, Yc);
        Ec.pb(b); var c = this.children,
            d = c.indexOf(a); if (-1 === d) throw new RangeError;
        c.splice(d, 1);
        d < b ? c.splice(b - 1, 0, a) : d > b && c.splice(b, 0, a) };
    bd.za = function(a, b) { Ec(a, Yc);
        Ec(b, Yc); var c = this.children,
            d = c.indexOf(a),
            c = c.indexOf(b); if (-1 == d || -1 == c) throw new TypeError;
        this.qu(d, c) };
    bd.qu = function(a, b) { Ec.pb(a);
        Ec.pb(b); var c = this.children,
            d = c.length; if (a > d - 1 || b > d - 1) throw new RangeError;
        d = c[b];
        c[b] = c[a];
        c[a] = d };
    bd.Sj = function(a) { var b = this.children,
            c = b.length,
            d; for (d = 0; d < c; d++) { var e = b[d]; if (e.l == a) return e; if (e.Sj && (e = e.Sj(a))) return e } };
    t.ra(bd, ["addChild", bd.vb, "addChildAt", bd.Sn, "contains", bd.contains, "getChildAt", bd.j, "getChildByName", bd.ht, "getChildIndex", bd.ko, "getObjectUnderPoint", bd.B, "removeChild", bd.removeChild, "removeChildAt", bd.Yt, "setChildIndex", bd.ga, "swapChildren", bd.za, "swapChildrenAt", bd.qu]);
    t.H("Display.DisplayObjectContainer", ad);
    var cd = ad;

    function dd() { dd.f.constructor.apply(this, arguments);
        this.Wf = !1;
        this.I = "Sprite" } t.extend(dd, cd);
    dd.prototype.update = function(a) { a = a || {}; for (var b = this.children.length, c = 0; c < b; c++) { var d = this.children[c]; "MovieClip" != d.I && ("Sprite" == d.I ? d.update(a) : d instanceof Yc && d.update(a)) } };
    t.H("Display.Sprite", dd);
    var ed = dd;
    var P = function() { var a, b, c, d, e = []; return { start: function(a) { c = setInterval(this.update, 1E3 / (a || 60)) }, stop: function() { clearInterval(c) }, add: function(a) { e.push(a) }, getAll: function() { return e }, eD: function() { e = [] }, remove: function(b) { a = e.indexOf(b); - 1 !== a && e.splice(a, 1) }, update: function() { a = 0;
                b = e.length; for (d = (new Date).getTime(); a < b;) e[a].update(d) ? a++ : (e.splice(a, 1), b--) } } }();
    P.Np = function() {
        var a = { x: 0 },
            b = {},
            c = {},
            d = {},
            e = 1E3,
            f = null,
            g = P.N.Wh.$o;
        this.Th = function(b, c) { null !== c && (e = c); for (var f in b) null !== a[f] && (d[f] = b[f]); return this };
        this.start = function() { P.add(this);
            f = (new Date).getTime() + 0; for (var e in d) null !== a[e] && (b[e] = a[e], c[e] = d[e] - a[e]); return this };
        this.stop = function() { P.remove(this); return this };
        this.Ys = function(a) { g = a };
        this.mo = function(a, b) {
            var c, d;
            c = Math.min(1, Math.max(0, a));
            if (b) {
                d = {};
                void 0 == b["default"] && (d["default"] = g(c, 0, 0, 1, 1));
                for (var e in b) {
                    var f =
                        b[e];
                    f && 5 < f.length && (d[e] = g(c, f[2], f[3], f[4], f[5]))
                }
            } else d = g(c);
            return d
        };
        this.update = function(d) { var k, l; if (d < f) return !0;
            d = (d - f) / e;
            d = 1 < d ? 1 : d;
            l = g(d); for (k in c) a[k] = b[k] + c[k] * l; return 1 == d ? !1 : !0 }
    };
    P.N = { Wh: {}, Qg: {}, Hg: {}, Rg: {}, Sg: {}, Tg: {}, Kg: {}, Gg: {}, Jg: {}, Fg: {}, we: {}, tj: {}, So: {} };
    P.N.Wh.$o = function(a) { return a };
    P.N.Wh.Pu = function(a, b) { b = void 0 === b ? 0 : b; var c = 2 / (1 + b); return c * a + .5 * c * (b - 1) * a * a };
    P.N.Qg.Cb = function(a) { return a * a };
    P.N.Qg.wb = function(a) { return -a * (a - 2) };
    P.N.Qg.Ub = function(a) { return 1 > (a *= 2) ? .5 * a * a : -.5 * (--a * (a - 2) - 1) };
    P.N.Hg.Cb = function(a) { return a * a * a };
    P.N.Hg.wb = function(a) { return --a * a * a + 1 };
    P.N.Hg.Ub = function(a) { return 1 > (a *= 2) ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2) };
    P.N.Rg.Cb = function(a) { return a * a * a * a };
    P.N.Rg.wb = function(a) { return -(--a * a * a * a - 1) };
    P.N.Rg.Ub = function(a) { return 1 > (a *= 2) ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2) };
    P.N.Sg.Cb = function(a) { return a * a * a * a * a };
    P.N.Sg.wb = function(a) { return (a = a - 1) * a * a * a * a + 1 };
    P.N.Sg.Ub = function(a) { return 1 > (a *= 2) ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2) };
    P.N.Tg.Cb = function(a) { return -Math.cos(a * Math.PI / 2) + 1 };
    P.N.Tg.wb = function(a) { return Math.sin(a * Math.PI / 2) };
    P.N.Tg.Ub = function(a) { return -.5 * (Math.cos(Math.PI * a) - 1) };
    P.N.Kg.Cb = function(a) { return 0 == a ? 0 : Math.pow(2, 10 * (a - 1)) };
    P.N.Kg.wb = function(a) { return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1 };
    P.N.Kg.Ub = function(a) { return 0 == a ? 0 : 1 == a ? 1 : 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2) };
    P.N.Gg.Cb = function(a) { return -(Math.sqrt(1 - a * a) - 1) };
    P.N.Gg.wb = function(a) { return Math.sqrt(1 - --a * a) };
    P.N.Gg.Ub = function(a) { return 1 > (a /= .5) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) };
    P.N.Jg.Cb = function(a) { var b, c = .1,
            d = .25; if (0 == a) return 0; if (1 == a) return 1;
        d || (d = .3);!c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c); return -(c * Math.pow(2, 10 * --a) * Math.sin(2 * (a - b) * Math.PI / d)) };
    P.N.Jg.wb = function(a) { var b, c = .1,
            d = .25; if (0 == a) return 0; if (1 == a) return 1;
        d || (d = .3);!c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c); return c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / d) + 1 };
    P.N.Jg.Ub = function(a) { var b, c = .1,
            d = .25; if (0 == a) return 0; if (1 == a) return 1;
        d || (d = .3);!c || 1 > c ? (c = 1, b = d / 4) : b = d / (2 * Math.PI) * Math.asin(1 / c); return 1 > (a *= 2) ? -.5 * c * Math.pow(2, 10 * --a) * Math.sin(2 * (a - b) * Math.PI / d) : c * Math.pow(2, -10 * --a) * Math.sin(2 * (a - b) * Math.PI / d) * .5 + 1 };
    P.N.Fg.Cb = function(a) { return a * a * (2.70158 * a - 1.70158) };
    P.N.Fg.wb = function(a) { return (a = a - 1) * a * (2.70158 * a + 1.70158) + 1 };
    P.N.Fg.Ub = function(a) { return 1 > (a *= 2) ? .5 * a * a * (3.5949095 * a - 2.5949095) : .5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2) };
    P.N.we.Cb = function(a) { return 1 - P.N.we.wb(1 - a) };
    P.N.we.wb = function(a) { return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375 };
    P.N.we.Ub = function(a) { return .5 > a ? .5 * P.N.we.Cb(2 * a) : .5 * P.N.we.wb(2 * a - 1) + .5 };
    P.N.tj.Cb = function() { return 1 };
    P.N.tj.wb = function() { return 0 };
    P.N.So.Ou = function(a, b, c, d, e) { var f = 1 - a; return { x: 3 * f * f * a * b + 3 * f * a * a * d + a * a * a, y: 3 * f * f * a * c + 3 * f * a * a * e + a * a * a } };
    var fd = Math.PI;

    function gd(a, b, c, d) { b = b || 0; if (!(this instanceof gd)) return new gd(a, b, c, d);
        this.$k = "number" === typeof c ? Math.abs(c) : Math.sqrt(a * a + b * b);
        this.t = "number" === typeof d ? 0 <= c ? d : d + fd : Math.atan2(b, a);
        this.t = (this.t % (2 * fd) + 2 * fd) % (2 * fd);
        this.t -= this.t > fd ? 2 * fd : 0;
        this.r = a;
        this.yf = b }

    function hd(a, b) { return id(Math.pow(a.$k, b), a.t * b) }

    function id(a, b) { return new gd(a * Math.cos(b), a * Math.sin(b), a, b) } gd.prototype.add = function(a) { return new gd(this.r + a.r, this.yf + a.yf) };
    gd.prototype.sub = function(a) { return new gd(this.r - a.r, this.yf - a.yf) };

    function jd(a, b) { return id(a.$k * b.$k, a.t + b.t) }
    P.Ig = function(a, b, c) {
        var d = 3 * a - 3 * c + 1,
            e = 3 * c - 6 * a,
            f = 3 * a,
            g = 3 * b - 3 + 1,
            h = 3 - 6 * b,
            k = 3 * b,
            l = e / 3 / d,
            m = f / 3 / d - l * l;
        return function(a) {
            if (1E-4 > Math.abs(a - 1)) return 1;
            var b = e * f / 6 / d / d - e * e * e / 27 / d / d / d + a / 2 / d;
            a = b * b + m * m * m;
            if (0 < a) { var c = 1 / 3,
                    r = Math.sqrt(a);
                a = b + r;
                b -= r;
                a = 0 <= a ? Math.pow(a, c) : -Math.pow(-a, c);
                b = 0 <= b ? Math.pow(b, c) : -Math.pow(-b, c);
                c = a + b - l; return ((g * c + h) * c + k) * c } r = hd(new gd(a), .5);
            a = (new gd(b)).add(r);
            var v = (new gd(b)).sub(r);
            a = hd(a, 1 / 3);
            var v = hd(v, 1 / 3),
                x = new gd(l),
                w = new gd(-.5, Math.sqrt(3) / 2),
                y = new gd(-.5, -Math.sqrt(3) /
                    2),
                b = a.add(v).sub(x),
                r = jd(w, a).add(jd(y, v)).sub(x);
            a = jd(y, a).add(jd(w, v)).sub(x);
            1E-4 > b.yf && -1E-4 < b.r && 1.0001 > b.r ? c = b : 1E-4 > r.yf && -1E-4 < r.r && 1.0001 > r.r ? c = r : 1E-4 > a.yf && -1E-4 < a.r && 1.0001 > a.r && (c = a);
            return ((g * c.r + h) * c.r + k) * c.r
        }
    };
    P.SB = function(a, b) { return (0, P.map[b])(a) };
    P.map = {
        "Linear.EaseNone": P.N.Wh.$o,
        "Linear.EaseAcc": P.N.Wh.Pu,
        "Quadratic.EaseIn": P.N.Qg.Cb,
        "Quadratic.EaseOut": P.N.Qg.wb,
        "Quadratic.EaseInOut": P.N.Qg.Ub,
        "Cubic.EaseIn": P.N.Hg.Cb,
        "Cubic.EaseOut": P.N.Hg.wb,
        "Cubic.EaseInOut": P.N.Hg.Ub,
        "Quartic.EaseIn": P.N.Rg.Cb,
        "Quartic.EaseOut": P.N.Rg.wb,
        "Quartic.EaseInOut": P.N.Rg.Ub,
        "Quintic.EaseIn": P.N.Sg.Cb,
        "Quintic.EaseOut": P.N.Sg.wb,
        "Quintic.EaseInOut": P.N.Sg.Ub,
        "Sinusoidal.EaseIn": P.N.Tg.Cb,
        "Sinusoidal.EaseOut": P.N.Tg.wb,
        "Sinusoidal.EaseInOut": P.N.Tg.Ub,
        "Exponential.EaseIn": P.N.Kg.Cb,
        "Exponential.EaseOut": P.N.Kg.wb,
        "Exponential.EaseInOut": P.N.Kg.Ub,
        "Circular.EaseIn": P.N.Gg.Cb,
        "Circular.EaseOut": P.N.Gg.wb,
        "Circular.EaseInOut": P.N.Gg.Ub,
        "Elastic.EaseIn": P.N.Jg.Cb,
        "Elastic.EaseOut": P.N.Jg.wb,
        "Elastic.EaseInOut": P.N.Jg.Ub,
        "Back.EaseIn": P.N.Fg.Cb,
        "Back.EaseOut": P.N.Fg.wb,
        "Back.EaseInOut": P.N.Fg.Ub,
        "Bounce.EaseIn": P.N.we.Cb,
        "Bounce.EaseOut": P.N.we.wb,
        "Bounce.EaseInOut": P.N.we.Ub,
        "Step.EaseIn": P.N.tj.Cb,
        "Step.EaseOut": P.N.tj.wb,
        custom: P.N.So.Ou
    };
    t.H("Transitions.Tween", P);

    function kd() {} kd.TB = function(a, b, c) { var d = 1 - c; return { x: Math.pow(d, 3) * a.nodeX + 3 * Math.pow(d, 2) * c * a.forwardX + 3 * d * Math.pow(c, 2) * b.backwardX + Math.pow(c, 3) * b.nodeX, y: Math.pow(d, 3) * a.nodeY + 3 * Math.pow(d, 2) * c * a.forwardY + 3 * d * Math.pow(c, 2) * b.backwardY + Math.pow(c, 3) * b.nodeY } };
    kd.EB = function(a, b, c) {
        function d(a, b, c) { return a + c * (b - a) }
        var e = a.length,
            f = b + 1;
        f == e && (f = 0);
        var g, h, k, l, m = {};
        g = d(a[b].nodeX, a[b].forwardX, c);
        h = d(a[b].nodeY, a[b].forwardY, c);
        k = d(a[f].backwardX, a[f].nodeX, c);
        l = d(a[f].backwardY, a[f].nodeY, c);
        var n = d(a[b].forwardX, a[f].backwardX, c),
            p = d(a[b].forwardY, a[f].backwardY, c);
        m.backwardX = d(g, n, c);
        m.backwardY = d(h, p, c);
        m.forwardX = d(n, k, c);
        m.forwardY = d(p, l, c);
        m.nodeX = d(m.backwardX, m.forwardX, c);
        m.nodeY = d(m.backwardY, m.forwardY, c);
        a[b].forwardX = g;
        a[b].forwardY = h;
        a[f].backwardX =
            k;
        a[f].backwardY = l;
        b === e - 1 ? a.push(m) : a.splice(f, 0, m)
    };
    t.H("Utils.Bezier", kd);
    var ld = 0;

    function md(a, b, c, d, e) { this.Va = a;
        this.Tq = parseFloat(b) || 0;
        this.ys = parseFloat(c) || 0;
        this.Uq = d || "center";
        this.Im = e || "cover";
        this.Ci = "fill_" + ld++ }
    var nd = md.prototype;
    nd.Ew = function(a) {
        var b = this.Va,
            c = a.Ma(),
            d = a.Aa(),
            e = a.wd(),
            f = a.xd(),
            g = a.nf;
        if (!b) return null;
        var h = b.bb,
            k = h.width,
            l = h.height,
            m = k / l,
            n = c / d,
            p = {},
            q = a.Qx || {};
        0 <= h.src.indexOf(b.Ja) && (a.Qx = q);
        var r = this.Tq;
        a = this.ys;
        g && (c = Math.round(c), d = Math.round(d), e = Math.round(e), f = Math.round(f));
        Math.min(k, c);
        Math.min(l, d);
        Math.max(k, c);
        Math.max(l, d);
        b = this.Im;
        h = this.Uq;
        "cover" == b ? (p.fb = d, p.gb = c, m < n ? (p.Ab = c, p.zb = c / m) : (p.zb = d, p.Ab = d * m)) : "contain" == b ? (p.Ab = k, p.zb = l, m > n ? (p.gb = c, p.fb = c / m) : (p.fb = d, p.gb = d * m)) : "fill" == b ?
            (p.fb = d, p.gb = c, p.Ab = c, p.zb = d) : "width" == b ? (p.gb = c, p.fb = d, p.Ab = c, p.zb = c / m) : "height" == b ? (p.gb = c, p.fb = d, p.Ab = d * m, p.zb = d) : ("tile" == b ? (p.fb = l, p.gb = k) : (p.fb = d, p.gb = c), p.Ab = k, p.zb = l);
        g && (p.fb = Math.round(p.fb), p.gb = Math.round(p.gb), p.Ab = Math.round(p.Ab), p.zb = Math.round(p.zb));
        "tile" == b ? (p.Hd = 0, p.oe = 0) : "center" == h || "top" == h || "bottom" == h ? (l = (c - p.Ab) / 2, m = (c - p.gb) / 2, n = Math.round(c / 2), k = void 0 === q.Zn || "center" == h && "raw" == b && 2 > Math.abs(q.Hs - e - n) || "top" == h && "width" == b && q.CA == f || "bottom" == h && "width" == b && q.zA == f + d,
            g && k ? (void 0 === q.Zn && (l = Math.round(l), m = Math.round(m), q.CA = f, q.zA = f + d, q.Zn = -l + n, q.Hs = e + n), p.Hd = n - q.Zn - (e + n - q.Hs) + Math.round(r), p.oe = Math.round(m)) : (p.Hd = l + r, p.oe = m)) : 0 <= h.indexOf("left") ? (p.Hd = r, p.oe = 0) : 0 <= h.indexOf("right") && (p.Hd = c - p.Ab - r, p.oe = c - p.gb);
        "tile" == b ? (p.Id = 0, p.pe = 0) : "center" == h || "left" == h || "right" == h ? (r = (d - p.zb) / 2, l = (d - p.fb) / 2, d = Math.round(d / 2), k = void 0 === q.$n || "center" == h && "raw" == b && 2 > Math.abs(q.Is - f - d) || "left" == h && "height" == b && q.AA == e || "right" == h && "height" == b && q.BA == e + c, g && k ? (void 0 ===
            q.$n && (r = Math.round(r), l = Math.round(l), q.AA = e, q.BA = e + c, q.$n = -r + d, q.Is = f + d), p.Id = d - q.$n - (f + d - q.Is) + Math.round(a), p.pe = Math.round(l)) : (p.Id = r + a, p.pe = l)) : 0 <= h.indexOf("top") ? (p.Id = a, p.pe = 0) : 0 <= h.indexOf("bottom") && (p.Id = d - p.zb - a, p.pe = d - p.fb);
        return p
    };
    nd.wm = function(a) { var b = ""; return b = (a = this.Ew(a)) ? b + ('<defs><pattern patternUnits="userSpaceOnUse"  id="' + this.Ci + '" width="' + a.gb + '" height="' + a.fb + '"><image xlink:href="' + this.Va.bb.src + '" x="' + (.001 > Math.abs(a.Hd) ? 0 : a.Hd) + '" y="' + (.001 > Math.abs(a.Id) ? 0 : a.Id) + '" width="' + a.Ab + '" height="' + a.zb + '" preserveAspectRatio="none" /></pattern></defs>') : "" };
    nd.Ln = function() { return !1 };
    nd.Tj = function() { return "url(#" + this.Ci + ")" };
    t.H("Display.GraphicsImageFill", md);

    function od(a, b, c) { a = a || [];
        b = b || [];
        c = c || "../display/graphicsPathWinding".Yo;
        this.Ld = a;
        this.dd = b;
        this.On = c;
        t.oc(this, ["commands", this.gw, this.zy, "data", this.hh, this.By, "winding", this.Fx, this.gz]) }
    var pd = od.prototype;
    pd.gw = function() { return this.Ld };
    pd.zy = function(a) { this.Ld = a };
    pd.hh = function() { return this.dd };
    pd.By = function(a) { this.dd = a };
    pd.Fx = function() { return this.On };
    pd.gz = function(a) { this.On = a };
    pd.j = function(a, b, c, d) { this.Ld.push("../display/graphicsPathCommand".Bf);
        this.dd.push(a, b, c, d) };
    pd.lineTo = function(a, b) { this.Ld.push("../display/graphicsPathCommand".np);
        this.dd.push(a, b) };
    pd.moveTo = function(a, b) { this.Ld.push("../display/graphicsPathCommand".Og);
        this.dd.push(a, b) };
    pd.B = function(a, b) { this.Ld.push("../display/graphicsPathCommand".Qp);
        this.dd.push(a, b) };
    pd.ga = function(a, b) { this.Ld.push("../display/graphicsPathCommand".Rp);
        this.dd.push(a, b) };
    t.ra(pd, ["curveTo", pd.j, "lineTo", pd.lineTo, "moveTo", pd.moveTo, "wideLineTo", pd.B, "wideMoveTo", pd.ga]);
    t.H("Display.GraphicsPath", od);

    function qd(a, b, c, d) { this.Li = a || 0;
        this.Ra = b || 0;
        this.ba = c || 0;
        this.Z = null == d ? 1 : d;
        t.oc(this, ["r", this.cx, this.Wy, "g", this.Cw, this.Ky, "b", this.bw, this.uy, "a", this.Vv, this.Nr]);
        t.ob(this, ["cssText", this.gc]) }
    var rd = qd.prototype;
    rd.clone = function() { return new qd(this.Li, this.Ra, this.ba, this.Z) };
    rd.cx = function() { return this.Li };
    rd.Wy = function(a) { this.Li = a };
    rd.Cw = function() { return this.Ra };
    rd.Ky = function(a) { this.Ra = a };
    rd.bw = function() { return this.ba };
    rd.uy = function(a) { this.ba = a };
    rd.Vv = function() { return this.Z };
    rd.Nr = function(a) { this.Z = a };
    rd.ie = function() { return .001 > this.Z ? 0 : this.Z };
    rd.gc = function() { return "rgba(" + (.001 > Math.abs(this.Li) ? 0 : this.Li) + "," + (.001 > Math.abs(this.Ra) ? 0 : this.Ra) + "," + (.001 > Math.abs(this.ba) ? 0 : this.ba) + "," + (.001 > Math.abs(this.Z) ? 0 : this.Z) + ")" };
    qd.parse = function(a) { var b, c, d; return (d = a.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)) ? (a = d[1], b = d[2], c = d[3], new qd(a, b, c, 1)) : (d = a.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+.*\d*)\)/)) ? (a = d[1], b = d[2], c = d[3], d = d[4], new qd(a, b, c, d)) : (d = a.match(/^#(.)(.)(.)$/)) ? (a = parseInt(d[1] + d[1], 16), b = parseInt(d[2] + d[2], 16), c = parseInt(d[3] + d[3], 16), new qd(a, b, c, 1)) : (d = a.match(/#(..)(..)(..)/)) ? (a = parseInt(d[1], 16), b = parseInt(d[2], 16), c = parseInt(d[3], 16), new qd(a, b, c, 1)) : null };
    t.H("Geom.Color", qd);

    function sd(a, b, c, d, e, f, g) { this.og = a || NaN;
        this.Ah = c || "normal";
        this.qq = d || "round";
        this.ar = e || "round";
        this.om = g } t.H("Display.GraphicsStroke", sd);

    function td(a) { this.Ic = a || 0 }
    var ud = td.prototype;
    ud.wm = function() { return "" };
    ud.Tj = function() { return this.Ic.gc() };
    ud.Ln = function() { return !1 };
    t.H("Display.GraphicsSolidFill", td);

    function vd() {} vd.cd = "linear";
    vd.qA = "radial";
    var wd = 0;

    function xd(a, b, c, d, e) { this.type = a || vd.cd;
        this.co = b;
        this.Ao = c;
        this.Ve = d;
        this.lj = e;
        this.Ci = "grad_" + wd++ }
    var zd = xd.prototype;
    zd.wm = function() {
        var a = this.type,
            b = a == vd.cd ? "linearGradient" : "radialGradient",
            c = this.Ve,
            d = this.lj,
            e = "<defs><" + b + ' id="' + this.Ci + '" ';
        a == vd.cd ? e += 'x1="' + c.o + '" x2="' + d.o + '" y1="' + c.i + '" y2="' + d.i + '" ' : (e += 'cx="' + c.o + '" cy="' + c.i + '" fx="' + c.o + '" fy="' + c.i + '" ', a = c.o - d.o, c = c.i - d.i, e += 'r="' + Math.sqrt(a * a + c * c) + '" ');
        for (var e = e + 'gradientUnits="userSpaceOnUse">', c = this.co, d = this.Ao, a = c.length, f = 0; f < a; f++) e += '<stop class="" stop-opacity="' + c[f].ie() + '" offset="' + (.001 > Math.abs(d[f]) ? 0 : d[f]) + '" style="stop-color: ' +
            c[f].gc() + ';"></stop>';
        return e + ("</" + b + "></defs>")
    };
    zd.Tj = function() { return "url(#" + this.Ci + ")" };
    zd.Ln = function() { return !1 };
    t.H("Display.GraphicsGradientFill", xd);

    function Ad() { this.Vb = [];
        this.Ge = this.og = 0 }
    var Bd = Ad.prototype;
    Bd.reset = function() { this.Vb = [];
        this.Ge++ };

    function Cd(a) { var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a); return b ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16), a: 1 } : (b = /^rgba\s?\(\s?(\d+)\s?,\s?(\d+)\s?,\s?(\d+)\s?,\s?(\d+(\.\d+)?)\s?\)\s?$/i.exec(a)) ? { r: parseInt(b[1]), g: parseInt(b[2]), b: parseInt(b[3]), a: parseFloat(b[4]) } : "object" == typeof a ? { r: parseInt(a.r), g: parseInt(a.g), b: parseInt(a.b), a: parseFloat(a.a), p: parseFloat(a.p || 0) } : null }
    Bd.Jo = function(a, b, c, d) {
        c = c.filters || [];
        var e = {};
        (b.filters || []).map(function(a) { e[a.name] = { Ks: a.config || {}, Ls: void 0 } });
        c.map(function(a) { e[a.name] = e[a.name] || { Ks: void 0 };
            e[a.name].Ls = a.config || {} });
        b = [];
        for (var f in e) {
            c = e[f];
            var g = c.Ks,
                h = c.Ls;
            c = 100;
            var k = 0,
                l = "itensity",
                m, n, p, q = function(a, b, c, d) { return void 0 == a ? d : void 0 == a[b] ? c : a[b] },
                r = { name: f, config: {} };
            "drop-shadow" == f ? ([l, "h", "v"].map(function(a) { n = q(g, a, 4, 0);
                    p = q(h, a, 4, 0);
                    m = n + d * (p - n);
                    r.config[a] = m }), n = q(g, "color", "rgba(0,0,0,1)", "rgba(0,0,0,0)"),
                p = q(h, "color", "rgba(0,0,0,1)", "rgba(0,0,0,0)"), c = Cd(n), k = Cd(p), c = { r: Math.min(255, Math.max(0, Math.floor(c.r + d * (k.r - c.r)))), g: Math.min(255, Math.max(0, Math.floor(c.g + d * (k.g - c.g)))), b: Math.min(255, Math.max(0, Math.floor(c.b + d * (k.b - c.b)))), a: Math.min(1, Math.max(0, c.a + d * (k.a - c.a))) }, c.a = .001 > c.a ? 0 : c.a, r.config.color = "rgba(" + Math.floor(c.r) + "," + Math.floor(c.g) + "," + Math.floor(c.b) + "," + c.a + ")") : (0 <= ["brightness", "saturate", "contrast"].indexOf(f) ? (c = 50, k = 100) : 0 <= ["hue-rotate"].indexOf(f) ? (c = 180, k = 0, l = "rotation") :
                0 <= ["blur"].indexOf(f) && (c = 4, k = 0), n = q(g, l, c, k), p = q(h, l, c, k), m = n + d * (p - n), r.config[l] = m);
            b.push(r)
        }
        a.filters = b
    };
    Bd.nB = function(a, b, c, d) {
        a.lineCap = b.lineCap || "round";
        a.lineJoin = b.lineJoin || "round";
        var e = "object" == typeof d ? d : {};
        d = void 0 == e["default"] ? d : e["default"];
        var f = void 0 == e.left ? d : e.left,
            g = void 0 == e.top ? d : e.top,
            h = void 0 == e.width ? d : e.width,
            k = void 0 == e.height ? d : e.height,
            l = void 0 == e.rotation ? d : e.rotation,
            m = void 0 == e.filter ? d : e.filter,
            e = void 0 == e.alpha ? d : e.alpha;
        a.startX = b.startX + f * (c.startX - b.startX);
        a.startY = b.startY + g * (c.startY - b.startY);
        a.endX = b.endX + f * (c.endX - b.endX);
        a.endY = b.endY + g * (c.endY - b.endY);
        a.width =
            b.width + h * (c.width - b.width);
        a.height = b.height + k * (c.height - b.height);
        a.alpha = b.alpha + e * (c.alpha - b.alpha);
        a.scaleX = b.scaleX + h * (c.scaleX - b.scaleX);
        a.scaleY = b.scaleY + k * (c.scaleY - b.scaleY);
        a.rotate = b.rotate + l * (c.rotate - b.rotate);
        if (void 0 !== b.letterSpace || void 0 !== c.letterSpace) e = b.letterSpace || 0, f = c.letterSpace || 0, a.letterSpace = e + d * (f - e);
        b.fontSize && c.fontSize && (a.fontSize = b.fontSize + d * (c.fontSize - b.fontSize));
        if (void 0 !== b.textLineHeight || void 0 !== c.textLineHeight) e = b.textLineHeight || 100, f = c.textLineHeight ||
            100, a.textLineHeight = e + d * (f - e);
        "trim" == b.render && "trim" == c.render && (a.render = "trim", e = parseFloat(b.verOffset) || 0, f = parseFloat(b.verOffset) || 0, a.horOffset = (parseFloat(b.horOffset) || 0) + d * ((parseFloat(c.horOffset) || 0) - n), a.verOffset = e + d * (f - p));
        null != b.rotateX && null != b.rotateY && null != c.rotateX && null != c.rotateY && (a.rotateX = b.rotateX + l * (c.rotateX - b.rotateX), a.rotateY = b.rotateY + l * (c.rotateY - b.rotateY), a.pers = b.pers + d * (c.pers - b.pers));
        void 0 !== b.rotateCenterX && void 0 !== c.rotateCenterX && void 0 !== b.rotateCenterY &&
            void 0 !== c.rotateCenterY && (a.rotateCenterX = b.rotateCenterX + l * (c.rotateCenterX - b.rotateCenterX), a.rotateCenterY = b.rotateCenterY + l * (c.rotateCenterY - b.rotateCenterY));
        a.customPivot = !0;
        a.fillInfo = a.fillInfo || { fillStyle: 0, fillImage: "", fillStartPos: { x: 32, y: 10 }, fillEndPos: { x: 80, y: 100 }, fillColors: [{ p: 0, r: 144, g: 200, b: 255, a: 1 }, { p: .8, r: 255, g: 144, b: 200, a: 1 }, { p: 1, r: 200, g: 255, b: 144, a: 1 }] };
        b.fillInfo && c.fillInfo && (1 == b.fillInfo.fillStyle || 2 == b.fillInfo.fillStyle) && (a.fillInfo.fillStartPos.x = b.fillInfo.fillStartPos.x +
            d * (c.fillInfo.fillStartPos.x - b.fillInfo.fillStartPos.x), a.fillInfo.fillStartPos.y = b.fillInfo.fillStartPos.y + d * (c.fillInfo.fillStartPos.y - b.fillInfo.fillStartPos.y), a.fillInfo.fillEndPos.x = b.fillInfo.fillEndPos.x + d * (c.fillInfo.fillEndPos.x - b.fillInfo.fillEndPos.x), a.fillInfo.fillEndPos.y = b.fillInfo.fillEndPos.y + d * (c.fillInfo.fillEndPos.y - b.fillInfo.fillEndPos.y));
        a.fillInfo.fillImage = b.fillInfo.fillImage || c.fillInfo.fillImage;
        a.fillInfo.imagePosition = b.fillInfo.imagePosition || c.fillInfo.imagePosition;
        a.fillInfo.imageSize = b.fillInfo.imageSize || c.fillInfo.imageSize;
        var n = parseFloat(b.fillInfo.horOffset) || 0,
            p = parseFloat(b.fillInfo.verOffset) || 0,
            l = parseFloat(c.fillInfo.verOffset) || 0;
        a.fillInfo.horOffset = n + d * ((parseFloat(c.fillInfo.horOffset) || 0) - n);
        a.fillInfo.verOffset = p + d * (l - p);
        a.left = a.startX;
        a.top = a.startY;
        a.right = a.startX + a.width;
        a.bottom = a.startY + a.height;
        if (b.curve && c.curve && b.curve.points && c.curve.points && b.curve.points.length == c.curve.points.length) {
            a.curveTweened = !0;
            p = b.curve.points;
            l = c.curve.points;
            e = b.curve.points.length;
            a.customPivot = !1;
            a.curve = a.curve || { closed: b.curve.closed };
            a.curve.points = [];
            for (n = 0; n < e; n++) f = p[n], g = l[n], h = d, k = {}, k.nodeX = f.nodeX + h * (g.nodeX - f.nodeX), k.nodeY = f.nodeY + h * (g.nodeY - f.nodeY), k.forwardX = f.forwardX + h * (g.forwardX - f.forwardX), k.forwardY = f.forwardY + h * (g.forwardY - f.forwardY), k.backwardX = f.backwardX + h * (g.backwardX - f.backwardX), k.backwardY = f.backwardY + h * (g.backwardY - f.backwardY), a.curve.points.push(k);
            f = Cd(b.strokeColor);
            g = Cd(c.strokeColor);
            f = {
                r: Math.max(0, Math.min(255,
                    Math.floor(f.r + d * (g.r - f.r)))),
                g: Math.max(0, Math.min(255, Math.floor(f.g + d * (g.g - f.g)))),
                b: Math.max(0, Math.min(255, Math.floor(f.b + d * (g.b - f.b)))),
                a: Math.max(0, Math.min(1, f.a + d * (g.a - f.a)))
            };
            n = Math.min(1, Math.max(0, f.a));
            a.strokeColor = "rgba(" + Math.round(f.r) + "," + Math.round(f.g) + "," + Math.round(f.b) + "," + n + ")";
            a.lineWidth = parseInt(b.lineWidth) + d * (parseInt(c.lineWidth) - parseInt(b.lineWidth));
            a.fillInfo.fillStyle = b.fillInfo.fillStyle || c.fillInfo.fillStyle;
            a.fillInfo.fillColors = [];
            if (b.fillInfo && c.fillInfo)
                for (p =
                    0 == b.fillStyle ? 1 : b.fillInfo.fillColors.length, l = 0 == c.fillStyle ? 1 : c.fillInfo.fillColors.length, e = Math.max(p, l), n = 0 == b.fillInfo.fillStyle ? c.fillInfo.fillStartPos : b.fillInfo.fillStartPos, f = 0 == c.fillInfo.fillStyle ? b.fillInfo.fillStartPos : c.fillInfo.fillStartPos, a.fillInfo.fillStartPos.x = n.x + d * (f.x - n.x), a.fillInfo.fillStartPos.y = n.y + d * (f.y - n.y), n = 0 == b.fillInfo.fillStyle ? c.fillInfo.fillEndPos : b.fillInfo.fillEndPos, f = 0 == c.fillInfo.fillStyle ? b.fillInfo.fillEndPos : c.fillInfo.fillEndPos, a.fillInfo.fillEndPos.x =
                    n.x + d * (f.x - n.x), a.fillInfo.fillEndPos.y = n.y + d * (f.y - n.y), n = 0; n < e; n++) { f = Cd(b.fillInfo.fillColors[Math.min(p - 1, n)]);
                    g = Cd(c.fillInfo.fillColors[Math.min(l - 1, n)]); if (!f || !g) break;
                    h = isFinite(f.p) ? f.p : g.p;
                    k = isFinite(g.p) ? g.p : f.p;
                    f = { r: Math.max(0, Math.min(255, Math.floor(f.r + d * (g.r - f.r)))), g: Math.max(0, Math.min(255, Math.floor(f.g + d * (g.g - f.g)))), b: Math.max(0, Math.min(255, Math.floor(f.b + d * (g.b - f.b)))), p: Math.max(0, Math.min(1, h + d * (k - h))), a: Math.max(0, Math.min(1, f.a + d * (g.a - f.a))) };
                    a.fillInfo.fillColors.push(f) }
        }
        this.Jo(a,
            b, c, m)
    };
    Bd.Ws = function(a, b, c, d) { var e = this.Vb.length ? this.Vb[this.Vb.length - 1] : null;!d && e instanceof od || (e = new od, this.Vb.push(e), this.Ge++);
        e.Ld = e.Ld.concat(a);
        e.dd = e.dd.concat(b);
        c && (e.On = c) };
    Bd.B = function() { return this.Vb };
    Bd.Ds = function(a, b) { var c = new td(a);
        this.Vb.splice(void 0 === b ? this.Vb.length : b, 0, c);
        this.Ge++ };
    Bd.Ez = function(a, b, c, d, e) { a = new xd(a, b, c, d, e);
        this.Vb.push(a);
        this.Ge++ };
    Bd.Dz = function(a, b, c, d, e) { a = new md(a, b, c, d, e);
        this.Vb.push(a);
        this.Ge++ };
    Bd.j = function() {};
    Bd.IA = function(a, b, c, d) { b = new td(b);
        c = new sd(a, 0, null, c, d, 0, b);
        this.og = a;
        this.Vb.push(c);
        this.Ge++ };
    t.ra(Bd, ["drawPath", Bd.Ws]);
    t.H("Display.Graphics", Ad);

    function Dd() {
        Dd.f.constructor.apply(this, arguments);
        this.Ea = this.ee = 0;
        this.Iv = null;
        this.Jv = [];
        this.$a = null;
        this.Ib = this.yq = !0;
        this.ca = [];
        this.Te = 0;
        this.Hb = !1;
        this.Hi = this.Xm = null;
        this.Pj = 0;
        this.si = {};
        this.Mm = !1;
        this.cs = {};
        this.I = "MovieClip";
        this.Qj = [];
        this.Mc = {};
        this.mf = !1;
        this.dg = !0;
        this.Le = !1;
        this.rd = this.ey = null;
        this.qk = {};
        this.Dn = !1;
        this.Ch = null;
        this.Kl = [];
        this.dn = {};
        this.ov = new z("beforeenterframe");
        this.Yz = new z("enterframe");
        this.ry = new z("scenechange");
        this.Wm = this.Xf = !1;
        t.ob(this, ["currentFrame",
            this.iw, "currentFrameLabel", this.jw, "currentLabels", this.lw, "currentScene", this.vm, "frameLoaded", this.ww, "scenes", this.mx, "totalFrames", this.Cx
        ]);
        t.oc(this, ["enabled", this.pw, this.Ey])
    }
    t.extend(Dd, ed);
    var Q = Dd.prototype;
    Q.ns = function(a) { this.cs = (this.Mm = a) ? { paused: this.Hb, frame: this.Ea } : {} };
    Q.iw = function() { return this.Ea };
    Q.jw = function() { return this.Iv };
    Q.lw = function() { return this.Jv };
    Q.vm = function() { return this.$a };
    Q.pw = function() { return this.yq };
    Q.Ey = function(a) { this.yq = a };
    Q.ww = function() { return this.Pj };
    Q.Hy = function(a) { var b = this.Pj;
        this.Pj = a;
        b != a && (a = new z("framesLoadedChange", !1, !1), this.F(a)) };
    Q.mx = function() { return this.ca };
    Q.Cx = function() { return this.Te };

    function Ed(a, b) { var c = 0;
        b && (c = b.mb); if (a && 0 < a.length) { var d = a.split(";");
            a = d[Math.floor(Math.random() * d.length)] } if (isNaN(a))
            for (var c = !1, d = this.ca, e = 0; e < d.length; e++) { for (var f = d[e], g = f.cr, h = 0; h < g.length; h++) { var k = g[h]; if (k.cb === a) { a = k.Dq + f.mb;
                        c = !0; break } } if (c) break } else a = 1 * a + c; return parseFloat(a) } Q.lB = function() { this.Dn = !0 };
    Q.Mh = function(a, b) { var c = this.ca; if (0 > a) return console.warn("Go to page err: aim page id " + a + " is less than 0."); if (a > c.length - 1) return console.warn("Go to page err: aim page id " + a + " is greater than max page " + (c.length - 1));
        c = c[a].mb;
        this.Ch.Ns = b;
        this.rc(c, null) };
    Q.Xa = function() { return !0 };
    Q.rc = function(a, b) { this.Le || (this.mf = Math.floor(a) != this.Ea, this.dg = !0, this.rd = a = Ed.bind(this)(a, b), this.Hi = null, this.Hb = !1) };
    Q.za = function(a) { this.Ea = Math.floor(a);
        this.ee = a;
        this.Ik() };
    Q.Ik = function() { var a = this.Ea;
        this.$a && a > this.$a.mb && a < this.$a.mb + this.$a.Ac || (a = this.ca[this.Wj(this.Ea)], a != this.$a && (this.$a = a, this.F(this.ry))) };
    Q.Vd = function(a, b) { this.Le || (this.mf = Math.floor(a) != this.Ea, this.dg = !1, this.rd = a = Ed.bind(this)(a, b), this.Hb || (this.Xm = -Infinity, this.Hi = a), this.Hb = !0) };
    Q.lv = function(a) { if (!this.Fn) { a = this.ee + a; if (this.Hb || this.mf || this.Le) return !1; if (Math.floor(a) > this.Te - 1) this.Ib ? this.rc(0, null) : this.stop(0);
            else { var b = this.dg,
                    c = this.mf;
                this.rc(a, null);
                this.mf = c;
                this.dg = b } return !0 } };

    function Fd(a, b) {
        var c = a.rotate,
            d = a.left,
            e = a.top,
            f = a.width,
            g = a.height,
            h = a.rawWidth,
            k = a.rawHeight;
        null == h && (h = f);
        null == k && (k = g);
        var l = null == a.rotateCenterX ? h / 2 : a.rotateCenterX,
            m = null == a.rotateCenterY ? k / 2 : a.rotateCenterY,
            n = f / h,
            p = g / k;
        isNaN(n) && (n = 1);
        isNaN(p) && (p = 1);
        b.X = f;
        b.Y = g;
        b.na = h;
        b.la = k;
        b.oi = a.filters;
        b.qm(b.oi);
        f > b.th && (b.th = f);
        g > b.sh && (b.sh = g);
        f = a.vF;
        g = a.hF;
        if (f || g) b.Uc = new B(g ? -1 : 1, 0, 0, f ? -1 : 1, g ? h : 0, f ? k : 0);
        b.le(new Mc);
        h = b.C;
        k = h.T;
        k.Lb(n, p);
        k.L(-l, -m);
        k.nc(c);
        k.L(l, m);
        k.L(d, e);
        f = a.rotateX || 0;
        g =
            a.rotateY || 0;
        k.Yc = f;
        k.lc = g;
        k.Cc = a.pers || 25;
        if (f || g) k.Za(), k.nb(-d, -e), k.nb(-l, -m), k.Sd(-c), k.rf(k.lc), k.zh(k.Yc), k.Me(b.Ug, k.Cc), k.Sd(c), k.nb(l, m), k.nb(d, e);
        k.Kb = c;
        k.$b = l;
        k.ac = m;
        k.kc = d;
        k.mc = e;
        k.jd = n;
        k.kd = p;
        c = h.ka;
        c.oa = a.alpha;
        c.he = a.fillInfo;
        c.Pb = a.strokeColor;
        c.Ie = a.lineWidth;
        c = h.Nc;
        c.yd = a.letterSpace;
        c.ud = a.fontSize;
        c.zd = a.textLineHeight
    }
    Q.sz = function() {
        var a = this;
        a.Le && (a.Le = !1);
        if (!a.Fn) {
            null == a.rd && (a.rd = a.ee);
            a.F(a.ov);
            var b = a.rd;
            a.Ea = Math.floor(b);
            a.ee = b;
            a.Hb = !a.dg;
            a.Ik();
            var c = a.Ea,
                d = a.ee;
            if (a.Hb) var e = a.La().Hh - a.Xm + d;
            var f = a.Gq(c),
                g = a.dn,
                h = a.dn = {};
            null == f && (f = { eh: [] });
            for (var k = f.eh, f = a.Kl.some(function(a) { if (a.ed == u.Yd) return a instanceof vc && -1 < k.indexOf(a.c) ? !0 : !1 }), l = a.Mc, m = k.length, n = null, p = {}, q = 0; q < m; q++) {
                var r = k[q],
                    v = r.l;
                delete g[v];
                h[v] = r;
                var x;
                if (r.Di) { var w = r.ss;
                    p[w] = a.qk[w] }!0 === r.pm ? r.Dc(!1) : x = r.Dc(!0);
                if (r.Wf) {
                    w =
                        l[v];
                    v = w.zc || {};
                    if (!a.Dn && a.Hb) { var y = w.Fm(c),
                            y = Math.min(y, e),
                            b = parseInt(y),
                            D = y;
                        y > n && (n = y) } else if (b = a.Hi, a.Dn || null == b) var b = c,
                        D = d;
                    else y = w.Fm(b), y > d ? (b = parseInt(y), D = y) : (a.Hi = null, b = c, D = d);
                    f && (D = Math.floor(w.Fm(c)));
                    if (r.nf) {
                        v = r.zc.length;
                        y = a.$a.mb;
                        for (w = 0; w < v && !(r.zc[w].id + y >= D); w++);
                        if (0 == w) v = w = r.zc[0], y = 0;
                        else if (w < v) {
                            var v = r.zc[w - 1],
                                w = r.zc[w],
                                H = new P.Np;
                            H.Th({ x: 1 });
                            var E = v.tween || "Linear.EaseNone";
                            H.Ys(P.map[E]);
                            b = v.ease;
                            (E = 0 <= ["custom", "Bezier.Ease"].indexOf(E)) && void 0 == b && (b = {});
                            if (E && !r.mm.length)
                                for (q =
                                    v.id; q < w.id; q++) r.mm.push(H.mo((q - v.id) / (w.id - v.id), b));
                            E = (D - v.id - y) / (w.id - v.id);
                            if (b) { var J = r.mm,
                                    I, S, wa, T, O = J.length,
                                    H = function(a, b) { for (var c, d = 0; d < O + 1; d++)
                                            if (S = d == O ? 1 : (J[d][a] || {}).x || 0, T = d == O ? 1 : (J[d][a] || {}).y || 0, S > b) { c = wa + (T - wa) * (b - I) / (S - I); break } else I = S, wa = T; return c },
                                    y = {};
                                void 0 == b["default"] && (y["default"] = H("default", E)); for (var R in b) y[R] = H(R, E) } else y = H.mo(E)
                        } else v = w = r.zc[w - 1], y = 1;
                        r.qC = y;
                        r.Uj && (b = r.fd, H = {}, b.nB(H, v.param, w.param, y), r.Gc && r.Gc({ guid: r.A.guid, curve: H.curve, param: H }), r.F(r.ea),
                            Fd(H, r))
                    } else if (r.ke)(v = r.ke.xs()) && r.le(v);
                    else if (v = v[b] || r.C, w = w.lA(b + 1), v && w) {
                        y = D - b;
                        H = new Mc;
                        b = v.ka.oa;
                        H.ka.oa = y * (w.ka.oa - b) + b;
                        var b = H.T,
                            E = w.T,
                            M = v.T;
                        null != E.Kb && null != M.Kb && (b.Kb = y * (E.Kb - M.Kb) + M.Kb, b.$b = y * (E.$b - M.$b) + M.$b, b.ac = y * (E.ac - M.ac) + M.ac, b.kc = y * (E.kc - M.kc) + M.kc, b.mc = y * (E.mc - M.mc) + M.mc, b.jd = y * (E.jd - M.jd) + M.jd, b.kd = y * (E.kd - M.kd) + M.kd, b.Yc = y * (E.Yc - M.Yc) + M.Yc, b.lc = y * (E.lc - M.lc) + M.lc, b.Cc = y * (E.Cc - M.Cc) + M.Cc);
                        if (null != E.Kb && null != M.Kb) {
                            if (window.Mugeda.oC = window.toString(b.Z), b.Lb(b.jd, b.kd),
                                b.L(-b.$b, -b.ac), b.nc(b.Kb), b.L(b.$b, b.ac), b.L(b.kc, b.mc), b.Yc || b.lc) b.Za(), b.nb(-b.kc, -b.mc), b.nb(-b.$b, -b.ac), b.Sd(-b.Kb), b.rf(b.lc), b.zh(b.Yc), b.Me(r.Ug, b.Cc), b.Sd(b.Kb), b.nb(b.$b, b.ac), b.nb(b.kc, b.mc)
                        } else b.Z = y * (E.Z - M.Z) + M.Z, b.ba = y * (E.ba - M.ba) + M.ba, b.qa = y * (E.qa - M.qa) + M.qa, b.fa = y * (E.fa - M.fa) + M.fa, b.ja = y * (E.ja - M.ja) + M.ja, b.ma = y * (E.ma - M.ma) + M.ma;
                        b = new Ad;
                        b.Jo(H, v, w, y);
                        r.qm(H.filters);
                        r.le(H)
                    } else r.le(v)
                }
                r.of && r.of();
                r.update({ Un: 1 != x || r.nr });
                r.nr = !1
            }
            Object.keys(g).forEach(function(a) { g[a].Dc(!1) });
            Object.keys(p).forEach(function(b) { Gd.bind(a)(void 0 === D ? d : D, p[b]) });
            a.Ea != a.pk && (a.rd = null, a.mf = !1, a.ey = null);
            a.pk = a.Ea
        }
    };

    function Gd(a, b) {
        var c = 0,
            d = this.Mc[b[0].l],
            e = (a - d.Kc) / (d.ic - d.Kc);
        b.forEach(function(a) { if ("Text" == a.I) c += (a.ak || a.xb()).length;
            else if (a.A.curve && a.A.curve.points) { var b = a.A.curve.closed;
                c += a.A.curve.points.length;
                b || c-- } });
        var f = 0;
        b.forEach(function(a) {
            null == a.ak && "Text" == a.I && (a.ak = a.xb());
            if ("Text" == a.I) { var b = a.ak || a.xb(),
                    d = f / c;
                f += b.length; var l = f / c;
                d > e ? a.wa("") : l < e ? a.wa(b) : (d = (e - d) / (l - d), a.wa(b.substr(0, Math.round(b.length * d)))) } else a.A.curve && a.A.curve.points && (b = a.A.curve.points.length, a.A.curve.closed ||
                b--, d = f / c, f += b, l = f / c, d = d > e ? -1 : l < e ? 1 : (e - d) / (l - d), b = d * b, (l = a.A.param.lineType) && "solid" != l ? (d = a.A.curve, d = { closed: d.closed, points: JSON.parse(JSON.stringify(d.points)) }, l = Math.floor(0 > b ? 0 : b), b -= l, l < d.points.length && (kd.EB(d.points, l, b), 0 < b && l++, d.points = d.points.slice(0, l + 1), d.closed = !1), a.Gc({ guid: a.A.guid, curve: d, param: a.A.param })) : a.Oe = d, a.F(a.ea))
        })
    }
    Q.Gq = function(a) { return this.Qj[a] };
    Q.vb = function(a) { Dd.f.vb.apply(this, arguments);
        this.dn[a.l] = a };
    Q.wi = function(a) { var b = this.Mc[a.l]; if (b) { a = b.Kc; for (var b = b.ic, c = this.ca, d = c.length, e = 0; e < d; e++) { var f = c[e]; if (a >= f.mb && a < f.mb + f.Ac) return b < f.mb + f.Ac ? e : Infinity } } else return Infinity; throw Error("object not belong to this movieClip"); };
    Q.Wj = function(a) { for (var b = this.ca, c = b.length, d = 0; d < c; d++) { var e = b[d]; if (a >= e.mb && a < e.mb + e.Ac) return d } return -1 };
    Q.j = function() {};
    Q.B = function() {};
    Q.play = function() { this.Le || (this.mf = !1, this.dg = !0, this.rd = this.ee, this.Hb = !1) };
    Q.ga = function() {};
    Q.stop = function() { this.Le || (this.dg = this.mf = !1, this.rd = this.ee, this.Hb || (this.Xm = this.La().Hh, this.Hi = this.Ea), this.Hb = !0) };
    Q.ao = function(a, b) {
        function c() { var a = new z("framesLoadedChange");
            d.F(a);
            this.Fa("framesLoadedChange", c) } var d = this,
            e = d.si; if (d.Te !== d.Pj)
            for (var f = a; f <= b; f++)
                if (0 < e[f]) return !1; var g = [],
            h = d.Mc;
        d.children.forEach(function(c) { if (c instanceof ed) { var d = h[c.l];
                d.Kc < a || d.ic > b || (c instanceof Dd ? g.push(c) : c.jt(Dd, Dd)) } });
        e = g.length; for (f = 0; f < e; f++) { var k = g[f]; if (!1 === k.ao(0, k.Te - 1)) return k.M("framesLoadedChange", c), !1 } return !0 };
    Q.removeChild = function(a) { Dd.f.removeChild.apply(this, arguments);
        delete this.Mc[a.l]; var b = this.Qj,
            c; for (c in b) b.hasOwnProperty(c) && b[c].Zt(a) };
    Q.rq = function(a, b) {
        function c() { if (!(1 > e++)) { d.Fa("enterframe", c); if (d.cc().V.Sm) return a(!1);
                b();
                a(!0) } } var d = this,
            e = 0;
        d.M("enterframe", c) };
    t.ra(Q, ["gotoAndPlay", Q.rc, "gotoAndStop", Q.Vd, "nextFrame", Q.j, "nextScene", Q.B, "play", Q.play, "prevFrame", Q.ga, "stop", Q.stop, "removeChild", Q.removeChild]);
    t.H("Display.movieClip", Dd);
    var Hd = Dd;

    function Id(a, b, c) { Id.f.constructor.apply(this, arguments);
        this.ua = b;
        this.J = c } t.extend(Id, ia);
    Id.prototype.D = function() { if (this.Ia()) { var a = this.J; if (!this.ua) { var b = this.da.c.V.ia;
                this.ua = (b.Eb[a.l] || b).ua } this.ua ? (this.ua.Qb = null, Id.f.D.apply(this, arguments), this.J.play(20)) : this.J.ke && this.J.ke.Ti("play") } };
    var Jd = Id;

    function Kd(a, b) { Kd.f.constructor.apply(this, arguments);
        this.Ep = a;
        this.ug = b } t.extend(Kd, ia);

    function Ld(a) {
        function b(a) { a = window.location.search.substr(1).match(new RegExp("(^|&)" + a + "=([^&]*)(&|$)")); return null != a ? decodeURIComponent(a[2]) : null } switch (a) {
            case 0:
                return b("nickname") || "\u5fae\u4fe1\u6635\u79f0";
            case 1:
                return b("avatar");
            case 2:
                return b("openid") } }
    var Md = null,
        Nd = Math.random().toString();
    Kd.prototype.D = function() {
        function a(a) { MugedaTools.message.show("\u6b63\u5728\u83b7\u53d6...");
            ajaxHelper({ url: p, type: "jsonp", success: function(b) { MugedaTools.message.close();
                    0 === b.status && (c(b.rankings), a && a(b.rankings)) } }) }

        function b(a, b) { return -1 < a.indexOf("_") ? g.sa(a.split("_")[0] + "/" + a.split("_")[1] + (b + 1), !0) : g.sa(a + (b + 1), !0) }

        function c(a) {
            for (var c = e.ranking_element, d = e.rankee_element, f = e.score_element, g = e.avatar_element, h = 0; h < a.length; h++) {
                var k = b(c, h),
                    l = b(d, h),
                    m = b(f, h),
                    n = b(g, h);
                k && k.wa(h +
                    1);
                l && l.wa(a[h].nickname);
                m && m.wa(a[h].score);
                n && n.Ri(a[h].avatar)
            }
        }
        var d = this,
            e = d.ug,
            f = e.ranking_target,
            g = d.da.c.V;
        Md || ajaxHelper({ url: "http://weika.mugeda.com/server/huodong.php/dataservice/get?response_type=jsonp&serviceId=" + f, type: "jsonp", success: function(a) { 0 == a.status ? Md = a : Mugeda.messageBox("\u83b7\u53d6\u914d\u7f6e\u4fe1\u606f\u5931\u8d25") } });
        if ("submitScore" == this.Ep) {
            var h, k, l;
            g.sa(e.score, !0) && (h = parseInt(g.sa(e.score, !0).xb()));
            g.sa(e.ranking_name, !0) && (k = g.sa(e.ranking_name, !0).xb());
            g.sa(e.ranking_avatar, !0) && (l = g.sa(e.ranking_avatar, !0).Ai());
            var m;
            e.on_board && (m = g.sa(e.on_board, !0));
            if (d.Ia()) {
                var n = { serviceId: "&serviceId=" + f, score: "&score=" + h };
                "\u5fae\u4fe1\u6635\u79f0" == Ld(0) ? n.openId = "&openId=" + Nd : n.openId = "&openId=" + Ld(2);
                n.nickname = k ? "&nickname=" + k : "";
                n.avatar = "&avatar=" + (l ? l : "http://card.mgd5.com/mugeda/user_large.jpg");
                MugedaTools.message.show("\u6b63\u5728\u63d0\u4ea4...");
                ajaxHelper({
                    url: "http://weika.mugeda.com/server/huodong.php/dataservice/ranking/submit_score?response_type=jsonp" +
                        n.serviceId + n.openId + n.score + n.nickname + n.avatar,
                    type: "jsonp",
                    success: function(a) {
                        MugedaTools.message.close();
                        if (0 === a.status) {
                            var b = d.$.yg;
                            b && b.D.apply(b);
                            m && (a.ranked ? m.wa("1") : m.wa("0"));
                            if (Md) {
                                a = { score: h, nickname: n.nickname.split("=")[1], avatar: n.avatar.split("=")[1], serviceId: "local", openId: Nd, id: "local" };
                                var c = localStorage.getItem(f);
                                if (c) {
                                    c = JSON.parse(c);
                                    b = c.res;
                                    c = c.time;
                                    if ("DESC" == Md.config.rankingRule) {
                                        for (var e = !1, g = 0; g < b.length; g++) a.openId == b[g].openId && (e = !0);
                                        if (e)
                                            for (e = 0; e < b.length; e++) {
                                                if (a.openId ==
                                                    b[e].openId && a.score > b[e].score) { b.splice(e, 1);
                                                    b.splice(e, 0, a); break }
                                            } else
                                                for (e = 0; e < b.length; e++)
                                                    if (a.score >= b[e].score) { b.splice(e, 0, a);
                                                        b.pop(); break }
                                    } else if ("ASC" == Md.config.rankingRule) { e = !1; for (g = 0; g < b.length; g++) a.openId == b[g].openId && (e = !0); if (e)
                                            for (e = 0; e < b.length; e++) { if (a.openId == b[e].openId && a.score < b[e].score) { b.splice(e, 1);
                                                    b.splice(e, 0, a); break } } else
                                                for (e = 0; e < b.length; e++)
                                                    if (a.score <= b[e].score) { b.splice(e, 0, a);
                                                        b.pop(); break } } localStorage.setItem(f, JSON.stringify({ res: b, time: c }));
                                    console.log(b)
                                }
                            }
                        } else Mugeda.messageBox("\u63d0\u4ea4\u5931\u8d25")
                    }
                })
            }
        } else if ("getRanking" ==
            this.Ep) {
            var p = "http://weika.mugeda.com/server/huodong.php/dataservice/ranking/get?response_type=jsonp&serviceId=" + f;
            (k = localStorage.getItem(f)) ? (k = JSON.parse(k), 30 < Date.parse(new Date) / 1E3 - k.time ? a(function(a) { var b = {};
                b.res = a;
                b.time = Date.parse(new Date) / 1E3;
                localStorage.setItem(f, JSON.stringify(b));
                localStorage.setItem(f, JSON.stringify(b)) }) : (console.log("\u6b63\u5728\u83b7\u53d6\u672c\u5730\u6570\u636e..."), c(k.res), console.log("\u83b7\u53d6\u6210\u529f.."))) : a(function(a) {
                var b = {};
                b.res = a;
                b.time =
                    Date.parse(new Date) / 1E3;
                localStorage.setItem(f, JSON.stringify(b))
            })
        }
    };
    var Od = Kd;

    function Pd(a, b) { Pd.f.constructor.apply(this, arguments);
        this.J = b;
        this.js = this.es = null } t.extend(Pd, ia);
    Pd.prototype.D = function() {
        var a = this;
        if (a.Ia()) {
            var b = a.es,
                c = a.js,
                d = function(d) {
                    var f = d.url;
                    d = d.localId;
                    var g = a.$.yg;
                    c && MugedaTools.translateVoice({ wx: window.wx, isShowProgressTips: 1, localId: d, callback: function(a) { c.wa(a);
                            g && g.D.apply(g) } });
                    if (b) { b.Tc.Pr(f); if (d = b.Tc.pa) { var h = b.Fr;
                            d.addEventListener("pause", h.lq.bind(h));
                            d.addEventListener("playing", h.mq.bind(h)) } MugedaTools.addCustomMugedaParameters(encodeURIComponent("m_" + b.A.guid), encodeURIComponent(f)) } d = Mugeda.getContentId();
                    f = "http://weika.mugeda.com/server/cards.php/userdata" +
                        ("?_tp=audio&_id=" + (b ? b.R : "") + "&_ts=" + (new Date).getTime() + "&crid=" + d.crid + "&mode=" + d.mode + "&response_type=jsonp&_url=" + encodeURIComponent(f));
                    ajaxHelper({ url: f, type: "jsonp", wA: "form_callback", Wd: function() {}, error: function() {} });
                    !c && g && g.D.apply(g)
                };
            "stop" == (((a.W || {}).param || {}).record_action || "start") ? MugedaTools.stopRecord({ wx: window.wx, success: function(a) { d(a) } }): MugedaTools.startRecord({
                wx: window.wx,
                isShowProgressTips: 1,
                success: function(a) { d(a) },
                error: function(a) {
                    console.log("Error in recording audio: " +
                        a.desc)
                }
            });
            Pd.f.D.apply(a, arguments)
        }
    };
    var Qd = Pd;

    function Rd(a) { Rd.f.constructor.apply(this, arguments);
        this.ed = a;
        this.me = this.W = null } t.extend(Rd, ia);
    Rd.prototype.D = function() { if (this.Ia()) { Rd.f.D.apply(this, arguments); var a = this.W.param,
                b = this.me; if (b && a) { var c = "loop" == a.segment_loop,
                    d = parseInt(a.segment_start),
                    a = parseInt(a.segment_end); if (d > a) var e = a,
                    a = d,
                    d = e;
                b.scene && (b.scene.setSegment("segment", d - 1, a - 1, c), b.scene.playSegment("segment")) } } };
    t.H("Action.ActionSegment", Rd);
    var Sd = Rd;

    function Td(a) { Td.f.constructor.apply(this, arguments);
        this.ed = a } t.extend(Td, ia);
    Td.prototype.D = function() { var a = this; if (a.Ia()) { Td.f.D.apply(a, arguments); var b = function(b) { var c = a.da;
                    c && (b = c.c.V.uk(b, "")); return b },
                c = (a.W || {}).param || {},
                d = c.share_title,
                e = c.share_desc,
                f = c.share_timeline || d,
                c = c.share_thumb,
                g = {};
            d && (g.title = b(d));
            e && (g.desc = b(e));
            f && (g.timelineTitle = b(f));
            c && (b = Mugeda.getMugedaObject() || {}, d = location.origin, (b.aniData || {}).metadata && (c = Mugeda.previewMode ? d + c : (b.resDir || _mrmcp.creative_path || "") + c), g.img_url = c);
            window.defineWechatParameters && window.defineWechatParameters(g) } };
    t.H("Action.ActionShare", Td);
    var Ud = Td;

    function Vd(a, b) { Vd.f.constructor.apply(this, arguments);
        this.J = b;
        this.Aq = null } t.extend(Vd, ia);
    var Wd = Vd.prototype;
    Wd.Ct = function(a) { this.Aq = a };
    Wd.D = function() { var a = this.$.yg,
            b = this.$.yo; if (this.Ia()) { var c = this.da.c.V.ia;
            this.W.extraData = this.Aq;
            this.W.mugeda = c;
            this.Xg = function(c) { c = c || {};
                0 == c.status ? a && a.D.apply(a) : void 0 !== c.status && b && b.D.apply(b) };
            Vd.f.D.apply(this, arguments) } else b ? b.D.apply(b) : Mugeda.messageBox("\u8868\u5355\u63d0\u4ea4\u6761\u4ef6\u672a\u6ee1\u8db3\u3002\u8bf7\u68c0\u67e5\u8f93\u5165\u540e\u91cd\u8bd5\u3002") };
    t.H("Action.ActionSubmit", Vd);
    var Xd = Vd;

    function Yd(a, b) { Yd.f.constructor.apply(this, arguments);
        this.J = b;
        this.hs = null } t.extend(Yd, ia);
    Yd.prototype.D = function() { this.Ia() && (this.hs.$i = this.W.param.timer_status, Yd.f.D.apply(this, arguments)) };
    t.H("Action.ActionTimer", Yd);
    var Zd = Yd;

    function $d(a, b) { $d.f.constructor.apply(this, arguments);
        this.J = b;
        this.fs = null } t.extend($d, ia);
    $d.prototype.D = function(a) { if (this.Ia()) { var b = this.W.param || {},
                c = this.fs.Kf;
            c && c.updateData(b.chart_data, a && a.Bc ? a.Bc : null);
            $d.f.D.apply(this, arguments) } };
    var ae = $d;

    function be(a, b) { be.f.constructor.apply(this, arguments);
        this.J = b } t.extend(be, ia);
    be.prototype.D = function(a) { if (this.Ia()) { var b = this.W,
                c = this.vf.nA ? this.vf.cj : null;
            c && c.doAction(b, a && a.Bc ? a.Bc : null);
            be.f.D.apply(this, arguments) } };
    var ce = be;

    function de(a, b) { de.f.constructor.apply(this, arguments);
        this.J = b;
        this.Jk = {} } t.extend(de, ia);
    de.prototype.D = function() { if (this.Ia()) { var a = (this.W.param || {}).control_mode; "play" === a ? this.Jk.qf() : "pause" === a ? this.Jk.cg() : "stop" === a && this.Jk.Xi();
            de.f.D.apply(this, arguments) } };
    var ee = de;

    function fe(a, b) { fe.f.constructor.apply(this, arguments);
        this.J = b } t.extend(fe, ia);
    var ge = fe.prototype;
    ge.yB = function() { var a = this,
            b = window.MugedaTools = window.MugedaTools || {},
            c = a.W.param || {},
            d = c.vote_value;
        b.vote && b.getVoteData(c.vote_target, function(b, c) { var g = c[d] || {};
            a.Kj && (a.Kj.text = g.count ? g.count : 0);
            a.Kk && (a.Kk.text = g.voted ? 1 : 0) }) };
    ge.D = function(a) { var b = this; if (b.Ia()) { var c = b.W.param || {},
                d = window.MugedaTools = window.MugedaTools || {};
            d.vote && d.vote({ serviceId: c.vote_target, value: c.vote_value }, function(a) { if (0 == a.status) { var d = b.$.yg;
                    d && d.D.apply(d);
                    a = (a.result || {})[c.vote_value] || {};
                    b.Kj && (b.Kj.text = a.count ? a.count : 0);
                    b.Kk && (b.Kk.text = a.voted ? 1 : 0) } else(a = b.$.yo) && a.D.apply(a) });
            fe.f.D.apply(b, arguments) } };
    var he = fe;

    function ie(a, b) { ie.f.constructor.apply(this, arguments);
        this.J = b } t.extend(ie, ia);
    ie.prototype.D = function(a) { if (this.Ia()) { var b = this.vf.oA ? this.vf.Pn : null;
            b && b.reset();
            ie.f.D.apply(this, arguments) } };
    var je = ie;

    function ke() {} ke.pb = {};
    ke.Pt = {};
    ke.Oi = function(a, b, c) { ke.pb[a] = b;
        c && (ke.Pt[a] = 1) };
    ke.xA = function(a) { var b = !1;
        ke.Fl(a, function(a) { ke.Pt[a] && (b = !0) }, !0, !1); return b };
    ke.Lg = function(a) { if (ke.pb[a]) return ke.pb[a].apply(this, Array.prototype.slice.call(arguments, 1)) };
    ke.Fl = function(a, b, c, d, e) {
        d = !1 !== d;
        return a.replace(/P\{\{(.+?)\}\}/g, function(a, g) {
            for (var h = g.split("|"), k = null, l = 0; l < h.length; l++) {
                for (var m = h[l], n = [], p = 0;;) { var q = m.indexOf(":", p); if (-1 == q) break;
                    p = q + 1; "\\:" != m.substr(q - 1, 2) && (n.push(m.substr(0, q)), m = m.substr(q + 1), p = 0) } n.push(m);
                n = n.map(function(a) { return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").replace(/\\(.)/g, "$1") });
                n.splice(1, 0, k);
                n.push(e);
                if (ke.pb[n[0]]) d && (k = ke.pb[n[0]].apply(this, n)), c && b.apply(this, n);
                else if (d || c) k = b.apply(this,
                    n), d || (k = null)
            }
            return k
        })
    };
    t.ra(ke, ["parseMacroText", ke.Fl, "regFunction", ke.Oi]);
    t.H("Utils.Macro", ke);

    function le() {} le.Ng = {};
    le.ld = function(a, b) { le.Ng[a] = b };
    le.Dp = {};
    le.md = function(a, b) { le.Dp[a] = b };
    le.PA = function(a) { var b = Object.keys(le.Ng).filter(function(b) { return a instanceof le.Ng[b] }); if (b.length) return le.Dp[b[0]] };
    le.zl = function(a) { return le.Ng[a] };
    le.xp = {};
    le.ln = function(a, b) { le.xp[a] = b };
    le.Rq = function(a) { return le.xp[a] };
    t.H("Utils.Plugin", le);
    t.ra(le, ["registerDisplayObjectClass", le.ld, "registerRenderObjectClass", le.md]);

    function me() { me.f.constructor.apply(this, arguments);
        this.lb = this.Zr = this.Va = null;
        t.oc(this, ["bitmapData", this.Md, this.Td, "Smoothing", this.j, this.B]) } t.extend(me, Yc);
    var ne = me.prototype;
    ne.Md = function() { return this.Va };
    ne.Td = function(a) { this.Va = a;
        this.F(this.ea) };
    ne.j = function() { return this.Zr };
    ne.B = function(a) { this.Zr = a };
    t.H("Display.Bitmap", me);
    var oe = me;

    function pe() { pe.f.constructor.apply(this, arguments);
        this.pa = null;
        this.Hf = !1;
        this.Ib = this.jq = this.kq = null;
        this.I = "audio";
        this.bi = {};
        this.lb = [] } t.extend(pe, oe);
    var qe = oe.prototype;
    qe.pv = function(a, b) { this.bi[a] ? this.bi[a].push(b) : this.bi[a] = [b] };
    qe.Ek = function(a) { this.bi[a] ? this.bi[a].forEach(function(a) { a.D() }) : 0 };
    t.H("Display.AudioControl", pe);

    function re() { re.f.constructor.apply(this, arguments);
        this.ne = this.hc = this.Gv = this.Jj = null;
        this.Qa = re.Oa.IDLE } t.extend(re, Rc);
    re.Oa = { Vh: -1, IDLE: 0, Mg: 1, LOADED: 2 };
    t.H("Display.LoaderInfo", re);
    var se = re;

    function te() { te.f.constructor.apply(this, arguments);
        this.Jj = null;
        this.xa = new se } t.extend(te, cd);
    te.prototype.Xc = function(a) { a.Xc(this) };
    t.H("Display.Loader", te);
    var ue = te,
        ve = 0;

    function we() { this.l = "r" + ve++;
        this.Ja = null;
        this.hc = new ue };

    function xe(a) { xe.f.constructor.apply(this, arguments);
        this.Ja = a;
        this.rk = 0;
        this.Ul = null;
        this.Ij = this.dj = !1;
        this.Tf = this.ff = null;
        this.Ib = !1;
        this.Hb = !0;
        this.wr = null;
        this.nm = !1;
        this.eg = null;
        this.lk = !1;
        this.hm = 1;
        this.di = [];
        t.oc(this, ["src", this.Ai, this.Ri, "currentTime", this.Rj, this.Ay, "loop", this.Am, this.zk, "volume", this.Ex, this.fz]);
        t.ob(this, ["readyState", this.dx, "paused", this.$w, "duration", this.ow, "ended", this.qw]) }
    var ye = null;
    if (window.AudioContext || window.webkitAudioContext) var ze = xe.za = function() { ye || (ye = new(window.AudioContext || window.webkitAudioContext)); return ye };
    t.extend(xe, Rc);
    var Ae = xe.prototype;
    Ae.qw = function() { return this.nm };
    Ae.M = function(a) { "timeupdate" !== a || this.lk || (this.lk = !0);
        xe.f.M.apply(this, arguments) };
    Ae.Fa = function(a) { xe.f.Fa.apply(this, arguments); "timeupdate" !== a || this.te(a) || (this.lk = !1) };
    Ae.Ex = function() { return this.hm };
    Ae.fz = function(a) { this.hm = a;
        this.Tf && (this.Tf.gain.value = a) };
    Ae.Am = function() { return this.Ib };
    Ae.zk = function(a) { this.Ib = a };
    Ae.Rj = function() { return this.Hb ? this.eg : ze().currentTime - this.wr };
    Ae.Ay = function(a) { var b = this.Hb;
        a != this.Rj() && (this.cg(), this.eg = a, b || this.qf(), this.lk && this.F(new z("timeupdate"))) };
    Ae.Ai = function() { return this.Ja };
    Ae.Ri = function(a) { a != this.Ja && (this.Ja = a, this.rk = 0, this.Ij && this.Nj()) };
    Ae.dx = function() { return this.rk };
    Ae.ow = function() { var a = this.Ul; if (a) return a.duration };
    Ae.Xc = function() { var a = this,
            b = a.Ja,
            c = new XMLHttpRequest;
        c.onload = function() { var b = c.response; if (K.Sa.pd) { var e = new Uint8Array(b.slice(0, 10));
                73 === e[0] && 68 === e[1] && 51 === e[2] && (b = b.slice(2097152 * (e[6] & 127) + 16384 * (e[7] & 127) + 128 * (e[8] & 127) + (e[9] & 127)));
                e = (new Uint8Array(b)).indexOf(255); - 1 !== e && (b = b.slice(e)) } ze().decodeAudioData(b, function(b) { a.Ul = b;
                a.rk = 4;
                a.eg = 0;
                a.F(new z("canplay"));
                a.F(new z("canplaythrough")) }, function(a) { console.error(a) }) };
        c.open("GET", b, !0);
        c.responseType = "arraybuffer";
        c.send() };
    Ae.Fv = function(a) { var b = this;
        b.ff = a;
        b.Tf || (b.Tf = ze().createGain(), b.Tf.connect(ze().destination), b.Tf.gain.value = b.hm);
        a.buffer = b.Ul;
        a.connect(b.Tf);
        b.Ij = !0;
        b.ff = a;
        a.onended = function() { b.ff == this && (b.Nj(), b.Hb || (b.eg = 0, b.Hb = !0, b.Ib ? b.qf() : (b.F(new z("pause")), b.nm = !0))) } };
    Ae.Nj = function() { this.ff.disconnect();
        this.ff = null;
        this.Ij = !1 };
    Ae.qf = function() { var a = this;
        a.nm = !1; if (a.Hb) { var b = ze().createBufferSource();
            a.di.push(b); if (!a.dj) { var c = function() { for (; a.di.length;) { var b = a.di.pop();
                        a.Ij || a.Fv(b);
                        b = null != a.eg ? a.eg : a.Rj();
                        a.ff.start(0, b); if ("running" !== ze().state) { if (a.Nj(), !a.di.length) break } else { a.wr = ze().currentTime - b;
                            a.Hb = !1;
                            a.F(new z("playing"));
                            a.di = []; break } } }; if (0 === a.rk) { a.dj = !0;
                    a.Xc(); var d = function() { a.Fa("canplaythrough", d);
                        a.dj && (c(), a.dj = !1) };
                    a.M("canplaythrough", d) } else c() } } };
    Ae.cg = function() { this.dj = !1;
        this.ff && (this.ff.stop(), this.eg = this.Rj(), this.Hb = !0, this.F(new z("pause")), this.Nj()) };
    Ae.$w = function() { return this.Hb };
    t.ra(Ae, ["load", Ae.Xc, "play", Ae.qf, "pause", Ae.cg, "addEventListener", Ae.M]);
    var Be = xe,
        Ce = K.Sa.Mk && K.ek() && null != (new Audio).play(),
        De = !0;
    if (window.audio) { var De = !0,
            Ee = new Audio;
        Ee.volume = .2;
        .2 != Ee.volume && (De = !1);
        Ee = void 0 }

    function Fe() { Fe.f.constructor.apply(this, arguments);
        this.pa = this.cb = this.Ja = null;
        this.Ib = !1;
        this.vq = !0;
        this.Zq = this.gd = !1;
        t.oc(this, ["loop", Ge.Am, Ge.zk]);
        this.io = !1;
        this.Zs = this.Cv.bind(this);
        this.Ka = !1 } t.extend(Fe, we);
    var Ge = Fe.prototype;
    Ge.Am = function() { return this.Ib };
    Ge.zk = function(a) { this.pa && (this.pa.loop = a);
        this.Ib = a };
    Ge.Cv = function() { if (0 == this.ab()) { this.Dc(!1); var a = this;
            do a = a.G; while (1 != a.l);
            a.Fa("enterframe", this.Zs);
            this.io = !1 } };
    Ge.Dc = function(a) { var b = this.pa; if (b && this.Ka != a)
            if (this.Ka = a) try { if (b.currentTime = 0, b.loop = this.Ib, b.play(), !this.io) { a = this;
                    do a = a.G; while (1 != a.l);
                    a.M("enterframe", this.Zs);
                    this.io = !0 } } catch (c) { console.log("play problem") } else b.pause() };
    Ge.Pr = function(a, b) {
        var c = this;
        c.Ja = a;
        window.Audio || (window.Audio = function(a) { this.play = function() {};
            this.pause = function() {};
            this.load = function() {};
            this.loop = !0;
            this.src = a;
            this.paused = !1;
            this.addEventListener = function() {};
            this.removeEventListener = function() {} });
        var d = window.weixinAudioLoader;
        if (d) { var e = Object.keys(d).filter(function(b) { if ((b = b.match(/^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?((\/?[^\?#]+)?\??([^#]+)?#?(\w*))/)) && b[8] && -1 < a.indexOf(b[8])) return !0 }); if (e[0]) var f = c.pa = d[e[0]] }
        if (!f &&
            (d = c.Zq, Ce && b || !De && d || K.Sa.pd && d ? f = c.pa = new Be(a) : (f = c.pa = new window.Audio, f.src = a), K.ek())) { var g = f.play;
            f.play = function() { K.Sa.pd && f instanceof Be && "running" !== Be.za().state || g.call(f);
                c.gd || (c.gd = !0, K.Gm(function(a) { a.invoke("getNetworkType", {}, function() { if (c.gd) { var a = g.call(f); if (a) a.then(function() {})["catch"](function() {});
                            c.gd = !1 } }) })) }; var h = f.pause;
            f.pause = function() { c.gd = !1;
                h.call(f) };
            f.addEventListener("pause", function() { c.gd = !1 }) } f.loop = c.Ib
    };
    Ge.Xc = function() {
        var a = this,
            b = a.hc.xa;
        if (b.Qa != se.Oa.Mg && b.Qa != se.Oa.LOADED) {
            var c = window.webkitURL || window.URL,
                d = function() { t.br(a.Ja + ".base64.js", "MUGEDA_DATA_CALLBACK_" + (a.Ja.match(/[^/\\\\]+$/) || [""])[0].replace(/[^A-Za-z0-9]/g, "$"), function(c, d) { c ? (b.Qa = se.Oa.Vh, k = new z("ioError", !1), b.F(k)) : (b.Qa = se.Oa.LOADED, k = new z("complete", !1), b.F(k), a.pa.src = d) }) },
                e = function() {
                    function c() { a.pa.removeEventListener("canplay", d);
                        a.pa.removeEventListener("error", c);
                        b.Qa = se.Oa.Vh;
                        k = new z("ioError", !1);
                        b.F(k) }

                    function d() { a.pa.removeEventListener("canplay", d);
                        a.pa.removeEventListener("error", c);
                        b.Qa = se.Oa.LOADED;
                        k = new z("complete", !1);
                        b.F(k) } a.pa.load();
                    a.pa.addEventListener("canplay", d);
                    a.pa.addEventListener("error", c)
                },
                f = navigator.userAgent.toLowerCase();
            if (a.pa instanceof Be) e();
            else if (-1 == f.indexOf("tbs") && -1 == f.indexOf("crosswalk") && K.Sa.Mk && 5 > 1 * (K.Sa.version || "4").charAt(0)) b.Qa = se.Oa.Vh, k = new z("ioError", !1), b.F(k);
            else if (c && -1 == f.indexOf("crosswalk"))
                if (K.Sa.Af || K.Sa.Xe) {
                    var g = new XMLHttpRequest;
                    g.onreadystatechange = function() { if (4 == g.readyState)
                            if (b.Qa = se.Oa.LOADED, 200 == g.status) { var e = c.createObjectURL(this.response);
                                a.pa.src = e;
                                b.Qa = se.Oa.LOADED;
                                e = new z("complete", !1);
                                b.F(e) } else d() };
                    g.open("GET", a.Ja, !0);
                    try { g.responseType = "blob", g.send() } catch (h) { d() } b.Qa = se.Oa.Mg;
                    var k = new z("open", !1);
                    b.F(k)
                } else e();
            else d()
        }
    };
    Ge.M = function() { this.pa.addEventListener.apply(this.pa, arguments) };
    Ge.Fa = function() { this.pa.removeEventListener.apply(this.pa, arguments) };
    t.ra(Ge, ["addEventListener", Ge.M, "removeEventListener", Ge.Fa]);
    var He = Fe;
    var Ie = me;

    function Ke() { Ke.f.constructor.apply(this, arguments);
        this.bb = null } t.extend(Ke, we);
    Ke.Pg = new Image;
    Ke.Pg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    Ke.prototype.Xc = function() {
        var a = this,
            b = a.hc.xa,
            c = !1;
        if (b.Qa != se.Oa.Mg && b.Qa != se.Oa.LOADED) {
            var d = b.ne = a.Ja;
            b.Gv = "image/*";
            var e = new Image;
            window._mrmcp && (window._mrmcp.cros || window._mrmcp.previewMode) && (e.crossOrigin = "Anonymous");
            e.src = d;
            var f = (a.hc.Jj = b.Jj = new Ie).Va = new Ke;
            f.Ja = d;
            f.bb = e;
            var g = function() { a.bb = f.bb; if (!c) { e.removeEventListener("load", g);
                        b.Qa = se.Oa.LOADED; var d = new z("complete", !1);
                        b.F(d) } },
                h = function() {
                    a.bb = f.bb;
                    if (!c)
                        if ("anonymous" === this.crossOrigin) {
                            var d = this;
                            console.info("\u56fe\u7247\u8de8\u57df\u52a0\u8f7d\u5931\u8d25\uff0c\u5c1d\u8bd5\u975e\u8de8\u57df\uff0c\u4e00\u4e9b\u4f9d\u8d56\u8de8\u57df\u7684\u529f\u80fd\u53ef\u80fd\u5931\u6548\uff1a" +
                                this.src);
                            var g = this.src;
                            this.src = "";
                            this.crossOrigin = void 0;
                            c = !0;
                            setTimeout(function() { d.src = g;
                                c = !1 })
                        } else { e.removeEventListener("error", h);
                            b.Qa = se.Oa.Vh; var m = new z("ioError", !1);
                            b.F(m) }
                };
            e.addEventListener("load", g);
            e.addEventListener("error", h);
            d = new z("open", !1);
            b.Qa = se.Oa.Mg;
            b.F(d)
        }
    };
    t.H("Display.BitmapData", Ke);
    var Le = Ke;

    function Me() { this.eh = [] }
    var Ne = Me.prototype;
    Ne.Lk = function(a) { var b = this.eh; - 1 == b.indexOf(a) && b.push(a) };
    Ne.Zt = function(a) { var b = this.eh;
        a = b.indexOf(a); - 1 < a && b.splice(a, 1) };

    function Oe(a, b, c, d) { Oe.f.constructor.apply(this, arguments);
        this.ri = a;
        this.Ja = b;
        this.Fj = c || "";
        this.lm = d;
        this.Wg = null;
        this.gq = !1 } t.extend(Oe, we);
    Oe.B = function(a) { return a.replace(/(.)(?=.*\1)/g, "") };
    Oe.Cm = function(a, b, c) { return "//weika.mugeda.com/server/cloudfont.php?font=" + a + "&content=" + encodeURI(b) + "&format=" + (c || "ttf") + "&api_type=3" };
    var Pe = {};
    Oe.za = function() { Object.keys(Pe).forEach(function(a) { Pe[a].zt = Pe[a].length }) };
    Oe.j = function(a, b, c, d) { null == d && (d = !0);
        null == Pe[a] && (Pe[a] = []); var e = Pe[a];
        c = Oe.B(c); for (h = 0; h < e.length; h++) { for (var f = e[h], g = 0; g < c.length && -1 != f.Fj.indexOf(c.charAt(g)); g++); if (g == c.length) return f } if (0 != e.length && d) { for (var h = e.length - 1; h >= (e.zt || 0) && (!e[h].lm || e[h].Xj() != se.Oa.IDLE); h--); if (h == (e.zt || 0) - 1) return e.push(new Oe(a, b, c, !0)), e[e.length - 1];
            e[h].Ux(c); return e[h] } a = new Oe(a, b, c, d);
        e.push(a); return a };
    Oe.ga = function(a, b, c) { if (-1 < b.indexOf("cloudfont.php")) var d = a.lastIndexOf("-"),
            e = a.substr(0, d),
            d = a.indexOf("-"),
            e = e.substr(d + 1);
        else var d = a.lastIndexOf("-"),
            e = a.substr(0, d),
            d = a.indexOf("-"),
            e = e.substr(d + 1),
            f = !1; return Oe.j(e, b, c, f) };
    var Qe = Oe.prototype;
    Qe.Cm = function(a) { return Oe.Cm(this.ri, this.Fj, a) };
    Qe.Uf = function() { return "c-" + this.ri + "-" + this.l };
    Qe.j = function() { return "font/*" };
    Qe.Ux = function(a) { this.Fj = Oe.B(this.Fj + a) };
    Qe.Xj = function() { return this.hc.xa.Qa };
    Qe.Xc = function() {
        var a = this,
            b = a.hc.xa,
            c = a.Xj();
        if (c != se.Oa.Mg && c != se.Oa.LOADED) {
            var d = a.lm ? a.Cm() : a.Ja,
                e = function() { a.lm ? (b.Qa = se.Oa.Vh, g = new z("ioError", !1), b.F(g), F.Sp(a.Uf(), 'url("' + d + '")')) : t.br(a.Ja + ".base64.js", "MUGEDA_DATA_CALLBACK_" + (a.Ja.match(/[^/\\\\]+$/) || [""])[0].replace(/[^A-Za-z0-9]/g, "$"), function(c, d) { c ? g = new z("ioError", !1) : (a.Wg = d, b.Qa = se.Oa.LOADED, g = new z("complete", !1));
                        b.F(g) }) },
                f = new XMLHttpRequest;
            f.onreadystatechange = function() {
                if (4 == f.readyState)
                    if (200 == f.status) {
                        var c = f.response,
                            d = new window.FileReader;
                        d.readAsDataURL(c);
                        d.onload = function() { a.Wg = this.result;
                            b.Qa = se.Oa.LOADED; var c = new z("complete", !1);
                            b.F(c) }
                    } else e()
            };
            var g = new z("open", !1);
            b.Qa = se.Oa.Mg;
            b.F(g);
            try { f.open("GET", d, !0), f.responseType = "blob", f.send() } catch (h) { setTimeout(e) }
        }
    };
    Qe.Ol = function() { this.Wg && !this.gq && (F.Sp(this.Uf(), 'url("' + this.Wg + '")'), this.gq = !0) };
    t.H("Display.FontData", Oe);
    var Re = Oe;

    function Se() { Se.f.constructor.apply(this, arguments) } t.extend(Se, Yc);
    t.H("Display.Form", Se);

    function Te() { Te.f.constructor.apply(this, arguments);
        this.Dq = 0;
        this.cb = "" } t.extend(Te, Rc);
    t.H("Display.FrameLabel", Te);
    var Ue = Te;

    function Ve() {} Ve.Bf = 6;
    Ve.Cz = 3;
    Ve.np = 2;
    Ve.Og = 1;
    Ve.pA = 0;
    Ve.Qp = 5;
    Ve.Rp = 4;
    t.ra(Ve, ["CUBIC_CURVE_TO", Ve.Bf, "CURVE_TO", Ve.Cz, "LINE_TO", Ve.np, "MOVE_TO", Ve.Og, "NO_OP", Ve.pA, "WIDE_LINE_TO", Ve.Qp, "WIDE_MOVE_TO", Ve.Rp]);
    t.H("Display.GraphicsPathCommand", Ve);

    function We() {} We.Yo = "evenOdd";
    We.hA = "nonZero";
    t.ra(We, ["EVEN_ODD", We.Yo, "NON_ZERO", We.hA]);
    t.H("Display.GraphicsPathWinding", We);

    function Xe() { Xe.f.constructor.apply(this, arguments);
        this.ne = null } t.extend(Xe, Yc);
    var Ye = Xe.prototype;
    Ye.Bi = function() { return this.ne };
    Ye.Ui = function(a) { var b = a != this.ne;
        this.ne = a;
        b && this.F(this.ea) };
    Ye.I = "IFrame";
    t.H("Display.IFrame", Xe);
    var Ze = Xe;

    function $e() { this.zc = {};
        this.Ni = {};
        this.A = this.dk = this.ic = this.Kc = null }
    var af = $e.prototype;
    af.Ly = function(a) { this.dk = a };
    af.Fm = function(a) { var b = this.dk; return null == b ? a : a <= b ? a : a > this.ic ? a : (a - b) / (this.ic - this.dk) * (this.ic - this.dk + 1) + b };
    af.tg = function(a, b, c) { var d = this.Kc,
            e = this.ic;
        this.zc[a] = b;
        void 0 !== c && (this.Ni[a] = c);
        this.zc[a] = b;
        this.Kc = null === d ? a : Math.min(a, d);
        this.ic = null === e ? a : Math.max(a, e) };
    af.lA = function(a) { return void 0 == this.Ni[a] ? this.zc[a] : this.Ni[a] };
    af.j = function() {};
    af.iA = function(a) { return this.zc[a] };

    function bf() { this.cr = [];
        this.R = this.cb = "";
        this.mb = this.Ac = 0;
        t.ob(this, ["startFrame", this.sx, "length", this.zm]) }
    var cf = bf.prototype;
    cf.sx = function() { return this.mb };
    cf.zm = function() { return this.Ac };
    t.H("Display.Scene", bf);

    function df() { df.f.constructor.apply(this, arguments);
        this.fd = new Ad;
        this.lb = null;
        this.Oe = 1;
        this.zc = [];
        this.oq = null;
        t.ob(this, ["graphics", this.Uj]) } t.extend(df, Yc);
    var ef = df.prototype;
    ef.I = "Shape";
    ef.Uj = function() { return this.fd };
    ef.ui = function(a, b) { return df.f.ui.call(this, a, this.fd.og / 2 * (b || 1)) };
    ef.Md = function() { return this.Va };
    ef.Td = function(a) { this.oq = a;
        this.Gc(null);
        this.F(this.ea) };
    ef.Rr = function(a) { for (var b = this.fd, c = b.Vb, d = 0; d < c.length; d++) { var e = c[d]; if (e instanceof td || e instanceof xd || e instanceof md) { c.splice(d, 1); break } } b.Ds(a, d);
        this.F(this.ea) };
    ef.Tr = function(a) { for (var b = this.fd, c = b.Vb, d = 0; d < c.length; d++) { var e = c[d]; if (e instanceof sd) { a = new td(a);
                e.om = a;
                b.Ge++; break } } this.F(this.ea) };
    ef.Gc = function(a, b) {
        function c(a) { if (a && a.points) { var c = a.points,
                    e = c.length,
                    f, g = [],
                    h = []; for (f = 0; f < e; f++) { var k = c[f],
                        l = 0 < f ? c[f - 1] : 0;
                    0 === f ? (g.push(Ve.Og), h.push(k.nodeX), h.push(k.nodeY)) : (g.push(Ve.Bf), h.push(k.nodeX), h.push(k.nodeY), h.push(l.forwardX), h.push(l.forwardY), h.push(k.backwardX), h.push(k.backwardY)) } a.closed && 1 < e && (k = c[0], l = c[e - 1], g.push(Ve.Bf), h.push(k.nodeX), h.push(k.nodeY), h.push(l.forwardX), h.push(l.forwardY), h.push(k.backwardX), h.push(k.backwardY)) } d.Ws(g, h, !1, b) }
        var d = this.fd;
        d.reset();
        a = a || this.A;
        var e = a.curves || [],
            f = a.curve,
            g = a.param,
            h = g.fillInfo,
            k = h.fillColors,
            l = g.lineCap,
            k = g.lineJoin;
        d.IA(g.lineWidth, qd.parse(g.strokeColor), l, k);
        l = g.customValue;
        g = g.presetImage;
        if (g = this.oq || l || ke.Lg(g) || h.fillImage) this.lb = this.lb || [], !this.Va || g != this.Va && this.Va.Ja != g ? (this.Va && this.lb.splice(this.lb.indexOf(this.Va), 1), l = this.cc(), l = g instanceof Le ? g : l.Md(g), this.lb.push(l), this.Va = l) : l = this.Va, d.Dz(l, h.horOffset, h.verOffset, h.imagePosition, h.imageSize);
        if (!g && 0 == h.fillStyle) h = h.fillColors[0],
            d.Ds(new qd(h.r, h.g, h.b, h.a));
        else if (!g) { var g = 1 == h.fillStyle ? vd.cd : vd.qA,
                k = h.fillColors,
                l = k.map(function(a) { return new qd(a.r, a.g, a.b, a.a) }),
                k = k.map(function(a) { return a.p }),
                m = h.fillStartPos,
                m = new A(m.x, m.y),
                h = h.fillEndPos,
                h = new A(h.x, h.y);
            d.Ez(g, l, k, m, h) } e.map(function(a) { c(a) });
        f && c(f)
    };
    t.H("Display.Shape", df);
    var ff = df;

    function gf() { gf.f.constructor.apply(this, arguments);
        this.Jx = null;
        t.ob(this, ["imageList", this.Dw]) } t.extend(gf, Yc);
    var hf = gf.prototype;
    hf.I = "Slides";
    hf.Dw = function() { return this.Jx };
    t.H("Display.Slides", gf);
    var jf = gf;

    function kf() {} kf.ve = "B";
    kf.Ku = "BL";
    kf.xz = "BR";
    kf.Ze = "L";
    kf.ae = "R";
    kf.Cf = "T";
    kf.Uo = "TL";
    kf.vA = "TR";
    t.ra(kf, ["BOTTOM", kf.ve, "BOTTOM_LEFT", kf.Ku, "BOTTOM_RIGHT", kf.xz, "LEFT", kf.Ze, "RIGHT", kf.ae, "TOP", kf.Cf, "TOP_LEFT", kf.Uo, "TOP_RIGHT", kf.vA]);
    t.H("Display.StageAlign", kf);

    function lf() {} lf.Tz = "fullScreenInteractive";
    lf.Ot = "normal";
    t.ra(lf, ["BOTTOM", lf.Tz, "BOTTOM_LEFT", lf.Ot]);
    t.H("Display.StageDisplayState", lf);

    function mf() {} mf.tl = "width";
    mf.HB = "width2";
    mf.dv = "height";
    mf.bv = "cover";
    mf.Cs = "contain";
    mf.cv = "fill";
    mf.Es = "none";
    mf.FB = "none_mobile";
    mf.GB = "none_pc";
    mf.Os = "no_scale";
    t.H("Display.StageScaleMode", mf);

    function nf() {
        nf.f.constructor.apply(this, arguments);
        this.Ff = kf.Uo;
        this.Ee = this.Ic = 0;
        this.Eq = null;
        this.Ah = mf.tl;
        this.wq = lf.Ot;
        this.Hh = this.Mj = this.Ha = this.Ga = 0;
        this.tn = this.Md = this.V = null;
        t.ob(this, ["x", this.wd, "y", this.xd, "scaleX", this.wc, "scaleY", this.xc, "rotation", this.zi, "alpha", this.ie, "visible", this.Vf, "name", this.vi, "fullScreenHeight", this.zw, "fullScreenWidth", this.Bw]);
        t.oc(this, ["align", this.Yv, this.sy, "color", this.ew, this.xy, "frameRate", this.xw, this.Iy, "displayState", this.nw, this.Cy, "fullScreenSourceRect",
            this.Aw, this.Jy, "scaleMode", this.lx, this.az
        ])
    }
    t.extend(nf, cd);
    var of = nf.prototype; of .I = "Stage"; of .Yv = function() { return this.Ff }; of .sy = function(a) { this.Ff = a }; of .ew = function() { return this.Ic }; of .xy = function(a) { this.Ic = a }; of .xw = function() { return this.Ee }; of .Iy = function(a) { this.Ee = a }; of .nw = function() { return this.wq }; of .Cy = function(a) { this.wq = a }; of .zw = function() {}; of .Bw = function() {}; of .Aw = function() { return this.Eq }; of .Jy = function(a) { this.Eq = a }; of .lx = function() { return this.Ah }; of .az = function(a) { this.Ah = a }; of .La = function() { return this }; of .cc = function() { return this };
    t.H("Display.Stage", nf);
    var pf = nf;

    function qf() { qf.f.constructor.apply(this, arguments);
        this.zs = null;
        this.Oj = !1;
        this.Yr = !0;
        this.Hf = this.Qm = !1;
        this.sq = !0;
        this.Xi = this.cg = this.qf = null } t.extend(qf, me);
    t.H("Display.Video", qf);
    var rf = 0;

    function sf() { this.l = rf++;
        this.R = this.Ja = null } t.H("Display.VideoData", sf);

    function tf() { tf.f.constructor.apply(this, arguments) } t.extend(tf, Ze);
    tf.prototype.I = "VideoIFrame";
    t.H("Display.VideoIFrame", tf);
    var uf = tf;

    function vf(a) { vf.f.constructor.apply(this, arguments);
        this.qs = this.hr = 0;
        this.ir = !1;
        t.ob(this, ["loaded", wf.Mw, "total", wf.Ax, "loadOver", wf.Lw]) } t.extend(vf, z);
    var wf = vf.prototype;
    wf.Mw = function() { return this.hr };
    wf.Ax = function() { return this.qs };
    wf.Lw = function() { return this.ir };
    var xf = vf;

    function yf() { yf.f.constructor.apply(this, arguments);
        this.Nn = 0;
        this.Xg = null } t.extend(yf, z);
    var zf = yf.prototype;
    zf.j = function() { this.Nn--;
        this.Lf() };
    zf.Lf = function() { 0 === this.Nn ? this.Xg && this.Xg() : this.pq && this.pq() };
    zf.B = function() { this.Nn++ };
    zf.Pi = function(a) { this.Xg = a };
    zf.iy = function(a) { this.pq = a };
    t.ra(zf, ["stopLoad", zf.B, "goOnLoad", zf.j]);
    var Af = yf;

    function Bf(a, b) { Bf.f.constructor.apply(this, arguments);
        this.ne = "";
        t.ob(this, ["url", Cf.Bi]) } t.extend(Bf, Af);
    var Cf = Bf.prototype;
    Cf.Bi = function() { return this.ne };
    var Df = Bf;

    function Ef() { this.Ka = this.Qa = void 0;
        this.J = this.ur = this.At = this.Pf = this.audio = null;
        t.ob(this, ["dom", Ff.ih]) }
    var Ff = Ef.prototype;
    Ff.ih = function() { return this.Pf };
    Ff.yn = function(a) {
        var b = this.Pf;
        if ("string" != typeof a) { a = this.ur || "righttop"; var c = !0 } else this.ur = a;
        var d = this.J.G;
        .1 > Math.abs(d.lg - Math.PI / 2) ? (a = { lefttop: "righttop", righttop: "rightbottom", rightbottom: "leftbottom", leftbottom: "lefttop" }[a], b.style.cssText += K.prefix.s + "transform: rotate(90deg);") : .1 > Math.abs(d.lg - Math.PI / 2) ? (a = { lefttop: "leftbottom", leftbottom: "rightbottom", rightbottom: "righttop", righttop: "lefttop" }[a], b.style.cssText += K.prefix.s + "transform: rotate(-90deg);") : b.style.cssText += K.prefix.s +
            "transform: rotate(0);";
        "lefttop" == a ? (b.style.left = "18px", b.style.top = "18px", b.style.right = "", b.style.bottom = "") : "leftbottom" == a ? (b.style.left = "18px", b.style.bottom = "18px", b.style.right = "", b.style.top = "") : "righttop" == a ? (b.style.right = "18px", b.style.top = "18px", b.style.left = "", b.style.bottom = "") : "rightbottom" == a && (b.style.right = "18px", b.style.bottom = "18px", b.style.left = "", b.style.top = "");
        c || this.Dc("hide" != a)
    };
    Ff.Ti = function(a) { "play" == a ? this.audio && this.audio.play() : "pause" == a && this.audio && (this.audio.pause(), this.audio.forcePaused = !0) };
    Ff.Vf = function() { return this.Ka };
    Ff.Dc = function(a) { this.Ka = a;
        this.Pf.style.display = a ? "block" : "none" };
    Ff.Xj = function() { return this.Qa };
    Ff.Xr = function(a) { this.Qa = a; var b = this.Pf.querySelector(".mugine_audio_on"),
            c = this.Pf.querySelector(".mugine_audio_off");
        b && (b.style.display = "on" == a ? "" : "none");
        c.style.display = "off" == a ? "" : "none";
        void 0 === this.Ka && (this.Pf.style.display = "none" != a ? "block" : "none");
        this.At && clearInterval(this.At) };
    Ff.$j = function(a, b) {
        b = b || {};
        var c = b.audioOffImage,
            d = b.audioOnImage,
            e = { small: 24, medium: 36, large: 48 }[b.audioIconSize || "small"],
            c = c || d,
            c = (d = d || c) ? '<img width="' + e + '" class="mugine_audio_off" style="" src="' + c + '" />' + ('<img width="' + e + '" class="mugine_audio_on" style="" src="' + d + '" />') : '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' + e + 'px" height="' + e + 'px" viewBox="0 0 46 46" enable-background="new 0 0 46 46" xml:space="preserve">   <g>       <circle opacity="0.6" cx="23" cy="23" r="23"/>           <g>               <path fill="#ECECEC" d="M23,2c11.6,0,21,9.4,21,21s-9.4,21-21,21S2,34.6,2,23S11.4,2,23,2 M23,0C10.3,0,0,10.3,0,23s10.3,23,23,23 s23-10.3,23-23S35.7,0,23,0L23,0z"/>           </g>       <path fill="#ECECEC" d="M27.5,7.3c0.6,1.1,0.8,2.4,1.6,3.4c0.9,1.5,2.1,2.8,3,4.3c0.6,1.1,1.3,2.2,1.4,3.4c0.4,1.6-0.1,3.4-0.9,4.8 c-0.8,0.7-1.1-0.4-0.9-1c0.1-0.9,0.2-1.8,0-2.7c-0.2-1.3-0.6-2.6-1.4-3.7c-0.7-0.8-1.5-2.5-2.8-2.1c-0.9,0.4-0.7,1.5-0.8,2.3 c-0.6,5-1.2,10.1-1.9,15.1c-0.3,2.1-2.3,3.3-4.1,4c-1.6,0.7-3.5,1-5.2,0.4c-1.6-0.4-3.2-1.8-3-3.5c0.1-2.1,1.8-3.8,3.8-4.4 c1.9-0.8,4.2-0.8,6.1,0.2c0.9,0.4,1.3-0.4,1.5-1.3c0.9-6.4,1.7-12.8,2.5-19.2C26.3,6.8,27.4,6.7,27.5,7.3L27.5,7.3z"/>   </g>   <polygon class="mugine_audio_off" fill="#ECECEC" points="14,11.2 13.2,12.9 33.3,34.2 34.2,32.5 "/></svg>',
            d = document.createElement("div");
        d.id = "mugeda_audio_indicator";
        d.style.cssText += "z-index:20;position:absolute;";
        d.innerHTML = c;
        a.appendChild(d);
        this.Pf = d;
        this.yn();
        this.J.G.M("stageRotateChange", this.yn.bind(this))
    };
    t.ra(Ff, ["setState", Ff.Xr, "getState", Ff.Xj, "setVisible", Ff.Dc, "getVisible", Ff.Vf]);
    var Gf = le,
        Gf = le;

    function Hf() {}
    Hf.Tb = function(a, b) {
        var c = a.type,
            d = a.param || {},
            e = d.scope || "",
            f = a.event,
            g = b.Ht,
            h = b.It,
            k = b.au,
            l = b.jl,
            m = l.O(),
            n = b.Us,
            p = b.QA,
            q = b.YA,
            r = null;
        e.match(/\{\{.*\}\}/) || ("symbol" === e || "audio" == c ? r = g : e && e.length && "stage" != e && (r = l.c.V.ia.ua.xf(e, "displayobject")), r || (r = h || g));
        if ("gotoAndPlay" === c || "gotoAndStop" === c || "gotoAndPause" === c) f = new lc(f, !1, null, r, "gotoAndPlay" !== c, f === u.Yd, p);
        else if ("call" == c) f = new ta(c, d);
        else if ("next" == c) f = new lc(f, !0, null, r, !0, f === u.Yd, p);
        else if ("previous" == c) f = new lc(f, !0, null,
            r, !0, f === u.Yd, p);
        else if ("pause" == c) f = new vc(f, null, r, f === u.Yd);
        else if ("play" == c) f = new Jd(f, null, r);
        else if ("gotoPage" == c) f = new rc(f, !1, d.page_number, null, r, k, p);
        else if ("disablePage" == c) f = new tc(f, !0, k);
        else if ("enablePage" == c) f = new tc(f, !1, k);
        else if ("nextPage" == c) f = new rc(f, !0, 1, null, r, k, p);
        else if ("prevPage" == c) f = new rc(f, !0, -1, null, r, k, p);
        else if ("changeElement" == c) f = new Vb(f);
        else if ("resetElement" == c) f = new Vb(f, !0);
        else if ("playSegment" == c) f = new Sd(f);
        else if ("audioicon" == c) f = new pc(f);
        else if ("timerStatus" ==
            c) f = new Zd(f);
        else if ("shareinfo" == c) f = new Ud(f);
        else if ("audio" == c) f = new ma(f, r);
        else if ("controlAudio" == c) f = new qa(f, r);
        else if ("controlVideo" == c) f = new ee(f, r);
        else if ("controlCanvas" == c) f = new va(f, r);
        else if ("chooseImage" == c) f = new Ha(f, r, { oh: d.keep_value });
        else if ("showWechatAvatar" == c) f = new Ha(f, r, { I: Ha.j.Image, oh: d.keep_value, Wi: function(a) { a(ke.Lg("wechatAvatar")) } });
        else if ("showWechatNickname" == c) f = new Ha(f, r, { I: Ha.j.Text, oh: d.keep_value, Wi: function(a) { a(ke.Lg("wechatNickName")) } });
        else if ("updateChart" ==
            c) f = new ae(f, r);
        else if ("vote" == c) f = new he(f, r);
        else if ("vrControl" == c) f = new ce(f, r);
        else if ("resetWiper" == c) f = new je(f, r);
        else if ("changePicture" == c) f = new Ea(f, r);
        else if ("recordAudio" == c) f = new Qd(f, r);
        else if ("submitForm" == c) f = new Xd(f, r);
        else if ("link" == c) f = new nc(d.url, d.urlTarget);
        else if ("form" == c) { var v;
            (c = (c = d.targetValue) ? JSON.parse(unescape(c)) : null) && (v = Hf.Tb({ event: "click", id: "form", mode: 2, name: "", param: c, type: "frame" == d.openTarget ? "gotoAndPlay" : "gotoPage" }, b));
            f = new Xb(f, m, v) } else "link" ==
            c ? f = new nc(d.url, d.urlTarget) : "drag" == c ? f = new Tb(n, d.type, d.reset, d.inertia) : Gf.Rq(c) ? f = new(Gf.Rq(c))(a, b) : "getCounter" == c || "setCounter" == c ? f = new Ja(c, d) : "changeCanvas" == c ? (m = d.canvas_name, v = l.c.V, f = new ya(c, d), f.Dj = v.sa(m, !1)) : "submitScore" == c || "getRanking" == c ? f = new Od(c, d) : (m = d.element_name || d.instance_name, v = l.c.V, v = v.sa(m, !1), f = new(v && v.em ? v.em() : ia)(f));
        if (f) {
            f.W = a;
            f.c = n;
            f.da = l;
            n.Ue = n.Ue || [];
            (q || n.Ue).push(f);
            a && a.logic && (q = a.logic, v = l.c.V, f.jr = v.sa(q.element, !0));
            !a || "changeElement" != a.type &&
                "resetElement" != a.type && "playSegment" != a.type || (m = d.element_name || d.instance_name || "", q = m.match(/\{\{.*\}\}/), v = l.c.V, f.me = q ? null : v.sa(m, !0));
            a && "timerStatus" == a.type && (m = d.timer_name, v = l.c.V, f.hs = v.sa(m, !1));
            a && "controlAudio" == a.type && (m = d.audio_target, v = l.c.V, f.nq = v.sa(m, !1));
            a && "controlVideo" == a.type && (m = d.video_target, v = l.c.V, f.Jk = v.sa(m, !1));
            a && "controlCanvas" == a.type && (m = d.element_name, v = l.c.V, f.Dj = v.sa(m, !1));
            !a || "chooseImage" != a.type && "showWechatNickname" != a.type && "showWechatAvatar" != a.type ||
                (m = d.target_name, v = l.c.V, q = m && "undefined" != m ? v.sa(m, !0, !0) : v.ia.Eb[n.l], f.me = q);
            a && "updateChart" == a.type ? (m = d.target_chart, v = l.c.V, f.fs = v.sa(m, !1)) : a && "vote" == a.type ? (m = d.vote_display, v = l.c.V, f.Kj = m && "undefined" !== m ? v.sa(m, !0) : null, m = d.vote_voted, v = l.c.V, f.Kk = m && "undefined" !== m ? v.sa(m, !0) : null, f.yB()) : a && "vrControl" == a.type ? (m = d.element_name, v = l.c.V, f.vf = m && "undefined" !== m ? v.sa(m, !1) : f.c) : a && "resetWiper" == a.type && (m = d.element_name, v = l.c.V, f.vf = m && "undefined" !== m ? v.sa(m, !1) : f.c);
            if (a && "changePicture" ==
                a.type) { v = l.c.V;
                q = (q = d.target_name) && "undefined" != q ? v.sa(q, !0) : v.ia.Eb[n.l];
                f.me = q; if (n = d.source_name) var x = v.sa(n, !0);
                f.$r = x } a && "recordAudio" == a.type && (x = d.target_name, n = d.target_text, v = l.c.V, f.es = v.sa(x, !1), f.js = v.sa(n, !1));
            var w, y;
            try { var D = d.submit_onsuccess,
                    H = JSON.parse(decodeURIComponent(d.onsuccess_param)),
                    E = d.submit_onfailure,
                    J = JSON.parse(decodeURIComponent(d.onfailure_param)) } catch (I) {} D && "none" != D && H && (v = { event: "click", id: "onFinish", mode: 2, name: "", param: H, type: D }, w = Hf.Tb(v, b));
            E && "none" !=
                E && J && (v = { event: "click", id: "onFailure", mode: 2, name: "", param: J, type: E }, y = Hf.Tb(v, b));
            f.Uy({ yg: w, yo: y });
            return f
        }
    };
    var If = me;

    function Jf(a) {
        this.c = a;
        this.C = this.zq = null;
        this.sb = [];
        this.bg = this.Ob = this.Pd = this.G = null;
        this.sd = window.DEBUG_CS2_MODE ? !1 : !0;
        this.Yl = null;
        this.Xl = !1;
        this.Gj = [];
        this.ha = ["mugeda_render_object"];
        this.Be = this.kr = this.Ec = null;
        this.S = "";
        this.rr = this.jn = this.zr = this.P = null;
        this.km = "display: block;";
        this.$m = null;
        this.Zl = 0;
        Jf.ga || (Jf.ga = !0, F.K("mugeda_render_object", "position: absolute; " + K.prefix.s + "transform-origin: left top;" + K.prefix.s + "user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); display: block;"));
        this.Tl = {};
        this.Sl = {};
        this.Zi = this.dh.bind(this);
        this.cq = "";
        this.vr = null
    }
    Jf.ga = !1;
    Jf.Xa = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
    var Kf = Jf.prototype;
    Kf.$j = function() {};
    Kf.Ty = function(a) { this.P = a };
    Kf.j = function() { var a = null === this.Yl ? this.sd : this.Yl;
        this.Xl != a && (this.Xl = a, this.Ye()) };
    Kf.Vq = function() { var a = this;
        a.Lx(); var b = a.c;
        b.M("domeventchanged", function() { return function(c) { a.xq.call(a, b, c) } }());
        a.xq(b) };
    Kf.rb = function() { 0 == this.c.Ka && (this.P.style.display = "none");
        this.Vq() };
    Kf.xq = function(a, b) { var c = this; if (b) var d = [b.ed],
            e = b.jv;
        else d = [], [a.Pc, a.Oc].forEach(function(a) { for (var b in a) a.hasOwnProperty(b) && (d = d.concat(a[b])) }), e = !0;
        d.forEach(function(a) { if (a.Vs) { var b = a.type;
                a = a.Lo; var d = c.fc,
                    k = d ? a ? d.Tl : d.Sl : a ? c.Tl : c.Sl;
                e ? k[b] ? k[b]++ : (k[b] = 0, d ? d.P.addEventListener(b, d.Zi, a) : c.P.addEventListener(b, c.Zi, a)) : 0 == --k[b] && (d ? d.P.removeEventListener(b, d.Zi, a) : c.P.removeEventListener(b, c.Zi, a)) } }) };
    Kf.dh = function(a) { for (var b = a.type, c = this.zq || a.target, d = Jf.ya(0), e = d.O(); c !== e && null == f;) var f = c.gg,
            c = c.parentNode;
        null == f ? f = {} : "scene" == f.c.I && (f = f.G);
        b = new Va(b, a);
        b.Rf = a.eventPhase;
        b.mg = f.c;
        b.da = d.c;
        this.c.F(b) };
    Kf.Hq = function() { var a = this.S; return a = a.replace("{{className}}", this.ha.join(" ")) };
    Jf.gf = {};
    Jf.ya = function(a) { return Jf.gf[a] };
    Jf.j = function(a, b, c) { for (var d = a.length - 1; 0 <= d; d--) { var e = a[d]; if (!e.rh) { var f = e.C.T,
                    f = B.jc(c, f),
                    g = e.ui(f); if (Pc.Bl(g, b)) return e.children && 0 != e.children.length ? (e.Pa && (f = B.jc(e.Pa, f)), Jf.j(e.children, b, f)) : e; if (e.children && e.children.length && (e.Pa && (f = B.jc(e.Pa, f)), e = Jf.j(e.children, b, f))) return e } } };
    Kf.Df = function(a, b, c, d) { a.c = b;
        a.C = c || b.C;
        null == d ? (this.Gj.push(b), this.sb.push(a)) : (this.Gj.splice(d, 0, b), this.sb.splice(d, 0, a));
        a.G = this;
        a.Ob = this.Ob;
        a.bg = this.bg;
        a.Pd = this.Pd;
        Jf.gf[b.l] = a;
        a.Ob && "MovieClip" == b.I && a.Ob.Nm.push(a); return a };
    Kf.fg = function() {};
    Kf.Ym = function() {};
    Kf.nn = function(a) { var b = a.c,
            c = this.Gj.indexOf(b);
        this.Gj.splice(c, 1);
        c = this.sb.indexOf(a);
        this.sb.splice(c, 1);
        a.Ob && (a = a.Ob.Nm, c = a.indexOf(a), -1 !== c && a.splice(c, 1));
        delete Jf.gf[b.l] };
    Kf.va = function() { var a = this.c,
            a = F.K("width: " + a.na + "px; height: " + a.la + "px;" + (a.Wc ? "cursor: pointer;" : ""));
        this.ha.push(a);
        this.Ec = a };
    Kf.Si = function(a, b, c) {
        var d = this.c,
            e = d.C;
        a = a || e.T;
        var f = d.G && d.G.Pa,
            g = !1;
        ((d.fd || {}).Vb || []).forEach(function(a) { a.Va && (g = !0) });
        var h = "";
        f && (h += f.Se());
        d.nf && d.lb && d.lb[0] ? (f = a.vc(), f.ja = Math.round(f.ja), h += " " + f.Se(!1, d.nf && g)) : h += " " + a.Se(!1, d.nf && g);
        e.Ya && (h = e.Ya + " " + h);
        d.Uc && (h += " " + d.Uc.Se());
        var f = void 0 === K.ho ? !0 : K.ho,
            k = !1;
        if (K.Sa.pd && d instanceof If) { var l = d.Nd(); if (2 < l.wc() || 2 < l.xc()) k = !0 }
        if (f || k) h = " translateZ(" + (this.Zl || 0) + "px) " + h;
        f = "" + K.prefix.s + "transform:" + h + ";opacity: " + e.ka.ie() +
            ";";
        e.be && (f += e.be);
        d.Ka ? f += this.km : this.P && (f += "display: none;");
        h = this.kr;
        b ? (e.be != this.$m && (this.P.style.cssText = this.P.style.cssText.replace(this.$m, ""), this.$m = e.be), this.P.style.cssText += f) : (f = F.K(f), this.ha.push(f), this.kr = f);
        if (a.yc && K.Sa.pd) {
            a = this.G;
            for (var f = a.sb, m = function(a, b, c) { return a >= c.left && a < c.right && b >= c.top && b < c.bottom }, k = function(a, b, c) {
                    var d = m(a.left, a.top, b) || m(a.right, a.top, b) || m(a.right, a.bottom, b) || m(a.left, a.bottom, b);
                    return d = c ? d || m(b.left, b.top, a) || m(b.right, b.top, a) ||
                        m(b.right, b.bottom, a) || m(b.left, b.bottom, a) : d
                }, l = !1, n = 0, p = 0; n < f.length; n++) {
                var q = f[n];
                if (q.c.l == this.c.l) l = !0;
                else if (null == q.P) { var r = (l ? 1E4 : -1E4) + 100 * p++;
                    q.Zl = r;
                    q.c.F(d.ea) } else if (q.P && q.P.style) {
                    for (r = a.P; r && !(0 <= r.className.indexOf("mugine_scene_clip"));) r = r.parentElement;
                    if (!r) break;
                    var v = r.getBoundingClientRect(),
                        r = this.P.getBoundingClientRect(),
                        v = k(r, v);
                    if (!v) break;
                    var x = q.P.getBoundingClientRect(),
                        w = 0 <= q.P.style.cssText.indexOf("matrix3d"),
                        r = "translateZ(" + (v && k(r, x, !0) && !w ? -1E4 + 100 * p++ :
                            0) + "px)";
                    q.P.style.cssText = q.P.style.cssText.replace(/translateZ\(.*?\)/, r)
                }
            }
        }
        b || h && this.ha.splice(this.ha.indexOf(h), 1);
        c && this.Ye();
        b || h && F.ec(h);
        this.zr = e.vc();
        this.jn = d.Ka;
        this.vr = d.G && d.G.Pa ? d.G.Pa.vc() : null
    };
    Kf.wy = function() { if (null != this.G.Zg) { this.Be && (F.ec(this.Be), this.ha.splice(this.ha.indexOf(this.Be), 1)); var a = F.K("top:" + Math.round(Math.min(0, this.G.Zg)) + "px; left:" + Math.round(Math.min(0, this.G.hi)) + "px");
            this.ha.push(a);
            this.Be = a; if (this.fc) var b = this.fc.Kq();
            this.Ye(b) } };
    Kf.Lx = function() { var a = this.c;
        this.c.Fr = this; var b, c; "Stage" === a.I ? (b = a.children[0], c = a.children[0]) : (c = (this.Ob || {}).c) && (b = c.La().children[0]); if (a.Kd) { var d = a.Kd;
            Lf.bind(this)(a, d, c, b);
            a.Kd = null } for (var e in a.Yj) { var f = a.Yj[e],
                d = f.Fz;
            Lf.bind(this)(a, d, c, b, f.Ue) } };
    Kf.Ye = function(a) { a = a || this.P;
        null == a && (this.O(), a = this.P); if (null != a) { var b = this.Xl && this.Gf ? this.ha.concat([this.Gf]).join(" ") : this.ha.join(" ");
            this.rr != b && (this.rr = b, a.setAttribute("class", b)) } };
    Kf.O = function() { if (null == this.P) { var a = document.querySelector('[data-mid="' + this.c.l + '"]');
            a && (this.P = a, this.P.gg = this, this.rb && this.rb(), this.jn || (this.P.style.cssText += "display:none;")) } return this.P };
    Kf.aa = function() { if (this.P) { var a = this.c,
                b = a.C,
                c = a.Bq; if (this.Zl || !b.td(this.zr) || this.jn !== a.Ka || c !== this.cq || a.G && a.G.Pa && !a.G.Pa.td(this.vr)) return c && (this.cq = this.P.style[K.prefix.Yk + "Filter"] = c), this.Si(null, !0), a.F(a.Gr), !0 } };

    function Lf(a, b, c, d, e) {
        var f = this,
            g = Jf.ya(1).Zc;
        b.forEach(function(b) {
            var k = b.event,
                k = {
                    appear: u.Yd,
                    click: u.Xa,
                    mouseover: u.Et,
                    mouseout: u.Dt,
                    hotspot: u.KB,
                    property: u.lt,
                    dragend: u.ye,
                    drag: u.wt,
                    drop: u.za,
                    dragout: u.ze,
                    preset_end: u.ru,
                    liked: u.yt,
                    unliked: u.gp,
                    video_start: u.ip,
                    video_end: u.hp,
                    wiper_finish: u.jp,
                    canvas_save_finish: u.et,
                    connector_connected: u.xl,
                    connector_disconnected: u.pt,
                    touch_start: u.Zo,
                    touch_end: u.Xo,
                    slide_right: u.Iu,
                    slide_right_up: u.No,
                    slide_up: u.Ro,
                    slide_left_up: u.Gu,
                    slide_left: u.Bu,
                    slide_left_down: u.Du,
                    slide_down: u.xu,
                    slide_right_down: u.Ju,
                    audio_start: u.at,
                    audio_pause: u.Xs,
                    audio_stop: u.ul
                }[k];
            null == k && (k = u.du);
            if (b.param.bk && (-1 < [u.Xa, u.ye, u.za, u.ze].indexOf(k) || 0 == k.indexOf("touch_") || 0 == k.indexOf("slide_"))) var l = !0;
            var m = Hf.Tb(b, { Ht: c, It: d, au: g, jl: Jf.ya(0), Us: a, QA: l, YA: e });
            if (m)
                if (k === u.Yd) c.Kl.push(m);
                else if (k === u.Xa) a.Wp.push(m), f.uv();
            else if (k === u.yt) a.Zp.push(m);
            else if (k === u.gp) a.bq.push(m);
            else if (k === u.lt) a.Vp.push(m), f.qv();
            else if (k === u.ye) a.Yp.push(m);
            else if (k === u.wt) m.sv();
            else if (k ===
                u.Zo) a.aq.push(m), f.wv();
            else if (k === u.Xo) a.$p.push(m), f.vv();
            else if (0 === k.indexOf("slide_")) a.xj[k] || (a.xj[k] = []), a.xj[k].push(m), f.tv();
            else if (0 === k.indexOf("audio_")) a.pv(k, m);
            else if (k === u.za || k === u.ze) {
                b = m.W.drop || {};
                l = m.W.param || {};
                l = l.scope || l.element_name || l.audio_target || "";
                l.match(/\{\{.*\}\}/);
                var n = b.name;
                if (n || l) b = m.da.c.V, l = n ? b.sa(n) : null, (n = b.Qf.filter(function(b) { return b.Ih == a && void 0 === b.Uk })) && n.length ? (n = n[0], n.action = m, n.target = l, n.Uk = k === u.za) : b.Qf.push({
                    Ih: a,
                    action: m,
                    target: l,
                    Uk: k === u.za
                })
            } else k === u.ru ? ((n = (m.W.preset || {}).name) ? (b = m.da.c.V, b = b.sa(n)) : b = f.c, b.ke && b.ke.hy({ event: k, action: m })) : k === u.ip ? f.c.M("videostart", function() { m.D.bind(m)() }) : k === u.Et ? f.c.M("mouseover", function() { m.D.bind(m)() }) : k === u.Dt ? f.c.M("mouseout", function() { m.D.bind(m)() }) : k === u.hp ? f.c.M("videoend", function() { m.D.bind(m)() }) : k === u.jp ? a.Qn.push(m) : k === u.et ? a.am.push(m) : k === u.xl || k === u.pt ? a.ji.push(m) : k === u.du && (k = window.MugedaBehavior) && (l = f.O(), k.setupMobileActions({
                dataRef: null,
                displayObject: a,
                aniData: a.A,
                dom: l
            }, b, function() { m.constructor !== ia && m.D.bind(m)() }))
        })
    }

    function Mf(a) {
        function b(a) { var f = a.Fb() - c,
                l = a.Gb() - d; if (1024 < f * f + l * l)
                if (f = 180 * Math.atan2(-l, f) / Math.PI, -22.5 < f && 22.5 >= f) var m = u.Iu;
                else 22.5 < f && 67.5 >= f ? m = u.No : 67.5 < f && 112.5 >= f ? m = u.Ro : 112.5 < f && 157.5 >= f ? m = u.Gu : 157.5 < f || -157.5 >= f ? m = u.Bu : -157.5 < f && -112.5 >= f ? m = u.Du : -112.5 < f && -67.5 >= f ? m = u.xu : -67.5 < f && -22.5 >= f && (m = u.Ju);
            m && (e.xj[m] || []).forEach(function(b) { b.D(a) });
            this.Fa(K.qb, b, !0, -100);
            null != g && clearTimeout(g) }
        var c = a.Fb(),
            d = a.Gb(),
            e = this,
            f = this.La(),
            g = setTimeout(function() {
                f.te(K.qb, b) && f.Fa(K.qb,
                    b, !0, -100);
                g = null
            }, 2E3);
        f.M(K.qb, b, !0, -100)
    }
    Kf.tv = function() { var a = this.c;
        a.te(K.Db, Mf) || a.M(K.Db, Mf, !1, -100) };

    function Nf(a) { var b = this.$p;
        this.ab() && b.forEach(function(b) { b.D(a) }) } Kf.vv = function() { var a = this.c;
        a.te(K.qb, Nf) || a.M(K.qb, Nf, !1, -100) };

    function Of(a) { this.aq.forEach(function(b) { b.D(a) }) } Kf.wv = function() { var a = this.c;
        a.te(K.Db, Of) || a.M(K.Db, Of, !1, -100) };
    Kf.uv = function() { var a = this.c;
        a.te(K.Zd, Pf) || (a.M(K.Db, Pf, !1, -100), a.M(K.qb, Pf, !1, -100), a.M(K.Zd, Pf, !1, -100)) };
    Kf.qv = function() { var a = this.c;
        a.te("changed", Qf) || a.M("changed", Qf, !1, -100) };

    function Qf() { this.Xx() }
    var Rf = [];

    function Pf(a) {
        var b = this;
        a.type == K.Db ? (Rf = Rf.filter(function(b) { return 1 == b.kj && 500 > a.Bc.timeStamp - b.startTime }), Rf.push({ nu: b, kj: 1, startTime: a.Bc.timeStamp, hB: a.Fb(), iB: a.Gb() })) : a.type == K.qb ? Rf.forEach(function(c) { c.nu == b && (c.kj |= 2, c.Qz = a.Bc.timeStamp - c.startTime, c.Ss = a.Fb() - c.hB, c.Ts = a.Gb() - c.iB) }) : a.type == K.Zd && Rf.forEach(function(c) {
            c.nu == b && (c.kj |= 4, 500 > c.Qz && 64 > c.Ss * c.Ss + c.Ts * c.Ts && b.Wp.forEach(function(c) {
                if ("video" == c.W.type) {
                    var e = b.A.param || {};
                    c.W.param.video_id = b.l;
                    c.W.param.video_controls =
                        1 == e.hidePlayControls ? 0 : 1;
                    c.W.param.video_continue_audio = e.continueAudio;
                    c.W.param.auto = e.videoAutoPlay;
                    c.W.param.clickStatus = e.clickStatus;
                    c.W.param.hidePlayIcon = e.hidePlayIcon;
                    c.W.param.video_name = e.name;
                    c.W.param.video_mode = "object"
                }
                c.D(a)
            }))
        })
    }
    t.H("Render.RenderObject", Jf);
    var Sf = Jf;

    function U() {} U.j = { qp: "move_in", sl: "move_out", ap: "fade_in", pl: "fade_out", Po: "bounce_in", ql: "flip_in", Cp: "rotate", Yd: "appear", vl: "pop_in", nl: "closer_in", Ap: "roll_in", ep: "fly_in", Jp: "swirl_in", Al: "swirl_out", rl: "further_in", Fp: "shake", Hp: "squeeze", bp: "flip", Ip: "swing", pp: "move", Gp: "slide_up", wp: "quiver", tu: "tilt", Qo: "bounce_out", cp: "flip_out", wl: "pop_out", rj: "further_out", Bp: "roll_out", fp: "fly_out", To: "closer_out", yp: "raise_in", zp: "raise_out" };
    U.B = { Lp: "type", Nu: "duration", Mu: "delay", Vu: "length", fC: "translateX", gC: "translateY", WB: "loop", hC: "trigger", kC: "x", lC: "y", Ze: "left", Cf: "top", ae: "right", ve: "bottom", Su: "from2", Ru: "from", Xu: "to", Yu: "to2", av: "uniform", Lu: "clockwise", Wu: "raise", yl: "up", Wo: "deg" };
    U.LB = {};

    function Tf(a) { this.I = a[U.B.Lp] || U.j.Yd;
        this.ni = parseFloat(a[U.B.Nu]) || .1;
        this.jm = parseFloat(a[U.B.Mu]) || 0;
        this.ph = parseFloat(a[U.B.Vu]) || 0;
        this.$c = null }
    var Uf = Tf.prototype;
    Uf.ci = function() { console.warn("Unknown animation:" + this.I) };
    var Wf = P.Ig(.25, .1, .25);
    Uf.Da = function(a, b, c) { for (var d = b[0], e = b.length, f = 1; f < e; f++) { var g = b[f],
                h = g.w; if (a > h) d = g;
            else { b = d.w; var k = (a - b) / (h - b),
                    k = (g.bd || c || Wf)(k); if (isNaN(g.u)) { var l = {};
                    Object.keys(g.u).forEach(function(a) { var b = d.u[a];
                        l[a] = b + (g.u[a] - b) * k }) } else a = d.u, l = a + (g.u - a) * k; return l } } };
    var Xf = 0;

    function Yf() { this.l = Xf++;
        this.xh = null;
        this.yh = [];
        this.tq = null;
        this.Mv = !1;
        this.Yg = this.P = null;
        this.Tl = {};
        this.Sl = {};
        this.Zi = this.dh.bind(this) }
    var Zf = [];
    Yf.tm = function(a, b) { var c = Zf.length ? Zf.pop() : document.createElement("canvas");
        c.width = a;
        c.height = b; return c };
    Yf.sn = function(a) { Zf.push(a) };
    var $f = Yf.prototype;
    $f.va = function() { this.S = null == this.S ? '<canvas data-type="canvas" class="mugeda_render_object" data-mid="C' + this.l + '" width="0" height="0"></canvas>' : "" };
    $f.Kq = function() { var a = this; if (null == a.P) { var b = document.querySelector('[data-mid="C' + a.l + '"]');
            a.P = b;
            a.Yg = b;
            a.tq = b.getContext("2d");
            a.yh.forEach(function(a) { ag(a, function(a) { a.Vq() }) }); if (b = a.xh) "scene" === b.c.I && (b = b.G), b && b.c.M("rendered", function() { var b = a.yh[0].c;
                b.F(b.ea) }) } return a.P };

    function ag(a, b) { var c = { Qh: !1 };
        b(a, c); if (!c.Qh)
            for (var c = a.sb, d = c.length, e = 0; e < d; e++) ag(c[e], b) }
    $f.fg = function(a) {
        this.Kq();
        var b = this.tq,
            c = this.yh.map(function(a) { return a.c }),
            d = new B(1, 0, 0, 1);
        c[0] && c[0].G && c[0].G.Pa && (d = B.jc(d, c[0].G.Pa));
        var d = this.Bo(null, c, d, null, !0, 1, a),
            e = d[0],
            d = d[1],
            f = 1,
            g = 1;
        if (c[0] && c[0].G) { var h = c[0].G.Nd();
            h.C(e, !0);
            h.C(d, !0);
            f = h.Z;
            g = h.fa }
        if (c[0]) var k = c[0].cc();
        if (k) {
            var l = Math.max(k.U.vd(), 0),
                m = Math.max(k.U.Vc(), 0),
                n = Math.min(k.U.lf(), k.Ha),
                p = Math.min(k.U.kf(), k.Ga);
            e.o < l && (e.o = l);
            e.i < m && (e.i = m);
            d.o > n && (d.o = n);
            d.i > p && (d.i = p);
            h && (h = h.He(), h.C(e, !0), h.C(d, !0));
            h = Math.max(g,
                f);
            k = h * Math.max(k.py, k.qy) * K.devicePixelRatio;
            f = Math.sqrt(166400 / (d.o - e.o) / (d.i - e.i));
            k > f && (k = f);
            g = Math.floor(k * e.o);
            l = Math.floor(k * e.i);
            e = new B(k, 0, 0, k, -g, -l);
            f = c[0] && c[0].G && c[0].G.Pa ? B.jc(e, c[0].G.Pa) : e;
            g = Math.ceil(d.o * k) - g;
            d = Math.ceil(d.i * k) - l;
            this.Yg.width = g;
            this.Yg.height = d;
            b.setTransform(1, 0, 0, 1, 0, 0);
            b.globalAlpha = 1;
            b.clearRect(0, 0, g, d);
            0 < g && 0 < d && this.Bo(b, c, f, null, null, k / h, a);
            this.P.style.cssText += K.prefix.s + "transform: " + e.He().Se() + " translateZ(0)"
        }
    };
    $f.Bo = function(a, b, c, d, e, f, g) {
        var h = this;
        if (e) var k = [],
            l = [];
        null == c && (c = new B(K.devicePixelRatio, null, null, K.devicePixelRatio), b[0] && b[0].G && b[0].G.Pa && (c = B.jc(c, b[0].G.Pa)));
        d = null == d ? 1 : d;
        for (var m = b.length, n = 0; n < m; n++) {
            var p = b[n],
                q = p.qh,
                r = q && q.length ? q[0].rh : null;
            if (q && r) {
                if (a) { var v = h.Yg.width,
                        x = h.Yg.height,
                        w = Yf.tm(v, x),
                        y = w.getContext("2d");
                    y.setTransform(1, 0, 0, 1, 0, 0);
                    y.globalAlpha = 1;
                    y.clearRect(0, 0, v, x);
                    y.globalCompositeOperation = "source-over" } q.forEach(function(a) { h.Tk(a, y, c, d, k, f, g) });
                if (a) {
                    var D =
                        Yf.tm(v, x),
                        H = D.getContext("2d");
                    H.setTransform(1, 0, 0, 1, 0, 0);
                    H.globalAlpha = 1;
                    H.clearRect(0, 0, v, x);
                    H.globalCompositeOperation = "source-over"
                }
                r.forEach(function(a) { h.Tk(a, H, c, d, l, f, g) });
                a && (y.globalCompositeOperation = "source-in", y.setTransform(1, 0, 0, 1, 0, 0), y.drawImage(D, 0, 0), Yf.sn(D), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(w, 0, 0), Yf.sn(w));
                do p = b[++n]; while (null != p && (p.qh || p.rh));
                n--
            } else h.Tk(p, a, c, d, k, f, g)
        }
        if (e) {
            var E = Infinity,
                J = Infinity,
                I = -Infinity,
                S = -Infinity;
            l.forEach(function(a) {
                a.Lc.forEach(function(a) {
                    a.o <
                        E && (E = a.o);
                    a.o > I && (I = a.o);
                    a.i < J && (J = a.i);
                    a.i > S && (S = a.i)
                })
            });
            0 == l.length ? (a = new A(-Infinity, -Infinity), b = new A(Infinity, Infinity)) : (a = new A(E, J), b = new A(I, S));
            J = E = Infinity;
            S = I = -Infinity;
            k.forEach(function(a) { a.Lc.forEach(function(a) { a.o < E && (E = a.o);
                    a.o > I && (I = a.o);
                    a.i < J && (J = a.i);
                    a.i > S && (S = a.i) }) });
            0 == k.length ? (e = new A(0, 0), m = new A(0, 0)) : (e = new A(E, J), m = new A(I, S));
            a.o > m.o || b.o < e.o || a.i > m.i || b.i < e.i ? (e = new A(0, 0), m = new A(0, 0)) : (e = new A(Math.max(e.o, a.o), Math.max(e.i, a.i)), m = new A(Math.min(m.o, b.o), Math.min(m.i,
                b.i)));
            return [e, m]
        }
    };
    $f.Tk = function(a, b, c, d, e, f, g) { if (a.Ka) { var h = a.C,
                k = h.T,
                h = h.ka.oa;
            a.Pa && (k = B.jc(a.Pa, k));
            c = B.jc(c, k);
            a.Uc && (c = B.jc(c, a.Uc));
            h = h * d; if (a.children && a.children.length) f = this.Bo(b, a.children, c, h, e, f, g), e && (a = new Pc, b = f[0], f = f[1], a.uc(b), a.uc(new A(f.o, b.i)), a.uc(f), a.uc(new A(b.o, f.i)), e.push(a));
            else { d = c.Z; var k = c.ba,
                    l = c.qa,
                    m = c.fa;
                d = new B(Math.sqrt(d * d + k * k), 0, 0, Math.sqrt(l * l + m * m));
                k = B.jc(c, d.He());
                e ? e.push(a.ui(c, f)) : (b.setTransform(k.Z, k.ba, k.qa, k.fa, k.ja, k.ma), b.globalAlpha = h, Sf.ya(a.l).fg(b, d, f, g)) } } };
    $f.j = function(a) { var b = new A,
            c = new A,
            d = new A,
            e = new A,
            f = new A(-Infinity, -Infinity),
            g = new A(Infinity, Infinity);
        a.forEach(function(a) { var k = a.o,
                l = a.i,
                m = a.na,
                n = a.la;
            a = a.C.T;
            b.o = k;
            b.i = l;
            c.o = k;
            c.i = l + n;
            d.o = k + m;
            d.i = l;
            e.o = k + m;
            e.i = l + n;
            a.C(b, !0);
            a.C(c, !0);
            a.C(d, !0);
            a.C(e, !0);
            f.o = Math.min(b.o, c.o, d.o, e.o);
            f.i = Math.min(b.i, c.i, d.i, e.i);
            g.o = Math.max(b.o, c.o, d.o, e.o);
            g.i = Math.max(b.i, c.i, d.i, e.i) }) };
    $f.dh = function(a) { var b = a.type,
            c = Sf.ya(0);
        c.O();
        b = new Va(b, a);
        b.da = c.c; var d = b.Fb(),
            e = b.Gb(),
            c = this.xh.c; "scene" == c.I && (c = this.xh.G.c);
        d = new A(d, e);
        e = c.Nd();
        c.Pa && (e = B.jc(c.Pa, e)); if (e = Sf.j(this.yh.map(function(a) { return a.c }), d, e)) { for (var f = e, d = [f]; f.G != c;) f = f.G, d.push(f);
            b.Rf = a.eventPhase;
            b.mg = e;
            a = d.length; if (b.Rf == yc.ml)
                for (--a; 0 <= a; a--) d[a].F(b);
            else e.F(b) } };
    Yf.Rn = function(a, b, c, d, e) { if (b instanceof td) return Yf.DB(b); if (b instanceof md) return Yf.AB(a, b, c, d, e); if (b instanceof xd) return Yf.CB(a, b, c, d) };
    Yf.DB = function(a) { return a.Tj() };
    Yf.CB = function(a, b, c, d) { if (b.type == vd.cd) var e = a.createLinearGradient(b.Ve.o * c, b.Ve.i * d, b.lj.o * c, b.lj.i * d),
            f = b.Ao;
        else var g = Math.abs(b.lj.o - b.Ve.o) * c,
            h = Math.abs(b.lj.i - b.Ve.i) * d,
            e = a.createRadialGradient(b.Ve.o * c, b.Ve.i * d, 0, b.Ve.o * c, b.Ve.i * d, Math.sqrt(g * g + h * h)),
            f = b.Ao;
        b.co.forEach(function(a, b) { e.addColorStop(.001 > Math.abs(f[b]) ? 0 : f[b], a.gc()) }); return e };
    Yf.AB = function(a, b, c, d, e) { e = bg(b.Va.bb, e.Ma(), e.Aa(), b.Im, b.Uq, b.Tq, b.ys); var f = document.createElement("canvas"),
            g = f.getContext("2d");
        f.width = e.gb * c;
        f.height = e.fb * d;
        g.drawImage(b.Va.bb, e.Hd, e.Id, e.Ab, e.zb, e.oe * c, e.pe * d, e.gb * c, e.fb * d); return a.createPattern(f, "tile" == b.Im ? "repeat" : "no-repeat") };

    function bg(a, b, c, d, e, f, g) {
        var h = a.width;
        a = a.height;
        var k = h / a,
            l = b / c,
            m = {};
        "cover" == d ? (m.fb = c, m.gb = b, k < l ? (m.Ab = h, m.zb = h / l) : (m.zb = a, m.Ab = a * l)) : "contain" == d ? (m.Ab = h, m.zb = a, k > l ? (m.gb = b, m.fb = b / k) : (m.fb = c, m.gb = c * k)) : "width" == d ? (m.gb = b, m.fb = c, m.Ab = h, m.zb = h / l) : "height" == d ? (m.gb = b, m.fb = c, m.Ab = a * l, m.zb = a) : "fill" == d ? (m.fb = c, m.gb = b, m.Ab = h, m.zb = a) : "tile" == d ? (m.gb = h, m.fb = a, m.Ab = h, m.zb = a) : (m.fb = c, m.gb = b, m.Ab = b, m.zb = c);
        "tile" == d ? (m.Hd = 0, m.oe = 0) : "center" == e || "top" == e || "bottom" == e ? (m.Hd = (h - m.Ab) / 2 - f, m.oe = (b - m.gb) / 2) :
            0 <= e.indexOf("left") ? (m.Hd = -f, m.oe = 0) : 0 <= e.indexOf("right") && (m.Hd = h - m.Ab + f, m.oe = b - m.gb);
        "tile" == d ? (m.Id = 0, m.pe = 0) : "center" == e || "left" == e || "right" == e ? (m.Id = (a - m.zb) / 2 - g, m.pe = (c - m.fb) / 2) : 0 <= e.indexOf("top") ? (m.Id = -g, m.pe = 0) : 0 <= e.indexOf("bottom") && (m.Id = a - m.zb + g, m.pe = c - m.fb);
        return m
    }
    Yf.kB = function(a, b) {
        var c, d, e = b.fillInfo,
            f = "#93C9FF";
        c = c || 1;
        d = d || 1;
        if (e.fillImage) { var e = document.createElement("canvas"),
                f = e.getContext("2d"),
                g = bg(img, b, c, d);
            e.width = g.gb * c;
            e.height = g.fb * d;
            f.drawImage(img, g.Hd, g.Id, g.Ab, g.zb, g.oe * c, g.pe * d, g.gb * c, g.fb * d);
            f = a.createPattern(e, "tile" == imageSize ? "repeat" : "no-repeat") } else if (0 == e.fillStyle) c = e.fillColors[0], f = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")";
        else if (1 == e.fillStyle)
            for (f = a.createLinearGradient(e.fillStartPos.x * c, e.fillStartPos.y * d, e.fillEndPos.x *
                    c, e.fillEndPos.y * d), c = 0; c < e.fillColors.length; c++) d = e.fillColors[c], f.addColorStop(d.p, "rgba(" + d.r + "," + d.g + "," + d.b + "," + d.a + ")");
        else if (2 == e.fillStyle)
            for (f = Math.abs(e.fillEndPos.x - e.fillStartPos.x) * c, g = Math.abs(e.fillEndPos.y - e.fillStartPos.y) * d, f = a.createRadialGradient(e.fillStartPos.x * c, e.fillStartPos.y * d, 0, e.fillStartPos.x * c, e.fillStartPos.y * d, Math.sqrt(f * f + g * g)), c = 0; c < e.fillColors.length; c++) d = e.fillColors[c], f.addColorStop(d.p, "rgba(" + d.r + "," + d.g + "," + d.b + "," + d.a + ")");
        else 4 == e.fillStyle && (f =
            "rgba(255,255,255,0)");
        return f
    };
    t.H("Render.CanvasRender", Yf);

    function cg() { this.event = {} }
    var dg = cg.prototype,
        eg = { mousedown: 1, mouseup: 1, click: 1, dblclick: 1, mouseover: 1, mouseout: 1, mousemove: 1, touchstart: 1, touchmove: 1, touchend: 1, inputstart: 2, inputmove: 2, inputend: 2 };
    dg.M = function(a, b, c) {
        a = a.toLowerCase();
        "inputstart" == a ? a = K.Db : "inputmove" == a ? a = K.Hc : "inputend" == a && (a = K.qb);
        if (1 == eg[a] && (this.c || this.J)) {
            var d = this,
                e = {
                    bd: b,
                    dir: function(a) {
                        var c = a.Bc;
                        void 0 == c.inputX && (Object.defineProperty(c, "inputX", { get: function() { return a.Fb() }, configurable: !0 }), Object.defineProperty(c, "inputY", { get: function() { return a.Gb() }, configurable: !0 }), c.stopPropagation = a.stopPropagation.bind(a), c.stopImmediatePropagation = a.stopImmediatePropagation.bind(a), c.preventDefault = a.wh.bind(a));
                        b.call(d, c)
                    }
                };
            this.event[a] ? this.event[a].push(e) : this.event[a] = [e];
            (this.c || this.J).M(a, e.dir, c || !1)
        } else this.event[a] ? this.event[a].push(b) : this.event[a] = [b];
        return this
    };
    dg.Fa = function(a, b, c) {
        a = a.toLowerCase();
        "inputstart" == a ? a = K.Db : "inputmove" == a ? a = K.Hc : "inputend" == a && (a = K.qb);
        if (1 == eg[a] && this.dom) { if (this.event[a]) { for (var d = this.event[a].length - 1; 0 <= d; d--) this.event[a][d].bd && this.event[a][d].bd == b && (this.dom.removeEventListener(a, this.event[a][d].dir, c || !1), this.event[a].splice(d, 1));
                0 == this.event[a].length && delete this.event[a] } } else if (this.event[a]) {
            for (d = this.event[a].length - 1; 0 <= d; d--) this.event[a][d] == b && this.event[a].splice(d, 1);
            0 == this.event[a].length &&
                delete this.event[a]
        }
        return this
    };
    dg.If = function(a, b) { var c = []; if (this.event[a]) { for (var d = [], e = 0; e < this.event[a].length; e++) d[e] = this.event[a][e]; for (e = 0; e < d.length; e++) c.push(d[e].call(this, b, void 0, void 0, void 0)) } };
    dg.j = function() {};
    dg.mn = function() {};
    t.ra(dg, ["addEventListener", dg.M, "removeEventListener", dg.Fa, "setCapture", dg.j, "releaseCapture", dg.mn]);

    function fg() { this.I = "default";
        this.pr = this.P = null }
    var gg = fg.prototype;
    gg.j = function(a, b) {
        var c = document.createElement("div");
        c.innerHTML = '<div style="position: absolute;background: black;' + b[0] + K.prefix.s + 'transition: opacity 500ms; opacity: 1;z-index:20">   <div style="position: absolute;height: 20px; width: 100%;top:20%;color:white;text-align: center;font-size: 12px;">       \x3c!--<div><img width="134" src="' + this.bb + '"/></div>--\x3e       <div style="padding: 5px;">\u52a0\u8f7d\u4e2d...<span class="mugeda_percent"></span></div>   </div></div>';
        c = this.P = c.children[0];
        this.pr = c.querySelectorAll(".mugeda_percent")[0];
        a.appendChild(c)
    };
    gg.update = function(a, b) { var c = Math.min(Math.floor(a / b * 100), 100);
        this.pr.innerHTML = c + "%" };
    gg.remove = function() { var a = this.P;
        null != a && (a.style.opacity = 0, setTimeout(function() { a.style.display = "none" }, 500)) };
    t.ra(gg, ["init", gg.j, "update", gg.update, "remove", gg.remove]);
    t.H("Render.LoadingPage", fg);

    function V(a, b) {
        this.rs = !1;
        this.J = a;
        this.kk = b;
        this.Dl = "mugine_class_transition_" + ++V.Bb;
        this.ol = "mugine_class_enter_" + V.Bb;
        this.Cl = "mugine_class_transition_box" + V.Bb;
        this.sj = "mugine_class_preserve_3d" + V.Bb;
        var c = a.Ch;
        this.$ = {
            transition: c.transition || V.j.Zh,
            direction: c.direction || V.B.ta,
            cD: c.realtime || "follow",
            iD: null == c.showArrowIcon ? !0 : c.showArrowIcon,
            jD: null == c.showAudioIcon ? !0 : c.showAudioIcon,
            $s: c.exit || "",
            loop: 1 == c.loop,
            Nk: c.arrowImg || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAwCAYAAAC2aezWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFuxJREFUeNrMm+lzVFW3xrvT85Cpk3S6M5AZCALiiDjPpci9r1WiVeoHq/QPUMvyv/GLpWVdBREcmCGCKMgriMyokIQwJGQOGTrp6f6e8+6d22BA9OW9cKo23elzzj57P/tZaz1r7YO7sbHRdQsON81LK6GV02pp1bRSc36U1kc7TxumjdEytPytGGxnZ6cz2OvPyO12ZbNZVyaTceVyOefvGzny+byrqKjI5fV6XR6Px/m7AKQALWhAqjIgxem/hGdxad5Hy3F/invzfGY5n6JN3yqwvH8GkgVqYmLCNT097Uz+z8ASKAI1EAi4otGoA5b5vYgPDy1i2FNrWpMAYzGKU6lUNp1OD3Nt2O/3u4PBoN/n8+V5pliWNS13WwElgNRKS0td7e3tzqf+FgjX7RRgBNLo6Kjr7NmzruHhYTfMAOOiMKfVEoZFLQCSpL86WrS4uLikubk5yGda5nb58uXk4OBgJ58BgLpE89Im1QxY+dsGKDFJIL3yyiuuu+++2zU1NeVixa/JJDUm6orH466DBw+6PvjgA4FVBLMgiF8+KUarZ7K19N8AQBX0F4Wtbvyl76mnnqpaunRpMeezR44ciXV0dPj7+/snAd8H2FnaMIBneM6MYdftAZTMTUy67777XMuWLbvhjsUmzMgNEDK1YuO468QmJtlM3/qsZtK+RCIRrqysDD766KNxgEosWbIkJvOurq4uBpgIphcArO6hoaEQ91zERL3cd5lrLhuw8reVj9IhNgm8QgbJzNTs0dPT4/rwww9dX3/9tRezkymVM+E4pxror4b+6umjjMn68UHTbW1t4SeeeKLqoYceqonFYhHr+Ovq6kpWrlw5n4Uq2r17d/jAgQNgn/IBVJrneWCZmCUnn76lQFmw5JNmZmacvwWSmiYjX8REXSMjI44vGh8fd9i3b98+z7p163w///xzaVVVVRlANXC9ABKTKgGogt98NTU1/nnz5kUff/zx+GOPPZYEsNjk5OSsaVdUVOiaUp7RTotgukGe03X+/PkQ15xjTF4WYJT+xgxY2VsG1PV8kUBSO3funOvzzz937d271wEK9vlwwBFAquJ8Ndc2GJ+UBMxwSUlJEWY1/cADD0SXL19eh0nX8FuIexz2WkZpgdRgWRAg67nGwyIUA1IGsLw8ZzoSich35bhn/LYDyjJJjl0gffPNN66tW7e6YZB8hx+2VOC8xZomw6QGJhfD15Qlk0nP/PnzA4sXL/Yx+cSdd95ZD2hRmbb645gC1Bn6cfQWZhYADAEbCYfDLfTpRIXjx49XnDp1Ksw9Z2WOHEPcM2y01k0Xp96/wybLpAsXLlhf5EgATCXE6kYBMsGnnLVkfxITiWOeHswoB0BuTK34jjvuqJOpMeeQTNaaGwzq5d5++hDoCYCqkdjVNaFQqIiIqHvmEwAinM8fPnzYg4SYgm1ezotZcvDjtwwoaw6sqmtsbMxhkgD66quv3L/88ksAKwthdnGuq1JU41JNsB4AigG1uLW11Y28COOwI7RkLQfskPk4/g9cRnDQvzL5fUy8B7ZobK049HvLy8tb6EtMcvE9wBhqWJRiSQbYVsbzw/TTg+/0A/KggBYzb6aS9/4Vn6RD6QjscZgESEV89wBSBDDKZGZWaSv0K7IBahaQskS1KKE/3tDQgMSKl6krgSS2YDY5JnwSkL7k912Y0/mdO3cWAXLbiy++2F9fX78KJ7/YMksBBnaG8XENyIoIgHt++OGHQFdX16R8ljQYfY3cTCXvvRGQ5JMkIjXQ7u5uh0UCSSsJSGHOycwSmI2Udo3xS2EYFgIYFwwqefbZZ2NosSSAVgK2Wyzi+gws6UdzHTtx4sQugNtIX8cQqplvv/1WOuw858e4Ngswg7CpHfAqAMFD3/J15fi8Upjoo5X8+OOPIUy8GzADjEFKvvdmKXnvjUY3fIKjpT755BNFODdM8gNSCediXDNPTFJ0AyDlbGEml4ZJ/meeeabyySefrOH+cgCPcs6tyKaDyY3jV3b9+uuvW9asWXNy//79FwAgCHumL168mIGRM5999tkxhGb65Zdf7gasVdz2pMwQEJ2xYYZFixYtius+gPTs2rUreOzYsSkWQ9EwQxu5GUr+ukDJzGzO9tNPP0k/uYlwXpgUFUisfp1lEk35W5xBBVllgejC3CpgUgIHnIQJIRv6aVrh3kuXLu0fGBjYsmnTpn1EzWkcc1QOXLkeAIwDyMDp06cv0/cBTOq8JgvgKQBZzrkE1wYwWwnTMC4vzKIp+kUZc5C+u/F1Qe7p5VqPUfLjf9cUPWVlZdcVmzI7mQkDdh06dMjPSod4aKX0EZ/K+huM0q74F0kC0wATQFHXPv300w2EdaUjQYByqz9NjAXoYgLrAXzD2rVrezZu3OhhMZI8ax6yIk7fYa4rEiP4TvfZNP5nCqaNAlQPPsvN/fVKiyzrDfN9AFYCqEHMr4i0R0peZj6jcg0tbUD6S8x65513/pxRAgrqe/BNPn6Syi5U2k0yNQCLSWmzso7Shklx8rb6lpaWKiltAS2AWNkhADkP2Nt6e3u3bt++/dctW7ZUYXpNOOV66S/Vo2jDXNsnxsCsfvroRWCO8fsZ+unmMwUgaYLCc4AvZpVqEaTk5bMwZyl5MSzQ2dnZRYS+WsmP/lUlf11G/R+x3KJ4BLZUA1wNfzfTFPprWDmFba8G/uCDDxbDonkrVqxoQNdEmZDHggRT8rDuACnIZ999992Wbdu2jRGpKlHjjfTbRqvn+jgMiBL1vJqUind6vnI6Jp3HBGe4PwdwY4B0moWZZNJxJl9rlbzMm+d5lGgzhjB9BPCnGaJvjrGmtPC0v8SsP2UUh18PEmMAI2YKbE55hImU85ujtBcsWBBEQHoRko7SZhJRKyKV9DL5i5juadT0lpMnT+4kwe07cuRIc19fXztOuI5rBJJTj4KFAT5lVmB4uRrz6VQU45o+ALogZgHIEMAOcc8kpp1hDCnMrRmAqvnNKyXPGPiItERNfefo0aNS8iHG0mOU/HCBkp/5dxhVZIpsKo9YfeQwCWZUEob93Ou566673ES2GJqmkXCdEOUxG2kgKWlFpX5WdBcM2vDll1/+gF9SAi2gW1jZFgZbzbUlimKNjY0RGFn9/PPP1yJOE8wxjLPPkgFMii1cm1afmhjmm8UlTDCeHsx2WOwRwFwXlIxRkyng+DXOsPoiaucBPislz7PdgJUxrEpfTzpci1FuU88OmiqkatqO0ma16jQpZfKE/qJ7771XKjv88MMP17CqtaygVz5J9GdCwwysE992mJC9nah2EJ2TAqCFTGYxi5yAFQnm4tNEiJKBRx55JA5QipJir+pRJZiVSsIBoliX6lGKlpimHzaOwrRRvnfynBFFQxZqBke/mP4alRHI5BmXcsWklDx9+QGsnJxUoClH9APYIAsgzZUydfn8jTBKLPKZQlvMFNrmGaVdQ8dlOOM8D/eissMvvPBCQjkbNJcI9FuNBEgZ2qGenp6NH3300c5PP/30N1gR4dx8sYhBNXKtEyUBQVEyCItqYGYdfUflY0ydy1sQxdyAJTOWSc9I23Fvmt/TWPU0i9DP5Puam5tnELmVkit2U8ToLQ+MC0nW8LsiYhawpbdUps4wplxBMp2fi1Fu0zzG1CKmpu1UIlXTVpPSBtQgg3DDICntivvvvz/JZFRfchUo7Us4zmOE893kgrvRXRel4DGBZlZzkepRgFXBwJ16FP3ZKJmEpeWF9ahYLHZFFJM+IoolVI8CgHOwySc20S4JJEDchs8bkimxeEOMdxF9aXwCSUq+TPUtOSj6k2WEWHgp+eAcSv4KvSVGWRbJ1CqMqTVyserZTQyomhYxStsLiyppdUywmsmWqNRrt7GYyAi/bSPcr0fB/7Ju3box/FMc8BaqRAJItUyoWExhwLNRUjkbE4yqL8sA28QKgPUAmHxQmGv8imI4eieKaadGDGbSGc5lYdcYYA/CxH7GGOE3+S2/3RSRb2IsAc6Xcq+PvnL4u5SezfOUI7ql5G01vJBRYpKfFqVVSpdIQNKq+V4m9I3SDhLVKjEPR2kDXLBQaUsBc+zFUW5GQB6ATW4iTZL72jCdNgKAUpjSa9WjFCVlVqYeNa0tGwYfULP1KACZqx7VwzhURRjmex8+cVxKHuB6pOQVEWHmA1pwZQ1GyYcAiu5CyhGj+sQUT9MyMFCLlTL7kWmBZxll2VTCAAVOpejKyjvhhYFNEIFC+JB6crZmlXb1QKu0Vfqgw04G94WUNnlgDylJAErXMYgFDEIRroqVk9P2AIwb/+ZEyYULF85GyQIm9dBvl4Shtrg0LjFB57XaOGU/7AsDTKggimlibsaS5ZlZrpeSTwHcCEB14+DFJkmOUrvnaH2g6vLy0/w2Rl99jHuKfscBNEtzouHbb789C5SfwcnuI6yqR+kDK5jFUYdgTxk+pIHVb4IJ1dZpa2VYyUGY8DuD2kQiupnIdgqlHT5x4kSLimuA1KpsnwEVE5UCgFMCK8vxRzX0VadCnxyr2awQMIeZ8A6i214Yc5IAMKikV1pIlU49k3u8+LtiNa4NM+4I98v8Azwrr8kzhzTMSuErlRCf4TfJiDzjiXGdrCioRaZbD8xSMi22at4zfJ/ingEWdxLAJGjz77777r98FDc5jQfkQHWEiyfxH9Pka3VM7i4AW4ROUbTwFijtLAP8iQGtQUBKaV/et29fHOAaAamNVse1ZegtJ0rCxvCqVasSZPqKbCq1+AsqCYoyAulLmLIJH7d/zZo1xzGti21tbVn0lbbb5SsdR391FOOcjWKaWFGBkp9WWQhmjXHdaUCZ4F5F6HrrA9WftsyYcxk+zdPe3i6n/vuZM2cG0HsZFQXef/99x0flGOwMbVwbA1xcRjSrRNMsAKSl2PdS0FZa4VCW79N8v/A7h5Q27NlJSnIJf9RM+L4DPGX8tSq1qPRB7udESXxbxfLly5MAKJCcnRzVmbQDzBiO0r6lfW0AcwGYCyd7rqOjQwo929TUNMRknXoU96ge5VU9SlFMThlgFB1tFAvw1Sr5y8odtXGqaCb5AGCqfrZIGzIG+Skf5hljrCsYtxMYuOcgZDhJf9rhmXF0FOey0CzDg4tfffXV9tWrV68CsH+wavfLLLXqoqrKwAr/+IQOTGz9hg0b9h4+fFhl4SYm0MpgpJGURmjnV1HSN1eULNiWV317B+0z2h69OMJYZgQSzJNp57744ovxQ4cO9TO2flKlsAk0fhtITBTzM/kyAYbZ5ggqU/QvyZOW3tJEYYd81yTs7IGlfbqWo07uRkw1mkv9trLYjVhRhMUYxfyH33jjjUnLKEWcHPafwheluUh1m35NlsHwMZ0RoxjAGNedJpndg8M+sH///hQALeTaJTxUSltK3k8/QXSMNjUrCqOkHZAGLIVN+572FW2rfJQViFo8FQp5Vn7Pnj0jmM9P33///Xk5V5zvFP1fHcWcepSNYtJbmGEXC+ooeW2fsZhjnB9hXN302688kdRngnvnY3YlBniVkQM8f5T+cvJnZBXuuQp3cnonzPtIW7Qba7es8QEuAMqigKdUqoWSZaymakgNDFqpTbnSEZkm0SwISLX4uVo5SqUcBVJCz7lA+8KY2hk919a/dNjqJb7M9d5777kAy7Vjx44h/Mbu119//QKBpp9J/LeyBlst1b3ar3juuefatP/HPdpZnhZIqjrgQrSRkcaXTjCPKcxzL+lX15tvvlmuSkNB+uYxCn3MvJ81MQuUfIbZ8U3t3bv3HAM9KwaZkoXqUc6uC6sapJWwwi08uAVQFhilHdNqYueO0sZxV+Pj6vAHVfZ1IQPQoAHpawPUP+cqFlqnLWbpZQ8FkI8//ngaX3gGczgDk6YlWDm3UhVW1aMKlTxzkcCdVfKqR0nJEwWll0YZ0wD9DzDHAfySU+K2dTMdmrOSbwihzZP8FUDJL2CPefKy/ObNm2d3bDVwOlXIjQCYyr4JnGorNi5fkeAhUsxFrMo0zjpKAKhftmxZUhFJItLqI3PIaa+nbTKmd83Kqg7dK50moGGmMxnErMZzFL83BFD9XPsiQN1vtZbZWQ4QQOqUtrDwUQDQzrIPYJQjemlprgW3sbR2uHfu3HnF60xKyYQJVpPT3uUVQCnSqDZOh7MvjJnzTj2KaypZoSYeovqRU48C+VJbj0Jpe43SrrP1KJmQdn0NhX8z/miD3uO40XcebEFOK6wVJ9hqxQcBcJDJTmGGacagrfUmVSNsPUpbaKpR6R9Tj6qUkpe1cJ+PiDYE8EN68UNA2hdS5noRbhaowj07MUuDkq4ySbIqCUm9hcL5JkCrUT1K+3lyeDhqN/6oGP1R29LSom3z2Z1f82AlqbtpG2k/Kkj83XcdxC65CDFLLMBZX7jnnnvW4Qv7kQ8vYG1Pw5pyPVvmxESLWMAYn87OsurmRGnvwMDAlOQF/eUAQiXmcVM9+MOrlcLkCmduTyjJNCmNIka8oB6lymYdK6Kd3yghtohBhueqRxkmjRhHfdAwaYd1jH/3xRCrryyz0FeTLMoZQBlm0VIs1gxRbAm+rekG6lHd9OPsLNPvn9ajvHNUNb0mQS4zVU1VNxu180vHpbJbNE1WSls7vzjDOINQDuWxRTulC9xzygAkfXTCbHH/W4dllgCQo9d37Q4hTLWltZvUaOS11157FNBeYCx3ilkak5gNYCH85zyZpHwqkc/HvdpZ9is/NAubNREvNxdQc9WjklfVo+TEC+tRpaYelZDS1kC0ysbWZVpHaB0muh29mS9LWObLBLUoki0wKwNDLuISLmFSqoNnr1OPKpMSZ9zFph519ho7y1fUoyxQPvNKc8w01aOkuJxKJAOSWJzhQdr5rZJG0vsDDCBqo5qpSY2bVOQrA1bXf+p9JRuRxS50k5M1MOksOeIpfb700kvd+KX/4rqnTKYwu+uNiVZxT4BI6kVyhI4cOSK2B+TD6E+JdN7sLM++5OE15nZ1PUq5mkoupQX1qJDqUTCpBgee4MEBW8S3O7+07wxI281L9f/Zt/oBykZsfVcQQeONmnrUOcaVVi0duWB3lh0lD6tCahx6NVKVAy/M/J2Wxiq0MZIyG7V/qEcFTD2qiqa3dCugsl5ZzkNlW4+aZ+tR2vlV5m/rOoY5n9P+x5ja8E15gwQAFOm6urr0uqPzPwgUsu1763/YNjImqXFxTxr/NGzrUYxT9f+yq+tRqsmDgSYxSjTsRXRPYsqqR6UL61HegtXJy7w4xniYyqgpEsgaokilotqKFSvq+XsupX3e+KJ1tAOuW3TYqCgmaIzHjx+fAZBOwOjUzrKUPIv8vPwvTJHbcJS8qg8cC2kZHPsEyXOeiHoJ0PIwVIXAWdPLAZLKlZOA1Af9BtAkgyq1YGpJOlpAZGsnrEauUtpODckIyM20i65bfFg9KBbqJRGNl+Rdn8dWrlw5DDD6/zX/oD1ofZxABaBShPISgYlaH+zo6Di8fv36Kcw4rxRqFihTj7oMqiqSlZCKlKqiyecCHJ62u2NGH2VNRBAopw2T9PLXOddtchQyS2NGjUv86v1OCd9J9J/eiJlgvo3mXfeQoiCWUwEh7lJJGIua4J7DkOM3AoMCVNoClQfZLKlIZPXq1Sr7Pk4UWcHKLFCV0pZHAGnK+KOdJrr9/HeU9v8XswQWLHIA2759u8Z/Ec23ngyim98eA4wntWepqGhEsvTgQ62trRVvvfVWA9dtXbt2reNzBZRKpnmJM+U1CxcuLF60aFEtdG3BF1Xb/w9jjowptp2lHad1u27TQ2ApIiodk09V9QP/MwUgXTDOb15Z0lwy9jVtI5MSqnpjhud6e3tjYKLfXP8rwADG5nQlzK8Z8QAAAABJRU5ErkJggg==",
            duration: c.duration || 600,
            WC: c.onpage || null,
            xC: c.beforePageChange || null,
            yC: c.behind || null
        };
        0 == 1 * this.$.duration && (this.$.duration = 1);
        this.df = null;
        this.Wl = this.Vl = !1;
        this.Hn = [];
        this.Od = null;
        this.Lc = [];
        this.yj = null;
        a.M("scenechange", this.Kn.bind(this));
        a.G.addEventListener("stageRotateChange", this.Kn.bind(this))
    }
    V.Bb = -1;
    V.j = { Zh: "ladder", Yh: "cover", uj: "appear", Il: "fadein", Sc: "box", $e: "flip", wj: "paging", vj: "centerRotate" };
    V.Xa = { Up: "none", Jl: "zoomout", ev: "fadeout", Sc: V.j.Sc };
    V.B = { ta: "vertical", mC: "horizontal" };
    V.ga = { $h: "next", ai: "previous" };
    var hg = V.prototype;
    hg.Lq = function(a) { var b = this.J;
        null == a && (a = b.ca.indexOf(b.$a)); if (0 != a || !b.Xf) return --a, a <= (b.Xf ? 0 : -1) ? this.$.loop ? b.ca.length - 1 : null : a };
    hg.Jq = function(a) { var b = this.J;
        null == a && (a = b.ca.indexOf(b.$a)); if (0 != a || !b.Xf) return a += 1, a >= b.ca.length ? this.$.loop ? b.Xf ? 1 : 0 : null : a };
    hg.Fi = function() { return this.Vl || this.Wl };
    hg.Mx = function() {
        var a = this;
        if (!a.rs) {
            a.rs = !0;
            a.xB();
            var b = a.kk.G,
                c = b.O().parentNode;
            a.Fe() == V.j.Sc && a.uz();
            a.Fe() != V.j.Sc && a.Fe() != V.j.$e || a.qz();
            var d = "0% { opacity: 0; " + K.prefix.s + "transform: rotate(270deg) translateY(0);}  50% { opacity: 0.75;} 100% { opacity: 0; " + K.prefix.s + "transform:rotate(270deg) translateY(-16px);}",
                e = "0% { opacity: 0; " + K.prefix.s + "transform: rotate(0deg) translateY(0);}  50% { opacity: 0.75;} 100% { opacity: 0; " + K.prefix.s + "transform:rotate(0deg) translateY(-16px);}",
                f = "0% { opacity: 0; " + K.prefix.s + "transform: rotate(90deg) translateY(0);}  50% { opacity: 0.75;} 100% { opacity: 0; " + K.prefix.s + "transform:rotate(90deg) translateY(-16px);}",
                g = F.ue("0% { opacity: 0; " + K.prefix.s + "transform: rotate(180deg) translateY(0);}  50% { opacity: 0.75;} 100% { opacity: 0; " + K.prefix.s + "transform:rotate(180deg) translateY(-16px);}"),
                d = F.ue(d),
                e = F.ue(e),
                h = F.ue(f),
                k = F.ue("0% {" + K.prefix.s + "transform: rotate(0);} 100% {" + K.prefix.s + "transform: rotate(360deg);}"),
                l = a.$,
                f = document.createElement("div");
            f.innerHTML = '<img src="' + l.Nk + '" style= "display:none;z-index: 20; position: absolute; width: 37px; left: 0; right: 0; margin: 0 auto; ' + K.prefix.s + "animation: " + g + " 2s infinite; top: 10px; " + K.prefix.s + 'transform: rotate(180deg);" /><img src="' + l.Nk + '" style= "display:none;z-index: 20; position: absolute; width: 37px; top:50%;margin-top:-12px;' + K.prefix.s + "animation: " + d + " 2s infinite; right: 10px; " + K.prefix.s + 'transform: rotate(270deg);" /><img src="' + l.Nk + '" style= "display:none;z-index: 20; position: absolute; width: 37px; left: 0; right: 0; margin: 0 auto; ' +
                K.prefix.s + "animation: " + e + " 2s infinite; bottom: 10px; " + K.prefix.s + 'transform: rotate(0deg);" /><img src="' + l.Nk + '" style= "display:none;z-index: 20; position: absolute; width: 37px; top:50%;margin-top:-12px;' + K.prefix.s + "animation: " + h + " 2s infinite; left: 10px; " + K.prefix.s + 'transform: rotate(90deg);" /><div style="z-index: 20; position: absolute; width: 37px; left: 0; right: 0; margin: 0 auto; display:none;' + K.prefix.s + "animation: " + k + ' 1s infinite linear; border-radius: 100%; border:2px solid #fff; border-top-color: rgba(255,70,0,0.6);border-left-color: rgba(255,70,0,0.6); width: 16px; height: 16px;"/>';
            var m = [function() { a.dl() }, function() { a.nextPage() }, function() { a.nextPage() }, function() { a.dl() }],
                n = K.Db,
                g = K.qb;
            Array.prototype.slice.call(f.childNodes, 0).forEach(function(b, d) { a.Lc.push(b);
                c.appendChild(b);
                b.addEventListener(n, m[d]) });
            var p = !1,
                q = null,
                r = null,
                v = 0;
            b.c.M(n, function(b) { a.$.Lr || (p = !0, q = b.Fb(), r = b.Gb(), v = (new Date).getTime()) }, !1, -50);
            b.c.M(g, function(b) {
                if (p && (p = !1, !(2500 < (new Date).getTime() - v))) {
                    var c, d;
                    c = b.Fb() - q;
                    d = b.Gb() - r;
                    a.$.direction == V.B.ta ? 32 < d ? (p = !1, a.dl(), b.stopImmediatePropagation()) :
                        -32 > d && (p = !1, a.nextPage(), b.stopImmediatePropagation()) : 32 < c ? (p = !1, a.dl(), b.stopImmediatePropagation()) : -32 > c && (p = !1, a.nextPage(), b.stopImmediatePropagation())
                }
            }, !1, -50)
        }
    };

    function ig(a, b, c, d) {
        var e = this,
            f = b.mb,
            g = f + b.Ac - 1;
        if (a.ao(f, g)) e.df = null, d();
        else {
            var h = e.Lc[4];
            b = e.$.direction == V.B.ta ? 0 : 3;
            var k = e.$.direction == V.B.ta ? 2 : 1,
                l = e.Lc[c ? k : b];
            h.style.top = c ? "" : "10px";
            h.style.bottom = c ? "10px" : "";
            h.style.display = "block";
            l.style.display = "none";
            var m = function() { a.ao(f, g) && (a.Fa("framesLoadedChange", m), h.style.display = "none", l.style.display = "block", e.df = null, d()) };
            a.addEventListener("framesLoadedChange", m);
            e.df = function() {
                a.Fa("framesLoadedChange", m);
                h.style.display = "none";
                l.style.display =
                    "block";
                e.df = null
            }
        }
    }
    hg.nextPage = function() { var a = this,
            b = this.kk; if (!a.Fi()) { a.df && a.df(); var c = b.c,
                d = c.ca[a.Jq(c.ca.indexOf(c.$a))];
            d && ig.bind(a)(c, d, !0, function() { a.Od = V.ga.$h;
                c.rc(d.mb, null);
                c.Le = !0 }, b) } };
    hg.dl = function() { var a = this,
            b = a.kk;
        a.df && a.df(); if (!a.Fi()) { var c = b.c,
                d = c.ca[a.Lq(c.ca.indexOf(c.$a))];
            d && ig.bind(a)(c, d, !1, function() { a.Od = V.ga.ai;
                c.rc(d.mb, null);
                c.Le = !0 }, b) } };
    hg.Kn = function() {
        var a = this.kk.c,
            b = a.G,
            c = a.ca.indexOf(a.$a),
            d = this.Lc,
            e = this.$.Lr || this.J.Xf && -1 == c,
            f = this.$.direction == V.B.ta,
            e = e || "firstpage" == a.cc().V.Yb.type && a.$a == a.ca[0],
            a = (e ? 0 : 15) & (f ? 4 : 2);
        null == this.Lq(c) && (a &= -2, a &= -9);
        null == this.Jq(c) && (a &= -3, a &= -5);
        .1 > Math.abs(b.lg - Math.PI / 2) ? a = a << 1 | (a & 8) >>> 3 : .1 > Math.abs(b.lg + Math.PI / 2) && (a = a >>> 1 | (a & 1) << 3);
        d.length && (d[0].style.display = a & 1 ? "block" : "none", d[1].style.display = a & 2 ? "block" : "none", d[2].style.display = a & 4 ? "block" : "none", d[3].style.display = a & 8 ?
            "block" : "none")
    };
    hg.xB = function() { var a = K.prefix.s + "transition-duration: " + (this.$.duration || 600) + "ms!important;";
        F.$d(this.Dl, a);
        F.$d(this.ol, "z-index: 1") };
    hg.uz = function() { F.$d(this.Cl, K.prefix.s + "transition-timing-function: linear;") };
    hg.qz = function() { var a = K.prefix.s + "backface-visibility: hidden;";
        F.$d(this.sj, K.prefix.s + "transform-style: preserve-3d;");
        F.$d(this.sj + ' > [data-type="scene"]', a) };
    hg.Or = function(a) { this.yj = a };
    hg.Fe = function(a, b) { var c = (this.yj || {}).transition || this.$.transition;
        0 == b && a.Xf && (c = V.j.uj); return c };
    hg.tw = function(a, b) { var c = (this.yj || {}).$s || this.$.$s,
            d = this.Fe(a, b);
        d == V.j.uj ? c = V.Xa.Up : d == V.j.Sc ? c = V.Xa.Sc : d == V.j.$e && (c = V.Xa.Up); return c };
    hg.Gw = function(a, b, c) {
        var d = this.Fe(a, b);
        a = a.La();
        var e = this.$.direction,
            f = c > b;
        this.Od == V.ga.$h ? f = !0 : this.Od == V.ga.ai && (f = !1);
        b = new Mc;
        c = b.T;
        "appear" == d ? c.L(0, 1E6) : d == V.j.Sc ? (d = a.U.X / 2, f = a.U.Y / 2, a = this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(f, a.Ga / 2), e = e == V.B.ta ? "X" : "Y", b.Ya = "perspective(" + 2 * a + "px) translateZ(" + -a + "px) rotate" + e + "(0deg)", b.bc(K.prefix.s + "transform-origin: " + d + "px " + f + "px " + -a + "px;")) : d == V.j.$e ? f ? (d = this.$.direction != V.B.ta ? 2 * a.Ha : 2 * a.Ga, e == V.B.ta ? (e = "X", c = Math.max(0, (a.U.Y -
            a.Ga) / 2), f = a.U.X / 2) : (e = "Y", f = Math.max(0, a.U.X / 2 - a.Ha / 2), c = a.U.Y / 2), b.Ya = "perspective(" + d + "px) rotate" + e + "(0deg)", a = K.prefix.s + "transform-origin: " + f + "px " + c + "px 0px;", b.bc(a)) : (c.Za(), b.Ya = "translateZ(0px)") : d == V.j.wj ? (d = a.U.X / 2, f = a.U.Y / 2, this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(f, a.Ga / 2), c.Za(), b.bc("z-index: 1000;"), c.L(-d, -f), c.Lb(1, 1), c.L(d, f)) : d == V.j.vj && (d = a.U.X / 2, f = a.U.Y / 2, this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(f, a.Ga / 2), e = e == V.B.ta ? "X" : "Y", c.Za(), d = this.$.direction !=
            V.B.ta ? 2 * a.Ha : 2 * a.Ga, "Y" == e ? (b.Ya = "perspective(" + d + "px) rotateY(0deg)", a = K.prefix.s + "transform-origin: " + a.U.X / 2 + "px 0 0;") : (b.Ya = "perspective(" + d + "px) rotateX(0deg)", a = K.prefix.s + "transform-origin: 0 " + a.U.Y / 2 + " 0;"), b.bc(a), b.ka.oa = 1);
        return b
    };
    hg.Fw = function(a, b, c) {
        var d = this.Fe(a, b),
            e = this.tw(a, b),
            f = this.$.direction,
            g = a.La(),
            h = c > b;
        this.Od == V.ga.$h ? h = !0 : this.Od == V.ga.ai && (h = !1);
        c = b = 0;
        var k = 1;
        d == V.j.uj ? b = 1E6 : d == V.j.Zh && (f == V.B.ta ? h ? b = -g.U.Y : b = g.U.Y : h ? c = -g.U.X : c = g.U.X);
        if (d == V.j.Zh || d == V.j.Yh || d == V.j.Il) k = .5, f == V.B.ta && 0 <= e.indexOf(V.Xa.Jl) ? (c = g.U.X * (1 - k) / 2, h || d != V.j.Yh || (b = g.U.Y / 2)) : f != V.B.ta && 0 <= e.indexOf(V.Xa.Jl) && (b = g.U.Y * (1 - k) / 2, h || d != V.j.Yh || (c = g.U.X / 2));
        a = new Mc;
        var l = a.T;
        d == V.j.Zh || d == V.j.Yh || d == V.j.Il ? (0 <= e.indexOf(V.Xa.Jl) && l.Lb(k,
            k), 0 <= e.indexOf(V.Xa.ev) && (g = a.ka, g.oa = 0)) : d == V.j.Sc ? (d = g.U.X / 2, e = g.U.Y / 2, g = this.$.direction != V.B.ta ? Math.min(d, g.Ha / 2) : Math.min(e, g.Ga / 2), f == V.B.ta ? (f = "X", h = h ? 90 : -90) : (f = "Y", h = h ? -90 : 90), a.Ya = "perspective(" + 2 * g + "px) translateZ(" + -g + "px) rotate" + f + "(" + h + "deg)", g = K.prefix.s + "transform-origin: " + d + "px " + e + "px " + -g + "px;", a.bc(g)) : d == V.j.$e ? h ? (l.Za(), h = this.$.direction != V.B.ta ? 2 * g.Ha : 2 * g.Ga, f == V.B.ta ? (f = "X", d = Math.max(0, (g.U.Y - g.Ga) / 2), e = g.U.X / 2, g = 90) : (f = "Y", e = Math.max(0, g.U.X / 2 - g.Ha / 2), d = g.U.Y / 2, g = -90),
            a.Ya = "perspective(" + h + "px) rotate" + f + "(" + g + "deg)", g = K.prefix.s + "transform-origin: " + e + "px " + d + "px 0px;", a.bc(g)) : (l.Za(), a.Ya = "translateZ(-1px)") : d == V.j.wj ? (d = g.U.X / 2, e = g.U.Y / 2, l.Za(), h && a.bc("z-index: 1000;"), l.L(-d, -e), l.Lb(.01, .01), l.L(d, e)) : d == V.j.vj && (d = g.U.X / 2, e = g.U.Y / 2, this.$.direction != V.B.ta ? Math.min(d, g.Ha / 2) : Math.min(e, g.Ga / 2), f = f == V.B.ta ? "X" : "Y", l.Za(), h = this.$.direction != V.B.ta ? 2 * g.Ha : 2 * g.Ga, "Y" == f ? (a.Ya = "perspective(" + h + "px) rotateY(180deg)", g = K.prefix.s + "transform-origin: " + g.U.X / 2 +
            "px 0 0;") : (a.Ya = "perspective(" + h + "px) rotateX(180deg)", g = K.prefix.s + "transform-origin: 0 " + g.U.Y / 2 + "px 0;"), a.bc(g), g = a.ka, g.oa = 0);
        l.L(c, b);
        return a
    };
    hg.sw = function(a, b, c) {
        var d = a.La(),
            e = this.Fe(a, b);
        a = this.$.direction;
        c = c < b;
        this.Od == V.ga.$h ? c = !1 : this.Od == V.ga.ai && (c = !0);
        var f = 0,
            g = 0,
            h = 1;
        e == V.j.Zh || e == V.j.Yh ? a == V.B.ta ? c ? f = -d.U.Y : f = d.U.Y : c ? g = -d.U.X : g = d.U.X : e == V.j.Il && (h = 0);
        b = new Mc;
        var k = b.T;
        k.L(g, f);
        b.ka.oa = h;
        e == V.j.Sc ? (e = d.U.X / 2, f = d.U.Y / 2, d = this.$.direction != V.B.ta ? Math.min(e, d.Ha / 2) : Math.min(f, d.Ga / 2), a == V.B.ta ? (a = "X", c = c ? 90 : -90) : (a = "Y", c = c ? -90 : 90), b.Ya = "perspective(" + 2 * d + "px) translateZ(" + -d + "px) rotate" + a + "(" + c + "deg)", d = K.prefix.s + "transform-origin: " +
            e + "px " + f + "px " + -d + "px;", b.bc(d)) : e == V.j.$e ? c ? (k.Za(), c = this.$.direction != V.B.ta ? 2 * d.Ha : 2 * d.Ga, a == V.B.ta ? (a = "X", k = Math.max(0, (d.U.Y - d.Ga) / 2), e = d.U.X / 2, d = 90) : (a = "Y", e = Math.max(0, d.U.X / 2 - d.Ha / 2), k = d.U.Y / 2, d = -90), b.Ya = "perspective(" + c + "px) rotate" + a + "(" + d + "deg)", d = K.prefix.s + "transform-origin: " + e + "px " + k + "px 0px;", b.bc(d)) : (k.Za(), b.Ya = "translateZ(-1px)") : e == V.j.wj ? (e = d.U.X / 2, f = d.U.Y / 2, this.$.direction != V.B.ta ? Math.min(e, d.Ha / 2) : Math.min(f, d.Ga / 2), k.Za(), b.bc("z-index: 1000;"), k.L(-e, -f), k.Lb(.01, .01),
            k.L(e, f)) : e == V.j.vj && (e = d.U.X / 2, f = d.U.Y / 2, this.$.direction != V.B.ta ? Math.min(e, d.Ha / 2) : Math.min(f, d.Ga / 2), a = a == V.B.ta ? "X" : "Y", k.Za(), c = this.$.direction != V.B.ta ? 2 * d.Ha : 2 * d.Ga, "Y" == a ? (b.Ya = "perspective(" + c + "px) rotateY(180deg)", d = K.prefix.s + "transform-origin: " + d.U.X / 2 + "px 0 0;") : (b.Ya = "perspective(" + c + "px) rotateX(180deg)", d = K.prefix.s + "transform-origin: 0 " + d.U.Y / 2 + "px 0;"), b.bc(d), b.ka.oa = 0);
        return b
    };
    hg.rw = function(a, b, c) {
        var d = this.Fe(a, b),
            e = new Mc,
            f = e.T;
        a = a.La();
        var g = this.$.direction;
        b = c < b;
        this.Od == V.ga.$h ? b = !1 : this.Od == V.ga.ai && (b = !0);
        d == V.j.Sc ? (d = a.U.X / 2, b = a.U.Y / 2, a = this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(b, a.Ga / 2), g = g == V.B.ta ? "X" : "Y", e.Ya = "perspective(" + 2 * a + "px) translateZ(" + -a + "px) rotate" + g + "(0deg)", a = K.prefix.s + "transform-origin: " + d + "px " + b + "px " + -a + "px;", e.bc(a)) : d == V.j.$e ? b && (f.Za(), f = this.$.direction != V.B.ta ? 2 * a.Ha : 2 * a.Ga, g == V.B.ta ? (g = "X", d = Math.max(0, (a.U.Y - a.Ga) / 2),
            b = a.U.X / 2) : (g = "Y", b = Math.max(0, a.U.X / 2 - a.Ha / 2), d = a.U.Y / 2), e.Ya = "perspective(" + f + "px) rotate" + g + "(0deg)", a = K.prefix.s + "transform-origin: " + b + "px " + d + "px 0px;", e.bc(a)) : d == V.j.wj ? (d = a.U.X / 2, b = a.U.Y / 2, this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(b, a.Ga / 2), f.Za(), f.L(-d, -b), f.Lb(1, 1), f.L(d, b)) : d == V.j.vj && (d = a.U.X / 2, b = a.U.Y / 2, this.$.direction != V.B.ta ? Math.min(d, a.Ha / 2) : Math.min(b, a.Ga / 2), g = g == V.B.ta ? "X" : "Y", f.Za(), f = this.$.direction != V.B.ta ? 2 * a.Ha : 2 * a.Ga, "Y" == g ? (e.Ya = "perspective(" + f + "px) rotateY(0deg)",
            a = K.prefix.s + "transform-origin: " + a.U.X / 2 + "px 0 0;") : (e.Ya = "perspective(" + f + "px) rotateX(0deg)", a = K.prefix.s + "transform-origin: 0 " + a.U.Y / 2 + "px 0;"), e.bc(a), e.ka.oa = 1);
        return e
    };

    function jg(a, b, c, d, e, f) {
        function g() {
            var b;
            b = 0 == a ? k.Wl : 1 == a ? k.Vl : void 0;
            b && (h(!1), k.Hn.push(function() {
                K.mt && p.removeEventListener(K.El, g);
                n.ha.splice(n.ha.indexOf(k.Dl), 1);
                n.Ye();
                f && f();
                if (!k.Fi()) { var a = n.ha.indexOf(k.ol);
                    0 <= a && n.ha.splice(a, 1);
                    q == V.j.Sc && (a = n.ha.indexOf(k.Cl), 0 <= a && n.ha.splice(a, 1), n.c.C.Ya = null, n.c.C.bc(null)); if (q == V.j.Sc || q == V.j.$e) a = n.G.ha.indexOf(k.sj), 0 <= a && (n.G.ha.splice(a, 1), n.G.Ye());
                    n.O().style.cssText += K.prefix.s + "transform-origin: inherit;";
                    n.Si(null, !0, !0) } k.Od = null;
                n.G.c.F(n.G.c.Gr)
            }), k.Fi() || (k.Hn.forEach(function(a) { a() }), k.Hn = []))
        }

        function h(b) { 0 == a ? k.Wl = b : 1 == a && (k.Vl = b) }
        var k = this,
            l = k.$,
            m = (b || c).G.c;
        if (0 == a) var n = c;
        else 1 == a && (n = b);
        var p = n.P;
        h(!0);
        var q = k.Fe(m, d);
        0 == a ? (n.c.C = k.sw(m, d, e), n.c.Ka = !0, n.ha.push(k.ol)) : 1 == a && (n.c.C = k.Gw(m, d, e));
        q == V.j.Sc && n.ha.push(k.Cl);
        if (q == V.j.Sc || q == V.j.$e) n.G.ha.push(k.sj), n.G.Ye();
        n.Si(null, !0, !0);
        setTimeout(function() {
            n.ha.push(k.Dl);
            n.Ye();
            1 == a && p.getBoundingClientRect();
            setTimeout(function() {
                if (0 == a) var b = k.rw(m, d, e);
                else 1 == a && (b = k.Fw(m, d, e));
                n.c.C.td(b) ? (b = (k.yj || {}).duration || k.$.duration, 0 == a ? b = 0 : q == V.j.uj && (b = 0), setTimeout(g, b)) : (n.c.C = b, n.Si(null, !0, !0))
            }, 0)
        }, 1);
        K.mt ? p.addEventListener(K.El, g) : setTimeout(g, l.duration)
    }
    hg.Rv = function(a, b, c, d) { jg.call(this, 0, a, b, c, d, void 0) };
    hg.Rx = function(a, b, c, d, e) { jg.call(this, 1, a, b, c, d, e) };
    var kg = V;

    function lg(a) { lg.f.constructor.apply(this, arguments) } t.extend(lg, Tf);
    lg.prototype.ci = function(a, b) { var c = b.tf,
            d = b.c,
            e = c.ka.oa,
            f = a / this.ni,
            c = c.vc();
        c.ka.oa = e * f;
        d.le(c) };

    function mg() {} mg.Jz = "dynamic";
    mg.cA = "input";
    t.ra(mg, ["DYNAMIC", mg.Jz, "INPUT", mg.cA]);

    function ng() {} ng.Ze = "left";
    ng.ga = "center";
    ng.ae = "right";
    ng.xt = "justify";
    ng.Cf = "top";
    ng.ve = "bottom";
    t.ra(ng, ["LEFT", ng.Ze, "CENTER", ng.ga, "RIGHT", ng.ae, "JUSTIFY", ng.xt, "TOP", ng.Cf, "BOTTOM", ng.ve]);

    function og() { this.Ff = ng.Ze;
        this.fi = !1;
        this.Ic = new qd(0, 0, 0, 1);
        this.pi = "Arial";
        this.Gi = !1;
        this.Vi = 12;
        this.Gk = !1;
        this.dr = 0 } t.H("Text.TextFormat", og);

    function pg() { pg.f.constructor.apply(this, arguments);
        this.Yf = this.Na = "";
        this.ng = ng.Cf;
        this.Yi = this.Pb = null;
        this.fe = new og;
        this.ak = this.Cd = null;
        this.ks = "text";
        this.Nc = this.Zm = null;
        this.Ck = 0;
        this.zc = [];
        this.fd = new Ad;
        t.ob(this, ["graphics", this.Uj]) } t.extend(pg, $c);
    var qg = pg.prototype;
    qg.I = "Text";
    qg.Uj = function() { return this.fd };
    qg.xb = function() { return this.Na };
    var rg = /[&"'<>\n]/g,
        sg = { "&": "&amp;", '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "\n": "<br />" };

    function tg(a) { return sg[a] }
    pg.DA = function(a) { return a.replace(rg, tg) };
    qg.wa = function(a, b) { try { if (a = a.toString(), a != this.Na || b) this.Na = a, "text" == this.ks && (a = pg.DA(a).replace(/  /g, " &#160;")), this.Yf = a + '<span style="width:1px;height:1px;overflow:hidden;display:inline-block;"> </span>', this.F(this.ea) } catch (c) {} };
    qg.j = function() { return this.Yf };
    qg.vs = function() { this.us() };
    qg.us = function() { var a = ke.Fl(this.Zm, null, !1, !0, this);
        this.wa(a) };
    pg.Xb = function(a) {
        function b(m, n) {
            b.f.constructor.apply(this, arguments);
            null != n && (this.Ka = n);
            m && m.vb(this);
            this.A = a;
            this.wa(d);
            this.ng = e;
            1 * c.presetText && (this.Zm = d, ke.xA(this.Zm) && (this.of = this.vs), this.vs());
            g && (this.Ua = Re.ga(f + "-" + a.guid, g, d), this.lb = [this.Ua]);
            var p = this.fe;
            p.pi = f;
            p.Ff = h;
            p.fi = c.fontWeight;
            p.Gk = c.textDecoration;
            p.Gi = c.fontStyle;
            p.dr = 1 * c.letterSpace || 0;
            p.Ck = c.textLineHeight || c.lineHeight || "100";
            p.I = a.type;
            2026 == a.type ? (p.nz = c.tprecision, p.kz = c.tdirection, p.lz = c.tlength, p.jz = c.talwayson,
                p.mz = c.tloop) : 2027 == a.type ? (p.oy = c.rmin, p.ny = c.rmax, p.my = c.rinterval) : 2029 == a.type && (p.Gx = c.gyroType);
            this.Yi = c.lineWidth;
            var q = c.strokeColor;
            this.Pb = qd.parse(q);
            p.Ic = new qd(k.r, k.g, k.b, k.a);
            this.Pb = qd.parse(q);
            this.Yi = c.lineWidth;
            p.Vi = l
        }
        var c = a.param,
            d = null == c.customValue ? unescape(c.textContent) : c.customValue,
            e = { top: ng.Cf, middle: ng.ga, bottom: ng.ve }[c.textVAlign],
            f = c.fontFamily;
        "simhei" == f.toLowerCase() && (f = '"Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimHei, sans-serif');
        var g = c.fontFace,
            h = {
                left: ng.Ze,
                center: ng.ga,
                right: ng.ae,
                justify: ng.xt
            }[c.textAlign],
            k = c.fillInfo.fillColors[0],
            l = c.fontSize;
        2026 == a.type ? t.extend(b, window.Mugine.Text.TextTimer) : 2027 == a.type ? t.extend(b, window.Mugine.Text.TextRandom) : 2029 == a.type ? t.extend(b, window.Mugine.Text.TextGyro) : t.extend(b, pg);
        return b
    };
    t.H("Text.TextField", pg);
    var ug = pg;

    function vg(a) { this.Sf = a[U.B.Ru] || a[U.B.Su] || a[U.B.Xu] || a[U.B.Yu];
        this.oz = 1 * a[U.B.av] || 0;
        this.ii = 1 * a[U.B.Lu] || 0;
        this.Br = a[U.B.Wu] || U.B.yl;
        this.Lv = null == a[U.B.Wo] ? 360 : a[U.B.Wo];
        vg.f.constructor.apply(this, arguments) } t.extend(vg, Tf);
    vg.prototype.ci = function(a, b) {
        var c = b.tf,
            d = b.Bk,
            e = c.ka.oa,
            f = e,
            g = a / this.ni,
            c = c.vc(),
            h = c.T,
            k = 0,
            k = window.globalScalar || 1,
            l = (d.vd() + d.Ma() / 2) * k,
            m = (d.Vc() + d.Aa() / 2) * k;
        if (this.I == U.j.ap || this.I == U.j.pl) return this.I == U.j.pl && (g = 1 - g), f = this.Da(g, [{ w: 0, u: 0 }, { w: 1, u: 1 }]), c.ka.oa = e * f, c;
        if (this.I == U.j.yp) return p = this.Da(g, [{ w: 0, u: { y: (this.Br == U.B.yl ? 1 : -1) * d.Aa() * .5, alpha: 0 } }, { w: 1, u: { y: 0, alpha: 1 } }]), h.L(0, p.y), c.ka.oa = e * p.alpha, c;
        if (this.I == U.j.zp) return p = this.Da(g, [{ w: 0, u: { y: 0, alpha: 1 } }, {
            w: 1,
            u: {
                y: (this.Br ==
                    U.B.yl ? -1 : 1) * d.Aa() * .5,
                alpha: 0
            }
        }]), h.L(0, p.y), c.ka.oa = e * p.alpha, c;
        if (this.I == U.j.ql || this.I == U.j.cp) return this.I == U.j.ql ? (k = this.Da(g, [{ w: 0, u: Math.PI / 2 }, { w: .4, u: -20 / 180 * Math.PI }, { w: .6, u: 10 / 180 * Math.PI }, { w: .8, u: -5 / 180 * Math.PI }, { w: 1, u: 0 }], wg) * (this.ii ? 1 : -1), f = this.Da(g, [{ w: 0, u: 0 }, { w: .6, u: 1 }, { w: 1, u: 1 }], wg)) : (k = this.Da(g, [{ w: 0, u: 0 }, { w: .3, u: -15 / 180 * Math.PI }, { w: 1, u: Math.PI / 2 }]) * (this.ii ? -1 : 1), f = this.Da(g, [{ w: 0, u: 1 }, { w: .3, u: 1 }, { w: 1, u: 0 }], wg)), d = h.yc, h.Za(), h.nb(-l, -m), h.lc = k, h.rf(k), 1 == g || d || (h.Me(Math.max(b.sm(),
            b.rm()), 50), h.Cc = 50), h.nb(l, m), c.ka.oa = e * f, c;
        if (this.I == U.j.vl || this.I == U.j.wl || this.I == U.j.nl || this.I == U.j.rj) {
            if (this.I == U.j.vl) var n = this.Da(g, [{ w: 0, u: .3 }, { w: .2, u: 1.1 }, { w: .4, u: .9 }, { w: .6, u: 1.03 }, { w: .8, u: .97 }, { w: 1, u: 1 }], xg),
                f = this.Da(g, [{ w: 0, u: 0 }, { w: .6, u: 1 }, { w: 1, u: 1 }], xg);
            else if (this.I == U.j.wl) n = this.Da(g, [{ w: 0, u: 1 }, { w: .2, u: .9 }, { w: .5, u: 1.1 }, { w: .55, u: 1.1 }, { w: 1, u: .3 }]), f = this.Da(g, [{ w: 0, u: 1 }, { w: .5, u: 1 }, { w: 1, u: 0 }]);
            else if (this.I == U.j.nl || this.I == U.j.rj) this.I == U.j.rj && (g = 1 - g), p = this.Da(g, [{
                w: 0,
                u: {
                    scale: .3,
                    alpha: 0
                }
            }, { w: .5, u: { scale: 1, alpha: 1 } }, { w: 1, u: { scale: 1, alpha: 1 } }]), n = p.scale, f = p.alpha;
            h.L(-l, -m);
            h.Lb(n, n);
            h.L(l, m);
            c.ka.oa = e * f;
            return c
        }
        if (this.I == U.j.Jp || this.I == U.j.Al) return this.I == U.j.Al && (g = 1 - g), f = this.Da(g, [{ w: 0, u: 0 }, { w: 1, u: 1 }]), l = d.Aa(), n = d.Ma(), m = d.vd(), d = d.Vc(), p = this.Da(g, [{ w: 0, u: { zo: 0, scale: 0, rotate: 2 * Math.PI, Rc: -l * k } }, { w: 1, u: { zo: n * k, scale: 1, rotate: 0, Rc: 0 } }]), h.L(-(m * k + p.zo), -(d + l) * k), h.Lb(p.scale, p.scale), h.nc(this.ii ? p.rotate : -p.rotate), h.L(m * k + p.zo, (d + l) * k), h.L(0, 0), c.ka.oa = e * f, c;
        if (this.I ==
            U.j.rl || this.I == U.j.To) return p = this.I == U.j.rl ? this.Da(g, [{ w: 0, u: { alpha: 0, scale: 2, filter: 2 } }, { w: 1, u: { alpha: 1, scale: 1, filter: 0 } }]) : this.Da(g, [{ w: 0, u: { alpha: 1, scale: 1, filter: 0 } }, { w: 1, u: { alpha: 0, scale: 2, filter: 2 } }]), h.L(-l, -m), h.Lb(p.scale, p.scale), h.L(l, m), 1 != g ? c.bc(K.prefix.s + "filter: blur(" + p.filter.toFixed(2) + "px);") : c.bc(K.prefix.s + "filter: none;"), c.ka.oa = e * p.alpha, c;
        if (this.I == U.j.Fp) return n = d.Ma(), p = this.Da(g, [{ w: 0, u: { Ta: 0, rotate: 0 } }, { w: .15, u: { Ta: -.25 * n, rotate: -5 } }, { w: .3, u: { Ta: .2 * n, rotate: 3 } },
            { w: .45, u: { Ta: -.15 * n, rotate: -3 } }, { w: .6, u: { Ta: .1 * n, rotate: 2 } }, { w: .75, u: { Ta: -.05 * n, rotate: -1 } }, { w: 1, u: { Ta: 0, rotate: 0 } }
        ]), h.L(-l, -m), h.nc(p.rotate / 180 * Math.PI, p.rotate / 180 * Math.PI), h.L(l, m), h.L(p.Ta, 0), c;
        if (this.I == U.j.Hp) return p = this.Da(g, [{ w: 0, u: { Cg: 1, Dg: 1 } }, { w: .3, u: { Cg: 1.25, Dg: .75 } }, { w: .4, u: { Cg: .75, Dg: 1.25 } }, { w: .5, u: { Cg: 1.15, Dg: .85 } }, { w: .65, u: { Cg: .95, Dg: 1.05 } }, { w: .75, u: { Cg: 1.05, Dg: .95 } }, { w: 1, u: { Cg: 1, Dg: 1 } }]), h.L(-l, -m), h.Lb(p.Cg, p.Dg), h.L(l, m), c;
        if (this.I == U.j.Cp) return k = this.Da(g, [{ w: 0, u: 0 }, {
            w: 1,
            u: this.Lv / 180 * Math.PI
        }], this.oz ? function(a) { return a } : yg), h.L(-l, -m), h.nc(0 != this.ii ? k : -k), h.L(l, m), c;
        if (this.I == U.j.bp) return p = this.Da(g, [{ w: 0, u: { rotate: -360, qj: 0, scale: 1 } }, { w: .4, u: { rotate: -190, qj: 150, scale: 1 }, bd: zg }, { w: .5, u: { rotate: -170, qj: 150, scale: 1 }, bd: zg }, { w: .8, u: { rotate: 0, qj: 0, scale: 1 }, bd: wg }, { w: 1, u: { rotate: 0, qj: 0, scale: 1 }, bd: wg }]), h.L(-l, -m), h.Lb(p.scale, p.scale), h.L(l, m), h.Za(), h.nb(-l, -m), h.lc = this.ii ? -p.rotate : p.rotate, h.rf(h.lc / 180 * Math.PI), 1 == g ? (h.Me(Math.max(b.sm(), b.rm()), 0), h.Cc =
            0) : (h.Me(Math.max(b.sm(), b.rm()), 50), h.Cc = 50), h.nb(l, m, p.qj), c;
        if (this.I == U.j.Ip) return k = this.Da(g, [{ w: 0, u: 0 }, { w: .2, u: 15 }, { w: .4, u: -10 }, { w: .6, u: 5 }, { w: .8, u: -5 }, { w: 1, u: 0 }]), d = d.Vc(), h.L(-l, -d), h.nc(k / 180 * Math.PI), h.L(l, d), c;
        if (this.I == U.j.Gp) return tranY = this.Da(g, [{ w: 0, u: 0 }, { w: 1, u: this.ph ? -this.ph : -d.Aa() }]), h.L(0, tranY), c;
        if (this.I == U.j.wp) return p = this.Da(g, [{ w: 0, u: { Gd: 1, r: 0 } }, { w: .1, u: { Gd: .9, r: -3 } }, { w: .2, u: { Gd: .9, r: -3 } }, { w: .3, u: { Gd: 1.1, r: 3 } }, { w: .4, u: { Gd: 1.1, r: -3 } }, { w: .5, u: { Gd: 1.1, r: 3 } }, {
            w: .6,
            u: {
                Gd: 1.1,
                r: -3
            }
        }, { w: .7, u: { Gd: 1.1, r: 3 } }, { w: .8, u: { Gd: 1.1, r: -3 } }, { w: .9, u: { Gd: 1.1, r: 3 } }, { w: 1, u: { Gd: 1, r: 0 } }]), h.L(-l, -m), h.Lb(p.Gd, p.Gd), h.nc(p.r / 180 * Math.PI), h.L(l, m), c;
        if (this.I == U.j.tu) return p = this.Da(g, [{ w: 0, u: 0 }, { w: .111, u: 0 }, { w: .222, u: -12.5 }, { w: .333, u: 6.25 }, { w: .444, u: -3.125 }, { w: .555, u: 1.5625 }, { w: .666, u: -.78125 }, { w: .777, u: .390625 }, { w: .888, u: -.1953125 }, { w: 1, u: 0 }]), h.L(-l, -m), h.Cn(p / 180 * Math.PI, p / 180 * Math.PI), h.L(l, m), c;
        p = n = f = k = 0;
        switch (this.Sf) {
            case U.B.Cf:
                f = -(d.kf() + .1 * b.kg.Aa());
                p = 1;
                break;
            case U.B.ae:
                k = b.kg.Ma() -
                    d.vd() + .1 * b.kg.Ma();
                n = -1;
                break;
            case U.B.ve:
                f = b.kg.Aa() - d.Vc() + .1 * b.kg.Aa();
                p = -1;
                break;
            default:
                k = -(d.lf() + .1 * b.kg.Ma()), n = 1
        }
        if (this.I == U.j.Po) { var p = this.Da(g, [{ w: 0, u: { Ta: k, Rc: f, alpha: 0 } }, { w: .6, u: { Ta: 25 * n, Rc: 25 * p, alpha: 1 } }, { w: .9, u: { Ta: -10 * n, Rc: -10 * p, alpha: 1 } }, { w: 1, u: { Ta: 0, Rc: 0, alpha: 1 } }], Ag);
            h.L(p.Ta, p.Rc);
            c.ka.oa = e * p.alpha } else if (this.I == U.j.pp) p = this.Da(g, [{ w: 0, u: { x: 0, y: 0 } }, { w: 1, u: { x: -n * (this.ph ? this.ph : d.Ma()), y: -p * (this.ph ? this.ph : d.Aa()) } }]), h.L(p.x, p.y);
        else if (this.I == U.j.Qo) p = this.Da(g, [{
            w: 0,
            u: { Ta: 0, Rc: 0 }
        }, { w: .2, u: { Ta: -10 * n, Rc: -10 * p } }, { w: .4, u: { Ta: 20 * n, Rc: 20 * p } }, { w: .45, u: { Ta: 20 * n, Rc: 20 * p } }, { w: 1, u: { Ta: k, Rc: f } }]), f = this.Da(g, [{ w: 0, u: 1 }, { w: .45, u: 1 }, { w: 1, u: 0 }]), h.L(p.Ta, p.Rc), c.ka.oa = e * f;
        else if (this.I == U.j.Ap) p = this.Da(g, [{ w: 0, u: { Ta: k, rotate: -120 / 180 * Math.PI, alpha: 0 } }, { w: 1, u: { Ta: 0, rotate: 0, alpha: 1 } }]), h.L(-l, -m), h.nc(p.rotate * (this.Sf === U.B.Ze ? 1 : -1)), h.L(l, m), h.L(p.Ta, 0), c.ka.oa = e * p.alpha;
        else if (this.I == U.j.Bp) p = this.Da(g, [{ w: 0, u: { Ta: 0, rotate: 0, alpha: 1 } }, {
            w: 1,
            u: {
                Ta: k,
                rotate: 120 / 180 * Math.PI *
                    (this.Sf === U.B.ae ? 1 : -1),
                alpha: 0
            }
        }]), h.L(-l, -m), h.nc(p.rotate), h.L(l, m), h.L(p.Ta, 0), c.ka.oa = e * p.alpha;
        else if (this.I == U.j.ep) f = this.Da(g, [{ w: 0, u: 0 }, { w: .6, u: 1 }, { w: 1, u: 1 }], zg), n = this.Da(g, [{ w: 0, u: -30 / 180 * Math.PI }, { w: .6, u: -30 / 180 * Math.PI }, { w: .8, u: 20 / 180 * Math.PI }, { w: 1, u: 0 }], zg), k = this.Da(g, [{ w: 0, u: k }, { w: .8, u: 0 }, { w: 1, u: 0 }], zg), h.L(-l, -m), this.Sf == U.B.ae ? h.translate(d.Ma() / 2, -d.Aa() / 2) : h.L(-d.Ma() / 2, -d.Aa() / 2), h.Cn(n * (this.Sf == U.B.ae ? 1 : -1), 0), this.Sf == U.B.ae ? h.translate(-d.Ma() / 2, d.Aa() / 2) : h.L(d.Ma() / 2,
            d.Aa() / 2), h.L(l, m), h.L(k, 0), c.ka.oa = e * f;
        else if (this.I == U.j.fp) p = this.Da(g, [{ w: 0, u: { alpha: 1, Fo: 0, Ta: 0 } }, { w: 1, u: { alpha: 0, Fo: -.25 * Math.PI, Ta: k } }], wg), h.L(-l, -m), h.Cn(this.Sf == U.B.Ze ? p.Fo : -p.Fo, 0), h.L(l, m), h.L(p.Ta, 0), c.ka.oa = e * p.alpha;
        else if (this.I == U.j.qp || this.I == U.j.sl) this.I == U.j.sl && (g = 1 - g), p = this.Da(g, [{ w: 0, u: { Ta: k, Rc: f, alpha: 0 } }, { w: 1, u: { Ta: 0, Rc: 0, alpha: 1 } }]), h.L(p.Ta, p.Rc), c.ka.oa = e * p.alpha;
        return c
    };
    var Ag = P.Ig(.645, 0, .355),
        xg = P.Ig(.215, .61, .355),
        wg = P.Ig(.42, 0, 1),
        zg = P.Ig(0, 0, .58),
        yg = P.Ig(.42, 0, .58),
        Bg = vg;

    function Cg() { this.Je = [];
        this.c = this.tf = null;
        this.ck = !1;
        this.ki = this.Ea = 0;
        this.kg = this.Bk = this.wk = null;
        this.nk = "play";
        this.Ib = !1;
        this.Vb = [];
        this.Ml = !1 }
    var Dg = Cg.prototype;
    Dg.hy = function(a) { this.Vb.push(a) };
    Dg.Ti = function(a) { "play" == a && this.ki >= this.Je.length && this.vk();
        this.nk = a };
    Dg.kv = function(a) { var b = 0;
        this.Je.length && (b = this.Je[this.Je.length - 1], b = b.$c + b.jm + b.ni);
        a.$c = b;
        this.Je.push(a) };
    Dg.j = function(a) { this.tf = a.vc() };
    Dg.Qr = function(a) { this.Bk = null == a ? this.c.ui(this.tf.T).Oq() : a };
    Dg.Wr = function(a) { this.kg = a || new Hc(0, 0, this.wk.Ha, this.wk.Ga) };
    Dg.rv = function(a) { var b = this;
        b.c = a;
        a.M("visibilityChanged", function() { a.ab() ? b.vk() : a.le(b.tf) });
        b.wk = b.c.cc();
        b.vk();
        b.Qr();
        b.Wr() };
    Dg.vk = function(a) { this.tf = this.c.C;
        this.ck = !1;
        this.ki = this.Ea = 0;
        this.Ml = !1; var b = this.c.A.param,
            b = void 0 === b.presetAuto ? !0 : !!b.presetAuto;
        this.nk = a || b ? "play" : "pause" };
    Dg.xs = function(a) {
        if (this.ki >= this.Je.length) { if (this.Ib) { var b = this.tf;
                this.vk("play" == this.nk);
                this.tf = b;
                this.Ea = 0 } this.Ml || (this.Vb.forEach(function(a) { "preset_end" == a.event && a.action.D() }), this.Ml = !0) }
        var c = this.ki,
            b = this.Je[c],
            d = c,
            c = this.Je[d];
        if (null != c) {
            var e;
            if (null == a) { a = this.wk; var f = a.Ee; "pause" == this.nk ? (this.ck ? e = this.Ea : e = 0, a = e / f) : (e = this.Ea + a.Mj, a = e / f) }
            if (!(this.ck && 1E-5 > Math.abs(e - this.Ea))) {
                for (; c.$c + c.jm + c.ni < a && (c = this.Je[++d], null != c););
                this.ki = d;
                if (b != c && b && null == c) return b.ci(b.ni,
                    this);
                if (null != c) return this.Ea = e, this.ck = !0, e = a - c.$c - c.jm, 0 >= e ? c.ci(0, this) : c.ci(e, this)
            }
        }
    };
    Dg.sm = function() { return this.Bk.Ma() };
    Dg.rm = function() { return this.Bk.Aa() };
    t.ra(Dg, ["setStaticTransform", Dg.j, "updateTransformByTime", Dg.xs, "setDisplayObjectBoundary", Dg.Qr, "setStageBoundary", Dg.Wr]);

    function Eg() {}
    var Fg = {};
    Fg[U.j.qp] = Bg;
    Fg[U.j.Po] = Bg;
    Fg[U.j.ap] = Bg;
    Fg[U.j.ql] = Bg;
    Fg[U.j.vl] = Bg;
    Fg[U.j.nl] = Bg;
    Fg[U.j.Ap] = Bg;
    Fg[U.j.ep] = Bg;
    Fg[U.j.Jp] = Bg;
    Fg[U.j.Al] = Bg;
    Fg[U.j.rl] = Bg;
    Fg[U.j.Fp] = Bg;
    Fg[U.j.Hp] = Bg;
    Fg[U.j.Cp] = Bg;
    Fg[U.j.bp] = Bg;
    Fg[U.j.Ip] = Bg;
    Fg[U.j.pp] = Bg;
    Fg[U.j.Gp] = Bg;
    Fg[U.j.wp] = Bg;
    Fg[U.j.tu] = Bg;
    Fg[U.j.pl] = Bg;
    Fg[U.j.sl] = Bg;
    Fg[U.j.Qo] = Bg;
    Fg[U.j.cp] = Bg;
    Fg[U.j.wl] = Bg;
    Fg[U.j.rj] = Bg;
    Fg[U.j.Bp] = Bg;
    Fg[U.j.fp] = Bg;
    Fg[U.j.To] = Bg;
    Fg[U.j.yp] = Bg;
    Fg[U.j.zp] = Bg;
    Eg.op = function(a) { var b = null;
        a.forEach(function(a) { var d = a[U.B.Lp],
                e = Fg[d]; if (!e) return console.log("unknown ani:" + d);
            a = new e(a);
            null == b && (b = new Cg);
            b.kv(a) }); return b };
    t.ra(Eg, ["parseAnimationParam", Eg.op]);
    t.H("PresetAnimation.PresetAnimationGenerator", Eg);

    function Gg() {} Gg.Gt = 1;
    Gg.Ft = 2;
    var Hg = me,
        Ig = qf,
        Jg = Se,
        Kg = pe;

    function Lg() {} Lg.ec = null;
    Lg.Pe = function() { var a = {};
        (window.location.search.substring(1).match(/([^&=]+)=([^&=]*)/g) || []).forEach(function(b) { b = b.split("="); try { a[decodeURIComponent(b[0])] = decodeURIComponent(b[1]) } catch (c) { console.info("error decodeURIComponent:" + b[1]) } }); return a }();

    function Mg() { Object.keys(Lg.Pe).forEach(function(a) { MugedaTools.addCustomMugedaParameters(encodeURIComponent(a), encodeURIComponent(Lg.Pe[a])) }) }
    window.MugedaTools && window.MugedaTools.addCustomMugedaParameters ? Mg() : document.addEventListener("cardCommonReady", Mg);
    Lg.Jd = function(a, b) {
        var c = b.Do,
            d = c.root;
        this.Do = c;
        d.Ic = qd.parse(a.color);
        d.Ha = a.width;
        d.Ga = a.height;
        d.na = a.width;
        d.la = a.height;
        d.Ee = a.rate;
        d.cb = a.title;
        d.Md = function(a, b) { return Ng(c, a, b) };
        d.Ah = (a.metadata || {}).adaptMode || mf.Es;
        d.ag && "inline" == d.ag.render_mode && (d.Ah = mf.Os);
        Og(a, d, c);
        var e = a.symbols;
        e && e.forEach(function(a) { var b = a.id,
                d = a.type; if (3 == d) d = new sf, d.Ja = c.dir.qc(a.url), c.Cu[b] = d;
            else if (2 == d) var e = Pg(a, c);
            e && (c.Sh[b] = e) });
        e && e.forEach(function(a) {
            var b = a.id,
                d = a.type;
            if (3 != d && 2 != d) var e =
                Qg(a, c);
            e && (c.Sh[b] = e)
        });
        e = Qg(a, c, { gB: !0 });
        c.bl = [];
        d = new e(d);
        a.pages && a.pages.length && (d.Ch = a.pageInfo || {});
        return c
    };

    function Rg(a, b) { Lg.ec = b; var c = le.zl(a.type); if (c) return c.Xb(a, b); if (2014 === a.type) return Sg(a, b); if (2001 === a.type || 2002 === a.type || 2003 === a.type || 2004 === a.type || 2006 === a.type || 2009 === a.type) return Tg(a); if (2005 === a.type) return Ug(a, b); if (2010 === a.type || 2026 === a.type || 2027 === a.type || 2029 === a.type) return ug.Xb(a); if (2021 === a.type) return b.Sh[a.param.symbolId]; if (2024 === a.type) return Vg(a); if (2022 === a.type) return Wg(a, b); if (2020 === a.type) return Xg(a, b); if (2030 === a.type) return Yg(a); if (2033 === a.type) return Zg(a) }
    Lg.Lg = Rg;

    function Sg(a, b) {
        function c(d, e) {
            var f = this;
            c.f.constructor.apply(this, arguments);
            null != e && (f.Ka = e);
            d && d.vb(f);
            var g = a.items;
            f.A = a;
            f.Kr = a.param.scroll || "no";
            g.forEach(function(a) {
                for (var c = b.bl || [], d = "", e = 0; e < c.length; e++) { var g = c[e].param.name;
                    g && (d += g + "/") } e = (e = d + a.param.name) ? Lg.Pe["m_" + e] : null;
                if (!e) { d = ""; for (e = 0; e < c.length; e++)(g = c[e].guid) && (d += g + "_");
                    e = Lg.Pe["m_" + d + a.guid];!e && d && (e = Lg.Pe["m_" + a.guid]) } e && (a.param.customValue = e);
                if (c = Rg(a, b)) {
                    c = new c(f);
                    c.A = a;
                    if ("yes" == a.param.talwayson) {
                        for (e = c; e &&
                            !e.V;) e = e.parent;
                        e.V.Hm[c.l] = c
                    }
                    $g(a, c, b)
                }
            })
        }
        t.extend(c, ed);
        return c
    }
    var Ng = Lg.ft = function(a, b, c) { "original" != (c || "default") && (b = a.dir.qc(b));
        a = a.Hz;
        c = a[b];
        c || (a[b] = c = new Le, c.Ja = b, c.bb = Le.Pg); return c };

    function Ug(a, b) {
        function c(b, d) { c.f.constructor.apply(this, arguments);
            null != d && (this.Ka = d);
            b && b.vb(this);
            this.Td(e);
            this.lb = [e];
            this.A = a } var d = a.param.presetImage,
            d = a.param.customValue || ke.Lg(d) || a.param.imageSrc; if ("" == d) return null; var e = Ng(b, d);
        t.extend(c, Hg); return c }

    function Vg(a) {
        function b(c, d) { b.f.constructor.apply(this, arguments);
            null != d && (this.Ka = d);
            c && c.vb(this);
            this.A = a } t.extend(b, Jg); return b }

    function Tg(a) {
        function b(c, d) { b.f.constructor.apply(this, arguments);
            null != d && (this.Ka = d);
            c && c.vb(this);
            this.A = a;
            this.Gc(a) } t.extend(b, ff); return b }

    function Yg(a) {
        function b(c, d) { b.f.constructor.apply(this, arguments);
            null != d && (this.Ka = d);
            c && c.vb(this);
            this.A = a } t.extend(b, jf); return b }

    function Zg(a) {
        function b(c, d) { b.f.constructor.apply(this, arguments);
            null != d && (this.Ka = d);
            c && c.vb(this);
            this.A = a;
            this.Ui(a.param.iframeUrl || "about:blank") } t.extend(b, Ze); return b }

    function $g(a, b, c, d) {
        d = d || {};
        var e = a.param,
            f = e.name;
        f && (b.cb = f);
        if (a = d.guid || a.guid) b.R = a;
        1 > e.rawWidth && (e.rawWidth = 1);
        1 > e.rawHeight && (e.rawHeight = 1);
        1 > e.width && (e.width = 1);
        1 > e.height && (e.height = 1);
        a = e.rotate;
        d = e.left;
        var f = e.top,
            g = e.width,
            h = e.height,
            k = null == e.rotateCenterX ? g / 2 : e.rotateCenterX,
            l = null == e.rotateCenterY ? h / 2 : e.rotateCenterY,
            m = e.rawWidth,
            n = e.rawHeight;
        if (null == m || 0 == m || b instanceof ff) m = g;
        if (null == n || 0 == n || b instanceof ff) n = h;
        b instanceof ed && "trim" == e.render && (m = g, n = h, b.Pa = new B(1, 0,
            0, 1, parseFloat(e.horOffset), parseFloat(e.verOffset)));
        var p = g / m,
            q = h / n;
        isNaN(p) && (p = 1);
        isNaN(q) && (q = 1);
        b.X = g;
        b.Y = h;
        b.na = m;
        b.la = n;
        b.oi = e.filters;
        b.qm(b.oi);
        g > b.th && (b.th = g);
        h > b.sh && (b.sh = h);
        var r = e.vF,
            v = e.hF;
        if (r || v) b.Uc = new B(v ? -1 : 1, 0, 0, r ? -1 : 1, v ? m : 0, r ? n : 0);
        b.le(new Mc);
        m = b.C;
        n = m.T;
        n.Lb(p, q);
        n.L(-k, -l);
        n.nc(a);
        n.L(k, l);
        n.L(d, f);
        var r = n.Yc = e.rotateX || 0,
            v = n.lc = e.rotateY || 0,
            x = n.Cc = e.pers || 25;
        b.Ug = Math.max.apply(Math, B.B(g, h, a));
        if (r || v) n.Za(), n.nb(-d, -f), n.nb(-k, -l), n.Sd(-a), n.rf(v), n.zh(r), n.Me(b.Ug,
            x), n.Sd(a), n.nb(k, l), n.nb(d, f);
        n.Kb = a;
        n.$b = k;
        n.ac = l;
        n.kc = d;
        n.mc = f;
        n.jd = p;
        n.kd = q;
        a = m.ka;
        a.oa = e.alpha;
        a.he = e.fillInfo;
        a = m.Nc;
        a.yd = e.letterSpace;
        a.ud = e.fontSize;
        a.zd = e.textLineHeight;
        e.tO && (b.Cd = e.tO || "hidden");
        b instanceof Hd && (a = e.offsetX, d = e.offsetY, null != a && null != d && b.Pa.L(-a, -d));
        a = e.preset;
        d = void 0 === e.presetAuto ? !0 : !!e.presetAuto;
        a && b.parent.constructor != ed && ((b.ke = Eg.op(a || [])).rv(b), b.Wf = !0, b.ke.Ti(d ? "play" : "pause"), b.ke.Ib = !!e.presetLoop);
        b.or();
        c && Og(e, b, c)
    }

    function Og(a, b, c) {
        var d = a.action,
            e = a.behavior;
        if ("link" == d) b.gk = a.url, b.Wc = !0, d = b.Kd = b.Kd || [], d.push({ type: "link", event: "click", param: a });
        else if ("behavior" === d && e) d = b.Kd = JSON.parse(e), d.some(function(a) { a = a.event; return "click" == a || -1 < a.indexOf("slide_") || -1 < a.indexOf("touch_") }) && (b.Wc = !0), d.forEach(function(a) {
            var d = a.type;
            a = a.param;
            var e = a.audio_name,
                f = a.audio_id,
                m = "1" == a.audio_loop,
                n = a.audio_url;
            if ("audio" === d && (f || n)) {
                for (var d = "1" == a.audio_preload || "1" == (b.La().ag || {}).preload_audio, p = b.G; p &&
                    !(p instanceof Hd);) p = p.G;
                f = c.Sh[f];
                null === f && n && (f = Pg({ url: n, fu: d }));
                null != f && (n = new f(p, d), n.cb = e, n.Ib = m, a.audio_url = n.Ja, a = a.audioId = n.l, Mugeda.addAudioCache(a, n.pa, e), d && b.mv(n))
            } else "video" == d && (e = c.Cu[a.video_id]) && (a.video_url = e.Ja)
        });
        else if ("form" === d) { b.Wc = !0;
            d = b.Kd = b.Kd || []; try { a = JSON.parse(a.form) } catch (f) {} a && d.push({ type: "form", event: "click", param: a }) } 0 < a.drag && (b.Wc = !0, d = b.Kd = b.Kd || [], d.push({ type: "drag", event: "drag", param: { type: a.drag, reset: a.dragReset, inertia: a.inertia } }))
    }
    Lg.Tb = $g;

    function Pg(a, b) {
        function c(f, g) { c.f.constructor.apply(this, arguments); var h = a.fu || g,
                k = d.customValue || (h ? b.dir.mA(a.url) : b.dir.qc(a.url));
            f && f.vb(this);
            this.cb = null; if (e)
                for (var l = 0; l < e.length; l++) e[l] == a.guid && (this.Zq = !0);
            this.Pr(k, h) } b = b || Lg.Do; var d = a.param || {},
            e = b.root.A.audioVol;
        t.extend(c, He); return c }

    function Xg(a, b) {
        function c(b, e) { c.f.constructor.apply(this, arguments);
            null != e && (this.Ka = e);
            b && b.vb(this); var p = d.preload || "1" == (this.La().ag || {}).preload_audio;
            this.Td(g);
            this.kq = g;
            this.jq = f;
            this.pa = Pg({ guid: a.guid, url: l, param: d, fu: p });
            this.Tc = new this.pa;
            this.Hf = k;
            this.A = a;
            this.Ib = h;
            Mugeda.addAudioCache(a.FC, this.Tc.pa, d.name);
            this.lb = [f, g];
            p && this.lb.push(this.Tc) }
        var d = a.param,
            e = d.audioOffImage || d.imageSrc,
            f = Ng(b, e),
            g = Ng(b, d.audioOnImage || e),
            h = !!d.loop,
            k = !!d.autoplay,
            l = d.audioUrl;
        t.extend(c, Kg);
        c.prototype.jh = function() { return this.Tc.pa };
        return c
    }

    function Wg(a, b) {
        var c = a.param,
            d = c.videoUrl,
            e = !1;
        /^http(s)*:\/\/[a-zA-Z0-9]+\.[sohu\.com|qq\.com|youku\.com|tudou\.com]/g.test(d) && -1 == d.indexOf(".mp4") && (e = !0);
        if (e) { var f = function(b, e) { c.rawWidth = c.width;
                c.rawHeight = c.height;
                c.lineWidth = 0;
                f.f.constructor.apply(this, arguments);
                null != e && (this.Ka = e);
                b && b.vb(this);
                this.Ui(d);
                this.A = a };
            t.extend(f, uf) } else {
            e = c.imageSrc;
            if ("" == e) return null;
            var g = Ng(b, e),
                f = function(b, d) {
                    f.f.constructor.apply(this, arguments);
                    null != d && (this.Ka = d);
                    b && b.vb(this);
                    this.Td(g);
                    this.A = a;
                    this.zs = c.videoUrl;
                    this.Oj = 1 * c.embedVideo && 36849 <= 1 * (navigator.userAgent.match(/TBS\/(\d+)/) || [null, 0])[1];
                    this.Yr = !(1 * c.hidePlayControls);
                    this.Qm = !(1 * c.continueAudio);
                    this.Hf = !!(1 * c.videoAutoPlay);
                    this.sq = 1 !== c.clickStatus
                };
            t.extend(f, Ig)
        }
        return f
    }

    function Qg(a, b, c) {
        function d(e, f) { var g = this;
            d.f.constructor.apply(g, arguments);
            null != f && (g.Ka = f);
            e && e.vb(g);
            g.A = a; var h = a.cw,
                k = a.ch;
            null != h && null != k && (g.Pa = new B(null, null, null, null, -h / 2, -k / 2));!1 === a.loop && (g.Ib = !1); var l = 0;
            [a].concat(a.pages || []).forEach(function(a) {
                (c || {}).gB && Re.za(); var d = new bf;
                g.ca.push(d); var e = ah.bind(g)(a.layers, l, b).vu;
                d.mb = l;
                l += e;
                d.Ac = e;
                d.cb = a.name || "";
                d.R = a.guid || "" });
            g.Te = l } t.extend(d, Hd);
        d.cb = a.name;
        d.A = a; return d }

    function ah(a, b, c) {
        var d = this,
            e, f, g, h = [],
            k = b,
            l = !1;
        for (e = a.length - 1; 0 <= e; e--) f = a[e], "folder" != f.type && (g = f.maskMode, f.units.forEach(function(a) {
            var e = a.frameStart + b,
                f = e + a.frameCount - 1;
            k = Math.max(f + 1, k);
            var q = a.objects,
                r = a.keyframes,
                v = a.pg || !1,
                x = 0 < a.pathMode,
                w = d.Qj,
                y = d.Mc,
                D = a.audioId,
                H = a.audio;
            if (D || H)
                if (D = c.Sh[D], null === D && H && (D = Pg({ url: H })), null != D)
                    for (H = new D(d), H.Ib = !0, D = e; D <= f; D++)(w[D] = w[D] || new Me).Lk(H);
            var E = "";
            r && r.length && r.forEach(function(a) {
                E = E || a.param.url;
                if (a.name) {
                    var b = a.name,
                        b = b.substr(b.indexOf("_") +
                            1),
                        c = new Ue;
                    c.cb = b;
                    c.Dq = a.id;
                    d.ca[d.ca.length - 1].cr.push(c)
                }
            });
            if (0 != q.length) {
                for (var J = [], D = e; D <= f; D++) w[D] = w[D] || new Me;
                q.forEach(function(b) {
                    for (var k = c.bl || [], l = "", q = 0; q < k.length; q++) { var r = k[q].param.name;
                        r && (l += r + "/") } q = (q = l + b.param.name) ? Lg.Pe["m_" + q] : null;
                    if (!q) { l = ""; for (q = 0; q < k.length; q++)(r = k[q].guid) && (l += r + "_");
                        q = Lg.Pe["m_" + l + b.guid];!q && l && (q = Lg.Pe["m_" + b.guid]) } q && (b.param.customValue = q);
                    if (k = Rg(b, c)) {
                        2021 == b.type && c.bl.push(b);
                        try { var y = window.top.mugedaEntryPage || 0 } catch (D) { y = 0 }
                        var q = !!d.A.activePageId,
                            l = d.A.guid,
                            H = new k(d, 0 === e && (!q || !y || y == l));
                        2021 == b.type && c.bl.pop();
                        H.A = b;
                        "link" == b.param.action && !b.param.url && E && (b.param.url = E);
                        if ("yes" == b.param.talwayson) { for (y = H; y && !y.V;) y = y.parent;
                            y.V.Hm[H.l] = H } $g(b, H, c);
                        J.push(H);
                        g == Gg.Gt ? (h.forEach(function(a) { a.qh.push(H) }), H.rh = h) : g == Gg.Ft && (H.qh = []);
                        if (H.parent === d)
                            for (y = e; y <= f; y++) k = w[y], bh(b.param, H), k.Lk(H)
                    }
                    v && (b = a.id, H.ss = b, H.Di = !0, d.qk[b] || (d.qk[b] = []), d.qk[b].push(H))
                });
                g == Gg.Ft ? (l && (h = [], l = !1), h = h.concat(J)) : g == Gg.Gt && (l = !0);
                if (r && 2 <= r.length) {
                    var I = J[0];
                    I.Wf = !0;
                    var S = 0;
                    r.forEach(function(c, d) {
                        var e = c.id + b,
                            g = 2010 == I.A.type;
                        0 < I.A.curve.points.length && c.param.curve ? (I.nf = !0, I.zc[d] = c, 0 == d && (I.Gc({ guid: I.A.guid, curve: c.param.curve, param: c.param }), $g(I.A, I, null, c.param))) : g && (I.nf = !0, I.zc[d] = c);
                        var g = c.param,
                            h = w[e] = w[e] || new Me;
                        y[I.l] = y[I.l] || new $e;
                        if (r[d + 1]) {
                            var k = r[d + 1].id + b,
                                l = r[d + 1].param,
                                n = c.tween || "Linear.EaseNone";
                            S = 0;
                            f == k && "Step.EaseIn" != n && "Step.EaseOut" != n && (y[I.l].Ly(e), k += 1, S = 1);
                            var q = g.width,
                                J = g.height,
                                v = g.rotate,
                                D = g.left,
                                H = g.top,
                                E = g.alpha,
                                jb = null == g.rotateCenterX ? g.width / 2 : g.rotateCenterX,
                                kb = null == g.rotateCenterY ? g.height / 2 : g.rotateCenterY,
                                Ta = g.rotateX || 0,
                                fb = g.rotateY || 0,
                                yb = g.letterSpace || 0,
                                Na = g.fontSize || 12,
                                Ca = g.lineHeight || 0,
                                zb = l.width,
                                lb = l.height,
                                pb = l.rotate,
                                zc = l.left,
                                Ac = l.top,
                                Ua = l.alpha,
                                Bc = null == l.rotateCenterX ? l.width / 2 : l.rotateCenterX,
                                Yb = null == l.rotateCenterY ? l.height / 2 : l.rotateCenterY,
                                qb = l.rotateX || 0,
                                Zb = l.rotateY || 0,
                                aj = l.letterSpace || 0,
                                bj = l.fontSize || 12,
                                cj = l.lineHeight || 0,
                                sl = new Ad,
                                rb = new P.Np;
                            rb.Th({ x: 1 },
                                1E3);
                            rb.Ys(P.map[n]);
                            var yd = [],
                                h = c.ease;
                            0 <= ["custom", "Bezier.Ease"].indexOf(n) && void 0 == h && (h = {});
                            for (var ka = e; ka < k; ka++) yd.push(rb.mo((ka - e) / (k - e), h));
                            if (h) { var ch, Vf, dh, eh, Je = yd.length,
                                    rb = function(a) { for (ka = 0; ka < Je; ka++)
                                            for (var b = ka / Je, c = 0; c < Je + 1; c++)
                                                if (Vf = c == Je ? 1 : (yd[c][a] || {}).x || 0, eh = c == Je ? 1 : (yd[c][a] || {}).y || 0, Vf > b) { yd[ka][a] = dh + (eh - dh) * (b - ch) / (Vf - ch); break } else ch = Vf, dh = eh };
                                void 0 == h["default"] && rb("default"); for (var oa in h) rb(oa) }
                            for (ka = e; ka < k; ka++) {
                                oa = yd[ka - e];
                                var h = "object" == typeof oa ?
                                    oa : {},
                                    Ab = void 0 == h["default"] ? oa : h["default"],
                                    rb = void 0 == h.left ? Ab : h.left,
                                    dj = void 0 == h.top ? Ab : h.top;
                                oa = void 0 == h.rotation ? Ab : h.rotation;
                                oa = {
                                    width: (1 - (void 0 == h.width ? Ab : h.width)) * (q - zb) + zb,
                                    height: (1 - (void 0 == h.height ? Ab : h.height)) * (J - lb) + lb,
                                    rotate: (1 - oa) * (v - pb) + pb,
                                    left: (1 - rb) * (D - zc) + zc,
                                    top: (1 - dj) * (H - Ac) + Ac,
                                    alpha: (1 - (void 0 == h.alpha ? Ab : h.alpha)) * (E - Ua) + Ua,
                                    rotateCenterX: (1 - oa) * (jb - Bc) + Bc,
                                    rotateCenterY: (1 - oa) * (kb - Yb) + Yb,
                                    rotateX: (1 - oa) * (Ta - qb) + qb,
                                    rotateY: (1 - oa) * (fb - Zb) + Zb,
                                    letterSpace: (1 - Ab) * (yb - aj) + aj,
                                    fontSize: (1 - Ab) * (Na - bj) + bj,
                                    lineHeight: (1 - Ab) * (Ca - cj) + cj
                                };
                                sl.Jo(oa, g, l, void 0 == h.filter ? Ab : h.filter);
                                x && a.path && a.path.length && (h = a.path, h = fh(h[d], h[d + 1], rb, dj), rb = a.pathTop + h.y - oa.rotateCenterY, oa.left = a.pathLeft + h.x - oa.rotateCenterX, oa.top = rb);
                                oa = bh(oa, I);
                                h = w[ka] = w[ka] || new Me;
                                h.Lk(I);
                                y[I.l] = y[I.l] || new $e;
                                "Step.EaseIn" == n ? e == ka ? y[I.l].tg(ka, oa, bh(g, I)) : y[I.l].tg(ka, oa) : ("Step.EaseOut" == n && e == ka && (y[I.l].Ni[k] = bh(g, I)), y[I.l].tg(ka, oa))
                            }
                        } else
                            for (n = c.tween || "Linear.EaseNone", oa = bh(g, I), ka = e + S; ka <=
                                f + S; ka++) y[I.l] = y[I.l] || new $e, "Step.EaseIn" == n ? e == ka ? y[I.l].tg(ka, oa, bh(g, I)) : y[I.l].tg(ka, oa) : ("Step.EaseOut" == n && e == ka && (y[I.l].Ni[k] = bh(g, I)), y[I.l].tg(ka, oa)), h = w[ka] = w[ka] || new Me, h.Lk(I)
                    });
                    0 != S && (w[y[I.l].ic].Zt(I), y[I.l].ic -= S)
                } else J.forEach(function(a) { var b = a.C;
                    [e, f].forEach(function(c) { y[a.l] = y[a.l] || new $e;
                        y[a.l].tg(c, b) }) })
            }
        }));
        return k == b ? { vu: 1 } : { vu: k - b }
    }

    function fh(a, b, c, d) { d = void 0 == d ? c : d; return { x: gh(c, 1 - c, a.nodeX, a.forwardX, b.backwardX, b.nodeX), y: gh(d, 1 - d, a.nodeY, a.forwardY, b.backwardY, b.nodeY) } }

    function gh(a, b, c, d, e, f) { return Math.pow(b, 3) * c + 3 * Math.pow(b, 2) * a * d + 3 * b * Math.pow(a, 2) * e + Math.pow(a, 3) * f }

    function bh(a, b) {
        var c = b.na,
            d = b.la,
            e = a.width,
            f = a.height;
        e > b.th && (b.th = e);
        f > b.sh && (b.sh = f);
        var g = new Mc,
            c = e / c,
            d = f / d,
            h = a.rotate,
            k = a.left,
            l = a.top,
            e = null == a.rotateCenterX ? e / 2 : a.rotateCenterX,
            f = null == a.rotateCenterY ? f / 2 : a.rotateCenterY,
            m = g.T;
        m.Lb(c, d);
        m.L(-e, -f);
        m.nc(h);
        m.L(e, f);
        m.L(k, l);
        var n = m.Yc = a.rotateX || 0,
            p = m.lc = a.rotateY || 0,
            q = m.Cc = a.pers || 25;
        if (n || p) m.Za(), m.nb(-k, -l), m.nb(-e, -f), m.Sd(-h), m.rf(p), m.zh(n), m.Me(b.Ug, q), m.Sd(h), m.nb(e, f), m.nb(k, l);
        m.Kb = h;
        m.$b = e;
        m.ac = f;
        m.kc = k;
        m.mc = l;
        m.jd = c;
        m.kd = d;
        c =
            g.ka;
        c.oa = a.alpha;
        c.he = a.fillInfo;
        c.Pb = a.strokeColor;
        c.Ie = a.lineWidth;
        c = g.Nc;
        c.yd = a.letterSpace;
        c.ud = a.fontSize;
        c.zd = a.textLineHeight;
        g.filters = a.filters;
        return g
    }
    t.ra(Lg, ["parseAnidata", Lg.Jd]);
    t.H("Utils.dataConverter", Lg);

    function hh() { hh.f.constructor.apply(this, arguments);
        this.Bh = null;
        this.un = !1;
        this.cm = this.sr = this.Zg = this.hi = this.bn = this.cn = this.Mf = this.Nf = null } t.extend(hh, Sf);
    var ih = hh.prototype;
    ih.Df = function() { var a = hh.f.Df.apply(this, arguments);
        a.Pd = this;
        a.bg = a };
    ih.va = function() { var a = this.c,
            b = F.K("top: 0;" + K.prefix.s + "transition: " + K.prefix.s + "transform, opacity 0ms ease-in-out;");
        this.ha.push(b);
        this.Ec = b;
        b = this.G.c.G; if (b instanceof pf) var c = F.K("position: absolute;overflow: hidden;width: " + b.Ha + "px;height: " + b.Ga + "px;");
        this.S = '<div data-type="scene" data-name="' + this.Bh.cb + '" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">' + (c ? '<div class="mugine_scene_clip ' + c + '">{{childNode}}</div>' : "{{childNode}}") + "</div>";
        this.Be = c };
    ih.O = function(a) { if (a) { var b = this.Fq(); if (b) return b } return hh.f.O.apply(this, arguments) };
    ih.Fq = function() { if (!this.cm) { var a = this.O().children[0]; - 1 < a.className.indexOf("mugine_scene_clip") && (this.cm = a) } return this.cm };
    ih.ZA = function() { var a = this.G.c.G; if (a instanceof pf && this.Be && (this.sr != this.Zg || this.fy != this.hi)) { this.sr = this.Zg;
            this.fy = this.hi; var b = this.Fq(),
                c = b.className;
            F.ec(this.Be);
            c = c.replace(new RegExp(" *" + this.Be, "g"), "");
            this.Be = a = F.K("position: absolute;overflow: hidden;width: " + Math.min(a.Ha, this.Nf) + "px;height: " + Math.min(a.Ga + 0, this.Mf + 0) + "px;top:" + Math.max(0, this.Zg) + "px;left:" + Math.max(0, this.hi) + "px;");
            b.className = c + (" " + a);
            this.sb.forEach(function(a) { a.wy() }) } };
    ih.rb = function() { this.constructor.f.rb.apply(this, arguments);
        this.P.addEventListener(K.prefix.Zk + "AnimationEnd", this.Hx.bind(this)) };
    F.Kp = K.prefix.s;
    ih.j = function(a) {
        var b = a.c,
            c = a.Ob.c,
            d = c.Mc[b.l],
            e = 1 / c.cc().Ee;
        if (d) {
            var f = this.Bh,
                g = f.mb,
                f = f.Ac,
                h = d.Kc - g,
                k = d.ic - g;
            Math.max(0, k - h + 1 - 360);
            var l = "";
            0 < h && (l += "0% { " + K.prefix.s + "transform: scale(0.01); }", l += h / f * 100 - 1E-4 + "% { " + K.prefix.s + "transform: scale(0.01); }");
            for (; h <= k + 1; h++) { var m = d.iA(h + g); if (null != m) { var n = m.T,
                        p = b.G && b.G.Pa,
                        q = "";
                    p && (q += p.Se());
                    q += " " + n.Se(!0);
                    b.Uc && (q += " " + b.Uc.Se());
                    n = K.prefix.s + "transform:" + q + "; opacity: " + m.ka.ie() + ";";
                    h <= k && (m = Math.min(100, (h - 0) / f * 100), l += m + "% { " + n + "}") } } k <
                f - 1 ? (l = l + ((k + 1) / f * 100 - 1E-4 + "% { " + n + "}") + ((k + 1) / f * 100 + "% { " + K.prefix.s + "transform: scale(0.01); }"), l += "100% { " + K.prefix.s + "transform:scale(0.01); }") : l += "100% { " + n + "}";
            b = 0;
            window.DEBUG_CS3_MODE && (d = a.Ob && a.Ob.Ob) && (b = d.c.Mc[a.Ob.bg.c.l].Kc * e);
            d = c.Ib ? "infinite" : 1;
            c = F.ue(l);
            e = F.K(K.prefix.s + "animation: " + c + " " + f * e + "s linear " + b + "s " + d + " forwards;");
            a.Gf && a.ha.splice(a.ha.indexOf(a.Gf), 1);
            f = document.querySelectorAll("." + a.Ec);
            f[0] && a.Ye(f[0]);
            a.Pl && F.Mp(a.Pl);
            a.Gf && F.ec(a.Gf);
            a.Gf = e;
            a.Pl = c
        }
    };
    ih.Hx = function(a) { this.G.c.$a != this.Bh && (this.un = !0); if (!this.un && a.target.parentNode === this.P) { this.un = !0;
            a = this.G.c; var b = this.Bh,
                b = b.mb + b.Ac - 1;
            a.Ea = b;
            a.ee = b + .99999 } };
    var jh = hh;

    function kh() { kh.f.constructor.apply(this, arguments);
        this.fc = this.Qd = null } t.extend(kh, Sf);
    var lh = kh.prototype;
    lh.$j = function() { var a = this.c;
        this.Qd = a.Va.bb ? a.Va.bb.src : "" };
    lh.va = function() {
        var a = this.c,
            b = "width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "user-select: none;" + (a.Wc ? "cursor: pointer;" : "");
        if (K.vg.eu && (K.Sa.Xe || K.Sa.Af)) { var c = a.Uc,
                b = b + "border: 2px transparent solid;box-sizing: content-box;",
                d = new B(1, 0, 0, 1, -2, -2);
            a.Uc = a.Uc ? B.jc(c, d) : d } b = F.K(b);
        this.ha.push(b);
        this.Ec = b;
        this.S = '<img ondragstart="return false;" style="' + (Le.Pg.src == this.Qd ? "visibility:hidden;" : "") + '" data-type="bitmap" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}" src="' +
            this.Qd + '" />'
    };
    lh.aa = function() { this.fc || kh.f.aa.apply(this, arguments);
        this.Dr() };
    lh.fg = function(a, b) { var c = this.c; if (c.Va) { var d = c.Va.bb;
            a.transform(b.Z, b.ba, b.qa, b.fa, b.ja, b.ma);
            a.drawImage(d, 0, 0, c.na, c.la) } kh.f.fg.apply(this, arguments) };
    lh.Dr = function() { var a = this.c; if (null == a.Va) a = "";
        else { if (null == a.Va.bb) return;
            a = a.Va.Ja } a !== this.Qd && (this.Qd = a, this.fc || (a = this.O(!0), "DIV" == a.tagName ? a.firstChild && "IMG" == a.firstChild.tagName ? a.firstChild.setAttribute("src", this.Qd) : a.style.backgroundImage = 'url("' + this.Qd + '")' : a.setAttribute("src", this.Qd), a.style.visibility = "visible")) };
    t.H("Render.Bitmap", kh);
    var mh = kh;
    var nh = 0 <= navigator.userAgent.indexOf("Windows Phone"),
        oh = 0 < navigator.userAgent.indexOf("Android") && !nh,
        ph = /iP(ad|hone|od)/.test(navigator.userAgent) && !nh,
        qh = ph && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        rh = ph && /OS [6-7]_\d/.test(navigator.userAgent),
        sh = 0 < navigator.userAgent.indexOf("BB10");

    function th() { th.f.constructor.apply(this, arguments);
        this.Mi = null;
        this.Jr = {};
        this.bu = [];
        this.Ef = [];
        this.J = null;
        this.Zf = 0;
        this.Yb = null;
        this.Lm = 0;
        this.Jm = !1;
        this.nh = this.jk = 0;
        this.Cr = null;
        this.gr = 0 }
    var uh = [];
    t.extend(th, Rc);
    var vh = th.prototype;
    vh.Ur = function(a) { this.Mi = a };
    vh.yv = function(a, b) { this.J = b; var c = this.Jr,
            d = this.bu;
        a.forEach(function(a) { var b = a.c,
                g = a.Ob,
                h = g.c,
                k = [h.Mc[a.bg.c.l]],
                l = [h]; for (a = g; a.Ob;) { var g = a.Ob,
                    m = g.c;
                k.push(m.Mc[a.bg.c.l]);
                l.push(m);
                a = g } a = k[0].ic; for (g = k[0].Kc; g <= a; g++) h.si[g] = (h.si[g] || 0) + 1;
            b.lb.forEach(function(a) { var e = a.l;
                c[e] ? c[e].push({ Oh: l, vo: k, gl: a, Rb: b }) : (d.push(a), c[e] = [{ Oh: l, vo: k, gl: a, Rb: b }]) }) }) };
    vh.Km = function(a) {
        var b = this,
            c = {},
            d = b.J,
            e = b.bu,
            f = b.Jr,
            g = null == b.jf ? d.Ea : b.jf;
        e.forEach(function(a) { var b = a.l;
            null == c[b] && (c[b] = []);
            f[b].forEach(function(a) { var d = a.Oh;
                a = a.vo; for (var e = d.length - 1, f = 0; 0 <= e; e--, f++) { var h = d[e],
                        k = a[e],
                        l = c[b][f],
                        h = 1 == h.l ? g : h.Ea,
                        k = Math.min(k.ic, Math.max(h, k.Kc)) - h; if (null == l || 0 <= k && k < l) c[b][f] = k } }) });
        var h = [],
            k;
        for (k in c) c.hasOwnProperty(k) && h.push({ Fd: c[k], gl: f[k][0].gl, info: f[k] });
        h.sort(function(a, b) {
            for (var c = Math.max(a.Fd.length, b.Fd.length), d = 0; d < c; d++) {
                var e = a.Fd[d] ||
                    0,
                    f = b.Fd[d] || 0;
                if (e !== f) return e - f
            }
            return 0
        });
        if (null != b.Mi && a) { var l = h.filter(function(a) { return g + a.Fd[0] <= b.Mi }).length + b.Ef.length;
            l || (l = 0) }
        for (var m = 0; uh.length < 16 + m && (h.length || b.Ef.length);) {
            a = h[0];
            k = !1;
            if (b.Ef.length) k = !0;
            else if (null != b.Mi && g + a.Fd[0] > b.Mi) break;
            b.PC++;
            k ? (k = b.Ef.splice(0, 1)[0], a = new Le, a.Ja = k, uh.push(a)) : (h.splice(0, 1), a = a.gl, uh.push(a), e.splice(e.indexOf(a), 1));
            k = function(a, c, e) {
                return function() {
                    b.Zf < b.$f && b.Zf++;
                    uh.splice(uh.indexOf(a), 1);
                    var f = e[a.l],
                        g = [];
                    Mugeda.hashImages =
                        Mugeda.hashImages || {};
                    Mugeda.hashImages[a.Ja] = a.bb;
                    var h = new z("framesLoadedChange", !1, !1);
                    d.F(h);
                    f && f.forEach(function(a) { var b = a.Rb;
                        b.F(b.ea); var b = a.Oh[0],
                            c = a.vo[0];
                        a = c.ic; for (var d = b.si, c = c.Kc; c <= a; c++) d[c]--; - 1 === g.indexOf(b) && g.push(b) });
                    g.forEach(function(a) { var b = a.si,
                            c = 0,
                            d; for (d in b) b.hasOwnProperty(d) && 0 === b[d] && c++;
                        a.Hy(c) });
                    c.length && b.Km(null)
                }
            };
            var n = a.hc;
            n.xa.Qa === n.xa.constructor.Oa.LOADED ? k(a, e, f)() : (n.xa.tc("complete", k(a, e, f)), n.xa.tc("ioError", k(a, e, f)), n.xa.tc("merge", function() { m++ }),
                n.xa.tc("mergedone", function() { m-- }), n.Xc(a))
        }
        return l
    };
    vh.Xc = function() { this.Zf = 0;
        this.$f = this.Km(!0) };
    vh.rz = function(a, b, c, d, e, f, g, h, k) {
        function l() { m.ts(m.$f - m.Zf + a.Qe, m.$f + n, h) } var m = this;
        m.Yb = e;
        m.Lm = 1 * new Date;
        m.Jm = f;
        m.Cr = k;
        m.jk = g;
        m.da = d.cc(); var n = a.Qe;
        0 < n ? a.vn = function() { 0 == a.Qe && b();
            l() } : (b(), l()); if (0 < m.$f - m.Zf) { var p = function() { var b = m.$f - m.Zf + a.Qe;
                m.ts(b, m.$f + n);
                l();
                0 == m.$f - m.Zf && d.Fa("framesLoadedChange", p);
                0 == b && c() };
            d.M("framesLoadedChange", p) } else c(), l() };
    vh.ts = function(a, b, c) { 0 == a && 0 == b && (a = 0, b = 1); var d = this,
            e = d.jk,
            f = e,
            g = (new Date).getTime(),
            h = b - a;
        clearInterval(d.nh);
        d.nh = setInterval(function() { var k = (new Date).getTime() - d.Lm;
            f = e - k; var k = Math.min((h + 1 - Math.exp(-((new Date).getTime() - g) / 1E3)) / b, 0 > f ? 1 : k / e),
                k = b * k,
                l = d.da.V.ia;
            d.Jm && (l.Rl || d.J.Vd(d.J.ca[0].Ac * k / b));
            d.gr = k / b * 100;
            c(k, b, { isTotal: !0 });!l.Rl && 0 == a && 0 > f && !d.JA && (d.JA = !0, d.as()) }, 40) };
    vh.as = function() { var a = this,
            b = 1 * new Date - a.Lm;
        b < a.jk ? setTimeout(function() { a.as() }, a.jk - b) : (clearInterval(a.nh), a.Jm ? (b = new Af("renderready"), a.J.rc(a.jf), a.J.Fn = !0, a.jf = null, b.Pi(function() { a.J.Fn = !1 }), a.da.F(b), b.Lf()) : (a.Cr(), a.J.rc(a.jf), a.jf = null), a.Ur(null), a.Km()) };
    var wh = th;

    function xh() { xh.f.constructor.apply(this, arguments) } t.extend(xh, Sf);
    var yh = xh.prototype;
    yh.va = function() { var a = this.c,
            b = F.K("width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "user-select: none;" + (a.Wc ? "cursor: pointer;" : ""));
        this.ha.push(b);
        this.Ec = b;
        this.S = '<div  ondragstart="return false;" data-type="form" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}" ></div>' };
    yh.rb = function() { xh.f.rb.apply(this, arguments); for (var a = JSON.parse(this.c.A.param.Form), b = this.Ob, c = b;;)
            if (c && 1 != c.c.l) c = c.G;
            else break; var d, e = a.targetValue;
        (e = e ? JSON.parse(unescape(e)) : null) && (d = Hf.Tb({ event: "click", id: "form", mode: 2, name: "", param: e, type: "frame" == a.openTarget ? "gotoAndPlay" : "gotoPage" }, { au: c.Zc, Ht: b.c, jl: Sf.ya(0), It: c.c, Us: this.c }));
        d && (a.callback = d.D.bind(d));
        window.MugedaBehavior.popupForm(a, !0); if (a = a.iframeDiv) a.style.padding = 0, this.O().appendChild(a) };
    var zh = xh;

    function Ah() { Ah.f.constructor.apply(this, arguments);
        this.vh = this.Ei = null } t.extend(Ah, Sf);
    var Bh = Ah.prototype;
    Bh.va = function() {
        var a = this.c,
            b = a.A.param,
            c = "position: absolute; overflow: hidden; outline: none; padding: 0; background: transparent; border-radius: 0; width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "transform-origin: left top;" + K.prefix.s + "appearance:none;" + K.prefix.s + "user-select: initial;";
        b.lineWidth && (c += "border: " + b.lineWidth + "px solid " + b.strokeColor + ";");
        b = F.K(c);
        this.ha.push(b);
        this.Ec = b;
        this.S = '<div ondragstart="return false;" style="overflow:auto;-webkit-overflow-scrolling:touch;!important;" data-type="iframe" data-mid="' +
            a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}" >';
        this.S += '<iframe id="iframe_' + a.l + '" style="' + K.prefix.s + 'overflow:auto;border:none;display:block;width:100%;height:100%;position:absolute;left:0;top:0;" src=""></iframe>';
        this.S += "</div>"
    };
    Bh.rb = function() { Ah.f.rb.apply(this, arguments);
        this.c.M("visibilityChanged", this.Hk.bind(this)) };
    Bh.Hk = function() { var a = this.c,
            b = a.ne || "about:blank",
            a = a.ab(),
            c = this.O(),
            c = c.firstChild;
        b != this.vh && a && (c = this.O(), c = c.firstChild, K.Xq() && "about:blank" != b && (b = K.Nq(b)), this.vh = c.src = b);
        a || (this.vh = c.src = "about:blank") };
    Bh.j = function() { var a = this.O(); if (document.activeElement == a) { var b = a.getBoundingClientRect(),
                a = b.top,
                c = b.bottom,
                b = t.mj(),
                a = (a + c) / 2,
                b = b.height,
                c = this.c.La().V.Re; if (0 > a || a > b) c.style.cssText += K.prefix.s + "transform: translateY(-200px);" } };
    Bh.aa = function(a, b, c) { Ah.f.aa.apply(this, arguments);
        this.Hk() };
    var Ch = Ah;

    function Dh() { Dh.f.constructor.apply(this, arguments);
        this.ca = [];
        this.Zc = this.xr = this.Pl = this.Gf = this.$a = null;
        this.Nm = [];
        this.pk = null } t.extend(Dh, Sf);
    var Eh = Dh.prototype;
    Eh.Df = function() { var a = Dh.f.Df.apply(this, arguments);
        a.Ob = this;
        a.bg = a };
    Eh.va = function() { Dh.f.va.apply(this, arguments); var a = this.c;
        this.S = '<div  ondragstart="return false;" data-type="movie-clip" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">{{childNode}}</div>';
        a.Ch && (this.Zc = new kg(a, this)) };
    Eh.rb = function() { Dh.f.rb.apply(this, arguments);
        this.P && 1 < this.ca.length && this.G.c instanceof pf && this.Zc && this.Zc.Mx() };
    Eh.hz = function(a) { var b = this,
            c = b.c,
            d = c.$a,
            e = b.xr; if (e != d)
            if (b.xr = d, null == e) c.ca.forEach(function(a, c) { var f = b.ca[c]; if (null != f)
                    if (null == f.P && f.O(), d == a) f.c.Dc(!0), f.aa();
                    else if (e == a || null == e) f.c.Dc(!1), f.aa() });
            else { var f = c.ca.indexOf(e),
                    g = c.ca.indexOf(d),
                    h = b.ca[f],
                    k = b.ca[g];
                h.c.Dc(!0);
                b.Zc.Or(c.Ch.Ns);
                b.Zc.Rx(h, k, f, g, function() { h.sb.forEach(function() { h.c.Dc(!1) });
                    a();
                    b.Zc.Or(c.Ch.Ns = null) });
                b.Zc.Rv(h, k, f, g); return h } };
    Eh.Sv = function() { var a = this,
            b = a.c;
        a.pk !== b.Ea && (a.pk = b.Ea, b.Kl.forEach(function(b) { var d = b.c,
                e = a.P; if (d.ab()) { if ("video" == b.W.type) { var f = d.A.param || {};
                    b.W.param.video_id = d.l;
                    b.W.param.video_controls = 1 == f.hidePlayControls ? 0 : 1;
                    b.W.param.video_continue_audio = f.continueAudio;
                    b.W.param.auto = f.videoAutoPlay;
                    b.W.param.clickStatus = f.clickStatus;
                    b.W.param.hidePlayIcon = f.hidePlayIcon;
                    b.W.param.video_name = f.name;
                    b.W.param.video_mode = "object";
                    b.W.param.dom = e } b.D() } })) };
    var Fh = Dh;

    function Gh() { Gh.f.constructor.apply(this, arguments);
        this.fn = this.gn = this.en = this.an = null } t.extend(Gh, Sf);
    var Hh = Gh.prototype;
    Hh.Dr = function(a) { var b = this.c,
            c = b.lb; if (null != c && (c = c[0], null != c && null != c.bb)) { var d = c.bb.src;
            d !== b.Qd && (b.Qd = d, b = this.O(), a && (c.bb = a), this.va(), b && (b.innerHTML = this.Hq())) } };
    Hh.aa = function() {
        Gh.f.aa.apply(this, arguments);
        var a = this.c,
            b = !1,
            c = !1,
            d = a.Md(),
            e = a.fd.Ge,
            f = a.Oe;
        d && this.an != d.bb.src && (b = !0, this.an = d.bb.src);
        this.en != e && (b = !0, this.en = e);
        this.gn != f && (c = !0, this.gn = f);
        b && (b = this.gh(), d = (d = b.match(/id\=\"(.*?)\"/)) && 1 < d.length ? b.replace(new RegExp(d[1], "g"), "") : b, d != this.fn && (this.fn = d, d = this.O(), (e = d.querySelector("svg")) && (e.outerHTML = b), "none" != d.style.display && (d.style.display = "none", d.rD = d.offsetHeight, d.style.display = "block"), 1 != f && (c = !0)));
        c && (c = this.O().querySelector(".path_" +
            a.l), f = parseFloat(c.style.strokeDashoffset), 0 > a.Oe && (a.Oe = 0), f != parseFloat(c.style.strokeDasharray) * (1 - a.Oe) && (c.style.strokeDashoffset = parseFloat(c.style.strokeDasharray) * (1 - a.Oe)), 0 == a.Oe ? c.setAttribute("stroke-linecap", "none") : c.setAttribute("stroke-linecap", this.c.A.param.lineCap || "round"))
    };
    Hh.fg = function(a, b, c) {
        c = c || 1;
        var d = this.c;
        d.fd.Vb.forEach(function(e) {
            e instanceof td && (d.Di ? a.fillStyle = "rgba(255,255,255,0)" : a.fillStyle = Yf.Rn(a, e));
            if (e instanceof md) d.Di ? a.fillStyle = "rgba(255,255,255,0)" : a.fillStyle = Yf.Rn(a, e, b.Z, b.fa, d);
            else if (e instanceof xd) d.Di ? a.fillStyle = "rgba(255,255,255,0)" : a.fillStyle = Yf.Rn(a, e, b.Z, b.fa);
            else if (e instanceof sd) a.strokeStyle = e.om.Ic.gc(), a.lineWidth = e.og * c, a.lineCap = e.qq, a.lineJoin = e.ar;
            else if (e instanceof od) {
                var f = e.Ld,
                    g = e.dd;
                e = f.length * d.Oe;
                var h =
                    Math.floor(e),
                    k = e - h,
                    l = 0;
                a.beginPath();
                f.forEach(function(c, d) {
                    if (!(d > h))
                        if (c === Ve.Og) { var e = g[l++],
                                q = g[l++],
                                r = b.C(e, q);
                            a.moveTo(r.o, r.i) } else if (c === Ve.Bf) {
                        var e = g[l++],
                            q = g[l++],
                            v = g[l++],
                            x = g[l++],
                            r = g[l++],
                            w = g[l++];
                        if (d == h && 0 < k) { if (f[d - 1] === Ve.Og) var y = g[l - 8],
                                D = g[l - 7];
                            else f[d - 1] === Ve.Bf && (y = g[l - 12], D = g[l - 11]); var D = D + k * (x - D),
                                e = r + k * (e - r),
                                H = w + k * (q - w),
                                q = v + k * (r - v),
                                E = x + k * (w - x),
                                r = y + k * (v - y),
                                r = r + k * (q - r),
                                w = D + k * (E - D),
                                y = E + k * (H - E),
                                e = r + k * (q + k * (e - q) - r),
                                q = w + k * (y - w) } v = b.C(v, x);
                        x = b.C(r, w);
                        r = b.C(e, q);
                        a.bezierCurveTo(v.o,
                            v.i, x.o, x.i, r.o, r.i)
                    }
                });
                a.fill();
                a.stroke()
            }
        })
    };
    Hh.dh = function(a) {
        var b = this,
            c = a.type,
            d = a.target,
            e = b.c,
            f = e.A.type;
        if (2001 != f && 2002 != f && 2003 != f && 2004 != f && 2006 != f && 2009 != f || "path" == d.nodeName.toLowerCase()) Gh.f.dh.apply(b, arguments);
        else {
            for (var g = arguments, h = Sf.ya(0), k = function(d) {
                    var f = void 0 !== d.Ea ? (d.Gq(d.Ea) || {}).eh : d.children,
                        f = f.filter(function(a) { return a.l != e.l }),
                        n = new Va(c, a);
                    n.da = h.c;
                    var p = n.Fb(),
                        n = n.Gb();
                    "scene" == d.I && (d = b.xh.G.c);
                    p = new A(p, n);
                    n = d.Nd();
                    d.Pa && (n = Matrix.jc(d.Pa, n));
                    if (f = Sf.j(f, p, n)) "MovieClip" == f.I || "Sprite" == f.I ? k(f) :
                        (f = f.Fr, f.zq = f.P, Gh.f.dh.apply(f, g))
                }, d = e.G; 1 != d.l;) d = d.G;
            k(d)
        }
    };
    Hh.nv = function(a) {
        var b = this,
            c = "",
            d = null,
            e = null,
            f = b.c.nf && b.c.lb && b.c.lb[0],
            g = !1;
        a.forEach(function(a) {
            a instanceof td && (d = a);
            if (a instanceof md) d = a, g = !0;
            else if (a instanceof xd) d = a;
            else if (a instanceof sd) e = a;
            else if (a instanceof od) {
                var k = a.dd,
                    l = 0,
                    m = "";
                a.Ld.forEach(function(a) {
                    if (a === Ve.Og) { a = f && g ? Math.round(k[l++]) : k[l++]; var b = f && g ? Math.round(k[l++]) : k[l++];
                        m += " M" + a + " " + b } else if (a === Ve.Bf) {
                        if (f && g) {
                            a = Math.round(k[l++]);
                            var b = Math.round(k[l++]),
                                c = Math.round(k[l++]),
                                d = Math.round(k[l++]),
                                e = Math.round(k[l++]),
                                h = Math.round(k[l++])
                        } else a = k[l++], b = k[l++], c = k[l++], d = k[l++], e = k[l++], h = k[l++];
                        m += " C" + c + " " + d + "," + e + "," + h + "," + a + " " + b
                    }
                });
                var n = !1;
                if (b.O()) { a = b.P.querySelector("pattern"); var p = b.P.querySelector("image");
                    a && p && (n = d.Ln(a, p)) } n || (c += d.wm(b.c));
                a = b.c.A.param;
                n = "";
                a.lineType && "solid" != a.lineType ? (p = a.lineGap || 4, (a = { dotted: [2, p], dashed: [12 + a.lineWidth, p], dasheddotted: [12 + a.lineWidth, p, 2, p] }[a.lineType]) && (n = 'style="stroke-dasharray: ' + a.join(",") + ';"')) : b.c.Di && (n = 'style="stroke-dasharray: ' + (a.arcLength ||
                    1E4) + ';"');
                c += '<path class= "path_' + b.c.l + '" d="' + m + '" stroke="' + e.om.Ic.gc() + '" stroke-width="' + e.og + '" fill="' + d.Tj() + '" stroke-width="' + e.og + '" stroke-linecap="' + e.qq + '" stroke-linejoin="' + e.ar + '"  ' + n + 'style="' + (b.c.Wc ? "cursor: pointer;" : "") + '"/>'
            }
        });
        return c
    };
    Hh.j = function(a, b, c) { var d = c + 1;
        d == a.length && (d = 0);
        a[c].eA = b.forward.x;
        a[c].fA = b.forward.y;
        a[d].Az = b.Xn.x;
        a[d].Bz = b.Xn.y;
        b = b.$C;
        b = new this.ZB(b.SC, b.TC, b.eA, b.fA, b.Az, b.Bz);
        a.splice(c + 1, 0, b) };
    Hh.gh = function() { var a = this.c,
            b = a.fd,
            c = b.Vb,
            b = b.og / 2,
            d = a.na,
            e = a.la,
            f = c.some(function(a) { if (a instanceof md) return !0 });
        a.nf && f && (d = Math.round(d), e = Math.round(e));
        a = '<svg class="curve_render"  width="' + d + '" height="' + e + '" style="display:block;overflow:visible;margin:-' + b + "px;padding:" + b + 'px;">' + this.nv(c); return a += "</svg>" };
    Hh.va = function() { var a = this.c,
            b = this.fn = this.gh();
        this.S = '<div ondragstart="return false;" data-type="shape" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">' + b + "</div>";
        b = F.K("overflow: visible;");
        this.ha.push(b);
        this.Ec = b;
        this.an = a.Md() && a.Md().bb.src;
        this.en = a.fd.Ge;
        this.gn = a.Oe };
    t.H("Render.RenderObjectShape", Gh);
    var Ih = Gh;

    function Jh() { Jh.f.constructor.apply(this, arguments);
        this.im = null } t.extend(Jh, Sf);
    var Kh = Jh.prototype;
    Kh.va = function() { var a = this.c,
            b = F.K("width: " + a.na + "px; height: " + a.la + "px;" + (a.Wc ? "cursor: pointer;" : ""));
        this.ha.push(b);
        this.Ec = b;
        this.S = '<div  ondragstart="return false;" outouchstart="" data-type="sprite" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">{{childNode}}</div>' };
    Kh.rb = function() {
        var a = this;
        Jh.f.rb.apply(a, arguments);
        var b = a.c,
            c = b.A.param,
            d = c.scroll;
        "trim" === c.render && (d && "no" !== d ? K.Sa.pd ? (a.O().style.overflow = "hidden", b.M(K.Db, function(c) {
            function f(c) { k.Fa(K.Hc, g);
                k.Fa(K.qb, f);
                b.of = a.Kx.bind(a);
                g(c);
                h.bs();
                l && c.stopImmediatePropagation() }

            function g(b) { h.add(new A(b.Fb(), b.Gb()));
                b = h.Rw(); "ver" === d ? b.o = 0 : "hor" === d && (b.i = 0);
                a.Vr(b.o, b.i);
                l = !0 } var h = new Pb;
            b.of = null;
            a.im = h; var k = c.da,
                l = !1;
            h.start(c.xi());
            k.M(K.Hc, g);
            k.M(K.qb, f) })) : (c = a.O().style, "ver" === d ?
            (c.overflowX = "hidden", c.overflowY = "auto") : "hor" === d ? (c.overflowX = "auto", c.overflowY = "hidden") : "free" === d && (c.overflow = "auto"), b.M(K.Db, function(a) {
                function b(a) { d.Fa(K.Hc, c);
                    d.Fa(K.qb, b);
                    k && a.stopImmediatePropagation() }

                function c() { k = !0 } var d = a.da,
                    k = !1;
                d.M(K.Hc, c);
                d.M(K.qb, b) })) : a.O().style.overflow = "hidden")
    };
    Kh.Vr = function(a, b) { var c = this.c,
            d = c.A.param,
            e = d.rawWidth,
            f = d.rawHeight,
            d = c.Pa;
        d.L(a, b);
        this.iq || (this.iq = new A); var g = this.iq;
        g.o = 0;
        g.i = 0;
        d.C(g, !0);
        0 < g.o ? d.L(-g.o, 0) : (e = g.o - (c.na - e), 0 > e && d.L(-e, 0));
        0 < g.i ? d.L(0, -g.i) : (e = g.i - (c.la - f), 0 > e && d.L(0, -e));
        c.children.forEach(function(a) { a.F(a.ea) }) };
    Kh.Kx = function() { var a = this.im,
            b = a.$q(),
            c = this.c.A.param.scroll; "ver" === c ? b.o = 0 : "hor" === c && (b.i = 0);
        this.Vr(b.o, b.i);
        0 === a.Bd.o && 0 === a.Bd.i && (this.im = this.c.of = null) };
    Kh.aa = function() { Jh.f.aa.apply(this, arguments) };
    var Lh = Jh;

    function Mh() { Mh.f.constructor.apply(this, arguments);
        this.kn = this.Ar = this.bn = this.cn = this.Hj = this.Mf = this.Nf = null;
        this.Pm = !1 } t.extend(Mh, Sf);
    var Nh = Mh.prototype;
    Nh.va = function() { var a = this.c,
            b = a.A.image,
            c = "";
        b && b.length ? (b = a.cc().V.rn.bh.qc(b), c = "background-image: url(" + b + "); background-repeat: no-repeat;background-size:100% 100%;background-position:center;") : c = "background:" + a.Ic.gc() + ";";
        b = F.K("overflow: hidden;" + c + "left: 0;top: 0;" + (a.Wc ? "cursor: pointer;" : ""));
        this.ha.push(b);
        this.Ec = b;
        this.S = '<div data-type="stage" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">{{childNode}}</div>' };
    Nh.rb = function() { Mh.f.rb.apply(this, arguments);
        window.addEventListener("orientationchange", function() { var a = document.activeElement;
            a && a.blur() }) };
    Nh.Pq = function() {
        var a;
        if (!K.Sa.Af && !K.Sa.Xe && !K.Sa.Mk) return 0;
        var b = this.c;
        a = a || this.Em();
        var c = a.width,
            d = a.height,
            e = b.Ha,
            f = b.Ga;
        a = 0;
        b = (b.A.metadata || {}).rotateMode;
        if ("auto" == b) { if (c = d / c, e = f / e, 1 < c && 1 > e || 1 > c && 1 < e) switch (window.orientation || 0) {
                case 0:
                    a = 90; break;
                case 90:
                    a = -90; break;
                case -90:
                    a = 90; break;
                default:
                    a = -90 } } else if ("landscape" == b) switch (window.orientation || 0) {
            case 0:
                a = 90; break;
            case 90:
                a = 0; break;
            case -90:
                a = 0; break;
            default:
                a = -90 } else if ("portrait" == b) switch (window.orientation || 0) {
            case 0:
                a =
                    0;
                break;
            case 90:
                a = -90;
                break;
            case -90:
                a = 90;
                break;
            default:
                a = 0
        }
        return a
    };
    Nh.Em = function() { var a = this.c.V.Re.parentNode; return "embedded" == (this.c.ag || {}).render_mode && a != document.body ? { width: a.offsetWidth, height: a.offsetHeight } : t.mj() };
    Nh.eq = function() {
        var a = this;
        a.Pm = !1;
        var b = a.c,
            c = b.Ah,
            d = a.Em(),
            e = d.width,
            d = d.height,
            f = b.Ha,
            g = b.Ga,
            h = document.activeElement; - 1 != ["INPUT", "TEXTAREA"].indexOf(h.tagName) || h.getAttribute("contenteditable") || (h = null);
        if (null == h || null == h.gg) var k = !0;
        var l = 0;
        k ? l = a.Pq() : l = 0;
        if (d < a.kn && !k && 0 == l) var m = d,
            e = a.Ar,
            d = a.kn;
        l / 180 * Math.PI != b.lg && (b.lg = l / 180 * Math.PI, b.F(new z("stageRotateChange")));
        var n = new A(e / 2, d / 2),
            l = new A(-e / 2, d / 2),
            p = new B;
        p.nc(-b.lg);
        p.C(n, !0);
        p.C(l, !0);
        var q, r, v;
        c == mf.Es && (c = K.Sa.Xe ? mf.tl : mf.Cs);
        var p = 2 * Math.max(Math.abs(n.o), Math.abs(l.o)),
            x = 2 * Math.max(Math.abs(n.i), Math.abs(l.i));
        if (c == mf.tl) r = q = p / f, v = new Hc(0, (g - x / r) / 2, f, x / r);
        else if (c == mf.dv) r = q = x / g, v = new Hc((f - p / q) / 2, 0, p / q, g);
        else if (c == mf.Cs) { q = n.i * l.o;
            r = n.o * l.i; var c = g * n.o,
                n = f * n.i,
                w = g * l.o,
                l = f * l.i;
            r = q = 2 * Math.min(Math.abs(-f * (-q + r) / (-c + n + w - l)), Math.abs(f * (-q + r) / (-c + n - w + l)), Math.abs(-f * (-q + r) / (c + n - w - l)), Math.abs(-f * (-q + r) / (c + n + w + l))) / f;
            v = new Hc((f - p / q) / 2, (g - x / r) / 2, p / q, x / r) } else c == mf.bv ? (r = q = Math.max(p / f, x / g), v = new Hc((f - p / q) / 2, (g - x /
            r) / 2, p / q, x / r)) : c == mf.cv ? (q = p / f, r = x / g, v = new Hc((f - p / q) / 2, (g - x / r) / 2, p / q, x / r)) : c == mf.Os && (r = q = 1, v = new Hc((f - p / q) / 2, (g - x / r) / 2, p / q, x / r));
        null != m && v.sf(v.Aa() - (d - m) / r);
        b.U = v;
        b.py = q;
        b.qy = r;
        b.le(new Mc);
        m = b.C.T;
        k && (a.Ar = e, a.kn = d);
        k = 0;
        if (h && (l = h.gg)) {
            x = p = l.c;
            l = new A(0, 0);
            p = new A(p.na, p.la);
            do l = x.C.T.C(l, !0), p = x.C.T.C(p, !0), x.Pa && (l = x.Pa.C(l, !0), p = x.Pa.C(p, !0)), x = x.G; while (x.G && 0 != x.G.l);
            x = v.kf();
            n = v.lf();
            c = v.vd();
            w = v.Vc();
            if (l.i < w || p.i < w || l.i > x || p.i > x || l.o < c || p.o < c || l.o > n || p.o > n) k = (l.o + p.o) / 2 - v.Ma() / 2 - v.vd(),
                l = (l.i + p.i) / 2 - v.Aa() / 2 - v.Vc(), k = 0 < k ? Math.min(k, f - n) : Math.max(k, -c), k = l = 0 < l ? Math.min(l, g - x) : Math.max(l, -w)
        }
        v.hg(v.Vc() + k);
        var y = -b.U.Ba,
            D = -b.U.Ca;
        m.L(-y, -D);
        m.L(-b.Ha / 2, -b.Ga / 2);
        m.Lb(q, r);
        m.nc(b.lg);
        m.L(e / 2, d / 2);
        m.L(0, -k * r);
        v.sf(Math.ceil(v.Aa()));
        a.Nf = v.X;
        a.Mf = v.Y;
        Oh.bind(a)(function(a) { a.Nf = v.X;
            a.Mf = v.Y;
            a.hi = y;
            a.Zg = D });
        b.F(b.ea);
        h && K.Sa.pd && setTimeout(function() { h.scrollIntoViewIfNeeded() }, 500);
        if (!Ph) {
            var H = t.Pz(a.eq.bind(a));
            b.M("resize", H, 50);
            window.addEventListener("orientationchange", H, 50);
            b.M("blur", function() { a.Pm = !0;
                setTimeout(function() { a.Pm && H() }, 1E3) }, !0);
            b.M("focus", H, !0);
            Ph = !0;
            a.aa(!0)
        }
    };
    var Ph = !1;
    window.Mugeda && (window.Mugeda.getWindowSize = t.mj);

    function Oh(a) { this.sb.filter(function(a) { return a instanceof Fh }).forEach(function(b) { b.sb.filter(function(a) { return a instanceof jh }).forEach(a) }) }
    Nh.aa = function() { this.O(); var a = Mh.f.aa.call(this, !0),
            b = !1; if (this.cn !== this.Nf || this.bn !== this.Mf) { b = !0;
            this.cn = this.Nf;
            this.bn = this.Mf;
            this.Hj && (F.ec(this.Hj), this.ha.splice(this.ha.indexOf(this.Hj), 1)); var c = F.K("width:" + this.Nf + "px;height:" + (this.Mf + 0) + "px;");
            this.ha.push(c);
            this.Hj = c;
            Oh.bind(this)(function(a) { a.ZA() }) }(b || a) && this.Ye(); return a };
    var Qh = Mh;

    function Rh() { Rh.f.constructor.apply(this, arguments);
        this.hn = null;
        this.yr = {};
        this.tr = {};
        this.Eo = this.Fs = !1;
        this.Bs = null } t.extend(Rh, Sf);
    var Sh = Rh.prototype;
    Sh.Qq = function(a, b, c) { var d = document.createElement("div");
        d.id = "text_measure_" + (new Date).getTime();
        d.style.padding = 0;
        d.style.margin = 0;
        d.style.display = "block";
        d.style.fontSize = b + "px";
        d.style.opacity = 0;
        d.style.position = "absolute";
        d.style.left = 0;
        d.style.top = 0; "simhei" == c.toLowerCase() && (c = '"Microsoft YaHei", "\u5fae\u8f6f\u96c5\u9ed1", SimHei, sans-serif');
        d.style.fontFamily = c;
        d.textContent = a;
        document.body.appendChild(d);
        a = d.clientWidth;
        document.body.removeChild(d); return a };
    Sh.xm = function() {
        var a = this.c,
            b = a.fe,
            c = "",
            d = a.zc || [],
            e = d.filter(function(a) { return 0 < a.param.fillInfo.fillStyle });
        if (0 == d.length && a.A.param.fillInfo.fillStyle || 0 < e.length) c = "background:" + Th(a.A.param) + ";" + K.prefix.s + "text-fill-color: transparent;" + K.prefix.s + "background-clip: text;";
        "-moz-" !== K.prefix.s ? (this.km = "display: " + K.prefix.s + "box;display: " + K.prefix.s + "flex;", d = "display: " + K.prefix.s + "box;display: " + K.prefix.s + "flex;" + K.prefix.s + "box-orient: vertical;" + K.prefix.s + "flex-direction: column;" +
            K.prefix.s + "box-pack: " + (a.ng === ng.ga ? "center" : a.ng === ng.ve ? "end" : "start") + ";" + K.prefix.s + "justify-content: " + (a.ng === ng.ga ? "center" : a.ng === ng.ve ? "flex-end" : "flex-start") + ";", c = '<div class="text_holder" style="' + c + '">' + a.Yf + "</div>") : (this.km = "display: table;", e = a.ng === ng.ga ? "middle" : a.ng === ng.ve ? "bottom" : "top", d = "display: table;", c = '<div style="display: table-cell; vertical-align: ' + e + ";" + c + '">' + a.Yf + "</div>");
        c = '<div ondragstart="return false;" data-type="text-field" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' +
            a.R + '"' : "") + ' class="{{className}}">' + c + "</div>";
        e = a.Ua ? a.Ua.Uf() : b.pi;
        if (b.Ck) var f = b.Ck + "%";
        a.Pb && 0 < a.Pb.Z && (d += K.prefix.s + "text-stroke:" + a.Yi / 1 + "px " + a.Pb.gc() + ";");
        return {
            qo: c,
            s: "position: absolute; width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "transform-origin: left top;" + d + "font-family: " + e + ";text-align: " + b.Ff + ";color: " + b.Ic.gc() + ";font-size: " + b.Vi + "px;line-height: " + f + ";letter-spacing: " + b.dr + "px;" + (b.fi ? "font-weight: bold;" : "") + (b.Gk ? "text-decoration: underline;" : "") + (b.Gi ? "font-style: italic;" :
                "") + (a.Wc ? "cursor: pointer;" : "")
        }
    };
    Sh.Wq = function() { var a = this,
            b = a.c; if (b.Ua) { var c = b.Ua.hc; if (c.xa.Qa == se.Oa.LOADED) a.gm = b.Na, b.Ua.Ol();
            else { var d = function() { a.de = null;
                    a.hk = null;
                    a.gm = b.Na;
                    b.Ua.Ol() };
                a.hk = b.Na;
                c.xa.tc("complete", d);
                c.xa.tc("ioError", d);
                a.de = function() { c.xa.Fa("complete", d);
                    c.xa.Fa("ioError", d) } } } };
    Sh.va = function() { var a = this.xm();
        this.S = a.qo; var a = a.s,
            b = this.c;
        this.Wq();
        b = b.Cd || "visible"; if ("visible" != b) { a += "overflow: " + ("scroll" == b || "scrollNoBar" == b ? "auto" : b) + ";"; if ("scroll" == b || "scrollNoBar" == b) a += "-webkit-overflow-scrolling: touch;";
            this.ha.push("mugeda_overflow"); "scrollNoBar" == b && this.ha.push("nobar") } a = F.K(a);
        this.ha.push(a);
        this.Ec = a };
    K.QC || "-webkit-" != K.prefix.s || (F.K("mugeda_overflow::" + K.prefix.s + "scrollbar", "width: 4px;height:0px;"), F.K("mugeda_overflow::" + K.prefix.s + "scrollbar-thumb", "background-color:rgba(255,255,255,0.5);"), F.K("mugeda_overflow::" + K.prefix.s + "scrollbar-track", K.prefix.s + "box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);background-color: inset 0 0 4px rgba(0, 0, 0, 0.5);"), F.K("nobar::" + K.prefix.s + "scrollbar", "background-color:rgba(255,255,255,0);"), F.K("nobar::" + K.prefix.s + "scrollbar-thumb", "background-color:rgba(255,255,255,0);"),
        F.K("nobar::" + K.prefix.s + "scrollbar-track", K.prefix.s + "box-shadow: inset 0 0 4px rgba(0, 0, 0, 0);background-color: inset 0 0 4px rgba(0, 0, 0, 0);"));
    F.K("mugeda_richtext a", "text-decoration:none;color:inherit;");
    F.K("mugeda_richtext a:visited", "text-decoration:none;color:inherit;");
    F.K("mugeda_richtext img", "width:100%;");
    Sh.rb = function() { var a = this.c;
        a.hn && a.us();
        Rh.f.rb.apply(this, arguments) };
    Sh.qr = function(a) {
        function b() { c.Fk(a) } var c = this,
            d = c.c; if (!d.Ua) return b(); var d = Re.j(d.Ua.ri, null, d.Na),
            e = d.hc;
        e.xa.Qa == se.Oa.LOADED ? b() : (e.xa.tc("complete", b), e.xa.tc("ioError", b), c.de = function() { e.xa.Fa("complete", b);
            e.xa.Fa("ioError", b) }, d.Xc(e)) };
    Sh.Fk = function(a) {
        var b = this,
            c = b.c,
            d = "";
        c.Ua && (d += "<defs><style>@font-face {font-family: " + c.Ua.Uf() + ";src:url(" + c.Ua.Wg + ")}</style></defs>");
        var e = c.na,
            c = c.la,
            f = b.xm(),
            g = f.qo,
            g = g.replace('class="{{className}}"', 'style="' + f.s.replace(/"/g, "'") + '"'),
            d = '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + c + '">' + d + '<foreignObject x="0" y="0" width="' + e + '" height="' + c + '"><div xmlns="http://www.w3.org/1999/xhtml">' + g + "</div></foreignObject></svg>",
            h = new Image;
        h.src = "data:image/svg+xml," +
            encodeURIComponent(d);
        h.onload = h.onerror = function() { b.ds = h;
            a() }
    };
    Sh.ws = function(a) {
        var b = this,
            c = b.c,
            d = c.Yf;
        if (d != b.gy)
            if (b.gy = d, c.Ua)
                if (c.Na == b.uq) { b.Jf && b.Jf(); var e = function() { b.Jf = null;
                        b.uq = c.Na;
                        b.ik = null;
                        b.Fk(a) };
                    c.Ua.hc.xa.Qa == se.Oa.LOADED ? e() : (b.ik = c.Na, c.Ua.hc.xa.tc("complete", e), c.Ua.hc.xa.tc("ioError", e), b.Jf = function() { c.Ua.hc.xa.Fa("complete", e);
                        c.Ua.hc.xa.Fa("ioError", e) }) } else {
                    if (c.Na != b.ik) {
                        b.Jf && b.Jf();
                        b.ik = c.Na;
                        var f = function() { b.Jf = null;
                                b.ik = null;
                                b.uq = c.Na;
                                c.Ua = g;
                                b.Fk(a) },
                            g = Re.j(c.Ua.ri, null, c.Na),
                            h = g.hc;
                        h.xa.Qa == se.Oa.LOADED && f();
                        b.wz = setTimeout(function() {
                            h.xa.Qa ==
                                se.Oa.LOADED ? f() : (h.xa.tc("complete", f), h.xa.tc("ioError", f), b.de = function() { h.xa.Fa("complete", f);
                                    h.xa.Fa("ioError", f) }, g.Xc(h))
                        }, 100);
                        b.Jf = function() { clearTimeout(b.wz) }
                    }
                }
        else b.Fk(a)
    };
    Sh.Ym = function() { var a = this,
            b = a.c;
        b.M("changed", function() { a.ws(function() { b.F(b.ea) }) });
        a.ws(function() {}) };
    Sh.fg = function(a, b, c, d) {
        var e = this.c;
        if (this.ds) {
            c = Math.max(b.Z, b.fa);
            var f = e.na * c,
                g = e.la * c;
            a.transform(b.Z / c, 0, 0, b.fa / c, 0, 0);
            if (K.Sa.pd && d) {
                b = document.createElement("div");
                f = this.xm();
                d = f.qo;
                d = d.replace('class="{{className}}"', 'style="' + f.s.replace(/"/g, "'") + '"');
                var h = e.fe;
                if (e.Ua) { var k = e.Ua.Uf();
                    d += "<style>@font-face {font-family: " + k + ";src:url(" + e.Ua.Wg + ")}</style>" } else k = h.pi;
                b.innerHTML = d;
                var l = b.firstChild.firstChild;
                d = l.childNodes;
                for (var f = d.length, m = "", g = 0; g < f; g++) {
                    var n = d[g];
                    n.nodeType ==
                        Node.TEXT_NODE ? (n = n.textContent, n = n.replace(/(.)(\s|$)/g, function(a, b, c) { return b + '<span class="sp"></span>' + c }), n = n.replace(/[^\x00-\xff]/g, function(a) { return a + '<span class="sp"></span>' }), m += n) : m += n.outerHTML
                }
                l.innerHTML = m;
                a.strokeStyle = "red";
                k = h.Vi * c + "px " + k;
                h.fi && (k = "bold " + k);
                h.Gi && (k = "italic " + k);
                a.font = k;
                a.textBaseline = "top";
                a.textAlign = "right";
                d = e.A.param;
                d.fillInfo && (a.fillStyle = Yf.kB(a, d));
                a.strokeStyle = e.Pb.gc();
                a.lineWidth = d.lineWidth;
                a.lineCap = d.lineCap;
                a.lineJoin = d.lineJoin;
                document.body.appendChild(b);
                e = l.getBoundingClientRect();
                d = l.childNodes;
                f = d.length;
                for (g = 0; g < f; g++) n = d[g], "sp" == n.className && (h = n.getBoundingClientRect(), l = (h.left - e.left) * c, h = (h.top - e.top) * c, k = d[g - 1], a.fillText(k.textContent, l - 1, h - 1), a.strokeText(k.textContent, l - 1, h - 1));
                document.body.removeChild(b)
            } else a.drawImage(this.ds, 0, 0, f, g)
        }
    };
    Sh.aa = function(a, b, c) {
        var d = this,
            e = d.c;
        Rh.f.aa.apply(d, arguments);
        var f = e.Yf,
            g = e.ab();
        if (f != d.hn) {
            if (e.Ua)
                if (e.Na == d.gm) d.de && d.de();
                else if (e.Na != d.hk) {
                d.de && d.de();
                d.hk = e.Na;
                var h = function() { d.de = null;
                        d.hk = null;
                        d.gm = e.Na;
                        e.Ua = k;
                        k.Ol();
                        d.P.style.cssText += "font-family:" + k.Uf() + ";" },
                    k = Re.j(e.Ua.ri, null, e.Na),
                    l = k.hc;
                l.xa.Qa == se.Oa.LOADED ? h() : (d.Bs = setTimeout(function() { l.xa.Qa == se.Oa.LOADED ? h() : (l.xa.tc("complete", h), l.xa.tc("ioError", h), d.de = function() { l.xa.Fa("complete", h);
                            l.xa.Fa("ioError", h) }, k.Xc(l)) },
                    100), d.de = function() { clearTimeout(d.Bs) })
            }
            d.hn = f;
            f = "";
            /^((?!chrome|android).)*(safari|iphone|ipad|ipod)/i.test(navigator.userAgent) && (f = '<img style="width:1px;height:1px;" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">');
            d.P.children.length && (d.P.children[0].innerHTML = e.Yf + f)
        }
        if ("scroll" == e.Cd || "scrollNoBar" == e.Cd) f = e.La(), c = 1E3 * f.Hh / f.Ee, g && !d.Fs && (d.startTime = c, d.Eo = !1), f = d.O(), f.cB || (f.cB = !0, f.addEventListener(K.Db, function(a) { d.Eo = !0;
                a.stopPropagation() })),
            d.Fs = g, g = c - d.startTime, g = 1600 < g ? .016 * (g - 1600) : 0, e.Cd && !d.Eo && (f.scrollTop = g);
        f = d.O();
        g = (e.C || {}).Nc;
        g.td(d.yr) || (f.style.letterSpacing = (g.yd || 0) + "px", f.style.lineHeight = (g.zd || 100) + "%", f.style.fontSize = (g.ud || parseFloat(f.style.fontSize)) + "px", d.yr = g);
        g = (e.C || {}).ka;
        if (!g.td(d.tr)) {
            var m = g.he,
                n = e.A.param,
                p;
            0 <= m.fillStyle && (p = Th({ fillInfo: m, rawWidth: n.rawWidth || n.width, rawHeight: n.rawHeight || n.height }));
            n = f.querySelector(".text_holder");
            p && n && (n.style[0 < m.fillStyle ? "background" : "color"] = p);
            if (p = g.Pb) p =
                qd.parse(p).gc(), f.style[K.prefix.Zk + "TextStroke"] = g.Ie + "px " + p;
            d.tr = g
        }
    };

    function Th(a) {
        var b = a.fillInfo;
        if (0 == b.fillStyle) return b = b.fillColors[0], "rgba(" + b.r + "," + b.g + "," + b.b + "," + b.a + ")";
        if (1 == b.fillStyle || 2 == b.fillStyle) {
            var c = b.fillStartPos.x,
                d = b.fillStartPos.y,
                e = b.fillEndPos.x,
                f = b.fillEndPos.y,
                g = a.rawWidth || a.width,
                h = a.rawHeight || a.height;
            a = Math.atan2(f - d, e - c);
            var k = function(a, b, c) { return { x: a * Math.cos(c) - b * Math.sin(c), y: a * Math.sin(c) + b * Math.cos(c) } },
                l = k(0, h, -a).x,
                m = k(g, h, -a).x,
                n = k(g, 0, -a).x,
                p = k(c, d, -a).x,
                q = k(e, f, -a).x,
                r = Math.max(0, l, m, n),
                v = Math.min(0, l, m, n),
                x = function(a,
                    b, c, d, e) { return (d - c) / (b - a) * (e - a) + parseFloat(c) },
                l = function(a, b, c) { var d = {};
                    d.Ed = c;
                    d.r = x(a.Ed, b.Ed, a.r, b.r, c);
                    d.g = x(a.Ed, b.Ed, a.g, b.g, c);
                    d.b = x(a.Ed, b.Ed, a.b, b.b, c);
                    d.a = x(a.Ed, b.Ed, a.a, b.a, c); return d },
                k = function(a, b) { return "rgba(" + Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b) + "," + a.a + ") " + (void 0 == b ? a.Ed : b) + "%" };
            if (1 == b.fillStyle) {
                b.fillColors.forEach(function(a) { a.Ed = x(v, r, 0, 100, p + (q - p) * a.p) });
                for (var c = !1, w = "", e = 0; e < b.fillColors.length; e++)
                    if (d = b.fillColors[e], g = d.Ed, c)
                        if (100 > g) {
                            if (w +=
                                ", " + k(d), e == b.fillColors.length - 1) { w += ", " + k(d, 100); break }
                        } else { w += ", " + k(l(d, b.fillColors[e - 1], 100), 100); break }
                else { if (0 > g)
                        if (e < b.fillColors.length - 1)
                            if (0 > b.fillColors[e + 1].Ed) continue;
                            else w += ", " + k(l(d, b.fillColors[e + 1], 0));
                    else w += ", " + k(d, 0), w += ", " + k(d, 100);
                    else w += ", " + k(d, 0), w += ", " + k(d);
                    c = !0 } w = "linear-gradient(" + (K.vg.qt ? 180 * a / Math.PI + 90 : 180 * -a / Math.PI) + "deg" + w + ")"
            } else if (2 == b.fillStyle) {
                a = Math.sqrt(Math.pow(c - e, 2) + Math.pow(d - f, 2));
                w = "";
                for (e = 0; e < b.fillColors.length; e++) w += ", " + k(b.fillColors[e],
                    100 * b.fillColors[e].p);
                w = "radial-gradient(" + c / g * 100 + "% " + d / h * 100 + "%, " + a + "px " + a + "px" + w + ")"
            }
            return K.prefix.s + w
        }
        return "transparent"
    }
    t.H("Render.RenderObjectTextField", Rh);
    var Uh = Rh;

    function Vh() { this.Ql = null;
        this.$l = this.Vm = this.gd = !1;
        this.Ce = null;
        Vh.f.constructor.apply(this, arguments) } t.extend(Vh, mh);
    var Wh = Vh.prototype;
    Wh.va = function() {
        var a = this.c;
        a.qf = this.Ki.bind(this);
        a.cg = this.Um.bind(this);
        a.Xi = this.qn.bind(this);
        var b = (a.A.param || {}).hidePlayIcon,
            c = F.K("width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "user-select: none;cursor: pointer;");
        this.ha.push(c);
        this.Ec = c;
        b = F.K("visibility: " + (b ? "hidden" : "visible") + ";width: 73px;height: 48px;position: absolute;left: 0;top: 0;right: 0;bottom: 0;margin: auto;text-align: center;line-height: 84px;opacity: 0.6;");
        this.S = '<div  ondragstart="return false;" data-type="video" data-mid="' +
            a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}"><div style="position: absolute; width: 100%; height: 100%;background:no-repeat center;background-size:cover;" ></div>';
        this.S += '<svg version="1.0" class="' + b + '" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="73px" height="48px" viewBox="0 0 73 48" enable-background="new 0 0 73 48" xml:space="preserve">   <g opacity="0.8">   <path d="M73,43c0,2.8-2.3,5-5,5H5c-2.8,0-5-2.3-5-5V5c0-2.8,2.3-5,5-5h63c2.8,0,5,2.3,5,5V43z"/>   </g>   <polygon fill="#FFFFFF" points="28,12.5 28,35.5 48.4,24 "/></svg>';
        this.S += "</div>";
        a.M("visibilityChanged", this.Mn.bind(this))
    };
    Wh.Mn = function() {!this.c.ab() && window.MugedaMraid && window.MugedaMraid.stopVideo() };
    Wh.O = function(a) { var b = Vh.f.O.apply(this, arguments); if (a && b) return b.firstChild;
        null == this.Ql && b && (this.Ql = b.children[1]); return b };
    Wh.aa = function() {
        Vh.f.aa.apply(this, arguments);
        var a = this.c,
            b = this.Ce;
        if (a.Oj && b) { var c = b.canvas,
                d = b.Mz,
                e = b.videoWidth,
                f = b.videoHeight,
                g = c.width,
                h = c.height,
                k = c.na,
                c = c.la,
                l = Math.min(k / e, c / f),
                e = e * l,
                f = f * l,
                m = (k - e) / 2,
                l = (c - f) / 2,
                k = g / k,
                c = h / c,
                h = Math.floor(m * k),
                e = Math.ceil(e * k + (m - h)),
                k = Math.floor(l * c),
                f = Math.ceil(f * c + (l - k));
            d.drawImage(b, h, k, e, f);
            setTimeout(function() { a.F(a.ea) }) } else this.Ql.style[K.prefix.Yk + "Transform"] = "scaleX(" + 1 / a.wc() + ") scaleY(" + 1 / a.xc() + ")", d = a.Ma(), b = a.Aa(), k = a.na, c = a.la, k = d / k, c =
            b / c, c > k ? (k = c / k, c = 1) : (c = k / c, k = 1), this.O(!0).style[K.prefix.Yk + "Transform"] = "scaleX(" + k + ") scaleY(" + c + ")"
    };
    Wh.qn = function() { var a = this.Ce;
        a && (this.Um(), a.canvas && a.canvas.parentNode.removeChild(a.canvas), a.parentNode.removeChild(a), this.c.F(new z("videoend")), this.Ce = null, a.canvas && (a.canvas.style.display = "none")) };
    Wh.fm = function() {
        function a() { if (0 < d.currentTime) { d.removeEventListener("timeupdate", a); var e = window.backgroundMusic;
                c.Qm && e && (e.prevPlayStatus = void 0 === e.playStatus ? 1 : e.playStatus, e.pause(), e.playStatus = 0);
                b.$l && (c.F(new z("videostart")), b.$l = !1, d.canvas && (d.canvas.style.display = "block")) } }
        var b = this,
            c = b.c,
            d = document.createElement("video");
        c.Yr && d.setAttribute("controls", "");
        d.setAttribute("src", c.zs);
        d.setAttribute("playsinline", "");
        d.setAttribute("x-webkit-airplay", "");
        d.setAttribute("webkit-playsinline",
            "");
        d.setAttribute("preload", "auto");
        d.style.cssText = "width:100%;height:100%;position:absolute;";
        if (c.Oj) {
            d.setAttribute("x5-video-player-type", "h5");
            d.setAttribute("x5-video-player-fullscreen", "false");
            d.style.cssText += "z-index: -10; visibility: hidden;";
            var e = document.createElement("canvas"),
                f = c.na * K.devicePixelRatio,
                g = c.la * K.devicePixelRatio,
                h = Math.min(1, Math.sqrt(665600 / f / g));
            e.width = Math.floor(f * h);
            e.height = Math.floor(g * h);
            e.na = c.na;
            e.la = c.la;
            e.style.cssText = "position: absolute; width: 100%; height: 100%; background: black; display: none;";
            d.canvas = e;
            d.Mz = e.getContext("2d");
            c.F(c.ea)
        } else d.setAttribute("x5-playsinline", "");
        d.addEventListener("pause", function() { b.gd = !1; var e = window.backgroundMusic;
            c.Qm && e && 1 == e.prevPlayStatus && (e.play(), e.playStatus = 1, delete e.prevPlayStatus);
            d.addEventListener("timeupdate", a) });
        d.addEventListener("ended", function() { window.webkitMediaStream && (this.srcObject = new window.webkitMediaStream, this.srcObject = null);
            b.qn() });
        d.addEventListener("timeupdate", a);
        c.Oj ? (Sf.ya(c.cc().l).O().appendChild(d), b.O().appendChild(e)) :
            b.O().appendChild(d);
        b.$l = !0;
        b.Ce = d;
        b.Ki()
    };
    Wh.j = function() { return this.Ce };
    Wh.Ki = function() { var a = this;
        a.Vm = !1; var b = a.Ce;
        b ? (b.play(), K.ek() && !a.gd && (a.gd = !0, K.Gm(function(c) { c.invoke("getNetworkType", {}, function() { a.gd && (b.play(), a.gd = !1) }) }))) : a.fm() };
    Wh.Um = function() { var a = this,
            b = a.Ce;
        b && (0 < b.readyState ? (a.gd = !1, b.pause()) : (a.Vm = !0, b.addEventListener("loadedmetadata", function() { a.Vm && b.pause() }))) };
    Wh.rb = function() { var a = this,
            b = a.c;
        b.M("click", function() { var c = a.Ce;
            c ? b.sq ? c.paused ? a.Ki() : a.Um() : a.Ki() : a.fm() });
        b.Hf && b.ab() && a.fm();
        b.M("visibilityChanged", function() { var c = b.ab(),
                d = a.Ce;
            c && b.Hf ? a.Ki() : !c && d && a.qn() });
        Vh.f.rb.apply(a, arguments) };
    var Xh = Vh;

    function Yh() { Yh.f.constructor.apply(this, arguments);
        this.Bj = this.vh = this.Ei = null } t.extend(Yh, Sf);
    var Zh = Yh.prototype;
    Zh.va = function() { var a = this.c,
            b = F.K("width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "user-select: none;" + (a.Wc ? "cursor: pointer;" : ""));
        this.ha.push(b);
        this.Ec = b;
        this.S = '<div ondragstart="return false;" data-type="video" data-mid="' + a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}">   <iframe width="100%" height="100%" allowfullscreen frameborder="0" src="" style="position: absolute;"/></iframe></div>' };
    Zh.O = function(a) { return a ? this.Ei : Yh.f.O.apply(this, arguments) };
    Zh.rb = function() { var a = this;
        Yh.f.rb.apply(a, arguments); var b = a.c;
        a.Ei = a.O().children[0];
        b.M("visibilityChanged", a.As.bind(a));
        b.M("rendered", a.Hr.bind(a));
        b.cc().M("resize", function() { setTimeout(function() { a.Hr.bind(a)() }, 500) });
        a.Bj = b.ab() };
    Zh.As = function(a) { var b = this.c;
        a = (a ? this.Bj = b.ab() : this.Bj) ? b.ne || "about:blank" : "about:blank";
        a != this.vh && this.Hk(a) };
    Zh.Hk = function(a) { this.Ei.src = this.vh = a };
    Zh.pz = function() { var a = this.Ei; if (this.Bj) { var b = this.O().getBoundingClientRect();
            a.style.cssText += "width: " + b.width + "px; height:" + b.height + "px; top:" + b.top + "px; left:" + b.left + "px;";
            document.body.appendChild(a) } else a.style.width = null, a.style.height = null, a.style.left = null, a.style.top = null, this.O().appendChild(a) };
    Zh.aa = function(a, b, c) { Yh.f.aa.apply(this, arguments);
        this.As() };
    Zh.Hr = function() { this.pz() };
    var $h = Yh;

    function ai() { ai.f.constructor.apply(this, arguments);
        this.hb = 0;
        this.lh = {};
        this.cf = null;
        this.rg = 0;
        this.sg = 800 } t.extend(ai, Sf);
    var bi = ai.prototype;
    bi.va = function() {
        var a = this.c,
            b = a.A.param,
            c = b.imgs || [],
            d = b.sizeMode || "contain",
            e = b.dir || "horizontal",
            b = void 0 === b.show ? 1 : b.show,
            f = F.K("position: absolute; overflow: hidden; outline: none; padding: 0; background: transparent; border-radius: 0; border: none; width: " + a.na + "px; height: " + a.la + "px;" + K.prefix.s + "transform-origin: left top;" + K.prefix.s + "appearance:none;" + K.prefix.s + "user-select: initial;");
        this.ha.push(f);
        this.Ec = f;
        this.S = '<div ondragstart="return false;" data-type="slides" data-mid="' +
            a.l + '"' + (a.R ? ' data-guid="' + a.R + '"' : "") + ' class="{{className}}" >';
        f = this.sg;
        this.S += '<div id="slide_holder_' + a.l + '" class="slide_holder" style="' + K.prefix.s + "transition: left " + f + "ms ease-in-out, top " + f + 'ms ease-in-out;overflow:visible;display:block;width:100%;height:100%;position:absolute;left:0;top:0;">';
        for (var f = "vertical" == e ? 0 : -a.na, g = "vertical" == e ? -a.la : 0, h = 0; h <= c.length + 1; h++) {
            var k = 0 == h ? c.length - 1 : h == c.length + 1 ? 0 : h - 1;
            c[k] && (this.S += '<div class="slide_image" style="display:block;width:100%;height:100%;position:absolute;left: ' +
                f + "px;top:" + g + "px;background-image: url(" + c[k].img + ");background-position:center;background-repeat:no-repeat;background-size:" + ("fill" == d ? "100% 100%" : d) + ';"></div>');
            "vertical" == e ? g += a.la : f += a.na
        }
        this.S += "</div>";
        d = (a.la - 16 * c.length) / 2;
        this.S += '<div id="dots_holder_' + a.l + '" align="center" class="dots_holder" style="display:' + (0 == b ? "none" : "block") + ";width:" + ("vertical" == e ? "16px" : "100%") + ";height:" + ("vertical" == e ? "100%" : "16px") + ";position:absolute;" + ("vertical" == e ? "top:0;right:8px" : "left:0;bottom:8px;") +
            "; padding-top:" + ("vertical" == e ? d + "px" : "0") + '">';
        for (h = 0; h < c.length; h++) this.S += '<div id="slide_dot_' + (a.l + "_" + h) + '" class="slide_dot dot_active" style="display:inline-block;width:8px;height:8px;background-color:white;border:none; opacity:' + (h == this.hb ? "0.9" : "0.3") + ';margin:4px;border-radius:50%;"></div>';
        this.S += "</div>";
        this.S += "</div>"
    };
    bi.rb = function() { ai.f.rb.apply(this, arguments);
        this.O().addEventListener(K.Db, this.Ox.bind(this));
        this.O().addEventListener(K.qb, this.Px.bind(this)) };
    bi.Jn = function(a) {
        a = a || ("vertical" == e ? "down" : "right");
        var b = this;
        if (!b.rg) {
            var c = b.c,
                d = c.A.param,
                e = d.dir || "horizontal",
                f = (d.imgs || []).length;
            if (a) {
                var g = document.querySelector("#slide_holder_" + c.l),
                    h = document.querySelector("#dots_holder_" + c.l + " .dot_active"),
                    k = (h ? h.id : "").split("slide_dot_" + c.l + "_");
                if (2 == k.length) {
                    h.className = "slide_dot";
                    h.style.opacity = "0.3";
                    var l = parseInt(k[1]);
                    b.hb = l;
                    l += "up" == a || "left" == a ? -1 : 1;
                    setTimeout(function() {
                        var a = -1 == l ? f - 1 : l == f ? 0 : l,
                            d = -1 == l || l == f;
                        h = document.querySelector("#slide_dot_" +
                            (c.l + "_") + a);
                        "vertical" == e ? g.style.top = -l * c.la + "px" : "horizontal" == e && (g.style.left = -l * c.na + "px");
                        b.rg++;
                        setTimeout(function() { b.rg-- }, 9 * b.sg / 8);
                        h && (h.style.opacity = "0.9");
                        h && (h.className = "slide_dot dot_active");
                        d && (b.rg++, setTimeout(function() {
                            b.rg--;
                            var d = 0;
                            g.style[K.prefix.Zk + "Transition"] = "left " + d + "ms ease-in-out, top " + d + "ms ease-in-out";
                            "vertical" == e ? g.style.top = -a * c.la + "px" : "horizontal" == e && (g.style.left = -a * c.na + "px");
                            b.rg++;
                            setTimeout(function() {
                                b.rg--;
                                d = b.sg;
                                g.style[K.prefix.Zk + "Transition"] =
                                    "left " + d + "ms ease-in-out, top " + d + "ms ease-in-out"
                            }, b.sg / 16)
                        }, 17 * b.sg / 16))
                    }, 1)
                }
            }
            b.cf && (clearTimeout(b.cf), b.cf = null);
            d.autoShow && (a = parseFloat(d.playTime) || 3, a = Math.max(500, 1E3 * a), b.cf = setTimeout(function() { b.Jn() }, a))
        }
    };
    bi.Ox = function(a) { this.O(); var b = a.targetTouches ? a.targetTouches[0] : null;
        this.lh.x = b ? b.pageX : a.pageX;
        this.lh.y = b ? b.pageY : a.pageY;
        this.lh.time = (new Date).getTime() };
    bi.Px = function(a) { this.O(); var b = a.changedTouches ? a.changedTouches[0] : null,
            c = b ? b.pageX : a.pageX,
            d = b ? b.pageY : a.pageY;
        a = this.c.A.param.dir || "horizontal";
        b = null;
        1E3 > (new Date).getTime() - this.lh.time && (c = c - this.lh.x, d = d - this.lh.y, "vertical" == a && Math.abs(d) > Math.abs(c) && 16 < Math.abs(d) ? b = 0 < d ? "up" : "down" : "vertical" != a && Math.abs(d) < Math.abs(c) && 16 < Math.abs(c) && (b = 0 < c ? "left" : "right"));
        this.Jn(b) };
    bi.j = function() { var a = this.O(); if (document.activeElement == a) { var b = a.getBoundingClientRect(),
                a = b.top,
                c = b.bottom,
                b = t.mj(),
                a = (a + c) / 2,
                b = b.height,
                c = this.c.La().V.Re; if (0 > a || a > b) Mugeda.log((a - b) / 2), c.style.cssText += K.prefix.s + "transform: translateY(-200px);" } };
    bi.aa = function(a, b, c) { var d = this,
            e = d.c;
        ai.f.aa.apply(d, arguments);
        e = e.A.param;
        e.autoShow && (e = parseFloat(e.playTime) || 3, e = Math.max(500, 1E3 * e), d.sg > e && (d.sg = .8 * e), d.cf && (clearTimeout(d.cf), d.cf = null), d.cf = setTimeout(function() { d.Jn() }, e)) };
    var ci = ai;

    function di() { this.uf = this.nj = this.bf = null;
        this.Ll = !0;
        di.f.constructor.apply(this, arguments) } t.extend(di, mh);
    var ei = di.prototype;
    ei.va = function() { var a = this,
            b = a.c,
            c = a.bf = b.Tc;
        b.Ib && c.zk(!0);
        c = c.pa;
        b.M("click", a.bm.bind(a));
        b.M("visibilityChanged", a.Mn.bind(a));
        c.addEventListener("pause", a.lq.bind(a));
        c.addEventListener("playing", a.mq.bind(a));
        b.Hf && b.ab() ? b.La().M("renderready", function() { a.bf.pa.play();
            a.yk("off") }) : a.yk("off");
        di.f.va.apply(a, arguments) };
    ei.bm = function() { di.f.aa.apply(this, arguments); var a = this.bf.pa; "on" == this.uf ? a.pause() : a.play() };
    ei.Mn = function() { var a = this.c,
            b = this.bf.pa;
        a.ab() ? a.Hf && b.play() : 0 < b.readyState && (b.pause(), b.currentTime = 0) };
    ei.lq = function() { var a = this;
        a.yk("off");
        a.Ir(); var b = a.bf.pa;
        a.Ll = !0; if (b.ended || 0 === b.currentTime) a.c.Ek(u.ul);
        else { var c = b.currentTime;
            setTimeout(function() { var d = b.currentTime;
                0 === c || 0 === d && 0 !== c ? a.c.Ek(u.ul) : a.c.Ek(u.Xs) }) } };
    ei.Ir = function() { this.nj && clearTimeout(this.nj) };
    ei.mq = function() {
        function a() { b.nj = null;
            c.currentTime != d ? (b.yk("on"), b.Ll && b.c.Ek(u.at), b.Ll = !1) : b.nj = setTimeout(a, 100) } var b = this;
        b.Ir(); var c = b.bf.pa,
            d = c.currentTime;
        b.nj = setTimeout(a, 10) };
    ei.yk = function(a) { var b = this.c; if ("off" == a) var c = b.jq;
        else "on" == a && (c = b.kq);
        b.Td(c);
        this.uf = a };
    var fi = di,
        gi = me,
        hi = Se,
        ii = qf,
        ji = pe;

    function ki(a) {
        var b, c;
        if ("undefined" === typeof window.ontouchstart) return !0;
        if (c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
            if (oh) { if ((b = document.querySelector("meta[name=viewport]")) && (-1 !== b.content.indexOf("user-scalable=no") || 31 < c && document.documentElement.scrollWidth <= window.outerWidth)) return !0 } else return !0;
        return sh && (b = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= b[1] && 3 <= b[2] && (b = document.querySelector("meta[name=viewport]")) && (-1 !== b.content.indexOf("user-scalable=no") ||
            document.documentElement.scrollWidth <= window.outerWidth)) || "none" === a.style.msTouchAction || "manipulation" === a.style.j || 27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (b = document.querySelector("meta[name=viewport]")) && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth) ? !0 : "none" === a.style.j || "manipulation" === a.style.j ? !0 : !1
    }

    function li(a, b) {
        function c(a, b) { return function() { return a.apply(b, arguments) } }
        var d;
        b = b || {};
        this.B = !1;
        this.za = 0;
        this.j = null;
        this.$d = this.ze = this.ye = 0;
        this.wu = b.wu || 10;
        this.Ho = b.Ho || 200;
        this.su = b.su || 700;
        ki(a) || (this.ga = c(this.ga, this), this.Xa = c(this.Xa, this), this.ec = c(this.ec, this), this.Tb = c(this.Tb, this), this.Bb = c(this.Bb, this), this.pb = c(this.pb, this), oh && (a.addEventListener("mouseover", this.ga, !0), a.addEventListener("mousedown", this.ga, !0), a.addEventListener("mouseup", this.ga, !0)), a.addEventListener("click",
            this.Xa, !0), a.addEventListener("touchstart", this.ec, !1), a.addEventListener("touchmove", this.Tb, !1), a.addEventListener("touchend", this.Bb, !1), a.addEventListener("touchcancel", this.pb, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) { var h = Node.prototype.removeEventListener; "click" === b ? h.call(a, b, c.ot || c, d) : h.call(a, b, c, d) }, a.addEventListener = function(b, c, d) {
            var h = Node.prototype.addEventListener;
            "click" === b ? h.call(a, b, c.ot || (c.ot = function(a) { a.UA || c(a) }), d) : h.call(a,
                b, c, d)
        }), "function" === typeof a.onclick && (d = a.onclick, a.addEventListener("click", function(a) { d(a) }, !1), a.onclick = null))
    }

    function mi(a) { switch (a.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (a.disabled) return !0; break;
            case "input":
                if (ph && "file" === a.type || a.disabled) return !0; break;
            case "label":
            case "iframe":
            case "video":
                return !0 } return /\bneedsclick\b/.test(a.className) }

    function ni(a) { switch (a.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !oh;
            case "input":
                switch (a.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1 } return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className) } }

    function oi(a, b) { var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur();
        d = b.changedTouches[0];
        c = document.createEvent("MouseEvents");
        c.initMouseEvent(oh && "select" === a.tagName.toLowerCase() ? "mousedown" : "click", !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null);
        c.B = !0;
        a.dispatchEvent(c) }

    function pi(a) { var b;
        ph && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus() }

    function qi(a) { return a.nodeType === Node.TEXT_NODE ? a.parentNode : a }
    li.prototype.ec = function(a) {
        var b, c, d;
        a.j = (new Date).getTime();
        if (1 < a.targetTouches.length) return !0;
        b = qi(a.target);
        c = a.targetTouches[0];
        if (ph) { d = window.getSelection(); if (d.rangeCount && !d.isCollapsed) return !0; if (!qh) { if (c.identifier && c.identifier === this.$d) return a.preventDefault(), !1;
                this.$d = c.identifier; var e;
                d = b.j; if (!d || !d.contains(b)) { e = b;
                    do { if (e.scrollHeight > e.offsetHeight) { d = e;
                            b.j = e; break } e = e.parentElement } while (e) } d && (d.bA = d.scrollTop) } } this.B = !0;
        this.za = a.j;
        this.j = b;
        this.ye = c.pageX;
        this.ze =
            c.pageY;
        a.j - this.Jd < this.Ho && a.preventDefault();
        return !0
    };
    li.prototype.Tb = function(a) { if (!this.B) return !0; var b;
        (b = this.j !== qi(a.target)) || (a = a.changedTouches[0], b = this.wu, b = Math.abs(a.pageX - this.ye) > b || Math.abs(a.pageY - this.ze) > b ? !0 : !1);
        b && (this.B = !1, this.j = null); return !0 };
    li.prototype.Bb = function(a) {
        var b, c, d = this.j;
        a.j = (new Date).getTime();
        if (!this.B) return !0;
        if (a.j - this.Jd < this.Ho) return this.cd = !0;
        if (a.j - this.za > this.su) return !0;
        this.cd = !1;
        this.Jd = a.j;
        b = this.za;
        this.B = !1;
        this.za = 0;
        rh && (c = a.changedTouches[0], d = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || d, d.j = this.j.j);
        c = d.tagName.toLowerCase();
        if ("label" === c) {
            if (b = void 0 !== d.control ? d.control : d.htmlFor ? document.getElementById(d.htmlFor) : d.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")) {
                pi(d);
                if (oh) return !1;
                d = b
            }
        } else if (ni(d)) { if (100 < a.j - b || ph && window.top !== window && "input" === c) return this.j = null, !1;
            pi(d);
            oi(d, a);
            ph && "select" === c || (this.j = null, a.preventDefault()); return !1 }
        if (ph && !qh && (b = d.j) && b.bA !== b.scrollTop) return !0;
        mi(d) || (a.preventDefault(), oi(d, a));
        return !1
    };
    li.prototype.pb = function() { this.B = !1;
        this.j = null };
    li.prototype.ga = function(a) { return this.j && !a.B && a.cancelable ? !mi(this.j) || this.cd ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.UA = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 };
    li.prototype.Xa = function(a) { if (this.B) return this.j = null, this.B = !1, !0; if ("submit" === a.target.type && 0 === a.detail) return !0;
        a = this.ga(a);
        a || (this.j = null); return a };

    function ri() {}
    ri.oB = function(a) { var b = le.PA(a); if (b) return new b(a); if (a instanceof ff) return new Ih(a); if (a instanceof uf) return new $h(a); if (a instanceof ii) return new Xh(a); if (a instanceof ji) return new fi(a); if (a instanceof gi) return new mh(a); if (a instanceof jf) return new ci(a); if (a instanceof Ze) return new Ch(a); if (a instanceof ug) return new Uh(a); if (a instanceof pf) return new Qh(a); if (a instanceof Hd) return new Fh(a); if (a instanceof ed) return new Lh(a); if (a instanceof hi) return new zh(a) };

    function si(a, b) { return new li(a, b) } si.j = li;

    function ti(a) { a = a || {};
        ti.f.constructor.apply(this, arguments);
        this.Yb = a.KA || function() { return new fg };
        this.Qf = [];
        this.ia = this.rn = this.Re = this.Er = null;
        this.no = a.no;
        this.ms = {};
        this.aj = [];
        this.ls = [];
        this.Dk = {};
        this.li = {};
        this.Dk = {};
        this.Hm = {};
        this.tk = "default";
        this.pn = [];
        this.Nl = [];
        this.Cq = [];
        this.ei = new Ef;
        this.Sm = !1;
        t.ra(this, ["audioIndicator", this.ei]);
        t.oc(this, ["loadingPage", ui.Nw, ui.Qy]);
        this.wn = [];
        this.Ne = new wh;
        this.Ne.Ef = this.Ef = [] } t.extend(ti, Rc);
    var ui = ti.prototype;
    ui.Nw = function() { return this.Yb };
    ui.Qy = function(a) { null == a ? (this.Yb && this.Yb().remove(), this.Yb = function() { return { init: function() {}, update: function() {}, remove: function() {} } }) : this.Yb = a };
    var vi = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(function() { a(1 * new Date) }, 1E3 / 30) };

    function wi(a) { var b = this;
        vi(function(c) { b.Mt = b.startTime = c;
            a(c) }) }

    function xi(a) { var b = this;
        vi(function(c) { var d = c - b.startTime,
                e = c - b.Mt;
            b.Mt = c;
            a(e, d) }) }
    ti.B = function(a) {
        if (!Sf.ya(a.l) && a.parent instanceof Hd) {
            var b = a.parent,
                c = Sf.ya(b.l),
                d = b.ko(a);
            do { d--; var e = b.children[d] } while (e && e.vq);
            d = b.wi(a);
            if (null == e)
                if (Infinity === d) var d = 0,
                    f = c,
                    c = c.O(!0),
                    g = null;
                else f = c.ca[d], d = 0, c = f.O(!0), g = null;
            else f = b.wi(e), e = Sf.ya(e.l), Infinity === d ? (d = c.sb.length, f = c, c = c.O(!0), e.Pd ? g = e.Pd.O(!0) : g = e.O(!0)) : f === d ? (f = c.ca[d], d = f.sb.indexOf(e), c = f.O(!0), g = e.O(!0)) : (f = c.ca[d], d = 0, c = f.O(!0), g = f.O(!0));
            e = yi.call(this, f, a, [], d);
            zi(e, function(a, b) {
                a.sd = !1;
                a instanceof Fh && (b.Qh = !0)
            });
            f = Ai.call(this, f, d);
            d = document.createElement("div");
            d.innerHTML = f;
            zi(e, function(a) { a.O() });
            null == g ? (g = c.children[0], c.insertBefore(d.children[0], g)) : (g = g.nextElementSibling) ? c.insertBefore(d.children[0], g) : c.appendChild(d.children[0]);
            var b = b.Qj,
                h;
            for (h in b) b.hasOwnProperty(h) && b[h].eh.push(a)
        }
    };
    ui.sa = function(a, b, c) {
        var d = this.ia;
        a = a || "";
        var e = a.split("_");
        c = 1 < e.length && c;
        var f = a.split("/"),
            g = c ? [] : null;
        if (e && 1 < e.length) { var f = e[0],
                e = e[1],
                h; for (h in d.ua.pf)
                if (d.ua.pf.hasOwnProperty(h))
                    if (a = d.ua.pf[h], c) { var k = a ? a.c.A : {};
                        2021 == k.type && f == k.param.symbolId && g.push(a.ua.xf(e, "displayobject")) } else if (a && a.ua && a.ua.Yq() && f == a.ua.Tm.hh().param.symbolId) { g = a.ua.xf(e, "displayobject"); break } } else f && 1 < f.length ? (h = f[0], e = f[1], (a = d.ua.xf(h)) && a.ua && (g = a.ua.xf(e, "displayobject"))) : g = d.ua.xf(a, "displayobject");
        h = null;
        if (g)
            if (c) { for (var l in g) g[l] = b ? d.Eb[g[l].l] : g[l];
                h = g } else h = b ? d.Eb[g.l] : g;
        return h
    };
    ui.uk = function(a, b) { var c = this; return a.replace(/\{\{(.*?)\}\}/g, function(d, e) { var f = e.split("."),
                g = e,
                h = "";
            f && 1 < f.length && (g = f[0], h = f[1]);
            f = c.sa(g, !0);
            g = void 0 === b ? "0" : b;
            f && (h ? h.match(/\d+/) && f.xb ? g = f.xb(parseInt(h)) : g = f[h] : f.xb && (g = f.xb()));
            a.match(/\{\{(.*?)\}\}\.toFixed/) && (g = "(" + g + ")");
            g.replace && (g = g.replace(/[\'\"]/g, function(a) { return "\\" + a })); return g }).toString() };
    ui.LA = function(a, b) {
        function c() {
            window.stopLoop || xi.bind(f)(function(a, b) {
                function e(a) { var b = a.wo.l;
                    a = a.lu.l; var c = k(v, b);
                    c || (c = { id: b, parent: v }, v.children = v.children || [], v.children.push(c)); var b = { id: a, parent: c },
                        d = !0; if (c)
                        for (var f = {}, g = b; - 1 != g.id;)
                            if (f[g.id]) { d = !1; break } else f[g.id] = 1, g = g.parent; if (d) { c.children = c.children || []; for (f = 0; f < c.children.length && c.children[f].id != a; f++);
                        f == c.children.length && c.children.push(b) } return d }

                function k(a, b) {
                    if (a.id == b) return a;
                    if (null != a.children) {
                        for (var c =
                                null, d = 0; null == c && d < a.children.length; d++) c = k(a.children[d], b);
                        return c
                    }
                    return null
                }

                function l(a, b, c) { if (!a.c.mi) switch (b) {
                        case "left":
                        case "top":
                        case "width":
                        case "height":
                        case "alpha":
                        case "rotate":
                        case "rotateX":
                        case "rotateY":
                        case "text":
                        case "pers":
                            a[b] = c } }

                function m(a, b, c) {
                    var d = b.concat([]);
                    d.sort(function(a, b) { return a.input < b.input ? -1 : a.input == b.input ? 0 : 1 });
                    for (var e = void 0, f = 0; f < d.length - 1; f++) {
                        var g = d[f],
                            h = d[f + 1];
                        if (g.input > h.input) var k = g,
                            g = h,
                            h = k;
                        if (g.input <= a && a <= h.input) {
                            e = g.output +
                                (h.output - g.output) * (a - g.input) / (h.input - g.input);
                            break
                        }
                    }
                    d.length && f == d.length && c && (d[0].input > a ? a = d[0].input : d[d.length - 1].input < a && (a = d[d.length - 1].input));
                    0 == b.length && (e = a);
                    return e
                }
                var p = Math.min(a / f.gA, 1);
                D && (f.Yb.remove(), y.ir = !0, g.F(y), D = !1, n && setTimeout(function() { d() }, 0), p = 0);
                g.Mj = p;
                g.Hh += p;
                Math.floor(b / 1E3) == H ? E++ : (w && (w.innerHTML = E.toString()), E = 0, H = Math.floor(b / 1E3));
                f.Nl.forEach(function(a) { ti.B.call(f, a) });
                f.Nl = [];
                var q = h.sb[0].sb[0];
                f.ly();
                var r = [];
                Bi.call(f, q, p, r);
                for (var v = { id: -1 }; q =
                    f.ls.shift();)
                    if ("progress" == q.Nt && q.wo.mi || e(q)) {
                        var x = q.wo,
                            p = q.lu,
                            q = q.Nt,
                            da = f.ia.Eb[x.l],
                            ba = f.ia.Eb[p.l];
                        if (da.c.Ka || 1 != p.l) {
                            var na = ((p.A || {}).binds || {})[q] || {},
                                Aa = na.trigger;
                            "progress" == Aa && "audio" == x.I ? (x = x.Tc.pa, x = 100 * x.currentTime / x.duration, 1E-5 > Math.abs(x - 100) && (x = 100)) : x = da[Aa];
                            "text" != q && (x = parseFloat(x), isNaN(x) && (x = 0));
                            "rotate" == Aa || "rotateX" == Aa || "rotateY" == Aa ? x = 180 * x / Math.PI : "alpha" == Aa && (x = 100 * x);
                            da = function(a, b) {
                                "rotate" == b || "rotateX" == b || "rotateY" == b ? a = a * Math.PI / 180 : "alpha" == b && (a =
                                    .01 * a);
                                var c = 0 <= a ? 1 : -1;
                                a = Math.abs(a);
                                var d = Math.floor(a),
                                    e = Math.floor(1E3 * (a - d));
                                10 > e ? e = "00" + e : 100 > e && (e = "0" + e);
                                return c * parseFloat(d + "." + e)
                            };
                            switch (Aa) {
                                case "left":
                                case "top":
                                case "width":
                                case "height":
                                case "alpha":
                                case "rotate":
                                case "rotateX":
                                case "rotateY":
                                case "pers":
                                case "text":
                                case "progress":
                                    if ("key" == na.map) p = m(x, na.keys, ba.Ak), void 0 !== p && (p = da(p, q), l(ba, q, p), ba.Ak = !0);
                                    else if ("equation" == na.map) try {
                                        var Ba = na.equation,
                                            ab = new RegExp(na.variable, "g"),
                                            jb = "V" + Math.floor(1E4 * Math.random()) + "V",
                                            Ba = Ba.replace(ab, jb),
                                            ab = /\u53c2\u8003\u5c5e\u6027/g,
                                            Ba = Ba.replace(ab, jb),
                                            Ba = f.uk(Ba),
                                            kb = (new Function(jb, "return " + Ba + ";"))(x);
                                        isFinite(kb) ? (kb = da(kb, q), l(ba, q, kb), ba.Ak = !0) : "string" === typeof kb && (l(ba, q, kb), ba.Ak = !0)
                                    } catch (Ta) {} else if ("animation" == na.map)
                                        if (ba = na.animation, q = 100 * (x - ba.start) / (ba.end - ba.start), "switch" == ba.type) p[0 <= q && 100 >= q ? "play" : "stop"]();
                                        else "sync" == ba.type && (q = Math.max(0, Math.min(100, q)), p.Ik(), ba = p.$a, q = Math.min(ba.Ac * q * .01, ba.Ac - 1), p.lB(), p.Vd(ba.mb + q));
                                    else "progress" == na.map &&
                                        (ba = na.progress, q = (x - ba.start) / (ba.end - ba.start), x = p.Tc.pa, x.readyState && (x.currentTime = x.duration * q, x.paused && (x.YC = x.currentTime), p.F(p.ea)))
                            }
                        } else p.play()
                    }
                r.forEach(function(a) { a.F(a.Yz) });
                f.ky();
                f.pn.forEach(function(a) { a = Sf.ya(a.l);
                    a.G.nn(a);
                    (a = a.O()) && a.parentNode.removeChild(a) });
                f.pn = [];
                c()
            })
        }

        function d() {
            f.Ne.yv(k, g.children[0]);
            f.Ne.Xc(g.children[0].Ea);
            f.Ne.rz(f.rn, function() { var a = new Af("scriptready");
                g.F(a);
                a.Lf() }, function() {}, l, f.Yb, n, "default" == (f.Yb.type || f.Yb.I) ? 1E3 : 2E3, function(a,
                b) { f.Yb.update(a, b, { isTotal: !0 });
                y.qs = b;
                y.hr = a;
                y.totalLoadCount = b;
                y.loadedCount = a;
                y.loadedRatio = a / b;
                g.F(y) }, e)
        }

        function e() {
            f.ia.gi(g);
            for (var a in f.aj)
                if (f.aj.hasOwnProperty(a)) {
                    var d = f.aj[a],
                        e = (d.A || {}).binds || {},
                        k = f.ia,
                        l;
                    for (l in e)
                        if (e.hasOwnProperty(l)) {
                            var m = e[l],
                                p = f.sa(m.master);
                            if (p && "audio" == p.I && "progress" == m.trigger && !p.sD) {
                                var q = function(a, b) { return function() { b.ab() && a.F(a.ea) } }(p, d, l);
                                p.Tc.pa.addEventListener("timeupdate", q);
                                p.Tc.pa.addEventListener("playing", function(a, b) {
                                    return function() {
                                        function c() {
                                            b.ab() &&
                                                a.F(a.ea)
                                        }
                                        a.Tc.pa.removeEventListener("timeupdate", q);
                                        k.ua.addEventListener("enterframe", c);
                                        c()
                                    }
                                }(p, d, l))
                            }
                            p && p.M("changed", function(a, b, c) { return function() {
                                    (a.mi || "audio" == b.I || "progress" != c) && f.ls.push({ wo: a, lu: b, Nt: c }) } }(p, d, l));
                            "animation" == l && (m = k.ua.pf[d.R]) && m.ua.J.stop()
                        }
                }
            a = new Af("imageready");
            a.Pi(function() {
                vi(function() {
                    wi.bind(f)(function() {
                        var a = document.createElement("div");
                        a.innerHTML = x;
                        b.appendChild(a.children[0]); - 1 < location.href.indexOf("rateDom") && (b.appendChild(a.children[0]),
                            w = window.rateDom = document.getElementById("rate"));
                        h.sb[0].eq();
                        zi(h, function(a) { a.c && a.O() });
                        a = new Af("domready");
                        a.Pi(function() { window.addEventListener("resize", function() { g.F(new z("resize")) }); if (n) xi.bind(f)(c);
                            else { var a = new Af("renderready");
                                a.Pi(function() { xi.bind(f)(c) });
                                g.F(a);
                                a.Lf() } });
                        g.F(a);
                        a.Lf()
                    })
                })
            });
            g.F(a);
            a.Lf()
        }
        var f = this;
        f.Re = b;
        si(b);
        f.no && (window.DEBUG_CS2_MODE = !0);
        window.DEBUG_CS2_MODE = !0; - 1 < location.href.indexOf("?c3") && (window.DEBUG_CS3_MODE = !0); - 1 < location.href.indexOf("?c2") &&
            (window.DEBUG_CS2_MODE = !0);
        var g = a.root,
            h = f.Er = new Sf(null),
            k = [];
        yi.call(f, h, g, k);
        var l = g.children[0],
            m = l.ca[0].Ac;
        f.Yb = f.Yb();
        f.Ne.jf = 0;
        if (("firstpage" == f.Yb.type || "smart" == f.Yb.type) && l.ca[1]) { m += l.ca[1].Ac; if ("firstpage" == f.Yb.type) var n = !0;
            l.Xf = !0;
            f.Ne.jf = l.ca[1].mb }
        try { var p = window.top.mugedaEntryPage } catch (q) {}
        if (p) { var r = g.A,
                v = -1;
            [r].concat(r.pages).forEach(function(a, b) { a && a.guid == p && (v = b) }); - 1 != v && (f.Ne.jf = l.ca[v].mb) } f.Ne.Ur(m - 1);
        f.ei.J = g.children[0];
        f.ei.$j(b, g.A.pageInfo);
        f.ei.Xr("none");
        Ci.bind(f)(h);
        zi(h, function(a) { var b = a.c; if (b) { var c = b.qh; if (c)
                    if (0 === c.length) d = Sf.ya(b.l), e = new Yf, e.xh = d.G, d.fc = e;
                    else { var b = c[0],
                            d = Sf.ya(b.l),
                            e = d.fc;
                        null == e && (e = new Yf, e.xh = a.G, b.rh.forEach(function(a) { a = Sf.ya(a.l);
                            e.yh.push(a);
                            zi(a, function(a) { a.fc = e;
                                a.c.Zj = !1;
                                a.Ym() }) }), c.forEach(function(a) { a = Sf.ya(a.l);
                            zi(a, function(a) { a.fc = e;
                                a.c.Zj = !1;
                                a.Ym() });
                            e.yh.push(a) })) } } });
        var x = Ai.call(f, h); - 1 < location.href.indexOf("rateDom") && (x += '<div id="rate" style="position: absolute; text-shadow: 0 0 5px red;; color: red; font-size: 12px;"></div>');
        var w, y = new xf("loadprogress");
        setTimeout(function() { K.MA(); var a = f.Er.sb[0],
                c = a.Pq(),
                a = a.Em(); if (0 == c % 180) var h = 0,
                k = 0,
                l = a.width,
                m = a.height;
            else h = .5 * (a.height - a.width), k = .5 * (a.width - a.height), m = a.width, l = a.height;
            f.Yb.init(b, ["top:" + h + "px;left:" + k + "px;width:" + l + "px;height:" + m + "px;" + K.prefix.s + "transform:rotate(" + c + "deg);", k, h, l, m, c]);
            n ? (e(), g.children[0].stop()) : d() });
        var D = !0,
            H = null,
            E = 0;
        Di.bind(f)(g)
    };

    function Bi(a, b, c) { c = c || []; var d = this,
            e = a.c; if (!1 !== e.ab()) { c.push(e); var f = a.$a; if (!f || !f.sd) { var f = e.$a,
                    g = e.ee;
                d.Dk = {};
                e.lv(b) && null != e.rd && f !== e.ca[e.Wj(e.rd)] && null != f && (e.Ib ? e.rc(f.mb, null) : e.Vd(g, null));
                a.Sv();
                e.sz() } e.Ik(); if (null != a.hz(function() { d.li = {};
                    d.Sm = !1 })) { d.Sm = !0;
                d.li = {}; var h = d.Dk;
                Object.keys(h).forEach(function(a) { var b = h[a];
                    0 == b.Ka && 1 == Sf.ya(b.l).Ob.c.l && (d.li[a] = b) }) } e.Wm = e.Hb;
            a.Nm.forEach(function(a) { Bi.call(d, a, b, c) }) } }

    function Ei(a) { if (!a.dD && Va.za) { var b = new Va(a.type, a);
            b.Rf = a.eventPhase;
            b.mg = Va.za;
            b.da = Va.za.La();
            Va.za.F(b); if ("touchend" === a.type || "mouseup" === a.type) a.preventDefault(), b.mn() } }

    function Di(a) {
        var b = this,
            c = b.Re;
        a = (a.ag || {}).render_mode;
        c.addEventListener("mousedown", Ei.bind(b), !0);
        c.addEventListener("mousemove", Ei.bind(b), !0);
        c.addEventListener("mouseup", Ei.bind(b), !0);
        if ("embedded" != a) {
            var d, e;
            c.addEventListener("touchstart", function(a) { d = a.changedTouches[0].screenX;
                e = a.changedTouches[0].screenY }, !0);
            c.addEventListener("touchmove", function(a) {
                var g = !1;
                if (b.wn) {
                    var h = a.target,
                        k = !1;
                    if (K.Sa.pd && h && "video" == h.nodeName.toLowerCase()) var k = h.getBoundingClientRect(),
                        l = a.changedTouches[0].screenY,
                        m = document.body.clientWidth / 320 || 1,
                        k = Math.abs(a.changedTouches[0].screenX - d) > Math.abs(l - e) && l > k.top + k.height - 48 / m;
                    for (; h && h != c;)
                        if (0 <= b.wn.indexOf(h)) { g = !0; break } else if (h.gg) { l = h.gg.c;
                        m = l.I; if (k || "Text" == m && ("scroll" == l.Cd || "scrollNoBar" == l.Cd) || !K.Sa.pd && "Sprite" == m && l.Kr && "no" != l.Kr) { g = !0; break } h = h.parentNode } else if (l = window.getComputedStyle(h).overflow, ("auto" == l || "scroll" == l) && h.clientHeight < h.scrollHeight) { g = h.gu = !0; break } else h = h.parentNode
                }
                g || a.preventDefault()
            }, !0);
            c.addEventListener("touchend",
                function(a) { for (var b = a.target; b && b != c;)
                        if (b.gu) { delete b.gu;
                            a.stopPropagation(); break } else b = b.parentNode }, !0)
        }
    }

    function Ci(a) { var b = this;
        window.DEBUG_CS3_MODE || zi(a, function(a) { var d = a.c; if (null != d) { d instanceof pf && (a.sd = !1);
                d instanceof Hd && (a.Yl = !1); if ("scroll" == d.Cd || "scrollNoBar" == d.Cd) a.Pd.sd = !1;
                d instanceof Hd && a.Ob && (a.Pd.sd = !1, a.Pd.sb.forEach(function(a) { a.sd = !1 }), d.G.Wf && (a.sd = !1, a.sb.forEach(function(a) { a.sd = !1;
                    a.sb.forEach(function(a) { a.sd = !1 }) })));
                d.Kd && a.Pd && (a.Pd.sd = !1, a.Pd.sb.forEach(function(a) { a.sd = !1 }));
                null == b.dt && d instanceof pf && (b.dt = d.Ee, b.gA = 1E3 / b.dt) } }) }

    function zi(a, b) { var c = { Qh: !1 };
        b(a, c); if (!c.Qh)
            for (var c = a.sb, d = c.length, e = 0; e < d; e++) zi(c[e], b) }

    function Ai(a, b) { for (var c = this, d = a.sb, e = d.length, f = "", g = 0; g < e; g++)
            if (null == b || b === g) { var h = d[g],
                    k = h.c; "scroll" != k.Cd && "scrollNoBar" != k.Cd || c.Cq.push(k); var l = k.C;
                h.$j(); var m = h.fc;
                m ? (m.va(), f += m.S, Ai.call(c, d[g])) : null == k.qh && (h.va(), h.Si(l.T), h = h.Hq(), l = Ai.call(c, d[g]), h = h.replace("{{childNode}}", l), f += h);
                k.M("changed", function() { return function() { c.Ov(this) } }());
                k.M("remove", function(a) { c.pn.push(a.c) });
                k.M("addchild", function() { return function(a) { c.Nl.push(a.c) } }());
                k.F(k.ea) }
        return f }
    ui.Ov = function(a) { var b = a.l,
            c = a.rh; if (c) { if (a = Sf.ya(b).fc) a.Mv = !0, c.forEach(function(a) { a.F(a.ea) }) } else c = this.ms, this.Dk[b] = a, c[b] = a };
    ui.ly = function() { var a = this.tk;
        this.tk = "global"; for (var b in this.Hm) { var c = Sf.ya(b);
            c.c && c.c.update() } this.tk = a };
    ui.ky = function() { var a = this,
            b = a.ms;
        a.Cq.forEach(function(a) { a = a.l;
            b[a] || Sf.ya(a).aa() }); for (var c = {}, d = 3; d--;) { var e = Object.keys(b);
            Object.keys(a.li).length && (e = e.filter(function(b) { return !a.li[b] })); if (0 === e.length) break;
            e.forEach(function(a) { a = Sf.ya(a); var b = a.fc;
                b ? c[b.l] || (c[b.l] = b, b.fg()) : (a.O(), a.aa()) });
            e.forEach(function(a) { delete b[a] }) } };

    function yi(a, b, c, d) { var e = this,
            f = ri.oB(b);
        a.Df(f, b, null, d);
        b.lb && b.lb.length && c.push(f); if (b instanceof cd) { a = b.children; if (f instanceof Fh && 0 == a.length) { d = f.ca[0] = new jh; var g = new Yc;
                g.I = "scene";
                f.Df(d, g);
                d.Bh = b.ca[0] } a.forEach(function(a) { if (!a.vq)
                    if (f instanceof Fh) { var d = b.wi(a),
                            g = f.ca,
                            m = g[d]; if (null == m) { for (var n = b.ca.length, p = 0; p < n; p++) { var m = g[p] = new jh,
                                    q = new Yc;
                                q.I = "scene";
                                f.Df(m, q);
                                m.Bh = b.ca[p] } m = g[d] } yi.call(e, m, a, c) } else yi.call(e, f, a, c) }) } return f } t.H("Render.RenderManager", ti);
    var Fi = ti;

    function Gi(a, b) {
        this.ac = this.$b = this.l = null;
        this.Ak = !1;
        this.ua = a.bB;
        this.$a = a.ej;
        Gi.f.constructor.apply(this, arguments);
        if (a.guid) { this.dd = a; var c = b || Lg.ec,
                d = this.dd,
                e = new(Lg.Lg(d, c));
            e.Wf = !0;
            this.l = e.l;
            this.c = e;
            Lg.Tb(d, e, c) } else this.ia = a.Dd, this.l = a.id, this.c = a.Rb, a.ej && a.Dd && a.Rb && (d = this.c.A || {}, c = a.Dd.$t, Object.keys(d.binds || {}).length && (c.aj[a.Rb.l] = a.Rb));
        this.c.De = this;
        t.ob(this, ["id", W.ym, "data", W.hh, "realDom", W.ex, "name", W.vi, "link", W.Kw, "scene", W.Vj, "currentScene", W.vm, "mugeda", W.Iq,
            "getRealVisible", W.ab, "thisAni", W.Iq, "parent", W.Bm, "audio", W.aw
        ]);
        t.oc(this, ["dom", W.ih, W.Dy, "width", W.Ma, W.Gh, "height", W.Aa, W.sf, "rotate", W.gx, W.An, "visible", W.Vf, W.Dc, "text", W.xb, W.wa, "alpha", W.ie, W.xk, "pers", W.ax, W.Vy, "x", W.wd, W.ig, "left", W.vd, W.Dh, "top", W.Vc, W.hg, "rotateCenterX", W.hx, W.Xy, "scaleX", W.wc, W.Eh, "rotateX", W.jx, W.Zy, "y", W.xd, W.jg, "right", W.lf, W.zn, "bottom", W.kf, W.xn, "rotateCenterY", W.ix, W.Yy, "scaleY", W.xc, W.Fh, "rotateY", W.kx, W.$y, "url", W.Bi, W.Ui]);
        t.oc(this, ["src", W.Ai, W.Ri])
    }
    t.extend(Gi, cg);
    var W = Gi.prototype;
    W.Iq = function() { return this.ia };
    W.Bm = function() { var a = this.c,
            b = a.La().V.ia;
        (a = b.Eb[(a.parent || {}).l]) || (a = b.scene); return a };
    W.vm = function() { return this.$a || null };
    W.Vj = function() { return this.ua || null };
    W.Kw = function() { return this.c.gk };
    W.ie = function() { return this.c.ie() };
    W.xk = function(a) { this.c.xk(a) };
    W.gx = function() { return this.c.C.T.Kb };
    W.jx = function() { return this.c.C.T.Yc };
    W.kx = function() { return this.c.C.T.lc };
    W.ax = function() { return this.c.C.T.Cc };
    W.An = function(a) { this.Ad({ Ut: a }) };
    W.Vy = function(a) { this.Ad({ Kt: a }) };
    W.Zy = function(a) { this.Ad({ St: a }) };
    W.$y = function(a) { this.Ad({ Tt: a }) };
    W.Ad = function(a) {
        a = a || {};
        var b = this.c,
            c = b.C,
            d = c.T,
            e = b.na,
            f = b.la,
            g = null != a.width ? a.width : b.Ma(),
            h = null != a.height ? a.height : b.Aa(),
            k = new Mc,
            e = g / e,
            f = h / f,
            h = null != a.Ut ? a.Ut : d.Kb,
            g = null != a.Rt ? a.Rt : d.kc,
            l = null != a.Vt ? a.Vt : d.mc,
            m = null != a.Ag ? a.Ag : d.$b,
            n = null != a.Bg ? a.Bg : d.ac,
            p = null != a.St ? a.St : d.Yc,
            q = null != a.Tt ? a.Tt : d.lc;
        a = null != a.Kt ? a.Kt : d.Cc;
        d = k.T;
        d.Lb(e, f);
        d.L(-m, -n);
        d.nc(h);
        d.L(m, n);
        d.L(g, l);
        if (p || q) d.Za(), d.nb(-g, -l), d.nb(-m, -n), d.Sd(-h), d.rf(q), d.zh(p), d.Me(b.Ug, a), d.Sd(h), d.nb(m, n), d.nb(g, l);
        d.Kb = h;
        d.$b =
            m;
        d.ac = n;
        d.kc = g;
        d.mc = l;
        d.Yc = p;
        d.lc = q;
        d.Cc = a;
        d.jd = e;
        d.kd = f;
        k.ka.oa = c.ka.oa;
        d = k.Nc;
        d.yd = c.Nc.yd;
        d.ud = c.Nc.ud;
        d.zd = c.Nc.zd;
        b.le(k)
    };
    W.wc = function() { return this.c.wc() };
    W.Eh = function(a) { this.c.X = this.c.na * a;
        this.Ad({ width: this.c.X }) };
    W.xc = function() { return this.c.xc() };
    W.Fh = function(a) { this.c.Y = this.c.la * a;
        this.Ad({ height: this.c.Y }) };
    W.hx = function() { return this.c.C.T.$b };
    W.Xy = function(a) { this.Ad({ Ag: a }) };
    W.ix = function() { return this.c.C.T.ac };
    W.Yy = function(a) { this.Ad({ Bg: a }) };
    W.wd = function() { return this.vd() + this.c.C.T.$b * this.wc() };
    W.xd = function() { return this.Vc() + this.c.C.T.ac * this.xc() };
    W.ig = function(a) { this.Dh(a - this.c.C.T.$b * this.wc()) };
    W.jg = function(a) { this.hg(a - this.c.C.T.ac * this.xc()) };
    W.ga = function() { return this.c.na };
    W.B = function() { return this.c.la };
    W.ym = function() { return this.l };
    W.Dy = function(a) { Sf.ya(this.c.l).Ty(a) };
    W.ih = function() { var a = this.c,
            b = Sf.ya(a.l); if (b) return b.O();
        Fi.B.call(this.ia.V, a); if (b = Sf.ya(a.l)) return b.O() };
    W.ab = function() { return this.c.ab() };
    W.hh = function() { return this.c.A };
    W.Ma = function() { return this.c.Ma() };
    W.Gh = function(a) { this.c.Gh(a);
        this.Ad({}) };
    W.Aa = function() { return this.c.Aa() };
    W.sf = function(a) { this.c.sf(a);
        this.Ad({}) };
    W.vd = function() { return this.c.C.T.kc };
    W.Dh = function(a) { this.Ad({ Rt: a }) };
    W.lf = function() { return this.vd() + this.Ma() };
    W.zn = function(a) { this.Dh(a - this.Ma()) };
    W.Vc = function() { return this.c.C.T.mc };
    W.hg = function(a) { this.Ad({ Vt: a }) };
    W.kf = function() { return this.Vc() + this.Aa() };
    W.xn = function(a) { this.hg(a - this.Aa()) };
    W.Ai = function() { var a = this.c; if (a = a.Md && a.Md()) return a.Ja };
    W.Ri = function(a) { if (a != this.Ai()) { var b = this.c; if (!a) return b.Td(); var c = new Le,
                d = c.hc;
            c.Ja = a;
            c.bb = Le.Pg;
            d.Xc(c);
            b.Td(c);
            a = function() { var a = this.Jj.Va;
                b.Va.Ja === a.Ja && b.Td(a) };
            d.xa.tc("complete", a);
            d.xa.tc("ioError", a) } };
    W.vi = function() { return this.c.vi() };
    W.Dc = function(a) { this.c.Dc(a, 1) };
    W.Vf = function() { return this.c.Vf() };
    W.Bi = function() { return this.c.Bi() };
    W.Ui = function(a) { this.c.Ui(a) };
    W.wa = function(a) { this.c.wa && this.c.wa(a) };
    W.xb = function(a) { return this.c.xb ? this.c.xb(a) : "" };
    W.ex = function() { return Sf.ya(this.c.l).P };
    W.vc = function() { var a = this.c,
            b = a.A,
            c = new a.constructor;
        c.Wf = !0;
        a = (a = le.zl(a.A && a.A.type)) && a.$g ? new(a.$g())({ Rb: c, id: c.R, Dd: this.ia }) : new Gi({ Rb: c, id: c.R, Dd: this.ia });
        Lg.Tb(b, c, this.ia.dm, { guid: Mugeda.guidGen() }); return a };
    W.aw = function() { var a = Sf.ya(this.c.l); if (a.bf) return a.bf.pa };
    var Hi = "dom width height rotate visible text alpha x left top rotateCenterX scaleX y right bottom rotateCenterY scaleY".split(" ");
    W.Qi = function(a, b) { return Hi[a] ? this["_set" + a.substr(0, 1).toUpperCase() + a.substr(1)](b) : this.c.Qi(a, b) };
    W.ti = function(a) { return Hi[a] ? this["_get" + a.substr(0, 1).toUpperCase() + a.substr(1)]() : this.c.ti(a) };
    W.jh = function(a) { return this.c.jh(a) };
    W.j = function(a, b, c, d) { this.c.Rr && this.c.Rr(new qd(a, b, c, d)) };
    W.Ny = function(a, b, c, d) { this.c.Tr && this.c.Tr(new qd(a, b, c, d)) };
    t.ra(W, ["clone", W.vc, "setAttribute", W.Qi, "getAttribute", W.ti, "getObject", W.jh, "setFillColor", W.j]);
    (window.MugedaCss3 = window.MugedaCss3 || {}).aObject = Gi;
    t.H("Utils.mugedaAPIAObject", Gi);
    var Ii = Gi;

    function Ji(a) { Ji.f.constructor.apply(this, arguments) } t.extend(Ji, Ii);
    var Ki = Ji,
        Li = me;

    function Mi(a) {
        var b = this;
        Mi.f.constructor.apply(b, arguments);
        b.ia = a.Dd;
        var c = b.J = a.Oh;
        b.pf = {};
        b.l = a.id;
        b.Tm = a.XC;
        b.hu = {};
        b.Qb = null;
        b.jo = null;
        b.Yn = null;
        b.Ud = [];
        t.ob(b, ["objectHash", X.Uw, "pages", X.Xw, "data", X.hh, "pageNum", X.Ww, "currentId", X.kw, "currentDecimalId", X.hw, "thisAni", X.xx, "currentPageIndex", X.um, "pageDom", X.Vw, "dom", X.ih, "isSymbol", X.Yq, "parentScene", X.Zw, "id", X.ym, "playing", X.bx, "object", X.Yw]);
        var d = b.ia.$t,
            e = b.ia.A;
        e.binds && Object.keys(e.binds).length && (d.aj[c.l] = c);
        c.M("enterframe", function() {
            b.If("enterframe",
                b)
        })
    }
    t.extend(Mi, cg);
    var X = Mi.prototype;
    X.Yw = function() { return this.Tm };
    X.bx = function() { return !this.J.Hb };
    X.ym = function() { return this.l };
    X.Zw = function() { var a = Sf.ya(this.J.l).Ob; return null == a ? null : this.ia.Eb[a.c.l] };
    X.Yq = function() { return null != this.J.parent.parent };
    X.ih = function() { return Sf.ya(this.J.l).O() };
    X.Vw = function() { return this.ih().querySelectorAll("[data-type=scene]") };
    X.hh = function() { return this.J.A };
    X.xx = function() { return this.ia };
    X.Ww = function() { return this.J.ca.length };
    X.kw = function() { return this.J.Ea };
    X.hw = function() { return this.J.ee };
    X.um = function() { return this.J.Wj(this.J.Ea) };
    X.Xw = function() { return this.J.ca };
    X.xf = function(a, b) { var c = this.J; if (null == a) return null;
        a = a.toString();
        c = Ni(c, a); return null == c ? null : c instanceof Yc ? "displayobject" == (b || "").toLowerCase() ? c : this.ia.Eb[c.l] || c : c };

    function Ni(a, b) { var c = a.ht(b); if (c) return c instanceof He ? c.pa : c; for (var d = a.children.length, c = 0; c < d; c++) { var e = a.children[c]; if (e instanceof ed && !(e instanceof Hd) && (e = Ni(e, b))) return e } } X.Uw = function() { return this.pf };
    X.ec = function(a, b, c, d) { this.hu[a] = { Kh: Math.min(b, this.J.Te - 1), Th: Math.min(c, this.J.Te - 1), uA: d }; return this };
    X.pb = function(a) {
        (this.Qb = this.hu[a]) && this.J.rc(this.Qb.Kh, null);
        Oi.call(this); return this };

    function Pi() { var a = this;
        null == a.jo && (a.jo = function() { for (; a.Ud.length && 0 >= a.Ud[0].time;) { var b = a.Ud[0].bd;
                a.Ud.splice(0, 1);
                b.call(a) } a.Ud.length && (a.Ud[0].time -= a.ia.da.Mj) }, a.M("enterframe", a.jo)) }

    function Oi() { var a = this;
        null == a.Yn && (a.Yn = function() { a.Qb && a.J.rd < a.Qb.Kh ? a.Qb.Kh === a.Qb.Th ? a.J.Vd(a.Qb.Kh, null) : a.J.rc(a.Qb.Kh, null) : a.Qb && a.J.rd >= a.Qb.Th && (a.Qb.uA ? a.J.rc(a.Qb.Kh, null) : a.J.Vd(a.Qb.Th, null)) }, a.J.M("beforeenterframe", a.Yn)) }

    function Qi(a, b, c, d) {
        var e, f = a.children.length;
        d && (f = 1);
        for (e = 0; e < f; e++) {
            if (d) var g = d,
                h = d.c;
            else var h = a.children[e];
            h.R || (h.R = Mugeda.guidGen());
            var k = null;
            if (h instanceof ed && !(h instanceof Hd)) { var l = g || new Ki({ Rb: h, id: h.R, Dd: this.ia, ej: this });
                Qi.bind(this)(h, b, c) } else h instanceof Hd ? (k = new Mi({ Oh: h, id: h.R, Dd: this.ia }), l = g || new Ii({ Rb: h, id: h.R, Dd: this.ia, bB: k, ej: this }), k.Tm = l, k.gi()) : (l = le.zl(h.A && h.A.type)) && l.$g ? (l = l.$g(), l = g || new l({ Rb: h, id: h.R, Dd: this.ia, ej: this })) : l = g || new Ii({
                Rb: h,
                id: h.R,
                Dd: this.ia,
                ej: this
            });
            l.ua = k;
            l.$a = this;
            b[h.R] = l;
            c[h.l] = l
        }
        return b
    }
    X.gi = function(a) { var b = this.pf,
            c = this.ia.Eb,
            d = this.J;
        Qi.bind(this)(d, b, c, a) };
    X.j = function(a, b, c) {
        function d(a, b) { b(a); var c = a.children; if (null != c)
                for (var e = c.length, f = 0; f < e; f++) a = c[f], d(a, b) }
        var e = this;
        a.ia = e.ia;
        var f = a.c,
            g = e.J,
            h = g.Mc;
        if (b) { c = b.c; var k = g.ko(c); if (-1 == k) throw "behind object is not belong to scene";
            g.Sn(f, k);
            k = g.wi(c) } else if (null != c) {-1 == c && (c = Infinity);
            b = g.children; for (var l = b.length, m = 0; m < l; m++) g.wi(b[m]) > c && (k = m);
            null == k ? g.vb(f) : g.Sn(f, k);
            k = c } else g.vb(f), k = 0;
        c = new $e;
        Infinity != k ? (g = g.ca[k], c.Kc = g.mb, c.ic = g.mb + g.Ac - 1) : (c.Kc = 0, c.ic = g.Te - 1);
        h[f.l] = c;
        e.ia.Eb[f.l] =
            f;
        f.R || (f.R = Mugeda.guidGen());
        e.pf[f.R] = a;
        e.gi(a);
        d(f, function(a) { a instanceof Li && e.ia.Eb[a.l].Ri(a.Va.Ja) })
    };
    X.nn = function(a) { a = a.c;
        a.parent.removeChild(a);
        delete this.pf[a.R];
        delete this.ia.Eb[a.l] };
    X.qf = function() { this.Qb = null; return this.J.play(30) };
    X.cg = function() { this.Qb = null; return this.J.stop(30) };
    X.ga = function(a, b) { this.Qb = null; return this.J.rc(a, this.J.ca[b]) };
    X.B = function(a, b) { this.Qb = null; return this.J.Vd(a, this.J.ca[b]) };
    X.za = function(a, b) { return this.J.Mh(a, b) };
    X.Xa = function() { return this.J.Mh(this.um() + 1) };
    X.Bb = function() { return this.J.Mh(this.um() - 1) };
    X.Tb = function(a, b) { for (var c = this.Ud.length, d = 0, e = 0; e < this.Ud.length; e++) { var f = this.Ud[e]; if (d + f.time > a) { c = e; break } d += f.time } this.Ud.splice(c, 0, { time: a - d, bd: b });
        Pi.call(this); return this };
    t.ra(X, ["getObjectByName", X.xf, "appendChild", X.j, "removeChild", X.nn, "play", X.qf, "pause", X.cg, "gotoAndPlay", X.ga, "gotoAndPause", X.B, "gotoPage", X.za, "nextPage", X.Xa, "prevPage", X.Bb, "setSegment", X.ec, "playSegment", X.pb, "setFrameout", X.Tb]);
    var Ri = Mi;

    function Si(a) {
        var b = this;
        Si.f.constructor.apply(b, arguments);
        var c = b.da = a.jl;
        b.A = a.Tn;
        b.ua = null;
        b.dm = null;
        b.Cj = {};
        b.V = null;
        b.Eb = {};
        b.Rl = !1;
        t.ob(b, ["aniData", Y.$v, "title", Y.yx, "width", Y.rx, "height", Y.px, "rate", Y.qx, "dom", Y.ox, "scene", Y.Vj, "frameTime", Y.yw, "deltaFrame", Y.mw, "totalRenderedFrame", Y.Bx, "adaption", Y.Wv, "renderManager", Y.fx, "root", Y.cc]);
        ["domready", "renderready", "scriptready", "beforeload", "loadprogress"].forEach(function(a) {
            c.M(a, function(c) {
                "renderready" == a && (b.loadProcess = "loaded");
                "domready" === a ? b.If("imageready", c) : b.If(a, c)
            })
        })
    }
    t.extend(Si, cg);
    var Y = Si.prototype;
    Y.B = function(a, b) { this.Cj[a] = b };
    Y.Xa = function(a) { if (this.Cj[a] && this.Cj[a] instanceof Function) return this.Cj[a];
        null };
    Y.za = function(a) { K.ho = a };
    Y.Bb = function(a) { this.V.wn.push(a.dom) };
    Y.ga = function(a) { this.Rl = a };
    Y.cc = function() { return this.da };
    Y.fx = function() { return this.V };
    Y.Wv = function() { var a = this.da,
            b = a.U; return { marginLeft: -b.Ba, marginRight: b.Ba + b.X - a.Ha, marginTop: -b.Ca, marginBottom: b.Ca + b.Y - a.Ga, width: b.X, height: b.Y } };
    Y.mw = function() { return this.da.Mj };
    Y.Bx = function() { return this.da.Hh };
    Y.Vj = function() { return this.ua };
    Y.ox = function() { return Sf.ya(this.da.l).P };
    Y.rx = function() { return this.da.Ha };
    Y.px = function() { return this.da.Ga };
    Y.qx = function() { return this.da.Ee };
    Y.yw = function() { return 1E3 / this.da.Ee };
    Y.$v = function() { return this.A };
    Y.yx = function() { return this.A.title };
    Y.gi = function(a) { a = this.ua = new Ri({ Oh: a.children[0], Dd: this, id: "_main" });
        window.Mugeda.scene = this;
        a.gi() };
    Y.j = function(a, b) {
        var c = this.dm,
            d = c.Sh,
            e;
        for (e in d)
            if (d.hasOwnProperty(e)) {
                var f = d[e];
                if (f.cb == a) {
                    d = new f;
                    d.Wf = !0;
                    e = new Ii({ Rb: d, id: d.R, Dd: this.ia });
                    var f = f.A,
                        g = 99999999,
                        h = -g,
                        k = g,
                        l = -g;
                    f.layers.forEach(function(a) { a.units.forEach(function(a) { a.objects.forEach(function(a) { a = a.param;
                                g = Math.min(g, a.left);
                                h = Math.max(h, a.right);
                                k = Math.min(k, a.top);
                                l = Math.max(l, a.bottom) }) }) });
                    f.bound = { left: g, right: h, top: k, bottom: l, width: h - g, height: l - k };
                    f = {
                        param: {
                            name: b || "",
                            guid: Mugeda.guidGen(),
                            rotate: 0,
                            left: 0,
                            top: 0,
                            width: f.bound.width,
                            height: f.bound.height,
                            offsetX: (f.bound.left + f.bound.right - f.cw - f.bound.width) / 2,
                            offsetY: (f.bound.top + f.bound.bottom - f.ch - f.bound.height) / 2
                        }
                    };
                    Lg.Tb(f, d, c);
                    return e
                }
            }
    };
    Y.pb = function(a, b) { this.V.Ef.push(b.url) };
    t.ra(Y, ["getScene", Y.Vj, "createInstanceOfSymbol", Y.j, "enable3DRendering", Y.za, "defineCallback", Y.B, "getCallback", Y.Xa, "registerScrollableObject", Y.Bb, "disableAutoProgress", Y.ga, "loadImage", Y.pb]);
    var Ti = Si;

    function Ui(a, b, c) { var d = this; if (a.length) { var e = a.splice(0, 1)[0],
                e = b[e],
                f = e.length;
            f ? e.forEach(function(e) { var h = new Df("beforeload");
                h.ne = e;
                h.Pi(function() { var h = document.createElement("script");
                    h.src = e;
                    h.onload = h.onerror = function() { document.body.removeChild(this);
                        f--;
                        d.Qe--;
                        c();
                        0 == f && Ui.bind(d)(a, b, c) };
                    document.body.appendChild(h) });
                h.iy(function() { f--;
                    d.Qe--;
                    c();
                    0 == f && Ui.bind(d)(a, b, c) });
                d.da.F(h);
                h.Lf() }) : Ui(a, b, c) } else c() }
    var Vi;

    function Wi(a, b) { var c = this;
        a.forEach(function(a) { a.units && Xi.call(c, a.units, b) }) }

    function Xi(a, b) { var c = this;
        a.forEach(function(a) { var e = a.frameStart,
                e = [e, e + a.frameCount];
            a.objects && Yi.call(c, a.objects, b, e) }) }

    function Yi(a, b, c) { var d = this;
        a.forEach(function(a) { Zi.call(d, a, b, c) }) }

    function $i(a) { if ((a = Vi[a]) && a.layers) { var b = {};
            Wi.call(this, a.layers, b); return b } }

    function Zi(a, b, c) { if (a.param) { var d = this; if (2005 === a.type) var e = d.bh.qc(a.param.imageSrc);
            else a.param.fillInfo && a.param.fillInfo.fillImage && (e = d.bh.qc(a.param.fillInfo.fillImage));
            e && (b[e] ? b[e].zg.push([c]) : b[e] = { zg: [
                    [c]
                ], src: e });
            2014 == a.type && a.items.forEach(function(a) { Zi.call(d, a, b, c) }); if (2021 == a.type)
                for (e in a = $i.call(d, a.param.symbolId), a)
                    if (a.hasOwnProperty(e)) { var f = a[e];
                        f.zg.forEach(function(a) { a.splice(0, 0, c) });
                        b[e] ? f.zg.forEach(function(a) { b[e].zg.push(a) }) : b[e] = f } } };
    var ej = {
        keys: "Ac action fM form tt title wt width ht height cl color sm symbols ly layers vr version sC scripts zI zoomInfo pd pid tp type nm name un units lI layerId fS frameStart fC frameCount ad animated vb visible ob objects pm param fI fillInfo cv curve kf keyframes md mode tw tween hK hashKey ix index rW rawWidth rH rawHeight sI symbolId oX offsetX oY offsetY rX rotateCenterX rY rotateCenterY it items nI nodeId gP guidPath ph path gi guid sm smooth iX innerX iY innerY uX outerX uY outerY cX centerX cY centerY ed edges st section fZ fontSize fT fontStyle fW fontWeight fF fontFamily tA textAlign tC textContent tL tlength tP tprecision tN tDirection tLp tloop tD textDecoration rI rmin rM rmax rT rinterval tD textDecoration cR cornerRadius iS imageSrc lC lineCap lJ LineJoin lT lineType lG lineGap fR frameRate iP innerPercent TA trackAnchors MT mugedaTrackAnchors".split(" "),
        yu: function(a) {
            if (!a) return a;
            if (1 != a.zip) return HaniData.yu(a);
            a = JSON.parse(JSON.stringify(a));
            a = ej.tB(a);
            delete a.wD;
            void 0 == a.rate && (a.rate = 12);
            void 0 == a.width && (a.width = 600);
            void 0 == a.height && (a.height = 400);
            void 0 == a.guid && (a.guid = "");
            void 0 == a.title && (a.title = "");
            void 0 == a.script && (a.script = "");
            void 0 == a.loop && (a.loop = !0);
            void 0 == a.useCamera && (a.useCamera = !1);
            void 0 == a.symbols && (a.symbols = []);
            if (a.symbols.length)
                for (var b = a.symbols, c = 0; c < b.length; c++) { var d = b[c];
                    d.runtime = !0;
                    d.dirtyFlag = !1;
                    ej.Ko(d.layers) }
            if (a.pages &&
                a.pages.length)
                for (var b = a.pages, c = 0; c < b.length; c++) d = b[c], d.runtime = !0, d.dirtyFlag = !1, ej.Ko(d.layers);
            ej.vB(a);
            ej.Ko(a.layers);
            return a
        },
        tB: function(a) { var b;
            a = JSON.stringify(a); for (var c = 0; c < ej.keys.length; c += 2) b = eval('/"' + ej.keys[c] + '":/g'), a = a.replace(b, '"' + ej.keys[c + 1] + '":'); return JSON.parse(a) },
        vB: function(a) {
            for (var b = [], c = a.zoomInfo.split(",") || [], d = 0; d < c.length; d += 4) {
                var e = c[d];
                if (0 == e.indexOf("i")) {
                    e = e.substr(1);
                    d++;
                    var f = c[d];
                    0 == f.indexOf("t") ? (f = f.substr(1), d++) : f = null;
                    b[e] = {
                        offsetLeft: Number(c[d]),
                        offsetTop: Number(c[d + 1]),
                        rotation: Number(c[d + 2]),
                        zoomLevel: Number(c[d + 3])
                    };
                    f && (b[e].tween = f)
                }
            }
            a.zoomInfo = b
        },
        Ko: function(a) { for (var b = 0; b < a.length; b++) { var c = a[b];
                c.hide = !1;
                c.lock = !1; for (var c = c.units, d = 0; d < c.length; d++) { var e = c[d];
                    e.animated && ej.uB(e); for (var f = e.keyframes || [], g = 0; g < f.length; g++) ej.Au(f[g].param);
                    void 0 == e.visible && (e.visible = !0);
                    ej.zu(e.objects) } } },
        uB: function(a) {
            for (var b = a.path.split(","), c = [], d = b.shift(), e = b.shift(), f = 0; f < b.length; f += 7) c.push({
                id: Number(b[f]),
                backwardX: Number(b[f +
                    1]),
                backwardY: Number(b[f + 2]),
                forwardX: Number(b[f + 3]),
                forwardY: Number(b[f + 4]),
                nodeX: Number(b[f + 5]),
                nodeY: Number(b[f + 6])
            });
            c.length ? (a.pathLeft = Number(d), a.pathTop = Number(e), a.path = c) : (delete a.path, delete a.pathLeft, delete a.pathTop)
        },
        zu: function(a) { for (var b = 0; b < a.length; b++) { var c = a[b];
                c.items && c.items.length ? ej.zu(c.items) : (c.id = 0, c.name = "", c.items = [], c.aryAnchors = []);
                ej.rB(c);
                ej.Au(c.param) } },
        rB: function(a) {
            var b = a.curve;
            if ("string" == typeof b) {
                a.curve = {};
                var b = b.split(","),
                    c = 1 == b.shift();
                a.curve.closed =
                    c;
                for (var c = [], d = 0; d < b.length; d += 6) c.push({ backwardX: Number(b[d]), backwardY: Number(b[d + 1]), forwardX: Number(b[d + 2]), forwardY: Number(b[d + 3]), nodeX: Number(b[d + 4]), nodeY: Number(b[d + 5]) });
                a.curve.points = c
            }
        },
        Au: function(a) {
            void 0 == a.strokeType && (a.strokeType = 0);
            void 0 == a.frameRate && (a.frameRate = 12);
            void 0 == a.lineCap && (a.lineCap = "round");
            void 0 == a.lineJoin && (a.lineJoin = "round");
            void 0 == a.lineType && (a.lineJoin = "solid");
            for (var b = a.m.split(";"), c = 0; c < b.length; c++) {
                var d = b[c].substr(1);
                switch (b[c].substr(0,
                    1)) {
                    case "L":
                        a.left = Number(d); break;
                    case "R":
                        a.right = Number(d); break;
                    case "T":
                        a.top = Number(d); break;
                    case "B":
                        a.bottom = Number(d); break;
                    case "S":
                        a.startX = Number(d); break;
                    case "P":
                        a.startY = Number(d); break;
                    case "E":
                        a.endX = Number(d); break;
                    case "N":
                        a.endY = Number(d); break;
                    case "X":
                        a.scaleX = Number(d); break;
                    case "Y":
                        a.scaleY = Number(d); break;
                    case "O":
                        a.rotate = Number(d); break;
                    case "W":
                        a.lineWidth = Number(d); break;
                    case "A":
                        a.alpha = Number(d); break;
                    case "C":
                        a.strokeColor = d }
            }
            void 0 == a.startX && (a.startX = a.left);
            void 0 ==
                a.startY && (a.startY = a.top);
            void 0 == a.endX && (a.endX = a.right);
            void 0 == a.endY && (a.endY = a.bottom);
            a.width = a.right - a.left;
            a.height = a.bottom - a.top;
            delete a.m;
            ej.sB(a)
        },
        sB: function(a) {
            if (a.fillInfo) {
                for (var b = a.fillInfo.split(";"), c = Number(b[0]), d = b[1].split(","), e = b[3], f = b[4], g = b[5], h = b[6], k = b[7], l = b[8], m = [], n = 0; n < d.length; n += 5) m.push({ p: Number(d[n]), r: Number(d[n + 1]), g: Number(d[n + 2]), b: Number(d[n + 3]), a: Number(d[n + 4]) });
                c = {
                    fillStyle: c,
                    fillImage: e,
                    foreground: l,
                    fillColors: m,
                    imagePosition: f,
                    imageSize: g,
                    horOffset: h,
                    verOffset: k
                };
                b = b[2].split(",");
                4 != b.length && (b = [0, 0, 0, 0]);
                c.fillStartPos = { x: Number(b[0]), y: Number(b[1]) };
                c.fillEndPos = { x: Number(b[2]), y: Number(b[3]) };
                a.fillInfo = c
            }
        }
    };
    t.H("Utils.MugedaCompress", ej);

    function fj(a) { Vi = function(a) { var c = {};
            (a.symbols || []).forEach(function(a) { c[a.id] = a }); return c }(a) }

    function gj(a) { Vi = {};
        fj.call(this, a); var b = [];
        Wi.call(this, a.layers, b); return b }

    function hj() { this.Aj = null;
        this.Tx = [];
        this.Sx = [];
        this.bh = null;
        this.Qe = 0;
        this.da = this.vn = null }

    function ij(a, b) { var c = gj.call(a, b),
            d = [],
            e; for (e in c) c.hasOwnProperty(e) && d.push(c[e]);
        d.forEach(function(a) { a.zg.sort(function(a, b) { for (var c = Math.max(a.length, b.length), d = 0; d < c; d++) { var e = a[d] ? a[d][0] : 0,
                        f = b[d] ? b[d][0] : 0; if (e !== f) return e - f } }) });
        d.sort(function(a, b) { return a.zg[0][0][0] - b.zg[0][0][0] });
        a.Aj = d.map(function(a) { return a.src }); if (c = b.loadInfo)(d = c.backgroundImage) && a.Aj.splice(0, 0, a.bh.qc(d)), (c = c.logoImage) && a.Aj.splice(0, 0, a.bh.qc(c)) }

    function jj(a) { var b = a.Tx,
            c = a.Sx;
        a.Aj.forEach(function(a) { var e = new Image;
            e.src = a;
            b.push(e);
            e.onload = e.onerror = function() { b.splice(b.indexOf(this), 1);
                c.push(this.src) } }) }
    hj.RA = function(a, b, c) {
        function d(a, b) { b = b || 0;
            e[b] = e[b] || [];
            e[b].push(a) }
        var e = {};
        if (a = a.sL)
            if (Mugeda.previewMode ? a.cardCommon && d("/mugeda_client_utils/js/card_common.js") : (a.jquery && d(b.qc("jquery-1.10.2.min.js")), a.socketio && (d(b.qc("socket.io.1.9.16.min.js")), d(b.qc("mugeda_connection.js"))), a.box2d && d(b.qc("Box2dWeb-2.1.a.3.min.js")), a.qrcode && (d(b.qc("qrcode.min.js")), d(b.qc("jquery.qrcode.min.js"), 1)), c = c.ag, c = null != c.version ? c.version : "", a.cardCommon && d(b.qc("card_common" + c + ".js"))), (a = a.extra) &&
                a.length) { c = a.length; for (var f = 0; f < c; f++) { var g = a[f]; - 1 < g.indexOf("://") ? d(g) : d(b.qc(g)) } }
        return e
    };

    function kj(a, b, c) { var d = [],
            e = 0,
            f; for (f in b) b.hasOwnProperty(f) && (d.push(f), e += b[f].length);
        a.Qe = e;
        d.sort(function(a, b) { return a - b }); var g = null;
        Ui.bind(a)(d, b, function() { g != a.Qe && a.vn && (g = a.Qe, a.vn());
            c() }) }

    function lj() { this.Fc = this.gv = this.da = null } lj.zB = function(a) { var b = Z,
            c = new lj;
        b.getMugedaObject = c.Sw.bind(c); var d = a.root;
        a = a.Tn;
        c.da = d;
        c.gv = b;
        c.Fc = new Ti({ Tn: a, jl: d }); return c };
    lj.prototype.Sw = function() { return this.Fc };
    var mj = ej;
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        function b() { return e.apply(this && !this.Hanimation && this instanceof c && a ? this : a, d.concat(Array.prototype.slice.call(arguments))) }

        function c() {} if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); var d = Array.prototype.slice.call(arguments, 1),
            e = this;
        c.prototype = this.prototype;
        b.prototype = new c; return b });
    var Z = window.Mugeda = window.Mugeda || {};
    Z.script = Z.script || [];
    Z.enable3DRendering = function() {};
    Z.startAnimation = function(a, b, c, d, e, f, g, h) {
        "string" == typeof d && (d = [d]);
        d.qc = function(a) { null == a && (console.warn("get file empty"), a = ""); if (!(0 == a.indexOf("/") || -1 < a.indexOf("://"))) { for (var b = a.length, c = 0, e = 0; e < b && 6 > e; e++) c += a.charCodeAt(b - 1 - e);
                a = d[c % d.length] + a } return a };
        d.mA = function(a) { return 0 == a.indexOf("/") || -1 < a.indexOf("://") ? a : d[0] + a };
        d.toString = function() { return d[Math.floor(Math.random() * d.length)] };
        var k = Z.data[a];
        k.zip && (k = mj.yu(k), k.script && k.script.length && (k.script = unescape(k.script)));
        a = new pf;
        a.tn = $b.hv(a);
        a.ag = g || window._mrmcp;
        var l = lj.zB({ root: a, Tn: k });
        a.A = k;
        window.Mugeda.currentAni = l.Fc;
        window.Mugeda.animations = window.Mugeda.animations || [];
        window.Mugeda.animations.push(l.Fc);
        var m = new hj;
        m.bh = d;
        m.da = a;
        var n = { root: a, Sh: {}, Hz: {}, dir: d, Cu: {} };
        g = hj.RA(k, d, a);
        if (b) b = d.qc(b), g[0] = g[0] || [], g[0].push(b);
        else {
            var p = k.script;
            setTimeout(function() {
                if (p) { var a = new Function("mugeda", p);
                    a.call(l.Fc, l.Fc) }[k].concat(k.pages || []).forEach(function(b, c) {
                    var d = b.ps;
                    d && (a = new Function("mugeda",
                        "pageIndex", d), a.call(l.Fc, l.Fc, c))
                })
            })
        }
        l.Fc.dm = n;
        var q = k.loadInfo || {};
        if (h = h || Z.loadProcessHandleInstance) r = function() { return h };
        else if (q.style && Z.loadProcessHandle && Z.loadProcessHandle[q.style]) var r = function() { return new Z.loadProcessHandle[q.style]({ loadInfo: q, thisAni: l.Fc, stageDom: c }) };
        var v = l.Fc.V = new Fi({ KA: r, no: !0 });
        n.root.V = v;
        r = document.createEvent("Events");
        r.initEvent("mugedaReady", !1, !0);
        document.dispatchEvent(r);
        kj(m, g, function() {
            if (Z.script.length) {
                var a = Z.script.splice(0, 1)[0];
                setTimeout(function() {
                    a.call(l.Fc,
                        l.Fc)
                })
            }
        });
        ij(m, k);
        jj(m);
        setTimeout(function() { var a = Lg.Jd(k, { gD: m, Do: n });
            l.Fc.pC = a;
            v.rn = m;
            v.ia = l.Fc;
            l.Fc.$t = v;
            v.LA(a, c) })
    };
    Z.css3PlayerLoaded = 2;
    if (Z.creationToBeLoad) { for (var nj = 0; nj < Z.creationToBeLoad.length; nj++) Z.creationToBeLoad[nj].start();
        Z.creationToBeLoad = [] }
    var oj = 0;
    Z.guidGen = function() { return Number(new Date - new Date("2012/1/1") + "" + Math.random().toString().substr(2, 4)).toString(36) + "" + oj++ };
    Z.log = function(a, b) { Z.dc || (Z.dc = document.createElement("div"), Z.dc.style.display = "block", Z.dc.style.width = "100%", Z.dc.style.position = "fixed", Z.dc.style.background = "rgba(0,0,0,0.8)", Z.dc.style.color = "#FFF", Z.dc.style.left = 0, Z.dc.style.top = 0, Z.dc.style.width = "100%", Z.dc.style.maxHeight = "33%", Z.dc.style.overflow = "auto", Z.dc.style.wordWrap = "break-word", document.body.appendChild(Z.dc)); if ("string" == typeof a || a) Z.dc.innerHTML = b ? Z.dc.innerHTML + "<br />" + a : a, Z.dc.scrollTop = Z.dc.scrollHeight; return Z.dc.innerHTML };
    Z.getAudioCache = function(a, b) { return pj[b] };
    var pj = {};
    Z.addAudioCache = function(a, b, c) { pj[a] = b;
        pj["name_" + c] = b };
    Z.stopAudio = function(a) { a = a || {}; var b = a.stop_mode || "pause"; if (a = pj["name_" + (a.audio_name || "")]) "stop" == b && (a.currentTime = 0), a.pause() };
    Z.stopAudioAll = function() { for (var a in pj) pj.hasOwnProperty(a) && 0 < pj[a].readyState && (pj[a].currentTime = 0, pj[a].pause());
        window.backgroundMusic && window.backgroundMusic.pause() };
    Z.mapFrameNameId = {};
    Z.enableFlexibleFrameRate = function() {};

    function qj() {
        function a(a) { window.gyroInfo = window.gyroInfo || {};
            window.gyroInfo.alpha = a.alpha;
            window.gyroInfo.beta = a.beta;
            window.gyroInfo.gamma = a.gamma } qj.f.constructor.apply(this, arguments);
        window.mugedaGyroInit || (window.addEventListener("deviceorientation", a, !1), window.mugedaGyroInit = !0) } t.extend(qj, ug);
    qj.prototype.update = function() { var a = this.fe.Gx || "alpha";
        null == window.gyroInfo && (window.gyroInfo = {}); var a = window.gyroInfo[a] || "0.000",
            b = Math.abs(a),
            c = Math.floor(b),
            b = Math.round(1E3 * (b - c));
        10 > b ? b = "00" + b.toString() : 100 > b && (b = "0" + b.toString());
        this.wa((0 > a ? "-" : "") + c + "." + b) };
    t.H("Text.TextGyro", qj);

    function rj() { rj.f.constructor.apply(this, arguments) } t.extend(rj, ug);
    rj.prototype.update = function(a) { a = a || {}; if (!this.$c || a.Un) this.$c = (new Date).getTime(); var b = this.fe,
            c = parseFloat(b.oy) || 0,
            d = parseFloat(b.ny) || 10; if (0 >= (parseFloat(b.my) || 10) - .001 * ((new Date).getTime() - this.$c) || a.Un) this.wa(Math.floor(c + (d + 1 - c) * Math.random())), this.$c = (new Date).getTime() };
    t.H("Text.TextRandom", rj);

    function sj() { sj.f.constructor.apply(this, arguments);
        this.ll = "down";
        this.Io = 30;
        this.V = null;
        this.$i = "normal";
        this.Ii = void 0 } t.extend(sj, ug);
    sj.prototype.update = function(a) {
        a = a || {};
        var b = this,
            c = b.fe,
            d = c.lz || 30,
            e = c.nz || "second",
            f = c.kz || "down",
            g = c.mz || "noloop",
            h = c.rC || 0,
            k = c.jz || "no";
        if (!b.V) { for (c = b; c && !c.V;) c = c.parent;
            b.V = c.V } c = b.ab();
        if ((b.$c || c) && ("yes" != k || "global" == b.V.tk)) {
            var l = b.Ue || [],
                c = function() { b.$c = (new Date).getTime() + Math.floor(5 - 10 * Math.random());
                    b.Xp = !1; for (var a = 0; a < l.length; a++) "timer_start" == l[a].W.event && l[a].D();
                    b.ll = f; "random" == f && (b.ll = .5 > Math.random() ? "down" : "up");
                    b.Io = parseFloat(d) + h * Math.random() };
            (!b.$c || a.Un &&
                "no" == k) && c();
            a = (new Date).getTime();
            k = a - b.$c;
            0 > k && (k = 1);
            if ("pause" == b.$i) b.Ii = b.Ii || k;
            else {
                "continue" == b.$i && void 0 !== b.Ii ? b.$c = (new Date).getTime() - b.Ii : "restart" == b.$i && c();
                b.$i = "normal";
                delete b.Ii;
                k = .001 * (a - b.$c);
                a = b.Io - k;
                k = "down" == b.ll ? a : k;
                0 < a ? "second" == e ? k = Math.ceil(k) : (e = Math.floor(k), k = Math.floor(1E3 * (k - e)), 10 > k ? k = "00" + k.toString() : 100 > k && (k = "0" + k.toString()), k = e + "." + k) : 0 > a && (k = "down" == b.ll ? 0 : b.Io);
                if (0 >= a && !b.Xp) {
                    for (e = 0; e < l.length; e++) "timer" == l[e].W.event && l[e].D();
                    "noloop" == g ? b.Xp = !0 :
                        c()
                }
                b.wa(k)
            }
        }
    };
    t.H("Text.TextTimer", sj);
    var tj = MugineRequire("Utils/Browser"),
        uj = MugineRequire("Render/RenderObject");
    uj.ya = function(a) { return uj.gf[a] };

    function vj(a) {
        function b(a) { a.target.dataset.key || a.target == f || (g.style.display = "none") }

        function c(a) { a.target.dataset.key && (a.target.style.background = "#fff") }

        function d(a) { var b = a.target.dataset.key;
            b && f && (a.target.style.background = "#f1f1f1", "del" != b ? f.value += b : f.value = f.value.substr(0, f.value.length - 1)) }

        function e() {
            var e = uj.ya(0).O(),
                f = "\r\n\t    \t<style>\r\n\t    \t\t#" + a + '_key_board{\r\n\t    \t\t\tbackground: #fff;\r\n\t    \t\t\tposition: fixed;\r\n\t    \t\t\tbottom: 0;\r\n\t    \t\t\twidth: 100%;\r\n\t    \t\t\theight: 40%;\r\n\t    \t\t\tdisplay: flex;\r\n\t    \t\t\tflex-wrap: wrap;\r\n\t    \t\t}\r\n\t    \t</style>\r\n\t\t\t<div id="' + a +
                '_key_board">\r\n\t\t\t\t<div data-key="1" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">1</div>\r\n\t\t\t\t<div data-key="2" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">2</div>\r\n\t\t\t\t<div data-key="3" style="border-bottom:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">3</div>\r\n\t\t\t\t<div data-key="4" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">4</div>\r\n\t\t\t\t<div data-key="5" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">5</div>\r\n\t\t\t\t<div data-key="6" style="border-bottom:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">6</div>\r\n\t\t\t\t<div data-key="7" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">7</div>\r\n\t\t\t\t<div data-key="8" style="border-bottom:1px solid #f1f1f1;border-right:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">8</div>\r\n\t\t\t\t<div data-key="9" style="border-bottom:1px solid #f1f1f1;display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">9</div>\r\n\t\t\t\t<div data-key="0" style="border-right:1px solid #f1f1f1;display: flex; width: 66.25%; align-items: center;justify-content: center;height: 25%;">0</div>\r\n\t\t\t\t<div data-key="del" style="display: flex; width: 33%; align-items: center;justify-content: center;height: 25%;">\u2190</div>\r\n\t\t\t</div>\r\n\t    ',
                l = document.createElement("div");
            e.appendChild(l);
            l.innerHTML = f;
            g = G(a + "_key_board");
            tj.Sa.Xe ? (e.addEventListener("touchstart", function(a) { d(a);
                b(a) }), e.addEventListener("touchend", function(a) { c(a) })) : (e.addEventListener("mousedown", function(a) { d(a);
                b(a) }), e.addEventListener("mouseup", function(a) { c(a) }))
        }
        var f = G(a),
            g = null;
        (function() { var b = G(a + "_key_board");
            b ? b.style.display = "flex" : e() })()
    }
    t.H("Utils.keyBoard", vj);
    var wj = MugineRequire("Render/RenderObject");
    MugineRequire("Utils/Browser");
    wj.ya = function(a) { return wj.gf[a] };
    t.H("Utils.Captcha", function(a) {
        function b() { G("lottery_captchaImg").src = "http://huwence.mugeda.com/server/service_captcha.php/generate?mode=digit&width=300&height=60&mode=digit&sid=" + Math.random();
            G("lottery_captcha_value").value = "" }

        function c() {
            var c = wj.ya(0).O(),
                e = document.createElement("div");
            c.appendChild(e);
            e.innerHTML = '\r\n            <div id="lottery_captcha" style="display:none;position:fixed;width:80%;padding:10px 10px 45px 10px;left:50%;top:35%;transform:translate(-50%,-50%);background:#fff;border-radius:10px;box-shadow:0px 0px 25px 4px #888;">\r\n                <p style="margin:0 0 5px 0;font-size:14px;">\u4f60\u662f\u673a\u5668\u4eba\u5417?</p>\r\n                <p style="margin:0 0 30px 0;font-size:14px;">\u63d0\u4ea4\u6570\u636e\u524d\u8bf7\u8f93\u5165\u4e0b\u9762\u7684\u6570\u5b57:</p>\r\n                <div style="overflow:hidden;width: 80%;margin: 0 auto 20px auto;">\r\n                    <img id="lottery_captchaImg" style="display:block;float:left;width:75%;height:30px;" src="">\r\n                    <img id="lottery_refresh_img" width="30" style="transform:scale(.7);-webkit-transform:scale(.7);display:block;float:right;" src="http://www.iconninja.com/files/794/1010/398/refresh-icon.svg">\r\n                </div>\r\n                <input readonly="readonly" id="lottery_captcha_value" type="text" style="display: block;width: 80%;margin: 0 auto 30px auto;padding:5px 0;border: 1px solid #a7a7a7;border-radius:3px;">\r\n                <div style="overflow: hidden;position: absolute;left: 0;bottom: 0px;width: 100%;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">\r\n                    <div id="lottery_captcha_submit" style="float:left;width:50%;float:left;padding:10px 0;text-align:center;background:#f36523;color:#fff;">\u786e\u5b9a</div>\r\n                    <div id="lottery_captcha_off" style="float:left;width:50%;float:left;padding:10px 0;text-align:center;background:#8b8b8b;color:#fff;">\u53d6\u6d88</div>\r\n                <div>\r\n            </div>\r\n        ';
            G("lottery_captcha_value").addEventListener("click",
                function() { new vj("lottery_captcha_value") });
            G("lottery_captcha_submit").addEventListener("click", function() { var c = G("lottery_captcha_value").value;
                ajaxHelper({ url: "http://huwence.mugeda.com/server/service_captcha.php/verfy?type=jsonp&captcha=" + c, type: "jsonp", success: function(d) { 0 === d.status ? (G("lottery_captcha").style.display = "none", a(c)) : (b(), Mugeda.messageBox("\u9a8c\u8bc1\u7801\u9519\u8bef"), G("lottery_captcha_value").value = "") } }) });
            G("lottery_captcha_off").addEventListener("click", function() {
                G("lottery_captcha").style.display =
                    "none";
                G("lottery_captcha_value").value = ""
            });
            G("lottery_captchaImg").addEventListener("click", function() { b() });
            G("lottery_refresh_img").addEventListener("click", function() { b() })
        }(function() { var a = G("lottery_captcha");
            a ? a.style.display = "block" : (c(), a = G("lottery_captcha"), a.style.display = "block");
            b() })()
    });

    function xj() {} xj.vp = [];
    xj.lp = function(a) { var b = ""; if (0 == a.length) return "";
        b = a.replace(/&/g, "&gt;");
        b = b.replace(/</g, "&lt;");
        b = b.replace(/>/g, "&gt;");
        b = b.replace(/ /g, "&nbsp;");
        b = b.replace(/\'/g, "&#39;");
        b = b.replace(/\"/g, "&quot;"); return b = b.replace(/\n/g, "<br>") };

    function yj(a) { var b = document.createElement("div");
        b.innerHTML = a; return b.childNodes[0] } xj.Bb = { iv: "toast", fv: "info" };
    t.ra(xj.Bb, ["toast", xj.Bb.iv, "info", xj.Bb.fv]);
    xj.TA = function(a, b) {
        b = b || {};
        b.timeout = b.timeout || b.timeout || 3E3;
        b.type = b.type || b.type || xj.Bb.I;
        b.encode = null == b.encode ? !0 : b.encode;
        var c = document.body;
        if ("info" == b.type) {
            var d = document.getElementById("MugedaMessageFrame");
            null == d && (d = yj('<div id="MugedaMessageFrame" style="position: fixed; top: 0; width: 100%; left: 0;z-index: 40;"></div>'), c.appendChild(d));
            var e = yj('<div class="MugedaMessageFrame_info" style="background: white;overflow: hidden; padding: 14px;' + K.prefix.s + "border-radius: 1px;" + K.prefix.s +
                'box-shadow: 0 0 2px #999; opacity: 0.95;margin: 4px 4px;font-size: 13px;line-height: 1.5em;color: rgba(0,0,0,0.7);">   <span>' + (b.encode ? xj.lp(a) : a) + '</span>   <span class="MugedaClose" style="float:right;padding: 8px 0 0 8px;">\u5173\u95ed</span></div>');
            d.insertBefore(e, d.childNodes[0]);
            d.querySelector(".MugedaClose").addEventListener("click", function() { d.removeChild(e) })
        } else "toast" == b.type && (xj.vp.push([a, b]), xj.up())
    };
    var zj = !1;
    xj.up = function() {
        if (!zj) {
            var a = xj.vp;
            if (a.length) {
                zj = !0;
                var a = a.splice(0, 1)[0],
                    b = a[1],
                    a = a[0],
                    c = yj('<div class="MugedaMessageFrame_toast" style="position:fixed;width:80%;bottom:20%;left:10%;opacity:0;' + ("display: " + K.prefix.s + "box;display: " + K.prefix.s + "flex;" + K.prefix.s + "box-orient: vertical;" + K.prefix.s + "flex-direction: column;" + K.prefix.s + "box-pack: center;" + K.prefix.s + "justify-content: center;" + K.prefix.s + "transition: opacity 200ms;") + '">   <div style="max-width: 80%;margin:auto;background:black;opacity:0.95;color: white;padding: 4px 8px;font-size: 14px;border-radius: 12px;">' +
                        (b.encode ? xj.lp(a) : a) + "</div></div>");
                document.body.appendChild(c);
                setTimeout(function() { c.style.cssText += "opacity: 1";
                    setTimeout(function() { c.style.cssText += "opacity: 0";
                        setTimeout(function() { zj = !1;
                            document.body.removeChild(c);
                            xj.up() }, 500) }, b.timeout) }, 200)
            }
        }
    };
    t.ra(xj, ["info", xj.TA, "type", xj.Bb]);
    t.H("Utils.Toast", xj);
})();