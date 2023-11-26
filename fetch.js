// Short version:
fetch("https://api.quotable.io/quotes/random")
    .then(response => response.json())
    .then(data => {
    console.log(data[0].author);
    console.log(data[0].content);
    })
    .catch(err => console.error("Hiba lépett fel" + err))


/*
// Example GET method implementation:
async function getData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  getData("https://api.quotable.io/quotes/random", {})
  .then((data) => {
    console.log(data[0].author); // JSON data parsed by `data.json()` call
    console.log(data[0].content);
  })
  .catch((error) => console.error("Something went wrong: " + error))
*/