// Estratto da HabboAirLauncher.deobf.js, riga 360565.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/GlobalPlaceholderAddon.as
// Nome offuscato: _i19053ecf7bb00a

class extends DefaultAddonType {
  static {
    n(this, "GlobalPlaceholderAddon");
  }
  var_1660 = null;
  var_1542 = null;
  var_2795 = null;
  _roomDropdown = null;
  _r24b07f9a6feb9c = null;
  _rce8f7360c5a4f3 = null;
  var_1996 = null;
  get code() {
    return AddonCodes.GLOBAL_PLACEHOLDER;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_1660 = e.createPlaceholderNameSection(this.l("texts.placeholder_name"), "$")),
      (this.var_2795 = e._r178edc7e663bd7(new it("", 100))),
      (this._roomDropdown = e._r066cec9fb0ddf0(
        new DropdownParam(this.l("room_selection.tooltip"), [], (...s) => {
          this._r19de5ff482c047(s[0]);
        }),
        this.l("room_selection"),
      )),
      (this._r24b07f9a6feb9c = e._r066cec9fb0ddf0(
        new DropdownParam(this.l("placeholder_selection.tooltip"), [], (...s) => {
          this.onPlaceholderSelected(s[0]);
        }),
        this.l("placeholder_selection"),
      )),
      (this.var_1542 = e.createRadioGroup([
        new RadioButtonParam(0, this.l("from_value"), null, this.var_2795),
        new RadioButtonParam(
          1,
          this.l("from_another_room"),
          null,
          e.createSimpleListView(!0, [this._roomDropdown, this._r24b07f9a6feb9c]),
        ),
      ])));
    let i = e.createSection(this.l("choose_type"), this.var_1542);
    t.addElements(this.var_1660, i);
  }
  onEditStart(e) {
    this.var_1996 = null;
    let r = e.getInt(0),
      t = e.getString(0);
    if (
      ((this.var_1660.placeholderName = t),
      (this._rce8f7360c5a4f3 = e._r09c1c618a6015f.referencePlaceholderList),
      this.var_1542.setOptionDisabled(1, this._rce8f7360c5a4f3 == null),
      this.var_1542.setOptionDisabled(0, this._rce8f7360c5a4f3 == null && r === 1),
      (this.var_1542.selected = r),
      this._roomDropdown.reset(),
      this._r24b07f9a6feb9c.reset(),
      r === 0)
    )
      ((this.var_2795.text = e.getString(1)),
        this._rce8f7360c5a4f3 != null && this._roomDropdown.reinit(this.initPlaceholdersForRoom(), -1));
    else {
      this.var_2795.text = "";
      let i = e.getString(1),
        s = e.getInt(2);
      (this._roomDropdown.reinit(this.initPlaceholdersForRoom(), s),
        this._r19de5ff482c047(this._roomDropdown.selected, i),
        (this.var_1996 = this._r24b07f9a6feb9c.selected?.dropdownOptions ?? null));
    }
  }
  readIntParamsFromForm() {
    return [
      this.var_1542.selected,
      0,
      this.var_1542.selected === 0 ? 0 : this._roomDropdown.selectedId,
    ];
  }
  readStringParamFromForm() {
    let e = this.var_1660.placeholderName + "	";
    return (
      this.var_1542.selected === 0
        ? (e += this.var_2795.text)
        : this._r24b07f9a6feb9c.selected != null && (e += this._r24b07f9a6feb9c.selected.dropdownOptions),
      e
    );
  }
  _r19de5ff482c047 = n((e, r = null) => {
    if (e == null) {
      this._r24b07f9a6feb9c.reset();
      return;
    }
    let t = [],
      i = -1;
    if (this._rce8f7360c5a4f3 != null)
      for (let s of this._rce8f7360c5a4f3.sharedPlaceholders)
        s.roomId === e.id &&
          (r != null && s.placeholderName === r && (i = t.length),
          t.push(new ExpandableDropdownOption(t.length, s.placeholderName)));
    this._r24b07f9a6feb9c.reinit(t, i);
  }, "_r19de5ff482c047");
  onPlaceholderSelected = n((e) => {
    ((this.var_1660.placeholderName.length === 0 ||
      (this.var_1996 != null && this.var_1996 === this.var_1660.placeholderName)) &&
      (this.var_1660.placeholderName = e?.dropdownOptions ?? ""),
      (this.var_1996 = this._r24b07f9a6feb9c.selected?.dropdownOptions ?? null));
  }, "onPlaceholderSelected");
  initPlaceholdersForRoom() {
    let e = new Set(),
      r = [];
    if (this._rce8f7360c5a4f3 != null)
      for (let t of this._rce8f7360c5a4f3.sharedPlaceholders)
        e.has(t.roomId) || (r.push(new ExpandableDropdownOption(t.roomId, t.roomName)), e.add(t.roomId));
    return (r.sort((t, i) => t.dropdownOptions.localeCompare(i.dropdownOptions)), r);
  }
}
