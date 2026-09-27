// Extracted from HabboAirLauncher.deobf.js, line 68854.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/TextWindowUtils.as
// Obfuscated name: _i1e518c34a37364

class a {
  static {
    n(this, "TextWindowUtils");
  }
  static setHTMLLinkStyle(e, r, t, i, s = !0) {
    if (e == null) return;
    let o = new UnkClass_b0061b(),
      d = { color: a.toHexString(r) },
      c = { color: a.toHexString(t) },
      f = { color: a.toHexString(i) },
      l = { textDecoration: "underline" };
    (s && (c.textDecoration = "underline"),
      o._r14e5354d420daf("a:link", c),
      o._r14e5354d420daf("a:hover", d),
      o._r14e5354d420daf("a:active", f),
      o._r14e5354d420daf(".visited", l),
      (e.styleSheet = o));
  }
  static toHexString(e) {
    let r = e.toString(16);
    for (; r.length < 6;) r = `0${r}`;
    return `#${r}`;
  }
}
