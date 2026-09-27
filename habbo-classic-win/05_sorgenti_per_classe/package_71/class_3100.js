// Estratto da HabboAirLauncher.deobf.js, riga 100452.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3100.as
// Nome offuscato: _i8e699f953742d8

class a {
    static {
      n(this, "class_3100");
    }
    static {
      gzr(this, "class_3100");
    }
    var_3939 = 16384;
    var_4684 = 16383;
    _data = null;
    _width = 0;
    _height = 0;
    static _r4b030692fe035c(e, r) {
      return e === -1 ? -1 : (e & r) / 256;
    }
    static _rbde6bff76deb4a(e, r) {
      return !!(e & r);
    }
    static decodeIsRoomTile(e) {
      return e !== -1;
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    set stackingBlockedMaskBit(e) {
      ((this.var_3939 = 1 << e), (this.var_4684 = this.var_3939 - 1));
    }
    _r4b030692fe035c(e) {
      return a._r4b030692fe035c(e, this.var_4684);
    }
    _rbde6bff76deb4a(e) {
      return a._rbde6bff76deb4a(e, this.var_3939);
    }
    getTileHeight(e, r) {
      return e < 0 || e >= this._width || r < 0 || r >= this._height || !this._data
        ? -1
        : this._r4b030692fe035c(this._data[r * this._width + e] ?? -1);
    }
    _rf28b795e1c38e4(e, r) {
      return e < 0 || e >= this._width || r < 0 || r >= this._height || !this._data
        ? !0
        : this._rbde6bff76deb4a(this._data[r * this._width + e] ?? -1);
    }
    _r3085c853f55b25(e, r) {
      return e < 0 || e >= this._width || r < 0 || r >= this._height || !this._data
        ? !1
        : a.decodeIsRoomTile(this._data[r * this._width + e] ?? -1);
    }
    flush() {
      return ((this._data = null), (this._width = 0), (this._height = 0), !0);
    }
    parse(e) {
      if (!e) return !1;
      this._width = e.readInteger();
      let r = e.readInteger();
      ((this._height = r / this._width), (this._data = new Array(r)));
      for (let t = 0; t < r; t++) this._data[t] = e.readShort();
      return !0;
    }
  }
