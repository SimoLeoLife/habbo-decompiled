// Estratto da HabboAirLauncher.deobf.js, riga 252716.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/SimpleAlertView.as

class extends Zm {
  constructor(r, t, i) {
    super(r, "nav_simple_alert", t);
    this._text = i;
  }
  static {
    n(this, "SimpleAlertView");
  }
  setupAlertWindow(r) {
    let t = r.content,
      i = t?.findChildByName("body_text"),
      s = t?.findChildByName("ok");
    (i != null && (i.text = this._text),
      s?.addEventListener(u.CLICK, this._r29a9c14eb33b0e),
      r.tags.push("SimpleAlertView"));
  }
  _r29a9c14eb33b0e = n((r) => {
    this.dispose();
  }, "_r29a9c14eb33b0e");
}
