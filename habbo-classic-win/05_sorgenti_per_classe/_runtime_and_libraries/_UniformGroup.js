// Extracted from HabboAirLauncher.deobf.js, line 8423.

class TUe {
      static {
        n(this, "_UniformGroup");
      }
      constructor(e, r) {
        ((this._touched = 0),
          (this.uid = uid_("uniform")),
          (this._resourceType = "uniformGroup"),
          (this._resourceId = uid_("resource")),
          (this.isUniformGroup = !0),
          (this._dirtyId = 0),
          (this.destroyed = !1),
          (r = { ...TUe.defaultOptions, ...r }),
          (this.uniformStructures = e));
        let t = {};
        for (let i in e) {
          let s = e[i];
          if (((s.name = i), (s.size = s.size ?? 1), !MUe[s.type])) {
            let o = s.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);
            if (o) {
              let [, d, c] = o;
              throw new Error(
                `Uniform type ${s.type} is not supported. Use type: '${d}', size: ${c} instead.`,
              );
            }
            throw new Error(
              `Uniform type ${s.type} is not supported. Supported uniform types are: ${zPe.join(", ")}`,
            );
          }
          (s.value ?? (s.value = getDefaultUniformValue(s.type, s.size)), (t[i] = s.value));
        }
        ((this.uniforms = t),
          (this._dirtyId = 1),
          (this.ubo = r.ubo),
          (this.isStatic = r.isStatic),
          (this._signature = createIdFromString(
            Object.keys(t)
              .map((i) => `${i}-${e[i].type}`)
              .join("-"),
            "uniform-group",
          )));
      }
      update() {
        this._dirtyId++;
      }
    }
