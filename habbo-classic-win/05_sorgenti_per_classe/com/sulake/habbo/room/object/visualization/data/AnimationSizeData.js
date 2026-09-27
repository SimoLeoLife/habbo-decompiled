// Estratto da HabboAirLauncher.deobf.js, riga 276144.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationSizeData.as
// Nome offuscato: _i2cd50a958f5d00

class extends HQ {
  static {
    n(this, "AnimationSizeData");
  }
  _rff91869ec4c93d = new B();
  _rd86bb2a8c15473 = [];
  dispose() {
    if ((super.dispose(), this._rff91869ec4c93d != null)) {
      for (let e = 0; e < this._rff91869ec4c93d.length; e++) this._rff91869ec4c93d.getWithIndex(e)?.dispose();
      (this._rff91869ec4c93d.dispose(), (this._rff91869ec4c93d = null));
    }
  }
  _rd7dfd5d7e9a7a9(e) {
    if (e == null) return !0;
    let r = ["id"];
    for (let t of e.child("animation").toArray()) {
      if (!(t instanceof Object) || !("attribute" in t) || !da.checkRequiredAttributes(t, r)) return !1;
      let i = t,
        s = Number.parseInt(String(i.attribute("id") ?? "0"), 10),
        o = !1,
        d = String(i.attribute("transitionTo") ?? "");
      d.length > 0 && ((s = ho._r435b9491bcd5a6(Number.parseInt(d, 10))), (o = !0));
      let c = String(i.attribute("transitionFrom") ?? "");
      c.length > 0 && ((s = ho._r54a272d9d927de(Number.parseInt(c, 10))), (o = !0));
      let f = this._r7b943e1f6bfdc9();
      if (!f.initialize(i)) return (f.dispose(), !1);
      let l = String(i.attribute("immediateChangeFrom") ?? "");
      if (l.length > 0) {
        let b = [];
        for (let _ of l.split(",")) {
          let h = Number.parseInt(_, 10);
          !Number.isNaN(h) && !b.includes(h) && b.push(h);
        }
        f._re9b58cd9fa39eb(b);
      }
      (this._rff91869ec4c93d.add(s, f), o || this._rd86bb2a8c15473.push(s));
    }
    return !0;
  }
  _rbbbe40f26a8739(e) {
    return this._rff91869ec4c93d.getValue(e) != null;
  }
  getAnimationCount() {
    return this._rd86bb2a8c15473.length;
  }
  _rc44d75b416497c(e) {
    let r = this.getAnimationCount();
    return e >= 0 && r > 0 ? (this._rd86bb2a8c15473[e % r] ?? 0) : 0;
  }
  _rfa4b6bfb7fcf31(e, r) {
    return this._rff91869ec4c93d.getValue(e)?._rfa4b6bfb7fcf31(r) ?? !1;
  }
  _r658374b2eae883(e, r) {
    return this._rff91869ec4c93d.getValue(e)?._r658374b2eae883(r) ?? 0;
  }
  getFrame(e, r, t, i) {
    return this._rff91869ec4c93d.getValue(e)?.getFrame(r, t, i) ?? null;
  }
  getFrameFromSequence(e, r, t, i, s, o) {
    return this._rff91869ec4c93d.getValue(e)?.getFrameFromSequence(r, t, i, s, o) ?? null;
  }
  _r7b943e1f6bfdc9() {
    return new ho();
  }
}
