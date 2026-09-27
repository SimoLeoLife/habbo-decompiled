// Estratto da HabboAirLauncher.deobf.js, riga 145259.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/MysteryBoxKeysUpdateEvent.as
// Nome offuscato: _i8ba26a7a9b53fd

class a extends M {
  static {
    n(this, "MysteryBoxKeysUpdateEvent");
  }
  static MYSTERY_BOX_KEYS_UPDATE = "mbke_update";
  _rf0f533bbba828b;
  _rede01f596d701b;
  constructor(e, r, t = !1, i = !1) {
    (super(a.MYSTERY_BOX_KEYS_UPDATE, t, i), (this._rf0f533bbba828b = e), (this._rede01f596d701b = r));
  }
  get _r53f605554bc6dd() {
    return this._rf0f533bbba828b;
  }
  get _r69986912642341() {
    return this._rede01f596d701b;
  }
}
