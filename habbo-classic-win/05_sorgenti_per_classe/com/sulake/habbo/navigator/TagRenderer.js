// Extracted from HabboAirLauncher.deobf.js, line 253615.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/TagRenderer.as
// Obfuscated name: _i6715abaa3e9744

class {
  constructor(e, r = null) {
    this._navigator = e;
    this.var_2596 = r;
  }
  static {
    n(this, "TagRenderer");
  }
  var_2596;
  var_4358 = !1;
  set useHashTags(e) {
    this.var_4358 = e;
  }
  dispose() {
    ((this._navigator = null), (this.var_2596 = null));
  }
  refreshTags(e, r) {
    let t = e.findChildByName("tags");
    if (t == null) return;
    for (let s = 0; s < 4; s++) this.refreshTag(t, s, r[s]);
    let i = e.width - t.x;
    (Fr.layoutChildrenInArea(t, i, 14), (t.height = Fr.getLowestPoint(t)), (t.visible = r.length > 0));
  }
  refreshTag(e, r, t) {
    let i = `tag.${r}`,
      s = e.getChildByName(i);
    if (t == null || t === "") {
      s != null && (s.visible = !1);
      return;
    }
    if (s == null) {
      if (((s = this._navigator?.getXmlWindow("iro_tag")), s == null)) return;
      ((s.name = i), e.addChild(s), (s.procedure = this._r85444b721b960d));
    }
    let o = s.findChildByName("txt");
    o != null &&
      ((o.text = `${this.var_4358 ? "#" : ""}${t}`),
      (o.width = o.textWidth + 5),
      (s.width = o.width + 3),
      this.refreshTagBg(s, !1),
      (s.visible = !0));
  }
  refreshTagBg(e, r) {
    (this.refreshBgPiece(e, "l", r), this.refreshBgPiece(e, "m", r), this.refreshBgPiece(e, "r", r));
  }
  _r85444b721b960d = n((...e) => {
    let r = e[0],
      i = e[1];
    if (i != null) {
      if (r.type === u.OVER) this.refreshTagBg(i, !0);
      else if (r.type === u.OUT) this.refreshTagBg(i, !1);
      else if (r.type === u.CLICK) {
        let s = i.findChildByName("txt"),
          o = s == null ? "" : this.var_4358 ? s.text.substring(1) : s.text;
        (this._navigator?.performTagSearch(o), this.var_2596?.());
      }
    }
  }, "_r85444b721b960d");
  refreshBgPiece(e, r, t) {
    let i = e.findChildByName(`bg_${r}`);
    if (i == null || i.tags[0] === `${t}`) return;
    (i.tags.splice(0, i.tags.length), i.tags.push(`${t}`));
    let s = `tag_${r}${t ? "_reactive" : ""}`;
    ((i.bitmap = this._navigator?._r6bd8f6d6bfdbb5(s) ?? null),
      (i.disposesBitmap = !1),
      i.invalidate());
  }
}
