document.addEventListener("DOMContentLoaded", function () {

    const displayObj = document.getElementById("fetched-data")
    const randomButton = document.getElementById("random")

    randomButton.onclick = function () {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                displayObj.innerHTML = JSON.stringify(data[Math.floor(Math.random() * 13946)]);
            });
    }
});