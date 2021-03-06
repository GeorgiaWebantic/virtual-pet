function Unicorn(name, age) {
 this.name = name;
 this.age = 0;
 this.hunger = 0;
 this.fitness = 10;


 Unicorn.prototype = {
  get isAlive() {
   if (this.fitness <= 0 && this.hunger >= 10 && this.age >= 30) {
    return false;
   } else {
    return true;
   }
  }
 }

 Unicorn.prototype.growUp = function() {
  if (!this.isAlive) {
   throw new Error('Your pet is no longer alive :(');
  } else {
   this.age += 1;
   this.hunger += 3;
   this.fitness -= 3;
  }
 };

 const MINIMUM_HUNGER = 0;

 Unicorn.prototype.feed = function() {
  if (!this.isAlive) {
   throw new Error('Your pet is no longer alive :(');
  } else if ((this.hunger - 3) >= MINIMUM_HUNGER){
   this.hunger -= 3;
  } else {
   this.hunger = MINIMUM_HUNGER;
  }
 }

 const MAXIMUM_FITNESS = 10;

 Unicorn.prototype.walk = function() {
  if (!this.isAlive){
   throw new Error('Your pet is no longer alive :(');
  } else if ((this.fitness + 4 ) <= MAXIMUM_FITNESS){
   this.fitness += 4;
  } else {
   this.fitness = MAXIMUM_FITNESS;
  }
 }

 Unicorn.prototype.checkUp = function() {
  if (!this.isAlive){
   throw new Error('Your pet is no longer alive :(');
  } else if (this.fitness <= 3 && this.hunger >= 5){
  return 'I am hungry and I need a walk'
  } else if (this.fitness <= 3){
   return 'I need a walk'
  } else if (this.hunger >= 5){
   return 'I am hungry'
  } else {
   return 'I feel great!'
  }
 }


 const pet = {
  name: 'Jerry'
 };

}

module.exports = Unicorn;