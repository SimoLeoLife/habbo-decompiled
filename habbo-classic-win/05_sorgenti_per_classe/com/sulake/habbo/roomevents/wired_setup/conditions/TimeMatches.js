// Extracted from HabboAirLauncher.deobf.js, line 367020.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/TimeMatches.as
// Obfuscated name: _icadc468a39da67

class a extends class_4163 {
  static {
    n(this, "TimeMatches");
  }
  static SECONDS_CONTAINER_NAME = "second";
  static MINUTES_CONTAINER_NAME = "minute";
  static HOURS_CONTAINER_NAME = "hour";
  _rb755360fd7d8e0 = null;
  _r545f2e27807444 = null;
  _rb1c380483c85a8 = null;
  get code() {
    return ConditionCodes.TIME_MATCHES;
  }
  get inputMode() {
    return class_4163.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = this.l("time.skip"),
      s = this.l("time.exact"),
      o = this.l("time.range");
    ((this._rb1c380483c85a8 = e.createChronoRangeFilter(i, s, o, 0, 0, 23, 25)),
      (this._r545f2e27807444 = e.createChronoRangeFilter(i, s, o, 0, 0, 59, 25)),
      (this._rb755360fd7d8e0 = e.createChronoRangeFilter(i, s, o, 0, 0, 59, 25)));
    let d = this.createTimezoneSection(e);
    t.addElements(
      e.createSection(this.l("time.hour_selection"), this._rb1c380483c85a8),
      e.createSection(this.l("time.minute_selection"), this._r545f2e27807444),
      e.createSection(this.l("time.second_selection"), this._rb755360fd7d8e0),
      d,
    );
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r = e.intParams[0],
      t = e.intParams[1],
      i = e.intParams[2],
      s = e.intParams[3],
      o = e.intParams[4],
      d = e.intParams[5],
      c = e.intParams[6],
      f = e.intParams[7],
      l = e.intParams[8];
    (this._rb755360fd7d8e0.applyFilter(new ChronoFieldRangeFilter(a.SECONDS_CONTAINER_NAME, r === 1, s, o, 0)),
      this._r545f2e27807444.applyFilter(new ChronoFieldRangeFilter(a.MINUTES_CONTAINER_NAME, t === 1, d, c, 0)),
      this._rb1c380483c85a8.applyFilter(new ChronoFieldRangeFilter(a.HOURS_CONTAINER_NAME, i === 1, f, l, 0)));
  }
  readIntParamsFromForm() {
    let e = this._rb755360fd7d8e0._r59be397a47c1d2(a.SECONDS_CONTAINER_NAME),
      r = this._r545f2e27807444._r59be397a47c1d2(a.MINUTES_CONTAINER_NAME),
      t = this._rb1c380483c85a8._r59be397a47c1d2(a.HOURS_CONTAINER_NAME);
    return [
      e.useFilter ? 1 : 0,
      r.useFilter ? 1 : 0,
      t.useFilter ? 1 : 0,
      e.min,
      e.max,
      r.min,
      r.max,
      t.min,
      t.max,
    ];
  }
}
