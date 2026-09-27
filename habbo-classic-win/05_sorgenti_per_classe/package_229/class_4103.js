// Extracted from HabboAirLauncher.deobf.js, line 126548.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_229/class_4103.as
// Obfuscated name: _ifd4d91297c863b

class {
    static {
      n(this, "class_4103");
    }
    static {
      eIt(this, "class_4103");
    }
    var_1923 = [];
    var_811 = [];
    var_4920 = new UnkClass_e72f76();
    get habbicons() {
      return this.var_1923;
    }
    get recentHabbiconIds() {
      return this.var_811;
    }
    flush() {
      return ((this.var_1923 = []), (this.var_811 = []), !0);
    }
    parse(e) {
      ((this.var_1923 = []), (this.var_811 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1923.push(this.var_4920.parse(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_811.push(e.readInteger());
      return !0;
    }
  }
