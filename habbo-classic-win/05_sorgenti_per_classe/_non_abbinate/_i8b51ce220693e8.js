// Estratto da HabboAirLauncher.deobf.js, riga 67419.

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.AVATAR_RENDER_ASSET_ERROR, t, i);
    this._assetName = r;
  }
  static {
    n(this, "_i8b51ce220693e8");
  }
  static AVATAR_RENDER_ASSET_ERROR = "AVATAR_RENDER_ASSET_ERROR";
  get assetName() {
    return this._assetName;
  }
}
