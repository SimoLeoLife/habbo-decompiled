// Estratto da HabboAirLauncher.deobf.js, riga 300202.

class extends Qr {
  static {
    n(this, "_if645d709041f2e");
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("planetsystem");
    r.length() !== 0 && this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_PLANETSYSTEM_DATA, String(r));
  }
}
