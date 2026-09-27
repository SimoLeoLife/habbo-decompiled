// Estratto da HabboAirLauncher.deobf.js, riga 115509.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_8/class_3207.as
// Nome offuscato: _i87064d5a1f4f00

class {
    static {
      n(this, "class_3207");
    }
    static {
      gbt(this, "class_3207");
    }
    var_1701 = [];
    get disposed() {
      return !1;
    }
    addDeclinedRequest(e) {
      this.var_1701.push(e);
    }
    dispose() {
      this.var_1701 = [];
    }
    getMessageArray() {
      if (this.var_1701.length === 0) return [!0, 0];
      let e = [!1, this.var_1701.length];
      for (let r of this.var_1701) e.push(r);
      return e;
    }
  }
