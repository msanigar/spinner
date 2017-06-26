import Spinner from './App.js';

// instance 1

window.spinnerInstance1 = new Spinner({
  entry: '.entry'
});

setTimeout(function(){
  spinnerInstance1.create();
}, 1000);

setTimeout(function(){
  spinnerInstance1.destroy('.entry');
}, 12000);

// instance 2

window.spinnerInstance2 = new Spinner({
  entry: '.entryTwo',
  primaryColor: '#7fba23',
  secondayColor: 'blue',
  type: 'anim1',
  loader: true
});

setTimeout(function(){
  spinnerInstance2.create();
}, 1000);

// instance 3

window.spinnerInstance3 = new Spinner({
  entry: '.entryThree',
  type: 'anim2',
  loader: false,
  primaryColor: '#7fba23'
});

setTimeout(function(){
  spinnerInstance3.create();
}, 1000);

setTimeout(function(){
  spinnerInstance1.destroy('.entryThree');
}, 12000);