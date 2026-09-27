// Extracted from HabboAirLauncher.deobf.js, line 346874.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/inputsources/WiredInputSourcePicker.as
// Obfuscated name: _iabd90f9e1b7d88

class a {
  constructor(e, r, t) {
    this._roomEvents = e;
    this.var_603 = r;
    this._id = t;
    this.var_603 === a.MERGED_SOURCE && (this._selectionCache = {});
  }
  static {
    n(this, "WiredInputSourcePicker");
  }
  static var_64 = 0;
  static USER_SOURCE = 1;
  static MERGED_SOURCE = 2;
  static _rea247d45bf1c90 = 0;
  static _rc3734c637e361f = 1;
  static _r96bd8b32e45b91 = 2;
  _disposed = !1;
  var_253 = null;
  _element = null;
  _selectionCache = null;
  var_5425 = "";
  _r12cb7a5c0e658c = a._rea247d45bf1c90;
  var_4404 = !1;
  var_2522 = !1;
  get disposed() {
    return this._disposed;
  }
  get sourceType() {
    return this.var_603;
  }
  set sourceType(e) {
    if (this.var_603 !== a.MERGED_SOURCE) return;
    let r = this._element.getMergedType(this._id);
    this._element.setMergedType(this._id, e);
    let t = this._element.mergedSelections()[this._id],
      i = t[0],
      s = t[1];
    r === a.var_64
      ? (this._selectionCache[r] = this.var_253._r7ba6f01e49d6c6[i])
      : r === a.USER_SOURCE && (this._selectionCache[r] = this.var_253._ra3ec1f5c3b2503[s]);
    let o = this.var_253._red1f8e750b075d,
      d;
    (e === a.var_64
      ? ((d = e in this._selectionCache ? this._selectionCache[e] : o.getAllowedFurniSources(i)[0]),
        (this.var_253._r7ba6f01e49d6c6[i] = d))
      : e === a.USER_SOURCE &&
        ((d = e in this._selectionCache ? this._selectionCache[e] : o.getAllowedUserSources(s)[0]),
        (this.var_253._ra3ec1f5c3b2503[s] = d)),
      this.refreshContainer(this.var_253, this._element));
  }
  get id() {
    return this._id;
  }
  get _r12788e38c39058() {
    return this.var_5425;
  }
  get _rb79aad30ae67c4() {
    return this.var_4404;
  }
  get _ra5134c003bbce3() {
    return this._r12cb7a5c0e658c;
  }
  get disabled() {
    return this.var_2522;
  }
  onChangeInputSource(e) {
    let r = this.var_253._red1f8e750b075d,
      t = null,
      i = 0,
      s = -1,
      o = 0,
      d = 0,
      c = 0;
    if (this.var_603 === a.var_64)
      ((t = r.getAllowedFurniSources(this._id)),
        (i = this.var_253._r7ba6f01e49d6c6[this._id]),
        (s = t.indexOf(i)));
    else if (this.var_603 === a.USER_SOURCE)
      ((t = r.getAllowedUserSources(this._id)),
        (i = this.var_253._ra3ec1f5c3b2503[this._id]),
        (s = t.indexOf(i)));
    else {
      let f = this._element.mergedSelections()[this._id];
      if (((o = f[0]), (d = f[1]), (c = this._element.getMergedType(this._id)), c === a.var_64))
        ((t = r.getAllowedFurniSources(o)), (i = this.var_253._r7ba6f01e49d6c6[o]), (s = t.indexOf(i)));
      else if (c === a.USER_SOURCE)
        ((t = r.getAllowedUserSources(d)), (i = this.var_253._ra3ec1f5c3b2503[d]), (s = t.indexOf(i)));
      else return;
    }
    (s === -1 ? (s = 0) : e ? (s = (s + 1) % t.length) : (s = (s - 1 + t.length) % t.length),
      this.var_603 === a.var_64
        ? (this.var_253._r7ba6f01e49d6c6[this._id] = t[s])
        : this.var_603 === a.USER_SOURCE
          ? (this.var_253._ra3ec1f5c3b2503[this._id] = t[s])
          : c === a.var_64
            ? (this.var_253._r7ba6f01e49d6c6[o] = t[s])
            : c === a.USER_SOURCE && (this.var_253._ra3ec1f5c3b2503[d] = t[s]),
      this.refreshContainer(this.var_253, this._element));
  }
  refreshContainer(e, r) {
    (this.var_253 !== e || this._element !== r) &&
      ((this.var_253 = e),
      (this._element = r),
      this.var_603 === a.MERGED_SOURCE && (this._selectionCache = {}));
    let t = 0,
      i = "",
      s = !1;
    if (this.var_603 === a.var_64) ((i = "furni"), (t = e._r7ba6f01e49d6c6[this._id]));
    else if (this.var_603 === a.USER_SOURCE)
      ((i = "users"), (t = e._ra3ec1f5c3b2503[this._id]));
    else {
      let c = r.mergedSelections()[this._id],
        f = c[0],
        l = c[1],
        b = r.getMergedType(this._id);
      b === a.var_64
        ? ((i = "furni"), (t = e._r7ba6f01e49d6c6[f]))
        : b === a.USER_SOURCE
          ? ((i = "users"), (t = e._ra3ec1f5c3b2503[l]))
          : ((s = !0), (i = a.getTypeNameForSource(r.getMergedType(this._id))));
    }
    let o = s ? `wiredfurni.params.sources.${i}` : `wiredfurni.params.sources.${i}.${t}`,
      d = this._roomEvents.localization.getLocalization(o, o);
    if (((this._r12cb7a5c0e658c = a._rea247d45bf1c90), i === "furni")) {
      let c = e._red1f8e750b075d._r1a2fb98ee0c252(),
        f = this.presetManager._re74971ad523db1,
        l = null,
        b = a._rea247d45bf1c90;
      (t === f7.FURNI_SOURCE_FURNI_PICKS_1 || t === f7.const_594
        ? ((l = this.presetManager._ra92c81c3f48874()), (b = a._rc3734c637e361f))
        : t === f7.FURNI_SOURCE_FURNI_PICKS_2 &&
          ((l = this.presetManager._r81a3cda1ec1860()), (b = a._r96bd8b32e45b91)),
        c && b !== a._rea247d45bf1c90 && (this._r12cb7a5c0e658c = b),
        (c || f) && l != null && (d += ` [${l.length}/${e.furniLimit}]`));
    }
    ((this.var_4404 = s),
      (this.var_5425 = d),
      (this.var_2522 = r.isInputSourceDisabled(this._id, this.var_603)));
  }
  dispose() {
    this._disposed ||
      ((this._roomEvents = null),
      (this.var_253 = null),
      (this._element = null),
      (this._selectionCache = null),
      (this._disposed = !0));
  }
  static getTypeNameForSource(e) {
    return e === a.var_64
      ? "furni"
      : e === a.USER_SOURCE
        ? "users"
        : e === VariableExtraSourceTypes.CONTEXT_SOURCE
          ? "context"
          : e === VariableExtraSourceTypes.GLOBAL_SOURCE
            ? "global"
            : "";
  }
  get presetManager() {
    return this._roomEvents.presetManager;
  }
}
