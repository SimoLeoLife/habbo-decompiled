// Estratto da HabboAirLauncher.deobf.js, riga 249015.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenRoomTool.as
// Nome offuscato: _i65b93a88820a33

class {
  constructor(e, r, t, i) {
    this._frame = e;
    this._main = r;
    this.var_2440 = i;
    t.procedure = this.onClick;
  }
  static {
    n(this, "OpenRoomTool");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      this._main._r2512b8a3ecad84.show(
        new uQ(this._main, this.var_2440),
        this._frame,
        !1,
        !1,
        !0,
      );
  }, "onClick");
}
