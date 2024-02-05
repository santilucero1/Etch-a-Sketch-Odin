//basic operations

function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b) {
    return a/b;
}

//variables

let a ="";
let b ="";
let o =""; //number 1, number 2, operator

function operate (a,b,o) {
    if(o=="+"){
        add(a,b)
    }

    else if (o=="-"){
        subtract(a,b)
    }

    else if (o=="*"){
        multiply(a,b)
    }

    else if (o=="/"){
        divide(a,b)
    }
}


let arrayN = []
let inputA = true;
let result;
var pElement = document.querySelector('.pdisplay');



document.addEventListener("click", (e) =>{

    if (e.target.tagName === 'BUTTON') {
        if(inputA){
            
            //if press any operator
            if (['+', '-', '*', '/', '='].includes(e.target.innerText)){
        
                o = e.target.innerText; //get operation
                pElement.textContent = a+o
                inputA = false; //next input
            }

            else if (e.target.innerText == "C"){
                a= a.slice(0, -1);
                pElement.textContent = a;
            }

            else {
                
            a = a+ e.target.innerText //concatenate
            pElement.textContent = a;
            //console.log(a)
            }
            
        
        }

        else{

            //if press any operator
            if (['+', '-', '*', '/', '='].includes(e.target.innerText)){
                
                //convert a and b to int
                a = parseInt(a)
                b = parseInt(b)

                //make the operations
                switch (o) {

                    case "+":
                    result = add(a, b);
                    console.log(result, "add");
                    break;

                    case "-":
                    result = subtract(a, b);
                    console.log(result, "substract");
                    break;

                    case "/":
                    result = divide(a, b);
                    console.log(result, "divide");
                    break;

                    case "*":
                    result = multiply(a, b);
                    console.log(result, "multiply");
                    break;
                    }
                    
            
                o = e.target.innerText; //get operation
                a = result;
                b = "";
            }

            else if (e.target.innerText == "C") {

                b= b.slice(0, -1);
                pElement.textContent = b;
            }
            
            else {
                b = b+ e.target.innerText //concatenate 
                console.log(b)}
                pElement.textContent = (a+o+b).replace('=', '');
            }
        }
}
)
//the numbers pressed will be saved in one array once at time
//then need to convert to string with Join method
