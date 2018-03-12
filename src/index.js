module.exports = function getZerosCount(number, base) {
    let pow, trailingZeros = number;

    for (let prime = 2; prime <= base; prime++) {
        if (base % prime == 0) {
            for (pow = 0; base % prime == 0; pow++)
                base /= prime;

            let countDiv = 0, tempCountDiv = Math.floor(number / prime);
            while (tempCountDiv > 0) {
                countDiv += tempCountDiv;
                tempCountDiv = Math.floor(tempCountDiv / prime);
            }

            trailingZeros = Math.min(trailingZeros, Math.floor(countDiv / pow));
        }
    }
    return trailingZeros;
}
