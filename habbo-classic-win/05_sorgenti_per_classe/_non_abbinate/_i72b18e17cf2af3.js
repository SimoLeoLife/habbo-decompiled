// Estratto da HabboAirLauncher.deobf.js, riga 90542.

class {
    static {
      n(this, "_i72b18e17cf2af3");
    }
    static {
      OTr(this, "_i72b18e17cf2af3");
    }
    _r456519cb911bb4 = null;
    _r9c23e1c935bb20 = !1;
    flush() {
      return ((this._r456519cb911bb4 = null), !0);
    }
    parse(e) {
      return ((this._r456519cb911bb4 = new class_2503(e)), (this._r9c23e1c935bb20 = e.readBoolean()), !0);
    }
    get pet() {
      return this._r456519cb911bb4;
    }
    _r6ed12996488241() {
      return this._r9c23e1c935bb20;
    }
  }
