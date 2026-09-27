// Estratto da HabboAirLauncher.deobf.js, riga 110961.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/WiredTransactionSuccessContents.as
// Nome offuscato: _if3795d07afa656

class a {
    static {
      n(this, "WiredTransactionSuccessContents");
    }
    static {
      jit(this, "WiredTransactionSuccessContents");
    }
    static const_970 = 2;
    var_4608;
    _r7d185e689ea1e5;
    var_5647 = null;
    var_3350 = null;
    var_4022;
    constructor(e, r) {
      ((this.var_4608 = e), (this.var_4022 = r.readInteger()));
      let t = !1;
      (this.var_4022 === a.const_970 &&
        r.bytesAvailable > 0 &&
        ((this.var_5647 = J_.readFromMessage(r)),
        (this.var_3350 = r.readString()),
        (t = r.readBoolean())),
        (this._r7d185e689ea1e5 = t));
    }
    get _rc379d503e42585() {
      return this.var_4608;
    }
    get _rbd2740c44b9af2() {
      return this.var_4022;
    }
    get _rb8ba5dcaad6794() {
      return this.var_5647;
    }
    get rewardText() {
      return this.var_3350;
    }
    get _rb07163afa71006() {
      return this._r7d185e689ea1e5;
    }
  }
