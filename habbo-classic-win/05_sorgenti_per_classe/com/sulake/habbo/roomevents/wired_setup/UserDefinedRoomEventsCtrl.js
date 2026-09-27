// Extracted from HabboAirLauncher.deobf.js, line 370517.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/UserDefinedRoomEventsCtrl.as
// Obfuscated name: _i5c7e92a7675af9

class a {
  constructor(e) {
    this._roomEvents = e;
    ((this._re29b41669f63a5 = new Ng(e)),
      (this.var_102 = new PresetManager(e)),
      this._wiredStyles.set(ox.NAME, new ox(e)),
      this._wiredStyles.set(K1.NAME, new K1(e)),
      this._wiredStyles.set(hY.NAME, new hY(e)),
      this._wiredStyles.set(_Y.NAME, new _Y(e)),
      this._wiredStyles.set(uY.NAME, new uY(e)),
      this._wiredStyles.set(ax.NAME, new ax(e)),
      (this._r17dbe26f1d6098 = this._wiredStyles.get(a.UbuntuWiredStyle)),
      (this.getElementByCode = this._wiredStyles.get(ox.NAME) ?? this._r17dbe26f1d6098));
  }
  static {
    n(this, "UserDefinedRoomEventsCtrl");
  }
  static UbuntuWiredStyle = K1.NAME;
  static _r58c557fc8173d0 = 0;
  static _ra50c2eb488c314 = 1;
  static UPDATE_MODE_SAVE_INTO_OTHER = 2;
  static _rc55b232ae999b6 = "wiredfurni.pickfurnis.caption";
  _r33a6ca7358655a = new TriggerConfs();
  _rd509de88081a8f = new ActionTypes();
  _rf08c3d82600cc2 = new ConditionTypes();
  _rc330d8173dc915 = new AddonTypes();
  _r60e00e7fc93c4f = new SelectorTypes();
  _refa3da82d90174 = new VariableTypes();
  _re301c4cca3c9d7 = !1;
  var_1342 = 1;
  _rc771a543f57276 = new Map();
  _r16da29b5f93a94 = new Map();
  var_20 = null;
  var_47 = null;
  _re29b41669f63a5;
  _r0fa2cc48c4c488 = !1;
  _ree72a4cd254c8f = null;
  _wiredStyles = new Map();
  getElementByCode;
  _r17dbe26f1d6098;
  var_102;
  _rcd7fa03a7e2aa1 = new Map();
  _r6fc148f94138bb = new Map();
  _r52c66e59fc7b28 = a._r58c557fc8173d0;
  _rfa836c57bda2df = Number.MIN_SAFE_INTEGER;
  _re04d0548ec2156 = Number.MIN_SAFE_INTEGER;
  _frame = null;
  _headerPreset = null;
  var_552 = null;
  var_1905 = null;
  var_833 = null;
  var_1350 = null;
  var_566 = null;
  var_258 = null;
  var_1486 = null;
  _initialWidth = -1;
  _r7c25ff86947d3e(e) {
    this._rcb678748f87f8d.has(e) &&
      this._re29b41669f63a5.show(e, this._re301c4cca3c9d7, this.var_1342);
  }
  _r7e0d0a299ffd5d(e) {
    if (
      this._frame == null ||
      this.var_20 == null ||
      this._frame._r8c53b4302edd07 ||
      !this._r6084d06d4b8921() ||
      (!this.var_20._r727c96186c54bc && e < 0)
    )
      return;
    let r = this._rcb678748f87f8d;
    (r.has(e)
      ? (r.delete(e), this._re29b41669f63a5.hide(e, this._re301c4cca3c9d7, this.var_1342))
      : this._rdfe8869d7d03ff.length < this.var_20.furniLimit &&
        (r.set(e, !0), this._re29b41669f63a5.show(e, this._re301c4cca3c9d7, this.var_1342)),
      this.onStuffsChanged());
  }
  _r8ab2f5feb7f019(e) {
    if (this._frame == null || this.var_20 == null) return;
    if (this.var_20.id === e) {
      this.close();
      return;
    }
    let r = !1;
    (this._rc771a543f57276.delete(e) && (r = !0),
      this._r16da29b5f93a94.delete(e) && (r = !0),
      r && this.onStuffsChanged());
  }
  _ra92c81c3f48874() {
    return Array.from(this._rc771a543f57276.keys());
  }
  _r81a3cda1ec1860() {
    return Array.from(this._r16da29b5f93a94.keys());
  }
  _rb83dbbaa3caed5() {
    (this._rdb0b42bdaf3f30(),
      (this._rc771a543f57276 = new Map()),
      (this._r16da29b5f93a94 = new Map()),
      this.onStuffsChanged());
  }
  resetToDefault() {
    this.var_20 != null &&
      (this.savePosition(),
      (this.var_20.intParams = this.var_20.concat.slice()),
      (this.var_20._r7e8836fc336e43 = ""),
      (this.var_20._r1385185994d461 = this.var_20._r1385185994d461.map(() => "0")),
      (this.var_20.stuffIds = []),
      (this.var_20.stuffIds2 = []),
      (this.var_20._r7ba6f01e49d6c6 =
        this.var_20._red1f8e750b075d.defaultFurniSources.slice()),
      (this.var_20._ra3ec1f5c3b2503 =
        this.var_20._red1f8e750b075d._r38a8a54df158eb.slice()),
      this.var_20 instanceof class_3391 && (this.var_20.delayInPulses = 0),
      this.var_20 instanceof class_3028 && (this.var_20.quantifierCode = 0),
      this.var_20 instanceof SelectorDefinition &&
        ((this.var_20.isFilter = !1), (this.var_20.isInvert = !1)),
      this._r80352ae20b6ca1(this.var_20),
      this._raf8e3cc916698a());
  }
  _r135610b4bb010a() {
    if (this.var_20 == null || this.var_47 == null) return;
    let r = `${this.resolveHolder().getKey()}-${this.var_47.code}`,
      t = new ClipboardWiredEntry(
        this._r94cc7d148d1619(),
        this._r79c76ff6cd3694(),
        this._r74383d74ef2dac(),
        this._ra92c81c3f48874(),
        this._r81a3cda1ec1860(),
        this._rd8bc0bae32776f(),
        this._r1661b31ec686af(),
      );
    (this.var_20 instanceof class_3391 && (t.delayInPulses = this._r5026c2ca2a70e7()),
      this.var_20 instanceof class_3028 && (t.quantifierCode = this._rbb546193ef1a69()),
      this.var_20 instanceof SelectorDefinition &&
        ((t.isFilter = this._r491bbf82afb258()), (t.isInvert = this._rf96f46b5442e17())),
      this._r6fc148f94138bb.set(r, t),
      this._frame?._rb458cbbf58f1c1(),
      this._rcff3ff1e34975f("${notification.wired.copied}"));
  }
  _rb60e40de9d56fb() {
    if (this.var_20 == null || this.var_47 == null) return;
    let e = `${this.resolveHolder().getKey()}-${this.var_47.code}`,
      r = this._r6fc148f94138bb.get(e);
    r != null &&
      (this.savePosition(),
      (this.var_20.intParams = r.intParams.slice()),
      (this.var_20._r7e8836fc336e43 = r._r7e8836fc336e43),
      (this.var_20._r1385185994d461 = r._r1385185994d461.slice()),
      (this.var_20.stuffIds = r.stuffIds.slice()),
      (this.var_20.stuffIds2 = r.stuffIds2.slice()),
      (this.var_20._r7ba6f01e49d6c6 = r._r7ba6f01e49d6c6.slice()),
      (this.var_20._ra3ec1f5c3b2503 = r._ra3ec1f5c3b2503.slice()),
      this.var_20 instanceof class_3391 && (this.var_20.delayInPulses = r.delayInPulses),
      this.var_20 instanceof class_3028 && (this.var_20.quantifierCode = r.quantifierCode),
      this.var_20 instanceof SelectorDefinition &&
        ((this.var_20.isFilter = r.isFilter),
        (this.var_20.isInvert = r.isInvert)),
      this._r80352ae20b6ca1(this.var_20),
      this._raf8e3cc916698a());
  }
  _r559656ffea523c() {
    return this.var_47 == null || this.var_20 == null
      ? !1
      : this._r6fc148f94138bb.has(`${this.resolveHolder().getKey()}-${this.var_47.code}`);
  }
  get activeFurniPicks() {
    return this.var_1342;
  }
  set activeFurniPicks(e) {
    if (((this.var_1342 = e), this.var_258 != null))
      for (let r of this.var_258) r.activeFurniPicksChanged();
  }
  _r1c0e6e6b103258() {
    this._frame != null &&
      this.var_47 != null &&
      this._frame.resizeToWidth(this.var_47.widthModifier * this._initialWidth);
  }
  _r7c52280433036c(e, r) {
    if ((this.var_47?.setMergedType(e, r), this.var_258 != null))
      for (let t of this.var_258)
        t.id === e && t.baseSourceType === Ve.MERGED_SOURCE && (t.sourceType = r);
  }
  _ra0bf1c6a404ceb(e, r) {
    if (!(this.var_258 == null || this.var_20 == null || this.var_47 == null))
      for (let t of this.var_258)
        t.baseSourceType === e && t.id === r && t.refresh(this.var_20, this.var_47);
  }
  get _re74971ad523db1() {
    return this.var_20 == null || this.var_47 == null
      ? !1
      : this.var_47.forceHidePickFurniInstructions
        ? !0
        : !this.var_20._red1f8e750b075d._rff445482fb8335() &&
          !this.var_47.forceFurniSelection;
  }
  close() {
    (this.var_20 != null &&
      this.var_47 != null &&
      (this._re29b41669f63a5.unhighlightActiveWired(this.var_20.id),
      this.var_47._r879e385d197fa5(),
      (this.var_20 = null),
      (this.var_47 = null)),
      this._rdb0b42bdaf3f30(),
      (this._rc771a543f57276 = new Map()),
      (this._r16da29b5f93a94 = new Map()),
      this._frame != null &&
        (this.savePosition(),
        this.hideFrame(),
        (this._headerPreset = null),
        (this.var_552 = null),
        (this.var_1905 = null),
        (this.var_833 = null),
        (this.var_1350 = null),
        (this.var_566 = null),
        (this.var_258 = null),
        (this.var_1486 = null),
        (this._initialWidth = -1),
        this.useCache || this._frame.dispose(),
        (this._frame = null)),
      this._ree72a4cd254c8f != null &&
        (this._roomEvents._rf5e384520bc525.removeListener(this._ree72a4cd254c8f),
        (this._ree72a4cd254c8f = null)));
  }
  _r80352ae20b6ca1(e) {
    if (e != null) {
      if (this._frame != null && this.var_47 != null && this._frame._r8c53b4302edd07) {
        this._rafebf67240b85a(e)._r15cee347bb0477(e.code) === this.var_47
          ? this.update(a.UPDATE_MODE_SAVE_INTO_OTHER, e.id)
          : this._rcff3ff1e34975f("${notification.wired.pasted_into_fail}");
        return;
      }
      if (!this._r5101b7cc35bc2c(e)) {
        if (
          (this._frame != null && this.close(),
          (this.var_20 = e),
          (this._re301c4cca3c9d7 = e._red1f8e750b075d._r1a2fb98ee0c252()),
          (this.var_1342 = 1),
          (this.var_47 = this.resolveHolder()._r15cee347bb0477(this.var_20.code)),
          (this.getElementByCode = this._r29f3f30a47ba63()),
          !this.createWindow())
        ) {
          ((this.var_20 = null), (this.var_47 = null));
          return;
        }
        (this._re29b41669f63a5._rbb45109d506c46(this.var_20.id),
          this._rdb0b42bdaf3f30(),
          (this._rc771a543f57276 = new Map(this.var_20.stuffIds.map((r) => [r, !0]))),
          (this._r16da29b5f93a94 = new Map(this.var_20.stuffIds2.map((r) => [r, !0]))),
          this.var_47.onEditStart(this.var_20),
          this._re301c4cca3c9d7
            ? (this._re29b41669f63a5._r46617d874ee485(this._rc771a543f57276, !0, 1),
              this._re29b41669f63a5._r46617d874ee485(this._r16da29b5f93a94, !0, 2))
            : this._re29b41669f63a5._r46617d874ee485(this._rc771a543f57276, !1, 0),
          this.onEditStartUpdateCommonUI(),
          this.var_47.onEditInitialized(),
          this._raf8e3cc916698a());
      }
    }
  }
  get isUsingAdvancedSettings() {
    return (
      this.var_20 != null &&
      (this.var_20._r81b758a563d02c || this.var_47?._rcae2a8c2f9affd === !0)
    );
  }
  get wiredStyle() {
    return this.getElementByCode;
  }
  get wiredCtrl() {
    return this.var_102;
  }
  _r80462c65db168d(e) {
    return this._wiredStyles.get(e) ?? null;
  }
  _r2c487ad3c646cb(e) {
    if (e === this._r17dbe26f1d6098.name) return;
    let r = this._wiredStyles.get(e);
    r != null && (this.clearCache(), (this._r17dbe26f1d6098 = r));
  }
  _r773acaa2c4a0c1() {
    (this._r52c66e59fc7b28 === a._ra50c2eb488c314 && (this._r52c66e59fc7b28 = a._r58c557fc8173d0),
      this.var_1486 != null && (this.var_1486.saveButtonDisabled = !1));
  }
  onSaveSuccess() {
    (this._r52c66e59fc7b28 === a._r58c557fc8173d0
      ? this.close()
      : this._r52c66e59fc7b28 === a._ra50c2eb488c314
        ? this._rcff3ff1e34975f("${notification.wired.saved}")
        : this._r52c66e59fc7b28 === a.UPDATE_MODE_SAVE_INTO_OTHER &&
          this._rcff3ff1e34975f("${notification.wired.pasted_into}"),
      (this._r52c66e59fc7b28 = a._r58c557fc8173d0),
      this.var_1486 != null && (this.var_1486.saveButtonDisabled = !1));
  }
  update(e = a._r58c557fc8173d0, r = -1) {
    if (this.var_20 == null || this.var_47 == null) return;
    let t = this.var_47.validate();
    if (t != null) {
      this._roomEvents.windowManager.alert("${wiredfurni.error.title}", t, 0, null);
      return;
    }
    ((this._r52c66e59fc7b28 = e),
      r === -1 && (r = this.var_20.id),
      this._r0517a4b7895dbb(),
      this.var_1486 != null && (this.var_1486.saveButtonDisabled = !0),
      this._roomEvents.send(this._r1dcaf929634892(r)));
  }
  _r9cafa9a1789cdf(e) {
    this.var_47?._r9cafa9a1789cdf(e);
  }
  clearCache() {
    this.close();
    for (let e of this._rcd7fa03a7e2aa1.values()) e.frame.dispose();
    this._rcd7fa03a7e2aa1.clear();
  }
  _r83ef40cef5b099() {
    return (
      this.var_20 != null &&
      this.var_47 != null &&
      this._frame != null &&
      this._frame.window.parent != null
    );
  }
  _r136c3ce595ddcf() {
    return this.var_20 == null ? -1 : this.var_20.id;
  }
  get _rcb678748f87f8d() {
    return !this._re301c4cca3c9d7 || this.var_1342 === 1
      ? this._rc771a543f57276
      : this._r16da29b5f93a94;
  }
  get _rdfe8869d7d03ff() {
    return !this._re301c4cca3c9d7 || this.var_1342 === 1
      ? this._ra92c81c3f48874()
      : this._r81a3cda1ec1860();
  }
  _r6084d06d4b8921() {
    return (
      this.var_20 != null &&
      (this.var_20._red1f8e750b075d._r498152497e09ad() ||
        this.var_47?.forceFurniSelection === !0)
    );
  }
  resolveHolder() {
    return this._rafebf67240b85a(this.var_20);
  }
  _rafebf67240b85a(e) {
    return this._r33a6ca7358655a._r58bebf6acaa0b3(e)
      ? this._r33a6ca7358655a
      : this._rd509de88081a8f._r58bebf6acaa0b3(e)
        ? this._rd509de88081a8f
        : this._rf08c3d82600cc2._r58bebf6acaa0b3(e)
          ? this._rf08c3d82600cc2
          : this._rc330d8173dc915._r58bebf6acaa0b3(e)
            ? this._rc330d8173dc915
            : this._r60e00e7fc93c4f._r58bebf6acaa0b3(e)
              ? this._r60e00e7fc93c4f
              : this._refa3da82d90174;
  }
  _ra16304ec90074b(e, r) {
    return !(r instanceof UnkSubclassOf_class_2396_cbbc47) || e == null ? null : UnkClass_b619bf.as({ value: e, guard: _i66bf19a0b90095 });
  }
  _r29f3f30a47ba63() {
    if (this.var_20 == null || this.var_47 == null)
      return this._wiredStyles.get(ox.NAME) ?? this._r17dbe26f1d6098;
    let e = this._roomEvents.sessionDataManager.getFloorItemData(this.var_20._r915121725e929b);
    if (e != null) {
      let r = e.className;
      if (r === "wf_ltdproto_act_toggle_state")
        return this._wiredStyles.get(hY.NAME) ?? this._r17dbe26f1d6098;
      if (r === "wf_proto_trg_at_given_time")
        return this._wiredStyles.get(_Y.NAME) ?? this._r17dbe26f1d6098;
      if (r === "wf_proto_cnd_trggrer_on_frn")
        return this._wiredStyles.get(uY.NAME) ?? this._r17dbe26f1d6098;
    }
    return this._r17dbe26f1d6098;
  }
  getCacheKey(e, r) {
    return `${e.getKey()}-${this.getElementByCode.name}-${e._r15cee347bb0477(r.code).code}`;
  }
  loadFromCache(e, r) {
    let t = this._rcd7fa03a7e2aa1.get(this.getCacheKey(e, r));
    return t == null
      ? !1
      : ((this._frame = t.frame),
        (this._headerPreset = t.headerPreset),
        (this.var_552 = t.selectorOptionsPreset),
        (this.var_1905 = t.furniPicksSectionPreset),
        (this.var_833 = t.delayPreset),
        (this.var_1350 = t.advancedSettingsWrapperPreset),
        (this.var_566 = t.conditionQuantifierOptions),
        (this.var_258 = t.inputSourcePresets),
        (this.var_1486 = t._r43e1962e8d351e),
        (this._initialWidth = t.initialWidth),
        this._re04972651b3e30("loadFromCache.afterAssign"),
        !0);
  }
  storeInCache(e, r) {
    this._rcd7fa03a7e2aa1.set(
      this.getCacheKey(e, r),
      new WiredConfigurationCache(
        this._frame,
        this._headerPreset,
        this.var_552,
        this.var_1905,
        this.var_833,
        this.var_1350,
        this.var_566,
        this.var_258,
        this.var_1486,
        this._initialWidth,
      ),
    );
  }
  createWindow() {
    if (this._frame != null) return !1;
    let e = this.resolveHolder();
    if (e == null || this.var_20 == null || this.var_47 == null) return !1;
    if (this.useCache && this.loadFromCache(e, this.var_20))
      return (this.showFrame(), !0);
    let r = new WiredUIBuilder(
      this.var_102,
      this.close.bind(this),
      e.getKey(),
      this.var_47.code,
      this._r8aa0fb76d5de35,
    );
    return (
      this._r00cacd028f351e(this.var_20, e, this.var_47, r),
      this.createInputs(this.var_20, this.var_47, r),
      this.createSelectorOptions(this.var_20, r),
      this.createFurniPicks(r),
      this.createDelaySection(this.var_20, this.var_47, r),
      this.createAdvancedSections(this.var_20, this.var_47, r),
      this._rdd15ac5220ee25(r),
      r.build(this.var_47.widthModifier, this.var_47._r401186d17e05f2),
      (this._frame = r.frame),
      (this._initialWidth = r.initialWidth),
      this.var_47.onInit(this._roomEvents),
      this.showFrame(),
      this.useCache && this.storeInCache(e, this.var_20),
      !0
    );
  }
  showFrame() {
    let e = this._roomEvents.windowManager.getDesktop(1);
    (e != null && this._frame != null && e.addChild(this._frame.window),
      this._frame?.window.center(),
      this._frame?.window.activate());
  }
  hideFrame() {
    let e = this._roomEvents.windowManager.getDesktop(1);
    e != null && this._frame != null && e.removeChild(this._frame.window);
  }
  _r00cacd028f351e(e, r, t, i) {
    let s = Lc.const_526;
    t.hasStateSnapshot && (s = Lc.const_941);
    let o = this._ra16304ec90074b(t, e);
    (this._roomEvents._rb3d0033404b557.isEnabled && o != null && (s = Lc.BUTTON_MODE_VARIABLE_MENU),
      t instanceof class_3456 && (s = Lc.const_441),
      t instanceof iY && (s = Lc.const_1033),
      (this._headerPreset = this.var_102.createHeaderPreset(
        this.getElementName(e._r915121725e929b),
        r,
        s,
        this._r115cce54cad0ab,
        this._rf843b5605ce9a1,
        this._ra455d00b5decab,
        this._r61038ddf1135d0,
        _ib656811978791f(t) ? t.getHeaderSourceTypeSelectorParam(e) : null,
      )),
      i.addElements(this._headerPreset));
  }
  createInputs(e, r, t) {
    if (r.inputMode !== So.INPUTS_TYPE_UI_BUILDER) return;
    let i = new UnkWiredUIBuilderSubclass_cf5938(this.var_102);
    (r._r0effae977df5f6(this._roomEvents),
      r.buildInputs(this.var_102, this.getElementByCode, i));
    for (let s of i._rf55edeae0ecb69) t.addElements(s);
  }
  createSelectorOptions(e, r) {
    e instanceof SelectorDefinition &&
      ((this.var_552 = this.var_102.createCheckboxGroup([
        new CheckboxOptionParam("${wiredfurni.params.selector_option.0}"),
        new CheckboxOptionParam("${wiredfurni.params.selector_option.1}"),
      ])),
      r.addElements(
        this.var_102.createSection(
          "${wiredfurni.params.selector_options_selector}",
          this.var_552,
        ),
      ));
  }
  createFurniPicks(e) {
    if (!this._r6084d06d4b8921() || this._re74971ad523db1) return;
    let r = new Se(Se.MODE_MULTILINE, !1, 0, !1, nr.const_27);
    ((r.textColor = this.getElementByCode.softTextColor),
      (this.var_1905 = this.var_102.createSection(
        "${" + a._rc55b232ae999b6 + "}",
        this.var_102.createText("${wiredfurni.pickfurnis.desc}", r),
      )),
      e.addElements(this.var_1905),
      this._re04972651b3e30("createFurniPicks.afterCreate"));
  }
  createDelaySection(e, r, t) {
    let i = UnkClass_b619bf.as({ value: r, guard: _i6f604ea13f4e09 });
    !(e instanceof class_3391) ||
      i == null ||
      !i.allowDelaying ||
      ((this.var_833 = this.var_102.createSliderSection(
        "wiredfurni.params.delay",
        "seconds",
        SliderSection.CONVERTER_PULSES,
        0,
        20,
        1,
        !1,
      )),
      t.addElements(this.var_833));
  }
  getQuantifierKey(e) {
    let r =
      e.quantifierType === class_2908.var_5918
        ? "furni"
        : e.quantifierType === class_2908.var_5901
          ? "users"
          : e.quantifierType === class_2908.var_5942
            ? "variables"
            : "";
    return ((r += e.isInvert ? ".neg." : "."), "wiredfurni.params.quantifier." + r);
  }
  createAdvancedSections(e, r, t) {
    let i = e._red1f8e750b075d,
      s = i._r94512e743522ac > 0,
      o = i._raa60c6ff365055 > 0,
      d = e instanceof class_3028 ? e : null,
      c = d != null && d.quantifierType !== class_2908.var_5860;
    if (!(e._rb99874ef1c36cc && (s || o || c))) return;
    let l = [];
    if (c) {
      let b = this.getQuantifierKey(d);
      ((this.var_566 = this.var_102.createRadioGroup([
        new RadioButtonParam(0, "${" + b + "0}"),
        new RadioButtonParam(1, "${" + b + "1}"),
      ])),
        l.push(
          this.var_102.createSection(
            "${wiredfurni.params.quantifier_selection}",
            this.var_566,
          ),
        ));
    }
    this._rfdf2a2ef62b591(e, r);
    for (let b of this.var_258 ?? []) l.push(b);
    ((this.var_1350 = this.var_102._r4d997c69f06173(l, r.advancedAlwaysVisible())),
      t.addElements(this.var_1350));
  }
  _rfdf2a2ef62b591(e, r) {
    let t = e._red1f8e750b075d;
    this.var_258 = [];
    let i = r.mergedSelections(),
      s = [],
      o = [];
    for (let d of i) (s.push(d[0]), o.push(d[1]));
    for (let d = 0; d < t._r94512e743522ac; d += 1)
      s.indexOf(d) === -1 &&
        this.var_258.push(
          this.var_102.createInputSourceSection(
            "${" + r.furniSelectionTitle(d) + "}",
            Ve.var_64,
            d,
            null,
            !1,
            e._red1f8e750b075d._r1a2fb98ee0c252(),
          ),
        );
    for (let d = 0; d < t._raa60c6ff365055; d += 1)
      o.indexOf(d) === -1 &&
        this.var_258.push(
          this.var_102.createInputSourceSection("${" + r.userSelectionTitle(d) + "}", Ve.USER_SOURCE, d),
        );
    for (let d = 0; d < i.length; d += 1)
      this.var_258.push(
        this.var_102.createInputSourceSection(
          "${" + r.mergedSelectionTitle(d) + "}",
          Ve.MERGED_SOURCE,
          d,
          r.mergedSourceOptions(d),
          r._r0b74b92fc06f4d(d),
          e._red1f8e750b075d._r1a2fb98ee0c252(),
        ),
      );
  }
  _rdd15ac5220ee25(e) {
    ((this.var_1486 = this.var_102.createFooterPreset(this.save, () => this.close())),
      e.addElements(this.var_1486));
  }
  _ra8d575811da679() {
    if (this.var_566 == null) return;
    let e = this.var_20 instanceof class_3028 ? this.var_20 : null;
    if (e == null) return;
    let r = this.getQuantifierKey(e);
    ((this.var_566.get(0).text = "${" + r + "0}"),
      (this.var_566.get(1).text = "${" + r + "1}"));
  }
  onEditStartUpdateCommonUI() {
    if (this.var_20 == null || this.var_47 == null || this._frame == null) return;
    (this._headerPreset?.updateName(this.getElementName(this.var_20._r915121725e929b)),
      this.var_552 != null &&
        this.var_20 instanceof SelectorDefinition &&
        ((this.var_552.get(0).selected = this.var_20.isFilter),
        (this.var_552.get(1).selected = this.var_20.isInvert)));
    let e = this._ra16304ec90074b(this.var_47, this.var_20);
    if (
      (e != null &&
        this._roomEvents._rb3d0033404b557.isEnabled &&
        this._headerPreset != null &&
        (this._headerPreset.buttonVisible = e.initialVariableName.length > 0),
      _ib656811978791f(this.var_47) &&
        this._headerPreset?._rc97f2ad48b897f != null &&
        this._headerPreset._rc97f2ad48b897f.select(this.var_47.headerSourceType),
      this._re04972651b3e30("onEditStartUpdateCommonUI.beforeStuffsChanged"),
      this.onStuffsChanged(),
      this.var_833 != null &&
        this.var_20 instanceof class_3391 &&
        (this.var_833.value = this.var_20.delayInPulses),
      this.var_1350 != null &&
        (this.var_1350.expanded =
          this.var_20._rb99874ef1c36cc &&
          (this.isUsingAdvancedSettings || this.var_47.advancedAlwaysVisible())),
      this.var_20 instanceof class_3028 &&
        this.var_20.quantifierType !== class_2908.var_5860 &&
        this.var_566 != null &&
        ((this.var_566.selected = this.var_20.quantifierCode), this._ra8d575811da679()),
      this.var_258 != null)
    )
      for (let r of this.var_258)
        (r.refresh(this.var_20, this.var_47),
          r.baseSourceType === Ve.MERGED_SOURCE &&
            (r.sourceType = this.var_47.getMergedType(r.id)));
    (this.var_1486 != null &&
      (this.var_1486.saveButtonDisabled = !this._roomEvents._rb3d0033404b557.hasWritePermission),
      this._frame._r37c311b7935af8());
  }
  _rdb0b42bdaf3f30() {
    (this._re29b41669f63a5._raf8a5c9bba098c(this._rc771a543f57276, !0, 1),
      this._re29b41669f63a5._raf8a5c9bba098c(this._r16da29b5f93a94, !0, 2));
  }
  _r5101b7cc35bc2c(e) {
    let r = e._r09c1c618a6015f._r491f74a2c22d93;
    return r == null || !r.needsSynchronize
      ? !1
      : (this._ree72a4cd254c8f != null &&
          this._roomEvents._rf5e384520bc525.removeListener(this._ree72a4cd254c8f),
        (this._ree72a4cd254c8f = (t) => {
          ((this._ree72a4cd254c8f = null),
            e._r09c1c618a6015f._r491f74a2c22d93?.synchronize(t),
            this._r80352ae20b6ca1(e));
        }),
        this._roomEvents._rf5e384520bc525.getAllVariables(this._ree72a4cd254c8f, !0, r.hash),
        !0);
  }
  savePosition() {
    this._frame != null &&
      ((this._rfa836c57bda2df = this._frame.window.x), (this._re04d0548ec2156 = this._frame.window.y));
  }
  _raf8e3cc916698a() {
    this._frame != null &&
      (this._rfa836c57bda2df === Number.MIN_SAFE_INTEGER
        ? this._frame.window.center()
        : ((this._frame.window.x = this._rfa836c57bda2df), (this._frame.window.y = this._re04d0548ec2156)),
      this._frame.window.activate());
  }
  save = n(() => {
    if (this.var_20 == null || this._frame == null) return;
    if (this.var_20 instanceof SelectorDefinition && this._rf96f46b5442e17() && !this._r491bbf82afb258()) {
      this._roomEvents.windowManager.confirm(
        "${wiredfurni.danger.1.change.confirm.title}",
        "${wiredfurni.danger.1.change.confirm.body}",
        0,
        this._r26f0b653032e40,
      );
      return;
    }
    if (!this.isOwner(this.var_20.id) && !this._r0fa2cc48c4c488) {
      this._roomEvents.windowManager.confirm(
        "${wiredfurni.nonowner.change.confirm.title}",
        "${wiredfurni.nonowner.change.confirm.body}",
        0,
        this._r26f0b653032e40,
      );
      return;
    }
    let e = this.var_47?.requireConfirmation;
    if (e != null) {
      this._roomEvents.windowManager.confirm(e.title, e.body, 0, this._r26f0b653032e40);
      return;
    }
    this.update();
  }, "save");
  _r491bbf82afb258() {
    return this.var_552 != null && this.var_552.get(0).selected;
  }
  _rf96f46b5442e17() {
    return this.var_552 != null && this.var_552.get(1).selected;
  }
  _r5c683bd2db017d() {
    return this.var_47 != null && this.var_20 != null && this._frame != null;
  }
  _r26f0b653032e40 = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        ((this._r0fa2cc48c4c488 = !0), this._r5c683bd2db017d() && this.update()));
  }, "_r26f0b653032e40");
  _r0517a4b7895dbb() {
    this.var_20 == null ||
      this.var_47 == null ||
      ((this.var_20.intParams = this._r94cc7d148d1619()),
      (this.var_20._r1385185994d461 = this._r74383d74ef2dac()),
      (this.var_20._r7e8836fc336e43 = this._r79c76ff6cd3694()),
      (this.var_20.stuffIds = this._ra92c81c3f48874()),
      (this.var_20.stuffIds2 = this._r81a3cda1ec1860()));
  }
  _r1dcaf929634892(e) {
    let r = this._ra92c81c3f48874(),
      t = this._r81a3cda1ec1860();
    return this.var_20 instanceof UnkSubclassOf_class_2396_273ff5
      ? new UnkMessageComposer_8args_d32620(
          e,
          this._r94cc7d148d1619(),
          this._r74383d74ef2dac(),
          this._r79c76ff6cd3694(),
          r,
          t,
          this._rd8bc0bae32776f(),
          this._r1661b31ec686af(),
        )
      : this.var_20 instanceof class_3391
        ? new UnkMessageComposer_9args_5d6aac(
            e,
            this._r94cc7d148d1619(),
            this._r74383d74ef2dac(),
            this._r79c76ff6cd3694(),
            r,
            t,
            this._r5026c2ca2a70e7(),
            this._rd8bc0bae32776f(),
            this._r1661b31ec686af(),
          )
        : this.var_20 instanceof class_3028
          ? new UnkMessageComposer_9args_2240eb(
              e,
              this._r94cc7d148d1619(),
              this._r74383d74ef2dac(),
              this._r79c76ff6cd3694(),
              r,
              t,
              this._rbb546193ef1a69(),
              this._rd8bc0bae32776f(),
              this._r1661b31ec686af(),
            )
          : this.var_20 instanceof UnkSubclassOf_class_2396_e39e7d
            ? new UnkMessageComposer_8args_6e707f(
                e,
                this._r94cc7d148d1619(),
                this._r74383d74ef2dac(),
                this._r79c76ff6cd3694(),
                r,
                t,
                this._rd8bc0bae32776f(),
                this._r1661b31ec686af(),
              )
            : this.var_20 instanceof SelectorDefinition
              ? new UpdateSelectorMessageComposer(
                  e,
                  this._r94cc7d148d1619(),
                  this._r74383d74ef2dac(),
                  this._r79c76ff6cd3694(),
                  r,
                  t,
                  this._r2282aa3d8c4409(),
                  this._r799734fbb8a756(),
                  this._rd8bc0bae32776f(),
                  this._r1661b31ec686af(),
                )
              : new UnkMessageComposer_8args_351508(
                  e,
                  this._r94cc7d148d1619(),
                  this._r74383d74ef2dac(),
                  this._r79c76ff6cd3694(),
                  r,
                  t,
                  this._rd8bc0bae32776f(),
                  this._r1661b31ec686af(),
                );
  }
  _r5026c2ca2a70e7() {
    return this.var_833?.value ?? 0;
  }
  _r115cce54cad0ab = n(() => {
    this.var_20 != null && this._roomEvents.send(new UnkMessageComposer_1args_63fdcf(this.var_20.id));
  }, "_r115cce54cad0ab");
  _rf843b5605ce9a1 = n(() => {
    let e = this._ra16304ec90074b(this.var_47, this.var_20);
    e == null ||
      e.initialVariableName.length === 0 ||
      this._roomEvents.context._r6b6c989018eb05(
        `wiredmenu/open/variable_overview/${e.initialVariableName}`,
      );
  }, "_rf843b5605ce9a1");
  _ra455d00b5decab = n(() => {
    this._roomEvents.context._r6b6c989018eb05("wiredmenu/logs");
  }, "_ra455d00b5decab");
  _r61038ddf1135d0 = n(() => {
    Ae.openWebPageAndMinimizeClient(this._roomEvents.getProperty("wired.api.docs.link"));
  }, "_r61038ddf1135d0");
  _rcff3ff1e34975f(e) {
    this._roomEvents.notifications.addItem(e, NotificationType.const_1274, null, null, {
      [NotificationExtraDataKey.const_285]: 2500,
    });
  }
  _r94cc7d148d1619() {
    return this.var_47?.readIntParamsFromForm() ?? [];
  }
  _r74383d74ef2dac() {
    return (this.var_47?._r4ac8c24e31ca7e() ?? []).map((e) => `${e}`);
  }
  _r79c76ff6cd3694() {
    return this.var_47?.readStringParamFromForm() ?? "";
  }
  _rd8bc0bae32776f() {
    return this.var_20?._r7ba6f01e49d6c6 ?? [];
  }
  _r1661b31ec686af() {
    return this.var_20?._ra3ec1f5c3b2503 ?? [];
  }
  _rbb546193ef1a69() {
    return this.var_566?.selected ?? 0;
  }
  _r2282aa3d8c4409() {
    return this._r491bbf82afb258();
  }
  _r799734fbb8a756() {
    return this._rf96f46b5442e17();
  }
  onStuffsChanged() {
    if (!(this.var_20 == null || this._frame == null)) {
      if (
        (this._re04972651b3e30("onStuffsChanged.beforeRegisterParameter"),
        this._roomEvents.localization._r43eae9731f5b27(
          a._rc55b232ae999b6,
          "count",
          `${this._ra92c81c3f48874().length}`,
        ),
        this._roomEvents.localization._r43eae9731f5b27(
          a._rc55b232ae999b6,
          "limit",
          `${this.var_20.furniLimit}`,
        ),
        this._re04972651b3e30("onStuffsChanged.afterRegisterParameter"),
        this.var_258 != null && this.var_47 != null)
      )
        for (let e of this.var_258) e.refresh(this.var_20, this.var_47);
      this._frame._rb458cbbf58f1c1();
    }
  }
  getElementName(e) {
    let r = this._roomEvents.sessionDataManager.getFloorItemData(e);
    return r == null ? `NAME: ${e}` : r.localizedName;
  }
  isOwner(e) {
    let t = this._roomEvents.roomEngine
      ._ra1f5cb56d0c2d8(this._roomEvents.roomId, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE)
      ?.getStringToStringMap();
    return (
      t != null && t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_641) === this._roomEvents.sessionDataManager.userId
    );
  }
  get _r8aa0fb76d5de35() {
    return !1;
  }
  get useCache() {
    return !0;
  }
  _re04972651b3e30(e) {
    let r = this._roomEvents.localization._r5f04530d38380d(a._rc55b232ae999b6),
      t = r?._parameters,
      i = r?._listeners,
      s =
        t instanceof globalThis.Map
          ? Object.fromEntries(
              Array.from(t.entries()).map(([o, d]) => [o, { id: d?.id ?? null, value: d?.value ?? null }]),
            )
          : null;
  }
}
