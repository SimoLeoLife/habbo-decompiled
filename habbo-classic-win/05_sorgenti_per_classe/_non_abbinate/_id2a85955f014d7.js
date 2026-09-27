// Estratto da HabboAirLauncher.deobf.js, riga 181079.

class extends RoomObjectUpdateStateMessage {
  constructor(r) {
    super();
    this.var_857 = r;
  }
  static {
    n(this, "_id2a85955f014d7");
  }
  get isBlocked() {
    return this.var_857;
  }
}
