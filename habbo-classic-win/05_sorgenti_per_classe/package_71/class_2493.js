// Extracted from HabboAirLauncher.deobf.js, line 100851.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2493.as
// Obfuscated name: _i579540dc54294d

class {
    static {
      n(this, "class_2493");
    }
    static {
      Lzr(this, "class_2493");
    }
    _id = 0;
    var_2025 = "";
    get id() {
      return this._id;
    }
    get itemData() {
      return this.var_2025;
    }
    flush() {
      return ((this._id = 0), (this.var_2025 = ""), !0);
    }
    parse(e) {
      return e
        ? ((this._id = Number.parseInt(e.readString(), 10)),
          (this.var_2025 = e.readString()),
          !0)
        : !1;
    }
  }
