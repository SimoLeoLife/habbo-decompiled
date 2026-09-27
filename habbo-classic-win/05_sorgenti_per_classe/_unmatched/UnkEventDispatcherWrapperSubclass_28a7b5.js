// Extracted from HabboAirLauncher.deobf.js, line 50409.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i28a7b58ffe1ff6

class a extends EventDispatcherWrapper {
  static {
    n(this, "UnkEventDispatcherWrapperSubclass_28a7b5");
  }
  static _r2c88f9110a52b8 = "habbo-classic";
  static _rf6b4145cf1fe8d = "/websocket";
  static PROXY_CONNECTED_MARKER = "__habbo_air_tcp_proxy_connected__";
  var_36 = null;
  _rf5e5833c73599b = new re();
  _r164bdaec8bd624 = new re();
  _r12aa5fd2a1ff69 = "bigEndian";
  _r882e036ee0d5e8 = 0;
  _rba394af0cf105e = !1;
  _ra18f687a093cf9 = !1;
  get connected() {
    return this.var_36?.readyState === WebSocket.OPEN;
  }
  get endian() {
    return this._r12aa5fd2a1ff69;
  }
  set endian(e) {
    ((this._r12aa5fd2a1ff69 = e), (this._rf5e5833c73599b.endian = e), (this._r164bdaec8bd624.endian = e));
  }
  get objectEncoding() {
    return this._r882e036ee0d5e8;
  }
  set objectEncoding(e) {
    ((this._r882e036ee0d5e8 = e),
      (this._rf5e5833c73599b.objectEncoding = e),
      (this._r164bdaec8bd624.objectEncoding = e));
  }
  get bytesAvailable() {
    return this._rf5e5833c73599b.bytesAvailable;
  }
  connect(e, r) {
    let t = this.resolveUrl(e, r);
    ((this._rba394af0cf105e = t.includes("/habbo-air-tcp-proxy/")), (this._ra18f687a093cf9 = !1));
    let i = a._r2c88f9110a52b8,
      s = i == null ? new WebSocket(t) : new WebSocket(t, i);
    ((this.var_36 = s),
      (s.binaryType = "arraybuffer"),
      s.addEventListener("open", () => {
        if (i != null && s.protocol !== i) {
          let o = "WebSocket subprotocol was not negotiated.";
          (s.close(1002, o), this.dispatchEvent(new UnkErrorEventSubclass_207e02(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, !1, !1, o)));
          return;
        }
        this._rba394af0cf105e || this._r2ed49046298706();
      }),
      this.var_36.addEventListener("close", () => {
        (this._rba394af0cf105e &&
          !this._ra18f687a093cf9 &&
          this.dispatchEvent(new UnkErrorEventSubclass_207e02(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, !1, !1, "Socket error")),
          this.dispatchEvent(new M(M._r8922581ea8bc6e)));
      }),
      this.var_36.addEventListener("error", () => {
        this.dispatchEvent(new UnkErrorEventSubclass_207e02(UnkErrorEventSubclass_207e02._rb9739f8a5177c3, !1, !1, "Socket error"));
      }),
      this.var_36.addEventListener("message", (o) => {
        let d = o.data,
          c;
        if (d instanceof ArrayBuffer) c = new Uint8Array(d);
        else if (ArrayBuffer.isView(d))
          c = new Uint8Array(d.buffer.slice(d.byteOffset, d.byteOffset + d.byteLength));
        else if (typeof d == "string") {
          if (this._rba394af0cf105e && d === a.PROXY_CONNECTED_MARKER) {
            this._r2ed49046298706();
            return;
          }
          c = _i5fc568d8a46cd1().encode(d);
        } else c = new Uint8Array();
        (this._rb88128afd76c0c(re.compress(c)),
          this.dispatchEvent(new UnkClass_e40b94(UnkClass_e40b94._r49a1f77b743ca2, !1, !1, c.byteLength, c.byteLength)));
      }));
  }
  close() {
    this.var_36?.close();
  }
  readBoolean() {
    return this._rf5e5833c73599b.readBoolean();
  }
  readByte() {
    return this._rf5e5833c73599b.readByte();
  }
  writeBytes(e, r = 0, t = 0) {
    this._r164bdaec8bd624.writeBytes(e, r, t);
  }
  readDouble() {
    return this._rf5e5833c73599b.readDouble();
  }
  readFloat() {
    return this._rf5e5833c73599b.readFloat();
  }
  readInt() {
    return this._rf5e5833c73599b.readInt();
  }
  readMultiByte(e, r) {
    return this._rf5e5833c73599b.readMultiByte(e, r);
  }
  readObject() {
    return this._rf5e5833c73599b.readObject();
  }
  readShort() {
    return this._rf5e5833c73599b.readShort();
  }
  readUnsignedByte() {
    return this._rf5e5833c73599b.readUnsignedByte();
  }
  readUnsignedInt() {
    return this._rf5e5833c73599b.readUnsignedInt();
  }
  readUnsignedShort() {
    return this._rf5e5833c73599b.readUnsignedShort();
  }
  readUTF() {
    return this._rf5e5833c73599b.readUTF();
  }
  readUTFBytes(e) {
    return this._rf5e5833c73599b.readUTFBytes(e);
  }
  flush() {
    !this.connected ||
      this.var_36 == null ||
      (this.var_36.send(this._r164bdaec8bd624.toUint8Array()), this._r164bdaec8bd624.clear());
  }
  readBytes(e, r = 0, t = 0) {
    let i = this._rf5e5833c73599b.bytesAvailable,
      s = _ib26b6a17b00681_(t, i);
    this._rf5e5833c73599b.readBytes(e, r, s);
    let o = this._rf5e5833c73599b.readBytes();
    (this._rf5e5833c73599b.clear(),
      o && o.length > 0 && (this._rf5e5833c73599b.writeBytes(o), (this._rf5e5833c73599b.position = 0)));
  }
  writeBoolean(e) {
    this._r164bdaec8bd624.writeBoolean(e);
  }
  writeByte(e) {
    this._r164bdaec8bd624.writeByte(e);
  }
  writeDouble(e) {
    this._r164bdaec8bd624.writeDouble(e);
  }
  writeFloat(e) {
    this._r164bdaec8bd624.writeFloat(e);
  }
  writeInt(e) {
    this._r164bdaec8bd624.writeInt(e);
  }
  writeMultiByte(e, r) {
    this._r164bdaec8bd624.writeMultiByte(e, r);
  }
  writeObject(e) {
    this._r164bdaec8bd624.writeObject(e);
  }
  writeShort(e) {
    this._r164bdaec8bd624.writeShort(e);
  }
  writeUnsignedInt(e) {
    this._r164bdaec8bd624.writeUnsignedInt(e);
  }
  writeUnsignedShort(e) {
    this._r164bdaec8bd624.writeUnsignedShort(e);
  }
  writeUTF(e) {
    this._r164bdaec8bd624.writeUTF(e);
  }
  writeUTFBytes(e) {
    this._r164bdaec8bd624.writeUTFBytes(e);
  }
  resolveUrl(e, r) {
    let t = e.replace(/\?TCP_NODELAY$/, ""),
      i = t.startsWith("ws://") || t.startsWith("wss://"),
      s = i ? "" : "wss";
    try {
      let o = new URL(i ? t : `${s}://${t}`);
      return (
        r > 0 && o.port === "" && (o.port = String(r)),
        (o.pathname === "" || o.pathname === "/") && (o.pathname = a._rf6b4145cf1fe8d),
        o.toString()
      );
    } catch {
      let o = r > 0 && !/:\d+(\/|$)/.test(t) ? `:${r}` : "",
        d = t.endsWith("/") ? a._rf6b4145cf1fe8d.slice(1) : a._rf6b4145cf1fe8d;
      return `${i ? t : `${s}://${t}`}${o}${d}`;
    }
  }
  _rb88128afd76c0c(e) {
    let r = this._rf5e5833c73599b.position;
    ((this._rf5e5833c73599b.position = this._rf5e5833c73599b.length),
      this._rf5e5833c73599b.writeBytes(e),
      (this._rf5e5833c73599b.position = r));
  }
  _r2ed49046298706() {
    this._ra18f687a093cf9 ||
      ((this._ra18f687a093cf9 = !0), (this._rba394af0cf105e = !1), this.dispatchEvent(new M(M.CONNECT)));
  }
}
