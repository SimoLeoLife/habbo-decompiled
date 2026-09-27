// Extracted from HabboAirLauncher.deobf.js, line 96787.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_27/class_2600.as
// Obfuscated name: _i4885ee0e9f8c51

class {
    static {
      n(this, "class_2600");
    }
    static {
      uHr(this, "class_2600");
    }
    _type = null;
    _parameters = null;
    get type() {
      return this._type;
    }
    get parameters() {
      return this._parameters;
    }
    flush() {
      return ((this._type = null), (this._parameters = null), !0);
    }
    parse(e) {
      ((this._type = e.readString()), (this._parameters = new B()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readString(),
          s = e.readString();
        this._parameters.add(i, s);
      }
      return !0;
    }
  }
