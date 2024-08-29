const bisect_left = require("./binarySearch");

function binarySearch(collection, target) {
    let index = bisect_left(collection, target);
    if (index <= collection.length && collection[index] === target) {
        return true;
    } else {
        return false;
    }
}

(function main() {
    let collection = [1, 2, 4, 8, 10, 34, 45, 51, 53];
    // run the binary_search
    let result = binarySearch.bind(null, collection, 80);
    console.log("Result: ", result(), "\nCollection: ", collection);
})();