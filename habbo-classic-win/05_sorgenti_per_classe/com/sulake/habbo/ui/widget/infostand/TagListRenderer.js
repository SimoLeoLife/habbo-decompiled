// Extracted from HabboAirLauncher.deobf.js, line 322089.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/TagListRenderer.as
// Obfuscated name: _i807bbb1715b665

class {
  static {
    n(this, "TagListRenderer");
  }
  _r7b90fd46a39654 = 5;
  _rbd92c9684c8dd7 = 5;
  var_17;
  var_263;
  _offsetX = 0;
  _offsetY = 0;
  _r14a03de97f4f58 = null;
  var_5761 = 0;
  _rf4843993e29516 = null;
  constructor(e, r) {
    ((this.var_17 = e), (this.var_263 = r));
  }
  dispose() {
    ((this.var_17 = null), (this.var_263 = null));
  }
  renderTags(e, r, t) {
    if (((this._rf4843993e29516 = t), this._rf4843993e29516 != null)) {
      let s = [],
        o = e.slice();
      for (; o.length > 0;) {
        let d = o.pop();
        d != null && (this._rf4843993e29516.indexOf(d) !== -1 ? s.unshift(d) : s.push(d));
      }
      e = s;
    }
    for (; r.removeChildAt(0) != null;);
    ((this.var_5761 = 0),
      (this._offsetX = 0),
      (this._offsetY = 0),
      (this._r14a03de97f4f58 = r.rectangle),
      (this._r14a03de97f4f58.height = 150));
    for (let s of e) {
      let o = this.createTag(s);
      o != null && (this.fit(o) ? r.addChild(o) : o.dispose());
    }
    return r.numChildren === 0 ? 0 : (r.getChildAt(r.numChildren - 1)?.bottom ?? 0);
  }
  fit(e) {
    return this._r14a03de97f4f58 == null ||
      e.width > this._r14a03de97f4f58.width ||
      this._offsetY + e.height > this._r14a03de97f4f58.height
      ? !1
      : this._offsetX + e.width > this._r14a03de97f4f58.width
        ? ((this._offsetX = 0),
          (this._offsetY += e.height + this._rbd92c9684c8dd7),
          this.fit(e))
        : (e.offset(this._offsetX, this._offsetY),
          (this._offsetX += e.width + this._r7b90fd46a39654),
          !0);
  }
  createTag(e) {
    let r = this.var_17?.assets,
      t = this.var_17?.windowManager;
    if (r == null || t == null) return null;
    let i =
      this._rf4843993e29516 != null && this._rf4843993e29516.indexOf(e) !== -1
        ? r.getAssetByName("user_tag_highlighted")
        : r.getAssetByName("user_tag");
    if (i == null) return null;
    let s = t.buildFromXML(i.content);
    if (s == null) throw new Error("Failed to construct window from XML!");
    return (
      this.var_263 != null && s.addEventListener(u.CLICK, this.var_263),
      (s.caption = e),
      s
    );
  }
}
