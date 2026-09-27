// Estratto da HabboAirLauncher.deobf.js, riga 101986.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_64/class_2233.as
// Nome offuscato: _i04ad8da360f4d2

class {
    static {
      n(this, "class_2233");
    }
    static {
      pXr(this, "class_2233");
    }
    static const_903 = "M";
    static const_409 = "F";
    var_3632;
    _x = 0;
    _y = 0;
    _z = 0;
    var_911 = 0;
    _name = "";
    var_3651 = 0;
    var_1562 = "";
    var_1129 = "";
    _r009de807a48d4f = "";
    _achievementScore = 0;
    var_3126 = -1;
    _r5636bb7ff4e931 = 0;
    _rb01ecc756bcf8f = "";
    _r01ed33f9d4c326 = 0;
    _groupName = "";
    _subType = "";
    var_1514 = 0;
    _ownerName = "";
    var_4383 = 0;
    _rbbde006e8290c5 = !1;
    var_4578 = !1;
    var_4676 = !1;
    var_4416 = !1;
    var_4579 = !1;
    var_4568 = !1;
    _r309586b47a3ae6 = 0;
    _r5631c1491039da = "";
    _r6df64aad069244 = null;
    _r910c906a97ef94 = !1;
    var_126 = !1;
    constructor(e) {
      this.var_3632 = e;
    }
    setReadOnly() {
      this.var_126 = !0;
    }
    get roomIndex() {
      return this.var_3632;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this.var_126 || (this._x = e);
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this.var_126 || (this._y = e);
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this.var_126 || (this._z = e);
    }
    get dir() {
      return this.var_911;
    }
    set dir(e) {
      this.var_126 || (this.var_911 = e);
    }
    get name() {
      return this._name;
    }
    set name(e) {
      this.var_126 || (this._name = e);
    }
    get userType() {
      return this.var_3651;
    }
    set userType(e) {
      this.var_126 || (this.var_3651 = e);
    }
    get sex() {
      return this.var_1562;
    }
    set sex(e) {
      this.var_126 || (this.var_1562 = e);
    }
    get figure() {
      return this.var_1129;
    }
    set figure(e) {
      this.var_126 || (this.var_1129 = e);
    }
    get custom() {
      return this._r009de807a48d4f;
    }
    set custom(e) {
      this.var_126 || (this._r009de807a48d4f = e);
    }
    get achievementScore() {
      return this._achievementScore;
    }
    set achievementScore(e) {
      this.var_126 || (this._achievementScore = e);
    }
    get badgesRank() {
      return this.var_3126;
    }
    set badgesRank(e) {
      this.var_126 || (this.var_3126 = e);
    }
    get webID() {
      return this._r5636bb7ff4e931;
    }
    set webID(e) {
      this.var_126 || (this._r5636bb7ff4e931 = e);
    }
    get groupID() {
      return this._rb01ecc756bcf8f;
    }
    set groupID(e) {
      this.var_126 || (this._rb01ecc756bcf8f = e);
    }
    get groupStatus() {
      return this._r01ed33f9d4c326;
    }
    set groupStatus(e) {
      this.var_126 || (this._r01ed33f9d4c326 = e);
    }
    get groupName() {
      return this._groupName;
    }
    set groupName(e) {
      this.var_126 || (this._groupName = e);
    }
    get subType() {
      return this._subType;
    }
    set subType(e) {
      this.var_126 || (this._subType = e);
    }
    get ownerId() {
      return this.var_1514;
    }
    set ownerId(e) {
      this.var_126 || (this.var_1514 = e);
    }
    get ownerName() {
      return this._ownerName;
    }
    set ownerName(e) {
      this.var_126 || (this._ownerName = e);
    }
    get rarityLevel() {
      return this.var_4383;
    }
    set rarityLevel(e) {
      this.var_126 || (this.var_4383 = e);
    }
    get hasSaddle() {
      return this._rbbde006e8290c5;
    }
    set hasSaddle(e) {
      this.var_126 || (this._rbbde006e8290c5 = e);
    }
    get isRiding() {
      return this.var_4578;
    }
    set isRiding(e) {
      this.var_126 || (this.var_4578 = e);
    }
    get canBreed() {
      return this.var_4676;
    }
    set canBreed(e) {
      this.var_126 || (this.var_4676 = e);
    }
    get canHarvest() {
      return this.var_4416;
    }
    set canHarvest(e) {
      this.var_126 || (this.var_4416 = e);
    }
    get canRevive() {
      return this.var_4579;
    }
    set canRevive(e) {
      this.var_126 || (this.var_4579 = e);
    }
    get hasBreedingPermission() {
      return this.var_4568;
    }
    set hasBreedingPermission(e) {
      this.var_126 || (this.var_4568 = e);
    }
    get petLevel() {
      return this._r309586b47a3ae6;
    }
    set petLevel(e) {
      this.var_126 || (this._r309586b47a3ae6 = e);
    }
    get petPosture() {
      return this._r5631c1491039da;
    }
    set petPosture(e) {
      this.var_126 || (this._r5631c1491039da = e);
    }
    get botSkills() {
      return this._r6df64aad069244;
    }
    set botSkills(e) {
      this._r6df64aad069244 = e;
    }
    get isModerator() {
      return this._r910c906a97ef94;
    }
    set isModerator(e) {
      this.var_126 || (this._r910c906a97ef94 = e);
    }
  }
