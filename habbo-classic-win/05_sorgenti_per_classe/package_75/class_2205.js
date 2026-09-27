// Estratto da HabboAirLauncher.deobf.js, riga 92929.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_2205.as
// Nome offuscato: _iab54c354972e4b

class {
    static {
      n(this, "class_2205");
    }
    static {
      QSr(this, "class_2205");
    }
    var_2645;
    var_2805;
    _issues;
    var_5309;
    var_4675;
    var_4543;
    var_5406;
    var_4400;
    var_4937;
    var_4593;
    _disposed = !1;
    constructor(e) {
      let r = new class_3563();
      ((this._issues = []), (this.var_2645 = []), (this.var_2805 = []));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) r.parse(e) && this._issues.push(r.issueData);
      t = e.readInteger();
      for (let i = 0; i < t; i++) this.var_2645.push(e.readString());
      t = e.readInteger();
      for (let i = 0; i < t; i++) e.readString();
      ((this.var_5309 = e.readBoolean()),
        (this.var_4675 = e.readBoolean()),
        (this.var_4543 = e.readBoolean()),
        (this.var_5406 = e.readBoolean()),
        (this.var_4400 = e.readBoolean()),
        (this.var_4937 = e.readBoolean()),
        (this.var_4593 = e.readBoolean()),
        (t = e.readInteger()));
      for (let i = 0; i < t; i++) this.var_2805.push(e.readString());
    }
    dispose() {
      this._disposed ||
        ((this._disposed = !0),
        (this.var_2645 = []),
        (this.var_2805 = []),
        (this._issues = []));
    }
    get disposed() {
      return this._disposed;
    }
    get _r866c55804a6f43() {
      return this.var_2645;
    }
    get _r9e781968c32635() {
      return this.var_2805;
    }
    get issues() {
      return this._issues;
    }
    get _rcb8641858fa2ef() {
      return this.var_5309;
    }
    get _r4b53b923dcf15f() {
      return this.var_4675;
    }
    get _r46cd64cc3cbb58() {
      return this.var_4543;
    }
    get _r16b62de507941d() {
      return this.var_5406;
    }
    get _r32b135b1fc2e30() {
      return this.var_4400;
    }
    get _r53e14d68d5b882() {
      return this.var_4937;
    }
    get _r95837a68af6ad9() {
      return this.var_4593;
    }
  }
