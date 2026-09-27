// Estratto da HabboAirLauncher.deobf.js, riga 12983.

class {
      static {
        n(this, "ColorMaskPipe");
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
        let s = this._colorStack;
        s[this._colorStackIndex] = s[this._colorStackIndex - 1] & e.mask;
        let o = this._colorStack[this._colorStackIndex];
        (o !== this._currentColor &&
          ((this._currentColor = o), t.add({ renderPipeId: "colorMask", colorMask: o, canBundle: !1 })),
          this._colorStackIndex++);
      }
      pop(e, r, t) {
        this._renderer.renderPipes.batch.break(t);
        let s = this._colorStack;
        this._colorStackIndex--;
        let o = s[this._colorStackIndex - 1];
        o !== this._currentColor &&
          ((this._currentColor = o), t.add({ renderPipeId: "colorMask", colorMask: o, canBundle: !1 }));
      }
      execute(e) {
        this._renderer.colorMask.setMask(e.colorMask);
      }
      destroy() {
        ((this._renderer = null), (this._colorStack = null));
      }
    }
