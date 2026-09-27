// Extracted from HabboAirLauncher.deobf.js, line 337987.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3a140a9639f977

class a {
  constructor(e, r, t, i) {
    this._soundManager = e;
    this._events = r;
    this._roomEvents = t;
    this.var_36 = i;
    (this._messageEvents.push(new class_3294(a.onSoundSettingsEvent(this._r78b7cb1f147738))),
      this._messageEvents.push(new UnkMessageEvent_8b984d(a.onSoundSettingsEvent(this._r0eb4b5afc5d694))));
    for (let s of this._messageEvents) this.var_36?.addMessageEvent(s);
    (this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.JUKEBOX_INIT, this._rbcf67ae1fbd894),
      this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.const_73, this._r5be3a8cd75a828),
      this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_INIT, this._r674e6b567c2ab6),
      this._roomEvents?.addEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_DISPOSE, this._r408de47dfbf972),
      (this._rca63d10a65134b = new UnkEventDispatcherWrapperSubclass_05394e(1e3)),
      this._rca63d10a65134b.start(),
      this._rca63d10a65134b.addEventListener(DeBouncer.addEventListener, this._r179bdf5323a541),
      this._events.addEventListener?.(SoundCompleteEvent.TRAX_SONG_COMPLETE, this._r6078c963e14b5a));
    for (let s = 0; s < UnkConstants_a57980._r13a92c5077f20c; s++)
      ((this._r50e9d057d2af35[s] = null), (this._rc4e84a6da7f279[s] = 0));
  }
  static {
    n(this, "UnkClass_3a140a");
  }
  static _r7da035b50597c2 = -1;
  static _re72d4d67a4044a = UnkConstants_a57980._r91444358db0d2d;
  _r34a2475baee8fa = new B();
  _rf01a39fd41ad6a = new B();
  _rccf48717cb7c53 = [];
  _r3637080068cc78 = null;
  _disposed = !1;
  _r50e9d057d2af35 = [];
  _rc4e84a6da7f279 = [];
  _r439003882d2790 = -1;
  _r6a61628021cda2 = -1;
  _re366a9c05d85c4 = -1;
  _rca63d10a65134b;
  _r89e11d3d569e45 = new B();
  _r83d57f9797088d = [];
  _messageEvents = [];
  _rec0f6d9d7ac0c9 = -1;
  _rde4e60ede2b138 = -1;
  get disposed() {
    return this._disposed;
  }
  get events() {
    return this._events;
  }
  _r6078c963e14b5a = n((e) => {
    if (this._r1e81274f76e6d5(this._r439003882d2790) === e.id) {
      this._r95601f9afd2123() === this._r439003882d2790 &&
        this._r72cb5fc680020e(this._r439003882d2790) === this._re366a9c05d85c4 &&
        this._r96d9e6d4307b27(this._r439003882d2790);
      let r = this._r439003882d2790;
      (this._re67f826e5ed9e4(),
        r >= UnkConstants_a57980._r741ad58ad5e51a && this._events.dispatchEvent?.(new NowPlayingEvent(NowPlayingEvent.USER_STOP_SONG, r, e.id, -1)));
    }
  }, "_r6078c963e14b5a");
  dispose() {
    if (!this._disposed) {
      if (((this._soundManager = null), (this._rccf48717cb7c53 = []), this.var_36 != null))
        for (let e of this._messageEvents) (this.var_36.removeMessageEvent(e), e.dispose());
      ((this._messageEvents = []),
        (this.var_36 = null),
        this._r3637080068cc78?.dispose(),
        (this._r3637080068cc78 = null));
      for (let e = 0; e < this._r34a2475baee8fa.length; e++) {
        let r = this._r34a2475baee8fa.getWithIndex(e),
          t = r?._r551c6e37b9b07d;
        (t?.stop(), r != null && (r._r551c6e37b9b07d = null));
      }
      (this._r34a2475baee8fa.dispose(),
        this._rf01a39fd41ad6a.dispose(),
        this._rca63d10a65134b.stop(),
        this._rca63d10a65134b.removeEventListener(DeBouncer.addEventListener, this._r179bdf5323a541),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.JUKEBOX_INIT, this._rbcf67ae1fbd894),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.const_73, this._r5be3a8cd75a828),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_INIT, this._r674e6b567c2ab6),
        this._roomEvents?.removeEventListener?.(RoomEngineSoundMachineEvent.SOUND_MACHINE_DISPOSE, this._r408de47dfbf972),
        this._r89e11d3d569e45.dispose(),
        (this._disposed = !0));
    }
  }
  _r6ad19d72b36cea(e = -1) {
    return this._r3637080068cc78;
  }
  static onSoundSettingsEvent(e) {
    return (...r) => {
      e(r[0]);
    };
  }
  _rbf5f0b22705998(e, r, t, i, s, o) {
    return e < 0 || e >= UnkConstants_a57980._r13a92c5077f20c
      ? !1
      : ((this._r50e9d057d2af35[e] = new UnkClass_1cdade(r, t, i, s, o)), (this._rc4e84a6da7f279[e] += 1), !0);
  }
  _rb6896191cf2a53(e) {
    return this._r50e9d057d2af35[e] ?? null;
  }
  _r405e99834e6709(e) {
    return e < 0 || e >= UnkConstants_a57980._r13a92c5077f20c ? -1 : (this._r50e9d057d2af35[e]?.songId ?? -1);
  }
  _r72cb5fc680020e(e) {
    return e < 0 || e >= UnkConstants_a57980._r13a92c5077f20c ? -1 : (this._rc4e84a6da7f279[e] ?? -1);
  }
  _r95601f9afd2123() {
    for (let e = this._r50e9d057d2af35.length - 1; e >= 0; e--)
      if (this._r50e9d057d2af35[e] != null) return e;
    return -1;
  }
  _r96d9e6d4307b27(e) {
    e >= 0 && e < UnkConstants_a57980._r13a92c5077f20c && (this._r50e9d057d2af35[e] = null);
  }
  _r821c8169e3e9cd(e) {
    e >= 0 && e < this._rc4e84a6da7f279.length && (this._rc4e84a6da7f279[e] += 1);
  }
  _r6e98dcb525c0cb(e) {
    let r = this._r997de69d638959(e);
    return r == null
      ? (this._r18957e93f8be27(e), !1)
      : (r._r551c6e37b9b07d == null &&
          (r._r551c6e37b9b07d = this._soundManager?._rb683d6a5e264d9(r.id, r._race451481abd84) ?? null),
        r._r551c6e37b9b07d?.ready ?? !1);
  }
  _r327803e778efff(e, r, t = 0, i = 0, s = 0.5, o = 0.5) {
    return !this._rbf5f0b22705998(r, e, t, i, s, o) || !this._r6e98dcb525c0cb(e)
      ? !1
      : (r >= this._r439003882d2790 && this._r651430b8954580(r, e), !0);
  }
  _re67f826e5ed9e4() {
    ((this._r439003882d2790 = -1), (this._r6a61628021cda2 = -1), (this._re366a9c05d85c4 = -1));
    let e = this._r95601f9afd2123();
    for (let r = e; r >= 0; r--) {
      let t = this._r405e99834e6709(r);
      if (t >= 0 && this._r651430b8954580(r, t)) return;
    }
  }
  stop(e) {
    let r = e === this._r439003882d2790,
      t = this._r95601f9afd2123() === e;
    (this._r96d9e6d4307b27(e),
      r ? this._r921199ad845627(e) : t && this._r821c8169e3e9cd(this._r439003882d2790));
  }
  _r921199ad845627(e) {
    if (e === this._r439003882d2790 && this._r439003882d2790 >= 0) {
      let r = this._r1e81274f76e6d5(e);
      if (r >= 0) {
        let t = this._r997de69d638959(r);
        return (this._r38ee3d884c1689(t), !0);
      }
    }
    return !1;
  }
  _r38ee3d884c1689(e) {
    e?._r551c6e37b9b07d?.stop();
  }
  _r997de69d638959(e) {
    return this._r34a2475baee8fa.getValue(e) ?? null;
  }
  _ra07b9a10d6996f(e) {
    for (let r = 0; r < UnkConstants_a57980._r13a92c5077f20c; r++) {
      let t = this._r1e81274f76e6d5(r);
      if (t >= 0) {
        let i = this._r997de69d638959(t);
        i?._r551c6e37b9b07d != null && (i._r551c6e37b9b07d.volume = e);
      }
    }
  }
  _r3c412017a002e5(e) {
    let r = this._r95601f9afd2123();
    if (r >= 0) {
      let t = this._r405e99834e6709(r);
      e === t && this._r651430b8954580(r, e);
    }
  }
  _r18957e93f8be27(e) {
    this._r3ffa9d76187217(e, !0);
  }
  _rbb1ae2f8cd13c9(e) {
    this._r3ffa9d76187217(e, !1);
  }
  _r3ffa9d76187217(e, r) {
    this._rf01a39fd41ad6a.getValue(e) == null &&
      (this._rf01a39fd41ad6a.add(e, r), this._rccf48717cb7c53.push(e));
  }
  _r716cd8f1931469(e) {
    let r = this._r997de69d638959(e);
    return (r == null && this._rbb1ae2f8cd13c9(e), r);
  }
  _r6bb71aecc5e807() {
    this.var_36?.send(new UnkMessageComposer_0args_03a745());
  }
  _r7cff41fce75721() {
    return this._r89e11d3d569e45.length;
  }
  _r24d7f71c73747b(e) {
    return this._r89e11d3d569e45.getKey(e) ?? -1;
  }
  _rb42dbfb1fa5f77(e) {
    return this._r89e11d3d569e45.getWithIndex(e) ?? -1;
  }
  _r1e81274f76e6d5(e) {
    return e !== this._r439003882d2790 ? -1 : this._r6a61628021cda2;
  }
  _r87f5773640208f(e) {
    for (let r = 0; r < this._r34a2475baee8fa.length; r++) {
      let t = this._r34a2475baee8fa.getWithIndex(r),
        i = t?._r551c6e37b9b07d;
      if (t != null && t.id !== this._r6a61628021cda2 && i != null && i.ready) {
        let s = i._ra0f61d5ad942d5.getSampleIds();
        for (let o of e) s.includes(o) && ((t._r551c6e37b9b07d = null), i.dispose());
      }
    }
  }
  get _r46b43736d4ff01() {
    let e = [];
    for (let r of this._r50e9d057d2af35)
      if (r != null) {
        let t = this._r34a2475baee8fa.getValue(r.songId);
        if (t != null) {
          let i = t._r551c6e37b9b07d;
          i != null && (e = e.concat(i._ra0f61d5ad942d5.getSampleIds()));
        }
      }
    return e;
  }
  _r179bdf5323a541 = n((e) => {
    this._rccf48717cb7c53.length < 1 ||
      this.var_36 == null ||
      (this.var_36.send(new UnkMessageComposer_1args_8947c2(this._rccf48717cb7c53)), (this._rccf48717cb7c53 = []));
  }, "_r179bdf5323a541");
  _r78b7cb1f147738 = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_2796);
    if (t == null) return;
    let i = t.songs;
    for (let s of i) {
      let o = this._r997de69d638959(s.id) == null,
        d = this._r9aeb41eb528291(s.id);
      if (o) {
        let c = null;
        d && (c = this._soundManager?._rb683d6a5e264d9(s.id, s.data) ?? null);
        let f = new UnkSubclassOf_class_2354_044760(s.id, s.length, s.name, s.creator, c);
        ((f._race451481abd84 = s.data), this._r34a2475baee8fa.add(s.id, f));
        let l = this._r95601f9afd2123(),
          b = this._r405e99834e6709(l);
        for (
          c != null && c.ready && s.id === b && this._r651430b8954580(l, b),
            this._events.dispatchEvent?.(new SongInfoReceivedEvent(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, s.id));
          this._r83d57f9797088d.includes(s.id);
        )
          (this._r83d57f9797088d.splice(this._r83d57f9797088d.indexOf(s.id), 1),
            this._r83d57f9797088d.length === 0 && this._events.dispatchEvent?.(new SongDiskInventoryReceivedEvent(SongDiskInventoryReceivedEvent.SONG_DISK_INVENTORY_RECEIVED)));
      }
    }
  }, "_r78b7cb1f147738");
  _r651430b8954580(e, r) {
    if (r === -1 || e < 0 || e >= UnkConstants_a57980._r13a92c5077f20c) return !1;
    let t = this._r921199ad845627(this._r439003882d2790),
      i = this._r997de69d638959(r);
    if (i == null) return !1;
    let s = i._r551c6e37b9b07d;
    if (s == null || !s.ready) return !1;
    if (t) return !0;
    s.volume = this._soundManager?._rb9df644ab4c279 ?? 1;
    let o = a._r7da035b50597c2,
      d = 0,
      c = 2,
      f = 1,
      l = this._rb6896191cf2a53(e);
    return (
      l != null &&
        ((o = l.startPos), (d = l._rd69d61db254947), (c = l._r8d76cdbd314434), (f = l._r754bf5401e8707)),
      o >= i.length / 1e3
        ? !1
        : (o === a._r7da035b50597c2 && (o = 0),
          (s._r8d76cdbd314434 = c),
          (s._r754bf5401e8707 = f),
          (s.position = o),
          s.play(d),
          (this._r439003882d2790 = e),
          (this._re366a9c05d85c4 = this._r72cb5fc680020e(e)),
          (this._r6a61628021cda2 = r),
          this._r439003882d2790 <= a._re72d4d67a4044a && this._r70eb8f6fba9d5f(i),
          e > UnkConstants_a57980._r91444358db0d2d && this._events.dispatchEvent?.(new NowPlayingEvent(NowPlayingEvent.USER_PLAY_SONG, e, i.id, -1)),
          !0)
    );
  }
  _r70eb8f6fba9d5f(e) {
    let t = _ia411d8d8194a3a();
    e.length >= 8e3 &&
      (this._rec0f6d9d7ac0c9 !== e.id || t > this._rde4e60ede2b138 + 8e3) &&
      (this._soundManager?._r94dbfebe6b44be(e.name, e.creator),
      (this._rec0f6d9d7ac0c9 = e.id),
      (this._rde4e60ede2b138 = t));
  }
  _r9aeb41eb528291(e) {
    return this._rf01a39fd41ad6a.getValue(e) ?? !1;
  }
  _r0eb4b5afc5d694 = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, UnkMessageParser_III_e97abf);
    if (t != null) {
      this._r89e11d3d569e45.reset();
      for (let i = 0; i < t._r37d03f07c91778; i++) {
        let s = t._rc9e54aaca08a34(i),
          o = t._ra4df5e76b7da17(i);
        (this._r89e11d3d569e45.add(s, o),
          this._r34a2475baee8fa.getValue(o) == null &&
            (this._r83d57f9797088d.push(o), this._rbb1ae2f8cd13c9(o)));
      }
      this._r83d57f9797088d.length === 0 && this._events.dispatchEvent?.(new SongDiskInventoryReceivedEvent(SongDiskInventoryReceivedEvent.SONG_DISK_INVENTORY_RECEIVED));
    }
  }, "_r0eb4b5afc5d694");
  _r674e6b567c2ab6 = n((e) => {
    (this._r7c17efd33311e2(),
      (this._r3637080068cc78 = new AEe(
        this._soundManager,
        this,
        this._events,
        this._roomEvents,
        this.var_36,
      )));
  }, "_r674e6b567c2ab6");
  _r408de47dfbf972 = n((e) => {
    this._r7c17efd33311e2();
  }, "_r408de47dfbf972");
  _rbcf67ae1fbd894 = n((e) => {
    (this._r7c17efd33311e2(),
      (this._r3637080068cc78 = new WEe(this._soundManager, this, this._events, this.var_36)),
      this.var_36?.send(new UnkMessageComposer_0args_79f02c()));
  }, "_rbcf67ae1fbd894");
  _r5be3a8cd75a828 = n((e) => {
    this._r7c17efd33311e2();
  }, "_r5be3a8cd75a828");
  _r7c17efd33311e2() {
    (this._r3637080068cc78?.dispose(), (this._r3637080068cc78 = null));
  }
}
