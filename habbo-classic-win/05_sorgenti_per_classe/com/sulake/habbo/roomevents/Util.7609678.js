// Extracted from HabboAirLauncher.deobf.js, line 239368.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/Util.as
// Obfuscated name: _i46d934ddae6ccc

class a {
  static {
    n(this, "Util");
  }
  static disableButton(e, r) {
    r ? e.disable() : e.enable();
  }
  static disableSection(e, r = !0) {
    if (e.tags.includes("DO_NOT_DISABLE")) return;
    let t = r ? 0.5 : 1;
    if (a._ra185fd1172d8db(e))
      for (let i = 0; i < e.numChildren; i++) {
        let s = e.getChildAt(i);
        s != null && a.disableSection(s, r);
      }
    else if (a._r174073f892c83e(e))
      for (let i = 0; i < e.numListItems; i++) {
        let s = e.getListItemAt(i);
        s != null && a.disableSection(s, r);
      }
    else if (a._r3cd914a4ce2444(e))
      for (let i = 0; i < e.numSelectables; i++) {
        let s = e.getSelectableAt(i);
        s != null && a.disableSection(s, r);
      }
    else e.blend = t;
    r ? e.disable() : e.enable();
  }
  static moveAllChildrenToColumn(e, r, t = !1, i = 0) {
    for (let s = 0; s < e.numChildren; s++) {
      let o = e.getChildAt(s);
      o != null && o.visible && o.height > 0 && (i < o.y && t ? (i = o.y) : (o.y = i), (i += o.height + r));
    }
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i != null && i.visible && i.height > 0 && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static _ra185fd1172d8db(e) {
    return typeof e.numChildren == "number";
  }
  static _r174073f892c83e(e) {
    return typeof e.numListItems == "number" && typeof e.getListItemAt == "function";
  }
  static _r3cd914a4ce2444(e) {
    return typeof e.numSelectables == "number" && typeof e.getSelectableAt == "function";
  }
}
