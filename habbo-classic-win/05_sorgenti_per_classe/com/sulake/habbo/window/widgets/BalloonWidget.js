// Estratto da HabboAirLauncher.deobf.js, riga 148273.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/BalloonWidget.as
// Nome offuscato: _ia8c4131fb71d6e

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("balloon_xml")?.content,
    )),
      (this._r2f21792ce78db6 = this._rf8f9fc25599fa4?.findChildByName("bitmap")),
      (this.var_162 = this._rf8f9fc25599fa4?.findChildByName("border")),
      this._r3bf078f36bde00(),
      this.var_220?.addEventListener(y.const_1204, this.onChange),
      this.var_220?.addEventListener(y.const_755, this.onChange),
      this.var_162?.addEventListener(y.const_1204, this.onChange),
      this.var_162?.addEventListener(y.const_755, this.onChange),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)));
  }
  static {
    n(this, "BalloonWidget");
  }
  static TYPE = "balloon";
  static _rb61e497eefec18 = `${a.TYPE}:arrow_pivot`;
  static _ra7a5d2aab23cf5 = `${a.TYPE}:arrow_displacement`;
  static _rb2aa5d09f1cf0e = new ne(a._rb61e497eefec18, vs.UP_CENTER, ne.STRING, !1, vs.ALL);
  static _r922b97c11ad022 = new ne(a._ra7a5d2aab23cf5, 0, ne.INT);
  static ARROW_ASSET_PREFIX = "illumina_light_balloon_arrow_";
  static _r64595f1801dbc7 = 6;
  static _r01b762983ed00d = 6;
  static ARROW_WIDTH = 9;
  _disposed = !1;
  _settingProperties = !1;
  var_775 = !1;
  _rf8f9fc25599fa4 = null;
  var_162 = null;
  _r2f21792ce78db6 = null;
  _rf901fe003210c8 = String(a._rb2aa5d09f1cf0e.value);
  _rd1791fc1b2da2f = Number(a._r922b97c11ad022.value);
  dispose() {
    this._disposed ||
      (this.var_162?.removeEventListener(y.const_1204, this.onChange),
      this.var_162?.removeEventListener(y.const_755, this.onChange),
      this.var_220?.removeEventListener(y.const_1204, this.onChange),
      this.var_220?.removeEventListener(y.const_755, this.onChange),
      (this.var_162 = null),
      (this._r2f21792ce78db6 = null),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return this.var_162?.iterator ?? Lt.INSTANCE;
  }
  get properties() {
    return this._disposed
      ? []
      : [
          a._rb2aa5d09f1cf0e.withValue(this._rf901fe003210c8),
          a._r922b97c11ad022.withValue(this._rd1791fc1b2da2f),
        ];
  }
  set properties(e) {
    this._settingProperties = !0;
    for (let r of e)
      switch (r.key) {
        case a._rb61e497eefec18:
          this._rdc314a2ccfb27c = String(r.value);
          break;
        case a._ra7a5d2aab23cf5:
          this._r1278f4863fc8be = Number(r.value);
          break;
      }
    ((this._settingProperties = !1), this.refresh());
  }
  get _rdc314a2ccfb27c() {
    return this._rf901fe003210c8;
  }
  set _rdc314a2ccfb27c(e) {
    ((this._rf901fe003210c8 = e),
      this._r0df912ab46cad2(),
      this.refresh(),
      this._r3bf078f36bde00(),
      this.refresh());
  }
  get _r1278f4863fc8be() {
    return this._rd1791fc1b2da2f;
  }
  set _r1278f4863fc8be(e) {
    ((this._rd1791fc1b2da2f = Math.trunc(e)), this.refresh());
  }
  onChange = n(() => {
    this.refresh();
  }, "onChange");
  _r3bf078f36bde00() {
    this.var_162 != null &&
      this.var_220 != null &&
      (this.var_162.setParamFlag(
        N.expandToAccommodateChild,
        this.var_220.getParamFlag(N.expandToAccommodateChild),
      ),
      this.var_162.setParamFlag(
        N._r22d1ec858797ca,
        this.var_220.getParamFlag(N._r22d1ec858797ca),
      ));
  }
  _r0df912ab46cad2() {
    this.var_162 != null &&
      (this.var_162.setParamFlag(N.expandToAccommodateChild, !1),
      this.var_162.setParamFlag(N._r22d1ec858797ca, !1));
  }
  refresh() {
    if (
      this._settingProperties ||
      this.var_775 ||
      this._disposed ||
      this.var_162 == null ||
      this._rf8f9fc25599fa4 == null ||
      this.var_220 == null ||
      this._r2f21792ce78db6 == null
    )
      return;
    let e = vs.directionFromPivot(this._rf901fe003210c8).trim(),
      r = this._rf8f9fc25599fa4.width,
      t = this._rf8f9fc25599fa4.height;
    switch (e) {
      case vs.UP:
      case vs.DOWN:
        ((r = this.var_162.width), (t = this.var_162.height + a._r01b762983ed00d - 1));
        break;
      case vs.const_27:
      case vs.RIGHT:
        ((r = this.var_162.width + a._r01b762983ed00d - 1), (t = this.var_162.height));
        break;
    }
    ((this.var_775 = !0),
      this.var_220.testParamFlag(N._r22d1ec858797ca)
        ? ((this._rf8f9fc25599fa4.width = r), (this._rf8f9fc25599fa4.height = t))
        : this.var_220.testParamFlag(N.expandToAccommodateChild)
          ? ((this._rf8f9fc25599fa4.width = Math.max(this.var_220.width, r)),
            (this._rf8f9fc25599fa4.height = Math.max(this.var_220.height, t)))
          : ((this._rf8f9fc25599fa4.width = this.var_220.width),
            (this._rf8f9fc25599fa4.height = this.var_220.height)),
      (this.var_220.width = this._rf8f9fc25599fa4.width),
      (this.var_220.height = this._rf8f9fc25599fa4.height),
      (this.var_775 = !1));
    let i = 0;
    switch (((this._r2f21792ce78db6.assetUri = `${a.ARROW_ASSET_PREFIX}${e}`), e)) {
      case vs.UP:
      case vs.DOWN:
        switch (vs.positionFromPivot(this._rf901fe003210c8)) {
          case vs.const_88:
            i = a._r64595f1801dbc7;
            break;
          case vs.const_792:
            i = (this._rf8f9fc25599fa4.width - a.ARROW_WIDTH) / 2;
            break;
          case vs.MAXIMUM:
            i = this._rf8f9fc25599fa4.width - a._r64595f1801dbc7 - a.ARROW_WIDTH;
            break;
        }
        ((this.var_775 = !0),
          (this.var_162.rectangle = new D(
            0,
            e === vs.UP ? a._r01b762983ed00d - 1 : 0,
            this._rf8f9fc25599fa4.width,
            this._rf8f9fc25599fa4.height + 1 - a._r01b762983ed00d,
          )),
          (this.var_775 = !1),
          (this._r2f21792ce78db6.rectangle = new D(
            In.clamp(
              i + this._rd1791fc1b2da2f,
              a._r64595f1801dbc7,
              this._rf8f9fc25599fa4.width - a._r64595f1801dbc7,
            ),
            e === vs.UP ? 0 : this.var_162.bottom - 1,
            a.ARROW_WIDTH,
            a._r01b762983ed00d,
          )));
        break;
      case vs.const_27:
      case vs.RIGHT:
        switch (vs.positionFromPivot(this._rf901fe003210c8)) {
          case vs.const_88:
            i = a._r64595f1801dbc7;
            break;
          case vs.const_792:
            i = (this._rf8f9fc25599fa4.height - a.ARROW_WIDTH) / 2;
            break;
          case vs.MAXIMUM:
            i = this._rf8f9fc25599fa4.height - a._r64595f1801dbc7 - a.ARROW_WIDTH;
            break;
        }
        ((this.var_775 = !0),
          (this.var_162.rectangle = new D(
            e === vs.const_27 ? a._r01b762983ed00d - 1 : 0,
            0,
            this._rf8f9fc25599fa4.width + 1 - a._r01b762983ed00d,
            this._rf8f9fc25599fa4.height,
          )),
          (this.var_775 = !1),
          (this._r2f21792ce78db6.rectangle = new D(
            e === vs.const_27 ? 0 : this.var_162.right - 1,
            In.clamp(
              i + this._rd1791fc1b2da2f,
              a._r64595f1801dbc7,
              this._rf8f9fc25599fa4.height - a._r64595f1801dbc7,
            ),
            a._r01b762983ed00d,
            a.ARROW_WIDTH,
          )));
        break;
    }
  }
}
