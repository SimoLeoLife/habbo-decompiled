// Estratto da HabboAirLauncher.deobf.js, riga 199609.

class {
    static {
      n(this, "_ifffc223d172097");
    }
    constructor(e, r) {
      ((this.var_82 = e), (this._communication = r));
      let t = this._communication?.connection ?? null;
      if (t == null) throw new Error("Connection is required to initialize!");
      (t.addEventListener?.(M.CONNECT, this._r2a08d64b713b44),
        t.addEventListener?.(M._r8922581ea8bc6e, this._r367f68a040d08d),
        this._r2e106e2349a0b6(new _i8ca8255923a0e9(this._rbfe8dd808f9ed5)),
        this._r2e106e2349a0b6(new class_2446(this._r31490492078702)),
        this._r2e106e2349a0b6(new class_2016(this._r154e2538f3e6c0)),
        this._r2e106e2349a0b6(new class_2836(this._raeb2bd88b79e2c)),
        this._r2e106e2349a0b6(new _ib01f21c98c825c(this._r83bd6873faba6b)),
        this._r2e106e2349a0b6(new class_3698(this._rcd39cd8603669d)),
        this._r2e106e2349a0b6(new _i7f480a4bc1b794(this._ref180d008883da)),
        this._r2e106e2349a0b6(new Pd(this._r2bdcd1401eab6c)),
        this._r2e106e2349a0b6(new _id00f038bc86c19(this._r4ceedfec964549)),
        this._r2e106e2349a0b6(new class_3555(this._r788c24c16c82d1)),
        this._r2e106e2349a0b6(new class_3793(this._r80e5dfd7ba6b8c)),
        this.var_82?.context.events.addEventListener?.("unload", this.unloading));
    }
    static {
      gf(this, "_ifffc223d172097");
    }
    _r13114f7681b4af = null;
    _r4e6586c2413a52 = "";
    _r540f5b8d43d352 = !1;
    _logoutInProgress = !1;
    _messageEvents = [];
    _rfcf7803842c1fd = null;
    dispose() {
      if (this._communication != null) {
        let e = this._communication.connection;
        (e?.removeEventListener?.(M.CONNECT, this._r2a08d64b713b44),
          e?.removeEventListener?.(M._r8922581ea8bc6e, this._r367f68a040d08d));
        for (let r of this._messageEvents) this._communication._r7668362bf55fdd?.(r);
      }
      (this.var_82?.context.events.removeEventListener?.("unload", this.unloading),
        (this._messageEvents = []),
        (this.var_82 = null),
        (this._communication = null),
        (this._r13114f7681b4af = null),
        this._rfcf7803842c1fd?.dispose(),
        (this._rfcf7803842c1fd = null));
    }
    _r2e106e2349a0b6(e) {
      (this._communication?._r2e106e2349a0b6(e), this._messageEvents.push(e));
    }
    unloading = gf((e) => {
      this._logoutInProgress = !0;
    }, "unloading");
    _rbfe8dd808f9ed5 = gf((e) => {
      let r = e.connection;
      if (r == null) return;
      let t = new re(),
        i = new re();
      (t.writeBytes(z_.hexStringToByteArray(e.encryptedPrime)),
        i.writeBytes(z_.hexStringToByteArray(e.encryptedGenerator)));
      let s = new re(),
        o = new re();
      ((this._rfcf7803842c1fd = M2._r5c6f3199866788(
        "C5DFF029848CD5CF4A84ADEFB2DA6685704920D5EBE8850B82C419A97B95302DE3B8021F37719FEBD4B3516E04D1E4702E74C468C9FF4BBBB5DD44A1E3A08687EDBEF7C30A176F7C8C83226A77F7982F7442D884D8149E924C486F43035C07B9167EA998416919DA4116D5E0598C11BA1542B4160136F04135C06EDF80170245E73C0DAD63895F52DCED3735582C5852744C8EC40AF576F26A9C8DC5B64ED3DAD40EFAAC6A76A1F5C2A422A8A4691F8991356467BDA61E1D34D0F35531058C8F741E4661ACFCB15C806A996AC312A8D33BF45079B89E11787537B37364749B883BDBFDE51A1A55086CF16159F5DEBCC76342AC2EF6950DA0C70C5845C97DFD49",
        "10001",
      )),
        this._rfcf7803842c1fd.verify(t, s, t.length),
        this._rfcf7803842c1fd.verify(i, o, i.length));
      let d = new Ca(s.toString(), 10),
        c = new Ca(o.toString(), 10),
        f = Ca.nbv(2);
      if (d.compareTo(f) <= 0 || c.compareTo(d) >= 0 || d.equals(c)) {
        class_14.crash("Invalid DH prime and generator", class_14.ERROR_CATEGORY_COMMMUNICATION_INIT);
        return;
      }
      this._r13114f7681b4af = this._communication?._ra86d56f07e4b40(d, c) ?? null;
      let l = null,
        b = 10,
        _ = null;
      for (; b > 0 && this._r13114f7681b4af != null;) {
        ((_ = this.generateRandomHexString(30)), this._r13114f7681b4af.init(_));
        let m = this._r13114f7681b4af.getPublicKey(10);
        if (m.length < 64) (l == null || m.length > l.length) && ((l = m), (this._r4e6586c2413a52 = _));
        else {
          ((l = m), (this._r4e6586c2413a52 = _));
          break;
        }
        b--;
      }
      if (
        (_ !== this._r4e6586c2413a52 && this._r13114f7681b4af?.init(this._r4e6586c2413a52),
        l == null || this._rfcf7803842c1fd == null)
      )
        return;
      let h = new re(),
        p = new re();
      (h.writeMultiByte(l, "iso-8859-1"),
        this._rfcf7803842c1fd.encrypt(h, p, h.length),
        r.sendUnencrypted(new _i0457b11bad2e73(z_._r57f72db8bf21e4(p))));
    }, "_rbfe8dd808f9ed5");
    _r31490492078702 = gf((e) => {
      let r = e.connection;
      if (r == null) return;
      let t = new re(),
        i = new re();
      if (
        (t.writeBytes(z_.hexStringToByteArray(e.encryptedPublicKey)),
        this._rfcf7803842c1fd?.verify(t, i, t.length),
        this._rfcf7803842c1fd?.dispose(),
        (this._rfcf7803842c1fd = null),
        this._r13114f7681b4af?._r3d27ce5deb5a58(i.toString(), 10),
        this._r13114f7681b4af != null && !this._r13114f7681b4af._r644aa03fc0aab0())
      )
        return;
      let s = this._r13114f7681b4af?._rc8098e1fb159f1(16).toUpperCase() ?? "",
        o = z_.hexStringToByteArray(s),
        d = null,
        c = this._communication?._r282fa0001657e1() ?? null;
      ((o.position = 0),
        c?.init(o),
        e.serverClientEncryption && ((d = this._communication?._r282fa0001657e1() ?? null), d?.init(o)),
        c != null && r.setEncryption(c, d),
        (this._r540f5b8d43d352 = !1),
        this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.const_132),
        this.var_82?.sendConnectionParameters(r));
    }, "_r31490492078702");
    _r154e2538f3e6c0 = gf((e) => {
      let r = e.connection;
      r != null &&
        (this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.AUTHENTICATED),
        r.send(new _i0d1a051d668283()),
        r.send(new class_2154("Login", "socket", "client.auth_ok")),
        r.send(new _i8e4540b23306ee()),
        this._communication != null && (this._communication.suggestedLoginActions = e.suggestedLoginActions),
        this.var_82?.loginOk());
    }, "_r154e2538f3e6c0");
    _raeb2bd88b79e2c = gf((e) => {
      let r = ClassUtils.getParser(e, class_2874);
      r != null &&
        this.var_82?.handleLoginFailedHotelClosedMessage(r.var_3129, r.var_3479);
    }, "_raeb2bd88b79e2c");
    _ref180d008883da = gf((e) => {
      switch (e.parser.errorCode) {
        case -3:
          this.var_82?.alert("${connection.error.id.title}", "${connection.login.error.-3.desc}");
          break;
        case -400:
          this.var_82?.alert("${connection.error.id.title}", "${connection.login.error.-400.desc}");
          break;
      }
    }, "_ref180d008883da");
    _r83bd6873faba6b = gf((e) => {
      e.connection?.send(new _i38847f0d1efae9());
    }, "_r83bd6873faba6b");
    _r788c24c16c82d1 = gf((e) => {
      gr._r7f62dd3441fb83(gr.SOL_PROPERTY_MACHINE_ID, e.machineID);
    }, "_r788c24c16c82d1");
    _r80e5dfd7ba6b8c = gf((e) => {
      let r = [],
        t = e.getParser()._reae9b9a32dabbd ?? new Map();
      for (let [i, s] of t.entries()) {
        let o = new _ia711992974f44d(null);
        ((o.id = i), (o.name = s), r.push(o));
      }
      this.var_82?.onUserList(r);
    }, "_r80e5dfd7ba6b8c");
    _rcd39cd8603669d = gf((e) => {
      let r = ClassUtils.getParser(e, class_3798);
      r != null && this.var_82?.handleErrorMessage(r.errorCode, r.messageId);
    }, "_rcd39cd8603669d");
    _r2a08d64b713b44 = gf((e = null) => {
      let r = this._communication?.connection ?? null;
      r != null &&
        (this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.ESTABLISHED),
        (this._logoutInProgress = !1),
        (this._r540f5b8d43d352 = !0),
        this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.HANDSHAKING),
        r.sendUnencrypted(new _if542123396ec8d()),
        r.sendUnencrypted(new _i652735f75cee55()));
    }, "_r2a08d64b713b44");
    _r4ceedfec964549 = gf((e) => {
      let t = e.parser._rc86038ffdf388c.toString();
      this.var_82?.localization._r43eae9731f5b27("disconnected.maintenance_status", "%minutes%", t);
      let i = this.var_82?.localization.getLocalization("disconnected.maintenance_status") ?? "";
      this.var_82?.disconnected(Pd.MAINTENANCE_BREAK, i);
    }, "_r4ceedfec964549");
    _r2bdcd1401eab6c = gf((e) => {
      (this._r540f5b8d43d352 && this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.const_97),
        this.var_82?.disconnected(e.reason, e.getReasonName() ?? ""),
        (this._r540f5b8d43d352 = !1),
        (this._logoutInProgress = !0),
        !0);
    }, "_r2bdcd1401eab6c");
    handleWebLogout(e) {
      let r = this.var_82?.getProperty(HabboProperty.const_479) ?? "";
      r.length !== 0 &&
        ((r = _i2c6cbea4f0c6c1(r, e.reasonString)),
        (r = this.setOriginProperty(r)),
        (r += `&id=${e.reason}`),
        (this.var_82?.context.configuration?.getInteger("spaweb", 0) ?? 0) === 1
          ? Ae.sendDisconnectToWeb(e.reason, e.reasonString)
          : Ae.openWebPage(r, "_self"));
    }
    setOriginProperty(e) {
      return e.includes("%origin%")
        ? e.replace("%origin%", this.var_82?.getProperty(HabboProperty.CLIENT_ORIGIN) ?? "")
        : e;
    }
    _r367f68a040d08d = gf((e) => {
      if (!this.var_82?.isRoomViewerMode) {
        if (
          (this._r540f5b8d43d352 && this.var_82?.dispatchLoginStepEvent(HabboCommunicationEvent.const_97),
          ur.available &&
            (ur.call(
              "FlashExternalInterface.logDisconnection",
              "Communication failure, client disconnected.",
            ),
            e.type === M._r8922581ea8bc6e && !this._logoutInProgress && !!0))
        ) {
          let r = this.var_82?.getProperty(HabboProperty.const_943) ?? "";
          ((r = this.setOriginProperty(r)),
            (this.var_82?.context.configuration?.getInteger("spaweb", 0) ?? 0) === 1
              ? Ae.sendDisconnectToWeb(-1, HabboCommunicationEvent.const_97)
              : Ae.openWebPage(r, "_self"));
        }
        e.type === M._r8922581ea8bc6e &&
          !this._logoutInProgress &&
          this.var_82?.disconnected(Pd.DISCONNECTED, "");
      }
    }, "_r367f68a040d08d");
    generateRandomHexString(e = 16) {
      let r = "";
      for (let t = 0; t < e; t++)
        r += Math.floor(Math.random() * 255)
          .toString(16)
          .padStart(2, "0");
      return r;
    }
  }
