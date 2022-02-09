let number = 1;
while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz!!");
        number++;
        continue;
    }else if(number % 3 === 0) {
        console.log("Fizz!");
        number++;
        continue;
    }else if(number % 5 === 0) {
        console.log("Buzz!");
        number++;
        continue;
    }
    console.log(number);
    number++;
}

/*
let number = 1;
while (number <= 100) {
    console.log(number);
    number++;
}

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 100);

for (let number = 1; number <= 100; number++) {
    console.log(number);
}

let number = 0;
while (number < 5) {
    if (number === 3) {
        break;
    }
    console.log(number);
    number++;
}

let number = 0;
while (number < 5) {
    if (number === 3) {
        number++;
        continue;
    }
    console.log(number);
    number++;
}
*/