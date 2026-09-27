// Extracted from HabboAirLauncher.deobf.js, line 270380.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/seasonalcalendar/Calendar.as
// Obfuscated name: _i9b99c9aac2cb36

class a {
  constructor(e, r) {
    this._questEngine = e;
    this.var_33 = r;
  }
  static {
    n(this, "Calendar");
  }
  static BG_IMAGE_PREFIX = "background_";
  static ENTITY_IMAGE_PREFIX = "day";
  static ENTITY_IMAGE_UNCOMPLETE_POSTFIX = "_uncomplete";
  static ENTITY_IMAGE_COMPLETED_POSTFIX = "_completed";
  static SHOW_FUTURE_INACTIVE_ENTITIES_COUNT = 2;
  static const_664 = 3;
  static ENTITY_SPACING = 80;
  static ENTITIES_LEFT_MARGIN = 37;
  static const_1312 = 7;
  static DAILY_REFRESH_DELAY_MINUTES = 5;
  static FLASH_PULSE_LENGHT_IN_MS = 2e3;
  static FLASH_MAX_BRIGHTNESS = 100;
  var_1614 = [];
  _ra097b01b5919a4 = null;
  _raeb19b4ef2b66b = null;
  _r5f1bd30efdf2c6 = null;
  _r6963cacffb04ec = null;
  _r427615427f34b9 = "";
  _rf337362e063542 = null;
  _entityWindows = null;
  _r7b1ffbb1f0f564 = null;
  scrollToIndex = null;
  _left_arrow = null;
  var_324 = null;
  var_4297 = null;
  _rccd04624390ad8 = null;
  var_80 = -1;
  var_661 = -1;
  _rb9fffcb9325238 = -1;
  _maximumEntities = 42;
  _rab4d8866bb1014 = null;
  _r16d0c530228bda = 0;
  _r946b6bc836c617 = 0;
  _r51c5277d0ae45a = 0;
  var_1269 = -1;
  _rcc6663caa508f2 = 0;
  var_3501 = -1;
  _rb10bc8a9e9fae7 = !1;
  var_392 = !1;
  onDateRefreshTimer = null;
  _ra9f6cd58c2ed0b = -1;
  dispose() {
    this.disposed ||
      (this._questEngine?.removeUpdateReceiver(this),
      this._graphicEntityCache(),
      this._rf337362e063542?.dispose(),
      (this._rf337362e063542 = null),
      this.scrollToIndex?.dispose(),
      (this.scrollToIndex = null),
      this._left_arrow?.dispose(),
      (this._left_arrow = null),
      this._rab4d8866bb1014?.stop(),
      (this._rab4d8866bb1014 = null),
      this.onDateRefreshTimer?.stop(),
      (this.onDateRefreshTimer = null),
      (this._ra097b01b5919a4 = null),
      (this._raeb19b4ef2b66b = null),
      (this._r7b1ffbb1f0f564 = null),
      this._r5f1bd30efdf2c6?.dispose(),
      (this._r5f1bd30efdf2c6 = null),
      (this._r6963cacffb04ec = null),
      (this.var_324 = null),
      (this.var_4297 = null),
      (this._rccd04624390ad8 = null),
      (this._questEngine = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  onQuests(e) {
    let r = new Date();
    this._ra9f6cd58c2ed0b = r.getDate();
    let t = this.var_661;
    ((this.var_1614 = []), (this._rb9fffcb9325238 = 0));
    for (let i of e)
      this._questEngine?.isSeasonalQuest(i) &&
        (this.var_1614.push(i),
        this._rb9fffcb9325238 < i._highestAvailableQuestIndex - 1 && (this._rb9fffcb9325238 = i._highestAvailableQuestIndex - 1));
    (this.var_1614.sort((i, s) => i._highestAvailableQuestIndex - s._highestAvailableQuestIndex),
      (this._maximumEntities =
        this._questEngine?.configuration?.getInteger(
          "seasonalQuestCalendar.maximum.entities",
          this._maximumEntities,
        ) ?? this._maximumEntities),
      (this.var_661 = Math.min(
        this._maximumEntities,
        this._rb9fffcb9325238 + 1 + a.SHOW_FUTURE_INACTIVE_ENTITIES_COUNT,
      )),
      t !== -1 && this.var_661 > t && this.prepareImages());
  }
  prepare(e) {
    ((this._r427615427f34b9 = this.var_33.getCalendarImageGalleryHost()),
      (this.var_324 = e.findChildByName("calendar_cont")),
      (this._rccd04624390ad8 = e.findChildByName("background_slice")),
      (this.var_4297 = e.findChildByName("entity_template")),
      this.var_4297 != null && (this.var_4297.visible = !1),
      (this._rf337362e063542 = new UnkClass_6a5143()),
      (this.scrollToIndex = new DI(
        this._r8fb3f7aefefa42(),
        e.findChildByName("button_left"),
        DI._r721d788422e741,
        this._r5984d20a140a68,
      )),
      (this._left_arrow = new DI(
        this._r8fb3f7aefefa42(),
        e.findChildByName("button_right"),
        DI.scrollArrowProcedure,
        this._r5984d20a140a68,
      )));
    let r = e.findChildByName("stripe_mask_left");
    (r != null && (r.bitmap = this._r8fb3f7aefefa42().getAssetByName("stripe_mask_L")?.content ?? null),
      (r = e.findChildByName("stripe_mask_right")),
      r != null && (r.bitmap = this._r8fb3f7aefefa42().getAssetByName("stripe_mask_R")?.content ?? null),
      this.var_80 === -1 && this._r506c277abd736f(this.var_33._r7568522c4b24c4),
      this.prepareImages(),
      (this._ra9f6cd58c2ed0b = new Date().getDate()),
      (this.onDateRefreshTimer = new UnkEventDispatcherWrapperSubclass_05394e(1e3 * 60 * a.DAILY_REFRESH_DELAY_MINUTES)),
      this.onDateRefreshTimer.addEventListener(DeBouncer.addEventListener, this.TimerEvent),
      this.onDateRefreshTimer.start(),
      this.TimerEvent(new DeBouncer(DeBouncer.addEventListener)),
      this._questEngine?.registerUpdateReceiver(this, 1),
      (this._rab4d8866bb1014 = new UnkEventDispatcherWrapperSubclass_05394e(10, 10)));
  }
  close() {
    (this._graphicEntityCache(), this._rf337362e063542?._r5ea14906576318([]));
  }
  refresh() {
    for (let e of this.var_1614) {
      let r = e._highestAvailableQuestIndex - 1,
        t = this._r7b1ffbb1f0f564?.[r] ?? CalendarEntityStateEnums.const_418,
        i = e.completedCampaign ? CalendarEntityStateEnums.COMPLETED : t;
      i !== t &&
        (this.retrieveEntityImageAsset(e._highestAvailableQuestIndex, i),
        this.updateEntityIndicatorPanel(r, !1),
        i === CalendarEntityStateEnums.COMPLETED && this.var_1269 === r && this.stopFlashing());
    }
    (this.initializeBackgroundRendererIfAllImagesInCache(), this.initializeEntitiesIfAllImagesInCache());
  }
  _r506c277abd736f(e) {
    this._r6ff687bdf0ca6a(Math.max(0, Math.min(e - a.const_664, this._refd361fd065ece)));
  }
  update(e) {
    if (this._entityWindows != null && this.var_1269 !== -1 && this._r7b1ffbb1f0f564 != null) {
      let r = CalendarEntityStateEnums.INDICATOR_COLOR[this._r7b1ffbb1f0f564[this.var_1269] ?? CalendarEntityStateEnums.ACTIVE] ?? 0,
        t = (this._rcc6663caa508f2 % a.FLASH_PULSE_LENGHT_IN_MS) / a.FLASH_PULSE_LENGHT_IN_MS;
      t = Math.abs(2 * (t > 0.5 ? t - 1 : t));
      let i = this._entityWindows[this.var_1269]?.findChildByName("entity_indicator");
      if (i != null) {
        let s = t * a.FLASH_MAX_BRIGHTNESS;
        (this.var_3501 === this.var_1269 && (s += 20), (i.color = a.adjustBrightness(r, s)));
      }
      this._rcc6663caa508f2 += e;
    }
    this._rab4d8866bb1014 != null &&
      (this._rb10bc8a9e9fae7 &&
        !this._rab4d8866bb1014.running &&
        this._r16d0c530228bda === 0 &&
        this.var_80 > 0 &&
        !this.scrollToIndex?.isInactive() &&
        this._r6ff687bdf0ca6a(this.var_80 - 1),
      this.var_392 &&
        !this._rab4d8866bb1014.running &&
        this._r16d0c530228bda === 0 &&
        this.var_80 < this._rb9fffcb9325238 &&
        !this._left_arrow?.isInactive() &&
        this._r6ff687bdf0ca6a(this.var_80 + 1));
  }
  prepareImages() {
    let e = Math.ceil(this.var_661 / a.const_1312) + 1;
    ((this._r6963cacffb04ec = new Array(e)),
      (this._ra097b01b5919a4 = new Array(e).fill(null)),
      (this._raeb19b4ef2b66b = new Array(this.var_661).fill(null)),
      (this._r7b1ffbb1f0f564 = new Array(this.var_661)));
    let r = [];
    for (let t = 0; t < e; t++) r.push(new A(640, 320, !1, 16777215));
    this._rf337362e063542?._r5ea14906576318(r);
    for (let t = this._rb3d4f1176c4a6f; t <= this._r07ad6e71d4c5dd; t++) this._r09356af8a4fbf4(t);
    (this._r5f1bd30efdf2c6?.dispose(), (this._r5f1bd30efdf2c6 = new B()));
    for (let t of this.var_1614)
      if (t._highestAvailableQuestIndex <= this._maximumEntities) {
        let i = t.completedCampaign ? CalendarEntityStateEnums.COMPLETED : CalendarEntityStateEnums.ACTIVE,
          s =
            t._highestAvailableQuestIndex - 1 >= this._rd2f21ef80ed3ca &&
            t._highestAvailableQuestIndex - 1 <= this._r9514ada7f967c3;
        this.retrieveEntityImageAsset(t._highestAvailableQuestIndex, i, !s);
      }
    if (this.var_1614.length < this.var_661)
      for (let t = this._rb9fffcb9325238 + 1; t < this.var_661; t++)
        this.retrieveEntityImageAsset(t + 1, CalendarEntityStateEnums.INACTIVE, t > this._r9514ada7f967c3);
    for (let t = 0; t < this.var_661; t++)
      this._r7b1ffbb1f0f564[t] == null &&
        this.retrieveEntityImageAsset(
          t + 1,
          CalendarEntityStateEnums.const_418,
          t < this._rd2f21ef80ed3ca || t > this._r9514ada7f967c3,
        );
  }
  initializeBackgroundRendererIfAllImagesInCache() {
    if (!this._r57b3a02d2f9925() || this._ra097b01b5919a4 == null) return;
    let e = [],
      r = [];
    for (let t = 0; t < this._ra097b01b5919a4.length; t++) {
      let i = this._ra097b01b5919a4[t];
      i != null ? r.push(i) : (r.push(new A(640, 320, !1, 16777215)), e.push(t));
    }
    (this._rf337362e063542?._r5ea14906576318(r), this._r70cb5946b11622());
    for (let t of e) this._r09356af8a4fbf4(t);
  }
  _graphicEntityCache() {
    if (!(this._entityWindows == null || this.var_324 == null)) {
      for (let e of this._entityWindows) (this.var_324.removeChild(e), e.dispose());
      this._entityWindows = null;
    }
  }
  initializeEntitiesIfAllImagesInCache() {
    if (
      !this.areViewableEntityBitmapsInitialized() ||
      this._raeb19b4ef2b66b == null ||
      this.var_4297 == null ||
      this.var_324 == null
    )
      return;
    (this._graphicEntityCache(), (this._entityWindows = []));
    let e = [];
    for (let o of this._raeb19b4ef2b66b) {
      let d = this.var_4297.clone(),
        c = this._entityWindows.length;
      if (o != null) {
        let l = d.findChildByName("entity_bitmap");
        l != null && ((l.width = o.width), (l.height = o.height), (l.bitmap = o.clone()));
      } else e.push(c);
      let f = d.findChildByName("entity_mouse_region");
      (f != null && (f.procedure = this._r21075ecad723f1),
        (this._r7b1ffbb1f0f564?.[c] === CalendarEntityStateEnums.INACTIVE ||
          this._r7b1ffbb1f0f564?.[c] === CalendarEntityStateEnums.COMPLETED ||
          this._r7b1ffbb1f0f564?.[c] === CalendarEntityStateEnums.const_418) &&
          f &&
          (f.visible = !1),
        (d.visible = !0),
        this.var_324.addChild(d),
        this._entityWindows.push(d),
        this.updateEntityIndicatorPanel(c, !1));
    }
    (this.repositionEntityWrappers(), this.updateEntityVisibilities());
    let r = this.var_324.findChildByName("stripe_mask_left");
    r && this.var_324.setChildIndex(r, this.var_324.numChildren - 1);
    let t = this.var_324.findChildByName("stripe_mask_right");
    t && this.var_324.setChildIndex(t, this.var_324.numChildren - 1);
    let i = this.var_324.findChildByName("button_left");
    i && this.var_324.setChildIndex(i, this.var_324.numChildren - 1);
    let s = this.var_324.findChildByName("button_right");
    s && this.var_324.setChildIndex(s, this.var_324.numChildren - 1);
    for (let o of e) this.retrieveEntityImageAsset(o + 1, this._r7b1ffbb1f0f564?.[o] ?? CalendarEntityStateEnums.const_418);
    this._r7b1ffbb1f0f564?.[this.var_33._r7568522c4b24c4 - 1] === CalendarEntityStateEnums.ACTIVE &&
      this._r6fe41b332a3629(this.var_33._r7568522c4b24c4 - 1);
  }
  get _rd2f21ef80ed3ca() {
    let e = this.var_80 - 1;
    return e < 0 ? 0 : e;
  }
  get _r9514ada7f967c3() {
    let e = this.var_80 + a.const_1312 + 1,
      r = this.var_661 - 1;
    return e > r ? r : e;
  }
  areViewableEntityBitmapsInitialized() {
    if (this._raeb19b4ef2b66b == null) return !1;
    for (let e = this._rd2f21ef80ed3ca; e <= this._r9514ada7f967c3; e++)
      if (this._raeb19b4ef2b66b[e] == null) return !1;
    return !0;
  }
  get _rb3d4f1176c4a6f() {
    let e = this._r788fb7df55e4a7(this.var_80),
      r = this._rf337362e063542?._r5d0a6634c0b12b(e) ?? -1;
    return r < 0 ? 0 : r;
  }
  get _r07ad6e71d4c5dd() {
    let e = this._r788fb7df55e4a7(this.var_80);
    return this._rf337362e063542?._r5d0a6634c0b12b(e + 640) ?? 0;
  }
  _r57b3a02d2f9925() {
    if (this._ra097b01b5919a4 == null) return !1;
    for (let e = this._rb3d4f1176c4a6f; e <= this._r07ad6e71d4c5dd; e++)
      if (this._ra097b01b5919a4[e] == null) return !1;
    return !0;
  }
  updateEntityIndicatorPanel(e, r) {
    if (this._entityWindows == null || e < 0 || e >= this._entityWindows.length) return;
    let t = this._entityWindows[e].findChildByName("entity_indicator"),
      i = CalendarEntityStateEnums.INDICATOR_COLOR[this._r7b1ffbb1f0f564?.[e] ?? CalendarEntityStateEnums.ACTIVE] ?? 0;
    (r && (i += 2105376), this.var_1269 !== e && t != null && (t.color = i));
    let s = this._entityWindows[e].findChildByName("entity_indicator_status");
    if (s != null)
      if (this._r7b1ffbb1f0f564?.[e] === CalendarEntityStateEnums.COMPLETED) {
        let c = this._r8fb3f7aefefa42().getAssetByName("calendar_quest_complete")?.content;
        c != null && ((s.width = c.width), (s.height = c.height), (s.bitmap = c.clone()));
      } else s.bitmap = null;
    let o = t?.findChildByName("entity_indicator_text"),
      d = this.getQuestByEntityWindowIndex(e);
    if (o != null)
      if (d != null) o.text = this._questEngine?._r15e04de8c92f56(d) ?? "";
      else {
        let c = Jc.getCampaignLocalizationKeyForCode(`${this._questEngine?.getSeasonalCampaignCodePrefix() ?? ""}_${e + 1}`);
        o.text = this._questEngine?._ra8dde0ba5a496a(c) ?? "";
      }
  }
  retrieveEntityImageAsset(e, r, t = !1) {
    let i = `${a.ENTITY_IMAGE_PREFIX}${e}`;
    switch (r) {
      case CalendarEntityStateEnums.ACTIVE:
      case CalendarEntityStateEnums.INACTIVE:
      case CalendarEntityStateEnums.const_418:
        i += a.ENTITY_IMAGE_UNCOMPLETE_POSTFIX;
        break;
      case CalendarEntityStateEnums.COMPLETED:
        i += a.ENTITY_IMAGE_COMPLETED_POSTFIX;
        break;
    }
    (this._r7b1ffbb1f0f564 && (this._r7b1ffbb1f0f564[e - 1] = r),
      this._r5f1bd30efdf2c6?.setProperty(i, e - 1),
      this._r8fb3f7aefefa42().getAssetByName(i) != null
        ? (this._r5d99eb96b97875(i), this.initializeEntitiesIfAllImagesInCache())
        : t || this.loadAssetFromImageGallery(i, this.onEntityImageAssetDownloaded));
  }
  _r09356af8a4fbf4(e) {
    let r = `${a.BG_IMAGE_PREFIX}${e + 1}`;
    (this._r6963cacffb04ec != null && (this._r6963cacffb04ec[e] = r),
      this._r8fb3f7aefefa42().getAssetByName(r) != null
        ? (this._r82fecd921f6e6b(r), this.initializeBackgroundRendererIfAllImagesInCache())
        : this.loadAssetFromImageGallery(r, this._r18f186ebdad448));
  }
  loadAssetFromImageGallery(e, r) {
    let t = `${this._r427615427f34b9}${e}.png`,
      i = new UnkClass_636490(t),
      s = this._r8fb3f7aefefa42().loadAssetFromFile(e, i, "image/png");
    s != null &&
      !s.disposed &&
      (s.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, r), s.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, r));
  }
  _r18f186ebdad448 = n((e) => {
    let r = e.target;
    (r != null && this._r82fecd921f6e6b(r.assetName), this.initializeBackgroundRendererIfAllImagesInCache());
  }, "_r18f186ebdad448");
  onEntityImageAssetDownloaded = n((e) => {
    let r = e.target;
    (r != null && this._r5d99eb96b97875(r.assetName), this.initializeEntitiesIfAllImagesInCache());
  }, "onEntityImageAssetDownloaded");
  _r82fecd921f6e6b(e) {
    let r = this._r6963cacffb04ec?.indexOf(e) ?? -1;
    if (r === -1 || this._ra097b01b5919a4 == null) return;
    let t = this._r8fb3f7aefefa42().getAssetByName(e);
    this._ra097b01b5919a4[r] = t?.content ?? new A(640, 320);
  }
  _r5d99eb96b97875(e) {
    let r = this._r8fb3f7aefefa42().getAssetByName(e),
      t = this._r5f1bd30efdf2c6?.getValue(e) ?? -1;
    t === -1 ||
      this._raeb19b4ef2b66b == null ||
      t >= this._raeb19b4ef2b66b.length ||
      (this._raeb19b4ef2b66b[t] = r?.content ?? new A(1, 1, !0, 0));
  }
  repositionEntityWrappers() {
    if (this._entityWindows != null)
      for (let e = 0; e < this._entityWindows.length; e++)
        this._entityWindows[e].x =
          (e - this.var_80) * a.ENTITY_SPACING + this._r16d0c530228bda + a.ENTITIES_LEFT_MARGIN;
  }
  _r788fb7df55e4a7(e) {
    return e * a.ENTITY_SPACING;
  }
  _r70cb5946b11622() {
    let e =
      this._rf337362e063542?._ra5a06248a267ef(
        this._r788fb7df55e4a7(this.var_80),
        this.var_324?.width ?? 1,
      ) ?? null;
    e == null ||
      this._rccd04624390ad8 == null ||
      ((this._rccd04624390ad8.x = 0),
      (this._rccd04624390ad8.width = e.width),
      (this._rccd04624390ad8.height = e.height),
      (this._rccd04624390ad8.bitmap = e.clone()));
  }
  _rbe67ebba9669ae(e) {
    if (this._rf337362e063542 == null || this.var_324 == null || this._rccd04624390ad8 == null)
      return;
    let r = null;
    if (e < this.var_80) {
      let t = this.var_80 - e,
        i = this._r788fb7df55e4a7(e);
      ((r = this._rf337362e063542._ra5a06248a267ef(i, this.var_324.width + a.ENTITY_SPACING * t)),
        (this._r51c5277d0ae45a = -(a.ENTITY_SPACING * t)));
    } else {
      let t = e - this.var_80,
        i = a.ENTITY_SPACING * t + this.var_324.width;
      ((r = this._rf337362e063542._ra5a06248a267ef(this._r788fb7df55e4a7(this.var_80), i)),
        (this._r51c5277d0ae45a = 0));
    }
    ((this._rccd04624390ad8.x = this._r51c5277d0ae45a),
      r != null &&
        ((this._rccd04624390ad8.width = r.width),
        (this._rccd04624390ad8.height = r.height),
        (this._rccd04624390ad8.bitmap = r.clone())));
  }
  _r85bfd1ba1d145f() {
    this._rccd04624390ad8 != null &&
      (this._rccd04624390ad8.x = this._r51c5277d0ae45a + this._r16d0c530228bda);
  }
  _r6ff687bdf0ca6a(e) {
    if (
      e < 0 ||
      e >= this.var_661 ||
      (this._rab4d8866bb1014 != null && this._rab4d8866bb1014.running)
    )
      return;
    if (!this.areViewableEntityBitmapsInitialized()) {
      ((this.var_80 = e), this._r2490e3773ffb72());
      return;
    }
    let r = this.var_80;
    ((this.var_80 = e),
      this._r57b3a02d2f9925()
        ? ((this.var_80 = r),
          this._rbe67ebba9669ae(e),
          this.updateEntityVisibilities(!0, e - this.var_80),
          (this._r946b6bc836c617 = -(a.ENTITY_SPACING * (e - this.var_80)) / 10),
          (this._rab4d8866bb1014 = new UnkEventDispatcherWrapperSubclass_05394e(10, 10)),
          this._rab4d8866bb1014.addEventListener(DeBouncer.addEventListener, this._r3c6da61b9b2110),
          this._rab4d8866bb1014.addEventListener(DeBouncer._rf33144eac61595, this._r3c6da61b9b2110),
          this._rab4d8866bb1014.start())
        : (this.var_80 = r));
  }
  get _refd361fd065ece() {
    return this._maximumEntities - 7;
  }
  _r2490e3773ffb72() {
    (this.var_80 > 0 ? this.scrollToIndex?.activate() : this.scrollToIndex?.deactivate(),
      this.var_80 < Math.min(this.var_661 - a.const_664 - 1, this._refd361fd065ece)
        ? this._left_arrow?.activate()
        : this._left_arrow?.deactivate());
  }
  updateEntityVisibilities(e = !1, r = 0) {
    if (this._entityWindows == null) return;
    let t = this.var_80 - 1;
    e && r < 0 && (t += r);
    let i = this.var_80 + a.const_1312 + 1;
    e && r > 0 && (i += r);
    for (let s = 0; s < this._entityWindows.length; s++)
      if (s < t || s > i) this._entityWindows[s].visible = !1;
      else {
        this._entityWindows[s].visible = !0;
        let o = this._entityWindows[s].getChildByName("entity_mouse_region");
        s === t || s === i
          ? o && (o.visible = !1)
          : this._r7b1ffbb1f0f564?.[s] === CalendarEntityStateEnums.ACTIVE && o && (o.visible = !0);
      }
  }
  _r3c6da61b9b2110 = n((e) => {
    switch (e.type) {
      case DeBouncer.addEventListener:
        ((this._r16d0c530228bda += this._r946b6bc836c617), this._r85bfd1ba1d145f(), this.repositionEntityWrappers());
        break;
      case DeBouncer._rf33144eac61595:
        ((this._r16d0c530228bda = 0),
          (this.var_80 += this._r946b6bc836c617 > 0 ? -1 : 1),
          this._r70cb5946b11622(),
          this.repositionEntityWrappers(),
          this._r2490e3773ffb72(),
          this.updateEntityVisibilities(),
          this._rab4d8866bb1014?.removeEventListener(DeBouncer.addEventListener, this._r3c6da61b9b2110),
          this._rab4d8866bb1014?.removeEventListener(DeBouncer._rf33144eac61595, this._r3c6da61b9b2110));
        break;
    }
  }, "_r3c6da61b9b2110");
  _r5984d20a140a68 = n((e, r) => {
    if (e.type === u.DOWN)
      switch (r.name) {
        case "button_left":
          this._rb10bc8a9e9fae7 = !0;
          break;
        case "button_right":
          this.var_392 = !0;
          break;
      }
    (e.type === u.UP || e.type === u.UP_OUTSIDE) &&
      ((this._rb10bc8a9e9fae7 = !1), (this.var_392 = !1));
  }, "_r5984d20a140a68");
  _r21075ecad723f1 = n((e, r) => {
    if (r.name !== "entity_mouse_region" || this._entityWindows == null) return;
    let t = this._entityWindows.indexOf(r.parent);
    if (e.type === u.CLICK) {
      let i = this.getQuestByEntityWindowIndex(t);
      i != null && this._questEngine?._rd4042d1a6a05a1._r2b4bfddbe77cb9.openDetails(i, !0);
    }
    (e.type === u.OVER && (this.updateEntityIndicatorPanel(t, !0), (this.var_3501 = t)),
      e.type === u.OUT && (this.updateEntityIndicatorPanel(t, !1), (this.var_3501 = -1)));
  }, "_r21075ecad723f1");
  getQuestByEntityWindowIndex(e) {
    for (let r of this.var_1614) if (r._highestAvailableQuestIndex - 1 === e) return r;
    return null;
  }
  static adjustBrightness(e, r) {
    let t = Math.min(255, Math.max(0, ((e >> 16) & 255) + r)),
      i = Math.min(255, Math.max(0, ((e >> 8) & 255) + r)),
      s = Math.min(255, Math.max(0, (e & 255) + r));
    return ((t & 255) << 16) + ((i & 255) << 8) + (s & 255);
  }
  _r6fe41b332a3629(e) {
    e < 0 || e >= this.var_661 || ((this.var_1269 = e), (this._rcc6663caa508f2 = 0));
  }
  stopFlashing() {
    this.var_1269 = -1;
  }
  TimerEvent = n((e) => {
    let r = new Date();
    (this._ra9f6cd58c2ed0b !== r.getDate() && this._questEngine?._r4ad208985d89a3(),
      (this._ra9f6cd58c2ed0b = r.getDate()));
  }, "TimerEvent");
  _r8fb3f7aefefa42() {
    if (this._questEngine == null) throw new Error("Calendar quest engine is not available.");
    return this._questEngine.assets;
  }
}
