// Estratto da HabboAirLauncher.deobf.js, riga 253761.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/raidprotection/RaidProtectionSettingsView.as
// Nome offuscato: _iba310260543510

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._navigator = r;
  }
  static {
    n(this, "RaidProtectionSettingsView");
  }
  static _r8bca97e6f8acac = [0, 1, 2];
  static _raff85f3534fcbe = [0, 1];
  static actionType = [300, 900, 1800, 3600, 10800, 21600, 43200, 86400, 259200, 604800];
  static _r7cd9c20c3c3b81 = [300, 900, 1800, 3600, 10800];
  _window = null;
  _data = null;
  _updatingControls = !1;
  _rc718e514ab0c8c = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get visible() {
    return this._window !== null && this._window.visible;
  }
  _r8bcd106a5b8cdf(e) {
    return this.visible && this._data !== null && this._data.roomId === e;
  }
  update(e) {
    (this.ensureWindow(),
      (this._data = e),
      (this._updatingControls = !0),
      this.setChecked(this.enabledCheckbox, e.enabled),
      this.setChecked(this.guardEnabledCheckbox, e.guardEnabled),
      (this.detectionDropdown.selection = a._r8bca97e6f8acac.indexOf(e._rd072b6d8e46ea7)),
      (this.actionDropdown.selection = a._raff85f3534fcbe.indexOf(e.actionType)),
      (this.banDurationDropdown.selection = a.actionType.indexOf(e._r948f35b43ab81d)),
      (this.guardDurationDropdown.selection = a._r7cd9c20c3c3b81.indexOf(e.guardDurationSeconds)),
      (this.guardSensitivityDropdown.selection = a._r8bca97e6f8acac.indexOf(e.guardSensitivity)),
      (this.incidentInactiveText.text =
        e.lastRaidAtEpochSeconds > 0
          ? this._navigator.localization.getLocalizationWithParams(
              "raid.protection.settings.status.inactive.last",
              "",
              "timestamp",
              new Date(Number(e.lastRaidAtEpochSeconds) * 1e3).toLocaleString(),
            )
          : "${raid.protection.settings.status.inactive}"),
      (this.incidentActiveText.visible = e.incidentActive),
      (this.incidentInactiveText.visible = !e.incidentActive),
      (this._updatingControls = !1),
      this.refreshState());
  }
  show() {
    ((this._window.visible = !0), this._window.activate());
  }
  hide() {
    this._window && (this._window.visible = !1);
  }
  _r24d4adb825b7d2(e) {
    ((this._rc718e514ab0c8c = e), this.visible && this.refreshState());
  }
  ensureWindow() {
    if (!this._window) {
      ((this._window = this._navigator.getXmlWindow("raid_protection_settings")),
        this._window.center(),
        this.detectionDropdown.populate([
          "${raid.protection.settings.sensitivity.low}",
          "${raid.protection.settings.sensitivity.medium}",
          "${raid.protection.settings.sensitivity.high}",
        ]),
        this.actionDropdown.populate([
          "${raid.protection.settings.action.kick}",
          "${raid.protection.settings.action.temporary_ban}",
        ]),
        this.banDurationDropdown.populate(this.durationLabels(a.actionType)),
        this.guardDurationDropdown.populate(this.durationLabels(a._r7cd9c20c3c3b81)),
        this.guardSensitivityDropdown.populate([
          "${raid.protection.settings.sensitivity.low}",
          "${raid.protection.settings.sensitivity.medium}",
          "${raid.protection.settings.sensitivity.high}",
        ]));
      for (let e of this.controls)
        (e.addEventListener(y.const_238, this._rf007a2bd3a45e9),
          e.addEventListener(y.const_1217, this._rf007a2bd3a45e9));
      (this.saveButton.addEventListener(u.CLICK, this.var_2531),
        this.cancelButton.addEventListener(u.CLICK, this._r564c535f5cdb1b),
        this._window.findChildByTag("close").addEventListener(u.CLICK, this._r564c535f5cdb1b));
    }
  }
  durationLabels(e) {
    let r = [];
    for (let t of e) r.push("${raid.protection.settings.duration." + t + "}");
    return r;
  }
  _rf007a2bd3a45e9 = n(() => {
    this._updatingControls || this.refreshState();
  }, "_rf007a2bd3a45e9");
  var_2531 = n(() => {
    if (this._data === null) return;
    let e = this._rfab27d51ee6cb7();
    e !== null && this.var_63.requestSave(e);
  }, "var_2531");
  _r564c535f5cdb1b = n(() => {
    this.var_63.close();
  }, "_r564c535f5cdb1b");
  _rfab27d51ee6cb7() {
    return this.detectionDropdown.selection < 0 ||
      this.detectionDropdown.selection >= a._r8bca97e6f8acac.length ||
      this.actionDropdown.selection < 0 ||
      this.actionDropdown.selection >= a._raff85f3534fcbe.length ||
      this.banDurationDropdown.selection < 0 ||
      this.banDurationDropdown.selection >= a.actionType.length ||
      this.guardDurationDropdown.selection < 0 ||
      this.guardDurationDropdown.selection >= a._r7cd9c20c3c3b81.length ||
      this.guardSensitivityDropdown.selection < 0 ||
      this.guardSensitivityDropdown.selection >= a._r8bca97e6f8acac.length
      ? null
      : new Jm(
          this._data.roomId,
          this.enabledCheckbox.isSelected,
          a._r8bca97e6f8acac[this.detectionDropdown.selection],
          a._raff85f3534fcbe[this.actionDropdown.selection],
          a.actionType[this.banDurationDropdown.selection],
          this.guardEnabledCheckbox.isSelected,
          a._r7cd9c20c3c3b81[this.guardDurationDropdown.selection],
          a._r8bca97e6f8acac[this.guardSensitivityDropdown.selection],
          this._data.incidentActive,
          this._data.lastRaidAtEpochSeconds,
        );
  }
  refreshState() {
    if (this._window === null) return;
    let e = this.enabledCheckbox.isSelected,
      r = this.actionDropdown.selection === a._raff85f3534fcbe.indexOf(Jm.ACTION_KICK);
    (WindowUtils.disableSection(this.protectionControls, !e),
      WindowUtils.disableSection(this.banDurationSection, !e || r),
      WindowUtils.disableSection(this.guardControls, !e || !this.guardEnabledCheckbox.isSelected),
      WindowUtils.disableSection(this.saveButton, this._rc718e514ab0c8c));
  }
  setChecked(e, r) {
    r ? e.select() : e.unselect();
  }
  dispose() {
    if (!this._disposed) {
      if (((this._disposed = !0), this._window)) {
        for (let e of this.controls)
          (e.removeEventListener(y.const_238, this._rf007a2bd3a45e9),
            e.removeEventListener(y.const_1217, this._rf007a2bd3a45e9));
        (this.saveButton.removeEventListener(u.CLICK, this.var_2531),
          this.cancelButton.removeEventListener(u.CLICK, this._r564c535f5cdb1b),
          this._window.findChildByTag("close").removeEventListener(u.CLICK, this._r564c535f5cdb1b),
          this._window.dispose(),
          (this._window = null));
      }
      ((this.var_63 = null), (this._navigator = null), (this._data = null));
    }
  }
  get controls() {
    return [
      this.enabledCheckbox,
      this.guardEnabledCheckbox,
      this.detectionDropdown,
      this.actionDropdown,
      this.banDurationDropdown,
      this.guardDurationDropdown,
      this.guardSensitivityDropdown,
    ];
  }
  get enabledCheckbox() {
    return this._window.findChildByName("enabled_checkbox");
  }
  get protectionControls() {
    return this._window.findChildByName("protection_controls");
  }
  get detectionDropdown() {
    return this._window.findChildByName("detection_sensitivity_dropdown");
  }
  get actionDropdown() {
    return this._window.findChildByName("action_type_dropdown");
  }
  get banDurationSection() {
    return this._window.findChildByName("ban_duration_section");
  }
  get banDurationDropdown() {
    return this._window.findChildByName("ban_duration_dropdown");
  }
  get guardEnabledCheckbox() {
    return this._window.findChildByName("guard_enabled_checkbox");
  }
  get guardControls() {
    return this._window.findChildByName("guard_controls");
  }
  get guardDurationDropdown() {
    return this._window.findChildByName("guard_duration_dropdown");
  }
  get guardSensitivityDropdown() {
    return this._window.findChildByName("guard_sensitivity_dropdown");
  }
  get incidentActiveText() {
    return this._window.findChildByName("incident_active_text");
  }
  get incidentInactiveText() {
    return this._window.findChildByName("incident_inactive_text");
  }
  get saveButton() {
    return this._window.findChildByName("save_button");
  }
  get cancelButton() {
    return this._window.findChildByName("cancel_button");
  }
}
