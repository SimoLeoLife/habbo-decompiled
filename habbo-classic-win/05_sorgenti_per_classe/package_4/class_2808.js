// Extracted from HabboAirLauncher.deobf.js, line 74156.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_2808.as
// Obfuscated name: _i5388e8c4e2872e

class {
    static {
      n(this, "class_2808");
    }
    static {
      G2r(this, "class_2808");
    }
    root = null;
    _r95dea45ce27a49 = !1;
    _r28a444d88bee4d = "";
    flush() {
      return ((this.root = null), !0);
    }
    parse(e) {
      return (
        (this.root = new ose(e)),
        (this._r95dea45ce27a49 = e.readBoolean()),
        (this._r28a444d88bee4d = e.readString()),
        !0
      );
    }
  }
