// Extracted from HabboAirLauncher.deobf.js, line 128673.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowDisposeEvent.as
// Obfuscated name: _i5886b0e1d8aaad

class a extends y {
  static {
    n(this, "WindowDisposeEvent");
  }
  static const_1034 = "WINDOW_DISPOSE_EVENT";
  static _ra402e936509416 = [];
  static allocate(...e) {
    let r = e[0] ?? null,
      t = a._ra402e936509416.pop() ?? new a();
    return ((t._window = r), (t.var_119 = !1), (t._pool = a._ra402e936509416), t);
  }
  constructor() {
    (super(), (this._type = a.const_1034));
  }
  clone() {
    return a.allocate(this.window);
  }
  toString() {
    return `WindowDisposeEvent { type: ${this._type} window: ${this._window} }`;
  }
}
