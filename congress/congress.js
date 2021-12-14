import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives'

const members = [...senators, ...representatives] // modern way to combine arrays

const senatorDiv = document.querySelector('.senators')

function SimplifiedMembers(chamberFilter) {
    const memberArray = chamberFilter 
    return members.map(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
        return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        party: senator.party,
        gender: senator.gender,
        senority: +senator.seniority,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
        missedVotesPct: senator.missed_votes_pct,
        loyaltyPct: senator.votes_with_party_pct
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

const mostLoyal = SimplifiedSenators().reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        acc.push(senator)
    }
    return acc
}, [])



populateSenatorDiv(SimplifiedSenators())

