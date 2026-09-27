// Estratto da HabboAirLauncher.deobf.js, riga 160458.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetInfoUpdateEvent.as
// Nome offuscato: _ic135e0e959ae03

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c, f, l, b, _ = !1, h = !1) {
    super(a.PET_INFO, _, h);
    this._racfbc053242e76 = r;
    this._rb5fe88454db0da = t;
    this._name = i;
    this._id = s;
    this.var_39 = o;
    this.var_4606 = d;
    this.var_1514 = c;
    this._ownerName = f;
    this.var_3632 = l;
    this.var_4488 = b;
  }
  static {
    n(this, "RoomWidgetPetInfoUpdateEvent");
  }
  static PET_INFO = "RWPIUE_PET_INFO";
  var_1655;
  var_4516;
  var_4471;
  var_4434;
  var_2547;
  var_4764;
  var_4538;
  var_4462;
  var_1357;
  var_4470;
  var_700;
  var_4405;
  var_4559;
  var_4578;
  var_4676;
  var_3598;
  var_4650;
  var_4416;
  var_4579;
  var_4383;
  var_5587;
  var_4376;
  var_4422;
  var_4568;
  get name() {
    return this._name;
  }
  get image() {
    return this.var_39;
  }
  get id() {
    return this._id;
  }
  get petType() {
    return this._racfbc053242e76;
  }
  get petRace() {
    return this._rb5fe88454db0da;
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
  get roomIndex() {
    return this.var_3632;
  }
  get age() {
    return this.var_700;
  }
  get breedId() {
    return this.var_4488;
  }
  get hasFreeSaddle() {
    return this.var_4559;
  }
  get isRiding() {
    return this.var_4578;
  }
  get canBreed() {
    return this.var_4676;
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
  get petRespectLeft() {
    return this.var_1357;
  }
  get petRespect() {
    return this.var_4470;
  }
  get canHarvest() {
    return this.var_4416;
  }
  get canRevive() {
    return this.var_4579;
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
  set level(r) {
    this.var_1655 = r;
  }
  set levelMax(r) {
    this.var_4516 = r;
  }
  set experience(r) {
    this.var_4471 = r;
  }
  set experienceMax(r) {
    this.var_4434 = r;
  }
  set energy(r) {
    this.var_2547 = r;
  }
  set energyMax(r) {
    this.var_4764 = r;
  }
  set nutrition(r) {
    this.var_4538 = r;
  }
  set nutritionMax(r) {
    this.var_4462 = r;
  }
  set petRespectLeft(r) {
    this.var_1357 = r;
  }
  set canRemovePet(r) {
    this.var_4405 = r;
  }
  set petRespect(r) {
    this.var_4470 = r;
  }
  set age(r) {
    this.var_700 = r;
  }
  set hasFreeSaddle(r) {
    this.var_4559 = r;
  }
  set isRiding(r) {
    this.var_4578 = r;
  }
  set canBreed(r) {
    this.var_4676 = r;
  }
  set skillTresholds(r) {
    this.var_3598 = r;
  }
  set accessRights(r) {
    this.var_4650 = r;
  }
  set canHarvest(r) {
    this.var_4416 = r;
  }
  set canRevive(r) {
    this.var_4579 = r;
  }
  set rarityLevel(r) {
    this.var_4383 = r;
  }
  set maxWellBeingSeconds(r) {
    this.var_5587 = r;
  }
  set remainingWellBeingSeconds(r) {
    this.var_4376 = r;
  }
  set remainingGrowingSeconds(r) {
    this.var_4422 = r;
  }
  set hasBreedingPermission(r) {
    this.var_4568 = r;
  }
}
