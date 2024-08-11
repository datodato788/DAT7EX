//  


const audio = new Audio()

function accept() {


    const d = () => {
        if (!audio.paused) {
            console.log("N1")

        }
        else {
            console.log("N2")
            audio.src = "!more/m.mp3"

            audio.play()

        }

    }
    d()
const play = document.getElementById("play")
play.classList.toggle("accepted")

}
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
