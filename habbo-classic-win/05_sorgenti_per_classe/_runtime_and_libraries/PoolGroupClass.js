// Extracted from HabboAirLauncher.deobf.js, line 1576.

class {
      static {
        n(this, "PoolGroupClass");
      }
      constructor() {
        this._poolsByClass = new Map();
      }
      prepopulate(e, r) {
        this.getPool(e).prepopulate(r);
      }
      get(e, r) {
        return this.getPool(e).get(r);
      }
      return(e) {
        this.getPool(e.constructor).return(e);
      }
      getPool(e) {
        return (
          this._poolsByClass.has(e) || this._poolsByClass.set(e, new Pool(e)),
          this._poolsByClass.get(e)
        );
      }
      stats() {
        let e = {};
        return (
          this._poolsByClass.forEach((r) => {
            let t = e[r._classType.name] ? r._classType.name + r._classType.ID : r._classType.name;
            e[t] = { free: r.totalFree, used: r.totalUsed, size: r.totalSize };
          }),
          e
        );
      }
      clear() {
        (this._poolsByClass.forEach((e) => e.clear()), this._poolsByClass.clear());
      }
    }
