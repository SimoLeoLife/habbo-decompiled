// Estratto da HabboAirLauncher.deobf.js, riga 351183.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/applications/ApiKeySection.as
// Nome offuscato: _i8aa7ee6f17f870

class extends AbstractSectionPreset {
  static {
    n(this, "ApiKeySection");
  }
  _ra87a7d561d1186 = null;
  _r0422ae332b9b9e = null;
  var_283 = null;
  var_34 = null;
  var_2363 = null;
  var_2391 = null;
  _r3ad568f1377a10 = null;
  _key = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = null) {
    ((this._ra87a7d561d1186 = r),
      (this._r0422ae332b9b9e = t),
      (this.var_2363 = this.var_102.createButton(
        "${wiredfurni.params.web_api.generate}",
        r,
      )),
      (this.var_2391 = this.var_102.createButton(
        "${wiredfurni.params.web_api.clear}",
        this._rddc427a8a956dd,
      )),
      (this._r3ad568f1377a10 = this.var_102.createButton(
        "${wiredfurni.params.web_api.copy}",
        this._re4290dae093248,
      )),
      (this.var_34 = this.var_102.createButtonRow([
        this.var_2363,
        this.var_2391,
        this._r3ad568f1377a10,
      ])));
    let i = new TextAreaParam(30, -1, -1, -1, -1, "", null, null, !1, !0);
    ((this._key = this.var_102._r1cb85c1e1927d4(i)),
      (this.var_283 = this.var_102.createSimpleListView(!0, [
        this.var_34,
        this._key,
      ])));
    let s = e ? "${wiredfurni.params.web_api.write.title}" : "${wiredfurni.params.web_api.read.title}";
    (this.initializeSection(s, this.var_283), this.onKeyTextChanged());
  }
  set key(e) {
    ((this._key.text = e), this.onKeyTextChanged());
  }
  get key() {
    return this._key.text;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this._ra87a7d561d1186 = null),
      (this._r0422ae332b9b9e = null),
      (this.var_283 = null),
      (this.var_34 = null),
      (this.var_2363 = null),
      (this.var_2391 = null),
      (this._r3ad568f1377a10 = null),
      (this._key = null));
  }
  _rddc427a8a956dd = n(() => {
    ((this._key.text = ""), this.onKeyTextChanged());
  }, "_rddc427a8a956dd");
  _re4290dae093248 = n(() => {
    (Bi._r8c1ed48897d9d3(this._key.text),
      this._roomEvents.notifications.addItem(
        "${notification.wired.copied_api_key}",
        NotificationType.const_1274,
      ));
  }, "_re4290dae093248");
  onKeyTextChanged() {
    (this._key.text.length > 0
      ? ((this.var_2363.buttonText = "${wiredfurni.params.web_api.regenerate}"),
        (this.var_2391.disabled = !1),
        (this._r3ad568f1377a10.disabled = !1))
      : ((this.var_2363.buttonText = "${wiredfurni.params.web_api.generate}"),
        (this.var_2391.disabled = !0),
        (this._r3ad568f1377a10.disabled = !0)),
      this._r0422ae332b9b9e?.(this._key.text));
  }
}
