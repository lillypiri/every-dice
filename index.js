function roll (sides) {
    if (typeof sides == "undefined") sides = 6;
    return Math.ceil(Math.random() * sides);
}

module.exports = roll;
