// Extracted from HabboAirLauncher.deobf.js, line 28538.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6600716d9e844c

class a {
  constructor(e) {
    this._node = e;
  }
  static {
    n(this, "UnkClass_660071");
  }
  clone() {
    return new a(this._node?.cloneNode(!0) ?? null);
  }
  attribute(e) {
    if (!(this._node instanceof Element)) return _i8257c52db0b107([]);
    let r = this._node.getAttributeNode(e);
    return _i8257c52db0b107(r != null ? [r.value] : []);
  }
  child(e) {
    return this._node instanceof Element
      ? _i8257c52db0b107(
          Array.from(this._node.children)
            .filter((r) => r.tagName === e)
            .map((r) => new a(r)),
        )
      : _i8257c52db0b107([]);
  }
  children() {
    return this._node instanceof Element ? _i8257c52db0b107(Array.from(this._node.children).map((e) => new a(e))) : _i8257c52db0b107([]);
  }
  localName() {
    return this._node instanceof Element
      ? (this._node.localName ?? this._node.tagName)
      : this._node instanceof Attr
        ? (this._node.localName ?? this._node.name)
        : "";
  }
  name() {
    return this.localName();
  }
  appendChild(e) {
    if (!(this._node instanceof Element)) return this;
    let r = _icaa094d45cc93d(e);
    if (r instanceof a) {
      let t = r.toDomNode();
      t != null && this._node.appendChild(_i596cfe0558be5e(t, this._node.ownerDocument));
    } else if (typeof r == "string" && r.length > 0) {
      let t = _i39e98c6c9babaa(r);
      t != null
        ? this._node.appendChild(_i596cfe0558be5e(t, this._node.ownerDocument))
        : this._node.appendChild(this._node.ownerDocument.createTextNode(r));
    }
    return this;
  }
  appendChildElement(e, r = null) {
    if (!(this._node instanceof Element)) return new a(null);
    let t = _i7bf76960af4320(e, r, this._node.ownerDocument);
    return (this._node.appendChild(t), new a(t));
  }
  toXMLString() {
    return _if0d315e75a9b30(this._node);
  }
  toDomNode() {
    return this._node;
  }
  toDomElement() {
    return this._node instanceof Element ? this._node : null;
  }
  toString() {
    return this._node instanceof Attr
      ? this._node.value
      : this._node instanceof Text
        ? this._node.data
        : this._node instanceof Element && Array.from(this._node.children).length === 0
          ? (this._node.textContent ?? "")
          : this.toXMLString();
  }
  valueOf() {
    return this.toString();
  }
  [Symbol.toPrimitive]() {
    return this.toString();
  }
}
