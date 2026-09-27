// Estratto da HabboAirLauncher.deobf.js, riga 274478.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/class_3399.as
// Nome offuscato: _i0aa2b1d248498b

class {
  static {
    n(this, "class_3399");
  }
  var_5461 = -1;
  var_5397 = -1;
  reconcile(e, r, t, i, s, o, d) {
    let c = e == null ? -1 : e.updateId,
      f = r == null ? -1 : r.updateId,
      l = !1;
    if (s == null || (c === this.var_5461 && f === this.var_5397)) return !1;
    let b = new B();
    if (e != null && r != null)
      for (let _ = 0; _ < e.statusesByConfig.length; _++) {
        let h = Number(e.statusesByConfig.getKey(_)) | 0,
          p = e.statusesByConfig.getWithIndex(_);
        for (let m = 0; m < p.length; m++) {
          let v = p.getKey(m),
            w = p.getWithIndex(m),
            I = this.getVariableFxAddition(s, h, v);
          (I == null && ((I = new w5(h, v, r, t, i)), (l = !0)),
            s.add(I, o, w.createdAt, h, v),
            I.show(w, d) && (l = !0),
            this.markSeen(b, h, v));
        }
      }
    for (let _ of this.getVariableFxAdditions(s))
      this.hasSeen(b, _.configId, _.variableId) || (_.hide(d) && (l = !0));
    return (this.disposeSeenMap(b), (this.var_5461 = c), (this.var_5397 = f), l);
  }
  getVariableFxAddition(e, r, t) {
    for (let i of this.getVariableFxAdditions(e)) if (i.configId === r && i.variableId === t) return i;
    return null;
  }
  getVariableFxAdditions(e) {
    let r = [];
    for (let t of e.var_791()) t instanceof w5 && r.push(t);
    return r;
  }
  markSeen(e, r, t) {
    let i = e.getValue(r);
    (i == null && ((i = new B()), e.add(r, i)), i.hasKey(t) || i.add(t, !0));
  }
  hasSeen(e, r, t) {
    let i = e.getValue(r);
    return i != null && i.hasKey(t);
  }
  disposeSeenMap(e) {
    for (let r of e.getValues()) r.dispose();
    e.dispose();
  }
}
