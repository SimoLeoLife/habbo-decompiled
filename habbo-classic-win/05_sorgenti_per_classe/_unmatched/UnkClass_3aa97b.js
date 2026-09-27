// Extracted from HabboAirLauncher.deobf.js, line 58751.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3aa97bcbee2828

class {
  static {
    n(this, "UnkClass_3aa97b");
  }
  static _softPurgeTriggerMegaBytes = 300;
  static _hardPurgeTriggerMegaBytes = 400;
  static _r0d08cc980d1c52 = 60 * 1e3;
  static var_894 = !1;
  static get _r2f9b5fb1c6e274() {
    return this._softPurgeTriggerMegaBytes;
  }
  static set _r2f9b5fb1c6e274(e) {
    this._softPurgeTriggerMegaBytes = e;
  }
  static get _r63ef0c032b4f2c() {
    return this._hardPurgeTriggerMegaBytes;
  }
  static set _r63ef0c032b4f2c(e) {
    this._hardPurgeTriggerMegaBytes = Math.max(e, this._softPurgeTriggerMegaBytes);
  }
  static get _rfb52bc2205d09c() {
    return this._r0d08cc980d1c52;
  }
  static set _rfb52bc2205d09c(e) {
    this._r0d08cc980d1c52 = e;
  }
  static get isRunning() {
    return this.var_894;
  }
  static get _ra53e12518f55c2() {
    return Hv.majorVersion > 10 || (Hv.majorVersion === 10 && Hv._r5fd4f7ae733b7a >= 1);
  }
  static start() {
    this.var_894 ||
      (this._ra53e12518f55c2 ||
        ((this._r0d08cc980d1c52 *= 2),
        (this._softPurgeTriggerMegaBytes = 0),
        (this._hardPurgeTriggerMegaBytes = Number.MAX_SAFE_INTEGER)),
      globalThis.setTimeout(this._re806f0e39e6730, this._r0d08cc980d1c52),
      (this.var_894 = !0));
  }
  static stop() {
    this.var_894 = !1;
  }
  static trigger() {
    let e = Bi;
    if (
      (this._ra53e12518f55c2
        ? ((e.totalMemory ?? 0) - (e._r2c3287252f7494 ?? 0)) / 1024 / 1024
        : this._r2f9b5fb1c6e274 + 1) <= this._r2f9b5fb1c6e274
    )
      return;
    let t = _ia411d8d8194a3a();
    (class_14.purge(),
      (this._ra53e12518f55c2 ? ((e.totalMemory ?? 0) - (e._r2c3287252f7494 ?? 0)) / 1024 / 1024 : 0) >
        this._hardPurgeTriggerMegaBytes && this.triggerGC());
  }
  static triggerGC() {
    Bi.pauseForGCIfCollectionImminent(0.25);
  }
  static _re806f0e39e6730 = n(() => {
    this.var_894 &&
      (this.trigger(), globalThis.setTimeout(this._re806f0e39e6730, this._r0d08cc980d1c52));
  }, "_re806f0e39e6730");
}
