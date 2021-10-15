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

module.exports = {romainNumber};