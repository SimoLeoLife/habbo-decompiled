// Extracted from HabboAirLauncher.deobf.js, line 126803.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_4147.as
// Obfuscated name: _ic622e2c838997e

class {
    static {
      n(this, "class_4147");
    }
    static {
      gIt(this, "class_4147");
    }
    _id;
    var_3037;
    var_2471;
    var_1594;
    var_3477;
    class_4246;
    constructor(e) {
      ((this._id = e.readString()),
        (this.var_3037 = e.readString()),
        (this.var_2471 = e.readString()),
        (this.var_1594 = e.readInteger()),
        (this.var_3477 = e.readBoolean()),
        (this.class_4246 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_4246.push(new UnkClass_a8ceca(e));
    }
    get id() {
      return this._id;
    }
    get actionType() {
      return this.var_3037;
    }
    get parameter() {
      return this.var_2471;
    }
    get progressCount() {
      return this.var_1594;
    }
    get premium() {
      return this.var_3477;
    }
    get _r2d5eee2e2248ea() {
      return this.class_4246;
    }
  }
