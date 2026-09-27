// Estratto da HabboAirLauncher.deobf.js, riga 284251.

class extends Pa {
  static {
    n(this, "_if29d469b89aa7a");
  }
  _r9f171b7c33a869 = 0;
  get _r6010569cef737d() {
    return this._r9f171b7c33a869;
  }
  set _r6010569cef737d(e) {
    this._r9f171b7c33a869 = e;
  }
  getSpriteYOffset(e, r, t) {
    return t === 1
      ? ((this._r6010569cef737d = this.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.TILE_CURSOR_HEIGHT) ?? 0),
        -(this._r6010569cef737d * (e / 2)))
      : super.getSpriteYOffset(e, r, t);
  }
}
