// Estratto da HabboAirLauncher.deobf.js, riga 126776.

class {
    static {
      n(this, "_ia8ceca3c0b0f1e");
    }
    static {
      pIt(this, "_ia8ceca3c0b0f1e");
    }
    _rcb52edb6493c3c;
    _r156889ca1443d7;
    var_3477;
    constructor(e) {
      ((this._rcb52edb6493c3c = e.readInteger()),
        (this._r156889ca1443d7 = e.readInteger()),
        (this.var_3477 = e.readBoolean()));
    }
    get requiredCount() {
      return this._rcb52edb6493c3c;
    }
    get _r4d5c0d3406eb1e() {
      return this._r156889ca1443d7;
    }
    get premium() {
      return this.var_3477;
    }
  }
