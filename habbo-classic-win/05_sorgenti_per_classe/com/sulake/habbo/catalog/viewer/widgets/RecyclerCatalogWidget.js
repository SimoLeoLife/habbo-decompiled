// Extracted from HabboAirLauncher.deobf.js, line 194188.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/RecyclerCatalogWidget.as
// Obfuscated name: _id3510786569e02

class extends CatalogWidget {
  static {
    n(this, "RecyclerCatalogWidget");
  }
  _r60cd14afbc8692 = null;
  _r9ede97e2f9fff6 = new Map();
  _r38e8aaaa82e4db = null;
  _r296a04323547dc = null;
  get recycler() {
    return this.catalog?.viewer() ?? null;
  }
  get catalog() {
    return this.page?.viewer.catalog ?? null;
  }
  dispose() {
    (this._r60cd14afbc8692?.dispose(),
      (this._r60cd14afbc8692 = null),
      this.recycler?.cancel(),
      this._r38e8aaaa82e4db?.dispose(),
      (this._r38e8aaaa82e4db = null),
      this.stopTimer(),
      super.dispose());
  }
  init() {
    return !super.init() ||
      (this._rd7318259311b4b(CatalogWidgetEnum.RECYCLER),
      this.renderSlotGraphics(),
      this.renderDucketCost(),
      this.window?.findChildByName("recycler_recycle")?.addEventListener(u.CLICK, this._r6be190f78affdd),
      this.window?.findChildByName("abort_region")?.addEventListener(u.CLICK, this._rfdad2f0a01f556),
      this.patFrankButton?.addEventListener(u.CLICK, this.onPatFrank),
      (this.abortButtonVisible = !1),
      (this._r38e8aaaa82e4db = new X5e(
        this.window?.findChildByName("pointer_arrow"),
        this.window?.parent?.findChildByName("recycle_machine"),
        this._rdd941efde00a4d,
      )),
      this.recycler == null)
      ? !1
      : (this.recycler.init(this), !0);
  }
  updateUI() {
    let e = this.window;
    for (; e != null;) ((e.procedure = this.onMainContainerEvent), (e.mouseThreshold = 0), (e = e.parent));
    let r = this.window?.parent?.findChildByName(mf.const_234);
    (r != null && (r.caption = "${recycler.info.ready}"),
      this.disabledBorder != null &&
        this.recycler != null &&
        (this.disabledBorder.visible = this.recycler._r4e19bea37092ca),
      this.updateRecycleButton());
  }
  updateSlots() {
    if (!(this.window == null || this.recycler == null)) {
      this._r9ede97e2f9fff6.clear();
      for (let e = 0; e < this.recycler._r6d8ad6fbc67842; e++) {
        let r = this.window.findChildByName(`slot_img_${e + 1}`);
        if (r == null) continue;
        let t = this.recycler.numberOfSlots(e);
        if (t == null) {
          r.bitmap = new A(1, 1, !0, 16777215);
          continue;
        }
        let i = this.getFurniImageResult(t);
        i?.data != null ? this.updateImage(i.data, r) : i != null && this._r9ede97e2f9fff6.set(i.id, e);
      }
    }
  }
  updateRecycleButton() {
    if (this.disposed || this.window == null || this.recycler == null) return;
    let e = this.window.findChildByName("recycler_recycle");
    if (e == null) return;
    let r = this.recycler._rf838572cd63994();
    (r > 0
      ? (e.caption =
          this.catalog?.localization?.getLocalizationWithParams("catalog.recycler.button.wait", "", "s", String(r)) ??
          "")
      : (e.caption = "${catalog.recycler.button.recycle}"),
      this.recycler.isReadyToRecycle() && !(this._r38e8aaaa82e4db?.isBusy() ?? !1) && r <= 0
        ? e.enable()
        : e.disable(),
      this._r296a04323547dc == null && r > 0 && this.startTimer());
  }
  imageReady(e, r) {
    let t = this._r9ede97e2f9fff6.get(e);
    if (t == null) return;
    this._r9ede97e2f9fff6.delete(e);
    let i = this.window?.findChildByName(`slot_img_${t + 1}`);
    i != null && this.updateImage(r, i);
  }
  imageFailed(e) {
    this._r9ede97e2f9fff6.delete(e);
  }
  renderSlotGraphics() {
    let e = this.getAssetBitmapData("ctlg_recycler_slot_bg");
    if (!(e == null || this.recycler == null)) {
      for (let r = 1; r <= this.recycler._r6d8ad6fbc67842; r++) {
        let t = this.window?.findChildByName(`slot_bg_${r}`);
        t != null && ((t.bitmap = e.clone()), (t.procedure = this.onSlotMouseEvent), (t.mouseThreshold = 0));
      }
      for (let r = 1; r <= this.recycler._r6d8ad6fbc67842; r++) {
        let t = this.window?.findChildByName(`slot_img_${r}`);
        t != null && ((t.bitmap = e.clone()), (t.procedure = this.onSlotMouseEvent), (t.mouseThreshold = 0));
      }
    }
  }
  renderDucketCost() {
    if (this.window == null || this.recycler == null) return;
    let e = this.window.findChildByName("ducket_cost"),
      r = this.window.findChildByName("ducket_icon"),
      t = this.recycler.ducketCost;
    if (!(e == null || r == null)) {
      if (t === 0) {
        ((e.visible = !1), (r.visible = !1));
        return;
      }
      ((e.visible = !0), (r.visible = !0), (e.text = String(t)));
    }
  }
  updateImage(e, r) {
    let t = new A(r.width, r.height, !0, 16777215);
    t.fillRect(t.rect, 16777215);
    let i = new E((r.width - e.width) / 2, (r.height - e.height) / 2);
    (t.copyPixels(e, e.rect, i, null, null, !0), (r.bitmap = t), e.dispose());
  }
  getFurniImageResult(e) {
    return this.page?.viewer.roomEngine == null
      ? null
      : e.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
        ? this.page.viewer.roomEngine._r65a31a885a1252(e.typeId, this)
        : e.category === RoomObjectCategoryEnum.const_909
          ? this.page.viewer.roomEngine.getWallItemDataByName(e.typeId, this, e._r7cfdb0f5b96474)
          : null;
  }
  get easterEggMode() {
    if (this.recycler == null || this.page?.viewer.roomEngine == null) return !1;
    for (let e = 0; e < this.recycler._r6d8ad6fbc67842; e++) {
      let r = this.recycler.numberOfSlots(e);
      if (
        r != null &&
        this.page.viewer.roomEngine._redc62c3bf823c2(r.typeId) === "wf_act_reset_timers"
      )
        return !0;
    }
    return !1;
  }
  startTimer() {
    ((this._r296a04323547dc = new UnkEventDispatcherWrapperSubclass_05394e(1e3)),
      this._r296a04323547dc.addEventListener(DeBouncer.addEventListener, this._re072be5b77c307),
      this._r296a04323547dc.start());
  }
  stopTimer() {
    this._r296a04323547dc != null &&
      (this._r296a04323547dc.stop(),
      this._r296a04323547dc.removeEventListener(DeBouncer.addEventListener, this._re072be5b77c307),
      (this._r296a04323547dc = null));
  }
  _re072be5b77c307 = n((e) => {
    (this.updateRecycleButton(), (this.recycler?._rf838572cd63994() ?? 0) <= 0 && this.stopTimer());
  }, "_re072be5b77c307");
  onPatFrank = n((e) => {
    Q5e._r408c585bb43143(this.emoji2BitmapTemplate).start(this.disabledBorder);
  }, "onPatFrank");
  onMainContainerEvent = n((e, r) => {
    if (this.page?.viewer == null) return;
    let t = this.page.viewer.roomEngine;
    if (t == null) return;
    let i = t._r5dfc2a6a8b7c46(t.activeRoomId);
    switch (e.type) {
      case u.OUT:
      case u.MOVE:
        this._r60cd14afbc8692?.onMainContainerEvent(e, r, i);
        break;
      case u.OVER:
        this._r60cd14afbc8692 == null &&
          ((this._r60cd14afbc8692 = new z5e()),
          (this._r60cd14afbc8692.mainContainer = this.window),
          (this._r60cd14afbc8692.roomEngine = t));
        break;
      default:
        break;
    }
    this._r60cd14afbc8692 != null &&
      this._r60cd14afbc8692.state &&
      t._r15c71442afd233() &&
      t._rb4208639153c2f(!1);
  }, "onMainContainerEvent");
  onSlotMouseEvent = n((e, r) => {
    let t = this.page?.viewer.roomEngine,
      i = this.recycler;
    if (t == null || i == null) return;
    let s = t._r5dfc2a6a8b7c46(t.activeRoomId),
      o = e.window;
    if (e.type === u.UP && o != null && o.name.indexOf("slot_") === 0) {
      let d = Number(o.name.charAt(o.name.length - 1)) - 1;
      if (s != null) {
        if (s.operation !== RoomObjectOperationEnum.OBJECT_PLACE) {
          this.catalog?.windowManager.alert(
            "${generic.alert.title}",
            "${catalog.alert.recycler.inventory}",
            0,
            this._r035155686c0ed8,
          );
          return;
        }
        i.placeObjectAtSlot(d, s.id, s.category, s.typeId, s._r669a9820d77b11);
      } else i.releaseSlot(d);
      (t._r3840271e334f01(), this._r60cd14afbc8692?.resetIcon());
      return;
    }
    e.type === u.MOVE && this.onMainContainerEvent(e, r);
  }, "onSlotMouseEvent");
  _r6be190f78affdd = n((e) => {
    if (this.recycler != null) {
      if (!this.recycler._ra9cd267b63b6f4()) {
        this.catalog?.windowManager.alert(
          "${generic.alert.title}",
          "${catalog.alert.notenough.activitypoints.title.0}",
          0,
          this._r035155686c0ed8,
        );
        return;
      }
      (this._r38e8aaaa82e4db?.start(this.easterEggMode),
        this.updateRecycleButton(),
        (this.abortButtonVisible = !0));
    }
  }, "_r6be190f78affdd");
  _rfdad2f0a01f556 = n((e) => {
    ((this.abortButtonVisible = !1),
      this._r38e8aaaa82e4db?.stop(),
      this.updateRecycleButton(),
      globalThis.setTimeout(() => this._rbc9a3e3bcbfc8a(), 650));
  }, "_rfdad2f0a01f556");
  _rdd941efde00a4d = n(() => {
    (this.recycler != null &&
      (this.recycler._r5d3a9525143232(), this.recycler._re94affc56360a7(_ia411d8d8194a3a() + this.recycler.timeout * 1e3)),
      this.updateRecycleButton(),
      globalThis.setTimeout(() => this._rbc9a3e3bcbfc8a(), 1e3),
      (this.abortButtonVisible = !1));
  }, "_rdd941efde00a4d");
  _rbc9a3e3bcbfc8a() {
    this._r38e8aaaa82e4db?.reset();
  }
  set abortButtonVisible(e) {
    let r = this.window?.findChildByName("abort_region");
    r != null && (r.visible = e);
  }
  get disabledBorder() {
    return this.window?.findChildByName("disabled_border");
  }
  get patFrankButton() {
    return this.window?.findChildByName("pat_frank_btn");
  }
  get emoji2BitmapTemplate() {
    return this.window?.findChildByName("emoji_2_template");
  }
  _r035155686c0ed8 = n((e, r) => {
    e?.dispose();
  }, "_r035155686c0ed8");
}
