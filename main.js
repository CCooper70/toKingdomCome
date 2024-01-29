//1.1-2
function strikeOut(){
    document.querySelector('li').style.textDecoration = 'line-through'
}
strikeOut()

//1.3-4
function setSource(id, url){
    document.querySelector(`#${id}`).src = url
}

setSource('image-1', src = "https://media.istockphoto.com/id/1358464345/photo/mare-and-foal.jpg?s=612x612&w=0&k=20&c=K_yKzFMHEWckTpYN-LJMo7jUDdNR5Gndk5ZYSaXnTwI=")
setSource('image-2', src = "https://cdn.pixabay.com/photo/2014/12/08/17/52/horse-561221_640.jpg")
setSource('image-3', src = "https://images.photowall.com/interiors/48312/landscape/wallpaper/room50.jpg?w=900&q=80")

//1.5-6
function removeLine(){
    let unorderedList = document.querySelector('ul')
    let unorderedListItem = document.querySelector('ul>li')
    unorderedList.removeChild(unorderedListItem)
}
removeLine()
removeLine()

//1.7-8
function setSize(id, size){
let element = document.getElementById(id)
   element.style.fontSize = `${size}`
}
setSize('thing-1', '2em')

//2.1-2
function newArgument(element){
const unorderedList = document.querySelector('#arguments')
unorderedList.appendChild(element)
}
let newImage = document.createElement('img')
newArgument(newImage)

//2.3-4
function imageSize(image){
    document.querySelector(`${image}`).style.height = "30px"
 }
 imageSize("#image-1")

//2.5-6
 function makeInvisible(id){
    let element = document.querySelector(`${id}`)
    element.classList.add("invisible")
 }
 
 
 
 //3.1-2
 function newLiText(text){
    let newLiItem = document.createElement("li")
    newLiItem.innerText = `${text}`
    return newLiItem
 }
 let newText = newLiText("This is the end.")
 newLiText(newText)
 
 



