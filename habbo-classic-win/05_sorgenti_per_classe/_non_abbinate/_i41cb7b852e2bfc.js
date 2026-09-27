// Estratto da HabboAirLauncher.deobf.js, riga 93933.

class {
    static {
      n(this, "_i41cb7b852e2bfc");
    }
    static {
      CLr(this, "_i41cb7b852e2bfc");
    }
    _r59d8b6b08bf6f9 = null;
    _rf44461d6dcedb1 = 0;
    parse(e) {
      return (
        (this._r59d8b6b08bf6f9 = e.readString()),
        (this._rf44461d6dcedb1 = e.readInteger()),
        !0
      );
    }
    flush() {
      return ((this._r59d8b6b08bf6f9 = null), !0);
    }
    get globalId() {
      return this._r59d8b6b08bf6f9;
    }
    get convertedId() {
      return this._rf44461d6dcedb1;
    }
  }
