// Extracted from HabboAirLauncher.deobf.js, line 256611.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/EnforceCategoryCtrl.as
// Obfuscated name: _i7eab44859f4902

class {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "EnforceCategoryCtrl");
  }
  _window = null;
  var_408 = null;
  _r4ec286ff6f66f4 = 0;
  _r6dae881ca72323 = 0;
  _rcf1ca8d4fbf34d = [];
  show(e) {
    if (this._navigator == null) return;
    this.close();
    let r = this._navigator.assets.getAssetByName("enforce_category_xml")?.content;
    if (
      r == null ||
      ((this.var_408 = this._navigator.windowManager.buildModalDialogFromXML(r)),
      (this._window = this.var_408?.rootWindow),
      this._window == null)
    )
      return;
    ((this._window.procedure = this.windowProcedure),
      this._window.center(),
      (this._window.findChildByName("header_button_close").visible = !1));
    let t = this._window.findChildByName("trade_mode");
    (t?.populate([
      "${navigator.roomsettings.trade_not_allowed}",
      "${navigator.roomsettings.trade_not_with_Controller}",
      "${navigator.roomsettings.trade_allowed}",
    ]),
      t != null && (t.selection = 0));
    let i = this._window.findChildByName("category");
    this._rcf1ca8d4fbf34d = [];
    for (let s of this._navigator.data._r9da3e74587beda)
      !s.automatic &&
        (!s._r342f9f99356a01 || this._navigator.sessionData.hasSecurity(class_1794.COMMUNITY)) &&
        this._rcf1ca8d4fbf34d.push(s);
    (i?.populate(this._rcf1ca8d4fbf34d.map((s) => s.visibleName)), i != null && (i.selection = 0));
  }
  close() {
    (this.var_408?.dispose(), (this.var_408 = null), (this._window = null));
  }
  windowProcedure = n((e, r) => {
    if (this._navigator != null) {
      if (e.type === u.CLICK) {
        if (r.name === "ok") {
          let t = this._rcf1ca8d4fbf34d[Math.max(0, this._r4ec286ff6f66f4)] ?? null;
          (t != null &&
            this._navigator.communication.connection.send(
              new class_2690(this._navigator.data._ra9e7830c65d383, t.nodeId, this._r6dae881ca72323),
            ),
            this.close());
        }
        return;
      }
      if (e.type === y.const_238)
        switch (r.name) {
          case "category":
            this._r4ec286ff6f66f4 = r.selection;
            break;
          case "trade_mode":
            this._r6dae881ca72323 = r.selection;
            break;
        }
    }
  }, "windowProcedure");
}
