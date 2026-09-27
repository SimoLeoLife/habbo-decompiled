// Estratto da HabboAirLauncher.deobf.js, riga 77570.

class {
    static {
      n(this, "_ia654a5ab5ec976");
    }
    static {
      hgr(this, "_ia654a5ab5ec976");
    }
    _rd6af6eba309544 = [];
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd6af6eba309544.push(new class_3746(e));
      return !0;
    }
    flush() {
      return ((this._rd6af6eba309544 = []), !0);
    }
    get _re260ed8e0c1afa() {
      return this._rd6af6eba309544;
    }
  }
