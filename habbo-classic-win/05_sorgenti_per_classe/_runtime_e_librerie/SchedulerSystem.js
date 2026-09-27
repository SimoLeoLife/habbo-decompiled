// Estratto da HabboAirLauncher.deobf.js, riga 13769.

class {
        static {
          n(this, "SchedulerSystem");
        }
        constructor() {
          ((this._tasks = []), (this._offset = 0));
        }
        init() {
          vc.system.add(this._update, this);
        }
        repeat(e, r, t = !0) {
          let i = aor++,
            s = 0;
          return (
            t && ((this._offset += 1e3), (s = this._offset)),
            this._tasks.push({
              func: e,
              duration: r,
              start: performance.now(),
              offset: s,
              last: performance.now(),
              repeat: !0,
              id: i,
            }),
            i
          );
        }
        cancel(e) {
          for (let r = 0; r < this._tasks.length; r++)
            if (this._tasks[r].id === e) {
              this._tasks.splice(r, 1);
              return;
            }
        }
        _update() {
          let e = performance.now();
          for (let r = 0; r < this._tasks.length; r++) {
            let t = this._tasks[r];
            if (e - t.offset - t.last >= t.duration) {
              let i = e - t.start;
              (t.func(i), (t.last = e));
            }
          }
        }
        destroy() {
          (vc.system.remove(this._update, this), (this._tasks.length = 0));
        }
      }
