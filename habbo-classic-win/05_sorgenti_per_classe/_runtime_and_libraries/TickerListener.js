// Extracted from HabboAirLauncher.deobf.js, line 4184.

class {
      static {
        n(this, "TickerListener");
      }
      constructor(e, r = null, t = 0, i = !1) {
        ((this.next = null),
          (this.previous = null),
          (this._destroyed = !1),
          (this._fn = e),
          (this._context = r),
          (this.priority = t),
          (this._once = i));
      }
      match(e, r = null) {
        return this._fn === e && this._context === r;
      }
      emit(e) {
        this._fn && (this._context ? this._fn.call(this._context, e) : this._fn(e));
        let r = this.next;
        return (this._once && this.destroy(!0), this._destroyed && (this.next = null), r);
      }
      connect(e) {
        ((this.previous = e), e.next && (e.next.previous = this), (this.next = e.next), (e.next = this));
      }
      destroy(e = !1) {
        ((this._destroyed = !0),
          (this._fn = null),
          (this._context = null),
          this.previous && (this.previous.next = this.next),
          this.next && (this.next.previous = this.previous));
        let r = this.next;
        return ((this.next = e ? null : r), (this.previous = null), r);
      }
    }
