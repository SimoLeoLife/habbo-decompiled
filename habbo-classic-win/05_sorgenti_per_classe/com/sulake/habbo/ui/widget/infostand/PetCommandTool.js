// Extracted from HabboAirLauncher.deobf.js, line 320900.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/PetCommandTool.as
// Obfuscated name: _i9392c374560138

class a {
  static {
    n(this, "PetCommandTool");
  }
  static BUTTONS_DISABLED_MS = 1100;
  static DEFAULT_LOCATION = new E(100, 70);
  static STATUS_BAR_WIDTH = 162;
  static _r38d5ee28249735 = 16;
  static STATUS_BAR_HIGHLIGHT_HEIGHT = 4;
  static STATUS_BAR_BORDER_COLOR = 14342874;
  static STATUS_BAR_BG_COLOR = 3815994;
  static STATUS_BAR_SKILL_HIGHLIGHT_COLOR = 10513106;
  static STATUS_BAR_SKILL_CONTENT_COLOR = 8734654;
  static STATE_SKILL = "skill";
  static PET_TYPE_HORSE = 15;
  var_17;
  var_68 = null;
  _r32f76377373871 = null;
  var_2627 = new B();
  var_1505 = 0;
  _r38842b14c0ba60 = "";
  _ra90ce3bebd61fb;
  constructor(e) {
    ((this.var_17 = e),
      (this._ra90ce3bebd61fb = new UnkEventDispatcherWrapperSubclass_05394e(a.BUTTONS_DISABLED_MS)),
      this._ra90ce3bebd61fb.addEventListener(DeBouncer.addEventListener, this._re373f2428fc67e));
  }
  dispose() {
    (this._ra90ce3bebd61fb?.stop(),
      (this._ra90ce3bebd61fb = null),
      this.var_2627.dispose(),
      (this.var_17 = null),
      this.var_68?.dispose(),
      (this.var_68 = null),
      (this._r32f76377373871 = null));
  }
  _r5623fe3bcc51d3() {
    return this.var_1505;
  }
  isVisible() {
    return this.var_68?.visible ?? !1;
  }
  showCommandToolForPet(e, r, t, i, s, o, d, c) {
    if (
      this.var_68 == null ||
      (this.updateStateElement(
        a.STATE_SKILL,
        (s + o) * 100,
        d * 100,
        a.STATUS_BAR_SKILL_CONTENT_COLOR,
        a.STATUS_BAR_SKILL_HIGHLIGHT_COLOR,
        i,
      ),
      this.var_1505 === e)
    )
      return;
    ((this.var_1505 = e), (this._r38842b14c0ba60 = r));
    let f = this.var_68.findChildByName("pet_name");
    (f != null && (f.text = r), this.updatePetImage(t));
    let l = this.var_2627.getValue(e) ?? null;
    l == null
      ? (this.disableAllButtons(), this.requestEnabledCommands(this.var_1505))
      : this.updateCommandButtonsViewState(l);
  }
  updatePetImage(e) {
    let r = this.var_68?.findChildByName("avatar_image");
    if (r != null) {
      if (e != null) {
        let t = new A(r.width, r.height, !0, 0),
          i = new E(Math.round((r.width - e.width) / 2), Math.round((r.height - e.height) / 2));
        (t.copyPixels(e, e.rect, i), (r.bitmap = t));
      } else r.bitmap = null;
      r.invalidate();
    }
  }
  setEnabledCommands(e, r) {
    (this.var_2627.remove(e),
      this.var_2627.add(e, r),
      e === this.var_1505 && (this.updateCommandButtonsViewState(r), this._ra90ce3bebd61fb?.stop()));
  }
  showWindow(e) {
    (e
      ? (this.var_68 == null && this.createCommandWindow(),
        this.var_68 != null && (this.var_68.visible = !0))
      : this.var_68 != null && (this.var_68.visible = !1),
      this._ra90ce3bebd61fb?.stop());
  }
  requestEnabledCommands(e) {
    let r = new RoomWidgetPetCommandMessage(RoomWidgetPetCommandMessage.REQUEST_COMMANDS, e);
    this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(r);
  }
  createCommandWindow() {
    let e = this.var_17?.assets?.getAssetByName("pet_commands");
    if (
      ((this.var_68 = this.var_17?.windowManager?.buildFromXML(e?.content)),
      this.var_68 == null)
    )
      throw new Error("Failed to construct command window from XML!");
    let r = this.var_68;
    (r.context?._r1165eed3833024() ?? null)?.addEventListener(y.const_755, this._r23e27b80a81a04);
    let i = r.findChildByName("commands_container");
    ((this._r32f76377373871 = i?.removeChildAt(0) ?? null),
      r.findChildByName("header_button_close")?.addEventListener(u.CLICK, this._rc939eaf3ea127e),
      r.findChildByName("description_link")?.addEventListener(u.CLICK, this._r68b664373c88b9),
      r.findChildByName("avatar_image")?.addEventListener(u.CLICK, this._rea362f7963250a));
    let c = r.findChildByName("status_skill_icon"),
      l = this.var_17?.assets?.getAssetByName("icon_pet_skill")?.content;
    (c != null && l != null && (c.bitmap = l.clone()), (r.position = a.DEFAULT_LOCATION));
  }
  updateCommandButtonsViewState(e) {
    let r = this.var_68?.findChildByName("commands_container");
    if (r == null) return;
    a.hideChildren(r);
    let t = e.allCommandIds,
      i = 0;
    for (let d = 0; d < t.length; d++) {
      let c = r.getChildAt(d);
      if (
        (c == null &&
          ((c = this._r32f76377373871?.clone()),
          c?.addEventListener(u.CLICK, this._r35e952efa43960),
          c && r.addChild(c)),
        c == null)
      )
        continue;
      c.visible = !0;
      let f = t[d];
      ((c.id = f),
        (c.caption = this.var_17?.localizations?.getLocalization(`pet.command.${f}`) ?? ""),
        e.isEnabled(f) ? c.enable() : c.disable(),
        (c.y = i),
        d % 2 === 1 ? ((i += 25), (c.x = 86)) : (c.x = 0));
    }
    let o = (this.var_17?.config?.getBoolean("pet.enhancements.enabled") ?? !1) ? 180 : 160;
    ((r.height = a.getLowestPoint(r)),
      this.var_68 != null && (this.var_68.height = r.height + o),
      this._ra90ce3bebd61fb?.stop());
  }
  disableAllButtons() {
    let e = this.var_68?.findChildByName("commands_container");
    if (e != null) for (let r = 0; r < e.numChildren; r++) e.getChildAt(r)?.disable();
  }
  static hideChildren(e) {
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t != null && (t.visible = !1);
    }
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i?.visible && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  _re373f2428fc67e = n((e) => {
    let r = this.var_2627.getValue(this.var_1505) ?? null;
    (r != null && this.updateCommandButtonsViewState(r), this._ra90ce3bebd61fb?.stop());
  }, "_re373f2428fc67e");
  _rc939eaf3ea127e = n((e) => {
    this.var_68 != null && (this.var_68.visible = !1);
  }, "_rc939eaf3ea127e");
  _r68b664373c88b9 = n((e) => {
    this.var_17?.windowManager?.openHelpPage("help/pets/training");
  }, "_r68b664373c88b9");
  _rea362f7963250a = n((e) => {
    this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(
      new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.REQUEST_PET_UPDATE, this.var_1505),
    );
  }, "_rea362f7963250a");
  _r35e952efa43960 = n((e) => {
    let r = e.target;
    if (r == null) return;
    let i = `pet.command.${r.id}`,
      s = this.var_17?.localizations?.getLocalization(i) ?? "",
      o = new RoomWidgetPetCommandMessage(RoomWidgetPetCommandMessage.PET_COMMAND, this.var_1505, `${this._r38842b14c0ba60} ${s}`.trim());
    (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(o),
      this.disableAllButtons(),
      this._ra90ce3bebd61fb?.reset(),
      this._ra90ce3bebd61fb?.start());
  }, "_r35e952efa43960");
  _r23e27b80a81a04 = n((e) => {
    if (this.var_68 == null || this.var_68.disposed) return;
    let r = e.window;
    if (r == null) return;
    let t = new D();
    (this.var_68.getGlobalRectangle(t),
      t.x > r.width &&
        ((this.var_68.x = r.width - this.var_68.width),
        this.var_68.getGlobalRectangle(t)),
      t.x + t.width <= 0 && ((this.var_68.x = 0), this.var_68.getGlobalRectangle(t)),
      t.y > r.height && ((this.var_68.y = 0), this.var_68.getGlobalRectangle(t)),
      t.y + t.height <= 0 && ((this.var_68.y = 0), this.var_68.getGlobalRectangle(t)));
  }, "_r23e27b80a81a04");
  updateStateElement(e, r, t, i, s, o) {
    let d = this.var_68?.findChildByName(`status_${e}_container`);
    if (d == null) return;
    d.visible =
      (this.var_17?.config?.getBoolean("pet.enhancements.enabled") ?? !1) &&
      o === a.PET_TYPE_HORSE;
    let c = d.findChildByName(`status_${e}_value_text`);
    c != null && (c.text = `${r}/${t}`);
    let f = d.findChildByName(`status_${e}_text`);
    f != null && (f.caption = `\${infostand.pet.text.skill.next.${o}}`);
    let l = d.findChildByName(`status_${e}_bitmap`);
    if (l != null) {
      let b = a.createPercentageBar(r, t, i, s);
      ((l.bitmap = b), (l.width = b.width), (l.height = b.height), l.invalidate());
    }
  }
  static createPercentageBar(e, r, t, i) {
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
