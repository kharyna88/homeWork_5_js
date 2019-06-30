// task #1 
// Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).

function convert(amount) {
    let UAH = 8;
    return amount * UAH;
}

convert(3);

// task #2
// A function which returns reversed string.

function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
reverse('abc')

// task #3
// A function which prints the stair picture of size n

function printStairs(n) {
    let stairs = '#';
    for (let i = 1; i <= n;) {
        console.log(stairs.repeat(i++));
    }

}
printStairs(3)

// task #4
// A function which returns total sum of a range

function sumRange(start, end) { 
    let sum = 0;
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

sumRange(2, 4) 

// task 5
// Write a function which returns the smallest of three numbers.

function min(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
        }else return c;
}

min(10, 5, 11)
min(3, 8, 4)


// task #7
// A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) {
    let array = str.split('');
    array.shift();
    array.unshift(str[0].toUpperCase());
    array.pop(array[array.length-1]);
    array.push(str[str.length-1].toUpperCase());
    return array.join('');
}

firstAndLastToUpper('abc') 



// task #11
//A function that when given a number n returns the n-th number in the Fibonacci Sequence

function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

fibonacci(3)
fibonacci(5) 
fibonacci(7)
