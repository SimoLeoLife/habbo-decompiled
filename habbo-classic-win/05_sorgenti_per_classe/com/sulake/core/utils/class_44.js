// Estratto da HabboAirLauncher.deobf.js, riga 50845.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_44.as
// Nome offuscato: _ie942a88aabebb3

class a extends M {
  constructor(r, t, i, s, o) {
    super(r, !1, !1);
    this.status = t;
    this.bytesTotal = i;
    this.bytesLoaded = s;
    this.elapsedTime = o;
  }
  static {
    n(this, "class_44");
  }
  static LIBRARY_LOADER_EVENT_COMPLETE = "LIBRARY_LOADER_EVENT_COMPLETE";
  static LIBRARY_LOADER_EVENT_PROGRESS = "LIBRARY_LOADER_EVENT_PROGRESS";
  static LIBRARY_LOADER_EVENT_UNLOAD = "LIBRARY_LOADER_EVENT_UNLOAD";
  static LIBRARY_LOADER_EVENT_STATUS = "LIBRARY_LOADER_EVENT_STATUS";
  static LIBRARY_LOADER_EVENT_ERROR = "LIBRARY_LOADER_EVENT_ERROR";
  static LIBRARY_LOADER_EVENT_DEBUG = "LIBRARY_LOADER_EVENT_DEBUG";
  static LIBRARY_LOADER_EVENT_DISPOSE = "LIBRARY_LOADER_EVENT_DISPOSE";
  clone() {
    return new a(this.type, this.status, this.bytesTotal, this.bytesLoaded, this.elapsedTime);
  }
}
