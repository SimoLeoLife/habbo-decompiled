// Estratto da HabboAirLauncher.deobf.js, riga 337633.

class a {
  constructor(e, r, t, i) {
    this._soundManager = e;
    this._r8976fb174e3935 = r;
    this._events = t;
    this.var_36 = i;
    this._messageEvents = [
      new class_2494(a.onSoundSettingsEvent(this._r6477638ef4a962)),
      new class_3407(a.onSoundSettingsEvent(this._r24af2faae5872f)),
      new _i09c27a840c1984(a.onSoundSettingsEvent(this._r588c96143a5b38)),
    ];
    for (let s of this._messageEvents) this.var_36?.addMessageEvent(s);
    (this._events?.addEventListener?.(SoundCompleteEvent.TRAX_SONG_COMPLETE, this._r6078c963e14b5a),
      this._r8976fb174e3935?.events.addEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent));
  }
  static {
    n(this, "_iafc579740e8549");
  }
  _disposed = !1;
  _r2969c6ad680a7c = !1;
  _entries = [];
  _r83c20b7ca72018 = -1;
  _rd74d40ef9cd2fd = [];
  _messageEvents;
  _r51095e88b04015 = -1;
  get priority() {
    return _ia57980bbc2be8f._r91444358db0d2d;
  }
  get _rd788ebdf380b70() {
    return this._r83c20b7ca72018;
  }
  get _r306a305681bfdc() {
    return this._r51095e88b04015;
  }
  get disposed() {
    return this._disposed;
  }
  get _rd20fc4247cac6a() {
    return this._r2969c6ad680a7c;
  }
  get length() {
    return this._entries.length;
  }
  dispose() {
    if (!this._disposed) {
      if (
        (this._re993ab81315b57(),
        this._r8976fb174e3935?.events.removeEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent),
        (this._r8976fb174e3935 = null),
        (this._soundManager = null),
        this.var_36 != null)
      )
        for (let e of this._messageEvents) (this.var_36.removeMessageEvent(e), e.dispose());
      ((this._messageEvents = []),
        (this.var_36 = null),
        this._events?.removeEventListener?.(SoundCompleteEvent.TRAX_SONG_COMPLETE, this._r6078c963e14b5a),
        (this._events = null),
        (this._disposed = !0));
    }
  }
  _re993ab81315b57() {
    (this._r8976fb174e3935?.stop(this.priority),
      (this._r83c20b7ca72018 = -1),
      (this._r51095e88b04015 = -1),
      (this._r2969c6ad680a7c = !1));
  }
  requestPlayList() {
    this.var_36?.send(new _i095739533b458e());
  }
  getEntry(e) {
    return e < 0 || e >= this._entries.length ? null : (this._entries[e] ?? null);
  }
  static onSoundSettingsEvent(e) {
    return (...r) => {
      e(r[0]);
    };
  }
  _r6078c963e14b5a = n((e) => {}, "_r6078c963e14b5a");
  _r6477638ef4a962 = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_3906);
    t != null &&
      ((this._r2969c6ad680a7c = t._ra415d261ed4b67 !== -1),
      t._ra415d261ed4b67 >= 0
        ? (this._r8976fb174e3935?._r327803e778efff(
            t._ra415d261ed4b67,
            _ia57980bbc2be8f._r91444358db0d2d,
            t._rfba51a2e01d52b / 1e3,
            0,
            1,
            1,
          ),
          (this._r83c20b7ca72018 = t._ra415d261ed4b67))
        : this._re993ab81315b57(),
      t._rf6b81f59324fe0 >= 0 && this._r8976fb174e3935?._r18957e93f8be27(t._rf6b81f59324fe0),
      (this._r51095e88b04015 = t.currentPosition),
      this._soundManager?.events.dispatchEvent?.(
        new NowPlayingEvent(NowPlayingEvent.NOW_PLAYING_SONG_CHANGED, _ia57980bbc2be8f._r91444358db0d2d, t._ra415d261ed4b67, t.currentPosition),
      ));
  }, "_r6477638ef4a962");
  _r24af2faae5872f = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_4077);
    if (t != null) {
      this._entries = [];
      for (let i = 0; i < t.songDisks.length; i++) {
        let s = t.songDisks.getWithIndex(i) ?? -1,
          o = t.songDisks.getKey(i) ?? -1,
          d = this._r8976fb174e3935?._r716cd8f1931469(s);
        (d == null &&
          ((d = new _i044760197c5b0d(s, -1, "", "", null)),
          this._rd74d40ef9cd2fd.includes(s) ||
            (this._rd74d40ef9cd2fd.push(s), this._r8976fb174e3935?._rbb1ae2f8cd13c9(s))),
          (d._r398f5a77bf5446 = o),
          this._entries.push(d));
      }
      this._rd74d40ef9cd2fd.length === 0 && this._events?.dispatchEvent?.(new PlayListStatusEvent(PlayListStatusEvent.PLAY_LIST_UPDATED));
    }
  }, "_r24af2faae5872f");
  _r588c96143a5b38 = n((e) => {
    this._events?.dispatchEvent?.(new PlayListStatusEvent(PlayListStatusEvent.PLAY_LIST_FULL));
  }, "_r588c96143a5b38");
  onSongInfoReceivedEvent = n((e) => {
    for (let t = 0; t < this.length; t++) {
      let i = this._entries[t];
      if (i?.id === e.id) {
        let s = i._r398f5a77bf5446,
          o = this._r8976fb174e3935?._r716cd8f1931469(e.id);
        o != null && ((o._r398f5a77bf5446 = s), (this._entries[t] = o));
        break;
      }
    }
    let r = this._rd74d40ef9cd2fd.indexOf(e.id);
    (r >= 0 && this._rd74d40ef9cd2fd.splice(r, 1),
      this._rd74d40ef9cd2fd.length === 0 && this._events?.dispatchEvent?.(new PlayListStatusEvent(PlayListStatusEvent.PLAY_LIST_UPDATED)));
  }, "onSongInfoReceivedEvent");
}
