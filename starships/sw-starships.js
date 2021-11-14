import { starships } from '../data/starships.js'
import { getLastNumber } from '../utils/index.js'
import { removeChildren } from "../utils/index.js";

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navlist')
const shipView = document.querySelector('#displaySection')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

const missingMessage = document.querySelector('.missingMessage')

closeButton.addEventListener('click', () =>  modal.classList.toggle('is-active'))
modalBackground.addEventListener('click', () => modal.classList.toggle('is-active'))

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
    removeChildren(shipView)
    let shipImage = document.createElement('Img')
    let shipNum = getLastNumber(shipData.url)
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', () => {
        shipImage.hidden = true
        modal.classList.toggle('is-active')
        missingMessage.textContent = `${shipData.name} data unavailable, please consult Jocasta Nu`
    })
    shipView.appendChild(shipImage)
}