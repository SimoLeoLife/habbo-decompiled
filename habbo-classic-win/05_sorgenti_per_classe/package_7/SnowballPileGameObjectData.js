// Estratto da HabboAirLauncher.deobf.js, riga 125931.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_7/SnowballPileGameObjectData.as
// Nome offuscato: _i2a45a00da4a809

class a extends Xa {
    static {
      n(this, "SnowballPileGameObjectData");
    }
    static {
      qwt(this, "SnowballPileGameObjectData");
    }
    static const_38 = 7;
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
    get maxSnowballs() {
      return this.getVariable(4);
    }
    get snowballCount() {
      return this.getVariable(5);
    }
    get fuseObjectId() {
      return this.getVariable(6);
    }
  }
