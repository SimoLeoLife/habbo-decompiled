// Estratto da HabboAirLauncher.deobf.js, riga 240098.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/namescam/class_3792.as
// Nome offuscato: _i724a0e1e424244

class a {
  static {
    n(this, "class_3792");
  }
  static _r638d55792ec46b = 2;
  static _rcc503885122469 = 2;
  static ALLOWED_PUNCTUATION = "_-=?!@:.,;";
  static SMALL_PUNCTUATION = ".,:";
  static EXTRA_ALLOWED_LETTERS = "\xC5\xC4\xD6\xE5\xE4\xF6\u015E\xC7\xDC\u011E\u015F\xE7\u0131\xFC\u011F";
  static CONFUSABLE_GROUPS = [
    "0Oo\xD6\xF6",
    "1lI!",
    ".,",
    ";:",
    "A\xC5\xC4a\xE5\xE4",
    "C\xC7c\xE7",
    "G\u011Eg\u011F",
    "S\u015Es\u015F",
    "U\xDCu\xFC",
  ];
  static var_3717 = null;
  static detect(e, r, t) {
    return new lQ(a.collectMatchingNames(e, r), a.collectMatchingNames(e, t));
  }
  static _rba630a9bc89396(e, r) {
    return e == null ||
      r == null ||
      e.length === 0 ||
      r.length === 0 ||
      e === r ||
      !a._r1e04ee0311114a(e) ||
      !a._r1e04ee0311114a(r)
      ? !1
      : a.compareNames(e, r, 0, 0, 0, 0, new Map());
  }
  static collectMatchingNames(e, r) {
    let t = [];
    if (r == null || e == null || e.length === 0) return t;
    let i = new Set();
    for (let s of r) {
      let o = typeof s == "string" ? s : null;
      if (o == null || o.length === 0 || o === e) continue;
      let d = `name:${o}`;
      i.has(d) || (a._rba630a9bc89396(e, o) && (i.add(d), t.push(o)));
    }
    return t;
  }
  static compareNames(e, r, t, i, s, o, d) {
    if (s > a._rcc503885122469 || o > a._r638d55792ec46b) return !1;
    let c = `${t}|${i}|${s}|${o}`,
      f = d.get(c);
    if (f !== void 0) return f;
    let l = !1;
    if (t === e.length && i === r.length) l = !0;
    else if (t < e.length && i < r.length) {
      let b = e.charAt(t),
        _ = r.charAt(i);
      b === _
        ? (l = a.compareNames(e, r, t + 1, i + 1, s, o, d))
        : a.isCaseOnlyChange(b, _)
          ? (l = a.compareNames(e, r, t + 1, i + 1, s, o + 1, d))
          : a.areConfusable(b, _) && (l = a.compareNames(e, r, t + 1, i + 1, s, o, d));
    }
    return (
      !l &&
        t < e.length &&
        a.isSmallPunctuation(e.charAt(t)) &&
        (l = a.compareNames(e, r, t + 1, i, s + 1, o, d)),
      !l &&
        i < r.length &&
        a.isSmallPunctuation(r.charAt(i)) &&
        (l = a.compareNames(e, r, t, i + 1, s + 1, o, d)),
      d.set(c, l),
      l
    );
  }
  static _r1e04ee0311114a(e) {
    for (let r = 0; r < e.length; r++) if (!a._r4150fbbec2360b(e.charAt(r))) return !1;
    return !0;
  }
  static _r4150fbbec2360b(e) {
    if (e == null || e.length !== 1) return !1;
    let r = e.charCodeAt(0);
    return (r >= 48 && r <= 57) || (r >= 65 && r <= 90) || (r >= 97 && r <= 122)
      ? !0
      : a.ALLOWED_PUNCTUATION.includes(e) || a.EXTRA_ALLOWED_LETTERS.includes(e);
  }
  static _re033bd783f63ca(e) {
    if (e == null || e.length !== 1) return !1;
    let r = e.charCodeAt(0);
    return (r >= 65 && r <= 90) || (r >= 97 && r <= 122) || a.EXTRA_ALLOWED_LETTERS.includes(e);
  }
  static isCaseOnlyChange(e, r) {
    return !a._re033bd783f63ca(e) || !a._re033bd783f63ca(r) || e === r
      ? !1
      : e.toLowerCase() === r.toLowerCase() && e.toUpperCase() === r.toUpperCase();
  }
  static isSmallPunctuation(e) {
    return a.SMALL_PUNCTUATION.includes(e);
  }
  static areConfusable(e, r) {
    if (e == null || r == null || e === r) return !1;
    let t = a.getConfusableGroupByCharacter(),
      i = t.get(e),
      s = t.get(r);
    return i != null && i === s;
  }
  static getConfusableGroupByCharacter() {
    if (a.var_3717 == null) {
      a.var_3717 = new Map();
      for (let e of a.CONFUSABLE_GROUPS)
        for (let r = 0; r < e.length; r++) a.var_3717.set(e.charAt(r), e);
    }
    return a.var_3717;
  }
}
