// Extracted from HabboAirLauncher.deobf.js, line 115660.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_8/class_1900.as
// Obfuscated name: _ia58b6945b9ac84

class {
    static {
      n(this, "class_1900");
    }
    static {
      Sbt(this, "class_1900");
    }
    var_2302 = [];
    get disposed() {
      return !1;
    }
    addRemovedFriend(e) {
      this.var_2302.push(e);
    }
    dispose() {
      this.var_2302 = [];
    }
    getMessageArray() {
      let e = [this.var_2302.length];
      for (let r of this.var_2302) e.push(r);
      return e;
    }
  }
