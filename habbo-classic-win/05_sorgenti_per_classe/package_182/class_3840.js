// Extracted from HabboAirLauncher.deobf.js, line 84854.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_182/class_3840.as
// Obfuscated name: _i71f46302631471

class {
    static {
      n(this, "class_3840");
    }
    static {
      Hxr(this, "class_3840");
    }
    _stuffId = -1;
    var_1625 = [];
    _endTime = -1;
    flush() {
      this._stuffId = -1;
      for (let e of this.var_1625) e.dispose();
      return ((this.var_1625 = []), (this._endTime = -1), !0);
    }
    parse(e) {
      this._stuffId = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1625.push(new sde(e));
      return ((this._endTime = e.readInteger()), !0);
    }
    get stuffId() {
      return this._stuffId;
    }
    get achievements() {
      return this.var_1625;
    }
    get endTime() {
      return this._endTime;
    }
  }
