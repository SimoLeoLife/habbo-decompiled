// Estratto da HabboAirLauncher.deobf.js, riga 95871.

class {
    static {
      n(this, "_i4d75d23e2cba40");
    }
    static {
      jOr(this, "_i4d75d23e2cba40");
    }
    _r5f69fc5db295c6 = [];
    flush() {
      return ((this._r5f69fc5db295c6 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r5f69fc5db295c6.push(new class_3178(e));
      return !0;
    }
    get _rd77a18091f711c() {
      return this._r5f69fc5db295c6;
    }
  }
