// Estratto da HabboAirLauncher.deobf.js, riga 76235.

class {
    static {
      n(this, "_i9b580059905140");
    }
    static {
      vpr(this, "_i9b580059905140");
    }
    _r03f2910fbe9c48 = 0;
    get success() {
      return this._r03f2910fbe9c48 === 0;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    flush() {
      return ((this._r03f2910fbe9c48 = 0), !0);
    }
    parse(e) {
      return ((this._r03f2910fbe9c48 = e.readShort()), !0);
    }
  }
