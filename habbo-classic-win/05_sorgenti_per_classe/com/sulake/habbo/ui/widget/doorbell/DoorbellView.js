// Extracted from HabboAirLauncher.deobf.js, line 313528.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/doorbell/DoorbellView.as
// Obfuscated name: _iaa0ffb9723fcea

class {
  static {
    n(this, "DoorbellView");
  }
  _rfe0221cd85ad5f;
  _frame = null;
  var_122 = null;
  constructor(e) {
    this._rfe0221cd85ad5f = e;
  }
  dispose() {
    ((this.var_122 = null),
      (this._rfe0221cd85ad5f = null),
      this._frame?.dispose(),
      (this._frame = null));
  }
  update() {
    if ((this._rfe0221cd85ad5f?.users.length ?? 0) === 0) {
      this.hide();
      return;
    }
    if (
      (this._frame == null && this.createMainWindow(),
      this._frame != null &&
        ((this._frame.visible = !0), this.var_122 != null && this._rfe0221cd85ad5f != null))
    ) {
      this.var_122.destroyListItems();
      for (let e = 0; e < this._rfe0221cd85ad5f.users.length; e++)
        this.var_122.addListItem(this.createListItem(this._rfe0221cd85ad5f.users[e], e));
    }
  }
  get mainWindow() {
    return this._frame;
  }
  createListItem(e, r) {
    let t = this._rfe0221cd85ad5f?.assets?.getAssetByName("doorbell_list_entry"),
      i = this._rfe0221cd85ad5f?.windowManager?.buildFromXML(t?.content);
    if (i == null) throw new Error("Failed to construct window from XML!");
    let s = i.findChildByName("user_name");
    (s != null && (s.caption = e), (i.name = e), r % 2 === 0 && (i.color = 4294967295));
    let o = i.findChildByName("accept");
    return (
      o?.addEventListener(u.CLICK, this.onButtonClicked),
      (o = i.findChildByName("deny")),
      o?.addEventListener(u.CLICK, this.onButtonClicked),
      i
    );
  }
  hide() {
    (this._frame?.dispose(), (this._frame = null), (this.var_122 = null));
  }
  createMainWindow() {
    if (this._frame != null) return;
    let e = this._rfe0221cd85ad5f?.assets?.getAssetByName("doorbell");
    if (((this._frame = this._rfe0221cd85ad5f?.windowManager?.buildFromXML(e?.content)), this._frame == null))
      throw new Error("Failed to construct window from XML!");
    ((this.var_122 = this._frame.findChildByName("user_list")), (this._frame.visible = !1));
    let r = this._frame.findChildByTag("close");
    r?.addEventListener(u.CLICK, this.onClose);
  }
  onClose = n((e) => {
    this._rfe0221cd85ad5f?.denyAll();
  }, "onClose");
  onButtonClicked = n((e) => {
    let r = e.window;
    if (r == null) return;
    let t = r.parent?.name ?? "";
    switch (r.name) {
      case "accept":
        this._rfe0221cd85ad5f?.accept(t);
        break;
      case "deny":
        this._rfe0221cd85ad5f?.deny(t);
        break;
    }
  }, "onButtonClicked");
}
