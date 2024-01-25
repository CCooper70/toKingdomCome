function strikeOut(){
    document.querySelector('li').style.textDecoration = 'line-through'
}
strikeOut()

function removeLine(){
    let unorderedList = document.querySelector('ul')
    let unorderedListItem = document.querySelector('ul>li')
    unorderedList.removeChild(unorderedListItem)
}
removeLine()




function setSource(id, url){
    document.querySelector(`#${id}`).src = url
}

setSource('image-1', src = "https://media.istockphoto.com/id/1358464345/photo/mare-and-foal.jpg?s=612x612&w=0&k=20&c=K_yKzFMHEWckTpYN-LJMo7jUDdNR5Gndk5ZYSaXnTwI=")
setSource('image-2', src = "https://cdn.pixabay.com/photo/2014/12/08/17/52/horse-561221_640.jpg")
setSource('image-3', src = "https://images.photowall.com/interiors/48312/landscape/wallpaper/room50.jpg?w=900&q=80")








