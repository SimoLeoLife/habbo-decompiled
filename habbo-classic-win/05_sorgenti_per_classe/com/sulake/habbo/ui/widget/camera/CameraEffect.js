// Estratto da HabboAirLauncher.deobf.js, riga 303581.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraEffect.as
// Nome offuscato: _i72f61517febd2b

class a {
  constructor(e, r, t, i, s = 0) {
    this.name = e;
    this.type = r;
    this.matrixArray = t;
    this._r1f60835f66e03b = i;
    this.var_5690 = s;
    this.description = a.var_161?.getLocalization(`camera.effect.name.${e}`, e) ?? e;
  }
  static {
    n(this, "CameraEffect");
  }
  static DEFAULT_EFFECT_STRENGTH = 0.5;
  static TYPE_COLORMATRIX = "colormatrix";
  static const_469 = "composite";
  static TYPE_FRAME = "frame";
  static var_660 = null;
  static _r8acdb6e0eabeb7 = [];
  static name_4 = 1;
  static var_161 = null;
  value = a.DEFAULT_EFFECT_STRENGTH * a.name_4;
  isOn = !1;
  button = null;
  description;
  static resetAllEffects() {
    for (let e of a.var_660?.getValues() ?? [])
      ((e.value = a.DEFAULT_EFFECT_STRENGTH * a.name_4), e.setChosen(!1));
  }
  static setMaxValue(e) {
    a.name_4 = e;
  }
  getEffectStrength() {
    return this.value / a.name_4;
  }
  _r137e4b9913349b() {
    return this.type === a.TYPE_FRAME;
  }
  _r2225d91ce95b74() {
    return this.type !== a.TYPE_FRAME;
  }
  static getEffects(e, r) {
    if (a.var_660 == null) {
      if (((a._r8acdb6e0eabeb7 = []), e != null))
        for (let t of e.split(",")) a._r8acdb6e0eabeb7.push(ua.trim(t));
      ((a.var_161 = r), a.initEffects());
    }
    return a.var_660;
  }
  static initEffects() {
    ((a.var_660 = new B()),
      a.addEffect(
        "dark_sepia",
        a.TYPE_COLORMATRIX,
        [0.4, 0.4, 0.1, 0, 110, 0.3, 0.4, 0.1, 0, 30, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 1, 0],
        null,
      ),
      a.addEffect(
        "increase_saturation",
        a.TYPE_COLORMATRIX,
        [2, -0.5, -0.5, 0, 0, -0.5, 2, -0.5, 0, 0, -0.5, -0.5, 2, 0, 0, 0, 0, 0, 1, 0],
        null,
      ),
      a.addEffect(
        "increase_contrast",
        a.TYPE_COLORMATRIX,
        [1.5, 0, 0, 0, -50, 0, 1.5, 0, 0, -50, 0, 0, 1.5, 0, -50, 0, 0, 0, 1.5, 0],
        null,
      ),
      a.addEffect("shadow_multiply_02", a.const_469, null, ie.MULTIPLY),
      a.addEffect(
        "color_1",
        a.TYPE_COLORMATRIX,
        [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0],
        null,
        1,
      ),
      a.addEffect(
        "hue_bright_sat",
        a.TYPE_COLORMATRIX,
        [1, 0.6, 0.2, 0, -50, 0.2, 1, 0.6, 0, -50, 0.6, 0.2, 1, 0, -50, 0, 0, 0, 1, 0],
        null,
        1,
      ),
      a.addEffect("hearts_hardlight_02", a.const_469, null, ie._r655bcbf040f824, 1),
      a.addEffect("texture_overlay", a.const_469, null, ie._r107d7b1bac2f9f, 1),
      a.addEffect("pinky_nrm", a.const_469, null, ie.NORMAL, 1),
      a.addEffect(
        "color_2",
        a.TYPE_COLORMATRIX,
        [0.333, 0.333, 0.333, 0, 0, 0.333, 0.333, 0.333, 0, 0, 0.333, 0.333, 0.333, 0, 0, 0, 0, 0, 1, 0],
        null,
        2,
      ),
      a.addEffect(
        "night_vision",
        a.TYPE_COLORMATRIX,
        [0, 0, 0, 0, 0, 0, 1.1, 0, 0, -50, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        null,
        2,
      ),
      a.addEffect("stars_hardlight_02", a.const_469, null, ie._r655bcbf040f824, 2),
      a.addEffect("coffee_mpl", a.const_469, null, ie.MULTIPLY, 2),
      a.addEffect("security_hardlight", a.const_469, null, ie._r655bcbf040f824, 3),
      a.addEffect("bluemood_mpl", a.const_469, null, ie.MULTIPLY, 3),
      a.addEffect("rusty_mpl", a.const_469, null, ie.MULTIPLY, 3),
      a.addEffect(
        "decr_conrast",
        a.TYPE_COLORMATRIX,
        [0.5, 0, 0, 0, 50, 0, 0.5, 0, 0, 50, 0, 0, 0.5, 0, 50, 0, 0, 0, 1, 0],
        null,
        4,
      ),
      a.addEffect(
        "green_2",
        a.TYPE_COLORMATRIX,
        [0.5, 0.5, 0.5, 0, 0, 0.5, 0.5, 0.5, 0, 90, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 1, 0],
        null,
        4,
      ),
      a.addEffect("alien_hrd", a.const_469, null, ie._r655bcbf040f824, 4),
      a.addEffect(
        "color_3",
        a.TYPE_COLORMATRIX,
        [0.609, 0.609, 0.082, 0, 0, 0.309, 0.609, 0.082, 0, 0, 0.309, 0.609, 0.082, 0, 0, 0, 0, 0, 1, 0],
        null,
        5,
      ),
      a.addEffect(
        "color_4",
        a.TYPE_COLORMATRIX,
        [0.8, -0.8, 1, 0, 70, 0.8, -0.8, 1, 0, 70, 0.8, -0.8, 1, 0, 70, 0, 0, 0, 1, 0],
        null,
        5,
      ),
      a.addEffect("toxic_hrd", a.const_469, null, ie._r655bcbf040f824, 5),
      a.addEffect(
        "hypersaturated",
        a.TYPE_COLORMATRIX,
        [2, -1, 0, 0, 0, -1, 2, 0, 0, 0, 0, -1, 2, 0, 0, 0, 0, 0, 1, 0],
        null,
        6,
      ),
      a.addEffect(
        "Yellow",
        a.TYPE_COLORMATRIX,
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        null,
        6,
      ),
      a.addEffect("misty_hrd", a.const_469, null, ie._r655bcbf040f824, 6),
      a.addEffect(
        "x_ray",
        a.TYPE_COLORMATRIX,
        [0, 1.2, 0, 0, -100, 0, 2, 0, 0, -120, 0, 2, 0, 0, -120, 0, 0, 0, 1, 0],
        null,
        7,
      ),
      a.addEffect(
        "decrease_saturation",
        a.TYPE_COLORMATRIX,
        [0.7, 0.2, 0.2, 0, 0, 0.2, 0.7, 0.2, 0, 0, 0.2, 0.2, 0.7, 0, 0, 0, 0, 0, 1, 0],
        null,
        7,
      ),
      a.addEffect("drops_mpl", a.const_469, null, ie.MULTIPLY, 8),
      a.addEffect("shiny_hrd", a.const_469, null, ie._r655bcbf040f824, 9),
      a.addEffect("glitter_hrd", a.const_469, null, ie._r655bcbf040f824, 10),
      a.addEffect("frame_gold", a.TYPE_FRAME, null, null, 999),
      a.addEffect("frame_gray_4", a.TYPE_FRAME, null, null, 999),
      a.addEffect("frame_black_2", a.TYPE_FRAME, null, null, 999),
      a.addEffect("frame_wood_2", a.TYPE_FRAME, null, null, 999),
      a.addEffect("finger_nrm", a.TYPE_FRAME, null, null, 999),
      a.addEffect(
        "color_5",
        a.TYPE_COLORMATRIX,
        [3.309, 0.609, 1.082, 0.2, 0, 0.309, 0.609, 0.082, 0, 0, 1.309, 0.609, 0.082, 0, 0, 0, 0, 0, 1, 0],
        null,
        999,
      ),
      a.addEffect(
        "black_white_negative",
        a.TYPE_COLORMATRIX,
        [-0.5, -0.5, -0.5, 0, 255, -0.5, -0.5, -0.5, 0, 255, -0.5, -0.5, -0.5, 0, 255, 0, 0, 0, 1, 0],
        null,
        999,
      ),
      a.addEffect(
        "blue",
        a.TYPE_COLORMATRIX,
        [0.5, 0.5, 0.5, 0, -255, 0.5, 0.5, 0.5, 0, -170, 0.5, 0.5, 0.5, 0, 0, 0, 0, 0, 1, 0],
        null,
        999,
      ),
      a.addEffect(
        "red",
        a.TYPE_COLORMATRIX,
        [0.5, 0.5, 0.5, 0, 0, 0.5, 0.5, 0.5, 0, -170, 0.5, 0.5, 0.5, 0, -170, 0, 0, 0, 1, 0],
        null,
        999,
      ),
      a.addEffect(
        "green",
        a.TYPE_COLORMATRIX,
        [0.5, 0.5, 0.5, 0, -170, 0.5, 0.5, 0.5, 0, 0, 0.5, 0.5, 0.5, 0, -170, 0, 0, 0, 1, 0],
        null,
        999,
      ));
  }
  static addEffect(e, r, t, i, s = 0) {
    a._r8acdb6e0eabeb7.indexOf(e) >= 0 && a.var_660?.setProperty(e, new a(e, r, t, i, s));
  }
  getColorMatrixFilter(e = !1) {
    if (e || this.matrixArray == null) return new ColorMatrixFilter_(this.matrixArray ?? void 0);
    let r = [],
      t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    for (let i = 0; i < this.matrixArray.length; i += 1)
      r.push(this.matrixArray[i] * this.getEffectStrength() + t[i] * (1 - this.getEffectStrength()));
    return new ColorMatrixFilter_(r);
  }
  setChosen(e) {
    if (((this.isOn = e), this.button != null)) {
      this.setSelectionHighlight(this.isOn);
      let r = this.button.findChildByName("remove_effect_button");
      if ((r != null && (r.visible = this.isOn), !this._r137e4b9913349b())) {
        let t = this.button.findChildByName("active_indicator");
        t != null && (t.visible = this.isOn);
      }
    }
  }
  setSelectionHighlight(e) {
    let r = this.button?.findChildByName("selected_indicator");
    r != null && (r.visible = e);
  }
  _r1d0a2ecc77719c() {
    this.setSelectionHighlight(!1);
  }
}
