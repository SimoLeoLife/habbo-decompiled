// Estratto da HabboAirLauncher.deobf.js, riga 87655.

class {
    static {
      n(this, "_i62ab493751d5f5");
    }
    static {
      bWr(this, "_i62ab493751d5f5");
    }
    _r163c91c77c45c4 = -1;
    _r1a8a80effe0f62 = null;
    flush() {
      return ((this._r163c91c77c45c4 = -1), (this._r1a8a80effe0f62 = null), !0);
    }
    parse(e) {
      return (
        (this._r163c91c77c45c4 = e.readInteger()),
        (this._r1a8a80effe0f62 = e.readString()),
        !0
      );
    }
    get _ra69a2838852932() {
      return this._r163c91c77c45c4;
    }
    get _rc99187437356a9() {
      return this._r1a8a80effe0f62;
    }
  }
