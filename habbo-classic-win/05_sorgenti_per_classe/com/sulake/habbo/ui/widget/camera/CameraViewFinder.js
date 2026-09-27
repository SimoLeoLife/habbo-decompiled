// Estratto da HabboAirLauncher.deobf.js, riga 304821.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraViewFinder.as
// Nome offuscato: _ia68393c6ac1039

class a {
  constructor(e) {
    this.var_17 = e;
    for (
      this.openViewFinder(), this.var_146 = 0;
      this.var_146 < a.NUMBER_OF_SLOTS;
      this.var_146++
    )
      this._r7ce8b5339de177(!0);
    if (((this.var_146 = 0), this._r0b50fd3994e72e())) {
      let t = this._window?.findChildByName("slot_container");
      t != null && (t.visible = !0);
    }
    (this.setMode(!1),
      this.setActiveSlot(0),
      (this._rd2a2c6792923d3 = this._window?.findChildByName("flash")),
      this._rd2a2c6792923d3 != null &&
        ((this._rd2a2c6792923d3.bitmap = new A(
          Math.max(1, this._rd2a2c6792923d3.width),
          Math.max(1, this._rd2a2c6792923d3.height),
          !1,
          16777215,
        )),
        (this._rd2a2c6792923d3.visible = !1)));
  }
  static {
    n(this, "CameraViewFinder");
  }
  static const_628 = 350;
  static NUMBER_OF_SLOTS = 5;
  static _r85ece167ddef05 = !1;
  static _shotImages = new Array(a.NUMBER_OF_SLOTS).fill(null);
  static _renderRoomMessages = new Array(a.NUMBER_OF_SLOTS).fill(null);
  _window = null;
  var_257 = null;
  _rd2a2c6792923d3 = null;
  _r0f857f6e29ac31 = 0;
  _r78799c1d861882 = 0;
  _r0ca9a0f46efaa3 = !1;
  var_146 = 0;
  _r5c7c01f924ea43 = 0;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this.var_17?.component?.context.removeUpdateReceiver(this),
      (this._rd2a2c6792923d3 = null),
      (this.var_257 = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_17 = null),
      (this._disposed = !0));
  }
  update(e) {
    if (this._r0ca9a0f46efaa3 || this.var_257 == null || this.var_17 == null) return;
    (this.var_257.bitmap == null &&
      (this.var_257.bitmap = new A(
        Math.max(1, this._r0f857f6e29ac31),
        Math.max(1, this._r78799c1d861882),
        !1,
        0,
      )),
      this.var_257.bitmap.fillRect(
        this.var_257.bitmap.rect,
        this.var_17.handler._r15b2ea2c393fea?._re204bd4500d72f ?? 0,
      ));
    let r = new Pe(),
      t = this._r287d1e9611757b();
    (r.translate(-t.x, -t.y),
      this.var_17.snapShotRoomCanvas(this.var_257.bitmap, r, !1),
      this.var_257.invalidate(),
      this._r5c7c01f924ea43 > 0 && this._r32703d69bb8ffd());
  }
  _r287d1e9611757b() {
    let e = new E();
    return (
      this.var_257?.getGlobalPosition(e),
      new D(e.x, e.y, this.var_257?.width ?? 0, this.var_257?.height ?? 0)
    );
  }
  toggleVisible(e) {
    if (this._window?.visible) {
      this.hide();
      return;
    }
    (this.var_17?.handler.containerRef?._r697386a8fb5bf8?.trackEventLog(
      "Stories",
      "camera",
      "stories.camera.opened",
      e,
    ),
      this.show(),
      this.setMode(!1));
  }
  show() {
    this._window == null ||
      this.var_17 == null ||
      ((this._window.visible = !0),
      this._window.center(),
      this.var_17.component?.context.registerUpdateReceiver(this, 100));
  }
  hide() {
    (this._window != null && (this._window.visible = !1),
      this.var_17?.component?.context.removeUpdateReceiver(this));
  }
  getRenderRoomMessage() {
    return a._renderRoomMessages[this.var_146] ?? null;
  }
  _r32703d69bb8ffd() {
    if (this._rd2a2c6792923d3 == null) return;
    this._rd2a2c6792923d3.visible = !0;
    let e = Date.now() - this._r5c7c01f924ea43,
      r = (a.const_628 - e) / a.const_628;
    ((this._rd2a2c6792923d3.blend = Math.max(0, r)),
      e > a.const_628 && ((this._r5c7c01f924ea43 = 0), (this._rd2a2c6792923d3.visible = !1)));
  }
  openViewFinder() {
    this._window != null ||
      this.var_17 == null ||
      ((this._window = this.var_17.getXmlWindow("camera_interface")),
      this._window?.center(),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowProcedure)),
      (this.var_257 = this._window?.findChildByName("image")),
      (this._r0f857f6e29ac31 = this.var_257?.width ?? 0),
      (this._r78799c1d861882 = this.var_257?.height ?? 0),
      this.var_257 != null && (this.var_257.visible = !0));
  }
  windowProcedure = n((e, r) => {
    if (r.name === "button_release") {
      let t = this._window?.findChildByName("release_bitmap");
      switch (e.type) {
        case u.DOWN:
          t && (t.assetUri = "camera_camera_btn_down");
          break;
        case u.UP:
        case u.OVER:
          t && (t.assetUri = "camera_cam_btn_hi");
          break;
        case u.OUT:
          t && (t.assetUri = "camera_camera_btn");
          break;
      }
    }
    if (!(e.type !== u.CLICK || this.var_17 == null)) {
      switch (r.name) {
        case "header_button_close":
          this.hide();
          return;
        case "button_editor":
          (this.hide(),
            this.var_17._r3d79e28dda1e54(
              this.var_257?.bitmap?.clone() ??
                new A(Math.max(1, this._r0f857f6e29ac31), Math.max(1, this._r78799c1d861882), !1, 0),
            ));
          return;
        case "delete_photo_button":
          (this._r7ce8b5339de177(), this.setMode(!1));
          return;
        case "header_button_help":
          this.var_17.component?.context._r6b6c989018eb05("habbopages/camera");
          return;
        case "button_release":
          if (this._r0ca9a0f46efaa3) {
            this.setMode(!1);
            return;
          }
          this.var_17._re3684d2a787efa();
          {
            let t = this.var_17.handler._ra7635edf007435();
            if (t != null && t.isSendable()) {
              ((a._renderRoomMessages[this.var_146] = t),
                this.addToCurrentSlot(
                  this.var_257?.bitmap?.clone() ??
                    new A(Math.max(1, this._r0f857f6e29ac31), Math.max(1, this._r78799c1d861882), !1, 0),
                ),
                (this._r5c7c01f924ea43 = Date.now()),
                this.var_17.handler.containerRef?._r697386a8fb5bf8?.trackEventLog(
                  "Stories",
                  "camera",
                  "stories.photo.taken",
                ));
              let i = this._window?.findChildByName("slot_container");
              i != null && (i.visible = !0);
            } else
              this.var_17.windowManager?.alert(
                "${generic.alert.title}",
                "${camera.alert.too_much_stuff}",
                0,
                null,
              );
          }
          return;
      }
      if (r.name.indexOf("cameraButton_") !== -1) {
        let t = Number.parseInt(r.name.charAt(r.name.length - 1) ?? "0", 10),
          i = a._shotImages[t] ?? null;
        if (i?.isEmpty !== !1 || i.image == null) {
          (this.setActiveSlot(t), this.setMode(!1));
          return;
        }
        (this.var_257 != null && (this.var_257.bitmap = i.image.clone()),
          this.setMode(!0),
          this.setActiveSlot(t));
        return;
      }
      if (r.name.indexOf("chooseSlotButton_") !== -1) {
        let t = Number.parseInt(r.name.charAt(r.name.length - 1) ?? "0", 10);
        a._shotImages.length >= t && (this.setActiveSlot(t), this.setMode(!1));
      }
    }
  }, "windowProcedure");
  setActiveSlot(e) {
    let r = this._window?.findChildByName(`slotImage_${this.var_146}`);
    (r && (r.assetUri = "camera_arrow_gray"), (this.var_146 = e));
    let t = this._window?.findChildByName(`slotImage_${this.var_146}`);
    t && (t.assetUri = "camera_arrow_green");
    let i = this._window?.findChildByName("photo_border"),
      s = this._window?.findChildByName(`cameraButton_${this.var_146}`);
    if (i != null && s != null) {
      ((i.x = s.x - 1 + (s.parent?.x ?? 0)), (i.y = s.y - 3 + (s.parent?.y ?? 0)), (i.visible = !0));
      let o = this._window?.findChildByName("delete_photo_button");
      o != null && ((o.y = i.y), (o.x = i.right - o.width));
    }
  }
  setMode(e) {
    this._r0ca9a0f46efaa3 = e;
    let r = this._window?.findChildByName("button_editor"),
      t = this._window?.findChildByName("camera_crosshair"),
      i = this._window?.findChildByName("photo_date"),
      s = this._window?.findChildByName("photo_roomname"),
      o = this._window?.findChildByName("buyButtonBg"),
      d = this._window?.findChildByName("delete_photo_button");
    (i != null && (i.visible = !1),
      s != null && (s.visible = !1),
      t && (t.visible = !e),
      d && (d.visible = e),
      r && (r.visible = e),
      o && (o.visible = e));
  }
  _r0b50fd3994e72e() {
    let e = !1;
    for (let r = 0; r < a._shotImages.length; r++) {
      let t = a._shotImages[r];
      t?.isEmpty === !1 && t.image != null && (this.drawImageToSlot(r, t), (e = !0));
    }
    return e;
  }
  drawImageToSlot(e, r) {
    let t = this._window?.findChildByName(`cameraSlot_${e}`);
    if (t == null || r.image == null) return;
    t.bitmap = new A(Math.max(1, t.width), Math.max(1, t.height), !1, 0);
    let i = (t.width - 2) / this._r0f857f6e29ac31,
      s = new Pe();
    (s.scale(i, i), (s.tx = 1), (s.ty = 1), t.bitmap.draw(r.image, s, null, null, null, !0));
  }
  findNextEmptySlotIndex() {
    for (let e = 0; e < a._shotImages.length; e++) if (a._shotImages[e]?.isEmpty !== !1) return e;
    return -1;
  }
  _r7ce8b5339de177(e = !1) {
    let r = a._shotImages[this.var_146] ?? null;
    if (e && r?.isEmpty === !1) return;
    ((a._shotImages[this.var_146] = null),
      (a._renderRoomMessages[this.var_146] = null),
      this.addToCurrentSlot(new A(320, 320, !1, 13816530), !0));
    let t = a._shotImages[this.var_146] ?? null;
    (this.var_257 != null && t?.image != null && (this.var_257.bitmap = t.image.clone()),
      this.setMode(!1));
  }
  addToCurrentSlot(e, r = !1, t = !1) {
    let i = new CameraSlotData();
    if (
      ((i.image = e),
      r ? (i.isEmpty = !0) : (i.setDate(new Date()), (i.isEmpty = !1)),
      ((!t && !r) || a._shotImages[this.var_146] == null) &&
        (a._shotImages[this.var_146] = i),
      this.drawImageToSlot(this.var_146, i),
      !r)
    ) {
      let s = this.findNextEmptySlotIndex();
      s >= 0
        ? this.setActiveSlot(s)
        : !a._r85ece167ddef05 &&
          !t &&
          (this.var_17?.windowManager?.alert(
            this.var_17?.localizations?.getLocalization(
              "camera.full.header",
              "camera.full.header",
            ) ?? "",
            this.var_17?.localizations?.getLocalization("camera.full.body", "camera.full.body") ??
              "",
            0,
            null,
          ),
          (a._r85ece167ddef05 = !0));
    }
  }
}
