// Extracted from HabboAirLauncher.deobf.js, line 68977.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/animation/Transitions.as
// Obfuscated name: _id2a264f92bac15

class a {
  static {
    n(this, "Transitions");
  }
  static EASE_IN = "easeIn";
  static EASE_IN_BACK = "easeInBack";
  static const_963 = "easeInBounce";
  static const_1182 = "easeInElastic";
  static const_1203 = "easeInOut";
  static EASE_IN_OUT_BACK = "easeInOutBack";
  static const_404 = "easeInOutBounce";
  static const_1238 = "easeInOutElastic";
  static const_701 = "easeOut";
  static EASE_OUT_BACK = "easeOutBack";
  static const_1268 = "easeOutBounce";
  static const_1400 = "easeOutElastic";
  static EASE_OUT_IN = "easeOutIn";
  static EASE_OUT_IN_BACK = "easeOutInBack";
  static const_1135 = "easeOutInBounce";
  static const_408 = "easeOutInElastic";
  static LINEAR = "linear";
  static var_2773 = null;
  constructor(...e) {}
  static getTransition(e) {
    return (a.var_2773 == null && a.registerDefaults(), a.var_2773?.get(e) ?? null);
  }
  static register(e, r) {
    (a.var_2773 == null && a.registerDefaults(), a.var_2773?.set(e, r));
  }
  static registerDefaults() {
    ((a.var_2773 = new Map()),
      a.register(a.LINEAR, a.linear),
      a.register(a.EASE_IN, a.easeIn),
      a.register(a.const_701, a.easeOut),
      a.register(a.const_1203, a.easeInOut),
      a.register(a.EASE_OUT_IN, a.easeOutIn),
      a.register(a.EASE_IN_BACK, a.easeInBack),
      a.register(a.EASE_OUT_BACK, a.easeOutBack),
      a.register(a.EASE_IN_OUT_BACK, a.easeInOutBack),
      a.register(a.EASE_OUT_IN_BACK, a.easeOutInBack),
      a.register(a.const_1182, a.easeInElastic),
      a.register(a.const_1400, a.easeOutElastic),
      a.register(a.const_1238, a.easeInOutElastic),
      a.register(a.const_408, a.easeOutInElastic),
      a.register(a.const_963, a.easeInBounce),
      a.register(a.const_1268, a.easeOutBounce),
      a.register(a.const_404, a.easeInOutBounce),
      a.register(a.const_1135, a.easeOutInBounce));
  }
  static linear(e) {
    return e;
  }
  static easeIn(e) {
    return e * e * e;
  }
  static easeOut(e) {
    let r = e - 1;
    return r * r * r + 1;
  }
  static easeInOut(e) {
    return a.easeCombined(a.easeIn, a.easeOut, e);
  }
  static easeOutIn(e) {
    return a.easeCombined(a.easeOut, a.easeIn, e);
  }
  static easeInBack(e) {
    return Math.pow(e, 2) * ((1.70158 + 1) * e - 1.70158);
  }
  static easeOutBack(e) {
    let r = e - 1,
      t = 1.70158;
    return Math.pow(r, 2) * ((t + 1) * r + t) + 1;
  }
  static easeInOutBack(e) {
    return a.easeCombined(a.easeInBack, a.easeOutBack, e);
  }
  static easeOutInBack(e) {
    return a.easeCombined(a.easeOutBack, a.easeInBack, e);
  }
  static easeInElastic(e) {
    if (e === 0 || e === 1) return e;
    let r = 0.3,
      t = r / 4,
      i = e - 1;
    return -1 * Math.pow(2, 10 * i) * Math.sin(((i - t) * (2 * Math.PI)) / r);
  }
  static easeOutElastic(e) {
    if (e === 0 || e === 1) return e;
    let r = 0.3,
      t = r / 4;
    return Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1;
  }
  static easeInOutElastic(e) {
    return a.easeCombined(a.easeInElastic, a.easeOutElastic, e);
  }
  static easeOutInElastic(e) {
    return a.easeCombined(a.easeOutElastic, a.easeInElastic, e);
  }
  static easeInBounce(e) {
    return 1 - a.easeOutBounce(1 - e);
  }
  static easeOutBounce(e) {
    let i;
    return (
      e < 1 / 2.75
        ? (i = 7.5625 * Math.pow(e, 2))
        : e < 2 / 2.75
          ? ((e -= 1.5 / 2.75), (i = 7.5625 * Math.pow(e, 2) + 0.75))
          : e < 2.5 / 2.75
            ? ((e -= 2.25 / 2.75), (i = 7.5625 * Math.pow(e, 2) + 0.9375))
            : ((e -= 2.625 / 2.75), (i = 7.5625 * Math.pow(e, 2) + 0.984375)),
      i
    );
  }
  static easeInOutBounce(e) {
    return a.easeCombined(a.easeInBounce, a.easeOutBounce, e);
  }
  static easeOutInBounce(e) {
    return a.easeCombined(a.easeOutBounce, a.easeInBounce, e);
  }
  static easeCombined(e, r, t) {
    return t < 0.5 ? 0.5 * e(t * 2) : 0.5 * r((t - 0.5) * 2) + 0.5;
  }
}
