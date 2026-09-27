// Extracted from HabboAirLauncher.deobf.js, line 126438.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_229/class_4029.as
// Obfuscated name: _ibac95c40e0a774

class {
    static {
      n(this, "class_4029");
    }
    static {
      Uyt(this, "class_4029");
    }
    var_1734 = [];
    _r97098907c7d062 = new class_4357();
    get collections() {
      return this.var_1734;
    }
    flush() {
      return ((this.var_1734 = []), !0);
    }
    parse(e) {
      this.var_1734 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_1734.push(this._r97098907c7d062.parse(e));
      return !0;
    }
  }
