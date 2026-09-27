// Extracted from HabboAirLauncher.deobf.js, line 98880.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i46888fbb8658c2

class {
    static {
      n(this, "UnkMessageParser_I_46888f");
    }
    static {
      qUr(this, "UnkMessageParser_I_46888f");
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
