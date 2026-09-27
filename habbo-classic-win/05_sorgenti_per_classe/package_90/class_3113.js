// Extracted from HabboAirLauncher.deobf.js, line 89853.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_90/class_3113.as
// Obfuscated name: _ia8760bb3c2f960

class a {
    static {
      n(this, "class_3113");
    }
    static {
      Ukr(this, "class_3113");
    }
    static const_546 = "I";
    static const_343 = "S";
    var_2735;
    var_828;
    var_5031;
    var_4834;
    var_163;
    var_2364;
    var_5035;
    var_5259;
    var_5489;
    var_4882;
    var_2180;
    var_3191 = 0;
    _flatId;
    var_3170;
    var_2917;
    var_2929;
    var_3596;
    var_3882 = "";
    var_3076 = -1;
    constructor(e) {
      ((this.var_2735 = e.readInteger()),
        (this.var_828 = e.readString()),
        (this.var_5031 = e.readInteger()),
        (this.var_4834 = e.readInteger()),
        (this.var_163 = e.readInteger()),
        (this.var_2364 = zs.parseStuffData(e)),
        (this.var_5259 = e.readBoolean()),
        (this.var_5489 = e.readBoolean()),
        (this.var_5035 = e.readBoolean()),
        (this.var_4882 = e.readBoolean()),
        (this.var_2180 = e.readInteger()),
        (this.var_2929 = Date.now()),
        this.secondsToExpiration > -1
          ? (this.var_3596 = !0)
          : ((this.var_3596 = !1), (this.var_2180 = -1)),
        (this.var_2917 = e.readBoolean()),
        (this._flatId = e.readInteger()),
        (this.var_3170 = this.var_828 === a.const_546),
        this.var_828 === a.const_343 &&
          ((this.var_3882 = e.readString()), (this.var_3191 = e.readInteger())));
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
    get isGroupable() {
      return this.var_5035;
    }
    get isRecyclable() {
      return this.var_5259;
    }
    get isTradeable() {
      return this.var_5489;
    }
    get isSellable() {
      return this.var_4882;
    }
    get secondsToExpiration() {
      return this.var_2180;
    }
    get flatId() {
      return this._flatId;
    }
    get slotId() {
      return this.var_3882;
    }
    get songId() {
      return this.var_3076;
    }
    get extra() {
      return this.var_3191;
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
    get creationDay() {
      return 0;
    }
    get creationMonth() {
      return 0;
    }
    get creationYear() {
      return 0;
    }
    get isExternalImageFurni() {
      return this.var_828.indexOf("external_image") !== -1;
    }
  }
