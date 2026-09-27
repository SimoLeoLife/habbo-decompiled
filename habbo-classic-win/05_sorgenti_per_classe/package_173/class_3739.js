// Extracted from HabboAirLauncher.deobf.js, line 89207.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_173/class_3739.as
// Obfuscated name: _id5e2dc3fa205ab

class {
    static {
      n(this, "class_3739");
    }
    static {
      OAr(this, "class_3739");
    }
    var_660 = null;
    flush() {
      return ((this.var_660 = null), !0);
    }
    parse(e) {
      this.var_660 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_2416();
        ((i.type = e.readInteger()),
          (i.subType = e.readInteger()),
          (i.duration = e.readInteger()),
          (i.inactiveEffectsInInventory = e.readInteger()),
          (i.secondsLeftIfActive = e.readInteger()),
          (i.isPermanent = e.readBoolean()),
          this.var_660.push(i));
      }
      return !0;
    }
    get effects() {
      return this.var_660;
    }
  }
