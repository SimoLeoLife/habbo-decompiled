// Extracted from HabboAirLauncher.deobf.js, line 72029.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia01480e0ec6c4c

class {
  constructor(e, r, t) {
    this._name = r;
    this._url = t;
    let [i = "", s = ""] = e.split("_"),
      [o = "", d = ""] = s.split(".");
    ((this._rf14c3c5705678f = i), (this._ra9ead12e38356b = o), (this._rf6c37b06075d26 = d));
  }
  static {
    n(this, "UnkClass_a01480");
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
