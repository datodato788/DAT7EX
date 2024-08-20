
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
// --------------

let audioo = "yes"
// title ანუ რო იცვლებოდეს
const titles = ["DAT7EX", "DAT_7EX", "DATO", "D7EX"]
let index = 0;


const dynamic = () => {
    document.getElementById("dynamicTitle").innerText = titles[index]
    index = (index + 1) % titles.length

}
setInterval(dynamic, 50)

// <!-- --------- -->
fetch("https://discord.com/api/guilds/1273294291518619749/widget.json")
    .then((e) => { return e.json() })
    .then((user) => {

        // სახელს აჭირს ანუ ასუფთავებს

        const nameChecker = (name) => {
            if (name.slice(-1) == "-" || name.slice(-1) == ".") {
                if (name.slice(-2) == "-." || name.slice(-2) == ".-") {
                    document.getElementById("names").innerHTML = name.slice(0, -2)

                }
                else {
                    document.getElementById("names").innerHTML = name.slice(0, -1)

                }

            }
            else {
                document.getElementById("names").innerHTML = name

            }
        }
        // <!-- --------- -->

        // სახელს ამოწმებს და ამოქმედებს ბრძანებებს
        const nameSimboloChecker = (name) => {

            if (name.slice(-2) == "-.") {
                document.getElementById("myVideo").style.display = "none"
                document.getElementById("icons").style.display = "none";
                document.getElementById("NAME").style.margin = "0px 0px 70px 0px"
                document.getElementById("body").style.backgroundImage = 'url("/!MORE/BluePurple.webp")'



            }
            else if (name.slice(-2) == "-,") {
                document.getElementById("icons").style.display = "none";
                document.getElementById("NAME").style.margin = "0px 0px 70px 0px"
                audioo = "no"
                document.getElementById("body").style.backgroundImage = 'url("/!MORE/BluePurple.webp")'


            }
            else if (name.slice(-2) == ".,") {
                document.getElementById("myVideo").style.display = "none"
                audioo = "no"

            }
            else if (name.slice(-3) == "-.,") {
                document.getElementById("myVideo").style.display = "none"
                document.getElementById("icons").style.display = "none";
                document.getElementById("NAME").style.margin = "0px 0px 70px 0px"
                audioo = "no"
                document.getElementById("body").style.backgroundImage = 'url("/!MORE/BluePurple.webp")'

            }
            // --
            else if (name.slice(-1) == "-") {
                document.getElementById("icons").style.display = "none";
                document.getElementById("NAME").style.margin = "0px 0px 70px 0px"

            } else if (name.slice(-1) == ".") {
                document.getElementById("myVideo").style.display = "none"
            }
            else if (name.slice(-1) == ",") {
                audioo = "no"

            }
            // else{
            //     document.getElementById("body").style.backgroundImage = 'url("/!MORE/BluePurple.webp")'
            //     document.getElementById("myVideo").style.display = "none"

            // }
        }



        // <!-- --------- -->
        // თუ არის ონლაინზე
        if (user && user.members[0]) {

            localStorage.setItem("name", user.members[0].username)
            // თუ არის ონლაინზე და არარის localStorage
            if (!localStorage.getItem("name")) {
                localStorage.setItem("name", user.members[0].username)
                nameChecker(localStorage.getItem("name"))
                nameSimboloChecker(localStorage.getItem("name"))


            }

            // თუ არის ონლაინზე და არის localStorage
            else if (!!localStorage.getItem("name")) {
                localStorage.setItem("name", user.members[0].username)
                nameChecker(localStorage.getItem("name"))
                nameSimboloChecker(localStorage.getItem("name"))



            }

        }
        // თუ არარის ონლაინზე 
        else {
            // თუ არარის ონლაინზე და არის localStorage
            if (!!localStorage.getItem("name")) {
                nameChecker(localStorage.getItem("name"))
                nameSimboloChecker(localStorage.getItem("name"))


            }

            // თუ არარის ონლაინზე და არარის localStorage
            else {
                nameChecker("DAT_7EX")
                nameSimboloChecker("DAT_7EX")
            }

        }


        // nameChecker(user.members[0].username)
        // nameSimboloChecker(user.members[0].username)
        // სიმღერის ლინკი ანუ რომელი უნდა ჩაირთოს 


        // <!-- --------- -->
    })

function accept() {

    if (audioo == "yes") {
        const audio = new Audio()

        const d = () => {
            if (!audio.paused) {

            }
            else {
                audio.src = "!more/sound.mp3"

                audio.play()

            }

        }
        d()
        const play = document.getElementById("play")
        play.classList.toggle("accepted")
    } else if (audioo == "no") {
        const play = document.getElementById("play")
        play.classList.toggle("accepted")
    }
}


function load() {
    const load = document.getElementById("load").style.display = "none"
}