// Extracted from HabboAirLauncher.deobf.js, line 3203.

class extends Wi {
      static {
        n(this, "BufferImageSource");
      }
      constructor(e) {
        let r = e.resource || new Float32Array(e.width * e.height * 4),
          t = e.format;
        (t ||
          (r instanceof Float32Array
            ? (t = "rgba32float")
            : r instanceof Int32Array || r instanceof Uint32Array
              ? (t = "rgba32uint")
              : r instanceof Int16Array || r instanceof Uint16Array
                ? (t = "rgba16uint")
                : (r instanceof Int8Array, (t = "bgra8unorm"))),
          super({ ...e, resource: r, format: t }),
          (this.uploadMethodId = "buffer"));
      }
      static test(e) {
        return (
          e instanceof Int8Array ||
          e instanceof Uint8Array ||
          e instanceof Uint8ClampedArray ||
          e instanceof Int16Array ||
          e instanceof Uint16Array ||
          e instanceof Int32Array ||
          e instanceof Uint32Array ||
          e instanceof Float32Array
        );
      }
    }
