// Estratto da HabboAirLauncher.deobf.js, riga 143657.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/class_283.as
// Nome offuscato: _iaa3addc1ae913c

class {
    static {
      n(this, "class_283");
    }
    static _softPurgeTriggerMegaBytes = 300;
    static _hardPurgeTriggerMegaBytes = 400;
    static _r0d08cc980d1c52 = 60 * 1e3;
    static var_894 = !1;
    static get _r2f9b5fb1c6e274() {
      return this._softPurgeTriggerMegaBytes;
    }
    static get _r63ef0c032b4f2c() {
      return this._hardPurgeTriggerMegaBytes;
    }
    static get isRunning() {
      return this.var_894;
    }
    static start() {
      this.var_894 ||
        ((this.var_894 = !0),
        globalThis.setTimeout(() => this._rbdd89734374521(), this._r0d08cc980d1c52));
    }
    static stop() {
      this.var_894 = !1;
    }
    static trigger() {
      (Bi._r8dd5eccdbbf8db - Bi._r2c3287252f7494) / 1024 / 1024 > this._softPurgeTriggerMegaBytes &&
        (class_14.purge(),
        (Bi._r8dd5eccdbbf8db - Bi._r2c3287252f7494) / 1024 / 1024 > this._hardPurgeTriggerMegaBytes &&
          this.triggerGC());
    }
    static triggerGC() {
      Bi.pauseForGCIfCollectionImminent(0.25);
    }
    static _rbdd89734374521() {
      this.var_894 &&
        (this.trigger(), globalThis.setTimeout(() => this._rbdd89734374521(), this._r0d08cc980d1c52));
    }
  }
