// Extracted from HabboAirLauncher.deobf.js, line 205264.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ThreadsListData.as
// Obfuscated name: _i71d2dad4f131cf

class {
  static {
    n(this, "ThreadsListData");
  }
  static PAGE_SIZE = 20;
  var_1687 = 0;
  var_402 = 0;
  _rd3ef9b65ca2df6 = [];
  _r7125518fbf6d5f = new B();
  constructor(e, r, t) {
    ((this.var_1687 = e), (this.var_402 = r), (this._rd3ef9b65ca2df6 = t));
    for (let i of t) this._r7125518fbf6d5f.add(i.threadId, i);
  }
  get _r36ae06f9111e67() {
    return this.var_1687;
  }
  get startIndex() {
    return this.var_402;
  }
  get threads() {
    return this._rd3ef9b65ca2df6;
  }
  get _r336f760a46abc6() {
    return this._r7125518fbf6d5f;
  }
  get size() {
    return this._rd3ef9b65ca2df6.length;
  }
  updateThread(e) {
    this._r7125518fbf6d5f.replace(e.threadId, e) || this._r7125518fbf6d5f.add(e.threadId, e);
    for (let r = 0; r < this._rd3ef9b65ca2df6.length; r++)
      if (this._rd3ef9b65ca2df6[r].threadId === e.threadId) return ((this._rd3ef9b65ca2df6[r] = e), !0);
    return !1;
  }
}
