// Extracted from HabboAirLauncher.deobf.js, line 74457.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_4014.as
// Obfuscated name: _id8292bbeaa75b8

class {
    static {
      n(this, "class_4014");
    }
    static {
      c9r(this, "class_4014");
    }
    pageName = "";
    _r94ef33a3e603b5 = 0;
    image = "";
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.pageName = e.readString()),
        (this._r94ef33a3e603b5 = e.readInteger()),
        (this.image = e.readString()),
        !0
      );
    }
  }
