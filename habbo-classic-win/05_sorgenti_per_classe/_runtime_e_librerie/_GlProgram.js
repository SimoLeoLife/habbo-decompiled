// Estratto da HabboAirLauncher.deobf.js, riga 7979.

class jPe {
        static {
          n(this, "_GlProgram");
        }
        constructor(e) {
          e = { ...jPe.defaultOptions, ...e };
          let r = e.fragment.indexOf("#version 300 es") !== -1,
            t = {
              stripVersion: r,
              ensurePrecision: {
                requestedFragmentPrecision: e.preferredFragmentPrecision,
                requestedVertexPrecision: e.preferredVertexPrecision,
                maxSupportedVertexPrecision: "highp",
                maxSupportedFragmentPrecision: getMaxFragmentPrecision(),
              },
              setProgramName: { name: e.name },
              addProgramDefines: r,
              insertVersion: r,
            },
            i = e.fragment,
            s = e.vertex;
          (Object.keys(GPe).forEach((o) => {
            let d = t[o];
            ((i = GPe[o](i, d, !0)), (s = GPe[o](s, d, !1)));
          }),
            (this.fragment = i),
            (this.vertex = s),
            (this.transformFeedbackVaryings = e.transformFeedbackVaryings),
            (this._key = createIdFromString(`${this.vertex}:${this.fragment}`, "gl-program")));
        }
        destroy() {
          ((this.fragment = null),
            (this.vertex = null),
            (this._attributeData = null),
            (this._uniformData = null),
            (this._uniformBlockData = null),
            (this.transformFeedbackVaryings = null),
            (QY[this._cacheKey] = null));
        }
        static from(e) {
          let r = `${e.vertex}:${e.fragment}`;
          return (QY[r] || ((QY[r] = new jPe(e)), (QY[r]._cacheKey = r)), QY[r]);
        }
      }
