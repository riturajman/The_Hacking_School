// levelOne() is called a high-order function because
// it accepts another function as its parameter.
function levelOne(value, callback) {
    var newScore = value + 5;
    callback(newScore);
}
// Please note that it is not mandatory to reference the callback function (line #3) as callback, it is named so just for better understanding.
function startGame() {
    var currentScore = 5;
    console.log('Game Started! Current score is ' + currentScore);
        // Here the second parameter we're passing to levelOne is the
        // callback function, i.e., a function that gets passed as a parameter.
        levelOne(currentScore, function (levelOneReturnedValue) {
            console.log('Level One reached! New score is ' + levelOneReturnedValue);
        });
}
startGame();