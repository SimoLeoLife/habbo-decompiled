// Estratto da HabboAirLauncher.deobf.js, riga 355374.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/misc/SelfDonationToolView.as
// Nome offuscato: _i483021024ebfe7

class a extends AbstractUbuntuWiredUI {
  static {
    n(this, "SelfDonationToolView");
  }
  static MAX_AMOUNT = 500;
  var_63;
  var_1477;
  furniDataForSelectedItem;
  constructor(e, r) {
    (super(e._r41f5cc7d3516ce, r),
      (this.var_63 = e),
      (this.var_1477 = r.createNumberInput(new NumberInputParam(1, 1, a.MAX_AMOUNT, 80))));
    let t = r.createSection(
      this.localization.getLocalization("selfdonation.amount", "Amount"),
      this.var_1477,
    );
    ((this.furniDataForSelectedItem = r._r7969a36e82cc45()),
      (this._r43e1962e8d351e._r594bb92813d0d5 = this.localization.getLocalization(
        "selfdonation.donate",
        "Donate",
      )),
      (this._r43e1962e8d351e.splitterVisible = !0));
    let i = r.createSimpleListView(!0, [t, this.furniDataForSelectedItem, this._r43e1962e8d351e]);
    ((this.framePreset = r._r2c9ac233cf1a70([i], this._rf4d9b06810c6a7)),
      this.framePreset.resizeToWidth(420),
      (this.framePreset.title = this.localization.getLocalization(
        "selfdonation.title",
        "Sandbox donation tool",
      )));
  }
  get isBoundToParentRect() {
    return !0;
  }
  _ra34ad69490b004() {
    ((this.var_1477.value = 1), this.furniDataForSelectedItem.resetInteractions(), this.showFrame());
  }
  _rf7f875b488f891 = n(() => {
    this.var_63.onDonate(
      this.furniDataForSelectedItem.selectedItem,
      this.var_1477.value,
    );
  }, "_rf7f875b488f891");
  dispose() {
    this.disposed ||
      ((this.var_63 = null),
      (this.var_1477 = null),
      (this.furniDataForSelectedItem = null),
      super.dispose());
  }
}
