module.exports = function toReadable(number) {

    let numberCopy = number;
    numberCopy = String(numberCopy);

    

    if (numberCopy.length == 1) {
        if(numberCopy[0] == '0') {
            return 'zero';
        }
        return singleNumber(numberCopy[0]);
    }
    if (number >= 10 && number <= 19) {
        return tenToTwenty(numberCopy);
    }
    if (number >= 20 && number <= 99) {
        if (numberCopy[1] == '0') {
            switch (numberCopy) {
                case '20':
                    return 'twenty';
                    break;
                case '30':
                    return 'thirty';
                    break;
                case '40':
                    return 'forty';
                    break;
                case '50':
                    return 'fifty';
                    break;
                case '60':
                    return 'sixty';
                    break;
                case '70':
                    return 'seventy';
                    break;
                case '80':
                    return 'eighty';
                    break;
                case '90':
                    return 'ninety';
                    break;
            }

        }
        else {
            return `${twentyToHundred(numberCopy[0])} ${singleNumber(numberCopy[numberCopy.length - 1])}`
        }
    }

    if (number >= 100 && number <= 999) {
        if(numberCopy[1] == '0' && numberCopy[2] == '0') {
            return hundredToThousand(numberCopy[0]);
        }
        if(numberCopy[1] == '0' && numberCopy[2] != '0') {
            return `${hundredToThousand(numberCopy[0])} ${singleNumber(numberCopy[2])}`;
        }
        if(numberCopy[1] == '1') {
            let tenTwenty = numberCopy[1] + numberCopy[2];
            return `${hundredToThousand(numberCopy[0])} ${tenToTwenty(tenTwenty)}`
        }
        if(numberCopy[1] != '0' && numberCopy[2] == '0') {
            return `${hundredToThousand(numberCopy[0])} ${twentyToHundred(numberCopy[1])}`
        }
        else {
            return `${hundredToThousand(numberCopy[0])} ${twentyToHundred(numberCopy[1])} ${singleNumber(numberCopy[2])}`
        }
    }




    function singleNumber(x) {
        switch (x) {
            case '0':
                return zero;
                break;
            case '1':
                return 'one';
                break;
            case '2':
                return 'two';
                break;
            case '3':
                return 'three';
                break;
            case '4':
                return 'four';
                break;
            case '5':
                return 'five';
                break;
            case '6':
                return 'six';
                break;
            case '7':
                return 'seven';
                break;
            case '8':
                return 'eight';
                break;
            case '9':
                return 'nine';
                break;
        }
    }

    function twentyToHundred(x) {
        switch (x) {
            case '2':
                return 'twenty';
                break;
            case '3':
                return 'thirty';
                break;
            case '4':
                return 'forty';
                break;
            case '5':
                return 'fifty';
                break;
            case '6':
                return 'sixty';
                break;
            case '7':
                return 'seventy';
                break;
            case '8':
                return 'eighty';
                break;
            case '9':
                return 'ninety';
                break;
        }
    }

    function tenToTwenty(x) {
        switch (x) {
            case '10':
                return 'ten';
                break;
            case '11':
                return 'eleven';
                break;
            case '12':
                return 'twelve';
                break;
            case '13':
                return 'thirteen';
                break;
            case '14':
                return 'fourteen';
                break;
            case '15':
                return 'fifteen';
                break;
            case '16':
                return 'sixteen';
                break;
            case '17':
                return 'seventeen';
                break;
            case '18':
                return 'eighteen';
                break;
            case '19':
                return 'nineteen';
                break;
        }
    }

    function hundredToThousand(x) {
        switch (x) {
            case '1':
                return 'one hundred';
                break;
            case '2':
                return 'two hundred';
                break;
            case '3':
                return 'three hundred';
                break;
            case '4':
                return 'four hundred';
                break;
            case '5':
                return 'five hundred';
                break;
            case '6':
                return 'six hundred';
                break;
            case '7':
                return 'seven hundred';
                break;
            case '8':
                return 'eight hundred';
                break;
            case '9':
                return 'nine hundred';
                break;
        }
    }
}
