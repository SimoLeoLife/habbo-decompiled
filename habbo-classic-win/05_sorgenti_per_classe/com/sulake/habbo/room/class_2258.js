// Extracted from HabboAirLauncher.deobf.js, line 290506.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/class_2258.as
// Obfuscated name: _i74ecb5612bff51

class a {
  constructor(e) {
    this._rfa880eec4954ff = e;
  }
  static {
    n(this, "class_2258");
  }
  static CONTENT_LOADER_READY = "RCL_LOADER_READY";
  static ASSET_LIBRARY_NAME_PREFIX = "RoomContentLoader ";
  static _r27520742458645 = 0;
  static STATE_INITIALIZING = 1;
  static STATE_READY = 2;
  static _re5b6ea8d3ec8e4 = "place_holder";
  static PLACE_HOLDER_WALL_ITEM = "wall_place_holder";
  static PLACE_HOLDER_PET = "pet_place_holder";
  static _r0db49e3ca74740 = a._re5b6ea8d3ec8e4;
  static ROOM_CONTENT = "room";
  static const_608 = "tile_cursor";
  static const_163 = "selection_arrow";
  static _r4b380478aa03a6 = [
    a._re5b6ea8d3ec8e4,
    a.PLACE_HOLDER_WALL_ITEM,
    a.PLACE_HOLDER_PET,
    a.ROOM_CONTENT,
    a.const_608,
    a.const_163,
  ];
  static _r51ebdcbb7996fd = [
    a._re5b6ea8d3ec8e4,
    a.PLACE_HOLDER_WALL_ITEM,
    a.PLACE_HOLDER_PET,
    a.ROOM_CONTENT,
    a.const_163,
  ];
  static _r3fb6615f7a80b3 = 20 * 1e3;
  static _rb7fb2e8d48e162 = 30 * 1e3;
  _libraries = new B();
  _events = new B();
  _r605256937faf55 = new B();
  PLACE_HOLDER_TYPES = new B();
  _rf8108919688407 = new B();
  _r651a239c5cde1c = new B();
  var_1690 = new B();
  _r84099d9c50e607 = new B();
  _r143fe5d102993a = new B();
  _petColors = new B();
  _petLayers = new B();
  var_1155 = new B();
  _r08fafebfd8effb = new B();
  _r4bd0cefa4f59cb = new B();
  _objectOriginalNames = new B();
  _r149d98bd603807 = {};
  _wallItems = {};
  _rdc264f54a8d265 = {};
  _rd6ec743ba974e5 = null;
  _state = a._r27520742458645;
  _stateEvents = null;
  var_1271 = !1;
  _rc2a21d4049a68a = !1;
  var_5719 = "";
  var_5093 = "";
  var_5194 = "";
  var_4074 = "";
  var_5479 = "";
  var_3406 = !1;
  _rea276afddaf41e = 0;
  _sessionDataManager = null;
  var_1279 = null;
  _re1a2ca83379c74 = null;
  _configuration = null;
  _r9cb06d7c0d2196 = null;
  get _r29c45cd093eed6() {
    return class_14.instance?._r29c45cd093eed6 ?? null;
  }
  get disposed() {
    return this.var_1271;
  }
  get isReady() {
    return this._state === a.STATE_READY;
  }
  set sessionDataManager(e) {
    ((this._sessionDataManager = e),
      this.var_3406 && ((this.var_3406 = !1), this.initFurnitureData()));
  }
  set _r2563f8c8fbf9af(e) {
    this._rd6ec743ba974e5 = e;
  }
  set _rf474b5204622c5(e) {
    this.var_1279 = e;
  }
  set _r59f2d0ab0635a3(e) {
    this._re1a2ca83379c74 = e;
  }
  initialize(e, r) {
    ((this._stateEvents = e),
      (this.var_5719 = r.getProperty("flash.dynamic.download.url")),
      (this.var_5093 = r.getProperty("flash.dynamic.download.name.template")),
      (this.var_5194 = r.getProperty("flash.dynamic.icon.download.name.template")),
      (this.var_4074 = r.getProperty("pet.dynamic.download.url")),
      (this.var_5479 = r.getProperty("pet.dynamic.download.name.template")),
      (this._configuration = r),
      (this._state = a.STATE_INITIALIZING),
      this.initFurnitureData(),
      this.initPetData(r));
  }
  dispose() {
    if (!this.var_1271) {
      for (let e of this._libraries.getValues()) e.dispose();
      (this._libraries.dispose(),
        this._events.dispose(),
        this._rf8108919688407.dispose(),
        this._r651a239c5cde1c.dispose(),
        this.var_1690.dispose(),
        this._r84099d9c50e607.dispose(),
        this._r143fe5d102993a.dispose(),
        this._petColors.dispose(),
        this._petLayers.dispose(),
        this.var_1155.dispose(),
        this._r08fafebfd8effb.dispose(),
        this._r4bd0cefa4f59cb.dispose(),
        this._objectOriginalNames.dispose());
      for (let e of this.PLACE_HOLDER_TYPES.getValues()) e.dispose();
      (this.PLACE_HOLDER_TYPES.dispose(), this._r605256937faf55.dispose());
      for (let e of Object.keys(this._r149d98bd603807)) delete this._r149d98bd603807[e];
      for (let e of Object.keys(this._wallItems)) delete this._wallItems[e];
      for (let e of Object.keys(this._rdc264f54a8d265)) delete this._rdc264f54a8d265[e];
      ((this._stateEvents = null),
        (this._sessionDataManager = null),
        (this._configuration = null),
        (this._rd6ec743ba974e5 = null),
        (this.var_1279 = null),
        (this._re1a2ca83379c74 = null),
        (this._r9cb06d7c0d2196 = null),
        (this.var_1271 = !0));
    }
  }
  initPetData(e) {
    let r = e.getProperty("pet.configuration").split(","),
      t = 0;
    for (let i of r) ((this._rdc264f54a8d265[i] = t), this._r143fe5d102993a.add(t, i), t++);
  }
  initFurnitureData() {
    if (this._sessionDataManager == null) {
      this.var_3406 = !0;
      return;
    }
    let e = this._sessionDataManager.getFurniData(this);
    e != null &&
      (this._sessionDataManager.removeFurniDataListener(this),
      this.populateFurniData(e),
      (this._rc2a21d4049a68a = !0),
      this.parseIgnoredFurniTypes(),
      this._rc64bd09cba1b4c());
  }
  parseIgnoredFurniTypes() {
    let e = this._configuration?.getProperty("gpu.ignored_furni") ?? "";
    e && (this._r9cb06d7c0d2196 = e.split(",").map((r) => ua.trim(r)));
  }
  _re26c5462ffd894(e) {
    return this._r9cb06d7c0d2196?.includes(e) ?? !1;
  }
  populateFurniData(e) {
    for (let r of e) {
      let t = r.id,
        i = r.className;
      (r.hasIndexedColor && (i = `${i}*${r.colourIndex}`),
        r.var_1457 != null &&
          r.var_1457.length > 0 &&
          this._objectOriginalNames.add(i, r.var_1457));
      let s = r.className;
      r.type === "s"
        ? (this._rf8108919688407.add(t, i),
          this._r651a239c5cde1c.add(i, t),
          this._r149d98bd603807[s] == null && (this._r149d98bd603807[s] = !0))
        : r.type === "i" &&
          (i === "post.it" && ((i = "post_it"), (s = "post_it")),
          i === "post.it.vd" && ((i = "post_it_vd"), (s = "post_it_vd")),
          this.var_1690.add(t, i),
          this._r84099d9c50e607.add(i, t),
          this._wallItems[s] == null && (this._wallItems[s] = !0));
      let o = this.var_1155.getValue(s) ?? 0;
      r.revision > o && (this.var_1155.remove(s), this.var_1155.add(s, r.revision));
    }
  }
  _rc64bd09cba1b4c() {
    this._rc2a21d4049a68a &&
      ((this._state = a.STATE_READY), this._stateEvents?.dispatchEvent?.(new M(a.CONTENT_LOADER_READY)));
  }
  _r4879f72dd9cbfd(e, r) {
    (this._r08fafebfd8effb.remove(e),
      this._r08fafebfd8effb.add(e, r),
      this._r4bd0cefa4f59cb.remove(r),
      this._r4bd0cefa4f59cb.add(r, e));
  }
  _r11378ef53d2a5d(e) {
    return this._r08fafebfd8effb.getValue(e) ?? e;
  }
  _r939dc769714d19(e) {
    return this._r4bd0cefa4f59cb.getValue(e) ?? e;
  }
  _r12110ad7d84ce2(e) {
    return e == null
      ? RoomObjectCategoryEnum.const_434
      : this._r149d98bd603807[e] != null
        ? RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
        : this._wallItems[e] != null
          ? RoomObjectCategoryEnum.const_909
          : this._rdc264f54a8d265[e] != null
            ? RoomObjectCategoryEnum.OBJECT_CATEGORY_USER
            : e.indexOf("poster") === 0
              ? RoomObjectCategoryEnum.const_909
              : e === "room"
                ? RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM
                : e === Ea.USER || e === Ea.PET || e === Ea.BOT || e === Ea.RENTABLE_BOT
                  ? RoomObjectCategoryEnum.OBJECT_CATEGORY_USER
                  : e === a.const_608 || e === a.const_163
                    ? RoomObjectCategoryEnum.const_1105
                    : RoomObjectCategoryEnum.const_434;
  }
  _r741001f00efc2d(e) {
    return this._r149d98bd603807[e] != null
      ? a._re5b6ea8d3ec8e4
      : this._wallItems[e] != null
        ? a.PLACE_HOLDER_WALL_ITEM
        : this._rdc264f54a8d265[e] != null
          ? a.PLACE_HOLDER_PET
          : a._r0db49e3ca74740;
  }
  getPlaceHolderTypes() {
    return [...a._r4b380478aa03a6];
  }
  _r61e24412f181b3(e) {
    let r = this._rf8108919688407.getValue(e) ?? null;
    return (r == null, this._r4562d13d9804ea(r));
  }
  _r9bba8a33ee3887(e) {
    return this._r651a239c5cde1c.getValue(e) ?? -1;
  }
  _ra7e35114872e5d(e, r = null) {
    let t = this.var_1690.getValue(e) ?? null;
    return (t === "poster" && r != null && (t = t + r), this._r4562d13d9804ea(t));
  }
  _r9c676396da0a37(e) {
    return this._r84099d9c50e607.getValue(e) ?? -1;
  }
  _rec1a64fc8d4622(e) {
    return this._r143fe5d102993a.getValue(e) ?? null;
  }
  _rcd60769c73f9cb(e) {
    return this._rdc264f54a8d265[e] ?? -1;
  }
  _r9c502eedb73502(e, r) {
    return (this._petColors.getValue(e) ?? null)?.getValue(String(r)) ?? null;
  }
  _r7c3a409976ffaf(e, r) {
    let t = this._petColors.getValue(e) ?? null,
      i = [];
    if (t != null) for (let s of t.getValues()) s.tag === r && i.push(s);
    return i;
  }
  getPetLayerIdForTag(e, r, t = 64) {
    let s = (this._petLayers.getValue(e) ?? null)?.getValue(String(t)) ?? null;
    return s == null ? -1 : (s.get(r) ?? -1);
  }
  _r58b39b996d47ea(e, r) {
    let t = this._petColors.getValue(e) ?? null;
    if (t == null) return null;
    for (let i of t.getValues()) if (i._ref8ecfee3bb025.includes(r) && i.isMaster) return i;
    return null;
  }
  _r932da5452cd716(e) {
    return this._rc2d38c3cd002db(this._rf8108919688407.getValue(e) ?? null);
  }
  _rb5dea53f7941cc(e) {
    return this._rc2d38c3cd002db(this.var_1690.getValue(e) ?? null);
  }
  getRoomObjectAdURL(e) {
    return this._objectOriginalNames.getValue(e) ?? "";
  }
  _r4562d13d9804ea(e) {
    if (e == null) return null;
    let r = e.indexOf("*");
    return r >= 0 ? e.substring(0, r) : e;
  }
  _rc2d38c3cd002db(e) {
    if (e == null) return -1;
    let r = e.indexOf("*");
    return r >= 0 ? Number.parseInt(e.substring(r + 1), 10) : 0;
  }
  getContentType(e) {
    return e;
  }
  _re9aa38ecc3dfc7(e) {
    return (
      (e = Ea._r1d008b524790bb(e)),
      e === RoomObjectVisualizationEnum.USER || e === RoomObjectVisualizationEnum.SNOWBALL || e === RoomObjectVisualizationEnum.SNOW_SPLASH
    );
  }
  _rd2df055e8efaa4(e) {
    let r = this._r12110ad7d84ce2(e);
    return r === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || r === RoomObjectCategoryEnum.const_909
      ? (e.indexOf("poster") === 0 && (e = "poster"), this.var_1155.getValue(e) ?? 0)
      : 0;
  }
  getObjectContentURLs(e, r = null, t = !1) {
    let i = this.getContentType(e);
    switch (i) {
      case a._re5b6ea8d3ec8e4:
        return [this._r23cdd74edcab7b("PlaceHolderFurniture.swf")];
      case a.PLACE_HOLDER_WALL_ITEM:
        return [this._r23cdd74edcab7b("PlaceHolderWallItem.swf")];
      case a.PLACE_HOLDER_PET:
        return [this._r23cdd74edcab7b("PlaceHolderPet.swf")];
      case a.ROOM_CONTENT:
        return [this._r23cdd74edcab7b("HabboRoomContent.swf")];
      case a.const_608:
        return [this._r23cdd74edcab7b("TileCursor.swf")];
      case a.const_163:
        return [this._r23cdd74edcab7b("SelectionArrow.swf")];
      default: {
        let s = this._r12110ad7d84ce2(i);
        if (s === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || s === RoomObjectCategoryEnum.const_909) {
          let o = this._r11378ef53d2a5d(i),
            d = t ? this.var_5194 : this.var_5093;
          if (
            ((d = d.replace(/%typeid%/, o)),
            (d = d.replace(/%revision%/, String(this._rd2df055e8efaa4(i)))),
            t)
          ) {
            let c = r != null && r !== "" && this._r651a239c5cde1c.hasKey(`${e}*${r}`);
            d = d.replace(/%param%/, c ? `_${r}` : "");
          }
          return [`${this.var_5719}${d}`];
        }
        if (s === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) {
          let o = `${this.var_4074}${this.var_5479}`;
          return ((o = o.replace(/%type%/, i)), [o]);
        }
        return [];
      }
    }
  }
  _r23cdd74edcab7b(e) {
    return this._r29c45cd093eed6?._r3bc7bb28ee642c(e)
      ? this._r29c45cd093eed6._rdbe76e88e1717b(e)
      : `${this.var_4074}${e}`;
  }
  insertObjectContent(e, r, t) {
    if (t == null) return !1;
    let i = this.getAssetLibraryType(t);
    if (i == null) return !1;
    switch (r) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
        (this._rf8108919688407.setProperty(e, i), this._r651a239c5cde1c.add(i, e));
        break;
      case RoomObjectCategoryEnum.const_909:
        this.var_1690.setProperty(e, i);
        break;
      default:
        throw new Error(`Registering content library for unsupported category ${r}!`);
    }
    let s = this._r7199c7fb4fd9fc(i, null);
    if (s == null || (s._rb655cfac05e864(t), !this._rf67ce2f155cc3c(i, t))) return !1;
    switch (r) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
        this._r149d98bd603807[i] == null && (this._r149d98bd603807[i] = !0);
        break;
      case RoomObjectCategoryEnum.const_909:
        this._wallItems[i] == null && (this._wallItems[i] = !0);
        break;
      default:
        throw new Error(`Registering content library for unsupported category ${r}!`);
    }
    let o = new RoomContentLoadedEvent(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, i);
    return (this._r1cc4d738ae7924(i, !0)?.dispatchEvent?.(o), !0);
  }
  getObjectUrl(e, r) {
    let t = null;
    e.includes(",") && ((t = e), (e = t.split(",")[0]));
    let i = t != null ? this.getObjectContentURLs(t, r, !0) : this.getObjectContentURLs(e, r, !0);
    return i.length > 0 ? i[0] : null;
  }
  loadThumbnailContent(e, r, t, i) {
    let s = null;
    r.includes(",") && ((s = r), (r = s.split(",")[0]));
    let o = s != null ? this.getObjectContentURLs(s, t, !0) : this.getObjectContentURLs(r, t, !0);
    if (this.var_1279 == null || o.length === 0) return !1;
    for (let d of o)
      this.var_1279
        .loadAssetFromFile([r, t].join("_"), new UnkClass_636490(d), "image/png", e)
        .addEventListener?.(Le.ASSET_LOADER_EVENT_COMPLETE, this._r46a97efc77ddaf);
    return !0;
  }
  _ra52e0b87b495a8(e, r) {
    if (e == null || e === "") return !1;
    let t = null;
    if (
      (e.includes(",") && ((t = e), (e = t.split(",")[0])),
      this._r79704128c7e98c(e) != null || this._r1cc4d738ae7924(e) != null)
    )
      return !1;
    let i = this._r7199c7fb4fd9fc(e, r);
    if (i == null || this._re26c5462ffd894(e)) return !1;
    let s = t != null ? this.getObjectContentURLs(t) : this.getObjectContentURLs(e);
    if (s.length === 0) return !1;
    i.addEventListener?.(Na.ASSET_LIBRARY_LOADED, this._r46a97efc77ddaf);
    for (let o of s) {
      let d = new Bl();
      (i.loadFromFile(d, !0),
        d.addEventListener?.(ht.LIBRARY_LOADER_EVENT_ERROR, this._r441f094831fd6c),
        d.load(new UnkClass_636490(o)));
    }
    return !0;
  }
  _r441f094831fd6c = n((e) => {
    let r = e instanceof M ? e.target : null;
    if (r != null)
      for (let t of this.getPlaceHolderTypes()) {
        let i = this.getObjectContentURLs(t);
        if (i.length > 0 && r.url != null && r.url.indexOf(i[0]) === 0) {
          class_14.crash(`Failed to load asset: ${r.url}`, class_14.ERROR_CATEGORY_DOWNLOAD_CRITICAL_ASSET);
          return;
        }
      }
  }, "_r441f094831fd6c");
  _r46a97efc77ddaf = n((e) => {
    if (this.disposed || !(e instanceof M)) return;
    if (e.target instanceof UnkClass_747e83) {
      let t = e.target;
      this._re1a2ca83379c74?._r9bad3da3da4431(t._r7ea1029131e026.id, t.assetName, !0);
      return;
    }
    let r = e.target;
    r != null && this._r16a043a42356c0(r);
  }, "_r46a97efc77ddaf");
  _r16a043a42356c0(e) {
    let r = !1,
      t = this.getAssetLibraryType(e);
    ((t = t != null ? this._r939dc769714d19(t) : null),
      t != null && (r = this._rf67ce2f155cc3c(t, e)),
      r && t != null && this._rdc264f54a8d265[t] != null && this._r6ee7015bd8b4fd(t));
    let i = new RoomContentLoadedEvent(r ? RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS : RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, t ?? "");
    this._r1cc4d738ae7924(t ?? "", !0)?.dispatchEvent?.(i);
  }
  _r6ee7015bd8b4fd(e) {
    let r = this._rdc264f54a8d265[e],
      t = this._rded86a5ccab725(e);
    if (t != null) {
      let o = new B();
      for (let d of t._rba54d1aec0ca32()) {
        let c = t._r006f3d93055f74(d);
        if (c == null || c.length < 2) continue;
        let f = t._rfe7eb06cea0213(d),
          l = Number.parseInt(this._rf71b551564d923(f, "breed") ?? "0", 10),
          b = Number.parseInt(this._rf71b551564d923(f, "colortag") ?? "-1", 10),
          _ = this._rf71b551564d923(f, "tags"),
          h = _ != null && _ !== "" ? _.split(",") : [],
          p = this._rf71b551564d923(f, "master") === "true";
        o.add(d, new Wne(c[0], c[1], l, b, d, p, h));
      }
      this._petColors.add(r, o);
    }
    let i = this._ra64d15c2099c2c(this._r187dae11eef46b(e));
    if (i == null) return;
    let s = new B();
    for (let o of this._r7a3bbee5e63735(i, "visualization")) {
      let d = new Map(),
        c = this._r49d4f89c9a601a(o, "layers");
      if (c != null)
        for (let f of this._r7a3bbee5e63735(c, "layer")) {
          let l = f.getAttribute("tag");
          l && d.set(l, Number.parseInt(f.getAttribute("id") ?? "-1", 10));
        }
      s.add(o.getAttribute("size") ?? "", d);
    }
    this._petLayers.add(r, s);
  }
  _rf67ce2f155cc3c(e, r) {
    if (e == null || r == null) return !1;
    let t = this.createGraphicAssetCollection(e, r);
    return t == null ? !1 : t.define(this._ra9cbaacb6b51fb(e)) ? !0 : (this._re62eb69a38837f(e), !1);
  }
  _r971a272f59a92e(e, r) {
    let t = this._r79704128c7e98c(e);
    return t == null
      ? !1
      : (this._r605256937faf55.add(r, e),
        this._rf67ce2f155cc3c(r, t) ? !0 : (this._r605256937faf55.remove(r), !1));
  }
  _rd3ba05ba8f7cab(e) {
    return `${a.ASSET_LIBRARY_NAME_PREFIX}${e}`;
  }
  _r79704128c7e98c(e) {
    let r = this.getContentType(e);
    r = this._r939dc769714d19(r);
    let t = this._libraries.getValue(this._rd3ba05ba8f7cab(r)) ?? null;
    if (t == null) {
      let i = this._r605256937faf55.getValue(r) ?? null;
      i != null &&
        ((r = this.getContentType(i)),
        (t = this._libraries.getValue(this._rd3ba05ba8f7cab(r)) ?? null));
    }
    return t;
  }
  _r7199c7fb4fd9fc(e, r) {
    let t = this.getContentType(e),
      i = this._r79704128c7e98c(e);
    if (i != null) return i;
    let s = this._rd3ba05ba8f7cab(t),
      o = new AssetLibraryCollection(s);
    return (
      this._libraries.add(s, o),
      r != null && this._r1cc4d738ae7924(e) == null && this._events.add(t, r),
      o
    );
  }
  _r1cc4d738ae7924(e, r = !1) {
    let t = this.getContentType(e);
    return r ? (this._events.remove(t) ?? null) : (this._events.getValue(t) ?? null);
  }
  getIconAssetType(e) {
    if (e == null) return null;
    let r = e.assetName.split("_"),
      t = Number.parseInt(r.pop() ?? "0", 10),
      i = r.join("_");
    return t > 0 ? `${i}*${t}` : i;
  }
  getAssetLibraryType(e) {
    if (e == null) return null;
    let r = e.getAssetByName("index");
    return this._rf71b551564d923(this._r3e194cfe10a9db(r?.content), "type");
  }
  _r1d008b524790bb(e) {
    return this._rf71b551564d923(this._re4a934afe09607(e), "visualization") ?? "";
  }
  _r0554329abdc519(e) {
    return this._rf71b551564d923(this._re4a934afe09607(e), "logic") ?? "";
  }
  _rd90cc56b596a80(e) {
    return this._r16a3fa97b86ab6(e, "_visualization");
  }
  _r187dae11eef46b(e) {
    return this.getXML(e, "_visualization");
  }
  _rd04533a6160942(e) {
    return this._r16a3fa97b86ab6(e, "_assets");
  }
  _ra9cbaacb6b51fb(e) {
    return this.getXML(e, "_assets");
  }
  _r52e0073bc0af5c(e) {
    return this._r16a3fa97b86ab6(e, "_logic");
  }
  _rd8f6b1a3c700c2(e) {
    return this.getXML(e, "_logic");
  }
  getXML(e, r) {
    let t = this._r79704128c7e98c(e);
    if (t == null) return null;
    let i = this.getContentType(e),
      s = this._r11378ef53d2a5d(i),
      o = t.getAssetByName(`${s}${r}`);
    return this._r3e194cfe10a9db(o?.content);
  }
  _r16a3fa97b86ab6(e, r) {
    let t = this._r79704128c7e98c(e);
    if (t == null) return !1;
    let i = this.getContentType(e),
      s = this._r11378ef53d2a5d(i);
    return t.hasAsset(`${s}${r}`);
  }
  addGraphicAsset(e, r, t, i, s = !0) {
    return this._rded86a5ccab725(e)?.addAsset(r, t, i, 0, 0, !1, !1) ?? !1;
  }
  createGraphicAssetCollection(e, r) {
    let t = this._rded86a5ccab725(e);
    if (t != null) return t;
    if (this._rd6ec743ba974e5 == null) return null;
    let i = this._rd6ec743ba974e5.createGraphicAssetCollection();
    return (i != null && ((i.assetLibrary = r), this.PLACE_HOLDER_TYPES.add(e, i)), i);
  }
  _rded86a5ccab725(e) {
    return this.PLACE_HOLDER_TYPES.getValue(this.getContentType(e)) ?? null;
  }
  _rc6c09a65fe2d8b(e, r) {
    e?.getModelController()?.setString(RoomObjectVariableEnum.const_236, r, !0);
  }
  _re62eb69a38837f(e) {
    let r = this.PLACE_HOLDER_TYPES.remove(this.getContentType(e)) ?? null;
    return r == null ? !1 : (r.dispose(), !0);
  }
  _r677d2cc3859768() {
    this.initFurnitureData();
  }
  _r1e20ad2f97f0de(e, r) {
    (this._rf8108919688407.remove(e), this._rf8108919688407.add(e, r));
  }
  _r103dbb6649cea9() {
    let e = this.getPlaceHolderTypes();
    for (let r = this.PLACE_HOLDER_TYPES.length - 1; r >= 0; r--) {
      let t = this.PLACE_HOLDER_TYPES.getKey(r);
      if (t == null || e.includes(t)) continue;
      let i = this._libraries.getValue(this._rd3ba05ba8f7cab(t)) ?? null;
      if (i != null)
        for (let s = 0; s < i.numAssets; s++) {
          let o = i.getAssetByIndex(s);
          o != null;
        }
    }
    this._rea276afddaf41e = _ia411d8d8194a3a();
  }
  purge() {
    if (this.var_1271) return;
    let e = _ia411d8d8194a3a();
    for (let r = this.PLACE_HOLDER_TYPES.length - 1; r >= 0; r--) {
      let t = this.PLACE_HOLDER_TYPES.getKey(r);
      if (t == null || a._r4b380478aa03a6.includes(t)) continue;
      let i = this.PLACE_HOLDER_TYPES.getValue(t) ?? null;
      if (i != null && i.getReferenceCount() < 1 && e - i.getLastReferenceTimeStamp() >= a._r3fb6615f7a80b3) {
        (this.PLACE_HOLDER_TYPES.remove(t), i.dispose());
        let s = this._rd3ba05ba8f7cab(t),
          o = this._libraries.getValue(s) ?? null;
        o != null && (this._libraries.remove(s), o.dispose());
      }
    }
  }
  _re4a934afe09607(e) {
    let r = this._r79704128c7e98c(e);
    return r == null
      ? null
      : this._r3e194cfe10a9db(r.getAssetByName(`${e}_index`)?.content ?? r.getAssetByName("index")?.content);
  }
  _r3e194cfe10a9db(e) {
    if (e == null) return null;
    let r = rr(e);
    return r.toDomElement() != null ? r : null;
  }
  _rf71b551564d923(e, r) {
    if (e == null) return null;
    let t = e.attribute(r).toString();
    return t.length > 0 ? t : null;
  }
  _ra64d15c2099c2c(e) {
    return e?.toDomElement() ?? null;
  }
  _r7a3bbee5e63735(e, r) {
    return Array.from(e.children).filter((t) => t.tagName === r);
  }
  _r49d4f89c9a601a(e, r) {
    return this._r7a3bbee5e63735(e, r)[0] ?? null;
  }
}
