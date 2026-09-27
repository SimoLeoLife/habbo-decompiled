// Estratto da HabboAirLauncher.deobf.js, riga 297529.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/RoomObjectManager.as
// Nome offuscato: _i0d7fbac1241f02

class {
  static {
    n(this, "RoomObjectManager");
  }
  var_415 = new B();
  _reb49651cab2bd1 = new B();
  dispose() {
    (this.reset(), this.var_415.dispose(), this._reb49651cab2bd1.dispose());
  }
  _r8ac7f802e686f1(e, r, t) {
    return this.addObject(String(e), t, new Vwe(e, r, t));
  }
  getObject(e) {
    return this.var_415.getValue(String(e)) ?? null;
  }
  _r2ae68860e40562() {
    return this.var_415.getValues();
  }
  _rce25aa21e0bb14(e) {
    return this.var_415.getWithIndex(e) ?? null;
  }
  getObjectCount() {
    return this.var_415.length;
  }
  _rc7d1226973ae1d(e) {
    return this._re18d082a3f4321(e, !1)?.length ?? 0;
  }
  _r0f337385f5ca37(e, r) {
    return this._re18d082a3f4321(r, !1)?.getWithIndex(e) ?? null;
  }
  disposeObject(e) {
    let r = String(e),
      t = this.var_415.remove(r) ?? null;
    return t == null ? !1 : (this._re18d082a3f4321(t.getType(), !1)?.remove(r), t.dispose(), !0);
  }
  reset() {
    for (let e = 0; e < this.var_415.length; e++) this.var_415.getWithIndex(e)?.dispose();
    this.var_415.reset();
    for (let e = 0; e < this._reb49651cab2bd1.length; e++) this._reb49651cab2bd1.getWithIndex(e)?.dispose();
    this._reb49651cab2bd1.reset();
  }
  addObject(e, r, t) {
    return this.var_415.getValue(e) != null
      ? (t.dispose(), null)
      : (this.var_415.add(e, t), this._re18d082a3f4321(r)?.add(e, t), t);
  }
  _re18d082a3f4321(e, r = !0) {
    let t = this._reb49651cab2bd1.getValue(e) ?? null;
    return (t == null && r && ((t = new B()), this._reb49651cab2bd1.add(e, t)), t);
  }
}
