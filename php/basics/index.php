<?php

declare(strict_types=1);

$intA = 2;
$intB = 3;
$intC = 9;

$floatA = 2.17;
$floatB = 3.14;

$str = "The quick brown fox jumps over the lazzy dog.";
$pal = "racecar";


// Task 1
function add(int|float $a, int|float $b): int|float
{
    return $a + $b;
}

printf("The sum of %d + %d is %d\n", $intA, $intB, add($intA, $intB));
printf("The sum of %.2f + %.2f is %.2f\n", $floatA, $floatB, add($floatA, $floatB));


// Task 2
function countVowels(string $str): int
{
    $str_arr = str_split($str);
    $vowels = 'aeiou';
    $counter = 0;
    foreach ($str_arr as $c) {
        if (str_contains($vowels, strtolower($c))) {
            $counter++;
        }
    }
    return $counter;
}

printf("The string '%s' contains %d vowels.\n", $str, countVowels(($str)));


// Task 3
function raiseToThree(int|float $num): int|float
{
    return pow($num, 3);
}

printf("The number %d raised to the third power is %d\n", $intB, raiseToThree(($intB)));


// Task 4
function isEven(int|float $num): bool
{
    return $num % 2 == 0;
}

printf("Is the number %d even? %s\n", $intA, (isEven($intA) ? 'Yes' : 'No'));
printf("Is the number %d even? %s\n", $intB, (isEven($intB) ? 'Yes' : 'No'));


// Task 5
function reverseString(string $str): string
{
    $strReversed = '';
    for ($i =  strlen($str); $i > 0; $i--) {
        $strReversed .= $str[$i - 1];
    }
    return $strReversed;
}

printf("The string '%s' reversed is '%s'\n", $str, reverseString(($str)));


// Task 6
function multiply(int|float $a, int|float $b): int|float
{
    $result = 0;
    for ($i = 0; $i < $b; $i++) {
        $result += $a;
    }
    return $result;
}

printf("%d * %d = %d\n", $intA, $intB, multiply($intA, $intB));


// Task 7
function sumAll(int|float ...$nums): int|float
{
    $result = 0;
    foreach ($nums as $num) {
        $result += $num;
    }
    return $result;
}

printf("The sum of %g, %g and %g is %g\n", $floatA, $intB, $intC, sumAll($floatA, $intB, $intC));


// Task 8
function squareRoot(float $num): float
{
    return sqrt($num);
}

printf("The square root of %g is %g\n", $intC, squareRoot(($intC)));


// Task 9
function isPalindrome(string $str): bool
{
    $isPalindrome = true;
    for ($i = 0; $i < strlen($str) / 2 && $isPalindrome; $i++) {
        $isPalindrome = $str[$i] === $str[strlen($str) - $i - 1];
    }
    return $isPalindrome;
}

printf("Is the string '%s' a paldindrome? %s\n", $str, isPalindrome($str) ? 'Yes' : 'No');
printf("Is the string '%s' a paldindrome? %s\n", $pal, isPalindrome($pal) ? 'Yes' : 'No');


// Task 10
function fact(int $n): int
{
    $result = 1;
    for ($i = 1; $i <= $n; $i++) {
        $result *= $i;
    }
    return $result;
}

printf("The factorial of %d is %d\n", $intC, fact($intC));


// Task 11
function fib(int $n): int
{
    
    return ($n <= 1) ? $n : fib($n - 1) + fib($n - 2);
}

printf("The %d'th fibonacci number is %d\n", $intC, fib($intC));


// Task 12
function recursiveFact(int $n): int
{
    return ($n === 1) ? 1 : $n * recursiveFact($n - 1);
}

printf("The factorial of %d is %d\n", $intC, recursiveFact($intC));
