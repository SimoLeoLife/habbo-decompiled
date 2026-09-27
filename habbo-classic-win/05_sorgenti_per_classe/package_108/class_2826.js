// Extracted from HabboAirLauncher.deobf.js, line 86346.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_2826.as
// Obfuscated name: _i335d8aa1c65aab

class {
    static {
      n(this, "class_2826");
    }
    static {
      bEr(this, "class_2826");
    }
    _groupId = -1;
    var_2523 = -1;
    var_1065 = null;
    get groupId() {
      return this._groupId;
    }
    get threadId() {
      return this.var_2523;
    }
    get message() {
      return this.var_1065;
    }
    flush() {
      return ((this._groupId = -1), (this.var_2523 = -1), (this.var_1065 = null), !0);
    }
    parse(e) {
      return (
        (this._groupId = e.readInteger()),
        (this.var_2523 = e.readInteger()),
        (this.var_1065 = I9.readFromMessage(e)),
        !0
      );
    }
  }
