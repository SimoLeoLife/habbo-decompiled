// Extracted from HabboAirLauncher.deobf.js, line 45630.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib42ba4de8a99b3

class a {
  static {
    n(this, "UnkClass_b42ba4");
  }
  static totalMemory = 256 * 1024 * 1024;
  static _r2c3287252f7494 = 128 * 1024 * 1024;
  static _r8dd5eccdbbf8db = a.totalMemory;
  static pauseForGCIfCollectionImminent(e = 0.75) {}
  static _r8c1ed48897d9d3(e) {
    globalThis.navigator?.clipboard?.writeText(e).catch(() => {});
  }
}
