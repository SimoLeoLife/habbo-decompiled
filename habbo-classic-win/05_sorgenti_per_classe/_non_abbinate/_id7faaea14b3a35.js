// Estratto da HabboAirLauncher.deobf.js, riga 112799.

class {
    static {
      n(this, "_id7faaea14b3a35");
    }
    static {
      Qot(this, "_id7faaea14b3a35");
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
