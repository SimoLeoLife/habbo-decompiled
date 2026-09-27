// Extracted from HabboAirLauncher.deobf.js, line 126277.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib747518ccd7ca8

class {
    static {
      n(this, "UnkMessageParser_IS_b74751");
    }
    static {
      Myt(this, "UnkMessageParser_IS_b74751");
    }
    _r7e78ea8fa950ce = [];
    flush() {
      return ((this._r7e78ea8fa950ce = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      this._r7e78ea8fa950ce = [];
      for (let t = 0; t < r; t++) this._r7e78ea8fa950ce.push(new VariableFxStatusRemoveData(e.readString()));
      return !0;
    }
    get _rf28e89ae590c43() {
      return this._r7e78ea8fa950ce;
    }
  }
