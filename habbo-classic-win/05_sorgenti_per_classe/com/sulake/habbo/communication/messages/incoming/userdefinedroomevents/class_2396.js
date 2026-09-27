// Extracted from HabboAirLauncher.deobf.js, line 107726.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/class_2396.as
// Obfuscated name: _idfd0190c53ba75

class {
    static {
      n(this, "class_2396");
    }
    static {
      het(this, "class_2396");
    }
    var_4576;
    var_2488 = [];
    _stuffIds2 = [];
    _id;
    var_2061;
    _intParams = [];
    _rbbe62f1bfc3ef7 = [];
    _rda1406d3602bcc;
    _code;
    _furniSourceTypes = [];
    _userSourceTypes = [];
    var_5545;
    _r36b803e2c2e65e;
    _r74eb90149d9848;
    _r7a46c9714b0096;
    _r3ff1c58bb24742 = [];
    constructor(e) {
      this.var_4576 = e.readInteger();
      let r = e.readInteger();
      for (let c = 0; c < r; c++) this.var_2488.push(e.readInteger());
      r = e.readInteger();
      for (let c = 0; c < r; c++) this._stuffIds2.push(e.readInteger());
      ((this._rda1406d3602bcc = e.readInteger()),
        (this._id = e.readInteger()),
        (this.var_2061 = e.readString()));
      let t = e.readInteger();
      for (let c = 0; c < t; c++) this._intParams.push(e.readInteger());
      let i = e.readInteger();
      for (let c = 0; c < i; c++) this._rbbe62f1bfc3ef7.push(e.readString());
      let s = e.readInteger();
      for (let c = 0; c < s; c++) this._furniSourceTypes.push(e.readInteger());
      let o = e.readInteger();
      for (let c = 0; c < o; c++) this._userSourceTypes.push(e.readInteger());
      ((this._code = e.readInteger()),
        this.readDefinitionSpecifics(e),
        (this.var_5545 = e.readBoolean()),
        (this._r36b803e2c2e65e = new f7(e)),
        (this._r74eb90149d9848 = e.readBoolean()),
        this._r946f1591888dbb(e),
        (this._r7a46c9714b0096 = new C_e(e)));
      let d = e.readInteger();
      for (let c = 0; c < d; c++) this._r3ff1c58bb24742.push(e.readInteger());
    }
    get furniLimit() {
      return this.var_4576;
    }
    get stuffIds() {
      return this.var_2488;
    }
    set stuffIds(e) {
      this.var_2488 = e;
    }
    get stuffIds2() {
      return this._stuffIds2;
    }
    set stuffIds2(e) {
      this._stuffIds2 = e;
    }
    get id() {
      return this._id;
    }
    get _r7e8836fc336e43() {
      return this.var_2061;
    }
    set _r7e8836fc336e43(e) {
      this.var_2061 = e;
    }
    get intParams() {
      return this._intParams;
    }
    set intParams(e) {
      this._intParams = e;
    }
    get _r1385185994d461() {
      return this._rbbe62f1bfc3ef7;
    }
    set _r1385185994d461(e) {
      this._rbbe62f1bfc3ef7 = e;
    }
    get _r7ba6f01e49d6c6() {
      return this._furniSourceTypes;
    }
    set _r7ba6f01e49d6c6(e) {
      this._furniSourceTypes = e;
    }
    get _ra3ec1f5c3b2503() {
      return this._userSourceTypes;
    }
    set _ra3ec1f5c3b2503(e) {
      this._userSourceTypes = e;
    }
    get _rb99874ef1c36cc() {
      return this.var_5545;
    }
    get _red1f8e750b075d() {
      return this._r36b803e2c2e65e;
    }
    get code() {
      return this._code;
    }
    get _r915121725e929b() {
      return this._rda1406d3602bcc;
    }
    getBoolean(e) {
      return this._intParams[e] === 1;
    }
    getString(e = -1, r = "	") {
      if (e === -1) return this.var_2061;
      let t = this.var_2061.split(r);
      return t.length > e ? t[e] : "";
    }
    getInt(e) {
      return this._intParams[e];
    }
    get _r727c96186c54bc() {
      return this._r74eb90149d9848;
    }
    get _r09c1c618a6015f() {
      return this._r7a46c9714b0096;
    }
    get concat() {
      return this._r3ff1c58bb24742;
    }
    readDefinitionSpecifics(e) {}
    _r946f1591888dbb(e) {}
    get _r81b758a563d02c() {
      return this._r36b803e2c2e65e.isUsingAdvancedSettings(this._r7ba6f01e49d6c6, this._ra3ec1f5c3b2503);
    }
  }
