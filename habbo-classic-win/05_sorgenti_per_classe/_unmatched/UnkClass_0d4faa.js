// Extracted from HabboAirLauncher.deobf.js, line 301290.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0d4faad08c025e

class extends ue {
  static {
    n(this, "UnkClass_0d4faa");
  }
  _ree0ef7bcf83c7c = new B();
  _r27b6b1d5a5a8a0 = new B();
  _ra8445e69bcf1f2 = new B();
  _r13bb21095a59a1 = new B();
  _r7073531df3b598 = [];
  constructor(e, r = 0) {
    super(e, r);
  }
  _ra10466e5dd93db(e) {
    if (!this._r7073531df3b598.includes(e)) {
      this._r7073531df3b598.push(e);
      for (let r of this._r27b6b1d5a5a8a0.getKeys()) this.events.addEventListener?.(r, e);
    }
  }
  _r8c852a03f2da5b(e) {
    let r = this._r7073531df3b598.indexOf(e);
    if (!(r < 0)) {
      this._r7073531df3b598.splice(r, 1);
      for (let t of this._r27b6b1d5a5a8a0.getKeys()) this.events.removeEventListener?.(t, e);
    }
  }
  dispose() {
    if (!this.disposed) {
      if (this._ra8445e69bcf1f2 != null) {
        for (let e of this._ra8445e69bcf1f2.getValues()) e.dispose();
        (this._ra8445e69bcf1f2.dispose(), (this._ra8445e69bcf1f2 = null));
      }
      if (this._r13bb21095a59a1 != null) {
        for (let e of this._r13bb21095a59a1.getValues()) e.dispose();
        (this._r13bb21095a59a1.dispose(), (this._r13bb21095a59a1 = null));
      }
      super.dispose();
    }
  }
  _objectFactory(e, r = null) {
    let t = this._rae92a063d23e45(e);
    if (t == null) return null;
    let i = new t();
    if (
      (i instanceof hee && r != null
        ? (i.roomData = this._r487250ffe0962b(r))
        : i instanceof UnkClass_8eba67 && r != null
          ? (i.roomData = this._r487250ffe0962b(r))
          : i instanceof Qr && r != null && (i.roomData = this._r35b530608f472b(r)),
      (i._r11e12b4ff1ca8e = this.events),
      this._ree0ef7bcf83c7c.getValue(e) == null)
    ) {
      this._ree0ef7bcf83c7c.add(e, !0);
      for (let s of i.getEventTypes()) this._r78236caf330b0e(s);
    }
    return i;
  }
  _rb64f6286c672bc() {
    return new RoomObjectManager();
  }
  _r487250ffe0962b(e) {
    let r = this._ra8445e69bcf1f2.getValue(e);
    return (r == null && ((r = new UnkClass_bf1aa2()), this._ra8445e69bcf1f2.add(e, r)), r);
  }
  _r35b530608f472b(e) {
    let r = this._r13bb21095a59a1.getValue(e);
    return (r == null && ((r = new UnkClass_e8e5ba()), this._r13bb21095a59a1.add(e, r)), r);
  }
  _rb7d6f9381d9faf(e) {
    (this._ra8445e69bcf1f2.remove(e)?.dispose(), this._r13bb21095a59a1.remove(e)?.dispose());
  }
  _r66cbd667bbe5aa(e, r) {
    for (let t of r)
      (t._r6aa57814c70a62
        ? this._r487250ffe0962b(e)
        : this._r35b530608f472b(e)
      )._rb4c6d05a1b4331._rfdb8aa7da48b3e(
        new UnkClass_f39d71(
          t.configId,
          t._r6aa57814c70a62,
          t._r09ab560170f112,
          t.var_620,
          t._rb94727c3b64fc3,
          t.showDuration,
        ),
      );
  }
  _raa0e3211cd81ea(e, r) {
    let t = this._r487250ffe0962b(e),
      i = this._r35b530608f472b(e);
    for (let s of r) (t._rb4c6d05a1b4331._ra9819472296578(s | 0), i._rb4c6d05a1b4331._ra9819472296578(s | 0));
  }
  _r78236caf330b0e(e) {
    if (this._r27b6b1d5a5a8a0.getValue(e) == null) {
      this._r27b6b1d5a5a8a0.add(e, !0);
      for (let r of this._r7073531df3b598) this.events.addEventListener?.(e, r);
    }
  }
  _rae92a063d23e45(e) {
    switch (e) {
      case RoomObjectLogicEnum.const_1176:
        return Qr;
      case RoomObjectLogicEnum.const_959:
        return UnkClass_eead78;
      case RoomObjectLogicEnum.FURNITURE_MULTIHEIGHT:
        return UnkClass_720559;
      case RoomObjectLogicEnum.FURNITURE_PLACEHOLDER:
        return UnkClass_e42040;
      case RoomObjectLogicEnum.USER:
      case RoomObjectLogicEnum.BOT:
      case RoomObjectLogicEnum.RENTABLE_BOT:
        return hee;
      case RoomObjectLogicEnum.PET:
        return UnkClass_8eba67;
      case RoomObjectLogicEnum.const_855:
        return UnkClass_895a19;
      case RoomObjectLogicEnum.FURNITURE_CREDIT:
        return UnkClass_0bc317;
      case RoomObjectLogicEnum.FURNITURE_STICKIE:
        return FurnitureStickieLogic;
      case RoomObjectLogicEnum.const_1002:
        return UnkClass_1ecbe2;
      case RoomObjectLogicEnum.const_772:
        return Aye;
      case RoomObjectLogicEnum.const_246:
        return UnkClass_dc40cc;
      case RoomObjectLogicEnum.FURNITURE_FURNI_CHEST:
        return dye;
      case RoomObjectLogicEnum.FURNITURE_COINS_CHEST:
        return UnkInterface_271ca8;
      case RoomObjectLogicEnum.const_778:
        return UnkClass_ebd5ae;
      case RoomObjectLogicEnum.const_1153:
        return FurnitureDiceLogic;
      case RoomObjectLogicEnum.FURNITURE_HOCKEY_SCORE:
        return FurnitureHockeyScoreLogic;
      case RoomObjectLogicEnum.const_106:
        return UnkClass_3b5de9;
      case RoomObjectLogicEnum.const_1279:
        return UnkClass_de4760;
      case RoomObjectLogicEnum.const_93:
        return UnkClass_f645d7;
      case RoomObjectLogicEnum.const_1403:
        return UnkClass_6439ae;
      case RoomObjectLogicEnum.FURNITURE_ROOMDIMMER:
        return UnkClass_4cf711;
      case RoomObjectLogicEnum.ROOM_TILE_CURSOR:
        return eIe;
      case RoomObjectLogicEnum.const_379:
        return UnkObjectLogicBaseSubclass_917497;
      case RoomObjectLogicEnum.const_497:
        return FurnitureSoundMachineLogic;
      case RoomObjectLogicEnum.const_610:
        return FurnitureJukeboxLogic;
      case RoomObjectLogicEnum.const_1147:
        return UnkClass_d9944b;
      case RoomObjectLogicEnum.FURNITURE_SONG_DISK:
        return UnkClass_0d71bd;
      case RoomObjectLogicEnum.const_870:
        return Tye;
      case RoomObjectLogicEnum.FURNITURE_CLOTHING_CHANGE:
        return UnkClass_8c3dc0;
      case RoomObjectLogicEnum.FURNITURE_COUNTER_CLOCK:
        return UnkClass_074039;
      case RoomObjectLogicEnum.const_105:
        return Fye;
      case RoomObjectLogicEnum.const_1174:
        return UnkClass_496d8a;
      case RoomObjectLogicEnum.const_119:
        return UnkClass_533b6f;
      case RoomObjectLogicEnum.const_90:
        return FurnitureRoomBillboardLogic;
      case RoomObjectLogicEnum.const_75:
        return FurnitureRoomBackgroundLogic;
      case RoomObjectLogicEnum.const_1380:
        return UnkClass_203b6d;
      case RoomObjectLogicEnum.const_993:
        return oye;
      case RoomObjectLogicEnum.ROOM:
        return UnkObjectLogicBaseSubclass_423297;
      case RoomObjectLogicEnum.FURNITURE_MANNEQUIN:
        return gye;
      case RoomObjectLogicEnum.const_87:
        return hX;
      case RoomObjectLogicEnum.FURNITURE_GROUP_FORUM_TERMINAL:
        return class_2009;
      case RoomObjectLogicEnum.const_349:
        return UnkClass_51e260;
      case RoomObjectLogicEnum.SNOWBALL:
        return UnkInterface_62a26e;
      case RoomObjectLogicEnum.SNOW_SPLASH:
        return class_2230;
      case RoomObjectLogicEnum.FURNITURE_CUCKOO_CLOCK:
        return FurnitureCuckooClockLogic;
      case RoomObjectLogicEnum.FURNITURE_VOTE_COUNTER:
        return Qye;
      case RoomObjectLogicEnum.const_114:
        return UnkClass_19605e;
      case RoomObjectLogicEnum.FURNITURE_SOUNDBLOCK:
        return Vye;
      case RoomObjectLogicEnum.const_1216:
        return UnkClass_9d6f73;
      case RoomObjectLogicEnum.const_388:
        return UnkClass_1d29a0;
      case RoomObjectLogicEnum.FURNITURE_PURCHASABLE_CLOTHING:
        return UnkClass_b3d2ff;
      case RoomObjectLogicEnum.const_1167:
        return UnkClass_ae9c9b;
      case RoomObjectLogicEnum.FURNITURE_AREA_HIDE:
        return UnkClass_71acf5;
      case RoomObjectLogicEnum.const_651:
        return UnkClass_6a1977;
      case RoomObjectLogicEnum.const_1211:
        return UnkClass_c32bb3;
      case RoomObjectLogicEnum.const_488:
        return UnkClass_58182c;
      case RoomObjectLogicEnum.const_302:
        return Gwe;
      case RoomObjectLogicEnum.FURNITURE_LOVELOCK_ENGRAVING:
        return UnkClass_7297b6;
      case RoomObjectLogicEnum.FURNITURE_WILD_WEST_WANTED_ENGRAVING:
        return UnkClass_abd0c6;
      case RoomObjectLogicEnum.FURNITURE_HABBOWEEN_ENGRAVING:
        return UnkClass_2d8b70;
      case RoomObjectLogicEnum.const_74:
        return class_1859;
      case RoomObjectLogicEnum.FURNITURE_HIGH_SCORE:
        return bye;
      case RoomObjectLogicEnum.const_144:
        return UnkClass_f0ef27;
      case RoomObjectLogicEnum.const_398:
        return UnkClass_3e7d3c;
      case RoomObjectLogicEnum.const_1151:
        return UnkClass_fc4f91;
      case RoomObjectLogicEnum.FURNITURE_CUSTOM_STACK_HEIGHT:
        return UnkClass_7cbd0f;
      case RoomObjectLogicEnum.FURNITURE_YOUTUBE:
        return UnkClass_4d6b2e;
      case RoomObjectLogicEnum.const_484:
        return UnkClass_b136a4;
      case RoomObjectLogicEnum.const_1344:
        return UnkClass_ee7459;
      case RoomObjectLogicEnum.const_399:
        return UnkClass_35919e;
      case RoomObjectLogicEnum.FURNITURE_CRAFTING_GIZMO:
        return UnkClass_f52f53;
      case RoomObjectLogicEnum.FURNITURE_NFT_CREDIT:
        return xye;
      case RoomObjectLogicEnum.const_804:
        return UnkClass_239da9;
      default:
        return null;
    }
  }
}
