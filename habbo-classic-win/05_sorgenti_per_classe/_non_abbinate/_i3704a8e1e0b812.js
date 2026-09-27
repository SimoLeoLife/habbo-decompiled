// Estratto da HabboAirLauncher.deobf.js, riga 337804.

class a {
  constructor(e, r, t, i, s) {
    this._soundManager = e;
    this._r8976fb174e3935 = r;
    this._events = t;
    this._roomEvents = i;
    this.var_36 = s;
    this._messageEvents = [
      new class_3018(a.onSoundSettingsEvent(this._r13aeab341440e9)),
      new class_3616(a.onSoundSettingsEvent(this._r8e14010587e42d)),
    ];
    for (let o of this._messageEvents) this.var_36?.addMessageEvent(o);
    (this._events?.addEventListener?.(SoundCompleteEvent.TRAX_SONG_COMPLETE, this._r6078c963e14b5a),
      this._events?.addEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent),
      this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_ON, this._r6096d124710a45),
      this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_OFF, this._r9715307da3ff8e));
  }
  static {
    n(this, "_i3704a8e1e0b812");
  }
  _r83c20b7ca72018 = -1;
  _rc7681da0143f23 = [];
  _r2969c6ad680a7c = !1;
  _disposed = !1;
  _messageEvents;
  get disposed() {
    return this._disposed;
  }
  get priority() {
    return _ia57980bbc2be8f._r91444358db0d2d;
  }
  get length() {
    return this._rc7681da0143f23.length;
  }
  get _r306a305681bfdc() {
    return -1;
  }
  get _rd788ebdf380b70() {
    return this._r83c20b7ca72018;
  }
  get _rd20fc4247cac6a() {
    return this._r2969c6ad680a7c;
  }
  set _r306a305681bfdc(e) {}
  dispose() {
    if (!this._disposed) {
      if (
        (this._r2969c6ad680a7c && this._re993ab81315b57(),
        (this._soundManager = null),
        this.var_36 != null)
      )
        for (let e of this._messageEvents) (this.var_36.removeMessageEvent(e), e.dispose());
      ((this._messageEvents = []),
        (this.var_36 = null),
        (this._rc7681da0143f23 = []),
        (this._r8976fb174e3935 = null),
        this._events?.removeEventListener?.(SoundCompleteEvent.TRAX_SONG_COMPLETE, this._r6078c963e14b5a),
        this._events?.removeEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent),
        (this._events = null),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_ON, this._r6096d124710a45),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_OFF, this._r9715307da3ff8e),
        (this._roomEvents = null),
        (this._disposed = !0));
    }
  }
  _r6096d124710a45 = n((e) => {
    this._r18f9cab6e5a0e0();
  }, "_r6096d124710a45");
  _r9715307da3ff8e = n((e) => {
    this._re993ab81315b57();
  }, "_r9715307da3ff8e");
  _r18f9cab6e5a0e0() {
    if (!this._r2969c6ad680a7c) {
      if (this._rc7681da0143f23.length === 0) {
        (this.requestPlayList(), (this._r2969c6ad680a7c = !0));
        return;
      }
      (this._re993ab81315b57(),
        (this._r83c20b7ca72018 = -1),
        (this._r2969c6ad680a7c = !0),
        this._r22abd3c13d6bf5());
    }
  }
  _rffc9d39511a3ee(e) {
    if (this._r83c20b7ca72018 === e) {
      this._r4e0448b3265fcc(this._r83c20b7ca72018);
      let r = this._r335b3162b53498();
      r != null && this._r8976fb174e3935?._r18957e93f8be27(r.id);
    }
  }
  _re993ab81315b57() {
    ((this._r83c20b7ca72018 = -1),
      (this._r2969c6ad680a7c = !1),
      this._r8976fb174e3935?.stop(_ia57980bbc2be8f._r91444358db0d2d));
  }
  _ra07b9a10d6996f(e) {}
  addItem(e, r = 0) {
    return -1;
  }
  _r5d1f35c21bd86d(e, r) {}
  removeItem(e) {}
  _r6078c963e14b5a = n((e) => {
    e.id === this._r83c20b7ca72018 && this._r22abd3c13d6bf5();
  }, "_r6078c963e14b5a");
  onSongInfoReceivedEvent = n((e) => {
    if (this._rc7681da0143f23.length !== 0) {
      for (let r = 0; r < this._rc7681da0143f23.length; r++)
        if (this._rc7681da0143f23[r].id === e.id) {
          let i = this._r8976fb174e3935?._r716cd8f1931469(e.id);
          i != null && (this._rc7681da0143f23[r] = i);
          return;
        }
    }
  }, "onSongInfoReceivedEvent");
  _r22abd3c13d6bf5() {
    let e = this._r335b3162b53498();
    e != null && ((this._r83c20b7ca72018 = e.id), this._r4e0448b3265fcc(this._r83c20b7ca72018));
  }
  _r4e0448b3265fcc(e) {
    let r = this._rbbf330459128be(e);
    if (r == null) return;
    let t = r.startPlayHeadPos;
    ((r.startPlayHeadPos = 0), this._r8976fb174e3935?._r327803e778efff(e, _ia57980bbc2be8f._r91444358db0d2d, t, 0, 0, 0));
  }
  _r335b3162b53498() {
    if (this._rc7681da0143f23.length === 0) return null;
    let e = 0;
    for (let r = 0; r < this._rc7681da0143f23.length; r++)
      this._rc7681da0143f23[r].id === this._r83c20b7ca72018 && (e = r + 1);
    return (e >= this._rc7681da0143f23.length && (e = 0), this._rc7681da0143f23[e] ?? null);
  }
  getEntry(e) {
    return e < 0 || e >= this._rc7681da0143f23.length ? null : (this._rc7681da0143f23[e] ?? null);
  }
  _rbbf330459128be(e) {
    for (let r of this._rc7681da0143f23) if (r.id === e) return r;
    return null;
  }
  static onSoundSettingsEvent(e) {
    return (...r) => {
      e(r[0]);
    };
  }
  requestPlayList() {
    this.var_36?.send(new _iba0555195a66cf());
  }
  _r805275843aaed9(e) {
    return e.map((r) => new _i044760197c5b0d(r.id, r.length, r.name, r.creator, null));
  }
  _r13aeab341440e9 = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_4070);
    if (t == null) return;
    let i = t._r324a52e782ac7d,
      s = this._r805275843aaed9(t._r7469b99b1f3a7b);
    if (s.length === 0) return;
    this._rc7681da0143f23 = s;
    let o = 0;
    for (let c of s) o += c.length;
    (i < 0 && (i = 0), (i = i % o));
    let d = null;
    for (let c of s)
      if (i > c.length) i -= c.length;
      else {
        ((this._r83c20b7ca72018 = c.id), (c.startPlayHeadPos = i / 1e3), (d = c));
        break;
      }
    (this._events?.dispatchEvent?.(new PlayListStatusEvent(PlayListStatusEvent.PLAY_LIST_UPDATED)),
      d != null && this._r2969c6ad680a7c && this._r4e0448b3265fcc(d.id));
  }, "_r13aeab341440e9");
  _r8e14010587e42d = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_4009);
    if (t == null) return;
    let i = t.entry;
    if (i == null) return;
    let s = new _i044760197c5b0d(i.id, i.length, i.name, i.creator, null);
    (this._rc7681da0143f23.push(s),
      this._events?.dispatchEvent?.(new PlayListStatusEvent(PlayListStatusEvent.PLAY_LIST_UPDATED)),
      this._r2969c6ad680a7c &&
        (this._rc7681da0143f23.length === 1 ? this._r4e0448b3265fcc(s.id) : this._rffc9d39511a3ee(s.id)));
  }, "_r8e14010587e42d");
}
