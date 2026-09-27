// Estratto da HabboAirLauncher.deobf.js, riga 215108.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/Util.as
// Nome offuscato: _i46d934ddae6ccc

class {
  static {
    n(this, "Util");
  }
  static remove(e, r) {
    let t = e.indexOf(r);
    t >= 0 && e.splice(t, 1);
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i != null && i.visible && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static _rfb49b1937673b6(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i != null && i.visible && (r = Math.max(r, i.x + i.width));
    }
    return r;
  }
  static arrayToString(e, r = ", ", t = "") {
    let i = "";
    for (let s of e) (i !== "" && (i += r), (i += `${t}${s}${t}`));
    return i;
  }
  static hideChildren(e) {
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t != null && (t.visible = !1);
    }
  }
  static _r7edb7b140e7403(e, r, t) {
    if (e == null) return new D(300, 200, r, t);
    let i = e.width - r,
      s = e.height - t;
    return new D(e.x + 0.5 * i, e.y + 0.5 * s, r, t);
  }
  static layoutChildrenInArea(e, r, t) {
    let i = 0,
      s = 0;
    for (let o = 0; o < e.numChildren; o++) {
      let d = e.getChildAt(o);
      d == null ||
        !d.visible ||
        (i > 0 && i + d.width > r && ((i = 0), (s += t)), (d.x = i), (d.y = s), (i += d.width));
    }
  }
}
