// Extracted from HabboAirLauncher.deobf.js, line 78611.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_18/class_2211.as
// Obfuscated name: _ic257cac43edc26

class {
    static {
      n(this, "class_2211");
    }
    static {
      Jvr(this, "class_2211");
    }
    var_474 = [];
    _others = [];
    get friends() {
      return this.var_474;
    }
    get others() {
      return this._others;
    }
    flush() {
      return ((this.var_474 = []), (this._others = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.var_474.push(new UnkClass_67ec3c(e));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._others.push(new UnkClass_67ec3c(e));
      return !0;
    }
  }
