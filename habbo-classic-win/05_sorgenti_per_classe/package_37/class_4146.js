// Extracted from HabboAirLauncher.deobf.js, line 112310.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_4146.as
// Obfuscated name: _i5b45f1d6225ed7

class {
    static {
      n(this, "class_4146");
    }
    static {
      eot(this, "class_4146");
    }
    _badges = null;
    flush() {
      return (this._badges && (this._badges.dispose(), (this._badges = null)), !0);
    }
    parse(e) {
      let r = e.readInteger();
      this._badges = new B();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this._badges.add(i, s);
      }
      return !0;
    }
    get badges() {
      return this._badges?.clone() ?? new B();
    }
  }
