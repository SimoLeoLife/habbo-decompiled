// Extracted from HabboAirLauncher.deobf.js, line 300202.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if645d709041f2e

class extends Qr {
  static {
    n(this, "UnkClass_f645d7");
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("planetsystem");
    r.length() !== 0 && this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_PLANETSYSTEM_DATA, String(r));
  }
}
