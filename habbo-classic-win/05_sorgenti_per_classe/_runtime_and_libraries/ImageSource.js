// Extracted from HabboAirLauncher.deobf.js, line 7421.

class extends Wi {
      static {
        n(this, "ImageSource");
      }
      constructor(e) {
        (super(e), (this.uploadMethodId = "image"), (this.autoGarbageCollect = !0));
      }
      static test(e) {
        return (
          (globalThis.HTMLImageElement && e instanceof HTMLImageElement) ||
          (typeof ImageBitmap < "u" && e instanceof ImageBitmap) ||
          (globalThis.VideoFrame && e instanceof VideoFrame)
        );
      }
    }
