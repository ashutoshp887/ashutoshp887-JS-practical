/**
 * Write a function that generates and prints a multiplication table for a 
 * given number up to a specified range
 * Input : 2 Positive Number
 *   Table
 *   Table till
 * Return: Nothing
 * Example:
 * 4,10 => 4, 8,12 .....40 
 */

function number(start,end){
for(i=1;i<=end;i++){
    let result = i* start
    console.log(`${start} * ${i} = ${i * start}`)
}
}
console.log(number(2,10))