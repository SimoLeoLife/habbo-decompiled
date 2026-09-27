// Estratto da HabboAirLauncher.deobf.js, riga 131418.

class extends ContainerController {
  static {
    n(this, "_ib61cf97cc7ed2b");
  }
  var_659 = 5;
  _rd2db0c9ace488b = 8;
  _r9237d945953291 = 8;
  _rc4316df6d6d831 = !1;
  _r305500046b84bb = !0;
  update(e, r) {
    switch (r.type) {
      case y.const_1385:
      case y.const_1333:
      case y.const_1024:
      case y.const_906:
      case y.const_755:
      case y.const_342:
        this._r203854c326176e();
        break;
    }
    return super.update(e, r);
  }
  _r203854c326176e() {
    if (!this._r305500046b84bb) return;
    let e = null,
      r = this._r09c0aebd31e70e(),
      t = this._rb7fd08a34365ab();
    if (this._rc4316df6d6d831)
      for (let i of this._children ?? []) {
        if (!i.visible) continue;
        ((i.y = e === null ? this._r9237d945953291 : e.y + e.height + this.var_659),
          (i.x = this._rd2db0c9ace488b));
        let s = this._r1a7b7f50b535da(i);
        (s > 0 && t > 0 && (i.height = (r * s) / t), (e = i));
      }
    else
      for (let i of this._children ?? []) {
        if (!i.visible) continue;
        ((i.x = e === null ? this._rd2db0c9ace488b : e.x + e.width + this.var_659),
          (i.y = this._r9237d945953291));
        let s = this._r1a7b7f50b535da(i);
        (s > 0 && t > 0 && (i.width = (r * s) / t), (e = i));
      }
  }
  _r1a7b7f50b535da(e) {
    let r = 0;
    for (let t = 0; t < e.tags.length; t += 1) {
      let i = String(e.tags[t]);
      i.indexOf("relative") !== -1 &&
        ((r = Number(i.slice(i.indexOf("(") + 1, i.indexOf(")")))),
        (r < 0 || Number.isNaN(r)) && (r = 0),
        e.tags.splice(t, 1, `relative(${r})`));
    }
    return r;
  }
  _rb7fd08a34365ab() {
    let e = 0;
    for (let r of this._children ?? []) r.visible && (e += this._r1a7b7f50b535da(r));
    return e;
  }
  _r09c0aebd31e70e() {
    let e = this._rc4316df6d6d831
      ? this.height - this._r9237d945953291 * 2
      : this.width - this._rd2db0c9ace488b * 2;
    for (let r of this._children ?? [])
      r.visible &&
        (this._r1a7b7f50b535da(r) === 0
          ? (e -= this._rc4316df6d6d831 ? r.height + this.var_659 : r.width + this.var_659)
          : (e -= this.var_659));
    return e + this.var_659;
  }
  get properties() {
    let e = super.properties;
    return (
      e.push(this.createProperty(class_3436._rdaf6bdcdccb2b4, this.var_659)),
      e.push(this.createProperty(class_3436.VERTICAL, this._rc4316df6d6d831)),
      e.push(this.createProperty(class_3436.PADDING_HORIZONTAL, this._rd2db0c9ace488b)),
      e.push(this.createProperty(class_3436.PADDING_VERTICAL, this._r9237d945953291)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436._rdaf6bdcdccb2b4:
          this.var_659 = r.value;
          break;
        case class_3436.PADDING_HORIZONTAL:
          this._rd2db0c9ace488b = r.value;
          break;
        case class_3436.PADDING_VERTICAL:
          this._r9237d945953291 = r.value;
          break;
        case class_3436.VERTICAL:
          this._rc4316df6d6d831 = r.value;
          break;
      }
    ((super.properties = e), this._r203854c326176e());
  }
  _rd399013aba4001(e) {
    ((this._rd2db0c9ace488b = e), this._r203854c326176e());
  }
  _rfdbd41d16ecd2a(e) {
    ((this._r9237d945953291 = e), this._r203854c326176e());
  }
  _rc8a8087fd1c6b1(e) {
    ((this.var_659 = e), this._r203854c326176e());
  }
  _rb04a807deb5b27(e) {
    ((this._rc4316df6d6d831 = e), this._r203854c326176e());
  }
  setAutoRearrange(e) {
    ((this._r305500046b84bb = e), e && this._r203854c326176e());
  }
  _r4f2de6597669f3() {
    return this._r305500046b84bb;
  }
}
