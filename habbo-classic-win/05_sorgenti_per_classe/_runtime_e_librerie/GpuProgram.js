// Estratto da HabboAirLauncher.deobf.js, riga 8264.

class a {
        static {
          n(this, "GpuProgram");
        }
        constructor(e) {
          ((this._layoutKey = 0), (this._attributeLocationsKey = 0));
          let { fragment: r, vertex: t, layout: i, gpuLayout: s, name: o } = e;
          if (((this.name = o), (this.fragment = r), (this.vertex = t), r.source === t.source)) {
            let d = extractStructAndGroups(r.source);
            this.structsAndGroups = d;
          } else {
            let d = extractStructAndGroups(t.source),
              c = extractStructAndGroups(r.source);
            this.structsAndGroups = removeStructAndGroupDuplicates(d, c);
          }
          ((this.layout = i ?? generateLayoutHash(this.structsAndGroups)),
            (this.gpuLayout = s ?? generateGpuLayoutGroups(this.structsAndGroups)),
            (this.autoAssignGlobalUniforms = this.layout[0]?.globalUniforms !== void 0),
            (this.autoAssignLocalUniforms = this.layout[1]?.localUniforms !== void 0),
            this._generateProgramKey());
        }
        _generateProgramKey() {
          let { vertex: e, fragment: r } = this,
            t = e.source + r.source + e.entryPoint + r.entryPoint;
          this._layoutKey = createIdFromString(t, "program");
        }
        get attributeData() {
          return (this._attributeData ?? (this._attributeData = extractAttributesFromGpuProgram(this.vertex)), this._attributeData);
        }
        destroy() {
          ((this.gpuLayout = null),
            (this.layout = null),
            (this.structsAndGroups = null),
            (this.fragment = null),
            (this.vertex = null),
            (YY[this._cacheKey] = null));
        }
        static from(e) {
          let r = `${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;
          return (YY[r] || ((YY[r] = new a(e)), (YY[r]._cacheKey = r)), YY[r]);
        }
      }
