// Estratto da HabboAirLauncher.deobf.js, riga 98979.

class {
    static {
      n(this, "_i29fa5727974527");
    }
    static {
      sGr(this, "_i29fa5727974527");
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
