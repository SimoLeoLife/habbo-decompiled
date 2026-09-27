// Estratto da HabboAirLauncher.deobf.js, riga 78988.

class {
    static {
      n(this, "_i76990355d19b16");
    }
    static {
      Twr(this, "_i76990355d19b16");
    }
    _errorCode = 0;
    _r251634adf6ac57 = [];
    get errorCode() {
      return this._errorCode;
    }
    get _r23d4d3ce9a3612() {
      return this._r251634adf6ac57;
    }
    flush() {
      return ((this._r251634adf6ac57 = []), !0);
    }
    parse(e) {
      if (((this._errorCode = e.readInteger()), this._errorCode === 1)) {
        let r = e.readInteger();
        for (let t = 0; t < r; t++) this._r251634adf6ac57.push(e.readInteger());
      }
      return !0;
    }
  }
