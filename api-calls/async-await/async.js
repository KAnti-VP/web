let items = ["apple", "banana", "pear"]

// adat megjelenítése
const getItems = () => {
    setTimeout(() => {
        let itemList = ""
        items.forEach((item) => {
            itemList += `<li>${item}</li>`
        })
        document.body.innerHTML = itemList
    }, 500)
}

// új elem hozzáadása
const addItem = (item) => {
    // nem adható hozzá ugyanaz mégegyszer
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (items.includes(item)) {
                reject(`${item} already in the list`)
            }
            items.push(item)
            resolve()
        }, 1000)
    })
}

const asyncCall = async () => {
    try {
        //await addItem("pear")
        await addItem("orange")
        getItems()
    } catch(error) {
        alert(error)
    }
}

//asyncCall()

getItems()
addItem("orange")
getItems()





// --------------------------------------------------------
// Fetch használatakor

const getTodos = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()

        let todoList = ""
        data.forEach((item) => {
            todoList += `<li>${item.title}</li>`
        })
        document.body.innerHTML = todoList
    } catch(error) {
        console.error(error)
        alert(error)
    }
}

//getTodos()
