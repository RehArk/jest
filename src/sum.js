// Implement the sum function here

//sum function
function sum(a, b)
{
    if(isNaN(a) || isNaN(b) ) {
        return false;
    }

    return a + b;
}

//multiply function
function multiply(a, b)
{
    if(isNaN(a) || isNaN(b) ) {
        return false;
    }
    
    return a * b;
}

function modulo(number)
{
    let r = '';

    if(number % 3 == 0){
        r += 'Fizz'; 
    }

    if(number % 5 == 0){
        r += 'Buzz'; 
    }

    if(r == '') {
        return number;
    }

    return r;
}

function romainNumber(number)
{
    let latin = '';
    let symboles = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]

    symboles.forEach((symbole, i) => {

        while(number >= symbole[0])
        {
            number -= symbole[0];
            latin += symbole[1];
        }

    });

    return latin;
}

module.exports = {sum, multiply, modulo, romainNumber};
