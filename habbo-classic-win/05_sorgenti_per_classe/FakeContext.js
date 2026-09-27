// Estratto da HabboAirLauncher.deobf.js, riga 61081.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/FakeContext.as
// Nome offuscato: _ia22a5ba0294f30

class {
  static {
    n(this, "FakeContext");
  }
  _events;
  _assets;
  _configuration = null;
  var_450;
  _disposed = !1;
  constructor(e) {
    ((this._events = new EventDispatcherWrapper()),
      (this._assets = new AssetLibraryCollection("fakeAssetCollection")),
      this._assets._rb655cfac05e864(new Na("_assetsTemp@")),
      (this.var_450 = new Map(e)));
  }
  get assets() {
    return this._assets;
  }
  get events() {
    return this._events;
  }
  get root() {
    return null;
  }
  error(e, r, t = -1, i = null) {
    return !1;
  }
  _r3961db622275a7() {
    return "";
  }
  debug(e) {}
  _rf4e620cf4512da() {
    return "";
  }
  warning(e) {}
  _r8e378f499a77a5() {
    return "";
  }
  get dispatchEvent() {
    return null;
  }
  loadFromFile(e, r) {
    return null;
  }
  attachComponent(e, r) {}
  _r24d42320867740(e) {}
  prepareComponent(e, r = 0, t = null) {
    return null;
  }
  _rda7aedd9c00e8f(e, r) {
    return !1;
  }
  registerUpdateReceiver(e, r) {}
  removeUpdateReceiver(e) {}
  toXMLString(e = 0) {
    return "";
  }
  queueInterface(e, r = null) {
    return null;
  }
  release(e) {
    return 0;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0), this._assets.dispose(), (this._events = null), (this._assets = null));
  }
  get disposed() {
    return this._disposed;
  }
  _r02c4d0ca35c5a4(e) {}
  get configuration() {
    return this._configuration;
  }
  set configuration(e) {
    this._configuration = e;
  }
  _r7e43d9f4706607(e) {}
  _r7485c47d8bd77c(e) {}
  _r6b6c989018eb05(e) {}
  get linkEventTrackers() {
    return [];
  }
  initialize() {}
  purge() {}
  _r55e974d136c7f2(e, r = 1) {}
  resume() {}
  _rae264c311d4319(e, r = null) {}
  writeDictionaryToProxy(e, r) {
    return !1;
  }
  _r6ea861faf7bb1a(e) {
    return new Map();
  }
  writeXMLToProxy(e, r) {
    return !1;
  }
  _r38bd6a35be1638(e) {
    return rr("");
  }
  _r47fe98ceeec734(e) {
    return "";
  }
  _rda9151f6f632f8(e, r) {
    return !1;
  }
  _ra28da5fa64db98() {
    return 0;
  }
  _rb86aa5df59b561() {
    return 0;
  }
  _rd7c10d8fcef2f7(e) {}
  get arguments() {
    return this.var_450;
  }
  _r24056a96827208() {
    this.var_450 = new Map();
  }
  propertyExists(e) {
    return !1;
  }
  getProperty(e, r = null) {
    return "";
  }
  setProperty(e, r, t = !1, i = !1) {}
  getBoolean(e) {
    return !1;
  }
  getInteger(e, r) {
    return 0;
  }
  interpolate(e) {
    return "";
  }
  updateUrlProtocol(e) {
    return "";
  }
  get _r29c45cd093eed6() {
    return null;
  }
}
