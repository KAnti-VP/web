/**
 * Fetches data and prints into a table
 */
function showData() {
    url.pathname = "/posts"
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let content = `<table><th>Id</th><th>Title</th><th>Content</th>`
            for (let item of data) {
                content += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.body}</td>
                <tr>
                `
            }
            content += `</table>`
            document.getElementById("table").innerHTML = content
        })
}

function deleteData() {
    let postId = document.getElementById("getId").value
    url.pathname = "/posts/" + postId
    fetch(url)
        .then(response => {
            let content = `<p>`
            if (response.ok) {
                console.log("The deletion was successful")
                content += `The deletion was successful. </p>`
            } else {
                console.log("The deletion failed.")
                content += `The deletion failed. </p>`
            }
            document.getElementById("table").innerHTML = content
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log("Something went wrong: " + error))

}


const url = new URL("https://jsonplaceholder.typicode.com")
url.pathname = "/posts"

showData()
document.getElementById("btn").addEventListener("click", deleteData)