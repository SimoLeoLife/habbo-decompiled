// Extracted from HabboAirLauncher.deobf.js, line 173431.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/CatalogWindowState.as
// Obfuscated name: _i48e7560160014c

class {
  constructor(e) {
    this._r28a444d88bee4d = e;
    this._ra2fbb073d5d666 = new r5();
  }
  static {
    n(this, "CatalogWindowState");
  }
  mainContainer = null;
  catalogViewer = null;
  catalogNavigator = null;
  _ra2fbb073d5d666;
  lastPageRequestId = -1;
  dispose() {
    (this.catalogViewer?.dispose(),
      (this.catalogViewer = null),
      this.catalogNavigator?.dispose(),
      (this.catalogNavigator = null),
      this.mainContainer?.dispose(),
      (this.mainContainer = null),
      (this._ra2fbb073d5d666 = null),
      (this._r28a444d88bee4d = null),
      (this.lastPageRequestId = -1));
  }
}
