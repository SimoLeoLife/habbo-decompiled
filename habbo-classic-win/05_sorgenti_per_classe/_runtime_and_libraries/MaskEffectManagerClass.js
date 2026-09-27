// Extracted from HabboAirLauncher.deobf.js, line 1812.

class {
      static {
        n(this, "MaskEffectManagerClass");
      }
      constructor() {
        ((this._effectClasses = []), (this._tests = []), (this._initialized = !1));
      }
      init() {
        this._initialized ||
          ((this._initialized = !0),
          this._effectClasses.forEach((e) => {
            this.add({ test: e.test, maskClass: e });
          }));
      }
      add(e) {
        this._tests.push(e);
      }
      getMaskEffect(e) {
        this._initialized || this.init();
        for (let r = 0; r < this._tests.length; r++) {
          let t = this._tests[r];
          if (t.test(e)) return ds.get(t.maskClass, e);
        }
        return e;
      }
      returnMaskEffect(e) {
        ds.return(e);
      }
    }
