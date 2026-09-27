// Estratto da HabboAirLauncher.deobf.js, riga 94502.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_2151.as
// Nome offuscato: _i8c3cc3046c9499

class a {
    static {
      n(this, "class_2151");
    }
    static {
      dNr(this, "class_2151");
    }
    static const_260 = 1;
    static const_667 = 2;
    static const_1340 = 4;
    static const_992 = 8;
    static const_979 = 16;
    static const_1045 = 32;
    _flatId;
    _roomName;
    _r0580f6acd5ceb6;
    var_1514;
    _ownerName;
    _doorMode;
    var_3576;
    var_5351;
    _description;
    _tradeMode;
    var_971;
    var_4390;
    var_3180;
    var_5273 = 0;
    _groupName = "";
    var_4486 = "";
    var_598 = [];
    var_4118;
    _rc062fab3f0e0c1;
    _rebe5249c166189;
    _r7c4922f9107151 = "";
    var_4418 = "";
    var_5123 = 0;
    _r7a4b4815d1d0c7 = !1;
    _r2786b44a167a81 = !1;
    _disposed = !1;
    _r65a2918cdbe092 = null;
    constructor(e) {
      ((this._flatId = e.readInteger()),
        (this._roomName = e.readString()),
        (this.var_1514 = e.readInteger()),
        (this._ownerName = e.readString()),
        (this._doorMode = e.readInteger()),
        (this.var_3576 = e.readInteger()),
        (this.var_5351 = e.readInteger()),
        (this._description = e.readString()),
        (this._tradeMode = e.readInteger()),
        (this.var_971 = e.readInteger()),
        (this.var_4390 = e.readInteger()),
        (this.var_3180 = e.readInteger()));
      let r = e.readInteger();
      for (let i = 0; i < r; i++) this.var_598.push(e.readString());
      let t = e.readInteger();
      ((t & a.const_260) > 0 && (this._r65a2918cdbe092 = e.readString()),
        (t & a.const_667) > 0 &&
          ((this.var_5273 = e.readInteger()),
          (this._groupName = e.readString()),
          (this.var_4486 = e.readString())),
        (t & a.const_1340) > 0 &&
          ((this._r7c4922f9107151 = e.readString()),
          (this.var_4418 = e.readString()),
          (this.var_5123 = e.readInteger())),
        (this._r0580f6acd5ceb6 = (t & a.const_992) > 0),
        (this._rc062fab3f0e0c1 = (t & a.const_979) > 0),
        (this._rebe5249c166189 = (t & a.const_1045) > 0),
        (this.var_4118 = new _fe(null)),
        this.var_4118.setDefaults());
    }
    get disposed() {
      return this._disposed;
    }
    get flatId() {
      return this._flatId;
    }
    get roomName() {
      return this._roomName;
    }
    set roomName(e) {
      this._roomName = e;
    }
    get _r6b883803c75d7f() {
      return this._r0580f6acd5ceb6;
    }
    get ownerId() {
      return this.var_1514;
    }
    get ownerName() {
      return this._ownerName;
    }
    get _rf742cf771d167a() {
      return this._doorMode;
    }
    get userCount() {
      return this.var_3576;
    }
    get _ra66356507ed6a4() {
      return this.var_5351;
    }
    get description() {
      return this._description;
    }
    get tradeMode() {
      return this._tradeMode;
    }
    get score() {
      return this.var_971;
    }
    get ranking() {
      return this.var_4390;
    }
    get categoryId() {
      return this.var_3180;
    }
    get habboGroupId() {
      return this.var_5273;
    }
    get groupName() {
      return this._groupName;
    }
    get groupBadgeCode() {
      return this.var_4486;
    }
    get tags() {
      return this.var_598;
    }
    get thumbnail() {
      return this.var_4118;
    }
    get _rf5545c5fca5ee0() {
      return this._rc062fab3f0e0c1;
    }
    get _r0dd612dfe40a00() {
      return this._rebe5249c166189;
    }
    get roomAdName() {
      return this._r7c4922f9107151;
    }
    get roomAdDescription() {
      return this.var_4418;
    }
    get _r92fc4be8b2592f() {
      return this.var_5123;
    }
    get _r01bc015c33ec89() {
      return this._r7a4b4815d1d0c7;
    }
    set _r01bc015c33ec89(e) {
      this._r7a4b4815d1d0c7 = e;
    }
    get _r6ce72253ab2cde() {
      return this._r65a2918cdbe092;
    }
    get _rbe41b4412cc2f5() {
      return this._r2786b44a167a81;
    }
    set _rbe41b4412cc2f5(e) {
      this._r2786b44a167a81 = e;
    }
    dispose() {
      this._disposed || ((this._disposed = !0), (this.var_598 = null));
    }
  }
