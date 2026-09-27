// Extracted from HabboAirLauncher.deobf.js, line 143503.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic3210af3954855

class a {
    constructor(e, r) {
      this._context = e;
      this._windowManager = r;
    }
    static {
      n(this, "UnkClass_c3210a");
    }
    static POINT_ZERO = new E();
    static _r13a74f82e352c7 = null;
    _disposed = !1;
    _window = null;
    _canvas = null;
    _view = null;
    var_1679 = null;
    _re7df3d78ebdad6 = null;
    _r1dde7ca73c059b = 0;
    _position = 0;
    _rd3d66851445a9d = 0;
    _rb7c1973fc37160 = 0;
    _r8c5606df0f5bb7 = 0;
    get caption() {
      return "Memory Graph";
    }
    get visible() {
      return this._window?.visible ?? !1;
    }
    set visible(e) {
      if (!this._window && e) {
        let r = this._re370b33d69aaa5(),
          t = new rr(r.readUTFBytes(r.length));
        ((this._window = this._windowManager.buildFromXML(t, 2)),
          (this._window.procedure = this.dialogEventProc),
          (this._window.visible = !0),
          (this._view = this._window.findChildByName("view")),
          (this._canvas = this._window.findChildByName("bitmap")),
          (this.var_1679 = this._window.findChildByName("total")),
          (this._re7df3d78ebdad6 = this._window.findChildByName("free")));
      }
      if (this._window) {
        if (e) {
          this._context.registerUpdateReceiver(this, 0);
          return;
        }
        (this._window.dispose(),
          (this._window = null),
          this._context.removeUpdateReceiver(this));
      }
    }
    get disposed() {
      return this._disposed;
    }
    dispose() {
      this._disposed ||
        (this._context.removeUpdateReceiver(this),
        this._window?.dispose(),
        (this._window = null),
        (this._canvas = null),
        (this._view = null),
        (this.var_1679 = null),
        (this._re7df3d78ebdad6 = null),
        (this._windowManager = null),
        (this._disposed = !0));
    }
    update(e) {
      if (!(!this._canvas || !this.var_1679 || !this._re7df3d78ebdad6))
        try {
          let r = Bi._r2c3287252f7494 / 1024 / 1024,
            t = Bi._r8dd5eccdbbf8db / 1024 / 1024,
            i = 0;
          (this._r9b700adcad8de0(t - r, r, this._r8c5606df0f5bb7),
            (this._rb7c1973fc37160 = r),
            (this._rd3d66851445a9d = t),
            (this._r8c5606df0f5bb7 = i),
            this._position++,
            this._position > this._canvas.width && (this._position = 0),
            this._r1dde7ca73c059b++,
            this._r1dde7ca73c059b === 4 &&
              ((this.var_1679.text = `${this._rd3d66851445a9d.toFixed(2)} MB`),
              (this._re7df3d78ebdad6.text = `${this._rb7c1973fc37160.toFixed(2)} MB`),
              (this._r1dde7ca73c059b = 0)));
        } catch {}
    }
    _r9b700adcad8de0(e, r, t) {
      if (!this._window) return;
      let i = this._r807cfe44e7170c(e),
        s = i.rect;
      ((s = i.rect),
        (s.x = 1),
        (s.width -= 1),
        i.copyPixels(i, s, a.POINT_ZERO),
        (s.x = i.width - 1),
        (s.y = 0),
        (s.width = 1),
        (s.height = i.height),
        i.fillRect(s, 4294967295));
      let o = e > i.height ? i.height : e;
      ((s.x = i.width - 1),
        (s.y = s.height - o),
        (s.width = 1),
        (s.height = o),
        i.fillRect(s, e > i.height ? 4294901760 : 4278190335),
        (s.y -= r),
        (s.height = r),
        i.fillRect(s, s.top > i.height ? 4294936576 : 4278225151));
      let d = this._window.findChildByName("check_purge");
      class_283.isRunning
        ? (i.setPixel32(i.width - 1, i.height - class_283._r2f9b5fb1c6e274, 4278190080),
          i.setPixel32(i.width - 1, i.height - class_283._r63ef0c032b4f2c, 4294901760),
          d.select())
        : d.unselect();
    }
    dialogEventProc = n((e, r) => {
      e.type === u.CLICK &&
        (r.name === "header_button_close"
          ? (this.visible = !1)
          : r.name === "button_purge"
            ? class_283.trigger()
            : r.name === "button_gc"
              ? class_283.triggerGC()
              : r.name === "check_purge" && (r.isSelected ? class_283.start() : class_283.stop()));
    }, "dialogEventProc");
    _r807cfe44e7170c(e) {
      if (!this._canvas || !this._view) return new A(1, 1, !1, 4294967295);
      let r = Math.max(this._canvas.height, e),
        t = this._canvas.bitmap;
      if (
        (this._canvas.width !== this._view.width && (this._canvas.width = this._view.width),
        this._canvas.height !== this._view.height && (this._canvas.height = this._view.height),
        t == null && ((t = new A(this._canvas.width, r, !1, 4294967295)), (this._canvas.bitmap = t)),
        t.width !== this._canvas.width || t.height !== r)
      ) {
        this._canvas.bitmap = null;
        let i = new A(this._canvas.width, r, !1, 4294967295),
          s = new D(),
          o = new E();
        (i.width > t.width
          ? ((s.width = t.width), (o.x = i.width - t.width))
          : ((s.x = t.width - i.width), (s.width = i.width)),
          i.height > t.height
            ? ((s.height = t.height), (o.y = i.height - t.height))
            : ((s.y = t.height - i.height), (s.height = i.height)),
          i.copyPixels(t, s, o),
          t.dispose(),
          (t = i),
          (this._canvas.bitmap = t));
      }
      return (this._canvas.invalidate(), t);
    }
    _re370b33d69aaa5() {
      let e = a._r13a74f82e352c7;
      return e ? e() : new re();
    }
  }
