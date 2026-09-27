// Estratto da HabboAirLauncher.deobf.js, riga 375946.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/RoomManager.as
// Nome offuscato: _i67894ae9383239

class a extends ue {
  static {
    n(this, "RoomManager");
  }
  static _r49773118109b95 = -1;
  static var_2445 = 0;
  static ROOM_MANAGER_LOADED = 1;
  static ROOM_MANAGER_INITIALIZING = 2;
  static ROOM_MANAGER_INITIALIZED = 3;
  static CONTENT_PROCESSING_TIME_LIMIT_MILLISECONDS = 40;
  _rooms = new B();
  _r5c37322154f276 = null;
  _r1b083a4a18091e = [];
  _r46991e2f39b149 = [];
  var_263 = null;
  _r07dab5ea5c2127 = [];
  _rdc17ec3ae675fb = !1;
  var_4823 = !0;
  constructor(e, r = 0) {
    (super(e, r),
      this.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, this._r46a97efc77ddaf),
      this.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, this._r46a97efc77ddaf),
      this.events.addEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_CANCEL, this._r46a97efc77ddaf));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new _i2446cc4d501775(), (e) => {
        this.createRoomObjectLogic = e;
      }),
      new ComponentDependency(new IIDRoomObjectVisualizationFactory(), (e) => {
        this._rd6ec743ba974e5 = e;
      }),
    ]);
  }
  set limitContentProcessing(e) {
    this.var_4823 = e;
  }
  initComponent() {
    if (((this._state = a.ROOM_MANAGER_LOADED), this._r1efddd1409e9b9 != null)) {
      let e = this._r1efddd1409e9b9;
      ((this._r1efddd1409e9b9 = null), this.initialize(e, this.var_263));
    }
  }
  dispose() {
    if (!this.disposed) {
      (this.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_SUCCESS, this._r46a97efc77ddaf),
        this.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_FAILURE, this._r46a97efc77ddaf),
        this.events.removeEventListener?.(RoomContentLoadedEvent.CONTENT_LOAD_CANCEL, this._r46a97efc77ddaf));
      for (let e of this._rooms.getKeys())
        (this._rooms.getValue(e)?.dispose(),
          this.createRoomObjectLogic._rb7d6f9381d9faf(e),
          this._rd6ec743ba974e5._re0b8e40a96c2ab(e));
      (this._rooms.dispose(),
        (this.var_263 = null),
        (this._r1b083a4a18091e = []),
        (this._r46991e2f39b149 = []),
        (this._r5c37322154f276 = null),
        (this.createRoomObjectLogic = null),
        (this._rd6ec743ba974e5 = null),
        (this._r07dab5ea5c2127 = []),
        (this._r1efddd1409e9b9 = null),
        super.dispose());
    }
  }
  initialize(e, r) {
    if (this._state === a.var_2445)
      return this._r1efddd1409e9b9 != null
        ? !1
        : ((this._r1efddd1409e9b9 = e), (this.var_263 = r), !0);
    if (this._state >= a.ROOM_MANAGER_INITIALIZING || e == null || this._r5c37322154f276 == null) return !1;
    this.var_263 = r;
    for (let t of this._r5c37322154f276.getPlaceHolderTypes())
      this._r1b083a4a18091e.includes(t) ||
        (this._r5c37322154f276._ra52e0b87b495a8(t, this.events), this._r1b083a4a18091e.push(t));
    return ((this._state = a.ROOM_MANAGER_INITIALIZING), !0);
  }
  update(e) {
    this._ra3d019acc2b699();
    for (let r = this._rooms.length - 1; r >= 0; r--)
      this._rooms.getWithIndex(r)?.update();
  }
  _r9e6797971ecfd2(e) {
    (this._r5c37322154f276?.dispose(), (this._r5c37322154f276 = e));
  }
  _re8f661dca32b6b(e) {
    if (!this._r46991e2f39b149.includes(e)) {
      this._r46991e2f39b149.push(e);
      for (let r = this._rooms.length - 1; r >= 0; r--)
        this._rooms.getWithIndex(r)?._re8f661dca32b6b(e);
    }
  }
  _r8f3e1ecfa1148e(e) {
    let r = this._r46991e2f39b149.indexOf(e);
    if (!(r < 0)) {
      this._r46991e2f39b149.splice(r, 1);
      for (let t = this._rooms.length - 1; t >= 0; t--)
        this._rooms.getWithIndex(t)?._r8f3e1ecfa1148e(e);
    }
  }
  _r45a41d9ebca32b(e, r) {
    if (this._state < a.ROOM_MANAGER_INITIALIZED) throw new RoomManagerException();
    if (this._rooms.getValue(e) != null) return null;
    let t = new IRoomInstance(e, this);
    this._rooms.add(e, t);
    for (let i = this._r46991e2f39b149.length - 1; i >= 0; i--) t._re8f661dca32b6b(this._r46991e2f39b149[i]);
    return t;
  }
  _r54608a3676a44e(e) {
    let r = this._rooms.remove(e) ?? null;
    return (
      r?.dispose(),
      this.createRoomObjectLogic._rb7d6f9381d9faf(e),
      this._rd6ec743ba974e5._re0b8e40a96c2ab(e),
      r != null
    );
  }
  _r66cbd667bbe5aa(e, r) {
    (this.createRoomObjectLogic._r66cbd667bbe5aa(e, r), this._rd6ec743ba974e5._r66cbd667bbe5aa(e, r));
  }
  _raa0e3211cd81ea(e, r) {
    (this.createRoomObjectLogic._raa0e3211cd81ea(e, r), this._rd6ec743ba974e5._raa0e3211cd81ea(e, r));
  }
  _r8bcc15c726f45e(e) {
    return this._rooms.getValue(e) ?? null;
  }
  _r12eb215885cb1e(e) {
    return this._rooms.getWithIndex(e) ?? null;
  }
  _r0084d983efeb17() {
    return this._rooms.length;
  }
  _r2f92a0e0687601(e) {
    return this._r5c37322154f276?._rded86a5ccab725(e) != null;
  }
  createRoomObject(e, r, t, i) {
    if (this._state < a.ROOM_MANAGER_INITIALIZED) throw new RoomManagerException();
    let s = this._r8bcc15c726f45e(e);
    if (!(s instanceof IRoomInstance) || this._r5c37322154f276 == null || this._rd6ec743ba974e5 == null) return null;
    let o = null,
      d = null,
      c = null,
      f = null,
      l = null,
      b = t,
      _ = !1;
    if (this._r5c37322154f276._re9aa38ecc3dfc7(t))
      ((b = t),
        (f = t),
        (l = t),
        (o = this._r5c37322154f276._rded86a5ccab725(t)),
        (d = this._r5c37322154f276._r187dae11eef46b(t)),
        (c = this._r5c37322154f276._rd8f6b1a3c700c2(t)));
    else {
      if (
        ((o = this._r5c37322154f276._rded86a5ccab725(t)),
        o == null &&
          ((_ = !0),
          this._r5c37322154f276._ra52e0b87b495a8(t, this.events),
          (b = this._r5c37322154f276._r741001f00efc2d(t)),
          (o = this._r5c37322154f276._rded86a5ccab725(b))),
        (d = this._r5c37322154f276._r187dae11eef46b(b)),
        (c = this._r5c37322154f276._rd8f6b1a3c700c2(b)),
        d == null || o == null)
      )
        return null;
      ((f = this._r5c37322154f276._r1d008b524790bb(b)), (l = this._r5c37322154f276._r0554329abdc519(b)));
    }
    let m = s._r19d69e91cb19cf(r, 1, t, i);
    if (m == null) return null;
    let v = this._rd6ec743ba974e5._r0324f21b459e5d(f, e);
    if (v == null) return (s.disposeObject(r, i), null);
    ((v.assetCollection = o),
      v.setExternalBaseUrls(
        this.context.configuration?.getProperty("stories.image_url_base") ?? "",
        this.context.configuration?.getProperty("extra_data_service_url") ?? "",
        this.context.configuration?.getBoolean("extra_data_batches_enabled") ?? !1,
      ));
    let w = this._rd6ec743ba974e5.getRoomObjectVisualizationData(b, f, d);
    if (!v.initialize(w)) return (s.disposeObject(r, i), null);
    m.setVisualization(v);
    let I = this.createRoomObjectLogic?._objectFactory(l, e) ?? null;
    return (
      m.setEventHandler(I),
      I != null && c != null && I.initialize(c),
      _ || m.setInitialized(!0),
      this._r5c37322154f276._rc6c09a65fe2d8b(m, e),
      m
    );
  }
  _rb64f6286c672bc() {
    return this.createRoomObjectLogic?._rb64f6286c672bc() ?? null;
  }
  _r31dfb7304423e5(e) {
    if (!(e == null || this._state === a._r49773118109b95)) {
      if (this._r5c37322154f276 == null) {
        this._state = a._r49773118109b95;
        return;
      }
      if (this._r5c37322154f276._rded86a5ccab725(e) != null) {
        let r = this._r1b083a4a18091e.indexOf(e);
        (r >= 0 && this._r1b083a4a18091e.splice(r, 1),
          this._r1b083a4a18091e.length === 0 &&
            ((this._state = a.ROOM_MANAGER_INITIALIZED), this.var_263?._rbba4bdc1093cc1(!0)));
      } else ((this._state = a._r49773118109b95), this.var_263?._rbba4bdc1093cc1(!1));
    }
  }
  _ra3d019acc2b699() {
    if (this._rdc17ec3ae675fb) {
      this._rdc17ec3ae675fb = !1;
      return;
    }
    if (this._r5c37322154f276 == null) return;
    let e = Date.now();
    for (; this._r07dab5ea5c2127.length > 0;) {
      let r = this._r07dab5ea5c2127.shift() ?? null;
      if (r == null) continue;
      if (!this._r5c37322154f276._rd90cc56b596a80(r)) {
        this.var_263?._r65913200fde7c4(r, !1);
        return;
      }
      if (this._r5c37322154f276._rded86a5ccab725(r) == null) {
        this.var_263?._r65913200fde7c4(r, !1);
        return;
      }
      if (
        (this._r7dea4ebea42ed7(r),
        this.var_263?._r65913200fde7c4(r, !0),
        this._r1b083a4a18091e.length > 0 && this._r31dfb7304423e5(r),
        Date.now() - e >= a.CONTENT_PROCESSING_TIME_LIMIT_MILLISECONDS && this.var_4823)
      ) {
        this._rdc17ec3ae675fb = !0;
        break;
      }
    }
  }
  _r7dea4ebea42ed7(e) {
    if (
      e == null ||
      this._r5c37322154f276 == null ||
      this._rd6ec743ba974e5 == null ||
      this.createRoomObjectLogic == null
    )
      return;
    let r = this._r5c37322154f276._r1d008b524790bb(e),
      t = this._r5c37322154f276._r0554329abdc519(e),
      i = null,
      s = null,
      o = null,
      d = null;
    for (let c = this._rooms.length - 1; c >= 0; c--) {
      let f = this._rooms.getWithIndex(c) ?? null,
        l = this._rooms.getKey(c) ?? "";
      if (f == null) continue;
      let b = f._rcbcd1968a81928(),
        _ = !1;
      for (let h of b) {
        let p = f._rc7d1226973ae1d(e, h);
        for (let m = p - 1; m >= 0; m--) {
          let v = f._r0f337385f5ca37(m, e, h);
          if (v == null) continue;
          if (i == null) {
            if (
              ((s = this._r5c37322154f276._r187dae11eef46b(e)),
              s == null ||
                ((o = this._r5c37322154f276._rd8f6b1a3c700c2(e)),
                (d = this._r5c37322154f276._rded86a5ccab725(e)),
                d == null))
            )
              return;
            i = this._rd6ec743ba974e5.getRoomObjectVisualizationData(e, r, s);
          }
          let w = this._rd6ec743ba974e5._r0324f21b459e5d(r, l);
          if (w == null) {
            f.disposeObject(v.getId(), h);
            continue;
          }
          if (
            ((w.assetCollection = d),
            w.setExternalBaseUrls(
              this.context.configuration?.getProperty("stories.image_url_base") ?? "",
              this.context.configuration?.getProperty("extra_data_service_url") ?? "",
              this.context.configuration?.getBoolean("extra_data_batches_enabled") ?? !1,
            ),
            !w.initialize(i))
          ) {
            f.disposeObject(v.getId(), h);
            continue;
          }
          v.setVisualization(w);
          let I = this.createRoomObjectLogic._objectFactory(t, l);
          (v.setEventHandler(I),
            I?.initialize(o),
            v.setInitialized(!0),
            this.var_263?._r6662ced4ea6be5(l, v.getId(), h),
            (_ = !0));
        }
      }
      !f._r55ed7f599dd3ad() && _ && this.var_263?._r8f5f2d8fcbb09d(l);
    }
  }
  _r46a97efc77ddaf = n((e) => {
    if (this._r5c37322154f276 == null) return;
    let r = e.contentType ?? null;
    if (r == null) {
      this.var_263?._r65913200fde7c4(null, !1);
      return;
    }
    this._r07dab5ea5c2127.includes(r) || this._r07dab5ea5c2127.push(r);
  }, "_r46a97efc77ddaf");
}
