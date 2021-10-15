// Implement the sum function here
function sum(a, b)
{
    if(isNaN(a) || isNaN(b) ) {
        return false;
    }
    
    return a + b;
}

module.exports = sum;