function wave(str) {
    let result = [];
    let i = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        result.push(Array.from(str, (c, j) => i === j ? c.toUpperCase() : c).join(''));
    }
    return result;
}