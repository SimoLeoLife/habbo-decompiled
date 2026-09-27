// Estratto da HabboAirLauncher.deobf.js, riga 362790.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3977.as
// Nome offuscato: _i765e316daff7d7

class a extends class_3976 {
  static {
    n(this, "class_3977");
  }
  static DEFAULT_CODES = [0, 2, 5, 7, 8, 9, 10, 27, 1126, 1127, 1128];
  var_3088 = null;
  _botName = null;
  _handItemDropdown = null;
  var_4507 = null;
  _options = [];
  get code() {
    return ActionTypeCodes.BOT_GIVE_HAND_ITEM;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_3088 = e.createCheckboxGroup([new CheckboxOptionParam(this.l("bot.usage"))], this.onBotUsageChange)),
      (this._botName = e._r178edc7e663bd7(
        new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.bot.name")),
      )));
    let i = e.createSimpleListView(!0, [this.var_3088, this._botName]);
    ((this._options = this.createOptions(a.DEFAULT_CODES)),
      (this._handItemDropdown = e.createDropdown(
        new DropdownParam(this.loc("wiredfurni.tooltip.bot.handitem"), this._options),
      )),
      (this.var_4507 = e.createButton(this.l("capture.handitem"), this.captureHanditem)),
      t.addElements(
        e.createSection(this.l("bot.name"), i),
        e.createSection(
          this.l("handitem"),
          e.createSimpleListView(!0, [this._handItemDropdown, this.var_4507]),
        ),
      ));
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43 !== "";
    ((this._botName.text = e._r7e8836fc336e43),
      (this.var_3088.get(0).selected = r),
      (this._botName.window.visible = r),
      this._r0fb07803627f62(e.intParams[0] ?? 0));
  }
  readStringParamFromForm() {
    return this.var_3088.get(0).selected ? this._botName.text : "";
  }
  readIntParamsFromForm() {
    let e = this._handItemDropdown.selectedId;
    return [e === -1 ? 0 : e];
  }
  _r0fb07803627f62(e) {
    (this._r0b01429d49e960(e), (this._handItemDropdown.selectedId = e));
  }
  onBotUsageChange = n((e, r) => {
    e === 0 && (this._botName.window.visible = r);
  }, "onBotUsageChange");
  createOptions(e) {
    let r = [];
    for (let t of e) r.push(new ExpandableDropdownOption(t, `\${handitem${t}}`));
    return r;
  }
  _r0b01429d49e960(e) {
    if (e < 0) return;
    let r = !1;
    for (let t of this._options)
      if (t.id === e) {
        r = !0;
        break;
      }
    (r || this._options.push(new ExpandableDropdownOption(e, `\${handitem${e}}`)),
      this._handItemDropdown.reinit(this._options, e));
  }
  captureHanditem = n(() => {
    let t =
      this._r41f5cc7d3516ce.roomEngine
        ._ra1f5cb56d0c2d8(
          this._r41f5cc7d3516ce._r2eac8239a09fe7.roomId,
          this._r41f5cc7d3516ce._r2eac8239a09fe7.ownUserRoomId,
          RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
        )
        ?.getStringToStringMap()
        ?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0;
    this._r0fb07803627f62(t);
  }, "captureHanditem");
}
