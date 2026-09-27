// Extracted from HabboAirLauncher.deobf.js, line 285726.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/VariableFxIconOverlayLayout.as
// Obfuscated name: _i1753a1dd74e7fe

class a {
  static {
    n(this, "VariableFxIconOverlayLayout");
  }
  var_140 = 0;
  var_178 = 0;
  frameWidth = 0;
  frameHeight = 0;
  _r611c8d0924f606 = !1;
  var_1907 = [];
  var_2920 = 0;
  var_2978 = 0;
  static resolve(e) {
    let r = new a(),
      t = Math.max(0, e.contentWidth | 0),
      i = Math.max(0, e.contentHeight | 0),
      s = Math.max(0, e._r0e0e79c17c78c9 | 0),
      o = Math.max(0, e._r1ee47a9fd26e90 | 0),
      d = e._r022a5c6ff560a1 | 0,
      c = e._r9f78194ed5fe8a == null ? 0 : e._r9f78194ed5fe8a | 0,
      f = e._rbeebc213ea8e11 == null ? 0 : e._rbeebc213ea8e11 | 0,
      l = e._r8556032d955352 == null ? 0 : e._r8556032d955352 | 0,
      b = e.alignment == null ? class_4078.const_27 : String(e.alignment);
    if (((r._r611c8d0924f606 = s > 0 && o > 0), !r._r611c8d0924f606))
      return ((r.frameHeight = i), (r.frameWidth = t), r);
    let _ = Math.max(0, s - d),
      h = b === class_4078.RIGHT ? 0 : _,
      p = Math.max(i, o),
      m = Math.max(0, Math.trunc((p - i) / 2) + c),
      v = Math.trunc((p - o) / 2) + l,
      w = this.resolveDefaultIconPlacements(b, h, t, f, v, d),
      I = Math.max(0, -Math.min(h, this.minPlacementX(w))),
      C = Math.max(0, -Math.min(m, this.minPlacementY(w)));
    ((r.var_140 = h + I), (r.var_178 = m + C));
    for (let R of w) r.var_1907.push(new UnkClass_f1185b(R.x + I, R.y + C));
    let W = r.var_1907[0];
    return (
      (r.var_2920 = W.x),
      (r.var_2978 = W.y),
      (r.frameHeight = Math.max(r.var_178 + i, this.maxPlacementBottom(r.var_1907, o))),
      (r.frameWidth = Math.max(r.var_140 + t, this.maxPlacementRight(r.var_1907, s))),
      r
    );
  }
  static resolveDefaultIconPlacements(e, r, t, i, s, o) {
    let d = new UnkClass_f1185b(i, s),
      c = new UnkClass_f1185b(r + t - o - i, s);
    switch (e) {
      case class_4078.RIGHT:
        return [c];
      case class_4078.DOUBLE:
        return [d, c];
      default:
        return [d];
    }
  }
  static minPlacementX(e) {
    let r = 2147483647;
    for (let t of e) r = Math.min(r, t.x);
    return r === 2147483647 ? 0 : r;
  }
  static minPlacementY(e) {
    let r = 2147483647;
    for (let t of e) r = Math.min(r, t.y);
    return r === 2147483647 ? 0 : r;
  }
  static maxPlacementBottom(e, r) {
    let t = 0;
    for (let i of e) t = Math.max(t, i.y + r);
    return t;
  }
  static maxPlacementRight(e, r) {
    let t = 0;
    for (let i of e) t = Math.max(t, i.x + r);
    return t;
  }
}
