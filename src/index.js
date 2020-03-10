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
                if(element === '00') {
                    int.push('')
                } else if(element === '10') {
                    int.push('.')
                    console.log(int)
                } else if(element === '11') {
                    int.push('-')
                }
            })
            
            intArr.push(int.join('').trim())
        }
    });
    
    string = []
    for(let i = 0; i < intArr.length; i++) {
        if(intArr[i] === ' ') {
            string.push(' ')
        } else {
            string.push(MORSE_TABLE[intArr[i]])
        }
        
    }

    return string.join('')
}

module.exports = {
    decode
}