
// C = 20, S = 21, D = 22, H = 23
var suits = [20,21,21,20];
// J = 11, Q = 12, K = 13, A = 14
var values = [10,10,9,9];



function isPair(values) {
    var counts = [];
    for(var i = 0; i <= values.length; i++) {
        if(counts[values[i]] === undefined) {
            counts[values[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

function isTwoPair(values) {
    
}