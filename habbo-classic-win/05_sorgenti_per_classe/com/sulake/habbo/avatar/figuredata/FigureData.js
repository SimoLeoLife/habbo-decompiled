// Extracted from HabboAirLauncher.deobf.js, line 163113.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/figuredata/FigureData.as
// Obfuscated name: _i5acf0a1ca74356

class a {
  static {
    n(this, "FigureData");
  }
  static MALE = "M";
  static const_140 = "F";
  static const_113 = "U";
  static SCALE = "h";
  static ACTION = "std";
  static DEFAULT_FRAME = "0";
  _avatarEditor;
  _view;
  _data = new Map();
  _r0965e8b4af4e87 = new Map();
  var_106 = a.MALE;
  var_1271 = !1;
  var_81 = 4;
  _rce3138d2f96c6a = -1;
  constructor(e) {
    ((this.var_81 = FigureDataView.PREVIEW_AVATAR_DIRECTION), (this._avatarEditor = e), (this._view = new FigureDataView(this)));
  }
  loadAvatarData(e, r) {
    ((this._data = new Map()),
      (this._r0965e8b4af4e87 = new Map()),
      (this.var_106 = r),
      this.getFigureStringWithFace(e),
      this.updateView());
  }
  dispose() {
    ((this._avatarEditor = null),
      (this._view = null),
      this._data.clear(),
      this._r0965e8b4af4e87.clear(),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  getPartSetId(e) {
    return this._data.get(e) ?? -1;
  }
  _r5e44c31846098f(e) {
    return this._r0965e8b4af4e87.get(e) ?? [this._avatarEditor?._re8278712fcbdc6(e) ?? 0];
  }
  parseFigureString() {
    let e = [];
    for (let [r, t] of this._data.entries()) {
      let i = this._r0965e8b4af4e87.get(r) ?? [],
        s = `${r}-${t}`;
      for (let o of i) s += `-${o}`;
      e.push(s);
    }
    return e.join(".");
  }
  savePartData(e, r, t, i = !1) {
    (this.savePartSetId(e, r, i), this.savePartSetColourId(e, t, i));
  }
  savePartSetColourId(e, r, t = !0) {
    switch (e) {
      case AvatarFigurePartType.HEAD:
      case AvatarFigurePartType.HAIR:
      case AvatarFigurePartType.const_680:
      case AvatarFigurePartType.const_1106:
      case AvatarFigurePartType.const_500:
      case AvatarFigurePartType.const_621:
      case AvatarFigurePartType.CHEST:
      case AvatarFigurePartType.COAT_CHEST:
      case AvatarFigurePartType.CHEST_ACCESSORY:
      case AvatarFigurePartType.CHEST_PRINT:
      case AvatarFigurePartType.const_94:
      case AvatarFigurePartType.SHOES:
      case AvatarFigurePartType.const_585:
      case AvatarFigurePartType.MISC:
      case AvatarFigurePartType.PET:
        this._r0965e8b4af4e87.set(e, r);
        break;
      default:
        break;
    }
    t && this.updateView();
  }
  getFigureString(e) {
    let r = [AvatarFigurePartType.HEAD],
      t = [];
    for (let i of r) {
      let s = this._r0965e8b4af4e87.get(i) ?? null;
      if (s == null) continue;
      let o = this._data.get(i) ?? -1;
      i === AvatarFigurePartType.HEAD && (o = e);
      let d = `${i}-${o}`;
      if (o >= 0) for (let c of s) d += `-${c}`;
      t.push(d);
    }
    return t.join(".");
  }
  updateView() {
    this._view?.update(this.parseFigureString(), this._rce3138d2f96c6a, this.var_81);
  }
  get view() {
    if (this._view == null) throw new Error("Figure data view is not available.");
    return this._view;
  }
  get gender() {
    return this.var_106;
  }
  avatarImageReady(e) {
    this.updateView();
  }
  set isDevelopmentEditor(e) {
    this._rce3138d2f96c6a = e;
  }
  get isDevelopmentEditor() {
    return this._rce3138d2f96c6a;
  }
  get avatarEditor() {
    if (this._avatarEditor == null) throw new Error("Avatar editor is not available.");
    return this._avatarEditor;
  }
  get direction() {
    return this.var_81;
  }
  set direction(e) {
    ((this.var_81 = e), this.updateView());
  }
  getFigureStringWithFace(e) {
    if (e != null)
      for (let r of e.split(".")) {
        let t = r.split("-");
        if (t.length > 1) {
          let i = t[0],
            s = Number.parseInt(t[1], 10),
            o = t.slice(2).map((d) => Number.parseInt(d, 10));
          (o.length === 0 && o.push(0), this.savePartSetId(i, s, !1), this.savePartSetColourId(i, o, !1));
        }
      }
  }
  savePartSetId(e, r, t = !0) {
    switch (e) {
      case AvatarFigurePartType.HEAD:
      case AvatarFigurePartType.HAIR:
      case AvatarFigurePartType.const_680:
      case AvatarFigurePartType.const_1106:
      case AvatarFigurePartType.const_500:
      case AvatarFigurePartType.const_621:
      case AvatarFigurePartType.CHEST:
      case AvatarFigurePartType.COAT_CHEST:
      case AvatarFigurePartType.CHEST_ACCESSORY:
      case AvatarFigurePartType.CHEST_PRINT:
      case AvatarFigurePartType.const_94:
      case AvatarFigurePartType.SHOES:
      case AvatarFigurePartType.const_585:
      case AvatarFigurePartType.MISC:
      case AvatarFigurePartType.PET:
        r >= 0 ? this._data.set(e, r) : this._data.delete(e);
        break;
      default:
        break;
    }
    t && this.updateView();
  }
}
