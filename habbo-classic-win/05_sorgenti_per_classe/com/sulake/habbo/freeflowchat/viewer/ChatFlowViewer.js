// Extracted from HabboAirLauncher.deobf.js, line 203702.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/ChatFlowViewer.as
// Obfuscated name: _i34d0b8d168d6cf

class a {
  static {
    n(this, "ChatFlowViewer");
  }
  static VIEW_BOTTOM_DEFAULT = 230;
  var_82;
  _r9c26443ccee1e1;
  _rootDisplayObject;
  var_5639 = 0;
  var_3670 = 0;
  _rcfc9e51fe5343a = 0;
  var_5880 = 0.25;
  _bubbles = [];
  _toRemove = [];
  constructor(e, r) {
    ((this._rootDisplayObject = new Sprite()),
      (this.var_82 = e),
      this.var_82.registerUpdateReceiver(this, 1),
      (this._r9c26443ccee1e1 = r));
  }
  dispose() {
    (this.var_82 != null &&
      (this.var_82.removeUpdateReceiver(this), (this.var_82 = null)),
      (this._r9c26443ccee1e1 = null),
      (this._rootDisplayObject = null));
  }
  get disposed() {
    return this._rootDisplayObject == null && this.var_82 == null;
  }
  insertBubble(e, r) {
    ((e.roomPanOffsetX = this.var_3670),
      this._bubbles.push(e),
      this._rootDisplayObject?.addChild(e),
      e._rb8123e5e5241b9(r.x, r.y),
      e.repositionPointer(),
      (this.var_5639 = e.roomId));
  }
  update(e) {
    this._rcfc9e51fe5343a += e;
    let r = this.var_82?._r0349bd197496ad(this.var_5639) ?? null;
    if (r != null) {
      if (r.x !== this.var_3670 && this._bubbles.length > 0)
        for (let t of this._bubbles) t.roomPanOffsetX = r.x;
      this.var_3670 = r.x;
    }
    for (let t of this._bubbles) (t.update(e), t.readyToRecycle && this._toRemove.push(t));
    if (this._toRemove.length > 0) {
      for (let t of this._toRemove) {
        this._rootDisplayObject?.removeChild(t);
        let i = this._bubbles.indexOf(t);
        (i >= 0 && this._bubbles.splice(i, 1), t.unregister(), this.var_82?._rb8b0124a2d9774(t));
      }
      this._toRemove = [];
    }
  }
  get rootDisplayObject() {
    return this._rootDisplayObject;
  }
  get chatFlowViewer() {
    return this._rootDisplayObject?.stage == null
      ? a.VIEW_BOTTOM_DEFAULT
      : this._rootDisplayObject.stage._rcc0ac91bd808af * this.var_5880;
  }
  resize(e, r) {
    this._r9c26443ccee1e1?.resize(e, r);
  }
}
