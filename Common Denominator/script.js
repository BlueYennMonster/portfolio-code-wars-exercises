//Console.log shortcut

function c(...e){
    console.log(...e);
}

// ---

/*

Find the common denominator in a given array and return the denominators plus the changed numerators

*/

function convertFrac(lst){

    //strip out denominators
    //for loop the denominators, testing whether a mod b === 0, if not acc++ and try again
    //Once the number can be modded by all denominators, you have the common denominator
    //Divide the common denominator by each denominator in a loop to see the steps required for each
    //Multiply each denominator and numerator in a postion by the steps required

    let denominators = [];
    let multiply = [];
    let common = 1;
    let returnString = '';

    for (let i = 0; i < lst.length; i++){
        denominators.push(lst[i][1]);
    }

    for(let i = 0; i < denominators.length;){
        if(common % denominators[i] !== 0){
            common++;
            i = 0;
        } else {
            i++;
        }
    }

    for(let i = 0; i < denominators.length; i++){
        multiply.push(common / denominators[i]);
    }

    for(let i = 0; i < denominators.length; i++){
        returnString = returnString + '('+lst[i][0] * multiply[i]+','+ common +')';
    }

    return returnString;

}

c(convertFrac([[1,2], [2,4], [2,3]]));