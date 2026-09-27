// Extracted from HabboAirLauncher.deobf.js, line 365771.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/conditions/class_3968.as
// Obfuscated name: _ie103215dd3cc34

class a extends DefaultConditionType {
  static {
    n(this, "class_3968");
  }
  static DEFAULT_CODES = [0, 2, 5, 7, 8, 9, 10, 27];
  _handItemDropdown = null;
  var_4507 = null;
  _options = [];
  get code() {
    return ConditionCodes.ACTOR_HAS_HANDITEM;
  }
  get negativeCode() {
    return ConditionCodes.NOT_HAS_HANDITEM;
  }
  get inputMode() {
    return DefaultConditionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._options = this.createOptions(a.DEFAULT_CODES)),
      (this._handItemDropdown = e.createDropdown(
        new DropdownParam(this.loc("wiredfurni.tooltip.handitem"), this._options),
      )),
      (this.var_4507 = e.createButton(this.l("capture.handitem"), this.captureHanditem)),
      t.addElements(
        e.createSection(
          this.l("handitem"),
          e.createSimpleListView(!0, [this._handItemDropdown, this.var_4507]),
        ),
      ));
  }
  readIntParamsFromForm() {
    let e = this._handItemDropdown.selectedId;
    return [e === -1 ? 0 : e];
  }
  onEditStart(e) {
    this._r0fb07803627f62(e.intParams[0]);
  }
  createOptions(e) {
    let r = [];
    for (let t of e) r.push(new ExpandableDropdownOption(t, `\${handitem${t}}`));
    return r;
  }
  _r0b01429d49e960(e) {
    if (e < 0) return;
    let r = !1;
    for (let i of this._options)
      if (i.id === e) {
        r = !0;
        break;
      }
    r || this._options.push(new ExpandableDropdownOption(e, `\${handitem${e}}`));
    let t = -1;
    for (let i = 0; i < this._options.length; i += 1) this._options[i].id === e && (t = i);
    this._handItemDropdown.reinit(this._options, t);
  }
  _r0fb07803627f62(e) {
    (this._r0b01429d49e960(e), (this._handItemDropdown.selectedId = e));
  }
  captureHanditem = n(() => {
    let e = this._r41f5cc7d3516ce.roomEngine
      ._ra1f5cb56d0c2d8(
        this._r41f5cc7d3516ce._r2eac8239a09fe7.roomId,
        this._r41f5cc7d3516ce._r2eac8239a09fe7.ownUserRoomId,
        RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
      )
      .getStringToStringMap()
      ._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257);
    this._r0fb07803627f62(e);
  }, "captureHanditem");
}
