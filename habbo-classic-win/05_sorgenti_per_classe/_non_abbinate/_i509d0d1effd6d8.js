// Estratto da HabboAirLauncher.deobf.js, riga 105345.

class {
    static {
      n(this, "_i509d0d1effd6d8");
    }
    static {
      uZr(this, "_i509d0d1effd6d8");
    }
    var_2440 = 0;
    _r9a236f7b5e14f6 = [];
    flush() {
      return ((this._r9a236f7b5e14f6 = []), !0);
    }
    parse(e) {
      this.var_2440 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r9a236f7b5e14f6.push(new _i0e41126f9bd2e3(e));
      return !0;
    }
    get roomId() {
      return this.var_2440;
    }
    get _r8775ced31d65fd() {
      return this._r9a236f7b5e14f6;
    }
  }
