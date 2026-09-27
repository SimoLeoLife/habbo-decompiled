// Estratto da HabboAirLauncher.deobf.js, riga 367413.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/ConditionTypes.as
// Nome offuscato: _i49b7bc6a3e6df5

class {
  static {
    n(this, "ConditionTypes");
  }
  _types = [];
  constructor() {
    (this._types.push(new class_4258()),
      this._types.push(new FurnisHaveAvatars()),
      this._types.push(new FurnisHaveNoAvatars()),
      this._types.push(new class_4261()),
      this._types.push(new class_4166()),
      this._types.push(new class_4042()),
      this._types.push(new class_4242()),
      this._types.push(new class_3962()),
      this._types.push(new HasStackedFurnis()),
      this._types.push(new StuffTypeMatches()),
      this._types.push(new rke()),
      this._types.push(new class_4232()),
      this._types.push(new class_4188()),
      this._types.push(new DontHaveStackedFurnis()),
      this._types.push(new lke()),
      this._types.push(new eke()),
      this._types.push(new TriggererMatches()),
      this._types.push(new Eke()),
      this._types.push(new DateMatches()),
      this._types.push(new class_4072()),
      this._types.push(new ike()),
      this._types.push(new TeamHasScore()),
      this._types.push(new ClockTimeMatches()),
      this._types.push(new FurniHasAltitude()),
      this._types.push(new class_4157()),
      this._types.push(new class_4090()),
      this._types.push(new _i948b45545f126f()),
      this._types.push(new pke()),
      this._types.push(new Ake()),
      this._types.push(new Bke()),
      this._types.push(new LevelMatches()),
      this._types.push(new ChestHasAmount()),
      this._types.push(new class_4118()));
  }
  get types() {
    return this._types;
  }
  _r16aab10eee08a6(e) {
    for (let r of this._types) if (r.code === e || r.negativeCode === e) return r;
    return null;
  }
  _r15cee347bb0477(e) {
    return this._r16aab10eee08a6(e);
  }
  _r58bebf6acaa0b3(e) {
    return e instanceof class_3028;
  }
  getKey() {
    return "condition";
  }
}
