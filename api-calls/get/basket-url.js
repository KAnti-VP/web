const link = "https://www.balldontlie.io"

const url = new URL(link)
let page = 0
let perPage = 10
let nextPage
url.searchParams.set("page", page)
url.searchParams.set("per_page", perPage)
url.searchParams.append("search", "Davis")
//console.log(url)

function getPlayersData() {
    if (url.pathname != "/api/v1/players")
        url.pathname = "/api/v1/players"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            let cont = `<ul>`
            let i = 1
            for (let player of data.data) {
                cont += `<li>${player.first_name} ${player.last_name} team: ${player.team.full_name} </li>`
            }
            cont += `</ul>`
            document.getElementById("players").innerHTML = cont
            
            if (data.meta.next_page) nextPage = data.meta.next_page
        })
        .catch(err => {
            document.getElementById("players").innerHTML = `Something went wrong: ${err}`
        })
}

function getTeamsData() {
    if (url.pathname != "/api/v1/teams")
        url.pathname = "/api/v1/teams"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            let cont = `<ul>`
            for (let team of data.data) {
                cont += `<li>${team.full_name} </li>`
            }
            cont += `</ul>`
            document.getElementById("players").innerHTML = cont

            if (data.meta.next_page) nextPage = data.meta.next_page
        })
        .catch(err => {
            document.getElementById("players").innerHTML = `Something went wrong: ${err}`
        })
}


document.getElementById("getPlayers").addEventListener("click", () => {
    //console.log("Players button works.")    
    getPlayersData()
})

document.getElementById("getTeams").addEventListener("click", () => {
    //console.log("Teams button works.")    
    getTeamsData()
})

document.getElementById("setPrev").addEventListener("click", () => {
    //console.log("Prev button works.")    
    if (page > 0) page--
    url.searchParams.set("page", page);
    (url.pathname == "/api/v1/players") ? getPlayersData() : getTeamsData()
})

document.getElementById("setNext").addEventListener("click", () => {
    //console.log("Next button works.")    
    if (nextPage) page = nextPage
    url.searchParams.set("page", page);
    (url.pathname == "/api/v1/players") ? getPlayersData() : getTeamsData()
})
