// Estratto da HabboAirLauncher.deobf.js, riga 105083.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2984.as
// Nome offuscato: _i12851d3c18c3af

class {
    static {
      n(this, "class_2984");
    }
    static {
      j$r(this, "class_2984");
    }
    _name;
    var_203;
    _r542dd6623dac18;
    constructor(e, r) {
      ((this._name = e), (this.var_203 = r), (this._r542dd6623dac18 = new B()));
    }
    get name() {
      return this._name;
    }
    get target() {
      return this.var_203;
    }
    get queueTypes() {
      return this._r542dd6623dac18.getKeys();
    }
    getQueueSize(e) {
      return this._r542dd6623dac18.getValue(e) ?? 0;
    }
    addQueue(e, r) {
      this._r542dd6623dac18.add(e, r);
    }
  }
