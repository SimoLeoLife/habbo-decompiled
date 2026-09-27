// Extracted from HabboAirLauncher.deobf.js, line 111131.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_3743.as
// Obfuscated name: _i8ba850a6b7abf6

class {
    static {
      n(this, "class_3743");
    }
    static {
      snt(this, "class_3743");
    }
    _type = 0;
    var_3700 = -1;
    var_225 = 0;
    _size = 0;
    _totalEntries = 0;
    _entries = [];
    _ownEntry = null;
    flush() {
      return (
        (this._type = 0),
        (this.var_3700 = -1),
        (this.var_225 = 0),
        (this._size = 0),
        (this._totalEntries = 0),
        (this._entries = []),
        (this._ownEntry = null),
        !0
      );
    }
    parse(e) {
      ((this._type = e.readInteger()),
        (this.var_3700 = e.readInteger()),
        (this.var_225 = e.readInteger()),
        (this._size = e.readInteger()),
        (this._totalEntries = e.readInteger()),
        (this._entries = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._entries.push(new class_3095(e));
      return (e.readBoolean() && (this._ownEntry = new class_3095(e)), !0);
    }
    get type() {
      return this._type;
    }
    get rarity() {
      return this.var_3700;
    }
    get page() {
      return this.var_225;
    }
    get size() {
      return this._size;
    }
    get totalEntries() {
      return this._totalEntries;
    }
    get entries() {
      return this._entries;
    }
    get ownEntry() {
      return this._ownEntry;
    }
  }
