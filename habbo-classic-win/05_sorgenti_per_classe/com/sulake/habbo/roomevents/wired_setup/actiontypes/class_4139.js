// Extracted from HabboAirLauncher.deobf.js, line 362956.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4139.as
// Obfuscated name: _i40d7692f5a6300

class a extends class_3976 {
  static {
    n(this, "class_4139");
  }
  static STRING_PARAM_DELIMITER = "	";
  _botName = null;
  _chatMessage = null;
  var_2960 = null;
  _bubbleWidthDropdown = null;
  get code() {
    return ActionTypeCodes.BOT_TALK_DIRECT_TO_AVTR;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._botName = e._r178edc7e663bd7(
      new it("", 32, null, -1, null, !0, this.loc("wiredfurni.tooltip.bot.name")),
    )),
      (this._chatMessage = e._r1cb85c1e1927d4(
        new TextAreaParam(40, -1, 8, -1, 200, "", null, null, !0, !1, "${wiredfurni.tooltip.bot.chatmessage}"),
      )),
      (this.var_2960 = e.createRadioGroup([new RadioButtonParam(1, this.l("whisper")), new RadioButtonParam(0, this.l("talk"))])));
    let i = e.createSimpleListView(!0, [this._chatMessage, this.var_2960]),
      s = [
        new ExpandableDropdownOption(-1, "${wiredfurni.params.show_message.bubble_width.-1}"),
        new ExpandableDropdownOption(0, "${wiredfurni.params.show_message.bubble_width.0}"),
        new ExpandableDropdownOption(1, "${wiredfurni.params.show_message.bubble_width.1}"),
        new ExpandableDropdownOption(2, "${wiredfurni.params.show_message.bubble_width.2}"),
      ];
    this._bubbleWidthDropdown = e.createDropdown(
      new DropdownParam("${wiredfurni.params.show_message.bubble_width.title}", s),
    );
    let o = e.createSection(
      "${wiredfurni.params.show_message.bubble_width.title}",
      this._bubbleWidthDropdown,
      Hr.COLLAPSED,
    );
    t.addElements(
      e.createSection(this.l("bot.name"), this._botName),
      e.createSection(this.l("message"), i),
      o,
    );
  }
  onEditStart(e) {
    let r = e._r7e8836fc336e43.split(a.STRING_PARAM_DELIMITER);
    ((this._botName.text = r.length >= 1 ? r[0] : ""),
      (this._chatMessage.text = r.length === 2 ? r[1] : ""),
      (this.var_2960.selected = e.intParams[0] ?? 0),
      (this._bubbleWidthDropdown.selectedId = e.intParams[1] ?? 0));
  }
  readStringParamFromForm() {
    return `${this._botName.text}${a.STRING_PARAM_DELIMITER}${this._chatMessage.text}`;
  }
  readIntParamsFromForm() {
    return [this.var_2960.selected, this._bubbleWidthDropdown.selectedId];
  }
}
