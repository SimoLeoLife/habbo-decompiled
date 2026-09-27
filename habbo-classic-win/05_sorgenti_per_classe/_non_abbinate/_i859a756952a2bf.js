// Estratto da HabboAirLauncher.deobf.js, riga 75814.

class {
    static {
      n(this, "_i859a756952a2bf");
    }
    static {
      P7r(this, "_i859a756952a2bf");
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
