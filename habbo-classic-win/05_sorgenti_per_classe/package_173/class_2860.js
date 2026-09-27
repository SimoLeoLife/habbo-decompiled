// Extracted from HabboAirLauncher.deobf.js, line 89032.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_173/class_2860.as
// Obfuscated name: _iff0e859762fbcd

class {
    static {
      n(this, "class_2860");
    }
    static {
      IAr(this, "class_2860");
    }
    _type = 0;
    _duration = 0;
    _permanent = !1;
    flush() {
      return ((this._type = 0), (this._duration = 0), !0);
    }
    parse(e) {
      return (
        (this._type = e.readInteger()),
        (this._duration = e.readInteger()),
        (this._permanent = e.readBoolean()),
        !0
      );
    }
    get type() {
      return this._type;
    }
    get duration() {
      return this._duration;
    }
    get isPermanent() {
      return this._permanent;
    }
  }
