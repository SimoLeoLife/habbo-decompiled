// Extracted from HabboAirLauncher.deobf.js, line 166582.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/alias/AssetAliasCollection.as
// Obfuscated name: _i292cc04ba9f9de

class {
  static {
    n(this, "AssetAliasCollection");
  }
  _assets;
  _aliases = new Map();
  _avatarRenderManager;
  _missingAssetNames = {};
  constructor(e, r) {
    ((this._avatarRenderManager = e), (this._assets = r));
  }
  dispose() {
    ((this._assets = null), this._aliases.clear());
  }
  reset() {
    ((this._missingAssetNames = {}), this.init());
  }
  _r191eeb6a869ca6(e) {
    let r = this._assets?._r4f68a497a0c5f5(`/${e}.swf`);
    if (r == null) return;
    let t = r.manifest;
    for (let i of _i4a80536b1445be(t, "alias")) {
      let s = i.getAttribute("name") ?? "";
      this._aliases.set(s, new AssetAlias(i));
    }
  }
  init() {
    let e = this._assets?._r911afadeb8d036() ?? [];
    for (let r of e)
      for (let t of _i4a80536b1445be(r, "alias")) {
        let i = t.getAttribute("name") ?? "";
        this._aliases.set(i, new AssetAlias(t));
      }
  }
  addAlias(e, r, t = !1, i = !1) {
    let s = new DOMParser().parseFromString(
      `<alias name="${e}" link="${r}" fliph="${t ? 1 : 0}" flipv="${i ? 1 : 0}" />`,
      "text/xml",
    ).documentElement;
    this._aliases.set(e, new AssetAlias(s));
  }
  _r5579631f3ac0d6(e) {
    return this._aliases.has(e);
  }
  getAssetName(e) {
    let r = e,
      t = 5;
    for (; this._r5579631f3ac0d6(r) && t >= 0;) ((r = this._aliases.get(r)?.link ?? r), t--);
    return r;
  }
  getAssetByName(e) {
    let r = this.getAssetName(e);
    if (this._missingAssetNames[r]) return null;
    let t = this._assets?.getAssetByName(r) ?? null;
    return (
      t == null &&
        !this._missingAssetNames[r] &&
        (this._avatarRenderManager?.events?.dispatchEvent?.(new wne(r)), (this._missingAssetNames[r] = !0)),
      t
    );
  }
}
