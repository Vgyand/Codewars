function findOdd(a) {
    for (let i = 0; i <= a.length; i++) {
      if (a.filter(it => it == a[i]).length !== 0 && a.filter(it => it == a[i]).length % 2 == 1) {
        return a[i]
      }
    }
  }