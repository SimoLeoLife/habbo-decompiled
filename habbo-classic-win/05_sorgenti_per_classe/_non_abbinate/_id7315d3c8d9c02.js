// Estratto da HabboAirLauncher.deobf.js, riga 74069.

class {
    static {
      n(this, "_id7315d3c8d9c02");
    }
    static {
      D2r(this, "_id7315d3c8d9c02");
    }
    _rdd36345f9cb994;
    _rc509faa5d3ff7c;
    _r80e381ab0e3e80;
    _r38f3c77216f185;
    _r04b4b3924f6329;
    constructor(e) {
      ((this._rdd36345f9cb994 = e.readInteger()),
        (this._rc509faa5d3ff7c = e.readInteger()),
        (this._r80e381ab0e3e80 = e.readInteger()),
        (this._r38f3c77216f185 = e.readInteger()),
        (this._r04b4b3924f6329 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r04b4b3924f6329.push(e.readInteger());
    }
  }
