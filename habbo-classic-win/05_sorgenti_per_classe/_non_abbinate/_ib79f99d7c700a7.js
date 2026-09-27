// Estratto da HabboAirLauncher.deobf.js, riga 121617.

class {
    static {
      n(this, "_ib79f99d7c700a7");
    }
    constructor(e, r, t = !1) {
      ((this.var_344 = e), (this.var_4410 = r), (this._rdebda5bf9d0266 = t));
    }
    static {
      O9t(this, "_ib79f99d7c700a7");
    }
    getMessageArray() {
      let e = 0;
      switch (this.var_4410) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          e = 2;
          break;
        case RoomObjectCategoryEnum.const_909:
          e = 1;
          break;
        default:
          return [];
      }
      return [e, this.var_344, this._rdebda5bf9d0266];
    }
    dispose() {}
  }
