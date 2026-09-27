// Estratto da HabboAirLauncher.deobf.js, riga 68167.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/LoadingIcon.as
// Nome offuscato: _i889e6606531734

class a {
  static {
    n(this, "LoadingIcon");
  }
  static FRAMES = [23, 24, 25, 26];
  var_382;
  _icon = null;
  _r248a78105f6018 = 0;
  constructor() {
    ((this.var_382 = new _i05394ecc0c0c4d(160)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._r6e1f79baf49df4));
  }
  dispose() {
    (this.var_382 != null &&
      (this.var_382.removeEventListener(DeBouncer.addEventListener, this._r6e1f79baf49df4),
      this.var_382.stop(),
      (this.var_382 = null)),
      (this._icon = null));
  }
  get disposed() {
    return this.var_382 == null;
  }
  setVisible(e, r) {
    ((this._icon = e),
      this._icon != null &&
        ((this._icon.visible = r),
        r
          ? ((this._icon.style = a.FRAMES[this._r248a78105f6018] ?? 0),
            this.var_382?.start())
          : this.var_382?.stop()));
  }
  _rfebc8d2c863560 = n((e) => {
    this._icon != null &&
      (this._r248a78105f6018++,
      this._r248a78105f6018 >= a.FRAMES.length && (this._r248a78105f6018 = 0),
      (this._icon.style = a.FRAMES[this._r248a78105f6018] ?? 0));
  }, "_rfebc8d2c863560");
  _r6e1f79baf49df4 = n((...e) => {
    this._rfebc8d2c863560(e[0]);
  }, "_r6e1f79baf49df4");
}
