// Estratto da HabboAirLauncher.deobf.js, riga 134334.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/DesktopController.as
// Nome offuscato: _ic29cc2776ffbf9

class extends ActivatorController {
    static {
      n(this, "DesktopController");
    }
    get _re7a1744dd86ced() {
      return this;
    }
    _r8253c3459c5915 = n((...e) => {}, "_r8253c3459c5915");
    get mouseX() {
      return this.getDisplayObject().stage?.mouseX ?? 0;
    }
    get mouseY() {
      return this.getDisplayObject().stage?.mouseY ?? 0;
    }
    set parent(e) {
      throw new Error("Desktop window doesn't have parent!");
    }
    get parent() {
      return super.parent;
    }
    set procedure(e) {
      this._re7a1744dd86ced._rb21ab0ae53c5dc = e ?? this._r8253c3459c5915;
    }
    get procedure() {
      return super.procedure;
    }
    get host() {
      return this;
    }
    get desktop() {
      return this;
    }
    getGraphicContext(e) {
      return (
        e &&
          !this._re7a1744dd86ced._graphics &&
          ((this._re7a1744dd86ced._graphics = new Un(
            `GC {${this._re7a1744dd86ced._name}}`,
            Un.const_758,
            this._re7a1744dd86ced.rectangle,
          )),
          (this._re7a1744dd86ced._graphics.visible = !0),
          (this._re7a1744dd86ced._graphics.mouseEnabled = !0),
          (this._re7a1744dd86ced._graphics.doubleClickEnabled = !0)),
        this._re7a1744dd86ced._graphics ?? null
      );
    }
    constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
      (super.constructWindow(e, r, t, i, s, o, d, c ?? Qxt, f, l, b, _),
        (this._re7a1744dd86ced._rb21ab0ae53c5dc = this._r8253c3459c5915));
    }
    _r407b94eafbeca2() {
      return this.getActiveChild();
    }
    setActiveWindow(e) {
      return this.setActiveChild(e);
    }
    getDisplayObject() {
      return this.getGraphicContext(!0);
    }
    setDisplayObject(e) {
      this.getGraphicContext(!0)?.setDisplayObject(e);
    }
    invalidate(e = null) {}
  }
