// Estratto da HabboAirLauncher.deobf.js, riga 82373.

class a extends class_1944 {
  static {
    n(this, "_ic0ec11c880ca56");
  }
  static FORMAT_KEY = _iae7a134fea2fc8._r1f35d7dd2ed16d;
  _state = "";
  _rf63e0c71786ec3 = -1;
  _rf9ad6f84855285 = -1;
  _entries = [];
  get SCORETYPE_LOCALIZATION_KEY_POSTFIX() {
    return this._rf63e0c71786ec3;
  }
  get clearType() {
    return this._rf9ad6f84855285;
  }
  get entries() {
    return this._entries;
  }
  _rf86aa9dd0d70c1(e) {
    ((this._entries = []),
      (this._state = e.readString()),
      (this._rf63e0c71786ec3 = e.readInteger()),
      (this._rf9ad6f84855285 = e.readInteger()));
    let r = e.readInteger();
    for (let t = 0; t < r; t++) {
      let i = new HighScoreData();
      i.score = e.readInteger();
      let s = e.readInteger();
      for (let o = 0; o < s; o++) i.addUser(e.readString());
      this._entries.push(i);
    }
  }
  _r8476f6049cdad6(e) {
    ((this._entries = []),
      super._r8476f6049cdad6(e),
      (this._rf63e0c71786ec3 = e._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_SCORE_TYPE)),
      (this._rf9ad6f84855285 = e._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_CLEAR_TYPE)));
    let r = e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_356);
    for (let t = 0; t < r; t++) {
      let i = new HighScoreData();
      ((i.score = e._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_DATA_ENTRY_BASE_SCORE + t)),
        (i.users = e._r749e70d500190b(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_DATA_ENTRY_BASE_USERS + t) ?? []),
        this._entries.push(i));
    }
  }
  _r22048429087864(e) {
    if (
      (super._r22048429087864(e),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT, a.FORMAT_KEY),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_SCORE_TYPE, this._rf63e0c71786ec3),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_CLEAR_TYPE, this._rf9ad6f84855285),
      this._entries != null)
    ) {
      e.setNumber(RoomObjectVariableEnum.const_356, this._entries.length);
      for (let r = 0; r < this._entries.length; r++) {
        let t = this._entries[r];
        (e.setNumber(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_DATA_ENTRY_BASE_SCORE + r, t.score), e._r2b219306ad31b8(RoomObjectVariableEnum.FURNITURE_HIGHSCORE_DATA_ENTRY_BASE_USERS + r, t.users));
      }
    }
  }
  getLegacyString() {
    return this._state;
  }
}
