// Extracted from HabboAirLauncher.deobf.js, line 100983.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3576.as
// Obfuscated name: _i110d5baaf2e601

class {
    static {
      n(this, "class_3576");
    }
    static {
      Yzr(this, "class_3576");
    }
    _id = 0;
    var_2025 = "";
    _state = 0;
    get id() {
      return this._id;
    }
    get itemData() {
      return this.var_2025;
    }
    get state() {
      return this._state;
    }
    flush() {
      return ((this._id = 0), (this.var_2025 = ""), (this._state = 0), !0);
    }
    parse(e) {
      return e
        ? ((this._id = e.readInteger()),
          (this.var_2025 = e.readString()),
          (this._state = 0),
          Number.isNaN(Number.parseFloat(this.var_2025)) ||
            (this._state = Number.parseInt(this.var_2025, 10)),
          !0)
        : !1;
    }
  }
