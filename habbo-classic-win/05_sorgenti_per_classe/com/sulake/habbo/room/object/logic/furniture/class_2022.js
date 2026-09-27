// Estratto da HabboAirLauncher.deobf.js, riga 300923.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_2022.as
// Nome offuscato: _if18141ba69fe13

class a extends _ieead78a21202a2 {
  static {
    n(this, "class_2022");
  }
  static UPDATE_INTERVAL = 33;
  static MAX_UPDATE_TIME = 1e3;
  var_1679 = 0;
  _lastUpdate = 0;
  _r3cf3375aa14d2d = a.UPDATE_INTERVAL;
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null,
      t = r?.data instanceof V6 ? r.data : null;
    t != null && this._re908a26b942e40(t.result);
  }
  update(e) {
    if ((super.update(e), this.object != null)) {
      let r = this.currentTotal;
      if (r !== this.var_1679 && e >= this._lastUpdate + this._r3cf3375aa14d2d) {
        let t = e - this._lastUpdate,
          i = Math.trunc(t / this._r3cf3375aa14d2d),
          s = 1;
        (this.var_1679 < r && (s = -1),
          i > s * (this.var_1679 - r) && (i = s * (this.var_1679 - r)),
          this.object.getModelController().setNumber(RoomObjectVariableEnum.const_283, r + s * i),
          (this._lastUpdate = e - (t - i * this._r3cf3375aa14d2d)));
      }
    }
  }
  get currentTotal() {
    return this.object?.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_283) ?? 0;
  }
  _re908a26b942e40(e) {
    if (((this.var_1679 = e), this._lastUpdate === 0)) {
      (this.object?.getModelController().setNumber(RoomObjectVariableEnum.const_283, e), (this._lastUpdate = _ia411d8d8194a3a()));
      return;
    }
    if (this.var_1679 !== this.currentTotal) {
      let r = Math.abs(this.var_1679 - this.currentTotal);
      (r * a.UPDATE_INTERVAL > a.MAX_UPDATE_TIME
        ? (this._r3cf3375aa14d2d = Math.trunc(a.MAX_UPDATE_TIME / r))
        : (this._r3cf3375aa14d2d = a.UPDATE_INTERVAL),
        (this._lastUpdate = _ia411d8d8194a3a()));
    }
  }
}
