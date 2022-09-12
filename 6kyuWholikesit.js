function likes(names) {
    switch (names.length) {
      case 0:
        return 'no one likes this'
      case 1:
        return names.toString() + ' likes this';
      case 2:
        return names[0].toString() + ' and ' + names[1].toString() + ' like this';
      case 3:
        return  names[0].toString() + ', ' +names[1].toString() +' and ' + names[2].toString() + ' like this';
      default:
        return `${names[0].toString()}, ${names[1].toString()} and ${names.length-2} others like this` 
    }
  }