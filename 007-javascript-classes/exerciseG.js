class Bat {
    constructor(type) {
      this.type = type;
    }
  
    can_fly() {
      return this.type + ' can fly';
    }
  
    can_feed() {
      return this.type+ ' can feed milk';
    }
  
  }
  
  class Fish {
    constructor(type) {
      this.type = type;
    }
  
    can_swim() {
      return this.type + ' can swim';
    }
  
    can_lay() {
      return this.type + ' can lay eggs';
    }
  }
  
  class Whale extends Fish {
    constructor(type) {
      super(type);
    }
  
    can_feed() {
      return this.type+ ' can feed milk';
    }
  }
  
  class Bird extends Bat {
    constructor(type) {
      super(type);
    }
  
    can_lay() {
      return this.type + ' can lay eggs';
    }
  
  }
  
  const bat = new Bat('bat');
  const fish = new Fish('fish');
  const whale = new Whale('whale');
  const bird = new Bird('bird');
  
  
  bat.can_feed();
  fish.can_lay();
  whale.can_swim();
  bird.can_fly()