// Estratto da HabboAirLauncher.deobf.js, riga 326818.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/uihelpbubbles/UiHelpBubblesWidget.as
// Nome offuscato: _if98c0e0f0165f5

class extends RoomWidgetBase {
  constructor(r, t, i, s, o, d, c, f) {
    super(r, t, i, s);
    this._rfe65c5b79008df = o;
    this._r8e2faa0cfd19a2 = d;
    this.var_82 = f;
    (c != null &&
      ((this._rd7db6fa88ec8b3 = c._r571a3c8f0b3e23(RoomWidgetEnum.ROOM_TOOLS)),
      (this.var_2635 = c._r571a3c8f0b3e23(RoomWidgetEnum.CHAT_INPUT_WIDGET))),
      t.context._r7e43d9f4706607(this));
  }
  static {
    n(this, "UiHelpBubblesWidget");
  }
  _bubbles = new B();
  _rd7db6fa88ec8b3 = null;
  var_2635 = null;
  _ra52646fe56b298 = [];
  var_2519 = 0;
  dispose() {
    if (!this.disposed) {
      for (let r of this._bubbles.getKeys()) this._bubbles.getValue(r)?.dispose();
      (this.windowManager && this.windowManager.context._r7485c47d8bd77c(this),
        this._bubbles.dispose(),
        (this._ra52646fe56b298 = []),
        (this._rd7db6fa88ec8b3 = null),
        (this.var_2635 = null),
        (this._rfe65c5b79008df = null),
        (this._r8e2faa0cfd19a2 = null),
        (this.var_82 = null),
        super.dispose());
    }
  }
  get linkPattern() {
    return "helpBubble/";
  }
  get _r1e876d4b9a9973() {
    return this._r8e2faa0cfd19a2;
  }
  get _rfc2561ec9eab14() {
    return this._rfe65c5b79008df;
  }
  get _r9ff06d4551ee72() {
    return this._rd7db6fa88ec8b3;
  }
  get _r703ae3980492d5() {
    return this.var_2635;
  }
  _r19d359ce43b7af() {
    if (this._ra52646fe56b298.length === 0 || this._ra52646fe56b298.length < this.var_2519 + 1)
      return;
    let r = this._ra52646fe56b298[this.var_2519],
      t = this._ra52646fe56b298.length > this.var_2519 + 1,
      i = r.name,
      s = new UiHelpBubble(this, r, t);
    this._bubbles.hasKey(i) && this._rfb1be14f31cc13(i);
    let o = this._r7832e78f936393(s);
    (this.var_2519++,
      o != null
        ? (s.setPosition(new E(o.x, o.y)),
          s.getWindow()?.desktop.addEventListener(y.const_755, this.onDesktopResized),
          s._r48b49d04d19598(this._r7832e78f936393(s, !0)),
          this._r9ef506bd56528f(i, s))
        : (s.dispose(), this._r19d359ce43b7af()));
  }
  _rfb1be14f31cc13(r) {
    let t = this._bubbles.getValue(r) ?? null;
    t != null && (this._bubbles.remove(r), t.dispose(), this._r19d359ce43b7af());
  }
  _r60315c93465ab7() {
    let r = new RoomWidgetScriptProceedMessage(RoomWidgetScriptProceedMessage.ANSWER);
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(r);
  }
  linkReceived(r) {
    let t = r.split("/"),
      i = t.length;
    if (!(i < 3))
      if (t[1] === "add") {
        let s = 0,
          o = null;
        for (let d = 2; d < i; d++)
          if ((s++, s === 1)) {
            o = new HelpBubbleItem();
            let c = t[d],
              f = UiHelpBubbleIconEnum[c];
            ((o.name = f ?? c), (o.modal = !0));
          } else
            s === 2 &&
              o != null &&
              ((o.text = this.localizations?.getLocalization(t[d], t[d]) ?? t[d]),
              (s = 0),
              this._ra52646fe56b298.push(o));
        this._r19d359ce43b7af();
      } else t[1] === "remove" && this._rfb1be14f31cc13(t[2] ?? "");
  }
  _r7832e78f936393(r, t = !1) {
    let i = r.getWindow();
    if (i == null) return null;
    let s = r.getName();
    if (s === "") return null;
    let o = i.height,
      d = i.width,
      c = class_3148.DOWN,
      f = -1,
      l = null;
    if (this._r8e2faa0cfd19a2 != null) {
      let b = this._r8e2faa0cfd19a2._raa4dc20ed68e9a(s);
      b != null && ((l = new D()), b.getGlobalRectangle(l), r._r72b7b7b15a8834(b));
    }
    if (this._rfe65c5b79008df != null && l == null) {
      let b = this._rfe65c5b79008df._r6822d89b476fe5(s);
      b != null && ((l = new D()), b.getGlobalRectangle(l), r._r72b7b7b15a8834(b));
    }
    if (this._rd7db6fa88ec8b3 != null && l == null) {
      let b = this._rd7db6fa88ec8b3._r6822d89b476fe5(s);
      b != null && ((l = new D()), b.getGlobalRectangle(l), r._r72b7b7b15a8834(b));
    }
    if (l == null && this.var_2635 != null && s === UiHelpBubbleIconEnum.CHAT_INPUT) {
      let b = this.var_2635._rc167ccfc994045(),
        _ = null,
        h = null;
      if ((b.length > 1 && ((_ = b[0]), (h = b[1])), (l = _?.rectangle ?? null), l != null))
        return (
          t ||
            ((l.y -= o - 40),
            (l.x += l.width / 2 - 10),
            h != null && r._r447779b01ab09d(h),
            r._r656ea8ce36863a(c, f)),
          l
        );
    }
    if (l != null) {
      if (t) return l;
      let b = new D(l.x, l.y, l.width, l.height),
        _ = 15,
        h = i.desktop.width;
      (l.y - (o + _) < 50 && (_ = 0), (c = class_3148.DOWN), (f = 0), (l.x += l.width / 2), (l.y -= o + _));
      let p = l.right - b.right;
      if (
        (p >= d / 2 && (p = d / 2 - 25),
        l.y < o &&
          ((l.y += l.height + o + 10),
          (c = class_3148.UP),
          p <= 30 && (p = p / 3),
          (f = p),
          r._r656ea8ce36863a(c, f)),
        l.x < d / 2)
      )
        return ((l.x = 10), (f -= d / 2 - 30), r._r656ea8ce36863a(c, f), l);
      if (l.x + d / 2 > h) return ((l.x = h - d / 2), (f = d / 4), r._r656ea8ce36863a(c, f), l);
      r._r656ea8ce36863a(c, f);
    }
    return l;
  }
  _r9ef506bd56528f(r, t) {
    this._bubbles.add(r, t);
  }
  onDesktopResized = n((r) => {
    for (let t of this._bubbles.getKeys()) {
      let i = this._bubbles.getValue(t);
      if (i == null) continue;
      let s = this._r7832e78f936393(i);
      s != null && (i.setPosition(new E(s.x, s.y)), i._r48b49d04d19598(this._r7832e78f936393(i, !0)));
    }
  }, "onDesktopResized");
}
