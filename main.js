

// Method - 1 - array from js to html

// for(let powder of curryPowder) {
//   let li = document.createElement('li');
//   li.innerText = powder;
//   kitchenItemsList.appendChild(li);
//   console.log(li);
// }

// Method - 2 - array from html to js
// forEach()

// let kitchenItemsList = document.getElementById("kitchen-items-list");
// let curryPowder = ['Salt', 'Pepper', 'Chilli'];

//   kitchenItemsList.appendChild(li);
//   let li = document.createElement('li');
// curryPowder.forEach(function (powder, position) {
//   li.innerText = `${position+1} - ${powder}`;
//   })

// function caffainne(powder) {
//   console.log('Step1 - Boil Water');

//   console.log(`Step2 - Put ${powder} powder`);

//   console.log('Step3 - Put Sugar');
//   console.log('Step4 - Keep 3 minutes');
//   alert(`${powder} is ready now`);
// }

// caffainne('Coffee');

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");


function inputLegth() {
  return kitchenInput.value.legth;
}




function addKitchenItems() {
  let kitchenInputData = kitchenInput.value;
  let li = document.createElement('li');
  li.style.cssText = 'animation-name:slideIn';
  li.innerText = kitchenInputData
  kitchenItemsList.appendChild(li);
  kitchenInput.value = "";
  kitchenInput.focus();

  //trash btn//
  let trashBtn = document.createElement('i')
  trashBtn.classList.add("fas","fa-trash");
  li.appendChild(trashBtn);
}
//Delete item from list
function deleteKitchenItems(event) {
  if (event.target.classList[0] === "fas") {
    let item = event.target.parentElement;
    item.classList.add('slideOut');
    item.addEventListener('transitionend', function () {
    item.remove();

    });
 
  }

}


addBtn.addEventListener("click", addItemsOnClick );
kitchenItemsList.addEventListener("click", deleteKitchenItems);