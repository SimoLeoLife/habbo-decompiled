// Estratto da HabboAirLauncher.deobf.js, riga 212520.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/utils/TextCropper.as
// Nome offuscato: _ia137f6f7ac7e48

class {
  static {
    n(this, "TextCropper");
  }
  _disposed = !1;
  var_73;
  var_5910 = "...";
  var_5929 = 20;
  constructor() {
    ((this.var_73 = new Pt()),
      (this.var_73.autoSize = nr.const_27),
      (this.var_73.antiAliasType = ai.ADVANCED),
      (this.var_73.gridFitType = ad.PIXEL));
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || ((this.var_73 = null), (this._disposed = !0));
  }
  crop(e) {
    if (this.var_73 == null) return;
    let r = this.var_73.defaultTextFormat;
    if (
      ((r.font = e.fontFace),
      (r.size = e.fontSize),
      (r.bold = e.bold),
      (r.italic = e.italic),
      this.var_73._rf728d1a4d87da8(r),
      (this.var_73.text = e._r4020e8798d5842(0)),
      this.var_73.textWidth > e.width)
    ) {
      let t = this.var_73._r7b0201ad66b552(
        e.width - this.var_5929,
        this.var_73.textHeight / 2,
      );
      t >= 0 && (e.text = e.text.slice(0, t) + this.var_5910);
    }
  }
}
