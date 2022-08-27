function getTotalX(a, b) {
    // Write your code here
    let output = []
    for (let i = 1; i <= Math.max(...b); i++) {
        let mods = 0
        for (let j = 0; j < a.length; j++) {
            mods += i % a[j]
        }
        if (mods === 0) {
            for (let k = 0; k < b.length; k++) {
                mods += b[k] % i
            }
            if (mods === 0) {
                output.push(i)
            }
        }
    }
    return output.length
}
