// Extracted from HabboAirLauncher.deobf.js, line 66398.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/motion/class_3272.as
// Obfuscated name: _i43282b0b4b3ed0

class a {
  static {
    n(this, "class_3272");
  }
  static const_9 = [];
  static const_5 = [];
  static _r94f908f1a960aa = [];
  static var_382 = null;
  static _r7e71f19729cda7 = !1;
  static _r760c0010a58093 = n((...e) => {
    a._r7e71f19729cda7 = !0;
    let r = _ia411d8d8194a3a(),
      t = a.const_9.pop();
    for (; t;) (a.const_5.push(t), t.start(), (t = a.const_9.pop()));
    for (t = a._r94f908f1a960aa.pop(); t;) {
      let i = a.const_5.indexOf(t);
      (i >= 0 && a.const_5.splice(i, 1), t.running && t.stop(), (t = a._r94f908f1a960aa.pop()));
    }
    for (let i of [...a.const_5])
      i.running ? (i.tick(r), i.complete && a._ra35d4cb6bea218(i)) : a._ra35d4cb6bea218(i);
    (a.const_5.length === 0 && a._r89a1197e3ffa95(), (a._r7e71f19729cda7 = !1));
  }, "_r760c0010a58093");
  static DropBounce(e) {
    return (
      a.const_5.indexOf(e) === -1 &&
        a.const_9.indexOf(e) === -1 &&
        (a._r7e71f19729cda7 ? a.const_9.push(e) : (a.const_5.push(e), e.start()),
        a._r83f86b7296655b()),
      e
    );
  }
  static _ra35d4cb6bea218(e) {
    let r = a.const_5.indexOf(e);
    if (r > -1) {
      a._r7e71f19729cda7
        ? a._r94f908f1a960aa.indexOf(e) === -1 && a._r94f908f1a960aa.push(e)
        : (a.const_5.splice(r, 1),
          e.running && e.stop(),
          a.const_5.length === 0 && a._r89a1197e3ffa95());
      return;
    }
    ((r = a.const_9.indexOf(e)), r > -1 && a.const_9.splice(r, 1));
  }
  static _r3cc4a1049d7ad8(e) {
    for (let r of a.const_5) if (r.tag === e) return r;
    for (let r of a.const_9) if (r.tag === e) return r;
    return null;
  }
  static runMotion(e) {
    for (let r of a.const_5) if (r.target === e) return r;
    for (let r of a.const_9) if (r.target === e) return r;
    return null;
  }
  static getMotionByTagAndTarget(e, r) {
    for (let t of a.const_5) if (t.tag === e && t.target === r) return t;
    for (let t of a.const_9) if (t.tag === e && t.target === r) return t;
    return null;
  }
  static get isRunning() {
    return a._r34a80096cf5580().running;
  }
  static get isUpdating() {
    return a._r7e71f19729cda7;
  }
  getNumRunningMotions(e) {
    let r = 0;
    for (let t of a.const_5) t.target === e && r++;
    return r;
  }
  static _r0d0be63c64b69b() {
    let e = class_14.instance?.dispatchEvent?.stage?.frameRate ?? 60;
    return 1e3 / (e > 0 ? e : 60);
  }
  static _r34a80096cf5580() {
    return (a.var_382 || (a.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(a._r0d0be63c64b69b(), 0)), a.var_382);
  }
  static _r83f86b7296655b() {
    let e = a._r34a80096cf5580();
    ((e.delay = a._r0d0be63c64b69b()),
      e.running || (e.addEventListener(DeBouncer.addEventListener, a._r760c0010a58093), e.start()));
  }
  static _r89a1197e3ffa95() {
    let e = a._r34a80096cf5580();
    e.running && (e.removeEventListener(DeBouncer.addEventListener, a._r760c0010a58093), e.stop());
  }
}
