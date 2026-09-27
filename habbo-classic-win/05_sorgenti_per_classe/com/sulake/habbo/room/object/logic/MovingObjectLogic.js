// Estratto da HabboAirLauncher.deobf.js, riga 297653.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/MovingObjectLogic.as
// Nome offuscato: _i075b9cb5a4bd74

class a extends ObjectLogicBase {
  static {
    n(this, "MovingObjectLogic");
  }
  static _r3d27f8c73280f4 = 500;
  static _rbf2e97d6fa51b3 = new k();
  static _rc2b071c131150f = 0;
  static _r56b92206b842ca = 1;
  static _rce5224c75feb50 = 1;
  static VARIABLE_FX_CHANGE_INCREASED = 2;
  static VARIABLE_FX_CHANGE_DECREASED = 4;
  static VARIABLE_FX_CHANGE_UNCHANGED = 8;
  helper_vector = new k();
  var_190 = new k();
  _liftAmount = 0;
  _lastUpdateTime = 0;
  _raf1c8df1ae14b6 = 0;
  _r21390184d93bbd = a._r3d27f8c73280f4;
  _r678cb4d6065f94 = Number.NaN;
  _curveStrength = Number.NaN;
  _variableFxStatuses = null;
  var_2588 = 0;
  var_2616 = 0;
  var_2501 = -1;
  var_1127 = 0;
  var_274 = !1;
  var_1712 = !1;
  var_602 = null;
  get _rd5b25ad4c3f288() {
    return this._lastUpdateTime;
  }
  dispose() {
    (this._rdbc2fde73ce543(),
      this.var_602 != null && (this.var_602.dispose(), (this.var_602 = null)),
      this._r48869b190e1b2d(),
      this._variableFxStatuses != null && (this._variableFxStatuses.dispose(), (this._variableFxStatuses = null)),
      super.dispose());
  }
  set object(e) {
    ((super.object = e), e != null && this.var_190.assign(e.getLocation()));
  }
  get object() {
    return super.object;
  }
  initialize(e) {}
  transferStateFrom(e) {
    !(e instanceof a) ||
      e === this ||
      ((this._variableFxStatuses = e._variableFxStatuses),
      (this.var_2588 = e.var_2588),
      (this.var_2616 = e.var_2616),
      (this.var_2501 = e.var_2501),
      (this.var_1127 = e.var_1127),
      (this.var_274 = e.var_274),
      (this.var_1712 = e.var_1712),
      (this.var_602 = e.var_602),
      (e._variableFxStatuses = null),
      (e.var_602 = null));
  }
  _r38d715e97aaf18(e, r = Number.NaN, t = Number.NaN) {
    (e <= 0 && (e = 1),
      (this._r21390184d93bbd = e),
      (this._r678cb4d6065f94 = !Number.isNaN(r) && r === 0 ? Number.NaN : r),
      (this._curveStrength = !Number.isNaN(t) && t === 0 ? Number.NaN : t));
  }
  processUpdateMessage(e) {
    if (e == null) return;
    super.processUpdateMessage(e);
    let r = e instanceof _i1234264269422e ? e : null;
    if (
      r?._rd42ca276af45f8 ||
      (e.loc != null && (this.var_190.assign(e.loc), this.helper_vector.assign(new k())),
      r == null || this.object == null || e.loc == null)
    )
      return;
    let t = r.targetLoc,
      i = Number.isNaN(r._rff74398609cf6a) ? a._r3d27f8c73280f4 : r._rff74398609cf6a;
    (this._r38d715e97aaf18(i, r._rea4fd85046c6f4, this._rbe9d44a0b1334f(r)),
      (this._raf1c8df1ae14b6 = this._lastUpdateTime > 0 ? this._lastUpdateTime : _ia411d8d8194a3a()),
      this.helper_vector.assign(t),
      this.helper_vector.sub(this.var_190),
      this._ra908ff5cca9371());
  }
  _rbe9d44a0b1334f(e) {
    return e._r17b77566c1fdcb;
  }
  _r51a4729c3d6767() {
    return null;
  }
  _rd5bdc3a597518f(e) {
    if (e instanceof RoomObjectVariableFxStatusUpdateMessage) {
      let r = _ia411d8d8194a3a();
      return (
        this._r7303d9170f229c(
          new _i5cd1753188af5f(
            e.configId,
            e.variableId,
            e.value,
            e._rd039082a66c6c1,
            e._rde47e35540b4cb,
            e.extra,
            e.initialize,
            r,
          ),
          r,
        ),
        this.var_317(r, this._r2eada3c8b841a3()),
        !0
      );
    }
    return e instanceof RoomObjectVariableFxStatusRemoveMessage
      ? (this._rc2b933ac3ee505(e.configId, e.variableId),
        this.var_317(_ia411d8d8194a3a(), this._r2eada3c8b841a3()),
        !0)
      : !1;
  }
  get _rb4c6d05a1b4331() {
    return null;
  }
  _rd21b5bb3ec9fd4(e) {
    this.var_1712 !== e && ((this.var_1712 = e), (this.var_274 = !0));
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectMoveEvent.SLIDE_ANIMATION]);
  }
  update(e) {
    let r = this.object,
      t = this._r51a4729c3d6767(),
      i = r?.getModelController();
    if (
      (i != null &&
        (t != null
          ? this._liftAmount !== t.z &&
            ((this._liftAmount = t.z), i.setNumber(RoomObjectVariableEnum.const_1137, this._liftAmount))
          : this._liftAmount !== 0 &&
            ((this._liftAmount = 0), i.setNumber(RoomObjectVariableEnum.const_1137, this._liftAmount)),
        this.var_317(e, i)),
      this.helper_vector.length > 0 || t != null)
    ) {
      let s = e - this._raf1c8df1ae14b6;
      (s === this._r21390184d93bbd >> 1 && s++,
        s > this._r21390184d93bbd && (s = this._r21390184d93bbd),
        this.helper_vector.length > 0
          ? (a._rbf2e97d6fa51b3.assign(this.helper_vector),
            a._rbf2e97d6fa51b3.mul(s / this._r21390184d93bbd),
            a._rbf2e97d6fa51b3.add(this.var_190))
          : a._rbf2e97d6fa51b3.assign(this.var_190),
        t != null && a._rbf2e97d6fa51b3.add(t),
        !Number.isNaN(this._curveStrength) &&
          this._curveStrength !== 0 &&
          (a._rbf2e97d6fa51b3.z += this._r0cba8205c8e0db(s, this._r21390184d93bbd)),
        r?._rf91a6212aca31a(a._rbf2e97d6fa51b3),
        s === this._r21390184d93bbd && this.helper_vector.assign(new k()),
        r != null &&
          this._r11e12b4ff1ca8e != null &&
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectMoveEvent(RoomObjectMoveEvent.SLIDE_ANIMATION, r)));
    }
    this._lastUpdateTime = e;
  }
  _r7303d9170f229c(e, r) {
    this._variableFxStatuses == null && (this._variableFxStatuses = new B());
    let t = this._variableFxStatuses.getValue(e.configId),
      i = a._rce5224c75feb50;
    t == null && ((t = new B()), this._variableFxStatuses.add(e.configId, t));
    let s = t.getValue(e.variableId);
    (s != null
      ? ((i = this._r5e103309fe143b(s.value, e.value)),
        (e.createdAt = s.createdAt),
        (e._r8ceba2ef379539 = s._r8ceba2ef379539),
        s.dispose(),
        t.replace(e.variableId, e))
      : t.add(e.variableId, e),
      (e._r4e70e7cf4e0337 = r),
      (e.updateId = ++this.var_2588),
      e.isInitialize || this._r6def742d11083d(e, i, r),
      (this.var_274 = !0));
  }
  _rc2b933ac3ee505(e, r) {
    if (this._variableFxStatuses == null) return;
    let t = this._variableFxStatuses.getValue(e);
    if (t == null) return;
    let i = t.remove(r);
    (i != null && (i.dispose(), (this.var_274 = !0)),
      t.length === 0 && (this._variableFxStatuses.remove(e), t.dispose()));
  }
  _r48869b190e1b2d() {
    if (this._variableFxStatuses != null) {
      for (let e of this._variableFxStatuses.getValues()) {
        for (let r of e.getValues()) r.dispose();
        e.dispose();
      }
      (this._variableFxStatuses.reset(), (this.var_274 = !0));
    }
  }
  _r5e103309fe143b(e, r) {
    return r > e ? a.VARIABLE_FX_CHANGE_INCREASED : r < e ? a.VARIABLE_FX_CHANGE_DECREASED : a.VARIABLE_FX_CHANGE_UNCHANGED;
  }
  _r6def742d11083d(e, r, t) {
    let i = this._rac2f53d133858f(e.configId);
    i == null ||
      i._r09ab560170f112 !== a._r56b92206b842ca ||
      ((i.var_620 & r) !== 0 && (e._r8ceba2ef379539 = t + i.showDuration));
  }
  var_317(e, r) {
    if (r == null) return;
    if (
      (this._variableFxStatuses == null || this._variableFxStatuses.length === 0) &&
      this.var_602 == null
    ) {
      ((this.var_274 = !1), (this.var_1127 = 0));
      return;
    }
    let t = this._rb4c6d05a1b4331,
      i = t == null ? -1 : t.updateId;
    (this.var_2501 !== i && ((this.var_2501 = i), (this.var_274 = !0)),
      !(!this.var_274 && (this.var_1127 <= 0 || e < this.var_1127)) &&
        this._r83116673cecfa9(e, r));
  }
  _r83116673cecfa9(e, r) {
    let t = new B(),
      i = 0,
      s = null;
    for (let d of this._variableFxStatuses?.getKeys() ?? []) {
      let c = this._rac2f53d133858f(d),
        f = this._variableFxStatuses.getValue(d);
      if (!(c == null || f == null))
        for (let l of f.getKeys()) {
          let b = f.getValue(l);
          if (b == null) continue;
          let _ = this._r450f6b121c019b(b, c, e),
            h = t.getValue(d);
          h == null && ((h = new B()), t.add(d, h));
          let p = new XZ(
            b.configId,
            b.variableId,
            b.createdAt,
            b.updateId,
            b.value,
            b._rd039082a66c6c1,
            b._rde47e35540b4cb,
            b.extra.clone(),
            b.isInitialize || !_,
            !_,
          );
          (h.add(l, p),
            _ &&
              c._r09ab560170f112 === a._r56b92206b842ca &&
              (!this.var_1712 || !c._rb94727c3b64fc3) &&
              b._r8ceba2ef379539 > e &&
              (i <= 0 || b._r8ceba2ef379539 < i) &&
              (i = b._r8ceba2ef379539));
        }
    }
    if (
      (t.length > 0 ? (s = new U6(++this.var_2616, t)) : t.dispose(),
      this.var_602 == null && s == null)
    ) {
      ((this.var_274 = !1), (this.var_1127 = i));
      return;
    }
    let o = this.var_602;
    ((this.var_602 = s),
      r._rb2ace2b85bc9d7(RoomObjectVariableEnum.VARIABLE_FX_STATUSES, s),
      o?.dispose(),
      (this.var_274 = !1),
      (this.var_1127 = i));
  }
  _r450f6b121c019b(e, r, t) {
    return r._r09ab560170f112 === a._rc2b071c131150f || (r._rb94727c3b64fc3 && this.var_1712)
      ? !0
      : r._r09ab560170f112 === a._r56b92206b842ca && e._r8ceba2ef379539 > t;
  }
  _rac2f53d133858f(e) {
    return this._rb4c6d05a1b4331?._r2324173970b390(e) ?? null;
  }
  _rdbc2fde73ce543() {
    let e = this._r2eada3c8b841a3();
    e != null && this.var_602 != null && e._rb2ace2b85bc9d7(RoomObjectVariableEnum.VARIABLE_FX_STATUSES, null);
  }
  _r2eada3c8b841a3() {
    return this.object?.getModelController() ?? null;
  }
  _r0cba8205c8e0db(e, r) {
    return Number.isNaN(this._curveStrength) || this._curveStrength === 0
      ? 0
      : 4 * (((this._curveStrength / 100) * (this.helper_vector.length / 4)) / (r * r)) * e * (r - e);
  }
  _ra908ff5cca9371() {
    if (!Number.isNaN(this._r678cb4d6065f94) && this._r678cb4d6065f94 !== 0 && this._r21390184d93bbd !== 0) {
      let e = this.helper_vector.z;
      (this.helper_vector.mul((this._r21390184d93bbd + this._r678cb4d6065f94) / this._r21390184d93bbd),
        (this.helper_vector.z = e),
        (this._r21390184d93bbd += this._r678cb4d6065f94));
    }
  }
}
