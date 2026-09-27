// Extracted from HabboAirLauncher.deobf.js, line 159612.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionQueueEvent.as
// Obfuscated name: _i4a13c80c1f8017

class a extends RoomSessionEvent {
  constructor(r, t, i, s = !1, o = !1, d = !1) {
    super(a.QUEUE_STATUS, r, o, d);
    this._name = t;
    this.var_203 = i;
    this._isActive = s;
  }
  static {
    n(this, "RoomSessionQueueEvent");
  }
  static QUEUE_STATUS = "RSQE_QUEUE_STATUS";
  static const_1111 = "c";
  static QUEUE_TYPE_NORMAL = "d";
  static const_189 = 2;
  static const_176 = 1;
  _r542dd6623dac18 = new B();
  get isActive() {
    return this._isActive;
  }
  get _r37a2ee77b4eefd() {
    return this._name;
  }
  get _r272e6f0f30b82f() {
    return this.var_203;
  }
  get queueTypes() {
    return this._r542dd6623dac18.getKeys();
  }
  getQueueSize(r) {
    return this._r542dd6623dac18.getValue(r) ?? 0;
  }
  addQueue(r, t) {
    this._r542dd6623dac18.add(r, t);
  }
}
