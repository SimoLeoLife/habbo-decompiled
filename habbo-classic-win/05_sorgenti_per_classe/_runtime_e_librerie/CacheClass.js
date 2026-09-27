// Estratto da HabboAirLauncher.deobf.js, riga 7690.

class {
      static {
        n(this, "CacheClass");
      }
      constructor() {
        ((this._parsers = []), (this._cache = new Map()), (this._cacheMap = new Map()));
      }
      reset() {
        (this._cacheMap.clear(), this._cache.clear());
      }
      has(e) {
        return this._cache.has(e);
      }
      get(e) {
        let r = this._cache.get(e);
        return (r || warn_(`[Assets] Asset id ${e} was not found in the Cache`), r);
      }
      set(e, r) {
        let t = U5(e),
          i;
        for (let c = 0; c < this.parsers.length; c++) {
          let f = this.parsers[c];
          if (f.test(r)) {
            i = f.getCacheableAssets(t, r);
            break;
          }
        }
        let s = new Map(Object.entries(i || {}));
        i ||
          t.forEach((c) => {
            s.set(c, r);
          });
        let o = [...s.keys()],
          d = { cacheKeys: o, keys: t };
        (t.forEach((c) => {
          this._cacheMap.set(c, d);
        }),
          o.forEach((c) => {
            let f = i ? i[c] : r;
            (this._cache.has(c) && this._cache.get(c) !== f && warn_("[Cache] already has key:", c),
              this._cache.set(c, s.get(c)));
          }));
      }
      remove(e) {
        if (!this._cacheMap.has(e)) {
          warn_(`[Assets] Asset id ${e} was not found in the Cache`);
          return;
        }
        let r = this._cacheMap.get(e);
        (r.cacheKeys.forEach((i) => {
          this._cache.delete(i);
        }),
          r.keys.forEach((i) => {
            this._cacheMap.delete(i);
          }));
      }
      get parsers() {
        return this._parsers;
      }
    }
