// Extracted from HabboAirLauncher.deobf.js, line 177717.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconAlbumModel.as
// Obfuscated name: _i2840facf0120d4

class {
  static {
    n(this, "HabbiconAlbumModel");
  }
  sets = [];
  _ra5a59dfa5aaf5f = [];
  _r5f31375af05a8e = [];
  stats = new HabbiconAlbumStats();
  _r1ef091740032ad(e) {
    return this.sets.find((r) => r != null && r.id === e) ?? null;
  }
  _r62d05334eaf926(e) {
    return this.sets.find((r) => r != null && r.collectionId === e) ?? null;
  }
  _rde7c2364fbadfc(e) {
    for (let r of this.sets)
      if (r != null) {
        for (let t of r.habbicons) if (t != null && t.habbiconId === e) return t;
        if (r.rewardHabbicon != null && r.rewardHabbicon.habbiconId === e)
          return r.rewardHabbicon;
      }
    return null;
  }
}
