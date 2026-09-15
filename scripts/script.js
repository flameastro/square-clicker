const pointsText = document.querySelector("#points")
let points = 0

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
    const posX = Math.floor(Math.random() * (maxHeight - 200))
    const posY = Math.floor(Math.random() * (maxWidth - 200))

    // setting both the posX and posY
    div.style.top = `${posX}px`
    div.style.left = `${posY}px`

    return div
}

function createDiv() {
    // getting elements
    const body = document.body
    const div = document.createElement("div")

    // add styles
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


