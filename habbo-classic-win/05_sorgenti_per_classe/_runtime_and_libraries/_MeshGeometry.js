// Extracted from HabboAirLauncher.deobf.js, line 30343.

class sKe extends Geometry {
  static {
    n(this, "_MeshGeometry");
  }
  constructor(...e) {
    let r = e[0] ?? {};
    (r instanceof Float32Array &&
      (Zr(Va, "use new MeshGeometry({ positions, uvs, indices }) instead"),
      (r = { positions: r, uvs: e[1], indices: e[2] })),
      (r = { ...sKe.defaultOptions, ...r }));
    let t = r.positions || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      i = r.uvs;
    i || (r.positions ? (i = new Float32Array(t.length)) : (i = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])));
    let s = r.indices || new Uint32Array([0, 1, 2, 0, 2, 3]),
      o = r.shrinkBuffersToFit,
      d = new Buffer_({
        data: t,
        label: "attribute-mesh-positions",
        shrinkToFit: o,
        usage: bi.VERTEX | bi.COPY_DST,
      }),
      c = new Buffer_({ data: i, label: "attribute-mesh-uvs", shrinkToFit: o, usage: bi.VERTEX | bi.COPY_DST }),
      f = new Buffer_({ data: s, label: "index-mesh-buffer", shrinkToFit: o, usage: bi.INDEX | bi.COPY_DST });
    (super({
      attributes: {
        aPosition: { buffer: d, format: "float32x2", stride: 8, offset: 0 },
        aUV: { buffer: c, format: "float32x2", stride: 8, offset: 0 },
      },
      indexBuffer: f,
      topology: r.topology,
    }),
      (this.batchMode = "auto"));
  }
  get positions() {
    return this.attributes.aPosition.buffer.data;
  }
  set positions(e) {
    this.attributes.aPosition.buffer.data = e;
  }
  get uvs() {
    return this.attributes.aUV.buffer.data;
  }
  set uvs(e) {
    this.attributes.aUV.buffer.data = e;
  }
  get indices() {
    return this.indexBuffer.data;
  }
  set indices(e) {
    this.indexBuffer.data = e;
  }
}
