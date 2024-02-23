const multi = (num, ms) => {
    return new Promise((resolve, reject) => {
        let num2 = num *2
        setTimeout(() => {
            resolve(num2)
            console.log(num2);
        }, ms)
    })
}

multi(1, 1000)