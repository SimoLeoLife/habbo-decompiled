// Extracted from HabboAirLauncher.deobf.js, line 220228.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/WindowUtils.as
// Obfuscated name: _i9cd301e8b2b5e0

class a {
  static {
    n(this, "WindowUtils");
  }
  static _assets = null;
  static _windowManager = null;
  static init(e, r) {
    ((a._assets = e), (a._windowManager = r));
  }
  static setCaption(e, r) {
    if (e == null) return;
    e.caption = r;
    let t = null;
    (e.parent != null && "findChildByName" in e.parent && (t = e.parent.findChildByName(`${e.name}_stroke`)),
      t == null &&
        e.parent != null &&
        "getListItemByName" in e.parent &&
        (t = e.parent.getListItemByName(`${e.name}_stroke`)),
      t == null &&
        e.parent != null &&
        "getGridItemByName" in e.parent &&
        (t = e.parent.getGridItemByName(`${e.name}_stroke`)),
      t != null && t.caption !== r && (t.caption = r));
  }
  static setElementImage(e, r, t = 0, i = 0, s = 0) {
    if (e == null || r == null || e.disposed) return;
    let o = t > 0 ? t : e.height,
      d = Math.floor((e.width - r.width) / 2 + i),
      c = Math.floor((o - r.height) / 2 + s);
    if ("bitmap" in e) {
      let f = e;
      ((f.bitmap == null || t > 0) && (f.bitmap = new A(e.width, o, !0, 16777215)),
        f.bitmap.fillRect(f.bitmap.rect, 16777215),
        f.bitmap.copyPixels(r, r.rect, new E(d, c), null, null, !1),
        e.invalidate());
      return;
    }
    if ("setDisplayObject" in e) {
      let f = new UnkClass_3a5c6f();
      ((f.bitmapData = r), e.setDisplayObject(f));
    }
  }
  static createWindow(e, r = 2) {
    let t = a._assets?.getAssetByName(e)?.content;
    if (t == null || a._windowManager == null) return null;
    let i = a._windowManager.buildFromXML(t, r);
    if (i == null) return null;
    let s = [];
    "groupChildrenWithTag" in i
      ? i.groupChildrenWithTag("bitmap", s, -1)
      : "groupListItemsWithTag" in i && i.groupListItemsWithTag("bitmap", s, -1);
    for (let o of s) "bitmap" in o && a.setDefaultElementImage(o, !1);
    return i;
  }
  static hideElement(e, r) {
    let t = e.findChildByName(r);
    t != null && (t.visible = !1);
    let i = e.findChildByName(`${r}_stroke`);
    i != null && (i.visible = !1);
  }
  static colorStrokes(e, r) {
    let t = [];
    "groupChildrenWithTag" in e
      ? e.groupChildrenWithTag("stroke", t, 10)
      : "groupListItemsWithTag" in e && e.groupListItemsWithTag("stroke", t, 10);
    for (let i of t) "textColor" in i && (i.textColor = r);
  }
  static showElement(e, r) {
    let t = e.findChildByName(r);
    t != null && (t.visible = !0);
    let i = e.findChildByName(`${r}_stroke`);
    i != null && (i.visible = !0);
  }
  static setDefaultElementImage(e, r) {
    if (a._assets == null || e == null) return;
    let i = e.properties.filter((o) => o instanceof ne).find((o) => o.key === "bitmap_asset_name")?.value;
    if (i == null || i.length === 0) return;
    r && (i = i.replace("_on", ""));
    let s = a._assets.getAssetByName(i)?.content;
    s != null &&
      ((e.bitmap = new A(e.width, e.height, !0, 0)),
      e.bitmap.copyPixels(s, s.rect, new E((e.width - s.width) / 2, (e.height - s.height) / 2)));
  }
}
