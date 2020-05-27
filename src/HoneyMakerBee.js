class HoneyMakerBee extends Bee {
  // TODO..
  constructor(age, color, food, job, honeyPot) {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot = this.honeyPot + 1;
  }

  giveHoney() {
    this.honeyPot = this.honeyPot - 1;
  }
};
