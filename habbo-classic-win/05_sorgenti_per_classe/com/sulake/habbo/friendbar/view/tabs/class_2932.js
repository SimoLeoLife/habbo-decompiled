// Extracted from HabboAirLauncher.deobf.js, line 211379.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/tabs/class_2932.as
// Obfuscated name: _icd6fee137df1fb

class a extends br {
  static {
    n(this, "class_2932");
  }
  static ICON = "icon";
  static TEXT = "text";
  static HEADER = "header";
  static LABEL = "label";
  static BUTTON = "button";
  static const_521 = "add_friends_tab_xml";
  static ICON_RESOURCE = "find_friends_icon_png";
  static var_3065 = -1;
  static DEFAULT_COLOR = 8374494;
  static const_535 = 9560569;
  static var_3507 = [];
  static _r3b5980272d3432 = [];
  static allocate() {
    let e = a.var_3507.length > 0 ? a.var_3507.pop() : new a();
    return ((e.var_119 = !1), (e._window = e.allocateEntityWindow()), e);
  }
  allocateEntityWindow() {
    let r =
      a._r3b5980272d3432.pop() ??
      null ??
      br._r4280a9b33bac0a.buildFromXML(br._rb32e1e294172ec.getAssetByName(a.const_521)?.content);
    if (r == null) return null;
    let t = r.findChildByName(a.HEADER);
    (r.addEventListener(u.CLICK, this.onMouseClick),
      r.addEventListener(u.OVER, this._rad325cc53260a0),
      r.addEventListener(u.OUT, this.onMousetOut),
      t?.addEventListener(u.CLICK, this.onMouseClick),
      t?.addEventListener(u.OVER, this._rad325cc53260a0),
      t?.addEventListener(u.OUT, this.onMousetOut),
      a.var_3065 < 0 && (a.var_3065 = r.height),
      (r.height = br.HEIGHT));
    let i = r.findChildByName(a.ICON);
    (i != null &&
      ((i.disposesBitmap = !1),
      (i.bitmap = br._rb32e1e294172ec.getAssetByName(a.ICON_RESOURCE)?.content)),
      r.findChildByName(a.BUTTON)?.addEventListener(u.CLICK, this._r33ac440d45394b));
    let o = r.findChildByName(a.TEXT);
    return (o != null && (o.visible = !1), r);
  }
  select(e) {
    if (!this.selected && this._window != null) {
      (e && br._rd5514a58d31e07 && us.runMotion(this._window) == null
        ? us.DropBounce(
            new UnkMotionSubclass_5f3e1b(
              new UnkClass_7dc350(
                new UnkClass_ffb4fb(
                  this._window,
                  br._MOTION_TIME,
                  this._window.width,
                  a.var_3065,
                ),
                br.const_509,
              ),
              new UnkClass_7dc350(
                new UnkClass_4663cb(
                  this._window,
                  br._MOTION_TIME,
                  this._window.x,
                  -(a.var_3065 - br.HEIGHT),
                ),
                br.const_509,
              ),
            ),
          )
        : ((this._window.height = a.var_3065),
          (this._window.y -= this._window.height - br.HEIGHT)),
        this._window.findChildByName(a.TEXT)?.setParamFlag?.(0, !0));
      let r = this._window.findChildByName(a.TEXT);
      (r != null && (r.visible = !0), super.select(e));
    }
  }
  deselect(e) {
    if (this.selected && this._window != null) {
      ((this._window.y = 0), (this._window.height = br.HEIGHT));
      let r = this._window.findChildByName(a.TEXT);
      (r != null && (r.visible = !1), super.deselect(e));
    }
  }
  recycle() {
    !this.disposed &&
      !this.var_119 &&
      (this._window != null &&
        (this._r1575db773132e3(this._window), (this._window = null)),
      (this.var_119 = !0),
      a.var_3507.push(this));
  }
  _rff101a3ebedfdf() {
    super._rff101a3ebedfdf();
    let e = this._window?.findChildByTag(a.LABEL);
    (e != null && (e.underline = this.exposed),
      this._window != null &&
        (this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR));
  }
  conceal() {
    super.conceal();
    let e = this._window?.findChildByTag(a.LABEL);
    (e != null && (e.underline = this.exposed),
      this._window != null &&
        (this._window.color = this.exposed ? a.const_535 : a.DEFAULT_COLOR));
  }
  _r1575db773132e3(e) {
    if (e.disposed) return;
    ((e.procedure = null),
      e.removeEventListener(u.CLICK, this.onMouseClick),
      e.removeEventListener(u.OVER, this._rad325cc53260a0),
      e.removeEventListener(u.OUT, this.onMousetOut));
    let r = e.findChildByName(a.HEADER);
    (r?.removeEventListener(u.CLICK, this.onMouseClick),
      r?.removeEventListener(u.OVER, this._rad325cc53260a0),
      r?.removeEventListener(u.OUT, this.onMousetOut),
      e.findChildByName(a.BUTTON)?.removeEventListener(u.CLICK, this._r33ac440d45394b));
    let t = e.findChildByName(a.TEXT);
    (t != null && (t.visible = !1),
      (e.width = br.WIDTH),
      (e.height = br.HEIGHT),
      a._r3b5980272d3432.includes(e) || a._r3b5980272d3432.push(e));
  }
  _r33ac440d45394b = n((e) => {
    !this.disposed && !this.recycled && (br._ra38a77a0a4203f._ra110382b6557cc(), this.deselect(!0));
  }, "_r33ac440d45394b");
}
