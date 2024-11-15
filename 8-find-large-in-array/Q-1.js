/**
 * Write a function that finds and prints the maximum element in an
 * array of numbers.
 * Input: Array of Numbers
 * Return: Biggest Number
 * Example: [3,6,7,8,9] =>9
 * 
 */


function method(array){
    let bignumber = array[0]
for(i=1; i<=array.length;i++){
    if(array[i]>bignumber){
        bignumber = array[i]
    }
}
return bignumber
}

console.log(method([2,3,4,5]))