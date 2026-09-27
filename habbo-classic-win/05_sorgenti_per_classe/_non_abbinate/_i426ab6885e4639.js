// Estratto da HabboAirLauncher.deobf.js, riga 237532.

class {
  constructor(e, r) {
    this.var_605 = e;
    this.var_310 = r;
    (this.var_605 != null && (this.var_605._r884a36eb6fb71b = !1),
      this.var_310 != null && (this._r9a9c3992c50c1e = this.var_310.removeListItemAt(0)));
  }
  static {
    n(this, "_i426ab6885e4639");
  }
  _items = [];
  _r0a744741b643c3 = [];
  _r9a9c3992c50c1e = null;
  var_4945 = 200;
  var_770 = -1;
  _passedItems = [];
  var_150 = "";
  _re0b0fc7285d9d2 = !1;
  _re1397ee5de167d = !1;
  _imageUpdateCumulativeTime = !0;
  _rd7203f2370e2d8 = vr.MAIN_ALL;
  _r7418ab6ec82be0 = vr.const_394;
  _rf4b81718fdea76 = null;
  get _r101eb732468810() {
    return this.var_605?._r72acf104e2c444 ?? 0;
  }
  get _re0b698839cb087() {
    return this._passedItems;
  }
  get _r3afa55440b125a() {
    return Math.floor(this._r0a744741b643c3.length / this.var_4945) + 1;
  }
  dispose() {
    ((this.var_605 = null),
      (this.var_310 = null),
      (this._r9a9c3992c50c1e = null),
      (this._items = []),
      (this._r0a744741b643c3 = []),
      (this._passedItems = []));
  }
  _r5ef4d765a273a7() {
    (this.var_605?.removeGridItems(), this.var_605?._rbb4c26d068856f());
  }
  setFilter(e, r, t, i, s, o) {
    ((this._rd7203f2370e2d8 = e),
      (this._r7418ab6ec82be0 = r),
      (this._re0b0fc7285d9d2 = t),
      (this._re1397ee5de167d = i),
      (this._imageUpdateCumulativeTime = o),
      (this.var_150 = s.toLowerCase()),
      (this._rf4b81718fdea76 = null),
      this.update());
  }
  _rbe88f447ee988e(e, r, t, i) {
    ((this._rd7203f2370e2d8 = e),
      (this._r7418ab6ec82be0 = r),
      (this._re0b0fc7285d9d2 = !1),
      (this._re1397ee5de167d = !0),
      (this._imageUpdateCumulativeTime = !1),
      (this.var_150 = t.toLowerCase()),
      (this._rf4b81718fdea76 = i),
      this.update());
  }
  _r181fe97e12e0b5(e) {
    this._re4f45c8d54e9b3(e) && this.update();
  }
  _r234349e6ecd869(e) {
    e.some((r) => this._re4f45c8d54e9b3(r)) && this.update();
  }
  _r67be4a14a21599() {
    return this.var_605?.getGridItemAt(0);
  }
  _r2a2b5de73dae58(e) {
    ((this._items = e), this.update());
  }
  update() {
    let e = this._items.filter((r) => this._re4f45c8d54e9b3(r));
    (!this._re1397ee5de167d &&
      this._re0b0fc7285d9d2 &&
      (e = e.sort((r, t) => {
        let i = r.peek(),
          s = t.peek();
        if (i == null || s == null) return 0;
        let o = Number(s.hasRentPeriodStarted) - Number(i.hasRentPeriodStarted);
        return o !== 0 ? o : i.secondsToExpiration - s.secondsToExpiration;
      })),
      !(e.length === this._r0a744741b643c3.length && e.every((r, t) => r === this._r0a744741b643c3[t])) &&
        ((this._r0a744741b643c3 = e),
        this.changeToPage(this.var_770, !0),
        this.updatePaging()));
  }
  changeToPage(e, r = !1) {
    if (e > -1 && this.var_770 === e && !r) return;
    ((this.var_770 = e > -1 ? e : 0),
      this.var_770 >= this._r3afa55440b125a && (this.var_770 = this._r3afa55440b125a - 1),
      (this.var_770 = Math.max(this.var_770, 0)),
      (this._passedItems = []),
      this._r5ef4d765a273a7());
    let t = this.var_770 * this.var_4945,
      i = Math.min(t + this.var_4945, this._r0a744741b643c3.length);
    for (let s = t; s < i; s++) {
      let o = this._r0a744741b643c3[s],
        d = o.window;
      d != null && (this.var_605?.addGridItem(d), this._passedItems.push(o));
    }
  }
  updatePaging() {
    if (this.var_310 == null || this._r9a9c3992c50c1e == null) return;
    let e = this._r3afa55440b125a;
    if (
      ((this.var_310.visible = e > 1),
      this.var_770 >= e && (this.var_770 = e - 1),
      (this.var_770 = Math.max(this.var_770, 0)),
      e !== this.var_310.numListItems)
    ) {
      for (let r = 0; r < this.var_310.numListItems; r++) {
        let t = this.var_310.getListItemAt(r);
        (t?.removeEventListener(u.CLICK, this._r0ef7621d7e9174),
          t?.removeEventListener(u.OVER, this._r0ef7621d7e9174),
          t?.removeEventListener(u.OUT, this._r0ef7621d7e9174));
      }
      this.var_310.destroyListItems();
      for (let r = 0; r < e; r++) {
        let t = this._r9a9c3992c50c1e.clone();
        ((t.id = r),
          (t.name = `page_${r}`),
          t.addEventListener(u.CLICK, this._r0ef7621d7e9174),
          t.addEventListener(u.OVER, this._r0ef7621d7e9174),
          t.addEventListener(u.OUT, this._r0ef7621d7e9174),
          this.var_310.addListItem(t));
      }
    }
    for (let r = 0; r < e; r++) {
      let i = this.var_310.getListItemAt(r)?.findChildByTag("PAGE");
      i != null &&
        ((i.text = r.toString()),
        r === this.var_770
          ? ((i.underline = !0), (i.textColor = 16711680))
          : ((i.underline = !1), (i.textColor = 0)));
    }
  }
  _r0ef7621d7e9174 = n((...e) => {
    let r = e[0],
      t = r?.window?.id ?? -1,
      i = r?.window?.findChildByTag("PAGE");
    if (!(r == null || i == null || t < 0))
      switch (r.type) {
        case u.CLICK:
          (this.changeToPage(t), this.updatePaging());
          break;
        case u.OVER:
          i.textColor = 16711680;
          break;
        case u.OUT:
          t !== this.var_770 && (i.textColor = 0);
          break;
      }
  }, "_r0ef7621d7e9174");
  _re4f45c8d54e9b3(e) {
    if (
      !this._r746527903f013d(e) ||
      !this._rbeb4c539cb01fe(e) ||
      (!this._re1397ee5de167d && this._re0b0fc7285d9d2 !== e.isRented) ||
      (!this._imageUpdateCumulativeTime && e.isNft())
    )
      return !1;
    if (this.var_150.length > 0) {
      let r = e.name.toLowerCase(),
        t = e.description.toLowerCase(),
        i = e.stuffData.chestName.toLowerCase();
      if (
        r.indexOf(this.var_150) === -1 &&
        t.indexOf(this.var_150) === -1 &&
        (i.length === 0 || i.indexOf(this.var_150) === -1)
      )
        return !1;
    }
    return !(this._rf4b81718fdea76 != null && !this._rf4b81718fdea76.canOfferFurni(e));
  }
  _r746527903f013d(e) {
    switch (this._rd7203f2370e2d8) {
      case vr.MAIN_ALL:
        return !0;
      case vr.MAIN_FLOOR_ITEMS:
        return !e.isWallItem;
      case vr.MAIN_WALL_ITEMS:
        return e.isWallItem && !vr._rd017ccaa1022f7(e);
      case vr.MAIN_ROOM_LAYOUT:
        return vr._rd017ccaa1022f7(e);
      default:
        return !0;
    }
  }
  _rbeb4c539cb01fe(e) {
    switch (this._r7418ab6ec82be0) {
      case vr.const_394:
        return !0;
      case vr.const_1048:
        return vr._r7c3383ba3978d0(e);
      case vr.const_151:
        return vr._r6cdd0061a1fd9b(e);
      case vr.const_996:
        return vr.isTilesOrRugs(e);
      case vr.TYPE_LTD:
        return vr._rfb886bf610d1e3(e);
      case vr.const_1368:
        return vr.isWired(e);
      case vr.TYPE_CREDIT_FURNI:
        return vr.isCreditFurni(e);
      case vr.TYPE_CLOTHES:
        return vr._r560b3953a0dffe(e);
      case vr.const_1051:
        return vr.isPetFood(e);
      case vr.TYPE_COLLECTIBLES:
        return vr._r52610816ef5897(e);
      case vr.const_731:
        return vr._r238d544ee50b6e(e);
      case vr.const_1178:
        return vr._rd316454d6363f4(e);
      case vr.const_616:
        return vr.isRecyclable(e);
      case vr.TYPE_WINDOWS:
        return vr.isWindow(e);
      case vr.TYPE_DIMMERS:
        return vr.isDimmer(e);
      case vr.TYPE_STICKIES:
        return vr._rf3da64b740a064(e);
      case vr.const_858:
        return vr.isPainting(e);
      case vr.TYPE_FLOORS:
        return vr._r3f8ba8e1a3c365(e);
      case vr.TYPE_WALLPAPERS:
        return vr._r268983b18866e7(e);
      case vr.TYPE_LANDSCAPE:
        return vr._r1f06f6f8243748(e);
      default:
        return !0;
    }
  }
}
