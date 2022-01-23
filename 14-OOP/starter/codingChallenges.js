// Coding Challenge 1

//Data car 1: 'BMW' going at 120 km/h
//Data car 2: 'Mercedes' going at 95 km/h

//1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

//2
Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

//3
Car.prototype.brake = function () {
  // const newSpeed = this.speed - 5;
  console.log((this.speed -= 5));
};

//4
const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);
console.log(bmw, mercedes);
bmw.accelerate();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
bmw.brake();
bmw.brake();
mercedes.brake();
mercedes.brake();
