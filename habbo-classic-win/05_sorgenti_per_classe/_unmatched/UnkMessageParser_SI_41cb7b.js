// Extracted from HabboAirLauncher.deobf.js, line 93933.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i41cb7b852e2bfc

class {
    static {
      n(this, "UnkMessageParser_SI_41cb7b");
    }
    static {
      CLr(this, "UnkMessageParser_SI_41cb7b");
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
