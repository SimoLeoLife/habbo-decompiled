// Extracted from HabboAirLauncher.deobf.js, line 160781.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPollUpdateEvent.as
// Obfuscated name: _i212834f3dbf006

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(t, i, s);
    this._id = r;
  }
  static {
    n(this, "RoomWidgetPollUpdateEvent");
  }
  static OFFER = "RWPUW_OFFER";
  static ERROR = "RWPUW_ERROR";
  static CONTENT = "RWPUW_CONTENT";
  var_3375;
  _headline;
  var_3070 = 0;
  _startMessage = "";
  _endMessage = "";
  _questionArray = null;
  _r908bbc69c5d377 = "";
  var_341 = !1;
  get id() {
    return this._id;
  }
  get summary() {
    return this.var_3375;
  }
  set summary(r) {
    this.var_3375 = r;
  }
  get headline() {
    return this._headline;
  }
  set headline(r) {
    this._headline = r;
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
  get _r145756ee730438() {
    return this._r908bbc69c5d377;
  }
  set _r145756ee730438(r) {
    this._r908bbc69c5d377 = r;
  }
  get _rd4e9d9358ab72e() {
    return this.var_341;
  }
  set _rd4e9d9358ab72e(r) {
    this.var_341 = r;
  }
}
