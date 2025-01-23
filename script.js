secondContainer = document.querySelector(".second-container");
buttonSize = document.querySelector("#btn-size");
buttonColor = document.querySelector("#btn-color");
buttonBlack = document.querySelector("#btn-black");
buttonReset = document.querySelector("#btn-reset");
gridInfo = document.querySelector("#info");
gridSize = document.querySelector("#size");



//Add Event Listener to display the number of squares per side.
buttonSize.addEventListener("click", () => {
    getSize();
})

//Function to get random color for the grids.
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Function to get black color for the grids.
function getBlackColor() {
    return rgb(0, 0, 0);
}

//Function to get the size of grid from the user using prompt and to display the grid-size. 
function getSize() {
    let size = prompt("Choose 1-100 for the number of squares per side for the new grid");
    size = Number(size)
    if ( !isNaN(size) && size > 0 && size < 100) {
        gridInfo.textContent = `The layout of your grid is:`;
        gridSize.style["font-weight"] = "bold";
        gridSize.style["font-size"] = "1.5rem"
        gridSize.textContent = ` ${size} x ${size} squares`;
        
    } else {
        alert("Please choose a valid number from 1-100 only!");
    }
}