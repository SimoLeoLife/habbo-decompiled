// Extracted from HabboAirLauncher.deobf.js, line 315163.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/mysterybox/MysteryBoxToolbarExtension.as
// Obfuscated name: _id1ca2613e8f036

class a {
  constructor(e) {
    this._handler = e;
  }
  static {
    n(this, "MysteryBoxToolbarExtension");
  }
  static const_1306 = "mystery_box_toolbar_extension_minimised";
  static KEY_COLORS = new Map([
    ["purple", 9452386],
    ["blue", 3891856],
    ["green", 6459451],
    ["yellow", 10658089],
    ["lilac", 6897548],
    ["orange", 10841125],
    ["turquoise", 2661026],
    ["red", 10104881],
  ]);
  _disposed = !1;
  _window = null;
  get disposed() {
    return this._disposed;
  }
  createWindow() {
    let e = this._handler?.widget,
      r = this._handler?.container;
    if (
      e?.assets == null ||
      r?.windowManager == null ||
      r.toolbar?.extensionView == null ||
      r.config == null
    )
      return;
    let t = e.assets.getAssetByName("mystery_box_toolbar_extension")?.content;
    if (
      t == null ||
      ((this._window = r.windowManager.buildFromXML(t)), this._window == null)
    )
      return;
    let i = this._window.findChildByName("faq_link");
    (i != null && (i.visible = r.config.getProperty("mysterybox.faq.url") !== ""),
      (this._window.procedure = this.windowProcedure),
      r.toolbar.extensionView._ra96f07968c4ed0(ToolbarDisplayExtensionIds.MYSTERY_BOX, this._window));
    let s = r.sessionDataManager;
    (s?.events?.addEventListener?.(Fy.MYSTERY_BOX_KEYS_UPDATE, this.onKeysUpdated),
      this.setMinimised(this.minimised),
      this.setKeyColors(s?.mysteryBoxColor ?? "", s?.mysteryKeyColor ?? ""));
  }
  dispose() {
    if (this._disposed) return;
    this._window != null && (this._window.dispose(), (this._window = null));
    let e = this._handler?.container;
    (e != null &&
      (e.toolbar?.extensionView?._rb18768cf275a26(ToolbarDisplayExtensionIds.MYSTERY_BOX),
      e.sessionDataManager?.events?.removeEventListener?.(Fy.MYSTERY_BOX_KEYS_UPDATE, this.onKeysUpdated)),
      (this._handler = null),
      (this._disposed = !0));
  }
  windowProcedure = n((e, r) => {
    if (e.type === u.CLICK)
      switch (e.target?.name) {
        case "minimize_region":
          this.setMinimised(!0);
          break;
        case "maximize_region":
          this.setMinimised(!1);
          break;
        case "faq_link":
          Ae.openWebPage(
            this._handler?.container?.config?.getProperty("mysterybox.faq.url") ?? "",
            "habboMain",
          );
          break;
      }
  }, "windowProcedure");
  setKeyColors(e, r) {
    if (this._window == null) return;
    let t = e !== "";
    if (
      ((this._window.findChildByName("box_colour").visible = t),
      (this._window.findChildByName("box_overlay").visible = t),
      (this._window.findChildByName("small_box").visible = t && this.minimised),
      (this._window.findChildByName("box_region").toolTipCaption = t
        ? `\${mysterybox.tracker.box.${e.toLowerCase()}}`
        : ""),
      t)
    ) {
      let s = a.KEY_COLORS.get(e.toLowerCase()) ?? 0;
      ((this._window.findChildByName("box_colour").color = s),
        (this._window.findChildByName("small_box").color = s));
    }
    let i = r !== "";
    if (
      ((this._window.findChildByName("key_colour").visible = i),
      (this._window.findChildByName("key_overlay").visible = i),
      (this._window.findChildByName("small_key").visible = i && this.minimised),
      (this._window.findChildByName("key_region").toolTipCaption = i
        ? `\${mysterybox.tracker.key.${r.toLowerCase()}}`
        : ""),
      i)
    ) {
      let s = a.KEY_COLORS.get(r.toLowerCase()) ?? 0;
      ((this._window.findChildByName("key_colour").color = s),
        (this._window.findChildByName("small_key").color = s));
    }
  }
  onKeysUpdated = n((e) => {
    this.setKeyColors(e._r53f605554bc6dd, e._r69986912642341);
  }, "onKeysUpdated");
  get minimised() {
    return this._handler?.container?.config?.getBoolean(a.const_1306) ?? !1;
  }
  setMinimised(e) {
    let r = this._handler?.container;
    r == null ||
      this._window == null ||
      (e
        ? ((this._window.findChildByName("minimize_region").visible = !1),
          (this._window.findChildByName("maximize_region").visible = !0),
          (this._window.findChildByName("small_box").visible =
            this._window.findChildByName("box_colour")?.visible ?? !1),
          (this._window.findChildByName("small_key").visible =
            this._window.findChildByName("key_colour")?.visible ?? !1),
          (this._window.height = 25))
        : ((this._window.findChildByName("minimize_region").visible = !0),
          (this._window.findChildByName("maximize_region").visible = !1),
          (this._window.findChildByName("small_box").visible = !1),
          (this._window.findChildByName("small_key").visible = !1),
          (this._window.height = 137)),
      r.config?.setProperty(a.const_1306, String(e)));
  }
}
