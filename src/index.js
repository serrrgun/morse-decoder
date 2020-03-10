const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = expr.match(/.{1,10}/g);
    
    intArr = [];
    
    arr.forEach(element => {
        if(element === '**********') {
            intArr.push(' ')
        } else {
            elem = element.match(/.{1,2}/g);

            let int = []
            
            elem.forEach(element => {
                switch (element) {
                    case '00':
                        int.push('')
                        break;
                    case '10':
                        int.push('.')
                        break;
                    case '11':
                        int.push('-')
                        break;
                }
            })
            
            intArr.push(int.join('').trim())
        }
    });
    
    stringArr = []

    intArr.forEach(elem => {
        if(elem  === ' ') {
            stringArr.push(' ')
        } else {
            stringArr.push(MORSE_TABLE[elem])
        }
    })
    return stringArr.join('')
}

module.exports = {
    decode
}