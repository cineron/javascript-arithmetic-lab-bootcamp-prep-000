function add(a, b) {
    var add2 = a + b;
    return add2;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function inc(n) {
    n += 1;
    return n;
}

function dec(n) {
    return n -= 1;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}
