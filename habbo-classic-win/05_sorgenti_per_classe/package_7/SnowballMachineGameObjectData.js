// Extracted from HabboAirLauncher.deobf.js, line 125895.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_7/SnowballMachineGameObjectData.as
// Obfuscated name: _i6ff4449b0ff94e

class a extends Xa {
    static {
      n(this, "SnowballMachineGameObjectData");
    }
    static {
      $wt(this, "SnowballMachineGameObjectData");
    }
    static const_38 = 8;
    constructor(e, r) {
      super(e, r);
    }
    parse(e) {
      this._r539158edd29622(e, a.const_38);
    }
    get locationX3D() {
      return this.getVariable(2);
    }
    get locationY3D() {
      return this.getVariable(3);
    }
    get direction() {
      return this.getVariable(4);
    }
    get maxSnowballs() {
      return this.getVariable(5);
    }
    get snowballCount() {
      return this.getVariable(6);
    }
    get fuseObjectId() {
      return this.getVariable(7);
    }
  }
