// Extracted from HabboAirLauncher.deobf.js, line 224556.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/ColorGridCtrl.as
// Obfuscated name: _i5165dd008e74fb

class {
  static {
    n(this, "ColorGridCtrl");
  }
  var_41;
  _rff4774da36f15f = null;
  _parentCallback;
  _rff818fd189c771 = null;
  _r33078bc5f13e99 = null;
  _availableColors = -1;
  var_2443 = null;
  var_798 = null;
  var_2398 = null;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_41 = e), (this._parentCallback = r));
  }
  get _r4c047a67fec73a() {
    return this._availableColors;
  }
  get isInitialized() {
    return this._rff818fd189c771 != null && this._r33078bc5f13e99 != null;
  }
  dispose() {
    this._disposed ||
      (this._r33078bc5f13e99?._rbb4c26d068856f(),
      (this._r33078bc5f13e99 = null),
      this.var_798?.dispose(),
      (this.var_798 = null),
      this.var_2398?.dispose(),
      (this.var_2398 = null),
      this.var_2443?.dispose(),
      (this.var_2443 = null),
      (this.var_41 = null),
      (this._rff4774da36f15f = null),
      (this._parentCallback = null),
      (this._rff818fd189c771 = null),
      (this._disposed = !0));
  }
  createAndAttach(e, r, t) {
    if (
      !(this._r33078bc5f13e99 != null || e == null || r == null || t == null) &&
      ((this._rff4774da36f15f = e),
      (this._rff818fd189c771 = t),
      (this._r33078bc5f13e99 = this._rff4774da36f15f.findChildByName(r)),
      (this.var_798 = this.getBitmap("color_chooser_bg")),
      (this.var_2398 = this.getBitmap("color_chooser_fg")),
      (this.var_2443 = this.getBitmap("color_chooser_selected")),
      !(
        this._r33078bc5f13e99 == null ||
        this.var_798 == null ||
        this.var_2398 == null ||
        this.var_2443 == null
      ))
    )
      for (let i of this._rff818fd189c771) {
        let s = this.var_41?.getXmlWindow("badge_color_item");
        s != null &&
          ((s.procedure = (o, d) => {
            this.onClick(o, d);
          }),
          (s.background = !0),
          (s.color = 4290689957),
          (s.width = this.var_798.width),
          (s.height = this.var_798.height),
          this.setGridItemBitmap(s, "background", this.var_798, !0, null),
          this.setGridItemBitmap(s, "foreground", this.var_2398, !0, i),
          this.setGridItemBitmap(s, "selected", this.var_2443, !1, null),
          this._r33078bc5f13e99.addGridItem(s));
      }
  }
  _r8cff1a329eacf8(e, r = !0) {
    (e < 0 && (e = 0),
      this._r33078bc5f13e99 != null &&
        this._availableColors !== e &&
        e < this._r33078bc5f13e99._r72acf104e2c444 &&
        (this.setSelectedItemVisibility(this._availableColors, !1),
        (this._availableColors = e),
        this.setSelectedItemVisibility(this._availableColors, !0)),
      r && this._parentCallback != null && this._parentCallback(this));
  }
  _r9dd080819cbc78(e) {
    if (!(!this.isInitialized || this._rff818fd189c771 == null)) {
      for (let r = 0; r < this._rff818fd189c771.length; r++)
        if (this._rff818fd189c771[r].id === e) {
          this._r8cff1a329eacf8(r);
          return;
        }
      this._r8cff1a329eacf8(0);
    }
  }
  _r4e3e2dbfcb6022() {
    return this.getSelectedColorData()?.id ?? 0;
  }
  getSelectedColorData() {
    return this._rff818fd189c771 != null &&
      this._availableColors >= 0 &&
      this._availableColors < this._rff818fd189c771.length
      ? this._rff818fd189c771[this._availableColors]
      : null;
  }
  setGridItemBitmap(e, r, t, i, s) {
    let o = e.findChildByName(r);
    if (o == null) return;
    let d = t.clone();
    (s != null && d.colorTransform(d.rect, new UnkClass_4210dc(s.red / 255, s.green / 255, s.blue / 255)),
      (o.bitmap = d),
      (o.visible = i));
  }
  getBitmap(e) {
    let t = this.var_41?.assets.getAssetByName(e)?.content;
    if (t != null) return t;
    throw new Error(`Failed to load bitmap asset ${e} in ColorGridCtrl`);
  }
  setSelectedItemVisibility(e, r) {
    if (this._r33078bc5f13e99 == null || e < 0 || e >= this._r33078bc5f13e99._r72acf104e2c444) return;
    let i = this._r33078bc5f13e99.getGridItemAt(e)?.findChildByName("selected");
    i != null && (i.visible = r);
  }
  onClick(e, r) {
    e.type !== u.CLICK ||
      this._r33078bc5f13e99 == null ||
      this._r8cff1a329eacf8(this._r33078bc5f13e99._r76bcf89cad2fb2(r));
  }
}
