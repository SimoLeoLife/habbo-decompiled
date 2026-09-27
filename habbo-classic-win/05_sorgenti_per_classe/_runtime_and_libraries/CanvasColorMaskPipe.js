// Extracted from HabboAirLauncher.deobf.js, line 21287.

class {
      static {
        n(this, "CanvasColorMaskPipe");
      }
      constructor(e) {
        ((this._colorStack = []),
          (this._colorStackIndex = 0),
          (this._currentColor = 0),
          (this._renderer = e));
      }
      buildStart() {
        ((this._colorStack[0] = 15), (this._colorStackIndex = 1), (this._currentColor = 15));
      }
      push(e, r, t) {
        this._renderer.renderPipes.batch.break(t);
        let i = this._colorStack;
        i[this._colorStackIndex] = i[this._colorStackIndex - 1] & e.mask;
        let s = this._colorStack[this._colorStackIndex];
        (s !== this._currentColor &&
          ((this._currentColor = s), t.add({ renderPipeId: "colorMask", colorMask: s, canBundle: !1 })),
          this._colorStackIndex++);
      }
      pop(e, r, t) {
        this._renderer.renderPipes.batch.break(t);
        let i = this._colorStack;
        this._colorStackIndex--;
        let s = i[this._colorStackIndex - 1];
        s !== this._currentColor &&
          ((this._currentColor = s), t.add({ renderPipeId: "colorMask", colorMask: s, canBundle: !1 }));
      }
      execute(e) {}
      destroy() {
        ((this._renderer = null), (this._colorStack = null));
      }
    }
