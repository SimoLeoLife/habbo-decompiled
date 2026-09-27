// Estratto da HabboAirLauncher.deobf.js, riga 59236.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/class_22.as

class extends ue {
  static {
    n(this, "ComponentContext");
  }
  _components = [];
  IUnknown = [];
  _r93d17bf982a3f0 = [];
  var_1933 = !1;
  _r2ee29b2203b5c5;
  _configuration = null;
  _linkEventTrackers = [];
  constructor(e, r = 0, t = null) {
    (super(e, r | ue.COMPONENT_FLAG_CONTEXT, t), (this._r2ee29b2203b5c5 = new Sprite()));
  }
  get root() {
    return !this.context || this.context === this ? this : this.context.root;
  }
  get dispatchEvent() {
    return this._r2ee29b2203b5c5;
  }
  get configuration() {
    return this._configuration;
  }
  set configuration(e) {
    this._configuration = e;
  }
  purge() {
    super.purge();
    for (let e of this._components) e !== this && e.purge();
  }
  debug(e) {
    ((this._lastDebug = e),
      this.var_1933 && this.events.dispatchEvent?.(new M(ue.COMPONENT_EVENT_DEBUG)));
  }
  _rf4e620cf4512da() {
    return this._lastDebug;
  }
  warning(e) {
    ((this._lastWarning = e), this.events.dispatchEvent?.(new WarningEvent(ue.COMPONENT_EVENT_WARNING, e)));
  }
  _r8e378f499a77a5() {
    return this._lastWarning;
  }
  error(e, r, t = -1, i = null) {
    return (
      (this._lastError = e),
      this.events.dispatchEvent?.(new ErrorEvent__(ue.COMPONENT_EVENT_ERROR, e, r, t, i)),
      !1
    );
  }
  _r3961db622275a7() {
    return this._lastError;
  }
  loadFromFile(e, r) {
    let t = this._r93d17bf982a3f0.find((s) => s.url === e.url);
    if (t != null) return t;
    let i = new Bl(r, !1, this.var_1933);
    return (
      i.addEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rc539c61677fb0d),
      i.addEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36),
      i.addEventListener(ht.LIBRARY_LOADER_EVENT_DEBUG, this._r79bc6145e514b8),
      i.load(e),
      this._r93d17bf982a3f0.push(i),
      i
    );
  }
  _rda7aedd9c00e8f(e, r) {
    return this.assets.loadFromResource(e, r);
  }
  prepareComponent(e, r = 0, t = null) {
    let i = t ?? { _r4e63c263d0980d: n((c) => null, "_r4e63c263d0980d") },
      s = this._ree19a6f427dfff(e);
    if (s == null) return null;
    let o = s.child("component"),
      d = null;
    for (let c of o.toArray()) {
      let f = c,
        l = String(f.attribute("class")),
        b = i._r4e63c263d0980d(l) ?? _i7f1bba5bd96056(l);
      if (b == null) return (this.error(`Invalid component class ${l}!`, !0, class_14._rb99b6a233ae96c), null);
      let _ = null,
        h = f.child("assets"),
        p = f.child("aliases");
      if (h.length() > 0) {
        let I = rr("<manifest><library /></manifest>"),
          C = I.child("library").toArray()[0];
        (C.appendChild(h.toString()),
          p.length() > 0 && C.appendChild(p.toString()),
          (_ = new Na(`_assets@${l}`, I)),
          _.loadFromResource(I, e));
      }
      let m = _ == null ? new b(this, r) : new b(this, r, _);
      if (_ != null && m.assets !== _)
        return (
          _.dispose(),
          this.error(`Component "${l}" did not save provided asset library!`, !0, class_14._rb99b6a233ae96c),
          null
        );
      let v = f.child("interface"),
        w = [];
      for (let I of v.toArray()) {
        let C = String(I.attribute("iid")),
          W = i._r4e63c263d0980d(C) ?? _i7f1bba5bd96056(C);
        if (W == null) throw new _i430720d696adff(`Identifier class defined in manifest not found: ${C}`);
        let R = new W();
        (m.interfaceStructList.find(R) == null && m.interfaceStructList.insert(new InterfaceStruct(R, m)), w.push(R));
      }
      (this.attachComponent(m, w), (d = m));
    }
    return d;
  }
  attachComponent(e, r) {
    if (this._components.includes(e)) {
      this.error(`Component ${String(e)} already attached to context!`, !1);
      return;
    }
    (this._components.push(e),
      e.locked &&
        (e.events.addEventListener?.(ue.COMPONENT_EVENT_UNLOCKED, this._re3f7803f4e31be),
        e.events.addEventListener?.(ue.INTERNAL_EVENT_UNLOCKED, this._re3f7803f4e31be)));
    for (let t of r)
      (e.interfaceStructList.find(t) == null && e.interfaceStructList.insert(new InterfaceStruct(t, e)),
        this.interfaceStructList.insert(new InterfaceStruct(t, e)));
    if (!e.locked) for (let t of r) this.hasQueueForInterface(t) && this.announceInterfaceAvailability(t, e);
  }
  _r24d42320867740(e) {
    let r = this.interfaceStructList._rbc27778decd2ca(e);
    for (; r >= 0;) (this.interfaceStructList.remove(r), (r = this.interfaceStructList._rbc27778decd2ca(e)));
    let t = this._components.indexOf(e);
    t >= 0 &&
      (this._components.splice(t, 1),
      e.events.removeEventListener?.(ue.COMPONENT_EVENT_UNLOCKED, this._re3f7803f4e31be),
      e.events.removeEventListener?.(ue.INTERNAL_EVENT_UNLOCKED, this._re3f7803f4e31be));
  }
  queueInterface(e, r = null) {
    let t = this.interfaceStructList._r158678286c6a29(e);
    if (t != null) {
      if (t.unknown === this && t.iis === _iad1dc21ca35e21(e)) return super.queueInterface(e, r);
      let i = t.unknown?.queueInterface(e, r);
      if (i != null) return i;
    }
    return (
      r != null &&
        (this._r857f8cd3b5d604(e, r),
        this.context != null &&
          this.context !== this &&
          this.context.queueInterface(e, this._r5ec8339ce4e7ac)),
      null
    );
  }
  registerUpdateReceiver(e, r) {
    this.root !== this && this.root.registerUpdateReceiver(e, r);
  }
  removeUpdateReceiver(e) {
    this.root !== this && this.root.removeUpdateReceiver(e);
  }
  dispose() {
    if (!this.disposed) {
      for (; this._components.length > 0;) this._components.pop()?.dispose();
      for (; this.IUnknown.length > 0;) this.IUnknown.pop()?.dispose();
      for (; this._r93d17bf982a3f0.length > 0;) {
        let e = this._r93d17bf982a3f0.shift();
        this._rffa7704e552470(e);
      }
      ((this._linkEventTrackers = []), super.dispose());
    }
  }
  toXMLString(e = 0) {
    let r = "	".repeat(e),
      t = _iad1dc21ca35e21(this),
      i = `${r}<context class="${t}" >
`,
      s = [],
      o = this.interfaceStructList._rfb5cdc66784ba5(this, s);
    for (let d = 0; d < o; d++) {
      let c = s[d];
      i += `${r}	<interface iid="${c.iis}" refs="${c.references}"/>
`;
    }
    for (let d of this._components) d !== this && (i += d.toXMLString(e + 1));
    return (
      (i += `${r}</context>
`),
      i
    );
  }
  _r7e43d9f4706607(e) {
    this._linkEventTrackers.includes(e) || this._linkEventTrackers.push(e);
  }
  _r7485c47d8bd77c(e) {
    let r = this._linkEventTrackers.indexOf(e);
    r >= 0 && this._linkEventTrackers.splice(r, 1);
  }
  _r6b6c989018eb05(e) {
    for (let r of this._linkEventTrackers)
      (r.linkPattern.length === 0 || e.startsWith(r.linkPattern)) && r.linkReceived(e);
  }
  get linkEventTrackers() {
    return this._linkEventTrackers;
  }
  _r857f8cd3b5d604(e, r) {
    let t = this._rb9d97a001fb579(e);
    (t == null && ((t = new _ibe1a06f8d5008c(e)), this.IUnknown.push(t)), t._rdf05bff2ee8312.unshift(r));
  }
  hasQueueForInterface(e) {
    return this._rb9d97a001fb579(e) != null;
  }
  _rb9d97a001fb579(e) {
    let r = _iad1dc21ca35e21(e);
    return this.IUnknown.find((t) => _iad1dc21ca35e21(t.identifier) === r) ?? null;
  }
  announceInterfaceAvailability(e, r) {
    let t = this._rb9d97a001fb579(e);
    if (t != null)
      for (; t._rdf05bff2ee8312.length > 0;) {
        let i = t._rdf05bff2ee8312.pop(),
          s = r.queueInterface(e);
        (s == null && this.error(`Interface ${String(e)} still unavailable!`, !0, class_14.ERROR_CATEGORY_INTERFACE_AVAILABILITY),
          i?.(e, s));
      }
  }
  _rffa7704e552470(e) {
    (e.removeEventListener(ht.LIBRARY_LOADER_EVENT_COMPLETE, this._rc539c61677fb0d),
      e.removeEventListener(ht.LIBRARY_LOADER_EVENT_ERROR, this._r47b56cfdf38a36),
      e.removeEventListener(ht.LIBRARY_LOADER_EVENT_DEBUG, this._r79bc6145e514b8),
      e.dispose());
    let r = this._r93d17bf982a3f0.indexOf(e);
    r >= 0 && this._r93d17bf982a3f0.splice(r, 1);
  }
  _ree19a6f427dfff(e) {
    try {
      let r = e.manifest;
      if (r != null && typeof r == "object" && "toXMLString" in r) return r;
      if (typeof r == "function") {
        let t = new r();
        return rr(t.readUTFBytes(t.length));
      }
    } catch {
      return null;
    }
    return null;
  }
  _rc539c61677fb0d = n((e) => {
    let r = e.target;
    r != null && (this._rffa7704e552470(r), this.prepareComponent(r.resource, ue._r3ab7895be3bda4, r.domain));
  }, "_rc539c61677fb0d");
  _r47b56cfdf38a36 = n((e) => {
    let r = e.target,
      t = r?._r3961db622275a7() ?? "";
    r != null &&
      (this._rffa7704e552470(r),
      this.error(`Failed to download component resource "${r.url}"!\r${t}`, !0, class_14.ERROR_CATEGORY_COMPONENT_RESOURCE_LOAD_ERROR));
  }, "_r47b56cfdf38a36");
  _r79bc6145e514b8 = n((e) => {
    let r = e.target;
    r != null && this.debug(r._rf4e620cf4512da());
  }, "_r79bc6145e514b8");
  _r5ec8339ce4e7ac = n((e, r) => {
    r instanceof ue && this.announceInterfaceAvailability(e, r);
  }, "_r5ec8339ce4e7ac");
  _re3f7803f4e31be = n((e) => {
    let r = e.unknown;
    if (
      (r != null &&
        !r.disposed &&
        (r.events.removeEventListener?.(ue.COMPONENT_EVENT_UNLOCKED, this._re3f7803f4e31be),
        r.events.removeEventListener?.(ue.INTERNAL_EVENT_UNLOCKED, this._re3f7803f4e31be)),
      !this.disposed && r != null)
    ) {
      let t = [];
      for (this.interfaceStructList._rfb5cdc66784ba5(r, t); t.length > 0 && !r.disposed && !this.disposed;) {
        let i = t.pop();
        this.announceInterfaceAvailability(i.iid, r);
      }
      this.root.events.dispatchEvent?.(new M(ue.COMPONENT_EVENT_UNLOCKED));
    }
  }, "_re3f7803f4e31be");
}
