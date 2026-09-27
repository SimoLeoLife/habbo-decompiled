// Extracted from HabboAirLauncher.deobf.js, line 90134.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i331f6bec72921b

class {
    static {
      n(this, "UnkMessageParser_II_331f6b");
    }
    static {
      sTr(this, "UnkMessageParser_II_331f6b");
    }
    _r176dfa01c99956 = null;
    parse(e) {
      this._r176dfa01c99956 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r176dfa01c99956.push(e.readInteger());
      return !0;
    }
    flush() {
      return ((this._r176dfa01c99956 = null), !0);
    }
    get _r97cdb288c7ed30() {
      return this._r176dfa01c99956;
    }
  }
