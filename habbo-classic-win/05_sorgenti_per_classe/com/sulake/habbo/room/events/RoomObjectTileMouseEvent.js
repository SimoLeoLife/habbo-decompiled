// Estratto da HabboAirLauncher.deobf.js, riga 180948.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectTileMouseEvent.as
// Nome offuscato: _ib6f39ea0caf1c9

class extends RoomObjectMouseEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1, l = !1, b = !1, _ = !1, h = !1) {
    super(r, t, i, c, f, l, b, _, h);
    this.var_4061 = s;
    this.var_4018 = o;
    this.var_4158 = d;
  }
  static {
    n(this, "RoomObjectTileMouseEvent");
  }
  get _r8cd881fce01c28() {
    return this.var_4061;
  }
  get _rc8a3440ff104a3() {
    return this.var_4018;
  }
  get _rc6b05356f63add() {
    return this.var_4158;
  }
  get tileXAsInt() {
    return Math.trunc(this.var_4061 + 0.499);
  }
  get tileYAsInt() {
    return Math.trunc(this.var_4018 + 0.499);
  }
  get _r68611cc6de4b35() {
    return Math.trunc(this.var_4158 + 0.499);
  }
}
