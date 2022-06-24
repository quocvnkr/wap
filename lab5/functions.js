// Question 1

function sum(intArr) {
    const filtered = intArr.filter(function (element, idx, array) {
        return element > 20;
    })
    return filtered.reduce(function (prevValue, element, idx, array) {
        return prevValue + element
    })
}

const q1Arr = [15, 25, 35, 40];
const q1Result = sum(q1Arr);
console.log(q1Result);

// Question 2

const getNewArray = function (strArr) {
    return strArr.filter(function (element, idx, arr) {
        return (element.length >= 5) && (element.includes("a"));
    })
}

const q2Arr = ["grape", "cherry", "apple", "peach", "blueberry", "mango"];
console.log(getNewArray(q2Arr));