// Extracted from HabboAirLauncher.deobf.js, line 200674.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/visualization/ChatHistoryScrollBar.as
// Obfuscated name: _i3109bcc04cb767

class {
  constructor(e, r) {
    this._r6e13b73fe2a8d3 = e;
    let t = r.assets?.getAssetByName("scrollbar_thumb")?.content,
      i = r.assets?.getAssetByName("scrollbar_back")?.content;
    ((this.var_547 = _ie2bd349331c380(new D(2, 2, 1, 1), t ?? new A(5, 5, !0, 4294967295))),
      (this.var_547.x = 2),
      (this.var_547.y = 2),
      (this._background = _ie2bd349331c380(new D(2, 2, 5, 5), i ?? new A(9, 9, !0, 4283782485))),
      (this._r8a3e798baea02b = new Sprite()),
      this._r8a3e798baea02b.addChild(this._background),
      this._r8a3e798baea02b.addChild(this.var_547),
      this.var_547.addEventListener(M._scrollBar, this.onAddedToStage),
      this.var_547.addEventListener(M._r4b0396f57c9367, this._rd23ba8186ebaa0),
      this.var_547.addEventListener(UnkClass_fd7c12._r9001c395573374, this.mouseDownEventHandler));
  }
  static {
    n(this, "ChatHistoryScrollBar");
  }
  static RIGHT_MARGIN = 0;
  _r8a3e798baea02b;
  _background;
  var_547;
  _r563269e6e9ce1f = 0;
  _r4a08dc4080fe78 = 0;
  _r34b9dbda39b609 = null;
  onAddedToStage = n((e) => {
    this._r34b9dbda39b609 = this.var_547.stage;
  }, "onAddedToStage");
  _rd23ba8186ebaa0 = n((e) => {
    this._r34b9dbda39b609 = null;
  }, "_rd23ba8186ebaa0");
  mouseDownEventHandler = n((e) => {
    let r = e;
    ((this._r563269e6e9ce1f = r.stageY),
      (this._r4a08dc4080fe78 = this._r6e13b73fe2a8d3.topY),
      this._r6e13b73fe2a8d3._r60ed6f459ec4b9(),
      this._r34b9dbda39b609?.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rba822da2af89ee),
      this._r34b9dbda39b609?.addEventListener(UnkClass_fd7c12.var_370, this._rba822da2af89ee),
      e.stopImmediatePropagation());
  }, "mouseDownEventHandler");
  _rba822da2af89ee = n((e) => {
    let r = e;
    switch (r.type) {
      case UnkClass_fd7c12.var_370: {
        let t = this._r6e13b73fe2a8d3._re0f3dfaef5eef2 / this._background.height,
          i = (r.stageY - this._r563269e6e9ce1f) * t;
        this._r6e13b73fe2a8d3.topY = this._r4a08dc4080fe78 + i;
        break;
      }
      case UnkClass_fd7c12._ra93f33360c3a28:
        this._r532b0862ad5129();
        break;
      default:
        break;
    }
    e.stopImmediatePropagation();
  }, "_rba822da2af89ee");
  set height(e) {
    ((this._background.height = e), this._rf637347fbe45bb());
  }
  get displayObject() {
    return this._r8a3e798baea02b;
  }
  _rf637347fbe45bb() {
    if (this._r6e13b73fe2a8d3._re0f3dfaef5eef2 <= 0) {
      ((this.var_547.height = Math.max(5, this._background.height - 4)),
        (this.var_547.y = 2));
      return;
    }
    let e =
      this._r6e13b73fe2a8d3.topY +
      (this._r6e13b73fe2a8d3.viewPort.height - this._background.height);
    ((this.var_547.height = Math.min(
      this._background.height - 4,
      Math.max(
        5,
        Math.trunc(
          (this._background.height - 4) * (this._background.height / this._r6e13b73fe2a8d3._re0f3dfaef5eef2),
        ),
      ),
    )),
      (this.var_547.y = Math.min(
        this._background.height - 2 - this.var_547.height,
        Math.max(
          2,
          Math.trunc(
            (this._background.height - 4) * (Math.max(1, e) / this._r6e13b73fe2a8d3._re0f3dfaef5eef2) -
              this.var_547.height / 2,
          ),
        ),
      )));
  }
  _r532b0862ad5129() {
    (this._r562e802286af89(), this._r6e13b73fe2a8d3._r133f475a10afc6());
  }
  _r562e802286af89() {
    (this._r34b9dbda39b609?.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._rba822da2af89ee),
      this._r34b9dbda39b609?.removeEventListener(UnkClass_fd7c12.var_370, this._rba822da2af89ee));
  }
}
