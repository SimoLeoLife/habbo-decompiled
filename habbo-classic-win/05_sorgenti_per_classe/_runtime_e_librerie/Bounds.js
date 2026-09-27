// Estratto da HabboAirLauncher.deobf.js, riga 2137.

class a {
        static {
          n(this, "Bounds");
        }
        constructor(e = 1 / 0, r = 1 / 0, t = -1 / 0, i = -1 / 0) {
          ((this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0),
            (this.matrix = IHe),
            (this.minX = e),
            (this.minY = r),
            (this.maxX = t),
            (this.maxY = i));
        }
        isEmpty() {
          return this.minX > this.maxX || this.minY > this.maxY;
        }
        get rectangle() {
          this._rectangle || (this._rectangle = new xa());
          let e = this._rectangle;
          return (
            this.minX > this.maxX || this.minY > this.maxY
              ? ((e.x = 0), (e.y = 0), (e.width = 0), (e.height = 0))
              : e.copyFromBounds(this),
            e
          );
        }
        clear() {
          return (
            (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0),
            (this.matrix = IHe),
            this
          );
        }
        set(e, r, t, i) {
          ((this.minX = e), (this.minY = r), (this.maxX = t), (this.maxY = i));
        }
        addFrame(e, r, t, i, s) {
          s || (s = this.matrix);
          let o = s.a,
            d = s.b,
            c = s.c,
            f = s.d,
            l = s.tx,
            b = s.ty,
            _ = this.minX,
            h = this.minY,
            p = this.maxX,
            m = this.maxY,
            v = o * e + c * r + l,
            w = d * e + f * r + b;
          (v < _ && (_ = v),
            w < h && (h = w),
            v > p && (p = v),
            w > m && (m = w),
            (v = o * t + c * r + l),
            (w = d * t + f * r + b),
            v < _ && (_ = v),
            w < h && (h = w),
            v > p && (p = v),
            w > m && (m = w),
            (v = o * e + c * i + l),
            (w = d * e + f * i + b),
            v < _ && (_ = v),
            w < h && (h = w),
            v > p && (p = v),
            w > m && (m = w),
            (v = o * t + c * i + l),
            (w = d * t + f * i + b),
            v < _ && (_ = v),
            w < h && (h = w),
            v > p && (p = v),
            w > m && (m = w),
            (this.minX = _),
            (this.minY = h),
            (this.maxX = p),
            (this.maxY = m));
        }
        addRect(e, r) {
          this.addFrame(e.x, e.y, e.x + e.width, e.y + e.height, r);
        }
        addBounds(e, r) {
          this.addFrame(e.minX, e.minY, e.maxX, e.maxY, r);
        }
        addBoundsMask(e) {
          ((this.minX = this.minX > e.minX ? this.minX : e.minX),
            (this.minY = this.minY > e.minY ? this.minY : e.minY),
            (this.maxX = this.maxX < e.maxX ? this.maxX : e.maxX),
            (this.maxY = this.maxY < e.maxY ? this.maxY : e.maxY));
        }
        applyMatrix(e) {
          let r = this.minX,
            t = this.minY,
            i = this.maxX,
            s = this.maxY,
            { a: o, b: d, c, d: f, tx: l, ty: b } = e,
            _ = o * r + c * t + l,
            h = d * r + f * t + b;
          ((this.minX = _),
            (this.minY = h),
            (this.maxX = _),
            (this.maxY = h),
            (_ = o * i + c * t + l),
            (h = d * i + f * t + b),
            (this.minX = _ < this.minX ? _ : this.minX),
            (this.minY = h < this.minY ? h : this.minY),
            (this.maxX = _ > this.maxX ? _ : this.maxX),
            (this.maxY = h > this.maxY ? h : this.maxY),
            (_ = o * r + c * s + l),
            (h = d * r + f * s + b),
            (this.minX = _ < this.minX ? _ : this.minX),
            (this.minY = h < this.minY ? h : this.minY),
            (this.maxX = _ > this.maxX ? _ : this.maxX),
            (this.maxY = h > this.maxY ? h : this.maxY),
            (_ = o * i + c * s + l),
            (h = d * i + f * s + b),
            (this.minX = _ < this.minX ? _ : this.minX),
            (this.minY = h < this.minY ? h : this.minY),
            (this.maxX = _ > this.maxX ? _ : this.maxX),
            (this.maxY = h > this.maxY ? h : this.maxY));
        }
        fit(e) {
          return (
            this.minX < e.left && (this.minX = e.left),
            this.maxX > e.right && (this.maxX = e.right),
            this.minY < e.top && (this.minY = e.top),
            this.maxY > e.bottom && (this.maxY = e.bottom),
            this
          );
        }
        fitBounds(e, r, t, i) {
          return (
            this.minX < e && (this.minX = e),
            this.maxX > r && (this.maxX = r),
            this.minY < t && (this.minY = t),
            this.maxY > i && (this.maxY = i),
            this
          );
        }
        pad(e, r = e) {
          return ((this.minX -= e), (this.maxX += e), (this.minY -= r), (this.maxY += r), this);
        }
        ceil() {
          return (
            (this.minX = Math.floor(this.minX)),
            (this.minY = Math.floor(this.minY)),
            (this.maxX = Math.ceil(this.maxX)),
            (this.maxY = Math.ceil(this.maxY)),
            this
          );
        }
        clone() {
          return new a(this.minX, this.minY, this.maxX, this.maxY);
        }
        scale(e, r = e) {
          return ((this.minX *= e), (this.minY *= r), (this.maxX *= e), (this.maxY *= r), this);
        }
        get x() {
          return this.minX;
        }
        set x(e) {
          let r = this.maxX - this.minX;
          ((this.minX = e), (this.maxX = e + r));
        }
        get y() {
          return this.minY;
        }
        set y(e) {
          let r = this.maxY - this.minY;
          ((this.minY = e), (this.maxY = e + r));
        }
        get width() {
          return this.maxX - this.minX;
        }
        set width(e) {
          this.maxX = this.minX + e;
        }
        get height() {
          return this.maxY - this.minY;
        }
        set height(e) {
          this.maxY = this.minY + e;
        }
        get left() {
          return this.minX;
        }
        get right() {
          return this.maxX;
        }
        get top() {
          return this.minY;
        }
        get bottom() {
          return this.maxY;
        }
        get isPositive() {
          return this.maxX - this.minX > 0 && this.maxY - this.minY > 0;
        }
        get isValid() {
          return this.minX + this.minY !== 1 / 0;
        }
        addVertexData(e, r, t, i) {
          let s = this.minX,
            o = this.minY,
            d = this.maxX,
            c = this.maxY;
          i || (i = this.matrix);
          let f = i.a,
            l = i.b,
            b = i.c,
            _ = i.d,
            h = i.tx,
            p = i.ty;
          for (let m = r; m < t; m += 2) {
            let v = e[m],
              w = e[m + 1],
              I = f * v + b * w + h,
              C = l * v + _ * w + p;
            ((s = I < s ? I : s), (o = C < o ? C : o), (d = I > d ? I : d), (c = C > c ? C : c));
          }
          ((this.minX = s), (this.minY = o), (this.maxX = d), (this.maxY = c));
        }
        containsPoint(e, r) {
          return this.minX <= e && this.minY <= r && this.maxX >= e && this.maxY >= r;
        }
        toString() {
          return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`;
        }
        copyFrom(e) {
          return (
            (this.minX = e.minX),
            (this.minY = e.minY),
            (this.maxX = e.maxX),
            (this.maxY = e.maxY),
            this
          );
        }
      }
