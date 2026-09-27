// Estratto da HabboAirLauncher.deobf.js, riga 210322.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/TalentLevelUpController.as
// Nome offuscato: _ia3e4831a2119e4

class {
  static {
    n(this, "TalentLevelUpController");
  }
  _habboTalent;
  _disposed = !1;
  _window = null;
  var_292 = "";
  _r07d81a39810540 = null;
  _r1e3ed6b546c031 = null;
  _ra78573bffd3123 = null;
  constructor(e) {
    this._habboTalent = e;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._ra78573bffd3123?.dispose(),
      (this._ra78573bffd3123 = null),
      this._r07d81a39810540?.dispose(),
      (this._r07d81a39810540 = null),
      this._r1e3ed6b546c031?.dispose(),
      (this._r1e3ed6b546c031 = null),
      this.closeWindow(),
      (this._habboTalent = null),
      (this._disposed = !0));
  }
  initialize() {
    this._habboTalent?._rf3db13932bfb60?._r2e106e2349a0b6(
      new class_2637((e) => {
        this.onTalentLevelUp(e);
      }),
    );
  }
  showWindow(e, r, t, i) {
    if (
      (this.closeWindow(),
      (this.var_292 = e),
      (this._window = this._habboTalent?.getXmlWindow("level_up")),
      this._window == null)
    )
      return;
    (this._window.center(),
      (this._window.procedure = (_, h) => {
        this.onWindowEvent(_, h);
      }));
    let s = this._window.findChildByName("level_decoration");
    s != null && (s.assetUri = "${image.library.url}talent/" + e + "_levelup_" + r + ".png");
    let o = this._window.findChildByName("level_up_message"),
      d = this._window.findChildByName("level_title"),
      c = this._window.findChildByName("level_description");
    (o != null && (o.caption = "${talent.track." + e + ".levelup.message}"),
      d != null && (d.caption = "${talent.track." + e + ".level." + r + ".title}"),
      c != null && (c.caption = "${talent.track." + e + ".level." + r + ".description}"));
    let f = this._window.findChildByName("reward_list");
    if (f == null) return;
    let l = f.removeListItem(f.getListItemByName("plus_template"));
    ((this._r07d81a39810540 = f.removeListItem(f.getListItemByName("reward_product_template"))),
      (this._r1e3ed6b546c031 = f.removeListItem(f.getListItemByName("reward_vip_template"))),
      (this._ra78573bffd3123 = f.removeListItem(f.getListItemByName("reward_perk_template"))));
    let b = !1;
    for (let _ of t) {
      b && l != null && f.addListItem(l.clone());
      let h = this.createRewardPerk(_);
      (h != null && f.addListItem(h), (b = !0));
    }
    for (let _ of i) {
      b && l != null && f.addListItem(l.clone());
      let h = this.createRewardProduct(_);
      (h != null && f.addListItem(h), (b = !0));
    }
    if (f.numListItems < 1) {
      let _ = this._window.findChildByName("level_rewards"),
        h = this._window.findChildByName("level_up_layout");
      (_ != null && (_.visible = !1), h?.arrangeListItems());
    }
  }
  onTalentLevelUp(e) {
    let r = ClassUtils.getParser(e, class_4273);
    r != null &&
      ((r.level === 1 && r.talentTrackName === ys.HELPER && this._habboTalent?.citizenshipEnabled) ||
        this.showWindow(
          r.talentTrackName ?? "",
          r.level,
          r.rewardPerks ?? [],
          r.rewardProducts ?? [],
        ));
  }
  createRewardPerk(e) {
    let r = this._ra78573bffd3123?.clone();
    if (r == null) return null;
    let t = r.findChildByName("perk_image"),
      i = r.findChildByName("perk_name");
    return (
      t?.widget != null && (t.widget.badgeId = e._r070c83b019bfc6),
      i != null && (i.caption = "${perk." + e._r070c83b019bfc6 + ".name}"),
      r
    );
  }
  createRewardProduct(e) {
    let r = null;
    if (e.vipDays === 0) {
      r = this._r07d81a39810540?.clone() ?? null;
      let t = r;
      t != null &&
        (t.assetUri =
          "${image.library.url}talent/reward_product_" +
          (e._raeb033db5aa083 ?? "").toLowerCase().replaceAll(" ", "_") +
          ".png");
    } else {
      r = this._r1e3ed6b546c031?.clone() ?? null;
      let i = r?.findChildByName("vip_length");
      i != null &&
        (i.caption =
          this._habboTalent?.localizationManager?.getLocalizationWithParams(
            "catalog.vip.item.header.days",
            "",
            "num_days",
            String(e.vipDays),
          ) ?? "");
    }
    return r;
  }
  closeWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  onWindowEvent(e, r) {
    if (!(this._window == null || this._window.disposed || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
        case "close_button":
          this.closeWindow();
          break;
        case "talent_button":
          (this.closeWindow(),
            this._habboTalent?.tracking?.trackTalentTrackOpen(this.var_292, "levelup"),
            this._habboTalent?.send(new class_2687(this.var_292)));
          break;
      }
  }
}
