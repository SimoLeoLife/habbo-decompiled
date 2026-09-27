// Estratto da HabboAirLauncher.deobf.js, riga 247876.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenRoomInSpectatorMode.as
// Nome offuscato: _i800668bea26789

class {
  constructor(e, r, t) {
    this._main = e;
    this.var_2440 = t;
    r.procedure = this.onClick;
  }
  static {
    n(this, "OpenRoomInSpectatorMode");
  }
  onClick = n((e) => {
    e.type === u.CLICK && this._main.goToRoom(this.var_2440);
  }, "onClick");
}
