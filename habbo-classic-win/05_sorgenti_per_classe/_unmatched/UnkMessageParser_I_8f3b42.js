// Extracted from HabboAirLauncher.deobf.js, line 95630.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8f3b42a9b6961a

class {
    static {
      n(this, "UnkMessageParser_I_8f3b42");
    }
    static {
      IOr(this, "UnkMessageParser_I_8f3b42");
    }
    _rd7f7f54503dcb4 = null;
    parse(e) {
      this._rd7f7f54503dcb4 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd7f7f54503dcb4.push(new class_3200(e));
      return !0;
    }
    flush() {
      return ((this._rd7f7f54503dcb4 = null), !0);
    }
    get _rce09be3c985bc6() {
      return this._rd7f7f54503dcb4;
    }
  }
