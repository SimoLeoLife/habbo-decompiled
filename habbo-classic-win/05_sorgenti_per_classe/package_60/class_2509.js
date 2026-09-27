// Extracted from HabboAirLauncher.deobf.js, line 94129.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_2509.as
// Obfuscated name: _if783e41867e12e

class {
    static {
      n(this, "class_2509");
    }
    static {
      ULr(this, "class_2509");
    }
    _flatId = 0;
    _userName = null;
    get flatId() {
      return this._flatId;
    }
    get userName() {
      return this._userName;
    }
    parse(e) {
      return (
        (this._flatId = e.readInteger()),
        e.bytesAvailable && (this._userName = e.readString()),
        !0
      );
    }
    flush() {
      return ((this._userName = null), !0);
    }
  }
