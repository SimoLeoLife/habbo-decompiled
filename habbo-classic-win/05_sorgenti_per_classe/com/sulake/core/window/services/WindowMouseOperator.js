// Extracted from HabboAirLauncher.deobf.js, line 134586.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/services/WindowMouseOperator.as
// Obfuscated name: _i6198c1d89a6182

class {
  static {
    n(this, "WindowMouseOperator");
  }
  _rf8f9fc25599fa4;
  _window;
  _working;
  _offset;
  _re66073e9e7a15e;
  var_400;
  _flags;
  _disposed = !1;
  handler = n((...e) => {
    let r = e[0];
    if (!(
      !this._working ||
      r == null ||
      this._window === null ||
      this._rf8f9fc25599fa4 === null ||
      this._re66073e9e7a15e === null
    )) {
      if (r.type === M._re9c5159721d60d) {
        this._window.disposed
          ? this.end(this._window)
          : (this._re66073e9e7a15e.x !== this._rf8f9fc25599fa4.mouseX ||
              this._re66073e9e7a15e.y !== this._rf8f9fc25599fa4.mouseY) &&
            (this.operate(this._rf8f9fc25599fa4.mouseX, this._rf8f9fc25599fa4.mouseY),
            (this._re66073e9e7a15e.x = this._rf8f9fc25599fa4.mouseX),
            (this._re66073e9e7a15e.y = this._rf8f9fc25599fa4.mouseY));
        return;
      }
      r instanceof UnkClass_fd7c12 && r.type === UnkClass_fd7c12._ra93f33360c3a28 && this.end(this._window);
    }
  }, "handler");
  clientWindowDestroyed = n((...e) => {
    this._window !== null && this.end(this._window);
  }, "clientWindowDestroyed");
  get disposed() {
    return this._disposed;
  }
  constructor(e) {
    ((this._rf8f9fc25599fa4 = e),
      (this.var_400 = new E()),
      (this._re66073e9e7a15e = new E()),
      (this._offset = new E()),
      (this._working = !1),
      (this._flags = 0),
      (this._window = null));
  }
  dispose() {
    (this._window !== null && this.end(this._window),
      (this._offset = null),
      (this._re66073e9e7a15e = null),
      (this.var_400 = null),
      (this._rf8f9fc25599fa4 = null),
      (this._disposed = !0));
  }
  begin(e, r = 0) {
    this._flags = r;
    let t = this._window;
    return (
      this._window !== null && this.end(this._window),
      !e.disposed &&
        this._rf8f9fc25599fa4 !== null &&
        this._re66073e9e7a15e !== null &&
        this._offset !== null &&
        (this._rf8f9fc25599fa4.addEventListener(UnkClass_fd7c12._r9001c395573374, this.handler),
        this._rf8f9fc25599fa4.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this.handler),
        this._rf8f9fc25599fa4.addEventListener(M._re9c5159721d60d, this.handler),
        (this._re66073e9e7a15e.x = this._rf8f9fc25599fa4.mouseX),
        (this._re66073e9e7a15e.y = this._rf8f9fc25599fa4.mouseY),
        (this._window = e),
        this.getMousePositionRelativeTo(e, this._re66073e9e7a15e, this._offset),
        this._window.addEventListener(y.const_953, this.clientWindowDestroyed),
        (this._working = !0)),
      t
    );
  }
  end(e) {
    let r = this._window;
    return (
      this._working &&
        this._window === e &&
        this._rf8f9fc25599fa4 !== null &&
        (this._rf8f9fc25599fa4.removeEventListener(UnkClass_fd7c12._r9001c395573374, this.handler),
        this._rf8f9fc25599fa4.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this.handler),
        this._rf8f9fc25599fa4.removeEventListener(M._re9c5159721d60d, this.handler),
        this._window.disposed ||
          this._window.removeEventListener(y.const_953, this.clientWindowDestroyed),
        (this._window = null),
        (this._working = !1)),
      r
    );
  }
  operate(e, r) {
    this._re66073e9e7a15e === null ||
      this.var_400 === null ||
      this._offset === null ||
      this._window === null ||
      ((this._re66073e9e7a15e.x = e),
      (this._re66073e9e7a15e.y = r),
      this.getMousePositionRelativeTo(this._window, this._re66073e9e7a15e, this.var_400),
      this._window.offset(
        this.var_400.x - this._offset.x,
        this.var_400.y - this._offset.y,
      ));
  }
  getMousePositionRelativeTo(e, r, t) {
    (e.getGlobalPosition(t), (t.x = r.x - t.x), (t.y = r.y - t.y));
  }
}
