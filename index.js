const container = document.querySelector(".container")
const clear = document.querySelector(".clear")
const range = document.querySelector("input")
const inputText = document.querySelector(".input-text")
const blackButton = document.querySelector(".black")
const colorButton = document.querySelector(".color")

range.setAttribute("value", "16")
let numb = Number(range.value)
let size = numb*numb + 1
inputText.textContent = `${numb}x${numb}`
let black = true
let color = false

blackButton.addEventListener('click', () => {
    black = true
    color = false
})
colorButton.addEventListener('click', () => {
    black = false
    color = true
})

range.addEventListener('click', () => {
    range.setAttribute("value", `${range.value}`)
    numb = Number(range.value)
    size = numb*numb + 1
    clearSquares()
    removeSquares()
    grid()
    xddd()
})

range.addEventListener('click', () => {
    inputText.textContent = `${numb}x${numb}`
    
})

function grid(){   
    for(let i=1; i<size; i++){
        const addSquare = document.createElement("div")
        let num = i
        addSquare.classList.add("square")
        addSquare.id = `${num}`
        container.appendChild(addSquare) 
        container.setAttribute('style', `grid-template-columns: repeat(${numb}, 1fr)`)
        
    } 
}

grid();
xddd()  

clear.addEventListener('click', clearSquares)

function clearSquares(){
    squares.forEach(square => square.removeAttribute('style', 'background-color: black'))
}

function removeSquares(){
    container.innerHTML = ""
}

function coloring(){
    squares = document.querySelectorAll(".square")
    squares.forEach(square => square.addEventListener("mouseover", () => {
        if (black == false && color == true){
            square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1},${Math.floor(Math.random()*255)+1})`
        }
        else if(black == true && color == false){
            square.style.backgroundColor = 'black'
        }
    }))
}



function xddd(){
    container.addEventListener("mousedown", coloring)
}