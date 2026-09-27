// Estratto da HabboAirLauncher.deobf.js, riga 210202.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/popup/HabboEpicPopupView.as
// Nome offuscato: _i18019ad5461956

class extends AbstractView {
  static {
    n(this, "HabboEpicPopupView");
  }
  _activeFrame = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
    ]);
  }
  dispose() {
    (this._activeFrame?.dispose(), (this._activeFrame = null), super.dispose());
  }
  initComponent() {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(
      new class_2368((e) => {
        this.onEpicPopupMessageEvent(e);
      }),
    );
  }
  showPopup(e) {
    this._activeFrame?.dispose();
    let r = this.assets.getAssetByName("epic_popup_frame_xml")?.content,
      t = r != null ? this._windowManager?.buildFromXML(r) : null;
    if (t == null) return;
    let i = t.findChildByName("content_static_bitmap");
    (i != null && (i.assetUri = e),
      (t.procedure = (s, o) => {
        this.windowProc(s, o);
      }),
      t.center(),
      (this._activeFrame = t));
  }
  onEpicPopupMessageEvent(e) {
    this.showPopup(e.getParser().imageUri);
  }
  windowProc(e, r) {
    if (!(this._activeFrame == null || e.type !== u.CLICK))
      switch (r.name) {
        case "close_button":
        case "header_button_close":
          (this._activeFrame.dispose(), (this._activeFrame = null));
          break;
      }
  }
}
