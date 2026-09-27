// Estratto da HabboAirLauncher.deobf.js, riga 135562.

class extends GenericEventQueue {
  static {
    n(this, "_i20e983eb328e5d");
  }
  _r49789778c9fc3a;
  constructor(e) {
    (super(e),
      (this._r49789778c9fc3a = new E()),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e.CLICK, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e.DOUBLE_CLICK, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e._r9001c395573374, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e.var_370, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e._ra93f33360c3a28, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e._r8ea9e83cdee875, this._rf50f696f886a5d, !1),
      this.var_356?.addEventListener?.(_ifd7c1208e3417e._r16434e347f72e9, this._rf50f696f886a5d, !1));
  }
  get _r2f1ba92d67be44() {
    return this._r49789778c9fc3a;
  }
  dispose() {
    this._disposed ||
      (this.var_356?.removeEventListener?.(_ifd7c1208e3417e.CLICK, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e.DOUBLE_CLICK, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e._r9001c395573374, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e.var_370, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e._ra93f33360c3a28, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e._r8ea9e83cdee875, this._rf50f696f886a5d, !1),
      this.var_356?.removeEventListener?.(_ifd7c1208e3417e._r16434e347f72e9, this._rf50f696f886a5d, !1),
      super.dispose());
  }
  _rf50f696f886a5d = n((...e) => {
    let r = e[0];
    if (r != null) {
      if (
        ((this._r49789778c9fc3a.x = r.stageX),
        (this._r49789778c9fc3a.y = r.stageY),
        r.type === _ifd7c1208e3417e.var_370 && this._eventArray.length > 0)
      ) {
        let t = this._eventArray[this._eventArray.length - 1];
        if (t != null && t.type === _ifd7c1208e3417e.var_370) {
          this._eventArray[this._eventArray.length - 1] = r;
          return;
        }
      }
      if (r.type === _ifd7c1208e3417e.DOUBLE_CLICK && this._eventArray.length > 0) {
        let t = this._eventArray[this._eventArray.length - 1];
        _ie33ea0d5b8acc0(t, r) && this._eventArray.pop();
      }
      this._eventArray.push(r);
    }
  }, "_rf50f696f886a5d");
}
