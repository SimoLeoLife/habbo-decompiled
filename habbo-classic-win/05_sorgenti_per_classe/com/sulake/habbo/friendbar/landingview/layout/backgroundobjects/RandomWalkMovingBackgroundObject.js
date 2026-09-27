// Estratto da HabboAirLauncher.deobf.js, riga 209490.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/RandomWalkMovingBackgroundObject.as
// Nome offuscato: _iacd2ef4dfaf876

class extends BackgroundObject {
  static {
    n(this, "RandomWalkMovingBackgroundObject");
  }
  var_3993;
  var_3995;
  var_5033;
  var_4577;
  var_2911;
  var_3020;
  var_3978;
  var_382 = 0;
  var_1886;
  var_1676;
  var_4301 = 0;
  var_3963 = 0;
  var_4599 = 0;
  var_4797 = 0;
  var_4008 = 0;
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s, !1);
    let o = s.split(";"),
      d = o[0] ?? "";
    ((this.var_3993 = Number(o[2] ?? 0)),
      (this.var_3995 = Number(o[3] ?? 0)),
      (this.var_2911 = Number(o[4] ?? 0)),
      (this.var_3020 = Number(o[5] ?? 0)),
      (this.var_5033 = Number(o[6] ?? 0)),
      (this.var_4577 = Number(o[7] ?? 0)),
      (this.var_3978 = Number(o[8] ?? 1)),
      (this.var_1886 = this.var_3993),
      (this.var_1676 = this.var_3995),
      this.sprite != null && (this.sprite.assetUri = `${i.getProperty("image.library.url")}${d}.png`));
  }
  update(e) {
    let r = this.sprite,
      t = this.window;
    if (r == null || t == null) return;
    ((this.var_382 += e),
      this.var_382 - this.var_4008 > this.var_3978 &&
        ((this.var_4599 = this.var_4301),
        (this.var_4797 = this.var_3963),
        (this.var_4301 = (Math.random() * 2 - 1) * this.var_5033),
        (this.var_3963 = (Math.random() * 2 - 1) * this.var_4577),
        (this.var_4008 = this.var_382)));
    let i = Number(this.var_382 - this.var_4008) / this.var_3978;
    ((this.var_1886 +=
      (e / 1e3) *
      (this.var_2911 + In.lerp(i, this.var_4599, this.var_4301))),
      (this.var_1676 +=
        (e / 1e3) *
        (this.var_3020 + In.lerp(i, this.var_4797, this.var_3963))),
      (r.x = this.var_1886),
      (r.y = this.var_1676),
      ((this.var_2911 > 0 && r.x > t.width) ||
        (this.var_2911 < 0 && r.x + r.width < 0) ||
        (this.var_3020 > 0 && r.y > t.height) ||
        (this.var_3020 < 0 && r.y + r.height < 0)) &&
        ((this.var_1886 = this.var_3993),
        (this.var_1676 = this.var_3995),
        this.events.dispatchEvent(new E0(this.id))));
  }
}
