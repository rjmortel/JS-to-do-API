// Create local storage array
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log(itemsArray);

// if ( itemsArray == "") {
//     itemsArray = [];
// }

// add button
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item");
  createItem(item);
});

// display to do list
function displayItems() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
    <div>
      <p class="d-inline">${itemsArray[i]}</p>
      <i class="fa-solid fa-delete-left deleteBtn"></i>
    </div>  
    </div>`;
  }
  document.querySelector(".to-do-list").innerHTML = items;
  activateDeleteListeners(); //need sa delete function sa luob dapat ng display sa baba ng display.innerHTML
}

// delete function
function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}

// delete in local storage
function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));

  location.reload(); //same as the reload button in your browser
}

//Create Function
function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));

  location.reload(); //same as the reload button in your browser
}

window.onload = function () {
  displayItems();
};
