function DNAStrand(dna){
    let result = [];
    for(let i = 0; i<dna.length;i++){
      if (dna[i] == "A"){
        result[i] = "T"
      }else if(dna[i] =="T"){
        result[i] = "A";
      }
      if(dna[i] == "C"){
        result[i] = "G";
      }else if(dna[i] == "G"){
        result[i] = "C";
      }
    }
    return result.join("");
  }
  
  console.log(DNAStrand("ATTGC"));