// Extracted from HabboAirLauncher.deobf.js, line 113068.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2c547c5aa82888

class {
    static {
      n(this, "UnkMessageParser_IIS_2c547c");
    }
    static {
      pdt(this, "UnkMessageParser_IIS_2c547c");
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
