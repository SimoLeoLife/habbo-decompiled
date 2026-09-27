// Estratto da HabboAirLauncher.deobf.js, riga 125847.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_7/SnowballGameObjectData.as
// Nome offuscato: _iff7a813b5ecc76

class a extends Xa {
    static {
      n(this, "SnowballGameObjectData");
    }
    static {
      Ywt(this, "SnowballGameObjectData");
    }
    static const_38 = 11;
    static TRAJECTORY_LONG_LOB = 2;
    static TRAJECTORY_QUICK_THROW = 0;
    static TRAJECTORY_SHORT_LOB = 1;
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
    get _r1acd390142c80c() {
      return this.getVariable(4);
    }
    get _rec9630da82b277() {
      return this.getVariable(5);
    }
    get trajectory() {
      return this.getVariable(6);
    }
    get _r970c4511993861() {
      return this.getVariable(7);
    }
    get _r2b90cc10c41442() {
      return this.getVariable(8);
    }
    get _rc2bae7730c6739() {
      return this.getVariable(9);
    }
    get _rdde3a8de3f9ceb() {
      return this.getVariable(10);
    }
  }
