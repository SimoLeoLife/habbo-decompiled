// Estratto da HabboAirLauncher.deobf.js, riga 157972.

class a extends Ft {
  static {
    n(this, "_if47aeb3c52d77a");
  }
  constructor(e, r) {
    (super(),
      (this._r6358b2bd53ae19 = e),
      (this._r7e08919c66c07a = r),
      (this._rf9e078882bb5d8 = new class_3744()),
      (this._rdfb0204ad683f1 = new b1e()),
      this.createSocket(),
      (this._r1a70d55a6af2a0 = new _i05394ecc0c0c4d(a._r6ab54c40bdbed8, 1)),
      this._r1a70d55a6af2a0.addEventListener(DeBouncer.addEventListener, this._r9c61bbc8ee0f91));
  }
  static {
    T8(this, "_if47aeb3c52d77a");
  }
  static _r6ab54c40bdbed8 = 1e4;
  _rc516bba1d867c8 = null;
  _r1a70d55a6af2a0 = null;
  _rf53c999f45a608 = 0;
  _r90d4a672460470 = new re();
  _rdfb0204ad683f1 = null;
  _rd0c3946634c889 = null;
  _ra61c2453d3fd98 = null;
  _rf9e078882bb5d8 = null;
  _r2ff2a7a1718745 = !1;
  _r15e499fbd3cba5 = !1;
  _r5df5271b193872 = null;
  _r300c0f6d4223e6 = null;
  _rb00451bfdfd786 = null;
  addListener(e, r) {
    this.addEventListener(e, r);
  }
  dispose() {
    this.disposed ||
      (this._rc2d9e519571ebc(),
      this._r1a70d55a6af2a0?.stop(),
      this._r1a70d55a6af2a0?.removeEventListener(DeBouncer.addEventListener, this._r9c61bbc8ee0f91),
      (this._r1a70d55a6af2a0 = null),
      (this._r90d4a672460470 = new re()),
      (this._r7e08919c66c07a = null),
      (this._rd0c3946634c889 = null),
      (this._ra61c2453d3fd98 = null),
      (this._rdfb0204ad683f1 = null),
      this._rf9e078882bb5d8?.dispose(),
      (this._rf9e078882bb5d8 = null),
      (this._r6358b2bd53ae19 = null),
      (this._rb00451bfdfd786 = null),
      super.dispose());
  }
  createSocket() {
    (this._rc2d9e519571ebc(),
      (this._r90d4a672460470 = new re()),
      (this._ra61c2453d3fd98 = null),
      (this._rd0c3946634c889 = null),
      (this._rc516bba1d867c8 = new b2()),
      this._rc516bba1d867c8.addEventListener(M.CONNECT, this._r2b4cb5586dc485),
      this._rc516bba1d867c8.addEventListener(M.ComponentDependency, this.var_2028),
      this._rc516bba1d867c8.addEventListener(M._r8922581ea8bc6e, this.var_2897),
      this._rc516bba1d867c8.addEventListener(_ie40b9435ae07b7._r49a1f77b743ca2, this._re0521218f111c0),
      this._rc516bba1d867c8.addEventListener(_i30cc549f9371ef._r5ff5ea8eb8799e, this._rf687aa43fea090),
      this._rc516bba1d867c8.addEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._rc31b29a85d4ce8));
  }
  init(e, r = 0, t = !0) {
    return (
      this._r7e08919c66c07a?._r8e2b1a9c694898(e, r),
      this._r1a70d55a6af2a0?.start(),
      (this._rf53c999f45a608 = _ia411d8d8194a3a()),
      this._rc516bba1d867c8?.connect(`${e}${t ? "?TCP_NODELAY" : ""}`, r),
      !0
    );
  }
  set timeout(e) {
    !this.disposed && this._r1a70d55a6af2a0 != null && (this._r1a70d55a6af2a0.delay = e);
  }
  addMessageEvent(e) {
    this._rf9e078882bb5d8?.registerMessageEvent(e);
  }
  removeMessageEvent(e) {
    this._rf9e078882bb5d8?._r70543abd1a21ba(e);
  }
  isAuthenticated() {
    this._r2ff2a7a1718745 = !0;
  }
  isConfigured() {
    this._r15e499fbd3cba5 = !0;
    for (let e of this._r300c0f6d4223e6 ?? []) {
      let r = e._re6923317176040(),
        t = this._r03cd7d4add24bf(e);
      t != null && this._r00b242f351bb03(r, t);
    }
    for (let e of this._r5df5271b193872 ?? []) this.send(e);
    ((this._r5df5271b193872 = []), (this._r300c0f6d4223e6 = []));
  }
  send(e) {
    if (this.disposed) return !1;
    if (this._r2ff2a7a1718745 && !this._r15e499fbd3cba5) return ((this._r5df5271b193872 ??= []).push(e), !1);
    let r = this._rf9e078882bb5d8?._r62c2545afc02ef(e) ?? -1;
    if (r < 0 || this._rdfb0204ad683f1 == null || this._rc516bba1d867c8 == null) return !1;
    let t = this._rdfb0204ad683f1.encode(r, e.getMessageArray());
    return (
      this._r7e08919c66c07a?._r42b93b22d06156(String(r)),
      this._rd0c3946634c889 == null || !this._rc516bba1d867c8.connected
        ? !1
        : (this._rd0c3946634c889._rb665561956d187(t),
          this._rc516bba1d867c8.writeBytes(t),
          this._rc516bba1d867c8.flush(),
          !0)
    );
  }
  sendUnencrypted(e) {
    if (this.disposed) return !1;
    let r = this._rf9e078882bb5d8?._r62c2545afc02ef(e) ?? -1;
    if (r < 0 || this._rdfb0204ad683f1 == null || this._rc516bba1d867c8 == null) return !1;
    let t = this._rdfb0204ad683f1.encode(r, e.getMessageArray()),
      i = e.constructor;
    return !ClassUtils.implementsInterface(i, _i2f5371c8998a3e) ||
      (this._r7e08919c66c07a?._r42b93b22d06156(String(r)), !this._rc516bba1d867c8.connected)
      ? !1
      : (this._rc516bba1d867c8.writeBytes(t), this._rc516bba1d867c8.flush(), !0);
  }
  setEncryption(e, r) {
    ((this._rd0c3946634c889 = e), (this._ra61c2453d3fd98 = r));
  }
  registerMessageClasses(e) {
    this._rf9e078882bb5d8?._r8c48fe87d2bf8a(e);
  }
  processReceivedData() {
    if (!this.disposed)
      try {
        this._r5125aad4e28d8a();
      } catch (e) {
        if (
          (this._r7e08919c66c07a != null &&
            this._rb00451bfdfd786 != null &&
            this._r7e08919c66c07a?._rf2a2572fe2da6b(this._rb00451bfdfd786),
          !this.disposed)
        )
          throw e;
      }
  }
  get connected() {
    return this._rc516bba1d867c8?.connected ?? !1;
  }
  close() {
    try {
      this._rc516bba1d867c8?.close();
    } catch {}
  }
  getServerToClientEncryption() {
    return this._ra61c2453d3fd98;
  }
  _rc2d9e519571ebc() {
    this._rc516bba1d867c8 != null &&
      (this._rc516bba1d867c8.removeEventListener(M.CONNECT, this._r2b4cb5586dc485),
      this._rc516bba1d867c8.removeEventListener(M.ComponentDependency, this.var_2028),
      this._rc516bba1d867c8.removeEventListener(M._r8922581ea8bc6e, this.var_2897),
      this._rc516bba1d867c8.removeEventListener(_ie40b9435ae07b7._r49a1f77b743ca2, this._re0521218f111c0),
      this._rc516bba1d867c8.removeEventListener(_i30cc549f9371ef._r5ff5ea8eb8799e, this._rf687aa43fea090),
      this._rc516bba1d867c8.removeEventListener(_i207e0270849f6a._rb9739f8a5177c3, this._rc31b29a85d4ce8),
      this._rc516bba1d867c8.connected && this._rc516bba1d867c8.close(),
      (this._rc516bba1d867c8 = null));
  }
  _r5125aad4e28d8a() {
    let e = this._r41c910606164b8();
    for (let r of e) {
      this._rb00451bfdfd786 = r;
      let t = r._re6923317176040();
      if (
        (this._r7e08919c66c07a?._rc2e71ac0d3d338(String(t)), this._r2ff2a7a1718745 && !this._r15e499fbd3cba5)
      )
        (this._r300c0f6d4223e6 ??= []).push(r);
      else {
        let i = this._r03cd7d4add24bf(r);
        i != null && this._r00b242f351bb03(t, i);
      }
    }
  }
  _r41c910606164b8() {
    if (
      ((this._r90d4a672460470.position = 0),
      this._r90d4a672460470.bytesAvailable === 0 || this._rdfb0204ad683f1 == null)
    )
      return [];
    let e = this._rdfb0204ad683f1.splitMessages(this._r90d4a672460470, this);
    if (this._r90d4a672460470.bytesAvailable === 0) this._r90d4a672460470 = new re();
    else if (this._r90d4a672460470.position > 0) {
      let r = new re();
      (this._r90d4a672460470.readBytes(r, 0, this._r90d4a672460470.bytesAvailable),
        (this._r90d4a672460470 = r));
    }
    return e;
  }
  _r03cd7d4add24bf(e) {
    let r = this._rf9e078882bb5d8?._r8970695a8ddf1b(e._re6923317176040());
    if (r != null && r.length > 0) {
      let t = r[0].parser;
      if (t == null) return r;
      try {
        (t.flush(), t.parse(e));
      } catch (i) {
        class_14.crash(
          `${this._r93104c1ae7340b(
            [
              [65220, 65192, 65183, 65179],
              [65185, 65185, 65252, 65167],
              [65171, 65249, 65168, 65182],
              [65164, 65162, 65175, 65243],
              [65169, 65163, 65173, 65160],
              [65161, 65164, 65158, 65164],
              [65234, 65156, 65163, 65148],
              [65147, 65164, 65157, 65158],
              [65226, 65140, 65141, 65150, 65144, 65150],
            ],
            0,
          )}${ClassUtils.getSimpleQualifiedClassName(t)}`,
          i.name.length,
          i,
        );
      }
    }
    return r;
  }
  _r00b242f351bb03(e, r) {
    for (let t of r) ((t.connection = this), t.callback.call(null, t));
  }
  _re0521218f111c0 = T8((e) => {
    this._rc516bba1d867c8 != null &&
      ((this._r90d4a672460470.position = this._r90d4a672460470.length),
      this._rc516bba1d867c8.readBytes(this._r90d4a672460470, this._r90d4a672460470.position));
  }, "_re0521218f111c0");
  _r2b4cb5586dc485 = T8((e) => {
    (this._r1a70d55a6af2a0?.stop(),
      ErrorReportStorage.addDebugData(
        this._r93104c1ae7340b(
          [
            [65223, 65178, 65178, 65177],
            [65185, 65186, 65168, 65178],
            [65171, 65171, 65196, 65174],
            [65169, 65176, 65162],
          ],
          0,
        ),
        `${this._r93104c1ae7340b(
          [
            [65223, 65178, 65178, 65177],
            [65185, 65186, 65168, 65182],
            [65182, 65249, 65175, 65169, 65246],
          ],
          0,
        )}${_ia411d8d8194a3a() - this._rf53c999f45a608}`,
      ),
      this.dispatchEvent(e));
  }, "_r2b4cb5586dc485");
  var_2897 = T8((e) => {
    (this._r1a70d55a6af2a0?.stop(), this.dispatchEvent(e));
  }, "var_2897");
  var_2028 = T8((e) => {
    (this._r1a70d55a6af2a0?.stop(), this.dispatchEvent(e));
  }, "var_2028");
  _rf687aa43fea090 = T8((e) => {
    (this._r1a70d55a6af2a0?.stop(), this.dispatchEvent(e));
  }, "_rf687aa43fea090");
  _rc31b29a85d4ce8 = T8((e) => {
    (this._r1a70d55a6af2a0?.stop(), ErrorReportStorage.addDebugData("ConnectionError", e.text), this.dispatchEvent(e));
  }, "_rc31b29a85d4ce8");
  _r9c61bbc8ee0f91 = T8(() => {
    this._r1a70d55a6af2a0?.stop();
    let e = new _i207e0270849f6a(
      _i207e0270849f6a._rb9739f8a5177c3,
      !1,
      !1,
      `${this._r93104c1ae7340b(
        [
          [65207, 65178, 65189, 65180],
          [65185, 65169, 65252, 65199],
          [65177, 65172, 65179, 65168],
          [65161, 65161, 65244, 65235],
        ],
        0,
      )}${this._r1a70d55a6af2a0?.delay ?? 0}${this._r93104c1ae7340b(
        [
          [65258, 65180, 65173, 65246],
          [65240, 65253, 65204, 65172],
          [65167, 65166, 65175, 65181],
          [65170, 65176, 65244, 65205],
          [65169, 65159, 65171, 65152],
          [65173, 65161, 65160, 65221],
        ],
        0,
      )}`,
    );
    this.dispatchEvent(e);
  }, "_r9c61bbc8ee0f91");
  _r93104c1ae7340b(e, r) {
    let t = "",
      i = r;
    for (let s of e) for (let o of s) ((t += String.fromCharCode(65290 - o + i)), (i -= 1));
    return t;
  }
}
