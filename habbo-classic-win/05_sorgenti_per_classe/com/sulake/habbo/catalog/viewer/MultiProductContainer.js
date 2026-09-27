// Extracted from HabboAirLauncher.deobf.js, line 172401.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/MultiProductContainer.as
// Obfuscated name: _i6eadf1b3cf5c76

class extends SingleProductContainer {
  static {
    n(this, "MultiProductContainer");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  initProductIcon(e, r = null) {
    super.initProductIcon(e, r);
    let t = this._view?.findChildByName("multiContainer");
    t != null && (t.visible = !0);
    let i = this._view?.findChildByName("multiCounter");
    (i != null && this._r7149a15797e48f != null && (i.text = `x${this._r7149a15797e48f.productCount}`),
      this.setClubIconLevel(this.offer.clubLevel));
  }
}
