// Extracted from HabboAirLauncher.deobf.js, line 75367.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if03fa196089fdf

class {
    static {
      n(this, "UnkMessageParser_I_f03fa1");
    }
    static {
      z4r(this, "UnkMessageParser_I_f03fa1");
    }
    pageId = -1;
    _r71cca206cb0123 = null;
    flush() {
      return ((this.pageId = -1), (this._r71cca206cb0123 = null), !0);
    }
    parse(e) {
      return ((this.pageId = e.readInteger()), (this._r71cca206cb0123 = new UnkClass_e671c5(e)), !0);
    }
  }
