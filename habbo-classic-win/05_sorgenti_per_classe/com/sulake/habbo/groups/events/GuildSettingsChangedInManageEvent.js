// Extracted from HabboAirLauncher.deobf.js, line 158714.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/events/GuildSettingsChangedInManageEvent.as
// Obfuscated name: _ia8cd5fbc90d9c7

class extends M {
  static {
    n(this, "GuildSettingsChangedInManageEvent");
  }
  static GUILD_VISUAL_SETTINGS_CHANGED = "GSCIME_GUILD_VISUAL_SETTINGS_CHANGED";
  var_3597;
  constructor(e, r, t = !1, i = !1) {
    (super(e, t, i), (this.var_3597 = r));
  }
  get guildId() {
    return this.var_3597;
  }
}
