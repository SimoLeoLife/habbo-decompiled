// Extracted from HabboAirLauncher.deobf.js, line 308368.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/RentableBotMenuView.as
// Obfuscated name: _ia990e9b9b98ae3

class extends AvatarContextInfoButtonView {
  static {
    n(this, "RentableBotMenuView");
  }
  _data = null;
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    (this._window != null &&
      (this._window.removeEventListener(u.OVER, this._r846ed7467efd50),
      this._window.removeEventListener(u.OUT, this._r846ed7467efd50)),
      (this._data = null),
      super.dispose());
  }
  static setup(e, r, t, i, s, o = !1) {
    ((e._data = o instanceof class_2504 ? o : null), AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  updateButtons() {
    if (this._window == null || this._data == null) return;
    let e = this._window.findChildByName("buttons");
    if (e == null) return;
    let r = this.var_34?.getListItemByName("link_template"),
      t = this.var_34?.getListItemByName("nux_proceed_1");
    ((e.procedure = this._r8b6e9f027ac5db), (e.autoArrangeItems = !1));
    for (let s = 0; s < e.numListItems; s++) {
      let o = e.getListItemAt(s);
      o != null && (o.visible = !1);
    }
    let i = this._data.amIOwner || this._data.amIAnyRoomController;
    (this.showButton(
      "pick",
      (this._data.botSkills.length === 0 ||
        this._data.botSkills.indexOf(class_2965.NO_PICK_UP) === -1) &&
        i,
    ),
      this._data.botSkills.length > 0 &&
        (this.showButton(
          "donate_to_all",
          this._data.botSkills.indexOf(class_2965.DONATE_FURNITURE_TO_ALL) !== -1,
        ),
        this.showButton(
          "donate_to_user",
          this._data.botSkills.indexOf(class_2965.DONATE_FURNITURE_TO_USER) !== -1,
        ),
        this._data.amIOwner &&
          (this.showButton(
            "change_bot_name",
            this._data.botSkills.indexOf(class_2965.CHANGE_NAME) !== -1,
          ),
          this.showButton("dress_up", this._data.botSkills.indexOf(class_2965.FIGURE_STRING) !== -1),
          this.showButton(
            "random_walk",
            this._data.botSkills.indexOf(class_2965.RANDOM_WALK) !== -1,
          ),
          this.showButton(
            "setup_chat",
            this._data.botSkills.indexOf(class_2965.CHATTER_MARKOV) !== -1,
          ),
          this.showButton("dance", this._data.botSkills.indexOf(class_2965.DANCE) !== -1)),
        this.showButton(
          "nux_take_tour",
          this._data.botSkills.indexOf(class_2965.NUX_TAKE_TOUR) !== -1,
        )),
      this.showButton(
        "wired_inspect",
        this.widget?.handler?.container?._rddef5461e8915c?._reb1c224373ab03() ?? !1,
      ));
    for (let s of this._data._r4477d7dca92621) this._rdf5ab53f6b703c(e, r, t, s);
    ((e.autoArrangeItems = !0), (e.visible = !0));
  }
  updateWindow() {
    let e = this.widget;
    if (!(e == null || e.assets == null || e.windowManager == null)) {
      if (this.isMinimized) {
        this.activeView = this._r264c5b40440e9c();
        return;
      }
      if (this._window == null) {
        let r = e.assets.getAssetByName("avatar_menu_widget")?.content ?? null;
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
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1 || this._data == null) return;
    let t = !1;
    if (e.type === u.CLICK) {
      if (r.name === "button") {
        let i = r.parent?.name ?? "";
        switch (((t = !0), i)) {
          case "pick":
            this.widget?.handler?.container?.connection?.send(new class_2983(this._data.id));
            break;
          case "setup_chat":
            this._r5d9a76e135764b(this._data.id, class_2965.CHATTER_MARKOV);
            break;
          case "random_walk":
            this._r2c48ace71a1eef(class_2965.RANDOM_WALK);
            break;
          case "dress_up":
            this._r2c48ace71a1eef(class_2965.FIGURE_STRING);
            break;
          case "dance":
            this._r2c48ace71a1eef(class_2965.DANCE);
            break;
          case "donate_to_all":
            this._r2c48ace71a1eef(class_2965.DONATE_FURNITURE_TO_ALL);
            break;
          case "donate_to_user":
            this._r2c48ace71a1eef(class_2965.DONATE_FURNITURE_TO_USER);
            break;
          case "nux_take_tour":
            (this.widget?.component?.context?._r6b6c989018eb05("help/tour"),
              this._r2c48ace71a1eef(class_2965.NUX_TAKE_TOUR));
            break;
          case "wired_inspect":
            this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
              new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.const_593, this._data.id),
            );
            break;
          case "change_bot_name":
            this._r5d9a76e135764b(this._data.id, class_2965.CHANGE_NAME);
            break;
          default:
            i.indexOf(":link ") === 0
              ? this.widget?.component?.context?._r6b6c989018eb05(i.slice(6))
              : i.indexOf("nux_proceed_") === 0
                ? this._r2c48ace71a1eef(class_2965.NUX_PROCEED, i.slice(12))
                : (t = !1);
            break;
        }
      }
      this.updateButtons();
    } else super._rb8ed727c592c36(e, r);
    t && this.var_17?.removeView(this, !1);
  }
  _rdf5ab53f6b703c(e, r, t, i) {
    let s,
      o = null;
    if (
      (i.id === class_2965.INCLIENT_LINK &&
        r != null &&
        ((o = r.clone()),
        (s = i.data.split(",")),
        o != null &&
          s.length === 2 &&
          ((o.findChildByName("label").caption = s[0] ?? ""),
          (o.name = `:link ${s[1] ?? ""}`),
          (o.visible = !0),
          e.addListItem(o))),
      i.id === class_2965.NUX_PROCEED)
    ) {
      if (i.data === "") this.showButton("nux_proceed_1", !0);
      else if (t != null && ((s = i.data.split(",")), s.length === 2)) {
        let d = Number.parseInt(s[1] ?? "0", 10);
        if (d === 1) {
          this.showButton("nux_proceed_1", !0);
          let c = e.getListItemByName("nux_proceed_1");
          c?.findChildByName("label") && (c.findChildByName("label").caption = s[0] ?? "");
        } else {
          o = t.clone();
          let c = e.getListItemByName("nux_proceed_1");
          o != null &&
            c != null &&
            ((o.visible = !0),
            (o.name = `nux_proceed_${d}`),
            (o.findChildByName("label").caption = s[0] ?? ""),
            e.addListItemAt(o, e.getListItemIndex(c) + d - 1));
        }
      }
    }
    i.id === class_2965.NAVIGATOR_SEARCH &&
      r != null &&
      ((o = r.clone()),
      (s = i.data.split(",")),
      o != null &&
        s.length === 2 &&
        ((o.findChildByName("label").caption = s[0] ?? ""),
        (o.name = `:link navigator/search/${s[1] ?? ""}`),
        (o.visible = !0),
        e.addListItem(o)));
  }
  _r5d9a76e135764b(e, r, t) {
    if (t != null) {
      this.widget?._r5d9a76e135764b(this._data?.id ?? 0, r, t);
      return;
    }
    let i = new D();
    this._window?.getGlobalRectangle(i);
    let s = new E(i.x + i.width / 2, i.y + i.height);
    this.widget?._r5d9a76e135764b(this._data?.id ?? 0, r, s);
  }
  _r2c48ace71a1eef(e, r = "") {
    this._data != null && this.widget?.handler?.container?.connection?.send(new class_2823(this._data.id, e, r));
  }
  get widget() {
    return this.var_17;
  }
}
