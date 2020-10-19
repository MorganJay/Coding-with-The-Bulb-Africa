bodyWidth = document.documentElement.clientWidth;
let submit = document.querySelector('input[type="submit"]');
let input = document.querySelector("#additem");
input.setAttribute("placeholder", "Enter an item");
function resize() {
  if (bodyWidth >= 575) {
    submit.classList.remove("mt-3");
  } else {
    submit.classList.add("mt-3");
  }
}
resize();

let form = document.getElementById("addform");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
//Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
  e.preventDefault();
  if (condition) {
      
  } else {
       //Get input value
  const newItem = document.getElementById("additem").value;

  //Create new li element
  const li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //    create del button element
  const deleteBtn = document.createElement("button");
  deleteBtn.classList = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

    //Append button to li
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
  }
 
  document.getElementById("additem").value = '';

}


function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if (confirm("Are you sure?")) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    //Convert collection to array
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}