// Estratto da HabboAirLauncher.deobf.js, riga 366398.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/DateMatches.as
// Nome offuscato: _ife1c4890da4a33

class extends class_4163 {
  static {
    n(this, "DateMatches");
  }
  _r3b06ba970e960b = null;
  var_3662 = null;
  _r9fa5ca25c52279 = null;
  ChronoFieldRangeFilter = null;
  get code() {
    return ConditionCodes.DATE_MATCHES;
  }
  get inputMode() {
    return class_4163.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = this.l("time.skip"),
      s = this.l("time.exact"),
      o = this.l("time.range");
    ((this._r3b06ba970e960b = e.createChronoMaskFilter(this.buildWeekdayLabels(), 2)),
      (this.var_3662 = e.createChronoRangeFilter(i, s, o, 1, 1, 31, 25)),
      (this._r9fa5ca25c52279 = e.createChronoMaskFilter(this.buildMonthLabels(), 3)),
      (this.ChronoFieldRangeFilter = e.createChronoRangeFilter(i, s, o, 0, 0, 9999, 35)));
    let d = this.createTimezoneSection(e);
    t.addElements(
      e.createSection(this.l("time.weekday_selection"), this._r3b06ba970e960b),
      e.createSection(this.l("time.day_selection"), this.var_3662),
      e.createSection(this.l("time.month_selection"), this._r9fa5ca25c52279),
      e.createSection(this.l("time.year_selection"), this.ChronoFieldRangeFilter),
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
      f = e.intParams[7];
    ((this._r3b06ba970e960b.mask = i),
      this.var_3662.applyFilter(new ChronoFieldRangeFilter("day", r === 1, s, o, 1)),
      (this._r9fa5ca25c52279.mask = d),
      this.ChronoFieldRangeFilter.applyFilter(new ChronoFieldRangeFilter("year", t === 1, c, f, 0)));
  }
  readIntParamsFromForm() {
    let e = this.var_3662._r59be397a47c1d2("day"),
      r = this.ChronoFieldRangeFilter._r59be397a47c1d2("year");
    return [
      e.useFilter ? 1 : 0,
      r.useFilter ? 1 : 0,
      this._r3b06ba970e960b.mask,
      e.min,
      e.max,
      this._r9fa5ca25c52279.mask,
      r.min,
      r.max,
    ];
  }
  buildWeekdayLabels() {
    let e = [];
    for (let r = 1; r <= 7; r += 1) e.push(this.l(`time.weekday.${r}`));
    return e;
  }
  buildMonthLabels() {
    let e = [];
    for (let r = 1; r <= 12; r += 1) e.push(this.l(`time.month.${r}`));
    return e;
  }
}
