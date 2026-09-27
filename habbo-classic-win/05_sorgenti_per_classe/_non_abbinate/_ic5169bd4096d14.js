// Estratto da HabboAirLauncher.deobf.js, riga 284331.

class {
  constructor(e, r) {
    this.var_1927 = e;
    this._variableFxRendererRegistry = r;
  }
  static {
    n(this, "_ic5169bd4096d14");
  }
  _r4aad3a9b31708a = new _ifbc44a0f22a526();
  get _r48caee1c574b09() {
    return this._r4aad3a9b31708a;
  }
  get _r56c7191bd7adc5() {
    return this.var_1927;
  }
  get _r4f8149f8fd691b() {
    return this._variableFxRendererRegistry;
  }
  dispose() {
    (this._r4aad3a9b31708a != null && (this._r4aad3a9b31708a.dispose(), (this._r4aad3a9b31708a = null)),
      (this.var_1927 = null),
      (this._variableFxRendererRegistry = null));
  }
}
