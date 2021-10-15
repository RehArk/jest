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

module.exports = {modulo};