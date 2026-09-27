// Extracted from HabboAirLauncher.deobf.js, line 353062.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8fa8f12a4ba3a5

class extends YX {
  static {
    n(this, "UnkClass_8fa8f1");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s = !1) {
    super._re7a03a855dfd32(e, r, t, i, s);
  }
  _rfcc8e4122982c3(e) {
    let r = this.var_40.createInnerBorder(),
      t = this.var_40.sectionSpacing,
      i = [],
      s = [],
      o = !1,
      d = !1;
    for (let c = 0; c < e.length; c += 1) {
      let f = e[c];
      if (f instanceof FooterPreset) {
        ((f.splitterVisible = !1), (d = !0));
        let l = this.var_102.createSimpleListView(!0, s);
        ((l.spacing = 0), (l.backgroundColor = this.var_40.backgroundColor));
        let b = this.var_102._r5ce8ba4791791e(l, 9, 8, 9, 8, r);
        i.push(b);
      }
      if (!o || d) i.push(f);
      else {
        if ((s.push(f), s.length > 1)) {
          let l = this.var_102.createSpacer(t);
          ((f._r73291abb71fede = l), s.push(l));
        }
        s.length === 1 && (f instanceof SectionPreset || f instanceof AbstractSectionPreset) && (f.splitterVisible = !1);
      }
      f instanceof Lc && ((this._headerPreset = f), (o = !0));
    }
    ((this.var_295 = this.var_102.createSimpleListView(!0, i)),
      (this.var_295.backgroundColor = this.var_40.frameColor));
  }
}
