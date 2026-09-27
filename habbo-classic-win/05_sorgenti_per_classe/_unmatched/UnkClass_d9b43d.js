// Extracted from HabboAirLauncher.deobf.js, line 109508.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id9b43d7e06e509

class {
    static {
      n(this, "UnkClass_d9b43d");
    }
    static {
      qtt(this, "UnkClass_d9b43d");
    }
    _amount;
    var_770;
    _elements;
    _re2afd1c27d1bea;
    _totalEntries;
    _rcf99c7547da5be;
    _variableId;
    constructor(e) {
      ((this._variableId = e.readString()),
        (this._totalEntries = e.readInteger()),
        (this.var_770 = e.readInteger()),
        (this._amount = e.readInteger()),
        (this._elements = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._elements.push(new WiredUserVariablesElement(e));
      ((this._rcf99c7547da5be = e.readInteger()), (this._re2afd1c27d1bea = e.readInteger()));
    }
    get variableId() {
      return this._variableId;
    }
    get totalEntries() {
      return this._totalEntries;
    }
    get currentPage() {
      return this.var_770;
    }
    get amount() {
      return this._amount;
    }
    get elements() {
      return this._elements;
    }
    get _ra69d4ed121104a() {
      return this._rcf99c7547da5be;
    }
    get _rcf5cc4e95fbddd() {
      return this._re2afd1c27d1bea;
    }
  }
