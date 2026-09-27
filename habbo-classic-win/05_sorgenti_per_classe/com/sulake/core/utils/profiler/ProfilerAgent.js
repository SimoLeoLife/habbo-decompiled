// Estratto da HabboAirLauncher.deobf.js, riga 59654.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/profiler/ProfilerAgent.as
// Nome offuscato: _i907b5b803dddfa

class extends _ib37ab1aa45cc9f {
  constructor(r) {
    let t = r != null ? _iad1dc21ca35e21(r) : "UnknownReceiver";
    super(t.slice(t.lastIndexOf(":") + 1));
    this._receiver = r;
  }
  static {
    n(this, "ProfilerAgent");
  }
  get receiver() {
    return this._receiver;
  }
  dispose() {
    ((this._receiver = null), super.dispose());
  }
  update(r) {
    this.paused ||
      this._receiver == null ||
      (super.start(), this._receiver.update(r), super.stop());
  }
}
