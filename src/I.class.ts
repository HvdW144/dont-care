export class I {
  static dontCare(callback: () => void) {}
}

export const dontCare = I.dontCare;

dontCare(() => {
  console.log("I don't care");
});
