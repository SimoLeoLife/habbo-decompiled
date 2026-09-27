// Estratto da HabboAirLauncher.deobf.js, riga 12360.

class extends Geometry {
        static {
          n(this, "BatchGeometry");
        }
        constructor() {
          let r = new Buffer_({
              data: Zsr,
              label: "attribute-batch-buffer",
              usage: bi.VERTEX | bi.COPY_DST,
              shrinkToFit: !1,
            }),
            t = new Buffer_({
              data: qsr,
              label: "index-batch-buffer",
              usage: bi.INDEX | bi.COPY_DST,
              shrinkToFit: !1,
            }),
            i = 24;
          super({
            attributes: {
              aPosition: { buffer: r, format: "float32x2", stride: i, offset: 0 },
              aUV: { buffer: r, format: "float32x2", stride: i, offset: 8 },
              aColor: { buffer: r, format: "unorm8x4", stride: i, offset: 16 },
              aTextureIdAndRound: { buffer: r, format: "uint16x2", stride: i, offset: 20 },
            },
            indexBuffer: t,
          });
        }
      }
