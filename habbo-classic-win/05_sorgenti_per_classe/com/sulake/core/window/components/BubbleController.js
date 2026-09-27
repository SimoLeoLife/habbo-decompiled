// Estratto da HabboAirLauncher.deobf.js, riga 131817.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/BubbleController.as
// Nome offuscato: _ide4ab5cc23fc08

class extends oj {
    static {
      n(this, "BubbleController");
    }
    static TAG_POINTER_UP_ELEMENT = "_POINTER_UP";
    static TAG_POINTER_DOWN_ELEMENT = "_POINTER_DOWN";
    static TAG_POINTER_LEFT_ELEMENT = "_POINTER_LEFT";
    static TAG_POINTER_RIGHT_ELEMENT = "_POINTER_RIGHT";
    var_81 = class_3148.DOWN;
    var_2437 = 0;
    get _r755be6e2f4f86b() {
      return this.var_81 ?? class_3148.DOWN;
    }
    constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
      super.constructWindow(e, r, t, i, s, o, d, c ?? Lxt, f, l, b, _);
    }
    get direction() {
      return this._r755be6e2f4f86b;
    }
    set direction(e) {
      if (e !== this._r755be6e2f4f86b) {
        let r = this.getChildByName(e);
        if (r === null) throw new Error(`Invalid pointer direction: "${e}"!`);
        let t = this.getChildByName(this._r755be6e2f4f86b);
        (t !== null && (t.visible = !1),
          (r.visible = !0),
          (this.var_81 = e),
          (this._r2064b0929ca274 = this.var_2437));
      }
    }
    get _r2064b0929ca274() {
      return this.var_2437 ?? 0;
    }
    set _r2064b0929ca274(e) {
      let r = this._r755be6e2f4f86b,
        t = this.getChildByName(r);
      if (t === null && this.var_81 == null) {
        ((this.var_81 = r), (this.var_2437 = e ?? 0));
        return;
      }
      if (t === null) throw new Error(`Invalid pointer direction: "${r}"!`);
      (r === class_3148.UP || r === class_3148.DOWN ? (t.x = this.width / 2 + e) : (t.y = this.height / 2 + e),
        (this.var_2437 = e));
    }
    update(e, r) {
      let t = super.update(e, r);
      return (
        (this.var_2437 ?? 0) !== 0 &&
          e === this &&
          r.type === y.const_755 &&
          (this._r2064b0929ca274 = this.var_2437),
        t
      );
    }
    get properties() {
      let e = super.properties;
      return (
        e.push(this.createProperty(class_3436.const_826, this.var_81)),
        e.push(this.createProperty(class_3436.POINTER_OFFSET, this.var_2437)),
        e
      );
    }
    set properties(e) {
      for (let r of e)
        switch (r.key) {
          case class_3436.const_826:
            this.direction = r.value;
            break;
          case class_3436.POINTER_OFFSET:
            this._r2064b0929ca274 = r.value;
            break;
        }
      super.properties = e;
    }
  }
