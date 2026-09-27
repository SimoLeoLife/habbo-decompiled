// Extracted from HabboAirLauncher.deobf.js, line 29072.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i05394ecc0c0c4d

class extends EventDispatcherWrapper {
  constructor(r, t = 0) {
    super();
    this.delay = r;
    this.repeatCount = t;
  }
  static {
    n(this, "UnkEventDispatcherWrapperSubclass_05394e");
  }
  _r6e0b082452568f = null;
  _rdf3dbbec26e6b1 = 0;
  get running() {
    return this._r6e0b082452568f != null;
  }
  start() {
    this.running ||
      (this._r6e0b082452568f = setInterval(() => {
        ((this._rdf3dbbec26e6b1 += 1),
          this.dispatchEvent(new DeBouncer(DeBouncer.addEventListener)),
          this.repeatCount > 0 &&
            this._rdf3dbbec26e6b1 >= this.repeatCount &&
            (this.stop(), this.dispatchEvent(new DeBouncer(DeBouncer._rf33144eac61595))));
      }, this.delay));
  }
  stop() {
    !this.running ||
      this._r6e0b082452568f == null ||
      (clearInterval(this._r6e0b082452568f), (this._r6e0b082452568f = null));
  }
  reset() {
    (this.stop(), (this._rdf3dbbec26e6b1 = 0));
  }
}
