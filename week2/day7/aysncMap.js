// I : a string
// O : an array of every possible anagrams
// E : none
// C : none

const asyncMap = function(tasks, callback) {

    let resultsArray = [];
    let resultsCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        (function (i) {
            tasks[i](function (val) {
            resultsArray[i] = val;
            resultsCount++;
        if (resultsCount === tasks.length) {
            callback(resultsArray);
        }
    });
    })(i);
}};