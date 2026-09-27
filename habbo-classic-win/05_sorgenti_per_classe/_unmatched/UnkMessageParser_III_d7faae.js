// Extracted from HabboAirLauncher.deobf.js, line 112799.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id7faaea14b3a35

class {
    static {
      n(this, "UnkMessageParser_III_d7faae");
    }
    static {
      Qot(this, "UnkMessageParser_III_d7faae");
    }
    petId = 0;
    userId = 0;
    _r1ebe1ae4e2a93c = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.petId = e.readInteger()),
        (this.userId = e.readInteger()),
        (this._r1ebe1ae4e2a93c = e.readInteger()),
        !0
      );
    }
  }
