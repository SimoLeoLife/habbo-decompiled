// Extracted from HabboAirLauncher.deobf.js, line 90798.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_137/class_2566.as
// Obfuscated name: _i2040adb78f836f

class {
    static {
      n(this, "class_2566");
    }
    static {
      dRr(this, "class_2566");
    }
    var_163;
    var_3705;
    _creationMonth;
    var_3366;
    var_2929;
    var_3191;
    _flatId;
    var_2917;
    var_5035;
    var_3596;
    var_3170;
    var_2735;
    var_828;
    var_4834;
    var_5031;
    var_2180;
    var_2364;
    constructor(e) {
      ((this.var_2735 = e.readInteger()),
        (this.var_828 = e.readString().toUpperCase()),
        (this.var_5031 = e.readInteger()),
        (this.var_4834 = e.readInteger()),
        (this.var_163 = e.readInteger()),
        (this.var_5035 = e.readBoolean()),
        (this.var_2364 = zs.parseStuffData(e)),
        (this.var_2180 = -1),
        (this.var_2929 = Date.now()),
        (this.var_2917 = !1),
        (this.var_3705 = e.readInteger()),
        (this._creationMonth = e.readInteger()),
        (this.var_3366 = e.readInteger()),
        (this.var_3191 = this.var_828 === "S" ? e.readInteger() : -1),
        (this._flatId = -1),
        (this.var_3596 = !1),
        (this.var_3170 = this.var_828 === "I"));
    }
    get itemId() {
      return this.var_2735;
    }
    get itemType() {
      return this.var_828;
    }
    get roomItemId() {
      return this.var_5031;
    }
    get itemTypeId() {
      return this.var_4834;
    }
    get category() {
      return this.var_163;
    }
    get stuffData() {
      return this.var_2364;
    }
    get extra() {
      return this.var_3191;
    }
    get secondsToExpiration() {
      return this.var_2180;
    }
    get creationDay() {
      return this.var_3705;
    }
    get creationMonth() {
      return this._creationMonth;
    }
    get creationYear() {
      return this.var_3366;
    }
    get isGroupable() {
      return this.var_5035;
    }
    get songId() {
      return this.var_3191;
    }
    get flatId() {
      return this._flatId;
    }
    get isRented() {
      return this.var_3596;
    }
    get isWallItem() {
      return this.var_3170;
    }
    get hasRentPeriodStarted() {
      return this.var_2917;
    }
    get expirationTimeStamp() {
      return this.var_2929;
    }
    get isRecyclable() {
      return !0;
    }
    get isTradeable() {
      return !0;
    }
    get isSellable() {
      return !0;
    }
    get slotId() {
      return null;
    }
    get isExternalImageFurni() {
      return this.var_828.indexOf("external_image") !== -1;
    }
  }
