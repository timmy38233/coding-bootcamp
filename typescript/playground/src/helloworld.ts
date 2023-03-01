export { };

const numA: number = 2;
const numB: number = 3;
const numC: number = 9;
const numD: number = 1123;
const str: string = 'The quick brown fox jumps over the lazy dog';
const palindrome: string = 'racecar';


//Task 1
function add(a: number, b: number): number {
    return a + b;
}

console.log(`Sum of ${numA} + ${numB}: ${add(numA, numB)}`);


//Task 2
function countVowels(str: string): number {
    const vowels: string = 'aeiouäöü';
    let counter: number = 0;

    for (let c of str) {
        if (vowels.includes(c.toLowerCase())) {
            counter++;
        }
    }

    return counter;
}

console.log(`The number of vowels in the string '${str}' is ${countVowels(str)}`);


//Task 3
function raiseToThree(num: number): number {
    return num ** 3;
}

console.log(`${numA} raised to the power of 3 is ${raiseToThree(numA)}`);


//Task 4
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(`The number ${numA} is even! -> ${isEven(numA)}`);


//Task 5
function reverseString(str: string): string {
    let reversedStr = '';
    for (let c of str) {
        reversedStr = c + reversedStr;
    }
    return reversedStr;
}

console.log(`The string '${str}' reversed is '${reverseString(str)}'`);


//Task 6
function multiply(numA: number, numB: number): number {
    let result: number = 0;
    for (let i: number = 0; i < numB; i++) {
        result += numA;
    }
    return result;
}

console.log(`The product of ${numA} * ${numB} is ${multiply(numA, numB)}`);


//Task 7
function sumAll(...nums: number[]): number {
    let result: number = 0;
    for (let n of nums) {
        result += n;
    }
    return result;
}

console.log(`The sum of the numbers ${numA} + ${numB} + ${numC} is ${sumAll(numA, numB, numC)}`);


//Task 8
function squareRoot(num: number): number {
    return Math.sqrt(num);
}

console.log(`The square root of ${numC} is ${squareRoot(numC)}`);


//Task 9
function isPalindrome(str: string): boolean {
    let isPalindrome: boolean = true;
    for (let i: number = 0; i < (str.length / 2) && isPalindrome; i++) {
        isPalindrome = str[i] === str[str.length - i - 1];
    }
    return isPalindrome;
}

console.log(`The string '${palindrome}' is a palindrome! -> ${isPalindrome(palindrome)}`);


//Task 10
function fact(num: number): number {
    let result: number = 1;
    for (let i: number = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(`The factorial of ${numC} is ${fact(numC)}`);


//Task 11
function fib(n: number): number {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 2) + fib(n - 1);
}

console.log(`The ${numC}th fibonacci number is ${fib(numC)}`);


//Task 12
function factorialRecursion(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorialRecursion(n - 1);
}

console.log(`The factorial of ${numC} is ${factorialRecursion(numC)}`);


//Task 13
function first(n: number, func: (a: number) => any): any {
    return func(n * 2);
}
function second(argument: number): string {
    return `Second function called with the argument: ${argument}`;
}

console.log(first(numB, second));


//Task 14
function countTrailingZeroes(num: number, res: number = 0): number {
    if (num < 5) {
        return res;
    }
    let nextNum = Math.floor(num / 5);
    return countTrailingZeroes(nextNum, res + nextNum);
}

console.log(`The number of trailing zeroes in ${numD}! is ${countTrailingZeroes(numD)}`);


//Task 15
function raiseToPowerRec(n: number, e: number): number {
    if (e === 0) {
        return 1;
    }
    return n * raiseToPowerRec(n, e - 1);
}

console.log(`${numA} raised to the power of ${numB} is ${raiseToPowerRec(numA, numB)}`);


//Task 16
function squareAndCallCB(num: number, fn: (a: number, b: (a: number) => any) => any) {
    return fn(num ** 2, isEven)
}

function callSecondCallback(num: number, fn: (a: number) => boolean): boolean {
    return fn(num);
}

console.log(`The square of ${numA} is even! -> ${squareAndCallCB(numA, callSecondCallback)}`);


//Task 17
function reverseAndCallCB(str: string, fn: (a: string, b: (a: string) => any) => any) {
    return fn(reverseString(str), countVowels);
}

function callAnotherCallback(str: string, fn: (a: string) => number): number {
    return fn(str);
}

console.log(`The number of vowels in the reversed string of '${str}' is ${reverseAndCallCB(str, callAnotherCallback)}`);