// Estratto da HabboAirLauncher.deobf.js, riga 303990.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/PhotoPurchaseConfirmationDialog.as
// Nome offuscato: _i7d90d9a4a248d7

class a {
  constructor(e, r) {
    this.var_17 = e;
    this._caption = r;
    this._window = this.var_17?.getXmlWindow("photo_purchase_confirmation");
    let t = this._window?.content?.getChildByName("contentlist");
    if (this.var_17?.component?.getBoolean("camera.competition.enabled"))
      XC.setHTMLLinkStyle(
        this._window?.findChildByName("competition_info"),
        16777215,
        16777215,
        16777215,
      );
    else if (t != null) {
      let i = t.getListItemByName("competition_wrapper");
      i != null && t.removeListItem(i);
    }
    if (this.var_17?.component?.getBoolean("disclaimer.credit_spending.enabled"))
      this.setDisclaimerAccepted(!1);
    else if (t != null) {
      let i = t.getListItemByName("disclaimer");
      (i != null && t.removeListItem(i), this.setDisclaimerAccepted(!0));
    }
    if (!this.var_17?.component?.getBoolean("camera.photo.publishing.enabled") && t != null) {
      let i = t.getListItemByName("publish_wrapper");
      i != null && t.removeListItem(i);
    }
    (this._window?.resizeToFitContent(),
      this.setState(a.STATE_LOADING_IMAGE),
      this._window?.center(),
      this._window != null && (this._window.procedure = this._r4d2fcea4870df2));
  }
  static {
    n(this, "PhotoPurchaseConfirmationDialog");
  }
  static STATE_LOADING_IMAGE = "loading_image";
  static STATE_IMAGE_LOADED = "image_loaded";
  static STATE_WAITING_PURCHASE_TO_COMPLETE = "waiting_purchase_to_complete";
  static STATE_WAITING_PUBLISH_TO_COMPLETE = "waiting_publish_to_complete";
  static STATE_WAITING_COMPETITION_SUBMIT_TO_COMPLETE = "waiting_competition_submit_to_complete";
  static STATE_RENDERING_FAILED = "rendering_failed";
  _state = a.STATE_LOADING_IMAGE;
  _window;
  var_39 = null;
  _rd8c3d67f7999a3 = !1;
  var_3225 = !1;
  var_3656 = !1;
  var_3099 = null;
  var_523 = null;
  var_3959 = 0;
  _rf28ba968bf9736 = null;
  animateIconToToolbar() {
    if (this._window == null || this.var_39 == null) return;
    let e = this._window.findChildByName("product_image"),
      r = new E();
    e?.getGlobalPosition(r);
    let t = new A(120, 120, !0, 0),
      i = t.width / this.var_39.width,
      s = new Pe(i, 0, 0, i, 0, 0);
    (t.draw(this.var_39, s),
      this.var_17?.handler.containerRef?.toolbar?.createTransitionToIcon(Me.INVENTORY, t, r.x, r.y));
    let o = this._window.findChildByName("status_info");
    o &&
      (o.caption =
        this.var_17?.localizations?.getLocalization(
          "camera.purchase.successful",
          "camera.purchase.successful",
        ) ?? "");
    let d = this._window.findChildByName("buy_button");
    d &&
      (d.caption =
        this.var_17?.localizations?.getLocalization(
          "camera.buy.another.button.text",
          "camera.buy.another.button.text",
        ) ?? "");
    let c = this._window.findChildByName("inventory_link_area");
    (c && (c.visible = !0), this.var_3959++);
    let f = this._window.findChildByName("purchase_count");
    (f != null && ((f.caption = ""), (f.caption = this.var_3959.toString())),
      this.setState(a.STATE_IMAGE_LOADED));
  }
  setImageUrl(e) {
    if (this.var_17 == null) return;
    if (e.length < 1) {
      (this._r1268cc63ab99a5(),
        this.var_17.windowManager?.alert(
          "${generic.alert.title}",
          "${camera.render.count.info}",
          0,
          null,
        ));
      return;
    }
    let r = `${this.var_17.component?.getProperty("stories.image_url_base") ?? ""}${e}`;
    (this._rbf82339d4d8050(),
      (this._rf28ba968bf9736 = new StringUtil("image/png")),
      this._rf28ba968bf9736.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rf309bbcc5112ed),
      this._rf28ba968bf9736.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra189ddc9cb67d6),
      this._rf28ba968bf9736.load(new _i636490202c0f9a(r)));
  }
  _r1268cc63ab99a5() {
    if (this._window == null) return;
    let e = this._window.findChildByName("product_image");
    (e != null &&
      ((this.var_39 = new A(Math.max(1, e.width), Math.max(1, e.height), !1, 0)),
      e.bitmap?.dispose(),
      (e.bitmap = this.var_39.clone())),
      this.setState(a.STATE_RENDERING_FAILED));
  }
  publishingStatus(e) {
    if (this._window == null) return;
    let r = e.getParser();
    if (r.isOk())
      ((this.var_3099 = r._rb11133f06fb2d5()),
        (this._window.findChildByName("status_info").caption =
          this.var_17?.localizations?.getLocalization(
            "camera.publish.successful",
            "camera.publish.successful",
          ) ?? ""),
        (this._window.findChildByName("publish_explanation").caption =
          this.var_17?.localizations?.getLocalization(
            "camera.publish.successful",
            "camera.publish.successful",
          ) ?? ""),
        (this._window.findChildByName("publish_detailed_explanation").caption =
          this.var_17?.localizations?.getLocalization(
            "camera.publish.success.short.info",
            "camera.publish.success.short.info",
          ) ?? ""),
        this._window.findChildByName("publish_button") &&
          (this._window.findChildByName("publish_button").visible = !1),
        this._window.findChildByName("publish_price_area") &&
          (this._window.findChildByName("publish_price_area").visible = !1),
        this._window.findChildByName("publish_link_area") &&
          (this._window.findChildByName("publish_link_area").visible = !0),
        this.var_523 != null && this.var_523.reset());
    else {
      let t = r._rab3fd823e98fe8(),
        i = Math.floor(t / 60) + 1,
        s =
          this.var_17?.localizations?._r43eae9731f5b27?.(
            "camera.publish.wait",
            "minutes",
            i.toString(),
          ) ??
          this.var_17?.localizations?.getLocalization(
            "camera.publish.wait",
            "camera.publish.wait",
          ) ??
          "";
      (this.var_17?.windowManager?.alert("${generic.alert.title}", s, 0, null),
        (this._window.findChildByName("status_info").caption = ""),
        this.var_523 == null
          ? ((this.var_523 = new _i05394ecc0c0c4d(t * 1e3, 1)),
            this.var_523.addEventListener(DeBouncer._rf33144eac61595, this._rdb346768164414))
          : (this.var_523.reset(), (this.var_523.delay = t * 1e3)),
        this.var_523.start());
    }
    this.setState(a.STATE_IMAGE_LOADED);
  }
  competitionStatus(e) {
    if (this._window == null || this._window.findChildByName("competition_wrapper") == null)
      return;
    let r = e.getParser();
    if (r.isOk())
      ((this._window.findChildByName("status_info").caption =
        this.var_17?.localizations?.getLocalization(
          "camera.competition.submitted.status",
          "camera.competition.submitted.status",
        ) ?? ""),
        (this._window.findChildByName("competition_name").caption =
          this.var_17?.localizations?.getLocalization(
            "camera.competition.submitted.info",
            "camera.competition.submitted.info",
          ) ?? ""));
    else if (r._rc57adb513c5c2b() === "too-many-submits")
      ((this._window.findChildByName("status_info").caption =
        this.var_17?.localizations?.getLocalization("generic.failed", "generic.failed") ?? ""),
        (this._window.findChildByName("competition_name").caption =
          this.var_17?.localizations?.getLocalization(
            "camera.competition.limit.info",
            "camera.competition.limit.info",
          ) ?? ""));
    else if (r._rc57adb513c5c2b() === "email-not-verified") {
      ((this.var_3225 = !1),
        (this._window.findChildByName("status_info").caption =
          this.var_17?.localizations?.getLocalization("generic.failed", "generic.failed") ?? ""));
      let i = this.var_17?.windowManager?.confirm(
        "${generic.alert.title}",
        "${camera.competition.email.not.verified}",
        HabboAlertDialogFlag.const_427 | HabboAlertDialogFlag.const_688,
        this._rabc26bbf3ae85e,
      );
      (i?._r3fecca3423f155(
        HabboAlertDialogFlag.const_427,
        new _iada4b60c6952bf(
          this.var_17?.localizations?.getLocalization("email.settings", "email.settings") ?? "",
          "",
          !0,
        ),
      ),
        i?._r3fecca3423f155(
          HabboAlertDialogFlag.const_688,
          new _iada4b60c6952bf(
            this.var_17?.localizations?.getLocalization(
              "groupforum.settings.cancel",
              "groupforum.settings.cancel",
            ) ?? "",
            "",
            !0,
          ),
        ));
    }
    this.setState(a.STATE_IMAGE_LOADED);
    let t = this._window.findChildByName("competition_button");
    t != null && t.y < 10 && (t.y = 10);
  }
  setPrices(e, r, t) {
    let i = this._window?.findChildByName("purchase_credit_cost_text");
    i && (i.text = e.toString());
    let s = this._window?.findChildByName("purchase_ducket_cost_text");
    r > 0
      ? s && (s.text = r.toString())
      : (s && (s.visible = !1),
        this._window?.findChildByName("ducket_icon") &&
          (this._window.findChildByName("ducket_icon").visible = !1));
    let o = this._window?.findChildByName("publish_ducket_cost_text");
    o && (o.text = t.toString());
  }
  hide() {
    (this._window?.dispose(),
      (this._window = null),
      (this.var_39 = null),
      (this.var_17 = null),
      this._rbf82339d4d8050(),
      this.var_523?.stop(),
      (this.var_523 = null));
  }
  _rbf82339d4d8050() {
    (this._rf28ba968bf9736?.removeEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._rf309bbcc5112ed),
      this._rf28ba968bf9736?.removeEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._ra189ddc9cb67d6),
      (this._rf28ba968bf9736 = null));
  }
  _rd8972aa3cb14b6(e, r) {
    let t = this.var_17?.catalog,
      i = t?.getPurse();
    return (i?.credits ?? 0) < e
      ? (t?.showNotEnoughCreditsAlert(), !1)
      : (i?.getActivityPointsForType(et.DUCKET) ?? 0) < r
        ? (t?.showNotEnoughActivityPointsAlert(et.DUCKET), !1)
        : !0;
  }
  disableButtons(e) {
    let r = this._window?.findChildByName("buy_button"),
      t = this._window?.findChildByName("publish_button"),
      i = this._window?.findChildByName("competition_button");
    if ((r?.disable(), t?.disable(), i?.disable(), e)) {
      let s = this._window?.findChildByName("cancel_button");
      s &&
        (s.caption =
          this.var_17?.localizations?.getLocalization("generic.close", "generic.close") ?? "");
      let o = this._window?.findChildByName("status_info");
      o &&
        (o.caption =
          this.var_17?.localizations?.getLocalization(
            "camera.purchase.pleasewait",
            "camera.purchase.pleasewait",
          ) ?? "");
    }
  }
  setState(e) {
    if (this._window == null) return;
    this._state = e;
    let r = this._window.findChildByName("buy_button"),
      t = this._window.findChildByName("publish_button"),
      i = this._window.findChildByName("competition_button");
    switch (e) {
      case a.STATE_LOADING_IMAGE:
        this.disableButtons(!1);
        break;
      case a.STATE_IMAGE_LOADED:
        (this._rd8c3d67f7999a3 && r?.enable(),
          this.var_3656 || t?.enable(),
          this.var_3225 || i?.enable());
        break;
      case a.STATE_WAITING_PURCHASE_TO_COMPLETE:
        (this.disableButtons(!0),
          this.var_17?.component?.getBoolean("disclaimer.credit_spending.enabled") &&
            this.setDisclaimerAccepted(!1));
        break;
      case a.STATE_WAITING_PUBLISH_TO_COMPLETE:
        ((this.var_3656 = !0), this.disableButtons(!0));
        break;
      case a.STATE_WAITING_COMPETITION_SUBMIT_TO_COMPLETE:
        ((this.var_3225 = !0), this.disableButtons(!0));
        break;
      case a.STATE_RENDERING_FAILED:
        (this.disableButtons(!1), (this._window.findChildByName("status_info").caption = ""));
        break;
    }
  }
  setImage(e) {
    if (this._window == null) return;
    let r = this._window.findChildByName("product_image");
    if (r == null) return;
    (r.bitmap?.dispose(), (r.bitmap = new A(Math.max(1, r.width), Math.max(1, r.height), !0, 0)));
    let t = r.width / e.width;
    (r.bitmap.draw(e, new Pe(t, 0, 0, t, 0, 0), null, null, null, !0), (this.var_39 = e));
  }
  _rdb346768164414 = n((e) => {
    ((this.var_3656 = !1),
      (this.var_523 = null),
      this._state === a.STATE_IMAGE_LOADED &&
        this._window?.findChildByName("publish_button")?.enable());
  }, "_rdb346768164414");
  _rf309bbcc5112ed = n((e) => {
    let r = e.target;
    if (!(r == null || r !== this._rf28ba968bf9736))
      try {
        let t = new _ifdd92074c780c7().decode(r.bytes);
        if (t != null) {
          this.setImage(t);
          let i = this._window?.findChildByName("status_info");
          (i &&
            (i.caption =
              this.var_17?.localizations?.getLocalization(
                "camera.confirm_phase.info",
                "camera.confirm_phase.info",
              ) ?? ""),
            this.setState(a.STATE_IMAGE_LOADED));
        } else
          (this._r1268cc63ab99a5(),
            this.var_17?.windowManager?.alert(
              "${generic.alert.title}",
              "${camera.render.count.info}",
              0,
              null,
            ));
      } catch {
        (this._r1268cc63ab99a5(),
          this.var_17?.windowManager?.alert(
            "${generic.alert.title}",
            "${camera.render.count.info}",
            0,
            null,
          ));
      } finally {
        this._rbf82339d4d8050();
      }
  }, "_rf309bbcc5112ed");
  _ra189ddc9cb67d6 = n((e) => {
    (this._rbf82339d4d8050(),
      this._r1268cc63ab99a5(),
      this.var_17?.windowManager?.alert(
        "${generic.alert.title}",
        "${camera.render.count.info}",
        0,
        null,
      ));
  }, "_ra189ddc9cb67d6");
  _rabc26bbf3ae85e = n((e, r) => {
    if (r.type === y.const_1300) {
      let t = this.var_17?.component?.getProperty("email.verification.url") ?? "";
      if (!ua.isEmpty(t)) {
        let i = (this.var_17?.component?.getInteger("spaweb", 0) ?? 0) === 1 ? "" : "_blank";
        _i7dcfde9cf3179b(new _i636490202c0f9a(t), i);
      }
    }
    e.dispose();
  }, "_rabc26bbf3ae85e");
  _r4d2fcea4870df2 = n((e, r) => {
    if (!(e.type !== u.CLICK && e.type !== u.DOUBLE_CLICK))
      switch (r.name) {
        case "spending_disclaimer":
          this.setDisclaimerAccepted(r?.isSelected ?? !1);
          return;
        case "competition_button":
          this._state === a.STATE_IMAGE_LOADED &&
            (this.setState(a.STATE_WAITING_COMPETITION_SUBMIT_TO_COMPLETE), this.var_17?.handler._rfaf96754f00688());
          return;
        case "buy_button":
          this._state === a.STATE_IMAGE_LOADED &&
            this._rd8c3d67f7999a3 &&
            this._rd8972aa3cb14b6(
              this.var_17?.handler._re27c006a73d42e ?? 0,
              this.var_17?.handler._rfc8c5432c23056 ?? 0,
            ) &&
            (this.setState(a.STATE_WAITING_PURCHASE_TO_COMPLETE), this.var_17?.handler._r5b93e1b5d387c3());
          return;
        case "publish_button":
          this._state === a.STATE_IMAGE_LOADED &&
            this._rd8972aa3cb14b6(0, this.var_17?.handler._r845c4a32d260e6 ?? 0) &&
            (this.setState(a.STATE_WAITING_PUBLISH_TO_COMPLETE), this.var_17?.handler._r1d5051665d83b8());
          return;
        case "inventory_link":
          this.var_17?.component?.context._r6b6c989018eb05("inventory/open/furni");
          return;
        case "publish_link": {
          let t = this.var_17?.container?.sessionDataManager?.userName ?? "";
          Ae.openPage(`/profile/${t}/photo/${this.var_3099 ?? ""}`);
          return;
        }
        case "header_button_close":
        case "cancel_button":
          (this.var_17?.startTakingPhoto("photoPurchaseCancel"), this.hide());
          return;
      }
  }, "_r4d2fcea4870df2");
  setDisclaimerAccepted(e) {
    let r = this._window?.findChildByName("buy_button");
    r != null &&
      ((this._rd8c3d67f7999a3 = e), e && this._state === a.STATE_IMAGE_LOADED ? r.enable() : r.disable());
  }
}
