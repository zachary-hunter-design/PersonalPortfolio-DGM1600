import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('#displaySection')

function populateNav(starships) {
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        let listItem = document.createElement('li')
        listItem.textContent = starship.name
        anchorWrap.addEventListener('click', () => {
            populateShipView(starship)
        })


        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
    })
}

populateNav(starships)

function populateShipView(shipData) {
    let shipImage = document.createElement('Img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/15.jpg`
    shipView.appendChild(shipImage)

}