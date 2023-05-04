function removeFirstAndLast(s) {

    var word = 'sunday';

    if (word) {
        return word;
    } else if (word = 'monday') {
        word = word.slice(1)
        return word;
    } else if (word = 'tuesday') {
        word = (word.slice(1) && (word.slice(0, word.length - 1)))
        return word;
    }

    // return word;
}

module.exports = {
    removeFirstAndLast
}