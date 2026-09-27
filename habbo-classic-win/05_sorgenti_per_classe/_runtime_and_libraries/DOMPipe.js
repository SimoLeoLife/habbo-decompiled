// Extracted from HabboAirLauncher.deobf.js, line 4957.

class {
      static {
        n(this, "DOMPipe");
      }
      constructor(e) {
        ((this._attachedDomElements = []),
          (this._renderer = e),
          this._renderer.runners.postrender.add(this),
          this._renderer.runners.init.add(this),
          (this._domElement = document.createElement("div")),
          (this._domElement.style.position = "absolute"),
          (this._domElement.style.top = "0"),
          (this._domElement.style.left = "0"),
          (this._domElement.style.pointerEvents = "none"),
          (this._domElement.style.zIndex = "1000"));
      }
      init() {
        this._canvasObserver = new CanvasObserver({ domElement: this._domElement, renderer: this._renderer });
      }
      addRenderable(e, r) {
        this._attachedDomElements.includes(e) || this._attachedDomElements.push(e);
      }
      updateRenderable(e) {}
      validateRenderable(e) {
        return !0;
      }
      postrender() {
        let e = this._attachedDomElements;
        if (e.length === 0) {
          this._domElement.remove();
          return;
        }
        this._canvasObserver.ensureAttached();
        for (let r = 0; r < e.length; r++) {
          let t = e[r],
            i = t.element;
          if (!t.parent || t.globalDisplayStatus < 7) (i?.remove(), e.splice(r, 1), r--);
          else {
            this._domElement.contains(i) ||
              ((i.style.position = "absolute"),
              (i.style.pointerEvents = "auto"),
              this._domElement.appendChild(i));
            let s = t.worldTransform,
              o = t._anchor,
              d = t.width * o.x,
              c = t.height * o.y;
            ((i.style.transformOrigin = `${d}px ${c}px`),
              (i.style.transform = `matrix(${s.a}, ${s.b}, ${s.c}, ${s.d}, ${s.tx - d}, ${s.ty - c})`),
              (i.style.opacity = t.groupAlpha.toString()));
          }
        }
      }
      destroy() {
        this._renderer.runners.postrender.remove(this);
        for (let e = 0; e < this._attachedDomElements.length; e++)
          this._attachedDomElements[e].element?.remove();
        ((this._attachedDomElements.length = 0),
          this._domElement.remove(),
          this._canvasObserver.destroy(),
          (this._renderer = null));
      }
    }
