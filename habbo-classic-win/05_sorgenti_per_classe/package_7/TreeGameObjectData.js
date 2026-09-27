// Estratto da HabboAirLauncher.deobf.js, riga 125964.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_7/TreeGameObjectData.as
// Nome offuscato: _iec859129ca264c

class a extends Xa {
    static {
      n(this, "TreeGameObjectData");
    }
    static {
      eyt(this, "TreeGameObjectData");
    }
    static const_38 = 9;
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
    get height() {
      return this.getVariable(5);
    }
    get fuseObjectId() {
      return this.getVariable(6);
    }
    get maxHits() {
      return this.getVariable(7);
    }
    get hits() {
      return this.getVariable(8);
    }
  }
