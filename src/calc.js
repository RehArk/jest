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

module.exports = {sum, multiply};
