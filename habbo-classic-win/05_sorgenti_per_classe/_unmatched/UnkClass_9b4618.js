// Extracted from HabboAirLauncher.deobf.js, line 65227.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9b4618f98f59b3

class a {
  static {
    n(this, "UnkClass_9b4618");
  }
  static MD5 = 1;
  static NULL = 0;
  static SHA1 = 2;
  static getHashSize(e) {
    return [0, 16, 20][e] ?? 0;
  }
  static _r17f02e8a2ec2c1(e) {
    return [0, 48, 40][e] ?? 0;
  }
  static _rf312184dd8d752(e) {
    return e === a.NULL ? null : k2._rf312184dd8d752(["", "md5", "sha1"][e] ?? "");
  }
  static _r13850ee1fb146c(e) {
    return e === a.NULL ? null : k2._r13850ee1fb146c(["", "md5", "sha1"][e] ?? "");
  }
}
