// Estratto da HabboAirLauncher.deobf.js, riga 126277.

class {
    static {
      n(this, "_ib747518ccd7ca8");
    }
    static {
      Myt(this, "_ib747518ccd7ca8");
    }
    _r7e78ea8fa950ce = [];
    flush() {
      return ((this._r7e78ea8fa950ce = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      this._r7e78ea8fa950ce = [];
      for (let t = 0; t < r; t++) this._r7e78ea8fa950ce.push(new VariableFxStatusRemoveData(e.readString()));
      return !0;
    }
    get _rf28e89ae590c43() {
      return this._r7e78ea8fa950ce;
    }
  }
