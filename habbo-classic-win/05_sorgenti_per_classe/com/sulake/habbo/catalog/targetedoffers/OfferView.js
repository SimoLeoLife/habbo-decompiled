// Estratto da HabboAirLauncher.deobf.js, riga 187405.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/OfferView.as
// Nome offuscato: _i56dc057a89e7eb

class {
  constructor(e, r) {
    this.var_63 = e;
    this._offer = r;
  }
  static {
    n(this, "OfferView");
  }
  _window = null;
  _r65a67a0bca4899 = null;
  _disposed = !1;
  _r713b7abae09edb = "";
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r65a67a0bca4899 != null &&
        (this._r65a67a0bca4899.stop(),
        this._r65a67a0bca4899.removeEventListener(DeBouncer.addEventListener, this._r74a888e08bca64),
        (this._r65a67a0bca4899 = null)),
      this._window?.dispose(),
      (this._window = null));
  }
  _ra50b20a2cf6128() {
    ((this._r65a67a0bca4899 = new _i05394ecc0c0c4d(1e3)),
      this._r65a67a0bca4899.addEventListener(DeBouncer.addEventListener, this._r74a888e08bca64),
      this._r65a67a0bca4899.start(),
      this._r617c6259dff1dd());
  }
  _r617c6259dff1dd() {
    this._offer != null &&
      (this.setTimeLeft(
        class_4096.getStringFromSeconds(
          this.var_63?.catalog.localization ?? null,
          this._offer._r7d6d7b98de2508(),
        ),
      ),
      this._offer._r7d6d7b98de2508() === 0 && this.var_63?._r4b29951ea6f2a9());
  }
  setTimeLeft(e) {
    let r = this._window?.findChildByName("txt_time_left");
    r != null && (r.text = this._r713b7abae09edb !== "" ? this._r713b7abae09edb.replace("%timeleft%", e) : e);
  }
  getLocalization(e, r = null) {
    let t = this.var_63?.catalog.localization?.getLocalization(e, r ?? e) ?? r ?? e;
    return (
      this._offer != null &&
        (t = t.replace("%itemsleft%", String(this._offer._r12cb3a063dbb1e))),
      t
    );
  }
  _r74a888e08bca64 = n((e) => {
    this._r617c6259dff1dd();
  }, "_r74a888e08bca64");
}
