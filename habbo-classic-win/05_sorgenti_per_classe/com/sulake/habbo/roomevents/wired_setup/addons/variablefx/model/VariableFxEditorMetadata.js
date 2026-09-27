// Estratto da HabboAirLauncher.deobf.js, riga 353189.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/model/VariableFxEditorMetadata.as
// Nome offuscato: _ibfea6fa7e85ad3

class {
  static {
    n(this, "VariableFxEditorMetadata");
  }
  static _categories = null;
  static _r0965e8b4af4e87 = [];
  static _renderers = [];
  static _r90c3eb7fad06e5 = [];
  static getCategory(e) {
    return (this.initialize(), this._categories[e] ?? this._categories[_i3b0b1a104db30e._r8b993a26237d31]);
  }
  static _r2c86baf9826707(e) {
    return e !== _i3b0b1a104db30e._r09950f0f2ac684 && e !== _i3b0b1a104db30e._r45eac009b1fbcb;
  }
  static _r2159f56ed7777f(e) {
    return this.categoryHasStyleMatching(e, (r) => r._r3c25c370b61ff4);
  }
  static _rfed13d1167aa77(e) {
    return this.categoryHasStyleMatching(e, (r) => r._r76a41c508a28aa);
  }
  static _rf79b16d5b16e3f(e) {
    return this.categoryHasStyleMatching(e, (r) => r._re6aa00e50ca8fd);
  }
  static _rfff590a0147589(e) {
    return this.categoryHasStyleMatching(e, (r) => r.extra.hasKey("sub_renderer"));
  }
  static _r8cfd0d19c0fd2b(e) {
    return this.categoryHasStyleMatching(e, (r) => r._rb36bfb3876ce51);
  }
  static _r401f337eef3d7f(e) {
    return this.categoryHasStyleMatching(e, (r) => {
      if (r.extra.hasKey("sub_renderer")) return !0;
      for (let t of r.rendererOptions) if (this.rendererSupportsSegments(t.id)) return !0;
      return this.rendererSupportsSegments(r.defaultRenderer.id);
    });
  }
  static rendererSupportsSegments(e) {
    return e === class_2881.BLOCK_PROGRESS_ID || e === class_2881.ARROW_PROGRESS_ID || e === class_2881.THERMOMETER_HEALTH_POINTS_ID;
  }
  static getColor(e) {
    return (this.initialize(), this._rf8c0f7b79bd33e(e));
  }
  static _rfa7a1a1fdeb97e(e) {
    return (this.initialize(), this._rf1fecdc9b5e7cc(e));
  }
  static _rabc00691f33c37(e) {
    return (this.initialize(), this._re8deb16e5abe92(e));
  }
  static _r15f8ad460b1ea3(e) {
    return (
      this.initialize(),
      e.extra.hasKey("sub_renderer")
        ? e.defaultRenderer.id === class_2881.const_1180
          ? [
              this._rabc00691f33c37(class_2881.BLOCK_PROGRESS_ID),
              this._rabc00691f33c37(class_2881.STRIPED_PROGRESS_ID),
              this._rabc00691f33c37(class_2881.ARROW_PROGRESS_ID),
            ]
          : [this._rabc00691f33c37(Number(e.extra.getValue("sub_renderer")) | 0)]
        : []
    );
  }
  static optionIn(e, r, t) {
    for (let i of e) if (i.id === r) return i;
    return t;
  }
  static categoryHasStyleMatching(e, r) {
    for (let t of this.getCategory(e).styles) if (r(t)) return !0;
    return !1;
  }
  static initialize() {
    this._categories == null &&
      (this.initializeColors(), this.initializeWidths(), this.initializeRenderers(), this.initializeCategories());
  }
  static initializeColors() {
    this._r0965e8b4af4e87 = [];
    for (let e of _i3b0b1a104db30e._rcad5aad2dbe1fe()) this.addColor(e);
  }
  static initializeWidths() {
    this._r90c3eb7fad06e5 = [];
    for (let e of _i3b0b1a104db30e._r423462f1426420()) this.addWidth(e);
  }
  static initializeRenderers() {
    this._renderers = [];
    for (let e of _i3b0b1a104db30e._r3743c31bb2773e()) this.addRenderer(e);
  }
  static initializeCategories() {
    this._categories = [];
    for (let e of _i3b0b1a104db30e._r3258853d89c51d()) this.addCategory(e);
  }
  static addCategory(e) {
    let r = class_2043.getByCategoryId(e),
      t = [],
      i = r.length === 0 ? "" : r[0].category;
    for (let s of r) t.push(this.styleFromPreviewDefinition(s));
    this._categories[e] = new VariableFxCategoryDefinition(e, i, t);
  }
  static styleFromPreviewDefinition(e) {
    let r = this.colorByRuntimeValue(e.defaultColor),
      t = this.widthByRuntimeValue(e.defaultWidth),
      i = this.rendererByRuntimeValue(e.defaultRenderer);
    return new VariableFxStyleDefinition(
      e.var_780,
      `wiredfurni.params.variablefx.style.${this.localizationCategory(e.category)}.${e.var_780}`,
      e.defaultRenderer,
      this.colorOptions(e.allowedColors),
      this.widthOptions(e.allowedWidths),
      this.rendererOptions(e.allowedRenderers),
      r ?? this._rf8c0f7b79bd33e(_i3b0b1a104db30e._r5a9e777e5dc9ee(class_3649.NOT_APPLICABLE)),
      t ?? this._rf1fecdc9b5e7cc(_i3b0b1a104db30e._r66b57669726ccd(VariableFxWidth.NOT_APPLICABLE)),
      i ?? this._re8deb16e5abe92(class_2881.CLASSIC_PROGRESS_ID),
      this._r473675ecf1c088(e._r70f16077a78975),
      this._r473675ecf1c088(e._radcbdacfc8a881),
      this._rb36bfb3876ce51(e),
    );
  }
  static localizationCategory(e) {
    return e;
  }
  static _rb36bfb3876ce51(e) {
    return e.categoryId === _i3b0b1a104db30e._r45eac009b1fbcb;
  }
  static colorOptions(e) {
    let r = [];
    for (let t of e) {
      let i = this.colorByRuntimeValue(t);
      i != null && r.push(i);
    }
    return r;
  }
  static widthOptions(e) {
    let r = [];
    for (let t of e) {
      let i = this.widthByRuntimeValue(t);
      i != null && r.push(i);
    }
    return r;
  }
  static rendererOptions(e) {
    let r = [];
    for (let t of e) {
      let i = this.rendererByRuntimeValue(t);
      i != null && r.push(i);
    }
    return r;
  }
  static _r473675ecf1c088(e) {
    return e == null ? new B() : e.clone();
  }
  static addColor(e) {
    this._r0965e8b4af4e87[e] = new VariableFxOption(e, `wiredfurni.params.variablefx.color.${e}`, _i3b0b1a104db30e._ra532a30dcc3450(e));
  }
  static addWidth(e) {
    this._r90c3eb7fad06e5[e] = new VariableFxOption(e, `wiredfurni.params.variablefx.width.${e}`, _i3b0b1a104db30e._rdd4e5a7f936bb0(e));
  }
  static addRenderer(e) {
    this._renderers[e] = new VariableFxOption(
      e,
      `wiredfurni.params.variablefx.renderer.${e}`,
      _i3b0b1a104db30e._r28e293e1c3737e(e),
    );
  }
  static colorByRuntimeValue(e) {
    let r = this._rf8c0f7b79bd33e(_i3b0b1a104db30e._r5a9e777e5dc9ee(e));
    return r.runtimeValue === e ? r : null;
  }
  static widthByRuntimeValue(e) {
    let r = this._rf1fecdc9b5e7cc(_i3b0b1a104db30e._r66b57669726ccd(e));
    return r.runtimeValue === e ? r : null;
  }
  static rendererByRuntimeValue(e) {
    let r = this._re8deb16e5abe92(_i3b0b1a104db30e._r8a2fb1cbf62267(e));
    return r.runtimeValue === e ? r : null;
  }
  static _rf8c0f7b79bd33e(e) {
    return this._r0965e8b4af4e87[e] ?? this._r0965e8b4af4e87[_i3b0b1a104db30e._r5a9e777e5dc9ee(class_3649.NOT_APPLICABLE)];
  }
  static _rf1fecdc9b5e7cc(e) {
    return this._r90c3eb7fad06e5[e] ?? this._r90c3eb7fad06e5[_i3b0b1a104db30e._r66b57669726ccd(VariableFxWidth.NOT_APPLICABLE)];
  }
  static _re8deb16e5abe92(e) {
    return this._renderers[e] ?? this._renderers[class_2881.CLASSIC_PROGRESS_ID];
  }
}
