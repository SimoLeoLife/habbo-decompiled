// Extracted from HabboAirLauncher.deobf.js, line 2717.

class {
      static {
        n(this, "InstructionSet");
      }
      constructor() {
        ((this.uid = uid_("instructionSet")),
          (this.instructions = []),
          (this.instructionSize = 0),
          (this.renderables = []),
          (this.gcTick = 0));
      }
      reset() {
        this.instructionSize = 0;
      }
      destroy() {
        ((this.instructions.length = 0),
          (this.renderables.length = 0),
          (this.renderPipes = null),
          (this.gcTick = 0));
      }
      add(e) {
        this.instructions[this.instructionSize++] = e;
      }
      log() {
        ((this.instructions.length = this.instructionSize),
          console.table(this.instructions, ["type", "action"]));
      }
    }
