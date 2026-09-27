// Estratto da HabboAirLauncher.deobf.js, riga 271052.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/seasonalcalendar/RareTeaser.as
// Nome offuscato: _ib7024c44f27105

class {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "RareTeaser");
  }
  _window = null;
  var_3036 = [];
  var_4990 = [];
  var_310 = [];
  dispose() {
    ((this._questEngine = null), (this._window = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  prepare(e) {
    ((this.var_3036 = this.parseInts("quests.seasonalcalendar.rareteaser.days")),
      (this.var_4990 = this.parseStrings("quests.seasonalcalendar.rareteaser.images")),
      (this.var_310 = this.parseStrings("quests.seasonalcalendar.rareteaser.pages")),
      (this._window = e.findChildByName("rare_teaser_cont")));
    for (let r = 1; r <= this.var_3036.length; r++) {
      let t = this.getFurniPic(r),
        i = this._questEngine?._rd4042d1a6a05a1._rab30f8aab18f93 ?? null;
      t != null && i != null && (t.assetUri = `${i.getCalendarImageGalleryHost()}${this.var_4990[r - 1]}.png`);
    }
    (this.getClickRegion(1) && (this.getClickRegion(1).procedure = this._rd60ab705a818dc),
      this.getClickRegion(2) && (this.getClickRegion(2).procedure = this._rfcdcefcc973ac7),
      this.getClickRegion(3) && (this.getClickRegion(3).procedure = this._r430c8681e2c3fd));
  }
  refresh() {
    let e = this._questEngine?._rd4042d1a6a05a1._rab30f8aab18f93?._r7568522c4b24c4 ?? 0,
      r = -1;
    for (let t = 1; t <= this.var_3036.length; t++) {
      let i = this.var_3036[t - 1] > e;
      (this.getFurniPic(t) && (this.getFurniPic(t).visible = !i),
        this.getLockIcon(t) && (this.getLockIcon(t).visible = i),
        this.getOpenBg(t) && (this.getOpenBg(t).visible = !i),
        this.getLockedBg(t) && (this.getLockedBg(t).visible = i),
        this.getClickRegion(t) && (this.getClickRegion(t).visible = !i),
        i && r === -1 && (r = this.var_3036[t - 1] - e));
    }
    (this._window?.findChildByName("teaser_info") &&
      (this._window.findChildByName("teaser_info").visible = r !== -1),
      this._questEngine?.localization._r43eae9731f5b27(
        "quests.seasonalcalendar.rareteaser.info",
        "days",
        `${r}`,
      ));
  }
  parseInts(e) {
    let t = (this._questEngine?.localization.getLocalization(e, "") ?? "").split(","),
      i = [];
    for (let s of t) Number.isNaN(Number(s)) || i.push(Number.parseInt(s, 10));
    return i;
  }
  parseStrings(e) {
    return (this._questEngine?.localization.getLocalization(e, "") ?? "")
      .split(",")
      .filter((i) => i !== "");
  }
  getFurniPic(e) {
    return this.getRare(e)?.findChildByName("furni_pic");
  }
  getLockIcon(e) {
    return this.getRare(e)?.findChildByName("locked_icon") ?? null;
  }
  getLockedBg(e) {
    return this.getRare(e)?.findChildByName("locked_bg") ?? null;
  }
  getOpenBg(e) {
    return this.getRare(e)?.findChildByName("open_bg") ?? null;
  }
  getClickRegion(e) {
    return this.getRare(e)?.findChildByName("click_region") ?? null;
  }
  getRare(e) {
    return this._window?.findChildByName(`rare_cont_${e}`);
  }
  _rd60ab705a818dc = n((e) => {
    this._r3b7fa866d9a85c(e, 0);
  }, "_rd60ab705a818dc");
  _rfcdcefcc973ac7 = n((e) => {
    this._r3b7fa866d9a85c(e, 1);
  }, "_rfcdcefcc973ac7");
  _r430c8681e2c3fd = n((e) => {
    this._r3b7fa866d9a85c(e, 2);
  }, "_r430c8681e2c3fd");
  _r3b7fa866d9a85c(e, r) {
    e.type === u.CLICK &&
      this.var_310[r] != null &&
      this._questEngine?.catalog?.openCatalogPage(this.var_310[r]);
  }
}
