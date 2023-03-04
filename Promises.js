// // will start the Promises and this the best to code it for future
let addition = (arr) => {
    return new Promise((resolve, reject) => {
        let a = arr[0];
        let b = arr[1];
        if (a < 0 || b < 0) {
            reject("Pass only non nagetive numbers")
        } else {
            let sum = a + b;
            console.log("Sum is", sum);
            resolve(arr)
        }
    })
}
addition([10, 20])
    .then(result => console.log(result))
    .catch(error => console.log(error))

    const newPromise = Promise.resolve(100);
    const newPromise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolved")},2000)
            // resolve("resolved")
    })
    Promise.all([newPromise,newPromise2]).then((result)=>{
        console.log(result);
    })