// Estratto da HabboAirLauncher.deobf.js, riga 87131.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_1833.as
// Nome offuscato: _i73969baa6f7ddd

class {
    static {
      n(this, "class_1833");
    }
    static {
      IMr(this, "class_1833");
    }
    _id = 0;
    _name = "";
    var_1129 = "";
    var_1562 = "";
    var_5792 = "";
    _realName = "";
    var_5773 = !1;
    var_5057 = 0;
    var_852 = 0;
    var_1357 = 0;
    var_5856 = !1;
    var_5809 = "";
    var_2168 = !1;
    _accountSafetyLocked = !1;
    var_5705 = !1;
    var_4872 = "";
    var_2953 = 0;
    var_4499 = 3;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._id = e.readInteger()),
        (this._name = e.readString()),
        (this.var_1129 = e.readString()),
        (this.var_1562 = e.readString()),
        (this.var_5792 = e.readString()),
        (this._realName = e.readString()),
        (this.var_5773 = e.readBoolean()),
        (this.var_5057 = e.readInteger()),
        (this.var_852 = e.readInteger()),
        (this.var_1357 = e.readInteger()),
        (this.var_5856 = e.readBoolean()),
        (this.var_5809 = e.readString()),
        (this.var_2168 = e.readBoolean()),
        (this._accountSafetyLocked = e.readBoolean()),
        e.bytesAvailable > 0 &&
          ((this.var_5705 = e.readBoolean()), (this.var_4872 = e.readString())),
        e.bytesAvailable > 0 &&
          ((this.var_2953 = e.readInteger()), (this.var_4499 = e.readInteger())),
        !0
      );
    }
    get id() {
      return this._id;
    }
    get name() {
      return this._name;
    }
    get figure() {
      return this.var_1129;
    }
    get sex() {
      return this.var_1562;
    }
    get _r26512c4c2803d7() {
      return this.var_5792;
    }
    get realName() {
      return this._realName;
    }
    get _r258e9502f7f1b8() {
      return this.var_5773;
    }
    get respectTotal() {
      return this.var_5057;
    }
    get respectLeft() {
      return this.var_852;
    }
    get petRespectLeft() {
      return this.var_1357;
    }
    get _r246bcc43dc7dc6() {
      return this.var_5856;
    }
    get _r7ec947132d7488() {
      return this.var_5809;
    }
    get nameChangeAllowed() {
      return this.var_2168;
    }
    get _re4fcbc56ec54d5() {
      return this._accountSafetyLocked;
    }
    get _r775c24cf2b7d7e() {
      return this.var_5705;
    }
    get _r93bcee11e2ecfe() {
      return this.var_4872;
    }
    get respectReplenishesLeft() {
      return this.var_2953;
    }
    get _rca468c2d449b9e() {
      return this.var_4499;
    }
  }
