// Extracted from HabboAirLauncher.deobf.js, line 73372.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_58/class_2564.as
// Obfuscated name: _ieb8b9eab0d9396

class {
    static {
      n(this, "class_2564");
    }
    static {
      A5r(this, "class_2564");
    }
    static var_5916 = 3;
    static var_5884 = 2;
    static var_5820 = 0;
    static name_10 = 1;
    id;
    creationTime;
    var_4694;
    var_4899;
    var_5741;
    var_5583;
    var_4927;
    var_5388;
    var_5609;
    var_4819;
    var_4534;
    constructor(e) {
      ((this.id = Number(e.readLong())),
        (this.creationTime = Number(e.readLong())),
        (this.var_4694 = e.readString()),
        (this.var_4899 = e.readInteger()),
        (this.var_5741 = e.readString()),
        (this.var_5583 = Number(e.readLong())),
        (this.var_4927 = e.readBoolean()),
        (this.var_5388 = e.readBoolean()),
        (this.var_5609 = e.readByte()),
        (this.var_4819 = Number(e.readLong())),
        (this.var_4534 = Number(e.readLong())));
    }
  }
