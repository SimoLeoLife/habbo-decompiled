// Extracted from HabboAirLauncher.deobf.js, line 182803.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/VipBenefitsWindow.as
// Obfuscated name: _i2021392b2ee590

class {
  static {
    n(this, "VipBenefitsWindow");
  }
  _disposed = !1;
  _window = null;
  constructor(e) {
    ((this._window = e.utils.createWindow("vip_benefits")),
      this._window
        ?.findChildByName("header_button_close")
        ?.addEventListener(u.CLICK, this.onClose),
      this._window?.center());
  }
  dispose() {
    (this._disposed || (this._window?.dispose(), (this._window = null)),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  onClose = n(() => {
    this.dispose();
  }, "onClose");
}
