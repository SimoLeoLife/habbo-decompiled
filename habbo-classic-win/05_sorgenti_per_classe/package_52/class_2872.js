// Estratto da HabboAirLauncher.deobf.js, riga 94438.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_2872.as
// Nome offuscato: _i5cd479c06edb49

class a {
    static {
      n(this, "class_2872");
    }
    static {
      sNr(this, "class_2872");
    }
    var_1086 = 0;
    var_1172 = 0;
    var_415 = [];
    _disposed = !1;
    constructor(e) {
      if (!e) return;
      ((this.var_1086 = e.readInteger()), (this.var_1172 = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new ZZ();
        ((i.pos = e.readInteger()),
          (i.imgId = e.readInteger()),
          this.var_415.push(i));
      }
      this.var_1086 === 0 && this.setDefaults();
    }
    get disposed() {
      return this._disposed;
    }
    get _r1839cdc3bf45d5() {
      return this.var_1086;
    }
    set _r1839cdc3bf45d5(e) {
      this.var_1086 = e;
    }
    get _rdde9e7969c3fe3() {
      return this.var_1172;
    }
    set _rdde9e7969c3fe3(e) {
      this.var_1172 = e;
    }
    get objects() {
      return this.var_415;
    }
    setDefaults() {
      ((this.var_1086 = 1), (this.var_1172 = 0));
      let e = new ZZ();
      ((e.pos = 4), (e.imgId = 1), this.var_415.push(e));
    }
    getCopy() {
      let e = new a(null);
      ((e.var_1086 = this.var_1086), (e.var_1172 = this.var_1172));
      for (let r of this.var_415 ?? []) e.objects.push(r.getCopy());
      return e;
    }
    dispose() {
      this._disposed || ((this._disposed = !0), (this.var_415 = null));
    }
    getAsString() {
      let e = this.var_1172 + ";";
      e += this.var_1086 + ";";
      for (let r of this.var_415 ?? []) e += r.imgId + "," + r.pos + ";";
      return e;
    }
  }
