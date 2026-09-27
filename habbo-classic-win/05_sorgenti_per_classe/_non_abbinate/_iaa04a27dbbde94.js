// Estratto da HabboAirLauncher.deobf.js, riga 77146.

class {
    static {
      n(this, "_iaa04a27dbbde94");
    }
    static {
      Pmr(this, "_iaa04a27dbbde94");
    }
    _r698082ebce2833 = null;
    _r18c5cfb858d468 = null;
    get _r2b9a530a361f21() {
      return this._r698082ebce2833;
    }
    get _r93e1ed108b0c32() {
      return this._r18c5cfb858d468;
    }
    flush() {
      return ((this._r698082ebce2833 = null), (this._r18c5cfb858d468 = null), !0);
    }
    parse(e) {
      this._r698082ebce2833 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r698082ebce2833.push(new _i04a79d139f2bd2(e));
      ((this._r18c5cfb858d468 = []), (r = e.readInteger()));
      for (let t = 0; t < r; t++) this._r18c5cfb858d468.push(new _i04a79d139f2bd2(e));
      return !0;
    }
  }
