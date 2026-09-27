// Estratto da HabboAirLauncher.deobf.js, riga 157797.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/communication/messages/class_3744.as
// Nome offuscato: _iddd818d68db8a8

class {
  static {
    n(this, "class_3744");
  }
  static {
    oFe(this, "class_3744");
  }
  var_3778 = new globalThis.Map();
  var_2621 = new globalThis.Map();
  _rf7c6284dd1208c = new globalThis.Map();
  dispose() {
    for (let e of this._rf7c6284dd1208c.values()) for (let r of e) r.dispose();
    this._rf7c6284dd1208c.clear();
  }
  _r8c48fe87d2bf8a(e) {
    for (let [r, t] of Object.entries(e.events)) this.registerMessageEventClass(Number.parseInt(r, 10), t);
    for (let [r, t] of Object.entries(e.composers)) this.registerMessageComposerClass(Number.parseInt(r, 10), t);
  }
  registerMessageEvent(e) {
    let r = ClassUtils.getSimpleQualifiedClassName(e),
      t = this.var_2621.get(r);
    if (t == null) throw new Error(`Unknown message event class ${r}`);
    let i = this._rf7c6284dd1208c.get(t);
    (i != null && i.length > 0
      ? (e.parser = i[0].parser)
      : ((e.parser = new e.parserClass()), this._rf7c6284dd1208c.set(t, [])),
      this._rf7c6284dd1208c.get(t).push(e));
  }
  _r70543abd1a21ba(e) {
    let r = ClassUtils.getSimpleQualifiedClassName(e),
      t = this.var_2621.get(r);
    if (t == null) return;
    let i = this._rf7c6284dd1208c.get(t);
    if (i == null) return;
    let s = i.indexOf(e);
    s >= 0 && (i.splice(s, 1), i.length === 0 && this._rf7c6284dd1208c.delete(t));
  }
  _r62c2545afc02ef(e) {
    return this.var_3778.get(ClassUtils.getSimpleQualifiedClassName(e)) ?? -1;
  }
  _r8970695a8ddf1b(e) {
    return this._rf7c6284dd1208c.get(e);
  }
  registerMessageComposerClass(e, r) {
    if (!ClassUtils.implementsInterface(r, _i8efa9b4673dd7f)) throw new Error(`Invalid composer class for message ID ${e}`);
    let t = ClassUtils.getSimpleQualifiedClassName(r);
    if (this.var_3778.has(t))
      throw new Error(`Duplicate message ID definition for composer class ${t}`);
    this.var_3778.set(t, e);
  }
  registerMessageEventClass(e, r) {
    if (!ClassUtils.implementsInterface(r, _id565101742a8ca)) throw new Error(`Invalid event class for message ID ${e}`);
    let t = ClassUtils.getSimpleQualifiedClassName(r);
    if (this.var_2621.has(t)) throw new Error(`Duplicate message ID definition for event class ${t}`);
    this.var_2621.set(t, e);
  }
}
