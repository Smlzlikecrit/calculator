// function appendNumber(element, number){
    
//     document.getElementById("output").appendChild(number);
//     console.log(number);
    
// }
document.getElementById("b9").onclick = function(){
    x = this.value;
    console.log(x);
}
// document.getElementById("myNewTaskList").appendChild(listItem);

function test(){
    console.log("fine");
    let p = document.getElementById("multiple").value;
    console.log(p);
    document.getElementById("output").innerHTML = p;

}

document.getElementById("button8").onclick = function(){
    const testValue = document.getElementById("button8").value;
    console.log(testValue);

}

function appendNumber(){
    const apNum = document.getElementById(this).value;
    console.log(apNum);
}
// number chosen = userInput
// const operands = ["+", "-", "/", "*"];
// for (i=0; i<operands.length; i++){
//     if (operands[i] == userInput){
        
//     }
// }

/*
-------------------------------------------------
---- Make global variable: ----
let currentValue = 0;
let previousValue = undefined;
let operator = undefined;

---- 




---- Updating variable "currentValue" ----
function UpdateCurrentValue(){
currentValue = onclick(getElementThatWasClickedOn.value) (could 'this' be used? 'onclick(this.value)' since this function will be called in many other button functions)
}

---- Checking Operators ----
function OperatorCheck(){
    switch (x = getElementThatWasClickedOn.value){
        case "/":
            let operator = "divide";                            placeholder*
            previousValue = currentValue;                   update the previousValue
            currentValue = undefined;                       set currentValue to undefined (not 0 because 0 is a value)
            (if used in calculate() then:
            sumValue = previousValue / currentValue;
            getElementById(output).innerHTML = sumValue;)
            break;
        case "*":
            operator = "multiple";
            previousValue = currentValue;
            currentValue = undefined;
            (if used in calculate() then:
            sumValue = previousValue / currentValue;
            getElementById(output).innerHTML = sumValue;)
            break;
        case "-":
            operator = "minus";
            previousValue = currentValue;
            currentValue = undefined;
            (if used in calculate() then:
            sumValue = previousValue - currentValue;
            getElementById(output).innerHTML = sumValue;)
            break;
        case "+":
            operator = "plus";
            previousValue = currentValue;
            currentValue = undefined;
            (if used in calculate() then:
            sumValue = previousValue + currentValue;
            getElementById(output).innerHTML = sumValue;)
            break;
        default:
            operator = undefined;
    }

    if (previousValue == "." && currentValue == "."){                       dont allow this to happen where 2x "." (maybe use !==)
        return "?";                                                         
    }
}

---- Checking number inputs ----


function NumbersValue(){
    let i = this.value;                         this.value of the button that was clicked, would 'this' work? Access parent element .value?
    let n = document.getElementById(output).textContent         saving current content of output to allow next line
    document.getElementById(output).innerHTML = n + i;
}








---- Updating Output Display ----
function UpdateDisplay(){
    previousValue = previousValue + CurrentValue (toString() needs to be used in the function)( dont know how to do this)
}

---- Equals button ----
function Compute(){
    document.getElementById(output).innerHTML = sumValue;               sumValue is in OperatorCheck not global .... = InputCheck(sumValue) ?
    operator = undefined;
    previousValue = currentValue;
    currentValue = undefined;
}
*/