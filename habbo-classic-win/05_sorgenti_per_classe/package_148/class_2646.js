// Extracted from HabboAirLauncher.deobf.js, line 106782.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_148/class_2646.as
// Obfuscated name: _idae8f03dcd308f

class {
    static {
      n(this, "class_2646");
    }
    static {
      dJr(this, "class_2646");
    }
    var_1655 = 0;
    _state = 0;
    _tasks = [];
    var_3051 = [];
    class_4223 = [];
    parse(e) {
      ((this.var_1655 = e.readInteger()),
        (this._state = e.readInteger()),
        (this._tasks = []),
        (this.var_3051 = []),
        (this.class_4223 = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._tasks.push(new Vl(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_3051.push(new UnkClass_a3a76c(e));
      r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_4223.push(new class_4223(e));
    }
    get level() {
      return this.var_1655;
    }
    set level(e) {
      this.var_1655 = e;
    }
    get state() {
      return this._state;
    }
    set state(e) {
      this._state = e;
    }
    get tasks() {
      return this._tasks;
    }
    get rewardPerks() {
      return this.var_3051;
    }
    get rewardProducts() {
      return this.class_4223;
    }
    get _r737caa5465b78d() {
      return this.var_3051.length + this.class_4223.length;
    }
    get _r35e86ddbbc3ec4() {
      let e = 1 / this._tasks.length,
        r = 0;
      for (let t of this._tasks) t.state === Wu.const_455 && (r += e);
      return In.clamp(r);
    }
    findTaskByAchievementId(e) {
      for (let r of this._tasks) if (r.achievementId === e) return r;
      return null;
    }
  }
