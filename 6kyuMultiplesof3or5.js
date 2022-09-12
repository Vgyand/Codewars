function solution(number) {
    let rezult = 0;
  
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        rezult += i;
      }
    }
    if (number < 0) {
      return 0;
    }
    return rezult;
  }