let month = prompt('Enter the month: ').toLowerCase();

const autumnMonths = ['september', 'october', 'november'];
const winterMonths = ['december', 'january', 'february'];
const springMonths = ['march', 'april', 'may'];
const summerMonths = ['june', 'july', 'august'];

if (autumnMonths.includes(month)) {
  console.log('The season is Autumn');
} else if (winterMonths.includes(month)) {
  console.log('The season is Winter');
} else if (springMonths.includes(month)) {
  console.log('The season is Spring');
} else if (summerMonths.includes(month)) {
  console.log('The season is Summer');
} else {
  console.log('Invalid month');
}
