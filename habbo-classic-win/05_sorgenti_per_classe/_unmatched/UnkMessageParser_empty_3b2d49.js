// Extracted from HabboAirLauncher.deobf.js, line 79126.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3b2d4904afd5b9

class {
    static {
      n(this, "UnkMessageParser_empty_3b2d49");
    }
    static {
      Vwr(this, "UnkMessageParser_empty_3b2d49");
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
