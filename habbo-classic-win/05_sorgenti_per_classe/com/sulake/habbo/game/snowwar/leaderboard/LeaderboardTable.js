// Extracted from HabboAirLauncher.deobf.js, line 220312.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/LeaderboardTable.as
// Obfuscated name: _id027c67c14d2a4

class a {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
    ((this.var_4278 = this._rc48cb7ca67aee6?.sessionDataManager?.userId ?? -1),
      (this.var_244 =
        this._rc48cb7ca67aee6?.config?.getInteger("games.highscores.viewSize", 8) ?? 8),
      (this.var_1042 =
        this._rc48cb7ca67aee6?.config?.getInteger("games.highscores.windowSize", 50) ?? 50));
  }
  static {
    n(this, "LeaderboardTable");
  }
  static SCROLL_DOWN = 0;
  static SCROLL_UP = 1;
  _r110cee7c539d04 = !1;
  var_4278 = -1;
  var_3206 = -1;
  _disposed = !1;
  _entries = null;
  var_110 = -1;
  var_1841 = -1;
  var_244 = 8;
  var_1042 = 50;
  var_501 = !0;
  var_4142 = -1;
  dispose() {
    this._disposed ||
      (this.disposeTable(),
      (this._rc48cb7ca67aee6 = null),
      (this._entries = null),
      (this._disposed = !0));
  }
  disposeTable() {
    ((this.var_110 = -1),
      (this._entries = null),
      (this.var_1841 = -1),
      (this.var_501 = !0));
  }
  addEntries(e, r) {
    ((this.var_1841 = r),
      this._entries == null
        ? ((this._entries = e), this.initializeList())
        : ((this._entries = e), this.updateCurrentIndex()),
      (this.var_501 = !1));
  }
  _r2efbb5337ee121(e, r, t) {
    ((this.var_3206 = t),
      (this.var_1841 = r),
      this._entries == null
        ? ((this._entries = e), this.initializeList())
        : ((this._entries = e), this.updateCurrentIndex()),
      (this.var_501 = !1));
  }
  initializeList() {
    let e = this._entries ?? [],
      r = 0;
    for (let t = 0; t < e.length; t++) {
      let i = e[t],
        s = i.gender === "g";
      if (!s && i.userId === this.var_4278) {
        r = t;
        break;
      }
      if (s && i.userId === this.var_3206) {
        r = t;
        break;
      }
    }
    r >= this.var_244
      ? (this.var_110 = r - Math.floor(this.var_244 / 2))
      : (this.var_110 = 0);
  }
  updateCurrentIndex() {
    this.var_110 < 0
      ? (this.var_110 += this.var_1042)
      : (this.var_110 -= this.var_1042);
  }
  scrollUp() {
    if (this.var_501) return !1;
    if (((this.var_110 -= this.var_244), this.var_110 < 0)) {
      let e = this._entries?.[0]?.rank ?? 1;
      if (e > 1) {
        let r = Math.max(1, e - this.var_1042),
          t = this.getMessageComposer(this.var_4142, r, a.SCROLL_UP);
        return (this._rc48cb7ca67aee6?.communication?.connection?.send(t), (this.var_501 = !0), !1);
      }
      this.var_110 = 0;
    }
    return !0;
  }
  getMessageComposer(e, r, t) {
    return new UnkMessageComposer_5args_b5af5c(e, r, t, this.var_244, this.var_1042);
  }
  scrollDown() {
    if (this.var_501) return !1;
    this.var_110 += this.var_244;
    let e = this._entries ?? [];
    if (this.var_110 + this.var_244 >= e.length) {
      let r = e[e.length - 1]?.rank ?? 0;
      if (r < this.var_1841) {
        let t = r + 1,
          i = this.getMessageComposer(this.var_4142, t, a.SCROLL_DOWN);
        return (this._rc48cb7ca67aee6?.communication?.connection?.send(i), (this.var_501 = !0), !1);
      }
    }
    return !0;
  }
  revertToDefaultView(e) {
    this.disposeTable();
    let r = this.getMessageComposer(e, -1, a.SCROLL_DOWN);
    (this._rc48cb7ca67aee6?.communication?.connection?.send(r),
      (this.var_501 = !0),
      (this.var_4142 = e));
  }
  getVisibleEntries() {
    let e = [],
      r = this._entries ?? [];
    for (
      let t = this.var_110;
      t < Math.min(r.length, this.var_110 + this.var_244);
      t++
    )
      t >= 0 && e.push(r[t]);
    return e;
  }
  _ra100f7e50f483d() {
    let e = this._entries ?? [];
    return this.var_501 || e.length === 0 ? !1 : !(e[0].rank === 1 && this.var_110 <= 0);
  }
  _r0391065070f9a7() {
    let e = this._entries ?? [];
    return this.var_501 || e.length === 0
      ? !1
      : !(
          e[e.length - 1].rank >= this.var_1841 &&
          this.var_110 + this.var_244 >= e.length
        );
  }
  get viewSize() {
    return this.var_244;
  }
  get favouriteGroupId() {
    return this.var_3206;
  }
}
