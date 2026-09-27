// Extracted from HabboAirLauncher.deobf.js, line 181801.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/messages/RoomObjectVariableFxStatusUpdateMessage.as
// Obfuscated name: _i6e624f83caecdf

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s, o, d, c) {
    super(null, null);
    this.var_3623 = r;
    this._variableId = t;
    this._value = i;
    this._overrideMinValue = s;
    this._overrideMaxValue = o;
    this.var_3191 = d;
    this.var_5533 = c;
  }
  static {
    n(this, "RoomObjectVariableFxStatusUpdateMessage");
  }
  get configId() {
    return this.var_3623;
  }
  get variableId() {
    return this._variableId;
  }
  get value() {
    return this._value;
  }
  get _rd039082a66c6c1() {
    return this._overrideMinValue;
  }
  get _rde47e35540b4cb() {
    return this._overrideMaxValue;
  }
  get extra() {
    return this.var_3191;
  }
  get initialize() {
    return this.var_5533;
  }
}
