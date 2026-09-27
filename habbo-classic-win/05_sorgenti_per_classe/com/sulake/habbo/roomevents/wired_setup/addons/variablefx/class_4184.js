// Estratto da HabboAirLauncher.deobf.js, riga 362525.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/class_4184.as
// Nome offuscato: _ide8973f47e57a7

class extends class_4106 {
  static {
    n(this, "class_4184");
  }
  get code() {
    return AddonCodes.VARIABLE_FX_LEVELLING_PROGRESS;
  }
  get categoryId() {
    return _i3b0b1a104db30e._r09950f0f2ac684;
  }
  createTopInfoPreset(e) {
    return e.createUsageInfoSection("${wiredfurni.params.variablefx.levelling_progress.info}");
  }
  _r1996d0709870de(e, r) {
    (super._r1996d0709870de(e, r), (r._r57e125b612fc29 = e[21] | 0));
  }
  _r325eeba78987d6(e, r) {
    (super._r325eeba78987d6(e, r), e.push(r._r57e125b612fc29));
  }
}
