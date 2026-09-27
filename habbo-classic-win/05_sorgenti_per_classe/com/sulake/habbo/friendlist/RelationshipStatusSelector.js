// Estratto da HabboAirLauncher.deobf.js, riga 215520.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/RelationshipStatusSelector.as
// Nome offuscato: _ie359c5d6d7037d

class {
  static {
    n(this, "RelationshipStatusSelector");
  }
  _friendList;
  _window = null;
  var_2605 = 0;
  _disposed = !1;
  constructor(e) {
    ((this._friendList = e), this.createWindow());
  }
  dispose() {
    this._disposed || (this.destroyWindow(), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  appearAt(e, r) {
    let t = new E();
    (e.getGlobalPosition(t),
      this._window != null &&
        ((this._window.x = t.x),
        (this._window.y = t.y),
        (this._window.visible = !0),
        this._window.activate()));
  }
  _rd6e3f4c29ef0ec() {
    this._window != null && (this._window.visible = !1);
  }
  set friendId(e) {
    this.var_2605 = e;
  }
  createWindow() {
    let r = this._friendList.assets.getAssetByName("relationship_chooser_xml")?.content;
    if (r == null) throw new Error("Missing relationship_chooser_xml asset.");
    ((this._window = this._friendList.windowManager.buildFromXML(r)),
      this._window != null &&
        ((this._window.procedure = this.onWindowEvent.bind(this)),
        (this._window.visible = !1)));
  }
  destroyWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  onWindowEvent(e, r) {
    if (this._window != null) {
      if (e.type === u.CLICK) {
        switch (r.name) {
          case "item_none":
            this._friendList._rb0baadd15ced86(this.var_2605, en.NONE);
            break;
          case "item_heart":
            this._friendList._rb0baadd15ced86(this.var_2605, en.const_522);
            break;
          case "item_smile":
            this._friendList._rb0baadd15ced86(this.var_2605, en.SMILE);
            break;
          case "item_bobba":
            this._friendList._rb0baadd15ced86(this.var_2605, en.BOBBA);
            break;
        }
        this._window.visible = !1;
      }
      e.type === y.const_1200 && (this._window.visible = !1);
    }
  }
}
