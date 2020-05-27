class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(age, color, food, job, honeyPot, treasureChest, canFly) {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  forage() {
    return "I am too old, let me play cards instead";
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
