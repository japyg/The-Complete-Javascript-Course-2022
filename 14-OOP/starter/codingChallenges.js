// // // Coding Challenge 1

// // //Data car 1: 'BMW' going at 120 km/h
// // //Data car 2: 'Mercedes' going at 95 km/h

// // //1
// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // //2
// // Car.prototype.accelerate = function () {
// //   console.log((this.speed += 10));
// // };

// // //3
// // Car.prototype.brake = function () {
// //   // const newSpeed = this.speed - 5;
// //   console.log((this.speed -= 5));
// // };

// // //4
// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('mercedes', 95);
// // console.log(bmw, mercedes);
// // bmw.accelerate();
// // bmw.accelerate();
// // mercedes.accelerate();
// // mercedes.accelerate();
// // bmw.brake();
// // bmw.brake();
// // mercedes.brake();
// // mercedes.brake();

// //Coding Challenge 2

// //1
// // class CarCl {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }
// //   accelerate() {
// //     console.log(`Going at ${(this.speed += 10)} km/h`);
// //   }

// //   brake() {
// //     console.log(`Lowering speed at ${(this.speed -= 5)} km/h`);
// //   }

// //   get speedUS() {
// //     return `${this.speed / 1.6} mi/h`;
// //   }
// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }
// // const ford = new CarCl('Ford', 120);
// // ford.accelerate();
// // ford.accelerate();
// // ford.brake();
// // ford.brake();
// // console.log(ford.speedUS);
// // ford.speedUS = 50;
// // console.log(ford);

// //Coding Challenge 3

// //1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //link prototypes between parent and child
// EV.prototype = Object.create(Car.prototype);

// //2
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(`${this.make} is charged at ${chargeTo}%`);
// };

// //3
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();
