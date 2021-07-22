// // Q1
let containerId = document.getElementById("container");
console.log(containerId);
// Q2
let containerSelector = document.querySelector("#container");
console.log(containerSelector);
// // Q3
let second = document.querySelectorAll(".second");
console.log(second);
// // Q4
let x = document.getElementsByTagName("ol");
let y = document.getElementsByClassName("third")[1];
console.log(y);

// // Q5
let container = document.getElementById("container");
// container.appendChild("Hello!");
const firstChild = container.childNodes[0];

var heading = document.createElement("h1");
var textnode = document.createTextNode("Hello!");
heading.appendChild(textnode);
container.insertBefore(heading, firstChild);

// // Q6
let footerDiv = document.getElementsByClassName("footer")[0];
footerDiv.classList.add("main");
console.log(footerDiv.classList);

// // Q7
footerDiv.classList.remove("main");
console.log(footerDiv.classList);

// // Q8-10
let element = document.createElement("li");
let text = document.createTextNode("four");
element.className = "fourth";
console.log(text);
element.appendChild(text);
document.getElementById("unordered").appendChild(element);

// var list = document.createElement("LI");
// var txt = document.createTextNode("four");
// list.className = "fourth";
// list.appendChild(txt);
// document.querySelector("ul").appendChild(list)

// Q11
let nodeList = document.querySelectorAll("ol>li");
console.log(nodeList, "nodelist is here");
for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList.length);
  nodeList[i].style.backgroundColor = "green";
}

// Q12
let footerClass = document.getElementsByClassName("footer")[0];
footerClass.removeAttribute("class");
console.log(footerClass);
