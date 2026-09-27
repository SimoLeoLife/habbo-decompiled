// Estratto da HabboAirLauncher.deobf.js, riga 1528.

class {
      static {
        n(this, "Pool");
      }
      constructor(e, r) {
        ((this._pool = []),
          (this._count = 0),
          (this._index = 0),
          (this._classType = e),
          r && this.prepopulate(r));
      }
      prepopulate(e) {
        for (let r = 0; r < e; r++) this._pool[this._index++] = new this._classType();
        this._count += e;
      }
      get(e) {
        let r;
        return (
          this._index > 0 ? (r = this._pool[--this._index]) : ((r = new this._classType()), this._count++),
          r.init?.(e),
          r
        );
      }
      return(e) {
        (e.reset?.(), (this._pool[this._index++] = e));
      }
      get totalSize() {
        return this._count;
      }
      get totalFree() {
        return this._index;
      }
      get totalUsed() {
        return this._count - this._index;
      }
      clear() {
        if (this._pool.length > 0 && this._pool[0].destroy)
          for (let e = 0; e < this._index; e++) this._pool[e].destroy();
        ((this._pool.length = 0), (this._count = 0), (this._index = 0));
      }
    }
