// Estratto da HabboAirLauncher.deobf.js, riga 298588.

class a extends h_ {
  static {
    n(this, "_ib0f987bbfc46a7");
  }
  static _r72f1d93b16615d = 8;
  static _rec41cb6f048a9b = 1 / 16;
  _r3e30def156d1c8 = !1;
  _r8e1740c5360bf6 = 0;
  _r31b35e71aeb155 = 0;
  var_2506 = 0;
  var_4955 = 0;
  var_4775 = 0;
  _r17994b3464a03b = 0;
  _rc7d47f87c3badf = !1;
  _reaaab2b0bcc572 = 0;
  _rb5fe11d3fe1bc6 = null;
  _rf012bb257efe33 = new k();
  _directions = [];
  var_521 = null;
  getEventTypes() {
    let e = [
      gi.ROOM_AD_TOOLTIP_SHOW,
      gi.ROOM_AD_TOOLTIP_HIDE,
      gi.ROOM_AD_FURNI_DOUBLE_CLICK,
      RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK,
      gi.ROOM_AD_FURNI_CLICK,
      RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN,
    ];
    return (
      this.widget != null && e.push(RoomObjectWidgetRequestEvent.OPEN_WIDGET, RoomObjectWidgetRequestEvent.CLOSE_WIDGET),
      this.contextMenu != null && e.push(RoomObjectWidgetRequestEvent.OPEN_FURNI_CONTEXT_MENU, RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU),
      this.getAllEventTypes(super.getEventTypes(), e)
    );
  }
  dispose() {
    (super.dispose(),
      (this._rb5fe11d3fe1bc6 = null),
      (this._directions = []),
      (this.var_521 = null));
  }
  set roomData(e) {
    this.var_521 = e;
  }
  get roomData() {
    return this.var_521;
  }
  get _rb4c6d05a1b4331() {
    return this.var_521 == null ? null : this.var_521._rb4c6d05a1b4331;
  }
  set object(e) {
    ((super.object = e),
      e != null &&
        e.getLocation() != null &&
        e.getLocation().length > 0 &&
        (this._rc7d47f87c3badf = !0));
  }
  get object() {
    return super.object;
  }
  initialize(e) {
    if (e == null) return;
    ((this._r8e1740c5360bf6 = 0),
      (this._r31b35e71aeb155 = 0),
      (this.var_2506 = 0),
      (this._directions = []));
    let r = e.child("model").child("dimensions");
    if (r.length() === 0) return;
    let [t] = r.toArray();
    if (t == null || !(t instanceof Object) || !("attribute" in t)) return;
    let i = t;
    ((this._r8e1740c5360bf6 = Number(i.attribute("x") ?? 0)),
      (this._r31b35e71aeb155 = Number(i.attribute("y") ?? 0)),
      (this.var_2506 = Number(i.attribute("z") ?? 0)),
      (this.var_4955 = this._r8e1740c5360bf6 / 2),
      (this.var_4775 = this._r31b35e71aeb155 / 2));
    let s = String(i.attribute("centerZ"));
    this._r17994b3464a03b = s.length > 0 ? Number(s) : this.var_2506 / 2;
    let o = ["id"],
      d = e.child("model").child("directions").child("direction");
    for (let b of d.toArray())
      !(b instanceof Object) ||
        !("attribute" in b) ||
        (da.checkRequiredAttributes(b, o) &&
          this._directions.push(Number.parseInt(String(b.attribute("id")), 10)));
    this._directions.sort((b, _) => b - _);
    let c = this.object?.getModelController();
    if (this.object == null || c == null) return;
    let f = e.child("customvars").child("variable"),
      l = [];
    for (let b of f.toArray()) b instanceof Object && "attribute" in b && l.push(String(b.attribute("name")));
    (c._r2b219306ad31b8(RoomObjectVariableEnum.FURNITURE_CUSTOM_VARIABLES, l, !0),
      c.setNumber(RoomObjectVariableEnum.const_693, this._r8e1740c5360bf6, !0),
      c.setNumber(RoomObjectVariableEnum.const_230, this._r31b35e71aeb155, !0),
      c._ra3412bd0673156(RoomObjectVariableEnum.const_357) || c.setNumber(RoomObjectVariableEnum.const_357, this.var_2506),
      c.setNumber(RoomObjectVariableEnum.const_186, this.var_4955, !0),
      c.setNumber(RoomObjectVariableEnum.const_513, this.var_4775, !0),
      c.setNumber(RoomObjectVariableEnum.const_292, this._r17994b3464a03b, !0),
      c._rdb7eb41dc3ec2c(RoomObjectVariableEnum.const_1272, this._directions, !0),
      c.setNumber(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER, 1));
  }
  getAdClickUrl(e) {
    return e.getString(RoomObjectVariableEnum.const_601);
  }
  handleAdClick(e, r, t) {
    this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_FURNI_CLICK, this.object));
  }
  mouseEvent(e, r) {
    if (e == null || r == null || this.object == null) return;
    let t = this.object.getStringToStringMap();
    if (t == null) return;
    let i = this.getAdClickUrl(t),
      s = null;
    switch (e.type) {
      case _ifd7c1208e3417e.var_370:
        this._r11e12b4ff1ca8e != null &&
          ((s = new RoomObjectMouseEvent(
            RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE,
            this.object,
            e.eventId,
            e.altKey,
            e.ctrlKey,
            e.shiftKey,
            e.buttonDown,
          )),
          (s.localX = e.localX),
          (s.localY = e.localY),
          (s._r4667d782ad64ed = e._r4667d782ad64ed),
          (s._r4694aaf1f688a5 = e._r4694aaf1f688a5),
          this._r11e12b4ff1ca8e?.dispatchEvent?.(s));
        break;
      case _ifd7c1208e3417e.ROLL_OVER:
        (this._rd21b5bb3ec9fd4(!0),
          this._r3e30def156d1c8 ||
            (this._r11e12b4ff1ca8e != null &&
              i != null &&
              i.indexOf("http") === 0 &&
              this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_TOOLTIP_SHOW, this.object)),
            this._r11e12b4ff1ca8e != null &&
              ((s = new RoomObjectMouseEvent(
                RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER,
                this.object,
                e.eventId,
                e.altKey,
                e.ctrlKey,
                e.shiftKey,
                e.buttonDown,
              )),
              (s.localX = e.localX),
              (s.localY = e.localY),
              (s._r4667d782ad64ed = e._r4667d782ad64ed),
              (s._r4694aaf1f688a5 = e._r4694aaf1f688a5),
              this._r11e12b4ff1ca8e?.dispatchEvent?.(s)),
            (this._r3e30def156d1c8 = !0)));
        break;
      case _ifd7c1208e3417e.ROLL_OUT:
        (this._rd21b5bb3ec9fd4(!1),
          this._r3e30def156d1c8 &&
            (this._r11e12b4ff1ca8e != null &&
              i != null &&
              i.indexOf("http") === 0 &&
              this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_TOOLTIP_HIDE, this.object)),
            this._r11e12b4ff1ca8e != null &&
              ((s = new RoomObjectMouseEvent(
                RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE,
                this.object,
                e.eventId,
                e.altKey,
                e.ctrlKey,
                e.shiftKey,
                e.buttonDown,
              )),
              (s.localX = e.localX),
              (s.localY = e.localY),
              (s._r4667d782ad64ed = e._r4667d782ad64ed),
              (s._r4694aaf1f688a5 = e._r4694aaf1f688a5),
              this._r11e12b4ff1ca8e?.dispatchEvent?.(s)),
            (this._r3e30def156d1c8 = !1)));
        break;
      case _ifd7c1208e3417e.DOUBLE_CLICK:
        this._rce2b5eb85a79e0();
        break;
      case _ifd7c1208e3417e.CLICK:
        (this._r11e12b4ff1ca8e != null &&
          ((s = new RoomObjectMouseEvent(
            RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK,
            this.object,
            e.eventId,
            e.altKey,
            e.ctrlKey,
            e.shiftKey,
            e.buttonDown,
          )),
          (s.localX = e.localX),
          (s.localY = e.localY),
          (s._r4667d782ad64ed = e._r4667d782ad64ed),
          (s._r4694aaf1f688a5 = e._r4694aaf1f688a5),
          this._r11e12b4ff1ca8e?.dispatchEvent?.(s)),
          this._r11e12b4ff1ca8e != null &&
            i != null &&
            i.indexOf("http") === 0 &&
            this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_TOOLTIP_HIDE, this.object)),
          this._r11e12b4ff1ca8e != null &&
            i != null &&
            this.handleAdClick(this.object.getId(), this.object.getType(), i),
          this._r11e12b4ff1ca8e != null &&
            this.contextMenu != null &&
            this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.OPEN_FURNI_CONTEXT_MENU, this.object)));
        break;
      case _ifd7c1208e3417e._r9001c395573374:
        this._r11e12b4ff1ca8e != null &&
          this._r11e12b4ff1ca8e?.dispatchEvent?.(
            new RoomObjectMouseEvent(
              RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN,
              this.object,
              e.eventId,
              e.altKey,
              e.ctrlKey,
              e.shiftKey,
              e.buttonDown,
            ),
          );
        break;
    }
  }
  _rce2b5eb85a79e0() {
    if (this.object == null) return;
    let e = this.object.getStringToStringMap();
    if (e != null) {
      let r = this.getAdClickUrl(e);
      this._r11e12b4ff1ca8e != null &&
        r != null &&
        r.length > 0 &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new gi(gi.ROOM_AD_FURNI_DOUBLE_CLICK, this.object, void 0, r));
    }
    this._r11e12b4ff1ca8e != null &&
      (this.widget != null &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.OPEN_WIDGET, this.object)),
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object)));
  }
  processUpdateMessage(e) {
    if (this._rd5bdc3a597518f(e)) return;
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    if (r != null) {
      this._r717ea914584fdc(r);
      return;
    }
    let t = e instanceof _i39cc9188cd70ee ? e : null;
    if (t != null) {
      this._r1d92752602efdc(t);
      return;
    }
    let i = e instanceof RoomObjectItemDataUpdateMessage ? e : null;
    if (i != null) {
      this._r8b8257d94293d2(i);
      return;
    }
    if (
      ((this._r3e30def156d1c8 = !1),
      this._rd21b5bb3ec9fd4(!1),
      e?.dir != null && e.loc != null && this.object != null)
    ) {
      if (e instanceof _i1234264269422e) e.dir != null && this.object.setDirection(e.dir);
      else {
        let o = this.object.getDirection(),
          d = this.object.getLocation();
        o != null &&
          d != null &&
          o.x !== e.dir.x &&
          this._rc7d47f87c3badf &&
          d.x === e.loc.x &&
          d.y === e.loc.y &&
          d.z === e.loc.z &&
          ((this._reaaab2b0bcc572 = 1), (this._rb5fe11d3fe1bc6 = new RoomObjectUpdateMessage(e.loc, e.dir)), (e = null));
      }
      this._rc7d47f87c3badf = !0;
    }
    let s = e instanceof _ia9a296a1d0c77f ? e : null;
    if (this.contextMenu != null && s != null && this._r11e12b4ff1ca8e != null && this.object != null) {
      let o = s.selected ? RoomObjectWidgetRequestEvent.OPEN_FURNI_CONTEXT_MENU : RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU;
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(o, this.object));
    }
    super.processUpdateMessage(e);
  }
  _r51a4729c3d6767() {
    return this._reaaab2b0bcc572 > 0
      ? ((this._rf012bb257efe33.x = 0),
        (this._rf012bb257efe33.y = 0),
        this._reaaab2b0bcc572 <= a._r72f1d93b16615d / 2
          ? (this._rf012bb257efe33.z = a._rec41cb6f048a9b * this._reaaab2b0bcc572)
          : this._reaaab2b0bcc572 <= a._r72f1d93b16615d &&
            (this._rb5fe11d3fe1bc6 != null &&
              (super.processUpdateMessage(this._rb5fe11d3fe1bc6), (this._rb5fe11d3fe1bc6 = null)),
            (this._rf012bb257efe33.z = a._rec41cb6f048a9b * (a._r72f1d93b16615d - this._reaaab2b0bcc572))),
        this._rf012bb257efe33)
      : null;
  }
  update(e) {
    (super.update(e),
      this._reaaab2b0bcc572 > 0 &&
        (this._reaaab2b0bcc572++, this._reaaab2b0bcc572 > a._r72f1d93b16615d && (this._reaaab2b0bcc572 = 0)));
  }
  _r04bcf029737be6() {
    (this.widget != null &&
      this.object?.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
      this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CLOSE_WIDGET, this.object)),
      super._r04bcf029737be6());
  }
  _r717ea914584fdc(e) {
    let r = this.object,
      t = r?.getModelController();
    (r?.setState(e.state, 0),
      t != null &&
        (e.data?._r22048429087864(t),
        Number.isNaN(e.extra) ||
          (t.setString(RoomObjectVariableEnum.FURNITURE_EXTRAS, String(e.extra)), t.setNumber(RoomObjectVariableEnum.const_1194, e.extra)),
        t.setNumber(RoomObjectVariableEnum.FURNITURE_STATE_UPDATE_TIME, this._rd5b25ad4c3f288)));
  }
  _r1d92752602efdc(e) {
    this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_357, e.height);
  }
  _r8b8257d94293d2(e) {
    this.object?.getModelController()?.setString(RoomObjectVariableEnum.FURNITURE_ITEMDATA, e.itemData);
  }
}
