// Estratto da HabboAirLauncher.deobf.js, riga 61577.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_48/JSONParseError.as

class extends Error {
  static {
    n(this, "JSONParseError");
  }
  _location;
  _text;
  constructor(e = "", r = 0, t = "") {
    (super(e), (this.name = "JSONParseError"), (this._location = r), (this._text = t));
  }
  get location() {
    return this._location;
  }
  get text() {
    return this._text;
  }
}
