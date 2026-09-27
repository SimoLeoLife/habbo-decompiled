// Extracted from HabboAirLauncher.deobf.js, line 177155.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/CollectiblesController.as
// Obfuscated name: _i6711c81b7845f0

class extends ue {
  static {
    n(this, "CollectiblesController");
  }
  _view = null;
  _r7702740aa61ceb = null;
  var_4550 = -1;
  var_4851 = "";
  var_873 = 0;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._avatarRenderManager = e;
      }),
      new ComponentDependency(new IIDHabboFreeFlowChat(), (e) => {
        this._rb7fab1e25a8762 = e;
      }),
      new ComponentDependency(new IIDHabboNotifications(), (e) => {
        this._notifications = e;
      }),
      new ComponentDependency(new IIDHabboInventory(), (e) => {
        this._inventory = e;
      }),
    ]);
  }
  initComponent() {
    (this.context._r7e43d9f4706607(this),
      (this._r7e9a226d017588 ??= () => this._r2ae1fc37c2b75d()),
      this._catalog?.events?.addEventListener?.(PurseUpdateEvent.const_565, this._r7e9a226d017588),
      this.addMessageEvent(new class_3652((e) => this._rb7f9a9bbfc500a(e))),
      this.addMessageEvent(new class_3167((e) => this._rcc1012bfea0b00(e))));
  }
  dispose() {
    this.disposed ||
      (this.context._r7485c47d8bd77c(this),
      this._catalog?.events?.removeEventListener?.(PurseUpdateEvent.const_565, this._r7e9a226d017588),
      this._r7702740aa61ceb?.dispose(),
      (this._r7702740aa61ceb = null),
      this._view?.dispose(),
      (this._view = null),
      (this._r6358b2bd53ae19 = null),
      (this._localizationManager = null),
      (this._sessionDataManager = null),
      (this._avatarRenderManager = null),
      (this._windowManager = null),
      (this._rb7fab1e25a8762 = null),
      (this._inventory = null),
      (this._notifications = null),
      (this._roomEngine = null),
      (this._catalog = null),
      super.dispose());
  }
  get linkPattern() {
    return "collectibles/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length >= 2 && r[1] === "open" && this.showCollectibleHub();
  }
  send(e) {
    this._r6358b2bd53ae19?.connection?.send(e);
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  getProductType(e) {
    if (e == null) return "unknown";
    switch (e.productTypeId) {
      case class_3169.const_254:
        return this.localizationManager.getLocalization("product.type.room");
      case class_3169.const_545:
        return this.localizationManager.getLocalization("product.type.wall");
      case class_3169.CLOTHING:
        return this.localizationManager.getLocalization("product.type.clothing");
      case class_3169.CHAT_STYLE:
        return this.localizationManager.getLocalization("product.type.chatstyle");
      case class_3169.BADGE:
        return this.localizationManager.getLocalization("product.type.badge");
      case class_3169.const_123:
        return this.localizationManager.getLocalization("product.type.effect");
      case class_3169.PET:
        return this.localizationManager.getLocalization("product.type.pets");
      default:
        return "Unknown";
    }
  }
  getProductName(e) {
    if (e == null) return "unknown";
    switch (e.productTypeId) {
      case class_3169.UNKNOWN:
        return "unknown";
      case class_3169.CLOTHING:
      case class_3169.const_254:
        return (
          (this._sessionDataManager?.getFloorItemData(Number(e.itemTypeId)) ?? null)?.localizedName ??
          "(missing floor item)"
        );
      case class_3169.const_545:
        return (
          (this._sessionDataManager?.getWallItemData(Number(e.itemTypeId)) ?? null)?.localizedName ??
          "(missing wall item)"
        );
      case class_3169.const_123:
        return this.localizationManager.getLocalization(`fx_${e.itemTypeId}`);
      case class_3169.BADGE:
        return this.localizationManager.getBadgeName(e.itemTypeId);
      case class_3169.PET:
        return this.localizationManager.getLocalization(`pet.type.${e.itemTypeId}`);
      case class_3169.CHAT_STYLE:
        return this.localizationManager.getLocalization("product.type.chatstyle");
      default:
        return "(missing)";
    }
  }
  previewIcon(e, r) {
    let t = r;
    if (t != null) {
      if (e == null) {
        t.setUnknownImage();
        return;
      }
      switch (e.productTypeId) {
        case class_3169.UNKNOWN:
          t.setUnknownImage();
          break;
        case class_3169.CLOTHING:
        case class_3169.const_254: {
          let i = this._sessionDataManager?.getFloorItemData(Number(e.itemTypeId)) ?? null;
          if (i == null) {
            t.clearPreviewer();
            break;
          }
          t.imageResult = this._roomEngine?._r65a31a885a1252(i.id, r) ?? null;
          break;
        }
        case class_3169.const_545: {
          let i = this._sessionDataManager?.getWallItemData(Number(e.itemTypeId)) ?? null;
          if (i == null) {
            t.clearPreviewer();
            break;
          }
          this.tempCategoryMapping("I", i.id) === 1
            ? (t.imageResult = this._roomEngine?.getWallItemDataByName(i.id, r) ?? null)
            : t.clearPreviewer();
          break;
        }
        case class_3169.const_123:
          t.imageResult = {
            id: 0,
            data: this._catalog?.getPixelEffectIcon(Number(e.itemTypeId)) ?? null,
          };
          break;
        case class_3169.BADGE:
          t._r79242dc896c7f5 = e.itemTypeId;
          break;
        case class_3169.PET:
          t._r44ea08ed7186b6 = e._r48777043299a0c;
          break;
        case class_3169.CHAT_STYLE:
          t.imageResult = {
            id: 0,
            data:
              this._rb7fab1e25a8762?.chatStyleLibrary?._r22c9347ecec607(Number(e.itemTypeId))
                ?._r270592cedf0213 ?? null,
          };
          break;
        default:
          t.clearPreviewer();
          break;
      }
    }
  }
  previewImage(e, r) {
    let t = r;
    if (t != null) {
      if (e == null) {
        t.setUnknownImage();
        return;
      }
      if (!this.handlePreviewImageEasterEgg(e, t))
        switch (e.productTypeId) {
          case class_3169.UNKNOWN:
            t.setUnknownImage();
            break;
          case class_3169.CLOTHING:
            t._rafdbd40a6f2399 =
              this._avatarRenderManager?._r3e7ac99da303de(
                this._sessionDataManager?.figure ?? "",
                this._sessionDataManager?.gender ?? "",
                e._r465eb48d84170b,
              ) ?? "";
            break;
          case class_3169.const_254: {
            let i = this._sessionDataManager?.getFloorItemData(Number(e.itemTypeId)) ?? null;
            if (i == null) {
              t.clearPreviewer();
              break;
            }
            t.imageResult =
              this._roomEngine?._r5db1beeb89d785(i.id, new k(90, 0, 0), 64, r) ?? null;
            break;
          }
          case class_3169.const_545: {
            let i = this._sessionDataManager?.getWallItemData(Number(e.itemTypeId)) ?? null;
            if (i == null) {
              t.clearPreviewer();
              break;
            }
            this.tempCategoryMapping("I", i.id) === 1
              ? (t.imageResult = this._roomEngine?._r3ac60c12dafe70(i.id, new k(90), 64, r) ?? null)
              : t.clearPreviewer();
            break;
          }
          case class_3169.BADGE:
            t._r79242dc896c7f5 = e.itemTypeId;
            break;
          case class_3169.PET:
            t._r44ea08ed7186b6 = e._r48777043299a0c;
            break;
          case class_3169.CHAT_STYLE:
            t.imageResult = { id: 0, data: this.createChatItemPreview(Number(e.itemTypeId)) };
            break;
          case class_3169.const_123:
            if (e.itemTypeId === "") {
              t.clearPreviewer();
              break;
            }
            t._rd7fde06780d033?.(this._sessionDataManager?.figure ?? "", Number(e.itemTypeId));
            break;
          default:
            t.clearPreviewer();
            break;
        }
    }
  }
  _r410e58e2f3d3db(e) {
    this._view?._rf2405b25edbdb7?._r410e58e2f3d3db(e);
  }
  _r754963cee9e311(e, r, t) {
    this._view?._rf2405b25edbdb7?.amountChangedForItem(class_2106.FURNITURE, e, t);
  }
  _r499c0961ae0910(e, r, t) {
    this._view?._rf2405b25edbdb7?.amountChangedForItem(class_2106.FURNITURE, e, t);
  }
  get catalog() {
    if (this._catalog == null) throw new Error("CollectiblesController catalog is not available.");
    return this._catalog;
  }
  get localizationManager() {
    if (this._localizationManager == null)
      throw new Error("CollectiblesController localizationManager is not available.");
    return this._localizationManager;
  }
  get _rf0eb5f07c94cfb() {
    if (this._avatarRenderManager == null)
      throw new Error("CollectiblesController avatarRenderManager is not available.");
    return this._avatarRenderManager;
  }
  get inventory() {
    if (this._inventory == null) throw new Error("CollectiblesController inventory is not available.");
    return this._inventory;
  }
  get notifications() {
    if (this._notifications == null)
      throw new Error("CollectiblesController notifications is not available.");
    return this._notifications;
  }
  get windowManager() {
    if (this._windowManager == null)
      throw new Error("CollectiblesController windowManager is not available.");
    return this._windowManager;
  }
  _r2ae1fc37c2b75d() {
    this.updateView();
  }
  _rb7f9a9bbfc500a = n((e) => {
    let r = ClassUtils.getParser(e, class_2528);
    if (r == null) return;
    let t = (this._sessionDataManager?.userId ?? -1) === r?.openerAvatarId;
    if (r?.start) return;
    let i = r?.reward != null ? new BaseItemWrapper(r.reward) : null;
    if (i == null) return;
    if (t) {
      this._r2610f70922acc9(i);
      return;
    }
    let s = this.localizationManager.getLocalizationWithParams(
      "collectibles.reward_box.notif.desc",
      "",
      "name",
      this.localizationManager.getLocalization("generic.someone"),
      "item",
      this.getProductName(i),
    );
    this.notifications.addItem(s, NotificationType.NFT_OPENING, null, null, [
      i,
      r?.reward?.rarity,
      qj.getRarityColor(r?.reward?.rarity ?? ""),
    ]);
  }, "_rb7f9a9bbfc500a");
  _rcc1012bfea0b00 = n((e) => {
    let r = ClassUtils.getParser(e, class_3287);
    r != null &&
      (r?.fail &&
        this.notifications.addItem(
          this.localizationManager.getLocalization("generic.error"),
          NotificationType.INFO,
          "icon_curator_stamp_large_png",
        ),
      r?._ree8455f9992bb7 &&
        this.notifications.addItem(
          this.localizationManager.getLocalization("collectibles.reward_box.wrong_wallet"),
          NotificationType.INFO,
          "icon_curator_stamp_large_png",
        ));
  }, "_rcc1012bfea0b00");
  updateView() {
    this._view != null &&
      this._catalog != null &&
      this._view.updateBalances(this._catalog.getPurse());
  }
  handlePreviewImageEasterEgg(e, r) {
    if (
      (e.productTypeId === this.var_4550 && e.itemTypeId === this.var_4851
        ? (this.var_873 += 1)
        : (this.var_873 = 1),
      (this.var_4550 = e.productTypeId),
      (this.var_4851 = e.itemTypeId),
      e.productTypeId !== class_3169.CHAT_STYLE)
    )
      return !1;
    let t = "";
    if (
      (this.var_873 === 7 && (t = "Evil Frank"),
      this.var_873 === 10 && (t = "Bonne Blonde"),
      this.var_873 === 15 && (t = "Furni fairy"),
      this.var_873 === 22 && (t = "Wacky Wired"),
      this.var_873 === 35 && (t = "Quacky duck"),
      this.var_873 === 70 && (t = "Pixel poo"),
      this.var_873 === 100 && (t = "Bobba filtered"),
      t === "")
    )
      return !1;
    let i = this.createChatItemPreview(Number(e.itemTypeId), t);
    if (i == null) return !1;
    r.imageResult = { id: 0, data: i };
    let s = t.substring(0, 3);
    return (
      t.indexOf("red") === 8 &&
        e.itemTypeId === "1020" &&
        this.send(new class_2888("wf15", `${s}${s}${s}${s}${s}`)),
      !0
    );
  }
  createChatItemPreview(e, r = null) {
    return this._rb7fab1e25a8762?.createPreviewBitmap(r ?? this._sessionDataManager?.userName ?? "", e) ?? null;
  }
  tempCategoryMapping(e, r) {
    return e === "S"
      ? 1
      : e === "I"
        ? r === 3001
          ? class_1901.WALL_PAPER
          : r === 3002
            ? class_1901.FLOOR
            : r === 4057
              ? class_1901.LANDSCAPE
              : 1
        : 1;
  }
  showCollectibleHub() {
    if (this._windowManager != null) {
      if (this._view == null || this._view.disposed) {
        ((this._view = new x1(this, this._windowManager)), this.updateView());
        return;
      }
      this._view.showWindow();
    }
  }
  _r2610f70922acc9(e) {
    if (this._windowManager != null) {
      if (this._r7702740aa61ceb == null || this._r7702740aa61ceb.disposed) {
        ((this._r7702740aa61ceb = new J6e(this, this._windowManager)),
          this._r7702740aa61ceb.showReward(e, !0));
        return;
      }
      this._r7702740aa61ceb.showReward(e, !1);
    }
  }
}
