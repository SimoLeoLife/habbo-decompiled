// Estratto da HabboAirLauncher.deobf.js, riga 293995.

class {
  static {
    n(this, "_i232051de556d65");
  }
  _id = 0;
  var_4146 = 0;
  _type = null;
  var_190 = new k();
  var_911 = new k();
  _state = 0;
  _data = null;
  var_3191 = Number.NaN;
  _expiryTime = -1;
  var_4373 = 0;
  var_1514 = 0;
  _ownerName = "";
  var_5344 = !0;
  _realRoomObject = !0;
  var_2506;
  constructor(e, r, t, i, s, o, d, c = Number.NaN, f = -1, l = 0, b = 0, _ = "", h = !0, p = !0, m = -1) {
    ((this._id = e),
      (this.var_4146 = r),
      (this._type = t),
      this.var_190.assign(i),
      this.var_911.assign(s),
      (this._state = o),
      (this._data = d),
      (this.var_3191 = c),
      (this._expiryTime = f),
      (this.var_4373 = l),
      (this.var_1514 = b),
      (this._ownerName = _),
      (this.var_5344 = h),
      (this._realRoomObject = p),
      (this.var_2506 = m));
  }
  get id() {
    return this._id;
  }
  get typeId() {
    return this.var_4146;
  }
  get type() {
    return this._type;
  }
  get loc() {
    return this.var_190;
  }
  get dir() {
    return this.var_911;
  }
  get state() {
    return this._state;
  }
  get data() {
    return this._data;
  }
  get extra() {
    return this.var_3191;
  }
  get expiryTime() {
    return this._expiryTime;
  }
  get usagePolicy() {
    return this.var_4373;
  }
  get ownerId() {
    return this.var_1514;
  }
  get ownerName() {
    return this._ownerName;
  }
  get synchronized() {
    return this.var_5344;
  }
  get _rdcd0d82e425da5() {
    return this._realRoomObject;
  }
  get _rea41d73d88249a() {
    return this.var_2506;
  }
}
