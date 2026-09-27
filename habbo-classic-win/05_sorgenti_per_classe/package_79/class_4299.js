// Extracted from HabboAirLauncher.deobf.js, line 83357.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_4299.as
// Obfuscated name: _i578826af18a753

class {
    static {
      n(this, "class_4299");
    }
    static {
      yyr(this, "class_4299");
    }
    var_3591 = -1;
    _teams = [];
    _teamScores = [];
    _r0884f797197f7a = null;
    _ra436d37724dd60 = null;
    flush() {
      return ((this.var_3591 = -1), (this._teams = []), (this._teamScores = []), !1);
    }
    parse(e) {
      ((this.var_3591 = e.readInteger()), (this._ra436d37724dd60 = new Game2GameResult(e)));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._teams.push(new Game2TeamScoreData(e));
      return ((this._r0884f797197f7a = new Game2SnowWarGameStats(e)), !0);
    }
    get timeToNextState() {
      return this.var_3591;
    }
    get _r8f616ae1b3bde2() {
      return this._teams;
    }
    get _r20f73529ac1fc3() {
      return this._teamScores;
    }
    get _r0b680584a2478b() {
      return this._ra436d37724dd60;
    }
    get _ra2334e6f766c56() {
      return this._r0884f797197f7a;
    }
  }
