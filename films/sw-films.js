import { films } from '../data/films.js'

let filmList = document.querySelector('#filmList')

 filmList.textContent = "this is my content. no way this is crazy"

 let  myImg = filmList.appendChild(document.createElement('img'))
 myImg.src = 'https://starwars-visualguide.com/assets/img/films/1.jpg'

 let titleList = document.createElement('ol')
 filmList.appendChild(titleList)

 for (let i  = 0; i < films.length; i++) {
     console.log(films[i].title);
     let listItem = document.createElement('li')
     listItem.textContent = films[i].title
     titleList.appendChild(listItem)
 } 

 