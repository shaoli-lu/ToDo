let myForm = document.getElementById("myForm")
let myField = document.getElementById("myField")
let myList = document.getElementById("myList")
let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
localStorage.setItem("items", JSON.stringify(itemsArray));

let data = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

function load() {
    clearList()

    data.forEach(item => {
        createItem(item)
      });
}


function setFocus() {
    myField.focus()
}
function clearList() {
    var e = document.querySelector("ul"); 
        e.innerHTML = ""; 
}
setFocus()
load();

myForm.addEventListener("submit", 
(e) => 
{
    e.preventDefault()
    if (myField.value !=="")
    {
    data.push(myField.value);
    localStorage.setItem("items", JSON.stringify(data));
    load();
    }
      myField.value=""
      myField.focus()
      myHTML = "";
   
})

function createItem(x) {
    
    let myHTML = `<li><button class = "btn" style="color: black; background-color: red; " onclick="deleteItem('${x}')">Delete</button> ${x}</li>`
    myList.insertAdjacentHTML("beforeend", myHTML)

}



function deleteItem(x) {
    clearList();
    data = data.filter(function(newList)
    {
        return newList !== x;
    }
    );
    
    localStorage.setItem("items", JSON.stringify(data));
    
    load();
}