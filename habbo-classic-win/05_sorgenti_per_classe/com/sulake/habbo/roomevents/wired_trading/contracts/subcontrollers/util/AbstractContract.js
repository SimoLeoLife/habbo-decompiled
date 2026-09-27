// Extracted from HabboAirLauncher.deobf.js, line 373666.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/contracts/subcontrollers/util/AbstractContract.as
// Obfuscated name: _id248c3e337ca31

class extends AbstractUbuntuWiredUI {
  static {
    n(this, "AbstractContract");
  }
  var_3115 = -1;
  var_1219;
  constructor(e, r) {
    (super(e._r41f5cc7d3516ce, r), (this.var_1219 = e));
  }
  get isBoundToParentRect() {
    return !0;
  }
  get contractId() {
    return this.var_3115;
  }
  set contractId(e) {
    this.var_3115 = e;
  }
  get getFloorItemData() {
    return this.var_1219;
  }
  _rf7f875b488f891 = n(() => {
    this.getFloorItemData.saveContract(this);
  }, "_rf7f875b488f891");
  hideFrame() {
    (this.isShowing() &&
      (this.getFloorItemData._rf76feb2f31d17e(this.window), this.getFloorItemData.addEditContractElement.hide()),
      super.hideFrame());
  }
  show(e) {
    ((this.contractId = e.contractId),
      (this._r43e1962e8d351e.saveButtonDisabled = !this._r41f5cc7d3516ce._rb3d0033404b557.hasWritePermission));
  }
  _r5219b66c580835() {
    return null;
  }
  addContentsToComposer(e) {
    (e.push(this.contractId),
      e.push(new Short(this._rfb746ff09ca5d8())),
      this._r5219b66c580835().addToComposer(e));
  }
  _rfb746ff09ca5d8() {
    return 0;
  }
  validate() {
    return null;
  }
  dispose() {
    this.disposed || ((this.var_1219 = null), super.dispose());
  }
}
