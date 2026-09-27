// Extracted from HabboAirLauncher.deobf.js, line 105345.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i509d0d1effd6d8

class {
    static {
      n(this, "UnkMessageParser_II_509d0d");
    }
    static {
      uZr(this, "UnkMessageParser_II_509d0d");
    }
    var_2440 = 0;
    _r9a236f7b5e14f6 = [];
    flush() {
      return ((this._r9a236f7b5e14f6 = []), !0);
    }
    parse(e) {
      this.var_2440 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r9a236f7b5e14f6.push(new UnkClass_0e4112(e));
      return !0;
    }
    get roomId() {
      return this.var_2440;
    }
    get _r8775ced31d65fd() {
      return this._r9a236f7b5e14f6;
    }
  }
