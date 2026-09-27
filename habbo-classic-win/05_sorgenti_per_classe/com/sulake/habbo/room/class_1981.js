// Extracted from HabboAirLauncher.deobf.js, line 291376.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/class_1981.as
// Obfuscated name: _icfca7cb2d7d36f

class a {
  static {
    n(this, "class_1981");
  }
  static NOTIFICATION_STYLE_ID = 34;
  static NOTIFICATION_RANGE_START = 200;
  static NOTIFICATION_STYLE_END = 300;
  static const_913 = 0;
  static EFFECT_ROOM_SHAKE = 1;
  static const_1261 = 2;
  static EFFECT_ROOM_DISCO = 3;
  var_36 = null;
  _re7dfb903bc1b08 = null;
  _rbbdf6d57d32adc = null;
  _r2b2901e3583c42 = null;
  var_4278 = -1;
  var_19 = 0;
  _r01f971f1efab9f = -1;
  _r8dafa7ba609737 = -1;
  constructor(e) {
    ((this._re7dfb903bc1b08 = e), (this._rbbdf6d57d32adc = new rs()));
  }
  _r6b5eee15a94f4d(e) {
    return (...r) => {
      e(r[0]);
    };
  }
  dispose() {
    ((this.var_36 = null),
      (this._re7dfb903bc1b08 = null),
      this._rbbdf6d57d32adc?.dispose(),
      (this._rbbdf6d57d32adc = null),
      (this._r2b2901e3583c42 = null));
  }
  _r4fe7d7edbb7c87(e) {
    (this.var_19 !== 0 && this._re7dfb903bc1b08?._r54608a3676a44e(this.var_19),
      (this.var_19 = e),
      (this._r2b2901e3583c42 = null));
  }
  _r6ff0d604a9caed() {
    ((this.var_19 = 0), (this._r2b2901e3583c42 = null));
  }
  _r9bf502fda037f6(e) {
    return this.var_19;
  }
  set connection(e) {
    this.var_36 != null ||
      e == null ||
      ((this.var_36 = e),
      e.addMessageEvent(new class_1926(this._r6b5eee15a94f4d(this._re4dfc73b282842.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_333a8d(this._r6b5eee15a94f4d(this._rc68c5eb1f835e9.bind(this)))),
      e.addMessageEvent(new class_2827(this._r6b5eee15a94f4d(this._rda191df3db2224.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_class_2771(this._r6b5eee15a94f4d(this._r7a796d23c3c738.bind(this)))),
      e.addMessageEvent(new class_3534(this._r6b5eee15a94f4d(this._rb42cb61cf01165.bind(this)))),
      e.addMessageEvent(new class_3846(this._r6b5eee15a94f4d(this.onHeightMap.bind(this)))),
      e.addMessageEvent(new class_2381(this._r6b5eee15a94f4d(this.onHeightMapUpdate.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_4ac32c(this._r6b5eee15a94f4d(this._r7c9f7c3649fea5.bind(this)))),
      e.addMessageEvent(new class_2540(this._r6b5eee15a94f4d(this._r539506299eb88e.bind(this)))),
      e.addMessageEvent(new class_3741(this._r6b5eee15a94f4d(this._r5bac2d67054985.bind(this)))),
      e.addMessageEvent(new class_2898(this._r6b5eee15a94f4d(this._r52b40f1fb8d11a.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_7cbd2a(this._r6b5eee15a94f4d(this._r2db9201711e6c9.bind(this)))),
      e.addMessageEvent(new class_3703(this._r6b5eee15a94f4d(this._r89f0690ee52550.bind(this)))),
      e.addMessageEvent(new class_2372(this._r6b5eee15a94f4d(this._r28e87f3b61e178.bind(this)))),
      e.addMessageEvent(new class_3354(this._r6b5eee15a94f4d(this._r4a639c5097da95.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_class_3671(this._r6b5eee15a94f4d(this._re5cd403b9fba96.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_class_2944(this._r6b5eee15a94f4d(this.onObjectRemoveMultiple.bind(this)))),
      e.addMessageEvent(new class_2414(this._r6b5eee15a94f4d(this._r807d529babe169.bind(this)))),
      e.addMessageEvent(new class_3319(this._r6b5eee15a94f4d(this._r1ebc649b85310a.bind(this)))),
      e.addMessageEvent(new class_2783(this._r6b5eee15a94f4d(this._rd4d4c1f35eb645.bind(this)))),
      e.addMessageEvent(new class_2408(this._r6b5eee15a94f4d(this._rf9a17096c876b6.bind(this)))),
      e.addMessageEvent(new class_3528(this._r6b5eee15a94f4d(this._ra60e1793c5d485.bind(this)))),
      e.addMessageEvent(new class_2785(this._r6b5eee15a94f4d(this._r7f796db192c3cc.bind(this)))),
      e.addMessageEvent(new class_3153(this._r6b5eee15a94f4d(this._r4fdc871e1a0f4f.bind(this)))),
      e.addMessageEvent(new class_3411(this._r6b5eee15a94f4d(this._r997ec565f0aab2.bind(this)))),
      e.addMessageEvent(new class_2114(this._r6b5eee15a94f4d(this.onUsers.bind(this)))),
      e.addMessageEvent(new class_3303(this._r6b5eee15a94f4d(this.onUserUpdate.bind(this)))),
      e.addMessageEvent(new class_2547(this._r6b5eee15a94f4d(this._r45726f0b7eeebc.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_class_2562(this._r6b5eee15a94f4d(this._r9b3a75bb1f2b44.bind(this)))),
      e.addMessageEvent(new class_3083(this._r6b5eee15a94f4d(this._ra45867355c2d31.bind(this)))),
      e.addMessageEvent(new class_3013(this._r6b5eee15a94f4d(this._r174065762b26cb.bind(this)))),
      e.addMessageEvent(new class_2513(this._r6b5eee15a94f4d(this._rccf43f946e3902.bind(this)))),
      e.addMessageEvent(new class_2739(this._r6b5eee15a94f4d(this._r6756d60cde1668.bind(this)))),
      e.addMessageEvent(new class_3658(this._r6b5eee15a94f4d(this._r99454c56350698.bind(this)))),
      e.addMessageEvent(new class_3442(this._r6b5eee15a94f4d(this._r9cfba5f04f8637.bind(this)))),
      e.addMessageEvent(new class_3738(this._r6b5eee15a94f4d(this.onPetFigureUpdate.bind(this)))),
      e.addMessageEvent(new class_2463(this._r6b5eee15a94f4d(this._r7df563ba17f83f.bind(this)))),
      e.addMessageEvent(new class_2568(this._r6b5eee15a94f4d(this._r1aa183927c0463.bind(this)))),
      e.addMessageEvent(new class_3202(this._r6b5eee15a94f4d(this._rcb0a9ea72cc8f2.bind(this)))),
      e.addMessageEvent(new class_2713(this._r6b5eee15a94f4d(this._r3624c006031c03.bind(this)))),
      e.addMessageEvent(new class_2507(this._r6b5eee15a94f4d(this._rc2b8f4ef6f5a57.bind(this)))),
      e.addMessageEvent(new class_3689(this._r6b5eee15a94f4d(this._r89284eb249b14e.bind(this)))),
      e.addMessageEvent(new class_3104(this._r6b5eee15a94f4d(this._ref8dd5243c24cc.bind(this)))),
      e.addMessageEvent(new class_3772(this._r6b5eee15a94f4d(this._ref8dd5243c24cc.bind(this)))),
      e.addMessageEvent(new class_3681(this._r6b5eee15a94f4d(this._ref8dd5243c24cc.bind(this)))),
      e.addMessageEvent(new class_2835(this._r6b5eee15a94f4d(this._r78b9dcaef7a0ba.bind(this)))),
      e.addMessageEvent(new class_3757(this._r6b5eee15a94f4d(this._r0b30d03c50a3a2.bind(this)))),
      e.addMessageEvent(new class_3803(this._r6b5eee15a94f4d(this._r857a88d3d6854c.bind(this)))),
      e.addMessageEvent(new class_3213(this._r6b5eee15a94f4d(this._raf6b44f4a484f4.bind(this)))),
      e.addMessageEvent(new class_3577(this._r6b5eee15a94f4d(this._r70622c8f7a9e40.bind(this)))),
      e.addMessageEvent(new class_2538(this._r6b5eee15a94f4d(this._re3b78c44bcd883.bind(this)))),
      e.addMessageEvent(new class_3450(this._r6b5eee15a94f4d(this._rc1cfa308fb94ad.bind(this)))),
      e.addMessageEvent(new class_2639(this._r6b5eee15a94f4d(this._r941f876b4fc892.bind(this)))),
      e.addMessageEvent(new class_2530(this._r6b5eee15a94f4d(this.onIgnoreResult.bind(this)))),
      e.addMessageEvent(new class_2940(this._r6b5eee15a94f4d(this._re7e0d94d2ea961.bind(this)))),
      e.addMessageEvent(new class_2844(this._r6b5eee15a94f4d(this._rc3d159747f4984.bind(this)))),
      e.addMessageEvent(new class_3525(this._r6b5eee15a94f4d(this._r4f7e580f2edab6.bind(this)))),
      e.addMessageEvent(new class_3098(this._r6b5eee15a94f4d(this._r1cd7f0b5ec37ee.bind(this)))),
      e.addMessageEvent(new UnkMessageEvent_f3269e(this._r6b5eee15a94f4d(this.onBCPlacementWarning.bind(this)))),
      e.addMessageEvent(new class_3412(this._r6b5eee15a94f4d(this.onObjectRemoveConfirm.bind(this)))),
      e.addMessageEvent(new class_2404(this._r6b5eee15a94f4d(this._r2d1b4606c0c5da.bind(this)))));
  }
  onObjectRemoveConfirm(e) {
    if (!(e instanceof class_3412)) return;
    let r = e.getParser(),
      t = new UnkMessageComposer_3args_b79f99(r.id, r.category, !0);
    this._re7dfb903bc1b08?.windowManager?.confirm(
      "${" + r.confirmTitle + "}",
      "${" + r.confirmBody + "}",
      0,
      (i, s) => {
        (i.dispose(), s.type === y.const_1300 && e.connection?.send(t));
      },
    );
  }
  onBCPlacementWarning(e) {
    if (!(e instanceof UnkMessageEvent_f3269e)) return;
    let r = e.getParser(),
      t =
        r._r46e70b63ffc509 === 1
          ? new class_1992(r.pageId, r.offerId, r.extraParam, r.x, r.y, r.direction, !0)
          : new class_1776(r.pageId, r.offerId, r.extraParam, r._r8a8bd2d04c661f, !0);
    this._re7dfb903bc1b08?.windowManager?.confirm(
      "${generic.alert.title}",
      "${room.confirm.hide_room}",
      0,
      (i, s) => {
        (i.dispose(), s.type === y.const_1300 && e.connection?.send(t));
      },
    );
  }
  _re4dfc73b282842(e) {
    e instanceof class_1926 && (this.var_4278 = e.getParser().id);
  }
  _rc68c5eb1f835e9(e) {
    if (!(e instanceof UnkMessageEvent_333a8d)) return;
    let r = e.getParser();
    (this.var_19 !== r.roomId && this._r4fe7d7edbb7c87(r.roomId),
      this._re7dfb903bc1b08?._r50bf77a73f4299(r.roomId, r.roomType));
  }
  _r539506299eb88e(e) {
    if (!(e instanceof class_2540)) return;
    let r = e.getParser();
    for (let t = 0; t < r.aliasCount; t++) {
      let i = r.getName(t),
        s = r.getAlias(t);
      i != null && s != null && this._re7dfb903bc1b08?._r4879f72dd9cbfd(i, s);
    }
  }
  onHeightMap(e) {
    if (!(e instanceof class_3846) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser(),
      t = new class_1778(r.width, r.height),
      i = this._re7dfb903bc1b08.configuration?.getInteger("room.stacking_blocked_mask_bit", 14) ?? 14;
    r.stackingBlockedMaskBit = i;
    for (let s = 0; s < r.height; s++)
      for (let o = 0; o < r.width; o++)
        (t.setTileHeight(o, s, r.getTileHeight(o, s)),
          t._r1c17919275b66f(o, s, r._rf28b795e1c38e4(o, s)),
          t._r14f6fa45984c2a(o, s, r._r3085c853f55b25(o, s)));
    this._re7dfb903bc1b08._rd9486318715162(this.var_19, t);
  }
  onHeightMapUpdate(e) {
    if (!(e instanceof class_2381) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser(),
      t = this._re7dfb903bc1b08._r27845e49c42e49(this.var_19);
    if (t == null) return;
    let i = this._re7dfb903bc1b08.configuration?.getInteger("room.stacking_blocked_mask_bit", 14) ?? 14;
    for (r.stackingBlockedMaskBit = i; r.next();)
      (t.setTileHeight(r.x, r.y, r._r6010569cef737d),
        t._r1c17919275b66f(r.x, r.y, r._r41bbf93acb1863),
        t._r14f6fa45984c2a(r.x, r.y, r._r3085c853f55b25));
    this._re7dfb903bc1b08._rf83367626c34b1(this.var_19, "RoomMessageHandler.onHeightMapUpdate()");
  }
  _r7c9f7c3649fea5(e) {
    if (!(e instanceof UnkMessageEvent_4ac32c)) return;
    let r = e.getParser();
    (this._re7dfb903bc1b08?._rb767e17f9cef31(this.var_19, !r._rde6cf27c3b230d, !0),
      this._re7dfb903bc1b08?._r429a951061317e(this.var_19, r._rd42fde7a8fe0db, r._r0337760c226f75));
  }
  _r5bac2d67054985(e) {
    if (!(e instanceof class_3741)) return;
    let r = e.getParser().areaHideMessageData;
    r != null &&
      this._re7dfb903bc1b08?._r57c63f39280147(
        this.var_19,
        r.furniId,
        r.on,
        r._r1218139d05a185,
        r._r959c41620a2b1c,
        r.width,
        r.length,
        r.invert,
      );
  }
  _rda191df3db2224(e) {
    if (!(e instanceof class_2827)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r20d16d1bfd889e(
      this.var_19,
      r._r79139f0497a3db,
      r._raec7c74c043bf6,
      r._r0360237584f43e,
    );
  }
  _r7a796d23c3c738(e) {
    e instanceof UnkMessageEvent_class_2771 && (this._r2b2901e3583c42 = e);
  }
  _rb42cb61cf01165(e) {
    if (!(e instanceof class_3534) || this._re7dfb903bc1b08 == null || this._rbbdf6d57d32adc == null) return;
    let r = e.getParser(),
      t = this._re7dfb903bc1b08._r847b0dcadd8c9f(this.var_19);
    if (t == null) return;
    (this._rbbdf6d57d32adc.reset(), this._rbbdf6d57d32adc._r9e8cc905e77402(r.width, r.height));
    let i = -1,
      s = -1,
      o = 0,
      d = 0,
      c = this._r2b2901e3583c42?.getParser() ?? null;
    if (this._re7dfb903bc1b08._r27845e49c42e49(this.var_19) == null) return;
    for (let h = 0; h < r.height; h++)
      for (let p = 0; p < r.width; p++) {
        let m = r.getTileHeight(p, h);
        (((h > 0 && h < r.height - 1) || (p > 0 && p < r.width - 1)) &&
          m !== rs.const_517 &&
          (c == null || (p === c.x && h === c.y)) &&
          (r.getTileHeight(p, h - 1) === rs.const_517 &&
            r.getTileHeight(p - 1, h) === rs.const_517 &&
            r.getTileHeight(p, h + 1) === rs.const_517 &&
            ((i = p + 0.5), (s = h), (o = m), (d = 90)),
          r.getTileHeight(p, h - 1) === rs.const_517 &&
            r.getTileHeight(p - 1, h) === rs.const_517 &&
            r.getTileHeight(p + 1, h) === rs.const_517 &&
            ((i = p), (s = h + 0.5), (o = m), (d = 180))),
          this._rbbdf6d57d32adc.setTileHeight(p, h, m));
      }
    (this._rbbdf6d57d32adc.setTileHeight(Math.floor(i), Math.floor(s), o),
      this._rbbdf6d57d32adc.initializeFromTileData(r.fixedWallsHeight),
      this._rbbdf6d57d32adc.setTileHeight(
        Math.floor(i),
        Math.floor(s),
        o + this._rbbdf6d57d32adc.wallHeight,
      ),
      (t.scale = r.scale),
      t.initialize(r.width, r.height, this._rbbdf6d57d32adc._reba6d9dec10c70));
    for (let h = r.height - 1; h >= 0; h--)
      for (let p = r.width - 1; p >= 0; p--)
        t.setTileHeight(p, h, this._rbbdf6d57d32adc.getTileHeight(p, h));
    let l = this._rbbdf6d57d32adc.getXML(),
      b = _id7a5b884da4a02("doors");
    (b.appendChildElement("door", { x: i, y: s, z: o, dir: d }), l.appendChild(b));
    let _ = new k(r._rbcced16750ce31, r._r915a307e6f7417, r._rd6cfa9b8325f55);
    this._re7dfb903bc1b08._rd4c6f2a06f0225(this.var_19, l, _, r._r91f98db6f6fd7d);
  }
  _r52b40f1fb8d11a(e) {
    if (!(e instanceof class_2898)) return;
    let r = e.getParser();
    for (let t = 0; t < r.getObjectCount(); t++)
      this._re539584d8cba54(this.var_19, r.getObject(t));
  }
  _r2db9201711e6c9(e) {
    e instanceof UnkMessageEvent_7cbd2a && this._re539584d8cba54(this.var_19, e.getParser().data);
  }
  _r89f0690ee52550(e) {
    if (!(e instanceof class_3703) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser().data;
    if (r == null) return;
    let t = new k(r.x, r.y, r.z),
      i = new k(r.dir);
    (this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, t, i, r.state, r.data, r.extra),
      this._re7dfb903bc1b08._r1ebdfcb2d6b127(this.var_19, r.id, r._rea41d73d88249a),
      this._re7dfb903bc1b08._re1539b9fe3ba0c(this.var_19, r.id, r.expiryTime));
  }
  _r28e87f3b61e178(e) {
    if (!(e instanceof class_2372) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, null, null, r.state, r.data);
  }
  _r4a639c5097da95(e) {
    if (!(e instanceof class_3354) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    for (let t = 0; t < r.objectCount; t++) {
      let i = r.getObjectData(t);
      i != null &&
        this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, i.id, null, null, i.state, i.data);
    }
  }
  _re5cd403b9fba96(e) {
    if (!(e instanceof UnkMessageEvent_class_3671) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser(),
      t = r.isExpired ? -1 : r.pickerId;
    r.delay > 0
      ? setTimeout(() => {
          this._re7dfb903bc1b08?.disposeObjectFurniture(this.var_19, r.id, t, !0);
        }, r.delay)
      : this._re7dfb903bc1b08.disposeObjectFurniture(this.var_19, r.id, t, !0);
  }
  onObjectRemoveMultiple(e) {
    if (!(e instanceof UnkMessageEvent_class_2944) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    for (let t of r.ids)
      this._re7dfb903bc1b08.disposeObjectFurniture(this.var_19, t, r.pickerId);
    this._re7dfb903bc1b08._rf83367626c34b1(this.var_19, "RoomEngine.onObjectRemoveMultiple()");
  }
  _re539584d8cba54(e, r) {
    if (r == null || this._re7dfb903bc1b08 == null) return;
    let t = new k(r.x, r.y, r.z),
      i = new k(r.dir);
    r._ra52299348b41b0 != null
      ? this._re7dfb903bc1b08._r6fc13b80c13247(e, r.id, r._ra52299348b41b0, t, i, r.state, r.data, r.extra)
      : this._re7dfb903bc1b08._r5f200af79cf909(
          e,
          r.id,
          r.type,
          t,
          i,
          r.state,
          r.data,
          r.extra,
          r.expiryTime,
          r.usagePolicy,
          r.ownerId,
          r.ownerName,
          !0,
          !0,
          r._rea41d73d88249a,
        );
  }
  _r807d529babe169(e) {
    if (!(e instanceof class_2414)) return;
    let r = e.getParser();
    for (let t = 0; t < r.getItemCount(); t++) this._r871c33f81d8e19(this.var_19, r.getItem(t));
  }
  _r1ebc649b85310a(e) {
    e instanceof class_3319 && this._r871c33f81d8e19(this.var_19, e.getParser().data);
  }
  _rd4d4c1f35eb645(e) {
    if (!(e instanceof class_2783)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._rd7e85a509c569e(this.var_19, r.itemId, r.pickerId);
  }
  _rf9a17096c876b6(e) {
    if (!(e instanceof class_2408)) return;
    let r = e.getParser();
    for (let t of r._rd97bda360743c3)
      this._re7dfb903bc1b08?._rd7e85a509c569e(this.var_19, t, r.pickerId);
  }
  _ra60e1793c5d485(e) {
    if (!(e instanceof class_3528) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser(),
      t = this._re7dfb903bc1b08._r847b0dcadd8c9f(this.var_19);
    if (t == null) return;
    let i = r.data;
    if (i == null) return;
    let s = t.getLocation(i._r7020b3fd6fb75f, i.wallX, i.localX, i.localY, i.dir),
      o = new k(t.getDirection(i.dir));
    (this._re7dfb903bc1b08._r2312c3c4386345(this.var_19, i.id, s, o, i.state, i.data),
      this._re7dfb903bc1b08._rbd68fd6d6ee52d(this.var_19, i.id, i.secondsToExpiration));
  }
  _r7f796db192c3cc(e) {
    if (!(e instanceof class_2785)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._rea13e821f284f6(this.var_19, r.id, r.state, r.itemData);
  }
  _r4fdc871e1a0f4f(e) {
    if (!(e instanceof class_3153)) return;
    let r = e.getParser();
    for (let t = 0; t < r.itemCount; t++) {
      let i = r.getItemData(t);
      i != null && this._re7dfb903bc1b08?._rea13e821f284f6(this.var_19, i.id, i.state, i.itemData);
    }
  }
  _r997ec565f0aab2(e) {
    if (!(e instanceof class_3411)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._re4ece77a2dbbdf(this.var_19, r.id, r.itemData);
  }
  _r871c33f81d8e19(e, r) {
    if (r == null || this._re7dfb903bc1b08 == null) return;
    let t = this._re7dfb903bc1b08._r847b0dcadd8c9f(e);
    if (t == null) return;
    let i = r._rf4007f75f33533
        ? t._r14e9296fb1f3d1(r.y, r.z, r.dir)
        : t.getLocation(r._r7020b3fd6fb75f, r.wallX, r.localX, r.localY, r.dir),
      s = new k(t.getDirection(r.dir));
    this._re7dfb903bc1b08._r7feb9ada4ab53f(
      e,
      r.id,
      r.type,
      i,
      s,
      r.state,
      r.data,
      r.usagePolicy,
      r.ownerId,
      r.ownerName,
      r.secondsToExpiration,
    );
  }
  onUsers(e) {
    if (!(e instanceof class_2114) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    for (let t = 0; t < r.getUserCount(); t++) {
      let i = r.getUser(t);
      if (i == null) continue;
      let s = new k(i.x, i.y, i.z),
        o = new k(i.dir),
        d = i.userType;
      (this._re7dfb903bc1b08._r03c1f621ae28e1(this.var_19, i.roomIndex, s, o, i.dir, d, i.figure),
        i.webID === this.var_4278 &&
          (this._re7dfb903bc1b08._r4ba78c9c42db59(this.var_19, i.roomIndex),
          this._re7dfb903bc1b08._ra63854c43b955e(this.var_19, i.roomIndex)),
        this._re7dfb903bc1b08._r39decb54edd284(
          this.var_19,
          i.roomIndex,
          i.figure,
          i.sex,
          i.subType,
          i.isRiding,
        ),
        Ea.getName(d) === Ea.PET &&
          this._re7dfb903bc1b08._rcd60769c73f9cb(i.figure) === class_3447.MONSTERPLANT &&
          this._re7dfb903bc1b08._r51ee69fcf18546(this.var_19, i.roomIndex, i.petPosture),
        this._re7dfb903bc1b08.configuration?.getBoolean("avatar.ignored.bubble.enabled") &&
          this._re7dfb903bc1b08._r93fc9f432e7394(
            this.var_19,
            i.roomIndex,
            RoomObjectVariableEnum.const_611,
            Number(this._re7dfb903bc1b08.sessionDataManager?.isIgnored(i.webID) ?? !1),
          ));
    }
    this.updateGuideMarker();
  }
  onUserUpdate(e) {
    if (!(e instanceof class_3303) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser(),
      t = this._re7dfb903bc1b08._r8bcc15c726f45e(this.var_19);
    if (t == null) return;
    let i = t._ra3dc9a405b5c73(RoomVariableEnum.ROOM_Z_SCALE);
    for (let s = 0; s < r.userUpdateCount; s++) {
      let o = r.getUserUpdateData(s);
      if (o == null) continue;
      let d = o._r375695f3c7feda;
      i !== 0 && (d /= i);
      let c = new k(o.x, o.y, o.z + d),
        f = new k(o.dir),
        l = o._r4c3d51c4316d99 ? new k(o.targetX, o.targetY, o.targetZ) : null;
      this._re7dfb903bc1b08._rc74c4cf6e79eda(
        this.var_19,
        o.id,
        c,
        l,
        o._rcb15f009f08c62,
        d,
        f,
        o._ra08dca6c50b716,
        Number.NaN,
        o._rd42ca276af45f8,
        o._r4c3d51c4316d99 ? o._rbe629e85d2be84 : 0,
      );
      let b = !0,
        _ = !1,
        h = RoomObjectVariableEnum.const_928,
        p = "",
        m = !1,
        v = !1;
      this._re7dfb903bc1b08._rd818b342758de2(this.var_19, o.id, null);
      let w = o.actions.length;
      for (let I of o.actions)
        switch (I.actionType) {
          case "flatctrl":
            this._re7dfb903bc1b08._rd818b342758de2(this.var_19, o.id, I.actionParameter);
            break;
          case "sign":
            (w === 1 && (b = !1),
              this._re7dfb903bc1b08._r93fc9f432e7394(
                this.var_19,
                o.id,
                RoomObjectVariableEnum.AVATAR_SIGN,
                Number.parseInt(I.actionParameter, 10),
              ));
            break;
          case "gst":
            (w === 1 && (b = !1),
              this._re7dfb903bc1b08._r29a05765ba2b1f(this.var_19, o.id, I.actionParameter));
            break;
          case "wav":
          case "mv":
            ((v = !0), (_ = !0), (h = I.actionType), (p = I.actionParameter));
            break;
          case "swim":
            ((m = !0), (_ = !0), (h = I.actionType), (p = I.actionParameter));
            break;
          case "wf":
            break;
          case "trd":
            break;
          default:
            ((_ = !0), (h = I.actionType), (p = I.actionParameter));
            break;
        }
      (!v && m && ((_ = !0), (h = "float")),
        _
          ? this._re7dfb903bc1b08._r51ee69fcf18546(this.var_19, o.id, h, p)
          : b && this._re7dfb903bc1b08._r51ee69fcf18546(this.var_19, o.id, RoomObjectVariableEnum.const_928, ""));
    }
    this.updateGuideMarker();
  }
  _r45726f0b7eeebc(e) {
    !(e instanceof class_2547) ||
      this._re7dfb903bc1b08 == null ||
      (this._re7dfb903bc1b08._rc8445f4451c0a0(this.var_19, e.getParser().id),
      this.updateGuideMarker());
  }
  _r9b3a75bb1f2b44(e) {
    e instanceof UnkMessageEvent_class_2562 && this._re7dfb903bc1b08?._r39decb54edd284(this.var_19, e.id, e.figure, e.sex);
  }
  onPetFigureUpdate(e) {
    if (!(e instanceof class_3738)) return;
    let r = e.getParser(),
      t = r.figureData?.figureString ?? "";
    this._re7dfb903bc1b08?._r39decb54edd284(
      this.var_19,
      r.roomIndex,
      t,
      "",
      "",
      r.isRiding,
    );
  }
  _ra45867355c2d31(e) {
    if (!(e instanceof class_3083)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.const_456,
      r.expressionType,
    );
  }
  _r174065762b26cb(e) {
    if (!(e instanceof class_3013)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.const_1195,
      r.danceStyle,
    );
  }
  _rccf43f946e3902(e) {
    if (!(e instanceof class_2513)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r75c3b4e7c11b82(
      this.var_19,
      r.userId,
      r.effectId,
      r._r0f4823a8cace64,
    );
  }
  _r6756d60cde1668(e) {
    if (!(e instanceof class_2739)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.const_307,
      r.sleeping ? 1 : 0,
    );
  }
  _r99454c56350698(e) {
    if (!(e instanceof class_3658)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.const_1257,
      r.itemType,
    );
  }
  _r9cfba5f04f8637(e) {
    if (!(e instanceof class_3442)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.const_182,
      r.itemType,
    );
  }
  _r7df563ba17f83f(e) {
    if (!(e instanceof class_2463) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    (this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, null, null, 1, null),
      this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, null, null, 2, null));
    for (let t of r.objectList)
      t != null && this._re7dfb903bc1b08._r10b49f9524ce3f(this.var_19, t.id, t.loc, null, t.target);
    r.avatar != null &&
      (this._re7dfb903bc1b08._rc74c4cf6e79eda(
        this.var_19,
        r.avatar.id,
        r.avatar.loc,
        r.avatar.target,
      ),
      this._r3a963f52d94dc0(r.avatar.id, r.avatar._r757da1d998c777));
  }
  _r1aa183927c0463(e) {
    if (this._re7dfb903bc1b08 == null || !(e instanceof class_2568)) return;
    let r = e.getParser();
    for (let t of r._r707d42200755de) this._r44350efb58ce56(t);
    for (let t of r._reb2fb4be961248) this._reb99cfb17f251e(t);
    for (let t of r._rc5713b8600cf71) this._r1f42b91f957d13(t);
    for (let t of r._rdc1154115b0c05) this._ra491824c7485e7(t);
  }
  _rcb0a9ea72cc8f2(e) {
    if (this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._r66cbd667bbe5aa(this.var_19, r.configs);
  }
  _r3624c006031c03(e) {
    if (this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._raa0e3211cd81ea(this.var_19, r._r261d20c14810e0);
  }
  _rc2b8f4ef6f5a57(e) {
    if (this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._rc64b65d84e94ac(this.var_19, r._rf28e89ae590c43);
  }
  _r89284eb249b14e(e) {
    if (this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._r05a19f4e586f2c(this.var_19, r._rf28e89ae590c43);
  }
  _reb99cfb17f251e(e) {
    let r = new k((e.rotation % 8) * 45);
    this._re7dfb903bc1b08?._r10b49f9524ce3f(
      this.var_19,
      e.furniId,
      this._r38adca508ede4f(e.source),
      r,
      this._r38adca508ede4f(e.target),
      e._rff74398609cf6a,
      e._r6ee7cf340b327c,
      e._r17b77566c1fdcb,
    );
  }
  _r38adca508ede4f(e) {
    let r = this._re7dfb903bc1b08?._rfcef1d52bd8cc0(this.var_19);
    if (r == null) return e;
    let t = r._rd0d22ff45cecac(e);
    if (t == null) return e;
    let i = new k(e.x, e.y, e.z + 0.01),
      s = r._rd0d22ff45cecac(i);
    if (s == null) return e;
    let o = t.y,
      d = (o - s.y) * 100,
      c = o - Math.round(o),
      f = e.z + c / d;
    return new k(e.x, e.y, f);
  }
  _r1f42b91f957d13(e) {
    let r = this._re7dfb903bc1b08?._r847b0dcadd8c9f(this.var_19);
    if (r == null) return;
    let t = e._r1be6ed4009b601 ? zI.DIRECTION_RIGHT : zI.const_684,
      i = r.getLocation(
        e._r5e096613d9df16,
        e._rf32a8ec60cca30,
        e._re19eee91440fa5,
        e._r5e7121f62f7cb6,
        t,
      ),
      s = r.getLocation(
        e._rd667c30ab1bf5d,
        e._rb0da42b91145bf,
        e._r40885bab89a7ca,
        e._ra5331653cf515f,
        t,
      );
    this._re7dfb903bc1b08?._r261fb2f3c13d8d(
      this.var_19,
      e.itemId,
      this._r38adca508ede4f(i),
      this._r38adca508ede4f(s),
      e._rff74398609cf6a,
    );
  }
  _r44350efb58ce56(e) {
    let r = !1;
    e._r757da1d998c777 === class_2720.const_1069 &&
      (r =
        ((
          this._re7dfb903bc1b08
            ?._r8bcc15c726f45e(this.var_19)
            ?.getObject(e._rc86f77becaebea, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null
        )
          ?.getStringToStringMap()
          ?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_332) ?? 0) > 0);
    let t = new k((e._r14e868854a1f2e % 8) * 45),
      i = (e._rd692399ae5c034 % 8) * 45;
    (this._re7dfb903bc1b08?._rc74c4cf6e79eda(
      this.var_19,
      e._rc86f77becaebea,
      this._r38adca508ede4f(e.source),
      this._r38adca508ede4f(e.target),
      r,
      0,
      t,
      i,
      e._rff74398609cf6a,
      !1,
      e._r85e98bc421613a,
    ),
      this._r3a963f52d94dc0(e._rc86f77becaebea, e._r757da1d998c777));
  }
  _ra491824c7485e7(e) {
    let r = new k((e._r14e868854a1f2e % 8) * 45),
      t = (e._r14e868854a1f2e % 8) * 45;
    this._re7dfb903bc1b08?._rd73654214f5914(this.var_19, e._rc86f77becaebea, r, t);
  }
  _r3a963f52d94dc0(e, r) {
    let i =
      this._re7dfb903bc1b08
        ?._r8bcc15c726f45e(this.var_19)
        ?.getObject(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null;
    if (i == null || i.getType() === Ea.MONSTERPLANT) return;
    let s = i.getStringToStringMap(),
      o = null;
    switch (r) {
      case class_2720.const_846:
        o = "mv";
        break;
      case class_2720.const_1069: {
        let d = s?.getString(RoomObjectVariableEnum.AVATAR_POSTURE) ?? "";
        o = d === "mv" ? "std" : d;
        break;
      }
    }
    o != null && this._re7dfb903bc1b08?._r51ee69fcf18546(this.var_19, e, o);
  }
  _r912b847574a276(e) {
    return e === a.NOTIFICATION_STYLE_ID || (e >= a.NOTIFICATION_RANGE_START && e < a.NOTIFICATION_STYLE_END);
  }
  _ref8dd5243c24cc(e) {
    if (this._re7dfb903bc1b08 == null) return;
    let r = null,
      t = this._re7dfb903bc1b08.roomSessionManager?.getSession(this.var_19) ?? null;
    if (e instanceof class_3104) r = e.getParser();
    else if (e instanceof class_3772) {
      if (((r = e.getParser()), r != null && t != null && r.userId === t.ownUserRoomId)) return;
    } else e instanceof class_3681 && (r = e.getParser());
    r == null ||
      this._r912b847574a276(r.styleId) ||
      (this._re7dfb903bc1b08._r13a7bbc799ce01(this.var_19, r.userId, r.gesture),
      this._re7dfb903bc1b08._r93fc9f432e7394(
        this.var_19,
        r.userId,
        RoomObjectVariableEnum.AVATAR_TALK,
        Math.ceil(r.text.length / 10),
      ));
  }
  _r78b9dcaef7a0ba(e) {
    if (!(e instanceof class_2835)) return;
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r.userId,
      RoomObjectVariableEnum.AVATAR_IS_TYPING,
      r.isTyping ? 1 : 0,
    );
  }
  _r0b30d03c50a3a2(e) {
    let r = e.getParser();
    this._re7dfb903bc1b08?._r93fc9f432e7394(
      this.var_19,
      r._r4150d1225be011,
      RoomObjectVariableEnum.const_1157,
      r._r15293165089ba0,
    );
  }
  _r857a88d3d6854c(e) {
    if (!(e instanceof class_3803) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, null, null, r.value, new mi());
  }
  _raf6b44f4a484f4(e) {
    if (!(e instanceof class_3213) || this._re7dfb903bc1b08 == null) return;
    let r = e.getParser();
    this._re7dfb903bc1b08._r418f6f699205eb(this.var_19, r.id, null, null, r.status, new mi());
  }
  _r70622c8f7a9e40(e) {
    this._re7dfb903bc1b08?._rb9a6cd0287557e(this.var_19, e.getParser()._rd20fc4247cac6a);
  }
  _re3b78c44bcd883(e) {
    if (e.getParser().flatId !== this.var_19) return;
    let t = this._re7dfb903bc1b08?.roomSessionManager?.getSession(this.var_19) ?? null;
    t == null ||
      !t._r53892118edc559 ||
      ((t._r53892118edc559 = !1), this._re7dfb903bc1b08?._r17b510721b3eb1());
  }
  _rc1cfa308fb94ad(e) {
    let r = e.getParser();
    (this._re7dfb903bc1b08?._r27fc589b4b8d9c(this.var_19, r._ra743ae215cae7c),
      this._re7dfb903bc1b08?._rfbc241b9674bc4(this.var_19, r._rf6604eae5d479c),
      this._re7dfb903bc1b08?._r3f892414fc6e48(this.var_19, r._r7b2358522ff37d),
      this._re7dfb903bc1b08?._ra96a309112eec7(this.var_19, r._r90de31328ed785));
  }
  _r941f876b4fc892(e) {
    if (!(e instanceof class_2639)) return;
    let r = e.getParser(),
      t = this._r9bf502fda037f6(0);
    this._re7dfb903bc1b08?._r93fc9f432e7394(t, r.userId, RoomObjectVariableEnum.const_1043, r.value);
  }
  onIgnoreResult(e) {
    if (
      !(e instanceof class_2530) ||
      !this._re7dfb903bc1b08?.configuration?.getBoolean("avatar.ignored.bubble.enabled")
    )
      return;
    let t =
      (
        this._re7dfb903bc1b08.roomSessionManager?.getSession(this.var_19) ?? null
      )?.getUserDataByIndex?._r1cacdcfc23a2de(e.userId) ?? null;
    if (t != null)
      switch (e.result) {
        case 1:
        case 2:
          this._re7dfb903bc1b08._r93fc9f432e7394(
            this.var_19,
            t._r2fdf1f24b1e612,
            RoomObjectVariableEnum.const_611,
            1,
          );
          break;
        case 3:
          this._re7dfb903bc1b08._r93fc9f432e7394(
            this.var_19,
            t._r2fdf1f24b1e612,
            RoomObjectVariableEnum.const_611,
            0,
          );
          break;
      }
  }
  _re7e0d94d2ea961(e) {
    if (!(e instanceof class_2940)) return;
    let r = e.getParser();
    ((this._r01f971f1efab9f = r._rcd57c4e33d2e39),
      (this._r8dafa7ba609737 = r.requesterUserId),
      this.updateGuideMarker());
  }
  _rc3d159747f4984(e) {
    this._red06a199683e5a();
  }
  _r4f7e580f2edab6(e) {
    this._red06a199683e5a();
  }
  _r1cd7f0b5ec37ee(e) {
    if (!(e instanceof class_3098) || this._re7dfb903bc1b08 == null) return;
    switch (e.getParser().effectId) {
      case a.const_913:
        (ow.init(250, 5e3), ow.turnVisualizationOn());
        break;
      case a.EFFECT_ROOM_SHAKE:
        (Nb.init(250, 5e3), Nb.turnVisualizationOn());
        break;
      case a.const_1261:
        this._re7dfb903bc1b08.roomSessionManager?.events?.dispatchEvent?.(
          new N6(this.var_19, -1, !0),
        );
        break;
      case a.EFFECT_ROOM_DISCO: {
        let t = 0,
          i = [29371, 16731195, 16764980, 10092288, 29371, 16731195, 16764980, 10092288, 0],
          s = new UnkEventDispatcherWrapperSubclass_05394e(1e3, i.length + 1);
        (s.addEventListener(DeBouncer.addEventListener, () => {
          let o = i[t++];
          this._re7dfb903bc1b08?._rc46b85071fd02a(this.var_19, o, 176, t === i.length);
        }),
          s.start());
        break;
      }
    }
  }
  updateGuideMarker() {
    let e = this._re7dfb903bc1b08?.sessionDataManager?.userId ?? -1;
    (this._rc7308f4d232a4f(this._r01f971f1efab9f, this._r8dafa7ba609737 === e ? UnkConstants_3dbacb.GUIDE : UnkConstants_3dbacb.NONE),
      this._rc7308f4d232a4f(
        this._r8dafa7ba609737,
        this._r01f971f1efab9f === e ? UnkConstants_3dbacb._r211920f21680f6 : UnkConstants_3dbacb.NONE,
      ));
  }
  _red06a199683e5a() {
    (this._rc7308f4d232a4f(this._r01f971f1efab9f, UnkConstants_3dbacb.NONE),
      this._rc7308f4d232a4f(this._r8dafa7ba609737, UnkConstants_3dbacb.NONE),
      (this._r01f971f1efab9f = -1),
      (this._r8dafa7ba609737 = -1));
  }
  _rc7308f4d232a4f(e, r) {
    let i =
      (
        this._re7dfb903bc1b08?.roomSessionManager?.getSession(this.var_19) ?? null
      )?.getUserDataByIndex?._r0e420e8c38fe10(e, RoomObjectTypeEnum.OBJECT_TYPE_USER) ?? null;
    i != null &&
      this._re7dfb903bc1b08?._r93fc9f432e7394(
        this.var_19,
        i._r2fdf1f24b1e612,
        RoomObjectVariableEnum.AVATAR_GUIDE_STATUS,
        r,
      );
  }
  _r2d1b4606c0c5da(e) {
    if (!(e instanceof class_2404)) return;
    let t =
      (
        this._re7dfb903bc1b08?.roomSessionManager?.getSession(this.var_19) ?? null
      )?.getUserDataByIndex?._r1cacdcfc23a2de(e.userId) ?? null;
    t != null &&
      this._re7dfb903bc1b08?._r253f1a276fe8ee(
        this.var_19,
        t._r2fdf1f24b1e612,
        e.result === class_2404.const_659,
      );
  }
}
