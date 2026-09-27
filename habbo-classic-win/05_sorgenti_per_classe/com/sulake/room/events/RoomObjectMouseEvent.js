// Estratto da HabboAirLauncher.deobf.js, riga 180640.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/events/RoomObjectMouseEvent.as
// Nome offuscato: _ic4963f84724f3a

class extends RoomObjectEvent {
  constructor(r, t, i, s = !1, o = !1, d = !1, c = !1, f = !1, l = !1) {
    super(r, t, f, l);
    this.var_4049 = i;
    this._altKey = s;
    this._ctrlKey = o;
    this._shiftKey = d;
    this.var_5151 = c;
  }
  static {
    n(this, "RoomObjectMouseEvent");
  }
  static ROOM_OBJECT_MOUSE_CLICK = "ROE_MOUSE_CLICK";
  static ROOM_OBJECT_MOUSE_DOUBLE_CLICK = "ROE_MOUSE_DOUBLE_CLICK";
  static ROOM_OBJECT_MOUSE_DOWN = "ROE_MOUSE_DOWN";
  static ROOM_OBJECT_MOUSE_ENTER = "ROE_MOUSE_ENTER";
  static ROOM_OBJECT_MOUSE_LEAVE = "ROE_MOUSE_LEAVE";
  static ROOM_OBJECT_MOUSE_MOVE = "ROE_MOUSE_MOVE";
  var_4930 = 0;
  var_4511 = 0;
  _re4f8ae430aa760 = 0;
  _r0ff8ed99558596 = 0;
  get eventId() {
    return this.var_4049;
  }
  get altKey() {
    return this._altKey;
  }
  get ctrlKey() {
    return this._ctrlKey;
  }
  get shiftKey() {
    return this._shiftKey;
  }
  get buttonDown() {
    return this.var_5151;
  }
  get localX() {
    return this.var_4930;
  }
  set localX(r) {
    this.var_4930 = r;
  }
  get localY() {
    return this.var_4511;
  }
  set localY(r) {
    this.var_4511 = r;
  }
  get _r4667d782ad64ed() {
    return this._re4f8ae430aa760;
  }
  set _r4667d782ad64ed(r) {
    this._re4f8ae430aa760 = r;
  }
  get _r4694aaf1f688a5() {
    return this._r0ff8ed99558596;
  }
  set _r4694aaf1f688a5(r) {
    this._r0ff8ed99558596 = r;
  }
}
