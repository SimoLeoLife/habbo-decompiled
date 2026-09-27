// Estratto da HabboAirLauncher.deobf.js, riga 250708.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_3414.as
// Nome offuscato: _i41057468dc9580

class a extends class_2456 {
  static {
    n(this, "class_3414");
  }
  static _r304b0c0dd45d39 = [
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_DUCKET_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
    HabboSoundTypesEnum.SOUND_CREDIT_BALANCE,
  ];
  static PLAY_SOUND_DELAY = 250;
  _originalVolume = 0;
  constructor(e, r) {
    (super(e, r),
      this.plusButton.addEventListener(u.CLICK, this._r9f79a38d94bced),
      this.minusButton.addEventListener(u.CLICK, this._r704002311c7d56),
      this.donateCoinsButton.addEventListener(u.CLICK, this.onDonateCoinsClick));
  }
  onOpen() {
    (super.onOpen(), (this.usernameInput.text = this.tool.sessionDataManager.userName));
  }
  onDonateCoinsClick = n(() => {
    ((this.amount = 1), this._r1fe939a2220c9b(), this.donateCoinsButton.disable());
  }, "onDonateCoinsClick");
  _r1fe939a2220c9b() {
    ((this._originalVolume = this.tool.musicController._ref967bb06ebc0c),
      this._originalVolume < 0.4
        ? (this.tool.musicController._ref967bb06ebc0c = 0.4)
        : this._originalVolume > 0.6 && (this.tool.musicController._ref967bb06ebc0c = 0.6));
    for (let e = 0; e < a._r304b0c0dd45d39.length; e++)
      setTimeout(() => this.playSound(a._r304b0c0dd45d39[e]), e * a.PLAY_SOUND_DELAY);
    (setTimeout(() => this.halfWay(), (a._r304b0c0dd45d39.length * a.PLAY_SOUND_DELAY) / 2),
      setTimeout(() => this._r862c8506862b41(), a._r304b0c0dd45d39.length * a.PLAY_SOUND_DELAY));
  }
  playSound(e) {
    this.tool.musicController.playSound(e);
  }
  halfWay() {
    this.tool.notifications.addItem("${generic.is_this_trax}", NotificationType.SOUND_MACHINE);
  }
  _r862c8506862b41() {
    (this.donateCoinsButton.enable(),
      this.tool._r43032a825e00cd(3),
      this.tool.musicController._ref967bb06ebc0c !== this._originalVolume &&
        (this.tool.musicController._ref967bb06ebc0c = this._originalVolume));
  }
  _r9f79a38d94bced = n(() => {
    this.amount < 99999 && (this.amount = this.amount + 1);
  }, "_r9f79a38d94bced");
  _r704002311c7d56 = n(() => {
    this.amount > 1 && (this.amount = this.amount - 1);
  }, "_r704002311c7d56");
  get amount() {
    return Number.parseInt(this.amountCoinsInput.text, 10) || 0;
  }
  set amount(e) {
    this.amountCoinsInput.text = `${e}`;
  }
  get usernameInput() {
    return this.window.findChildByName("give_coins_username_input");
  }
  get amountCoinsInput() {
    return this.window.findChildByName("amount_coins_input");
  }
  get plusButton() {
    return this.window.findChildByName("plus_btn_coins");
  }
  get minusButton() {
    return this.window.findChildByName("minus_btn_coins");
  }
  get donateCoinsButton() {
    return this.window.findChildByName("add_coins_btn");
  }
}
