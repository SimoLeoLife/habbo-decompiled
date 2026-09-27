// Extracted from HabboAirLauncher.deobf.js, line 115484.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_8/class_3778.as
// Obfuscated name: _ie640adf85b8c62

class {
    static {
      n(this, "class_3778");
    }
    static {
      pbt(this, "class_3778");
    }
    var_2369 = [];
    get disposed() {
      return !1;
    }
    addAcceptedRequest(e) {
      this.var_2369.push(e);
    }
    dispose() {
      this.var_2369 = [];
    }
    getMessageArray() {
      let e = [this.var_2369.length];
      for (let r of this.var_2369) e.push(r);
      return e;
    }
  }
