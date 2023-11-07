let age = prompt('Enter your age: ');

const legalDrivingAge = 18;
const yearsToDrive = legalDrivingAge - age;

if (age >= legalDrivingAge) {
  console.log('You are old enough to drive.');
} else {
  console.log('You are left with ' + yearsToDrive + ' years to drive.');
}
