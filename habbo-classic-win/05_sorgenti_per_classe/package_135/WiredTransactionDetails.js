// Estratto da HabboAirLauncher.deobf.js, riga 110778.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/WiredTransactionDetails.as
// Nome offuscato: _ib942451190ba6f

class {
    static {
      n(this, "WiredTransactionDetails");
    }
    static {
      Rit(this, "WiredTransactionDetails");
    }
    WiredTransactionInfo;
    var_4131;
    _rab31b36123a2d1;
    _transactionInfo;
    _rfa4af954cc26c9;
    constructor(e) {
      ((this._transactionInfo = new WiredTransactionInfo(e)),
        (this.WiredTransactionInfo = []),
        (this.var_4131 = new B()),
        (this._rfa4af954cc26c9 = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.WiredTransactionInfo.push(e.readInteger());
      r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = Vb.readFromMessage(e),
          s = e.readInteger();
        this.var_4131.add(i, s);
      }
      r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = Vb.readFromMessage(e),
          s = e.readInteger();
        this._rfa4af954cc26c9.add(i, s);
      }
      this._rab31b36123a2d1 = e.readBoolean();
    }
    get _r2c99812064dbc2() {
      return this._transactionInfo;
    }
    get _rbe205cea74d983() {
      return this.WiredTransactionInfo;
    }
    get _r85141b69102c4a() {
      return this.var_4131;
    }
    get _rdfeb07c237e6b3() {
      return this._rfa4af954cc26c9;
    }
    get _r431988e817bf43() {
      return this._rab31b36123a2d1;
    }
  }
