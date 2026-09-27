// Extracted from HabboAirLauncher.deobf.js, line 326367.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomVisitHistory.as
// Obfuscated name: _i59213a3e58e812

class a {
  static {
    n(this, "RoomVisitHistory");
  }
  static MAX_HISTORY_LENGTH = 20;
  static _shared = new a();
  _history = [];
  var_110 = -1;
  static get shared() {
    return a._shared;
  }
  get currentIndex() {
    return this.var_110;
  }
  get length() {
    return this._history.length;
  }
  get currentRoom() {
    return this.var_110 < 0 || this.var_110 >= this._history.length
      ? null
      : (this._history[this.var_110] ?? null);
  }
  _r094e432bc32368() {
    return this.var_110 > 0 && this._history.length > 0;
  }
  _r86e003da163789() {
    return this.var_110 >= 0 && this.var_110 < this._history.length - 1;
  }
  goBack() {
    return this._r094e432bc32368()
      ? (this.var_110--, this._history[this.var_110] ?? null)
      : null;
  }
  _rbe0cc4010aa2fe() {
    return this._r86e003da163789()
      ? (this.var_110++, this._history[this.var_110] ?? null)
      : null;
  }
  _r2ca309f125f1e1(e, r) {
    for (let t of this._history) t.flatId === e && (t.roomName = r);
  }
  _r5bf59105c05bb3(e, r) {
    if ((this._r2ca309f125f1e1(e, r), this._history.length === 0)) {
      this._r957b1bfcd03afb(e, r);
      return;
    }
    this._r43af1ad18f43d7();
    let t = this.currentRoom;
    if (t != null && t.flatId === e) {
      t.roomName = r;
      return;
    }
    this.var_110 < this._history.length - 1 &&
      this._rdc0b81d005de1a(this.var_110, this._history.length - 1);
    let i = this._history.length > 0 ? this._history[this._history.length - 1] : null;
    if (i != null && i.flatId === e) {
      ((i.roomName = r), (this.var_110 = this._history.length - 1));
      return;
    }
    this._r957b1bfcd03afb(e, r);
  }
  _rdb46e64cbf284c() {
    return this.copyEntries(this._history);
  }
  getHistoryView() {
    let e = [],
      r = new Set();
    for (let t = this._history.length - 1; t >= 0; t--) {
      let i = this._history[t];
      if (i == null) continue;
      let s = String(i.flatId);
      r.has(s) || (r.add(s), e.unshift(i.copy()));
    }
    return e;
  }
  _r957b1bfcd03afb(e, r) {
    (this._history.push(new hCe(e, r)),
      (this.var_110 = this._history.length - 1),
      this._r2b9edc2f01b1ae());
  }
  _r2b9edc2f01b1ae() {
    for (; this._history.length > a.MAX_HISTORY_LENGTH;)
      (this._history.shift(), this.var_110--);
    this._r43af1ad18f43d7();
  }
  _r43af1ad18f43d7() {
    this._history.length === 0
      ? (this.var_110 = -1)
      : this.var_110 < 0
        ? (this.var_110 = 0)
        : this.var_110 >= this._history.length &&
          (this.var_110 = this._history.length - 1);
  }
  _rdc0b81d005de1a(e, r) {
    if (this._history.length !== 0)
      for (e = Math.max(0, e), r = Math.min(r, this._history.length - 1); e < r;) {
        let t = this._history[e];
        ((this._history[e] = this._history[r]), (this._history[r] = t), e++, r--);
      }
  }
  copyEntries(e) {
    let r = [];
    for (let t of e) r.push(t.copy());
    return r;
  }
}
