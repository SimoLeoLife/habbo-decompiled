// Estratto da HabboAirLauncher.deobf.js, riga 107398.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_217/WiredVariable.as
// Nome offuscato: _if06537ece4db30

class {
    static {
      n(this, "WiredVariable");
    }
    static {
      $Jr(this, "WiredVariable");
    }
    static var_160 = "n";
    _alwaysAvailable;
    _availabilityType;
    _canCreateAndDelete;
    _canInterceptChanges;
    _canReadCreationTime;
    _canReadLastUpdateTime;
    _canWriteValue;
    _hasValue;
    _isInvisible;
    _textConnector;
    _variableId;
    _variableName;
    _variableTarget;
    _variableType;
    constructor(e) {
      if (
        ((this._variableId = e.readString()),
        (this._variableType = e.readInteger()),
        (this._variableName = e.readString()),
        (this._availabilityType = e.readInteger()),
        (this._variableTarget = e.readInteger()),
        (this._alwaysAvailable = e.readBoolean()),
        (this._canCreateAndDelete = e.readBoolean()),
        (this._hasValue = e.readBoolean()),
        (this._canWriteValue = e.readBoolean()),
        (this._canInterceptChanges = e.readBoolean()),
        (this._isInvisible = e.readBoolean()),
        (this._canReadCreationTime = e.readBoolean()),
        (this._canReadLastUpdateTime = e.readBoolean()),
        e.readBoolean())
      ) {
        this._textConnector = new B();
        let r = e.readInteger();
        for (let t = 0; t < r; t++) {
          let i = e.readInteger(),
            s = e.readString();
          this._textConnector.add(i, s);
        }
      } else this._textConnector = null;
    }
    get variableId() {
      return this._variableId;
    }
    get variableType() {
      return this._variableType;
    }
    get variableName() {
      return this._variableName;
    }
    get availabilityType() {
      return this._availabilityType;
    }
    get variableTarget() {
      return this._variableTarget;
    }
    get alwaysAvailable() {
      return this._alwaysAvailable;
    }
    get canCreateAndDelete() {
      return this._canCreateAndDelete;
    }
    get hasValue() {
      return this._hasValue;
    }
    get canWriteValue() {
      return this._canWriteValue;
    }
    get canInterceptChanges() {
      return this._canInterceptChanges;
    }
    get isInvisible() {
      return this._isInvisible;
    }
    get canReadCreationTime() {
      return this._canReadCreationTime;
    }
    get canReadLastUpdateTime() {
      return this._canReadLastUpdateTime;
    }
    get hasTextConnector() {
      return this._textConnector !== null;
    }
    get textConnector() {
      return this._textConnector;
    }
    get isPersisted() {
      return (
        this._availabilityType === class_4172.var_5113 ||
        this._availabilityType === class_4172.var_4280 ||
        this._availabilityType === class_4172.var_5612
      );
    }
  }
