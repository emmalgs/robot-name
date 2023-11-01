// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.name = this.generateName();
  }

  generateCharCode() {
    const min = 65;
    const max = 90;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateNumber() {
    return Math.floor(Math.random() * 10).toString();
  }

  generateName() {
    const c1 = String.fromCharCode(this.generateCharCode());
    const c2 = String.fromCharCode(this.generateCharCode());
    const n1 = this.generateNumber();
    const n2 = this.generateNumber();
    const n3 = this.generateNumber();

    return c1 + c2 + n1 + n2 + n3;
  }
}

Robot.releaseNames = () => {};
