// Extracted from HabboAirLauncher.deobf.js, line 107659.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia0dcad029b8fa9

class a {
    static {
      n(this, "UnkClass_a0dcad");
    }
    static {
      _et(this, "UnkClass_a0dcad");
    }
    static EMPTY = new a(null);
    AllVariablesInRoom = null;
    _rdc6896a3be0c8d = null;
    _rdf31cea122b8d5 = null;
    VariableInfoAndValue = null;
    _r37b046aea47e2d = null;
    SharedVariableList = null;
    SharedGlobalPlaceholderList = null;
    constructor(e) {
      if (!e) return;
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        switch (e.readInteger()) {
          case class_4327.var_5936:
            this.AllVariablesInRoom = new AllVariablesInRoom(e);
            break;
          case class_4327.var_5871:
            this._rdc6896a3be0c8d = new VariableInfoAndHolders(e);
            break;
          case class_4327.var_5897:
            this._rdf31cea122b8d5 = new VariableInfoAndHolders(e);
            break;
          case class_4327.var_5938:
            this.VariableInfoAndValue = new VariableInfoAndValue(e);
            break;
          case class_4327.var_5919:
            this.SharedVariableList = new SharedVariableList(e);
            break;
          case class_4327.var_5944:
            this._r37b046aea47e2d = b7.createFromMessage(e);
            break;
          case class_4327.var_5889:
            this.SharedGlobalPlaceholderList = new SharedGlobalPlaceholderList(e);
            break;
        }
    }
    get _r491f74a2c22d93() {
      return this.AllVariablesInRoom;
    }
    get _ra940787d51a07b() {
      return this._rdc6896a3be0c8d;
    }
    get _rbae93cc75c48f5() {
      return this._rdf31cea122b8d5;
    }
    get _r50f73c18b75c9a() {
      return this.VariableInfoAndValue;
    }
    get _r60337a0f805c77() {
      return this.SharedVariableList;
    }
    get referencePlaceholderList() {
      return this.SharedGlobalPlaceholderList;
    }
    get _ree814418559ffa() {
      return this._r37b046aea47e2d;
    }
  }
