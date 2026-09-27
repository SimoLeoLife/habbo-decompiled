// Extracted from HabboAirLauncher.deobf.js, line 200580.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/ChatHistoryBuffer.as
// Obfuscated name: _ifad939e32488e5

class a {
  static {
    n(this, "ChatHistoryBuffer");
  }
  static MAX_CHAT_ITEMS = 1e3;
  var_82;
  _entries = [];
  constructor(e) {
    this.var_82 = e;
  }
  dispose() {
    this.var_82?._rd1cbaf2c0b1836?.deactivateView();
    for (let e of this._entries) e.bitmap.dispose();
    ((this._entries = []), (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  _ref0c2f1190c7b2(e) {
    let r = this.var_82;
    if (r?._r3b1002abd6af76 == null) return;
    let t;
    try {
      t = r._r3b1002abd6af76._r225d0dd8efd594(e);
    } catch (s) {
      if ((typeof s == "object" && s != null && "errorID" in s ? Number(s.errorID) : -1) === 2015) return;
      throw s;
    }
    (this._entries.push(t), this._rd646ba6a4815b2(t));
    let i = r._rd1cbaf2c0b1836;
    i?.isActive && i._rc5978e3d6cb5ff(this._entries[this._entries.length - 1]);
  }
  _r64c76bbc0eb726(e) {
    let r = this.var_82;
    if (r?._r3b1002abd6af76 == null) return;
    let t = r._r3b1002abd6af76._r9106155bad5e1c(e);
    (this._entries.push(t), this._rd646ba6a4815b2(t));
  }
  get entries() {
    return this._entries;
  }
  get totalHeight() {
    let e = 0;
    for (let r of this._entries) e += r.bitmap.height - r.overlap.y - vi.const_1005;
    return e;
  }
  _rd646ba6a4815b2(e) {
    let r = this.var_82;
    r != null &&
      this._entries.length > a.MAX_CHAT_ITEMS &&
      (r._rd1cbaf2c0b1836?._r04e596c702ad7f(e.bitmap.height - e.overlap.y - vi.const_1005),
      this._entries.shift()?.bitmap.dispose());
  }
}
