function scoreOnes(arr){
    return arr.filter(x => x === 1).length;
}

function scoreTwos(arr){
    return 2 * arr.filter(x => x === 2).length;
}

function scoreThrees(arr){
    return 3 * arr.filter(x => x === 3).length;
}

function scoreFours(arr){
    return 4 * arr.filter(x => x === 4).length;
}

function scoreFives(arr){
    return 5 * arr.filter(x => x === 5).length;
}

function scoreSixes(arr){
    return 6 * arr.filter(x => x === 6).length;
}

function sum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function scoreDoppio(arr){
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length < 5){
        return 10;
    } else {
        return 0;
    }
}

function scoreDueDoppi(arr){
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length < 4){
        return 20;
    } else {
        return 0;
    }
}

function scoreTriplo(arr){ 
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length < 4){
        if(arr.filter((value, index, t) => t.indexOf (value) === index).length <= 2){
            return sum(arr);
        } else {

        }
            var a = arr.filter((value, index, t) => t.indexOf (value) === index)[0];
            var b = arr.filter((value, index, t) => t.indexOf (value) === index)[1];
            var ca = 0;
            var cb = 0;
            var cc = 0;

            for(var i = 0; i < arr.length; i++){
                if(arr[i] === a){
                    ca += 1;
                } else if(arr[i] === b)  {
                    cb += 1;
                } else {
                    cc += 1;
                }
            }

            if((ca === 3) || (cb === 3) || (cc === 3)){
                return sum(arr);
            }
    }

    return 0;
}

function scoreQuadruplo(arr){ 
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length < 3){
        var t = arr[0];
        var a = 0;
        var b = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === t){
                a += 1;
            } else {
                b += 1;
            }
        }

        if((a === 4) || (b === 4)){
            return sum(arr);
        } 
    }

    return 0;
}

function scoreFull(arr){ 
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length === 2){
        var t = arr[0];
        var x = 0;
        var y = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === t){
                x += 1;
            } else {
                y += 1;
            }
        }

        if(((x === 3) && (y === 2)) || ((y === 3) && (x === 2))){
            return 25;
        } 
    }

    return 0;
}

function scoreScalaMinima(arr){ 

    if(arr.filter((value, index, t) => t.indexOf (value) === index).length >= 4){
        arr.sort();
        arr = arr.filter((value, index, t) => t.indexOf (value) === index);
            for(var i = 0; i < arr.length-1; i++){
                if(arr[i] - arr[i+1] !== -1){
                    return 0;
                }
            }
        return 30;
    }

    return 0;
        
}

function scoreScalaMassima(arr){
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length === 5){
        arr.sort();
        for(var i = 0; i < arr.length-1; i++){
            if(arr[i] - arr[i+1] !== -1){
                return 0;
            }
        }
        return 40;
    }

    return 0;
}

function scoreYahtzee(arr){
    if(arr.filter((value, index, t) => t.indexOf (value) === index).length === 1){
        return 50;
    } 
        return 0;
}

export {scoreOnes, 
        scoreTwos, 
        scoreThrees, 
        scoreFours, 
        scoreFives, 
        scoreSixes, 
        sum, 
        scoreDoppio,
        scoreDueDoppi, 
        scoreTriplo,
        scoreQuadruplo,
        scoreFull, 
        scoreScalaMinima,
        scoreScalaMassima,
        scoreYahtzee};

