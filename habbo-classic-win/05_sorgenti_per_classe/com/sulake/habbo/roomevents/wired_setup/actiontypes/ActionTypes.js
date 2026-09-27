// Extracted from HabboAirLauncher.deobf.js, line 365543.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/ActionTypes.as
// Obfuscated name: _i2d0495274d7868

class {
  static {
    n(this, "ActionTypes");
  }
  _types = [];
  constructor() {
    (this._types.push(new class_3934()),
      this._types.push(new class_4288()),
      this._types.push(new class_4213()),
      this._types.push(new class_4084()),
      this._types.push(new nY()),
      this._types.push(new dAe()),
      this._types.push(new class_4294()),
      this._types.push(new class_4212()),
      this._types.push(new class_3890()),
      this._types.push(new class_4056()),
      this._types.push(new class_4051()),
      this._types.push(new class_4115()),
      this._types.push(new class_3987()),
      this._types.push(new class_3944()),
      this._types.push(new class_4117()),
      this._types.push(new _Ae()),
      this._types.push(new class_4121()),
      this._types.push(new KickFromRoom()),
      this._types.push(new class_3994()),
      this._types.push(new UnkSubclassOf_class_3976_2fe20c()),
      this._types.push(new UnkSubclassOf_class_3976_a4fd95()),
      this._types.push(new tAe()),
      this._types.push(new eAe()),
      this._types.push(new class_4276()),
      this._types.push(new qBe()),
      this._types.push(new aAe()),
      this._types.push(new class_3911()),
      this._types.push(new SetFurniAltitude()),
      this._types.push(new SendSignal()),
      this._types.push(new class_4028()),
      this._types.push(new UnkDefaultActionTypeSubclass_81edc4()),
      this._types.push(new SAe()),
      this._types.push(new class_4112()),
      this._types.push(new class_3937()),
      this._types.push(new class_4126()),
      this._types.push(new pAe()),
      this._types.push(new LAe()),
      this._types.push(new sAe()),
      this._types.push(new class_4183()),
      this._types.push(new class_3875()),
      this._types.push(new TeleportToRoom()),
      this._types.push(new class_4129()),
      this._types.push(new class_4260()),
      this._types.push(new class_4135()),
      this._types.push(new class_4137()),
      this._types.push(new class_3456()),
      this._types.push(new ProgressAchievement()),
      this._types.push(new class_3874()),
      this._types.push(new class_4043()),
      this._types.push(new class_3984()),
      this._types.push(new kAe()),
      this._types.push(new UnkDefaultActionTypeSubclass_8faadd()),
      this._types.push(new wAe()),
      this._types.push(new RAe()),
      this._types.push(new PAe()));
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
    return e instanceof class_3391;
  }
  getKey() {
    return "action";
  }
}
