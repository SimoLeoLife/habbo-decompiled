// Extracted from HabboAirLauncher.deobf.js, line 157311.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/login/WebCaptchaView.as
// Obfuscated name: _i9c4762047416b3

class a extends Sprite {
  constructor(r) {
    super();
    this.var_63 = r;
    this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar);
  }
  static {
    n(this, "WebCaptchaView");
  }
  static CAPTCHA_ENDPOINT = "/api/public/captcha";
  static TOKEN_KEY = "token=";
  _r81b9cbe366c77b = null;
  _r8f0e77870a5e37 = null;
  var_3649 = 0;
  _disposed = !1;
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.var_3649 !== 0 && (clearInterval(this.var_3649), (this.var_3649 = 0)),
      this._r8f0e77870a5e37?.remove(),
      this._r81b9cbe366c77b?.remove(),
      (this._r8f0e77870a5e37 = null),
      (this._r81b9cbe366c77b = null),
      (this.var_63 = null));
  }
  ChatHistoryScrollBar = n((r) => {
    if (this.var_63 == null) return;
    let t = `${this.var_63.getProperty(HabboProperty.const_1082)}${a.CAPTCHA_ENDPOINT}`;
    if (typeof document > "u") {
      this.var_63._ra5b09548735cb9();
      return;
    }
    ((this._r81b9cbe366c77b = document.createElement("div")),
      (this._r81b9cbe366c77b.style.position = "fixed"),
      (this._r81b9cbe366c77b.style.left = "0"),
      (this._r81b9cbe366c77b.style.top = "100px"),
      (this._r81b9cbe366c77b.style.width = "100vw"),
      (this._r81b9cbe366c77b.style.height = "calc(100vh - 100px)"),
      (this._r81b9cbe366c77b.style.background = "rgba(0, 0, 0, 0.75)"),
      (this._r81b9cbe366c77b.style.zIndex = "2147483647"),
      (this._r8f0e77870a5e37 = document.createElement("iframe")),
      (this._r8f0e77870a5e37.src = t),
      (this._r8f0e77870a5e37.style.border = "0"),
      (this._r8f0e77870a5e37.style.width = "100%"),
      (this._r8f0e77870a5e37.style.height = "100%"),
      this._r81b9cbe366c77b.appendChild(this._r8f0e77870a5e37),
      document.body.appendChild(this._r81b9cbe366c77b),
      (this.var_3649 = window.setInterval(() => {
        let i = this._r0b4592a3124cb7();
        i != null && this.var_63 != null && this.var_63._r79da67210227b0(i);
      }, 250)));
  }, "ChatHistoryScrollBar");
  _r0b4592a3124cb7() {
    let r = this._r8f0e77870a5e37;
    if (r == null) return null;
    try {
      let t = r.contentWindow?.location?.href ?? "",
        i = t.indexOf(a.TOKEN_KEY);
      return i < 0 ? null : t.substring(i + a.TOKEN_KEY.length);
    } catch {
      return null;
    }
  }
}
