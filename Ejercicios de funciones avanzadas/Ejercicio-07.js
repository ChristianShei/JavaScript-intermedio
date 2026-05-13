function Multiplicacion(...num){
    let result = 1
    for (let numer of num)
        result *= numer
    return result

}
console.log(Multiplicacion(2, 2, 8))

function Multi(a){
    return function (b, c){
        return Multiplicacion(a, b, c)
    }
}
const pat = Multi(4)
console.log(pat(5, 10))