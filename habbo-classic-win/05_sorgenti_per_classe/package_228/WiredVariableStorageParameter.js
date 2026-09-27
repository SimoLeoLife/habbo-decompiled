// Estratto da HabboAirLauncher.deobf.js, riga 109331.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_228/WiredVariableStorageParameter.as
// Nome offuscato: _ibacce806f616ce

class {
    static {
      n(this, "WiredVariableStorageParameter");
    }
    static {
      Utt(this, "WiredVariableStorageParameter");
    }
    _creationTime;
    var_4406;
    _lastUpdateTime;
    var_5143;
    _value;
    _variableId;
    constructor(e, r = !1) {
      ((this._variableId = r ? e.readString() : null),
        (this._value = e.readInteger()),
        (this._creationTime = e.readLong()),
        (this.var_4406 = e.readString()),
        (this._lastUpdateTime = e.readLong()),
        (this.var_5143 = e.readString()));
    }
    get variableId() {
      return this._variableId;
    }
    get value() {
      return this._value;
    }
    get creationTime() {
      return this._creationTime;
    }
    get _r153022da84319c() {
      return this.var_4406;
    }
    get _rd5b25ad4c3f288() {
      return this._lastUpdateTime;
    }
    get _rb4d446d8a2e50a() {
      return this.var_5143;
    }
  }
