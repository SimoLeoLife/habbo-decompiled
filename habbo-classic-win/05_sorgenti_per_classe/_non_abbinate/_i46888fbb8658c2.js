// Estratto da HabboAirLauncher.deobf.js, riga 98880.

class {
    static {
      n(this, "_i46888fbb8658c2");
    }
    static {
      qUr(this, "_i46888fbb8658c2");
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
