// Extracted from HabboAirLauncher.deobf.js, line 98979.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i29fa5727974527

class {
    static {
      n(this, "UnkMessageParser_I_29fa57");
    }
    static {
      sGr(this, "UnkMessageParser_I_29fa57");
    }
    _tasks = null;
    get tasks() {
      return this._tasks;
    }
    flush() {
      return ((this._tasks = null), !0);
    }
    parse(e) {
      this._tasks = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._tasks.push(new Vf(e));
      return !0;
    }
  }
