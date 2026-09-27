// Extracted from HabboAirLauncher.deobf.js, line 242644.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/pets/PetsView.as
// Obfuscated name: _ifa901c1e4497c0

class a {
  constructor(e, r, t, i) {
    this.var_38 = e;
    this._windowManager = r;
    this.var_997 = t;
    this._roomEngine = i;
  }
  static {
    n(this, "PetsView");
  }
  static _r6472f789a2e193 = 0;
  static STATE_INITIALIZING = 1;
  static STATE_EMPTY = 2;
  static STATE_CONTENT = 3;
  static _ra8c2be14594dd0 = -1;
  static _r537d457f3b31d5 = -1;
  _view = null;
  var_605 = null;
  _r9cb5f682dfdc11 = new B();
  var_265 = null;
  var_2475 = a._r6472f789a2e193;
  var_3377 = -1;
  var_217 = !1;
  _disposed = !1;
  var_1244 = a._ra8c2be14594dd0;
  _rd5ee5a53d10d1a = [a._ra8c2be14594dd0];
  _ignoreTypeFilterEvents = !1;
  var_1395 = a._r537d457f3b31d5;
  _r6f32d35bce6e39 = [a._r537d457f3b31d5];
  _ignoreRarityFilterEvents = !1;
  get disposed() {
    return this._disposed;
  }
  get isVisible() {
    return this._view?.parent != null && this._view.visible;
  }
  dispose() {
    this._disposed ||
      ((this._windowManager = null),
      (this.var_997 = null),
      (this._roomEngine = null),
      (this.var_38 = null),
      (this._view = null),
      (this.var_605 = null),
      this._r9cb5f682dfdc11.dispose(),
      (this.var_265 = null),
      (this._disposed = !0));
  }
  update() {
    this.var_217 &&
      (this.updateGrid(), this.updatePreview(this.var_265), this.updateContainerVisibility());
  }
  _rf7b69f01858c06(e) {
    if (!this.var_217) return;
    let r = this._r9cb5f682dfdc11.remove(e);
    r != null &&
      (r.window != null && this.var_605?.removeGridItem(r.window),
      this.var_265 === r && ((this.var_265 = null), this.selectFirst()),
      r.dispose());
  }
  _r0eb38c70cfe4dd(e) {
    if (!this.var_217 || e == null || this._r9cb5f682dfdc11.getValue(e.id) != null) return;
    let r = new ipe(
      this,
      e,
      this.var_997,
      this._windowManager,
      this.var_38?.isUnseen(e.id) ?? !1,
    );
    r.window != null &&
      (this.var_605?.addGridItem(r.window),
      this._r9cb5f682dfdc11.add(e.id, r),
      this.var_265 == null && this.selectFirst());
  }
  _re99ec0cc74990e(e, r = !1) {
    this.var_38?._re99ec0cc74990e(e, r);
  }
  getWindowContainer() {
    return (this.var_217 || this.init(), this._view?.disposed ? null : this._view);
  }
  _r940649254ab9e3(e) {
    this.var_217 &&
      (this.var_265?.setSelected(!1),
      (this.var_265 = e),
      this.var_265?.setSelected(!0),
      this.updatePreview(e));
  }
  updateState() {
    if (!this.var_217) return;
    let e = this.var_38?.pets ?? null,
      r = a.STATE_CONTENT;
    ((this.var_38?._rbbe2e53c82e0a2() ?? !1)
      ? (e == null || e.length === 0) && (r = a.STATE_EMPTY)
      : (r = a.STATE_INITIALIZING),
      this.var_2475 !== r &&
        ((this.var_2475 = r),
        this.updateContainerVisibility(),
        this.var_2475 === a.STATE_CONTENT && (this.updateGrid(), this.updatePreview())));
  }
  getPetImage(e, r, t, i = null, s = 64, o = null) {
    let d = e.figureData,
      c = null,
      f = Number.parseInt(d.color, 16),
      l = [];
    for (let _ = 0; _ < d.customPartCount * 3; _ += 3)
      l.push(
        new PetCustomPart(d.customParts[_] ?? 0, d.customParts[_ + 1] ?? 0, d.customParts[_ + 2] ?? 0),
      );
    let b =
      this._roomEngine?.getPetImage(
        d.typeId,
        d.paletteId,
        f,
        new k(r * 45),
        s,
        this,
        t,
        0,
        l,
        o,
      ) ?? null;
    return (
      b != null &&
        ((c = b.data), i != null ? (i.imageDownloadId = b.id) : t && (this.var_3377 = b.id)),
      c == null && (c = new A(30, 30, !1, 4289374890)),
      c
    );
  }
  imageReady(e, r) {
    if (e === this.var_3377) {
      this.updatePreview(this.var_265);
      return;
    }
    for (let t of this._r9cb5f682dfdc11.getValues())
      if (t.imageDownloadId === e) {
        t.setPetImage(r);
        return;
      }
  }
  imageFailed(e) {}
  _rd3edb7973b5a25(e) {
    this._r940649254ab9e3(this._r9cb5f682dfdc11.getValue(e) ?? null);
  }
  selectFirst() {
    let e = this._rde2c714761a79e();
    if (e.length === 0) {
      this.updatePreview();
      return;
    }
    this._r940649254ab9e3(this._r9cb5f682dfdc11.getValue(e[0] ?? -1) ?? null);
  }
  updateGrid() {
    if (this._view == null || this.var_605 == null) return;
    let e = this._r9cb5f682dfdc11.getKeys(),
      r = this.var_38?.pets ?? new B(),
      t = r.getKeys();
    this.var_605.lock?.();
    for (let o of e) t.includes(o) || this._rf7b69f01858c06(o);
    for (let o of t) {
      if (!e.includes(o)) {
        let d = r.getValue(o);
        d != null && this._r0eb38c70cfe4dd(d);
      }
      this._r9cb5f682dfdc11.getValue(o)?.setUnseen(this.var_38?.isUnseen(o) ?? !1);
    }
    this.updateFilterOptions();
    let i = this._rde2c714761a79e(t);
    this.var_605.removeGridItems();
    for (let o of i) {
      let d = this._r9cb5f682dfdc11.getValue(o);
      d?.window != null && this.var_605.addGridItem(d.window);
    }
    this.var_605.unlock?.();
    let s = this.var_265?.pet?.id ?? -1;
    (s === -1 || !i.includes(s)) &&
      (this.var_265 != null &&
        (this.var_265.setSelected(!1), (this.var_265 = null)),
      this.selectFirst());
  }
  _rbac138b7d4afca = n(() => {
    let e = this.var_265?.pet;
    e != null && this._re99ec0cc74990e(e.id);
  }, "_rbac138b7d4afca");
  updateContainerVisibility() {
    if (this.var_38?.controller._ra2d0b2740c7155 !== class_2106.PETS || this._view == null)
      return;
    let e = this.var_38.controller.view.loadingContainer,
      r = this.var_38.controller.view.emptyContainer,
      t = this._view.findChildByName("options_container"),
      i = this._view.findChildByName("filter.rarity"),
      s = this._view.findChildByName("grid"),
      o = this._view.findChildByName("preview_container");
    switch (this.var_2475) {
      case a.STATE_INITIALIZING:
        (e != null && (e.visible = !0),
          r != null && (r.visible = !1),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1),
          o != null && (o.visible = !1));
        break;
      case a.STATE_EMPTY:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !0),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1),
          o != null && (o.visible = !1));
        break;
      case a.STATE_CONTENT:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !1),
          t != null && (t.visible = !0),
          i != null && (i.visible = !0),
          s != null && (s.visible = !0),
          o != null && (o.visible = !0));
        break;
    }
  }
  updatePreview(e = null) {
    if (this._view == null) return;
    let r,
      t,
      i,
      s,
      o = 64,
      d = 4,
      c = !0,
      f = null;
    if (((this.var_3377 = -1), e == null || e.pet == null))
      ((r = new A(1, 1)), (t = ""), (i = ""), (s = !1));
    else {
      let I = e.pet;
      ((t = I.name),
        (i = this.getPetTypeLabel(I.typeId)),
        I.typeId === class_3447.MONSTERPLANT &&
          ((d = 2), (c = !0), (f = I.level >= 7 ? "std" : `grw${I.level}`)),
        (r = this.getPetImage(I, d, c, null, o, f)),
        (s = !0));
    }
    let l = this._view.findChildByName("preview_image");
    if (l != null) {
      let I = new A(l.width, l.height);
      (I.fillRect(I.rect, 0),
        I.copyPixels(r, r.rect, new E(I.width / 2 - r.width / 2, I.height / 2 - r.height / 2)),
        l.bitmap?.dispose(),
        (l.bitmap = I));
    }
    r.dispose();
    let b = this._view.findChildByName("preview_text"),
      _ = this._view.findChildByName("preview_description");
    (b != null && (b.caption = t), _ != null && (_.caption = i));
    let h = this.var_38?._r2eac8239a09fe7?._r278a8fdc24e036 ?? !1,
      p = this.var_38?._r2eac8239a09fe7?.isRoomOwner ?? !1,
      m = this._view.findChildByName("preview_info"),
      v = "";
    (p || (v = h ? "${inventory.pets.allowed}" : "${inventory.pets.forbidden}"),
      m != null && (m.caption = v));
    let w = this._view.findChildByName("place_button");
    w != null && (s && (p || h) ? w.enable() : w.disable());
  }
  init() {
    if (
      ((this._view = this.var_38?.controller.view._r1f685677bdb2bd(class_2106.PETS) ?? null),
      this._view == null)
    )
      return;
    ((this._view.visible = !1),
      (this._view.procedure = (...s) => this.windowEventProc(s[0], s[1])),
      (this.var_605 = this._view.findChildByName("grid")));
    let e = this._view.findChildByName("filter"),
      r = this._view.findChildByName("clear_filter_button");
    (e != null && (e.caption = ""),
      r != null && (r.visible = !1),
      this.updateFilterOptions(),
      this._view.findChildByName("place_button")?.addEventListener(u.CLICK, this._rbac138b7d4afca),
      this._view.findChildByName("preview_image")?.addEventListener(u.DOWN, this._rbac138b7d4afca),
      this.updatePreview(),
      this.updateState(),
      (this.var_217 = !0));
  }
  windowEventProc(e, r) {
    if (this._view != null) {
      if (e.type === u.CLICK) {
        if (r.name === "clear_filter_button") {
          let t = this._view.findChildByName("filter");
          (t != null && (t.caption = ""), (r.visible = !1), this.update());
        }
        return;
      }
      if (e.type === sr.const_900) {
        let t = e;
        if (r.name === "filter") {
          let i = this._view.findChildByName("clear_filter_button");
          (i != null && (i.visible = r.caption.length > 0),
            t.keyCode === 27
              ? ((r.caption = ""), i != null && (i.visible = !1), this.update())
              : t.keyCode === 13 && this.update());
        }
        return;
      }
      if (e.type === y.const_238)
        switch (r.name) {
          case "filter.options":
            if (!this._ignoreTypeFilterEvents) {
              let t = this.getSelectedTypeFilter(r);
              t !== this.var_1244 && ((this.var_1244 = t), this.update());
            }
            break;
          case "filter.rarity":
            if (!this._ignoreRarityFilterEvents) {
              let t = this.getSelectedRarityFilter(r);
              t !== this.var_1395 && ((this.var_1395 = t), this.update());
            }
            break;
        }
    }
  }
  updateFilterOptions() {
    let e = this._view?.findChildByName("filter.options");
    if (e == null) return;
    ((this._rd5ee5a53d10d1a = this._r8bbbe4730143f4()),
      this._rd5ee5a53d10d1a.includes(this.var_1244) || (this.var_1244 = a._ra8c2be14594dd0));
    let r = [
      this.var_38?.controller.localization?.getLocalization(
        "inventory.pets.filter.type.all",
        "All types",
      ) ?? "All types",
      ...this._rd5ee5a53d10d1a.slice(1).map((t) => this.getPetTypeLabel(t)),
    ];
    this._ignoreTypeFilterEvents = !0;
    try {
      (e.populate(r), (e.selection = Math.max(0, this._rd5ee5a53d10d1a.indexOf(this.var_1244))));
    } finally {
      this._ignoreTypeFilterEvents = !1;
    }
    this.updateRarityFilterOptions();
  }
  updateRarityFilterOptions() {
    let e = this._view?.findChildByName("filter.rarity");
    if (e == null) return;
    ((this._r6f32d35bce6e39 = this._r81e48022323148()),
      this._r6f32d35bce6e39.includes(this.var_1395) || (this.var_1395 = a._r537d457f3b31d5));
    let r = this._r6f32d35bce6e39.map((t) => this.getRarityFilterLabel(t));
    this._ignoreRarityFilterEvents = !0;
    try {
      let t = this.isRarityFilterEnabled() ? this.var_1395 : a._r537d457f3b31d5;
      (e.populate(r), (e.selection = Math.max(0, this._r6f32d35bce6e39.indexOf(t))));
    } finally {
      this._ignoreRarityFilterEvents = !1;
    }
    this.isRarityFilterEnabled() ? e.enable() : e.disable();
  }
  _r8bbbe4730143f4() {
    let e = [],
      r = this.var_38?.pets ?? null;
    if (r != null) for (let t of r.getValues()) e.includes(t.typeId) || e.push(t.typeId);
    return (e.sort((t, i) => t - i), e.unshift(a._ra8c2be14594dd0), e);
  }
  _r81e48022323148() {
    let e = [a._r537d457f3b31d5],
      r = this.var_38?.pets ?? null;
    if (r != null)
      for (let t of r.getValues())
        t.typeId !== class_3447.MONSTERPLANT ||
          t.rarityLevel < 0 ||
          e.includes(t.rarityLevel) ||
          e.push(t.rarityLevel);
    return (
      e.sort((t, i) => t - i),
      e.indexOf(a._r537d457f3b31d5) > 0 &&
        (e.splice(e.indexOf(a._r537d457f3b31d5), 1), e.unshift(a._r537d457f3b31d5)),
      e
    );
  }
  _rde2c714761a79e(e = null) {
    let r = [],
      t = this.var_38?.pets ?? null,
      i = e ?? t?.getKeys() ?? [];
    if (t == null) return r;
    for (let s of i) {
      let o = t.getValue(s);
      o != null && this.passesFilter(o) && r.push(s);
    }
    return r;
  }
  passesFilter(e) {
    if (
      e == null ||
      (this.var_1244 !== a._ra8c2be14594dd0 && e.typeId !== this.var_1244) ||
      (this.isRarityFilterEnabled() &&
        this.var_1395 !== a._r537d457f3b31d5 &&
        e.rarityLevel !== this.var_1395)
    )
      return !1;
    let r = this.getSearchTerm();
    if (r.length > 0) {
      let t = e.name != null ? e.name.toLowerCase() : "",
        i = this.getPetTypeLabel(e.typeId).toLowerCase();
      if (!t.includes(r) && !i.includes(r)) return !1;
    }
    return !0;
  }
  getSearchTerm() {
    return this._view?.findChildByName("filter")?.caption.toLowerCase() ?? "";
  }
  getSelectedTypeFilter(e) {
    if (e == null || this._rd5ee5a53d10d1a.length === 0) return a._ra8c2be14594dd0;
    let r = e.selection;
    return (
      (r < 0 || r >= this._rd5ee5a53d10d1a.length) && (r = 0),
      this._rd5ee5a53d10d1a[r] ?? a._ra8c2be14594dd0
    );
  }
  getSelectedRarityFilter(e) {
    if (e == null || this._r6f32d35bce6e39.length === 0) return a._r537d457f3b31d5;
    let r = e.selection;
    return (
      (r < 0 || r >= this._r6f32d35bce6e39.length) && (r = 0),
      this._r6f32d35bce6e39[r] ?? a._r537d457f3b31d5
    );
  }
  isRarityFilterEnabled() {
    return this.var_1244 === class_3447.MONSTERPLANT;
  }
  getRarityFilterLabel(e) {
    return e === a._r537d457f3b31d5
      ? (this.var_38?.controller.localization?.getLocalization(
          "inventory.pets.filter.rarity.all",
        ) ?? "")
      : String(e);
  }
  getPetTypeLabel(e) {
    return (
      this.var_38?.controller.localization?.getLocalization(`pet.type.${e}`) ?? `pet.type.${e}`
    );
  }
}
