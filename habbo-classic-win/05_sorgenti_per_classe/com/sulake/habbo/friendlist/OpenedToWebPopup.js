// Extracted from HabboAirLauncher.deobf.js, line 216064.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/OpenedToWebPopup.as
// Obfuscated name: _ib23a6197e97189

class {
  static {
    n(this, "OpenedToWebPopup");
  }
  _friendList;
  var_725 = null;
  var_382 = null;
  constructor(e) {
    this._friendList = e;
  }
  show(e, r) {
    (this.var_725 != null && this.close(null),
      (this.var_725 = this.getOpenedToWebAlert()),
      this.var_382?.stop(),
      (this.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(2e3, 1)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this.close.bind(this)),
      this.var_382.start(),
      (this.var_725.x = e),
      (this.var_725.y = r));
  }
  close(e) {
    (this.var_725?.destroy(), (this.var_725 = null));
  }
  getOpenedToWebAlert() {
    let e = this._friendList.getXmlWindow("opened_to_web_popup");
    if (e == null) throw new Error("Missing opened_to_web_popup xml window.");
    return (this._friendList.refreshButton(e, "opened_to_web", !0, null, 0), e);
  }
}
