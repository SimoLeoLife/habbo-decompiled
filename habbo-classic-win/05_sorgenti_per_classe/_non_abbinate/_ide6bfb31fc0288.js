// Estratto da HabboAirLauncher.deobf.js, riga 140863.

class extends _i590fabdc28cedf {
  static {
    n(this, "_ide6bfb31fc0288");
  }
  var_659 = 0;
  _rc3309c775cb106 = !1;
  _rc4316df6d6d831 = !1;
  get spacing() {
    return this.var_659;
  }
  set spacing(e) {
    ((this.var_659 = e), this._r05cba275dbb5c1());
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _), (this._r17150fc69e590b = !1));
  }
  update(e, r) {
    switch (r.type) {
      case y.const_1024:
      case y.const_906:
      case y.const_1385:
      case y.const_1333:
        this._r05cba275dbb5c1();
        break;
    }
    return super.update(e, r);
  }
  _r05cba275dbb5c1() {
    if (this._rc3309c775cb106) return;
    this._rc3309c775cb106 = !0;
    let e = this.numSelectables,
      r = 0;
    for (let t = 0; t < e; t++) {
      let i = this.getSelectableAt(t);
      i !== null &&
        (this._rc4316df6d6d831
          ? ((i.y = r), (r += i.height + this.var_659))
          : ((i.x = r), (r += i.width + this.var_659)));
    }
    this._rc3309c775cb106 = !1;
  }
  get properties() {
    let e = super.properties;
    return (
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.var_659)),
      e.push(this.createProperty(class_3436.VERTICAL, this._rc4316df6d6d831)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436._rdaf6bdcdccb2b4:
          r.value !== this.var_659 && (this.spacing = r.value);
          break;
        case class_3436.VERTICAL:
          r.value !== this._rc4316df6d6d831 && (this.vertical = r.value);
          break;
      }
    super.properties = e;
  }
  get vertical() {
    return this._rc4316df6d6d831;
  }
  set vertical(e) {
    ((this._rc4316df6d6d831 = e), this._r05cba275dbb5c1());
  }
}
