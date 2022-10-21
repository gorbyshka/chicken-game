const chicken = document.getElementById("chicken");
const egg = document.getElementById("egg");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (chicken.classList != "jump") {
        chicken.classList.add("jump")
    }

    setTimeout(function () {
        chicken.classList.remove("jump")
    }, 600)
}

let isAlive = setInterval(function () {
    let chickenTOP = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
    let eggLEFT = parseInt(window.getComputedStyle(egg).getPropertyValue("left"));

    if (eggLEFT < 50 && eggLEFT > 0 && chickenTOP >= 140) {
        alert('ЛОХ')
    }
}, 5)