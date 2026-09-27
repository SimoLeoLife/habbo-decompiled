// Extracted from HabboAirLauncher.deobf.js, line 59654.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/profiler/ProfilerAgent.as
// Obfuscated name: _i907b5b803dddfa

class extends UnkClass_b37ab1 {
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
