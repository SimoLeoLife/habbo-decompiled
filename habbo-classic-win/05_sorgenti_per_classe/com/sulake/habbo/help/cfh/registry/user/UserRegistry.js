// Estratto da HabboAirLauncher.deobf.js, riga 233964.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/cfh/registry/user/UserRegistry.as
// Nome offuscato: _i349c7aeb8063d2

class a {
  static {
    n(this, "UserRegistry");
  }
  static MAX_USERS_TO_STORE = 80;
  _registry = new B();
  _roomName = "";
  var_2440 = 0;
  _r449eb66abe4a55 = [];
  _rd6278aa8cdcd3c() {
    return this._registry;
  }
  getEntry(e) {
    return this._registry.getValue(e) ?? null;
  }
  registerRoom(e, r) {
    ((this.var_2440 = e),
      (this._roomName = r),
      this._roomName !== "" && this.addRoomNameForMissing());
  }
  registerUser(e, r, t = "") {
    this._registry.getValue(e) != null && this._registry.remove(e);
    let i = new UserRegistryItem(e, r, t, this.var_2440, this._roomName);
    (this._roomName === "" && this._r449eb66abe4a55.push(e),
      this._registry.add(e, i),
      this._rb3f53e707a0e95());
  }
  get roomName() {
    return this._roomName;
  }
  get roomId() {
    return this.var_2440;
  }
  _rb3f53e707a0e95() {
    for (; this._registry.length > a.MAX_USERS_TO_STORE;) {
      let e = this._registry.getKey(0);
      if (e == null) break;
      this._registry.remove(e);
    }
  }
  addRoomNameForMissing() {
    for (; this._r449eb66abe4a55.length > 0;) {
      let e = this._r449eb66abe4a55.shift();
      if (e == null) continue;
      let r = this._registry.getValue(e);
      r != null && r.roomId === this.var_2440 && (r.roomName = this._roomName);
    }
  }
}
