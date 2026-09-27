// Extracted from HabboAirLauncher.deobf.js, line 89081.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_173/class_3520.as
// Obfuscated name: _i23571841354b94

class {
    static {
      n(this, "class_3520");
    }
    static {
      MAr(this, "class_3520");
    }
    _type = 0;
    _subType = 0;
    _duration = 0;
    _permanent = !1;
    flush() {
      return ((this._type = 0), (this._subType = 0), (this._duration = 0), !0);
    }
    parse(e) {
      return (
        (this._type = e.readInteger()),
        (this._subType = e.readInteger()),
        (this._duration = e.readInteger()),
        (this._permanent = e.readBoolean()),
        !0
      );
    }
    get type() {
      return this._type;
    }
    get subType() {
      return this._subType;
    }
    get duration() {
      return this._duration;
    }
    get isPermanent() {
      return this._permanent;
    }
  }
