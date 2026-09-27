// Extracted from HabboAirLauncher.deobf.js, line 74224.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1b7110d5a67260

class {
    static {
      n(this, "UnkMessageParser_ISIS_1b7110");
    }
    static {
      K2r(this, "UnkMessageParser_ISIS_1b7110");
    }
    pageName = "";
    pageId = 0;
    _r94ef33a3e603b5 = 0;
    image = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.pageId = e.readInteger()),
        (this.pageName = e.readString()),
        (this._r94ef33a3e603b5 = e.readInteger()),
        (this.image = e.readString()),
        !0
      );
    }
  }
