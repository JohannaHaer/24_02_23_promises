const randomZahl = (num) => {
    let randomNum = Math.round(Math.random()*num)
    return randomNum
}

const generate = (num) => {
    return new Promise((resolve, reject) => {
        let gen = randomZahl(num)
        if(gen >= 6) {
            console.log(gen);
            resolve()
        } else {
            console.log(gen);
            reject()
        }
    })
}

generate(10).then(() => {
    console.log(true);
}).catch(() => {
    console.log(false);
})