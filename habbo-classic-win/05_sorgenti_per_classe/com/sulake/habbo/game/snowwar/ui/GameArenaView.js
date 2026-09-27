// Extracted from HabboAirLauncher.deobf.js, line 222006.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/GameArenaView.as
// Obfuscated name: _i8934c5d3273a99

class a {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
    this._rc48cb7ca67aee6.roomEngine?._re8f661dca32b6b(RoomObjectCategoryEnum.SNOW_SPLASH);
  }
  static {
    n(this, "GameArenaView");
  }
  static GAME_ROOM_ID = 1;
  static TILE_CURSOR_STATE_TEAM_1 = 3;
  static TILE_CURSOR_STATE_TEAM_2 = 2;
  static TILE_CURSOR_STATE_TEAM_3 = 4;
  static TILE_CURSOR_STATE_TEAM_4 = 5;
  static EFFECT_RED_TEAM = 95;
  static EFFECT_BLUE_TEAM = 96;
  static EFFECT_CROSSHAIR = 98;
  static SPLASH_LIFE_SPAN_TIME = 500;
  var_1678 = [];
  _rd9a4b477089b96 = [];
  var_153 = [];
  _re58e6162b5e9f9 = null;
  var_1271 = !1;
  _r3d0e691b11ab87 = null;
  _r695091ed1950f8 = !1;
  _r448919959a600d = null;
  _r552a6cce3f24ed = !1;
  dispose() {
    (this._rc48cb7ca67aee6.roomEngine?._r54608a3676a44e(a.GAME_ROOM_ID),
      this._rc48cb7ca67aee6.roomEngine?._r8f3e1ecfa1148e(RoomObjectCategoryEnum.SNOW_SPLASH),
      this._re58e6162b5e9f9?.dispose(),
      (this._re58e6162b5e9f9 = null),
      this._r448919959a600d != null &&
        (this._r448919959a600d.removeEventListener(UnkClass_fd7c12.var_370, this._r063deefec1fad5),
        (this._r448919959a600d = null)),
      (this.var_1678 = []),
      (this._rd9a4b477089b96 = []),
      (this.var_153 = []),
      this._r3d0e691b11ab87?.dispose(),
      (this._r3d0e691b11ab87 = null),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  init() {
    this._rc48cb7ca67aee6.roomEngine._r880a2521997aa0 = !0;
    let e = this._rc48cb7ca67aee6._r0c148637e03364?._re20c98e536caa8(),
      r = e?.gameLevelData ?? null,
      t = e?.getTiles() ?? [];
    if (e == null || r == null) return;
    let i = new rs();
    i._r9e8cc905e77402(r.width, r.height);
    for (let o = 0; o < r.height; o++)
      for (let d = 0; d < r.width; d++) i.setTileHeight(d, o, t[o]?.[d] == null ? rs.const_498 : 0);
    (i.initializeFromTileData(),
      this._rc48cb7ca67aee6.roomEngine?._rd4c6f2a06f0225(a.GAME_ROOM_ID, i.getXML()),
      this._rc48cb7ca67aee6.roomEngine?._rb767e17f9cef31(a.GAME_ROOM_ID, !1),
      i.dispose());
    let s = e.gameLevelData;
    if (s != null) {
      for (let o of s.fuseObjects) this._r9202b5520a2546(o);
      (this._rc48cb7ca67aee6._r5e3ef8a2b11d2a != null &&
        (this._rc48cb7ca67aee6._r5e3ef8a2b11d2a.visible = !1),
        (this._r448919959a600d = this._rc48cb7ca67aee6.context?.dispatchEvent?.stage ?? null),
        this._r448919959a600d?.addEventListener(UnkClass_fd7c12.var_370, this._r063deefec1fad5));
    }
  }
  _rd0e38177616a5f(e) {
    ((this._r3d0e691b11ab87 = new U4e(this._rc48cb7ca67aee6)),
      this._r3d0e691b11ab87.init(),
      this._r6e5a9083c38b69());
  }
  _rfe4513bc4076e0() {
    (this._r3d0e691b11ab87?.dispose(), (this._r3d0e691b11ab87 = null));
  }
  update(e, r = !1) {
    if (r && this._re58e6162b5e9f9 != null) {
      let c = this._re58e6162b5e9f9.direction,
        f = this._rc48cb7ca67aee6._r0c148637e03364
          ?._re20c98e536caa8()
          ._rec3357f35c151d(this._rc48cb7ca67aee6.ownId);
      if (c != null && f != null) {
        let l = f._re4f88bac64d340.x / ti.TILE_WIDTH,
          b = f._re4f88bac64d340.y / ti.TILE_WIDTH;
        ((l += c._r67e7520c6d59d6() * 2),
          (b += c._r4c6bfadd39d2b2() * 2),
          this._rc48cb7ca67aee6._r50f300693e212e(l, b));
      }
    }
    let t = Date.now(),
      i = this._rc48cb7ca67aee6._r0c148637e03364?._re20c98e536caa8() ?? null;
    for (let c of i?._r454908aaf94389() ?? []) {
      let f = c._r8f79a04a0ab07b,
        l = this.var_1678.indexOf(f);
      l > -1 &&
        (this._rc48cb7ca67aee6.roomEngine?._rc8445f4451c0a0(a.GAME_ROOM_ID, f),
        this.var_1678.splice(l, 1));
      let b = this._rd9a4b477089b96.indexOf(f);
      if (b > -1) {
        let h =
          this._rc48cb7ca67aee6.roomEngine
            ?._ra1f5cb56d0c2d8(a.GAME_ROOM_ID, f, RoomObjectCategoryEnum.SNOWBALL)
            ?.getLocation() ?? null;
        (this._rc48cb7ca67aee6.roomEngine?._r4453370c37a1ac(a.GAME_ROOM_ID, f, RoomObjectCategoryEnum.SNOWBALL),
          this._rd9a4b477089b96.splice(b, 1),
          !c.isActive &&
            h != null &&
            (this._rc48cb7ca67aee6.roomEngine?._r848449ccba85c2(a.GAME_ROOM_ID, f, h, RoomObjectCategoryEnum.SNOW_SPLASH),
            this.var_153.push({ id: f, time: t, category: RoomObjectCategoryEnum.SNOW_SPLASH })));
      }
    }
    for (let c = this.var_153.length - 1; c > -1; c--) {
      let f = this.var_153[c];
      t - f.time >= a.SPLASH_LIFE_SPAN_TIME &&
        (this._rc48cb7ca67aee6.roomEngine?._r4453370c37a1ac(a.GAME_ROOM_ID, f.id, f.category),
        this.var_153.splice(c, 1));
    }
    let s = this._rc48cb7ca67aee6._r0c148637e03364?._re20c98e536caa8()._r19b8e6696f2b23(),
      o = !1;
    for (let c of s ?? []) {
      if (c instanceof _l) {
        let f = c.posture === ve.POSTURE_SNOWWAR_RUN;
        if (
          ((o = o || f),
          this.gameObjectId(c),
          c._r8f79a04a0ab07b === this._rc48cb7ca67aee6.ownId)
        ) {
          let l = this._rc48cb7ca67aee6._r0c148637e03364?.getExtension()?._r6e2d6215ef377b() ?? 0;
          this._r3d0e691b11ab87 != null &&
            ((this._r3d0e691b11ab87.timer =
              this._rc48cb7ca67aee6._rd247e134d13984 -
              Math.trunc((this._rc48cb7ca67aee6._rc88f6790a0782a * l) / 1e3)),
            (this._r3d0e691b11ab87.ownScore = c.score),
            (this._r3d0e691b11ab87.snowballs = c.snowballs),
            (this._r3d0e691b11ab87.hitPoints = c.hitPoints));
        }
      }
      (c instanceof wf && this._r2f26f9f9e31a4b(c),
        c instanceof Kz && this._re83590d2febb91(c),
        c instanceof $z && this._r7dec4e0431a0e6(c),
        c instanceof Zz && this._r85532462cc3d16(c));
    }
    (this._r3d0e691b11ab87?.update(e),
      o && !this._r695091ed1950f8
        ? ((this._r695091ed1950f8 = !0), xs.playSound(HabboSoundTypesEnum.GAMES_SW_WALK, Number.MAX_SAFE_INTEGER))
        : !o &&
          this._r695091ed1950f8 &&
          ((this._r695091ed1950f8 = !1), xs.stopSound(HabboSoundTypesEnum.GAMES_SW_WALK)));
    let d = this._rc48cb7ca67aee6._r0774e628edf810();
    d != null &&
      this._rc48cb7ca67aee6.roomEngine?._r75c3b4e7c11b82(
        a.GAME_ROOM_ID,
        d._r8f79a04a0ab07b,
        d.team === 1 ? a.EFFECT_BLUE_TEAM : a.EFFECT_RED_TEAM,
      );
  }
  _r2d3cd8c80b7d7a(e) {
    this._r3d0e691b11ab87?._r2d3cd8c80b7d7a(e);
  }
  _r944f150204708b(e) {
    let r = 0;
    switch (e) {
      case 1:
        r = a.TILE_CURSOR_STATE_TEAM_1;
        break;
      case 2:
        r = a.TILE_CURSOR_STATE_TEAM_2;
        break;
      case 3:
        r = a.TILE_CURSOR_STATE_TEAM_3;
        break;
      case 4:
        r = a.TILE_CURSOR_STATE_TEAM_4;
        break;
    }
    this._rc48cb7ca67aee6.roomEngine?._container(a.GAME_ROOM_ID, r);
  }
  _r9789283ff9852d() {
    this._r3d0e691b11ab87?._r9789283ff9852d();
  }
  startWaitingForSnowball() {
    this._r3d0e691b11ab87?.startWaitingForSnowball();
  }
  flashOwnScore(e) {
    this._r3d0e691b11ab87?.flashOwnScore(e);
  }
  _r9202b5520a2546(e) {
    let r = e.altitude / ti._rb96eee65b59f44,
      t = new k(e.x, e.y, r),
      i = new k(e.direction * 45),
      s = this._rc48cb7ca67aee6.roomEngine?._r05b4d7c9f899e6(e.name) ?? -1,
      o = e.stuffData,
      d = 0,
      c =
        e.stuffData != null ? Number.parseInt(e.stuffData.getLegacyString(), 10) : Number.NaN;
    (Number.isNaN(c) || (d = c),
      this._rc48cb7ca67aee6.roomEngine?._r5f200af79cf909(a.GAME_ROOM_ID, e.id, s, t, i, d, o));
  }
  _r063deefec1fad5 = n((e) => {
    ((this._r552a6cce3f24ed = e.altKey || e.shiftKey), this._r552a6cce3f24ed);
  }, "_r063deefec1fad5");
  _r6e5a9083c38b69() {
    (this._r3d0e691b11ab87?._r02fc0a8ca13e00(), this._r3d0e691b11ab87?.update(1e3));
  }
  gameObjectId(e) {
    let r = e._re4f88bac64d340.x / ti.TILE_WIDTH,
      t = e._re4f88bac64d340.y / ti.TILE_WIDTH,
      i = e._r8f79a04a0ab07b,
      s = e._r316cee6ba708c4(),
      o = ri._r5f2b4969f78a6f(ns.getDirection8(s)),
      d = new k(o, 0, 0);
    if (this.var_1678.indexOf(i) === -1) {
      let f = this._rc48cb7ca67aee6.avatarManager?._r2d55396cf4177f(e.figure);
      if (f == null) return;
      switch (e.team) {
        case 1:
          f.updatePart("ch", 2e4, [1]);
          break;
        case 2:
          f.updatePart("ch", 20001, [1]);
          break;
        default:
          f.updatePart("ch", 2e4, [1]);
          break;
      }
      switch (
        (f.removePart(AvatarFigurePartType.COAT_CHEST),
        this._rc48cb7ca67aee6.roomEngine?._r03c1f621ae28e1(
          a.GAME_ROOM_ID,
          i,
          new k(r, t, 0),
          d,
          o,
          1,
          f.parseFigureString(),
        ),
        this._rc48cb7ca67aee6.roomEngine?._r51ee69fcf18546(a.GAME_ROOM_ID, i, "std"),
        this._rc48cb7ca67aee6.roomEngine?._r93fc9f432e7394(a.GAME_ROOM_ID, i, RoomObjectVariableEnum.AVATAR_IS_PLAYING_GAME, 1),
        this.var_1678.push(i),
        e.visualizationMode)
      ) {
        case ViewMode.GHOST:
          this._r9c04745b000626(this._r03f497a576ad65(i));
          break;
        case ViewMode.INVISIBLE:
          this._r4ec8785e75d11c(this._r03f497a576ad65(i));
          break;
      }
    } else {
      (this._rc48cb7ca67aee6.roomEngine?._rc74c4cf6e79eda(
        a.GAME_ROOM_ID,
        i,
        new k(r, t, 0),
        new k(r, t, 0),
        !1,
        0,
        d,
        o,
      ),
        this._rc48cb7ca67aee6.roomEngine?._r51ee69fcf18546(a.GAME_ROOM_ID, i, e.posture));
      let f = e.posture !== ve.POSTURE_SNOWWAR_DIE_BACK && e.posture !== ve.POSTURE_SNOWWAR_DIE_FRONT;
      this._rc48cb7ca67aee6.roomEngine?._r93fc9f432e7394(
        a.GAME_ROOM_ID,
        i,
        RoomObjectVariableEnum.AVATAR_IS_PLAYING_GAME,
        Number(f),
      );
    }
    let c = this._r03f497a576ad65(i);
    if (c != null) {
      let f = c.getVisualization();
      (f?.getSprite(0) != null && (f.getSprite(0).alpha = e._r049ac0f6c43932 ? 100 : 255),
        e.team !== this._rc48cb7ca67aee6._r0774e628edf810()?.team &&
          (this._rc48cb7ca67aee6.roomEngine?._r1deca76ce4b5a7 === i &&
          !e._r049ac0f6c43932 &&
          !e._rcaafba71916eb2()
            ? this._rc48cb7ca67aee6.roomEngine?._r75c3b4e7c11b82(a.GAME_ROOM_ID, i, a.EFFECT_CROSSHAIR)
            : this._rc48cb7ca67aee6.roomEngine?._r75c3b4e7c11b82(a.GAME_ROOM_ID, i, 0)));
    }
  }
  _r2f26f9f9e31a4b(e) {
    let r = e._r502e71c4c81659.x / ti.TILE_WIDTH,
      t = e._r502e71c4c81659.y / ti.TILE_WIDTH,
      i = e._r502e71c4c81659.z / ti._rb96eee65b59f44,
      s = new k(r, t, i),
      o = e._r8f79a04a0ab07b;
    if (this._rd9a4b477089b96.indexOf(o) === -1) {
      (this._rc48cb7ca67aee6.roomEngine?._r848449ccba85c2(a.GAME_ROOM_ID, o, s, RoomObjectCategoryEnum.SNOWBALL),
        this._rd9a4b477089b96.push(o));
      return;
    }
    this._rc48cb7ca67aee6.roomEngine?._rb2b27399e7f222(a.GAME_ROOM_ID, o, s, RoomObjectCategoryEnum.SNOWBALL);
  }
  _re83590d2febb91(e) {
    let r = this._rc48cb7ca67aee6.roomEngine,
      t = r?._ra1f5cb56d0c2d8(a.GAME_ROOM_ID, e.fuseObjectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    t != null &&
      t.getState(0) !== e.snowballCount &&
      (r?._r418f6f699205eb(a.GAME_ROOM_ID, e.fuseObjectId, null, null, e.snowballCount, null),
      t.setState(e.snowballCount, 0));
  }
  _r7dec4e0431a0e6(e) {
    let r = this._rc48cb7ca67aee6.roomEngine,
      t = r?._ra1f5cb56d0c2d8(a.GAME_ROOM_ID, e.fuseObjectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      i = e.maxSnowballs - e.snowballCount;
    t != null &&
      t.getState(0) !== i &&
      (r?._r418f6f699205eb(a.GAME_ROOM_ID, e.fuseObjectId, null, null, i, null), t.setState(i, 0));
  }
  _r85532462cc3d16(e) {
    let r = this._rc48cb7ca67aee6.roomEngine,
      t = r?._ra1f5cb56d0c2d8(a.GAME_ROOM_ID, e.fuseObjectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    t != null &&
      t.getState(0) !== e.hits &&
      (r?._r418f6f699205eb(a.GAME_ROOM_ID, e.fuseObjectId, null, null, e.hits, null),
      t.setState(e.hits, 0));
  }
  _r03f497a576ad65(e) {
    return (
      this._rc48cb7ca67aee6.roomEngine?._ra1f5cb56d0c2d8(a.GAME_ROOM_ID, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null
    );
  }
  _r9c04745b000626(e) {
    let r = e?.getVisualization();
    if (r != null)
      for (let t = 0; t < r._r07cfc8b3f013c3; t++) {
        let i = r.getSprite(t);
        i != null && (i.blendMode = ie._r655bcbf040f824);
      }
  }
  _r4ec8785e75d11c(e) {
    let r = e?.getVisualization();
    if (r != null)
      for (let t = 0; t < r._r07cfc8b3f013c3; t++) {
        let i = r.getSprite(t);
        i != null && (i.visible = !1);
      }
  }
}
