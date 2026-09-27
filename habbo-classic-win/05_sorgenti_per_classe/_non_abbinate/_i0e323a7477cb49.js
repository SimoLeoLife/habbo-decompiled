// Estratto da HabboAirLauncher.deobf.js, riga 85007.

class {
    static {
      n(this, "_i0e323a7477cb49");
    }
    static {
      Qxr(this, "_i0e323a7477cb49");
    }
    var_1625 = [];
    _r9636135ce87b24 = "";
    flush() {
      return ((this.var_1625 = []), !0);
    }
    parse(e) {
      this.var_1625 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1625.push(new class_3624(e));
      return ((this._r9636135ce87b24 = e.readString()), !0);
    }
    get achievements() {
      return this.var_1625;
    }
    get _r5f6cc9592ea239() {
      return this._r9636135ce87b24;
    }
  }
