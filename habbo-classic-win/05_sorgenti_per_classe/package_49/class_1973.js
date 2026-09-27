// Extracted from HabboAirLauncher.deobf.js, line 98373.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_49/class_1973.as
// Obfuscated name: _i26b561996470d6

class a {
    static {
      n(this, "class_1973");
    }
    static {
      IUr(this, "class_1973");
    }
    _campaignCode;
    var_4318;
    var_4270;
    var_2772;
    _id;
    var_3450;
    _type;
    var_4870;
    var_5412;
    var_4347;
    var_4316;
    var_3434;
    _r3a78514f69c71c = 0;
    var_4652;
    _re8f4e7845696e0;
    _chainCode;
    var_5285;
    var_3745;
    var_3621;
    var_3905 = new Date();
    constructor(e) {
      ((this._campaignCode = e.readString()),
        (this.var_4318 = e.readInteger()),
        (this.var_4270 = e.readInteger()),
        (this.var_2772 = e.readInteger()),
        (this._id = e.readInteger()),
        (this.var_3450 = e.readBoolean()),
        (this._type = e.readString()),
        (this.var_4870 = e.readString()),
        (this.var_5412 = e.readInteger()),
        (this.var_4347 = e.readString()),
        (this.var_4316 = e.readInteger()),
        (this.var_3434 = e.readInteger()),
        (this.var_4652 = e.readInteger()),
        (this._re8f4e7845696e0 = e.readString()),
        (this._chainCode = e.readString()),
        (this.var_5285 = e.readBoolean()),
        (this.var_3745 = e.readBoolean()),
        (this.var_3621 = this.var_3745 ? e.readInteger() : 0));
    }
    static getCampaignLocalizationKeyForCode(e) {
      return `quests.${e}`;
    }
    get campaignCode() {
      return this._campaignCode;
    }
    get localizationCode() {
      return this.var_4347;
    }
    get _rd291f50d2dd1b1() {
      return this.var_4318;
    }
    get _r5d0e797f4f62d6() {
      return this.var_4270;
    }
    get activityPointType() {
      return this.var_2772;
    }
    get accepted() {
      return this.var_3450;
    }
    set accepted(e) {
      this.var_3450 = e;
    }
    get id() {
      return this._id;
    }
    set id(e) {
      this._id = e;
    }
    get type() {
      return this._type;
    }
    get _r3d49928e00246a() {
      return this.var_4870;
    }
    get _r12390046c3c77b() {
      return this.var_5412;
    }
    get _r9bc0a180322965() {
      return this.var_4316;
    }
    get _r1370316ec45b24() {
      return this.var_3434;
    }
    get _r05bdfd640eb659() {
      return this.var_4316 === this.var_3434;
    }
    get isSeasonal() {
      return this.var_3745;
    }
    get receiveTime() {
      return this.var_3905;
    }
    get _highestAvailableQuestIndex() {
      return this.var_4652;
    }
    get catalogPageName() {
      return this._re8f4e7845696e0;
    }
    get _r936bd4029e7965() {
      return this._chainCode;
    }
    get easy() {
      return this.var_5285;
    }
    get waitPeriodSeconds() {
      if (this._r3a78514f69c71c < 1) return 0;
      let r = Date.now() - this.var_3905.getTime();
      return Math.max(0, this._r3a78514f69c71c - Math.floor(r / 1e3));
    }
    set waitPeriodSeconds(e) {
      this._r3a78514f69c71c = e;
    }
    get secondsLeft() {
      if (this.var_3621 <= 0) return 0;
      let e = Date.now(),
        r = Math.floor((e - this.var_3905.getTime()) / 1e3);
      return this.var_3621 - r;
    }
    hasLocalizedValue() {
      return a.getCampaignLocalizationKeyForCode(this.campaignCode);
    }
    _re1c380403d8877() {
      return `${this.hasLocalizedValue()}.${this.var_4347}`;
    }
    get completedCampaign() {
      return this._id < 1;
    }
    get lastQuestInCampaign() {
      return this.var_4318 >= this.var_4270;
    }
    get _r808a32b2f4122c() {
      return this.var_3745
        ? `${this._campaignCode}.${this._chainCode}`
        : this._campaignCode;
    }
  }
