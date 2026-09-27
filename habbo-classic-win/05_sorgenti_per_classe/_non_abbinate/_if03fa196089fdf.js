// Estratto da HabboAirLauncher.deobf.js, riga 75367.

class {
    static {
      n(this, "_if03fa196089fdf");
    }
    static {
      z4r(this, "_if03fa196089fdf");
    }
    pageId = -1;
    _r71cca206cb0123 = null;
    flush() {
      return ((this.pageId = -1), (this._r71cca206cb0123 = null), !0);
    }
    parse(e) {
      return ((this.pageId = e.readInteger()), (this._r71cca206cb0123 = new _ie671c5da796359(e)), !0);
    }
  }
