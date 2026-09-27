// Extracted from HabboAirLauncher.deobf.js, line 376271.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/NineSplitSprite.as
// Obfuscated name: _if399f2635b00ae

class {
  static {
    n(this, "NineSplitSprite");
  }
  _bitmapData;
  _name;
  _r8358cd089f83d0 = 0;
  _r510e5415abea8b;
  _r3424ced1e58de6 = n(() => {
    this._r510e5415abea8b?.();
  }, "_r3424ced1e58de6");
  constructor(e, r, t = null) {
    ((this._bitmapData = e),
      (this._name = r),
      (this._r510e5415abea8b = t),
      e != null &&
        (e.addReference(),
        this._r510e5415abea8b != null && e._r9a52e5987a4092(this._r3424ced1e58de6),
        (this._r8358cd089f83d0 = e.width * e.height * 4)));
  }
  get bitmapData() {
    return this._bitmapData;
  }
  set bitmapData(e) {
    this._bitmapData !== e &&
      (this._bitmapData != null &&
        (this._bitmapData._r8619031e882d28(this._r3424ced1e58de6), this._bitmapData.dispose()),
      (this._bitmapData = e),
      e != null
        ? (e.addReference(),
          this._r510e5415abea8b != null && e._r9a52e5987a4092(this._r3424ced1e58de6),
          (this._r8358cd089f83d0 = e.width * e.height * 4))
        : (this._r8358cd089f83d0 = 0));
  }
  get _rad93e8fcc134d5() {
    return this._r8358cd089f83d0;
  }
  get _ra310f172cb4435() {
    return this._bitmapData?.referenceCount ?? 0;
  }
  get name() {
    return this._name;
  }
  _r05a175021ffa66() {
    (this._bitmapData?._r8619031e882d28(this._r3424ced1e58de6), (this._r510e5415abea8b = null));
  }
  dispose() {
    (this._r05a175021ffa66(),
      this._bitmapData != null && (this._bitmapData.dispose(), (this._bitmapData = null)),
      (this._r8358cd089f83d0 = 0));
  }
}
