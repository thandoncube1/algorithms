// Create an algorithm that tells you where an element should be
// placed in an array of strings or integers.
// Python implementation of the bisect_left method.

function bisect_left(a_list, target) {
    let first = 0,
    last = a_list.length - 1;

    while (first <= last) {
        let midpoint = Math.floor((last + first) / 2);
        if (target === a_list[midpoint]) {
            return midpoint;
        } else {
            if (target < a_list[midpoint]) {
                last = midpoint - 1;
            } else {
                first = midpoint + 1;
            }
        }
    }

   return first;
}

function main() {
    let collection = [1, 2, 4, 8, 10, 34, 45, 51, 53];

    // Call the method bisect_left
    let result = bisect_left.apply(null, [collection, 80]);
    console.log("Result: ", result);
};

module.exports = bisect_left;