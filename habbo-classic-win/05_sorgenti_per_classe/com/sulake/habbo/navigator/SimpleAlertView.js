// Extracted from HabboAirLauncher.deobf.js, line 216093.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/SimpleAlertView.as

class extends jm {
  static {
    n(this, "SimpleAlertView");
  }
  _text;
  constructor(e, r, t) {
    (super(e, "simple_alert", r), (this._text = t));
  }
  setupContent(e) {
    let r = e.findChildByName("body_text"),
      t = e.findChildByName("ok");
    (r != null && (r.text = this._text), t != null && (t.procedure = this._r29a9c14eb33b0e.bind(this)));
  }
  _r29a9c14eb33b0e(e, r) {
    e.type === u.CLICK && this.dispose();
  }
}
