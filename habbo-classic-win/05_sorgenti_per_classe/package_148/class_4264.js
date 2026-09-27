// Estratto da HabboAirLauncher.deobf.js, riga 106844.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_148/class_4264.as
// Nome offuscato: _i0cb50eb9e43e20

class a {
    static {
      n(this, "class_4264");
    }
    static {
      fJr(this, "class_4264");
    }
    static const_455 = 2;
    static STATE_LOCKED = 0;
    static const_384 = 1;
    _name = "";
    var_1908 = 0;
    _levels = [];
    parse(e) {
      ((this._name = e.readString()), (this._levels = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new class_2646();
        (i.parse(e),
          i.state === a.const_384 && (this.var_1908 = t),
          this._levels.push(i));
      }
    }
    findTaskByAchievementId(e) {
      let r = null;
      for (let t of this._levels)
        if (t.state !== a.STATE_LOCKED) {
          let i = t.findTaskByAchievementId(e);
          i && (r = i);
        }
      return r;
    }
    get name() {
      return this._name;
    }
    get levels() {
      return this._levels;
    }
    get _talentTrack() {
      return this._levels.length > 0 ? 1 / this._levels.length : 0;
    }
    get _rc9adb2a0dcc5d3() {
      if (this._levels.length > 0) {
        let e = this._levels[this.var_1908]._r35e86ddbbc3ec4;
        return In.clamp(this.var_1908 * this._talentTrack + e * this._talentTrack);
      }
      return 0;
    }
    get _rd28fcfe77efe7d() {
      return this._levels.length > 0 ? this.var_1908 * this._talentTrack : 0;
    }
    removeFirstLevel() {
      (this._levels.shift(), (this.var_1908 = Math.max(0, this.var_1908 - 1)));
    }
  }
