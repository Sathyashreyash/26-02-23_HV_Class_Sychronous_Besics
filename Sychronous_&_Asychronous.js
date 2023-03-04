// Sychronous is executing line by lone code
// 1).
// let name = "HeroVired";
// let details = `This neme of the person is ${name}`;
// console.log(details);

// 2).
// Will start the Asychronous
// console.log("Hello");
// setTimeout(() => {console.log("Executing Set-Timeout")},2000)
// console.log("End");

// 3).
const add = (a, b) => {
    let sum = a + b;
    console.log(sum)
    return sum;
}
// add(2,2)
const sub = (a, b) => {
    let sum = a - b;
    console.log(sum)
    return sub;
}
// substraction(7,1)
const multi = (a, b) => {
    let sum = a * b;
    console.log(sum)
    return multi;
}
// multi(5,10)

// 4).
// will start the code on CallBack 
const Addition = (a, b, CallbackFunction) => {
    CallbackFunction(a, b);
}
const substraction = (a, b, CallbackFunction) => {
    CallbackFunction(a, b);
}
const Multiplication = (a, b, CallbackFunction) => {
    CallbackFunction(a, b);
}
Addition(3,3, add);
substraction(3,3, sub);
Multiplication(3,3, multi);

// 5).
// will write the code in seriesOfOperation as nested (call back Hell)this is.
const seriesOfOperation = (a, b) => {
    Addition(a, b, (a, b) => {
        console.log(a + b);
        substraction(a, b, (a, b) => {
            console.log(a - b);
            Multiplication(a, b, (a, b) => {
                console.log(a * b);
            });
        });
    });
}
seriesOfOperation(5,5)


// // 5).



