// Extracted from HabboAirLauncher.deobf.js, line 284251.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if29d469b89aa7a

class extends Pa {
  static {
    n(this, "UnkClass_f29d46");
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
