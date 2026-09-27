// Extracted from HabboAirLauncher.deobf.js, line 337457.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/sound/furni/FurniSamplePlaybackManager.as
// Obfuscated name: _ie7c28677746028

class {
  constructor(e, r) {
    this._soundManager = e;
    this._roomEvents = r;
    (this._roomEvents?.addEventListener?.(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED, this._rd83811b485a46c),
      this._roomEvents?.addEventListener?.(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED, this._rd7b7e6e508c33d),
      this._roomEvents?.addEventListener?.(RoomEngineObjectSamplePlaybackEvent.PLAY_SAMPLE, this._r16d567acb71db6),
      this._roomEvents?.addEventListener?.(RoomEngineObjectSamplePlaybackEvent.CHANGE_PITCH, this._r82b0c1991c4e1b));
  }
  static {
    n(this, "FurniSamplePlaybackManager");
  }
  _disposed = !1;
  _loadedSamples = new B();
  _rc73c07f612d74e = new B();
  _r2c20c1ab6774f7 = new B();
  _r9e95109ee7aba6 = new B();
  _r23c6bcd071021d = new B();
  _r5cce8a6116a673 = new B();
  _volume = 1;
  dispose() {
    this._disposed ||
      (this._roomEvents?.removeEventListener?.(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED, this._rd83811b485a46c),
      this._roomEvents?.removeEventListener?.(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED, this._rd7b7e6e508c33d),
      this._roomEvents?.removeEventListener?.(RoomEngineObjectSamplePlaybackEvent.PLAY_SAMPLE, this._r16d567acb71db6),
      this._roomEvents?.removeEventListener?.(RoomEngineObjectSamplePlaybackEvent.CHANGE_PITCH, this._r82b0c1991c4e1b),
      (this._roomEvents = null),
      this._loadedSamples.dispose(),
      this._rc73c07f612d74e.dispose(),
      this._r2c20c1ab6774f7.dispose(),
      this._r9e95109ee7aba6.dispose(),
      this._r23c6bcd071021d.dispose(),
      this._r5cce8a6116a673.dispose(),
      (this._soundManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _ra07b9a10d6996f(e) {
    this._volume = e;
    for (let r of this._loadedSamples.getValues()) r.volume = this._volume;
  }
  _rd83811b485a46c = n((e) => {
    e.sampleId !== -1 &&
      (this._r5cce8a6116a673.hasKey(e.objectId) && this._r5cce8a6116a673.remove(e.objectId),
      this._r5cce8a6116a673.add(e.objectId, e.pitch),
      this._rd111a75f6cf5cd(e.objectId, e.sampleId));
  }, "_rd83811b485a46c");
  _rd7b7e6e508c33d = n((e) => {
    this._r7670ebda56aaad(e.objectId);
  }, "_rd7b7e6e508c33d");
  _r16d567acb71db6 = n((e) => {
    this._loadedSamples.getValue(e.objectId) != null && this._r712d1d22550f2c(e.objectId);
  }, "_r16d567acb71db6");
  _r82b0c1991c4e1b = n((e) => {
    this._loadedSamples.getValue(e.objectId) != null && this._r74150cd0280737(e.objectId, e.pitch);
  }, "_r82b0c1991c4e1b");
  _rd111a75f6cf5cd(e, r) {
    if (this._loadedSamples.getValue(e) != null) return;
    this._r23c6bcd071021d.hasKey(e) ? this._r23c6bcd071021d.replace(e, r) : this._r23c6bcd071021d.add(e, r);
    let t = this._r9e95109ee7aba6.getValue(r);
    if (t != null) {
      this._rca2f36bb23331f(e, r, t);
      return;
    }
    let i = this._r2c20c1ab6774f7.getValue(r);
    if (i != null) {
      i.includes(e) || i.push(e);
      return;
    }
    (this._r2c20c1ab6774f7.add(r, [e]), this.loadSample(r));
  }
  _r7670ebda56aaad(e) {
    let r = this._loadedSamples.getValue(e),
      t = this._r23c6bcd071021d.remove(e);
    if (
      (r != null &&
        (this._soundManager?.removeUpdateReceiver(r), r.dispose(), this._loadedSamples.remove(e)),
      t != null)
    ) {
      let i = this._r2c20c1ab6774f7.getValue(t);
      if (i != null) {
        let s = i.indexOf(e);
        (s >= 0 && i.splice(s, 1), i.length === 0 && this._r2c20c1ab6774f7.remove(t));
      }
    }
    this._r5cce8a6116a673.hasKey(e) && this._r5cce8a6116a673.remove(e);
  }
  _r712d1d22550f2c(e) {
    let r = this._loadedSamples.getValue(e);
    r != null && (r.stop(), r.play());
  }
  _r74150cd0280737(e, r) {
    this._loadedSamples.getValue(e)?.setPitch(r);
  }
  loadSample(e) {
    if (this._soundManager == null) return;
    let r = this._soundManager.getProperty("flash.dynamic.download.url");
    ((r += this._soundManager.getProperty("flash.dynamic.download.samples.template")),
      (r = r.replace(/%typeid%/, e.toString())));
    let t = new UnkClass_636490(r),
      i = new Mf();
    (i.addEventListener(M.ComponentDependency, this._r657a0b2a633997),
      i.addEventListener(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, this.ioErrorHandler),
      i.load(t),
      this._rc73c07f612d74e.add(i, e));
  }
  _r657a0b2a633997 = n((e) => {
    if (this.disposed) return;
    let r = e.target;
    if (r == null) return;
    let t = this._rc73c07f612d74e.getValue(r);
    if (t == null) return;
    (this._rc73c07f612d74e.remove(r), this._r9e95109ee7aba6.hasKey(t) || this._r9e95109ee7aba6.add(t, r));
    let i = this._r2c20c1ab6774f7.remove(t) ?? [];
    for (let s of i) this._rca2f36bb23331f(s, t, r);
  }, "_r657a0b2a633997");
  _rca2f36bb23331f(e, r, t) {
    if (this._r23c6bcd071021d.getValue(e) !== r || this._loadedSamples.getValue(e) != null) return;
    let i = new NX(t, this._r5cce8a6116a673.getValue(e) ?? 1);
    (this._soundManager?.registerUpdateReceiver(i, 0),
      (i.volume = this._volume),
      this._loadedSamples.add(e, i));
  }
  ioErrorHandler = n((e) => {
    let r = e.target;
    if (r == null) return;
    let t = this._rc73c07f612d74e.remove(r);
    t != null && this._r2c20c1ab6774f7.remove(t);
  }, "ioErrorHandler");
}
