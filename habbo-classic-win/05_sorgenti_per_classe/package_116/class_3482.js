// Estratto da HabboAirLauncher.deobf.js, riga 104422.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_116/class_3482.as
// Nome offuscato: _ib0515c025827b4

class {
    static {
      n(this, "class_3482");
    }
    static {
      $Kr(this, "class_3482");
    }
    var_3113 = -1;
    _name = "";
    var_1655 = 0;
    var_1730 = 0;
    var_4471 = 0;
    var_2547 = 0;
    var_4538 = 0;
    var_4683 = 0;
    var_5013 = 0;
    var_5725 = 0;
    var_4392 = 0;
    var_1514 = 0;
    _ownerName = "";
    var_700 = 0;
    var_4488 = 0;
    var_4559 = !1;
    var_4578 = !1;
    var_4676 = !1;
    var_4416 = !1;
    var_4579 = !1;
    var_5587 = 0;
    var_4376 = 0;
    var_4422 = 0;
    var_3598 = [];
    var_4650 = 0;
    var_4383 = 0;
    var_4568 = !1;
    get petId() {
      return this.var_3113;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this.var_1655;
    }
    get maxLevel() {
      return this.var_1730;
    }
    get experience() {
      return this.var_4471;
    }
    get energy() {
      return this.var_2547;
    }
    get nutrition() {
      return this.var_4538;
    }
    get _r07340d0f9f7b07() {
      return this.var_4683;
    }
    get _r0149bdd3dc6835() {
      return this.var_5013;
    }
    get _re00e29e5843d3e() {
      return this.var_5725;
    }
    get respect() {
      return this.var_4392;
    }
    get ownerId() {
      return this.var_1514;
    }
    get ownerName() {
      return this._ownerName;
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
    get canHarvest() {
      return this.var_4416;
    }
    get canRevive() {
      return this.var_4579;
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
    get skillTresholds() {
      return this.var_3598;
    }
    get accessRights() {
      return this.var_4650;
    }
    get rarityLevel() {
      return this.var_4383;
    }
    get hasBreedingPermission() {
      return this.var_4568;
    }
    flush() {
      return ((this.var_3113 = -1), (this.var_3598 = []), !0);
    }
    parse(e) {
      if (!e) return !1;
      ((this.var_3113 = e.readInteger()),
        (this._name = e.readString()),
        (this.var_1655 = e.readInteger()),
        (this.var_1730 = e.readInteger()),
        (this.var_4471 = e.readInteger()),
        (this.var_4683 = e.readInteger()),
        (this.var_2547 = e.readInteger()),
        (this.var_5013 = e.readInteger()),
        (this.var_4538 = e.readInteger()),
        (this.var_5725 = e.readInteger()),
        (this.var_4392 = e.readInteger()),
        (this.var_1514 = e.readInteger()),
        (this.var_700 = e.readInteger()),
        (this._ownerName = e.readString()),
        (this.var_4488 = e.readInteger()),
        (this.var_4559 = e.readBoolean()),
        (this.var_4578 = e.readBoolean()));
      let r = e.readInteger();
      this.var_3598 = [];
      for (let t = 0; t < r; t++) this.var_3598.push(e.readInteger());
      return (
        this.var_3598.sort((t, i) => t - i),
        (this.var_4650 = e.readInteger()),
        (this.var_4676 = e.readBoolean()),
        (this.var_4416 = e.readBoolean()),
        (this.var_4579 = e.readBoolean()),
        (this.var_4383 = e.readInteger()),
        (this.var_5587 = e.readInteger()),
        (this.var_4376 = e.readInteger()),
        (this.var_4422 = e.readInteger()),
        (this.var_4568 = e.readBoolean()),
        !0
      );
    }
  }
