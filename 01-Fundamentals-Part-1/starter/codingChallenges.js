//Coding Challenge 1

// BMI = mass / height ** 2 .. formula 1
// BMI = mass / (height * height) .. formula 2

//Test Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

//Mark and John BMI
let markBMI = markMass1 / (markHeight1 * markHeight1);
let johnBMI = johnMass1 / johnHeight1 ** 2;
console.log(markBMI);
console.log(johnBMI);

//Whether Mark has higher BMI than John
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Test Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

//Mark and John BMI
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(markBMI2);
console.log(johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
