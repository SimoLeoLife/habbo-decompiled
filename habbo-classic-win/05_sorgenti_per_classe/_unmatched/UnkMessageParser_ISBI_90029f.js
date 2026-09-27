// Extracted from HabboAirLauncher.deobf.js, line 73474.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i90029fa5370d97

class {
    static {
      n(this, "UnkMessageParser_ISBI_90029f");
    }
    static {
      F5r(this, "UnkMessageParser_ISBI_90029f");
    }
    _r4f0e6354ed7278 = [];
    flush() {
      return ((this._r4f0e6354ed7278 = []), !0);
    }
    parse(e) {
      this._r4f0e6354ed7278 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_3696();
        ((i._r8d19b9ff41db8a = this._r9e599adcb2ceb7(e)),
          (i._r51fb25c3100aa2 = e.readString()),
          (i._rcdf1b1da879fb4 = e.readBoolean()),
          (i._r8eedd2ac0f49c3 = e.readInteger()),
          (i.var_4283 = this._r9e599adcb2ceb7(e)),
          this._r4f0e6354ed7278.push(i));
      }
      return !0;
    }
    _r9e599adcb2ceb7(e) {
      let r = new UnkClass_6cdbb2();
      return (
        (r.name = e.readString()),
        (r._rcafd90e9559318 = e.readInteger()),
        (r._rd62b531901cecc = e.readInteger()),
        r
      );
    }
  }
