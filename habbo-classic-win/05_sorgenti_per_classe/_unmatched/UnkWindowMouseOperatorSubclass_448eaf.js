// Extracted from HabboAirLauncher.deobf.js, line 134750.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i448eaf86d0aab1

class extends WindowMouseOperator {
  static {
    n(this, "UnkWindowMouseOperatorSubclass_448eaf");
  }
  constructor(e) {
    super(e);
  }
  operate(e, r) {
    if (this._window === null || this._window.disposed || this._re66073e9e7a15e === null)
      return;
    let t = (this._flags & N.WINDOW_PARAM_HORIZONTAL_MOUSE_SCALING_TRIGGER) !== 0 ? e - this._re66073e9e7a15e.x : 0,
      i = (this._flags & N.WINDOW_PARAM_VERTICAL_MOUSE_SCALING_TRIGGER) !== 0 ? r - this._re66073e9e7a15e.y : 0;
    this._window.scale(t, i);
  }
}
