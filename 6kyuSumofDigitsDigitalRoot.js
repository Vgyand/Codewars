function digital_root(n){
    let rezult = 0;
    n.toString().split('').map (n => {
    rezult += Number(n)
    })
    return rezult > 9 ? digital_root(rezult) : rezult;
    }