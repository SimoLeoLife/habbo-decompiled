// Extracted from HabboAirLauncher.deobf.js, line 79942.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9445d638f1ad08

class {
  static {
    n(this, "UnkClass_9445d6");
  }
  _size = 0;
  _r0a6a51440c38fd = [];
  _r8c7123c087cb39 = [];
  constructor(e) {
    (e < 0 && (e = 0), (this._size = e));
    for (let r = 0; r < e; r++) this._r8c7123c087cb39.push(r);
  }
  dispose() {
    ((this._r0a6a51440c38fd = null), (this._r8c7123c087cb39 = null), (this._size = 0));
  }
  _rbae70369dd4f75() {
    if ((this._r8c7123c087cb39?.length ?? 0) > 0) {
      let e = this._r8c7123c087cb39.pop();
      return (this._r0a6a51440c38fd.push(e), e);
    }
    return -1;
  }
  _r4240042bb53ae3(e) {
    let r = this._r0a6a51440c38fd?.indexOf(e) ?? -1;
    r >= 0 && (this._r0a6a51440c38fd.splice(r, 1), this._r8c7123c087cb39.push(e));
  }
}
