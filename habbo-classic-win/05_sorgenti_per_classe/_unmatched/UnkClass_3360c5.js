// Extracted from HabboAirLauncher.deobf.js, line 65515.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3360c59467e33f

class {
  static {
    n(this, "UnkClass_3360c5");
  }
  _r2d2ce7397f4272 = 0;
  _re4b3f5eabf4482;
  _disposed = !1;
  var_382;
  _callback;
  constructor(e, r, t) {
    ((this._re4b3f5eabf4482 = r),
      (this._callback = t),
      (this.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(e, 1)),
      this.var_382.addEventListener(DeBouncer._rf33144eac61595, this._r78479211720409));
  }
  trigger(e = !1) {
    if (!(this.var_382 == null || this._callback == null)) {
      if (e || this._r2d2ce7397f4272 < _ia411d8d8194a3a() - this._re4b3f5eabf4482) {
        (this.var_382.reset(), this._r6f4251d52b5ae9());
        return;
      }
      (this.var_382.reset(), this.var_382.start());
    }
  }
  dispose() {
    this._disposed ||
      (this.var_382?.stop(),
      this.var_382?.removeEventListener(DeBouncer._rf33144eac61595, this._r6f4251d52b5ae9),
      (this.var_382 = null),
      (this._callback = null),
      (this._re4b3f5eabf4482 = 0),
      (this._r2d2ce7397f4272 = 0),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _r2aedbfe3dcde22 = n((e) => {
    this._r6f4251d52b5ae9();
  }, "_r2aedbfe3dcde22");
  _r6f4251d52b5ae9 = n(() => {
    ((this._r2d2ce7397f4272 = _ia411d8d8194a3a()), this._callback?.());
  }, "_r6f4251d52b5ae9");
  _r78479211720409 = n((...e) => {
    this._r2aedbfe3dcde22(e[0]);
  }, "_r78479211720409");
}
