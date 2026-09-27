// Extracted from HabboAirLauncher.deobf.js, line 251631.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/ClubPromoAlertView.as

class extends Zm {
  constructor(r, t, i, s) {
    super(r, "nav_promo_alert", t);
    this._text = i;
    this.var_4655 = s;
  }
  static {
    n(this, "ClubPromoAlertView");
  }
  setupAlertWindow(r) {
    let t = r.content,
      i = t?.findChildByName("ok"),
      s = t?.findChildByName("promo_container"),
      o = t?.findChildByName("body_text"),
      d = t?.findChildByName("promo_text");
    (o != null && (o.caption = this._text),
      d != null && (d.caption = this.var_4655),
      i?.addEventListener(u.CLICK, this._r29a9c14eb33b0e),
      s?.addEventListener(u.CLICK, this._rf4efc704bd0c3a));
  }
  _r29a9c14eb33b0e = n((r) => {
    this.dispose();
  }, "_r29a9c14eb33b0e");
  _rf4efc704bd0c3a = n((r) => {
    (this.navigator?._r2a0df8adec219d("ClubPromoAlertView"), this.dispose());
  }, "_rf4efc704bd0c3a");
}
