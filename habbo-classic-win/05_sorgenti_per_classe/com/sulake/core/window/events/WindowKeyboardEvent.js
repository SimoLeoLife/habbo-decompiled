// Estratto da HabboAirLauncher.deobf.js, riga 65953.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowKeyboardEvent.as
// Nome offuscato: _ia303ff1c517a6c

class a extends y {
  static {
    n(this, "WindowKeyboardEvent");
  }
  static const_1081 = "WKE_KEY_DOWN";
  static const_900 = "WKE_KEY_UP";
  static _ra27895a1411c1f = [];
  _event = null;
  static allocate(e, r, t, i = null, s = !1) {
    let o, d, c, f;
    r instanceof M
      ? ((o = r), (d = t), (c = i), (f = s))
      : ((o = new KeyboardControl()), (d = r), (c = t), (f = typeof i == "boolean" ? i : !1));
    let l = a._ra27895a1411c1f.pop() ?? new a();
    return (
      (l._type = e),
      (l._event = o),
      (l._window = d),
      (l.var_1451 = c),
      (l.var_119 = !1),
      (l._cancelable = f),
      (l.var_1232 = !1),
      (l._pool = a._ra27895a1411c1f),
      l
    );
  }
  get charCode() {
    return this._event?.charCode ?? 0;
  }
  get keyCode() {
    return this._event?.keyCode ?? 0;
  }
  get keyLocation() {
    return this._event?.keyLocation ?? 0;
  }
  get altKey() {
    return this._event?.altKey ?? !1;
  }
  get shiftKey() {
    return this._event?.shiftKey ?? !1;
  }
  get ctrlKey() {
    return this._event?.ctrlKey ?? !1;
  }
  clone() {
    return a.allocate(this._type, this._event ?? new KeyboardControl(), this.window, this.related, this.cancelable);
  }
  toString() {
    return `WindowKeyboardEvent { type: ${this._type} cancelable: ${this._cancelable} window: ${this._window} charCode: ${this.charCode} }`;
  }
}
