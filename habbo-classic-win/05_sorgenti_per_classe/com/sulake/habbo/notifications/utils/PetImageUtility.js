// Extracted from HabboAirLauncher.deobf.js, line 263844.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/utils/PetImageUtility.as
// Obfuscated name: _if06879cdbf5e00

class {
  static {
    n(this, "PetImageUtility");
  }
  _roomEngine;
  constructor(e) {
    this._roomEngine = e;
  }
  dispose() {
    this._roomEngine = null;
  }
  getPetImage(e, r, t, i = 3, s = !1, o = 32, d = null) {
    if (this._roomEngine == null || e < 0 || r < 0) return null;
    let c = Number.parseInt(t, 16);
    return (
      this._roomEngine.getPetImage(e, r, c, new k(45 * i), o, null, s, 0, null, d)?.data ?? null
    );
  }
}
