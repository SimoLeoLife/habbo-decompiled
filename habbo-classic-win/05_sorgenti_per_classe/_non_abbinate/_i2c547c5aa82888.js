// Estratto da HabboAirLauncher.deobf.js, riga 113068.

class {
    static {
      n(this, "_i2c547c5aa82888");
    }
    static {
      pdt(this, "_i2c547c5aa82888");
    }
    webId = -1;
    id = -1;
    _r4c7340395c786f = "";
    flush() {
      return ((this.webId = -1), (this.id = -1), (this._r4c7340395c786f = ""), !0);
    }
    parse(e) {
      return (
        (this.webId = e.readInteger()),
        (this.id = e.readInteger()),
        (this._r4c7340395c786f = e.readString()),
        !0
      );
    }
  }
