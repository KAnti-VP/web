// fetch("https://vvri.pythonanywhere.com/api/courses")
fetch("http://127.0.0.1:5000/api/api/courses", {
    method: 'GET', 
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
      },
    // secretkey : 'Vasvari12'
})
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log("course id : ", item.id, ", course name: ", item.name)
            console.log("students: ", (item.students == undefined) ? " - " : "")
            if (item.students) {
                item.students.forEach(st => console.log("         ", st.id, st.name))
            }
        })
        //console.log(data)
    })
    .catch(error => console.error(error))