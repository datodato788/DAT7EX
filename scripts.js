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
function ddd() {
    navigator.mediaDevices.enumerateDevices()
        .then(function (devices) {
            let audioDevices = devices.filter(device => device.kind === 'audioinput');
            return navigator.mediaDevices.getUserMedia({ audio: { deviceId: audioDevices[0]?.deviceId || undefined } });
        })
        .then(function (stream) {
            console.log("აუდიოზე დაშვება ნებადართულია.");
        })
        .catch(function (err) {
            console.error("დაშვება უარყოფილია ან მოხდა შეცდომა: ", err);
        });
}

ddd();
    const titles = ["DAT7EX", "DAT_7EX", "DATO"]
    let index = 0;


const dynamic = () => {
    document.getElementById("dynamicTitle").innerText = titles[index]
    index = (index + 1) % titles.length

}
setInterval(dynamic, 50)