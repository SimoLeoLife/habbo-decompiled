// Extracted from HabboAirLauncher.deobf.js, line 251813.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/GuildInfoCtrl.as
// Obfuscated name: _i4ce4fd230e7f1b

class a {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "GuildInfoCtrl");
  }
  static GUILD_INFO_NAME = "guild_info";
  _groupId = 0;
  dispose() {
    this._navigator = null;
  }
  get disposed() {
    return this._navigator == null;
  }
  refresh(e, r, t = !1) {
    if (this._navigator == null) return;
    let i = e.findChildByName(a.GUILD_INFO_NAME);
    if (i == null) {
      if (((i = this._navigator.getXmlWindow("guild_info")), i == null)) return;
      ((i.name = a.GUILD_INFO_NAME), e.addChild(i), i.addEventListener(u.CLICK, this._r4a0db457f57ff2));
    }
    if (r == null || r.habboGroupId < 1) {
      i.visible = !1;
      return;
    }
    ((i.visible = !0),
      this._navigator._r43eae9731f5b27("navigator.guildbase", "groupName", r.groupName));
    let s = i.findChildByName("guild_base_txt");
    s != null && (s.caption = this._navigator.getText("navigator.guildbase"));
    let d = e.findChildByName("guild_badge")?.widget;
    (d != null && ((d.badgeId = r.groupBadgeCode), (d.groupId = r.habboGroupId)),
      (this._groupId = r.habboGroupId));
  }
  _r4a0db457f57ff2 = n(() => {
    this._groupId > 0 && this._navigator?.send(new class_1949(this._groupId, !0));
  }, "_r4a0db457f57ff2");
}
