// Estratto da HabboAirLauncher.deobf.js, riga 279744.

class extends Pa {
  static {
    n(this, "_i0b997eb6d55cc2");
  }
  _r31828ef30372fc = 1;
  _r2fac56b649e692 = 0;
  get _r6fa828a0d5537d() {
    return this._r31828ef30372fc;
  }
  _re38d1c4ef1ce7e(e) {
    return (
      (this._r2fac56b649e692 += this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_832) ?? 0),
      (this._r31828ef30372fc = Math.trunc(this._r2fac56b649e692)),
      (this._r2fac56b649e692 -= this._r31828ef30372fc),
      super._re38d1c4ef1ce7e(e)
    );
  }
}
