// Extracted from HabboAirLauncher.deobf.js, line 284379.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id0fbcb77a2d7a4

class {
  constructor(e) {
    this._assets = e;
  }
  static {
    n(this, "UnkClass_d0fbcb");
  }
  _r198ea9f0f21815(e) {
    let r = this._assets.getAssetByName(e);
    return r instanceof Qt && r.content instanceof A ? r.content : null;
  }
  _r93de184d6f2403(e) {
    let r = this._assets.getAssetByName(e);
    return r instanceof Df && r.content instanceof yi ? r.content : null;
  }
}
