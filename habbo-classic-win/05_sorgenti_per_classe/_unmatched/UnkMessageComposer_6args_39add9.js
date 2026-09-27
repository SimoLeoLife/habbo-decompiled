// Extracted from HabboAirLauncher.deobf.js, line 121662.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i39add9547e1f1c

class {
    static {
      n(this, "UnkMessageComposer_6args_39add9");
    }
    constructor(e, r, t, i, s, o) {
      ((this.var_344 = e),
        (this.var_4410 = r),
        (this.var_4144 = t),
        (this._x = i),
        (this._y = s),
        (this.var_911 = o));
    }
    static {
      U9t(this, "UnkMessageComposer_6args_39add9");
    }
    getMessageArray() {
      switch (this.var_4410) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          return [`${this.var_344} ${this._x} ${this._y} ${this.var_911}`];
        case RoomObjectCategoryEnum.const_909:
          return [`${this.var_344} ${this.var_4144}`];
        default:
          return [];
      }
    }
    dispose() {}
  }
