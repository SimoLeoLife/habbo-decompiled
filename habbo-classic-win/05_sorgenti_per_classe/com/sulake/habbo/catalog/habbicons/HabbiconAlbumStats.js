// Extracted from HabboAirLauncher.deobf.js, line 177705.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconAlbumStats.as
// Obfuscated name: _i13420d01dec7b2

class {
  static {
    n(this, "HabbiconAlbumStats");
  }
  _rb89e3e34d91de4 = 0;
  _rdc57e6c52845bc = 0;
  collected = 0;
  total = 0;
  get progressRatio() {
    return this.total <= 0 ? 0 : Math.max(0, Math.min(1, this.collected / this.total));
  }
}
