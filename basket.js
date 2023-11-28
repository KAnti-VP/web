const playersLink = "https://www.balldontlie.io/api/v1/players"
const teamsLink = "https://www.balldontlie.io/api/v1/teams"


function getPlayersData() {
    fetch(playersLink)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let cont = `<ul>`
            for (let player of data.data) {
                cont += `<li>${player.first_name} ${player.last_name} team: ${player.team.full_name} </li>`
            }
            cont += `</ul>`
            document.getElementById("players").innerHTML = cont
        })
        .catch(err => {
            document.getElementById("players").innerHTML = `Something went wrong: ${err}`
        })
}

document.getElementById("getPlayers").innerText = "Get Players"

document.getElementById("getPlayers").addEventListener("click", () => {
    console.log("Players button works.")    
    getPlayersData()
})

function getTeamsData() {
    fetch(teamsLink)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let cont = `<ul>`
            for (let team of data.data) {
                cont += `<li>${team.full_name} </li>`
            }
            cont += `</ul>`
            document.getElementById("players").innerHTML = cont
        })
        .catch(err => {
            document.getElementById("players").innerHTML = `Something went wrong: ${err}`
        })
}

document.getElementById("getTeams").addEventListener("click", () => {
    console.log("Teams button works.")    
    getTeamsData()
})

