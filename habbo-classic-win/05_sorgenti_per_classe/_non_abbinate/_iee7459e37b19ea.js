// Estratto da HabboAirLauncher.deobf.js, riga 299085.

class extends Qr {
  static {
    n(this, "_iee7459e37b19ea");
  }
  initialize(e) {
    (super.initialize(e),
      this._r11e12b4ff1ca8e?.addEventListener?.(RoomToObjectOwnAvatarMoveEvent.MOVE_TO, this._rade35dc5ab01e9));
  }
  _r04bcf029737be6() {
    (this._r11e12b4ff1ca8e?.removeEventListener?.(RoomToObjectOwnAvatarMoveEvent.MOVE_TO, this._rade35dc5ab01e9),
      super._r04bcf029737be6());
  }
  _rade35dc5ab01e9 = n((...e) => {
    let [r] = e;
    r instanceof RoomToObjectOwnAvatarMoveEvent && this._r2eb8558bc8646c(r);
  }, "_rade35dc5ab01e9");
  _r2eb8558bc8646c(e) {
    if (this.object == null) return;
    let r = this.object.getLocation(),
      t = this.object.getDirection(),
      i = this.object.getStringToStringMap(),
      s = e.targetLoc;
    if (r == null || t == null || i == null || s == null) return;
    let o = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693),
      d = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230),
      c = (Math.trunc(t.x + 45) % 360) / 90;
    (c === 1 || c === 3) && ([o, d] = [d, o]);
    let f = s.x >= r.x && s.x < r.x + o && s.y >= r.y && s.y < r.y + d;
    this.object.setState(f ? 1 : 0, 0);
  }
}
