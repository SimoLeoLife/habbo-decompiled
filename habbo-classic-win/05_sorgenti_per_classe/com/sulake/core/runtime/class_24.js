// Extracted from HabboAirLauncher.deobf.js, line 59746.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/class_24.as
// Obfuscated name: _i70d97f36e23413

class a extends ComponentContext {
    static {
      n(this, "class_24");
    }
    static NUM_UPDATE_RECEIVER_LEVELS = 3;
    static _r0c7cb25f8c268e = null;
    _r9bedec15ad0846 = null;
    _rcc146877d1e053 = null;
    _r7407c59cfdcc82 = 0;
    _r3adf32e28a3095;
    var_577 = null;
    _rb71549ffa08651 = null;
    _rad39d0db2a714d;
    var_1667 = [];
    _r2aca1358a187d7 = [];
    _properties = new Map();
    _rf5523dd3cc6a9d = new Set();
    _rbb4783ac3c0219 = Date.now();
    _r868579ab9ea587 = 0;
    _rd3b7389937eeab = -1;
    _rf116e4edfe6bd4 = 0;
    var_450;
    _r46b9438508a3e0 = new WeakSet();
    _rebootOnNextFrame = !1;
    constructor(e, r, t, i) {
      (super(null, ue.COMPONENT_FLAG_CONTEXT, new AssetLibraryCollection("_core_assets")),
        (this._r2ee29b2203b5c5 = e),
        (this._rad39d0db2a714d = r ?? new UnkClass_22937e()),
        (this.var_450 = i ?? new Map()),
        (this._r868579ab9ea587 = t),
        (this.var_1933 = (t & class_14._r45378a812c2e75) === class_14._r45378a812c2e75),
        (this._r3adf32e28a3095 = this._rc94ca1e9d5883d));
      for (let s = 0; s < a.NUM_UPDATE_RECEIVER_LEVELS; s++)
        (this.var_1667.push([]), this._r2aca1358a187d7.push(0));
      (this.attachComponent(this, [new UnkInterface_ff898c()]),
        this._r2ee29b2203b5c5?.addEventListener(M._re9c5159721d60d, this._r15073fc81a0758),
        this._ra9a39f2cd9946a(t & class_14._r4ffc196616a655),
        class_14._r99da3325792405(this));
    }
    static get _r29c45cd093eed6() {
      return this._r0c7cb25f8c268e;
    }
    static set _r29c45cd093eed6(e) {
      this._r0c7cb25f8c268e = e;
    }
    get _r29c45cd093eed6() {
      return a._r0c7cb25f8c268e;
    }
    get arguments() {
      return this.var_450;
    }
    error(e, r, t = -1, i = null) {
      return (
        super.error(e, r, t, i),
        this._rad39d0db2a714d.logError(e, r, t, i),
        r && this.isCrashOnCriticalError() && !this.isExcludedFromCrash(t) && !this.disposed
          ? (this.dispose(), !0)
          : !1
      );
    }
    initialize() {
      this.hasLockedComponents()
        ? this.events.addEventListener?.(ue.COMPONENT_EVENT_UNLOCKED, this._rcd185eec32250c)
        : this._r69d1b31d7ff759();
    }
    purge() {
      super.purge();
    }
    _r55e974d136c7f2(e, r = 1) {
      this.hibernating ||
        (UnkClass_3aa97b.stop(), (this._rd3b7389937eeab = e), (this._rf116e4edfe6bd4 = 1e3 / Math.max(1, r)));
    }
    resume() {
      this.hibernating && (UnkClass_3aa97b.start(), (this._rd3b7389937eeab = -1), (this._rf116e4edfe6bd4 = 0));
    }
    _r24056a96827208() {
      this.var_450 = new Map();
    }
    hasLockedComponents() {
      if (this._components != null) {
        for (let e of this._components) if (e.locked) return !0;
      }
      return !1;
    }
    _rb6efb0c429b741() {
      return this._components.filter((e) => e.locked);
    }
    _rae264c311d4319(e, r = null) {
      (this.debug("Parsing config document"),
        (this._rcc146877d1e053 = r),
        this._r9bedec15ad0846 == null && (this._r9bedec15ad0846 = new _ie(this.var_1933)),
        (this._r7407c59cfdcc82 = 0));
      let t = typeof e == "string" ? rr(e) : e,
        i = {},
        s = [
          ...this._r60d8fa87e68d67(t.child("asset-libraries").child("library"), "asset"),
          ...this._r60d8fa87e68d67(t.child("service-libraries").child("library"), "service"),
          ...this._r60d8fa87e68d67(t.child("component-libraries").child("library"), "component"),
        ];
      for (let o of s) {
        let d = new Bl(i, !0, this.var_1933);
        (d.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r72f7831ae398d6),
          d.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r5a833a008b1dd4),
          d.addEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._raf2c4fe34b13e2),
          o.kind === "asset" && (this._r46b9438508a3e0.add(d), this.assets.loadFromFile(d, !0)),
          d.load(new UnkClass_636490(this.updateUrlProtocol(o.url))),
          this._r9bedec15ad0846.push(d),
          (this._r7407c59cfdcc82 += 1));
      }
      !this.disposed && this._ra28da5fa64db98() === 0 && this._ra725674f2307ae();
    }
    _ra28da5fa64db98() {
      return this._r9bedec15ad0846?.length ?? 0;
    }
    _rb86aa5df59b561() {
      return this._r7407c59cfdcc82 - this._ra28da5fa64db98();
    }
    _rd7c10d8fcef2f7(e) {
      if (e) {
        ((this._r3adf32e28a3095 = this._rcf4e5ee90a069e),
          (this.var_577 == null || this.var_577.disposed) &&
            (this.var_577 = new BZ(this)),
          this._components.includes(this.var_577) ||
            this.attachComponent(this.var_577, [new UnkInterface_0944d2()]),
          this._rb71549ffa08651 == null &&
            ((this._rb71549ffa08651 = new MZ(this.var_577)),
            this._r2ee29b2203b5c5?.addChild(this._rb71549ffa08651)));
        for (let r = 0; r < a.NUM_UPDATE_RECEIVER_LEVELS; r++) {
          let t = this.var_1667[r];
          for (let i = t.length - 1; i >= 0; i--) {
            let s = t[i];
            s instanceof UnkClass_9dd47e && ((t[i] = s.receiver), s.dispose());
          }
        }
        return;
      }
      if (
        (this.var_577 != null &&
          this._components.includes(this.var_577) &&
          this._r24d42320867740(this.var_577),
        this._ra9a39f2cd9946a(this._r868579ab9ea587 & class_14._r4ffc196616a655),
        (this._r868579ab9ea587 & class_14._r4ffc196616a655) === class_14._raec78e22cdca0c)
      )
        for (let r = 0; r < a.NUM_UPDATE_RECEIVER_LEVELS; r++) {
          let t = this.var_1667[r];
          for (let i = t.length - 1; i >= 0; i--) {
            let s = t[i];
            s != null && !(s instanceof UnkClass_9dd47e) && (t[i] = new UnkClass_9dd47e(s, this, r));
          }
        }
    }
    propertyExists(e) {
      return this._properties.has(e);
    }
    getProperty(e, r = null) {
      let t = this._properties.get(e) ?? "";
      if (r != null) for (let [i, s] of r.entries()) t = t.replaceAll(`%${i}%`, s);
      return t;
    }
    setProperty(e, r, t = !1, i = !1) {
      this._rf5523dd3cc6a9d.has(e) || (this._properties.set(e, r), t && this._rf5523dd3cc6a9d.add(e));
    }
    getBoolean(e) {
      let r = this.getProperty(e).toLowerCase();
      return r === "1" || r === "true";
    }
    getInteger(e, r) {
      let t = Number.parseInt(this.getProperty(e), 10);
      return Number.isNaN(t) ? r : t;
    }
    interpolate(e) {
      return e.replace(/%([^%]+)%/g, (r, t) => this.getProperty(String(t)));
    }
    updateUrlProtocol(e) {
      return e;
    }
    registerUpdateReceiver(e, r) {
      this.removeUpdateReceiver(e);
      let t = Math.max(0, Math.min(a.NUM_UPDATE_RECEIVER_LEVELS - 1, r));
      (this.var_577 != null ? class_14._r9be507f8634252 : this._r868579ab9ea587 & class_14._r4ffc196616a655) ===
      class_14._raec78e22cdca0c
        ? this.var_1667[t].push(new UnkClass_9dd47e(e, this, t))
        : this.var_1667[t].push(e);
    }
    removeUpdateReceiver(e) {
      if (this.disposed) return;
      let r =
        this.var_577 != null ? class_14._r9be507f8634252 : this._r868579ab9ea587 & class_14._r4ffc196616a655;
      for (let t = 0; t < a.NUM_UPDATE_RECEIVER_LEVELS; t++) {
        let i = this.var_1667[t];
        if (r === class_14._raec78e22cdca0c)
          for (let s = 0; s < i.length; s++) {
            let o = i[s];
            if (o instanceof UnkClass_9dd47e && o.receiver === e) {
              (o.dispose(), i.splice(s, 1));
              return;
            }
          }
        else {
          let s = i.indexOf(e);
          if (s >= 0) {
            i[s] = null;
            return;
          }
        }
      }
    }
    writeDictionaryToProxy(e, r) {
      return a.writeObjectToProxy(e, r);
    }
    _r6ea861faf7bb1a(e) {
      let r = a._rae45ffc27f5fb6(e);
      return r instanceof Map ? r : null;
    }
    writeXMLToProxy(e, r) {
      return a.writeObjectToProxy(e, typeof r == "string" ? rr(r) : r);
    }
    _r38bd6a35be1638(e) {
      let r = a._rae45ffc27f5fb6(e);
      return r ?? null;
    }
    _r47fe98ceeec734(e) {
      try {
        let r = this._r29c45cd093eed6?._r92c02b2515168d(e);
        return r == null ? null : ((r.position = 0), r.readUTFBytes(r.length));
      } catch {
        return null;
      }
    }
    _rda9151f6f632f8(e, r) {
      try {
        if (this._r29c45cd093eed6 == null) return !1;
        let t = new re();
        return (t.writeUTFBytes(r ?? ""), this._r29c45cd093eed6._rb34e5a1902e2c4(e, t), !0);
      } catch {
        return !1;
      }
    }
    static writeObjectToProxy(e, r) {
      try {
        let i = class_14.instance?._r29c45cd093eed6;
        if (i == null) return !1;
        let s = new re();
        return (s.writeObject(this.serializeProxyValue(r)), i._rb34e5a1902e2c4(e, s), !0);
      } catch {
        return !1;
      }
    }
    static _rae45ffc27f5fb6(e) {
      try {
        let t = class_14.instance?._r29c45cd093eed6;
        if (t == null) return null;
        let i = t._r92c02b2515168d(e);
        return i == null ? null : ((i.position = 0), this._r72b5c237f8e859(i.readObject()));
      } catch {
        return null;
      }
    }
    static serializeProxyValue(e) {
      if (e == null || typeof e == "boolean" || typeof e == "number" || typeof e == "string")
        return e ?? null;
      if (e instanceof Map)
        return {
          __habboProxyType: "Map",
          entries: Array.from(e.entries(), ([r, t]) => [
            this.serializeProxyValue(r),
            this.serializeProxyValue(t),
          ]),
        };
      if (this._r14ad811376658f(e)) return { __habboProxyType: "XML", value: String(e) };
      if (Array.isArray(e)) return e.map((r) => this.serializeProxyValue(r));
      if (typeof e == "object") {
        let r = {};
        for (let [t, i] of Object.entries(e)) r[t] = this.serializeProxyValue(i);
        return r;
      }
      return String(e);
    }
    static _r72b5c237f8e859(e) {
      if (e == null || typeof e == "boolean" || typeof e == "number" || typeof e == "string") return e;
      if (Array.isArray(e)) return e.map((r) => this._r72b5c237f8e859(r));
      if (this._rd10e01fd26cdf8(e))
        return new Map(e.entries.map(([r, t]) => [this._r72b5c237f8e859(r), this._r72b5c237f8e859(t)]));
      if (this._rd223c513a588d8(e)) return rr(e.value);
      if (typeof e == "object") {
        let r = {};
        for (let [t, i] of Object.entries(e)) r[t] = this._r72b5c237f8e859(i);
        return r;
      }
      return e;
    }
    static _rd10e01fd26cdf8(e) {
      return (
        typeof e == "object" &&
        e != null &&
        "__habboProxyType" in e &&
        e.__habboProxyType === "Map" &&
        Array.isArray(e.entries)
      );
    }
    static _rd223c513a588d8(e) {
      return (
        typeof e == "object" &&
        e != null &&
        "__habboProxyType" in e &&
        e.__habboProxyType === "XML" &&
        typeof e.value == "string"
      );
    }
    static _r14ad811376658f(e) {
      return (
        typeof e == "object" &&
        e != null &&
        typeof e.toXMLString == "function" &&
        typeof e.appendChild == "function"
      );
    }
    reboot() {
      this._rebootOnNextFrame = !0;
    }
    dispose() {
      if (!this.disposed) {
        UnkClass_3aa97b.stop();
        for (let e of this.var_1667) for (let r of e) r instanceof UnkClass_9dd47e && r.dispose();
        (this._r2ee29b2203b5c5?.removeEventListener(M._re9c5159721d60d, this._r15073fc81a0758),
          this._r9bedec15ad0846?.dispose(),
          (this._r9bedec15ad0846 = null),
          this.var_577?.dispose(),
          (this.var_577 = null),
          super.dispose());
      }
    }
    get hibernating() {
      return this._rd3b7389937eeab > -1;
    }
    get _reb933a5c6913fa() {
      return this.hibernating
        ? Math.min(this._rd3b7389937eeab + 1, a.NUM_UPDATE_RECEIVER_LEVELS)
        : a.NUM_UPDATE_RECEIVER_LEVELS;
    }
    _ra9a39f2cd9946a(e) {
      switch (e) {
        case class_14.CORE_SETUP_FRAME_UPDATE_SIMPLE:
          (this.debug("Core; using simple frame update handler"),
            (this._r3adf32e28a3095 = this._rc94ca1e9d5883d));
          break;
        case class_14._rfa963bd44ad884:
          (this.debug("Core; using complex frame update handler"),
            (this._r3adf32e28a3095 = this._r5ce74db694e7ee));
          break;
        case class_14._r9be507f8634252:
          (this.debug("Core; using profiler frame update handler"),
            (this._r3adf32e28a3095 = this._rcf4e5ee90a069e),
            (this.var_577 == null || this.var_577.disposed) &&
              (this.var_577 = new BZ(this)),
            this._components.includes(this.var_577) ||
              this.attachComponent(this.var_577, [new UnkInterface_0944d2()]),
            this._rb71549ffa08651 == null &&
              ((this._rb71549ffa08651 = new MZ(this.var_577)),
              this._r2ee29b2203b5c5?.addChild(this._rb71549ffa08651)));
          break;
        case class_14._raec78e22cdca0c:
          (this.debug("Core; using experimental frame update handler"),
            (this._r3adf32e28a3095 = this._rf35254de2a32da));
          break;
        default:
          (this.debug("Core; using debug frame update handler"),
            (this._r3adf32e28a3095 = this._rda770875ef3c63));
          break;
      }
    }
    _r69d1b31d7ff759() {
      (this.events.dispatchEvent?.(new M(ue.COMPONENT_EVENT_RUNNING)), UnkClass_3aa97b.start());
    }
    isCrashOnCriticalError() {
      return this.getBoolean("error_handling.crash_on_critical_error");
    }
    isExcludedFromCrash(e) {
      let r = this.getProperty("error_handling.exclude_crashing");
      return r ? r.split(",").includes(String(e)) : !1;
    }
    _r60d8fa87e68d67(e, r) {
      let t = [];
      for (let i of e.toArray()) {
        let s = i,
          o = String(s.attribute("url") || s.attribute("path"));
        o.length > 0 && t.push({ kind: r, url: o });
      }
      return t;
    }
    _r52f92496216edd(e) {
      (e.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._r72f7831ae398d6),
        e.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r5a833a008b1dd4),
        e.removeEventListener(ht.LIBRARY_LOADER_EVENT_PROGRESS, this._raf2c4fe34b13e2));
    }
    _ra725674f2307ae() {
      this._rcc146877d1e053 != null &&
        (this._rcc146877d1e053.dispatchEvent?.(new M(M.ComponentDependency)), (this._rcc146877d1e053 = null));
    }
    _rbf47610c4bd466(e) {
      this._rcc146877d1e053?.dispatchEvent?.(
        new UnkClass_864397(
          e.url ?? "",
          this._r7407c59cfdcc82 - this._ra28da5fa64db98(),
          this._r7407c59cfdcc82,
          e.elapsedTime,
        ),
      );
    }
    _rcd185eec32250c = n(() => {
      this.hasLockedComponents() ||
        (this.events.removeEventListener?.(ue.COMPONENT_EVENT_UNLOCKED, this._rcd185eec32250c),
        this._r69d1b31d7ff759());
    }, "_rcd185eec32250c");
    _r15073fc81a0758 = n(() => {
      if (this._rebootOnNextFrame) {
        (this._r2ee29b2203b5c5?.removeEventListener(M._re9c5159721d60d, this._r15073fc81a0758),
          (this._rebootOnNextFrame = !1),
          this.events.dispatchEvent?.(new M(ue.COMPONENT_EVENT_REBOOT)));
        return;
      }
      let e = Date.now(),
        r = e - this._rbb4783ac3c0219;
      (!this.hibernating || r > this._rf116e4edfe6bd4) &&
        (this._r3adf32e28a3095(e, r), (this._rbb4783ac3c0219 = e));
    }, "_r15073fc81a0758");
    _r72f7831ae398d6 = n((e) => {
      let r = e.target;
      r != null &&
        (this._r52f92496216edd(r),
        !this._r46b9438508a3e0.has(r) &&
          r.resource != null &&
          this.prepareComponent(r.resource, ue._r3ab7895be3bda4, r.domain),
        this.disposed ||
          (this._rbf47610c4bd466(r),
          this._ra28da5fa64db98() === 0 &&
            (this._ra725674f2307ae(), this.debug("All libraries loaded, Core is now running"))));
    }, "_r72f7831ae398d6");
    _r5a833a008b1dd4 = n((e) => {
      let r = e,
        t = r.target;
      t != null &&
        (this._r52f92496216edd(t),
        this.error(
          `Failed to download library "${t.url}" HTTP status ${r.status} bytes loaded ${r.bytesLoaded}/${r.bytesTotal} : ${t._r3961db622275a7()}`,
          !0,
          class_14._rfcf906423aa8ef,
        ),
        this.disposed ||
          (this._rbf47610c4bd466(t), this._ra28da5fa64db98() === 0 && this._ra725674f2307ae()));
    }, "_r5a833a008b1dd4");
    _raf2c4fe34b13e2 = n((e) => {
      let r = e,
        t = r.target;
      t != null &&
        this._rcc146877d1e053?.dispatchEvent?.(
          new UnkClass_864397(t.url ?? "", r.bytesLoaded, r.bytesTotal, t.elapsedTime),
        );
    }, "_raf2c4fe34b13e2");
    _rc94ca1e9d5883d = n((e, r) => {
      for (let t = 0; t < this._reb933a5c6913fa; t++)
        ((this._r2aca1358a187d7[t] = 0), this._r9398bd4918bbf9(t, r, !1, !1));
    }, "_rc94ca1e9d5883d");
    _r5ce74db694e7ee = n((e, r) => {
      let t = 1e3 / (this._r2ee29b2203b5c5?.stage?.frameRate ?? 60),
        i = !0;
      for (let s = 0; s < this._reb933a5c6913fa && i; s++) {
        let o = Date.now() - e,
          d = !1;
        (o > t && this._r2aca1358a187d7[s] < s && ((this._r2aca1358a187d7[s] += 1), (d = !0)),
          d || ((this._r2aca1358a187d7[s] = 0), (i = this._r9398bd4918bbf9(s, r, !1, !0))));
      }
    }, "_r5ce74db694e7ee");
    _rcf4e5ee90a069e = n((e, r) => {
      this.var_577?.start();
      for (let t = 0; t < this._reb933a5c6913fa; t++)
        ((this._r2aca1358a187d7[t] = 0), this._r9398bd4918bbf9(t, r, !0, !1));
      this.var_577?.stop();
    }, "_rcf4e5ee90a069e");
    _rf35254de2a32da = n(() => {
      for (let e = 0; e < a.NUM_UPDATE_RECEIVER_LEVELS; e++) {
        let r = this.var_1667[e];
        for (let t = r.length - 1; t >= 0; t--) {
          let i = r[t];
          (i == null || (i instanceof UnkClass_9dd47e && i.disposed)) && (i instanceof UnkClass_9dd47e && i.dispose(), r.splice(t, 1));
        }
      }
    }, "_rf35254de2a32da");
    _rda770875ef3c63 = n((e, r) => {
      for (let t = 0; t < this._reb933a5c6913fa; t++)
        ((this._r2aca1358a187d7[t] = 0), this._r9398bd4918bbf9(t, r, !1, !1, !0));
    }, "_rda770875ef3c63");
    _r9398bd4918bbf9(e, r, t, i, s = !1) {
      let o = this.var_1667[e],
        d = 0;
      for (; d < o.length;) {
        let c = o[d];
        if (c == null || c.disposed) {
          (c instanceof UnkClass_9dd47e && c.dispose(), o.splice(d, 1));
          continue;
        }
        if (c instanceof UnkClass_9dd47e) {
          d += 1;
          continue;
        }
        try {
          t && this.var_577 != null ? this.var_577.update(c, r) : c.update(r);
        } catch (f) {
          let l = f instanceof Error ? f : new Error(String(f)),
            b = `Error in update receiver "${_iad1dc21ca35e21(c)}": ${s ? l : l.message}`;
          if (s) this.error(b, !1, l instanceof Error ? 0 : -1, l);
          else if (this.error(b, !0, 0, l) && i) return !1;
        }
        d += 1;
      }
      return !0;
    }
  }
