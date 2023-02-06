function verifyNumeric(input){
    if(typeof(input) != 'number'){
        throw "Input is not a number!";
    }
}

function add7(input){
    verifyNumeric(input);
    return input+7;
}

function multiply(a, b){
    verifyNumeric(a);
    verifyNumeric(b);
    return a*b;
}

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

function lastLetter(s){
    return s[s.length-1];
}