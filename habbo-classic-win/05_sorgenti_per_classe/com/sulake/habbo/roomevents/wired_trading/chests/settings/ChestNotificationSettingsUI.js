// Extracted from HabboAirLauncher.deobf.js, line 371464.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/settings/ChestNotificationSettingsUI.as
// Obfuscated name: _i7bc183c8a43751

class extends AbstractUbuntuWiredUI {
  constructor(r, t) {
    super(r._r41f5cc7d3516ce, t);
    this.var_2898 = r;
    ((this._r9fcc4bb60fcd85 = new class_2418((w) => this.onUpdateSuccess(w))),
      this.var_2898.addMessageEvent(this._r9fcc4bb60fcd85));
    let i = t.wiredStyle,
      s = t.createUsageInfoSection(
        "${wiredchests.notification_settings.notification_info.desc}",
        !0,
        "${wiredchests.notification_settings.notification_info}",
      ),
      o = [
        new CheckboxOptionParam("${wiredchests.notification_settings.enable_notifications.generic.0}", 0),
        new CheckboxOptionParam("${wiredchests.notification_settings.enable_notifications.generic.1}", 1),
      ],
      d = [
        new CheckboxOptionParam("${wiredchests.notification_settings.enable_notifications.wired.0}", 0),
        new CheckboxOptionParam("${wiredchests.notification_settings.enable_notifications.wired.1}", 1),
        new CheckboxOptionParam("${wiredchests.notification_settings.enable_notifications.wired.2}", 2),
      ];
    ((this.var_1627 = t.createCheckboxGroup(o)), (this.var_1082 = t.createCheckboxGroup(d)));
    let c = t.createSection(
      "${wiredchests.notification_settings.enable_notifications.generic}",
      this.var_1627,
    );
    ((c.splitterVisible = !1),
      (this.var_2528 = t.createSection(
        "${wiredchests.notification_settings.enable_notifications.wired}",
        this.var_1082,
      )));
    let f = t.createSimpleListView(!0, [c, this.var_2528]);
    f.spacing = i.sectionSpacing;
    let l = t.createBorderSection("${wiredchests.notification_settings.enable_notifications}", f),
      b = [
        new ExpandableDropdownOption(0, "${wiredchests.notification_settings.notification_mode.when.0}"),
        new ExpandableDropdownOption(1, "${wiredchests.notification_settings.notification_mode.when.1}"),
      ];
    this._notificationMode = t.createDropdown(
      new DropdownParam("${wiredchests.notification_settings.notification_mode.when}", b),
    );
    let _ = t.createSection(
      "${wiredchests.notification_settings.notification_mode.when}",
      this._notificationMode,
    );
    _.splitterVisible = !1;
    let h = t.createBorderSection("${wiredchests.notification_settings.notification_mode}", _),
      p = 320,
      m = UnkClass_c7f867._rd4b507212bb7db / 2.4,
      v = new ListScrollParams(!1, p, m, !0);
    ((this.framePreset = t._r2c9ac233cf1a70(
      [s, l, h, this._r43e1962e8d351e],
      this._rf4d9b06810c6a7,
      null,
      -1,
      !1,
      !1,
      v,
    )),
      this.framePreset.resizeToWidth(350));
  }
  static {
    n(this, "ChestNotificationSettingsUI");
  }
  var_1627;
  var_2528;
  var_1082;
  _notificationMode;
  _r9fcc4bb60fcd85;
  _chestType = 0;
  _chestId = -1;
  onUpdateSuccess(r) {
    r.getParser().chestId === this._chestId &&
      r.getParser()._r7c1255eeeb6c76 &&
      this.hideFrame();
  }
  set chestType(r) {
    this._chestType = r;
    let t = this.localization.getLocalization(
      `wiredchests.${r === class_4148.TYPE_FURNI ? "furni" : "coin"}_chest`,
    );
    this.framePreset.title = this.localization.getLocalizationWithParams(
      "wiredchests.notification_settings.title",
      "",
      "chest_type",
      t,
    );
  }
  onEdit(r, t, i) {
    ((this.chestType = t),
      (this._chestId = r),
      (this.var_1627.get(0).selected = i.getValue("notification_chest_full") === "1"),
      (this.var_1627.get(1).selected = i.getValue("notification_donation") === "1"),
      (this.var_1082.get(0).selected = i.getValue("notification_someone_withdraws") === "1"),
      (this.var_1082.get(1).selected = i.getValue("notification_chest_empty") === "1"),
      (this.var_1082.get(2).selected = i.getValue("notification_wired_transaction") === "1"),
      (this._notificationMode.selectedId = Number(i.getValue($s.NOTIFY_MODE) ?? 0)),
      (this.var_2528.disabled = i.getValue($s.IS_WIRED_ENABLED) !== "1"),
      this.showFrame());
  }
  _rf7f875b488f891 = n(() => {
    this.var_2898.send(
      new class_2718(
        this._chestId,
        this._notificationMode.selectedId,
        this.var_1627.get(0).selected,
        this.var_1627.get(1).selected,
        this.var_1082.get(0).selected,
        this.var_1082.get(1).selected,
        this.var_1082.get(2).selected,
      ),
    );
  }, "_rf7f875b488f891");
  dispose() {
    this.disposed ||
      (this.var_2898.removeMessageEvent(this._r9fcc4bb60fcd85),
      (this._r9fcc4bb60fcd85 = null),
      (this.var_2898 = null),
      super.dispose());
  }
}
