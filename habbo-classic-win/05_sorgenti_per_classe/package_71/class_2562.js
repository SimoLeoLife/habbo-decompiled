// Extracted from HabboAirLauncher.deobf.js, line 101896.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2562.as
// Obfuscated name: _i3e32d1a8a4804e

class {
    static {
      n(this, "class_2562");
    }
    static {
      bXr(this, "class_2562");
    }
    _id = 0;
    var_1129 = "";
    var_1562 = "";
    _customInfo = "";
    _achievementScore = 0;
    var_3126 = -1;
    get id() {
      return this._id;
    }
    get figure() {
      return this.var_1129;
    }
    get sex() {
      return this.var_1562;
    }
    get customInfo() {
      return this._customInfo;
    }
    get achievementScore() {
      return this._achievementScore;
    }
    get badgesRank() {
      return this.var_3126;
    }
    flush() {
      return (
        (this._id = 0),
        (this.var_1129 = ""),
        (this.var_1562 = ""),
        (this._customInfo = ""),
        (this.var_3126 = -1),
        !0
      );
    }
    parse(e) {
      ((this._id = e.readInteger()),
        (this.var_1129 = e.readString()),
        (this.var_1562 = e.readString()),
        (this._customInfo = e.readString()),
        (this._achievementScore = e.readInteger()),
        e.readString());
      let r = e.readInteger();
      for (let t = 0; t < r; t++) (e.readInteger(), e.readInteger(), e.readInteger());
      return (
        (this.var_3126 = e.readInteger()),
        this.var_1562 && (this.var_1562 = this.var_1562.toUpperCase()),
        !0
      );
    }
  }
