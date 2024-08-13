//  


const audio = new Audio()

function accept() {


    const d = () => {
        if (!audio.paused) {

        }
        else {
            audio.src = "!more/m.mp3"

            audio.play()

        }

    }
    d()
    const play = document.getElementById("play")
    play.classList.toggle("accepted")

}
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const titles = ["DAT7EX", "DAT_7EX", "DATO", "D7EX"]
let index = 0;


const dynamic = () => {
    document.getElementById("dynamicTitle").innerText = titles[index]
    index = (index + 1) % titles.length

}
setInterval(dynamic, 50)