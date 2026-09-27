// Estratto da HabboAirLauncher.deobf.js, riga 69610.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/animation/TweenUtils.as
// Nome offuscato: _i5672e43f0a0bfe

class a {
  static {
    n(this, "TweenUtils");
  }
  static FAST_ALPHA_TWEEN_TIME = 0.2;
  static REALLY_SLOW_ALPHA_TWEEN_TIME = 1.2;
  static SLOW_ALPHA_TWEEN_TIME_DOUBLE = 0.8;
  static _rb423dd3ece0d47 = 0.4;
  static _r96ffd5ade4b01c = 0.4;
  static _r37a6225fd4ea8a = new $C();
  static _r6256376a0df260(e, r, t, i = "linear") {
    e.alpha = 0;
    let s = new Db(e, t, i);
    return (s.animate("alpha", 1), (s.delay = r), a._r37a6225fd4ea8a.add(s), s);
  }
  static _r246de598110e65(e, r, t, i = "linear") {
    e.alpha = 1;
    let s = new Db(e, t, i);
    return (s.animate("alpha", 0), (s.delay = r), a._r37a6225fd4ea8a.add(s), s);
  }
  static alphaTweenBlink(e, r, t) {
    e.alpha = 0;
    let i = new Db(e, t, N2.EASE_OUT_BACK);
    return (i.animate("alpha", 0.4), (i.delay = r), a._r37a6225fd4ea8a.add(i), i);
  }
}
