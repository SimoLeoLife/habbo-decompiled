// Extracted from HabboAirLauncher.deobf.js, line 224931.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/DetailsWindowCtrl.as
// Obfuscated name: _i28734a9d5c49c7

class {
  static {
    n(this, "DetailsWindowCtrl");
  }
  var_41;
  _window = null;
  _r996e23578aa456;
  _groupId = 0;
  constructor(e) {
    ((this.var_41 = e), (this._r996e23578aa456 = new GroupDetailsCtrl(e, !0)));
  }
  dispose() {
    ((this.var_41 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r996e23578aa456?.dispose(),
      (this._r996e23578aa456 = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  _rcf529a562e59a6(e) {
    return this._window != null && this._window.visible && e === this._groupId;
  }
  onGroupDetails(e) {
    if (
      (this._window != null &&
        this._window.visible &&
        e.groupId === this._groupId) ||
      e.openDetails
    ) {
      ((this._groupId = e.groupId), this.prepareWindow());
      let r = this._window?.findChildByName("group_cont");
      if (r == null) return;
      (this._r996e23578aa456?.onGroupDetails(r, e),
        e.openDetails &&
          this._window != null &&
          ((this._window.visible = !0), this._window.activate()));
    }
  }
  close() {
    this._window != null && ((this._groupId = 0), (this._window.visible = !1));
  }
  _r954fcb6b6be7bb(e) {
    this._groupId === e && this.close();
  }
  prepareWindow() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("group_info_window")),
      this._window != null &&
        ((this._window.findChildByTag("close").procedure = this.onClose),
        this._window.center()));
  }
  onClose = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "onClose");
}
