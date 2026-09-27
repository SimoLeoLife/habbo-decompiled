// Extracted from HabboAirLauncher.deobf.js, line 94839.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_3786.as
// Obfuscated name: _i9ccaaf735621ef

class a {
    static {
      n(this, "class_3786");
    }
    static {
      gNr(this, "class_3786");
    }
    static const_166 = 4;
    static const_544 = 2;
    static const_669 = 1;
    _index;
    var_5687;
    var_5463;
    var_5704;
    var_5683;
    var_2050;
    var_5488;
    var_3576;
    _type;
    var_4265 = "";
    var_55 = null;
    _open = !1;
    _disposed = !1;
    constructor(e) {
      ((this._index = e.readInteger()),
        (this.var_5687 = e.readString()),
        (this.var_5463 = e.readString()),
        (this.var_5704 = e.readInteger() === 1),
        (this.var_5683 = e.readString()),
        (this.var_2050 = e.readString()),
        (this.var_5488 = e.readInteger()),
        (this.var_3576 = e.readInteger()),
        (this._type = e.readInteger()),
        this._type === a.const_669
          ? (this.var_4265 = e.readString())
          : this._type === a.const_544
            ? (this.var_55 = new Fb(e))
            : (this._open = e.readBoolean()));
    }
    get disposed() {
      return this._disposed;
    }
    get type() {
      return this._type;
    }
    get index() {
      return this._index;
    }
    get _r7d18524fd7e75a() {
      return this.var_5687;
    }
    get _rdeb9307da3fb92() {
      return this.var_5463;
    }
    get showDetails() {
      return this.var_5704;
    }
    get picText() {
      return this.var_5683;
    }
    get picRef() {
      return this.var_2050;
    }
    get _ra8ec138befb553() {
      return this.var_5488;
    }
    get tag() {
      return this.var_4265;
    }
    get userCount() {
      return this.var_3576;
    }
    get guestRoomData() {
      return this.var_55;
    }
    get open() {
      return this._open;
    }
    get _r512120b0511d27() {
      return this.type === a.const_544 ? (this.var_55?._ra66356507ed6a4 ?? 0) : 0;
    }
    toggleOpen() {
      this._open = !this._open;
    }
    dispose() {
      this._disposed ||
        ((this._disposed = !0), this.var_55?.dispose(), (this.var_55 = null));
    }
  }
