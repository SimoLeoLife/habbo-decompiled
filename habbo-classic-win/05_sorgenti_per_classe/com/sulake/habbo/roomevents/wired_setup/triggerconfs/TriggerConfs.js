// Extracted from HabboAirLauncher.deobf.js, line 369330.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/TriggerConfs.as
// Obfuscated name: _ifaad8f2a50a04e

class {
  static {
    n(this, "TriggerConfs");
  }
  var_113 = [];
  constructor() {
    (this.var_113.push(new class_3950()),
      this.var_113.push(new class_3958()),
      this.var_113.push(new class_4097()),
      this.var_113.push(new TriggerOnce()),
      this.var_113.push(new class_4168()),
      this.var_113.push(new class_3900()),
      this.var_113.push(new AvatarEntersRoom()),
      this.var_113.push(new class_4152()),
      this.var_113.push(new class_4015()),
      this.var_113.push(new ScoreAchieved()),
      this.var_113.push(new class_4176()),
      this.var_113.push(new class_4064()),
      this.var_113.push(new class_4211()),
      this.var_113.push(new class_4217()),
      this.var_113.push(new class_3970()),
      this.var_113.push(new ClockReachTime()),
      this.var_113.push(new lTe()),
      this.var_113.push(new UnkDefaultTriggerConfSubclass_d7663a()),
      this.var_113.push(new UnkDefaultTriggerConfSubclass_1dfa1f()),
      this.var_113.push(new class_4229()),
      this.var_113.push(new class_4202()),
      this.var_113.push(new UnkDefaultTriggerConfSubclass_c017f2()),
      this.var_113.push(new ETe()),
      this.var_113.push(new UnkDefaultTriggerConfSubclass_2bacdb()),
      this.var_113.push(new class_4091()),
      this.var_113.push(new class_4187()),
      this.var_113.push(new class_3954()));
  }
  get confs() {
    return this.var_113;
  }
  _r16aab10eee08a6(e) {
    for (let r of this.var_113) if (r.code === e) return r;
    return null;
  }
  _r15cee347bb0477(e) {
    return this._r16aab10eee08a6(e);
  }
  _r58bebf6acaa0b3(e) {
    return e instanceof UnkSubclassOf_class_2396_273ff5;
  }
  getKey() {
    return "trigger";
  }
}
