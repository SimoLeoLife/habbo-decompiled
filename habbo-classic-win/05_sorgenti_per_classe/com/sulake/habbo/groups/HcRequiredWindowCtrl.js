// Estratto da HabboAirLauncher.deobf.js, riga 227558.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/HcRequiredWindowCtrl.as

class {
  static {
    n(this, "HcRequiredWindowCtrl");
  }
  var_41;
  _window = null;
  constructor(e) {
    this.var_41 = e;
  }
  dispose() {
    ((this.var_41 = null), this._window?.dispose(), (this._window = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  show(e) {
    (this.prepareWindow(),
      this._window != null &&
        ((this._window.findChildByName("info_txt").caption = e
          ? "${group.hcrequired.info.manage}"
          : "${group.hcrequired.info.join}"),
        (this._window.visible = !0),
        this._window.activate()));
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  prepareWindow() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("club_required")),
      this._window != null &&
        ((this._window.findChildByTag("close").procedure = this.onClose),
        (this._window.findChildByName("cancel_link_region").procedure = this.onClose),
        (this._window.findChildByName("join_button").procedure = this._ra1015793c78198),
        (this._window.findChildByName("more_info_link_region").procedure = this._ra1015793c78198),
        this._window.center()));
  }
  onClose = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "onClose");
  _ra1015793c78198 = n((e, r) => {
    e.type === u.CLICK && (this.var_41?._rb6435b5d818fc5("HcRequiredWindowCtrl"), this.close());
  }, "_ra1015793c78198");
}
