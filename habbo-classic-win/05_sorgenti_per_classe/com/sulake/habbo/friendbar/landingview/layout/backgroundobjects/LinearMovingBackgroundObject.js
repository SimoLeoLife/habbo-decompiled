// Estratto da HabboAirLauncher.deobf.js, riga 209449.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/LinearMovingBackgroundObject.as
// Nome offuscato: _iab490f2c705391

class extends BackgroundObject {
  static {
    n(this, "LinearMovingBackgroundObject");
  }
  var_3993;
  var_3995;
  var_1886;
  var_1676;
  var_2911;
  var_3020;
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s);
    let o = s.split(";"),
      d = o[0] ?? "";
    ((this.var_3993 = Number(o[2] ?? 0)),
      (this.var_3995 = Number(o[3] ?? 0)),
      (this.var_2911 = Number(o[4] ?? 0)),
      (this.var_3020 = Number(o[5] ?? 0)),
      (this.var_1886 = this.var_3993),
      (this.var_1676 = this.var_3995),
      this.sprite != null &&
        (this.sprite.assetUri = `${i.getProperty("image.library.url")}reception/${d}.png`));
  }
  update(e) {
    let r = this.sprite,
      t = this.window;
    r == null ||
      t == null ||
      ((this.var_1886 += e * this.var_2911),
      (this.var_1676 += e * this.var_3020),
      (r.x = this.var_1886),
      (r.y = this.var_1676 + t.desktop.height),
      ((this.var_2911 > 0 && r.x > t.width) ||
        (this.var_2911 < 0 && r.x + r.width < 0) ||
        (this.var_3020 > 0 && r.y > t.height) ||
        (this.var_3020 < 0 && r.y + r.height < 0)) &&
        ((this.var_1886 = this.var_3993),
        (this.var_1676 = this.var_3995),
        this.events.dispatchEvent(new E0(this.id))));
  }
}
