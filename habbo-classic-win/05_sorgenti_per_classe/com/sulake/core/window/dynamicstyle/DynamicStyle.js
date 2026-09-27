// Estratto da HabboAirLauncher.deobf.js, riga 128499.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/dynamicstyle/DynamicStyle.as
// Nome offuscato: _i121bab8d60949c

class a {
  static {
    n(this, "DynamicStyle");
  }
  static STYLE_LIFTED_HOVER = "lifted_hover";
  static BUTTON = "button";
  static BRIGHTNESS_AND_SHADOW_UNDER = "brightness_and_shadow_under";
  static BRIGHTNESS_AND_SHADOW_UNDER_GENTLE = "brightness_and_shadow_under_gentle";
  static REWARD_TRACK_ITEM = "reward_track_item";
  name;
  defaultStyles = {};
  _r9a3a021a8af008 = {};
  DynamicStyle = {};
  pressedSyles = { colorTransform: [1, 1, 1, 0.5, 0, 0, 0, 0] };
  _r6d6cdb87ae2fc8 = new Map();
  constructor(e = "") {
    this.name = e;
  }
  getStyleByWindowState(e) {
    switch (e) {
      case class_1948.const_92:
        return this.DynamicStyle;
      case class_1948.WINDOW_STATE_HOVERING:
        return this.defaultStyles;
      case class_1948.WINDOW_STATE_DEFAULT:
        return this._r9a3a021a8af008;
      case class_1948.const_117:
        return this.pressedSyles;
      default:
        return {};
    }
  }
  getChildDynamicStyleByKey(e) {
    return this._r6d6cdb87ae2fc8.get(e) ?? new a();
  }
  getChildStyle(e) {
    for (let r of e.tags) if (r.charAt(0) === "#") return this.getChildDynamicStyleByKey(r);
    return null;
  }
  getColorValue(e) {
    let r = this.getStyleByWindowState(e).colorTransform;
    if (!r) return null;
    let t = "";
    for (let i = 0; i < 3; i++) {
      let s = r[i] * 255 + r[i + 4];
      t += Number(Math.min(255, s)).toString(16);
    }
    return parseInt(t, 16);
  }
  _rcc47ecc28ed21c(e) {
    let r = this.getStyleByWindowState(e),
      t = r.colorTransform;
    if (!t) return new _i4210dc3239901d();
    let i = r.tint ?? [255, 255, 255];
    return new _i4210dc3239901d(
      (t[0] * i[0]) / 255,
      (t[1] * i[1]) / 255,
      (t[2] * i[2]) / 255,
      t[3],
      t[4],
      t[5],
      t[6],
      t[7],
    );
  }
}
