class Animal {
    constructor(type) {
      this.type = type;
      this.location = 'China';
    }
  
    can_fly() {
      return this.type + ' can fly';
    }
    
    can_feed() {
      return this.type+ ' can feed milk';
    }
  
    can_swim() {
      return this.type + ' can swim';
    }
  
    can_lay() {
      return this.type + ' can lay eggs';
    }
  }
  
  class Bat {
    constructor(type) {
      this.newType = new Animal(type);
    }
  
    can_fly() {
      return this.newType.can_fly();
    }
  
    can_feed() {
      return this.newType.can_feed()
    }
  }
  
  class Fish {
    constructor(type) {
      this.newType = new Animal(type);
    }
  
    can_swim() {
      return this.newType.can_swim();
    }
  
    can_lay() {
      return this.newType.can_lay()
    }
  }
  
  class Whale {
    constructor(type) {
      this.newType = new Animal(type);
    }
  
    can_swim() {
      return this.newType.can_swim();
    }
  
    can_feed() {
      return this.newType.can_feed()
    }
  }
  
  class Bird {
    constructor(type) {
      this.newType = new Animal(type);
    }
  
    can_fly() {
      return this.newType.can_fly();
    }
  
    can_lay() {
      return this.newType.can_lay()
    }
  }
  
  
  const bat = new Bat('bat');
  const fish = new Fish('fish');
  const whale = new Whale('whale');
  const bird = new Bird('bird');
  
  
bat.can_feed();
fish.can_lay();
whale.can_swim();
bird.can_fly();
  