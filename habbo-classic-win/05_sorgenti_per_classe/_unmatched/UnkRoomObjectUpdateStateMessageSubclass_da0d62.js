// Extracted from HabboAirLauncher.deobf.js, line 181143.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ida0d62b5c92010

class extends RoomObjectUpdateStateMessage {
  constructor(r = 0, t = 0) {
    super();
    this._re4a60c8cec49dc = r;
    this.var_4892 = t;
  }
  static {
    n(this, "UnkRoomObjectUpdateStateMessageSubclass_da0d62");
  }
  get effect() {
    return this._re4a60c8cec49dc;
  }
  get _r0f4823a8cace64() {
    return this.var_4892;
  }
}
