// Estratto da HabboAirLauncher.deobf.js, riga 251478.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/Util.as
// Nome offuscato: _i46d934ddae6ccc

class a {
  static {
    n(this, "Util");
  }
  static _r4088274f3dfe38 = new CutToWidth();
  static _r1172d67f6c6eb4 = new class_4018();
  static remove(e, r) {
    let t = e.indexOf(r);
    return (t >= 0 && e.splice(t, 1), t);
  }
  static _r7edb7b140e7403(e, r, t) {
    if (e == null) return new D(300, 200, r, t);
    let i = e.width - r,
      s = e.height - t;
    return new D(e.x + 0.5 * i, e.y + 0.5 * s, r, t);
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i?.visible && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static hasVisibleChildren(e) {
    for (let r = 0; r < e.numChildren; r++) if (e.getChildAt(r)?.visible) return !0;
    return !1;
  }
  static hideChildren(e) {
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t != null && (t.visible = !1);
    }
  }
  static moveChildrenToRow(e, r, t, i, s) {
    for (let o of r) {
      let d = e.getChildByName(o);
      d?.visible && ((d.x = t), (d.y = i), (t += d.width + s));
    }
  }
  static moveChildrenToColumn(e, r, t, i) {
    for (let s of r) {
      let o = e.getChildByName(s);
      o?.visible && o.height > 0 && ((o.y = t), (t += o.height + i));
    }
  }
  static layoutChildrenInArea(e, r, t, i = 0, s = 0) {
    let o = s,
      d = 0;
    for (let c = 0; c < e.numChildren; c++) {
      let f = e.getChildAt(c);
      f == null ||
        !f.visible ||
        (o > 0 && o + f.width > r && ((o = 0), (d += t)), (f.x = o), (f.y = d), (o += f.width + i));
    }
  }
  static setProc(e, r, t) {
    let i = e.findChildByName(r);
    i != null && (i.setParamFlag(class_2094._r26338c8d88c4e5, !0), (i.procedure = t));
  }
  static _r95dd5e276dc45a(e, r) {
    (e.setParamFlag(class_2094._r26338c8d88c4e5, !0), (e.procedure = r));
  }
  static trim(e) {
    if (e == null || e.length < 1) return e;
    for (; e.charAt(0) === " ";) e = e.substring(1);
    for (; e.charAt(e.length - 1) === " ";) e = e.substring(0, e.length - 1);
    return e;
  }
  static cutTextToWidth(e, r, t) {
    ((e.text = r),
      !(e.textWidth <= t) &&
        (a._r4088274f3dfe38.beforeSearch(r, e, t), a._r5de44943728fbf(a._r4088274f3dfe38, r.length - 1)));
  }
  static _r8189dadbf6f524(e, r, t) {
    ((e.text = r),
      !(e.textHeight <= t) &&
        (a._r1172d67f6c6eb4.beforeSearch(r, e, t), a._r5de44943728fbf(a._r1172d67f6c6eb4, r.length - 1)));
  }
  static _r5de44943728fbf(e, r) {
    let t = 0,
      i = 0;
    for (;;) {
      if (t >= r) {
        e.test(i);
        return;
      }
      let s = t + Math.floor((r - t) / 2);
      e.test(s) ? (r = s - 1) : ((i = Math.max(i, s)), (t = s + 1));
    }
  }
  static _r24831451da7216(e) {
    let r = new E();
    return (e.getRelativeMousePosition(r), r.x >= 0 && r.y >= 0 && r.x < e.width && r.y < e.height);
  }
}
