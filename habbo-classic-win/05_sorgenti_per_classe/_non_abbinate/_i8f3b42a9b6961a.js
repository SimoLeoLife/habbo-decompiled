// Estratto da HabboAirLauncher.deobf.js, riga 95630.

class {
    static {
      n(this, "_i8f3b42a9b6961a");
    }
    static {
      IOr(this, "_i8f3b42a9b6961a");
    }
    _rd7f7f54503dcb4 = null;
    parse(e) {
      this._rd7f7f54503dcb4 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd7f7f54503dcb4.push(new class_3200(e));
      return !0;
    }
    flush() {
      return ((this._rd7f7f54503dcb4 = null), !0);
    }
    get _rce09be3c985bc6() {
      return this._rd7f7f54503dcb4;
    }
  }
