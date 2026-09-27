// Estratto da HabboAirLauncher.deobf.js, riga 339487.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/campaign/calendar/CalendarSpinnerUtil.as
// Nome offuscato: _i2b8b57f763b8bd

class {
  static {
    n(this, "CalendarSpinnerUtil");
  }
  static createGradients(e, r) {
    let t = e.window.findChildByName("gradient1");
    if (t != null) {
      let s = Math.max(1, e._rec6bc2bac87177(r) - e.itemList.scrollH * e.itemList._radb221318b5180);
      t.bitmap = this._radff9b85a91cfe(s, e.itemList.height, [0.6, 0.2]);
    }
    let i = e.window.findChildByName("gradient2");
    if (i != null) {
      let s = t?.bitmap?.width ?? 0,
        o = Math.max(1, e._r00ad0dfb413b98 - (s + e._rf377477da179e0 + e._r0785c9818a20a6));
      ((i.bitmap = this._radff9b85a91cfe(o, e.itemList.height, [0.2, 0.6])), (i.x = e._r00ad0dfb413b98 - o));
    }
  }
  static _radff9b85a91cfe(e, r, t) {
    let i = new A(e, r, !0, 0),
      s = new D(0, 0, 1, r);
    for (let o = 0; o < e; o += 1) {
      let d = e <= 1 ? 0 : o / (e - 1),
        c = t[0] + (t[1] - t[0]) * d;
      ((s.x = o), i.fillRect(s, ((Math.round(c * 255) & 255) << 24) | 987168));
    }
    return i;
  }
}
