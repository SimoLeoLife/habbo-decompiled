// Estratto da HabboAirLauncher.deobf.js, riga 125597.

class extends Ma {
    static {
      n(this, "_i8993b3f79c7246");
    }
    static {
      Swt(this, "_i8993b3f79c7246");
    }
    var_4389 = 0;
    get humanGameObjectId() {
      return this.var_4389;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      this.var_4389 = e.readInteger();
    }
  }
