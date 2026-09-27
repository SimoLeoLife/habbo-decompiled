// Extracted from HabboAirLauncher.deobf.js, line 159502.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPollEvent.as
// Obfuscated name: _i2f86606dba7d59

class extends RoomSessionEvent {
  constructor(r, t, i) {
    super(r, t);
    this._id = i;
  }
  static {
    n(this, "RoomSessionPollEvent");
  }
  static OFFER = "RSPE_POLL_OFFER";
  static ERROR = "RSPE_POLL_ERROR";
  static CONTENT = "RSPE_POLL_CONTENT";
  _headline;
  var_3375;
  var_3070 = 0;
  _startMessage = "";
  _endMessage = "";
  _questionArray = null;
  var_341 = !1;
  get id() {
    return this._id;
  }
  get headline() {
    return this._headline;
  }
  set headline(r) {
    this._headline = r;
  }
  get summary() {
    return this.var_3375;
  }
  set summary(r) {
    this.var_3375 = r;
  }
  get _r7a88d9adae2ebc() {
    return this.var_3070;
  }
  set _r7a88d9adae2ebc(r) {
    this.var_3070 = r;
  }
  get _ra570877b369758() {
    return this._startMessage;
  }
  set _ra570877b369758(r) {
    this._startMessage = r;
  }
  get _rcc2456a2f18866() {
    return this._endMessage;
  }
  set _rcc2456a2f18866(r) {
    this._endMessage = r;
  }
  get _r062fd979878425() {
    return this._questionArray;
  }
  set _r062fd979878425(r) {
    this._questionArray = r;
  }
  get _rd4e9d9358ab72e() {
    return this.var_341;
  }
  set _rd4e9d9358ab72e(r) {
    this.var_341 = r;
  }
}
