// Extracted from HabboAirLauncher.deobf.js, line 362545.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/class_4143.as
// Obfuscated name: _iadbd6da2f02b4a

class extends class_4106 {
  static {
    n(this, "class_4143");
  }
  get code() {
    return AddonCodes.VARIABLE_FX_NUMBER_DISPLAY;
  }
  get categoryId() {
    return UnkClass_3b0b1a._r45eac009b1fbcb;
  }
  _r1996d0709870de(e, r) {
    (super._r1996d0709870de(e, r), (r.var_1226 = e[21] | 0));
  }
  _r325eeba78987d6(e, r) {
    (super._r325eeba78987d6(e, r), e.push(r.var_1226));
  }
  _r0cf26e454fdbfd(e, r) {
    r.icon = e._r7e8836fc336e43;
  }
  writeStringParam(e) {
    return e.icon;
  }
}
