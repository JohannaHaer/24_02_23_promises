const timeOut = (ms) => {
    return new Promise((resolve, reject) => {
        let newNum = Math.round(Math.random()*1000)
        setTimeout(() => {
            resolve(newNum)
        }, ms)
    })
}

Promise.all([timeOut(1000), timeOut(1000)]).then((values) => {
    console.log(values);
  });