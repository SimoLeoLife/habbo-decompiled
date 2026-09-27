// Extracted from HabboAirLauncher.deobf.js, line 147064.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/floorplaneditor/ImportExportDialog.as
// Obfuscated name: _ic256081df290f4

class {
  constructor(e, r) {
    this._bcFloorPlanEditor = e;
    this._layout = r;
  }
  static {
    n(this, "ImportExportDialog");
  }
  _window = null;
  set visible(e) {
    if (
      (this._window == null &&
        ((this._window = this._bcFloorPlanEditor.windowManager.buildFromXML(this._layout)),
        this._window.center(),
        (this._window.procedure = this.windowProcedure)),
      e)
    ) {
      this._window.visible = !0;
      let r = this._window.findChildByName("data");
      (r != null && (r.caption = this._bcFloorPlanEditor._r223f1e7a35055c.getData()),
        this._bcFloorPlanEditor._r575669f0744943 > 0 ||
        this._bcFloorPlanEditor.windowManager.sessionDataManager?.hasSecurity(class_1794.EMPLOYEE)
          ? this._window.findChildByName("save")?.enable()
          : this._window.findChildByName("save")?.disable(),
        this._window.activate());
    } else this._window.visible = !1;
  }
  get visible() {
    return this._window?.visible ?? !1;
  }
  windowProcedure = n((e, r) => {
    if (!(e.type !== u.CLICK || this._window == null))
      switch (r.name) {
        case "header_button_close":
          this.visible = !1;
          break;
        case "revert": {
          let t = this._window.findChildByName("data");
          t != null && (t.caption = this._bcFloorPlanEditor.lastReceivedFloorPlan);
          break;
        }
        case "save": {
          let t = this._window.findChildByName("data")?.caption ?? "";
          this._bcFloorPlanEditor.windowManager.communication?.connection?.send(
            new class_2506(
              t,
              this._bcFloorPlanEditor._r223f1e7a35055c.entryPoint.x,
              this._bcFloorPlanEditor._r223f1e7a35055c.entryPoint.y,
              this._bcFloorPlanEditor._r223f1e7a35055c._r1a961bea1ff44e,
              Np.getThicknessSettingBySelectionIndex(this._bcFloorPlanEditor._rdbce713bddeb2b),
              Np.getThicknessSettingBySelectionIndex(this._bcFloorPlanEditor._r2cacaaa4b8c0dc),
            ),
          );
          break;
        }
      }
  }, "windowProcedure");
}
