import { senators } from '../data/senators.js'

const senatorDiv = document.querySelector('.senators')

function SimplifiedSenators() {
    return senators.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        gender: senator.gender,
        senority: +senator.seniority,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`
        }
})
}


function populateSenatorDiv(simpleSenators) {
    simpleSenators.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
}

const filterSenator = (prop, value) => {
    return SimplifiedSenators().filter(senator => senator[prop] === value)
}

const oldestGuy = SimplifiedSenators().reduce((acc, senator) => {
   return acc.senority > senator.seniority ? acc : senator
})

populateSenatorDiv(SimplifiedSenators())

