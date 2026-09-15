const pointsText = document.querySelector("#points")
let points = 0
const body = document.body

const lightColor = "#e3e3e3"
const darkColor = "#272727"
let mode = "light"

let buttonTheme = document.querySelector(".theme")

function toggleTheme() {
    let themeDiv = document.querySelector(".themeDiv")

    if (mode == "light") {
        body.style.backgroundColor = lightColor
        body.style.color = darkColor

        themeDiv.innerHTML = `
            <button class="theme">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
            </button>
        `
    } else {
        body.style.backgroundColor = darkColor
        body.style.color = lightColor

        themeDiv.innerHTML = `
            <button class="theme">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </button>
        `
    }

    mode = mode == "light" ? "dark" : "light"
    buttonTheme = document.querySelector(".theme")

    buttonTheme.addEventListener("click", () => {
        toggleTheme()
    })
}


function updatePoints() {
    points += 1
    pointsText.innerText = points

    return points
}

function randomPos(div) {
    // height and width
    const maxHeight = window.innerHeight
    const maxWidth = window.innerWidth

    // posX and posY
    const posX = Math.floor(Math.random() * (maxHeight - 200)) + 100
    const posY = Math.floor(Math.random() * (maxWidth - 200)) + 100

    // setting both the posX and posY
    div.style.top = `${posX}px`
    div.style.left = `${posY}px`

    return div
}

function createDiv() {
    // getting elements
    const div = document.createElement("div")

    // add styles
    div.setAttribute("id", "square")
    randomPos(div)

    // append on body
    body.appendChild(div)
    return div // returns the div
}

function interact(div) {
    // Generate new random position
    div.addEventListener("click", () => {
        explosion(div)
        updatePoints()
    })
}

function changeColor() {
    // getting getColor and color
    const getColor = document.querySelector("#color")
    const color = getColor.value

    // applying the styles
    div.style.backgroundColor = color
    div.style.boxShadow = `0 0 12px ${color}99`

    // repeat the code when getColor changes
    getColor.addEventListener("change", () => {
        changeColor()
    })
}


// Efeito de explosão
function explosion(div) {
    // getting square position
    const rect = div.getBoundingClientRect()

    // getting center of square
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // getting current color
    const color = document.querySelector("#color").value

    // creating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")

        // add particle class
        particle.classList.add("particle")

        // setting initial position
        particle.style.left = `${centerX}px`
        particle.style.top = `${centerY}px`

        // random direction
        const angle = Math.random() * Math.PI * 2
        const distance = Math.random() * 100 + 50

        // calculating X and Y
        const x = Math.cos(angle) * distance
        const y = Math.sin(angle) * distance

        // setting movement
        particle.style.setProperty("--x", `${x}px`)
        particle.style.setProperty("--y", `${y}px`)

        // setting particle color
        particle.style.backgroundColor = color
        particle.style.boxShadow = `0 0 8px ${color}`

        // append particle to body
        body.appendChild(particle)

        // remove particle after animation
        setTimeout(() => {
            particle.remove()
        }, 600)
    }

    // add explosion animation to square
    div.classList.add("exploding")

    // remove animation and generate new position
    setTimeout(() => {
        div.classList.remove("exploding")
        randomPos(div)
    }, 250)
}


div = createDiv()
interact(div)
changeColor()

toggleTheme()
