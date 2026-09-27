// Extracted from HabboAirLauncher.deobf.js, line 339916.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/nux/NuxNoobRoomOfferView.as
// Obfuscated name: _i73d1d6187e7005

class {
  static {
    n(this, "NuxNoobRoomOfferView");
  }
  _frame = null;
  var_82;
  constructor(e) {
    ((this.var_82 = e), this.show());
  }
  dispose() {
    (this._frame?.dispose(), (this._frame = null), (this.var_82 = null));
  }
  show() {
    if (this._frame != null) return;
    let e = this.var_82?.assets.getAssetByName("nux_noob_room_offer_xml");
    if (((this._frame = this.var_82?.windowManager.buildFromXML(e?.content)), this._frame == null))
      throw new Error("Failed to construct window from XML!");
    ((this._frame.x = 20), (this._frame.y = 20));
    let r = this._frame.findChildByName("btnGo"),
      t = this._frame.findChildByTag("close");
    (r?.addEventListener(u.CLICK, this._r3824f1a65d5d3b),
      t?.addEventListener(u.CLICK, this.onClose));
  }
  _r3824f1a65d5d3b = n((e) => {
    this.var_82?.context._r6b6c989018eb05("navigator/goto/predefined_noob_lobby");
  }, "_r3824f1a65d5d3b");
  onClose = n((e) => {
    this.var_82?.destroyNoobRoomOfferView();
  }, "onClose");
}
