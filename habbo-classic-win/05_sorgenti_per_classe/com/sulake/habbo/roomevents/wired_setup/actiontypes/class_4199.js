// Extracted from HabboAirLauncher.deobf.js, line 363203.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4199.as
// Obfuscated name: _ibb5a491f4af0a0

class a extends DefaultActionType {
  static {
    n(this, "class_4199");
  }
  static NOTIFICATION_STYLES = [
    34, 200, 201, 202, 210, 211, 212, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 250, 251, 252,
  ];
  _rfa56d3a59eeae3 = null;
  _r5573015e3782db = null;
  _rf50936452b4d81 = null;
  _bubbleWidthDropdown = null;
  get code() {
    return ActionTypeCodes.CHAT;
  }
  readStringParamFromForm() {
    return this._rfa56d3a59eeae3.text;
  }
  readIntParamsFromForm() {
    return [
      this._r5573015e3782db.selected,
      this._rf50936452b4d81.selectedId,
      this._bubbleWidthDropdown.selectedId,
    ];
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  onEditStart(e) {
    ((this._rfa56d3a59eeae3.text = e._r7e8836fc336e43),
      (this._r5573015e3782db.selected = e.intParams[0] ?? 0),
      (this._rf50936452b4d81.selectedId = e.intParams[1] ?? 0),
      (this._bubbleWidthDropdown.selectedId = e.intParams[2] ?? 0));
  }
  buildInputs(e, r, t) {
    let i = e.createUsageInfoSection("${wiredfurni.params.show_message.usage_info}", !0);
    this._rfa56d3a59eeae3 = e._r1cb85c1e1927d4(new TextAreaParam(40, -1, 8, -1, 200));
    let s = e.createSection("${wiredfurni.params.message}", this._rfa56d3a59eeae3);
    this._r5573015e3782db = e.createRadioGroup([
      new RadioButtonParam(0, "${wiredfurni.params.show_message.visibility_selection.0}"),
      new RadioButtonParam(1, "${wiredfurni.params.show_message.visibility_selection.1}"),
    ]);
    let o = e.createSection(
        "${wiredfurni.params.show_message.visibility_selection.title}",
        this._r5573015e3782db,
        Hr.COLLAPSED,
      ),
      d = [];
    for (let b of a.NOTIFICATION_STYLES)
      d.push(new ExpandableDropdownOption(b, `\${wiredfurni.params.show_message.style_selection.${b}}`));
    this._rf50936452b4d81 = e.createDropdown(
      new DropdownParam("${wiredfurni.params.show_message.style_selection.title}", d),
    );
    let c = e.createSection(
        "${wiredfurni.params.show_message.style_selection.title}",
        this._rf50936452b4d81,
        Hr.COLLAPSED,
      ),
      f = [
        new ExpandableDropdownOption(-1, "${wiredfurni.params.show_message.bubble_width.-1}"),
        new ExpandableDropdownOption(0, "${wiredfurni.params.show_message.bubble_width.0}"),
        new ExpandableDropdownOption(1, "${wiredfurni.params.show_message.bubble_width.1}"),
        new ExpandableDropdownOption(2, "${wiredfurni.params.show_message.bubble_width.2}"),
      ];
    this._bubbleWidthDropdown = e.createDropdown(
      new DropdownParam("${wiredfurni.params.show_message.bubble_width.title}", f),
    );
    let l = e.createSection(
      "${wiredfurni.params.show_message.bubble_width.title}",
      this._bubbleWidthDropdown,
      Hr.COLLAPSED,
    );
    t.addElements(i, s, o, c, l);
  }
}
