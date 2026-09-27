// Extracted from HabboAirLauncher.deobf.js, line 90542.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i72b18e17cf2af3

class {
    static {
      n(this, "UnkMessageParser_B_72b18e");
    }
    static {
      OTr(this, "UnkMessageParser_B_72b18e");
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
