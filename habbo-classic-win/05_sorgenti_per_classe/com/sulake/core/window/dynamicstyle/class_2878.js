// Extracted from HabboAirLauncher.deobf.js, line 128565.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/dynamicstyle/class_2878.as
// Obfuscated name: _ied666783fb99da

class {
  static {
    n(this, "class_2878");
  }
  static _styles = null;
  static _r22c9347ecec607(e) {
    return (
      this._styles == null && this.fillStyleTable(),
      this._styles?.get(e) ?? new Ts()
    );
  }
  static fillStyleTable() {
    this._styles = new Map();
    let e = new Ts(Ts.STYLE_LIFTED_HOVER);
    ((e._r9a3a021a8af008 = {}),
      (e.DynamicStyle = { offsetX: 1, colorTransform: [1, 0.7, 0.7, 0.7, 0, 0, 0, 0] }),
      (e.defaultStyles = { offsetY: -1, offsetX: -1 }));
    let r = new Ts();
    ((r._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [1, 1] }),
      (r.defaultStyles = { etchingColor: 2147483648, etchingPoint: [2, 2] }),
      (r.DynamicStyle = { etchingColor: 1207959552, etchingPoint: [-1, -1] }),
      e._r6d6cdb87ae2fc8.set("#icon", r));
    let t = new Ts(Ts.BRIGHTNESS_AND_SHADOW_UNDER);
    t._r9a3a021a8af008 = {};
    let i = new Ts();
    ((i._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [0, 1] }),
      (i.DynamicStyle = {
        etchingColor: 2147483648,
        etchingPoint: [0, -1],
        offsetY: 1,
        colorTransform: [0.7, 0.7, 0.7, 1, 0, 0, 0, 0],
      }),
      (i.defaultStyles = {
        etchingColor: 1207959552,
        etchingPoint: [0, 1],
        colorTransform: [1, 1, 1, 1, 77, 77, 77, 0],
      }),
      t._r6d6cdb87ae2fc8.set("#icon", i));
    let s = new Ts();
    ((s._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [0, 1] }),
      (s.DynamicStyle = {
        etchingColor: 2147483648,
        etchingPoint: [0, 0],
        colorTransform: [0.9, 0.9, 0.9, 1, 0, 0, 0, 0],
      }),
      (s.defaultStyles = {
        etchingColor: 1207959552,
        etchingPoint: [0, 1],
        colorTransform: [1, 1, 1, 1, 77, 77, 77, 0],
      }),
      (s.pressedSyles = { colorTransform: [0.5, 0.5, 0.5, 0.7, 0, 0, 0, 0] }),
      t._r6d6cdb87ae2fc8.set("#bg", s));
    let o = new Ts(Ts.BRIGHTNESS_AND_SHADOW_UNDER_GENTLE);
    o._r9a3a021a8af008 = {};
    let d = new Ts();
    ((d._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [0, 1] }),
      (d.DynamicStyle = {
        etchingColor: 2147483648,
        etchingPoint: [0, -1],
        offsetY: 1,
        colorTransform: [0.8, 0.8, 0.8, 1, 0, 0, 0, 0],
      }),
      (d.defaultStyles = {
        etchingColor: 1207959552,
        etchingPoint: [0, 1],
        colorTransform: [1.1, 1.1, 1.1, 1, 30, 30, 30, 0],
      }),
      o._r6d6cdb87ae2fc8.set("#icon", d));
    let c = new Ts(Ts.REWARD_TRACK_ITEM);
    c._r9a3a021a8af008 = {};
    let f = new Ts();
    ((f._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [0, 1] }),
      (f.DynamicStyle = {
        etchingColor: 2147483648,
        etchingPoint: [0, -1],
        offsetY: 1,
        colorTransform: [0.8, 0.8, 0.8, 1, 0, 0, 0, 0],
      }),
      (f.defaultStyles = {
        etchingColor: 1207959552,
        etchingPoint: [0, 1],
        colorTransform: [1.1, 1.1, 1.1, 1, 15, 15, 15, 0],
      }),
      (f.pressedSyles = { colorTransform: [0.75, 0.75, 0.75, 0.8, 0, 0, 0, 0] }),
      c._r6d6cdb87ae2fc8.set("#icon", f));
    let l = new Ts(Ts.BUTTON);
    l._r9a3a021a8af008 = {};
    let b = new Ts();
    ((b._r9a3a021a8af008 = { etchingColor: 1207959552, etchingPoint: [0, 0] }),
      (b.DynamicStyle = {
        etchingColor: 2147483648,
        etchingPoint: [0, 0],
        offsetY: 1,
        colorTransform: [0.8, 0.8, 0.8, 1, 0, 0, 0, 0],
      }),
      (b.defaultStyles = {
        etchingColor: 1207959552,
        etchingPoint: [0, 0],
        colorTransform: [1.1, 1.1, 1.1, 1, 15, 15, 15, 0],
      }),
      l._r6d6cdb87ae2fc8.set("#icon", b),
      this._styles.set(Ts.STYLE_LIFTED_HOVER, e),
      this._styles.set(Ts.BRIGHTNESS_AND_SHADOW_UNDER, t),
      this._styles.set(Ts.BRIGHTNESS_AND_SHADOW_UNDER_GENTLE, o),
      this._styles.set(Ts.REWARD_TRACK_ITEM, c),
      this._styles.set(Ts.BUTTON, l));
  }
}
