// Estratto da HabboAirLauncher.deobf.js, riga 219368.

class extends _i31f5752efff6cb {
  constructor(r, t, i, s, o) {
    super();
    this._r79ce012f564afd = t;
    this.var_1447 = i;
    this.var_1425 = s;
    this.var_307 = o;
    this._r20cae909afff58 = new wf(r);
  }
  static {
    n(this, "_if3fef88ffea2e2");
  }
  _r20cae909afff58;
  dispose() {
    (super.dispose(), (this._r20cae909afff58 = null), (this._r79ce012f564afd = null));
  }
  set _rbca043bf71a791(r) {
    this._r20cae909afff58 = r;
  }
  apply(r) {
    this._r20cae909afff58 == null ||
      this._r79ce012f564afd == null ||
      (r._r29463a5878c079(this._r20cae909afff58._r8f79a04a0ab07b, this._r20cae909afff58),
      (this._r20cae909afff58.isActive = !0),
      this._r20cae909afff58.initialize(
        this._r79ce012f564afd._re4f88bac64d340.x,
        this._r79ce012f564afd._re4f88bac64d340.y,
        wf.INITIAL_HEIGHT,
        this.var_307,
        this.var_1447,
        this.var_1425,
        this._r79ce012f564afd,
      ));
  }
}
