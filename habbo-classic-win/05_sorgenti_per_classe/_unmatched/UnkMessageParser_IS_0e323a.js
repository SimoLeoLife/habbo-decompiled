// Extracted from HabboAirLauncher.deobf.js, line 85007.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0e323a7477cb49

class {
    static {
      n(this, "UnkMessageParser_IS_0e323a");
    }
    static {
      Qxr(this, "UnkMessageParser_IS_0e323a");
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
