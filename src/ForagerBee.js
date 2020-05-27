class ForagerBee extends HoneyMakerBee{
  // TODO..
  constructor(age, color, food, job, honeyPot, canFly) {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }

};
