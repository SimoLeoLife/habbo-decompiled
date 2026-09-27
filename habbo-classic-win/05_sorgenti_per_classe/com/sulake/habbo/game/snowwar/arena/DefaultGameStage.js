// Extracted from HabboAirLauncher.deobf.js, line 221238.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/arena/DefaultGameStage.as
// Obfuscated name: _i2d286a7637ae90

class {
  static {
    n(this, "DefaultGameStage");
  }
  _r5d7d673467ca15 = null;
  var_3530 = null;
  _disposed = !1;
  dispose() {
    ((this._disposed = !0), (this._r5d7d673467ca15 = null), (this.var_3530 = null));
  }
  get disposed() {
    return this._disposed;
  }
  initialize(e, r) {
    ((this._r5d7d673467ca15 = e), (this.var_3530 = r));
  }
  get _r0c148637e03364() {
    return this._r5d7d673467ca15;
  }
  get gameLevelData() {
    return this.var_3530;
  }
  get roomType() {
    return "";
  }
}
