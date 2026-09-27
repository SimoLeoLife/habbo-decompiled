// Estratto da HabboAirLauncher.deobf.js, riga 45630.

class a {
  static {
    n(this, "_ib42ba4de8a99b3");
  }
  static totalMemory = 256 * 1024 * 1024;
  static _r2c3287252f7494 = 128 * 1024 * 1024;
  static _r8dd5eccdbbf8db = a.totalMemory;
  static pauseForGCIfCollectionImminent(e = 0.75) {}
  static _r8c1ed48897d9d3(e) {
    globalThis.navigator?.clipboard?.writeText(e).catch(() => {});
  }
}
