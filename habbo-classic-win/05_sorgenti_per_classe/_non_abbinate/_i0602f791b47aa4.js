// Estratto da HabboAirLauncher.deobf.js, riga 135846.

class extends GenericEventQueue {
  static {
    n(this, "_i0602f791b47aa4");
  }
  _r3c552dcf2f1218;
  constructor(e) {
    (super(e),
      (this._r3c552dcf2f1218 = new E()),
      this.var_356?.addEventListener?.(_i16f2b09f774621._r7b55a643473972, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(_i16f2b09f774621._r9108fa8e08d178, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(_i16f2b09f774621._r3ca327cb643e09, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(_i16f2b09f774621._re4b5f24463acae, this._r275569e24a7de9, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r9c3cca61a7e774, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r10ca9879e8ddee, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._rd24b6ab18961d3, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r4ddc8bdac8971b, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r8acae01d9cff8b, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r5f13683c62da2d, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r8cddfbe5cdff17, this._r003dbdd638c1b8, !1),
      this.var_356?.addEventListener?.(_i6ab93d370e1a56._r043d61b7ed1454, this._r003dbdd638c1b8, !1));
  }
  get _rd50af1f42ba1bf() {
    return this._r3c552dcf2f1218;
  }
  dispose() {
    this._disposed ||
      (this.var_356?.removeEventListener?.(_i16f2b09f774621._r7b55a643473972, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(_i16f2b09f774621._r9108fa8e08d178, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(_i16f2b09f774621._r3ca327cb643e09, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(_i16f2b09f774621._re4b5f24463acae, this._r275569e24a7de9, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r9c3cca61a7e774, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r10ca9879e8ddee, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._rd24b6ab18961d3, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r4ddc8bdac8971b, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r8acae01d9cff8b, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r5f13683c62da2d, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r8cddfbe5cdff17, this._r003dbdd638c1b8, !1),
      this.var_356?.removeEventListener?.(_i6ab93d370e1a56._r043d61b7ed1454, this._r003dbdd638c1b8, !1),
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
