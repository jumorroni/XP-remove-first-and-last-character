function removeFirstAndLast(s) {

    let word = 'sunday';

    if (word = 'monday') {
        word = word.slice(1)
        return word;
    }
    if (word = 'tuesday') {
        word = (word.slice(1) && (word.slice(0, word.length - 1)))
        return word;
    }

    return word;
}

module.exports = {
    removeFirstAndLast
}