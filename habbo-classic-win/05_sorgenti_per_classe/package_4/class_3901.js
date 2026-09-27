// Extracted from HabboAirLauncher.deobf.js, line 74720.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_3901.as
// Obfuscated name: _id01b889649a8d8

class {
    static {
      n(this, "class_3901");
    }
    static {
      T9r(this, "class_3901");
    }
    available = !1;
    _rd217b54901977e = "";
    var_5663 = "";
    var_5467 = 0;
    flush() {
      return ((this.available = !1), !0);
    }
    parse(e) {
      return (
        (this._rd217b54901977e = e.readString()),
        (this.available = this._rd217b54901977e !== ""),
        (this.var_5663 = e.readString()),
        (this.var_5467 = e.readInteger()),
        !0
      );
    }
  }
