// Estratto da HabboAirLauncher.deobf.js, riga 289675.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/number/NumberDisplayRendererBase.as
// Nome offuscato: _i6efbc504472990

class {
  static {
    n(this, "NumberDisplayRendererBase");
  }
  _rf796e766be8392 = null;
  _r37488543afd048;
  var_4256 = {};
  _rcbebc9526bcd7e;
  _frame = new _i5ec3143bd5c7df();
  _icon;
  var_4642;
  var_3292 = "";
  constructor(e, r) {
    ((this._r37488543afd048 = r),
      (this._rcbebc9526bcd7e = this.normalizeDisplayValue(e.status.value)),
      (this._icon = Ns.resolve(e)),
      (this.var_4642 = Ns.resolveAlignment(e)));
    for (let t of r.digits) this.var_4256[t.value] = t;
  }
  get frame() {
    return this._frame;
  }
  get isContinuous() {
    return !1;
  }
  updateData(e, r) {
    ((this._rcbebc9526bcd7e = this.normalizeDisplayValue(e.status.value)), this._r1d380e008b0c4f(e, r));
  }
  needsUpdate(e) {
    return (
      this._frame.bitmapData == null ||
      this._rcbebc9526bcd7e !== this.var_3292 ||
      this.needsRendererUpdate()
    );
  }
  update(e) {
    return this.needsUpdate(e)
      ? (this.ensureFrameBitmap(),
        this.renderFrame(),
        (this.var_3292 = this._rcbebc9526bcd7e),
        this.calculateFilledPixelWidth(),
        this._frame.updateId++,
        !0)
      : !1;
  }
  dispose() {
    this._frame._r14564fee3a9aa6();
  }
  get composer() {
    if (this._rf796e766be8392 == null)
      throw new Error("Variable FX number display composer is only available while rendering.");
    return this._rf796e766be8392;
  }
  get _r2e102a5d3539e0() {
    return this._r37488543afd048._r2e102a5d3539e0 | 0;
  }
  get _r3431a48c5cfd52() {
    return this._r37488543afd048._r3431a48c5cfd52 == null ? 0 : this._r37488543afd048._r3431a48c5cfd52 | 0;
  }
  drawDigit(e, r, t) {}
  _r1d380e008b0c4f(e, r) {}
  needsRendererUpdate() {
    return !1;
  }
  calculateFilledPixelWidth() {}
  _r137642eecec9fe() {
    return null;
  }
  _r8ddd22d2f37993() {
    return tX.resolve({
      alignment: this.var_4642,
      contentHeight: this.contentHeight,
      contentWidth: this.contentWidth,
      _r9f78194ed5fe8a: this._r37488543afd048._r473d221aaa099d | 0,
      _r1ee47a9fd26e90: this._icon == null ? 0 : this._icon.bitmapData.height,
      _rbeebc213ea8e11: 0,
      _r8556032d955352: 0,
      _r0e0e79c17c78c9: this._icon == null ? 0 : this._icon.bitmapData.width,
      _r022a5c6ff560a1: this._r37488543afd048._r5056930ad4f3d1 | 0,
    });
  }
  get contentWidth() {
    let e = 0,
      r = this.resolveDisplayDigits();
    for (let t = 0; t < r.length; t++) (t > 0 && (e += this._r3431a48c5cfd52), (e += r[t].width | 0));
    return Math.max(0, e);
  }
  get contentHeight() {
    return this._r37488543afd048._r2e102a5d3539e0 | 0;
  }
  ensureFrameBitmap() {
    let e = this._r8ddd22d2f37993();
    if (
      this._frame.bitmapData != null &&
      this._frame.width === e.frameWidth &&
      this._frame.height === e.frameHeight
    )
      return;
    this._frame._r14564fee3a9aa6();
    let r = new A(e.frameWidth, e.frameHeight, !0, 0);
    ((this._frame.bitmapData = r),
      (this._frame.nativeTexture = null),
      (this._frame.width = r.width),
      (this._frame.height = r.height),
      (this.var_3292 = ""));
  }
  renderFrame() {
    let e = this._frame.bitmapData;
    if (e == null) return;
    let r = this._r8ddd22d2f37993();
    e.lock();
    try {
      ((this._rf796e766be8392 = new Tt(e)),
        this._rf796e766be8392.clear(0),
        this._r2c14b728097523(r.var_140, r.var_178),
        this._r4ad4044b373456(r));
    } finally {
      ((this._rf796e766be8392 = null), e.unlock());
    }
  }
  _r2c14b728097523(e, r) {
    let t = e;
    for (let i of this.resolveDisplayDigits())
      (this.drawDigit(i, t, r), (t += (i.width | 0) + this._r3431a48c5cfd52));
  }
  _r4ad4044b373456(e) {
    if (this._icon != null)
      for (let r of e.var_1907)
        this.composer.drawLayer(this._icon.bitmapData, r.x, r.y, ie.NORMAL, 255);
  }
  resolveDisplayDigits() {
    let e = [];
    for (let r = 0; r < this._rcbebc9526bcd7e.length; r++)
      e.push(this._r9959f1bc28cd2f(this._rcbebc9526bcd7e.charAt(r)));
    return e;
  }
  _r9959f1bc28cd2f(e) {
    let r = this.var_4256[e];
    if (r == null) throw new Error("Missing Variable FX number display digit '" + e + "'.");
    return r;
  }
  normalizeDisplayValue(e) {
    return Number.isFinite(e) ? String(e | 0) : "0";
  }
}
