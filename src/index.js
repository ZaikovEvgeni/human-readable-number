module.exports = function toReadable (number) {
  
    let str = '';
    number = String(number);
    
    for(let i = 0; i < number.length; i++) {
        if(number[i] == '0') {
            str = str + 'zerro ';
        }
        if(number[i] == '1') {
            str = str + 'one ';
        }
        if(number[i] == '2') {
            str = str + 'two ';
        }
        if(number[i] == '3') {
            str = str + 'three ';
        }
        if(number[i] == '4') {
            str = str + 'four ';
        }
        if(number[i] == '5') {
            str = str + 'five ';
        }
        if(number[i] == '6') {
            str = str + 'six ';
        }
        if(number[i] == '7') {
            str = str + 'seven ';
        }
        if(number[i] == '8') {
            str = str + 'eight ';
        }
        if(number[i] == '9') {
            str = str + 'nine ';
        }
        
    }

    return str;
}
