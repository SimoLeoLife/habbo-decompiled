// Extracted from HabboAirLauncher.deobf.js, line 135846.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0602f791b47aa4

class extends GenericEventQueue {
  static {
    n(this, "UnkGenericEventQueueSubclass_0602f7");
  }
  _r3c552dcf2f1218;
  constructor(e) {
    (super(e),
      (this._r3c552dcf2f1218 = new E()),
      this.var_356?.addEventListener?.(UnkConstants_16f2b0._r7b55a643473972, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(UnkConstants_16f2b0._r9108fa8e08d178, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(UnkConstants_16f2b0._r3ca327cb643e09, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(UnkConstants_16f2b0._re4b5f24463acae, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r9c3cca61a7e774, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r10ca9879e8ddee, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._rd24b6ab18961d3, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r4ddc8bdac8971b, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r8acae01d9cff8b, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r5f13683c62da2d, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r8cddfbe5cdff17, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(UnkClass_6ab93d._r043d61b7ed1454, this._r003dbdd638c1b8, !1));
  }
  get _rd50af1f42ba1bf() {
    return this._r3c552dcf2f1218;
  }
  dispose() {
    this._disposed ||
      (this.var_356?.removeEventListener?.(UnkConstants_16f2b0._r7b55a643473972, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(UnkConstants_16f2b0._r9108fa8e08d178, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(UnkConstants_16f2b0._r3ca327cb643e09, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(UnkConstants_16f2b0._re4b5f24463acae, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r9c3cca61a7e774, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r10ca9879e8ddee, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._rd24b6ab18961d3, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r4ddc8bdac8971b, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r8acae01d9cff8b, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r5f13683c62da2d, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r8cddfbe5cdff17, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(UnkClass_6ab93d._r043d61b7ed1454, this._r003dbdd638c1b8, !1),
      super.dispose());
  }
  _r275569e24a7de9 = n((...e) => {
    let r = e[0];
    r != null &&
      ((this._r3c552dcf2f1218.x = r.stageX),
      (this._r3c552dcf2f1218.y = r.stageY),
      this._eventArray.push(r));
  }, "_r275569e24a7de9");
  _r003dbdd638c1b8 = n((...e) => {
    let r = e[0];
    r != null &&
      ((this._r3c552dcf2f1218.x = r.stageX),
      (this._r3c552dcf2f1218.y = r.stageY),
      this._eventArray.push(r));
  }, "_r003dbdd638c1b8");
}
