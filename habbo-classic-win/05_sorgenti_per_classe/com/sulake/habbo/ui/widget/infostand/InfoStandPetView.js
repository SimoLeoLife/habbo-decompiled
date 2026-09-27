// Extracted from HabboAirLauncher.deobf.js, line 321141.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandPetView.as
// Obfuscated name: _i4579a074802588

class a {
  static {
    n(this, "InfoStandPetView");
  }
  static STATUS_BAR_WIDTH = 162;
  static _r38d5ee28249735 = 16;
  static STATUS_BAR_HIGHLIGHT_HEIGHT = 4;
  static STATUS_BAR_BORDER_COLOR = 14342874;
  static STATUS_BAR_BG_COLOR = 3815994;
  static STATUS_BAR_HAPPINESS_HIGHLIGHT_COLOR = 2085362;
  static STATUS_BAR_HAPPINESS_CONTENT_COLOR = 39616;
  static STATUS_BAR_EXPERIENCE_HIGHLIGHT_COLOR = 10513106;
  static STATUS_BAR_EXPERIENCE_CONTENT_COLOR = 8734654;
  static _rd9d91ad98a1dee = 9094430;
  static _rdc0c952b5dcad2 = 6200576;
  static _r8a05e40484c503 = 9094430;
  static _r4a974001eae074 = 6200576;
  static STATE_HAPPINESS = "happiness";
  static STATE_EXPERIENCE = "experience";
  static STATE_ENERGY = "energy";
  static STATE_WELLBEING = "wellbeing";
  static STATE_GROWTH = "growth";
  static BUTTONS_MAX_WIDTH = 250;
  static BUTTON_HEIGHT = 25;
  static BUTTON_MARGIN = 5;
  var_17;
  _window = null;
  _border = null;
  _r6b261897733d43 = null;
  _r99fda1d9e9f6a9 = null;
  _rd78ed830c6380e = null;
  _r7982e3490a9f12 = new B();
  var_1505 = 0;
  constructor(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this.var_17 = null),
      (this._border = null),
      (this._r6b261897733d43 = null),
      (this._r99fda1d9e9f6a9 = null),
      this._window?.dispose(),
      (this._window = null),
      this._rd78ed830c6380e?.dispose(),
      (this._rd78ed830c6380e = null),
      this._r7982e3490a9f12.dispose());
  }
  get window() {
    return this._window;
  }
  updateImage(e, r) {
    this.var_1505 === e && ((this.image = r), this.updateWindow(), this._r5eac8ec9b04831(r));
  }
  update(e) {
    if (
      ((this.name = e.name),
      (this.image = e.image),
      (this.ownerName = e.ownerName),
      (this.breedText =
        this.var_17?.localizations?.getLocalization(
          this.getBreedLocalizationKey(e.type, e.breedId),
        ) ?? ""),
      this.updatePetRespect(e.petRespect, e.type !== class_3447.MONSTERPLANT),
      (this.ageText = e.age),
      this.setLevelText(e.level, e.levelMax, e.type !== class_3447.MONSTERPLANT),
      this.setSpecialSkillLevel(e.level, e.skillTresholds, e.type),
      this.setRarityLevel(e.rarityLevel, e.type),
      e.type === class_3447.MONSTERPLANT)
    ) {
      (this.showStatusContainer("default", !1), this.showStatusContainer("monsterplant", !0));
      let d = class_3912_.formatSeconds(e.remainingWellBeingSeconds);
      if (
        (this.updateStateElement(
          a.STATE_WELLBEING,
          e.remainingWellBeingSeconds,
          e.maxWellBeingSeconds,
          a._r4a974001eae074,
          a._r8a05e40484c503,
          d,
        ),
        this.updateStateWidget(a.STATE_GROWTH, e.remainingGrowingSeconds),
        this.showButton("petrespect", !1),
        e.energy > 0)
      ) {
        let c = e.energy,
          f = e.energyMax;
        this.showButton("pettreat", c / f < 0.98);
      } else this.showButton("pettreat", !1);
      (this.showButton("train", !1),
        this.showButton("buy_food", !1),
        this.showButton("kick", !1),
        this.showButton("pick", e.canRemovePet),
        this.showRarityItem(e.rarityLevel >= 0, e));
    } else
      (this.showStatusContainer("default", !0),
        this.showStatusContainer("monsterplant", !1),
        this.showButton("petrespect", !0),
        this.showButton("pettreat", !1),
        this.showButton("train", e.isOwnPet),
        this.showButton("pick", e.isOwnPet),
        this.showButton("buy_food", !0),
        this.showButton("kick", e.canRemovePet),
        this.updateStateElement(
          a.STATE_HAPPINESS,
          e.nutrition,
          e.nutritionMax,
          a.STATUS_BAR_HAPPINESS_CONTENT_COLOR,
          a.STATUS_BAR_HAPPINESS_HIGHLIGHT_COLOR,
        ),
        this.updateStateElement(
          a.STATE_EXPERIENCE,
          e.experience,
          e.experienceMax,
          a.STATUS_BAR_EXPERIENCE_CONTENT_COLOR,
          a.STATUS_BAR_EXPERIENCE_HIGHLIGHT_COLOR,
        ),
        this.updateStateElement(
          a.STATE_ENERGY,
          e.energy,
          e.energyMax,
          a._rdc0c952b5dcad2,
          a._rd9d91ad98a1dee,
        ),
        this.updateRespectButton());
    let r = this.var_17?.roomControllerLevel?._r2eac8239a09fe7 ?? null,
      t = r?.playTestMode ?? !1,
      i = r?._rea9739215487be ?? 0,
      s = this.var_17?.roomControllerLevel?.sessionDataManager?.isAnyRoomController ?? !1,
      o = !t && (i >= RoomControllerLevelEnum.ROOM_CONTROLLER || e.isOwnPet || s);
    if (
      (this.showButton("move", o && e.type === class_3447.MONSTERPLANT),
      this.showButton("rotate", o && e.type === class_3447.MONSTERPLANT),
      this.updateWindow(),
      (this.var_1505 = e.id),
      this._r7982e3490a9f12.remove(e.id),
      this._r7982e3490a9f12.add(e.id, e),
      this._rd78ed830c6380e?.isVisible() && e.isOwnPet)
    ) {
      let d = this.getLowerSkillTreshold(e.level, e.skillTresholds),
        c = e.experience / e.experienceMax;
      this._rd78ed830c6380e.showCommandToolForPet(
        e.id,
        e.name,
        e.image,
        e.type,
        e.level - d,
        c,
        this.getUpperSkillTreshold(e.level, e.skillTresholds) - d,
        e.skillTresholds,
      );
    }
  }
  _r53ca560b37bb59() {
    return this.var_1505;
  }
  _r3420e4f4ce6270(e, r) {
    this._rd78ed830c6380e?.setEnabledCommands(e, r);
  }
  _r8597d00b1468ee() {
    this._rd78ed830c6380e == null && (this._rd78ed830c6380e = new jxe(this.var_17));
    let e = this._r7982e3490a9f12.getValue(this.var_1505) ?? null;
    if (e == null) return;
    this._rd78ed830c6380e.showWindow(!0);
    let r = this.getLowerSkillTreshold(e.level, e.skillTresholds),
      t = e.experience / e.experienceMax;
    this._rd78ed830c6380e.showCommandToolForPet(
      e.id,
      e.name,
      e.image,
      e.type,
      e.level - r,
      t,
      this.getUpperSkillTreshold(e.level, e.skillTresholds) - r,
      e.skillTresholds,
    );
  }
  _r6ea595411c34b4() {
    this._rd78ed830c6380e?._r5623fe3bcc51d3() === this.var_1505 &&
      this._rd78ed830c6380e.showWindow(!1);
  }
  get catalog() {
    return this.var_17?.roomControllerLevel?.catalog ?? null;
  }
  updateWindow() {
    this._r99fda1d9e9f6a9 == null ||
      this._border == null ||
      this._r6b261897733d43 == null ||
      this._window == null ||
      ((this._r6b261897733d43.visible = this._r6b261897733d43.width > 0),
      (this._r99fda1d9e9f6a9.height = this._r99fda1d9e9f6a9.visibleRegion.height),
      (this._border.height = this._r99fda1d9e9f6a9.height + 20),
      (this._window.width = Math.max(this._border.width, this._r6b261897733d43.width)),
      (this._window.height = this._window.visibleRegion.height),
      this._border.width < this._r6b261897733d43.width
        ? ((this._border.x = this._window.width - this._border.width), (this._r6b261897733d43.x = 0))
        : ((this._r6b261897733d43.x = this._window.width - this._r6b261897733d43.width),
          (this._border.x = 0)),
      this.var_17?.refreshContainer());
  }
  _r5eac8ec9b04831(e) {
    this._rd78ed830c6380e?.updatePetImage(e);
  }
  setRarityLevel(e, r) {
    let t = [class_3447.MONSTERPLANT, class_3447.GNOME],
      i = r !== class_3447.MONSTERPLANT ? "default" : "monsterplant",
      o = this.getStatusContainer(i)?.getListItemByName("status_rarity_level");
    o != null &&
      ((o.visible = t.indexOf(r) > -1),
      this.var_17?.localizations?._r43eae9731f5b27(
        "infostand.pet.text.raritylevel",
        "level",
        this.var_17?.localizations?.getLocalization(`infostand.pet.raritylevel.${e}`) ?? "",
      ),
      this.updateWindow());
  }
  getBreedLocalizationKey(e, r) {
    return `pet.breed.${e}.${r}`;
  }
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("pet_view");
    if (
      ((this._window = this.var_17?.windowManager?.buildFromXML(r?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct window from XML!");
    if (
      ((this._border = this._window.getListItemByName("info_border")),
      (this._r99fda1d9e9f6a9 = this._border?.findChildByName("infostand_element_list")),
      (this._window.name = e),
      this.var_17?.mainContainer.addChild(this._window),
      this._border?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      (this._r6b261897733d43 = this._window.getListItemByName("button_list")),
      this._r6b261897733d43 == null)
    )
      return;
    let i = [];
    this._r6b261897733d43.groupChildrenWithTag("CMD_BUTTON", i, -1);
    for (let s of i) s.addEventListener(u.CLICK, this.onButtonClicked);
    (this._rbea0272befcc30("petrespect_icon", "icon_petrespect"),
      this._rbea0272befcc30("status_happiness_icon", "icon_pet_happiness"),
      this._rbea0272befcc30("status_experience_icon", "icon_pet_experience"),
      this._rbea0272befcc30("status_energy_icon", "icon_pet_energy"),
      this._rbea0272befcc30("skill_level_indicator", "pet_skill_level_0"),
      this._rbea0272befcc30("status_wellbeing_icon", "icon_pet_wellbeing"));
    for (let s of i)
      (s.parent != null && (s.parent.width = s.width),
        s.addEventListener(y.const_755, this._r02078868257fbb));
  }
  _rbea0272befcc30(e, r) {
    let t = this._border?.findChildByName(e),
      s = this.var_17?.assets?.getAssetByName(r)?.content;
    t != null && s != null && (t.bitmap = s.clone());
  }
  set name(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("name_text");
    r != null && ((r.text = e), (r.visible = !0));
  }
  set image(e) {
    let t = this._r99fda1d9e9f6a9?.getListItemByName("image_container")?.findChildByName("avatar_image");
    if (e == null || t == null) return;
    let i = new A(t.width, t.height, !0, 0),
      s = new E(Math.round((t.width - e.width) / 2), Math.round((t.height - e.height) / 2));
    (i.copyPixels(e, e.rect, s), (t.bitmap = i), t.invalidate(), this.updateWindow());
  }
  setLevelText(e, r, t = !0) {
    let s = this._r99fda1d9e9f6a9?.getListItemByName("image_container")?.findChildByName("level_text");
    s != null &&
      ((s.visible = t),
      this.var_17?.localizations?._r43eae9731f5b27("pet.level", "level", String(e)),
      this.var_17?.localizations?._r43eae9731f5b27("pet.level", "maxlevel", String(r)),
      this.updateWindow());
  }
  setSpecialSkillLevel(e, r, t) {
    let i = this._r99fda1d9e9f6a9?.getListItemByName("image_container"),
      s = i?.findChildByName("status_skill_text");
    if (i == null || s == null) return;
    let o = (this.var_17?.config?.getBoolean("pet.enhancements.enabled") ?? !1) && t === 15;
    s.visible = o;
    let d = i.findChildByName("status_skill_text");
    d != null && (d.caption = `\${infostand.pet.text.skill.${t}}`);
    let c = i.findChildByName("skill_level_indicator");
    if (c != null) {
      c.visible = o;
      let f = this._r26eebf65c3bde0(e, r),
        b = this.var_17?.assets?.getAssetByName(`pet_skill_level_${f}`)?.content;
      b != null && (c.bitmap = b.clone());
    }
    this.updateWindow();
  }
  set ownerName(e) {
    (this.var_17?.localizations?._r43eae9731f5b27("infostand.text.petowner", "name", e),
      this.updateWindow());
  }
  set breedText(e) {
    let r = this._r99fda1d9e9f6a9?.getListItemByName("breed_text");
    r != null && ((r.text = e), this.updateWindow());
  }
  set ageText(e) {
    this._r99fda1d9e9f6a9?.getListItemByName("age_text") != null &&
      (this.var_17?.localizations?._r43eae9731f5b27("pet.age", "age", String(e)),
      this.updateWindow());
  }
  updatePetRespect(e, r) {
    this.var_17?.localizations?._r43eae9731f5b27("infostand.text.petrespect", "count", String(e));
    let t = this._r99fda1d9e9f6a9?.getListItemByName("petrespect_container"),
      i = t?.findChildByName("petrespect_text"),
      s = t?.findChildByName("petrespect_icon");
    i == null ||
      s == null ||
      ((i.visible = r), (s.visible = r), (s.x = i.x + i.width + 2), this.updateWindow());
  }
  showStatusContainer(e, r) {
    let t = this.getStatusContainer(e);
    t != null && (t.visible = r);
  }
  getStatusContainer(e) {
    return this._r99fda1d9e9f6a9
      ?.getListItemByName("status_container")
      ?.findChildByName(`status_item_list_${e}`);
  }
  updateStateWidget(e, r) {
    let t = this._r99fda1d9e9f6a9?.getListItemByName("status_container"),
      i = t?.findChildByName(`${e}_status_widget`),
      s = i?.widget;
    if (!(t == null || s == null))
      switch (e) {
        case a.STATE_GROWTH: {
          let o = s;
          o.seconds = r;
          let d = r > 0,
            c = i?.visible !== d;
          i != null && (i.visible = d);
          let f = t.findChildByName(`${e}_status_text`);
          (f != null && (f.visible = d),
            c && t.findChildByName("status_item_list_monsterplant")?.arrangeListItems());
          break;
        }
        default:
          break;
      }
  }
  updateStateElement(e, r, t, i, s, o = null) {
    let d = this._r99fda1d9e9f6a9?.getListItemByName("status_container");
    if (d == null) return;
    let c = d.findChildByName(`status_${e}_value_text`);
    c != null && (c.text = o ?? `${r}/${t}`);
    let f = d.findChildByName(`status_${e}_bitmap`);
    if (f != null) {
      let l = this.createPercentageBar(r, t, i, s);
      ((f.bitmap = l), (f.width = l.width), (f.height = l.height), f.invalidate());
    }
    this.updateWindow();
  }
  onButtonClicked = n((e) => {
    let r = e.target;
    if (r == null) return;
    let t = null,
      i = null;
    switch (r.name) {
      case "btn_move":
        i = RoomWidgetFurniActionMessage.MOVE;
        break;
      case "btn_rotate":
        i = RoomWidgetFurniActionMessage.ROTATE;
        break;
      case "btn_pick":
      case "btn_kick":
        ((i = RoomWidgetUserActionMessage.PICK_UP_PET),
          this._rd78ed830c6380e?._r5623fe3bcc51d3() === this.var_1505 &&
            this._rd78ed830c6380e.showWindow(!1));
        break;
      case "btn_train":
        this._r8597d00b1468ee();
        break;
      case "btn_buy_food":
        (this.catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_PETS_ACCESSORIES),
          (this.var_17?.roomControllerLevel?._r697386a8fb5bf8?.disposed ?? !0) ||
            this.var_17?.roomControllerLevel?._r697386a8fb5bf8?.trackGoogle(
              "infostandBuyPetFoodButton",
              "click",
            ));
        break;
      case "btn_petrespect":
        (this.var_17?.userData != null &&
          (this.var_17.userData.petRespectLeft = this.var_17.userData.petRespectLeft - 1),
          this.updateRespectButton(),
          (i = RoomWidgetUserActionMessage.RESPECT_PET));
        break;
      case "btn_pettreat":
        i = RoomWidgetUserActionMessage.TREAT_PET;
        break;
      default:
        break;
    }
    if (i != null) {
      if (i === RoomWidgetFurniActionMessage.MOVE || i === RoomWidgetFurniActionMessage.ROTATE) {
        let s = this._r7982e3490a9f12.getValue(this.var_1505) ?? null;
        s != null && (t = new RoomWidgetFurniActionMessage(i, s.roomIndex, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER, -1, null));
      } else {
        let s = this._r7982e3490a9f12.getValue(this.var_1505)?.id ?? this.var_1505;
        t = new RoomWidgetUserActionMessage(i, s);
      }
      t != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(t);
    }
    this.updateWindow();
  }, "onButtonClicked");
  onClose = n((e) => {
    this.var_17?.close();
  }, "onClose");
  updateRespectButton() {
    let e = this.var_17?.userData?.petRespectLeft ?? 0;
    (this.var_17?.localizations?._r43eae9731f5b27(
      "infostand.button.petrespect",
      "count",
      String(e),
    ),
      this.showButton("petrespect", e > 0));
  }
  showButton(e, r) {
    let t = this._r6b261897733d43?.getChildByName(e) ?? null;
    t != null && ((t.visible = r), this.arrangeButtons());
  }
  _r02078868257fbb = n((e) => {
    let r = e.window;
    if (r == null) return;
    let t = r.parent;
    t != null && t.tags.indexOf("CMD_BUTTON_REGION") > -1 && (t.width = r.width);
  }, "_r02078868257fbb");
  arrangeButtons() {
    if (this._r6b261897733d43 == null) return;
    let e = a.BUTTONS_MAX_WIDTH;
    this._r6b261897733d43.width = e;
    let r = [];
    this._r6b261897733d43.groupChildrenWithTag("CMD_BUTTON_REGION", r, -1);
    let t = e,
      i = 0;
    for (let s of r)
      s.visible &&
        (t - s.width < 0 && ((t = e), (i += a.BUTTON_HEIGHT + a.BUTTON_MARGIN)),
        (s.x = t - s.width),
        (s.y = i),
        (t = s.x - a.BUTTON_MARGIN));
    ((this._r6b261897733d43.height = i + a.BUTTON_HEIGHT), this.updateWindow());
  }
  _r26eebf65c3bde0(e, r) {
    let t = 0;
    for (let i of r) i > 0 && e >= i && t++;
    return t;
  }
  getLowerSkillTreshold(e, r) {
    let t = 0;
    for (let i of r)
      if (i <= e) t = i;
      else break;
    return t;
  }
  getUpperSkillTreshold(e, r) {
    let t = this.getLowerSkillTreshold(e, r),
      i = r.indexOf(t),
      s = t;
    return (i < r.length - 1 && (s = r[i + 1]), s);
  }
  showRarityItem(e, r) {
    let i = this._r99fda1d9e9f6a9
        ?.getListItemByName("status_container")
        ?.findChildByName("rarity_item_overlay_widget"),
      s = i?.widget;
    i == null || s == null || ((i.visible = e), (s.rarityLevel = r.rarityLevel));
  }
  createPercentageBar(e, r, t, i) {
    ((r = Math.max(r, 1)), (e = Math.max(e, 0)), e > r && (e = r));
    let s = e / r,
      o = 1,
      d = new A(a.STATUS_BAR_WIDTH, a._r38d5ee28249735, !1);
    d.fillRect(new D(0, 0, d.width, d.height), a.STATUS_BAR_BORDER_COLOR);
    let c = new D(o, o, d.width - o * 2, d.height - o * 2);
    d.fillRect(c, a.STATUS_BAR_BG_COLOR);
    let f = new D(o, o + a.STATUS_BAR_HIGHLIGHT_HEIGHT, d.width - o * 2, d.height - o * 2 - a.STATUS_BAR_HIGHLIGHT_HEIGHT);
    ((f.width = s * f.width), d.fillRect(f, t));
    let l = new D(o, o, d.width - o * 2, a.STATUS_BAR_HIGHLIGHT_HEIGHT);
    return ((l.width = s * l.width), d.fillRect(l, i), d);
  }
}
