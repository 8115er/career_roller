document.addEventListener("DOMContentLoaded", function () {

    const displayObj = document.getElementById("fetched-data")


    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayObj.innerHTML = JSON.stringify(data);
        });
});



