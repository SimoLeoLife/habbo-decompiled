// Extracted from HabboAirLauncher.deobf.js, line 307776.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/PetInfoData.as
// Obfuscated name: _ibfe32564695b2a

class {
  static {
    n(this, "PetInfoData");
  }
  age = 0;
  breedId = 0;
  canRemovePet = !1;
  energy = 0;
  energyMax = 0;
  experience = 0;
  experienceMax = 0;
  id = 0;
  isOwnPet = !1;
  level = 0;
  levelMax = 0;
  name = "";
  nutrition = 0;
  nutritionMax = 0;
  ownerId = 0;
  ownerName = "";
  petRace = 0;
  petRespect = 0;
  petRespectLeft = 0;
  petType = 0;
  hasFreeSaddle = !1;
  isRiding = !1;
  canBreed = !1;
  canHarvest = !1;
  canRevive = !1;
  skillTresholds = [];
  accessRights = 0;
  maxWellBeingSeconds = 0;
  remainingWellBeingSeconds = 0;
  remainingGrowingSeconds = 0;
  hasBreedingPermission = !1;
  populate(e) {
    ((this.age = e.age),
      (this.breedId = e.breedId),
      (this.canRemovePet = e.canRemovePet),
      (this.energy = e.energy),
      (this.energyMax = e.energyMax),
      (this.experience = e.experience),
      (this.experienceMax = e.experienceMax),
      (this.id = e.id),
      (this.isOwnPet = e.isOwnPet),
      (this.level = e.level),
      (this.levelMax = e.levelMax),
      (this.name = e.name),
      (this.nutrition = e.nutrition),
      (this.nutritionMax = e.nutritionMax),
      (this.ownerId = e.ownerId),
      (this.ownerName = e.ownerName),
      (this.petRace = e.petRace),
      (this.petRespect = e.petRespect),
      (this.petRespectLeft = e.petRespectLeft),
      (this.petType = e.petType),
      (this.hasFreeSaddle = e.hasFreeSaddle),
      (this.isRiding = e.isRiding),
      (this.canBreed = e.canBreed),
      (this.canRevive = e.canRevive),
      (this.canHarvest = e.canHarvest),
      (this.skillTresholds = e.skillTresholds),
      (this.accessRights = e.accessRights),
      (this.maxWellBeingSeconds = e.maxWellBeingSeconds),
      (this.remainingWellBeingSeconds = e.remainingWellBeingSeconds),
      (this.remainingGrowingSeconds = e.remainingGrowingSeconds),
      (this.hasBreedingPermission = e.hasBreedingPermission));
  }
}
