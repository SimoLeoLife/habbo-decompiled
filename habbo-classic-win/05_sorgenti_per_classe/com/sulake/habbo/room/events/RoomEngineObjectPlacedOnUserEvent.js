// Extracted from HabboAirLauncher.deobf.js, line 70570.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineObjectPlacedOnUserEvent.as
// Obfuscated name: _i1f48dc3292e1be

class extends RoomEngineObjectEvent {
  static {
    n(this, "RoomEngineObjectPlacedOnUserEvent");
  }
  _rb7224bd89f5753;
  _rac69221252a241;
  constructor(e, r, t, i, s, o, d = !1, c = !1) {
    (super(e, r, t, i, d, c), (this._rb7224bd89f5753 = s), (this._rac69221252a241 = o));
  }
  get _r272f47cdb20770() {
    return this._rb7224bd89f5753;
  }
  get _rfc02605464439e() {
    return this._rac69221252a241;
  }
}
