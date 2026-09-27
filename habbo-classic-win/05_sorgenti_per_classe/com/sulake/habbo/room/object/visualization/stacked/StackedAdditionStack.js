// Extracted from HabboAirLauncher.deobf.js, line 273843.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/stacked/StackedAdditionStack.as
// Obfuscated name: _i63057e56fc7c66

class a {
  static {
    n(this, "StackedAdditionStack");
  }
  static STACK_SPACING = 4;
  _entries = [];
  _bitmap = null;
  _disposed = !1;
  var_1622 = !1;
  var_449 = !1;
  _lastHadVisibleEntries = !1;
  var_776 = !1;
  var_2315 = !1;
  get isEmpty() {
    return this._entries.length === 0;
  }
  get disposed() {
    return this._disposed;
  }
  get _r8b6e69dd2a0cae() {
    return (
      !this._lastHadVisibleEntries && !this.var_449 && !this.var_1622 && !this._rc3116927fa6e5f()
    );
  }
  get isCachedIdle() {
    return !this.var_449 && !this.var_1622 && !this.var_776;
  }
  add(e, r, t = 0, i = 0, s = "") {
    for (let o of this._entries)
      if (o.addition === e) {
        let d = s ?? "";
        (o.layer !== r || o.createdAt !== t || o.configId !== i || o.variableId !== d) &&
          ((o.layer = r),
          (o.createdAt = t),
          (o.configId = i),
          (o.variableId = d),
          (this.var_2315 = !0),
          (this.var_449 = !0),
          (this.var_776 = !0));
        return;
      }
    (this.remove(e.id),
      (e.isPartOfStack = !0),
      this._entries.push(new StackedAdditionEntry(e, r, t, i, s)),
      (this.var_449 = !0),
      (this.var_2315 = !0),
      (this.var_776 = !0));
  }
  remove(e) {
    for (let r = this._entries.length - 1; r >= 0; r--) {
      let t = this._entries[r];
      t.addition.id === e &&
        (this._entries.splice(r, 1),
        t.dispose(),
        (this.var_449 = !0),
        (this.var_776 = !0));
    }
  }
  get(e) {
    for (let r of this._entries) if (r.addition.id === e) return r.addition;
    return null;
  }
  var_791() {
    let e = [];
    for (let r of this._entries) e.push(r.addition);
    return e;
  }
  _r968c7a41a58e59(e) {
    let r = [];
    if (e == null) return r;
    let t = _iad1dc21ca35e21(e);
    for (let i of this._entries) _iad1dc21ca35e21(i.addition) === t && r.push(i.addition);
    return r;
  }
  update(e, r, t) {
    for (let s of this._entries) s.addition.update(s.sprite, r);
    let i = this.layoutAndCompose(e, _ia411d8d8194a3a(), !1, t | 0);
    return (this.refreshAnimationTickState(), i);
  }
  animate(e, r) {
    let t = !1;
    if (this.isCachedIdle && (!this._lastHadVisibleEntries || (e != null && e.visible && e.asset != null)))
      return !1;
    for (let s of this._entries) s.addition.animate(s.sprite) && (t = !0);
    if (
      (this.removeFinishedAdditions() && (t = !0),
      !t &&
        !this.var_449 &&
        !this.var_1622 &&
        (!this._lastHadVisibleEntries || (e != null && e.visible && e.asset != null)))
    )
      return (this.refreshAnimationTickState(), !1);
    let i = this.layoutAndCompose(e, _ia411d8d8194a3a(), !0, r | 0) || t;
    return (this.refreshAnimationTickState(), i);
  }
  dispose() {
    for (let e of this._entries) e.dispose();
    ((this._entries.length = 0),
      this._r14564fee3a9aa6(),
      (this._disposed = !0),
      (this.var_776 = !1));
  }
  layoutAndCompose(e, r, t, i) {
    let s = new class_4243(),
      o = [],
      d = 0,
      c = null,
      f = !1,
      l = !1;
    if (e == null) return !1;
    if (this._entries.length === 0)
      return (
        (this.var_449 = !1),
        (this.var_1622 = !1),
        (this._lastHadVisibleEntries = !1),
        e.visible ? ((e.visible = !1), !0) : !1
      );
    this.sortEntriesIfNeeded();
    for (let h of this._entries)
      if (h.sprite.visible && h.sprite.asset != null && h.sprite.alpha > 0) {
        if (h.addition._r811e948c222c4c) {
          h._r76dd45d6f3ddec = !0;
          let p = c == null ? 0 : d - c.sprite.asset.height - a.STACK_SPACING;
          (h.setTarget(p, r) && (f = !0),
            t && h.y.update(r) && (f = !0),
            h._r396e3634dbdf5a(r) && (l = !0),
            (d = p),
            (c = h));
        } else h._r76dd45d6f3ddec && ((h._r76dd45d6f3ddec = !1), h._ra444a9470e0fb7(r) && (f = !0));
        o.push(h);
      }
    if (o.length === 0)
      return (
        (this.var_449 = !1),
        (this.var_1622 = !1),
        (this._lastHadVisibleEntries = !1),
        e.visible ? ((e.visible = !1), !0) : !1
      );
    for (let h of o)
      s.add(
        h.sprite.offsetX,
        h.sprite.offsetY + Math.round(h.y.value) - h.sprite.asset.height,
        h.sprite.asset.width,
        h.sprite.asset.height,
      );
    this._r010bf235029a05(s.width, s.height);
    let b = this._bitmap;
    b.lock();
    try {
      b.fillRect(b.rect, 0);
      for (let h of o) this._r4a3431e07ecbb1(h, s);
    } finally {
      b.unlock();
    }
    let _ = o[o.length - 1];
    return (
      (e.asset = this._bitmap),
      (e.offsetX = s.minX),
      (e.offsetY = i + s.minY),
      (e._relativeDepth = _.sprite._relativeDepth),
      (e.alpha = 255),
      (e.visible = !0),
      (this.var_449 = !1),
      (this.var_1622 = l),
      (this._lastHadVisibleEntries = !0),
      f
    );
  }
  _r4a3431e07ecbb1(e, r) {
    let t = e.sprite.asset,
      i = (e.sprite.offsetX - r.minX) | 0,
      s = (e.sprite.offsetY + Math.round(e.y.value) - r.minY - t.height) | 0;
    if (e.sprite.alpha >= 255 && e.sprite.blendMode === ie.NORMAL) {
      this._bitmap.copyPixels(t, t.rect, new E(i, s), null, null, !0);
      return;
    }
    let o = new Pe();
    (o.translate(i, s),
      this._bitmap.draw(t, o, new UnkClass_4210dc(1, 1, 1, e.sprite.alpha / 255), e.sprite.blendMode));
  }
  removeFinishedAdditions() {
    let e = !1;
    for (let r = this._entries.length - 1; r >= 0; r--) {
      let t = this._entries[r];
      t.addition.isFinished &&
        (this._entries.splice(r, 1), t.dispose(), (e = !0), (this.var_449 = !0));
    }
    return e;
  }
  _r010bf235029a05(e, r) {
    (this._bitmap != null &&
      this._bitmap.width === e &&
      this._bitmap.height === r) ||
      (this._r14564fee3a9aa6(), (this._bitmap = new A(e, r, !0, 0)));
  }
  _r14564fee3a9aa6() {
    this._bitmap != null && (this._bitmap.dispose(), (this._bitmap = null));
  }
  sortEntries() {
    this._entries.sort((e, r) => {
      if (e.layer < r.layer) return -1;
      if (e.layer > r.layer) return 1;
      if (e.createdAt < r.createdAt) return -1;
      if (e.createdAt > r.createdAt) return 1;
      if (e.configId < r.configId) return -1;
      if (e.configId > r.configId) return 1;
      let t = e.variableId.localeCompare(r.variableId);
      return t !== 0 ? t : e.addition.id - r.addition.id;
    });
  }
  sortEntriesIfNeeded() {
    this.var_2315 &&
      (this._entries.length > 1 && this.sortEntries(), (this.var_2315 = !1));
  }
  _rc3116927fa6e5f() {
    for (let e of this._entries) if (e.addition._r811e948c222c4c) return !0;
    return !1;
  }
  refreshAnimationTickState() {
    this.var_776 = !1;
    for (let e of this._entries)
      if (e.addition.requiresAnimationTick) {
        this.var_776 = !0;
        return;
      }
  }
}
