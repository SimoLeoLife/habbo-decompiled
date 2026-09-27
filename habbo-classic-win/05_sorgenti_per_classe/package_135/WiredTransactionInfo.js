// Extracted from HabboAirLauncher.deobf.js, line 110696.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/WiredTransactionInfo.as
// Obfuscated name: _ifd358a34fe202e

class {
    static {
      n(this, "WiredTransactionInfo");
    }
    static {
      kit(this, "WiredTransactionInfo");
    }
    static var_5994 = 2;
    static var_5996 = 3;
    static var_5963 = 4;
    static var_5973 = 0;
    static var_5946 = 1;
    var_4420;
    var_4419;
    var_4375;
    _flatId;
    var_5611;
    var_3436;
    var_4597;
    var_4663;
    var_4566;
    _userId;
    _userName;
    var_5305;
    var_5417;
    constructor(e) {
      ((this.var_4663 = e.readLong()),
        (this._flatId = e.readInteger()),
        (this.var_4566 = e.readInteger()),
        (this.var_4597 = e.readString()),
        (this._userId = e.readInteger()),
        (this._userName = e.readString()),
        (this.var_3436 = e.readLong()),
        (this.var_5611 = e.readString()),
        (this.var_4420 = e.readInteger()),
        (this.var_5417 = e.readInteger()),
        (this.var_4375 = e.readInteger()),
        (this.var_5305 = e.readInteger()),
        (this.var_4419 = e.readInteger()));
    }
    get transactionId() {
      return this.var_4663;
    }
    get flatId() {
      return this._flatId;
    }
    get _r3a0a691d948b48() {
      return this.var_4566;
    }
    get _r77c24ce0abc845() {
      return this.var_4597;
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
    get timestamp() {
      return this.var_3436;
    }
    get _r7b6f1526b2d3b9() {
      return this.var_5611;
    }
    get _r2cac38193b0d1d() {
      return this.var_4420;
    }
    get _r18acd6f116ae77() {
      return this.var_5417;
    }
    get _r8e2adacf7fbd03() {
      return this.var_4375;
    }
    get withdrawFurniCount() {
      return this.var_5305;
    }
    get depositFurniCount() {
      return this.var_4419;
    }
  }
