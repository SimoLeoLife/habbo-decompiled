// Estratto da HabboAirLauncher.deobf.js, riga 147122.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/floorplaneditor/BCFloorPlanEditor.as
// Nome offuscato: _i47c35d9523844d

class a {
  constructor(e) {
    this._windowManager = e;
    ((this._r81ff317dd809f8 = new S3e(this)),
      this._windowManager?.communication != null &&
        ((this._r21570811df2433 = new class_3534(this._rb42cb61cf01165)),
        (this._rc382236ecc8eeb = new _i7bf684929835b9(this._r7a796d23c3c738)),
        (this._r2d2a6a3025eef7 = new class_2533(this._r07e11cc34e0825)),
        (this._re54087122d7a13 = new _i4ac32cf75005a5(this._r7c9f7c3649fea5)),
        (this._rda0ff5912c97ce = new class_2086(this._r954b3e8139214d)),
        (this.communication = new _i2c7b489ce44a85(this._r773ce30a57f0a5)),
        this._windowManager.communication._r2e106e2349a0b6(this._r21570811df2433),
        this._windowManager.communication._r2e106e2349a0b6(this._rda0ff5912c97ce),
        this._windowManager.communication._r2e106e2349a0b6(this._rc382236ecc8eeb),
        this._windowManager.communication._r2e106e2349a0b6(this._r2d2a6a3025eef7),
        this._windowManager.communication._r2e106e2349a0b6(this._re54087122d7a13),
        this._windowManager.communication._r2e106e2349a0b6(this.communication)),
      this._windowManager?.roomEngine?.events?.addEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._re8288fe6f9668a),
      this._windowManager?.registerUpdateReceiver(this, 0));
  }
  static {
    n(this, "BCFloorPlanEditor");
  }
  static PREVIEW_UPDATE_MS = 2e3;
  static WALL_HEIGHT_LIMIT = 16;
  _r21570811df2433 = null;
  _rc382236ecc8eeb = null;
  _r2d2a6a3025eef7 = null;
  _re54087122d7a13 = null;
  _rda0ff5912c97ce = null;
  communication = null;
  _r81ff317dd809f8;
  _r88c18c849ebd3b = null;
  _r86bd8f167e968b = null;
  _recc69d85bf283b = null;
  _r8a121c3f36e9a5 = null;
  _editorWindow = null;
  _rc45d7634cb8e48 = ["add_tile", "remove_tile", "increase_height", "decrease_height", "set_enter_tile"];
  _drawMode = this._rc45d7634cb8e48[0];
  _floorThickness = 0;
  _r60833824467646 = 0;
  _r08a2d0fa9f6f28 = 0;
  _ree16f1bb203e19 = 0;
  _recdc100766f0eb = null;
  _r28f856c1d3262c = !1;
  _fixedWallsHeight = -1;
  _r9d192d2f8f69b7 = !1;
  _rce14442f4c4af7 = !1;
  dispose() {
    this.disposed ||
      (this._r21570811df2433 != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this._r21570811df2433),
      this._rc382236ecc8eeb != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this._rc382236ecc8eeb),
      this._r2d2a6a3025eef7 != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this._r2d2a6a3025eef7),
      this._re54087122d7a13 != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this._re54087122d7a13),
      this._rda0ff5912c97ce != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this._rda0ff5912c97ce),
      this.communication != null &&
        this._windowManager?.communication?._r7668362bf55fdd(this.communication),
      this._windowManager?.roomEngine?.events?.removeEventListener?.(
        RoomEngineEvent.ROOM_DISPOSED,
        this._re8288fe6f9668a,
      ),
      this._windowManager?.removeUpdateReceiver(this),
      this._recdc100766f0eb != null &&
        (this._recdc100766f0eb.removeEventListener?.(DeBouncer.addEventListener, this._r35b0cf57c65de7),
        this._recdc100766f0eb.stop(),
        (this._recdc100766f0eb = null)),
      this._editorWindow != null &&
        (this._editorWindow.removeEventListener(sr.const_1081, this._r1571a71557945d),
        this._editorWindow.removeEventListener(sr.const_900, this._r1571a71557945d),
        this._editorWindow.dispose(),
        (this._editorWindow = null)),
      (this._r88c18c849ebd3b = null),
      (this._r86bd8f167e968b = null),
      (this._recc69d85bf283b = null),
      (this._windowManager = null));
  }
  get disposed() {
    return this._windowManager == null;
  }
  set visible(e) {
    if (this._editorWindow == null || this._editorWindow.disposed) {
      if (!e) return;
      this.createEditorWindow();
    }
    ((this._editorWindow.visible = e),
      e
        ? (this._windowManager?.communication?.connection?.send(new _idaee125ca566cc()),
          this._windowManager?.communication?.connection?.send(new _i56b3ff5fd5bb97()),
          this.updateThicknessSelection(),
          this.centerScrollableViews(),
          this.updateWallHeight(this._fixedWallsHeight))
        : this._r86bd8f167e968b != null && (this._r86bd8f167e968b._r4bc023c9ade89a = !1));
  }
  get visible() {
    return this._editorWindow?.visible ?? !1;
  }
  update(e) {
    if (this._editorWindow != null && this._drawMode.length > 0)
      for (let r of this._rc45d7634cb8e48) {
        let t = this._editorWindow.findChildByName(r);
        t != null &&
          (this._drawMode === r
            ? (t.state |= class_1948.const_92)
            : (t.state &= ~class_1948.const_92));
      }
    ((this._r08a2d0fa9f6f28 += e),
      this._r08a2d0fa9f6f28 > a.PREVIEW_UPDATE_MS &&
        this._r88c18c849ebd3b != null &&
        (this._r88c18c849ebd3b.updatePreview(), (this._r08a2d0fa9f6f28 = 0)));
  }
  updateColorSliderTrack(e) {
    if (this._editorWindow == null || this._r86bd8f167e968b == null) return;
    let r = this._editorWindow.findChildByName("tile_height_colormap"),
      t = this._editorWindow.findChildByName("tile_height_slider_track");
    r != null && t != null && (t.x = e * (Number(r.width) / this._r86bd8f167e968b._r4c29978b29b5af.length));
  }
  updateWallHeight(e) {
    if (this._editorWindow == null) return;
    let r = this._editorWindow.findChildByName("walls_fixed_height_enabled_checkbox");
    if (e === -1) {
      (r?.unselect(), this.enableWallHeightControls(!1));
      return;
    }
    (r?.select(), this.enableWallHeightControls(!0));
    let t = this._editorWindow.findChildByName("wall_height_number"),
      i = this._editorWindow.findChildByName("wall_height_slider"),
      s = this._editorWindow.findChildByName("wall_height_slider_track");
    (t != null && (t.caption = String(e + 1)),
      i != null && s != null && (s.x = e * (Number(i.width) / a.WALL_HEIGHT_LIMIT)));
  }
  updatePreviewBitmap(e) {
    let r = this._editorWindow?.findChildByName("preview_bitmap");
    r != null && (r.bitmap = e);
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("BCFloorPlanEditor has been disposed.");
    return this._windowManager;
  }
  get heightMapBitmapElement() {
    let e = this._editorWindow?.findChildByName("heightmap_bitmap");
    if (e == null) throw new Error("Height map bitmap element is not available.");
    return e;
  }
  get heightMapMouseCapturer() {
    let e = this._editorWindow?.findChildByName("mouse_capturer");
    if (e == null) throw new Error("Height map mouse capturer is not available.");
    return e;
  }
  get _r223f1e7a35055c() {
    return this._r81ff317dd809f8;
  }
  get _r4c0e57295302c6() {
    return this._rc45d7634cb8e48;
  }
  get drawMode() {
    return this._drawMode;
  }
  get _r192d162944e73a() {
    if (this._r86bd8f167e968b == null) throw new Error("HeightMapEditor is not initialized.");
    return this._r86bd8f167e968b;
  }
  get _r02b8fd34e1e5ba() {
    return this._r28f856c1d3262c;
  }
  get lastReceivedFloorPlan() {
    return this._r8a121c3f36e9a5?.getParser().text ?? "";
  }
  get _r2cacaaa4b8c0dc() {
    return this._floorThickness;
  }
  get _rdbce713bddeb2b() {
    return this._r60833824467646;
  }
  get _r575669f0744943() {
    return this._ree16f1bb203e19;
  }
  _rc271721bfd9f89(e) {
    let r = this._windowManager?.assets.getAssetByName(e)?.content;
    return r instanceof A ? r : null;
  }
  tile_preview_entry(e) {
    let r = this._rc271721bfd9f89(e);
    if (r == null) throw new Error(`Missing floor plan editor bitmap asset: ${e}`);
    return r;
  }
  static getThicknessSettingBySelectionIndex(e) {
    switch (e) {
      case 0:
        return -2;
      case 1:
        return -1;
      case 3:
        return 1;
      default:
        return 0;
    }
  }
  _r954b3e8139214d = n((e) => {
    ((this._ree16f1bb203e19 = e.getParser().secondsLeft),
      this._recdc100766f0eb == null &&
        ((this._recdc100766f0eb = new _i05394ecc0c0c4d(1e4)),
        this._recdc100766f0eb.addEventListener(DeBouncer.addEventListener, this._r35b0cf57c65de7),
        this._recdc100766f0eb.start()));
  }, "_r954b3e8139214d");
  _r35b0cf57c65de7 = n((e) => {
    ((this._ree16f1bb203e19 -= 10),
      this._editorWindow?.visible &&
        (this._ree16f1bb203e19 > 0 ||
        this._windowManager?.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE)
          ? this._editorWindow.findChildByName("save")?.enable()
          : this._editorWindow.findChildByName("save")?.disable()));
  }, "_r35b0cf57c65de7");
  createEditorWindow() {
    let e = this._r1a60a0451afb54("floor_plan_editor_bc_xml");
    if (((this._editorWindow = this._windowManager.buildFromXML(e, 1)), this._editorWindow == null))
      throw new Error("Failed to build floor plan editor window.");
    (this._editorWindow.enableLookupCache?.(),
      (this._editorWindow.procedure = this._rd26545a5b422a8),
      (this._editorWindow.findChildByName("tile_height_colormap").procedure = this._r54a42c098a6aa9),
      (this._editorWindow.findChildByName("wall_height_slider").procedure = this._r17c5449044a256),
      this._editorWindow.addEventListener(sr.const_1081, this._r1571a71557945d),
      this._editorWindow.addEventListener(sr.const_900, this._r1571a71557945d),
      this._editorWindow.center(),
      (this._r88c18c849ebd3b = new D3e(this)),
      (this._r86bd8f167e968b = new L3e(this)),
      (this._recc69d85bf283b = new ImportExportDialog(this, this._r1a60a0451afb54("floor_plan_export_import_xml"))),
      this._r88c18c849ebd3b.updatePreview(),
      this._r86bd8f167e968b._rf8367813562f1c(),
      this.createTileHeightColorMap(this._r86bd8f167e968b._r4c29978b29b5af),
      this._r6c55167e7da492("add_tile"),
      !this._windowManager?.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE) &&
        this._ree16f1bb203e19 <= 0 &&
        this._editorWindow.findChildByName("save")?.disable());
  }
  get isWallHeightSettingSelected() {
    return this._editorWindow?.findChildByName("walls_fixed_height_enabled_checkbox")?.isSelected ?? !1;
  }
  _rd26545a5b422a8 = n((e, r) => {
    if (!(e.type !== u.CLICK || this._editorWindow == null)) {
      switch (r.name) {
        case "header_button_close":
        case "cancel":
          this.visible = !1;
          break;
        case "refresh":
          this._r88c18c849ebd3b?.updatePreview();
          break;
        case "save":
          ((this._floorThickness =
            this._editorWindow.findChildByName("floor_thickness_drop")?.selection ?? 0),
            (this._r60833824467646 =
              this._editorWindow.findChildByName("wall_thickness_drop")?.selection ?? 0),
            this._windowManager?.communication?.connection?.send(
              new _ib4ef788e38c114(
                this._r81ff317dd809f8.getData(),
                this._r81ff317dd809f8.entryPoint.x,
                this._r81ff317dd809f8.entryPoint.y,
                this._r81ff317dd809f8._r1a961bea1ff44e,
                a.getThicknessSettingBySelectionIndex(this._r60833824467646),
                a.getThicknessSettingBySelectionIndex(this._floorThickness),
                this.isWallHeightSettingSelected ? this._fixedWallsHeight : -1,
              ),
            ));
          break;
        case "reload":
          (this._r81ff317dd809f8._rb42cb61cf01165(this._r8a121c3f36e9a5),
            this._r88c18c849ebd3b?.updatePreview(),
            this._r86bd8f167e968b?._rf8367813562f1c(),
            this._windowManager?.communication?.connection?.send(new _i56b3ff5fd5bb97()),
            this._windowManager?.communication?.connection?.send(new _idaee125ca566cc()));
          break;
        case "import_export":
          this._recc69d85bf283b != null && (this._recc69d85bf283b.visible = !this._recc69d85bf283b.visible);
          break;
        case "enterdirection_left":
          ((this._r81ff317dd809f8._r1a961bea1ff44e += 1), this.updateEntryDirectionAvatar());
          break;
        case "enterdirection_right":
          ((this._r81ff317dd809f8._r1a961bea1ff44e -= 1), this.updateEntryDirectionAvatar());
          break;
        case "zoom":
          this._r86bd8f167e968b != null &&
            ((this._r86bd8f167e968b._r577ea1b502f801 = this._r86bd8f167e968b._r577ea1b502f801 === 1 ? 2 : 1),
            this._r86bd8f167e968b._rf8367813562f1c());
          break;
        case "walls_fixed_height_enabled_checkbox":
          (this.enableWallHeightControls(this.isWallHeightSettingSelected),
            this.isWallHeightSettingSelected &&
              this._fixedWallsHeight === -1 &&
              (this._fixedWallsHeight =
                Number.parseInt(
                  this._editorWindow.findChildByName("wall_height_number")?.caption ?? "1",
                  10,
                ) - 1));
          break;
      }
      this._rc45d7634cb8e48.includes(r.name) && this._r6c55167e7da492(r.name);
    }
  }, "_rd26545a5b422a8");
  _r1571a71557945d = n((e) => {
    switch (e.type) {
      case sr.const_1081:
        switch (e.keyCode) {
          case Fi._r2c5e95590b2eb7:
            this._r86bd8f167e968b != null && (this._r86bd8f167e968b._ra1800723b87249 += 1);
            break;
          case Fi._r35b1e666c74666:
            this._r86bd8f167e968b != null && (this._r86bd8f167e968b._ra1800723b87249 += 1);
            break;
          case Fi._r85aa36272f6f88:
            this._r86bd8f167e968b != null && (this._r86bd8f167e968b._r4bc023c9ade89a = !0);
            break;
        }
        break;
      case sr.const_900:
        e.keyCode === Fi._r85aa36272f6f88 &&
          this._r86bd8f167e968b != null &&
          (this._r86bd8f167e968b._r4bc023c9ade89a = !1);
        break;
    }
  }, "_r1571a71557945d");
  _r6c55167e7da492(e) {
    this._drawMode = e;
  }
  _r54a42c098a6aa9 = n((e, r) => {
    if (!(this._editorWindow == null || this._r86bd8f167e968b == null)) {
      if (e.type === u.DOWN) {
        this._r9d192d2f8f69b7 = !0;
        return;
      }
      if (e.type === u.UP || e.type === u.UP_OUTSIDE) {
        this._r9d192d2f8f69b7 = !1;
        return;
      }
      if (e.type === u.CLICK || (this._r9d192d2f8f69b7 && e.type === u.MOVE)) {
        let t = e,
          i = this._editorWindow.findChildByName("tile_height_colormap"),
          s =
            ((Number(t.localX) / Number(i?.width ?? 0)) * this._r86bd8f167e968b._r4c29978b29b5af.length) >>>
            0;
        (this.updateColorSliderTrack(s), (this._r86bd8f167e968b._ra1800723b87249 = s));
      }
    }
  }, "_r54a42c098a6aa9");
  _r17c5449044a256 = n((e, r) => {
    if (this._editorWindow != null) {
      if (e.type === u.DOWN) this._rce14442f4c4af7 = !0;
      else if (e.type === u.UP || e.type === u.UP_OUTSIDE) this._rce14442f4c4af7 = !1;
      else if (e.type === u.CLICK || (this._rce14442f4c4af7 && e.type === u.MOVE)) {
        let t = e,
          i = this._editorWindow.findChildByName("wall_height_slider"),
          s = ((Number(t.localX) / Number(i?.width ?? 0)) * a.WALL_HEIGHT_LIMIT) >>> 0;
        (this.updateWallHeight(s), (this._fixedWallsHeight = s));
      }
      e.stopPropagation();
    }
  }, "_r17c5449044a256");
  enableWallHeightControls(e) {
    if (this._editorWindow != null)
      for (let r of [
        "wall_height_text",
        "wall_height_number",
        "wall_height_slider",
        "wall_height_slider_track",
      ]) {
        let t = this._editorWindow.findChildByName(r);
        t != null && (e ? (t.enable(), (t.blend = 1)) : (t.disable(), (t.blend = 0.6)));
      }
  }
  _rb42cb61cf01165 = n((e) => {
    ((this._r8a121c3f36e9a5 = e),
      this._r81ff317dd809f8._rb42cb61cf01165(e),
      (this._fixedWallsHeight = e.getParser().fixedWallsHeight),
      this._r88c18c849ebd3b?.updatePreview(),
      this._r86bd8f167e968b?._rf8367813562f1c(),
      this._editorWindow != null && this.updateWallHeight(this._fixedWallsHeight));
  }, "_rb42cb61cf01165");
  _r7a796d23c3c738 = n((e) => {
    if (this._editorWindow == null) return;
    let r = e.getParser();
    ((this._r81ff317dd809f8.entryPoint = new E(r.x, r.y)),
      (this._r81ff317dd809f8._r1a961bea1ff44e = r.dir),
      this._r86bd8f167e968b?._rf8367813562f1c(),
      this.updateEntryDirectionAvatar());
  }, "_r7a796d23c3c738");
  _r07e11cc34e0825 = n((e) => {
    (this._r81ff317dd809f8._r07e11cc34e0825(e), this._r86bd8f167e968b?._rf8367813562f1c());
  }, "_r07e11cc34e0825");
  _r7c9f7c3649fea5 = n((e) => {
    let r = e.getParser();
    ((this._floorThickness = this._re12d9d4535bc73(r._r0337760c226f75)),
      (this._r60833824467646 = this._re12d9d4535bc73(r._rd42fde7a8fe0db)),
      this.updateThicknessSelection());
  }, "_r7c9f7c3649fea5");
  _r773ce30a57f0a5 = n((e) => {
    this._r28f856c1d3262c = e.getParser().isPerkAllowed(class_2156.BUILDER_AT_WORK);
  }, "_r773ce30a57f0a5");
  createTileHeightColorMap(e) {
    if (this._editorWindow == null) return;
    let r = this._editorWindow.findChildByName("tile_height_colormap");
    if (r == null) return;
    r.bitmap = new A(r.width, r.height, !1, 0);
    let t = new D(0, 0, 1, r.height);
    for (let i = 0; i < r.width; i += 1) {
      let s = Math.min(e.length - 1, Math.trunc((Number(i) / r.width) * e.length)),
        o = e[s] ?? [0, 0, 0],
        d =
          ((Math.trunc(255 * o[0]) & 255) << 16) +
          ((Math.trunc(255 * o[1]) & 255) << 8) +
          (Math.trunc(255 * o[2]) & 255);
      ((t.x = i), r.bitmap.fillRect(t, d));
    }
  }
  updateEntryDirectionAvatar() {
    if (this._editorWindow == null) return;
    let r = this._editorWindow.findChildByName("enterdirection_ghost_avatar")?.widget;
    r != null && (r.direction = this._r81ff317dd809f8._r1a961bea1ff44e);
  }
  _re12d9d4535bc73(e) {
    switch (e) {
      case 0.25:
        return 0;
      case 0.5:
        return 1;
      case 2:
        return 3;
      default:
        return 2;
    }
  }
  updateThicknessSelection() {
    if (this._editorWindow == null) return;
    let e = this._editorWindow.findChildByName("wall_thickness_drop"),
      r = this._editorWindow.findChildByName("floor_thickness_drop");
    (e != null && (e.selection = this._r60833824467646), r != null && (r.selection = this._floorThickness));
  }
  centerScrollableViews() {
    if (this._editorWindow == null) return;
    let e = this._editorWindow.findChildByName("heightmap_scroll_horizontal"),
      r = this._editorWindow.findChildByName("heightmap_scroll_vertical"),
      t = this._editorWindow.findChildByName("preview_scroll_horizontal"),
      i = this._editorWindow.findChildByName("preview_scroll_vertical");
    (e != null && (e.scrollH = 0.5),
      r != null && (r.var_46 = 0.5),
      t != null && (t.scrollH = 0.5),
      i != null && (i.var_46 = 0.5));
  }
  _r1a60a0451afb54(e) {
    let r = this._windowManager?.assets.getAssetByName(e)?.content;
    if (typeof r == "string") return new rr(r);
    if (r != null) return r;
    throw new Error(`Missing floor plan editor XML asset: ${e}`);
  }
  _re8288fe6f9668a = n((e) => {
    this.visible = !1;
  }, "_re8288fe6f9668a");
}
