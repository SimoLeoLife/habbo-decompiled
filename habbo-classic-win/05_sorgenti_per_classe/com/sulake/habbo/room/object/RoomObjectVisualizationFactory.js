// Estratto da HabboAirLauncher.deobf.js, riga 290185.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomObjectVisualizationFactory.as
// Nome offuscato: _i53edf27252db07

class extends ue {
  static {
    n(this, "RoomObjectVisualizationFactory");
  }
  _rd7acc96b774cde;
  _ra9c17888b47a74 = new B();
  _re17d37b945bb5f = new B();
  var_1927;
  _variableFxRendererRegistry;
  _r9b7ed9da0cfeea;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._r9b7ed9da0cfeea = r === 0),
      (this._rd7acc96b774cde = new B()),
      (this.var_1927 = new _id0fbcb77a2d7a4(this.assets)),
      (this._variableFxRendererRegistry = sX.createDefault(this.var_1927)));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderer = e;
        },
        !1,
      ),
    ]);
  }
  dispose() {
    if (!this.disposed) {
      for (let e = 0; e < this._rd7acc96b774cde.length; e++) this._rd7acc96b774cde.getWithIndex(e)?.dispose();
      if ((this._rd7acc96b774cde.dispose(), this._ra9c17888b47a74 != null)) {
        for (let e of this._ra9c17888b47a74.getValues()) e.dispose();
        (this._ra9c17888b47a74.dispose(), (this._ra9c17888b47a74 = null));
      }
      if (this._re17d37b945bb5f != null) {
        for (let e of this._re17d37b945bb5f.getValues()) e.dispose();
        (this._re17d37b945bb5f.dispose(), (this._re17d37b945bb5f = null));
      }
      ((this.var_1927 = null),
        (this._variableFxRendererRegistry = null),
        (this._avatarRenderer = null),
        super.dispose());
    }
  }
  _r0324f21b459e5d(e, r = null) {
    let t = this._r0c2026fce3d769(e);
    if (t == null) return null;
    let i = new t();
    return (
      r != null &&
        (i instanceof aee || i instanceof nee
          ? (i.roomData = this._rd95c9b0c8b2f9a(r))
          : i instanceof Pc && (i.roomData = this._ra2f207e4ce2f0b(r))),
      i ?? null
    );
  }
  getRoomObjectVisualizationData(e, r, t) {
    let i = this._rd7acc96b774cde.getValue(e) ?? null;
    if (i != null) return i;
    let s = this._r7a30ec8f875364(r);
    if (s == null) return null;
    let o = new s();
    return o.initialize(t)
      ? (this._r197c7932a757fb(o), this._r9b7ed9da0cfeea && this._rd7acc96b774cde.add(e, o), o)
      : (o.dispose(), null);
  }
  createGraphicAssetCollection() {
    return new Yge();
  }
  _rd95c9b0c8b2f9a(e) {
    let r = this._ra9c17888b47a74.getValue(e);
    return (
      r == null &&
        ((r = new _ic5169bd4096d14(this.var_1927, this._variableFxRendererRegistry)), this._ra9c17888b47a74.add(e, r)),
      r
    );
  }
  _ra2f207e4ce2f0b(e) {
    let r = this._re17d37b945bb5f.getValue(e);
    return (
      r == null &&
        ((r = new _i2f470e442dfd4c(this.var_1927, this._variableFxRendererRegistry)), this._re17d37b945bb5f.add(e, r)),
      r
    );
  }
  _re0b8e40a96c2ab(e) {
    (this._ra9c17888b47a74.remove(e)?.dispose(), this._re17d37b945bb5f.remove(e)?.dispose());
  }
  _r66cbd667bbe5aa(e, r) {
    for (let t of r) {
      let i = t._r6aa57814c70a62
          ? this._rd95c9b0c8b2f9a(e)._r48caee1c574b09
          : this._ra2f207e4ce2f0b(e)._r48caee1c574b09,
        s = class_2043.getByCategoryAndStyleId(t.categoryId, t.var_780);
      i._rfdb8aa7da48b3e(
        t.configId,
        new G1(
          _i3b0b1a104db30e._r243bb8019f9336(t.categoryId),
          s.serverStyle,
          _i3b0b1a104db30e._r28e293e1c3737e(t.rendererId),
          _i3b0b1a104db30e._rdd4e5a7f936bb0(t.var_954),
          _i3b0b1a104db30e._ra532a30dcc3450(t._r5b3d4f00714e69),
          t._r528f4963a1a948,
          t._r5e470edbfdddac,
          t.extra,
          t.categoryId,
          t.var_780,
          t.rendererId,
        ),
      );
    }
  }
  _raa0e3211cd81ea(e, r) {
    let t = this._rd95c9b0c8b2f9a(e),
      i = this._ra2f207e4ce2f0b(e);
    for (let s of r) (t._r48caee1c574b09._ra9819472296578(s | 0), i._r48caee1c574b09._ra9819472296578(s | 0));
  }
  _r197c7932a757fb(e) {
    if (e instanceof AvatarVisualizationData) {
      e.avatarRenderer = this._avatarRenderer;
      return;
    }
    if (e instanceof AnimatedPetVisualizationData) {
      e.commonAssets = this.assets;
      return;
    }
    if (e instanceof AvatarFurnitureVisualizationData) {
      e.avatarRenderer = this._avatarRenderer;
      return;
    }
    e instanceof _i66eb785a68df77 && (e.assets = this.assets);
  }
  _r0c2026fce3d769(e) {
    switch (e) {
      case RoomObjectVisualizationEnum.ROOM:
        return qve;
      case RoomObjectVisualizationEnum.const_608:
        return _if29d469b89aa7a;
      case RoomObjectVisualizationEnum.USER:
      case RoomObjectVisualizationEnum.BOT:
      case RoomObjectVisualizationEnum.RENTABLE_BOT:
        return aee;
      case RoomObjectVisualizationEnum.PET_ANIMATED:
        return nee;
      case RoomObjectVisualizationEnum.const_1378:
        return Pc;
      case RoomObjectVisualizationEnum.const_172:
        return Pa;
      case RoomObjectVisualizationEnum.const_1307:
        return AnimatedFurnitureVisualization;
      case RoomObjectVisualizationEnum.FURNITURE_POSTER:
        return _ie3f23b48ab6ed6;
      case RoomObjectVisualizationEnum.const_106:
        return xve;
      case RoomObjectVisualizationEnum.FURNITURE_VAL_RANDOMIZER:
        return Dve;
      case RoomObjectVisualizationEnum.const_681:
        return cve;
      case RoomObjectVisualizationEnum.FURNITURE_FURNI_CHEST:
        return gve;
      case RoomObjectVisualizationEnum.FURNITURE_COINS_CHEST:
        return _i8eed08e4d2dee5;
      case RoomObjectVisualizationEnum.const_93:
        return FurniturePlanetSystemVisualization;
      case RoomObjectVisualizationEnum.const_673:
        return Ave;
      case RoomObjectVisualizationEnum.FURNITURE_PARTY_BEAMER:
        return Eve;
      case RoomObjectVisualizationEnum.const_1047:
        return FurnitureCuboidVisualization;
      case RoomObjectVisualizationEnum.const_1149:
        return FurnitureGiftWrappedVisualization;
      case RoomObjectVisualizationEnum.FURNITURE_COUNTER_CLOCK:
        return bve;
      case RoomObjectVisualizationEnum.const_1360:
        return Ove;
      case RoomObjectVisualizationEnum.const_105:
        return Rve;
      case RoomObjectVisualizationEnum.const_119:
        return FurnitureFireworksVisualization;
      case RoomObjectVisualizationEnum.const_670:
        return vve;
      case RoomObjectVisualizationEnum.const_90:
        return FurnitureRoomBillboardVisualization;
      case RoomObjectVisualizationEnum.const_75:
        return FurnitureRoomBackgroundVisualization;
      case RoomObjectVisualizationEnum.FURNITURE_STICKIE:
        return FurnitureStickieVisualization;
      case RoomObjectVisualizationEnum.FURNITURE_MANNEQUIN:
        return Cve;
      case RoomObjectVisualizationEnum.const_87:
        return yve;
      case RoomObjectVisualizationEnum.FURNITURE_GUILD_ISOMETRIC_BADGE:
        return Ive;
      case RoomObjectVisualizationEnum.SNOWBALL:
        return Vve;
      case RoomObjectVisualizationEnum.SNOW_SPLASH:
        return Hve;
      case RoomObjectVisualizationEnum.FURNITURE_VOTE_COUNTER:
        return Lve;
      case RoomObjectVisualizationEnum.const_114:
        return Nve;
      case RoomObjectVisualizationEnum.FURNITURE_SOUNDBLOCK:
        return _i0b997eb6d55cc2;
      case RoomObjectVisualizationEnum.const_74:
        return dve;
      case RoomObjectVisualizationEnum.FURNITURE_YOUTUBE:
        return Fve;
      case RoomObjectVisualizationEnum.FURNITURE_EXTERNAL_IMAGE:
        return FurnitureExternalImageVisualization;
      case RoomObjectVisualizationEnum.FURNITURE_BUILDER_PLACEHOLDER:
        return FurnitureBuilderPlaceholderVisualization;
      default:
        return null;
    }
  }
  _r7a30ec8f875364(e) {
    switch (e) {
      case RoomObjectVisualizationEnum.const_1378:
      case RoomObjectVisualizationEnum.const_1149:
      case RoomObjectVisualizationEnum.const_90:
      case RoomObjectVisualizationEnum.const_75:
      case RoomObjectVisualizationEnum.FURNITURE_STICKIE:
      case RoomObjectVisualizationEnum.FURNITURE_BUILDER_PLACEHOLDER:
        return FurnitureVisualizationData;
      case RoomObjectVisualizationEnum.const_172:
      case RoomObjectVisualizationEnum.FURNITURE_FURNI_CHEST:
      case RoomObjectVisualizationEnum.FURNITURE_COINS_CHEST:
      case RoomObjectVisualizationEnum.const_1307:
      case RoomObjectVisualizationEnum.FURNITURE_POSTER:
      case RoomObjectVisualizationEnum.const_106:
      case RoomObjectVisualizationEnum.FURNITURE_VAL_RANDOMIZER:
      case RoomObjectVisualizationEnum.const_681:
      case RoomObjectVisualizationEnum.const_93:
      case RoomObjectVisualizationEnum.const_673:
      case RoomObjectVisualizationEnum.FURNITURE_PARTY_BEAMER:
      case RoomObjectVisualizationEnum.FURNITURE_COUNTER_CLOCK:
      case RoomObjectVisualizationEnum.const_1360:
      case RoomObjectVisualizationEnum.const_105:
      case RoomObjectVisualizationEnum.const_119:
      case RoomObjectVisualizationEnum.const_670:
      case RoomObjectVisualizationEnum.const_87:
      case RoomObjectVisualizationEnum.FURNITURE_GUILD_ISOMETRIC_BADGE:
      case RoomObjectVisualizationEnum.FURNITURE_VOTE_COUNTER:
      case RoomObjectVisualizationEnum.const_114:
      case RoomObjectVisualizationEnum.FURNITURE_SOUNDBLOCK:
      case RoomObjectVisualizationEnum.const_74:
      case RoomObjectVisualizationEnum.FURNITURE_EXTERNAL_IMAGE:
      case RoomObjectVisualizationEnum.FURNITURE_YOUTUBE:
      case RoomObjectVisualizationEnum.const_608:
        return AnimatedFurnitureVisualizationData;
      case RoomObjectVisualizationEnum.FURNITURE_MANNEQUIN:
        return AvatarFurnitureVisualizationData;
      case RoomObjectVisualizationEnum.ROOM:
        return RoomVisualizationData;
      case RoomObjectVisualizationEnum.USER:
      case RoomObjectVisualizationEnum.BOT:
      case RoomObjectVisualizationEnum.RENTABLE_BOT:
        return AvatarVisualizationData;
      case RoomObjectVisualizationEnum.PET_ANIMATED:
        return AnimatedPetVisualizationData;
      case RoomObjectVisualizationEnum.SNOWBALL:
      case RoomObjectVisualizationEnum.SNOW_SPLASH:
        return _i66eb785a68df77;
      default:
        return null;
    }
  }
}
