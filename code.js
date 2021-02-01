function searchNums(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("CLXDTC")
        } else if (i % 5 === 0) {
            console.log("DTC")
        } else if (i % 3 === 0) {
            console.log("CLX")
        } else {
            console.log(i)
        }
    }

}

searchNums(100)
