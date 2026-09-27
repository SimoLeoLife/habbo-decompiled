// Estratto da HabboAirLauncher.deobf.js, riga 137027.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/HTMLTextController.as
// Nome offuscato: _i3ba59c2936861a

class a extends Tp {
  static {
    n(this, "HTMLTextController");
  }
  static HTML_STYLESHEET_KEY = "html_stylesheet";
  static var_4083 = class_3436._rde70b1e64d8846;
  _r14edc1cb00fc7d = class_3436._rde70b1e64d8846;
  _htmlStyleSheetString = null;
  var_5058 = null;
  _r6415710410c89d = n((e) => {
    this.immediateClickHandler(e);
  }, "_r6415710410c89d");
  static set defaultLinkTarget(e) {
    a.var_4083 = e;
  }
  static get defaultLinkTarget() {
    return a.var_4083;
  }
  set linkTarget(e) {
    class_3436._rfac04db59e4deb.indexOf(e) > -1 && (this._r14edc1cb00fc7d = e);
  }
  get linkTarget() {
    return this._r14edc1cb00fc7d === class_3249.DEFAULT ? a.defaultLinkTarget : this._r14edc1cb00fc7d;
  }
  get _r4523841bab9711() {
    return this._htmlStyleSheetString;
  }
  set _r4523841bab9711(e) {
    a.setHtmlStyleSheetString(this, e);
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this.immediateClickMode = !0),
      "allowedDomains" in this.stage &&
        (this.stage.allowedDomains = [
          "images.habbo.com",
          "www.habbo.com",
          "www.habbo.com.br",
          "www.habbo.fi",
          "www.habbo.fr",
          "www.habbo.de",
          "www.habbo.nl",
          "www.habbo.es",
          "www.habbo.it",
          "www.habbo.com.tr",
          "sandbox.habbo.com",
          "duke.varoke.net",
          "s1.varoke.net",
          "d63.varoke.net",
          "dev.varoke.net",
        ]),
      (this.stage.type = eo.var_4430),
      (this.stage.mouseEnabled = !0),
      (this.stage.selectable = !1),
      (this.stage._rbf8a933bf67bb1 = !0));
  }
  set immediateClickMode(e) {
    e === this._r1565a157f96c52 ||
      this.stage == null ||
      ((this._r1565a157f96c52 = e),
      this._r1565a157f96c52
        ? this.stage.addEventListener(_i6d7150da12036f.LINK, this._r6415710410c89d)
        : this.stage.removeEventListener(_i6d7150da12036f.LINK, this._r6415710410c89d));
  }
  get immediateClickMode() {
    return super.immediateClickMode;
  }
  get text() {
    return this.stage.htmlText;
  }
  get htmlText() {
    return this.stage.htmlText;
  }
  set text(e) {
    e != null &&
      (this._localized &&
        (this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
        (this._localized = !1)),
      (this._caption = e),
      this._caption.charAt(0) === "$" && this._caption.charAt(1) === "{"
        ? (this.context?._r0fab3c6d38398a(
            this._caption.slice(2, this._caption.indexOf("}")),
            this,
          ),
          (this._localized = !0))
        : this.stage != null &&
          ((this.stage.htmlText = a.convertLinksToEvents(this._caption)),
          this.refreshTextImage()));
  }
  set localization(e) {
    e != null &&
      this.stage != null &&
      ((this.stage.htmlText = this._ra13b5ed4ed6e51(a.convertLinksToEvents(e))),
      this.refreshTextImage());
  }
  set htmlText(e) {
    e != null &&
      (this._localized &&
        (this.context?._r33082b59b9c769(
          this._caption.slice(2, this._caption.indexOf("}")),
          this,
        ),
        (this._localized = !1)),
      (this._caption = e),
      this._caption.charAt(0) === "$" && this._caption.charAt(1) === "{"
        ? (this.context?._r0fab3c6d38398a(
            this._caption.slice(2, this._caption.indexOf("}")),
            this,
          ),
          (this._localized = !0))
        : this.stage != null &&
          ((this.stage.htmlText = a.convertLinksToEvents(this._caption)),
          (this.stage.styleSheet = this.var_5058),
          this.refreshTextImage()));
  }
  get properties() {
    let e = Ci.readInteractiveWindowProperties(this, super.properties);
    return (
      e.push(this.createProperty(class_3436.const_1130, this.stage.type === eo.INPUT)),
      e.push(this.createProperty(class_3436.FOCUS_CAPTURER, this._r216fdbc432f36a)),
      e.push(this.createProperty(class_3436.const_736, this.stage.selectable)),
      e.push(this.createProperty(class_3436.const_869, this.stage._rfd454f4d33a88a)),
      e.push(this.createProperty(class_3436.DISPLAY_RAW, this._raf640b58dc0fd1)),
      e.push(this.createProperty(class_3436.HTML_LINK_TARGET, this._r14edc1cb00fc7d)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436.HTML_LINK_TARGET:
          this._r14edc1cb00fc7d = String(r.value);
          break;
        case a.HTML_STYLESHEET_KEY:
          this._r4523841bab9711 = r.value == null ? null : String(r.value);
          break;
      }
    super.properties = e;
  }
  initializeLinkStyle() {
    let e = new _ib0061b42edfac2(),
      r = {};
    r.color = "#0051a4";
    let t = {};
    ((t.textDecoration = "underline"), (t.color = "#006de0"));
    let i = {};
    i.color = "#0053ad";
    let s = {};
    ((s.textDecoration = "underline"),
      e._r14e5354d420daf("a:link", t),
      e._r14e5354d420daf("a:hover", r),
      e._r14e5354d420daf("a:active", i),
      e._r14e5354d420daf(".visited", s),
      (this.styleSheet = e));
  }
  dispose() {}
  update(e, r) {
    let t = super.update(e, r);
    if (
      e === this &&
      this._r1565a157f96c52 &&
      r instanceof u &&
      (r.type === u.CLICK || r.type === u.DOUBLE_CLICK)
    ) {
      let i = this.stage._rab748482ca88f4(r.localX, r.localY);
      i != null && (this.immediateClickHandler(new _i6d7150da12036f(_i6d7150da12036f.LINK, !1, !1, i)), r.preventWindowOperation());
    }
    return t;
  }
  _r39d375fb795d62() {
    return !1;
  }
  immediateClickHandler(e) {
    if (e instanceof _i6d7150da12036f) {
      let r = kd.allocate(e.text, this, null);
      this._events && this._events.dispatchEvent(r);
      let t = !1;
      for (let i of this._context?.linkEventTrackers ?? [])
        i.linkPattern.length > 0
          ? r.link.substring(0, i.linkPattern.length) === i.linkPattern &&
            (i.linkReceived(r.link), (t = !0))
          : i.linkReceived(r.link);
      if (!r.isWindowOperationPrevented()) {
        let i = this.procedure;
        i?.(r, this);
      }
      (!t &&
        !r.isWindowOperationPrevented() &&
        this.linkTarget !== class_3249.INTERNAL &&
        a.openWebPage(e.text, this.linkTarget),
        e.stopImmediatePropagation(),
        r.recycle());
    } else super.immediateClickHandler(e);
  }
  static setHtmlStyleSheetString(e, r) {
    if (
      !(e == null || e._htmlStyleSheetString === r) &&
      ((e._htmlStyleSheetString = r), (e.var_5058 = null), e._htmlStyleSheetString != null)
    ) {
      let t = new _ib0061b42edfac2();
      (t.parseCSS(e._htmlStyleSheetString), (e.var_5058 = t));
    }
  }
  static convertLinksToEvents(e) {
    let r = e.replace(/<a[^>]+(http:\/\/[^"']+)['"][^>]*>(.*)<\/a>/gi, "<a href='event:$1'>$2</a>");
    return (
      (r = r.replace(/<a[^>]+(https:\/\/[^"']+)['"][^>]*>(.*)<\/a>/gi, "<a href='event:$1'>$2</a>")),
      r
    );
  }
  static openWebPage(e, r) {
    let t = r;
    if ((t == null && (t = a.var_4083), ur.available)) {
      let i = "";
      try {
        i = String(ur.call("function() { return navigator.userAgent; }") ?? "").toLowerCase();
      } catch {
        i = "";
      }
      if (
        i.indexOf("safari") > -1 ||
        i.indexOf("chrome") > -1 ||
        i.indexOf("firefox") > -1 ||
        (i.indexOf("msie") > -1 && Number(i.substring(i.indexOf("msie") + 5, i.indexOf("msie") + 8)) >= 7)
      ) {
        let s;
        try {
          s = ur.call(
            `function() { let win = window.open('${e}', '${t}'); if (win) { win.focus(); } return true; }`,
          );
        } catch {}
        if (s) return;
      }
      _i7dcfde9cf3179b(new _i636490202c0f9a(e), t);
    }
  }
}
