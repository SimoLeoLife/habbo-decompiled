// Extracted from HabboAirLauncher.deobf.js, line 320753.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandPetData.as
// Obfuscated name: _ie10aa5e41ead8c

class {
  static {
    n(this, "InfoStandPetData");
  }
  var_1655 = 0;
  var_4516 = 0;
  var_4471 = 0;
  var_4434 = 0;
  var_2547 = 0;
  var_4764 = 0;
  var_4538 = 0;
  var_4462 = 0;
  var_4470 = 0;
  _name = "";
  var_3113 = -1;
  _type = 0;
  var_4919 = 0;
  var_39 = null;
  var_4606 = !1;
  var_1514 = 0;
  _ownerName = "";
  var_4405 = !1;
  var_3632 = 0;
  var_700 = 0;
  var_4488 = 0;
  var_3598 = [];
  var_4650 = 0;
  var_4383 = 0;
  var_4568 = !1;
  var_5587 = 0;
  var_4376 = 0;
  var_4422 = 0;
  get name() {
    return this._name;
  }
  get id() {
    return this.var_3113;
  }
  get type() {
    return this._type;
  }
  get race() {
    return this.var_4919;
  }
  get image() {
    return this.var_39;
  }
  get isOwnPet() {
    return this.var_4606;
  }
  get ownerId() {
    return this.var_1514;
  }
  get ownerName() {
    return this._ownerName;
  }
  get canRemovePet() {
    return this.var_4405;
  }
  get age() {
    return this.var_700;
  }
  get breedId() {
    return this.var_4488;
  }
  get skillTresholds() {
    return this.var_3598;
  }
  get accessRights() {
    return this.var_4650;
  }
  get level() {
    return this.var_1655;
  }
  get levelMax() {
    return this.var_4516;
  }
  get experience() {
    return this.var_4471;
  }
  get experienceMax() {
    return this.var_4434;
  }
  get energy() {
    return this.var_2547;
  }
  get energyMax() {
    return this.var_4764;
  }
  get nutrition() {
    return this.var_4538;
  }
  get nutritionMax() {
    return this.var_4462;
  }
  get petRespect() {
    return this.var_4470;
  }
  get roomIndex() {
    return this.var_3632;
  }
  get rarityLevel() {
    return this.var_4383;
  }
  get maxWellBeingSeconds() {
    return this.var_5587;
  }
  get remainingWellBeingSeconds() {
    return this.var_4376;
  }
  get remainingGrowingSeconds() {
    return this.var_4422;
  }
  get hasBreedingPermission() {
    return this.var_4568;
  }
  setData(e) {
    ((this._name = e.name),
      (this.var_3113 = e.id),
      (this._type = e.petType),
      (this.var_4919 = e.petRace),
      (this.var_39 = e.image),
      (this.var_4606 = e.isOwnPet),
      (this.var_1514 = e.ownerId),
      (this._ownerName = e.ownerName),
      (this.var_4405 = e.canRemovePet),
      (this.var_1655 = e.level),
      (this.var_4516 = e.levelMax),
      (this.var_4471 = e.experience),
      (this.var_4434 = e.experienceMax),
      (this.var_2547 = e.energy),
      (this.var_4764 = e.energyMax),
      (this.var_4538 = e.nutrition),
      (this.var_4462 = e.nutritionMax),
      (this.var_4470 = e.petRespect),
      (this.var_3632 = e.roomIndex),
      (this.var_700 = e.age),
      (this.var_4488 = e.breedId),
      (this.var_3598 = e.skillTresholds),
      (this.var_4650 = e.accessRights),
      (this.var_5587 = e.maxWellBeingSeconds),
      (this.var_4376 = e.remainingWellBeingSeconds),
      (this.var_4422 = e.remainingGrowingSeconds),
      (this.var_4383 = e.rarityLevel),
      (this.var_4568 = e.hasBreedingPermission));
  }
}
