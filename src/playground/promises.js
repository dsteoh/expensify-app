const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'DS',
        //     age: 15
        // });
        resolve('First promise') 
    }, 1500);
});
console.log('before')
promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise') 
        }, 1500);
    });
}).then((str) => {
    console.log('does this run', str);
}).catch((e) =>{
    console.log(e)
});
console.log('after')