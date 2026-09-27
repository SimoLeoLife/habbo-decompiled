// Extracted from HabboAirLauncher.deobf.js, line 96834.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_27/class_3571.as
// Obfuscated name: _i113574db63e263

class {
    static {
      n(this, "class_3571");
    }
    static {
      gHr(this, "class_3571");
    }
    var_3455 = null;
    var_1062 = 0;
    _name = null;
    _description = null;
    get contentType() {
      return this.var_3455;
    }
    get classId() {
      return this.var_1062;
    }
    get name() {
      return this._name;
    }
    get description() {
      return this._description;
    }
    flush() {
      return (
        (this.var_3455 = null),
        (this.var_1062 = 0),
        (this._name = null),
        (this._description = null),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3455 = e.readString()),
        (this.var_1062 = e.readInteger()),
        (this._name = e.readString()),
        (this._description = e.readString()),
        !0
      );
    }
  }
