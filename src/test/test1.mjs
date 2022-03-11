// ARRAY
const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]
console.log(numerosPares)
console.log(numerosPares, numerosImpares)

const structure = [numerosPares, numerosImpares]
console.log(structure)
const destructure = [...numerosPares,... numerosImpares]
console.log(destructure)

const [num1, num2, num3, num4] = [2, 4, 8, 16]
console.log(num1, num2, num3, num4)
const [num5, num6, num7, num8, ...outros] = [2, 4, 8, 16, 32, 3, 6, 12]
console.log(num5, num6, num7, num8, outros)

const [nome1 = 'loop'] = [0]
console.log(nome1)