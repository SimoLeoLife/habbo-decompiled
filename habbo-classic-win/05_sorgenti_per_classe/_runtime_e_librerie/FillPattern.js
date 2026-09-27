// Estratto da HabboAirLauncher.deobf.js, riga 20370.

class {
        static {
          n(this, "FillPattern");
        }
        constructor(e, r) {
          ((this.uid = uid_("fillPattern")),
            (this._tick = 0),
            (this.transform = new Ze()),
            (this.texture = e),
            this.transform.scale(1 / e.frame.width, 1 / e.frame.height),
            r &&
              ((e.source.style.addressModeU = kXe[r].addressModeU),
              (e.source.style.addressModeV = kXe[r].addressModeV)));
        }
        setTransform(e) {
          let r = this.texture;
          (this.transform.copyFrom(e),
            this.transform.invert(),
            this.transform.scale(1 / r.frame.width, 1 / r.frame.height),
            this._tick++);
        }
        get texture() {
          return this._texture;
        }
        set texture(e) {
          this._texture !== e && ((this._texture = e), this._tick++);
        }
        get styleKey() {
          return `fill-pattern-${this.uid}-${this._tick}`;
        }
        destroy() {
          (this.texture.destroy(!0), (this.texture = null));
        }
      }
