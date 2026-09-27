// Extracted from HabboAirLauncher.deobf.js, line 339946.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/nux/NuxOfferOldUserView.as
// Obfuscated name: _ief27c0efcbe509

class {
  static {
    n(this, "NuxOfferOldUserView");
  }
  _frame = null;
  var_82;
  constructor(e) {
    ((this.var_82 = e), this.show());
  }
  dispose() {
    (this._frame?.dispose(), (this._frame = null), (this.var_82 = null));
  }
  hide() {
    this.var_82?._r523c87ecb4d389();
  }
  show() {
    if (this._frame != null) return;
    let e = this.var_82?.assets.getAssetByName("nux_offer_old_user_xml");
    if (((this._frame = this.var_82?.windowManager.buildFromXML(e?.content)), this._frame == null))
      throw new Error("Failed to construct window from XML!");
    this._frame.center();
    let r = this._frame.findChildByTag("close"),
      t = this._frame.findChildByName("btnSkip"),
      i = this._frame.findChildByName("btnGo");
    (r != null && (r.visible = !1),
      t?.addEventListener(u.CLICK, this.onReject),
      i?.addEventListener(u.CLICK, this._r9b5c37381dd410));
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r9b5c37381dd410 = n((e) => {
    (this.var_82?._r9b5c37381dd410(), this.hide());
  }, "_r9b5c37381dd410");
  onReject = n((e) => {
    this.var_82?.onReject();
  }, "onReject");
}
