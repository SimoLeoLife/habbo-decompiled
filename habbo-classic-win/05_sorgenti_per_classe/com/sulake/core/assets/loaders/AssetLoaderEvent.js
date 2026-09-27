// Estratto da HabboAirLauncher.deobf.js, riga 55668.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/assets/loaders/AssetLoaderEvent.as
// Nome offuscato: _i531dc2f354082e

class a extends M {
  constructor(r, t) {
    super(r, !1, !1);
    this.status = t;
  }
  static {
    n(this, "AssetLoaderEvent");
  }
  static ASSET_LOADER_EVENT_COMPLETE = "AssetLoaderEventComplete";
  static ASSET_LOADER_EVENT_PROGRESS = "AssetLoaderEventProgress";
  static ASSET_LOADER_EVENT_UNLOAD = "AssetLoaderEventUnload";
  static ASSET_LOADER_EVENT_STATUS = "AssetLoaderEventStatus";
  static ASSET_LOADER_EVENT_ERROR = "AssetLoaderEventError";
  static ASSET_LOADER_EVENT_OPEN = "AssetLoaderEventOpen";
  clone() {
    return new a(this.type, this.status);
  }
  toString() {
    return `AssetLoaderEvent(type=${this.type}, status=${this.status})`;
  }
}
