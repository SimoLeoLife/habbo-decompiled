// Extracted from HabboAirLauncher.deobf.js, line 135941.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/WindowParser.as
// Obfuscated name: _i60493a873695ea

class a {
  static {
    n(this, "WindowParser");
  }
  static ELEMENT_TAG_EXCLUDE = "_EXCLUDE";
  static ELEMENT_TAG_INCLUDE = "_INCLUDE";
  static const_1295 = "_TEMP";
  static LAYOUT = "layout";
  static name_5 = "window";
  static VARIABLES = "variables";
  static FILTERS = "filters";
  static NAME = "name";
  static STYLE = "style";
  static DYNAMIC_STYLE = "dynamic_style";
  static PARAMS = "params";
  static TAGS = "tags";
  static X = "x";
  static Y = "y";
  static WIDTH = "width";
  static HEIGHT = "height";
  static VISIBLE = "visible";
  static CAPTION = "caption";
  static ID = "id";
  static BACKGROUND = "background";
  static BLEND = "blend";
  static CLIPPING = "clipping";
  static COLOR = "color";
  static THRESHOLD = "treshold";
  static CHILDREN = "children";
  static WIDTH_MIN = "width_min";
  static const_1266 = "width_max";
  static HEIGHT_MIN = "height_min";
  static const_969 = "height_max";
  static TRUE = "true";
  static ZERO = "0";
  static VAR = "$";
  static COMMA = ",";
  static EMPTY = "";
  static _r1223010705a94a = /^(\s|\n|\r|\t|\v)*/m;
  static _rccd42493175f1b = /(\s|\n|\r|\t|\v)*$/;
  var_2570;
  var_2884;
  var_2030;
  var_3803;
  _parsedLayoutCache;
  _context;
  _r83e88c8e01f6ff = new WeakMap();
  _r536d9fe465b297 = new WeakMap();
  _r55778c40c31e8c = new WeakMap();
  _rf5a3e97ffd710c = new WeakMap();
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  constructor(e) {
    ((this._context = e),
      (this.var_2570 = {}),
      (this.var_2884 = {}),
      class_2715.fillTables(this.var_2570, this.var_2884),
      (this.var_2030 = {}),
      (this.var_3803 = {}),
      class_4253.fillTables(this.var_2030, this.var_3803),
      (this._parsedLayoutCache = new B()));
  }
  dispose() {
    if (!this._disposed) {
      for (let e of Object.keys(this.var_2570)) delete this.var_2570[e];
      for (let e of Object.keys(this.var_2884)) delete this.var_2884[Number(e)];
      for (let e of Object.keys(this.var_2030)) delete this.var_2030[e];
      for (let e of Object.keys(this.var_3803)) delete this.var_3803[Number(e)];
      (this._parsedLayoutCache.dispose(), (this._context = null), (this._disposed = !0));
    }
  }
  _r65e61e0e6e4930(e, r, t) {
    let i = e.toDomElement();
    if (i == null) return null;
    let s = null,
      o = i;
    if (_i9856ea31b49ccd(o) === a.LAYOUT) {
      if (e.child(a.VARIABLES).length() > 0) {
        let b = this._rb651e03da4380e(o, a.VARIABLES),
          _ = b != null ? this._r0cc292efd3d372(b) : null,
          h = _ != null ? new UnkClass_f56d7f(this._rd4ae456307900f(_).map((p) => new yi(p))) : rr().children();
        h.length() > 0 && (t == null && (t = new B()), class_3122._r49e6f06a45fc47(h, t));
      }
      let c = this._rb651e03da4380e(o, a.FILTERS),
        f = c != null ? this._rd4ae456307900f(c) : [];
      if (f.length > 0) {
        let b = [];
        for (let _ of f) {
          let h = this.buildBitmapFilter(_);
          h != null && b.push(h);
        }
        r != null && (r.filters = b);
      }
      let l = this._r58ebb04b8925c7(o, a.name_5);
      switch (l.length) {
        case 0:
          return null;
        case 1:
          o = l[0] ?? o;
          break;
        default:
          for (let b of l) s = this._r076c87e93fbf9a(b, r, t);
          return s;
      }
    }
    if (_i9856ea31b49ccd(o) === a.name_5) {
      let d = this._rd4ae456307900f(o);
      if (d.length > 1) {
        for (let c of d) s = this._r076c87e93fbf9a(c, r, t);
        return s;
      }
      o = d[0] ?? o;
    }
    return this._r076c87e93fbf9a(o, r, t);
  }
  _r411026dc72d1f2(e, r, t) {
    let i = e.toDomElement();
    return i == null ? null : this._r076c87e93fbf9a(i, r, t);
  }
  _r076c87e93fbf9a(e, r, t) {
    if (this._context == null) return null;
    let i = a.EMPTY,
      s = !0,
      o = !0,
      d = "0x00ffffff",
      c = 1,
      f = !1,
      l = 10,
      b = r != null ? r.style : 0,
      _ = "",
      h = 0,
      p = a.EMPTY,
      m = 0,
      v = this.var_2570[_i9856ea31b49ccd(e)] ?? 0,
      w = unescape(String(this.parseAttribute(e, a.NAME, t, a.EMPTY)));
    ((b = Number(this.parseAttribute(e, a.STYLE, t, b))),
      (_ = String(this.parseAttribute(e, a.DYNAMIC_STYLE, t, a.EMPTY))),
      (h = Number(this.parseAttribute(e, a.PARAMS, t, h))),
      (p = unescape(String(this.parseAttribute(e, a.TAGS, t, p)))));
    let I = new D();
    ((I.x = Number(this.parseAttribute(e, a.X, t, a.ZERO))),
      (I.y = Number(this.parseAttribute(e, a.Y, t, a.ZERO))),
      (I.width = Number(this.parseAttribute(e, a.WIDTH, t, a.ZERO))),
      (I.height = Number(this.parseAttribute(e, a.HEIGHT, t, a.ZERO))),
      (s = this.parseAttribute(e, a.VISIBLE, t, String(s)) === a.TRUE),
      (m = Number(this.parseAttribute(e, a.ID, t, String(m)))));
    let C = this._rb651e03da4380e(e, a.PARAMS),
      W = C != null ? this._rd4ae456307900f(C) : [];
    for (let oe of W) {
      let be = String(this.parseAttribute(oe, a.NAME, t, a.EMPTY)),
        ye = this.var_2030[be];
      if (ye != null) h |= ye;
      else throw new Error(`Unknown window parameter "${oe.getAttribute(a.NAME) ?? a.EMPTY}"!`);
    }
    ((i = (h & N._ra73d404a97ed14) !== 0 ? (r?.caption ?? a.EMPTY) : a.EMPTY),
      (i = unescape(String(this.parseAttribute(e, a.CAPTION, t, i)))));
    let R = null;
    p !== a.EMPTY && (R = p.split(a.COMMA).map((oe) => a.trimWhiteSpace(oe ?? a.EMPTY)));
    let T = this._rb651e03da4380e(e, a.VARIABLES),
      S = this._context.create(
        w,
        null,
        v,
        b,
        h,
        I,
        null,
        _i6ad9fc32949eac(r) ? null : r,
        m,
        this._r8adced01ba023a(T),
        _,
        R,
      );
    if (S == null) return null;
    (this.hasAttribute(e, a.WIDTH_MIN) &&
      (S.limits.minWidth = Number(this.parseAttribute(e, a.WIDTH_MIN, t, S.limits.minWidth))),
      this.hasAttribute(e, a.const_1266) &&
        (S.limits.maxWidth = Number(this.parseAttribute(e, a.const_1266, t, S.limits.maxWidth))),
      this.hasAttribute(e, a.HEIGHT_MIN) &&
        (S.limits.minHeight = Number(this.parseAttribute(e, a.HEIGHT_MIN, t, S.limits.minHeight))),
      this.hasAttribute(e, a.const_969) &&
        (S.limits.maxHeight = Number(this.parseAttribute(e, a.const_969, t, S.limits.maxHeight))),
      S.limits.limit(),
      (f = this.parseAttribute(e, a.BACKGROUND, t, String(S.background)) === a.TRUE),
      (c = Number(this.parseAttribute(e, a.BLEND, t, String(S.blend)))),
      (o = this.parseAttribute(e, a.CLIPPING, t, String(S.clipping)) === a.TRUE),
      (d = String(this.parseAttribute(e, a.COLOR, t, String(S.color)))),
      (l = Number(this.parseAttribute(e, a.THRESHOLD, t, String(S.mouseThreshold)))),
      S.caption !== i && (S.caption = i),
      S.blend !== c && (S.blend = c),
      S.visible !== s && (S.visible = s),
      S.clipping !== o && (S.clipping = o),
      S.background !== f && (S.background = f),
      S.mouseThreshold !== l && (S.mouseThreshold = l));
    let z = d.charAt(1) === a.X ? parseInt(d, 16) : Number(d);
    S.color !== z && (S.color = z);
    let K = this._rb651e03da4380e(e, a.FILTERS),
      $ = K != null ? this._rd4ae456307900f(K) : [];
    if ($.length > 0) {
      let oe = [];
      for (let be of $) {
        let ye = this.buildBitmapFilter(be);
        ye != null && oe.push(ye);
      }
      S.filters = oe;
    }
    if (r != null && _i6ad9fc32949eac(r)) {
      (S.x !== I.x || S.y !== I.y || S.width !== I.width || S.height !== I.height) &&
        ((h & N._rcf781b4b002bb2) === N._ra20cc779361d59 && (S.x = I.x),
        (h & N._raccb3b4229be11) === N._ra6bff225edb68c && (S.y = I.y));
      let oe = null;
      try {
        oe = r.iterator;
      } catch {
        oe = null;
      }
      oe != null ? _i51700c60334794(oe, oe.length, S) : r.addChild(S);
    }
    let Y = this._rb651e03da4380e(e, a.CHILDREN);
    if (Y != null) {
      let oe = this._rd4ae456307900f(Y);
      _i74862b963032e9(S) && S.setAutoRearrange(!1);
      for (let be of oe) this._r076c87e93fbf9a(be, S, t);
    }
    return (_i74862b963032e9(S) && S.setAutoRearrange(!0), S);
  }
  hasAttribute(e, r) {
    return e instanceof Element ? this._r1adcd5480cf2a2(e, r) != null : e.attribute(r).length() > 0;
  }
  parseAttribute(e, r, t, i) {
    let s =
      e instanceof Element
        ? this._r1adcd5480cf2a2(e, r)
        : e.attribute(r).length() > 0
          ? String(e.attribute(r))
          : null;
    if (s == null) return i;
    let o = s;
    if (t != null && o.charAt(0) === a.VAR) {
      let d = t.getProperty(o.slice(1));
      if (d == null) throw new Error(`Shared variable not defined: "${s}"!`);
      o = String(d);
    }
    return o;
  }
  _r8adced01ba023a(e) {
    if (e == null) return [];
    let r = this._rf5a3e97ffd710c.get(e);
    if (r != null) return r.slice();
    let t = XMLPropertyArrayParser.parse(new UnkClass_f56d7f(this._rd4ae456307900f(e).map((i) => new yi(i))));
    return (this._rf5a3e97ffd710c.set(e, t), t.slice());
  }
  _r42bbd6d4a73032(e) {
    (e.dynamicStyle.length < 3 && (e.dynamicStyle = ""),
      e.dynamicStyle !== "" && e.setParamFlag(N.const_421, !1));
    let r = this.var_2884[e.type] ?? a.EMPTY,
      t = e.limits,
      i = e,
      s =
        `<${r} x="${e.x}" y="${e.y}" width="${e.width}" height="${e.height}" params="${e.param}" style="${e.style}"` +
        (e.dynamicStyle !== a.EMPTY ? ` dynamic_style="${e.dynamicStyle}"` : a.EMPTY) +
        (e.name !== a.EMPTY ? ` name="${escape(e.name)}"` : a.EMPTY) +
        (e.caption !== a.EMPTY ? ` caption="${escape(e.caption)}"` : a.EMPTY) +
        (e.id !== 0 ? ` id="${e.id}"` : a.EMPTY) +
        (e.color !== 16777215 ? ` color="0x${e.alpha.toString(16)}${e.color.toString(16)}"` : a.EMPTY) +
        (e.blend !== 1 ? ` blend="${e.blend}"` : a.EMPTY) +
        (e.visible !== !0 ? ` visible="${e.visible}"` : a.EMPTY) +
        (e.clipping !== !0 ? ` clipping="${e.clipping}"` : a.EMPTY) +
        (e.background !== !1 ? ` background="${e.background}"` : a.EMPTY) +
        (e.mouseThreshold !== 10 ? ` treshold="${e.mouseThreshold}"` : a.EMPTY) +
        (e.tags.length > 0 ? ` tags="${escape(e.tags.toString())}"` : a.EMPTY) +
        (t.minWidth > Number.MIN_SAFE_INTEGER ? ` width_min="${t.minWidth}"` : a.EMPTY) +
        (t.maxWidth < Number.MAX_SAFE_INTEGER ? ` width_max="${t.maxWidth}"` : a.EMPTY) +
        (t.minHeight > Number.MIN_SAFE_INTEGER ? ` height_min="${t.minHeight}"` : a.EMPTY) +
        (t.maxHeight < Number.MAX_SAFE_INTEGER ? ` height_max="${t.maxHeight}"` : a.EMPTY) +
        ">\r";
    if (e.filters && e.filters.length > 0) {
      s += "	<filters>\r";
      for (let c of e.filters) s += `		${this._r11d30629550753(c)}\r`;
      s += "	</filters>\r";
    }
    let o = a.EMPTY;
    if (_i6ad9fc32949eac(i)) {
      let c = i.iterator;
      for (let f = 0; f < c.length; f++) {
        let l = _i3ffbd6929e733a(c, f);
        l != null && l.tags.indexOf(a.ELEMENT_TAG_EXCLUDE) === -1 && (o += this._r42bbd6d4a73032(l));
      }
    } else
      for (let c = 0; c < i.numChildren; c++) {
        let f = i.getChildAt(c);
        f != null && f.tags.indexOf(a.ELEMENT_TAG_EXCLUDE) === -1 && (o += this._r42bbd6d4a73032(f));
      }
    o.length > 0 && (s += `	<children>\r${o}	</children>\r`);
    let d = e.properties;
    if (d != null && d.length > 0) {
      let c = "	<variables>\r",
        f = !1;
      for (let l of d) l.valid && ((c += `		${l.toXMLString()}\r`), (f = !0));
      ((c += "	</variables>\r"), f && (s += c));
    }
    return ((s += `</${r}>\r`), s);
  }
  buildBitmapFilter(e) {
    switch (_i9856ea31b49ccd(e)) {
      case "DropShadowFilter":
        return new Pf(
          Number(this.parseAttribute(e, "distance", null, "0")),
          Number(this.parseAttribute(e, "angle", null, "45")),
          Number(this.parseAttribute(e, "color", null, "0")),
          Number(this.parseAttribute(e, "alpha", null, "1")),
          Number(this.parseAttribute(e, "blurX", null, "0")),
          Number(this.parseAttribute(e, "blurY", null, "0")),
          Number(this.parseAttribute(e, "strength", null, "1")),
          Number(this.parseAttribute(e, "quality", null, "1")),
          this.parseAttribute(e, "inner", null, "false") === "true",
          this.parseAttribute(e, "knockout", null, "false") === "true",
          this.parseAttribute(e, "hideObject", null, "false") === "true",
        );
      default:
        return null;
    }
  }
  _rd4ae456307900f(e) {
    let r = this._r83e88c8e01f6ff.get(e);
    if (r != null) return r;
    let t = Array.from(e.children);
    return (this._r83e88c8e01f6ff.set(e, t), t);
  }
  _r58ebb04b8925c7(e, r) {
    let t = this._r536d9fe465b297.get(e);
    t == null && ((t = new Map()), this._r536d9fe465b297.set(e, t));
    let i = t.get(r);
    if (i != null) return i;
    let s = this._rd4ae456307900f(e).filter((o) => _i9856ea31b49ccd(o) === r);
    return (t.set(r, s), s);
  }
  _r0cc292efd3d372(e) {
    return this._rd4ae456307900f(e)[0] ?? null;
  }
  _rb651e03da4380e(e, r) {
    return this._r58ebb04b8925c7(e, r)[0] ?? null;
  }
  _r1adcd5480cf2a2(e, r) {
    let t = this._r55778c40c31e8c.get(e);
    if ((t == null && ((t = new Map()), this._r55778c40c31e8c.set(e, t)), t.has(r))) return t.get(r) ?? null;
    let i = e.getAttribute(r);
    return (t.set(r, i), i);
  }
  _r11d30629550753(e) {
    if (e instanceof Pf) {
      let r = "<DropShadowFilter";
      return (
        (r += e.distance !== 0 ? ` distance="${e.distance}"` : ""),
        (r += e.angle !== 45 ? ` angle="${e.angle}"` : ""),
        (r += e.color !== 0 ? ` color="${e.color}"` : ""),
        (r += e.alpha !== 1 ? ` alpha="${e.alpha}"` : ""),
        (r += e.blurX !== 0 ? ` blurX="${e.blurX}"` : ""),
        (r += e.blurY !== 0 ? ` blurY="${e.blurY}"` : ""),
        (r += e.strength !== 1 ? ` strength="${e.strength}"` : ""),
        (r += e.quality !== 1 ? ` quality="${e.quality}"` : ""),
        (r += e.inner !== !1 ? ` inner="${e.inner}"` : ""),
        (r += e.knockout !== !1 ? ` knockout="${e.knockout}"` : ""),
        (r += e.hideObject !== !1 ? ` hideObject="${e.hideObject}"` : ""),
        (r += " />"),
        r
      );
    }
    return a.EMPTY;
  }
  static trimWhiteSpace(e) {
    return e.replace(a._rccd42493175f1b, a.EMPTY).replace(a._r1223010705a94a, a.EMPTY);
  }
}
