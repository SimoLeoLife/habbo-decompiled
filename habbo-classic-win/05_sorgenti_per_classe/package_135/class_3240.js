// Extracted from HabboAirLauncher.deobf.js, line 110865.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/class_3240.as
// Obfuscated name: _i81d56d13869713

class {
    static {
      n(this, "class_3240");
    }
    static {
      Oit(this, "class_3240");
    }
    static var_5748 = 0;
    static var_5887 = 1;
    _amount;
    var_770;
    _disposed = !1;
    var_3916;
    var_3322;
    var_2910;
    var_3711;
    constructor(e) {
      ((this.var_3322 = e.readInteger()),
        (this.var_3916 = e.readLong()),
        (this.var_3711 = e.readInteger()),
        (this.var_770 = e.readInteger()),
        (this._amount = e.readInteger()),
        (this.var_2910 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2910.push(new WiredTransactionInfo(e));
    }
    get _rebc2df37e3490e() {
      return this.var_3322;
    }
    get _r33058b88a88edd() {
      return this.var_3916;
    }
    get _r4ca10303e5c375() {
      return this.var_3711;
    }
    get currentPage() {
      return this.var_770;
    }
    get amount() {
      return this._amount;
    }
    get logs() {
      return this.var_2910;
    }
    dispose() {
      this._disposed ||
        ((this.var_3322 = 0),
        (this.var_3916 = 0),
        (this.var_3711 = 0),
        (this.var_770 = 0),
        (this._amount = 0),
        (this.var_2910 = null),
        (this._disposed = !0));
    }
    get disposed() {
      return this._disposed;
    }
  }
