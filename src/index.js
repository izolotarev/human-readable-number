module.exports = function toReadable(number) {
    let beforeTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function beforeHundred(n) {
        console.log(`n: ${n}`);
        if (n < 20) {
            return beforeTwenty[n];
        } else if (n >= 20 && n < 100) {
            let numStr = String(n);
            let secondDigit = +numStr[0];
            let firstDigit = +numStr[1];

            if (n % 10 == 0) {
                return tens[secondDigit];
            } else {
                return `${tens[secondDigit]} ${beforeTwenty[firstDigit]}`;
            }
        }
    }

    if (number >= 0 && number < 100) {
        return beforeHundred(number);
    } else {
        let numStr = String(number);
        let thirdDigit = +numStr[0];
        let secondDigit = +numStr[1];
        let firstDigit = +numStr[2];
        let secondAndFirstDigit = +numStr.substring(1, 3);

        // console.log(`third: ${thirdDigit}`);
        // console.log(`secondFirst: ${secondAndFirstDigit}`);
        //console.log(beforeHundred(secondAndFirstDigit));

        if (secondDigit == 0 && firstDigit == 0) {
            return `${beforeTwenty[thirdDigit]} hundred`;
        }

        return `${beforeTwenty[thirdDigit]} hundred ${beforeHundred(
            secondAndFirstDigit
        )}`;
    }
};

/*
const toReadable = (number) => {
    let beforeTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifthteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function beforeHundred(n) {
        console.log(`n: ${n}`);
        if (n < 20) {
            return beforeTwenty[n];
        } else if (n >= 20 && n < 100) {
            let numStr = String(n);
            let secondDigit = +numStr[0];
            let firstDigit = +numStr[1];

            if (n % 10 == 0) {
                return tens[secondDigit];
            } else {
                return `${tens[secondDigit]} ${beforeTwenty[firstDigit]}`;
            }
        }
    }

    if (number >= 0 && number < 100) {
        return beforeHundred(number);
    } else {
        let numStr = String(number);
        let thirdDigit = +numStr[0];
        let secondDigit = +numStr[1];
        let firstDigit = +numStr[2];
        let secondAndFirstDigit = +numStr.substring(1, 3);

        // console.log(`third: ${thirdDigit}`);
        // console.log(`secondFirst: ${secondAndFirstDigit}`);
        //console.log(beforeHundred(secondAndFirstDigit));

        if (secondDigit == 0 && firstDigit == 0) {
            return `${beforeTwenty[thirdDigit]} hundred`;
        }

        return `${beforeTwenty[thirdDigit]} hundred ${beforeHundred(
            secondAndFirstDigit
        )}`;
    }
};

//console.log(toReadable(101));

// for (let i = 0; i < 99; i++) {

// }
*/
