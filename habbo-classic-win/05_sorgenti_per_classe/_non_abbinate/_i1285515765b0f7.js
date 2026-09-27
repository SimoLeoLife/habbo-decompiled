// Estratto da HabboAirLauncher.deobf.js, riga 91114.

class extends MessageEvent {
    static {
      n(this, "_i1285515765b0f7");
    }
    static {
      BRr(this, "_i1285515765b0f7");
    }
    constructor(e, r = class_3498) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    getParser() {
      return this.var_15;
    }
  }
