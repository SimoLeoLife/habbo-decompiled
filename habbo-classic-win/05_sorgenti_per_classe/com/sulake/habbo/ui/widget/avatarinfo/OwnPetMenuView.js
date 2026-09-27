// Extracted from HabboAirLauncher.deobf.js, line 307845.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/OwnPetMenuView.as
// Obfuscated name: _i4860900e82cb4c

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "OwnPetMenuView");
  }
  static MODE_NORMAL = 0;
  static MODE_SADDLED_UP = 1;
  static MODE_RIDING = 2;
  static MODE_MONSTERPLANT = 3;
  _data = null;
  _mode = a.MODE_NORMAL;
  var_1934 = null;
  var_3577 = null;
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    ((this._data = null), (this.var_1934 = null), (this.var_3577 = null), super.dispose());
  }
  static setup(e, r, t, i, s, o = !1) {
    e._data = o instanceof PetInfoData ? o : null;
    let d = e.widget?.hasFreeSaddle ?? !1,
      c = e.widget?.isRiding ?? !1;
    (e.widget?._r49741f7e39d185()
      ? (e._mode = a.MODE_MONSTERPLANT)
      : d && !c
        ? (e._mode = a.MODE_SADDLED_UP)
        : c
          ? (e._mode = a.MODE_RIDING)
          : (e._mode = a.MODE_NORMAL),
      AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  updateWindow() {
    let e = this.widget;
    if (!(e == null || e.assets == null || e.windowManager == null)) {
      if (this.isMinimized) {
        this.activeView = this._r264c5b40440e9c();
        return;
      }
      if (this._window == null) {
        let r = e.assets.getAssetByName("own_pet_menu")?.content ?? null;
        if (
          ((this._window = r != null ? e.windowManager.buildFromXML(r, 0) : null),
          this._window == null)
        )
          return;
        (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
          this._window.addEventListener(u.OUT, this._r846ed7467efd50),
          this._window.findChildByName("minimize")?.addEventListener(u.CLICK, this._r9f300ee1384194),
          this._window.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
          this._window.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d));
      }
      ((this.var_34 = this._window.findChildByName("buttons")),
        this.var_34 != null && (this.var_34.procedure = this._r8b6e9f027ac5db),
        (this._window.findChildByName("name").caption = this._userName),
        (this._window.visible = !1),
        (this.activeView = this._window),
        this.updateButtons());
    }
  }
  updateButtons() {
    let e = this.widget,
      r = this._data;
    if (!(this._window == null || r == null || this.var_34 == null || e == null)) {
      this.var_34.autoArrangeItems = !1;
      for (let t = 0; t < this.var_34.numListItems; t++) {
        let i = this.var_34.getListItemAt(t);
        i != null && (i.visible = !1);
      }
      switch (((this.var_1934 = null), this._mode)) {
        case a.MODE_NORMAL:
          (this.showButton("respect", r.petRespectLeft > 0),
            this.showButton("train"),
            this.showButton("pick_up"),
            r.petType === class_3447.const_862 &&
              ((this.var_1934 = this.findFurnitureData(class_1901.PET_SADDLE, class_3447.const_862)),
              this.var_1934 != null && this.showButton("buy_saddle")),
            (e.configuration?.getBoolean("nest.breeding.bear.enabled") ?? !1) &&
              r.petType === class_3447.BEAR &&
              this.showButton("breed"),
            (e.configuration?.getBoolean("nest.breeding.terrier.enabled") ?? !1) &&
              r.petType === class_3447.TERRIER &&
              this.showButton("breed"),
            (e.configuration?.getBoolean("nest.breeding.cat.enabled") ?? !1) &&
              r.petType === class_3447.CAT &&
              this.showButton("breed"),
            (e.configuration?.getBoolean("nest.breeding.dog.enabled") ?? !1) &&
              r.petType === class_3447.DOG &&
              this.showButton("breed"),
            (e.configuration?.getBoolean("nest.breeding.pig.enabled") ?? !1) &&
              r.petType === class_3447.PIG &&
              this.showButton("breed"));
          break;
        case a.MODE_SADDLED_UP:
          (this.showButton("mount"),
            (e.configuration?.getBoolean("sharedhorseriding.enabled") ?? !1) &&
              (this.showButton("toggle_riding_permission"),
              this.enableCheckbox("toggle_riding_permission", r.accessRights === UnkConstants_638841._r84b81bed702e7e)),
            this.showButton("respect", r.petRespectLeft > 0),
            this.showButton("train"),
            this.showButton("pick_up"),
            this.showButton("saddle_off"));
          break;
        case a.MODE_RIDING:
          (this.showButton("dismount"), this.showButton("respect", r.petRespectLeft > 0));
          break;
        case a.MODE_MONSTERPLANT:
          if ((this.showButton("pick_up"), r.canRevive))
            ((this.var_3577 = this.findFurnitureData(class_1901.MONSTERPLANT_REVIVAL, class_3447.MONSTERPLANT)),
              this.showButton("revive"),
              (e.configuration?.getBoolean("monsterplants.composting.enabled") ?? !1) &&
                (e.handler?.container?._r2eac8239a09fe7?.isRoomOwner ?? !1) &&
                this.showButton("compost"));
          else {
            let t = Number(r.energy),
              i = Number(r.energyMax);
            (this.showButton("treat", !0, i > 0 ? t / i < 0.98 : !1),
              r.level === r.levelMax &&
                r.canBreed &&
                (this.showButton("toggle_breeding_permission"),
                this.enableCheckbox("toggle_breeding_permission", r.hasBreedingPermission),
                this.showButton("breed")));
          }
          break;
      }
      if (e.configuration?.getBoolean("handitem.give.pet.enabled") ?? !1) {
        let t = e.handler?.container?._r2eac8239a09fe7?.ownUserRoomId ?? 0,
          i = e.handler?._r2eac8239a09fe7?.roomId ?? 0,
          o =
            e.handler?.roomEngine
              ?._ra1f5cb56d0c2d8(i, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
              ?.getStringToStringMap()
              ?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0;
        o > 0 && o < 999999 && this.showButton("pass_handitem");
      }
      (this.showButton(
        "wired_inspect",
        e.handler?.container?._rddef5461e8915c?._reb1c224373ab03() ?? !1,
      ),
        e.localization?._r43eae9731f5b27("infostand.button.petrespect", "count", r.petRespectLeft.toString()),
        (this.var_34.autoArrangeItems = !0),
        (this.var_34.visible = !0));
    }
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1 || this._data == null) return;
    let t = !1,
      i = null,
      s;
    if (e.type === u.CLICK) {
      if (r.name === "button")
        switch (((t = !0), r.parent?.name)) {
          case "respect":
            ((this._data.petRespectLeft -= 1),
              this.updateButtons(),
              (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.RESPECT_PET, this.petId)));
            break;
          case "treat":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TREAT_PET, this.petId);
            break;
          case "pass_handitem":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.GIVE_CARRY_ITEM_TO_PET, this.petId);
            break;
          case "wired_inspect":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.WIRED_INSPECT_PET, this.petId);
            break;
          case "train":
            this.widget?.openTrainingView();
            break;
          case "pick_up":
            ((i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.PICK_UP_PET, this.petId)), this.widget?.closeTrainingView());
            break;
          case "mount":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.MOUNT_PET, this.petId);
            break;
          case "toggle_riding_permission":
            ((i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TOGGLE_PET_RIDING_PERMISSION, this.petId)),
              (s = this.getCheckbox("toggle_riding_permission")),
              s != null && this.enableCheckbox("toggle_riding_permission", !s.isSelected));
            break;
          case "toggle_breeding_permission":
            ((i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TOGGLE_PET_BREEDING_PERMISSION, this.petId)),
              (s = this.getCheckbox("toggle_breeding_permission")),
              s != null && this.enableCheckbox("toggle_breeding_permission", !s.isSelected));
            break;
          case "dismount":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.DISMOUNT_PET, this.petId);
            break;
          case "saddle_off":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.SADDLE_OFF, this.petId);
            break;
          case "breed":
            if (this._mode === a.MODE_NORMAL) {
              let d = `pet.command.${RoomWidgetPetCommandMessage.BREED_TRAIN_COMMAND_ID}`,
                c = this.widget?.localization?.getLocalization(d) ?? "";
              i = new RoomWidgetPetCommandMessage(RoomWidgetPetCommandMessage.PET_COMMAND, this._data.id, `${this._data.name} ${c}`);
            } else
              this._mode === a.MODE_MONSTERPLANT &&
                (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.REQUEST_BREED_PET, this.petId));
            break;
          case "harvest":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.HARVEST_PET, this.petId);
            break;
          case "revive":
            (this.openCatalogPage(this.var_3577),
              (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.REVIVE_PET, this.petId)));
            break;
          case "compost":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.COMPOST_PLANT, this.petId);
            break;
          case "buy_saddle":
            this.openCatalogPage(this.var_1934);
            break;
        }
      else
        r.name === "profile_link"
          ? (i = new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this.petId, "ownPetContextMenu"))
          : r.name === "toggle_riding_permission_checkbox"
            ? ((t = !0), (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TOGGLE_PET_RIDING_PERMISSION, this.petId)))
            : r.name === "toggle_breeding_permission_checkbox" &&
              ((t = !0), (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TOGGLE_PET_BREEDING_PERMISSION, this.petId)));
      i != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(i);
    } else super._rb8ed727c592c36(e, r);
    t && this.var_17?.removeView(this, !1);
  }
  get petId() {
    return this.userId;
  }
  findFurnitureData(e, r) {
    let t = this.widget?.handler?.container?.sessionDataManager?.getFloorItemsDataByCategory(e) ?? [];
    for (let i of t) {
      let s = i._r2bdd6e3cc1f573.split(" ");
      if ((s.length >= 1 ? Number.parseInt(s[0] ?? "-1", 10) : -1) === r) return i;
    }
    return null;
  }
  openCatalogPage(e) {
    return this.var_17?.catalog == null || e == null || e.purchaseOfferId < 0
      ? !1
      : (this.var_17.catalog._r104372015639cf(e.purchaseOfferId, CatalogType.NORMAL),
        this.widget?.handler?.container?._r697386a8fb5bf8?.trackGoogle(
          "infostandCatalogButton",
          "offer",
          e.purchaseOfferId,
        ),
        !0);
  }
  enableCheckbox(e, r) {
    let t = this.getCheckbox(e);
    t != null && (r ? t.select() : t.unselect());
  }
  getCheckbox(e) {
    if (this.var_34 == null) return null;
    let r = this.var_34.getListItemByName(e);
    return r == null ? null : r.findChildByName(`${e}_checkbox`);
  }
  get widget() {
    return this.var_17;
  }
}
