// Extracted from HabboAirLauncher.deobf.js, line 73123.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_1898.as
// Obfuscated name: _i54333c3f2f33a3

class {
    static {
      n(this, "class_1898");
    }
    static {
      n5r(this, "class_1898");
    }
    figure = "";
    gender = "";
    flush() {
      return ((this.figure = ""), (this.gender = ""), !0);
    }
    parse(e) {
      return (
        (this.figure = e.readString()),
        (this.gender = e.readString()),
        this.gender && (this.gender = this.gender.toUpperCase()),
        !0
      );
    }
  }
