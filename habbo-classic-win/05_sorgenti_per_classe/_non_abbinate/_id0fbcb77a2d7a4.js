// Estratto da HabboAirLauncher.deobf.js, riga 284379.

class {
  constructor(e) {
    this._assets = e;
  }
  static {
    n(this, "_id0fbcb77a2d7a4");
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
