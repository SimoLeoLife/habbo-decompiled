// Estratto da HabboAirLauncher.deobf.js, riga 121662.

class {
    static {
      n(this, "_i39add9547e1f1c");
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
      U9t(this, "_i39add9547e1f1c");
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
