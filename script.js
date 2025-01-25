secondContainer = document.querySelector(".second-container");
buttonSize = document.querySelector("#btn-size");
buttonColor = document.querySelector("#btn-color");
buttonBlack = document.querySelector("#btn-black");
buttonReset = document.querySelector("#btn-reset");
gridInfo = document.querySelector("#info");
gridSize = document.querySelector("#size");


// This variable value will be use in other functions to get the exact number of cells inside the container.
let sizeOfSquare = 0;


//Add Event Listener to display the number of squares per side.
buttonSize.addEventListener("click", () => {

    getSize();
    createGrid(sizeOfSquare);
  
})

// Add Event Listener to generate random color on each cell.
buttonColor.addEventListener("click", () => {
    
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style["background-color"] = getRandomColor();
            
        })


    })
});

//Add Event Listener to generate black color on each cell
buttonBlack.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style["background-color"] = getBlackColor();
        } )
        
    })
})

//Add Event Listener to reset all color to its default color on each cell.
buttonReset.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");

   cells.forEach(cell => {
    cell.style["background-color"] = getColorReset() 
   })
})



//Function to get the size of grid from the user using prompt and to display the grid-size. 
function getSize() {

 // Important! : This will ensure all cells that are previously created are removed when this function is invoked again. 
 // Example, if you input 12x12 squares or any number. it will store the value to the sizeOfSquare variable above. then if
 // you invoked again this function with a value < 0 and value > 100, it wont generate broken grid cells. 
    sizeOfSquare = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let size = prompt("Choose 1-100 for the number of squares per side for the new grid");
    size = Number(size)

    document.documentElement.style.setProperty("--size", size);


    if ( !isNaN(size) && size > 0 && size <= 100) {
        gridInfo.textContent = `The layout of your grid is:`;
        gridSize.style["font-weight"] = "bold";
        gridSize.style["font-size"] = "1.5rem";
        gridSize.textContent = ` ${size} x ${size} squares`;

        //This will store the number value to the sizeOfSquare variable.
        sizeOfSquare = size;
   
      
    } else {
        alert("Please choose a valid number from 1-100 only!");
    }
}

//Function to generated cells inside the grid container.

function createGrid(sizeOfSquare) {

    secondContainer.innerHTML = "";

    for (let i = 0; i < sizeOfSquare * sizeOfSquare; i++) {
        const divCell = document.createElement("div");
        divCell.classList.add("cell")
        secondContainer.appendChild(divCell);
    }

 
}



//Function to get random color for the grids.
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

//Function to get black color for the grids.
function getBlackColor() {
    return "rgb(0, 0, 0)";
}


// Function to get reset color for the grids.
function getColorReset() {
    return "rgb(246, 199, 148)";
}