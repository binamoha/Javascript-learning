do {
    var annee = prompt("Entrez une année sous forme YYYY :")
  }
  while( annee.length != 4)
  
  
  annee = parseInt(annee)
  
  function EstBisextile(year){
    if (year%4 == 0){
  
      if (year%100 == 0){
  
        if(year%400 ==0){
          return true 
        }
  
        else {
          return false
        }
  
      
  
      }
      else {
        return true
      }
  
    }
    else{
      return false
    }
  
  
  }
  
  let result = EstBisextile(annee)
  
  if (result == true){
    alert("L'année "+ annee + "est Bisextile")
  }
  else {
    alert("L'année "+ annee + "n'est  pas Bisextile")
  }
  function Moyenne(listNote){
    let sumNote = 0 ;
  
    for(note of listNote){
      sumNote += note
    }
  
    return sumNote/listNote.length
  
  }
  
  function Appreciation(moyenne){
    if(moyenne > 0 && moyenne < 7){
      alert("Hideux / Votre moyenne est "+moyenne)
    }
    else if (moyenne >=7 && moyenne < 10  ){
      alert("Moche Votre moyenne est "+moyenne)
    }
    else if (moyenne >=10 && moyenne < 15){
      alert("Bien Votre moyenne est "+moyenne)
    }
    else {
      alert("Excellent ! Votre moyenne est "+moyenne)
    }
  }
  
  var tabNote = [8,7,8.5,5,17.65]
  
  
  
  let moy = Moyenne(tabNote)
  
  console.log(moy)
  
  Appreciation(moy)
  
//   Portée locale : 
// //Le let peut rentrer dans des blocs inférieurs, mais pas en sortir 

if(true){
  let x = 5
  console.log(x)
  
  if(true){
    console.log(x)
  }
}

console.log(x)



// [09:46]
// Var : portée de fonction
// Let : portée de bloc
var y = 14

console.log(y) //14

function MaFonction(y){
  
  console.log(y)//14
  
  y = 10
  console.log(y) //10
  
}

MaFonction(y)

console.log(y) //14
