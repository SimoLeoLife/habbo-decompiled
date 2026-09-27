// Estratto da HabboAirLauncher.deobf.js, riga 97646.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_144/class_3559.as
// Nome offuscato: _i22c89560bca4d0

class {
    static {
      n(this, "class_3559");
    }
    static {
      BVr(this, "class_3559");
    }
    _id = -1;
    _type = "";
    _headline = "";
    var_3375 = "";
    get id() {
      return this._id;
    }
    get type() {
      return this._type;
    }
    get headline() {
      return this._headline;
    }
    get summary() {
      return this.var_3375;
    }
    flush() {
      return ((this._id = -1), (this._type = ""), (this.var_3375 = ""), !0);
    }
    parse(e) {
      return (
        (this._id = e.readInteger()),
        (this._type = e.readString()),
        (this._headline = e.readString()),
        (this.var_3375 = e.readString()),
        !0
      );
    }
  }
