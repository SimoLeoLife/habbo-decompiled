// Estratto da HabboAirLauncher.deobf.js, riga 125618.

class extends Ma {
    static {
      n(this, "_ic33d1b8c5b5c29");
    }
    static {
      Lwt(this, "_ic33d1b8c5b5c29");
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
