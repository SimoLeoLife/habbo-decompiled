// Extracted from HabboAirLauncher.deobf.js, line 67674.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/FigureDataContainer.as
// Obfuscated name: _i0d45fbed5ce5a0

class a {
    static {
      n(this, "FigureDataContainer");
    }
    static ACTION = "std";
    static DEFAULT_FRAME = "0";
    static const_140 = "F";
    static MALE = "M";
    static SCALE = "h";
    static const_113 = "U";
    _data = new Map();
    _r0965e8b4af4e87 = new Map();
    var_106 = a.MALE;
    _disposed = !1;
    _rce3138d2f96c6a = -1;
    loadAvatarData(e, r) {
      ((this._data = new Map()),
        (this._r0965e8b4af4e87 = new Map()),
        (this.var_106 = r),
        (this._disposed = !1),
        (this._rce3138d2f96c6a = -1),
        this.getFigureStringWithFace(e));
    }
    dispose() {
      (this._data.clear(), this._r0965e8b4af4e87.clear(), (this._disposed = !0));
    }
    get disposed() {
      return this._disposed;
    }
    _r25e43f7c3becf8(e) {
      return this._data.has(e);
    }
    getPartSetId(e) {
      return this._data.get(e) ?? -1;
    }
    _r5e44c31846098f(e) {
      return this._r0965e8b4af4e87.get(e) ?? [];
    }
    parseFigureString() {
      let e = [];
      for (let [r, t] of this._data) {
        let i = this._r0965e8b4af4e87.get(r),
          s = `${r}-${t}`;
        if (i != null) for (let o of i) s += `-${o}`;
        e.push(s);
      }
      return e.join(".");
    }
    savePartData(e, r, t, i = !1) {
      (this.savePartSetId(e, r, i), this.savePartSetColourId(e, t, i));
    }
    savePartSetColourId(e, r, t = !0) {
      if (Grr.has(e)) {
        this._r0965e8b4af4e87.set(e, r);
        return;
      }
    }
    getFigureString(e) {
      let r = AvatarFigurePartType.HEAD,
        t = this._r0965e8b4af4e87.get(r);
      if (t == null) return "";
      let i = this._data.get(r) ?? -1;
      r === AvatarFigurePartType.HEAD && (i = e);
      let s = `${r}-${i}`;
      if (i >= 0) for (let o of t) s += `-${o}`;
      return s;
    }
    get gender() {
      return this.var_106;
    }
    getFigureStringWithFace(e) {
      if (e != null)
        for (let r of e.split(".")) {
          let t = r.split("-");
          if (t.length <= 0) continue;
          let i = String(t[0] ?? ""),
            s = Number.parseInt(t[1] ?? "-1", 10),
            o = [];
          for (let d = 2; d < t.length; d++) {
            let c = Number.parseInt(t[d] ?? "0", 10);
            Number.isNaN(c) || o.push(c);
          }
          (o.length === 0 && o.push(0),
            this.savePartSetId(i, Number.isNaN(s) ? -1 : s, !1),
            this.savePartSetColourId(i, o, !1));
        }
    }
    savePartSetId(e, r, t = !0) {
      if (Grr.has(e)) {
        r >= 0 ? this._data.set(e, r) : this._data.delete(e);
        return;
      }
    }
  }
