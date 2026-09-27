// Estratto da HabboAirLauncher.deobf.js, riga 368427.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/selectors/class_3897.as
// Nome offuscato: _i2de7eb28d06d5e

class a extends DefaultSelectorType {
  static {
    n(this, "class_3897");
  }
  static DEFAULT_CODES = [0, 2, 5, 7, 8, 9, 10, 27];
  _handItemDropdown = null;
  var_4507 = null;
  _options = [];
  get code() {
    return SelectorCodes.USERS_WITH_HANDITEM;
  }
  get inputMode() {
    return DefaultSelectorType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._options = this.createOptions(a.DEFAULT_CODES)),
      (this._handItemDropdown = e.createDropdown(
        new DropdownParam(this.loc("wiredfurni.tooltip.handitem"), this._options),
      )),
      (this.var_4507 = e.createButton(this.l("capture.handitem"), this.captureHanditem)));
    let i = e.createSection(
      this.l("handitem"),
      e.createSimpleListView(!0, [this._handItemDropdown, this.var_4507]),
    );
    t.addElements(i);
  }
  readIntParamsFromForm() {
    let e = this._handItemDropdown.selectedId;
    return [e === -1 ? 0 : e];
  }
  onEditStart(e) {
    this._r0fb07803627f62(e.intParams[0]);
  }
  createOptions(e) {
    return e.map((r) => new ExpandableDropdownOption(r, "${handitem" + r + "}"));
  }
  _r0b01429d49e960(e) {
    if (e < 0) return;
    this._options.some((t) => t.id === e) || this._options.push(new ExpandableDropdownOption(e, "${handitem" + e + "}"));
    let r = -1;
    for (let t = 0; t < this._options.length; t += 1) this._options[t].id === e && (r = t);
    this._handItemDropdown.reinit(this._options, r);
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
