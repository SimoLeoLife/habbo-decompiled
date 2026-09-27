// Estratto da HabboAirLauncher.deobf.js, riga 209400.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/BackgroundObject.as
// Nome offuscato: _i575bd81238cd74

class {
  constructor(e, r, t, i, s, o = !1) {
    this._id = e;
    this._events = t;
    ((this._window = r),
      (this._sprite = i.getXmlWindow(o ? "moving_object" : "moving_object_floating")),
      this._sprite && r.addChild(this._sprite));
  }
  static {
    n(this, "BackgroundObject");
  }
  _window;
  _sprite;
  get disposed() {
    return this._window == null;
  }
  dispose() {
    ((this._window = null), (this._sprite = null));
  }
  get sprite() {
    return this._sprite;
  }
  set sprite(e) {
    this._sprite = e;
  }
  get window() {
    return this._window;
  }
  set window(e) {
    this._window = e;
  }
  get events() {
    return this._events;
  }
  get id() {
    return this._id;
  }
  update(e) {}
}
