// Estratto da HabboAirLauncher.deobf.js, riga 365198.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/chests/class_4137.as
// Nome offuscato: _i5d24f96d23a877

class extends DefaultActionType {
  static {
    n(this, "class_4137");
  }
  var_3049 = null;
  get code() {
    return ActionTypeCodes.CANCEL_TRANSACTION;
  }
  readIntParamsFromForm() {
    return [this.var_3049.selected];
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  onEditStart(e) {
    this.var_3049.selected = e.intParams[0] ?? 0;
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.cancel_transaction.usage_info}");
    this.var_3049 = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.cancel_transaction.match_criteria.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.cancel_transaction.match_criteria.1}"),
      ],
      this._r92706ed04ec9cc,
    );
    let s = e.createSection(
      "${wiredfurni.params.cancel_transaction.match_criteria}",
      this.var_3049,
    );
    t.addElements(i, s);
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.var_64 && e === 0 ? this.var_3049.selected === 1 : !1;
  }
  _r92706ed04ec9cc = n((e) => {
    this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.var_64, 0);
  }, "_r92706ed04ec9cc");
}
