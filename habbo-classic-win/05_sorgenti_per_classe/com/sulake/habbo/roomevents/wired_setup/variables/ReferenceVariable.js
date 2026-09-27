// Estratto da HabboAirLauncher.deobf.js, riga 370227.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/variables/ReferenceVariable.as
// Nome offuscato: _ia42ceac54e120e

class extends class_3947 {
  static {
    n(this, "ReferenceVariable");
  }
  _variableName = null;
  _roomDropdown = null;
  _variableDropdown = null;
  var_2901 = null;
  _r7a37a210417240 = null;
  _rooms = [];
  _r5b0facd81e15cc = new Map();
  _rac1adbc86ad195 = null;
  _r7f55baf2723230 = null;
  _r3eb618435a1625 = -1;
  _rf70a5b40d493b8 = !1;
  get code() {
    return VariableCodes.REFERENCE_VARIABLE;
  }
  _r4ac8c24e31ca7e() {
    if (this._rac1adbc86ad195 == null) return [WiredVariable.var_160];
    let e = this._variableDropdown.selectedId;
    return e < 0 || e >= this._rac1adbc86ad195.length ? [WiredVariable.var_160] : [this._rac1adbc86ad195[e]];
  }
  readIntParamsFromForm() {
    return [this.var_2901.get(0).selected ? 1 : 0];
  }
  onEditStart(e) {
    super.onEditStart(e);
    let r =
      e._r1385185994d461 != null && e._r1385185994d461.length > 0
        ? e._r1385185994d461[0]
        : WiredVariable.var_160;
    ((this.var_2901.get(0).selected = e.intParams[0] !== 0), (this._rf70a5b40d493b8 = !1));
    let t = e._r09c1c618a6015f._r60337a0f805c77;
    (this.initRooms(r, t),
      this._r2e4ebe8a76f6af(r),
      (this._r7a37a210417240 = this._r20e36218db9fd8(r)),
      (this.initialVariableName = e._r7e8836fc336e43),
      (this._rf70a5b40d493b8 = !0),
      this._r1f62f506cfe5c3(t != null));
  }
  readStringParamFromForm() {
    return this._variableName.variableName;
  }
  get inputMode() {
    return class_3947.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._variableName = e.createVariableNameSection()),
      (this._roomDropdown = e.createDropdown(
        new DropdownParam(this.l("variables.room_selection.tooltip"), null, this.onRoomSelected),
      )));
    let i = e.createSection(this.l("variables.room_selection"), this._roomDropdown);
    this._variableDropdown = e.createDropdown(
      new DropdownParam(this.l("variables.variable_selection.tooltip"), null, this._r307d876c116e03),
    );
    let s = e.createSection(this.l("variables.variable_ref_selection"), this._variableDropdown);
    this.var_2901 = e.createCheckboxGroup([new CheckboxOptionParam(this.l("variables.settings.read_only"))]);
    let o = e.createSection(this.l("variables.settings"), this.var_2901);
    t.addElements(this._variableName, i, s, o);
  }
  _r1f62f506cfe5c3(e) {
    ((this._variableName.disabled = !e),
      (this._roomDropdown.disabled = !e),
      (this._variableDropdown.disabled = !e),
      (this.var_2901.disabled = !e));
  }
  initRooms(e, r) {
    ((this._r5b0facd81e15cc = new Map()), (this._rooms = []));
    let t = null,
      i = new Map();
    if (((this._r3eb618435a1625 = -1), r != null)) {
      for (let o of r.sharedVariables) {
        let d = i.get(o.roomId) ?? null;
        (d == null &&
          ((d = { id: o.roomId, name: o.roomName }), i.set(o.roomId, d), this._rooms.push(d)),
          this._r5b0facd81e15cc.has(o.roomId) || this._r5b0facd81e15cc.set(o.roomId, []),
          this._r5b0facd81e15cc.get(o.roomId).push(o.wiredVariable),
          o.wiredVariable.variableId === e && (t = d));
      }
      this._rooms.sort((o, d) => o.name.localeCompare(d.name));
    }
    t != null && (this._r3eb618435a1625 = t.id);
    let s = [];
    for (let o of this._rooms) s.push(new ExpandableDropdownOption(o.id, o.name));
    this._roomDropdown.reinit(s, this._r3eb618435a1625);
  }
  _r2e4ebe8a76f6af(e) {
    ((this._rac1adbc86ad195 = []), (this._r7f55baf2723230 = []));
    let r = [],
      t = -1;
    if (this._r5b0facd81e15cc.has(this._r3eb618435a1625)) {
      let i = this._r5b0facd81e15cc.get(this._r3eb618435a1625),
        s = 0;
      for (let o of i)
        (r.push(new ExpandableDropdownOption(s, o.variableName)),
          this._rac1adbc86ad195.push(o.variableId),
          this._r7f55baf2723230.push(o),
          o.variableId === e && (t = s),
          (s += 1));
    }
    this._variableDropdown.reinit(r, t);
  }
  _r4e4c503fd26659 = n((e) => {
    !this._rf70a5b40d493b8 ||
      e == null ||
      (this._r3eb618435a1625 !== e.id &&
        ((this._r3eb618435a1625 = e.id),
        this._r2e4ebe8a76f6af(WiredVariable.var_160),
        this._r74c75e64e8d8be(null)));
  }, "_r4e4c503fd26659");
  _r64e9da5cebe620 = n((e) => {
    if (!this._rf70a5b40d493b8) return;
    let r = e == null ? -1 : e.id,
      t =
        this._r7f55baf2723230 != null && r >= 0 && r < this._r7f55baf2723230.length
          ? (this._r7f55baf2723230[r] ?? null)
          : null;
    this._r74c75e64e8d8be(t);
  }, "_r64e9da5cebe620");
  _r74c75e64e8d8be(e) {
    ((this._variableName.variableName.length === 0 ||
      (this._r7a37a210417240 != null &&
        this._r7a37a210417240.variableName === this._variableName.variableName)) &&
      (this._variableName.variableName = e == null ? "" : e.variableName),
      (this._r7a37a210417240 = e));
  }
  onRoomSelected = n((...e) => {
    this._r4e4c503fd26659(e[0] ?? null);
  }, "onRoomSelected");
  _r307d876c116e03 = n((...e) => {
    this._r64e9da5cebe620(e[0] ?? null);
  }, "_r307d876c116e03");
  _r20e36218db9fd8(e) {
    for (let r of this._r5b0facd81e15cc.values()) for (let t of r) if (t.variableId === e) return t;
    return null;
  }
  get variableNameSection() {
    return this._variableName;
  }
}
