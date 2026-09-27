// Estratto da HabboAirLauncher.deobf.js, riga 82772.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_64/class_2708.as
// Nome offuscato: _ic18531d22b8b18

class {
    static {
      n(this, "class_2708");
    }
    static {
      Kwr(this, "class_2708");
    }
    _id;
    _x = 0;
    _y = 0;
    _z = 0;
    var_911 = 0;
    _r8e1740c5360bf6 = 0;
    _r31b35e71aeb155 = 0;
    var_2506 = 0;
    _type = 0;
    var_3191 = -1;
    _state = 0;
    _data = new mi();
    _expiryTime = 0;
    var_4373 = 0;
    var_1514 = 0;
    _ownerName = "";
    _rff3ae1521485b8 = null;
    var_126 = !1;
    var_3063 = !1;
    constructor(e) {
      this._id = e;
    }
    setReadOnly() {
      this.var_126 = !0;
    }
    get id() {
      return this._id;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this.var_126 || (this._x = e);
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
    get sizeX() {
      return this._r8e1740c5360bf6;
    }
    set sizeX(e) {
      this.var_126 || (this._r8e1740c5360bf6 = e);
    }
    get sizeY() {
      return this._r31b35e71aeb155;
    }
    set sizeY(e) {
      this.var_126 || (this._r31b35e71aeb155 = e);
    }
    get _rea41d73d88249a() {
      return this.var_2506;
    }
    set _rea41d73d88249a(e) {
      this.var_126 || (this.var_2506 = e);
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
    get _ra52299348b41b0() {
      return this._rff3ae1521485b8;
    }
    set _ra52299348b41b0(e) {
      this.var_126 || (this._rff3ae1521485b8 = e);
    }
    get extra() {
      return this.var_3191;
    }
    set extra(e) {
      this.var_126 || (this.var_3191 = e);
    }
    get expiryTime() {
      return this._expiryTime;
    }
    set expiryTime(e) {
      this.var_126 || (this._expiryTime = e);
    }
    get usagePolicy() {
      return this.var_4373;
    }
    set usagePolicy(e) {
      this.var_4373 = e;
    }
    get ownerId() {
      return this.var_1514;
    }
    set ownerId(e) {
      this.var_1514 = e;
    }
    get ownerName() {
      return this._ownerName;
    }
    set ownerName(e) {
      this._ownerName = e;
    }
    get _rfc5c7e8c5fbb3e() {
      return this.var_3063;
    }
    set _rfc5c7e8c5fbb3e(e) {
      this.var_3063 = e;
    }
  }
