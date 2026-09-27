// Extracted from HabboAirLauncher.deobf.js, line 73333.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_58/class_2046.as
// Obfuscated name: _i143cb5778d5fde

class {
    static {
      n(this, "class_2046");
    }
    static {
      E5r(this, "class_2046");
    }
    _callForHelpCategories = null;
    _disposed = !1;
    flush() {
      if (this._disposed) return !0;
      if (((this._disposed = !0), this._callForHelpCategories)) for (let e of this._callForHelpCategories) e.dispose();
      return ((this._callForHelpCategories = null), !0);
    }
    parse(e) {
      ((this._disposed = !1), (this._callForHelpCategories = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._callForHelpCategories.push(new class_1989(e));
      return !0;
    }
  }
