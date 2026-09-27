// Estratto da HabboAirLauncher.deobf.js, riga 361344.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/levelupper/InterpolateLevelUpper.as
// Nome offuscato: _i6de5fcecbb17bd

class a extends AbstractLevelUpConfig {
    static {
      n(this, "InterpolateLevelUpper");
    }
    _rcec3d37edd2258;
    _maxedProgressInfo;
    constructor(e) {
      (super(),
        (this._rcec3d37edd2258 = a.generateTree(e)),
        (this._maxedProgressInfo = this.findProgressInfoForMax()));
    }
    xpForLevel(e) {
      if (e <= 1) return 0;
      let r = 0;
      for (let t of this._rcec3d37edd2258.getKeys()) {
        let i = this._rcec3d37edd2258.getValue(t);
        if (i === e) return t;
        if (i > e) {
          let s = this._r184721cefcdc59(t),
            o = s == null ? 1 : this._rcec3d37edd2258.getValue(s),
            d = s ?? 0,
            c = i - o,
            l = (t - d) / c,
            b = e - o;
          return d + ((l * b) | 0);
        }
        r = t;
      }
      return r;
    }
    get maxLevel() {
      return this._maxedProgressInfo.currentLevel | 0;
    }
    get maxXp() {
      return this._maxedProgressInfo.currentLevelXp;
    }
    currentLevel(e) {
      return this.findProgressInfo(e).currentLevel | 0;
    }
    totalXpRequired(e) {
      let r = this.findProgressInfo(e);
      return r.nextLevelXp - r.currentLevelXp;
    }
    progress(e) {
      let r = this.findProgressInfo(e);
      return r.currentXp - r.currentLevelXp;
    }
    progressPercentage(e) {
      let r = this.findProgressInfo(e),
        t = r.nextLevelXp - r.currentLevelXp;
      return (((r.currentXp - r.currentLevelXp) / t) * 100) | 0;
    }
    xpRemaining(e) {
      let r = this.findProgressInfo(e);
      return r.nextLevelXp - r.currentXp;
    }
    isMaxed(e) {
      return this.findProgressInfo(e).isMaxed;
    }
    findProgressInfoForMax() {
      if (this._rcec3d37edd2258.length === 0) return new _i7034338af1423c(1, 1, 0, 0, 0, !0);
      let e = this._r9303c7b124137f(),
        r = Number(this._rcec3d37edd2258.getValue(e)),
        t = Number(e);
      return new _i7034338af1423c(r, r, t, t, t, !0);
    }
    findProgressInfo(e) {
      e = this.boundedValue(e);
      let r = this._r94bede0e5ca1d2(e),
        t = this._r4fdc5934806015(e + 1);
      if (t == null) return this._maxedProgressInfo;
      let i = r == null ? 1 : Number(this._rcec3d37edd2258.getValue(r)),
        s = r == null ? 0 : Number(r),
        o = Number(this._rcec3d37edd2258.getValue(t)),
        d = Number(t),
        c = o - i,
        l = (d - s) / c,
        b = e - s,
        _ = Math.min(Math.max((b / l) | 0, 0), c - 1),
        h = i + _,
        p = s + ((l * _) | 0),
        m = -1,
        v = -1,
        w = !0,
        I = !0;
      for (; w;)
        ((w = !1),
          _ === c - 1
            ? ((m = o), (v = d))
            : ((m = i + _ + 1),
              (v = s + ((l * (_ + 1)) | 0)),
              I && b + s >= v && (_++, (h = i + _), (p = s + ((l * _) | 0)), (w = !0), (I = !1))));
      return new _i7034338af1423c(h, m, p, e, v, !1);
    }
    static generateTree(e) {
      let r = new B();
      for (let t of e.getKeys()) {
        let i = e.getValue(t);
        r.add(i, t);
      }
      return r;
    }
    _r184721cefcdc59(e) {
      let r = null;
      for (let t of this._rcec3d37edd2258.getKeys()) t < e && (r == null || t > r) && (r = t);
      return r;
    }
    _r94bede0e5ca1d2(e) {
      let r = null;
      for (let t of this._rcec3d37edd2258.getKeys()) t <= e && (r == null || t > r) && (r = t);
      return r;
    }
    _r4fdc5934806015(e) {
      let r = null;
      for (let t of this._rcec3d37edd2258.getKeys()) t >= e && (r == null || t < r) && (r = t);
      return r;
    }
    _r9303c7b124137f() {
      let e = null;
      for (let r of this._rcec3d37edd2258.getKeys()) (e == null || r > e) && (e = r);
      return e;
    }
  }
