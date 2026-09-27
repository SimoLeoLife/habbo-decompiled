// Extracted from HabboAirLauncher.deobf.js, line 146532.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/floorplaneditor/FloorPlanCache.as
// Obfuscated name: _i45daa6f1b105d3

class a {
  constructor(e) {
    this._bcFloorPlanEditor = e;
  }
  static {
    n(this, "FloorPlanCache");
  }
  static MAX_AREA = 3025;
  static MAX_AXIS_LENGTH = 64;
  _floorWidth = 0;
  _floorHeight = 0;
  _r81ff317dd809f8 = [];
  _r560c58c0b07475 = null;
  _rd0caeae623930b = null;
  _entryPoint = null;
  _rd8fa5465c559b4 = 0;
  _showedPopup = !1;
  _rb42cb61cf01165(e) {
    (this._r3b695a0d795771(e.getParser().text), (this._showedPopup = !1));
  }
  _r07e11cc34e0825(e) {
    let r = e.getParser();
    this._ra871d8d4dafb36();
    for (let t of r._rdf8319daa8cbe9)
      this._rd0caeae623930b?.[t.y]?.[t.x] != null && (this._rd0caeae623930b[t.y][t.x] = !0);
  }
  _r20989df6717cd1(e, r, t) {
    if (e < 0 || r < 0 || !this._rb69be1765a4869(e, r)) return !1;
    for (; e >= this._floorWidth;) if (!this.addRow()) return !1;
    for (; r >= this._floorHeight;) if (!this.addColumn()) return !1;
    return this._racc1d853e05d24(e, r)
      ? !1
      : ((this._r81ff317dd809f8[r] = this.setCharAt(
          this._r81ff317dd809f8[r] ?? "",
          t < 0 ? "x" : t.toString(33),
          e,
        )),
        !0);
  }
  _rfa5cc9422dc3ef(e, r) {
    if (e < 0 || e >= this._floorWidth || r < 0 || r >= this._floorHeight) return -1;
    let t = (this._r81ff317dd809f8[r] ?? "").charAt(e);
    if (t === "x") return -1;
    let i = Number.parseInt(t, 33);
    return Number.isNaN(i) ? 0 : i;
  }
  get _r6ec593f3f08d0b() {
    return this._floorWidth;
  }
  get _reba6d9dec10c70() {
    return this._floorHeight;
  }
  getData() {
    return this._r81ff317dd809f8.map((e) => `${e}\r`).join("");
  }
  _racc1d853e05d24(e, r) {
    return this._rd0caeae623930b == null ||
      this._rd0caeae623930b.length < r + 1 ||
      (this._rd0caeae623930b[r]?.length ?? 0) < e + 1
      ? !1
      : this._rd0caeae623930b[r][e] === !0;
  }
  _rc9c271dfd2d1f0(e, r) {
    return this._entryPoint?.x === e && this._entryPoint?.y === r;
  }
  get entryPoint() {
    return this._entryPoint;
  }
  set entryPoint(e) {
    this._entryPoint = e;
  }
  get _r1a961bea1ff44e() {
    return this._rd8fa5465c559b4;
  }
  set _r1a961bea1ff44e(e) {
    (e < 0 && (e = 7), e > 7 && (e = 0), (this._rd8fa5465c559b4 = e));
  }
  _r4157aa584a449b(e) {
    for (; e >= this._r6ec593f3f08d0b;) if (!this.addRow(!0)) return !1;
    return !0;
  }
  _r9760c0b54f9aa1(e) {
    for (; e >= this._reba6d9dec10c70;) if (!this.addColumn(!0)) return !1;
    return !0;
  }
  _rb9742298f2291a() {
    ((this._r560c58c0b07475 = this._r81ff317dd809f8), this._rd0bfcd5a4f7730());
  }
  _rd0bfcd5a4f7730() {
    if (this._r560c58c0b07475 != null) {
      this._r81ff317dd809f8 = [];
      for (let e = 0; e < this._r560c58c0b07475.length; e += 1)
        this._r81ff317dd809f8.push(this._r560c58c0b07475[e]);
      this._raf79d84cf76dfb();
    }
  }
  _r1a092d01932bb8() {
    this._r560c58c0b07475 = null;
  }
  _ra871d8d4dafb36() {
    this._rd0caeae623930b = [];
    for (let e = 0; e < this._reba6d9dec10c70; e += 1) {
      let r = [];
      for (let t = 0; t < this._r6ec593f3f08d0b; t += 1) r.push(!1);
      this._rd0caeae623930b.push(r);
    }
  }
  _r3b695a0d795771(e = "") {
    let r = e.split("\r");
    this._r81ff317dd809f8 = [];
    for (let t of r) t.length > 0 && this._r81ff317dd809f8.push(t);
    this._raf79d84cf76dfb();
  }
  _raf79d84cf76dfb() {
    if (((this._floorWidth = -1), (this._floorHeight = -1), this._r81ff317dd809f8.length === 0))
      return !1;
    let e = this._r81ff317dd809f8[0]?.length ?? 0,
      r = 0;
    for (let t of this._r81ff317dd809f8) {
      if (t.length === 0) break;
      r += 1;
    }
    return ((this._floorWidth = e), (this._floorHeight = r), !0);
  }
  _rb69be1765a4869(e, r) {
    return this._r81ff317dd809f8 == null || !this.checkSizeLimits(r + 1, e + 1)
      ? !1
      : e === 0 || r === 0
        ? this._r69976ca3946f0d(e, r)
        : !0;
  }
  _r69976ca3946f0d(e, r) {
    return this._ra8c69ad4cc6a22(e, r) && this._rf0d27110e3fd39(e, r);
  }
  _ra8c69ad4cc6a22(e, r) {
    for (let t = 0; t < this._floorHeight; t += 1)
      if (t !== r && (this._r81ff317dd809f8[t] ?? "").substring(0, 1) !== "x") return !1;
    return !0;
  }
  _rf0d27110e3fd39(e, r) {
    for (let t = 0; t < this._floorWidth; t += 1)
      if (t !== e && (this._r81ff317dd809f8[0] ?? "").substring(t, t + 1) !== "x") return !1;
    return !0;
  }
  setCharAt(e, r, t) {
    return e.substring(0, t) + r + e.substring(t + 1);
  }
  addRow(e = !1) {
    if (!this.checkSizeLimits(this._floorWidth + 1, this._floorHeight))
      return (
        !this._showedPopup &&
          !e &&
          (this._bcFloorPlanEditor.windowManager._r3651220a1507f2(
            "${floor.plan.editor.alert}",
            null,
            "${floor.plan.editor.size.limit.exceeded}",
          ),
          (this._bcFloorPlanEditor._r192d162944e73a.drawing = !1),
          (this._showedPopup = !0)),
        !1
      );
    for (let r = 0; r < this._floorHeight; r += 1)
      (this._r81ff317dd809f8[r] ?? "").length > 0 &&
        ((this._r81ff317dd809f8[r] = `${this._r81ff317dd809f8[r]}x`), this._rd0caeae623930b[r].push(!1));
    return ((this._floorWidth += 1), !0);
  }
  addColumn(e = !1) {
    if (!this.checkSizeLimits(this._floorWidth, this._floorHeight + 1))
      return (
        !this._showedPopup &&
          !e &&
          (this._bcFloorPlanEditor.windowManager._r3651220a1507f2(
            "${floor.plan.editor.alert}",
            null,
            "${floor.plan.editor.size.limit.exceeded}",
          ),
          (this._bcFloorPlanEditor._r192d162944e73a.drawing = !1),
          (this._showedPopup = !0)),
        !1
      );
    let r = "";
    for (let i = 0; i < this._floorWidth; i += 1) r += "x";
    this._r81ff317dd809f8.push(r);
    let t = [];
    for (let i = 0; i < this._floorWidth; i += 1) t.push(!1);
    return (this._rd0caeae623930b.push(t), (this._floorHeight += 1), !0);
  }
  checkSizeLimits(e, r) {
    return !(
      (!this._bcFloorPlanEditor._r02b8fd34e1e5ba && (e - 1) * (r - 1) > a.MAX_AREA) ||
      e > a.MAX_AXIS_LENGTH ||
      r > a.MAX_AXIS_LENGTH
    );
  }
}
