import Spinner from './App.js';

// instance 1

window.spinnerInstance1 = new Spinner({
  entry: '.entry',
  spinnerColor: '#7fba23'
});

setTimeout(function(){
  spinnerInstance1.create();
}, 1000);

// setTimeout(function(){
//   spinnerInstance1.destroy('.entry');
// }, 12000);

// instance 2

window.spinnerInstance2 = new Spinner({
  entry: '.entryTwo',
  type: 'logo',
  logoColor: '#7fba23',
  spinnerColor: '#0081b9'
});

setTimeout(function(){
  spinnerInstance2.create();
}, 1000);

// setTimeout(function(){
//   spinnerInstance2.destroy('.entryTwo');
// }, 12000);

// instance 3

window.spinnerInstance3 = new Spinner({
  entry: '.entryThree',
  spinnerColor: '#7fba23',
  percentColor: '#0081b9',
  type: 'loader'
});

setTimeout(function(){
  spinnerInstance3.create();
}, 1000);

setTimeout(function(){
  spinnerInstance3.destroy('.entryThree');
}, 12000);


// instance 4

window.spinnerInstance4 = new Spinner({
  entry: '.entryFour',
  type: 'percent',
  percentColor: '#7fba23',
  spinnerColor: '#0081b9'
});

setTimeout(function(){
  spinnerInstance4.create();
}, 1000);

setTimeout(function(){
  spinnerInstance4.destroy('.entryFour');
}, 12000);

// test instance

window.testInstance = new Spinner({
  entry: '.test',
  spinnerColor: 'FireBrick'
});
