// Extracted from HabboAirLauncher.deobf.js, line 195464.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/SpecialInfoWidget.as
// Obfuscated name: _i6714d114740f39

class extends CatalogWidget {
  static {
    n(this, "SpecialInfoWidget");
  }
  constructor(e) {
    super(e);
  }
  init() {
    if (!super.init()) return !1;
    this._rd7318259311b4b(CatalogWidgetEnum.SPECIAL_INFO);
    let e = this._window?.findChildByName("ctlg_special_txt");
    return (
      e != null && (e.caption = ""),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      !0
    );
  }
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a), super.dispose());
  }
  _raaed999dcb0c8a = n((e) => {
    this._window != null && (this._window.visible = !1);
  }, "_raaed999dcb0c8a");
}
