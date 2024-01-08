const container = document.querySelector(".grid");
var isMouseDown = false;


      // Crea la grilla
      for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 16; j++) {
          // Crea una función inmediatamente invocada para capturar los valores de i y j
          (function(rowIndex, colIndex) {
            // Crea una celda
            var cell = document.createElement('div');
            cell.className = 'cell';

            // Agrega el evento de clic a cada celda
            cell.addEventListener('mousedown', function() {
              console.log('Clic en la casilla ' + (rowIndex + 1) + 'x' + (colIndex + 1));
              isMouseDown = true;
              cell.classList.add("black")
              // Puedes realizar acciones específicas cuando se hace clic en una casilla
            });


            cell.addEventListener("mouseup",function(){
                isMouseDown=false;
            })

            cell.addEventListener("mousemove",function(){
                if(isMouseDown==true){
                    cell.classList.add("black")
                }
            })
            // Agrega la celda al contenedor de la grilla
            container.appendChild(cell);
          })(i, j);
        }
        container.appendChild(document.createElement('br'));
      }