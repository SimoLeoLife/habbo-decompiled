// Extracted from HabboAirLauncher.deobf.js, line 105011.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2664.as
// Obfuscated name: _i3aeede050f39ab

class {
    static {
      n(this, "class_2664");
    }
    static {
      L$r(this, "class_2664");
    }
    _flatId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
  }
