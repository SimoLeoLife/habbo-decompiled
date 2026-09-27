// Extracted from HabboAirLauncher.deobf.js, line 302868.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7bcf97948e1954

class extends BaseHandler {
  static {
    n(this, "UnkBaseHandlerSubclass_7bcf97");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_2114((t) => this.onUsers(t))),
      e.addMessageEvent(new class_2547((t) => this._r45726f0b7eeebc(t))),
      e.addMessageEvent(new UnkMessageEvent_2eb2d5((t) => this._rc03eebb4ddbfbb(t))),
      e.addMessageEvent(new class_2954((t) => this._r933174a4959eb1(t))),
      e.addMessageEvent(new UnkMessageEvent_class_2562((t) => this._r9b3a75bb1f2b44(t))),
      e.addMessageEvent(new UnkMessageEvent_070f79((t) => this._r4322a6d303b99c(t))),
      e.addMessageEvent(new class_3461((t) => this._re28fc462249108(t))),
      e.addMessageEvent(new class_3745((t) => this._rc721cb6b9250f4(t))),
      e.addMessageEvent(new UnkMessageEvent_36dccb((t) => this._r1db735d0cac212(t))),
      e.addMessageEvent(new class_3738((t) => this.onPetFigureUpdate(t))),
      e.addMessageEvent(new class_3195((t) => this._ra4d5ff84fb4ce9(t))),
      e.addMessageEvent(new UnkMessageEvent_1b96fa((t) => this._rc97f9806f97d11(t))),
      e.addMessageEvent(new class_2989((t) => this._r27bcd8758c15d5(t))),
      e.addMessageEvent(new class_2939((t) => this._rf668c1d4b49c78(t))),
      e.addMessageEvent(new class_2805((t) => this._r751bf4e96ca145(t))),
      e.addMessageEvent(new class_2792((t) => this._read6eaa1448e21(t))),
      e.addMessageEvent(new class_3530((t) => this._rd4b370758ae957(t))),
      e.addMessageEvent(new UnkMessageEvent_59d999((t) => this._r7860dfdf5d0004(t))),
      e.addMessageEvent(new UnkMessageEvent_fdf85a((t) => this._r3572400584e82f(t))),
      e.addMessageEvent(new class_3013((t) => this._r174065762b26cb(t))),
      e.addMessageEvent(new class_3339((t) => this._ra42b73fa8f1261(t))),
      e.addMessageEvent(new class_2404((t) => this._r2d1b4606c0c5da(t))));
  }
  getSession() {
    return this.listener?.getSession(this._r48494125bd335d) ?? null;
  }
  _ra42b73fa8f1261(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = t.getUserDataByIndex.userDataManager(r.roomIndex);
    i != null &&
      ((i.groupID = `${r.habboGroupId}`),
      (i.groupName = r._rc51a040212eb56),
      this.dispatch(new $y(t, r.roomIndex, r.habboGroupId, r.status, r._rc51a040212eb56)));
  }
  onUsers(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = !1,
      s = [];
    for (let o = 0; o < r.getUserCount(); o++) {
      let d = r.getUser(o);
      if (d == null) continue;
      let c = new UserData(d.roomIndex);
      ((c.name = d.name),
        (c.custom = d.custom),
        (c.achievementScore = d.achievementScore),
        (c.badgesRank = d.badgesRank),
        (c.figure = d.figure),
        (c.type = d.userType),
        (c.webID = d.webID),
        (c.groupID = d.groupID),
        (c.groupName = d.groupName),
        (c.groupStatus = d.groupStatus),
        (c.sex = d.sex),
        (c.ownerId = d.ownerId),
        (c.ownerName = d.ownerName),
        (c.rarityLevel = d.rarityLevel),
        (c.hasSaddle = d.hasSaddle),
        (c.isRiding = d.isRiding),
        (c.canBreed = d.canBreed),
        (c.canHarvest = d.canHarvest),
        (c.canRevive = d.canRevive),
        (c.hasBreedingPermission = d.hasBreedingPermission),
        (c.petLevel = d.petLevel),
        (c.botSkills = d.botSkills ?? []),
        (c.isModerator = d.isModerator),
        d.userType === 4 && d.ownerId === -1 && d.name === "Macklebee" && (i = !0),
        t.getUserDataByIndex._r1cacdcfc23a2de(d.roomIndex) == null && s.push(c),
        t.getUserDataByIndex._rdc1b3ac0c04f9f(c));
    }
    (i && (Nb.init(250, 5e3), Nb.turnVisualizationOn()), this.dispatch(new H8(t, s)));
  }
  _r2d1b4606c0c5da(e) {
    let r = this.getSession();
    if (r == null) return;
    let t = r.getUserDataByIndex._r1cacdcfc23a2de(e.userId);
    t != null && r.getUserDataByIndex._r3fdc5483852a37(t._r2fdf1f24b1e612, e.result === class_2404.const_659);
  }
  _r45726f0b7eeebc(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && t.getUserDataByIndex._r366d2cdab90d49(r.id);
  }
  _rc03eebb4ddbfbb(e) {
    let r = this.getSession();
    r != null &&
      (r.getUserDataByIndex._r38b21be0f64a25(e.userId, e.selectedBadges),
      this.dispatch(new F8(r, e.userId, e.selectedBadges)));
  }
  _r933174a4959eb1(e) {
    if (e.userName == null || e.userName === "") return;
    let r = this.getSession();
    r != null && this.dispatch(new RoomSessionDoorbellEvent(RoomSessionDoorbellEvent.DOORBELL, r, e.userName));
  }
  _r9b3a75bb1f2b44(e) {
    let r = this.getSession();
    r == null ||
      e.id < 0 ||
      (r.getUserDataByIndex.updateFigure(e.id, e.figure, e.sex, !1, !1),
      r.getUserDataByIndex._r9df68d2ace9988(e.id, e.customInfo),
      r.getUserDataByIndex._r10744a086dde8d(e.id, e.achievementScore),
      r.getUserDataByIndex._r9df10abd3e0ca7(e.id, e.badgesRank),
      this.dispatch(new nI(r, e.id, e.figure, e.sex, e.customInfo ?? "", e.achievementScore, e.badgesRank)));
  }
  _r4322a6d303b99c(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && t.getUserDataByIndex._r28765554969323(r.id, r._r4c7340395c786f);
  }
  _re28fc462249108(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = new PetInfo();
    ((i.petId = r.petId),
      (i.level = r.level),
      (i.levelMax = r.maxLevel),
      (i.experience = r.experience),
      (i.experienceMax = r._r07340d0f9f7b07),
      (i.energy = r.energy),
      (i.energyMax = r._r0149bdd3dc6835),
      (i.nutrition = r.nutrition),
      (i.nutritionMax = r._re00e29e5843d3e),
      (i.ownerId = r.ownerId),
      (i.ownerName = r.ownerName),
      (i.respect = r.respect),
      (i.age = r.age),
      (i.breedId = r.breedId),
      (i.hasFreeSaddle = r.hasFreeSaddle),
      (i.isRiding = r.isRiding),
      (i.canBreed = r.canBreed),
      (i.canHarvest = r.canHarvest),
      (i.rarityLevel = r.rarityLevel),
      (i.canRevive = r.canRevive),
      (i.skillTresholds = r.skillTresholds),
      (i.accessRights = r.accessRights),
      (i.maxWellBeingSeconds = r.maxWellBeingSeconds),
      (i.remainingWellBeingSeconds = r.remainingWellBeingSeconds),
      (i.remainingGrowingSeconds = r.remainingGrowingSeconds),
      (i.hasBreedingPermission = r.hasBreedingPermission),
      this.dispatch(new tI(t, i)));
  }
  onPetFigureUpdate(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = r.figureData;
    if (i == null) return;
    let s = i.figureString;
    (t.getUserDataByIndex.updateFigure(r.roomIndex, s, "", r.hasSaddle, r.isRiding),
      this.dispatch(new rI(t, r.petId, s)));
  }
  _ra4d5ff84fb4ce9(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null &&
      t != null &&
      r.resultData != null &&
      r.otherResultData != null &&
      this.dispatch(new Jy(t, r.resultData, r.otherResultData));
  }
  _r751bf4e96ca145(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null &&
      t != null &&
      r.pet1 != null &&
      r.pet2 != null &&
      this.dispatch(new Yy(t, r._reb3874e706dbb7, r.pet1, r.pet2, r._r8e1bcb37bcabfb, r._r080a825c3e590d));
  }
  _read6eaa1448e21(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && this.dispatch(new Ky(t, r.breedingNestStuffId, r.result));
  }
  _rd4b370758ae957(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && this.dispatch(new Zy(t, r.petId, r._r4420bc8bc1a910));
  }
  _rc97f9806f97d11(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && this.dispatch(new qy(t, r.state, r._rb2023938cee132, r._ra37180683cadb3));
  }
  _r27bcd8758c15d5(e) {
    let r = e.getParser(),
      t = this.getSession();
    r == null ||
      t == null ||
      (t.getUserDataByIndex._r69a524ecab508f(
        r.roomIndex,
        r.canBreed,
        r.canHarvest,
        r.canRevive,
        r.hasBreedingPermission,
      ),
      this.dispatch(
        new iI(
          t,
          r.petId,
          r.canBreed,
          r.canHarvest,
          r.canRevive,
          r.hasBreedingPermission,
        ),
      ));
  }
  _rf668c1d4b49c78(e) {
    let r = e.getParser(),
      t = this.getSession();
    r == null ||
      t == null ||
      (t.getUserDataByIndex._rd7a74e0532f0c2(r.roomIndex, r.level),
      this.dispatch(new aI(t, r.petId, r.level)));
  }
  _rc721cb6b9250f4(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null &&
      t != null &&
      this.dispatch(new eI(t, r.petId, r._r779246794134a5 ?? [], r._r67346f7e899abb ?? []));
  }
  _r1db735d0cac212(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = null;
    switch (r.errorCode) {
      case 0:
        i = RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_HOTEL;
        break;
      case 1:
        i = RoomSessionErrorMessageEvent.PETS_FORBIDDEN_IN_FLAT;
        break;
      case 2:
        i = RoomSessionErrorMessageEvent.MAX_NUMBER_OF_PETS;
        break;
      case 3:
        i = RoomSessionErrorMessageEvent.NO_FREE_TILES_FOR_PET;
        break;
      case 4:
        i = RoomSessionErrorMessageEvent.SELECTED_TILE_NOT_FREE_FOR_PET;
        break;
      case 5:
        i = RoomSessionErrorMessageEvent.MAX_NUMBER_OF_OWN_PETS;
        break;
    }
    i != null && this.dispatch(new RoomSessionErrorMessageEvent(i, t));
  }
  _r7860dfdf5d0004(e) {
    let r = e.getParser(),
      t = this.getSession();
    if (r == null || t == null) return;
    let i = null;
    switch (r.errorCode) {
      case 0:
        i = RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_HOTEL;
        break;
      case 1:
        i = RoomSessionErrorMessageEvent.BOTS_FORBIDDEN_IN_FLAT;
        break;
      case 2:
        i = RoomSessionErrorMessageEvent.BOT_LIMIT_REACHED;
        break;
      case 3:
        i = RoomSessionErrorMessageEvent.const_666;
        break;
      case 4:
        i = RoomSessionErrorMessageEvent.BOT_NAME_NOT_ACCEPTED;
        break;
    }
    i != null && this.dispatch(new RoomSessionErrorMessageEvent(i, t));
  }
  _r3572400584e82f(e) {
    let r = e.getParser(),
      t = this.getSession(),
      i = r?.req;
    t != null && i != null && this.dispatch(new O8(t, i.requestId, i.requestId, i._r19234559776703));
  }
  _r174065762b26cb(e) {
    let r = e.getParser(),
      t = this.getSession();
    r != null && t != null && this.dispatch(new N8(t, r.userId, r.danceStyle));
  }
}
