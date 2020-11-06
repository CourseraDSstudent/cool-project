const add = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

const subtract = (a, b) => {
    return a - b;
}

const divide = (a, b) => {
    if (b == 0) {
	throw Error("Divide by 0 is not permitted");
    }
    return a / b;
}
