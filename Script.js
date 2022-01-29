document.addEventListener("DOMContentLoaded", function () {

    const displayDiv = document.getElementById("fetched-data")


    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            for (const dataKey in data) {
                displayDiv.innerHTML +=dataKey + " : " + data[dataKey] + "<br>"
            }
        });
});



