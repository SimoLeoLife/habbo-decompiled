// Estratto da HabboAirLauncher.deobf.js, riga 225559.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GroupCreatedWindowCtrl.as
// Nome offuscato: _i10de3d6b342844

class {
  static {
    n(this, "GroupCreatedWindowCtrl");
  }
  var_41;
  _window = null;
  _groupId = 0;
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
    ((this._groupId = e),
      this.prepareWindow(),
      (this._window.visible = !0),
      this._window.activate());
  }
  close() {
    this._window != null && (this._window.visible = !1);
  }
  prepareWindow() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("group_created_window")),
      this._window != null &&
        ((this._window.findChildByTag("close").procedure = this.onClose),
        (this._window.findChildByName("ok_button").procedure = this.onClose),
        this._window.center()));
  }
  onClose = n((e, r) => {
    e.type === u.CLICK && (this.close(), this.var_41?.send(new _i494540f04bf21d(this._groupId, !1)));
  }, "onClose");
}
