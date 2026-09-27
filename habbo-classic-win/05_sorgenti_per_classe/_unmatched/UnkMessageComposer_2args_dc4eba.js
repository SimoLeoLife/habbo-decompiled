// Extracted from HabboAirLauncher.deobf.js, line 119936.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _idc4ebaaeb6fc2f

class {
    static {
      n(this, "UnkMessageComposer_2args_dc4eba");
    }
    static {
      w8t(this, "UnkMessageComposer_2args_dc4eba");
    }
    var_2129 = [];
    constructor(e, r) {
      (this.var_2129.push(e), this.var_2129.push(r));
    }
    getMessageArray() {
      return this.var_2129 ?? [];
    }
    dispose() {
      this.var_2129 = null;
    }
  }
