// Extracted from HabboAirLauncher.deobf.js, line 221219.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieb99a8ffc41b78

class {
  static {
    n(this, "UnkClass_eb99a8");
  }
  static _r0080f43aacb4f3(e) {
    let r = e;
    r === 0 && (r = -1);
    let t = r << 13;
    return ((r ^= t), (t = r >> 17), (r ^= t), (t = r << 5), (r ^= t), r);
  }
  static _rc9f490a161ca4e(e, r) {
    return r === 0 ? 0 : Math.abs(e) % r;
  }
  static _r96bea614a28a03(e) {
    let r = "";
    for (let t = 31; t >= 0; t--) r += (e & (1 << t)) > 0 ? "1" : "0";
    return r;
  }
}
