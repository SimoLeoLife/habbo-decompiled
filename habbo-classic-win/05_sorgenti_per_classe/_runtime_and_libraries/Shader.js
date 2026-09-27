// Extracted from HabboAirLauncher.deobf.js, line 8482.

class a extends Yn {
      static {
        n(this, "Shader");
      }
      constructor(e) {
        (super(),
          (this.uid = uid_("shader")),
          (this._uniformBindMap = Object.create(null)),
          (this._ownedBindGroups = []),
          (this._destroyed = !1));
        let { gpuProgram: r, glProgram: t, groups: i, resources: s, compatibleRenderers: o, groupMap: d } = e;
        ((this.gpuProgram = r),
          (this.glProgram = t),
          o === void 0 && ((o = 0), r && (o |= Jo.WEBGPU), t && (o |= Jo.WEBGL)),
          (this.compatibleRenderers = o));
        let c = {};
        if ((!s && !i && (s = {}), s && i)) throw new Error("[Shader] Cannot have both resources and groups");
        if (!r && i && !d)
          throw new Error(
            "[Shader] No group map or WebGPU shader provided - consider using resources instead.",
          );
        if (!r && i && d)
          for (let f in d)
            for (let l in d[f]) {
              let b = d[f][l];
              c[b] = { group: f, binding: l, name: b };
            }
        else if (r && i && !d) {
          let f = r.structsAndGroups.groups;
          ((d = {}),
            f.forEach((l) => {
              ((d[l.group] = d[l.group] || {}), (d[l.group][l.binding] = l.name), (c[l.name] = l));
            }));
        } else if (s) {
          ((i = {}),
            (d = {}),
            r &&
              r.structsAndGroups.groups.forEach((b) => {
                ((d[b.group] = d[b.group] || {}), (d[b.group][b.binding] = b.name), (c[b.name] = b));
              }));
          let f = 0;
          for (let l in s)
            c[l] ||
              (i[99] || ((i[99] = new BindGroup()), this._ownedBindGroups.push(i[99])),
              (c[l] = { group: 99, binding: f, name: l }),
              (d[99] = d[99] || {}),
              (d[99][f] = l),
              f++);
          for (let l in s) {
            let b = l,
              _ = s[l];
            !_.source && !_._resourceType && (_ = new Zi(_));
            let h = c[b];
            h &&
              (i[h.group] || ((i[h.group] = new BindGroup()), this._ownedBindGroups.push(i[h.group])),
              i[h.group].setResource(_, h.binding));
          }
        }
        ((this.groups = i), (this._uniformBindMap = d), (this.resources = this._buildResourceAccessor(i, c)));
      }
      addResource(e, r, t) {
        var i, s;
        ((i = this._uniformBindMap)[r] || (i[r] = {}),
          (s = this._uniformBindMap[r])[t] || (s[t] = e),
          this.groups[r] || ((this.groups[r] = new BindGroup()), this._ownedBindGroups.push(this.groups[r])));
      }
      _buildResourceAccessor(e, r) {
        let t = {};
        for (let i in r) {
          let s = r[i];
          Object.defineProperty(t, s.name, {
            get() {
              return e[s.group].getResource(s.binding);
            },
            set(o) {
              e[s.group].setResource(o, s.binding);
            },
          });
        }
        return t;
      }
      destroy(e = !1) {
        this._destroyed ||
          ((this._destroyed = !0),
          this.emit("destroy", this),
          e && (this.gpuProgram?.destroy(), this.glProgram?.destroy()),
          (this.gpuProgram = null),
          (this.glProgram = null),
          this.removeAllListeners(),
          (this._uniformBindMap = null),
          this._ownedBindGroups.forEach((r) => {
            r.destroy();
          }),
          (this._ownedBindGroups = null),
          (this.resources = null),
          (this.groups = null));
      }
      static from(e) {
        let { gpu: r, gl: t, ...i } = e,
          s,
          o;
        return (r && (s = ls.from(r)), t && (o = fs.from(t)), new a({ gpuProgram: s, glProgram: o, ...i }));
      }
    }
