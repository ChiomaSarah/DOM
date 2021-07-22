window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("change_heading").innerHTML = "Hello World!";

  let element = document.createElement("DIV");
  document.getElementById("box").appendChild(element);
  document.getElementsByTagName("div")[4].classList.add("purple");
  console.log(element);
});

function myMove() {
    let id = null;
    const elem = document.querySelector("#car1");
    const elem1 = document.querySelector("#car2");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
      if (pos == 607) {
        clearInterval(id);
        alert("Winner!");
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.right = pos + "px";
        elem1.style.top = pos + "px";
        elem1.style.left = pos + "px";
      }
    }
  }
  
  function displayColor(id) {
    document.getElementById(id).style.display = "block";
    
  }
  function removeColor(id){
    document.getElementById(id).style.display = "none";
  
  }