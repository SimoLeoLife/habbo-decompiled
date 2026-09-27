// Estratto da HabboAirLauncher.deobf.js, riga 100533.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3203.as
// Nome offuscato: _i32aac278ebf196

class {
    static {
      n(this, "class_3203");
    }
    static {
      Izr(this, "class_3203");
    }
    _data = null;
    _count = 0;
    _x = 0;
    _y = 0;
    _value = 0;
    var_3939 = 16384;
    var_4684 = 16383;
    set stackingBlockedMaskBit(e) {
      ((this.var_3939 = 1 << e), (this.var_4684 = this.var_3939 - 1));
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    get _r6010569cef737d() {
      return D4._r4b030692fe035c(this._value, this.var_4684);
    }
    get _r41bbf93acb1863() {
      return D4._rbde6bff76deb4a(this._value, this.var_3939);
    }
    get _r3085c853f55b25() {
      return D4.decodeIsRoomTile(this._value);
    }
    next() {
      return !this._data || this._count === 0
        ? !1
        : (this._count--,
          (this._x = this._data.readByte()),
          (this._y = this._data.readByte()),
          (this._value = this._data.readShort()),
          !0);
    }
    flush() {
      return ((this._count = 0), (this._data = null), !0);
    }
    parse(e) {
      return e ? ((this._data = e), (this._count = e.readByte()), !0) : !1;
    }
  }
