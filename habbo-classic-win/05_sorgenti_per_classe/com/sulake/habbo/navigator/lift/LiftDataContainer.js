// Estratto da HabboAirLauncher.deobf.js, riga 259164.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/lift/LiftDataContainer.as
// Nome offuscato: _if790d16aadf797

class a {
  static {
    n(this, "LiftDataContainer");
  }
  static DEFAULT_IMAGE = "${image.library.url}officialrooms_hq/nav_teaser_wl.png";
  _navigator;
  _liftedRooms = [];
  constructor(e) {
    this._navigator = e;
  }
  setLiftedRooms(e) {
    this._liftedRooms = e;
  }
  get liftedRooms() {
    return this._liftedRooms;
  }
  getUrlForLiftImageAtIndex(e) {
    return e < 0 || e > this._liftedRooms.length - 1
      ? ""
      : this._liftedRooms[e].image === ""
        ? a.DEFAULT_IMAGE
        : this._navigator.imageLibraryBaseUrl + this._liftedRooms[e].image;
  }
}
