// Extracted from HabboAirLauncher.deobf.js, line 130791.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ActivatorController.as
// Obfuscated name: _id934f077869066

class extends ContainerController {
    static {
      n(this, "ActivatorController");
    }
    var_1759 = null;
    constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
      super.constructWindow(e, r, t, i, s, o, d, c ?? Dxt, f, l, b, _);
    }
    update(e, r) {
      if (r.type === y.const_251) this.setActiveChild(e);
      else if (r.type === y.const_828) return !0;
      return super.update(e, r);
    }
    getActiveChild() {
      return this.var_1759;
    }
    setActiveChild(e) {
      let r = this;
      if (e.parent !== r)
        for (;;) {
          let i = e.parent;
          if (i === null) throw new Error("Window passed to activator is not a child!");
          if (((e = i), e.parent === r)) break;
        }
      let t = this.var_1759;
      if (this.var_1759 !== e) {
        (this.var_1759 !== null &&
          !this.var_1759.disposed &&
          this.var_1759.deactivate(),
          (this.var_1759 = e));
        let i = this;
        i.getChildIndex(e) !== i.numChildren - 1 && i.setChildIndex(e, i.numChildren - 1);
      }
      return t;
    }
  }
