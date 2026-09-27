// Estratto da HabboAirLauncher.deobf.js, riga 72062.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/localization/CoreLocalizationManager.as
// Nome offuscato: _ib1d9669a7036e0

class a extends ue {
  static {
    n(this, "CoreLocalizationManager");
  }
  static INTERPOLATION_DEPTH_LIMIT = 3;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this.var_161 ??= new globalThis.Map()),
      (this._r7ae0c21c1ea9d6 ??= new B()),
      (this._r36440c37ac0833 ??= ""),
      (this._r1f103d580e0917 ??= []),
      (this._r600df465a0c061 ??= new B()),
      (this._acceptEmptyMap ??= ""),
      (this._r448f87bcda9ed7 ??= null));
  }
  initComponent() {
    ((this.var_161 ??= new globalThis.Map()),
      (this._r7ae0c21c1ea9d6 ??= new B()),
      (this._r36440c37ac0833 ??= ""),
      (this._r1f103d580e0917 ??= []),
      (this._r600df465a0c061 ??= new B()),
      (this._acceptEmptyMap ??= ""),
      (this._r448f87bcda9ed7 ??= null));
  }
  dispose() {
    ((this.var_161 = null),
      this._r7ae0c21c1ea9d6?.dispose(),
      (this._r7ae0c21c1ea9d6 = null),
      (this._r1f103d580e0917 = null),
      this._r600df465a0c061?.dispose(),
      (this._r600df465a0c061 = null),
      super.dispose());
  }
  _r244566c7baaea4(e, r, t, i) {
    let s = this._r7ae0c21c1ea9d6?.getProperty(e) ?? null;
    s == null &&
      this._r7ae0c21c1ea9d6 != null &&
      ((s = new _ia01480e0ec6c4c(i, r, t)), this._r7ae0c21c1ea9d6.setProperty(e, s));
  }
  _r9d0f61ef4bf78d(e) {
    let r = this._r7ae0c21c1ea9d6?.getProperty(e) ?? null;
    return r == null
      ? !1
      : ((this._r36440c37ac0833 = e), this.loadLocalizationFromURL(r.url, r._r178160a3ba300e), !0);
  }
  _rd76d40bf1474dc() {
    return this._r448f87bcda9ed7;
  }
  _rf7dfa62148ec83() {
    return this._r7ae0c21c1ea9d6;
  }
  _r7a86e5a7cc61cc(e) {
    return this._r7ae0c21c1ea9d6?.getProperty(e) ?? null;
  }
  _red912863ccba35() {
    return this._acceptEmptyMap;
  }
  _rb076d25623b4f7() {
    return this._r7a86e5a7cc61cc(this._r36440c37ac0833);
  }
  loadLocalizationFromURL(e, r, t = !1) {
    if (!e) {
      this.events.dispatchEvent?.(new M(class_2079_.const_76));
      return;
    }
    let i = new _ib182ac399b1881(new _i636490202c0f9a(e));
    (i.addEventListener(M.ComponentDependency, (s) => {
      let o = String(s.currentTarget.data ?? "");
      if (!o) {
        this.events.dispatchEvent?.(new M(class_2079_.const_76));
        return;
      }
      try {
        let d = Rne.parse(o);
        if (!d.isValid()) {
          this.events.dispatchEvent?.(new M(class_2079_.const_76));
          return;
        }
        this._r448f87bcda9ed7 = d;
        let c = `localization_${r.toLowerCase()}_${d._rb1fc593caca19f()}`;
        if (this.assets.getAssetByName(c) != null && r === this._acceptEmptyMap) {
          this.events.dispatchEvent?.(new M(class_2079_.const_71));
          return;
        }
        ((this._acceptEmptyMap = r), this._r600df465a0c061?.remove(c), this._r600df465a0c061?.add(c, t));
        let l = `${d.getExternalTextsHash()}/${d._rb1fc593caca19f()}`,
          b = this.assets.loadAssetFromFile(c, new _i636490202c0f9a(l), "text/plain");
        (b.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rfa1fabaee7b6f1),
          b.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._red1491058ae029));
      } catch {
        this.events.dispatchEvent?.(new M(class_2079_.const_76));
      }
    }),
      i.addEventListener(ErrorEvent_.ERROR, () => {
        this.events.dispatchEvent?.(new M(class_2079_.const_76));
      }),
      i.addEventListener(_i207e0270849f6a._rb9739f8a5177c3, () => {
        this.events.dispatchEvent?.(new M(class_2079_.const_76));
      }));
  }
  _r23e3b9cecb69d1(e) {
    return this.var_161?.has(e) ?? !1;
  }
  getLocalization(e, r = "") {
    let t = this.var_161?.get(e) ?? null;
    return t == null ? (this._r1f103d580e0917?.push(e), r) : (t.value ?? r);
  }
  updateLocalization(e, r) {
    let t = this.var_161?.get(e) ?? null;
    t == null ? ((t = new Localization(this, e, r)), this.var_161?.set(e, t)) : t.setValue(r);
  }
  registerListener(e, r) {
    let t = this.var_161?.get(e) ?? null;
    return (
      t == null &&
        (this._r1f103d580e0917?.push(e), (t = new Localization(this, e, e)), this.var_161?.set(e, t)),
      t.registerListener(r),
      !0
    );
  }
  removeListener(e, r) {
    return (this.var_161?.get(e)?.removeListener(r), !0);
  }
  _r43eae9731f5b27(e, r, t, i = "%") {
    let s = this.var_161?.get(e) ?? null;
    return (
      s == null && ((s = new Localization(this, e, e)), this.var_161?.set(e, s)),
      s._r43eae9731f5b27(r, t, i),
      s.value
    );
  }
  _r5f04530d38380d(e) {
    return this.var_161?.get(e) ?? null;
  }
  getKeys() {
    return [...(this.var_161?.keys() ?? [])];
  }
  _r023086066f00b5() {}
  interpolate(e) {
    let r = /\${([^}]*)}/g;
    for (let t = 0; t < a.INTERPOLATION_DEPTH_LIMIT; t++) {
      let i = r.exec(e);
      if (i == null) return e;
      let s = 0;
      for (let o = 1; o < i.length; o += 1) {
        let d = this.var_161?.get(i[o]) ?? null;
        d != null && ((s += 1), (e = e.replace(`\${${i[o]}}`, d.value ?? "")));
      }
      if (s === 0) break;
    }
    return super.interpolate(e);
  }
  _rfa1fabaee7b6f1 = n((e) => {
    let r = e.target;
    if (r == null) return;
    let t = r.assetName,
      i = "",
      s = r._r7ea1029131e026.content;
    s instanceof re ? ((s.position = 0), (i = s.readUTFBytes(s.length))) : (i = String(s ?? ""));
    let o = this.assets.getAssetByName(t);
    o != null && this.assets.removeAsset(o)?.dispose();
    let d = this._r600df465a0c061?.getValue(t) ?? !1;
    if (!a.validateLocalizationData(i, d)) {
      this.events.dispatchEvent?.(new M(class_2079_.const_76));
      return;
    }
    (this._r6f216f4e014611(i), this.events.dispatchEvent?.(new M(class_2079_.const_71)));
  }, "_rfa1fabaee7b6f1");
  _red1491058ae029 = n((e) => {
    let t = e.target._r7ea1029131e026.url ?? "",
      i = this.assets.loadAssetFromFile(t, new _i636490202c0f9a(t), "text/plain");
    (i.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rfa1fabaee7b6f1),
      i.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._rb2c6a5144bb8e5));
  }, "_red1491058ae029");
  _rb2c6a5144bb8e5 = n((e) => {
    let r = e.target;
    (ErrorReportStorage.addDebugData("Localization name", r.assetName),
      ErrorReportStorage.addDebugData("Localization url", r._r7ea1029131e026.url ?? ""),
      ErrorReportStorage.addDebugData("Localization error", `Code: ${r._r7ea1029131e026.errorCode}`));
  }, "_rb2c6a5144bb8e5");
  _r151bf4730dd8d2() {
    for (let e of this.var_161?.values() ?? []) e.updateListeners();
  }
  _r6f216f4e014611(e) {
    if (e == null) return null;
    let r = new globalThis.Map(),
      t = e.length,
      i = 0;
    for (; i <= t;) {
      let s = i;
      for (; s < t;) {
        let d = e.charCodeAt(s);
        if (d === 10 || d === 13) break;
        s += 1;
      }
      let o = e.slice(i, s);
      if (o.charAt(0) !== "#") {
        let d = o.indexOf("=");
        if (d > 0) {
          let c = o.slice(0, d).trim();
          if (c.length > 0) {
            let f = o
              .slice(d + 1)
              .trim()
              .replace(
                /\\n/g,
                `
`,
              );
            f.length > 0 && (this.updateLocalization(c, f), r.set(c, f));
          }
        }
      }
      if (s >= t) break;
      if (e.charCodeAt(s) === 13 && e.charCodeAt(s + 1) === 10) {
        i = s + 2;
        continue;
      }
      i = s + 1;
    }
    return (this._r151bf4730dd8d2(), r);
  }
  static validateLocalizationData(e, r) {
    return e == null || (e.length === 0 && !r) ? !1 : !e.includes("<!DOCTYPE html");
  }
}
