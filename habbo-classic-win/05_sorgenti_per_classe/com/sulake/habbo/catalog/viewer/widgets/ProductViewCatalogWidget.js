// Extracted from HabboAirLauncher.deobf.js, line 192654.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ProductViewCatalogWidget.as
// Obfuscated name: _i77f18ccdb42f79

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "ProductViewCatalogWidget");
  }
  static WALL_PAPER = 2;
  static FLOOR = 3;
  static LANDSCAPE = 4;
  static _r2840315b24bc53 = 2;
  static _r29fe712819c2e6 = 3;
  static const_1083 = 8;
  static _r7d67fa4f393f06 = 0;
  static _r08b7c85630c1ac = 1;
  static _r2cb579ff3f6627 = 2;
  static _rb0d2e895822f1c = 3;
  static _r2cd26741f01efd = 0;
  static _r0e6d5dc16d872d = 1;
  static _r917d3fdd481ff7 = 2;
  static _rb2adddebc36b98 = 3;
  static _r29df950a4b5d81 = 4;
  static PREVIEW_ACTION_WAVE = 5;
  static PREVIEW_ACTION_COUNT = 6;
  static _re6678bb062201a = new k(2, 2, 0.55);
  static _r6bb0cd5cb66ca9 = new k(1, 1, 0.8);
  static _r0ce3241fe4e023 = 1;
  static _r9a87e2f1d04ea8 = 2;
  static PREVIEW_ZOOM_IN_CAMERA_OFFSET_Y = 41;
  static PREVIEW_ZOOM_MOVE_SPEED_DENOMINATOR = 9;
  static PREVIEW_ZOOM_SPEED_SLOW = 0.12;
  _rcda402bdffa3a9 = null;
  _productName = null;
  _r7d1cf1d30ba5de = null;
  _rff581c5644dde2 = null;
  _rf9d87d3153411f = null;
  var_172 = null;
  _rb1ec22d8302353 = null;
  var_2955 = null;
  var_2913 = null;
  _r2f3a0f05965746 = null;
  var_267 = null;
  _r881a3ee5209d1d = null;
  _r4efa1bd199ae9f = null;
  _r2e19863e2c683e = null;
  _red2959e73435a8 = null;
  _r9fa9936e0166e1 = null;
  _r584d7b88735477 = new E();
  _r4c1e8653624c9d = null;
  _gridItemLayout = null;
  _rc2aed798c96b95 = [];
  _r6950cd13c4046c = null;
  _rbf5b2cf6ee2db5 = null;
  _r20003195d951b6 = null;
  _r3f1516a665211b = !0;
  _raeecb902287793 = !1;
  _refe8b82e0805bf = !0;
  _offer = null;
  _rbd3db38e46cf43 = !1;
  _r4cd44e0b5fdf93 = a._r7d67fa4f393f06;
  _ra454c5da176ce8 = !1;
  _rfa2496282d654a = a._r2840315b24bc53;
  _rf790f4eb00faf3 = a._r29fe712819c2e6;
  _r050708ec7953ea = a._r2cd26741f01efd;
  _ra00733d1ec830b = a._r0ce3241fe4e023;
  _ra5012deeb27287 = 0;
  _rbd296ce5a9db02 = 0;
  _rf39855639f7131 = 0;
  _r0d0f5e52b93e33 = 0;
  _r461dc0fde9870d = !1;
  dispose() {
    this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.ROOM_CHANGED, this._ra8566e4ea9292c),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SET_PREVIEWER_STUFFDATA, this._r579de80a1eda6a),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r8ab4ad1f50f106),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.TOTAL_PRICE_WIDGET_INITIALIZED, this._r552f98e93c62da),
      Dr.removeEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63),
      this.var_2955?.removeEventListener(u.CLICK, this._rb5f31c93c4ced5),
      this.var_2913?.removeEventListener(u.CLICK, this._r4e7b132a7785e2),
      this._r2f3a0f05965746?.removeEventListener(u.CLICK, this._r6f49ea78c5cc86),
      this.var_267?.removeEventListener(u.CLICK, this._rf275ca47184a8a),
      this._ra5d445b14d9b5e(!1),
      this._r5fb20896a9db2b(),
      this._r50f8f5d96c9965(),
      (this._rcda402bdffa3a9 = null),
      (this._productName = null),
      (this._r7d1cf1d30ba5de = null),
      (this._rff581c5644dde2 = null),
      (this._rf9d87d3153411f = null),
      (this.var_172 = null),
      (this._rb1ec22d8302353 = null),
      (this.var_2955 = null),
      (this.var_2913 = null),
      (this._r2f3a0f05965746 = null),
      (this.var_267 = null),
      (this._r881a3ee5209d1d = null),
      (this._r4efa1bd199ae9f = null),
      (this._r2e19863e2c683e = null),
      (this._red2959e73435a8 = null),
      (this._r9fa9936e0166e1 = null),
      (this._r4c1e8653624c9d = null),
      (this._gridItemLayout = null),
      (this._r6950cd13c4046c = null),
      (this._rbf5b2cf6ee2db5 = null),
      (this._r20003195d951b6 = null),
      (this._catalog = null),
      (this._offer = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    if (
      (this._rd7318259311b4b(CatalogWidgetEnum.PRODUCT_VIEW),
      !this._r3ea9859d0525ee && this._window?.getChildAt(0) != null)
    ) {
      let i = this._window.getChildAt(0);
      ((i.width = this._window.width), (i.height = this._window.height));
    }
    if (
      ((this._refe8b82e0805bf = this._window?.tags.indexOf("NO_ROOM_CANVAS") === -1),
      (this._productName = this._window?.findChildByName("ctlg_product_name") ?? null),
      (this._r7d1cf1d30ba5de = this._window?.findChildByName("ctlg_description") ?? null),
      (this._rff581c5644dde2 = this._window?.findChildByName("tradeable_icon")),
      this._rff581c5644dde2 != null && (this._rff581c5644dde2.visible = !1),
      (this._rf9d87d3153411f = this._window?.findChildByName("recyclable_icon")),
      this._rf9d87d3153411f != null && (this._rf9d87d3153411f.visible = !1),
      (this.var_172 = this._window?.findChildByName("ctlg_teaserimg_1")),
      (this._rb1ec22d8302353 = this._window?.findChildByName("room_canvas_container")),
      (this._r881a3ee5209d1d = this._window?.findChildByName("product_image_widget")),
      (this._r4c1e8653624c9d = this._window?.findChildByName("bundleGrid")),
      this._productName != null)
    ) {
      this._productName.caption = "";
      let i = this._productName;
      i != null && (i.textColor = 0);
    }
    if (this._r7d1cf1d30ba5de != null) {
      this._r7d1cf1d30ba5de.caption = "";
      let i = this._r7d1cf1d30ba5de;
      i != null && (i.textColor = 0);
    }
    (this.var_172 != null &&
      (this._r584d7b88735477 = new E(this.var_172.x, this.var_172.y)),
      this._rb1ec22d8302353 != null &&
        ((this._rb1ec22d8302353.visible = !1),
        (this._r2e19863e2c683e = this._rb1ec22d8302353.findChildByName("room_canvas")),
        this._r2e19863e2c683e != null && this._catalog?._r08651d482bdd11 != null
          ? ((this._rb1ec22d8302353.procedure = this._ra81eb7c1ee1a1a), this._r09a15445ffc1ae(!0))
          : ((this._rb1ec22d8302353 = null), (this._r2e19863e2c683e = null))),
      (this.var_2955 = this._window?.findChildByName("rotate_avatar_left") ?? null),
      this.var_2955 != null &&
        ((this.var_2955.visible = !1),
        this.var_2955.addEventListener(u.CLICK, this._rb5f31c93c4ced5)),
      (this.var_2913 = this._window?.findChildByName("rotate_avatar_right") ?? null),
      this.var_2913 != null &&
        ((this.var_2913.visible = !1),
        this.var_2913.addEventListener(u.CLICK, this._r4e7b132a7785e2)),
      (this._r2f3a0f05965746 = this._window?.findChildByName("toggle_preview_magic") ?? null),
      this._r2f3a0f05965746 != null &&
        ((this._r2f3a0f05965746.visible = !1),
        this._r2f3a0f05965746.addEventListener(u.CLICK, this._r6f49ea78c5cc86)),
      (this.var_267 = this._window?.findChildByName("toggle_preview_zoom") ?? null),
      this.var_267 != null &&
        ((this.var_267.visible = !1),
        this.var_267.addEventListener(u.CLICK, this._rf275ca47184a8a)),
      this._r881a3ee5209d1d != null &&
        ((this._r4efa1bd199ae9f = this._r881a3ee5209d1d.widget), (this._r881a3ee5209d1d.visible = !1)));
    let r = this._catalog?.assets.getAssetByName("gridItem");
    this._gridItemLayout = r?.content ?? null;
    let t = this._catalog?.assets.getAssetByName("ctlg_dyndeal_background");
    return (
      (this._rcda402bdffa3a9 = t?.content?.clone() ?? null),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.ROOM_CHANGED, this._ra8566e4ea9292c),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SET_PREVIEWER_STUFFDATA, this._r579de80a1eda6a),
      this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r8ab4ad1f50f106),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.TOTAL_PRICE_WIDGET_INITIALIZED, this._r552f98e93c62da),
      !0
    );
  }
  imageReady(r, t) {
    if (!(this.disposed || this.page?.offers == null)) {
      for (let i of this.page.offers)
        if (i.previewCallbackId === r) {
          (this.setPreviewImage(t, !0), (i.previewCallbackId = 0));
          break;
        }
    }
  }
  imageFailed(r) {}
  closed() {
    (this._catalog?._r08651d482bdd11 != null &&
      (this._catalog._r08651d482bdd11._rf3433368466f6a = !0),
      this._r78366bba86d388(a._r7d67fa4f393f06));
  }
  _r953e33111bd217(r, t) {}
  _r09a15445ffc1ae(r = !1) {
    if (this._r2e19863e2c683e == null) return;
    let t = this._catalog?._r08651d482bdd11 ?? null;
    if (t == null) return;
    ((t._rf3433368466f6a = !1), r && t.reset(!1));
    let i = t._re632c269e317f0(this._r2e19863e2c683e.width, this._r2e19863e2c683e.height);
    i != null && (this._r7a91775d2ff189(i), this._rfa1cabc2156987());
  }
  _r7a91775d2ff189(r) {
    this._r2e19863e2c683e == null ||
      r == null ||
      (this._red2959e73435a8 == null &&
        ((this._red2959e73435a8 = new Sprite()),
        (this._red2959e73435a8.mouseEnabled = !1),
        (this._red2959e73435a8._r44f27084cc753d = !1),
        this._r2e19863e2c683e.setDisplayObject(this._red2959e73435a8),
        this._ra5012deeb27287 !== this._rbd296ce5a9db02 && this._r83a7a46618b158(),
        this._ra5d445b14d9b5e(this._r4cd44e0b5fdf93 === a._r2cb579ff3f6627)),
      (this._red2959e73435a8._r23c53d131d31fd = new D(
        0,
        0,
        this._r2e19863e2c683e.width,
        this._r2e19863e2c683e.height,
      )),
      (this._r9fa9936e0166e1 !== r || r.parent !== this._red2959e73435a8) &&
        (this._r9fa9936e0166e1 != null &&
          this._r9fa9936e0166e1.parent === this._red2959e73435a8 &&
          this._red2959e73435a8.removeChild(this._r9fa9936e0166e1),
        r.parent != null && r.parent.removeChild(r),
        this._red2959e73435a8.addChild(r),
        (this._r9fa9936e0166e1 = r)));
  }
  _ra8566e4ea9292c = n((r) => {
    (this._r09a15445ffc1ae(), this._rbf5b2cf6ee2db5 != null && this._raaed999dcb0c8a(this._rbf5b2cf6ee2db5));
  }, "_ra8566e4ea9292c");
  _rb5f31c93c4ced5 = n((r) => {
    (this._ra417e33835e950(1), r.stopPropagation());
  }, "_rb5f31c93c4ced5");
  _r4e7b132a7785e2 = n((r) => {
    (this._ra417e33835e950(-1), r.stopPropagation());
  }, "_r4e7b132a7785e2");
  _r6f49ea78c5cc86 = n((r) => {
    (this._rf5ae027589ad7b(), r.stopPropagation());
  }, "_r6f49ea78c5cc86");
  _rf275ca47184a8a = n((r) => {
    (this._rc43fee709603cb(), r.stopPropagation());
  }, "_rf275ca47184a8a");
  _ra81eb7c1ee1a1a = n((r, t) => {
    switch (r.type) {
      case u.CLICK:
        this._catalog?._r08651d482bdd11?._rc0038b776af704();
        break;
      case u.UP:
      case u.OVER:
        this._rbd3db38e46cf43 = !1;
        break;
      case u.DOWN:
        this._rbd3db38e46cf43 = !0;
        break;
      case u.OUT:
        if (
          this._rbd3db38e46cf43 &&
          this._offer != null &&
          this._catalog?._rfdc38b3042267c(this._offer)
        ) {
          let i = this._offer;
          this._catalog._r554b9a058961c3(this, i);
        }
        this._rbd3db38e46cf43 = !1;
        break;
    }
  }, "_ra81eb7c1ee1a1a");
  _raaed999dcb0c8a = n((r) => {
    let t = a._r7d67fa4f393f06,
      i = !1;
    if (r == null) return;
    ((this._rbf5b2cf6ee2db5 = r),
      this._r50f8f5d96c9965(),
      (this._offer = r.offer),
      this._r4c1e8653624c9d != null &&
        ((this._r4c1e8653624c9d.visible = !1), this._r4c1e8653624c9d._rbb4c26d068856f()),
      this._productName != null && (this._productName.caption = r.offer._r0f66f124c65f91),
      this._r7d1cf1d30ba5de != null &&
        ((this._r7d1cf1d30ba5de.caption = r.offer._r8e1eff7657429a),
        (this._r7d1cf1d30ba5de.y =
          this._productName != null
            ? this._productName.y + this._productName.height
            : this._r7d1cf1d30ba5de.y)),
      this._r15621f0bfda778(r.offer),
      this._catalog?.multiplePurchaseEnabled && r.offer.bundlePurchaseAllowed && this._raeecb902287793
        ? (this._re97a7897a0ba9a(), (this._r3f1516a665211b = !1), this._rbbbcc164eac52d(r.offer))
        : (this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.HIDE)),
          this.events?.dispatchEvent?.(new CatalogWidgetBundleDisplayExtraInfoEvent(CatalogWidgetBundleDisplayExtraInfoEvent.HIDE)),
          (this._r3f1516a665211b = !0)),
      this._r3f1516a665211b && this._catalog?.utils != null && this._window != null
        ? (this._r20003195d951b6 = this._catalog.utils.showPriceOnProduct(
            r.offer,
            this._window,
            this._r20003195d951b6,
            this.var_172,
            -6,
            !1,
            6,
            this.page?.var_3503 ?? !1,
            this.page?.var_3503 ?? !1,
          ))
        : this._r20003195d951b6 != null &&
          this._window != null &&
          (this._window.removeChild(this._r20003195d951b6),
          this._r20003195d951b6.dispose(),
          (this._r20003195d951b6 = null)),
      this._catalog?.utils != null &&
        this._window != null &&
        (r.offer._rc9fc89e7eb27a7 != null && r.offer._rc9fc89e7eb27a7 !== ""
          ? this._catalog.utils.showExtraOnProduct(
              class_3169.BADGE,
              r.offer._rc9fc89e7eb27a7,
              this._window,
              6,
              44,
              !1,
              !1,
            )
          : r.offer._r4566aec49601a5 != null && r.offer._r4566aec49601a5 !== ""
            ? this._catalog.utils.showExtraOnProduct(
                class_3169.CHAT_STYLE,
                r.offer._r4566aec49601a5,
                this._window,
                6,
                44,
                !1,
                !1,
              )
            : a.ninjaEffectBundled(r)
              ? this._catalog.utils.showAssetImageAsBadgeOnProduct(
                  "catalogue_effects_ninja",
                  this._window,
                  6,
                  44,
                  !0,
                  !1,
                )
              : this._catalog.utils._r63d751f989e2d8(this._window)),
      this._r881a3ee5209d1d != null && (this._r881a3ee5209d1d.visible = !1),
      db.hasProductImage(r.offer.localizationId)
        ? (this._r4b44d982118740(db.PRODUCT_IMAGES[r.offer.localizationId]),
          this._rb1ec22d8302353 != null && (this._rb1ec22d8302353.visible = !1))
        : ({ _r62fe612b9c834d: t, _r44af8871147bda: i } = this._r8f9d3231cba630(r.offer)),
      this._r78366bba86d388(t, i));
    let s = this._refe8b82e0805bf && this._r2e19863e2c683e != null && this._rb1ec22d8302353?.visible === !0;
    (this._productName && (this._productName.textColor = s ? 4294967295 : 4278190080),
      this._r7d1cf1d30ba5de && (this._r7d1cf1d30ba5de.textColor = s ? 4294967295 : 4278190080),
      this._window?.invalidate());
  }, "_raaed999dcb0c8a");
  _r8f9d3231cba630(r) {
    let t = null,
      i = null,
      s = a._r7d67fa4f393f06,
      o = !1;
    switch (r.pricingModel) {
      case hn.PRICING_MODEL_BUNDLE:
        if (((t = this._rcda402bdffa3a9?.clone() ?? null), this._r4c1e8653624c9d != null)) {
          this._r4c1e8653624c9d.visible = !0;
          let d = r._r10b16f6e9cda51;
          d != null &&
            this._gridItemLayout != null &&
            (d.populateItemGrid(this._r4c1e8653624c9d, this._gridItemLayout),
            (this._r4c1e8653624c9d.var_46 = 0));
        }
        this._rb1ec22d8302353 != null && (this._rb1ec22d8302353.visible = !1);
        break;
      case hn.PRICING_MODEL_SINGLE:
      case hn.PRICING_MODEL_MULTI:
      case hn.PRICING_MODEL_FURNI:
        ({
          image: t,
          offset: i,
          _r62fe612b9c834d: s,
          _r44af8871147bda: o,
        } = this._r215df08eabc1e8(r.product, r));
        break;
      default:
        break;
    }
    return (this.setPreviewImage(t, t != null, i), { _r62fe612b9c834d: s, _r44af8871147bda: o });
  }
  _r215df08eabc1e8(r, t) {
    let i = null,
      s = a._r7d67fa4f393f06,
      o = !1;
    if (r == null) return { image: null, offset: null, _r62fe612b9c834d: s, _r44af8871147bda: o };
    let d = this._catalog?._r08651d482bdd11 ?? null;
    switch (
      (this._rb1ec22d8302353 != null &&
        this._refe8b82e0805bf &&
        (this._rb1ec22d8302353.visible =
          r.productType === class_1803.PRODUCT_TYPE_STUFF ||
          r.productType === class_1803.PRODUCT_TYPE_ITEM ||
          r.productType === class_1803.PRODUCT_TYPE_EFFECT),
      r.productType)
    ) {
      case class_1803.PRODUCT_TYPE_STUFF:
        if (d != null && this._r2e19863e2c683e != null) {
          if (
            ((d._ra7728c300f10df.y = r._r651925293e1d0b ? -15 : 0),
            (d._rf3433368466f6a = !1),
            r.furnitureData == null)
          )
            break;
          if (
            r.furnitureData?.category === class_1901.FIGURE_PURCHASABLE_SET &&
            this._catalog?._rf0eb5f07c94cfb != null &&
            this._catalog.sessionDataManager != null
          ) {
            let c = this._catalog.sessionDataManager.getFloorItemData(r.furnitureData.id),
              f = [];
            for (let b of c?._r2bdd6e3cc1f573.split(",") ?? []) {
              let _ = Number.parseInt(b, 10);
              Number.isNaN(_) ||
                (this._catalog._rf0eb5f07c94cfb.isValidFigureSetForGender(
                  _,
                  this._catalog.sessionDataManager.gender,
                ) &&
                  f.push(_));
            }
            let l = this._catalog._rf0eb5f07c94cfb._r3e7ac99da303de(
              this._catalog.sessionDataManager.figure,
              this._catalog.sessionDataManager.gender,
              f,
            );
            (d._r7f4d6e609cfa14(l, 0),
              this._r1375e5d528f905(d),
              this._r6d5f90814d9625(d),
              (s = a._r08b7c85630c1ac));
          } else
            (d._r0ead309682028b(r.productClassId, new k(90, 0, 0), this._r6950cd13c4046c),
              (s = a._r2cb579ff3f6627),
              (o = d._r60b193098c1ff5()));
        } else
          ((i =
            this.page?.viewer.roomEngine?._r5db1beeb89d785(
              r.productClassId,
              new k(90, 0, 0),
              64,
              this,
              0,
              r.extraParam,
              -1,
              -1,
              this._r6950cd13c4046c,
            ) ?? null),
            (t.previewCallbackId = i?.id ?? 0));
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        if (
          d != null &&
          this._r2e19863e2c683e != null &&
          r.furnitureData != null &&
          [a.WALL_PAPER, a.FLOOR, a.LANDSCAPE].indexOf(r.furnitureData.category) !== -1
        ) {
          let c = this._catalog?.roomEngine?.activeRoomId ?? 0,
            f = this._catalog?.roomEngine?._r7f639510511a35(c, RoomObjectVariableEnum.ROOM_WALL_TYPE) || "101",
            l = this._catalog?.roomEngine?._r7f639510511a35(c, RoomObjectVariableEnum.ROOM_FLOOR_TYPE) || "101",
            b = this._catalog?.roomEngine?._r7f639510511a35(c, RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE) || "1.1",
            _ = r.furnitureData.category === a.FLOOR ? r.extraParam : l,
            h = r.furnitureData.category === a.WALL_PAPER ? r.extraParam : f,
            p = r.furnitureData.category === a.LANDSCAPE ? r.extraParam : b;
          if (
            (d._r9c3331ac1bb690(!0, !0),
            d._r20d16d1bfd889e(_, h, p),
            r.furnitureData.category === a.LANDSCAPE)
          ) {
            let m =
              this._catalog?._r1a2479a26b2096("window_double_default", class_1803.PRODUCT_TYPE_ITEM) ?? null;
            m != null && d._r57da83c688d864(m.id, new k(90, 0, 0), m._r2bdd6e3cc1f573);
          }
        } else
          d != null && this._r2e19863e2c683e != null
            ? ((d._rf3433368466f6a = !1),
              d._r57da83c688d864(r.productClassId, new k(90, 0, 0), r.extraParam),
              (s = d._raf2c7b0b73fe43() ? a._rb0d2e895822f1c : a._r7d67fa4f393f06))
            : ((i =
                this.page?.viewer.roomEngine?._r3ac60c12dafe70(
                  r.productClassId,
                  new k(90, 0, 0),
                  64,
                  this,
                  0,
                  r.extraParam,
                ) ?? null),
              (t.previewCallbackId = i?.id ?? 0));
        break;
      case class_1803.PRODUCT_TYPE_RENTABLE_BOT: {
        let c =
          this._catalog?._rf0eb5f07c94cfb?._r274f6640e76241(
            r.extraParam,
            fr.LARGE,
            null,
          ) ?? null;
        if (c != null) {
          (c._r66a0b6869b9038(ve.GESTURE, ve.GESTURE_SMILE),
            c.setDirection(class_2123.const_252, 4),
            c.setDirection(class_2123.HEAD, 3));
          let f = c._rb2bd48e3b4d265(class_2123.const_252);
          return (c.dispose(), { image: f, offset: null, _r62fe612b9c834d: s, _r44af8871147bda: o });
        }
        break;
      }
      case class_1803.PRODUCT_TYPE_EFFECT:
        if (d != null && this._r2e19863e2c683e != null) {
          ((d._rf3433368466f6a = !1),
            d._r7f4d6e609cfa14(this._catalog?.sessionDataManager?.figure ?? "", r.productClassId),
            this._r1375e5d528f905(d),
            this._r6d5f90814d9625(d),
            (s = a._r08b7c85630c1ac));
          break;
        }
        return { ...this._r51a43ca488478f(r.productClassId), _r62fe612b9c834d: s, _r44af8871147bda: o };
      case class_1803.PRODUCT_TYPE_CLUB:
        break;
      case class_1803.PRODUCT_TYPE_HABBICON: {
        let c = this.getHabbiconPreviewBitmap(r.extraParam);
        return (
          c == null &&
            (Dr.addEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63),
            (c = new A(40, 40, !1, 9408399))),
          { image: c, offset: null, _r62fe612b9c834d: s, _r44af8871147bda: o }
        );
      }
      default:
        UnkClass_3c6cb3.isSupported(r.productType) &&
          this._r881a3ee5209d1d != null &&
          this._r4efa1bd199ae9f != null &&
          ((this._r881a3ee5209d1d.visible = !0),
          (this._r4efa1bd199ae9f.productInfo = new UnkClass_3c6cb3(r)),
          this._rb1ec22d8302353 != null && (this._rb1ec22d8302353.visible = !1));
        break;
    }
    return i != null
      ? { image: i.data, offset: null, _r62fe612b9c834d: s, _r44af8871147bda: o }
      : {
          image: r.initIcon(t._r10b16f6e9cda51 ?? {}, this, null, t, null, this._r6950cd13c4046c),
          offset: null,
          _r62fe612b9c834d: s,
          _r44af8871147bda: o,
        };
  }
  _ra417e33835e950(r) {
    let t = this._catalog?._r08651d482bdd11 ?? null;
    if (t != null)
      switch (this._r4cd44e0b5fdf93) {
        case a._r08b7c85630c1ac:
          this._r19347f2800b154(r, t);
          break;
        case a._r2cb579ff3f6627:
          t._r6c4ecfa6e5fa45(r > 0);
          break;
        case a._rb0d2e895822f1c:
          t._r669492ac62c9b7();
          break;
      }
  }
  _r19347f2800b154(r, t) {
    this._r4cd44e0b5fdf93 !== a._r08b7c85630c1ac ||
      t == null ||
      (this._r050708ec7953ea === a._rb2adddebc36b98 && this._rb997d270ad1cf6(this._rfa2496282d654a + r)
        ? (r *= 2)
        : this._r050708ec7953ea === a._r29df950a4b5d81 &&
          !this._rbb6acb4842e88b(this._rfa2496282d654a + r) &&
          (this._rfa2496282d654a === 0 ? (r = 2) : (r = -this._rfa2496282d654a)),
      (this._rfa2496282d654a = this._ra6612c1dc1d213(this._rfa2496282d654a + r)),
      (this._rf790f4eb00faf3 = this._rfa2496282d654a),
      this._r1375e5d528f905(t));
  }
  _rf5ae027589ad7b() {
    let r = this._catalog?._r08651d482bdd11 ?? null;
    this._r4cd44e0b5fdf93 !== a._r08b7c85630c1ac ||
      r == null ||
      ((this._r050708ec7953ea = this._rc4e85c7e06de64(this._r050708ec7953ea)), this._r6d5f90814d9625(r));
  }
  _rc43fee709603cb() {
    this._r4cd44e0b5fdf93 === a._r08b7c85630c1ac &&
      ((this._ra00733d1ec830b =
        this._ra00733d1ec830b === a._r0ce3241fe4e023 ? a._r9a87e2f1d04ea8 : a._r0ce3241fe4e023),
      this._r5ba66895f5cc68(),
      this._rde3d37284dc572());
  }
  _r1375e5d528f905(r) {
    r != null &&
      (r._r57314f7f668654(this._rfa2496282d654a, this._rf790f4eb00faf3, this._rfb08a10657090e()),
      r._r7314b55e8d0d86(!0),
      r._rc61293181668df());
  }
  _r78366bba86d388(r, t = !1) {
    let i = r;
    ((!this._refe8b82e0805bf || this._rb1ec22d8302353 == null || !this._rb1ec22d8302353.visible) &&
      (i = a._r7d67fa4f393f06),
      this._r4cd44e0b5fdf93 === a._r08b7c85630c1ac &&
        i !== a._r08b7c85630c1ac &&
        (this._rd87c318ae7b0ee(),
        this._re27de2491baafd(),
        this._r2ca0ebdfdeffe2(),
        this._re5e428ffe4aaf5(0, !0)),
      this._r4cd44e0b5fdf93 !== a._r08b7c85630c1ac &&
        i === a._r08b7c85630c1ac &&
        ((this._ra00733d1ec830b = a._r9a87e2f1d04ea8), this._re5e428ffe4aaf5(1, !0)),
      (this._r4cd44e0b5fdf93 = i),
      (this._ra454c5da176ce8 = this._r4cd44e0b5fdf93 === a._r2cb579ff3f6627 && t),
      this._ra5d445b14d9b5e(this._r4cd44e0b5fdf93 === a._r2cb579ff3f6627),
      this._r4cd44e0b5fdf93 === a._r08b7c85630c1ac &&
        this._ra5012deeb27287 !== this._rbd296ce5a9db02 &&
        this._r5ba66895f5cc68(),
      this._rde3d37284dc572());
  }
  _ra5d445b14d9b5e(r) {
    this._red2959e73435a8 != null &&
      (r
        ? this._red2959e73435a8.hasEventListener(M._re9c5159721d60d) ||
          this._red2959e73435a8.addEventListener(M._re9c5159721d60d, this._rfe65d5a339f8cc)
        : this._red2959e73435a8.removeEventListener(M._re9c5159721d60d, this._rfe65d5a339f8cc));
  }
  _rfe65d5a339f8cc = n((r) => {
    let t = this._catalog?._r08651d482bdd11 ?? null;
    if (this._r4cd44e0b5fdf93 !== a._r2cb579ff3f6627 || t == null) {
      this._ra5d445b14d9b5e(!1);
      return;
    }
    let i = t._r60b193098c1ff5();
    this._ra454c5da176ce8 !== i && ((this._ra454c5da176ce8 = i), this._rde3d37284dc572());
  }, "_rfe65d5a339f8cc");
  _rde3d37284dc572() {
    let r = this._r4cd44e0b5fdf93 === a._r08b7c85630c1ac,
      t = this._r4cd44e0b5fdf93 !== a._r7d67fa4f393f06,
      i = t && (this._r4cd44e0b5fdf93 !== a._r2cb579ff3f6627 || this._ra454c5da176ce8);
    (this._ree503680563ae3(this.var_2955, t, i),
      this._ree503680563ae3(this.var_2913, t, i),
      this._ree503680563ae3(this._r2f3a0f05965746, r, r),
      this._ree503680563ae3(this.var_267, r, r));
  }
  _ree503680563ae3(r, t, i) {
    r != null && ((r.visible = t), i ? r.enable() : r.disable());
  }
  _rd87c318ae7b0ee() {
    ((this._rfa2496282d654a = a._r2840315b24bc53), (this._rf790f4eb00faf3 = a._r29fe712819c2e6));
  }
  _re27de2491baafd() {
    this._r050708ec7953ea = a._r2cd26741f01efd;
  }
  _rfb08a10657090e() {
    switch (this._r050708ec7953ea) {
      case a._rb2adddebc36b98:
        return a._re6678bb062201a;
      case a._r29df950a4b5d81:
        return a._r6bb0cd5cb66ca9;
      default:
        return null;
    }
  }
  _r6d5f90814d9625(r) {
    if (r != null) {
      switch (
        (r._r93fc9f432e7394(RoomObjectVariableEnum.const_1195, 0),
        r._r93fc9f432e7394(RoomObjectVariableEnum.const_456, 0),
        this._r050708ec7953ea)
      ) {
        case a._r0e6d5dc16d872d:
          r._r58fa9683fec13b(ve.POSTURE_WALK);
          break;
        case a._r917d3fdd481ff7:
          (r._r58fa9683fec13b(ve.POSTURE_STAND), r._r93fc9f432e7394(RoomObjectVariableEnum.const_1195, 1));
          break;
        case a._rb2adddebc36b98:
          r._r58fa9683fec13b(ve.POSTURE_SIT);
          break;
        case a._r29df950a4b5d81:
          r._r58fa9683fec13b(ve.POSTURE_LAY);
          break;
        case a.PREVIEW_ACTION_WAVE:
          (r._r58fa9683fec13b(ve.POSTURE_STAND),
            r._r93fc9f432e7394(RoomObjectVariableEnum.const_456, ve._r4d2294473a28c0(ve.EXPRESSION_WAVE)));
          break;
        case a._r2cd26741f01efd:
        default:
          r._r58fa9683fec13b(ve.POSTURE_STAND);
          break;
      }
      (r._r57314f7f668654(this._rfa2496282d654a, this._rf790f4eb00faf3, this._rfb08a10657090e()),
        r._r7314b55e8d0d86(!0),
        r._rc61293181668df());
    }
  }
  _rc4e85c7e06de64(r) {
    let t = r;
    do t = (t + 1) % a.PREVIEW_ACTION_COUNT;
    while (this._r45f1189f3cbd05(t, this._rfa2496282d654a));
    return t;
  }
  _r45f1189f3cbd05(r, t) {
    return (
      (r === a._rb2adddebc36b98 && this._rb997d270ad1cf6(t)) ||
      (r === a._r29df950a4b5d81 && !this._rbb6acb4842e88b(t))
    );
  }
  _r2ca0ebdfdeffe2() {
    this._ra00733d1ec830b = a._r0ce3241fe4e023;
  }
  _r5ba66895f5cc68() {
    this._re5e428ffe4aaf5(this._ra00733d1ec830b === a._r9a87e2f1d04ea8 ? 1 : 0);
  }
  _re5e428ffe4aaf5(r, t = !1) {
    if (((r = Math.max(0, Math.min(1, r))), (this._rbd296ce5a9db02 = r), t)) {
      (this._r5fb20896a9db2b(),
        (this._ra5012deeb27287 = r),
        (this._rf39855639f7131 = 0),
        (this._r0d0f5e52b93e33 = 0),
        (this._r461dc0fde9870d = !1),
        this._rfa1cabc2156987());
      return;
    }
    let i = Math.abs(this._rbd296ce5a9db02 - this._ra5012deeb27287);
    if (i <= 0) {
      (this._r5fb20896a9db2b(),
        (this._ra5012deeb27287 = this._rbd296ce5a9db02),
        (this._r0d0f5e52b93e33 = 0),
        (this._r461dc0fde9870d = !1),
        this._rfa1cabc2156987());
      return;
    }
    ((this._rf39855639f7131 = i), (this._r461dc0fde9870d = !0), this._r83a7a46618b158());
  }
  _r83a7a46618b158() {
    this._red2959e73435a8 == null ||
      this._red2959e73435a8.hasEventListener(M._re9c5159721d60d) ||
      this._red2959e73435a8.addEventListener(M._re9c5159721d60d, this._r54effbbfffbf34);
  }
  _r5fb20896a9db2b() {
    this._red2959e73435a8 != null &&
      this._red2959e73435a8.hasEventListener(M._re9c5159721d60d) &&
      this._red2959e73435a8.removeEventListener(M._re9c5159721d60d, this._r54effbbfffbf34);
  }
  _r54effbbfffbf34 = n((r) => {
    let t = this._rbd296ce5a9db02 - this._ra5012deeb27287,
      i = Math.abs(t);
    if (i <= a.PREVIEW_ZOOM_SPEED_SLOW) {
      ((this._ra5012deeb27287 = this._rbd296ce5a9db02),
        (this._r0d0f5e52b93e33 = 0),
        (this._r461dc0fde9870d = !1),
        this._r5fb20896a9db2b(),
        this._rfa1cabc2156987());
      return;
    }
    i > this._rf39855639f7131 && (this._rf39855639f7131 = i);
    let s = Math.sin((Math.PI * i) / this._rf39855639f7131),
      o = a.PREVIEW_ZOOM_SPEED_SLOW * 0.5,
      d = this._rf39855639f7131 / a.PREVIEW_ZOOM_MOVE_SPEED_DENOMINATOR,
      c = o + (d - o) * s;
    (this._r461dc0fde9870d &&
      (c < this._r0d0f5e52b93e33
        ? ((c = this._r0d0f5e52b93e33), c > i && (c = i))
        : (this._r461dc0fde9870d = !1)),
      (this._r0d0f5e52b93e33 = c),
      (this._ra5012deeb27287 += t > 0 ? c : -c),
      this._rfa1cabc2156987());
  }, "_r54effbbfffbf34");
  _rfa1cabc2156987() {
    if (this._r2e19863e2c683e == null || this._r9fa9936e0166e1 == null) return;
    this._red2959e73435a8 != null &&
      (this._red2959e73435a8._r23c53d131d31fd = new D(
        0,
        0,
        this._r2e19863e2c683e.width,
        this._r2e19863e2c683e.height,
      ));
    let r = a._r0ce3241fe4e023 + (a._r9a87e2f1d04ea8 - a._r0ce3241fe4e023) * this._ra5012deeb27287,
      t = a.PREVIEW_ZOOM_IN_CAMERA_OFFSET_Y * this._ra5012deeb27287;
    ((this._r9fa9936e0166e1.scaleX = r),
      (this._r9fa9936e0166e1.scaleY = r),
      (this._r9fa9936e0166e1.x = -(this._r2e19863e2c683e.width * r - this._r2e19863e2c683e.width) / 2),
      (this._r9fa9936e0166e1.y = -(this._r2e19863e2c683e.height * r - this._r2e19863e2c683e.height) / 2 - t));
  }
  _ra6612c1dc1d213(r) {
    return ((r %= a.const_1083), r < 0 && (r += a.const_1083), r);
  }
  _rb997d270ad1cf6(r) {
    return this._ra6612c1dc1d213(r) % 2 !== 0;
  }
  _rbb6acb4842e88b(r) {
    let t = this._ra6612c1dc1d213(r);
    return t === 0 || t === 2;
  }
  _r15621f0bfda778(r) {
    let t = r?.product ?? null,
      i = t?.furnitureData ?? null,
      s = this.page == null || !this.page._r1db0fa6d0cb8a7,
      o =
        t != null &&
        i != null &&
        (t.productType === class_1803.PRODUCT_TYPE_STUFF || t.productType === class_1803.PRODUCT_TYPE_ITEM);
    (this._rff581c5644dde2 != null && (this._rff581c5644dde2.visible = s && o && !i.tradeable),
      this._rf9d87d3153411f != null &&
        (this._rf9d87d3153411f.visible = s && o && (!i.recyclable || !i.tradeable)));
  }
  _re97a7897a0ba9a() {
    this._catalog != null &&
      (this._catalog._promoInfo
        ? this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.RESET, 1, this._catalog._rbf728fddc728fb))
        : this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.RESET, 1)),
      this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.SHOW)),
      this._catalog._rc94facdba94e66 != null &&
        this.events?.dispatchEvent?.(
          new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.const_735, this._catalog._rc94facdba94e66._rdd36345f9cb994),
        ),
      this.events?.dispatchEvent?.(new CatalogWidgetSpinnerEvent(CatalogWidgetSpinnerEvent.SET_MIN, 1)));
  }
  _rbbbcc164eac52d(r) {
    let t = new ExtraInfoItemData(ExtraInfoItemData.TYPE_RESET_MESSAGE);
    ((t.activityPointType = r.activityPointType),
      (t.priceActivityPoints = r.priceInActivityPoints),
      (t.priceCredits = r.priceInCredits),
      (t._r3ff0b53e43bee9 = r.priceInSilver),
      (t._rc9fc89e7eb27a7 = r._rc9fc89e7eb27a7 ?? ""),
      this.events?.dispatchEvent?.(new CatalogWidgetBundleDisplayExtraInfoEvent(CatalogWidgetBundleDisplayExtraInfoEvent.RESET, t)));
  }
  _r51a43ca488478f(r) {
    if (this.var_172 == null) return { image: null, offset: null };
    let t = 4291611852,
      i = this._window?.findChildByName("pixelsBackground");
    i != null && ((i.visible = !0), (t = i.color));
    let s = new A(this.var_172.width, this.var_172.height, !1, t),
      o = this._catalog?.sessionDataManager?.figure ?? "",
      d = this._catalog?._rf0eb5f07c94cfb?._r274f6640e76241(o, fr.LARGE) ?? null;
    if (d == null) return { image: s, offset: null };
    let c = null;
    try {
      (d.setDirection(class_2123.HEAD, 3),
        d._reb381248d47816(),
        d._r66a0b6869b9038(ve.GESTURE, ve.GESTURE_SMILE),
        d._r66a0b6869b9038(ve.const_118, r),
        d.endActionAppends(),
        d._r8d8e6e810979ae(1),
        d._r8d8e6e810979ae(1),
        (c = d._rb09602dca8db26(class_2123.const_252, !0)));
      let f = new E(0, 0),
        l = new E(0, 0);
      if (c != null) {
        ((l.x = (s.width - c.width) / 2), (l.y = (s.height - c.height) / 2));
        for (let p of d._r83474000dfec82()) {
          if (p.id !== "avatar") continue;
          let m = d.getLayerData(p);
          m != null && ((f.x = m.dx), (f.y = m.dy));
        }
        let b = 64,
          _ = new E((c.width - b) / 2, c.height - b / 4),
          h = l.add(_);
        (this.addEffectSprites(s, d, f, h, !1),
          s.copyPixels(c, c.rect, l, null, null, !0),
          this.addEffectSprites(s, d, f, h, !0));
      }
      return { image: s, offset: f };
    } finally {
      (c?.dispose(), d.dispose());
    }
  }
  addEffectSprites(r, t, i, s, o = !0) {
    for (let d of t._r83474000dfec82()) {
      let c = 0,
        f = d._rec16170e9b85f5(t.getDirection()),
        l = d.getDirectionOffsetY(t.getDirection()),
        b = d.getDirectionOffsetZ(t.getDirection()),
        _ = 0;
      if (o) {
        if (b < 0) continue;
      } else if (b >= 0) continue;
      d.hasDirections && (_ = t.getDirection());
      let h = t.getLayerData(d);
      (h != null && ((c = h.animationFrame), (f += h.dx), (l += h.dy), (_ += h.directionOffset)),
        _ < 0 && (_ += 8),
        _ > 7 && (_ -= 8));
      let p = `${t.getScale()}_${d.member}_${_}_${c}`,
        m = t.getAsset(p);
      if (m == null || !(m.content instanceof A)) continue;
      let v = m.content.clone(),
        w = s.x - m.offset.x + f,
        I = s.y - m.offset.y + l;
      (d.ink === 33
        ? r.draw(v, new Pe(1, 0, 0, 1, w - i.x, I - i.y), null, ie.ADD, null, !1)
        : r.copyPixels(v, v.rect, new E(w - i.x, I - i.y)),
        v.dispose());
    }
  }
  _r50f8f5d96c9965() {
    for (let r of this._rc2aed798c96b95)
      (r.parent === this._window && this._window?.removeChild(r), r.dispose());
    this._rc2aed798c96b95 = [];
  }
  setPreviewImage(r, t, i = null) {
    let s = r ?? new A(1, 1),
      o = t || r == null;
    if (this.var_172 != null && !this.window?.disposed) {
      (this.var_172.bitmap == null &&
        (this.var_172.bitmap = new A(
          this.var_172.width,
          this.var_172.height,
          !0,
          16777215,
        )),
        this.var_172.bitmap.fillRect(this.var_172.bitmap.rect, 16777215));
      let d = new E(
        (this.var_172.width - s.width) / 2,
        (this.var_172.height - s.height) / 2,
      );
      (this.var_172.bitmap.copyPixels(s, s.rect, d, null, null, !0),
        this.var_172.invalidate(),
        (this.var_172.x = this._r584d7b88735477.x + (i?.x ?? 0)),
        (this.var_172.y = this._r584d7b88735477.y + (i?.y ?? 0)));
    }
    o && s.dispose();
  }
  _r4b44d982118740(r) {
    if (r === "" || this._catalog?.assets == null) return;
    let t = this._catalog.assets.getAssetByName(r);
    if (t == null) {
      this._r9097fa16041e30(r);
      return;
    }
    this.setPreviewImage(t.content, !1);
  }
  _r9097fa16041e30(r) {
    if (r === "" || this._catalog == null) return;
    let t = this._catalog.assets.loadAssetFromFile(
      r,
      new UnkClass_636490(`${this._catalog.imageGalleryHost}${r}.gif`),
      "image/gif",
    );
    t?.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rbd9d54e2af9eac);
  }
  _rbd9d54e2af9eac = n((r) => {
    let t = r.target;
    t != null &&
      (this._r4b44d982118740(t.assetName), t.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rbd9d54e2af9eac));
  }, "_rbd9d54e2af9eac");
  _r579de80a1eda6a = n((r) => {
    ((this._r6950cd13c4046c = r.stuffData),
      this._rbf5b2cf6ee2db5 != null &&
        (this._catalog?._r08651d482bdd11?.reset(!1), this._raaed999dcb0c8a(this._rbf5b2cf6ee2db5)));
  }, "_r579de80a1eda6a");
  _r8ab4ad1f50f106 = n((r) => {
    if (r.type !== CatalogWidgetSpinnerEvent.VALUE_CHANGED || this._rbf5b2cf6ee2db5 == null) return;
    let t = this.window?.findChildByName("price_box_new");
    t != null &&
      this._catalog?.utils != null &&
      this._catalog.utils._ra10ac9ff6556f3(t, this._rbf5b2cf6ee2db5.offer);
  }, "_r8ab4ad1f50f106");
  _r552f98e93c62da = n((r) => {
    this._raeecb902287793 = !0;
  }, "_r552f98e93c62da");
  static ninjaEffectBundled(r) {
    return r.offer._r10b16f6e9cda51?.products.length !== 2
      ? !1
      : r.offer._r10b16f6e9cda51.products.some(
          (t) => t.productType === class_1803.PRODUCT_TYPE_EFFECT && t.productClassId === sb.EFFECT_CLASSID_NINJA_DISAPPEAR,
        );
  }
  getHabbiconPreviewBitmap(r) {
    let t = Dr.getPreviewBitmap(Number(r) | 0, !1);
    return t != null ? t.clone() : null;
  }
  _r163610b1a99c63 = n((r) => {
    (Dr.removeEventListener(Dr.ASSETS_LOADED, this._r163610b1a99c63),
      !this.disposed && this._rbf5b2cf6ee2db5 != null && this._raaed999dcb0c8a(this._rbf5b2cf6ee2db5));
  }, "_r163610b1a99c63");
}
