// Estratto da HabboAirLauncher.deobf.js, riga 137559.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/class_4233.as
// Nome offuscato: _ib275a25e7bab63

class a {
  static {
    n(this, "class_4233");
  }
  static WINDOW_STATE_DEFAULT = "default";
  static WINDOW_STATE_ACTIVE = "active";
  static const_138 = "focused";
  static WINDOW_STATE_HOVERING = "hovering";
  static const_130 = "selected";
  static const_92 = "pressed";
  static const_117 = "disabled";
  static const_115 = "locked";
  static parseSkinDescription(e, r, t, i, s) {
    let o = this._r2de4077bf0631e(e);
    if (o == null) return;
    let d = this._r539158edd29622(this._r98d0f91752dcba(o, "variables")),
      c = new Map(),
      f = new Map(),
      l = this._r98d0f91752dcba(o, "templates");
    l != null && this.parseTemplateList(t, l, c, d, s);
    let b = this._r98d0f91752dcba(o, "layouts");
    if (b != null) {
      if (i == null) this.parseLayoutList(t, b, f, d);
      else
        for (let h of this.getChildren(b, "layout"))
          if (this._r79d821c37fbd45(this.getAttribute(h, "name"), d) === i) {
            this.parseLayout(t, h, f, d);
            break;
          }
    }
    let _ = this._rbe2b5d9bd19f79(o, r);
    if (_ != null) {
      if (i == null) {
        this.parseRenderStateList(t, _, f, d);
        return;
      }
      for (let h of this.getChildren(_, "state"))
        this._r79d821c37fbd45(this.getAttribute(h, "layout"), d) === i && this._r4c56951c6e9425(t, h, f, d);
    }
  }
  static parseLayout(e, r, t, i) {
    let s = this._r79d821c37fbd45(this.getAttribute(r, "name"), i),
      o = this.getAttribute(r, "transparent") === "true",
      d = this.getAttribute(r, "blendMode"),
      c = new SkinLayout(s, o, d),
      f = this._r98d0f91752dcba(r, "entities");
    (f != null && this._r56ddce7e8dea7f(c, this.getChildren(f, "entity"), i),
      t.set(s, c),
      e._rf796a9419141f6(c));
  }
  static parseLayoutList(e, r, t, i) {
    for (let s of this.getChildren(r, "layout")) this.parseLayout(e, s, t, i);
  }
  static parseLayoutEntity(e, r) {
    let t = Number(this.getAttribute(e, "id") || 0),
      i = this.getAttribute(e, "name"),
      s = new Ji(t, i),
      o = this.getAttribute(e, "colorize");
    s.colorize = o === "" ? !0 : o === "true";
    let d = this._r79d821c37fbd45(this.getAttribute(e, "colorizeMethod"), r);
    s.colorizeMethod = d === "" ? Ji._r7df1d3fd01c3c8 : d;
    let c = this._r79d821c37fbd45(this.getAttribute(e, "shade"), r);
    s.shade = c === "" ? 0 : Number(c);
    let f = this._rd7acc35d5f9e9a(this._r98d0f91752dcba(e, "color"), r);
    s.color = f == null ? 0 : Number(f);
    let l = this._rd7acc35d5f9e9a(this._r98d0f91752dcba(e, "blend"), r);
    s.blend = l == null ? 4294967295 : Number(l);
    let b = this._r98d0f91752dcba(e, "scale");
    b != null &&
      ((s.scaleH = this.slice(
        this._r79d821c37fbd45(this.getAttribute(b, "horizontal").toLowerCase(), r),
      )),
      (s.scaleV = this.slice(
        this._r79d821c37fbd45(this.getAttribute(b, "vertical").toLowerCase(), r),
      )));
    let _ = this._r75ebe917627d3c(e);
    return (
      _ != null &&
        (s.region = new D(
          Number(this._r79d821c37fbd45(this.getAttribute(_, "x"), r) || 0),
          Number(this._r79d821c37fbd45(this.getAttribute(_, "y"), r) || 0),
          Number(this._r79d821c37fbd45(this.getAttribute(_, "width"), r) || 0),
          Number(this._r79d821c37fbd45(this.getAttribute(_, "height"), r) || 0),
        )),
      s
    );
  }
  static _r56ddce7e8dea7f(e, r, t) {
    for (let i of r) e.addChild(this.parseLayoutEntity(i, t));
  }
  static parseTemplateList(e, r, t, i, s) {
    for (let o of this.getChildren(r, "template")) {
      let d = this._r79d821c37fbd45(this.getAttribute(o, "name"), i),
        c = this._r79d821c37fbd45(this.getAttribute(o, "asset"), i),
        f = s.getAssetByName(c);
      f == null && c.length > 0;
      let l = new BitmapSkinTemplate(d, f),
        b = this._r98d0f91752dcba(o, "entities");
      (b != null && this.parseTemplateEntityList(l, this.getChildren(b, "entity"), i),
        t.set(d, l),
        e._reab99009cac91b(l));
    }
  }
  static parseTemplateEntityList(e, r, t) {
    for (let i of r) {
      let s = this._r79d821c37fbd45(this.getAttribute(i, "name"), t),
        o = this._r79d821c37fbd45(this.getAttribute(i, "type"), t),
        d = Number(this._r79d821c37fbd45(this.getAttribute(i, "id"), t) || 0),
        c = this._r75ebe917627d3c(i),
        f =
          c == null
            ? new D()
            : new D(
                Number(this._r79d821c37fbd45(this.getAttribute(c, "x"), t) || 0),
                Number(this._r79d821c37fbd45(this.getAttribute(c, "y"), t) || 0),
                Number(this._r79d821c37fbd45(this.getAttribute(c, "width"), t) || 0),
                Number(this._r79d821c37fbd45(this.getAttribute(c, "height"), t) || 0),
              );
      e.addChild(new _i7acefcacdff357(s, o, d, f));
    }
  }
  static _r4c56951c6e9425(e, r, t, i) {
    let s = this._r79d821c37fbd45(this.getAttribute(r, "name"), i),
      o = this._r79d821c37fbd45(this.getAttribute(r, "layout"), i),
      d = this._r79d821c37fbd45(this.getAttribute(r, "template"), i);
    if ((t.get(o) ?? null) == null) throw new Error(`State ${s} has invalid layout reference ${o}!`);
    let f = this._rfccda107529b65(s);
    (e._r01b58893e17fee(f, o), e._rcad3f6816ba1d0(f, d));
  }
  static parseRenderStateList(e, r, t, i) {
    for (let s of this.getChildren(r, "state")) this._r4c56951c6e9425(e, s, t, i);
  }
  static _r539158edd29622(e) {
    let r = new Map();
    if (e == null) return r;
    let t = this.getChildren(e, "variable");
    if (t.length === 0) return r;
    let i = new B();
    class_3122._r49e6f06a45fc47(t, i);
    for (let s of i.getKeys()) {
      let o = i.getValue(s);
      r.set(s, o);
    }
    return r;
  }
  static _rbe2b5d9bd19f79(e, r) {
    let t = this._r2de4077bf0631e(r);
    if (t != null && t.tagName === "states") return t;
    if (t != null) {
      let i = this._r98d0f91752dcba(t, "states");
      if (i != null) return i;
    }
    return this._r98d0f91752dcba(e, "states");
  }
  static _rfccda107529b65(e) {
    switch (e) {
      case a.WINDOW_STATE_ACTIVE:
        return class_1948.WINDOW_STATE_ACTIVE;
      case a.WINDOW_STATE_DEFAULT:
        return class_1948.WINDOW_STATE_DEFAULT;
      case a.const_138:
        return class_1948.const_138;
      case a.const_117:
        return class_1948.const_117;
      case a.WINDOW_STATE_HOVERING:
        return class_1948.WINDOW_STATE_HOVERING;
      case a.const_92:
        return class_1948.const_92;
      case a.const_130:
        return class_1948.const_130;
      case a.const_115:
        return class_1948.const_115;
      default:
        throw new Error(`Unknown window state: "${e}"!`);
    }
  }
  static slice(e) {
    switch (e) {
      case "move":
        return Ji._r87aebea4b0c9b6;
      case "strech":
        return Ji.SCALE_TYPE_STRECH;
      case "tiled":
        return Ji.SCALE_TYPE_TILED;
      case "center":
        return Ji.SCALE_TYPE_CENTER;
      case "fixed":
      default:
        return Ji._r264712cf719eec;
    }
  }
  static _r79d821c37fbd45(e, r) {
    return e.startsWith("$") ? String(r.get(e.slice(1)) ?? "") : e;
  }
  static _rd7acc35d5f9e9a(e, r) {
    if (e == null) return null;
    let t = e.textContent?.trim() ?? "";
    return t.length === 0 ? null : this._r79d821c37fbd45(t, r);
  }
  static getAttribute(e, r) {
    return e.getAttribute(r) ?? "";
  }
  static getChildren(e, r) {
    return Array.from(e.children).filter((t) => t.tagName === r);
  }
  static _r98d0f91752dcba(e, r) {
    return this.getChildren(e, r)[0] ?? null;
  }
  static _r75ebe917627d3c(e) {
    let r = this._r98d0f91752dcba(e, "region");
    return r == null ? null : this._r98d0f91752dcba(r, "Rectangle");
  }
  static _r2de4077bf0631e(e) {
    return e instanceof yi
      ? e.toDomElement()
      : e instanceof _if56d7fe9b9f681
        ? e.toDomElements()[0]
        : e instanceof Element
          ? e
          : e instanceof Document
            ? e.documentElement
            : typeof e == "string"
              ? new DOMParser().parseFromString(e, "text/xml").documentElement
              : Array.isArray(e)
                ? e.find((t) => t instanceof Element)
                : e != null && typeof e == "object" && "length" in e
                  ? Array.from(e).find((t) => t instanceof Element)
                  : null;
  }
}
