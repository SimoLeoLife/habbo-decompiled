// Estratto da HabboAirLauncher.deobf.js, riga 74224.

class {
    static {
      n(this, "_i1b7110d5a67260");
    }
    static {
      K2r(this, "_i1b7110d5a67260");
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
