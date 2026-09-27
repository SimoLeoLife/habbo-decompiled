// Extracted from HabboAirLauncher.deobf.js, line 221264.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/arena/class_2526.as
// Obfuscated name: _icd3b336425aff8

class extends DefaultGameStage {
  static {
    n(this, "class_2526");
  }
  var_215 = new B();
  _r1c3c3f156396b4 = [];
  _rbf890ec54bd6d8 = [];
  dispose() {
    super.dispose();
    for (let e of this.var_215.getValues()) e.dispose();
    (this.var_215.dispose(),
      (this.var_215 = null),
      (this._r1c3c3f156396b4 = []),
      (this._rbf890ec54bd6d8 = []));
  }
  _r29463a5878c079(e, r) {
    (this.var_215.add(e, r), (r.isActive = !0));
  }
  _rbfa195a1410efd(e, r) {
    (this.var_215.add(e, r), (r.isActive = !1));
  }
  addGameObjectById(e, r) {
    if ((this.var_215.add(e, r), (r.isActive = !0), r._r8f79a04a0ab07b !== e))
      throw new Error(`Could not add gameobject with id:${String(e)}`);
  }
  _tile(e) {
    let r = this.var_215.remove(e);
    r != null && (r.onRemove(), this._rbf890ec54bd6d8.push(r));
  }
  _r127e2b5dd7c348() {
    for (let e of this.var_215.getValues()) (e.onRemove(), this._rbf890ec54bd6d8.push(e));
    this.var_215 = new B();
  }
  _r91cf818f369ca8(e) {
    e != null && (this._r1c3c3f156396b4.push(e), (e.isActive = !1));
  }
  _rec3357f35c151d(e) {
    return this.var_215.getValue(e) ?? null;
  }
  _r19b8e6696f2b23() {
    return this.var_215.getValues();
  }
  subturn() {
    for (let e of this.var_215.getValues()) e.subturn(this);
    if (this._r1c3c3f156396b4.length > 0) {
      for (let e of this._r1c3c3f156396b4) this._tile(e._r8f79a04a0ab07b);
      this._r1c3c3f156396b4 = [];
    }
  }
  _r03ffaa5bb698f3(e) {
    let r = UnkClass_eb99a8._r0080f43aacb4f3(e);
    for (let t of this.var_215.getValues()) {
      if (t._rba12f0325cedd5 && t instanceof _l) {
        t._ra453f655136d7a(e);
        continue;
      }
      if (!t.isActive || t._rba12f0325cedd5) continue;
      let i = 1,
        s = t._r4bc6d443f1bcb2;
      for (let o = 0; o < s; o++) ((r += t.getVariable(o) * i), i++);
    }
    return r;
  }
  _r7af7bb7a4d1a45(e) {
    let r = 0;
    for (let t of this.var_215.getValues()) t.isActive && r++;
  }
  _r454908aaf94389() {
    let e = this._rbf890ec54bd6d8;
    return ((this._rbf890ec54bd6d8 = []), e);
  }
}
