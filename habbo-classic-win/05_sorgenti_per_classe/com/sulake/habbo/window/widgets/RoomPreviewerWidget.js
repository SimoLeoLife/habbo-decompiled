// Estratto da HabboAirLauncher.deobf.js, riga 151577.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RoomPreviewerWidget.as

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    (this._windowManager?.roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_INITIALIZED, this.onRoomInitialized),
      (this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
        this._windowManager.assets.getAssetByName("room_previewer_xml")?.content,
      )),
      (this._r2e19863e2c683e = this._rf8f9fc25599fa4?.findChildByName("room_canvas")),
      (this.RoomPreviewer = new d3(this._windowManager?.roomEngine ?? null, a.ROOM_ID_COUNTER++)),
      this.RoomPreviewer._r02eeec29a202f2(),
      this._rf8f9fc25599fa4?.addEventListener(u.CLICK, this._r9863e0efa8b398),
      this._rf8f9fc25599fa4?.addEventListener(y.const_1204, this._r8ef94177f6f8f0),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height),
          this.RoomPreviewer.modifyRoomCanvas(
            this._rf8f9fc25599fa4.width,
            this._rf8f9fc25599fa4.height,
          ))));
  }
  static {
    n(this, "RoomPreviewerWidget");
  }
  static TYPE = "room_previewer";
  static _r3019e2ab59cd63 = `${a.TYPE}:scale`;
  static _rd421265fddb568 = `${a.TYPE}:offsetx`;
  static _r5343885a57a4e1 = `${a.TYPE}:offsety`;
  static _rcef9c7d3695f6a = `${a.TYPE}:zoom`;
  static _r9e17e5e02bc7e9 = new ne(a._r3019e2ab59cd63, d3._rff0e4db193867d, ne.INT, !1, [
    d3._r3f08dab6b5736f,
    d3._rff0e4db193867d,
  ]);
  static _r1dd80da7fe57a0 = new ne(a._rd421265fddb568, 0, ne.INT, !1);
  static _ra8e098bca5ad5d = new ne(a._r5343885a57a4e1, 0, ne.INT, !1);
  static _r677eb1c097a32e = new ne(a._rcef9c7d3695f6a, 1, ne.INT, !1);
  static ROOM_ID_COUNTER = 2;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _r2e19863e2c683e = null;
  RoomPreviewer = null;
  _scale = Number(a._r9e17e5e02bc7e9.value);
  _offsetX = 0;
  _offsetY = 0;
  var_2663 = Number(a._r677eb1c097a32e.value);
  get scale() {
    return this._scale;
  }
  set scale(e) {
    ((this._scale = Math.trunc(e)), this.refresh());
  }
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(e) {
    ((this._offsetX = Math.trunc(e)), this.refresh());
  }
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(e) {
    ((this._offsetY = Math.trunc(e)), this.refresh());
  }
  get zoom() {
    return this.var_2663;
  }
  set zoom(e) {
    ((this.var_2663 = Math.trunc(e)), this.refresh());
  }
  get properties() {
    return this._disposed
      ? []
      : [
          a._r9e17e5e02bc7e9.withValue(this._scale),
          a._r1dd80da7fe57a0.withValue(this._offsetX),
          a._ra8e098bca5ad5d.withValue(this._offsetY),
          a._r677eb1c097a32e.withValue(this.var_2663),
        ];
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case a._r3019e2ab59cd63:
          this.scale = Number(r.value);
          break;
        case a._rd421265fddb568:
          this.offsetX = Number(r.value);
          break;
        case a._r5343885a57a4e1:
          this.offsetY = Number(r.value);
          break;
        case a._rcef9c7d3695f6a:
          this.zoom = Number(r.value);
          break;
      }
  }
  dispose() {
    this._disposed ||
      (this.RoomPreviewer?.dispose(),
      (this.RoomPreviewer = null),
      this._rf8f9fc25599fa4?.removeEventListener(u.CLICK, this._r9863e0efa8b398),
      this._rf8f9fc25599fa4?.removeEventListener(y.const_1204, this._r8ef94177f6f8f0),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      (this._r2e19863e2c683e = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._windowManager?.roomEngine?.events.removeEventListener?.(
        RoomEngineEvent.ROOM_INITIALIZED,
        this.onRoomInitialized,
      ),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get _r08651d482bdd11() {
    return this.RoomPreviewer;
  }
  createAvatarImage(e) {
    if (e == null || this._r2e19863e2c683e == null) return;
    let r = new _i3a5c6f457acdad();
    ((r.bitmapData = e), (r.scaleX = 2), (r.scaleY = 2), this._r2e19863e2c683e.setDisplayObject(r));
  }
  toString() {
    return "RoomPreviewerWidget";
  }
  onRoomInitialized = n((e) => {
    if (
      e.type !== RoomEngineEvent.ROOM_INITIALIZED ||
      this.RoomPreviewer == null ||
      e.roomId !== this.RoomPreviewer._rdca96106365ddc
    )
      return;
    this.RoomPreviewer.reset(!1);
    let r = this.RoomPreviewer._re632c269e317f0(
      this._r2e19863e2c683e?.width ?? 0,
      this._r2e19863e2c683e?.height ?? 0,
    );
    r != null && this._r2e19863e2c683e?.setDisplayObject(r);
  }, "onRoomInitialized");
  refresh() {
    if (this.RoomPreviewer == null || !this.RoomPreviewer._r7800b4141964cc) return;
    (this._scale === d3._rff0e4db193867d
      ? this.RoomPreviewer._rd122c761245a59()
      : this.RoomPreviewer._r7767b6699675c9(),
      (this.RoomPreviewer._ra7728c300f10df = new E(this._offsetX, this._offsetY)));
    let e = this._r2e19863e2c683e?.getDisplayObject() ?? null;
    e != null &&
      ((e.scaleX = this.var_2663),
      (e.scaleY = this.var_2663),
      (e.x = this.offsetX),
      (e.y = this.offsetY));
  }
  _r8ef94177f6f8f0 = n((e) => {
    let r = e.window;
    r != null && this.RoomPreviewer?.modifyRoomCanvas(r.width, r.height);
  }, "_r8ef94177f6f8f0");
  _r9863e0efa8b398 = n(() => {
    this.RoomPreviewer?._rc0038b776af704();
  }, "_r9863e0efa8b398");
}
