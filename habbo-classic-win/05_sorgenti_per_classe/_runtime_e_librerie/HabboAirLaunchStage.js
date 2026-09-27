// Estratto da HabboAirLauncher.deobf.js, riga 379582.

class extends _i92a395bc65c707 {
    static {
      n(this, "HabboAirLaunchStage");
    }
    _rd15fafc890e7d0;
    _rf07ac6c2d3383f;
    constructor(e, r) {
      (super(),
        (this._rd15fafc890e7d0 = Math.max(1, Math.floor(e))),
        (this._rf07ac6c2d3383f = Math.max(1, Math.floor(r))));
    }
    resize(e, r) {
      ((this._rd15fafc890e7d0 = Math.max(1, Math.floor(e))),
        (this._rf07ac6c2d3383f = Math.max(1, Math.floor(r))));
    }
    get stageWidth() {
      return this._rd15fafc890e7d0;
    }
    get _rcc0ac91bd808af() {
      return this._rf07ac6c2d3383f;
    }
  }
