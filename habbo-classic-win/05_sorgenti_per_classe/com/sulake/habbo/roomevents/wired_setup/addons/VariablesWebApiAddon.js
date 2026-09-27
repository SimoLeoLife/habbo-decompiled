// Extracted from HabboAirLauncher.deobf.js, line 361879.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/VariablesWebApiAddon.as
// Obfuscated name: _i41fbeebab15a87

class a extends DefaultAddonType {
  static {
    n(this, "VariablesWebApiAddon");
  }
  static MASS_DELETION_CHECKBOX_ID = 0;
  var_5402 = null;
  var_2548 = null;
  var_1899 = null;
  _permissions = null;
  _rd569aafdd01299 = !1;
  get code() {
    return AddonCodes.VARIABLES_WEB_API;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  onInit(e) {
    (super.onInit(e), e.communication._r2e106e2349a0b6(new class_3483(this._r1f5e743de4180d)));
  }
  buildInputs(e, r, t) {
    ((this.var_5402 = e.createUsageWarningSection("${wiredfurni.params.web_api.usage_info}")),
      (this.var_2548 = e.createApiKeySection(!1, this.onClickGeneratedReadKey)),
      (this.var_1899 = e.createApiKeySection(!0, this.onClickGeneratedWriteKey, this.onWriteKeyChange)));
    let i = new Se(Se.MODE_MULTILINE);
    i.textColor = r.softTextColor;
    let s = e.createText("${wiredfurni.params.web_api.permissions.bulk_delete.info}", i),
      o = new CheckboxOptionParam("${wiredfurni.params.web_api.permissions.bulk_delete}", a.MASS_DELETION_CHECKBOX_ID, null, s);
    this._permissions = e.createCheckboxGroup([o], this.onChangeCheckbox);
    let d = e.createSection("${wiredfurni.params.web_api.permissions}", this._permissions);
    t.addElements(this.var_5402, this.var_2548, this.var_1899, d);
  }
  onEditStart(e) {
    ((this.var_2548.key = e.getString(0)),
      (this.var_1899.key = e.getString(1)),
      (this._rd569aafdd01299 = !0),
      (this._permissions.get(a.MASS_DELETION_CHECKBOX_ID).selected = e.getBoolean(a.MASS_DELETION_CHECKBOX_ID)),
      (this._rd569aafdd01299 = !1),
      this.onWriteKeyChange(this.var_1899.key));
  }
  readStringParamFromForm() {
    return `${this.var_2548.key}	${this.var_1899.key}`;
  }
  readIntParamsFromForm() {
    return [
      this.var_1899.key.length > 0 && this._permissions.get(a.MASS_DELETION_CHECKBOX_ID).selected ? 1 : 0,
    ];
  }
  get widthModifier() {
    return 1.4;
  }
  onChangeCheckbox = n((e, r) => {
    if (!this._rd569aafdd01299 && r && e === a.MASS_DELETION_CHECKBOX_ID) {
      let t = this._r41f5cc7d3516ce.windowManager.confirm(
        "${wiredfurni.params.web_api.permissions.bulk_delete.warning.title}",
        "${wiredfurni.params.web_api.permissions.bulk_delete.warning.desc}",
        0,
        (i, s) => {
          (i.dispose(),
            s.type !== y.const_1300 &&
              !this._permissions.disposed &&
              (this._permissions.get(e).selected = !1));
        },
      );
      t != null && (t._r3d7b1775b50b97 = 13909337);
    }
  }, "onChangeCheckbox");
  onWriteKeyChange = n((e) => {
    this._permissions.get(a.MASS_DELETION_CHECKBOX_ID).disabled = e.length === 0;
  }, "onWriteKeyChange");
  get _r1a43057ed75c77() {
    return this._r41f5cc7d3516ce.presetManager._r136c3ce595ddcf();
  }
  onClickGeneratedReadKey = n(() => {
    this._r41f5cc7d3516ce.send(new UnkMessageComposer_2args_b36705(this._r1a43057ed75c77, !0));
  }, "onClickGeneratedReadKey");
  onClickGeneratedWriteKey = n(() => {
    this._r41f5cc7d3516ce.send(new UnkMessageComposer_2args_b36705(this._r1a43057ed75c77, !1));
  }, "onClickGeneratedWriteKey");
  _r1f5e743de4180d = n((e) => {
    let r = e.getParser();
    r._r418fec78af8664 === this._r1a43057ed75c77 &&
      (r._r763be770945f84 ? (this.var_2548.key = r.key) : (this.var_1899.key = r.key));
  }, "_r1f5e743de4180d");
}
