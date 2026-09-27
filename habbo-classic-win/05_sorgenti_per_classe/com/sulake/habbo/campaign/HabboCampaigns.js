// Estratto da HabboAirLauncher.deobf.js, riga 339676.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/campaign/HabboCampaigns.as
// Nome offuscato: _i8a76ef9fa8555c

class extends ue {
  static {
    n(this, "HabboCampaigns");
  }
  var_1290 = null;
  _r4a0c02da105664 = -1;
  _re1e97106471afe = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDRoomEngine(), (e) => {
        this._roomEngine = e;
      }),
    ]);
  }
  initComponent() {
    let e = n((t) => this._rf6372181dbd425(t), "_if6372181dbd425"),
      r = n((t) => this._r177b0914e42555(t), "_i177b0914e42555");
    (!1,
      this._r6358b2bd53ae19 != null &&
        ((this._r31913058cb5ad8 = new _ieef5e9e4651fc7(e)),
        (this._r9b4a7402b05726 = new class_2616(r)),
        this._r6358b2bd53ae19._r2e106e2349a0b6(this._r31913058cb5ad8),
        this._r6358b2bd53ae19._r2e106e2349a0b6(this._r9b4a7402b05726)),
      this.context._r7e43d9f4706607(this));
  }
  dispose() {
    (this._r11d756c943900d(),
      this._r6358b2bd53ae19 != null &&
        (this._r31913058cb5ad8 != null && this._r6358b2bd53ae19._r7668362bf55fdd(this._r31913058cb5ad8),
        this._r9b4a7402b05726 != null && this._r6358b2bd53ae19._r7668362bf55fdd(this._r9b4a7402b05726)),
      this.context._r7485c47d8bd77c(this),
      (this._r31913058cb5ad8 = null),
      (this._r9b4a7402b05726 = null),
      (this._r6358b2bd53ae19 = null),
      (this._localizationManager = null),
      (this._sessionDataManager = null),
      (this._windowManager = null),
      (this._roomEngine = null),
      super.dispose());
  }
  _r6513dfea4b20bf(e) {
    ((this._r4a0c02da105664 = e),
      !1,
      this._re98069f3afba99 != null &&
        this._r6358b2bd53ae19?.connection?.send(new _i8704fcb55b80b0(this._re98069f3afba99.campaignName, e)));
  }
  _rdd72155a261595(e) {
    ((this._r4a0c02da105664 = e),
      !1,
      this._re98069f3afba99 != null &&
        this._r6358b2bd53ae19?.connection?.send(new _i21c19f3567d2a4(this._re98069f3afba99.campaignName, e)));
  }
  get linkPattern() {
    return "openView/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length >= 2 && r[1] === "calendar" && this.showCalendar();
  }
  _r11d756c943900d() {
    (this.var_1290?.dispose(), (this.var_1290 = null));
  }
  get calendarData() {
    if (this._re98069f3afba99 == null) throw new Error("Campaign calendar data is not available.");
    return this._re98069f3afba99;
  }
  get isAnyRoomController() {
    return this._sessionDataManager?.isAnyRoomController ?? !1;
  }
  get localizationManager() {
    if (this._localizationManager == null) throw new Error("Localization manager is not available.");
    return this._localizationManager;
  }
  _rf6372181dbd425 = n((e) => {
    (!1, (this._re98069f3afba99 = e.getParser()._r2e647e5b70f771()));
  }, "_rf6372181dbd425");
  _r177b0914e42555 = n((e) => {
    let r = e.getParser();
    r._r2685a5c0b25116 &&
      this.showProductNotification(r.productName ?? "", r.customImage ?? "", r.furnitureClassName ?? "");
  }, "_r177b0914e42555");
  showProductNotification(e, r, t) {
    let i = this._sessionDataManager?.getProductData(e) ?? null;
    i == null ||
      this.var_1290 == null ||
      this._re98069f3afba99 == null ||
      (this._re98069f3afba99.openedDays.push(this._r4a0c02da105664),
      (this._r4a0c02da105664 = -1),
      r.length > 0
        ? this.var_1290.setReceivedProduct(i, `${this.getImageGalleryUrl()}${r}`)
        : t.length > 0 &&
          (this.var_1290.setReceivedProduct(i), this.requestIconFromRoomEngine(this.var_1290, t)));
  }
  requestIconFromRoomEngine(e, r) {
    let t = null,
      i = this._sessionDataManager?.getFloorItemDataByName(r) ?? null;
    return (
      i != null
        ? (t = this._roomEngine?._r65a31a885a1252(i.id, e) ?? null)
        : ((i = this._sessionDataManager?.getWallItemDataByName(r) ?? null),
          i != null && (t = this._roomEngine?.getWallItemDataByName(i.id, e) ?? null)),
      t?.data != null && e.imageReady(t.id, t.data),
      t
    );
  }
  showCalendar() {
    this.var_1290 == null &&
      this._re98069f3afba99 != null &&
      this._windowManager != null &&
      (this.var_1290 = new HEe(this, this._windowManager));
  }
  getImageGalleryUrl() {
    return this.getProperty("image.library.url");
  }
}
