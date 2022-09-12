function maskify(cc) {
    let b = cc.split("")
    let a  = [b[b.length-4],b[b.length-3],b[b.length-2],b[b.length-1]];
    a = a.join("")
    let c = [];
    cc = cc.slice(0,-4)
    let i = 0;
  
  
    while (i < cc.length){
    c[i] = "#"
  
    i++
    }
    c = c.join("")
  
    return c+a
  }