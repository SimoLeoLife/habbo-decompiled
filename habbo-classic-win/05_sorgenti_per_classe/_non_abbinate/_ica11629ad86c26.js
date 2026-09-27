// Estratto da HabboAirLauncher.deobf.js, riga 75853.

class {
    static {
      n(this, "_ica11629ad86c26");
    }
    static {
      N7r(this, "_ica11629ad86c26");
    }
    itemTypeId;
    startTime;
    endTime;
    _ra0b62add965618;
    price;
    _r341d2a7ebf4f2d;
    itemType;
    constructor(e) {
      switch (
        ((this.itemTypeId = e.readInteger()),
        (this.startTime = e.readInteger()),
        (this.endTime = e.readInteger()),
        (this._ra0b62add965618 = e.readBoolean()),
        (this.price = e.readInteger()),
        (this._r341d2a7ebf4f2d = e.readBoolean()),
        e.readShort())
      ) {
        case 0:
          this.itemType = ps.PRODUCT_TYPE_STUFF;
          break;
        case 1:
          this.itemType = ps.PRODUCT_TYPE_ITEM;
          break;
        case 2:
          this.itemType = ps.const_1159;
          break;
        default:
          this.itemType = ps.PRODUCT_TYPE_STUFF;
          break;
      }
    }
  }
