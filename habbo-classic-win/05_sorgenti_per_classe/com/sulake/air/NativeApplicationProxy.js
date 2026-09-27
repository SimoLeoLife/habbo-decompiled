// Extracted from HabboAirLauncher.deobf.js, line 70101.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/air/NativeApplicationProxy.as
// Obfuscated name: _ie61c1a961bedd6

class a extends EventDispatcherWrapper {
  static {
    n(this, "NativeApplicationProxy");
  }
  static _rdb0a89da5ee22c = !1;
  static _r696ca91f0fa708 = !1;
  _radae6c6cd75a87 = !1;
  constructor() {
    (super(),
      this.bridge?.audioPlaybackMode?.(),
      this.bridge?.addEventListener?.("activate", this._rd81785065d7cc7),
      this.bridge?.addEventListener?.("deactivate", this._r0bd38d523f292d),
      this.bridge?.addEventListener?.("suspend", this._rbfe66732dd28ef),
      this._re530e28d00ba3b());
  }
  dispose() {
    (this.bridge?.removeEventListener?.("activate", this._rd81785065d7cc7),
      this.bridge?.removeEventListener?.("deactivate", this._r0bd38d523f292d),
      this.bridge?.removeEventListener?.("suspend", this._rbfe66732dd28ef),
      this._r30f18461454d3c());
  }
  _r1b1c09cb987977(e) {
    this.bridge?._rc38fa9ccf67499?.(e);
  }
  _rd81785065d7cc7 = n(() => {
    (this.dispatchEvent(new M(NativeApplicationEvents.APPLICATION_ACTIVE)), (a._rdb0a89da5ee22c = !1), (a._r696ca91f0fa708 = !1));
  }, "_rd81785065d7cc7");
  _rbfe66732dd28ef = n(() => {
    (this.dispatchEvent(new M(NativeApplicationEvents.const_672)), (a._r696ca91f0fa708 = !0));
  }, "_rbfe66732dd28ef");
  _r0bd38d523f292d = n(() => {
    (this.dispatchEvent(new M(NativeApplicationEvents.APPLICATION_DEACTIVE)), (a._rdb0a89da5ee22c = !0));
  }, "_r0bd38d523f292d");
  _re530e28d00ba3b() {
    this._radae6c6cd75a87 ||
      typeof window > "u" ||
      (window.addEventListener("focus", this._rd81785065d7cc7),
      window.addEventListener("blur", this._r0bd38d523f292d),
      typeof document < "u" && document.addEventListener("visibilitychange", this._r3f2c49dd8b392c),
      (this._radae6c6cd75a87 = !0));
  }
  _r30f18461454d3c() {
    !this._radae6c6cd75a87 ||
      typeof window > "u" ||
      (window.removeEventListener("focus", this._rd81785065d7cc7),
      window.removeEventListener("blur", this._r0bd38d523f292d),
      typeof document < "u" && document.removeEventListener("visibilitychange", this._r3f2c49dd8b392c),
      (this._radae6c6cd75a87 = !1));
  }
  _r3f2c49dd8b392c = n(() => {
    if (!(typeof document > "u")) {
      if (document.visibilityState === "hidden") {
        this._rbfe66732dd28ef();
        return;
      }
      this._rd81785065d7cc7();
    }
  }, "_r3f2c49dd8b392c");
  get bridge() {
    return globalThis.HabboNativeApplication ?? null;
  }
}
