// Estratto da HabboAirLauncher.deobf.js, riga 373546.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/subcontrollers/AddEditContractElement.as
// Nome offuscato: _id8342db3b3aac6

class a extends AbstractUbuntuWiredUI {
  static {
    n(this, "AddEditContractElement");
  }
  static MAX_COINS = 1e5;
  static MAX_FURNI = 500;
  var_1219;
  _r99d71368532deb;
  var_1477;
  furniDataForSelectedItem;
  _isEditMode = !1;
  _r3f96f511799ea5 = null;
  _r0bcc0e1cf22f51 = -1;
  constructor(e, r) {
    (super(e._r41f5cc7d3516ce, r),
      (this.var_1219 = e),
      (this._r99d71368532deb = r.createRadioGroup(
        [new RadioButtonParam(0, "${wiredcontracts.element.type.0}"), new RadioButtonParam(1, "${wiredcontracts.element.type.1}")],
        this._r7408a000ae45aa,
      )));
    let t = r.createSection("${wiredcontracts.element.type}", this._r99d71368532deb);
    this.var_1477 = r.createNumberInput(new NumberInputParam(1, 1, a.MAX_COINS, 80));
    let i = r.createSection("${wiredcontracts.element.amount}", this.var_1477),
      s = r._rce286bbba4c3cf([t, i]);
    ((this.furniDataForSelectedItem = r._r7969a36e82cc45()),
      (this.framePreset = r._r2c9ac233cf1a70(
        [s, this.furniDataForSelectedItem, this._r43e1962e8d351e],
        this._rf4d9b06810c6a7,
      )),
      this.framePreset.resizeToWidth(420));
  }
  get _r7ca22be67cc55c() {
    return !0;
  }
  get isBoundToParentRect() {
    return !0;
  }
  get _r32af89215a7dfa() {
    return 375;
  }
  _r7408a000ae45aa = n((e) => {
    this.furniDataForSelectedItem.disabled = e !== xn.TYPE_FURNI;
  }, "_r7408a000ae45aa");
  set isEditMode(e) {
    ((this._isEditMode = e),
      (this.framePreset.title = this._isEditMode
        ? "${wiredcontracts.edit_element.title}"
        : "${wiredcontracts.add_element.title}"));
  }
  onEdit = n((e, r, t) => {
    ((this.isEditMode = !0),
      (this._r3f96f511799ea5 = e),
      (this._r0bcc0e1cf22f51 = r),
      (this._r43e1962e8d351e.saveButtonDisabled = !this._r41f5cc7d3516ce._rb3d0033404b557.hasWritePermission),
      this.furniDataForSelectedItem.resetInteractions(),
      (this.furniDataForSelectedItem.selectedItem = t.itemType),
      (this._r99d71368532deb.selected = t.type),
      (this.var_1477.value = t.amount),
      this._r7408a000ae45aa(t.type),
      this.showFrame());
  }, "onEdit");
  onAdd = n((e) => {
    ((this.isEditMode = !1),
      (this._r3f96f511799ea5 = e),
      (this._r0bcc0e1cf22f51 = -1),
      (this._r43e1962e8d351e.saveButtonDisabled = !this._r41f5cc7d3516ce._rb3d0033404b557.hasWritePermission),
      this.furniDataForSelectedItem.resetInteractions(),
      (this.furniDataForSelectedItem.selectedItem = null),
      (this._r99d71368532deb.selected = xn.TYPE_COIN),
      (this.var_1477.value = 1),
      this._r7408a000ae45aa(xn.TYPE_COIN),
      this.showFrame());
  }, "onAdd");
  createNode() {
    return new xn(
      this._r99d71368532deb.selected,
      this.var_1477.value,
      this._r99d71368532deb.selected === xn.TYPE_FURNI ? this.furniDataForSelectedItem.selectedItem : null,
    );
  }
  _rf7f875b488f891 = n(() => {
    let e = this.validate();
    if (e != null) {
      this._r41f5cc7d3516ce.windowManager.alert("${wiredfurni.error.title}", e, 0, null);
      return;
    }
    (this._isEditMode
      ? this._r3f96f511799ea5._r8108d595195cb1(this._r0bcc0e1cf22f51, this.createNode())
      : this._r3f96f511799ea5.addNode(this.createNode()),
      (this._r3f96f511799ea5 = null),
      (this._r0bcc0e1cf22f51 = -1),
      this.hideFrame());
  }, "_rf7f875b488f891");
  validate() {
    if (
      this._r99d71368532deb.selected === xn.TYPE_FURNI &&
      this.var_1477.value > a.MAX_FURNI
    )
      return this.localization.getLocalizationWithParams(
        "wiredcontracts.element.too_many_items",
        "",
        "amount",
        `${a.MAX_FURNI}`,
      );
    if (this._r99d71368532deb.selected === xn.TYPE_FURNI) {
      let e = this.furniDataForSelectedItem.var_868;
      if (e == null || !e.tradeable) return "${wiredcontracts.element.item_not_allowed}";
    }
    return null;
  }
  dispose() {
    this.disposed ||
      ((this._r99d71368532deb = null),
      (this.var_1477 = null),
      (this.furniDataForSelectedItem = null),
      (this._r3f96f511799ea5 = null),
      (this.var_1219 = null),
      super.dispose());
  }
}
