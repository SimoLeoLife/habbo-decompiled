// Extracted from HabboAirLauncher.deobf.js, line 12435.

class hje extends cje {
        static {
          n(this, "_DefaultBatcher");
        }
        constructor(e) {
          (super(e),
            (this.geometry = new BatchGeometry()),
            (this.name = hje.extension.name),
            (this.vertexSize = 6),
            mK ?? (mK = new DefaultShader(e.maxTextures)),
            (this.shader = mK));
        }
        packAttributes(e, r, t, i, s) {
          let o = (s << 16) | (e.roundPixels & 65535),
            d = e.transform,
            c = d.a,
            f = d.b,
            l = d.c,
            b = d.d,
            _ = d.tx,
            h = d.ty,
            { positions: p, uvs: m } = e,
            v = e.color,
            w = e.attributeOffset,
            I = w + e.attributeSize;
          for (let C = w; C < I; C++) {
            let W = C * 2,
              R = p[W],
              T = p[W + 1];
            ((r[i++] = c * R + l * T + _),
              (r[i++] = b * T + f * R + h),
              (r[i++] = m[W]),
              (r[i++] = m[W + 1]),
              (t[i++] = v),
              (t[i++] = o));
          }
        }
        packQuadAttributes(e, r, t, i, s) {
          let o = e.texture,
            d = e.transform,
            c = d.a,
            f = d.b,
            l = d.c,
            b = d.d,
            _ = d.tx,
            h = d.ty,
            p = e.bounds,
            m = p.maxX,
            v = p.minX,
            w = p.maxY,
            I = p.minY,
            C = o.uvs,
            W = e.color,
            R = (s << 16) | (e.roundPixels & 65535);
          ((r[i + 0] = c * v + l * I + _),
            (r[i + 1] = b * I + f * v + h),
            (r[i + 2] = C.x0),
            (r[i + 3] = C.y0),
            (t[i + 4] = W),
            (t[i + 5] = R),
            (r[i + 6] = c * m + l * I + _),
            (r[i + 7] = b * I + f * m + h),
            (r[i + 8] = C.x1),
            (r[i + 9] = C.y1),
            (t[i + 10] = W),
            (t[i + 11] = R),
            (r[i + 12] = c * m + l * w + _),
            (r[i + 13] = b * w + f * m + h),
            (r[i + 14] = C.x2),
            (r[i + 15] = C.y2),
            (t[i + 16] = W),
            (t[i + 17] = R),
            (r[i + 18] = c * v + l * w + _),
            (r[i + 19] = b * w + f * v + h),
            (r[i + 20] = C.x3),
            (r[i + 21] = C.y3),
            (t[i + 22] = W),
            (t[i + 23] = R));
        }
        _updateMaxTextures(e) {
          this.shader.maxTextures !== e && ((mK = new DefaultShader(e)), (this.shader = mK));
        }
        destroy() {
          ((this.shader = null), super.destroy());
        }
      }
