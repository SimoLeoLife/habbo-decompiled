// Estratto da HabboAirLauncher.deobf.js, riga 75991.

class {
    static {
      n(this, "_ib908ea818851a4");
    }
    static {
      K7r(this, "_ib908ea818851a4");
    }
    _r7c672c2c86fd35 = null;
    get _r181febaf49bc70() {
      return this._r7c672c2c86fd35;
    }
    flush() {
      return ((this._r7c672c2c86fd35 = null), !0);
    }
    parse(e) {
      this._r7c672c2c86fd35 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r7c672c2c86fd35.push(new _i5563ae931c6464(e));
      return !0;
    }
  }
