// Estratto da HabboAirLauncher.deobf.js, riga 301290.

class extends ue {
  static {
    n(this, "_i0d4faad08c025e");
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
        : i instanceof _i8eba673f438fb6 && r != null
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
    return (r == null && ((r = new _ibf1aa2c19499a6()), this._ra8445e69bcf1f2.add(e, r)), r);
  }
  _r35b530608f472b(e) {
    let r = this._r13bb21095a59a1.getValue(e);
    return (r == null && ((r = new _ie8e5bafca0d615()), this._r13bb21095a59a1.add(e, r)), r);
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
        new _if39d71cba35e7f(
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
        return _ieead78a21202a2;
      case RoomObjectLogicEnum.FURNITURE_MULTIHEIGHT:
        return _i720559d360da30;
      case RoomObjectLogicEnum.FURNITURE_PLACEHOLDER:
        return _ie42040cb3a635e;
      case RoomObjectLogicEnum.USER:
      case RoomObjectLogicEnum.BOT:
      case RoomObjectLogicEnum.RENTABLE_BOT:
        return hee;
      case RoomObjectLogicEnum.PET:
        return _i8eba673f438fb6;
      case RoomObjectLogicEnum.const_855:
        return _i895a1905188281;
      case RoomObjectLogicEnum.FURNITURE_CREDIT:
        return _i0bc3175e9533f6;
      case RoomObjectLogicEnum.FURNITURE_STICKIE:
        return FurnitureStickieLogic;
      case RoomObjectLogicEnum.const_1002:
        return _i1ecbe29bb2d248;
      case RoomObjectLogicEnum.const_772:
        return Aye;
      case RoomObjectLogicEnum.const_246:
        return _idc40cc5cc9b6b7;
      case RoomObjectLogicEnum.FURNITURE_FURNI_CHEST:
        return dye;
      case RoomObjectLogicEnum.FURNITURE_COINS_CHEST:
        return _i271ca8e9a7b329;
      case RoomObjectLogicEnum.const_778:
        return _iebd5ae50466afe;
      case RoomObjectLogicEnum.const_1153:
        return FurnitureDiceLogic;
      case RoomObjectLogicEnum.FURNITURE_HOCKEY_SCORE:
        return FurnitureHockeyScoreLogic;
      case RoomObjectLogicEnum.const_106:
        return _i3b5de99acd8e6d;
      case RoomObjectLogicEnum.const_1279:
        return _ide4760a5506b34;
      case RoomObjectLogicEnum.const_93:
        return _if645d709041f2e;
      case RoomObjectLogicEnum.const_1403:
        return _i6439aedd7c17e0;
      case RoomObjectLogicEnum.FURNITURE_ROOMDIMMER:
        return _i4cf711a6040ac6;
      case RoomObjectLogicEnum.ROOM_TILE_CURSOR:
        return eIe;
      case RoomObjectLogicEnum.const_379:
        return _i917497322ffd57;
      case RoomObjectLogicEnum.const_497:
        return FurnitureSoundMachineLogic;
      case RoomObjectLogicEnum.const_610:
        return FurnitureJukeboxLogic;
      case RoomObjectLogicEnum.const_1147:
        return _id9944b30979167;
      case RoomObjectLogicEnum.FURNITURE_SONG_DISK:
        return _i0d71bd86cf0820;
      case RoomObjectLogicEnum.const_870:
        return Tye;
      case RoomObjectLogicEnum.FURNITURE_CLOTHING_CHANGE:
        return _i8c3dc0f8af7eca;
      case RoomObjectLogicEnum.FURNITURE_COUNTER_CLOCK:
        return _i0740395a1bd99e;
      case RoomObjectLogicEnum.const_105:
        return Fye;
      case RoomObjectLogicEnum.const_1174:
        return _i496d8ac8b187a9;
      case RoomObjectLogicEnum.const_119:
        return _i533b6fdd5a581d;
      case RoomObjectLogicEnum.const_90:
        return FurnitureRoomBillboardLogic;
      case RoomObjectLogicEnum.const_75:
        return FurnitureRoomBackgroundLogic;
      case RoomObjectLogicEnum.const_1380:
        return _i203b6dc07e2d03;
      case RoomObjectLogicEnum.const_993:
        return oye;
      case RoomObjectLogicEnum.ROOM:
        return _i423297daa5b4b3;
      case RoomObjectLogicEnum.FURNITURE_MANNEQUIN:
        return gye;
      case RoomObjectLogicEnum.const_87:
        return hX;
      case RoomObjectLogicEnum.FURNITURE_GROUP_FORUM_TERMINAL:
        return class_2009;
      case RoomObjectLogicEnum.const_349:
        return _i51e260ebd91560;
      case RoomObjectLogicEnum.SNOWBALL:
        return _i62a26ee11c9176;
      case RoomObjectLogicEnum.SNOW_SPLASH:
        return class_2230;
      case RoomObjectLogicEnum.FURNITURE_CUCKOO_CLOCK:
        return FurnitureCuckooClockLogic;
      case RoomObjectLogicEnum.FURNITURE_VOTE_COUNTER:
        return Qye;
      case RoomObjectLogicEnum.const_114:
        return _i19605e0eb99c92;
      case RoomObjectLogicEnum.FURNITURE_SOUNDBLOCK:
        return Vye;
      case RoomObjectLogicEnum.const_1216:
        return _i9d6f7341b2cc80;
      case RoomObjectLogicEnum.const_388:
        return _i1d29a008ce7564;
      case RoomObjectLogicEnum.FURNITURE_PURCHASABLE_CLOTHING:
        return _ib3d2ffe4e56b17;
      case RoomObjectLogicEnum.const_1167:
        return _iae9c9bb81833ac;
      case RoomObjectLogicEnum.FURNITURE_AREA_HIDE:
        return _i71acf5133595cb;
      case RoomObjectLogicEnum.const_651:
        return _i6a197777779f81;
      case RoomObjectLogicEnum.const_1211:
        return _ic32bb3841fda96;
      case RoomObjectLogicEnum.const_488:
        return _i58182c41a2acb0;
      case RoomObjectLogicEnum.const_302:
        return Gwe;
      case RoomObjectLogicEnum.FURNITURE_LOVELOCK_ENGRAVING:
        return _i7297b66b118e45;
      case RoomObjectLogicEnum.FURNITURE_WILD_WEST_WANTED_ENGRAVING:
        return _iabd0c66dd370c9;
      case RoomObjectLogicEnum.FURNITURE_HABBOWEEN_ENGRAVING:
        return _i2d8b70556a3059;
      case RoomObjectLogicEnum.const_74:
        return class_1859;
      case RoomObjectLogicEnum.FURNITURE_HIGH_SCORE:
        return bye;
      case RoomObjectLogicEnum.const_144:
        return _if0ef273109016c;
      case RoomObjectLogicEnum.const_398:
        return _i3e7d3cec56717a;
      case RoomObjectLogicEnum.const_1151:
        return _ifc4f9166121c52;
      case RoomObjectLogicEnum.FURNITURE_CUSTOM_STACK_HEIGHT:
        return _i7cbd0f9136e21e;
      case RoomObjectLogicEnum.FURNITURE_YOUTUBE:
        return _i4d6b2ea4e00ab6;
      case RoomObjectLogicEnum.const_484:
        return _ib136a475f043aa;
      case RoomObjectLogicEnum.const_1344:
        return _iee7459e37b19ea;
      case RoomObjectLogicEnum.const_399:
        return _i35919ed96dfbe4;
      case RoomObjectLogicEnum.FURNITURE_CRAFTING_GIZMO:
        return _if52f53208223b6;
      case RoomObjectLogicEnum.FURNITURE_NFT_CREDIT:
        return xye;
      case RoomObjectLogicEnum.const_804:
        return _i239da90dc368e5;
      default:
        return null;
    }
  }
}
