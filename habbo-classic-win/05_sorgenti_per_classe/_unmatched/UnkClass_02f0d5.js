// Extracted from HabboAirLauncher.deobf.js, line 55866.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i02f0d504eb3a43

class a extends Ft {
  static {
    n(this, "UnkClass_02f0d5");
  }
  static NONE = 0;
  static _rb9739f8a5177c3 = 1;
  static _r5ff5ea8eb8799e = 2;
  _status = 0;
  _rd0e6994ba0ea9f = 0;
  _rd397bb5e68b240 = 2;
  _errorCode = a.NONE;
  get errorCode() {
    return this._errorCode;
  }
  _r7e76cc8cddebaf(e) {
    switch (e.type) {
      case M.ComponentDependency:
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_COMPLETE, this._status));
        break;
      case "unload":
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_UNLOAD, this._status));
        break;
      case M.OPEN:
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_OPEN, this._status));
        break;
      case UnkClass_e40b94.PROGRESS:
        this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_PROGRESS, this._status));
        break;
      case UnkErrorEventSubclass_207e02._rb9739f8a5177c3:
        ((this._errorCode = a._rb9739f8a5177c3),
          this.retry() || this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_ERROR, this._status)));
        break;
      case UnkErrorEventSubclass_30cc54._r5ff5ea8eb8799e:
        ((this._errorCode = a._r5ff5ea8eb8799e),
          this.retry() || this.dispatchEvent(new Le(Le.ASSET_LOADER_EVENT_ERROR, this._status)));
        break;
      default:
        break;
    }
  }
  retry() {
    return !1;
  }
}
