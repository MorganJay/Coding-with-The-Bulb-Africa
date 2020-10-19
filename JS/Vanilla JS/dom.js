// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
let submit = document.querySelector('input[type="submit"]');

bodyWidth = document.documentElement.clientWidth;
function resize() {
    if (bodyWidth >= 575) {
        submit.classList.remove("mt-3");
      }
      else{
          submit.classList.add("mt-3");
      }
}

resize();
// window.addEventListener("resize", resize);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById("header-title");
const header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent)
header.style.borderBottom = "solid 3px #000";
// headerTitle.style.color = 'royalblue';

// GETELEMENTSBYCLASSNAME //
const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error
// items.style.backgroundColor = '#f4f4f4';

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4";
}

// GETELEMENTSBYTAGNAME //
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector("#additem");
// input.value = 'Enter an item'

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}

// TRAVERSING THE DOM //
let itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
let newDiv = document.createElement("div");

// // Add class
newDiv.className = "hello";

// // Add id
newDiv.id = "hello1";

// // Add attr
newDiv.setAttribute("title", "Hello Div");
input.setAttribute("placeholder", "Enter an item");
// console.log(newDiv);

// // Create text node
let newDivText = document.createTextNode("Hello World");
// console.log(newDiv);

// // Add text to div
newDiv.appendChild(newDivText);
// console.log(newDiv);
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS //

// let button = document.getElementById('button').addEventListener('click', buttonClick);
// input.addEventListener("keypress", enterItem);

// function enterItem(e) {
//   e.preventDefault();
//   console.log(e);
//}

// function buttonClick(e){
// //   console.log('Button clicked');
//   document.getElementById('header-title').textContent = 'Changed';
//   document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   console.log(e);
//   console.log(e.target);
//   // console.log(e.target.id);
//   console.log(e.target.className);
//   // console.log(e.target.classList);
//   // let output = document.getElementById('output');
//   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//   console.log(e.type);

//   console.log(e.clientX);
//   //console.log(e.clientY);

//   console.log(e.offsetX);
//   console.log(e.offsetY);

//   // console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
//}

// let button = document.getElementById("button");
// let main = document.getElementById("main");
// newDiv.id = 'box';
// newDiv.style.width = "400px";
// newDiv.style.height = "200px";
// newDiv.style.background = "#f4f4f4";
// button.insertAdjacentElement("afterend", newDiv);
// let output = document.getElementById("output");
function runEvent(e) {
    e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
//   output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';
  document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
  newDiv.innerHTML = '<h3>'+e.target.value+'</h3>';
};

// output = document.createElement();
// console.log(document.getElementById("box"));
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);





