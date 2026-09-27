// Estratto da HabboAirLauncher.deobf.js, riga 190515.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/MadMoneyCatalogWidget.as
// Nome offuscato: _i12694e0b7ed736

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "MadMoneyCatalogWidget");
  }
  var_2223 = null;
  dispose() {
    (this.var_2223?.removeEventListener?.(u.CLICK, this.eventProc),
      (this.var_2223 = null),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? ((this.var_2223 = this.window?.findChildByName("ctlg_madmoney_button")), !0)
      : !1;
  }
  eventProc = n((r) => {
    this._catalog?.windowManager.alert(
      "TODO",
      "Fix in MadMoneyCatalogWidget.as",
      0,
      this._r035155686c0ed8,
    );
  }, "eventProc");
  _r035155686c0ed8 = n((r, t) => {
    r?.dispose();
  }, "_r035155686c0ed8");
}
