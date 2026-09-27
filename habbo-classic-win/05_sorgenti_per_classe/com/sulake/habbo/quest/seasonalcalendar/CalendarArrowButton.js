// Estratto da HabboAirLauncher.deobf.js, riga 270216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/seasonalcalendar/CalendarArrowButton.as
// Nome offuscato: _i8e7e3ff8c9bdc5

class a {
  constructor(e, r, t, i) {
    this._window = r;
    this._callback = i;
    switch ((this._window && (this._window.procedure = this.procedure), t)) {
      case a._r721d788422e741:
        ((this.var_2224 = e.getAssetByName("arrow_back_active")?.content?.clone() ?? null),
          (this.var_2270 = e.getAssetByName("arrow_back_inactive")?.content?.clone() ?? null),
          (this.var_2470 = e.getAssetByName("arrow_back_hilite")?.content?.clone() ?? null));
        break;
      case a.scrollArrowProcedure:
        ((this.var_2224 = e.getAssetByName("arrow_next_active")?.content?.clone() ?? null),
          (this.var_2270 = e.getAssetByName("arrow_next_inactive")?.content?.clone() ?? null),
          (this.var_2470 = e.getAssetByName("arrow_next_hilite")?.content?.clone() ?? null));
        break;
    }
    ((this._rc0fc999f2ad7bf = new E(this._window?.x ?? 0, this._window?.y ?? 0)),
      this.updateWindow());
  }
  static {
    n(this, "CalendarArrowButton");
  }
  static _r721d788422e741 = 0;
  static scrollArrowProcedure = 1;
  static _r4bf40420318f29 = 0;
  static STATE_ACTIVE = 1;
  static STATE_HILITE = 2;
  static _r4ad9a0492e38f2 = new E(1, 1);
  _state = a._r4bf40420318f29;
  _pressed = !1;
  _rc0fc999f2ad7bf;
  var_2270 = null;
  var_2224 = null;
  var_2470 = null;
  dispose() {
    ((this.var_2224 = null),
      (this.var_2470 = null),
      (this.var_2270 = null),
      this._window != null && (this._window.procedure = null),
      (this._window = null),
      (this._callback = null));
  }
  get disposed() {
    return this._window == null;
  }
  activate() {
    (this._state !== a.STATE_ACTIVE &&
      this._state !== a.STATE_HILITE &&
      (this._state = a.STATE_ACTIVE),
      this.updateWindow());
  }
  deactivate() {
    ((this._state = a._r4bf40420318f29), this.updateWindow());
  }
  isInactive() {
    return this._state === a._r4bf40420318f29;
  }
  updateWindow() {
    if (this._window != null) {
      switch (this._state) {
        case a._r4bf40420318f29:
          this._window.bitmap = this.var_2270;
          break;
        case a.STATE_HILITE:
          this._window.bitmap = this.var_2470;
          break;
        case a.STATE_ACTIVE:
          this._window.bitmap = this.var_2224;
          break;
      }
      this._pressed
        ? ((this._window.x = this._rc0fc999f2ad7bf.x + a._r4ad9a0492e38f2.x),
          (this._window.y = this._rc0fc999f2ad7bf.y + a._r4ad9a0492e38f2.y))
        : (this._window.position = this._rc0fc999f2ad7bf);
    }
  }
  procedure = n((e, r) => {
    if (e instanceof u) {
      switch (e.type) {
        case u.OVER:
          this._state !== a._r4bf40420318f29 && (this._state = a.STATE_HILITE);
          break;
        case u.OUT:
          this._state !== a._r4bf40420318f29 && (this._state = a.STATE_ACTIVE);
          break;
        case u.DOWN:
          this._pressed = !0;
          break;
        case u.UP:
        case u.UP_OUTSIDE:
          this._pressed = !1;
          break;
      }
      (this.updateWindow(), this._callback?.(e, r));
    }
  }, "procedure");
}
