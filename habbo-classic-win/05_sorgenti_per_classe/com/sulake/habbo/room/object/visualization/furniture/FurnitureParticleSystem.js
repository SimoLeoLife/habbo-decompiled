// Extracted from HabboAirLauncher.deobf.js, line 278429.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureParticleSystem.as
// Obfuscated name: _ia6f0a967acd420

class {
  constructor(e) {
    this._visualization = e;
    this._rac392b92679eb4.alphaMultiplier = 1;
  }
  static {
    n(this, "FurnitureParticleSystem");
  }
  _r6829f9e72eee3f = new B();
  _size = 0;
  _rffb44960c251a2 = -1;
  _offsetY = 0;
  _r2e930af007af60 = null;
  _canvas = null;
  _r39f92c0ccd5136 = null;
  var_5567 = !1;
  var_4955 = 0;
  var_4775 = 0;
  _r84bfa668d1ffab = 1;
  _rffec371ab0ee3e = null;
  _rac392b92679eb4 = new UnkClass_4210dc();
  _r5d82663a0b3d06 = new UnkClass_4210dc();
  _rae489d73f6c72e = new Pe();
  _rf8d82e2943f988 = new Pe();
  var_1119 = 1;
  _bgColor = 4278190080;
  dispose() {
    for (let e of this._r6829f9e72eee3f.getValues()) e.dispose();
    (this._r6829f9e72eee3f.dispose(), this._r5619b0619b2c16(), (this._r39f92c0ccd5136 = null));
  }
  reset() {
    (this._r2e930af007af60?.reset(),
      (this._r2e930af007af60 = null),
      (this.var_5567 = !1),
      (this._r39f92c0ccd5136 = null),
      this._ra958999084f69b());
  }
  setAnimation(e) {
    (this._r2e930af007af60?.reset(),
      (this._r2e930af007af60 = this._r6829f9e72eee3f.getValue(e) ?? null),
      (this.var_5567 = !1),
      (this._r39f92c0ccd5136 = null),
      this._ra958999084f69b());
  }
  getSpriteYOffset(e, r, t) {
    return this._r2e930af007af60 != null && this._r2e930af007af60._rd0de39e42c2f35 === t
      ? this._r2e930af007af60.y * this._r84bfa668d1ffab
      : 0;
  }
  _r23a986fbdf9527(e) {
    return this._r2e930af007af60?._rd0de39e42c2f35 === e;
  }
  _r1225543a2cc71f() {
    if (
      !(this._r2e930af007af60 == null || this._r39f92c0ccd5136 == null) &&
      (this._canvas != null && (this._r50dd5ba1b9c094(), this._r39f92c0ccd5136.asset?.width),
      this.var_5567 && this._r2e930af007af60._rd0de39e42c2f35 >= 0)
    ) {
      let e = this._visualization.getSprite(this._r2e930af007af60._rd0de39e42c2f35);
      e != null && (e.visible = !1);
    }
  }
  _rccf505c78518d1() {
    if (this._r2e930af007af60 == null || this._r39f92c0ccd5136 == null) return;
    let e = 10;
    !this.var_5567 && this._r2e930af007af60._r8f56c7d5ebaa94 && (this.var_5567 = !0);
    let r = this._offsetY * this._r84bfa668d1ffab;
    if ((this._r2e930af007af60.update(), !!this.var_5567)) {
      if (this._r2e930af007af60._rd0de39e42c2f35 >= 0) {
        let t = this._visualization.getSprite(this._r2e930af007af60._rd0de39e42c2f35);
        t != null && (t.visible = !1);
      }
      if ((this._canvas == null && this._ra958999084f69b(), this._canvas != null)) {
        (this._canvas.lock(),
          this._rac392b92679eb4.alphaMultiplier === 1
            ? this._canvas.fillRect(this._canvas.rect, this._bgColor)
            : this._rffec371ab0ee3e != null &&
              this._canvas.draw(
                this._rffec371ab0ee3e,
                this._rae489d73f6c72e,
                this._rac392b92679eb4,
                ie.NORMAL,
                null,
                !1,
              ));
        for (let t of this._r2e930af007af60.particles) {
          let i = t.y,
            s = this.var_4955 + (((t.x - t.z) * e) / 10) * this._r84bfa668d1ffab,
            o = this.var_4775 - r + (((i + (t.x + t.z) / 2) * e) / 10) * this._r84bfa668d1ffab,
            d = t.getAsset();
          if (d != null) {
            let c = d.asset?.content;
            if (c == null) continue;
            if (t.fade && t.alphaMultiplier < 1)
              (this._rf8d82e2943f988.identity(),
                this._rf8d82e2943f988.translate(s + d.offsetX, o + d.offsetY),
                (this._r5d82663a0b3d06.alphaMultiplier = t.alphaMultiplier),
                this._canvas.draw(c, this._rf8d82e2943f988, this._r5d82663a0b3d06, ie.NORMAL, null, !1));
            else {
              let f = new E(s + d.offsetX, o + d.offsetY);
              this._canvas.copyPixels(c, c.rect, f, null, null, !0);
            }
          } else {
            let c = new D(s - 1, o - 1, 2, 2);
            this._canvas.fillRect(c, 4294967295);
          }
        }
        this._canvas.unlock();
      }
    }
  }
  _r84c168744040ab(e) {
    ((this._size = Number.parseInt(String(e.attribute("size")), 10)),
      (this._rffb44960c251a2 =
        String(e.attribute("canvas_id")).length > 0
          ? Number.parseInt(String(e.attribute("canvas_id")), 10)
          : -1),
      (this._offsetY =
        String(e.attribute("offset_y")).length > 0
          ? Number.parseInt(String(e.attribute("offset_y")), 10)
          : 10),
      (this._r84bfa668d1ffab = this._size / 64),
      (this.var_1119 =
        String(e.attribute("blend")).length > 0 ? Number(String(e.attribute("blend"))) : 1),
      (this.var_1119 = Math.min(this.var_1119, 1)),
      (this._rac392b92679eb4.alphaMultiplier = this.var_1119));
    let r = String(e.attribute("bgcolor"));
    this._bgColor = r.length > 0 ? Number.parseInt(r, 16) : 4278190080;
    for (let t of e.child("emitter").toArray()) {
      let i = t,
        s = Number.parseInt(String(i.attribute("id")), 10),
        o = String(i.attribute("name")),
        d = Number.parseInt(String(i.attribute("sprite_id")), 10),
        c = new pve(o, d);
      this._r6829f9e72eee3f.add(s, c);
      let f = Number.parseInt(String(i.attribute("max_num_particles")), 10),
        l = Number.parseInt(String(i.attribute("particles_per_frame")), 10),
        b =
          String(i.attribute("burst_pulse")).length > 0
            ? Number.parseInt(String(i.attribute("burst_pulse")), 10)
            : 1,
        _ = Number.parseInt(String(i.attribute("fuse_time")), 10),
        h = i.child("simulation").toArray()[0],
        p = Number(String(h.attribute("force"))),
        m = Number(String(h.attribute("direction"))),
        v = Number(String(h.attribute("gravity"))),
        w = Number(String(h.attribute("airfriction"))),
        I = String(h.attribute("shape")),
        C = Number(String(h.attribute("energy")));
      for (let W of i.child("particles").child("particle").toArray()) {
        let R = W,
          T = Number.parseInt(String(R.attribute("lifetime")), 10),
          S = String(R.attribute("is_emitter")) !== "false",
          z = String(R.attribute("fade")) === "true",
          K = [];
        for (let $ of R.child("frame").toArray()) {
          let Y = $;
          K.push(this._visualization.assetCollection?.getAsset(String(Y.attribute("name"))) ?? null);
        }
        c.configureParticle(T, S, K, z);
      }
      c.setup(f, l, p, new k(0, m, 0), v, w, I, C, _, b);
    }
  }
  _r41f81c78ef0904(e) {
    let r = 0;
    if (e?._r2e930af007af60 != null) {
      let i = e._r6829f9e72eee3f.getValues().indexOf(e._r2e930af007af60);
      i >= 0 && (r = e._r6829f9e72eee3f.getKey(i) ?? 0);
    }
    (this.setAnimation(r),
      this._r2e930af007af60 != null &&
        e?._r2e930af007af60 != null &&
        this._r2e930af007af60._r41f81c78ef0904(e._r2e930af007af60, e._size / this._size),
      this._r5619b0619b2c16(),
      (this._r39f92c0ccd5136 = null));
  }
  _ra958999084f69b() {
    if (
      this._r2e930af007af60 == null ||
      this._rffb44960c251a2 < 0 ||
      ((this._r39f92c0ccd5136 = this._visualization.getSprite(this._rffb44960c251a2)),
      this._r39f92c0ccd5136 == null)
    )
      return;
    let e = this._r39f92c0ccd5136.asset?.width ?? this._r39f92c0ccd5136.width,
      r = this._r39f92c0ccd5136.asset?.height ?? this._r39f92c0ccd5136.height;
    e <= 1 ||
      r <= 1 ||
      (this._canvas != null &&
        (this._canvas.width !== e || this._canvas.height !== r) &&
        this._r5619b0619b2c16(),
      this._canvas == null &&
        ((this._canvas = new A(e, r, !0, this._bgColor)),
        this._rac392b92679eb4.alphaMultiplier !== 1 &&
          (this._rffec371ab0ee3e = new A(
            this._canvas.width,
            this._canvas.height,
            !0,
            this._bgColor,
          ))),
      (this.var_4955 = -this._r39f92c0ccd5136.offsetX),
      (this.var_4775 = -this._r39f92c0ccd5136.offsetY),
      this._r50dd5ba1b9c094(),
      this._canvas != null && this._canvas.fillRect(this._canvas.rect, this._bgColor),
      this._rffec371ab0ee3e != null &&
        this._rffec371ab0ee3e.fillRect(this._rffec371ab0ee3e.rect, this._bgColor));
  }
  _r50dd5ba1b9c094() {
    this._r39f92c0ccd5136 == null ||
      this._canvas == null ||
      ((this._r39f92c0ccd5136.nativeTexture = null), (this._r39f92c0ccd5136.asset = this._canvas));
  }
  _r5619b0619b2c16() {
    (this._canvas?.dispose(),
      (this._canvas = null),
      this._rffec371ab0ee3e?.dispose(),
      (this._rffec371ab0ee3e = null));
  }
}
