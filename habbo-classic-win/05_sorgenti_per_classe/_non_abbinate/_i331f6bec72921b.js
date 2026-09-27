// Estratto da HabboAirLauncher.deobf.js, riga 90134.

class {
    static {
      n(this, "_i331f6bec72921b");
    }
    static {
      sTr(this, "_i331f6bec72921b");
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
