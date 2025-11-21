// Question no 1

// function currentFatw() {
//     let currentDate = new Date();

//     console.log(currentDate);
// }

// currentFatw()

// Question no 2

// function firstAndlastName() {
//     let firstName = "Muhammad";

//     let lastName = " Arman"

//     let concat = firstName + lastName;

//     console.log("User name: ",concat);
// }

// firstAndlastName()

// Question no 3

// function operator(){
//     let num1 = +prompt("Enter first number")
//     let num2 = +prompt("Enter second number")

//     let sum = num1 + num2
//    return console.log(sum);
// }

// operator()


// Practice calculator 4

// function getNumber(num){
//     let oper = document.getElementById("value")
//     oper += num;
// }
// function clearResult(){
//     let clear = document.getElementById("value")
//     clear.value = " "
// }

// function getResult(){
//     var result = document.getElementById("value");
//     result.value = eval(result.value);
// }

// Question no 4

// function onePlus(num1, num2, operator) {
//     let result;
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num1 / num2
//     } else {
//         result = "Invalid operator"
//     }
//     document.writeln("Result: " + result,"<br>")
//     return result;
// }
// onePlus(10, 9, "+")
// onePlus(10, 9, "-")
// onePlus(10, 9, "*")
// onePlus(10, 9, "/")


// Question no 5

// function square(num){
//    return num * num
// }
// console.log(square(2));

// Question no 6

// function factorail(num) {
//     let result = 1;
//     for (let i = num; i >= 1; i--) {
//         result *= i
//     }
//     return result;
// }

// console.log(factorail(8));

// Question no 7

// function counting(){
//     let start = +prompt("Enter starting number");
//     let end = +prompt("Enter a Ending number");
//     for (let i = start ; i <= end;i++){
//         document.writeln(i);

//     }

// }
// counting()

// Question no 9

// function area(width, height) {
//     return width * height
// }

// let val = area(5,6);
// console.log(val);

// Question no 10

// function palindrome() {
//     let str = +prompt("Enter a palindrome word");
//     let em = " "
//     for (let i = str.length - 1; i >= 0; i--) {
//         // console.log(str[i]);
//         em += str[i]
//     }
//     if (str == em) {
//         console.log(`${str} This is  a palindrome word`);
//     }
// }
// let val = palindrome()
// console.log(val);
// Question no 11

// function titleCase() {
//     let str = "the quick brown fox";
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
//     }
//     return words.toString().replaceAll(","," ")
// }

// let val = titleCase();
// console.log(val);

// Question no 12

// function longestWord(){
//     let str = "Web Development Tutorial";
//     console.log("Example String: ",str);
//     let words = str.split(" ");
//     console.log("Example OutPut: ",words[1]);
// }
// longestWord()


// Question no 13

// function charCount(){
//     let str = "JSResourceS.com";
//     let char ="o";
//     let count = 0 ;
//     for(let i =0 ; i < str.length;i++){
//         if(str.charAt(i) === char){
//             count++
//             console.log(`The character found in ${char} at index ${i}`);
//         }
//     }
//     console.log(`The total time is ${count} character ${char} found in`);
// }
// charCount()

