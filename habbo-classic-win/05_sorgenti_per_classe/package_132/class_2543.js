// Extracted from HabboAirLauncher.deobf.js, line 126986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_2543.as
// Obfuscated name: _id74d0c29ed2137

class {
    static {
      n(this, "class_2543");
    }
    static {
      CIt(this, "class_2543");
    }
    var_2522 = !1;
    var_1056 = null;
    var_3732 = !1;
    flush() {
      return ((this.var_2522 = !1), (this.var_1056 = null), (this.var_3732 = !1), !0);
    }
    parse(e) {
      ((this.var_2522 = e.readBoolean()), (this.var_1056 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1056.push(new class_2548(e));
      return ((this.var_3732 = e.readBoolean()), !0);
    }
    get disabled() {
      return this.var_2522;
    }
    get tracks() {
      return this.var_1056;
    }
    get reload() {
      return this.var_3732;
    }
  }
