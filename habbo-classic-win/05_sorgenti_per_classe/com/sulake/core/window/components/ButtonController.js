// Extracted from HabboAirLauncher.deobf.js, line 132179.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ButtonController.as
// Obfuscated name: _ie1dfea1e537f2f

class a extends Ci {
  static {
    n(this, "ButtonController");
  }
  static TEXT_FIELD_NAME = "_BTN_TEXT";
  static CAPTION_BLEND_CHANGE = 0.5;
  get caption() {
    return super.caption;
  }
  set caption(e) {
    super.caption = e;
    let r = this.getChildByName(a.TEXT_FIELD_NAME);
    r !== null && (r.caption = this.caption);
  }
  get textStyle() {
    let e = this.textWindow;
    return e !== null ? e.textStyle : null;
  }
  set textStyle(e) {
    if (e == null) return;
    let r = this.textWindow;
    r !== null && (r.textStyle = e);
  }
  get blend() {
    return super.blend;
  }
  set blend(e) {
    super.blend = e;
    let r = this.getChildByName(a.TEXT_FIELD_NAME),
      t = this.getStateFlag(class_1948.const_117);
    r !== null && (r.blend = t ? e / 2 : e);
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    super.constructWindow(e, r, t, i | N.expandToAccommodateChild, s, o, d, c, f, l, b, _);
  }
  get properties() {
    let e = super.properties,
      r = this.textWindow;
    return (
      r !== null && r.textStyle != null && e.push(this.createProperty(class_3436.TEXT_STYLE, r.textStyle.name)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      if (r.key === class_3436.TEXT_STYLE) {
        let t = class_3390._r22c9347ecec607(r.value);
        t != null && (this.textStyle = t);
      }
    super.properties = e;
  }
  update(e, r) {
    switch (r.type) {
      case y.const_906:
        this.width = 0;
        break;
      case y.const_1331:
        try {
          let t = this.getChildByName(a.TEXT_FIELD_NAME);
          t !== null && (t.blend += a.CAPTION_BLEND_CHANGE);
        } catch {}
        break;
      case y.const_1057:
        try {
          let t = this.getChildByName(a.TEXT_FIELD_NAME);
          t !== null && (t.blend -= a.CAPTION_BLEND_CHANGE);
        } catch {}
        break;
    }
    if (r instanceof Zn) {
      let t = y.UNKNOWN;
      switch (r.type) {
        case Zn.WINDOW_EVENT_TOUCH_BEGIN:
          t = u.DOWN;
          break;
        case Zn.const_930:
          t = u.UP;
          break;
        case Zn.const_473:
          t = u.CLICK;
          break;
      }
      let i = r,
        s = u.allocate(
          t,
          i.window,
          i.related,
          i.localX,
          i.localY,
          i.stageX,
          i.stageY,
          i.altKey,
          i.ctrlKey,
          i.shiftKey,
          !0,
          0,
        ),
        o = super.update(e, s);
      return (s.recycle(), o);
    }
    return super.update(e, r);
  }
  get textWindow() {
    return this.getChildByName(a.TEXT_FIELD_NAME);
  }
}
