// Extracted from HabboAirLauncher.deobf.js, line 105496.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia3ce54a0278703

class {
    static {
      n(this, "UnkMessageParser_II_a3ce54");
    }
    static {
      BZr(this, "UnkMessageParser_II_a3ce54");
    }
    var_2440 = 0;
    _r1d49a0d74a9d63 = [];
    parse(e) {
      this.var_2440 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r1d49a0d74a9d63.push(new UnkClass_ec27db(e));
      return !0;
    }
    flush() {
      return ((this._r1d49a0d74a9d63 = []), !0);
    }
    get roomId() {
      return this.var_2440;
    }
    get controllers() {
      return this._r1d49a0d74a9d63;
    }
  }
