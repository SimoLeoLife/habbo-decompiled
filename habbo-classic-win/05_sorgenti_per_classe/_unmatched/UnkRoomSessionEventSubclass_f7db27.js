// Extracted from HabboAirLauncher.deobf.js, line 159714.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if7db27a877cf3a

class extends RoomSessionEvent {
  constructor(r, t, i = -1) {
    super(r, t);
    this._id = i;
  }
  static {
    n(this, "UnkRoomSessionEventSubclass_f7db27");
  }
  static _r18420565440e28 = "RWPUW_QUESTION_ANSWERED";
  static FINISHED = "RWPUW_QUESION_FINSIHED";
  static _rc081ce8a57e812 = "RWPUW_NEW_QUESTION";
  var_3085 = null;
  var_3649 = -1;
  var_3156 = -1;
  _duration = -1;
  var_469 = null;
  _userId = -1;
  _value;
  var_2540;
  get id() {
    return this._id;
  }
  get _r145756ee730438() {
    return this.var_3085;
  }
  set _r145756ee730438(r) {
    this.var_3085 = r;
  }
  get _r78eb984551f0ac() {
    return this.var_3649;
  }
  set _r78eb984551f0ac(r) {
    this.var_3649 = r;
  }
  get _re812cd9299d86c() {
    return this.var_3156;
  }
  set _re812cd9299d86c(r) {
    this.var_3156 = r;
  }
  get duration() {
    return this._duration;
  }
  set duration(r) {
    this._duration = r;
  }
  get question() {
    return this.var_469;
  }
  set question(r) {
    this.var_469 = r;
  }
  get userId() {
    return this._userId;
  }
  set userId(r) {
    this._userId = r;
  }
  get value() {
    return this._value;
  }
  set value(r) {
    this._value = r;
  }
  get answerCounts() {
    return this.var_2540;
  }
  set answerCounts(r) {
    this.var_2540 = r;
  }
}
