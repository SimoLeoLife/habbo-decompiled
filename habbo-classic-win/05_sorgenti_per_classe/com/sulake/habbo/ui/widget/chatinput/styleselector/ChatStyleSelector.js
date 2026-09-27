// Estratto da HabboAirLauncher.deobf.js, riga 310363.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chatinput/styleselector/ChatStyleSelector.as
// Nome offuscato: _ic328c9027586c5

class a {
  constructor(e, r) {
    this.var_159 = e;
    this._container = r;
    ((this._r23af78f6d498ca = new DIe(this)),
      (this.class_2116 = this._rd7565bf03cc934("chatinput_chatstyle_template_xml")),
      (this._r68c2222628fde9 = this._rd7565bf03cc934("chatinput_chatfontsize_template_xml")),
      this._container != null && (this._container.procedure = this._rb33906bc57cc16));
    let t = this.var_159._r36396672c3e330,
      i = this._r23af78f6d498ca.window;
    (t != null && i != null && (t.addChild(i), (i.x = 0), (i.y = 0), (t.visible = !1)),
      this.createFontSizeOptions());
  }
  static {
    n(this, "ChatStyleSelector");
  }
  static _rf9c776300ecd16 = 1;
  static MAX_GRID_COLUMNS = 6;
  static _rb5995f7861a879 = 4;
  static _rb45f5f788b2e99 = 0;
  static _r09dd7d4556555b = 4;
  static _rc4112a76d8a1f8 = ["S", "M", "L", "XL", "XXL"];
  static _selected = null;
  static _r12ba1251a8e087 = !1;
  static _r0aa05c65cb7c45 = a._rb45f5f788b2e99;
  _r23af78f6d498ca;
  _entries = [];
  class_2116;
  _r68c2222628fde9;
  _r508741613ce64c = null;
  _rb33906bc57cc16 = n((e, r) => {
    this.windowProc(e, r);
  }, "_rb33906bc57cc16");
  gridItemWindowProc = n((e, r) => {
    this.showBackgroundOnlyForItem(e, r);
  }, "gridItemWindowProc");
  fontSizeItemWindowProc = n((e, r) => {
    this.updateFontSizeSelectionHighlight(e, r);
  }, "fontSizeItemWindowProc");
  dispose() {
    ((this._entries = []),
      this._container != null && (this._container.procedure = null),
      this._r23af78f6d498ca?.dispose(),
      (this._r23af78f6d498ca = null),
      (this._container = null),
      this._r508741613ce64c?.parent != null &&
        this._r508741613ce64c.parent.removeChild(this._r508741613ce64c),
      (this._r508741613ce64c = null),
      (this.class_2116 = null),
      (this._r68c2222628fde9 = null));
  }
  get disposed() {
    return this._r23af78f6d498ca == null;
  }
  get _r95d7112e402b2a() {
    return this.var_159;
  }
  get visible() {
    return this.var_159._r36396672c3e330?.visible ?? !1;
  }
  hide() {
    let e = this.var_159._r36396672c3e330;
    (e != null && (e.visible = !1),
      this._r23af78f6d498ca?.window != null && (this._r23af78f6d498ca.window.visible = !1));
  }
  _rba1cd323364faa(e) {
    return (
      a.isWindowInTree(e, this._container) ||
      a.isWindowInTree(e, this.var_159._r36396672c3e330) ||
      a.isWindowInTree(e, this._r23af78f6d498ca?.window ?? null)
    );
  }
  addItem(e, r) {
    let t = this._r23af78f6d498ca?.grid;
    if (t == null) return;
    this._entries.push(new ChatStyleGridEntry(e, r));
    let i = this.getGridItemWindowWrapper(r);
    if (i == null) return;
    t.addGridItem(i);
    let s = i.findChildByName("background_color");
    s != null && (s.visible = !1);
  }
  clear() {
    ((this._entries = []), this._r23af78f6d498ca?.grid?.removeGridItems());
  }
  get _rf854f57a7d9d24() {
    return a._r12ba1251a8e087 && this.selected != null ? ((a._r12ba1251a8e087 = !1), this.selected.id) : -1;
  }
  get _r75c88fef386f52() {
    return this.selected?.bitmap ?? null;
  }
  _r544a26d8688ab8() {
    if (this._entries.length === 0) {
      a._r12ba1251a8e087 = !1;
      return;
    }
    ((this.selected = this.selected), (a._r12ba1251a8e087 = !1));
  }
  _r0ede5ca63662f8(e) {
    ((a._r0aa05c65cb7c45 = this._rdf1b182749d17a(e)), this._rf21506b031cf18());
  }
  set _r40be942090cb5a(e) {
    let r = this._r23af78f6d498ca?.grid;
    if (r == null || this.class_2116 == null) return;
    let t = (e - 1) * (this.class_2116.width + a._rf9c776300ecd16) + this.class_2116.width;
    r.width = e > 1 ? t : this.class_2116.width + 16;
  }
  set selected(e) {
    if (e == null) return;
    ((a._selected = e), (a._r12ba1251a8e087 = !0));
    let r =
        this.var_159.widget.handler.container?._rafd5b9130c4bfd?.chatStyleLibrary?._r22c9347ecec607(
          e.id,
        ),
      t = this.var_159.window?.findChildByName("chat_bg_preview");
    if (r == null || t == null) return;
    let i = r.overlap ?? void 0,
      s = r._r3abb3c4d9f4245(16777215);
    ((s.width = t.width + (i?.width ?? 0)),
      (s.height = t.height + (i?.y ?? 0) + (i?.height ?? 0)),
      (s.y -= i?.y ?? 0),
      this._r508741613ce64c == null
        ? (this._r508741613ce64c = new _ic6b6cdf3ccea3d())
        : this._r508741613ce64c.graphics.clear(),
      this._r508741613ce64c.graphics.beginFill(16711680),
      this._r508741613ce64c.graphics.drawRect(0, 0, s.width - 28, s.height),
      t.setDisplayObject(s),
      s.parent != null &&
        (s.parent.addChild(this._r508741613ce64c),
        (this._r508741613ce64c.x = s.x + 28),
        (this._r508741613ce64c.y = s.y),
        (s.mask = this._r508741613ce64c)),
      this.var_159._r58ca7aa7e9e59f(r._r39fa5000b657f2.color ?? 0));
  }
  get selected() {
    return (
      a._selected == null &&
        this._entries.length > 0 &&
        (a._selected = this._entries[this._entries.length - 1] ?? null),
      a._selected
    );
  }
  getGridItemWindowWrapper(e) {
    let r = this.class_2116?.clone();
    if (r == null) return null;
    let t = r.findChildByName("bubble_preview");
    return (t != null && ((t.bitmap = e), t.center()), (r.procedure = this.gridItemWindowProc), r);
  }
  createFontSizeOptions() {
    let e = this._r23af78f6d498ca?.fontSizeList;
    if (!(e == null || this._r68c2222628fde9 == null)) {
      for (let r = 0; r < a._rc4112a76d8a1f8.length; r++) {
        let t = this.getFontSizeItemWindowWrapper(a._rc4112a76d8a1f8[r], r);
        t != null && e.addListItem(t);
      }
      this._rf21506b031cf18();
    }
  }
  getFontSizeItemWindowWrapper(e, r) {
    let t = this._r68c2222628fde9?.clone();
    if (t == null) return null;
    t.id = r;
    let i = t.findChildByName("label");
    return (i != null && (i.caption = e), (t.procedure = this.fontSizeItemWindowProc), t);
  }
  _r8c824e72236ede() {
    this._r23af78f6d498ca?.window?.visible === !0 &&
      this._container != null &&
      this._r23af78f6d498ca.alignToSelector(this._container);
  }
  _rd7565bf03cc934(e) {
    let r = this.var_159.widget.assets?.getAssetByName(e)?.content;
    return r == null ? null : (this.var_159.widget.windowManager?.buildFromXML(r) ?? null);
  }
  windowProc(e, r) {
    if (e.type === u.CLICK_AWAY) {
      this._r31a5f5002af1e4(e.related);
      return;
    }
    if (e.type !== u.CLICK) return;
    ((a._r0aa05c65cb7c45 = this._rdf1b182749d17a(
      this.var_159.widget.handler.container?._rafd5b9130c4bfd?._re247be6bfa9ecb ?? 0,
    )),
      this._rf21506b031cf18());
    let t = this.var_159._r36396672c3e330;
    if (t == null || this._r23af78f6d498ca?.window == null) return;
    let i = !t.visible;
    ((t.visible = i),
      (this._r23af78f6d498ca.window.visible = i),
      i && this.var_159._r94eb39cd305aea(),
      this._r8c824e72236ede());
  }
  showBackgroundOnlyForItem(e, r) {
    if (e.type === u.CLICK_AWAY) {
      this._r31a5f5002af1e4(e.related);
      return;
    }
    let t = this._r23af78f6d498ca?.grid;
    if (t != null) {
      if (e.type === u.CLICK) {
        let i = t._r76bcf89cad2fb2(r);
        (this._re5cc4b56ac55ff(r), (this.selected = this._entries[i] ?? null));
      }
      if (e.type === u.OVER) {
        let i = r.findChildByName("background_color");
        i != null && (i.color = 4291875024);
      }
      if (e.type === u.OUT) {
        let i = r.findChildByName("background_color");
        i != null && (i.color = 4294967295);
      }
    }
  }
  updateFontSizeSelectionHighlight(e, r) {
    if (e.type === u.CLICK_AWAY) {
      this._r31a5f5002af1e4(e.related);
      return;
    }
    let t = this._rcab1ef1118ce46(r);
    if (t != null) {
      if (e.type === u.CLICK) {
        a._r0aa05c65cb7c45 = this._rdf1b182749d17a(t.id);
        let i = this.var_159.widget.handler.container?._rafd5b9130c4bfd;
        (i != null && (i._re247be6bfa9ecb = a._r0aa05c65cb7c45), this._rf21506b031cf18());
      }
      if (e.type === u.OVER) {
        let i = t.findChildByName("background_color");
        i != null && (i.color = 4291875024);
      }
      if (e.type === u.OUT) {
        let i = t.findChildByName("background_color");
        i != null && (i.color = 4294967295);
      }
    }
  }
  _r31a5f5002af1e4(e) {
    this.visible && !this._rba1cd323364faa(e) && this.hide();
  }
  static isWindowInTree(e, r) {
    for (; e != null;) {
      if (e === r) return !0;
      e = e.parent;
    }
    return !1;
  }
  _re5cc4b56ac55ff(e) {
    let r = this._r23af78f6d498ca?.grid;
    if (r == null) return;
    for (let i = 0; i < r._r72acf104e2c444; i++) {
      let s = r.getGridItemAt(i)?.findChildByName("background_color");
      s != null && (s.visible = !1);
    }
    let t = e.findChildByName("background_color");
    t != null && (t.visible = !0);
  }
  _rf21506b031cf18() {
    let e = this._r23af78f6d498ca?.fontSizeList;
    if (e != null)
      for (let r = 0; r < e.numListItems; r++) {
        let t = e.getListItemAt(r),
          i = t?.id === a._r0aa05c65cb7c45,
          s = t?.findChildByName("background_color"),
          o = t?.findChildByName("label");
        (s != null && (s.visible = i), o != null && (o.textColor = i ? 3355443 : 10066329));
      }
  }
  _rcab1ef1118ce46(e) {
    let r = this._r23af78f6d498ca?.fontSizeList,
      t = e;
    for (; t != null && t.parent != null && t.parent.parent !== r;) t = t.parent;
    return t;
  }
  _rdf1b182749d17a(e) {
    return e < a._rb45f5f788b2e99
      ? a._rb45f5f788b2e99
      : e > a._r09dd7d4556555b
        ? a._r09dd7d4556555b
        : Math.trunc(e);
  }
}
