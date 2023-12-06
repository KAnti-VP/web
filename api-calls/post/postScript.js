let url = new URL("https://jsonplaceholder.typicode.com")


//  GET request
url.pathname = "/users"
fetch(url)
   
    // Kapott adat konvertálása JSON-ra
    .then(response => response.json())
    .then(json => {     

        // Eredmény megjelenítése
        displayUsers(json)
    })
    // Hiba kiíratása
    .catch(err => console.log("Az adat hiba: " + err))


// POST request
url.pathname = "/posts"
fetch(url, {
     
    // Metódus típusának beállítása
    method: "POST",
     
    // Body megtadása és konvertálása küldhető adattá
    body: JSON.stringify({
        title: "cim",
        body: "tartalom",
        userId: 1
    }),
     
    // Headers hozzáadása a requesthez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON formátummá
.then(response => response.json())
 
// Adatok kiíratása a konzolra
.then(json => console.log(json));


function displayUsers(users) {

    // Adatok megjelenításe HTML táblázatban
    let li = `<tr><th>Name</th><th>Email</th></tr>`;
       
    // Users adtok kiíratása tábla sorokba
    users.forEach(user => {
        li += `<tr>
            <td>${user.name} </td>
            <td>${user.email}</td>         
        </tr>`;
    });

    // Eredmény megjelenítése
    document.getElementById("users").innerHTML = li;
}
