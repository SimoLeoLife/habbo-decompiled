// Estratto da HabboAirLauncher.deobf.js, riga 162887.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/CategoryBaseModel.as
// Nome offuscato: _ia090ce63c0985e

class {
  static {
    n(this, "CategoryBaseModel");
  }
  _categories = null;
  var_63;
  var_217 = !1;
  _view = null;
  var_1271 = !1;
  constructor(e) {
    this.var_63 = e;
  }
  dispose() {
    (this._view?.dispose(),
      (this._view = null),
      (this._categories = null),
      (this.var_63 = null),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  init() {
    this._categories == null && (this._categories = new B());
  }
  reset() {
    this.var_217 = !1;
    for (let e of this._categories?.getValues() ?? []) e.dispose();
    ((this._categories = new B()), this._view?.reset());
  }
  _r5081c654d88ac0(e) {
    if (this._categories == null || this._categories.getValue(e) != null) return;
    let r = this.var_63?.generateDataContent(this, e) ?? null;
    r != null && (this._categories.add(e, r), this._r92707d5c55ba57(e));
  }
  switchCategory(e = "") {
    (this.var_217 || this.init(), this._view?.switchCategory(e));
  }
  _r92707d5c55ba57(e) {
    if (this._categories == null || this.var_63?.figureData == null) return;
    let r = this._categories.getValue(e) ?? null;
    if (r == null) return;
    let t = this.var_63.figureData.getPartSetId(e),
      i = this.var_63.figureData._r5e44c31846098f(e) ?? [];
    (r._r595d9d1c06df1f(t), r._r45ba5ec99f27d2(i), this._view?.showPalettes(e, i.length));
  }
  _r0ee987ccb85c3c(e) {
    for (let r of this._categories?.getValues() ?? []) if (r._r27aac0ca50488d(e)) return !0;
    return !1;
  }
  _r94a3064a5ce3d6(e) {
    for (let r of this._categories?.getValues() ?? []) if (r._r94a3064a5ce3d6(e)) return !0;
    return !1;
  }
  _r31613d6b0496d9(e) {
    if (this._categories == null) return !1;
    let r = !1;
    for (let t of this._categories.getKeys()) {
      let i = this._categories.getValue(t);
      if (i == null) continue;
      let s = !1;
      if ((i._r31613d6b0496d9(e) && (s = !0), i._r39df7974a1b857(e) && (s = !0), s)) {
        let o = i._r7e3b9e90b1132f();
        (o != null &&
          this.var_63?.figureData != null &&
          this.var_63.figureData.savePartData(t, o.id, i.getSelectedColorIds() ?? [], !0),
          (r = !0));
      }
    }
    return r;
  }
  stripInvalidSellableItems() {
    if (this._categories == null || this.var_63 == null) return !1;
    let e = !1;
    for (let r of this._categories.getKeys()) {
      let t = this._categories.getValue(r);
      if (t != null && t.stripInvalidSellableItems(this.var_63.manager.inventory)) {
        let i = t._r7e3b9e90b1132f();
        (i != null &&
          this.var_63.figureData != null &&
          this.var_63.figureData.savePartData(r, i.id, t.getSelectedColorIds() ?? [], !0),
          (e = !0));
      }
    }
    return e;
  }
  selectPart(e, r) {
    let t = this._categories?.getValue(e) ?? null;
    if (t == null || this.var_63 == null) return;
    let i = t.selectedPartIndex;
    t._rf4462a66493fcd(r);
    let s = t._r7e3b9e90b1132f();
    if (s != null) {
      if (s._ra5c822ed8d6c34) {
        (t._rf4462a66493fcd(i), this.var_63._rdb48c761d7df2c());
        return;
      }
      (this._view?.showPalettes(e, s._ra31833029c75f7),
        this.var_63.figureData.savePartData(e, s.id, t.getSelectedColorIds() ?? [], !0));
    }
  }
  selectColor(e, r, t) {
    let i = this._categories?.getValue(e) ?? null;
    if (i == null || this.var_63 == null) return;
    let s = i._r1a5194819e9a97(t);
    i._r2344738a902ffd(r, t);
    let o = i._r671c04c81d89b9(t);
    if (o != null) {
      if (o._ra5c822ed8d6c34) {
        (i._r2344738a902ffd(s, t), this.var_63._rdb48c761d7df2c());
        return;
      }
      this.var_63.figureData.savePartSetColourId(e, i.getSelectedColorIds() ?? [], !0);
    }
  }
  get controller() {
    if (this.var_63 == null) throw new Error("Avatar editor controller is not available.");
    return this.var_63;
  }
  getWindowContainer() {
    return (this.var_217 || this.init(), this._view?.getWindowContainer() ?? null);
  }
  _red12f777c0d8a3(e) {
    return (this.var_217 || this.init(), this._categories?.getValue(e) ?? null);
  }
}
