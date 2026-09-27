// Estratto da HabboAirLauncher.deobf.js, riga 362198.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/model/class_4348.as
// Nome offuscato: _i9024f2460f2748

class a {
  static {
    n(this, "class_4348");
  }
  categoryId = 0;
  sourceType = 0;
  visibility = 0;
  _r09ab560170f112 = 0;
  var_620 = 0;
  _rb94727c3b64fc3 = !1;
  showDuration = 0;
  styleId = 0;
  _r5b3d4f00714e69 = 0;
  var_954 = 0;
  rendererId = 0;
  _r528f4963a1a948 = 0;
  _r5e470edbfdddac = 0;
  _r16a3bcde5cd330 = !1;
  _r8e06fbd9c71180 = !1;
  overrideMinTarget = 0;
  overrideMaxTarget = 0;
  segments = 0;
  _r57e125b612fc29 = 0;
  var_1226 = 0;
  icon = null;
  overrideMinVariableId = null;
  overrideMaxVariableId = null;
  _r1093f559e954fa = null;
  _rfcfc5eaf98a6f8 = 0;
  sanitize() {
    (this.sourceType !== Ve.var_64 &&
      this.sourceType !== Ve.USER_SOURCE &&
      (this.sourceType = Ve.USER_SOURCE),
      (this.visibility < class_4330.ONLY_USER || this.visibility > class_4330.const_445) &&
        (this.visibility = class_4330.const_120),
      (this._r09ab560170f112 < _ic0d82f49e1914d.ALWAYS || this._r09ab560170f112 > _ic0d82f49e1914d.NEVER) &&
        (this._r09ab560170f112 = _ic0d82f49e1914d.ALWAYS),
      this.sourceType === Ve.var_64 &&
        this.visibility !== class_4330.name_11 &&
        this.visibility !== class_4330.const_445 &&
        (this.visibility = class_4330.const_120),
      this._r1093f559e954fa == null && (this._r1093f559e954fa = ""),
      this.visibility !== class_4330.name_11 &&
        this.visibility !== class_4330.const_445 &&
        ((this._r1093f559e954fa = ""), (this._rfcfc5eaf98a6f8 = 0)),
      (this.var_620 = a.clamp(this.var_620, 0, 15)),
      (this.showDuration = a.clamp(this.showDuration, 1500, 2e4)));
    let e = VariableFxEditorMetadata.getCategory(this.categoryId);
    this.categoryId = e.id;
    let r = e._r22c9347ecec607(this.styleId);
    if (
      ((this.styleId = r.id),
      (this._r5b3d4f00714e69 = VariableFxEditorMetadata.optionIn(
        r.colorOptions,
        this._r5b3d4f00714e69,
        r.defaultColor,
      ).id),
      (this.var_954 = VariableFxEditorMetadata.optionIn(
        r.widthOptions,
        this.var_954,
        r.defaultWidth,
      ).id),
      (this.rendererId = VariableFxEditorMetadata.optionIn(
        r.rendererOptions,
        this.rendererId,
        r.defaultRenderer,
      ).id),
      this.categoryId === _i3b0b1a104db30e._r09950f0f2ac684)
    ) {
      ((this._r528f4963a1a948 = 0), (this._r5e470edbfdddac = 100));
      let t = VariableFxEditorMetadata._r15f8ad460b1ea3(r);
      this._r57e125b612fc29 = VariableFxEditorMetadata.optionIn(t, this._r57e125b612fc29, t[0]).id;
    } else
      VariableFxEditorMetadata._r2c86baf9826707(this.categoryId) &&
        this._r5e470edbfdddac <= this._r528f4963a1a948 &&
        (this._r5e470edbfdddac = this._r528f4963a1a948 < 100 ? 100 : (this._r528f4963a1a948 + 1) | 0);
    ((this.overrideMinTarget = this.sanitizeOverrideTarget(this.overrideMinTarget)),
      (this.overrideMaxTarget = this.sanitizeOverrideTarget(this.overrideMaxTarget)),
      (this.segments = a.clamp(this.segments, 0, 100)),
      VariableFxEditorMetadata.rendererSupportsSegments(this.segmentRendererId) || (this.segments = 0),
      (this.var_1226 =
        this.categoryId === _i3b0b1a104db30e._r45eac009b1fbcb
          ? a.sanitizeIconAlignment(this.var_1226)
          : class_4355.const_27),
      this.icon == null && (this.icon = ""),
      this.overrideMinVariableId == null && (this.overrideMinVariableId = ""),
      this.overrideMaxVariableId == null && (this.overrideMaxVariableId = ""));
  }
  currentStyle() {
    return VariableFxEditorMetadata.getCategory(this.categoryId)._r22c9347ecec607(this.styleId);
  }
  toRuntimeConfig() {
    let e = VariableFxEditorMetadata.getCategory(this.categoryId),
      r = this.currentStyle(),
      t = VariableFxEditorMetadata.optionIn(r.colorOptions, this._r5b3d4f00714e69, r.defaultColor),
      i = VariableFxEditorMetadata.optionIn(r.widthOptions, this.var_954, r.defaultWidth),
      s = VariableFxEditorMetadata.optionIn(r.rendererOptions, this.rendererId, r.defaultRenderer),
      o = a.copyExtra(r.extra);
    return (
      this.segments > 0 && o.setProperty("segments", this.segments),
      this.categoryId === _i3b0b1a104db30e._r09950f0f2ac684
        ? o.setProperty("sub_renderer", this._r57e125b612fc29)
        : this.categoryId === _i3b0b1a104db30e._r45eac009b1fbcb &&
          (this.icon.length > 0 && o.setProperty("icon", this.icon),
          o.setProperty("icon_alignment", a.iconAlignmentRuntimeValue(this.var_1226))),
      new G1(
        e.runtimeCategory,
        r.runtimeStyle,
        s.runtimeValue,
        i.runtimeValue,
        t.runtimeValue,
        this._r528f4963a1a948,
        this._r5e470edbfdddac,
        o,
        e.id,
        this.styleId,
        this.rendererId,
      )
    );
  }
  get segmentRendererId() {
    return this.categoryId === _i3b0b1a104db30e._r09950f0f2ac684 && this.rendererId === class_2881.const_1180
      ? this._r57e125b612fc29
      : this.rendererId;
  }
  sanitizeOverrideTarget(e) {
    return e === VariableExtraSourceTypes.GLOBAL_SOURCE ? VariableExtraSourceTypes.GLOBAL_SOURCE : this.sourceType;
  }
  static sanitizeIconAlignment(e) {
    switch (e) {
      case class_4355.RIGHT:
      case class_4355.DOUBLE:
        return e;
      default:
        return class_4355.const_27;
    }
  }
  static iconAlignmentRuntimeValue(e) {
    switch (this.sanitizeIconAlignment(e)) {
      case class_4355.RIGHT:
        return "right";
      case class_4355.DOUBLE:
        return "double";
      default:
        return "left";
    }
  }
  static copyExtra(e) {
    let r = new B();
    if (e == null) return r;
    for (let t of e.getKeys()) r.setProperty(t, e.getValue(t));
    return r;
  }
  static clamp(e, r, t) {
    return Math.max(r, Math.min(t, e)) | 0;
  }
}
