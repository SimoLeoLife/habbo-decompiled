// Estratto da HabboAirLauncher.deobf.js, riga 91421.

class extends MessageEvent {
    static {
      n(this, "_i78b2ff4ad9002b");
    }
    static {
      qRr(this, "_i78b2ff4ad9002b");
    }
    constructor(e, r = _ie2a6e0156537fc) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    get _r13aa4ef3e884a4() {
      return this.getParser()._r13aa4ef3e884a4;
    }
    get _r2189f3bd1771f1() {
      return this.getParser()._r2189f3bd1771f1;
    }
    get _r2311c23a1ce5db() {
      return this.getParser()._r2311c23a1ce5db;
    }
    getParser() {
      return this.var_15;
    }
  }
