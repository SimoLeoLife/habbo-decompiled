// Estratto da HabboAirLauncher.deobf.js, riga 81687.

class a extends class_1944 {
  static {
    n(this, "_i7a2d8c0e7c51e5");
  }
  static FORMAT_KEY = _iae7a134fea2fc8._rdad9174e8f9400;
  _data = "";
  _rf86aa9dd0d70c1(e) {
    ((this._data = e.readString()), super._rf86aa9dd0d70c1(e));
  }
  _r8476f6049cdad6(e) {
    (super._r8476f6049cdad6(e), (this._data = e.getString(RoomObjectVariableEnum.FURNITURE_DATA)));
  }
  _r22048429087864(e) {
    (super._r22048429087864(e),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY),
      e.setString(RoomObjectVariableEnum.FURNITURE_DATA, this._data));
  }
  getLegacyString() {
    return this._data;
  }
  setString(e) {
    this._data = e;
  }
  compare(e) {
    return this._data === e.getLegacyString();
  }
}
