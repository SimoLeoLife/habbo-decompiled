// Extracted from HabboAirLauncher.deobf.js, line 89579.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2c617e2cb2bd2a

class {
    static {
      n(this, "UnkMessageParser_B_2c617e");
    }
    static {
      ukr(this, "UnkMessageParser_B_2c617e");
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
