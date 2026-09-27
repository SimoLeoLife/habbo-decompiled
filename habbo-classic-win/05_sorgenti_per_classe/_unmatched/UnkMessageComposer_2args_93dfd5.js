// Extracted from HabboAirLauncher.deobf.js, line 119842.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i93dfd5fdbe959d

class {
    static {
      n(this, "UnkMessageComposer_2args_93dfd5");
    }
    static {
      f8t(this, "UnkMessageComposer_2args_93dfd5");
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
