// Extracted from HabboAirLauncher.deobf.js, line 109204.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic2a8cfbc5af1aa

class {
    static {
      n(this, "UnkClass_c2a8cf");
    }
    static {
      Rtt(this, "UnkClass_c2a8cf");
    }
    _amount;
    var_770;
    _elements;
    _r81f4de14c61f63;
    _r5fb3d24d13464f;
    _r2005707849c2ba;
    _totalEntries;
    constructor(e) {
      ((this._totalEntries = e.readInteger()),
        (this.var_770 = e.readInteger()),
        (this._amount = e.readInteger()),
        (this._elements = []));
      let r = e.readInteger();
      for (let o = 0; o < r; o++) this._elements.push(new WiredLogEntry(e));
      let t = -1,
        i = -1,
        s = null;
      (e.readBoolean() && (t = e.readByte()),
        e.readBoolean() && (i = e.readByte()),
        e.readBoolean() && (s = e.readString()),
        (this._r81f4de14c61f63 = t),
        (this._r5fb3d24d13464f = i),
        (this._r2005707849c2ba = s));
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
    get _r4cdb25d94727f1() {
      return this._r81f4de14c61f63;
    }
    get _r0174cab56f34bc() {
      return this._r5fb3d24d13464f;
    }
    get query() {
      return this._r2005707849c2ba;
    }
  }
