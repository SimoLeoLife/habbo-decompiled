// Extracted from HabboAirLauncher.deobf.js, line 170445.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/FigureSetData.as
// Obfuscated name: _ic6e8c87bd9f047

class {
  static {
    n(this, "FigureSetData");
  }
  _palettes = new Map();
  _r92065478381431 = new Map();
  dispose() {}
  parse(e) {
    if (e == null) return !1;
    let r = _i98d0f91752dcba(e, "colors");
    for (let i of _ib5ee1bd09422e6(r, "palette")) this._palettes.set(i.getAttribute("id") ?? "", new class_2253(i));
    let t = _i98d0f91752dcba(e, "sets");
    for (let i of _ib5ee1bd09422e6(t, "settype")) this._r92065478381431.set(i.getAttribute("type") ?? "", new SetType(i));
    return !0;
  }
  _rc1baf5b2431737(e) {
    if (e == null) return;
    let r = _i98d0f91752dcba(e, "sets");
    for (let t of _ib5ee1bd09422e6(r, "settype")) {
      let i = t.getAttribute("type") ?? "",
        s = this._r92065478381431.get(i);
      s != null ? s.cleanUp(t) : this._r92065478381431.set(i, new SetType(t));
    }
    this._r2048f388de3bd3(e);
  }
  _r2048f388de3bd3(e) {
    if (e == null) return !1;
    let r = _i98d0f91752dcba(e, "colors");
    for (let i of _ib5ee1bd09422e6(r, "palette")) {
      let s = i.getAttribute("id") ?? "",
        o = this._palettes.get(s);
      o == null ? this._palettes.set(s, new class_2253(i)) : o.append(i);
    }
    let t = _i98d0f91752dcba(e, "sets");
    for (let i of _ib5ee1bd09422e6(t, "settype")) {
      let s = i.getAttribute("type") ?? "",
        o = this._r92065478381431.get(s);
      o == null ? this._r92065478381431.set(s, new SetType(i)) : o.append(i);
    }
    return !1;
  }
  _r19bcbb82e4be75(e, r) {
    let t = [];
    for (let i of this._r92065478381431.values()) i.isMandatory(e, r) && t.push(i.type);
    return t;
  }
  getDefaultPartSet(e, r) {
    return this._r92065478381431.get(e)?.getDefaultPartSet(r) ?? null;
  }
  getSetType(e) {
    return this._r92065478381431.get(e) ?? null;
  }
  getPalette(e) {
    return this._palettes.get(String(e)) ?? null;
  }
  _rd076350a4cba8e(e) {
    for (let r of this._r92065478381431.values()) {
      let t = r.getPartSet(e);
      if (t != null) return t;
    }
    return null;
  }
}
