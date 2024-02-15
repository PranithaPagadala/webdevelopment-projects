'use strict';
// document.addEventListener('keydown', function (event) {    
//   console.log('a key was pressed');
//   console.log(event.key);

// });

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);
// -------------------------------------------//
document.addEventListener('keydown',function(event){
    if (event.key === 'Escape') {
        if (!model.classList.contains('hidden')) {
            model.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
    console.log(event.key);
});
//------------------------------------------------//
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', function () {
    console.log('Button clicked');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  // document.querySelector('.close-modal').addEventListener('click',function () {
  //     model.classList.add('hidden');
  // });
  btnClosedModel.addEventListener('click', function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    model.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
