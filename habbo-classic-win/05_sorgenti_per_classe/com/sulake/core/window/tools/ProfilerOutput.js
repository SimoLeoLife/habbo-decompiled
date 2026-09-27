// Extracted from HabboAirLauncher.deobf.js, line 143696.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/tools/ProfilerOutput.as
// Obfuscated name: _id73fd8df6e1c3a

class a {
    constructor(e, r, t) {
      this._windowManager = r;
      this._rbb89a263a355a1 = t;
      this._rd7b3b1e2e39308 = e;
    }
    static {
      n(this, "ProfilerOutput");
    }
    static ZERO_POINT = new E();
    static _rd733747e079ae1 = null;
    static _ra25cb618ee5ff1 = null;
    _disposed = !1;
    _profilerComponent = null;
    _window = null;
    _r5c1888418dfeaa = !1;
    _rb183488be3b1f0 = new B();
    _rd7b3b1e2e39308;
    get caption() {
      return "Component Profiler";
    }
    get disposed() {
      return this._disposed;
    }
    get visible() {
      return this._window?.visible ?? !1;
    }
    set visible(e) {
      if (!this._window && e) {
        let r = this._re370b33d69aaa5(),
          t = new rr(r.readUTFBytes(r.length));
        ((this._window = this._windowManager.buildFromXML(t, 2)),
          (this._window.procedure = this._r8759d2e2a01194),
          (this._window.findChildByName("header").caption =
            `${a.padAlign("task", 28)}|${a.padAlign("#rounds", 8)}|${a.padAlign("latest ms", 8)}|${a.padAlign("total ms", 8)}|`),
          (this._window.findChildByName("footer").caption =
            "<- Click to enable bitmap memory tracking"),
          (this._window.findChildByName("footer").textColor = 4284900966));
      }
      if (this._window) {
        if (e) {
          (this._window.activate(),
            this._rd7b3b1e2e39308._rd7c10d8fcef2f7(!0),
            this._rd7b3b1e2e39308.queueInterface(new UnkInterface_e5140e(), (r, t) => {
              this.profiler = t;
            }));
          return;
        }
        (this._rd7b3b1e2e39308._rd7c10d8fcef2f7(!1),
          this._window.dispose(),
          (this._window = null));
      }
    }
    set profiler(e) {
      (this._profilerComponent &&
        (this._profilerComponent._rbd0344f80c4576(this.refresh), (this._profilerComponent = null)),
        e && ((this._profilerComponent = e), this._profilerComponent._rf330ad10263e15(this.refresh)));
    }
    get profiler() {
      return this._profilerComponent;
    }
    dispose() {
      this._disposed ||
        (this._window?.dispose(),
        (this._window = null),
        this._profilerComponent?._rbd0344f80c4576(this.refresh),
        (this._profilerComponent = null),
        (this._windowManager = null),
        (this._rbb89a263a355a1 = null),
        this._rb183488be3b1f0.dispose(),
        (this._rb183488be3b1f0 = null),
        (this._disposed = !0));
    }
    _r8759d2e2a01194 = n((e, r) => {
      if (
        (e.type === u.CLICK &&
          (r.tags.indexOf("close") > -1
            ? (this.visible = !1)
            : r.name === "button_gc" && this._profilerComponent?.gc()),
        r.name === "footer_enable_toggle" && this._window)
      ) {
        let t = this._window.findChildByName("footer");
        e.type === y.const_238
          ? ((this._r5c1888418dfeaa = !0), (t.textColor = 4278190080))
          : e.type === y.const_1217 && ((this._r5c1888418dfeaa = !1), (t.textColor = 4284900966));
      }
    }, "_r8759d2e2a01194");
    refresh = n((e) => {
      if (!this._window || !this._profilerComponent) return;
      this._rb183488be3b1f0.reset();
      let r = this._profilerComponent.getProfilerAgentsInArray(),
        t = this._window.findChildByName("list"),
        i = 0;
      for (; r.length > 0;) i = this.recursiveRedraw(r.pop(), t, i, 0);
      this._r5c1888418dfeaa &&
        (this._window.findChildByName("footer").caption =
          `Assets - Libraries: ${this._profilerComponent._rc8e0bf285e50ba} Bitmaps: ${this._profilerComponent._ref2b4418c2a5ff} / ${this._profilerComponent._r1626925f02d157} bytes 
Tracked bitmap data: ${this._profilerComponent._rc94852c2c1a094} / ${this._profilerComponent._rc1d68f27defce3} bytes`);
    }, "refresh");
    recursiveRedraw(e, r, t, i) {
      let s;
      t >= r.numListItems ? (s = this.createListItem(r)) : (s = r.getListItemAt(t));
      let o = e.name;
      i > 0 && (o = a.padAlign(o, i + o.length, "-", !0));
      let d = s.findChildByName("text");
      ((d.caption = `${a.padAlign(o, 28)}|${a.padAlign(String(e.rounds), 8, " ", !0)}|${a.padAlign(String(e.latest), 8, " ", !0)}|${a.padAlign(String(e.total), 8, " ", !0)}|\r`),
        (s.findChildByName("caption").caption = e.caption),
        s.findChildByName("check").setStateFlag(class_1948.const_130, !e.paused),
        this._rb183488be3b1f0.add(s, e),
        e.paused || this._r9b700adcad8de0(s.findChildByName("canvas"), e),
        t++);
      for (let c = 0; c < e.numSubTasks; c++)
        t = this.recursiveRedraw(e.getSubTaskAt(c), r, t, i + 1);
      return t;
    }
    _r9b700adcad8de0(e, r) {
      let t = e.bitmap;
      t == null && ((t = new A(e.width, e.height, !1, 4294967295)), (e.bitmap = t));
      let i = t.rect,
        s = r.latest,
        o = s > t.height ? t.height : s;
      ((i.x += 1),
        (i.width -= 1),
        t.copyPixels(t, i, a.ZERO_POINT),
        (i.x += i.width - 2),
        (i.y += i.height - o),
        (i.width = 1),
        (i.height = o),
        t.fillRect(i, s > t.height ? 4294901760 : 4278190335),
        e.invalidate());
    }
    createListItem(e) {
      let r = this._rf59a942e23c5cf(),
        t = new rr(r.readUTFBytes(r.length)),
        i = this._windowManager.buildFromXML(t, 2);
      return (
        e.addListItem(i),
        i.findChildByName("check").addEventListener(u.CLICK, this.onCheckMouseClick),
        i
      );
    }
    onCheckMouseClick = n((e) => {
      let r = e.window,
        t = this._rb183488be3b1f0.getValue(r.parent);
      t && (t.paused = !r.getStateFlag(class_1948.const_130));
    }, "onCheckMouseClick");
    static padAlign(e, r, t = " ", i = !1) {
      let s = r - e.length;
      if (s <= 0) return e.substring(0, r);
      let o = "";
      for (let d = 0; d < s; d++) o += t;
      return i ? o + e : e + o;
    }
    _re370b33d69aaa5() {
      let e = a._rd733747e079ae1;
      return e ? e() : new re();
    }
    _rf59a942e23c5cf() {
      let e = a._ra25cb618ee5ff1;
      return e ? e() : new re();
    }
  }
