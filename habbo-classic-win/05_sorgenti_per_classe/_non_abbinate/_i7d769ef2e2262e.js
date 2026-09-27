// Estratto da HabboAirLauncher.deobf.js, riga 91067.

class extends MessageEvent {
    static {
      n(this, "_i7d769ef2e2262e");
    }
    static {
      CRr(this, "_i7d769ef2e2262e");
    }
    constructor(e, r = _ibf261a8c49fde6) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    get _r22db0312772e45() {
      return this.getParser()._r22db0312772e45;
    }
    getParser() {
      return this.var_15;
    }
  }
