// Extracted from HabboAirLauncher.deobf.js, line 104724.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_3597.as
// Obfuscated name: _i507ad887c56cfd

class {
    static {
      n(this, "class_3597");
    }
    static {
      b$r(this, "class_3597");
    }
    var_3632 = 0;
    var_3113 = 0;
    var_4676 = !1;
    var_4416 = !1;
    var_4579 = !1;
    var_4568 = !1;
    get roomIndex() {
      return this.var_3632;
    }
    get petId() {
      return this.var_3113;
    }
    get canBreed() {
      return this.var_4676;
    }
    get canHarvest() {
      return this.var_4416;
    }
    get canRevive() {
      return this.var_4579;
    }
    get hasBreedingPermission() {
      return this.var_4568;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3632 = e.readInteger()),
        (this.var_3113 = e.readInteger()),
        (this.var_4676 = e.readBoolean()),
        (this.var_4416 = e.readBoolean()),
        (this.var_4579 = e.readBoolean()),
        (this.var_4568 = e.readBoolean()),
        !0
      );
    }
  }
