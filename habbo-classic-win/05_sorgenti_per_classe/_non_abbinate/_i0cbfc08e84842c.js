// Estratto da HabboAirLauncher.deobf.js, riga 91563.

class {
    static {
      n(this, "_i0cbfc08e84842c");
    }
    static {
      fPr(this, "_i0cbfc08e84842c");
    }
    _r84bb29e42ffe06 = [];
    get _r444b83e39f0578() {
      return this._r84bb29e42ffe06;
    }
    flush() {
      return ((this._r84bb29e42ffe06 = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r84bb29e42ffe06.push(new class_4338(e));
      return !0;
    }
  }
