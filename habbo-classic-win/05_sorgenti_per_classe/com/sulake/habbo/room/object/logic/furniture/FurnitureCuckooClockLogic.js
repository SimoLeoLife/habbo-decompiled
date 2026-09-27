// Estratto da HabboAirLauncher.deobf.js, riga 299261.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureCuckooClockLogic.as
// Nome offuscato: _i7f5c093fe1ca11

class extends _ieead78a21202a2 {
  static {
    n(this, "FurnitureCuckooClockLogic");
  }
  _state = -1;
  _rc8047af3b949ad = null;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    r != null
      ? (this._state !== -1 &&
          r.state !== this._state &&
          this.playSoundAt(this._rc8047af3b949ad?.z ?? 0),
        (this._state = r.state))
      : e?.loc != null && (this._rc8047af3b949ad = e.loc);
  }
  playSoundAt(e) {
    if (this.object == null) return;
    let r = Math.pow(2, e - 1.2);
    this._r11e12b4ff1ca8e?.dispatchEvent?.(
      new RoomObjectPlaySoundIdEvent(RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH, this.object, "FURNITURE_cuckoo_clock", r),
    );
  }
}
