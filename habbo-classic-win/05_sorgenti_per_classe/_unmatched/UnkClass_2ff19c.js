// Extracted from HabboAirLauncher.deobf.js, line 200507.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2ff19c5d0969b6

class {
  constructor(e) {
    this.var_82 = e;
    (this.var_82?.roomSessionManager?.events.addEventListener?.(
      RoomSessionEvent.const_481,
      this._r4fe8d268e491c8,
    ),
      this.var_82?.roomSessionManager?.events.addEventListener?.(
        RoomSessionEvent.const_215,
        this._r3ca0322e6d2962,
      ));
  }
  static {
    n(this, "UnkClass_2ff19c");
  }
  dispose() {
    this.disposed ||
      (this.var_82?.roomSessionManager?.events.removeEventListener?.(
        RoomSessionEvent.const_481,
        this._r4fe8d268e491c8,
      ),
      this.var_82?.roomSessionManager?.events.removeEventListener?.(
        RoomSessionEvent.const_215,
        this._r3ca0322e6d2962,
      ),
      (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  _r4fe8d268e491c8 = n((e) => {
    this.var_82?._r0ff913ec7096db();
  }, "_r4fe8d268e491c8");
  _r3ca0322e6d2962 = n((e) => {
    this.var_82?._rd542f3aec5735e();
  }, "_r3ca0322e6d2962");
}
