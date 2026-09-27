// Extracted from HabboAirLauncher.deobf.js, line 221464.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/arena/SynchronizedGameArena.as
// Obfuscated name: _i44a138495f3ef4

class {
  static {
    n(this, "SynchronizedGameArena");
  }
  _rc48cb7ca67aee6 = null;
  var_728 = null;
  var_403 = 0;
  var_539 = 0;
  var_5881 = 1;
  _r1b1833491a7e37 = null;
  var_1681 = null;
  _rfc78da73a15739 = null;
  _disposed = !1;
  _rabf1a5356d063d = !1;
  _numberOfTeams = 0;
  _teamScores = [];
  dispose() {
    ((this._disposed = !0),
      (this._rc48cb7ca67aee6 = null),
      (this.var_728 = null),
      (this._r1b1833491a7e37 = null),
      this.var_1681?.dispose(),
      (this.var_1681 = null),
      (this._rfc78da73a15739 = null));
  }
  get disposed() {
    return this._disposed;
  }
  initialize(e, r) {
    ((this._rc48cb7ca67aee6 = e),
      (this._r1b1833491a7e37 = new eQ()),
      (this._rfc78da73a15739 = new B()),
      (this.var_728 = []),
      (this._numberOfTeams = r),
      (this.var_403 = 0),
      (this.var_539 = 0),
      (this.var_728[this.var_403] = this._rb52eb4ad7e7301()),
      (this._rfc78da73a15739 = new B()),
      this._ra8aeb64fd1fa31());
  }
  get _rbe53bad1dd182e() {
    return this._rc48cb7ca67aee6;
  }
  _re74de903a3a527() {
    this._r99dddf2c8806f5();
  }
  _r99dddf2c8806f5() {
    let e = this._re20c98e536caa8(),
      r = this.var_728?.[this.var_403];
    if (r != null) {
      let t = r[this.var_539] ?? [];
      for (; t.length > 0;) (t.shift() ?? null)?.apply(e);
    }
    (this._rabf1a5356d063d || e.subturn(),
      this.var_539 >= this._r1611ac70458d9b() - 1 &&
        (this.var_403 % this.var_5881 === 0 &&
          this._rfc78da73a15739?.setProperty(
            this.var_403,
            this._re20c98e536caa8()._r03ffaa5bb698f3(this.var_403),
          ),
        this.var_403++,
        (this._rabf1a5356d063d = !1)),
      this.var_539++,
      this.var_539 >= this._r1611ac70458d9b() && (this.var_539 = 0));
  }
  addGameEvent(e, r, t) {
    if (this.var_728 == null) return;
    let i = this.var_728[e];
    (i == null && ((i = this._rb52eb4ad7e7301()), (this.var_728[e] = i)), i[r].push(t));
  }
  _r1611ac70458d9b() {
    return this.getExtension()._r1611ac70458d9b();
  }
  _r83122f67bd84e4() {
    return this.var_403;
  }
  get subturn() {
    return this.var_539;
  }
  _re20c98e536caa8() {
    return this._r1b1833491a7e37;
  }
  getExtension() {
    return this.var_1681;
  }
  _re41653a4ececf1(e) {
    ((this.var_1681 = e), (e._r0c148637e03364 = this));
  }
  _rb1d882c4d63cfe(e) {
    return this._rfc78da73a15739?.getValue(e);
  }
  _r4f56625eeb5405(e, r) {
    ((this.var_403 = e),
      (this.var_539 = 0),
      this._rfc78da73a15739?.setProperty(e, r),
      (this.var_728 = []),
      (this.var_728[this.var_403] = this._rb52eb4ad7e7301()),
      (this._rabf1a5356d063d = !0));
  }
  _rb52eb4ad7e7301() {
    let e = [];
    for (let r = 0; r < this._r1611ac70458d9b(); r++) e[r] = [];
    return e;
  }
  get levelName() {
    return this._numberOfTeams;
  }
  _ra8aeb64fd1fa31() {
    this._teamScores = [];
    for (let e = 0; e < this._numberOfTeams; e++) this._teamScores[e] = 0;
  }
  _r47263a8b3b70be(e, r) {
    e > 0 && e <= this._numberOfTeams && (this._teamScores[e - 1] += r);
  }
  _r3a2e2f786228da() {
    return this._teamScores;
  }
}
