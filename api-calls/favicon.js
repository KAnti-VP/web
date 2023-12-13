const url = new URL("http://favicongrabber.com")
url.pathname = "/api/grab/"
url.searchParams.set("pretty", "true")
const pathName = "/api/grab/"


function getURL() {
    let typedURL = document.getElementById("url").value
    console.log("Kapott link: " + typedURL)
    return typedURL
}


function getIcon() {
    iconSource = ""
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data) {
                iconSource = data.icons[0].src
                console.log("adat:\n" + iconSource)
            }
        })
        .catch(error => console.log("Hiba történt: " + error))
}



document.getElementById("url").value = "www.github.com"
document.getElementById("btn").addEventListener("click", () => {
    console.log("Múködik")
    let link = getURL()
    url.pathname = pathName + link
    iconSrc = getIcon()
    
})