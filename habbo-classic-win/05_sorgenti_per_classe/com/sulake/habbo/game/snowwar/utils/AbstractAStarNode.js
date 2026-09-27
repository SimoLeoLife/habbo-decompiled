// Extracted from HabboAirLauncher.deobf.js, line 217777.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/AbstractAStarNode.as
// Obfuscated name: _i767d5f89546306

class {
  static {
    n(this, "AbstractAStarNode");
  }
  _nodeDirection8 = null;
  _parentNode = null;
  var_2641 = 0;
  var_2706 = 0;
  _disposed = !1;
  dispose() {
    ((this._nodeDirection8 = null),
      (this._parentNode = null),
      (this.var_2641 = 0),
      (this.var_2706 = 0),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get _r72f3c005c053cc() {
    return this._nodeDirection8;
  }
  set _r72f3c005c053cc(e) {
    this._nodeDirection8 = e;
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(e) {
    this._parentNode = e;
  }
  get _r3cf0759cf11524() {
    return this.var_2641;
  }
  set _r3cf0759cf11524(e) {
    this.var_2641 = e;
  }
  get _r6d67dda035a136() {
    return this.var_2706;
  }
  set _r6d67dda035a136(e) {
    this.var_2706 = e;
  }
  compareTo(e) {
    let r = this.var_2706 + this.var_2641,
      t = e.var_2706 + e.var_2641;
    return r < t ? -1 : r > t ? 1 : 0;
  }
  _r70ba8723ae7eed(e) {
    return 0;
  }
  _r771d9d1ed3d827(e) {
    return null;
  }
  _rb8c5250777d2ba(e) {
    return null;
  }
  _ra70cfe9ecf7f0e(e, r) {
    return !1;
  }
  _r3c933782527e15(e, r) {
    return 0;
  }
}
