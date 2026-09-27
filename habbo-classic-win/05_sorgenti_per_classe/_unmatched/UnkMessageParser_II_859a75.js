// Extracted from HabboAirLauncher.deobf.js, line 75814.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i859a756952a2bf

class {
    static {
      n(this, "UnkMessageParser_II_859a75");
    }
    static {
      P7r(this, "UnkMessageParser_II_859a75");
    }
    _r67599f52947142 = null;
    flush() {
      return ((this._r67599f52947142 = null), !0);
    }
    parse(e) {
      this._r67599f52947142 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r67599f52947142.push(e.readInteger());
      return !0;
    }
    get _r52afff10387e2e() {
      return this._r67599f52947142;
    }
  }
