// Estratto da HabboAirLauncher.deobf.js, riga 24382.

class {
      static {
        n(this, "LRU");
      }
      constructor(e = 0, r = 0, t = !1) {
        ((this.first = null),
          (this.items = Object.create(null)),
          (this.last = null),
          (this.max = e),
          (this.resetTtl = t),
          (this.size = 0),
          (this.ttl = r));
      }
      clear() {
        return (
          (this.first = null),
          (this.items = Object.create(null)),
          (this.last = null),
          (this.size = 0),
          this
        );
      }
      delete(e) {
        if (this.has(e)) {
          let r = this.items[e];
          (delete this.items[e],
            this.size--,
            r.prev !== null && (r.prev.next = r.next),
            r.next !== null && (r.next.prev = r.prev),
            this.first === r && (this.first = r.next),
            this.last === r && (this.last = r.prev));
        }
        return this;
      }
      entries(e = this.keys()) {
        let r = new Array(e.length);
        for (let t = 0; t < e.length; t++) {
          let i = e[t];
          r[t] = [i, this.get(i)];
        }
        return r;
      }
      evict(e = !1) {
        if (e || this.size > 0) {
          let r = this.first;
          (delete this.items[r.key],
            --this.size === 0
              ? ((this.first = null), (this.last = null))
              : ((this.first = r.next), (this.first.prev = null)));
        }
        return this;
      }
      expiresAt(e) {
        let r;
        return (this.has(e) && (r = this.items[e].expiry), r);
      }
      get(e) {
        let r = this.items[e];
        if (r !== void 0) {
          if (this.ttl > 0 && r.expiry <= Date.now()) {
            this.delete(e);
            return;
          }
          return (this.moveToEnd(r), r.value);
        }
      }
      has(e) {
        return e in this.items;
      }
      moveToEnd(e) {
        this.last !== e &&
          (e.prev !== null && (e.prev.next = e.next),
          e.next !== null && (e.next.prev = e.prev),
          this.first === e && (this.first = e.next),
          (e.prev = this.last),
          (e.next = null),
          this.last !== null && (this.last.next = e),
          (this.last = e),
          this.first === null && (this.first = e));
      }
      keys() {
        let e = new Array(this.size),
          r = this.first,
          t = 0;
        for (; r !== null;) ((e[t++] = r.key), (r = r.next));
        return e;
      }
      setWithEvicted(e, r, t = this.resetTtl) {
        let i = null;
        if (this.has(e)) this.set(e, r, !0, t);
        else {
          this.max > 0 && this.size === this.max && ((i = { ...this.first }), this.evict(!0));
          let s = (this.items[e] = {
            expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
            key: e,
            prev: this.last,
            next: null,
            value: r,
          });
          (++this.size === 1 ? (this.first = s) : (this.last.next = s), (this.last = s));
        }
        return i;
      }
      set(e, r, t = !1, i = this.resetTtl) {
        let s = this.items[e];
        return (
          t || s !== void 0
            ? ((s.value = r),
              t === !1 && i && (s.expiry = this.ttl > 0 ? Date.now() + this.ttl : this.ttl),
              this.moveToEnd(s))
            : (this.max > 0 && this.size === this.max && this.evict(!0),
              (s = this.items[e] =
                {
                  expiry: this.ttl > 0 ? Date.now() + this.ttl : this.ttl,
                  key: e,
                  prev: this.last,
                  next: null,
                  value: r,
                }),
              ++this.size === 1 ? (this.first = s) : (this.last.next = s),
              (this.last = s)),
          this
        );
      }
      values(e = this.keys()) {
        let r = new Array(e.length);
        for (let t = 0; t < e.length; t++) r[t] = this.get(e[t]);
        return r;
      }
    }
