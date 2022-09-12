function squareDigits(num){
    let rezult = []
    num.toString().split('').forEach(dig =>{
      rezult.push(dig*dig)
    })
    return Number(rezult.join(''))
  }