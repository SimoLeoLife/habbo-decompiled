// Extracted from HabboAirLauncher.deobf.js, line 78469.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2938.as
// Obfuscated name: _i9062265c5acd45

class {
    static {
      n(this, "class_2938");
    }
    static {
      Vvr(this, "class_2938");
    }
    _typeCode = -1;
    var_3798 = "";
    var_1065 = "";
    get _r46e70b63ffc509() {
      return this._typeCode;
    }
    get avatarId() {
      return this.var_3798;
    }
    get message() {
      return this.var_1065;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3798 = e.readString()),
        (this._typeCode = e.readInteger()),
        (this.var_1065 = e.readString()),
        !0
      );
    }
  }
