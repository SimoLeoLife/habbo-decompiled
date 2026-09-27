// Extracted from HabboAirLauncher.deobf.js, line 141155.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1c1300b68af165

class a {
  static {
    n(this, "UnkClass_1c1300");
  }
  static _rbc1aa1c9d30e56 = new B();
  static var_325 = new a();
  static onTextStyleChanged = n((...e) => {
    for (let r of this._rbc1aa1c9d30e56.getValues()) r.dispose();
    this._rbc1aa1c9d30e56.reset();
  }, "onTextStyleChanged");
  _disposed = !1;
  constructor() {
    a.var_325 == null && class_3390.events.addEventListener?.(M._ra3d93f66ba77c2, a.onTextStyleChanged);
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    class_3390.events.removeEventListener?.(M._ra3d93f66ba77c2, a.onTextStyleChanged);
    for (let e of a._rbc1aa1c9d30e56.getValues()) e.dispose();
    (a._rbc1aa1c9d30e56.reset(), (a.var_325 = null), (this._disposed = !0));
  }
  static _rdeb03a341a147b(e) {
    if ((e == null && (e = class_3390._r22c9347ecec607(class_3390.REGULAR)), e == null)) return new Pt();
    let r = this._rbc1aa1c9d30e56.getValue(e.name) ?? null;
    if (r != null) return r;
    r = new Pt();
    let t = r.defaultTextFormat.clone();
    return (
      (t.font = e.fontFamily),
      (t.size = e.fontSize),
      (t.color = e.color),
      (t.bold = e.fontWeight === l2.BOLD ? !0 : null),
      (t.italic = e.fontStyle === l2.ITALIC ? !0 : null),
      (t.underline = e.textDecoration === Ia.const_81 ? !0 : null),
      (t.indent = e.textIndent),
      (t.leading = e.leading),
      (t.kerning = e.kerning),
      (t.letterSpacing = e.letterSpacing),
      (r.antiAliasType = e.antiAliasType === ai.NORMAL ? ai.NORMAL : ai.ADVANCED),
      (r.gridFitType = ad.PIXEL),
      (r.sharpness = e.sharpness ? Number(e.sharpness) : 0),
      (r.thickness = e.thickness ? Number(e.thickness) : 0),
      e.fontWeight || (t.bold = !1),
      e.fontStyle || (t.italic = !1),
      e.textDecoration || (t.underline = !1),
      e.textIndent || (t.indent = 0),
      e.leading || (t.leading = 0),
      e.kerning || (t.kerning = !1),
      e.letterSpacing || (t.letterSpacing = 0),
      e.antiAliasType || (r.antiAliasType = ai.ADVANCED),
      (r.autoSize = nr.const_27),
      r._rf728d1a4d87da8(t),
      (r.embedFonts = t.font != null ? UnkClass_97d37f._r39622b61201748(t.font) : !1),
      (r.defaultTextFormat = t),
      this._rbc1aa1c9d30e56.setProperty(e.name, r),
      r
    );
  }
  static getTextFieldByStyleName(e) {
    let r = class_3390._r22c9347ecec607(e);
    return r == null ? null : this._rdeb03a341a147b(r);
  }
}
