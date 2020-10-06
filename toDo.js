let myForm = document.getElementById("myForm")
let myField = document.getElementById("myField")
let myList = document.getElementById("myList")
function setFocus() {
    myField.focus()
}
setFocus()

myForm.addEventListener("submit", 
(e) => 
{
    e.preventDefault()
    createItem(myField.value)

})

function createItem(x) {
    let myHTML = `<li><button style ="color: red; padding: 5px 10px; margin: 1px; " onclick="deleteItem(this)">Delete</button> ${x}</li>`
    if (myField.value !="") myList.insertAdjacentHTML("beforeend", myHTML)
    myField.value=""
    myField.focus()
}

function deleteItem(x) {
    x.parentElement.remove()

}