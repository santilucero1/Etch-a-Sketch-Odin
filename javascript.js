const container = document.querySelector(".grid");
var isMouseDown = false;
const rainbow = document.querySelector(".rainbow")
var isRainbow = false;
const pencil = document.querySelector(".pencil");
const restart = document.querySelector(".restart")



      // Create the grid
      for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
          //capture the values of i and j
          (function(rowIndex, colIndex) {
            // Crete a celd
            var cell = document.createElement('div');
            cell.className = 'cell';

            // Add the event listener to each cell and check if the mouse is down,up or moving.
            cell.addEventListener('mousedown', function() {
              console.log('Clic en la casilla ' + (rowIndex + 1) + 'x' + (colIndex + 1));
              isMouseDown = true;
              //call the state function
              state(cell);
              //cell.classList.add("black")
            });

            cell.addEventListener("mouseup",function(){
                isMouseDown=false;
            })

            cell.addEventListener("mousemove",function(){
                if(isMouseDown==true){
                  state(cell);
                }
            })

            // Add the cell to the container
            container.appendChild(cell);

          })(i, j); //call the function 
        }
        container.appendChild(document.createElement('br')); //to remove the line jump
      }

      function state(cell){

        if (isRainbow) {
          var color = generateRandomColor();

          cell.style.backgroundColor = color;
        }

        else {
          cell.classList.add("black")
        }

      }

      rainbow.addEventListener("click", function() {
        isRainbow = true;
        console.log("rainbow is true")
      })

      pencil.addEventListener("click", function() {
        isRainbow = false;
        console.log("rainbow is false")
      })

      function generateRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
    
        // Convert to hexadecimal value
        var Hcolor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    
        return Hcolor;
    }
    
    function componentToHex(component) {
        var hex = component.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    restart.addEventListener("click",function (){
      window.location.reload();
    })