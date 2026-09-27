// Extracted from HabboAirLauncher.deobf.js, line 101278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3560.as
// Obfuscated name: _iff2c97c73ab10d

class {
    static {
      n(this, "class_3560");
    }
    static {
      wQr(this, "class_3560");
    }
    var_163 = 0;
    _id = 0;
    var_3707 = null;
    var_3202 = null;
    get category() {
      return this.var_163;
    }
    get id() {
      return this._id;
    }
    get confirmTitle() {
      return this.var_3707;
    }
    get confirmBody() {
      return this.var_3202;
    }
    flush() {
      return (
        (this.var_163 = 0),
        (this._id = 0),
        (this.var_3202 = null),
        (this.var_3707 = null),
        !0
      );
    }
    parse(e) {
      return e
        ? ((this.var_163 = e.readInteger() === 1 ? RoomObjectCategoryEnum.const_909 : RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
          (this._id = e.readInteger()),
          (this.var_3707 = e.readString()),
          (this.var_3202 = e.readString()),
          !0)
        : !1;
    }
  }
