// Estratto da HabboAirLauncher.deobf.js, riga 72029.

class {
  constructor(e, r, t) {
    this._name = r;
    this._url = t;
    let [i = "", s = ""] = e.split("_"),
      [o = "", d = ""] = s.split(".");
    ((this._rf14c3c5705678f = i), (this._ra9ead12e38356b = o), (this._rf6c37b06075d26 = d));
  }
  static {
    n(this, "_ia01480e0ec6c4c");
  }
  _rf14c3c5705678f;
  _ra9ead12e38356b;
  _rf6c37b06075d26;
  get id() {
    return `${this._rf14c3c5705678f}_${this._ra9ead12e38356b}.${this._rf6c37b06075d26}`;
  }
  get _r178160a3ba300e() {
    return this._rf14c3c5705678f;
  }
  get _r38bcc514a58faf() {
    return this._ra9ead12e38356b;
  }
  get encoding() {
    return this._rf6c37b06075d26;
  }
  get name() {
    return this._name;
  }
  get url() {
    return this._url;
  }
}
