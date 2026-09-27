// Estratto da HabboAirLauncher.deobf.js, riga 82526.

class a extends class_1944 {
  static {
    n(this, "_idc5d7d4728da54");
  }
  static FORMAT_KEY = _iae7a134fea2fc8._r1b2e4acf2fa716;
  static _r829042f5ebcc4e = 0;
  _data = [];
  _rf86aa9dd0d70c1(e) {
    this._data = [];
    let r = e.readInteger();
    for (let t = 0; t < r; t++) this._data.push(e.readString());
    super._rf86aa9dd0d70c1(e);
  }
  _r8476f6049cdad6(e) {
    (super._r8476f6049cdad6(e), (this._data = e._r749e70d500190b(RoomObjectVariableEnum.FURNITURE_DATA) ?? []));
  }
  _r22048429087864(e) {
    (super._r22048429087864(e),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY),
      e._r2b219306ad31b8(RoomObjectVariableEnum.FURNITURE_DATA, this._data));
  }
  getLegacyString() {
    return this._data[a._r829042f5ebcc4e] ?? "";
  }
  getValue(e) {
    return this._data[e] ?? "";
  }
  _rd51ff77b1b0bee(e) {
    this._data = e;
  }
  compare(e) {
    let r = e;
    if (!(r instanceof a)) return !1;
    for (let t = 0; t < this._data.length; t++)
      if (t !== a._r829042f5ebcc4e && this._data[t] !== r.getValue(t)) return !1;
    return !0;
  }
}
