// Extracted from HabboAirLauncher.deobf.js, line 60322.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/class_14.as
// Obfuscated name: _i8c3ad067892bc3

class {
  static {
    n(this, "class_14");
  }
  static CORE_SETUP_FRAME_UPDATE_SIMPLE = 0;
  static _rfa963bd44ad884 = 1;
  static _r9be507f8634252 = 2;
  static _raec78e22cdca0c = 4;
  static _r4ffc196616a655 = 15;
  static _r45378a812c2e75 = 15;
  static _r6bf12a66aab17c = 1;
  static _rfcf906423aa8ef = 2;
  static ERROR_CATEGORY_DOWNLOAD_CRITICAL_ASSET = 3;
  static _rb99b6a233ae96c = 4;
  static ERROR_CATEGORY_COMPONENT_RESOURCE_LOAD_ERROR = 5;
  static ERROR_CATEGORY_INTERFACE_AVAILABILITY = 6;
  static ERROR_CATEGORY_PRODUCT_DATA = 7;
  static ERROR_CATEGORY_DOWNLOAD_LOCALIZATION = 8;
  static ERROR_CATEGORY_FINALIZE_PRELOADING = 9;
  static ERROR_CATEGORY_INITIALIZE_CORE = 10;
  static ERROR_CATEGORY_DOWNLOAD_FONT = 11;
  static ERROR_CATEGORY_FURNIDATA_DOWNLOAD = 12;
  static ERROR_CATEGORY_DOWNLOAD_EXTERNAL_VARIABLES = 20;
  static ERROR_CATEGORY_DOWNLOAD_EXTERNAL_VARIABLES_OVERRIDE = 21;
  static ERROR_CATEGORY_COMMMUNICATION_INIT = 29;
  static ERROR_CATEGORY_CONNECT_TO_PROXY = 30;
  static ERROR_UNCAUGHT_ERROR = 40;
  static ERROR_CATEGORY_INTENTIONAL_DEBUG_CRASH = 99;
  static var_325 = null;
  static get version() {
    return "0.0.3";
  }
  static get instance() {
    return this.var_325;
  }
  static instantiate(e, r, t = null, i = null) {
    return (
      this.var_325 == null && (this.var_325 = new C2(e, t ?? new UnkClass_22937e(), r, i)),
      this.var_325
    );
  }
  static _r99da3325792405(e) {
    this.var_325 = e;
  }
  static error(e, r, t = -1, i = null) {
    this.var_325?.error(e, r, t, i);
  }
  static warning(e) {
    this.var_325?.warning(e);
  }
  static debug(e) {
    this.var_325?.debug(e);
  }
  static crash(e, r, t = null) {
    this.var_325?.error(e, !0, r, t);
  }
  static purge() {
    this.var_325?.purge();
  }
  static dispose() {
    (this.var_325?.dispose(), (this.var_325 = null));
  }
}
