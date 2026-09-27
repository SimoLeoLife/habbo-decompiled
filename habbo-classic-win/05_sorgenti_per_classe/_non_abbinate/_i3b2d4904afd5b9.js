// Estratto da HabboAirLauncher.deobf.js, riga 79126.

class {
    static {
      n(this, "_i3b2d4904afd5b9");
    }
    static {
      Vwr(this, "_i3b2d4904afd5b9");
    }
    _r2c13b18a8e68ec = null;
    flush() {
      return (this._r2c13b18a8e68ec && (this._r2c13b18a8e68ec.dispose(), (this._r2c13b18a8e68ec = null)), !0);
    }
    parse(e) {
      return ((this._r2c13b18a8e68ec = new Game2PlayerData()), this._r2c13b18a8e68ec.parse(e), !0);
    }
    get player() {
      return this._r2c13b18a8e68ec;
    }
  }
