// Estratto da HabboAirLauncher.deobf.js, riga 211601.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/tokens/GameToken.as
// Nome offuscato: _iff276053b5095e

class extends bl {
  static {
    n(this, "GameToken");
  }
  constructor(e, r) {
    super(r);
    let i = `\${gamecenter.${r.message}.name}`;
    this.prepare(
      "${friendbar.notify.game}",
      i,
      "message_piece_xml",
      "game_center_snowball_notification_icon",
    );
  }
}
