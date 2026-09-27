// Extracted from HabboAirLauncher.deobf.js, line 95989.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_33/class_2005.as
// Obfuscated name: _i47a3f74d3b786d

class {
    static {
      n(this, "class_2005");
    }
    static {
      tFr(this, "class_2005");
    }
    static const_1335 = 2;
    static const_376 = 1;
    static const_154 = 0;
    _searchCode;
    _text;
    var_4393;
    var_5470;
    _viewMode;
    _guestRooms = [];
    constructor(e) {
      ((this._searchCode = e.readString()),
        (this._text = e.readString()),
        (this.var_4393 = e.readInteger()),
        (this.var_5470 = e.readBoolean()),
        (this._viewMode = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._guestRooms.push(new Fb(e));
    }
    get actionAllowed() {
      return this._guestRooms;
    }
    get searchCode() {
      return this._searchCode;
    }
    get text() {
      return this._text;
    }
    get var_1839() {
      return this.var_4393;
    }
    get forceClosed() {
      return this.var_5470;
    }
    get viewMode() {
      return this._viewMode;
    }
    set viewMode(e) {
      this._viewMode = e;
    }
    findGuestRoom(e) {
      for (let r of this._guestRooms) if (r.flatId === e) return r;
      return null;
    }
  }
