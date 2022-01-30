document.addEventListener("DOMContentLoaded", function () {

    const Title = document.getElementById("Title")
    const Province = document.getElementById("Province")
    const Description = document.getElementById("Description")

    const randomButton = document.getElementById("random")

    randomButton.onclick = function () {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                let currentRandom = data[Math.floor(Math.random() * 13946)]
                console.log(currentRandom)
                for (key in currentRandom) {
                    if (currentRandom.hasOwnProperty(key)) {
                        if(key == "Titel") {
                            Title.innerHTML =currentRandom[key];
                        } else if (key == "Province") {
                            Province.innerHTML = "Bundesland : " +currentRandom[key];
                        } else if (key == "Description"){
                            Description.innerHTML = currentRandom[key];
                        }
                    }
                }
            });
    }
});