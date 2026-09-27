// Extracted from HabboAirLauncher.deobf.js, line 339059.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/HabboSoundManagerFlash10.as
// Obfuscated name: _i598ce0fe1eeee6

class a extends ue {
  static {
    n(this, "HabboSoundManagerFlash10");
  }
  _communication = null;
  var_36 = null;
  _roomEngine = null;
  _notifications = null;
  _genericVolume = 0;
  _ref047be92111d7 = 1;
  _r70a2e859308b8c = 1;
  _r0afddc5957b69a = new B();
  _rd11704160bf1cf = -1;
  _r8faa5449c3b1af = null;
  _r8976fb174e3935 = null;
  _r7a9e470cbc1b1d = null;
  _rac58eb1ac1155d = null;
  _rc1adc084d6023b = new B();
  var_4861 = !1;
  _r4f368d4dd400e9 = new B();
  get soundManager() {
    return this._r8976fb174e3935;
  }
  get _ref967bb06ebc0c() {
    return this._genericVolume;
  }
  set _ref967bb06ebc0c(e) {
    (this.updateVolumeSetting(e, this._r70a2e859308b8c, this._ref047be92111d7), this._r599b7cc2f03b01());
  }
  get _rb9df644ab4c279() {
    return this._ref047be92111d7;
  }
  set _rb9df644ab4c279(e) {
    (this.updateVolumeSetting(this._genericVolume, this._r70a2e859308b8c, e), this._r599b7cc2f03b01());
  }
  get _r3ebcfbd6f36b12() {
    return this._r70a2e859308b8c;
  }
  set _r3ebcfbd6f36b12(e) {
    (this.updateVolumeSetting(this._genericVolume, e, this._ref047be92111d7), this._r599b7cc2f03b01());
  }
  get _rffe14738bb53f1() {
    return this._rd11704160bf1cf;
  }
  constructor(e, r = 0, t = null, i = !0) {
    (super(e, r, t),
      i &&
        (this.queueInterface(new IIDHabboCommunicationManager(), (...s) => {
          this._rfc558953c84edf(s[0], s[1]);
        }),
        this.queueInterface(new IIDRoomEngine(), (...s) => {
          this._rce6f9602e879f9(s[0], s[1]);
        }),
        this.queueInterface(new IIDHabboNotifications(), (...s) => {
          this._rb3793673140c68(s[0], s[1]);
        })),
      this.events.addEventListener?.(TraxSongLoadEvent.TRAX_LOAD_COMPLETE, this._ra32d0fb9ad57e6),
      this.registerUpdateReceiver(this, 1));
  }
  dispose() {
    ((this.var_36 = null),
      this._r8976fb174e3935?.dispose(),
      (this._r8976fb174e3935 = null),
      this._r7a9e470cbc1b1d?.dispose(),
      (this._r7a9e470cbc1b1d = null),
      this._r0afddc5957b69a.dispose(),
      this._r4f368d4dd400e9.dispose(),
      this._rac58eb1ac1155d?.dispose(),
      (this._rac58eb1ac1155d = null),
      this._communication != null && (this._communication.release(new IIDHabboCommunicationManager()), (this._communication = null)),
      this._roomEngine != null &&
        (this._roomEngine.events.removeEventListener?.(RoomEngineObjectPlaySoundEvent.PLAY_SOUND, this._r70479ca7d36762),
        this._roomEngine.events.removeEventListener?.(RoomEngineObjectPlaySoundEvent.PLAY_SOUND_AT_PITCH, this._r70479ca7d36762),
        this._roomEngine.release(new IIDRoomEngine()),
        (this._roomEngine = null)),
      this._notifications != null &&
        (this._notifications.release(new IIDHabboNotifications()), (this._notifications = null)),
      super.dispose());
  }
  playSound(e, r = 0) {
    let t = _ia411d8d8194a3a(),
      i = this._r4f368d4dd400e9.getValue(e);
    if (i != null && t - i <= 200) return;
    let s = this._r0afddc5957b69a.getValue(e);
    if (s == null) {
      let o = this._rce0bbc8dcc838f(e);
      o != null && ((s = new HabboSoundBase(o, r)), this._r0afddc5957b69a.add(e, s));
    }
    s != null &&
      ((s.volume = this._genericVolume),
      this._r4f368d4dd400e9.remove(e),
      this._r4f368d4dd400e9.add(e, t),
      s.play());
  }
  _rf6758e1c54834f(e, r) {
    let t = this._rce0bbc8dcc838f(e);
    if (t == null) return null;
    let i = new NX(t, r);
    return ((i.volume = this._genericVolume), i.play(), i);
  }
  stopSound(e) {
    this._r0afddc5957b69a.getValue(e)?.stop();
  }
  _r7c42ce6e5e4b97 = n(() => {
    ((this._rd11704160bf1cf = -1), (this._r8faa5449c3b1af = null));
  }, "_r7c42ce6e5e4b97");
  _rce0bbc8dcc838f(e) {
    let r = "";
    switch (e) {
      case HabboSoundTypesEnum.SOUND_CALL_FOR_HELP:
        r = "sound_call_for_help";
        break;
      case HabboSoundTypesEnum.SOUND_GUIDE_INVITATION:
        r = "sound_guide_received_invitation";
        break;
      case HabboSoundTypesEnum.SOUND_GUIDE_REQUEST:
        r = "sound_guide_help_requested";
        break;
      case HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED:
        r = "sound_console_new_message";
        break;
      case HabboSoundTypesEnum.SOUND_MESSAGE_SENT:
        r = "sound_console_message_sent";
        break;
      case HabboSoundTypesEnum.SOUND_DUCKET_BALANCE:
        r = "sound_catalogue_duckets";
        break;
      case HabboSoundTypesEnum.SOUND_CREDIT_BALANCE:
        r = "sound_catalogue_cash";
        break;
      case HabboSoundTypesEnum.SOUND_RESPECT:
        r = "sound_respect_received";
        break;
      case HabboSoundTypesEnum.CAMERA_SHUTTER:
        r = "sound_camera_shutter";
        break;
      case HabboSoundTypesEnum.GAMES_SW_GET_SNOWBALL:
      case HabboSoundTypesEnum.GAMES_SW_HIT1:
      case HabboSoundTypesEnum.GAMES_SW_HIT2:
      case HabboSoundTypesEnum.GAMES_SW_HIT3:
      case HabboSoundTypesEnum.GAMES_SW_MAKE_SNOWBALL:
      case HabboSoundTypesEnum.GAMES_SW_MISS:
      case HabboSoundTypesEnum.GAMES_SW_THROW:
      case HabboSoundTypesEnum.GAMES_SW_WALK:
      case HabboSoundTypesEnum.GAMES_IG_COUNTDOWN:
      case HabboSoundTypesEnum.GAMES_IG_WINNING:
      case HabboSoundTypesEnum.GAMES_IG_LOSING:
      case HabboSoundTypesEnum.FURNITURE_SOUND_CUCKOO_CLOCK:
        r = e;
        break;
      default:
        return null;
    }
    return this._r66078e5e954c75(r);
  }
  _r66078e5e954c75(e) {
    return this.assets.getAssetByName(e)?.content ?? null;
  }
  _rb683d6a5e264d9(e, r) {
    if (this._r8faa5449c3b1af != null) return this._rc33a580c7da5cb(e, r);
    let t = this._r7e69918ba7c1af(e, r);
    return (t.ready || ((this._r8faa5449c3b1af = t), (this._rd11704160bf1cf = e)), t);
  }
  _rc33a580c7da5cb(e, r) {
    let t = this._r7e69918ba7c1af(e, r, !1);
    return (t.ready || this._rc1adc084d6023b.add(e, t), t);
  }
  _r7e69918ba7c1af(e, r, t = !0) {
    let i = new TraxData(r),
      s = new DEe(e, i, this._r7a9e470cbc1b1d?.traxSamples ?? new B(), this.events);
    return ((s.volume = this._genericVolume), this._reb50746c20d1bf(s, t), s);
  }
  _reb50746c20d1bf(e, r) {
    let t = e._ra0f61d5ad942d5.getSampleIds(),
      i = !1;
    for (let s of t)
      this._r7a9e470cbc1b1d?.traxSamples.getValue(s) == null &&
        (r && this._r7a9e470cbc1b1d?.loadSample(s), (i = !0));
    e.ready = !i;
  }
  _r94dbfebe6b44be(e, r) {
    this._notifications?.addSongPlayingNotification(e, r);
  }
  _rfc558953c84edf = n((e = null, r = null) => {
    if (r != null) {
      this._communication = r;
      let t = this._communication.connection;
      t != null && (this._r60af19f07feb85(t), this.init());
    }
  }, "_rfc558953c84edf");
  _rce6f9602e879f9 = n((e = null, r = null) => {
    r != null && ((this._roomEngine = r), this.init());
  }, "_rce6f9602e879f9");
  _rb3793673140c68 = n((e = null, r = null) => {
    r != null && (this._notifications = r);
  }, "_rb3793673140c68");
  _r60af19f07feb85(e) {
    this.disposed || ((this.var_36 = e), this.init());
  }
  static onSoundSettingsEvent(e) {
    return (...r) => {
      e(r[0]);
    };
  }
  init() {
    this.var_36 == null ||
      this._roomEngine == null ||
      this._r8976fb174e3935 != null ||
      ((this._r8976fb174e3935 = new kEe(
        this,
        this.events,
        this._roomEngine.events,
        this.var_36,
      )),
      (this._r7a9e470cbc1b1d = new TEe(this, this._r7c42ce6e5e4b97)),
      (this._rac58eb1ac1155d = new FurniSamplePlaybackManager(this, this._roomEngine.events)),
      this._roomEngine.events.addEventListener?.(RoomEngineObjectPlaySoundEvent.PLAY_SOUND, this._r70479ca7d36762),
      this._roomEngine.events.addEventListener?.(RoomEngineObjectPlaySoundEvent.PLAY_SOUND_AT_PITCH, this._r70479ca7d36762),
      this.var_36.addMessageEvent(new class_2121(a.onSoundSettingsEvent(this._r87c087366306ff))),
      this.var_36.send(new UnkMessageComposer_0args_f27b6c()));
  }
  _r0b47bc517df6d9(e) {
    this._r8976fb174e3935 = e;
  }
  _ra32d0fb9ad57e6 = n((e) => {
    let r = e;
    this._r8faa5449c3b1af != null &&
      ((this._r8faa5449c3b1af.ready = !0),
      this._r8976fb174e3935?._r3c412017a002e5(r.id),
      (this._r8faa5449c3b1af = null),
      (this._rd11704160bf1cf = -1));
  }, "_ra32d0fb9ad57e6");
  _r599b7cc2f03b01() {
    this.var_36 != null &&
      this.var_36.send(
        new UnkMessageComposer_3args_8c8542(
          Math.floor(this._ref047be92111d7 * 100),
          Math.floor(this._r70a2e859308b8c * 100),
          Math.floor(this._genericVolume * 100),
        ),
      );
  }
  updateVolumeSetting(e, r, t) {
    this.var_4861
      ? ((this._genericVolume = 0),
        (this._r70a2e859308b8c = 0),
        (this._ref047be92111d7 = 0),
        this._r8976fb174e3935?._ra07b9a10d6996f(0),
        this._rac58eb1ac1155d?._ra07b9a10d6996f(0))
      : ((this._genericVolume = e),
        (this._r70a2e859308b8c = r),
        (this._ref047be92111d7 = t),
        this._r8976fb174e3935?._ra07b9a10d6996f(t),
        this._rac58eb1ac1155d?._ra07b9a10d6996f(r));
  }
  _r87c087366306ff = n((e) => {
    let r = e,
      t = ClassUtils.getParser(r, class_1928);
    if (t == null) return;
    let i = t._r8f5b65d437e79d;
    (i === 1 && (i = 100),
      this.updateVolumeSetting(i / 100, t._r3ebcfbd6f36b12 / 100, t._rb9df644ab4c279 / 100));
  }, "_r87c087366306ff");
  _rd96bc4f78b0275() {
    if (this._r8faa5449c3b1af == null && this._rc1adc084d6023b.length > 0) {
      let e = this._rc1adc084d6023b.getKey(0) ?? -1,
        r = this._rc1adc084d6023b.remove(e);
      r != null &&
        !r.disposed &&
        (this._reb50746c20d1bf(r, !0),
        r.ready
          ? this.events.dispatchEvent?.(new TraxSongLoadEvent(TraxSongLoadEvent.TRAX_LOAD_COMPLETE, e))
          : ((this._r8faa5449c3b1af = r), (this._rd11704160bf1cf = e)));
    }
  }
  _r70479ca7d36762 = n((e) => {
    let r = e;
    (e.type === RoomEngineObjectPlaySoundEvent.PLAY_SOUND && this.playSound(r.soundId),
      e.type === RoomEngineObjectPlaySoundEvent.PLAY_SOUND_AT_PITCH && this._rf6758e1c54834f(r.soundId, r.pitch));
  }, "_r70479ca7d36762");
  update(e) {
    (this._r7a9e470cbc1b1d?.update(e), this._rd96bc4f78b0275());
  }
  mute(e) {
    ((this.var_4861 = e),
      this.updateVolumeSetting(this._genericVolume, this._r70a2e859308b8c, this._ref047be92111d7));
  }
  _r87d0112e1011e2(e, r, t) {
    this.updateVolumeSetting(e, r, t);
  }
}
