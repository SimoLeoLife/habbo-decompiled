// Estratto da HabboAirLauncher.deobf.js, riga 144502.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/StringArrayStuffData.as
// Nome offuscato: _if0b252095b2585

class extends _ic4d6c8d627ab4e {
  constructor(r, t, i, s) {
    super(CatalogWidgetEventEnum.GUILD_SELECTED);
    this.var_3597 = r;
    this._color1 = t;
    this._color2 = i;
    this._badgeCode = s;
  }
  static {
    n(this, "StringArrayStuffData");
  }
  static var_426 = -1;
  get guildId() {
    return this.var_3597;
  }
  get color1() {
    return this._color1;
  }
  get color2() {
    return this._color2;
  }
  get _rc9fc89e7eb27a7() {
    return this._badgeCode;
  }
}
