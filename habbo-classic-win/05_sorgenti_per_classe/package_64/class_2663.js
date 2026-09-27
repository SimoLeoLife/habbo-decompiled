// Estratto da HabboAirLauncher.deobf.js, riga 100599.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_64/class_2663.as
// Nome offuscato: _i750612390e87eb

class {
    static {
      n(this, "class_2663");
    }
    static {
      Mzr(this, "class_2663");
    }
    _id;
    var_5138;
    _r7d5ebd655b0669 = 0;
    _rf3ea8fda0952db = 0;
    var_4930 = 0;
    var_4511 = 0;
    _y = 0;
    _z = 0;
    var_911 = "";
    _type = 0;
    _state = 0;
    _data = "";
    var_126 = !1;
    var_4373 = 0;
    var_1514 = 0;
    _ownerName = "";
    var_2180 = 0;
    constructor(e, r, t) {
      ((this._id = e), (this._type = r), (this.var_5138 = t));
    }
    setReadOnly() {
      this.var_126 = !0;
    }
    get id() {
      return this._id;
    }
    get _rf4007f75f33533() {
      return this.var_5138;
    }
    get _r7020b3fd6fb75f() {
      return this._r7d5ebd655b0669;
    }
    set _r7020b3fd6fb75f(e) {
      this.var_126 || (this._r7d5ebd655b0669 = e);
    }
    get wallX() {
      return this._rf3ea8fda0952db;
    }
    set wallX(e) {
      this.var_126 || (this._rf3ea8fda0952db = e);
    }
    get localX() {
      return this.var_4930;
    }
    set localX(e) {
      this.var_126 || (this.var_4930 = e);
    }
    get localY() {
      return this.var_4511;
    }
    set localY(e) {
      this.var_126 || (this.var_4511 = e);
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this.var_126 || (this._y = e);
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this.var_126 || (this._z = e);
    }
    get dir() {
      return this.var_911;
    }
    set dir(e) {
      this.var_126 || (this.var_911 = e);
    }
    get type() {
      return this._type;
    }
    set type(e) {
      this.var_126 || (this._type = e);
    }
    get state() {
      return this._state;
    }
    set state(e) {
      this.var_126 || (this._state = e);
    }
    get data() {
      return this._data;
    }
    set data(e) {
      this.var_126 || (this._data = e);
    }
    get usagePolicy() {
      return this.var_4373;
    }
    set usagePolicy(e) {
      this.var_126 || (this.var_4373 = e);
    }
    get ownerId() {
      return this.var_1514;
    }
    set ownerId(e) {
      this.var_126 || (this.var_1514 = e);
    }
    get ownerName() {
      return this._ownerName;
    }
    set ownerName(e) {
      this.var_126 || (this._ownerName = e);
    }
    get secondsToExpiration() {
      return this.var_2180;
    }
    set secondsToExpiration(e) {
      this.var_126 || (this.var_2180 = e);
    }
  }
