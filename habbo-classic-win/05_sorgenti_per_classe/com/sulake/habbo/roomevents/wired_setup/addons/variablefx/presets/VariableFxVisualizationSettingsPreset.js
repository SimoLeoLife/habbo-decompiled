// Estratto da HabboAirLauncher.deobf.js, riga 354488.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxVisualizationSettingsPreset.as
// Nome offuscato: _if3809f26120aaf

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxVisualizationSettingsPreset");
  }
  static _r7ff68e3fdd10bb = -1;
  static METALLIC_COLOR_PREFIX_KEY = "wiredfurni.params.variablefx.color.prefix.metallic";
  static DYNAMIC_COLOR_PREFIX_KEY = "wiredfurni.params.variablefx.color.prefix.dynamic";
  static ICON_LOCALIZATION_PREFIX = "wiredfurni.params.variablefx.icon.";
  static CAMPAIGN_ICONS_ENABLED_KEY = "wired.variablefx.campaign.icons.enabled";
  static _r765b82017ba585 = [
    "",
    "battery",
    "burning",
    "cash",
    "cooldown",
    "droplet",
    "energy",
    "eye",
    "fish",
    "food",
    "freezing",
    "gems",
    "gold",
    "health",
    "honor",
    "magic",
    "mana",
    "poison",
    "repairing",
    "reputation",
    "shield",
    "stamina",
    "star_power",
    "stealth",
    "timeleft",
    "upgrading",
    "wooden_logs",
  ];
  static _r3c27c65bacd2c9 = [
    "ranch.aubergine",
    "ranch.carrot",
    "ranch.corn",
    "ranch.egg",
    "ranch.grape",
    "ranch.potato",
    "ranch.pumpkin",
    "ranch.sapling",
    "ranch.tomato",
    "ranch.wheat",
  ];
  var_263;
  _state = null;
  var_1341 = !1;
  _rfd7f2c1dd3cc77;
  var_967;
  _content;
  _rf50936452b4d81;
  var_726;
  var_2205;
  var_3412;
  var_3726;
  var_3384;
  var_2031;
  var_1137;
  var_1108;
  var_1066;
  var_891;
  var_738;
  _ra588a491b10600;
  var_882;
  var_2377;
  _re7a03a855dfd32(e) {
    ((this.var_263 = e),
      (this._rfd7f2c1dd3cc77 = a._r765b82017ba585),
      (this._roomEvents.getBoolean(a.CAMPAIGN_ICONS_ENABLED_KEY) ||
        this._roomEvents.sessionDataManager.hasSecurity(class_1794.EMPLOYEE)) &&
        (this._rfd7f2c1dd3cc77 = this._rfd7f2c1dd3cc77.concat(a._r3c27c65bacd2c9)),
      (this._rf50936452b4d81 = this.var_102.createDropdown(
        new DropdownParam("", null, this._r8f837014c617cc, ""),
      )),
      (this.var_726 = this.var_102._r6a91acc6a32633()),
      (this.var_2205 = this.var_102._rdfe511871b7d73(
        this.var_726,
        this._r9941163040f0a5,
      )),
      (this.var_1137 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", null, this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.color}",
      )),
      (this.var_1108 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", null, this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.width}",
      )),
      (this.var_1066 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", null, this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.renderer}",
      )),
      (this.var_891 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", null, this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.sub_renderer}",
      )),
      (this.var_738 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", this._r470f281d5a8007(), this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.segments}",
      )),
      (this._ra588a491b10600 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", this.iconOptions(), this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.icon}",
      )),
      (this.var_882 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", this._rab3a60daf308be(), this._r8f837014c617cc),
        "${wiredfurni.params.variablefx.visualization.icon_alignment}",
      )),
      (this.var_2377 = [
        this.var_1137,
        this.var_1108,
        this.var_1066,
        this.var_891,
        this.var_738,
        this._ra588a491b10600,
        this.var_882,
      ]),
      (this.var_2031 = this.var_102.createSimpleListView(!0, this.var_2377)),
      (this.var_2031.spacing = this.var_40._r249f7dc0054eba));
    let r = new Se(Se.MODE_MULTILINE, !0);
    ((r.textColor = this.var_40.softTextColor),
      (this.var_3384 = this.var_102.createText(
        "${wiredfurni.params.variablefx.visualization}",
        r,
      )));
    let t = this.var_102.createSimpleListView(!0, [this.var_3384, this.var_2031]);
    ((t.spacing = this.var_40._r249f7dc0054eba),
      (this.var_3726 = this.var_102._r5ce8ba4791791e(
        t,
        6,
        5,
        6,
        5,
        this.var_40.createBorder(),
      )),
      (this._content = this.var_102.createSimpleListView(!0, [
        this.var_2205,
        this.var_3726,
      ])),
      (this._content.spacing = this.var_40._r249f7dc0054eba),
      (this.var_3412 = this.var_102._rf51615997619f2(this._content, 5, 5, 5, 5)));
    let i = new Hr();
    ((i._r5dcacbb0f4a4c3 = this._rf50936452b4d81),
      (i._r176ecc19700a82 = this.var_40._re041d2b38efa47),
      (this.var_967 = this.var_102.createSection(
        "${wiredfurni.params.variablefx.visualization.style}",
        this.var_3412,
        i,
      )));
  }
  init(e) {
    ((this._state = e), this.var_726.init(e), this._r135188cf210be5(), this._r124a9694db124c());
  }
  applyToState(e) {
    ((e.styleId = this._rf50936452b4d81.selectedId),
      this.var_1137.visible &&
        !this.var_1137.disabled &&
        (e._r5b3d4f00714e69 = this.var_1137.selectedId),
      this.var_1108.visible &&
        !this.var_1108.disabled &&
        (e.var_954 = this.var_1108.selectedId),
      this.var_1066.visible &&
        !this.var_1066.disabled &&
        (e.rendererId = this.var_1066.selectedId),
      this.var_891.visible &&
        !this.var_891.disabled &&
        (e._r57e125b612fc29 = this.var_891.selectedId),
      this.var_738.visible &&
        (e.segments = this.var_738.disabled ? 0 : this.var_738.selectedId),
      this._ra588a491b10600.visible &&
        !this._ra588a491b10600.disabled &&
        this._ra588a491b10600.selected != null &&
        (e.icon = this._r11945ef9f48fa7(this._ra588a491b10600.selectedId)),
      (!this._ra588a491b10600.visible || this._ra588a491b10600.disabled) && (e.icon = ""),
      this.var_882.visible &&
        !this.var_882.disabled &&
        (e.var_1226 = this.var_882.selectedId));
  }
  _r135188cf210be5() {
    let e = this._state,
      r = VariableFxEditorMetadata.getCategory(e.categoryId),
      t = e.currentStyle();
    ((this.var_1341 = !0),
      this._rf50936452b4d81.reinit(this._rfb7ba6ca82cee5(r), e.styleId),
      this.var_1137.reinit(
        this._r2461da93793c6b(t.colorOptions, t.defaultColor),
        e._r5b3d4f00714e69,
      ),
      this.var_1108.reinit(
        this._r2a83b82011fe5c(t.widthOptions, t.defaultWidth),
        e.var_954,
      ),
      this.var_1066.reinit(
        this._r2a83b82011fe5c(t.rendererOptions, t.defaultRenderer),
        e.rendererId,
      ));
    let i = VariableFxEditorMetadata._r15f8ad460b1ea3(t);
    (this.var_891.reinit(
      i.length > 0 ? this._r4b7e91f96c8050(i) : this._rb534ed919f2be2(),
      i.length > 0 ? e._r57e125b612fc29 : -1,
    ),
      this._ra588a491b10600.reinit(
        t._rb36bfb3876ce51 ? this.iconOptions() : this._rb534ed919f2be2(),
        t._rb36bfb3876ce51 ? this._r957ba67e8c3a5e(e.icon) : -1,
      ),
      this.var_882.reinit(
        t._rb36bfb3876ce51 ? this._rab3a60daf308be() : this._rb534ed919f2be2(),
        t._rb36bfb3876ce51 ? e.var_1226 : -1,
      ));
    let s =
        e.categoryId === _i3b0b1a104db30e._r09950f0f2ac684 && e.rendererId === class_2881.const_1180
          ? e._r57e125b612fc29
          : e.rendererId,
      o = VariableFxEditorMetadata.rendererSupportsSegments(s),
      d = o && e.segments > 0;
    (this.var_738.reinit(
      o ? this._r470f281d5a8007() : this._rb534ed919f2be2(),
      o ? e.segments : -1,
    ),
      (this.var_1137.visible = VariableFxEditorMetadata._r2159f56ed7777f(e.categoryId)),
      (this.var_1108.visible = VariableFxEditorMetadata._rfed13d1167aa77(e.categoryId)),
      (this.var_1066.visible = VariableFxEditorMetadata._rf79b16d5b16e3f(e.categoryId)),
      (this.var_891.visible = VariableFxEditorMetadata._rfff590a0147589(e.categoryId)),
      (this.var_738.visible = VariableFxEditorMetadata._r401f337eef3d7f(e.categoryId)),
      (this._ra588a491b10600.visible = VariableFxEditorMetadata._r8cfd0d19c0fd2b(e.categoryId)),
      (this.var_882.visible = this._ra588a491b10600.visible),
      (this.var_1137.disabled = !this._r5c31bc9ef06462(t.colorOptions, t.defaultColor.id)),
      (this.var_1108.disabled =
        !this._r5c31bc9ef06462(t.widthOptions, t.defaultWidth.id) || d),
      (this.var_1066.disabled = !this._r5c31bc9ef06462(t.rendererOptions, t.defaultRenderer.id)),
      (this.var_891.disabled = !this._r5c31bc9ef06462(i, e._r57e125b612fc29)),
      (this.var_738.disabled = !o),
      (this._ra588a491b10600.disabled = !t._rb36bfb3876ce51),
      (this.var_882.disabled = !t._rb36bfb3876ce51),
      this._r2c71fe34bb7018(),
      (this.var_1341 = !1));
  }
  _r124a9694db124c() {
    this._state != null &&
      (this.var_726.refresh(this._state), this.var_2205.refreshZoomLabel());
  }
  _r8f837014c617cc = n((e) => {
    this._r7a68ed99109069();
  }, "_r8f837014c617cc");
  _r9941163040f0a5 = n(() => {
    (this.applyToState(this._state),
      this._state.sanitize(),
      this.var_726.randomize(this._state),
      this.var_2205.refreshZoomLabel(),
      this.var_263._r58c377c82ec4b6(this._state, !1));
  }, "_r9941163040f0a5");
  _r7a68ed99109069() {
    this.var_1341 ||
      (this.applyToState(this._state),
      this._state.sanitize(),
      this._r135188cf210be5(),
      this.var_263._r58c377c82ec4b6(this._state, !0));
  }
  _r2c71fe34bb7018() {
    let e = 0;
    for (let r of this.var_2377) e = a._rcf990c6afe2ae4(r, e);
    for (let r of this.var_2377) a._r099aae65268bd2(r, e);
    this.var_2031.resize();
  }
  static _rcf990c6afe2ae4(e, r) {
    return e.visible && e instanceof NamedDropdownPreset ? Math.max(r, e._r0ef2c5ada42fb0) : r;
  }
  static _r099aae65268bd2(e, r) {
    e.visible && e instanceof NamedDropdownPreset && (e._r0ef2c5ada42fb0 = r);
  }
  _rfb7ba6ca82cee5(e) {
    return e.styles.map((r) => new ExpandableDropdownOption(r.id, "${" + r.localizationKey + "}"));
  }
  _r2a83b82011fe5c(e, r) {
    return this._r4b7e91f96c8050(e.length > 0 ? e : [r]);
  }
  _r2461da93793c6b(e, r) {
    return this._r0a5f5c0e20ae3a(e.length > 0 ? e : [r]);
  }
  _r5c31bc9ef06462(e, r) {
    return e.length > 1 && r !== a._r7ff68e3fdd10bb;
  }
  _rb534ed919f2be2() {
    return [new ExpandableDropdownOption(-1, "${wiredfurni.params.variablefx.not_applicable}")];
  }
  _r4b7e91f96c8050(e) {
    return e.map((r) => new ExpandableDropdownOption(r.id, "${" + r.key + "}"));
  }
  _r0a5f5c0e20ae3a(e) {
    return e.map((r) => new ExpandableDropdownOption(r.id, this._r050fec5825a22b(r)));
  }
  _r050fec5825a22b(e) {
    let r = null;
    return (
      this._rdd2c3beeeff08f(e)
        ? (r = a.DYNAMIC_COLOR_PREFIX_KEY)
        : this._ra1e315a9316197(e) &&
          this._state.categoryId !== _i3b0b1a104db30e._r45eac009b1fbcb &&
          (r = a.METALLIC_COLOR_PREFIX_KEY),
      r == null ? this._r88b040612b6459(e.key) : this._r88b040612b6459(r) + " " + this._r88b040612b6459(e.key)
    );
  }
  _r88b040612b6459(e) {
    return this.localizations.getLocalization(e, e);
  }
  _rdd2c3beeeff08f(e) {
    return [class_3649.DYNAMIC_RED_TO_GREEN, class_3649.DYNAMIC_LEVELLING, class_3649.DYNAMIC_TEAM_COLOR].includes(
      e.runtimeValue,
    );
  }
  _ra1e315a9316197(e) {
    return class_3649.resolve(e.runtimeValue)._rdc05eda693c910;
  }
  _r470f281d5a8007() {
    let e = [new ExpandableDropdownOption(0, "${wiredfurni.params.variablefx.visualization.segments.not_specified}")];
    for (let r = 1; r <= 100; r++) e.push(new ExpandableDropdownOption(r, String(r)));
    return e;
  }
  iconOptions() {
    return this._rfd7f2c1dd3cc77.map(
      (e, r) => new ExpandableDropdownOption(r, e === "" ? "${wiredfurni.params.variablefx.icon.none}" : this.iconDisplayString(e)),
    );
  }
  iconDisplayString(e) {
    let r = e.indexOf("."),
      t = this._r88b040612b6459(a.ICON_LOCALIZATION_PREFIX + e);
    return r === -1 ? t : this._r88b040612b6459(a.ICON_LOCALIZATION_PREFIX + e.substring(0, r)) + " " + t;
  }
  _rab3a60daf308be() {
    return [
      new ExpandableDropdownOption(class_4355.const_27, "${wiredfurni.params.variablefx.icon_alignment.left}"),
      new ExpandableDropdownOption(class_4355.RIGHT, "${wiredfurni.params.variablefx.icon_alignment.right}"),
      new ExpandableDropdownOption(class_4355.DOUBLE, "${wiredfurni.params.variablefx.icon_alignment.double}"),
    ];
  }
  _r957ba67e8c3a5e(e) {
    for (let r of this.iconOptions()) if (this._r11945ef9f48fa7(r.id) === e) return r.id;
    return 0;
  }
  _r11945ef9f48fa7(e) {
    return e >= 0 && e < this._rfd7f2c1dd3cc77.length ? this._rfd7f2c1dd3cc77[e] : "";
  }
  get window() {
    return this.var_967.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_967.resizeToWidth(e));
  }
  get childPresets() {
    return [this.var_967];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_263 = null),
      (this._state = null),
      (this._rfd7f2c1dd3cc77 = null),
      (this.var_967 = null),
      (this._content = null),
      (this._rf50936452b4d81 = null),
      (this.var_726 = null),
      (this.var_2205 = null),
      (this.var_3412 = null),
      (this.var_3726 = null),
      (this.var_3384 = null),
      (this.var_2031 = null),
      (this.var_1137 = null),
      (this.var_1108 = null),
      (this.var_1066 = null),
      (this.var_891 = null),
      (this.var_738 = null),
      (this._ra588a491b10600 = null),
      (this.var_882 = null),
      (this.var_2377 = null));
  }
}
