function nacci() {
    var number = 0,
        newNum = 1;

    function fibnacci() {
        var temp = newNum;
        console.log(newNum);
        newNum = number + newNum;
        number = temp;
        return newNum;
    }
    return fibnacci;
}

var fibCount = nacci();

for (let i = 0; i < 10; i++) {
    fibCount()
}