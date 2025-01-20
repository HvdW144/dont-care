export class I {
  /**
   * I don't care
   * @param callback Code that won't be executed
   */
  static dontCare(callback: () => void) {}

  /**
   * I don't mind
   * @param callback Code that will be executed, but will never error
   * @param silent If true, runtime errors will not be logged, defaults to true
   */
  static dontMind(callback: () => void, silent = true) {
    try {
      callback();
    } catch (error) {
      if (!silent) {
        console.error(error);
      }
    }
  }

  /**
   * I don't give a F*ck
   * @param callback Code that will be executed, nothing more
   */
  static dontGiveAF_ck(callback: () => void) {
    callback();
  }
}

export const dontCare = I.dontCare;
export const dontMind = I.dontMind;
export const dontGiveAF_ck = I.dontGiveAF_ck;
