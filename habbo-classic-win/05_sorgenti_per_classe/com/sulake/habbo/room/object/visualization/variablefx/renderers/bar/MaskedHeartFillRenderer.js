// Estratto da HabboAirLauncher.deobf.js, riga 287260.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/MaskedHeartFillRenderer.as

class a extends hb {
  static {
    n(this, "MaskedHeartFillRenderer");
  }
  static _r64a128b17ab4cc = {
    background: "variablefx_masked_heart_fill_background",
    bar: "variablefx_masked_heart_fill_bar",
    darkening: "variablefx_masked_heart_fill_darkening",
    _r3569e80ecbe147: "variablefx_masked_heart_fill_darkening_metallic",
    _r86b9a074980637: "variablefx_masked_heart_fill_end_pointer",
    lighting: "variablefx_masked_heart_fill_lighting",
    _r6506a0a6675498: "variablefx_masked_heart_fill_lighting_metallic",
    mask: "variablefx_masked_heart_fill_mask",
    metallic: "variablefx_masked_heart_fill_metallic",
  };
  var_663;
  constructor(e) {
    (super(e), (this.var_663 = class_3376.getOrCreate(e.config, () => this.createPrebake())));
  }
  get frameWidth() {
    return this.var_663.frameWidth;
  }
  get frameHeight() {
    return this.var_663.frameHeight;
  }
  get progressPixelWidth() {
    return this.var_663.progressPixelWidth;
  }
  createFrameBitmap(e, r) {
    return new A(e, r, !0, 0);
  }
  renderFrame(e) {
    let r = this._rbac222daf2632a.bitmapData;
    if (r != null) {
      r.lock();
      try {
        new Tt(r).drawLayer(
          this.var_663._rdbb21d643e0f1f(this._r26a058940f9f41, this._lastRenderedPixelWidth()),
          0,
          0,
          ie.NORMAL,
          255,
        );
      } finally {
        r.unlock();
      }
    }
  }
  createPrebake() {
    return new lwe(
      this.resolveAssets(
        class_3649._r0826336a1ed27b(this.context.config.color, this.context.config.extra)._rdc05eda693c910,
      ),
    );
  }
  resolveAssets(e) {
    let r = a._r64a128b17ab4cc,
      t = this.getLayer(e ? r._r3569e80ecbe147 : r.darkening),
      i = this.getLayer(e ? r._r6506a0a6675498 : r.lighting);
    return {
      background: this.getLayer(r.background),
      bar: this.getLayer(r.bar),
      _r86b9a074980637: this.getLayer(r._r86b9a074980637),
      mask: this.getLayer(r.mask),
      metallic: e ? this.getLayer(r.metallic) : null,
      overlays: [
        { blendMode: ie.MULTIPLY, layer: t },
        { blendMode: ie.ADD, layer: i },
      ],
    };
  }
  getLayer(e) {
    let r = this.context.assetProvider?._r198ea9f0f21815(e);
    if (r == null) throw new Error("Missing Variable FX masked heart fill layer '" + e + "'.");
    return r;
  }
}
