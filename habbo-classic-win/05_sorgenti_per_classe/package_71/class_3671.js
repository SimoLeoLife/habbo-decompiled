// Extracted from HabboAirLauncher.deobf.js, line 101338.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3671.as
// Obfuscated name: _ia5c32b5e4be6ed

class {
    static {
      n(this, "class_3671");
    }
    static {
      CQr(this, "class_3671");
    }
    _id = 0;
    var_4711 = !1;
    var_3338 = 0;
    var_3844 = 0;
    get id() {
      return this._id;
    }
    get isExpired() {
      return this.var_4711;
    }
    get pickerId() {
      return this.var_3338;
    }
    get delay() {
      return this.var_3844;
    }
    flush() {
      return ((this._id = 0), (this.var_3844 = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._id = Number.parseInt(e.readString(), 10)),
          (this.var_4711 = e.readBoolean()),
          (this.var_3338 = e.readInteger()),
          (this.var_3844 = e.readInteger()),
          !0)
        : !1;
    }
  }
