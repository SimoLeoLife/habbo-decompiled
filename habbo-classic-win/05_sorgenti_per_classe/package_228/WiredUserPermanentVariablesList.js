// Extracted from HabboAirLauncher.deobf.js, line 109373.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_228/WiredUserPermanentVariablesList.as
// Obfuscated name: _if98c50ff8915ba

class {
    static {
      n(this, "WiredUserPermanentVariablesList");
    }
    static {
      jtt(this, "WiredUserPermanentVariablesList");
    }
    var_5270;
    var_5235;
    var_5316;
    var_3962;
    _r6e0207afb00542;
    var_1514;
    _ownerName;
    _rbbe62f1bfc3ef7;
    _r35b6b7521ed233;
    constructor(e) {
      ((this.var_3962 = e.readInteger()),
        (this.var_5235 = e.readInteger()),
        (this.var_5316 = e.readString()),
        (this.var_5270 = e.readString()));
      let r = 0,
        t = "",
        i = "";
      (this.var_3962 !== RoomObjectTypeEnum.OBJECT_TYPE_USER &&
        ((r = e.readInteger()), (t = e.readString()), (i = e.readString())),
        (this.var_1514 = r),
        (this._ownerName = t),
        (this._r6e0207afb00542 = i),
        (this._r35b6b7521ed233 = []),
        (this._rbbe62f1bfc3ef7 = new Map()));
      let s = e.readInteger();
      for (let o = 0; o < s; o++) {
        let d = new WiredVariableStorageParameter(e, !0);
        (this._r35b6b7521ed233.push(d), d.variableId !== null && this._rbbe62f1bfc3ef7.set(d.variableId, !0));
      }
    }
    get _racdc611b14035d() {
      return this.var_3962;
    }
    get entityId() {
      return this.var_5235;
    }
    get entityName() {
      return this.var_5316;
    }
    get _r6bb9e6143b8637() {
      return this.var_5270;
    }
    get ownerId() {
      return this.var_1514;
    }
    get ownerName() {
      return this._ownerName;
    }
    get _r3ef66eea4a74e7() {
      return this._r6e0207afb00542;
    }
    get _rb053559623c506() {
      return this._r35b6b7521ed233;
    }
    get _r1385185994d461() {
      return this._rbbe62f1bfc3ef7;
    }
  }
