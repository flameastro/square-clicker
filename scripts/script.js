const pointsText = document.querySelector("#points")
let points = 0
const body = document.body



// button theme
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
        randomPos(div)
        updatePoints(points)
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


div = createDiv()
interact(div)
changeColor()

toggleTheme()
