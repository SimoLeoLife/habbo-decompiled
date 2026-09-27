// Estratto da HabboAirLauncher.deobf.js, riga 89579.

class {
    static {
      n(this, "_i2c617e2cb2bd2a");
    }
    static {
      ukr(this, "_i2c617e2cb2bd2a");
    }
    var_183 = null;
    _r9c23e1c935bb20 = !1;
    flush() {
      return ((this.var_183 = null), !0);
    }
    parse(e) {
      return ((this.var_183 = new class_3017(e)), (this._r9c23e1c935bb20 = e.readBoolean()), !0);
    }
    get item() {
      return this.var_183;
    }
    _r6ed12996488241() {
      return this._r9c23e1c935bb20;
    }
  }
