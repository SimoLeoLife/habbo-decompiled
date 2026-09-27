// Extracted from HabboAirLauncher.deobf.js, line 90913.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_119/class_3644.as
// Obfuscated name: _i4abb6f87510b82

class {
    static {
      n(this, "class_3644");
    }
    static {
      fRr(this, "class_3644");
    }
    static const_354 = 8;
    static const_1237 = 7;
    _otherUserName = "";
    var_2731 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_2731 = e.readInteger()),
        (this._otherUserName = e.readString()),
        !0
      );
    }
    get reason() {
      return this.var_2731;
    }
    get otherUserName() {
      return this._otherUserName;
    }
  }
