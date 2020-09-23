let myForm = document.getElementById("myForm")
let myField = document.getElementById("myField")
let myList = document.getElementById("myList")
myForm.addEventListener("submit", 
(e) => 
{
    e.preventDefault()
    createItem(myField.value)

})

function createItem(x) {
    let myHTML = `<li><button onclick="deleteItem(this)">Delete</button> ${x}</li>`
    if (myField.value !="") myList.insertAdjacentHTML("beforeend", myHTML)
    myField.value=""
    myField.focus()
}

function deleteItem(x) {
    x.parentElement.remove()

}