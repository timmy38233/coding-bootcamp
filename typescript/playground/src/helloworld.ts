export { };

const numA: number = 2;
const numB: number = 3;
const numC: number = 9;
const str: string = 'The quick brown fox jumps over the lazy dog';
const palindrome: string = 'racecar';

function add(a: number, b: number): number {
    return a + b;
}

console.log(`Sum of ${numA} + ${numB}: ${add(numA, numB)}`);


function countVowels(str: string): number {
    const vowels: string = 'aeiouäöü';
    let counter: number = 0;

    for (let c of str) {
        if (vowels.includes(c)) {
            counter++;
        }
    }

    return counter;
}

console.log(`The number of vowels in the string '${str}' is ${countVowels(str)}`);


function raiseToThree(num: number): number {
    return num ** 3;
}

console.log(`${numA} raised to the power of 3 is ${raiseToThree(numA)}`);


function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(`The number ${numA} is even! -> ${isEven(numA)}`);


function reverseString(str: string): string {
    let reversedStr = '';
    for (let c of str) {
        reversedStr = c + reversedStr;
    }
    return reversedStr;
}

console.log(`The string '${str}' reversed is '${reverseString(str)}'`);


function multiply(numA: number, numB: number): number {
    let result: number = 0;
    for (let i: number = 0; i < numB; i++) {
        result += numA;
    }
    return result;
}

console.log(`The product of ${numA} * ${numB} is ${multiply(numA, numB)}`);


function sumAll(...nums: number[]): number {
    let result: number = 0;
    for (let n of nums) {
        result += n;
    }
    return result;
}

console.log(`The sum of the numbers ${numA} + ${numB} + ${numC} is ${sumAll(numA, numB, numC)}`);


function squareRoot(num: number): number {
    return Math.sqrt(num);
}

console.log(`The square root of ${numC} is ${squareRoot(numC)}`);


function isPalindrome(str: string): boolean {
    let isPalindrome: boolean = true;
    for (let i: number = 0; i < (str.length / 2) && isPalindrome; i++) {
        isPalindrome = str[i] === str[str.length - i - 1];
    }
    return isPalindrome;
}

console.log(`The string '${palindrome}' is a palindrome! -> ${isPalindrome(palindrome)}`);


function fact(num: number): number {
    let result: number = 1;
    for (let i: number = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(`The factorial of ${numC} is ${fact(numC)}`);